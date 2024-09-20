import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html */

export interface Tag {
  /**
   * - The tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-tag-value */
  Value: string | Intrinsic
}

/**
 * A trust provider is a third-party entity that creates, maintains, and manages identity information for users and devices. When an application request is made, the identity information sent by the trust provider is evaluated by Verified Access before allowing or denying the application request.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html */

export interface VerifiedAccessTrustProvider {
  /**
   * - A description for the AWS Verified Access trust provider.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-verifiedaccesstrustprovider-description */
  Description?: string | Intrinsic
  /**
   * - The type of device-based trust provider.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `jamf | crowdstrike | jumpcloud`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-verifiedaccesstrustprovider-devicetrustprovidertype */
  DeviceTrustProviderType?: string | Intrinsic
  /**
   * - The type of Verified Access trust provider.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `user | device`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-verifiedaccesstrustprovider-trustprovidertype */
  TrustProviderType?: string | Intrinsic
  /**
   * - The type of user-based trust provider.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `iam-identity-center | oidc`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-verifiedaccesstrustprovider-usertrustprovidertype */
  UserTrustProviderType?: string | Intrinsic
  /**
   * - The ID of the AWS Verified Access trust provider.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-verifiedaccesstrustprovider-verifiedaccesstrustproviderid */
  VerifiedAccessTrustProviderId?: string | Intrinsic
}

/**
 * Options for CloudWatch Logs as a logging destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html */

export interface CloudWatchLogs {
  /**
   * - Indicates whether logging is enabled.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-cloudwatchlogs-enabled */
  Enabled?: boolean | Intrinsic
  /**
   * - The ID of the CloudWatch Logs log group.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-cloudwatchlogs-loggroup */
  LogGroup?: string | Intrinsic
}

/**
 * Options for Kinesis as a logging destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html */

export interface KinesisDataFirehose {
  /**
   * - The ID of the delivery stream.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-kinesisdatafirehose-deliverystream */
  DeliveryStream?: string | Intrinsic
  /**
   * - Indicates whether logging is enabled.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-kinesisdatafirehose-enabled */
  Enabled?: boolean | Intrinsic
}

/**
 * Options for Amazon S3 as a logging destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html */

export interface S3 {
  /**
   * - The bucket name.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-s3-bucketname */
  BucketName?: string | Intrinsic
  /**
   * - The AWS account number that owns the bucket.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-s3-bucketowner */
  BucketOwner?: string | Intrinsic
  /**
   * - Indicates whether logging is enabled.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-s3-enabled */
  Enabled?: boolean | Intrinsic
  /**
   * - The bucket prefix.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-s3-prefix */
  Prefix?: string | Intrinsic
}

/**
 * Describes the options for Verified Access logs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html */

export interface VerifiedAccessLogs {
  /**
   * - CloudWatch Logs logging destination.
   * - _Required_: No
   * - _Type_: [CloudWatchLogs](./aws-properties-ec2-verifiedaccessinstance-cloudwatchlogs.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-verifiedaccesslogs-cloudwatchlogs */
  CloudWatchLogs?: CloudWatchLogs
  /**
   * - Indicates whether to include trust data sent by trust providers in the logs.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-verifiedaccesslogs-includetrustcontext */
  IncludeTrustContext?: boolean | Intrinsic
  /**
   * - Kinesis logging destination.
   * - _Required_: No
   * - _Type_: [KinesisDataFirehose](./aws-properties-ec2-verifiedaccessinstance-kinesisdatafirehose.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-verifiedaccesslogs-kinesisdatafirehose */
  KinesisDataFirehose?: KinesisDataFirehose
  /**
   * - The logging version.
   * - Valid values: `ocsf-0.1` | `ocsf-1.0.0-rc.2`
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-verifiedaccesslogs-logversion */
  LogVersion?: string | Intrinsic
  /**
   * - Amazon S3 logging options.
   * - _Required_: No
   * - _Type_: [S3](./aws-properties-ec2-verifiedaccessinstance-s3.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-verifiedaccesslogs-s3 */
  S3?: S3
}

/**
 * An AWS Verified Access instance is a regional entity that evaluates application requests and grants access only when your security requirements are met.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html */

export interface EC2VerifiedAccessInstance extends ResourceAttributes {
  Type: 'AWS::EC2::VerifiedAccessInstance'
  Properties: {
    /**
     * - A description for the AWS Verified Access instance.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-description */
    Description?: string | Intrinsic
    /**
     * - Indicates whether support for Federal Information Processing Standards (FIPS) is enabled on the instance.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-fipsenabled */
    FipsEnabled?: boolean | Intrinsic
    /**
     * - The logging configuration for the Verified Access instances.
     * - _Required_: No
     * - _Type_: [VerifiedAccessLogs](./aws-properties-ec2-verifiedaccessinstance-verifiedaccesslogs.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-loggingconfigurations */
    LoggingConfigurations?: VerifiedAccessLogs
    /**
     * - The tags.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ec2-verifiedaccessinstance-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-tags */
    Tags?: Tag[]
    /**
     * - The IDs of the AWS Verified Access trust providers.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-verifiedaccesstrustproviderids */
    VerifiedAccessTrustProviderIds?: (string | Intrinsic)[]
    /**
     * - The IDs of the AWS Verified Access trust providers.
     * - _Required_: No
     * - _Type_: Array of [VerifiedAccessTrustProvider](./aws-properties-ec2-verifiedaccessinstance-verifiedaccesstrustprovider.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessinstance.html#cfn-ec2-verifiedaccessinstance-verifiedaccesstrustproviders */
    VerifiedAccessTrustProviders?: VerifiedAccessTrustProvider[]
  }
}
