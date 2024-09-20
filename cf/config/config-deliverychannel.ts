import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Provides options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket in your delivery channel.
 * ###### Note
 *
 * If you want to create a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot, see the following:
 * The frequency for a rule that triggers evaluations for your resources when AWS Config delivers the configuration snapshot is set by one of two values, depending on which is less frequent:
 * *   The value for the `deliveryFrequency` parameter within the delivery channel configuration, which sets how often AWS Config delivers configuration snapshots. This value also sets how often AWS Config invokes evaluations for AWS Config rules.
 *
 * *   The value for the `MaximumExecutionFrequency` parameter, which sets the maximum frequency with which AWS Config invokes evaluations for the rule. For more information, see [ConfigRule](https://docs.aws.amazon.com/config/latest/APIReference/API_ConfigRule.html).
 * If the `deliveryFrequency` value is less frequent than the `MaximumExecutionFrequency` value for a rule, AWS Config invokes the rule only as often as the `deliveryFrequency` value.
 * 1.  For example, you want your rule to run evaluations when AWS Config delivers the configuration snapshot.
 *
 * 2.  You specify the `MaximumExecutionFrequency` value for `Six_Hours`.
 *
 * 3.  You then specify the delivery channel `deliveryFrequency` value for `TwentyFour_Hours`.
 *
 * 4.  Because the value for `deliveryFrequency` is less frequent than `MaximumExecutionFrequency`, AWS Config invokes evaluations for the rule every 24 hours.
 * You should set the `MaximumExecutionFrequency` value to be at least as frequent as the `deliveryFrequency` value. You can view the `deliveryFrequency` value by using the `DescribeDeliveryChannnels` action.
 * To update the `deliveryFrequency` with which AWS Config delivers your configuration snapshots, use the `PutDeliveryChannel` action.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html */

export interface ConfigSnapshotDeliveryProperties {
  /**
   * - The frequency with which AWS Config delivers configuration snapshots.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `One_Hour | Three_Hours | Six_Hours | Twelve_Hours | TwentyFour_Hours`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-configsnapshotdeliveryproperties-deliveryfrequency */
  DeliveryFrequency?: string | Intrinsic
}

/**
 * Specifies a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic.
 * Before you can create a delivery channel, you must create a configuration recorder. You can use this action to change the Amazon S3 bucket or an Amazon SNS topic of the existing delivery channel. To change the Amazon S3 bucket or an Amazon SNS topic, call this action and specify the changed values for the S3 bucket and the SNS topic. If you specify a different value for either the S3 bucket or the SNS topic, this action will keep the existing value for the parameter that is not changed.
 * You can have only one delivery channel per region per AWS account, and the delivery channel is required to use AWS Config.
 * ###### Note
 *
 * AWS Config does not support the delivery channel to an Amazon S3 bucket bucket where object lock is enabled. For more information, see [How S3 Object Lock works](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html).
 * When you create the delivery channel, you can specify; how often AWS Config delivers configuration snapshots to your Amazon S3 bucket (for example, 24 hours), the S3 bucket to which AWS Config sends configuration snapshots and configuration history files, and the Amazon SNS topic to which AWS Config sends notifications about configuration changes, such as updated resources, AWS Config rule evaluations, and when AWS Config delivers the configuration snapshot to your S3 bucket. For more information, see [Deliver Configuration Items](https://docs.aws.amazon.com/config/latest/developerguide/how-does-config-work.html#delivery-channel) in the AWS Config Developer Guide.
 * ###### Note
 *
 * To enable AWS Config, you must create a configuration recorder and a delivery channel. If you want to create the resources separately, you must create a configuration recorder before you can create a delivery channel. AWS Config uses the configuration recorder to capture configuration changes to your resources. For more information, see [AWS::Config::ConfigurationRecorder](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html).
 * For more information, see [Managing the Delivery Channel](https://docs.aws.amazon.com/config/latest/developerguide/manage-delivery-channel.html) in the AWS Config Developer Guide.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html */

export interface ConfigDeliveryChannel extends ResourceAttributes {
  Type: 'AWS::Config::DeliveryChannel'
  Properties: {
    /**
     * - The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket.
     * - _Required_: No
     * - _Type_: [ConfigSnapshotDeliveryProperties](./aws-properties-config-deliverychannel-configsnapshotdeliveryproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-configsnapshotdeliveryproperties */
    ConfigSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties
    /**
     * - A name for the delivery channel. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the delivery channel name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
     * - Updates are not supported. To change the name, you must run two separate updates. In the first update, delete this resource, and then recreate it with a new name in the second update.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-name */
    Name?: string | Intrinsic
    /**
     * - The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files.
     * - If you specify a bucket that belongs to another AWS account, that bucket must have policies that grant access permissions to AWS Config. For more information, see [Permissions for the Amazon S3 Bucket](https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-policy.html) in the _AWS Config Developer Guide_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-s3bucketname */
    S3BucketName: string | Intrinsic
    /**
     * - The prefix for the specified Amazon S3 bucket.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-s3keyprefix */
    S3KeyPrefix?: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS ) AWS KMS key (KMS key) used to encrypt objects delivered by AWS Config. Must belong to the same Region as the destination S3 bucket.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-s3kmskeyarn */
    S3KmsKeyArn?: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes.
     * - If you choose a topic from another account, the topic must have policies that grant access permissions to AWS Config. For more information, see [Permissions for the Amazon SNS Topic](https://docs.aws.amazon.com/config/latest/developerguide/sns-topic-policy.html) in the _AWS Config Developer Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-snstopicarn */
    SnsTopicARN?: string | Intrinsic
  }
}
