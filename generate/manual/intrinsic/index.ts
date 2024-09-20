export type Base64 = { 'Fn::Base64': string }

export type Cidr = { 'Fn::Cidr': [string, string, string] }

export type FindInMap = { 'Fn::FindInMap': [MapName: string, TopLevelKey: string | Intrinsic, SecondLevelKey: string] }

export type GetAtt = { 'Fn::GetAtt': [logicalNameOfResource: string | Intrinsic, attributeName: string | Intrinsic] }

export type GetAZs = { 'Fn::GetAZs': string }

export type ImportValue = { 'Fn::ImportValue': string | Intrinsic }

export type Join = { 'Fn::Join': [delimiter: string, ...(string | Intrinsic)[]] }

export type Select = { 'Fn::Select': [index: string, listOfObjects: any[] | Intrinsic] }

export type Split = { 'Fn::Split': [delimiter: string, string | Intrinsic] }

export type Sub = { 'Fn::Sub': string | [string, Record<string, string | Intrinsic> | string | Intrinsic] }

export type Transform = { 'Fn::Transform': { Name: string; Parameters: Record<string, string | Intrinsic> } }

export type Ref = { Ref: string | Intrinsic }

export type Intrinsic =
  | Base64
  | Cidr
  | FindInMap
  | GetAtt
  | GetAZs
  | ImportValue
  | Join
  | Select
  | Split
  | Sub
  | Transform
  | Ref
