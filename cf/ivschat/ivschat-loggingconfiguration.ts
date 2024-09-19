import type { Intrinsic } from '../intrinsic/index.js' /**
 * A key-value pair that you can use to categorize and manage Amazon IVSChat LoggingConfigurations.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html */

export interface Tag {
  /**
   * - One part of a key-value pair that makes up a tag. A `key` is a general label that acts like a category for more specific tag values.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html#cfn-ivschat-loggingconfiguration-tag-key */
  Key: string | Intrinsic
  /**
   * - The optional part of a key-value pair that makes up a tag. A `value` acts as a descriptor within a tag category (key).
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html#cfn-ivschat-loggingconfiguration-tag-value */
  Value: string | Intrinsic
}

/**
 * The CloudWatchLogsDestinationConfiguration property type specifies a CloudWatch Logs location where chat logs will be stored.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html */

export interface CloudWatchLogsDestinationConfiguration {
  /**
   * - Name of the Amazon Cloudwatch Logs destination where chat activity will be logged.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[\.\-_/#A-Za-z0-9]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html#cfn-ivschat-loggingconfiguration-cloudwatchlogsdestinationconfiguration-loggroupname */
  LogGroupName: string | Intrinsic
}

/**
 * The FirehoseDestinationConfiguration property type specifies a Kinesis Firehose location where chat logs will be stored.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html */

export interface FirehoseDestinationConfiguration {
  /**
   * - Name of the Amazon Kinesis Firehose delivery stream where chat activity will be logged.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9_.-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html#cfn-ivschat-loggingconfiguration-firehosedestinationconfiguration-deliverystreamname */
  DeliveryStreamName: string | Intrinsic
}

/**
 * The S3DestinationConfiguration property type specifies an S3 location where chat logs will be stored.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html */

export interface S3DestinationConfiguration {
  /**
   * - Name of the Amazon S3 bucket where chat activity will be logged.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-z0-9-.]+$`
   * - _Minimum_: `3`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html#cfn-ivschat-loggingconfiguration-s3destinationconfiguration-bucketname */
  BucketName: string | Intrinsic
}

/**
 * The DestinationConfiguration property type describes a location where chat logs will be stored. Each member represents the configuration of one log destination. For logging, you define only one type of destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html */

export interface DestinationConfiguration {
  /**
   * - An Amazon CloudWatch Logs destination configuration where chat activity will be logged.
   * - _Required_: No
   * - _Type_: [CloudWatchLogsDestinationConfiguration](./aws-properties-ivschat-loggingconfiguration-cloudwatchlogsdestinationconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html#cfn-ivschat-loggingconfiguration-destinationconfiguration-cloudwatchlogs */
  CloudWatchLogs?: CloudWatchLogsDestinationConfiguration
  /**
   * - An Amazon Kinesis Data Firehose destination configuration where chat activity will be logged.
   * - _Required_: No
   * - _Type_: [FirehoseDestinationConfiguration](./aws-properties-ivschat-loggingconfiguration-firehosedestinationconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html#cfn-ivschat-loggingconfiguration-destinationconfiguration-firehose */
  Firehose?: FirehoseDestinationConfiguration
  /**
   * - An Amazon S3 destination configuration where chat activity will be logged.
   * - _Required_: No
   * - _Type_: [S3DestinationConfiguration](./aws-properties-ivschat-loggingconfiguration-s3destinationconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html#cfn-ivschat-loggingconfiguration-destinationconfiguration-s3 */
  S3?: S3DestinationConfiguration
}

/**
 * The `AWS::IVSChat::LoggingConfiguration` resource specifies an Amazon IVS logging configuration that allows clients to store and record sent messages. For more information, see [CreateLoggingConfiguration](https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_CreateLoggingConfiguration.html) in the _Amazon Interactive Video Service Chat API Reference_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html */

export interface IVSChatLoggingConfiguration {
  Type: 'AWS::IVSChat::LoggingConfiguration'
  Properties: {
    /**
     * - The DestinationConfiguration is a complex type that contains information about where chat content will be logged.
     * - _Required_: Yes
     * - _Type_: [DestinationConfiguration](./aws-properties-ivschat-loggingconfiguration-destinationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html#cfn-ivschat-loggingconfiguration-destinationconfiguration */
    DestinationConfiguration: DestinationConfiguration
    /**
     * - Logging-configuration name. The value does not need to be unique.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9-_]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html#cfn-ivschat-loggingconfiguration-name */
    Name?: string | Intrinsic
    /**
     * - An array of key-value pairs to apply to this resource.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-tag.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ivschat-loggingconfiguration-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html#cfn-ivschat-loggingconfiguration-tags */
    Tags?: Tag[]
  }
}
