import type { Intrinsic } from '../intrinsic/index.js' /**
 * Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption.html */

export interface CloudWatchLoggingOption {
  /**
   * - The ARN of the CloudWatch log to receive application messages.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:.*`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption.html#cfn-kinesisanalyticsv2-applicationcloudwatchloggingoption-cloudwatchloggingoption-logstreamarn */
  LogStreamARN: string | Intrinsic
}

/**
 * Adds an Amazon CloudWatch log stream to monitor application configuration errors.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption.html */

export interface KinesisAnalyticsV2ApplicationCloudWatchLoggingOption {
  Type: 'AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption'
  Properties: {
    /**
     * - The name of the application.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption.html#cfn-kinesisanalyticsv2-applicationcloudwatchloggingoption-applicationname */
    ApplicationName: string | Intrinsic
    /**
     * - Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN).
     * - _Required_: Yes
     * - _Type_: [CloudWatchLoggingOption](./aws-properties-kinesisanalyticsv2-applicationcloudwatchloggingoption-cloudwatchloggingoption.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption.html#cfn-kinesisanalyticsv2-applicationcloudwatchloggingoption-cloudwatchloggingoption */
    CloudWatchLoggingOption: CloudWatchLoggingOption
  }
}
