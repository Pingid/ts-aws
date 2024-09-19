export type Resource = Extract<Type, { type: 'Map' }> & {
  types: Extract<Type, { type: 'Map' }>[]
}

export type Property = {
  key: string
  description: string
  link: string
  required: boolean
  type: Type
}

export type Type =
  | { type: 'String' }
  | { type: 'Integer' }
  | { type: 'Boolean' }
  | { type: 'Json' }
  | { type: 'Map'; description: string; link: string; name: string; properties: Property[] }
  | { type: 'Ref'; ref: string }
  | { type: 'List'; of: Type }
  | { type: 'Record'; of: Type }
