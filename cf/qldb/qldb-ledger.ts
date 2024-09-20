import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `Tag` property type specifies Property description not available. for an [AWS::QLDB::Ledger](./aws-resource-qldb-ledger.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-ledger.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-ledger.html#cfn-qldb-ledger-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-ledger.html#cfn-qldb-ledger-tag-value */
  Value: string | Intrinsic
}

/**
 * The `AWS::QLDB::Ledger` resource specifies a new Amazon Quantum Ledger Database (Amazon QLDB) ledger in your AWS account. Amazon QLDB is a fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log owned by a central trusted authority. You can use QLDB to track all application data changes, and maintain a complete and verifiable history of changes over time.
 * For more information, see [CreateLedger](https://docs.aws.amazon.com/qldb/latest/developerguide/API_CreateLedger.html) in the _Amazon QLDB API Reference_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-ledger.html */

export interface QLDBLedger extends ResourceAttributes {
  Type: 'AWS::QLDB::Ledger'
  Properties: {
    /**
     * - Specifies whether the ledger is protected from being deleted by any user. If not defined during ledger creation, this feature is enabled (`true`) by default.
     * - If deletion protection is enabled, you must first disable it before you can delete the ledger. You can disable it by calling the `UpdateLedger` operation to set this parameter to `false`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-ledger.html#cfn-qldb-ledger-deletionprotection */
    DeletionProtection?: boolean | Intrinsic
    /**
     * - The key in AWS Key Management Service (AWS KMS) to use for encryption of data at rest in the ledger. For more information, see [Encryption at rest](https://docs.aws.amazon.com/qldb/latest/developerguide/encryption-at-rest.html) in the _Amazon QLDB Developer Guide_.
     * - Use one of the following options to specify this parameter:
     * - To specify a customer managed KMS key, you can use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with `"alias/"`. To specify a key in a different AWS account, you must use the key ARN or alias ARN.
     * - For example:
     * - For more information, see [Key identifiers (KeyId)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id) in the _AWS Key Management Service Developer Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1600`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-ledger.html#cfn-qldb-ledger-kmskey */
    KmsKey?: string | Intrinsic
    /**
     * - The name of the ledger that you want to create. The name must be unique among all of the ledgers in your AWS account in the current Region.
     * - Naming constraints for ledger names are defined in [Quotas in Amazon QLDB](https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming) in the _Amazon QLDB Developer Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `32`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-ledger.html#cfn-qldb-ledger-name */
    Name?: string | Intrinsic
    /**
     * - The permissions mode to assign to the ledger that you want to create. This parameter can have one of the following values:
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ALLOW_ALL | STANDARD`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-ledger.html#cfn-qldb-ledger-permissionsmode */
    PermissionsMode: string | Intrinsic
    /**
     * - An array of key-value pairs to apply to this resource.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-qldb-ledger-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-ledger.html#cfn-qldb-ledger-tags */
    Tags?: Tag[]
  }
}
