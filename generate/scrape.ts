import path from 'path'

import { fetch_dom, resolve_url } from './util'

const aws_template_resource_type_ref = `https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html`

export const resource_list = async () => {
  const dom = await fetch_dom(aws_template_resource_type_ref)
  const links = Array.from(dom.document.querySelectorAll('.highlights > ul > li > a'))
  const all = await Promise.all(
    links
      .filter((x: any) => x.href.startsWith('./AWS'))
      .map(async (x: any) => {
        const dom = await fetch_dom(resolve_url(aws_template_resource_type_ref, x.href))
        const namespace = path.parse(x.href).name.replace('AWS_', '')
        const items = Array.from(dom.document.querySelectorAll('.itemizedlist > ul > li a'))
        return {
          namespace: namespace.toLowerCase(),
          pages: items
            .map((x: any) => ({
              url: resolve_url(aws_template_resource_type_ref, x.href),
              namespace: namespace.toLowerCase(),
              name: x.textContent,
            }))
            .filter((x) => new RegExp(`AWS::${namespace}::`).test(x.name)),
        }
      }),
  )
  return all
}
