import fs from 'fs'
import fse from 'fs-extra'
import path from 'path'

import * as parse from './parse'
import * as scrape from './scrape'
import * as ts from './ts'
import { defined, enable_cache, retry } from './util'

const main = async () => {
  enable_cache(true) // Enable caching to speed up development
  await generate_cf('./cf')
  let index = `export type * as cf from './cf/index.js'`
  await write('index.ts', index)
}

const generate_cf = async (root: string) => {
  const list = await scrape.resource_list()

  let exports: { namespace: string; refs: string[] }[] = []

  await fse.copy(path.join(__dirname, 'manual'), path.join(root), { overwrite: true })

  for (const item of list) {
    const results = await Promise.all(
      item.pages.map((p) =>
        retry(5, () => generate_page(root, item.namespace, p.url)).catch((e) =>
          console.error(`Failed: ${p.url}\n\n${e.message}`, e),
        ),
      ),
    )
    const successfull = results.filter(defined)
    const index = successfull
      .map((x) => `export type { ${x.ref_name} } from './${path.parse(x.file_name).name}'`)
      .join('\n')
    await write(path.join(root, item.namespace, 'index.ts'), index)
    exports.push({ namespace: item.namespace, refs: successfull.map((x) => x.ref_name) })
  }

  const imports = exports.map((x) => `import type { ${x.refs.join(', ')} } from './${x.namespace}/index.js'`).join('\n')

  const exp = exports.map((x) => `export type * as ${x.namespace} from './${x.namespace}/index.js'`).join('\n')

  const cf = `export type CfResource = ${exports
    .map((y) => y.refs)
    .flat()
    .join(' | ')}`
  await write(path.join(root, 'index.ts'), `${imports}\n${exp}\n\n${cf}`)

  return ['CfResource']
}

const generate_page = async (root: string, namespace: string, page_url: string) => {
  const res = await parse.scrape_resource(page_url)
  const ref_name = res.name.replace('AWS::', '').replace('::', '')
  const file_name = `${res.name.toLowerCase().replace('aws::', '').replace(/::/, '-')}.ts`
  const pth = path.join(root, namespace, file_name)
  let content = `import type { Intrinsic } from '../intrinsic/index.js'\n`
  content += `import type { ResourceAttributes } from '../attributes/index.js'\n`
  content += ts.print(ts.resource(ref_name, res), pth)
  await write(pth, content)
  return { ref_name, file_name }
}

const write = async (filename: string, content: string) => {
  if (!fs.existsSync(path.dirname(filename))) fs.mkdirSync(path.dirname(filename), { recursive: true })
  await fs.promises.writeFile(filename, content)
}

main()
