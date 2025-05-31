import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Describes the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied. For more information, see [PutBucketEncryption](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTencryption.html) in the _Amazon S3 API Reference_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html */

export interface ServerSideEncryptionByDefault {
    /**
     * - AWS Key Management Service (KMS) customer managed key ID to use for the default encryption. This parameter is allowed only if `SSEAlgorithm` is set to `aws:kms`.
     * - You can specify this parameter with the key ID or the Amazon Resource Name (ARN) of the KMS key. You can’t use the key alias of the KMS key.
     * - If you are using encryption with cross-account or AWS service operations, you must use a fully qualified KMS key ARN. For more information, see [Using encryption for cross-account operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-bucket-encryption.html#s3-express-bucket-encryption-update-bucket-policy).
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-serversideencryptionbydefault-kmsmasterkeyid */
    "KMSMasterKeyID"?: string | Intrinsic;
    /**
     * - Server-side encryption algorithm to use for the default encryption.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `aws:kms | AES256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-serversideencryptionbydefault-ssealgorithm */
    "SSEAlgorithm": string | Intrinsic;
}

/**
 * Specifies the default server-side encryption configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html */

export interface ServerSideEncryptionRule {
    /**
     * - Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. S3 Bucket Keys are always enabled for `GET` and `PUT` operations on a directory bucket and can’t be disabled. It's only allowed to set the `BucketKeyEnabled` element to `true`.
     * - S3 Bucket Keys aren't supported, when you copy SSE-KMS encrypted objects from general purpose buckets to directory buckets, from directory buckets to general purpose buckets, or between directory buckets, through [CopyObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html), [UploadPartCopy](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UploadPartCopy.html), [the Copy operation in Batch Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-objects-Batch-Ops), or [the import jobs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-import-job). In this case, Amazon S3 makes a call to AWS KMS every time a copy request is made for a KMS-encrypted object.
     * - For more information, see [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-UsingKMSEncryption.html#s3-express-sse-kms-bucket-keys) in the _Amazon S3 User Guide_.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-serversideencryptionrule-bucketkeyenabled */
    "BucketKeyEnabled"?: boolean | Intrinsic;
    /**
     * - Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.
     * - _Required_: No
     * - _Type_: [ServerSideEncryptionByDefault](./aws-properties-s3express-directorybucket-serversideencryptionbydefault.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-serversideencryptionrule-serversideencryptionbydefault */
    "ServerSideEncryptionByDefault"?: ServerSideEncryptionByDefault;
}

/**
 * Specifies default encryption for a bucket using server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys (SSE-KMS). For information about default encryption for directory buckets, see [Setting and monitoring default encryption for directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-bucket-encryption.html) in the _Amazon S3 User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html */

export interface BucketEncryption {
    /**
     * - Specifies the default server-side-encryption configuration.
     * - _Required_: Yes
     * - _Type_: Array of [ServerSideEncryptionRule](./aws-properties-s3express-directorybucket-serversideencryptionrule.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-bucketencryption-serversideencryptionconfiguration */
    "ServerSideEncryptionConfiguration": ServerSideEncryptionRule[];
}

/**
 * Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. For more information, see [Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config) in the _Amazon S3 User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html */

export interface AbortIncompleteMultipartUpload {
    /**
     * - Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-abortincompletemultipartupload-daysafterinitiation */
    "DaysAfterInitiation": number | Intrinsic;
}

/**
 * Specifies lifecycle rules for an Amazon S3 bucket. For more information, see [Put Bucket Lifecycle Configuration](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlifecycle.html) in the _Amazon S3 API Reference_. For examples, see [Put Bucket Lifecycle Configuration Examples](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html#API_PutBucketLifecycleConfiguration_Examples).
 * You must specify at least one of the following properties: `AbortIncompleteMultipartUpload`, or `ExpirationInDays`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html */

export interface Rule {
    /**
     * - Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload.
     * - _Required_: No
     * - _Type_: [AbortIncompleteMultipartUpload](./aws-properties-s3express-directorybucket-abortincompletemultipartupload.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-rule-abortincompletemultipartupload */
    "AbortIncompleteMultipartUpload"?: AbortIncompleteMultipartUpload;
    /**
     * - Indicates the number of days after creation when objects are deleted from Amazon S3 and Amazon S3 Glacier. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-rule-expirationindays */
    "ExpirationInDays"?: number | Intrinsic;
    /**
     * - Unique identifier for the rule. The value can't be longer than 255 characters.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-rule-id */
    "Id"?: string | Intrinsic;
    /**
     * - Specifies the minimum object size in bytes for this rule to apply to. Objects must be larger than this value in bytes. For more information about size based rules, see [Lifecycle configuration using size-based rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html#lc-size-rules) in the _Amazon S3 User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[0-9]+`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-rule-objectsizegreaterthan */
    "ObjectSizeGreaterThan"?: string | Intrinsic;
    /**
     * - Specifies the maximum object size in bytes for this rule to apply to. Objects must be smaller than this value in bytes. For more information about sized based rules, see [Lifecycle configuration using size-based rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html#lc-size-rules) in the _Amazon S3 User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[0-9]+`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-rule-objectsizelessthan */
    "ObjectSizeLessThan"?: string | Intrinsic;
    /**
     * - Object key prefix that identifies one or more objects to which this rule applies.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-rule-prefix */
    "Prefix"?: string | Intrinsic;
    /**
     * - If `Enabled`, the rule is currently being applied. If `Disabled`, the rule is not currently being applied.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `Enabled | Disabled`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-rule-status */
    "Status": string | Intrinsic;
}

/**
 * Container for lifecycle rules. You can add as many as 1000 rules.
 * For more information see, [Creating and managing a lifecycle configuration for directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-objects-lifecycle.html          ) in the _Amazon S3 User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html */

export interface LifecycleConfiguration {
    /**
     * - A lifecycle rule for individual objects in an Amazon S3 Express bucket.
     * - _Required_: Yes
     * - _Type_: Array of [Rule](./aws-properties-s3express-directorybucket-rule.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-lifecycleconfiguration-rules */
    "Rules": Rule[];
}

/**
 * The `AWS::S3Express::DirectoryBucket` resource defines an Amazon S3 directory bucket in the same AWS Region where you create the AWS CloudFormation stack.
 * To control how AWS CloudFormation handles the bucket when the stack is deleted, you can set a deletion policy for your bucket. You can choose to _retain_ the bucket or to _delete_ the bucket. For more information, see [DeletionPolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html).
 * ###### Important
 * 
 * You can only delete empty buckets. Deletion fails for buckets that have contents.
 * Permissions
 * 
 * The required permissions for CloudFormation to use are based on the operations that are performed on the stack.
 * 
 * *   Create
 *     
 *     *   s3express:CreateBucket
 *         
 *     *   s3express:ListAllMyDirectoryBuckets
 *         
 *     
 * *   Read
 *     
 *     *   s3express:ListAllMyDirectoryBuckets
 *         
 *     *   ec2:DescribeAvailabilityZones
 *         
 *     
 * *   Delete
 *     
 *     *   s3express:DeleteBucket
 *         
 *     *   s3express:ListAllMyDirectoryBuckets
 *         
 *     
 * *   List
 *     
 *     *   s3express:ListAllMyDirectoryBuckets
 *         
 *     
 * *   PutBucketEncryption
 *     
 *     *   s3express:PutEncryptionConfiguration
 *         
 *     *   To set a directory bucket default encryption with SSE-KMS, you must also have the kms:GenerateDataKey and kms:Decrypt permissions in IAM identity-based policies and AWS KMS key policies for the target AWS KMS key.
 *         
 *     
 * *   GetBucketEncryption
 *     
 *     *   s3express:GetBucketEncryption
 *         
 *     
 * *   DeleteBucketEncryption
 *     
 *     *   s3express:PutEncryptionConfiguration
 * The following operations are related to `AWS::S3Express::DirectoryBucket`:
 * *   [CreateBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html)
 *     
 * *   [ListDirectoryBuckets](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListDirectoryBuckets.html)
 *     
 * *   [DeleteBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html)
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html */

export interface S3ExpressDirectoryBucket extends ResourceAttributes {
    "Type": "AWS::S3Express::DirectoryBucket";
    "Properties": {
        /**
         * - Specifies default encryption for a bucket using server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys (SSE-KMS). For information about default encryption for directory buckets, see [Setting and monitoring default encryption for directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-bucket-encryption.html) in the _Amazon S3 User Guide_.
         * - _Required_: No
         * - _Type_: [BucketEncryption](./aws-properties-s3express-directorybucket-bucketencryption.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-bucketencryption */
        "BucketEncryption"?: BucketEncryption;
        /**
         * - A name for the bucket. The bucket name must contain only lowercase letters, numbers, and hyphens (-). A directory bucket name must be unique in the chosen Zone (Availability Zone or Local Zone). The bucket name must also follow the format `_bucket_base_name_--_zone_id_--x-s3` (for example, `_bucket_base_name_--_usw2-az1_--x-s3`). If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the bucket name. For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the _Amazon S3 User Guide_.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-z0-9][a-z0-9//.//-]*[a-z0-9]$`
         * - _Maximum_: `63`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-bucketname */
        "BucketName"?: string | Intrinsic;
        /**
         * - The number of Zone (Availability Zone or Local Zone) that's used for redundancy for the bucket.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `SingleAvailabilityZone | SingleLocalZone`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-dataredundancy */
        "DataRedundancy": string | Intrinsic;
        /**
         * - Container for lifecycle rules. You can add as many as 1000 rules.
         * - For more information see, [Creating and managing a lifecycle configuration for directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-objects-lifecycle.html          ) in the _Amazon S3 User Guide_.
         * - _Required_: No
         * - _Type_: [LifecycleConfiguration](./aws-properties-s3express-directorybucket-lifecycleconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-lifecycleconfiguration */
        "LifecycleConfiguration"?: LifecycleConfiguration;
        /**
         * - The name of the location where the bucket will be created.
         * - For directory buckets, the name of the location is the Zone ID of the Availability Zone (AZ) or Local Zone (LZ) where the bucket will be created. An example AZ ID value is `usw2-az1`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-locationname */
        "LocationName": string | Intrinsic;
    };
}