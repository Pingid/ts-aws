import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `AWS::S3Express::DirectoryBucket` resource creates an Amazon S3 directory bucket in the same AWS Region where you create the AWS CloudFormation stack.
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
  Type: 'AWS::S3Express::DirectoryBucket'
  Properties: {
    /**
     * - Specifies default encryption for a bucket using server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys (SSE-KMS). For information about default encryption for directory buckets, see [Setting and monitoring default encryption for directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-bucket-encryption.html) in the _Amazon S3 User Guide_.
     * - _Required_: No
     * - _Type_:
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-bucketencryption */
    BucketEncryption?: any | Intrinsic
    /**
     * - A name for the bucket. The bucket name must contain only lowercase letters, numbers, and hyphens (-). A directory bucket name must be unique in the chosen Availability Zone. The bucket name must also follow the format `_bucket_base_name_--_az_id_--x-s3` (for example, `_bucket_base_name_--_usw2-az1_--x-s3`). If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the bucket name. For information about bucket naming restrictions, see [Directory bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-bucket-naming-rules.html) in the _Amazon S3 User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-z0-9][a-z0-9//.//-]*[a-z0-9]$`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-bucketname */
    BucketName?: string | Intrinsic
    /**
     * - The number of Availability Zone that's used for redundancy for the bucket.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `SingleAvailabilityZone`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-dataredundancy */
    DataRedundancy: string | Intrinsic
    /**
     * - The name of the location where the bucket will be created.
     * - For directory buckets, the name of the location is the AZ ID of the Availability Zone where the bucket will be created. An example AZ ID value is `usw2-az1`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-directorybucket.html#cfn-s3express-directorybucket-locationname */
    LocationName: string | Intrinsic
  }
}
