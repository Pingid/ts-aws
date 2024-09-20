import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `AWS::KMS::Alias` resource specifies a display name for a [KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys). You can use an alias to identify a KMS key in the AWS KMS console, in the [DescribeKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html) operation, and in [cryptographic operations](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations), such as [Decrypt](https://docs.aws.amazon.com/kms/latest/APIReference/API_Decrypt.html) and [GenerateDataKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKey.html).
 * ###### Note
 *
 * Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see [ABAC for AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/abac.html) in the _AWS Key Management Service Developer Guide_.
 * Using an alias to refer to a KMS key can help you simplify key management. For example, an alias in your code can be associated with different KMS keys in different AWS Regions. For more information, see [Using aliases](https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html) in the _AWS Key Management Service Developer Guide_.
 * When specifying an alias, observe the following rules.
 * *   Each alias is associated with one KMS key, but multiple aliases can be associated with the same KMS key.
 *
 * *   The alias and its associated KMS key must be in the same AWS account and Region.
 *
 * *   The alias name must be unique in the AWS account and Region. However, you can create aliases with the same name in different AWS Regions. For example, you can have an `alias/projectKey` in multiple Regions, each of which is associated with a KMS key in its Region.
 *
 * *   Each alias name must begin with `alias/` followed by a name, such as `alias/exampleKey`. The alias name can contain only alphanumeric characters, forward slashes (/), underscores (\_), and dashes (-). Alias names cannot begin with `alias/aws/`. That alias name prefix is reserved for [AWS managed keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk).
 * **Regions**
 * AWS KMS CloudFormation resources are available in all AWS Regions in which AWS KMS and AWS CloudFormation are supported.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-alias.html */

export interface KMSAlias extends ResourceAttributes {
  Type: 'AWS::KMS::Alias'
  Properties: {
    /**
     * - Specifies the alias name. This value must begin with `alias/` followed by a name, such as `alias/ExampleAlias`.
     * - The alias must be string of 1-256 characters. It can contain only alphanumeric characters, forward slashes (/), underscores (\_), and dashes (-). The alias name cannot begin with `alias/aws/`. The `alias/aws/` prefix is reserved for [AWS managed keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk).
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(alias/)[a-zA-Z0-9:/_-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-alias.html#cfn-kms-alias-aliasname */
    AliasName: string | Intrinsic
    /**
     * - Associates the alias with the specified [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk) . The KMS key must be in the same AWS account and Region.
     * - A valid key ID is required. If you supply a null or empty string value, this operation returns an error.
     * - For help finding the key ID and ARN, see [Finding the key ID and ARN](https://docs.aws.amazon.com/kms/latest/developerguide/viewing-keys.html#find-cmk-id-arn) in the _AWS Key Management Service Developer Guide_.
     * - Specify the key ID or the key ARN of the KMS key.
     * - For example:
     * - To get the key ID and key ARN for a KMS key, use [ListKeys](https://docs.aws.amazon.com/kms/latest/APIReference/API_ListKeys.html) or [DescribeKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html).
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-alias.html#cfn-kms-alias-targetkeyid */
    TargetKeyId: string | Intrinsic
  }
}
