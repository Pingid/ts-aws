import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::Logs::SubscriptionFilter` resource specifies a subscription filter and associates it with the specified log group. Subscription filters allow you to subscribe to a real-time stream of log events and have them delivered to a specific destination. Currently, the supported destinations are:
 * *   An Amazon Kinesis data stream belonging to the same account as the subscription filter, for same-account delivery.
 *     
 * *   A logical destination that belongs to a different account, for cross-account delivery.
 *     
 * *   An Amazon Kinesis Firehose delivery stream that belongs to the same account as the subscription filter, for same-account delivery.
 *     
 * *   An AWS Lambda function that belongs to the same account as the subscription filter, for same-account delivery.
 * There can be as many as two subscription filters associated with a log group.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-subscriptionfilter.html */

export interface LogsSubscriptionFilter extends ResourceAttributes {
    "Type": "AWS::Logs::SubscriptionFilter";
    "Properties": {
        /**
         * - This parameter is valid only for log groups that have an active log transformer. For more information about log transformers, see [PutTransformer](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html).
         * - If this value is `true`, the subscription filter is applied on the transformed version of the log events instead of the original ingested log events.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-subscriptionfilter.html#cfn-logs-subscriptionfilter-applyontransformedlogs */
        "ApplyOnTransformedLogs"?: boolean | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the destination.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-subscriptionfilter.html#cfn-logs-subscriptionfilter-destinationarn */
        "DestinationArn": string | Intrinsic;
        /**
         * - The method used to distribute log data to the destination, which can be either random or grouped by log stream.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `Random | ByLogStream`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-subscriptionfilter.html#cfn-logs-subscriptionfilter-distribution */
        "Distribution"?: string | Intrinsic;
        /**
         * - The name of the subscription filter.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[^:*]*`
         * - _Minimum_: `1`
         * - _Maximum_: `512`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-subscriptionfilter.html#cfn-logs-subscriptionfilter-filtername */
        "FilterName"?: string | Intrinsic;
        /**
         * - The filtering expressions that restrict what gets delivered to the destination AWS resource. For more information about the filter pattern syntax, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-subscriptionfilter.html#cfn-logs-subscriptionfilter-filterpattern */
        "FilterPattern": string | Intrinsic;
        /**
         * - The log group to associate with the subscription filter. All log events that are uploaded to this log group are filtered and delivered to the specified AWS resource if the filter pattern matches the log events.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\.\-_/#A-Za-z0-9]+`
         * - _Minimum_: `1`
         * - _Maximum_: `512`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-subscriptionfilter.html#cfn-logs-subscriptionfilter-loggroupname */
        "LogGroupName": string | Intrinsic;
        /**
         * - The ARN of an IAM role that grants CloudWatch Logs permissions to deliver ingested log events to the destination stream. You don't need to provide the ARN when you are working with a logical destination for cross-account delivery.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-subscriptionfilter.html#cfn-logs-subscriptionfilter-rolearn */
        "RoleArn"?: string | Intrinsic;
    };
}