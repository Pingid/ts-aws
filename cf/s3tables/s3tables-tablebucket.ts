import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Configuration specifying how data should be encrypted. This structure defines the encryption algorithm and optional KMS key to be used for server-side encryption.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablebucket.html */

export interface EncryptionConfiguration {
    /**
     * - The Amazon Resource Name (ARN) of the KMS key to use for encryption. This field is required only when `sseAlgorithm` is set to `aws:kms`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `(arn:aws[-a-z0-9]*:kms:[-a-z0-9]*:[0-9]{12}:key/.+)`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablebucket.html#cfn-s3tables-tablebucket-encryptionconfiguration-kmskeyarn */
    "KMSKeyArn"?: string | Intrinsic;
    /**
     * - The server-side encryption algorithm to use. Valid values are `AES256` for S3-managed encryption keys, or `aws:kms` for AWS KMS-managed encryption keys. If you choose SSE-KMS encryption you must grant the S3 Tables maintenance principal access to your KMS key. For more information, see [Permissions requirements for S3 Tables SSE-KMS encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-kms-permissions.html).
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `AES256 | aws:kms`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablebucket.html#cfn-s3tables-tablebucket-encryptionconfiguration-ssealgorithm */
    "SSEAlgorithm"?: string | Intrinsic;
}

/**
 * The unreferenced file removal settings for your table bucket. Unreferenced file removal identifies and deletes all objects that are not referenced by any table snapshots. For more information, see the [_Amazon S3 User Guide_](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-table-buckets-maintenance.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablebucket.html */

export interface UnreferencedFileRemoval {
    /**
     * - The number of days an object can be noncurrent before Amazon S3 deletes it.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablebucket.html#cfn-s3tables-tablebucket-unreferencedfileremoval-noncurrentdays */
    "NoncurrentDays"?: number | Intrinsic;
    /**
     * - The status of the unreferenced file removal configuration for your table bucket.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Enabled | Disabled`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablebucket.html#cfn-s3tables-tablebucket-unreferencedfileremoval-status */
    "Status"?: string | Intrinsic;
    /**
     * - The number of days an object must be unreferenced by your table before Amazon S3 marks the object as noncurrent.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablebucket.html#cfn-s3tables-tablebucket-unreferencedfileremoval-unreferenceddays */
    "UnreferencedDays"?: number | Intrinsic;
}

/**
 * Creates a table bucket. For more information, see [Creating a table bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-buckets-create.html) in the _Amazon Simple Storage Service User Guide_.
 * Permissions
 * 
 * *   You must have the `s3tables:CreateTableBucket` permission to use this operation.
 *     
 * *   If you use this operation with the optional `encryptionConfiguration` parameter you must have the `s3tables:PutTableBucketEncryption` permission.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablebucket.html */

export interface S3TablesTableBucket extends ResourceAttributes {
    "Type": "AWS::S3Tables::TableBucket";
    "Properties": {
        /**
         * - Configuration specifying how data should be encrypted. This structure defines the encryption algorithm and optional KMS key to be used for server-side encryption.
         * - _Required_: No
         * - _Type_: [EncryptionConfiguration](./aws-properties-s3tables-tablebucket-encryptionconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablebucket.html#cfn-s3tables-tablebucket-encryptionconfiguration */
        "EncryptionConfiguration"?: EncryptionConfiguration;
        /**
         * - The name for the table bucket.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `3`
         * - _Maximum_: `63`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablebucket.html#cfn-s3tables-tablebucket-tablebucketname */
        "TableBucketName": string | Intrinsic;
        /**
         * - The unreferenced file removal settings for your table bucket. Unreferenced file removal identifies and deletes all objects that are not referenced by any table snapshots. For more information, see the [_Amazon S3 User Guide_](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-table-buckets-maintenance.html).
         * - _Required_: No
         * - _Type_: [UnreferencedFileRemoval](./aws-properties-s3tables-tablebucket-unreferencedfileremoval.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablebucket.html#cfn-s3tables-tablebucket-unreferencedfileremoval */
        "UnreferencedFileRemoval"?: UnreferencedFileRemoval;
    };
}