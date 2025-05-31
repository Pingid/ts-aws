import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates a new maintenance configuration or replaces an existing table bucket policy for a table bucket. For more information, see [Adding a table bucket policy](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-bucket-policy.html#table-bucket-policy-add) in the _Amazon Simple Storage Service User Guide_.
 * Permissions
 * 
 * You must have the `s3tables:PutTableBucketPolicy` permission to use this operation.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablebucketpolicy.html */

export interface S3TablesTableBucketPolicy extends ResourceAttributes {
    "Type": "AWS::S3Tables::TableBucketPolicy";
    "Properties": {
        /**
         * - The bucket policy JSON for the table bucket.
         * - _Required_: Yes
         * - _Type_: Json
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablebucketpolicy.html#cfn-s3tables-tablebucketpolicy-resourcepolicy */
        "ResourcePolicy": any | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the table bucket.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `(arn:aws[-a-z0-9]*:[a-z0-9]+:[-a-z0-9]*:[0-9]{12}:bucket/[a-z0-9_-]{3,63})`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3tables-tablebucketpolicy.html#cfn-s3tables-tablebucketpolicy-tablebucketarn */
        "TableBucketARN": string | Intrinsic;
    };
}