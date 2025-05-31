# AWS Typescript Types

Typescript types for aws cloudformation resources. The types are generated from the aws documentation.

## Usage

```bash
npm install ts-aws
```

```typescript
import { CfResource } from 'ts-aws'

const Resources = {
  MyFunction: {
    Type: 'AWS::Lambda::Function',
    Properties: {
      Handler: 'index.handler',
      Role: { 'Fn::GetAtt': ['Role', 'Arn'] },
      Code: { S3Bucket: 'FunctionBucket' },
      Environment: { Variables: { BUCKET: { Ref: 'MyBucket' } } },
    },
  },
  MyBucket: {
    Type: 'AWS::S3::Bucket',
    Properties: { BucketName: 'my-bucket' },
  },
} satisfies Record<string, CfResource>
```
