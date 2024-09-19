import ts from 'typescript'
import { Property, Resource, Type } from './types'

export const resource = (name: string, r: Resource) => {
  const node = ts.factory.createInterfaceDeclaration(
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createIdentifier(name),
    [],
    undefined,
    [
      ts.factory.createPropertySignature(
        undefined,
        ts.factory.createStringLiteral('Type'),
        undefined,
        ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(r.name)),
      ),
      ts.factory.createPropertySignature(
        undefined,
        ts.factory.createStringLiteral('Properties'),
        undefined,
        ts.factory.createTypeLiteralNode(r.properties.reduce((a, x) => [...a, ...property(x)], [] as ts.TypeElement[])),
      ),
    ],
  )

  const types = r.types.map((x) => {
    const node = ts.factory.createInterfaceDeclaration(
      [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      ts.factory.createIdentifier(x.name),
      [],
      undefined,
      x.properties.map((x) => property(x)).flat(),
    )
    return [comment(x), node] as const
  })

  return [...types.flat(), comment(r), node]
  // [...r.types.map((x) => map(x)), map(r)]
}

const comment = (p: { description: string; link?: string }) => {
  let comment = p.description.replace(new RegExp(`\\*/`, 'gmi'), '*')
  // comment += `\n@see ${p.link}`
  return ts.factory.createJSDocComment(comment) as any as ts.TypeElement
}

const property = (p: Property) => {
  const node = ts.factory.createPropertySignature(
    undefined,
    ts.factory.createStringLiteral(p.key),
    p.required ? undefined : ts.factory.createToken(ts.SyntaxKind.QuestionToken),
    type(p.type),
  )
  return [comment(p), node] as const
}

const type = (tp: Type): ts.TypeNode => {
  const keyword = (kind: ts.KeywordTypeSyntaxKind) =>
    ts.factory.createUnionTypeNode([
      ts.factory.createKeywordTypeNode(kind),
      ts.factory.createTypeReferenceNode('Intrinsic'),
    ])

  if (tp.type === 'Integer') return keyword(ts.SyntaxKind.NumberKeyword)
  if (tp.type === 'String') return keyword(ts.SyntaxKind.StringKeyword)
  if (tp.type === 'Boolean') return keyword(ts.SyntaxKind.BooleanKeyword)
  if (tp.type === 'Json') return keyword(ts.SyntaxKind.AnyKeyword)

  if (tp.type === 'List') return ts.factory.createArrayTypeNode(type(tp.of))
  if (tp.type === 'Record') {
    return ts.factory.createTypeReferenceNode('Record', [
      ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword), // Key type
      type(tp.of),
    ])
  }
  if (tp.type === 'Map') {
    return ts.factory.createTypeLiteralNode(
      tp.properties.reduce((a, x) => [...a, ...property(x)], [] as ts.TypeElement[]),
    )
  }
  if (tp.type === 'Ref') return ts.factory.createTypeReferenceNode(tp.ref)

  throw new Error(`Unknown type ${(tp as any).type}`)
}

export const print = (node: ts.Node[], filename?: string) => {
  const file = ts.createSourceFile(filename || 'test.ts', '', ts.ScriptTarget.ESNext, true)
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed, removeComments: false })
  return node.map((x) => printer.printNode(ts.EmitHint.Unspecified, x, file)).join('\n\n')
}
