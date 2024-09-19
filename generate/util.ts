import { parseHTML } from 'linkedom'

import fs from 'node:fs'
import path from 'node:path'

export const resolve_url = (page_url: string, link: string) => {
  if (link.startsWith('http')) return link
  const url = new URL(page_url)
  if (link.startsWith('./')) {
    if (url.pathname.endsWith('.html')) return `${url.origin}${path.join(path.parse(url.pathname).dir, link)}`
    return `${url.origin}${path.join(url.pathname, link)}`
  }
  return path.join(url.origin, link)
}

let cache_enabled = false
export const enable_cache = (x: boolean) => (cache_enabled = x)

export const fetch_dom = async (url: string) => {
  const dir_safe = url.replace(/[^a-z0-9]/gi, '_')
  const file = `./cache/${dir_safe}`
  if (cache_enabled) {
    if (fs.existsSync(file)) {
      const text = fs.readFileSync(file, 'utf8')
      return parseHTML(text)
    }
  }
  const result = await fetch(url)
  if (!result.ok) throw new Error(`Failed to fetch ${url}`)
  const text = await result.text()
  if (cache_enabled) await fs.promises.writeFile(file, text)
  return parseHTML(text)
}

export const clear_page = (url: string) => {
  const dir_safe = url.replace(/[^a-z0-9]/gi, '_')
  const file = `./cache/${dir_safe}`
  if (fs.existsSync(file)) fs.unlinkSync(file)
}

export const retry = <T>(attempts: number, f: () => Promise<T>): Promise<T> => {
  return f().catch((e) => {
    if (attempts === 1) return Promise.reject(e)
    console.warn(`Failed attempt: ${e.message}`)
    return retry(attempts - 1, f)
  })
}

export const defined = <T>(x: T): x is Exclude<T, undefined | null | void> => x !== undefined && x !== null
