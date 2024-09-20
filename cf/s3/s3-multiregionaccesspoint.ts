import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The PublicAccessBlock configuration that you want to apply to this Amazon S3 Multi-Region Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers an object public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the _Amazon S3 User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html */

export interface PublicAccessBlockConfiguration {
  /**
   * - Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket and objects in this bucket. Setting this element to `TRUE` causes the following behavior:
   * - Enabling this setting doesn't affect existing policies or ACLs.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html#cfn-s3-multiregionaccesspoint-publicaccessblockconfiguration-blockpublicacls */
  BlockPublicAcls?: boolean | Intrinsic
  /**
   * - Specifies whether Amazon S3 should block public bucket policies for this bucket. Setting this element to `TRUE` causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access.
   * - Enabling this setting doesn't affect existing bucket policies.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html#cfn-s3-multiregionaccesspoint-publicaccessblockconfiguration-blockpublicpolicy */
  BlockPublicPolicy?: boolean | Intrinsic
  /**
   * - Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket. Setting this element to `TRUE` causes Amazon S3 to ignore all public ACLs on this bucket and objects in this bucket.
   * - Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html#cfn-s3-multiregionaccesspoint-publicaccessblockconfiguration-ignorepublicacls */
  IgnorePublicAcls?: boolean | Intrinsic
  /**
   * - Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to `TRUE` restricts access to this bucket to only AWS service principals and authorized users within this account if the bucket has a public policy.
   * - Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html#cfn-s3-multiregionaccesspoint-publicaccessblockconfiguration-restrictpublicbuckets */
  RestrictPublicBuckets?: boolean | Intrinsic
}

/**
 * A bucket associated with a specific Region when creating Multi-Region Access Points.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html */

export interface Region {
  /**
   * - The name of the associated bucket for the Region.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-z0-9][a-z0-9//.//-]*[a-z0-9]$`
   * - _Minimum_: `3`
   * - _Maximum_: `63`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html#cfn-s3-multiregionaccesspoint-region-bucket */
  Bucket: string | Intrinsic
  /**
   * - The AWS account ID that owns the Amazon S3 bucket that's associated with this Multi-Region Access Point.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[0-9]{12}$`
   * - _Minimum_: `12`
   * - _Maximum_: `12`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html#cfn-s3-multiregionaccesspoint-region-bucketaccountid */
  BucketAccountId?: string | Intrinsic
}

/**
 * The `AWS::S3::MultiRegionAccessPoint` resource creates an Amazon S3 Multi-Region Access Point. To learn more about Multi-Region Access Points, see [Multi-Region Access Points in Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPoints.html) in the in the _Amazon S3 User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html */

export interface S3MultiRegionAccessPoint extends ResourceAttributes {
  Type: 'AWS::S3::MultiRegionAccessPoint'
  Properties: {
    /**
     * - The name of the Multi-Region Access Point.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-z0-9][-a-z0-9]{1,48}[a-z0-9]$`
     * - _Minimum_: `3`
     * - _Maximum_: `50`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html#cfn-s3-multiregionaccesspoint-name */
    Name?: string | Intrinsic
    /**
     * - The PublicAccessBlock configuration that you want to apply to this Multi-Region Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers an object public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the _Amazon S3 User Guide_.
     * - _Required_: No
     * - _Type_: [PublicAccessBlockConfiguration](./aws-properties-s3-multiregionaccesspoint-publicaccessblockconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html#cfn-s3-multiregionaccesspoint-publicaccessblockconfiguration */
    PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration
    /**
     * - A collection of the Regions and buckets associated with the Multi-Region Access Point.
     * - _Required_: Yes
     * - _Type_: Array of [Region](./aws-properties-s3-multiregionaccesspoint-region.html)
     * - _Minimum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html#cfn-s3-multiregionaccesspoint-regions */
    Regions: Region[]
  }
}
