import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A container of a key value name pair.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantslocation.html */

export interface Tag {
  /**
   * - Name of the object key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantslocation.html#cfn-s3-accessgrantslocation-tag-key */
  Key: string | Intrinsic
  /**
   * - Value of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantslocation.html#cfn-s3-accessgrantslocation-tag-value */
  Value: string | Intrinsic
}

/**
 * The `AWS::S3::AccessGrantsLocation` resource creates the S3 data location that you would like to register in your S3 Access Grants instance. Your S3 data must be in the same Region as your S3 Access Grants instance. The location can be one of the following:
 * *   The default S3 location `s3://`
 *
 * *   A bucket - `S3://<bucket-name>`
 *
 * *   A bucket and prefix - `S3://<bucket-name>/<prefix>`
 * When you register a location, you must include the IAM role that has permission to manage the S3 location that you are registering. Give S3 Access Grants permission to assume this role [using a policy](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-grants-location.html). S3 Access Grants assumes this role to manage access to the location and to vend temporary credentials to grantees or client applications.
 * Permissions
 *
 * You must have the `s3:CreateAccessGrantsLocation` permission to use this resource.
 *
 * Additional Permissions
 *
 * You must also have the following permission for the specified IAM role: `iam:PassRole`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantslocation.html */

export interface S3AccessGrantsLocation extends ResourceAttributes {
  Type: 'AWS::S3::AccessGrantsLocation'
  Properties: {
    /**
     * - The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantslocation.html#cfn-s3-accessgrantslocation-iamrolearn */
    IamRoleArn?: string | Intrinsic
    /**
     * - The S3 URI path to the location that you are registering. The location scope can be the default S3 location `s3://`, the S3 path to a bucket, or the S3 path to a bucket and prefix. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the `engineering/` prefix or object key names that start with the `marketing/campaigns/` prefix.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantslocation.html#cfn-s3-accessgrantslocation-locationscope */
    LocationScope?: string | Intrinsic
    /**
     * - The AWS resource tags that you are adding to the S3 Access Grants location. Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-s3-accessgrantslocation-tag.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantslocation.html#cfn-s3-accessgrantslocation-tags */
    Tags?: Tag[]
  }
}
