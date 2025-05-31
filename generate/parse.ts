import Turndown from 'turndown'

import { Property, Resource, Type } from './types.js'
import { fetch_dom, resolve_url } from './util.js'

const turndown = new Turndown()

type Context = {
  page_url: string
  resolved: Record<string, string>
  types: Record<string, Extract<Type, { type: 'Map' }>>
}
type Elem = Element | Document

export const scrape_resource = async (page_url: string): Promise<Resource> => {
  const dom = await fetch_dom(page_url)
  const ctx: Context = { page_url, resolved: {}, types: {} }
  const result = await scrape_type(ctx, dom.document)

  return { ...result, types: Object.values(ctx.types) }
}

export const scrape_type = async (ctx: Context, root: Elem): Promise<Extract<Type, { type: 'Map' }>> => {
  const name = root.querySelector('h1')?.innerText.split(' ').slice(-1)?.[0]
  if (!name) return Promise.reject(err(ctx, new Error('Missing name')))

  let description = ''
  let elem = root.querySelector('.awsdocs-page-header-container')?.nextElementSibling
  while (elem) {
    if (elem.nodeName.startsWith('H')) break
    description += turndown.turndown(elem.innerHTML) + '\n'
    elem = elem.nextElementSibling
  }
  description += `\n@see ${ctx.page_url}`

  const props = await scrape_properties(ctx, root)
  return { type: 'Map', name, description, link: ctx.page_url, properties: props }
}

const scrape_properties = async (ctx: Context, root: Elem): Promise<Property[]> => {
  const elem_properties_title = Array.from(root.querySelectorAll('h2')).find((x) => x.textContent === 'Properties')
  if (!elem_properties_title) {
    console.warn(`No properties: ${ctx.page_url}`)
    return []
  }

  return Promise.all(
    Array.from(
      elem_properties_title.nextElementSibling?.querySelectorAll('.variablelist > dl > dt > .term > code') ?? [],
    ).map((x) => scrape_property(ctx, x.parentElement!.parentElement!)),
  )
}

export const scrape_property = async (ctx: Context, root: Element): Promise<Property> => {
  const key = root.querySelector('code')?.innerText

  let description = ''
  let required = false
  let type: Type | null = null

  const parts = Array.from((root.nextElementSibling as HTMLElement).children).filter((x) => x.nodeName === 'P')

  for (const part of parts) {
    const text = part.textContent?.trim()
    description += '- ' + turndown.turndown(part.innerHTML) + '\n'
    if (text?.startsWith('Required: Yes')) required = true
    if (text?.startsWith('Type: ')) type = await property_property_type(ctx, part)
  }

  if (!type) {
    type = { type: 'Json' }
    console.warn(`No Type: ${ctx.page_url}\nMissing at: (${key})`)
  }

  description += ''
  // if (type.type === 'Ref') description += `\n@type { ${type.ref} }`
  description += `\n@see ${ctx.page_url}#${root.id}`

  return { key: key!, description, type, link: `${ctx.page_url}#${root.id}`, required }
}

export const property_property_type = async (ctx: Context, root: Elem): Promise<Type> => {
  const name = (root.textContent?.replace('Type: ', '') ?? '').trim()

  if (name === 'Integer') return { type: 'Integer' }
  if (name === 'Array of Integer') return { type: 'List', of: { type: 'Integer' } }
  if (name === 'Object of Integer') return { type: 'Record', of: { type: 'Integer' } }

  if (name === 'Number') return { type: 'Integer' }
  if (name === 'Array of Number') return { type: 'List', of: { type: 'Integer' } }
  if (name === 'Object of Number') return { type: 'Record', of: { type: 'Integer' } }

  if (name === 'String') return { type: 'String' }
  if (name === 'Array of String') return { type: 'List', of: { type: 'String' } }
  if (name === 'Object of String') return { type: 'Record', of: { type: 'String' } }

  if (name === 'Boolean') return { type: 'Boolean' }
  if (name === 'Array of Boolean') return { type: 'List', of: { type: 'Boolean' } }
  if (name === 'Object of Boolean') return { type: 'Record', of: { type: 'Boolean' } }

  if (name === 'Json') return { type: 'Json' }
  if (name === 'Object' || name === 'Object of Object') return { type: 'Record', of: { type: 'Json' } }
  if (name === 'Object of Array') return { type: 'Record', of: { type: 'List', of: { type: 'Json' } } }
  if (name === 'Array of Array') return { type: 'List', of: { type: 'List', of: { type: 'Json' } } }
  if (name === 'Array of Json') return { type: 'List', of: { type: 'Json' } }
  if (name === 'Array of Object') return { type: 'List', of: { type: 'Record', of: { type: 'Json' } } }

  const link = root.querySelector('a')?.href
  if (!link) return Promise.reject(err(ctx, new Error(`Type missing link: (${name})`)))

  const typeName = name.split(' ').slice(-1)[0]

  if (ctx.resolved[typeName]) {
    if (name.startsWith('Array of')) return { type: 'List', of: { type: 'Ref', ref: typeName } }
    if (name.startsWith('Object of')) return { type: 'Record', of: { type: 'Ref', ref: typeName } }
    return { type: 'Ref', ref: typeName }
  }
  ctx.resolved[typeName] = link
  const page_url = resolve_url(ctx.page_url, link)
  const dom = await fetch_dom(page_url)
  ctx.types[typeName] = await scrape_type(Object.assign({ page_url }, ctx), dom.document)
  ctx.types[typeName].name = typeName
  if (name.startsWith('Array of')) return { type: 'List', of: { type: 'Ref', ref: typeName } }
  if (name.startsWith('Object of')) return { type: 'Record', of: { type: 'Ref', ref: typeName } }
  return { type: 'Ref', ref: typeName }
}

const err = (ctx: Context, err: Error) => {
  console.error(ctx.page_url, err.message)
  return err
}
