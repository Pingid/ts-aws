import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The tag structure that contains a tag key and value.
 * ###### Note
 * 
 * Tagging is supported only for the following Cost Explorer resource types: [`AnomalyMonitor`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html), [`AnomalySubscription`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html), [`CostCategory`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategory.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html */

export interface ResourceTag {
    /**
     * - The key that's associated with the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!aws:).*$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#cfn-ce-anomalysubscription-resourcetag-key */
    "Key": string | Intrinsic;
    /**
     * - The value that's associated with the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#cfn-ce-anomalysubscription-resourcetag-value */
    "Value": string | Intrinsic;
}

/**
 * The recipient of `AnomalySubscription` notifications.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html */

export interface Subscriber {
    /**
     * - The email address or SNS Topic Amazon Resource Name (ARN), depending on the `Type`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `(^[a-zA-Z0-9.!#$%&'*+=?^_‘{|}~-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$)|(^arn:(aws[a-zA-Z-]*):sns:[a-zA-Z0-9-]+:[0-9]{12}:[a-zA-Z0-9_-]+(\.fifo)?$)`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#cfn-ce-anomalysubscription-subscriber-address */
    "Address": string | Intrinsic;
    /**
     * - Indicates if the subscriber accepts the notifications.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `CONFIRMED | DECLINED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#cfn-ce-anomalysubscription-subscriber-status */
    "Status"?: string | Intrinsic;
    /**
     * - The notification delivery channel.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `EMAIL | SNS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#cfn-ce-anomalysubscription-subscriber-type */
    "Type": string | Intrinsic;
}

/**
 * The `AWS::CE::AnomalySubscription` resource (also referred to as an alert subscription) is a Cost Explorer resource type that sends notifications about specific anomalies that meet an alerting criteria defined by you.
 * You can specify the frequency of the alerts and the subscribers to notify.
 * Anomaly subscriptions can be associated with one or more [`AWS::CE::AnomalyMonitor`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html) resources, and they only send notifications about anomalies detected by those associated monitors. You can also configure a threshold to further control which anomalies are included in the notifications.
 * Anomalies that don’t exceed the chosen threshold and therefore don’t trigger notifications from an anomaly subscription will still be available on the console and from the [`GetAnomalies`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalies.html) API.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html */

export interface CEAnomalySubscription extends ResourceAttributes {
    "Type": "AWS::CE::AnomalySubscription";
    "Properties": {
        /**
         * - The frequency that anomaly notifications are sent. Notifications are sent either over email (for DAILY and WEEKLY frequencies) or SNS (for IMMEDIATE frequency). For more information, see [Creating an Amazon SNS topic for anomaly notifications](https://docs.aws.amazon.com/cost-management/latest/userguide/ad-SNS.html).
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `DAILY | IMMEDIATE | WEEKLY`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#cfn-ce-anomalysubscription-frequency */
        "Frequency": string | Intrinsic;
        /**
         * - A list of cost anomaly monitors.
         * - _Required_: Yes
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#cfn-ce-anomalysubscription-monitorarnlist */
        "MonitorArnList": (string | Intrinsic)[];
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Array of [ResourceTag](./aws-properties-ce-anomalysubscription-resourcetag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `200`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#cfn-ce-anomalysubscription-resourcetags */
        "ResourceTags"?: ResourceTag[];
        /**
         * - A list of subscribers to notify.
         * - _Required_: Yes
         * - _Type_: Array of [Subscriber](./aws-properties-ce-anomalysubscription-subscriber.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#cfn-ce-anomalysubscription-subscribers */
        "Subscribers": Subscriber[];
        /**
         * - The name for the subscription.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\S\s]*`
         * - _Minimum_: `0`
         * - _Maximum_: `1024`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#cfn-ce-anomalysubscription-subscriptionname */
        "SubscriptionName": string | Intrinsic;
        /**
         * - (deprecated)
         * - An absolute dollar value that must be exceeded by the anomaly's total impact (see [Impact](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Impact.html) for more details) for an anomaly notification to be generated.
         * - This field has been deprecated. To specify a threshold, use ThresholdExpression. Continued use of Threshold will be treated as shorthand syntax for a ThresholdExpression.
         * - One of Threshold or ThresholdExpression is required for `AWS::CE::AnomalySubscription`. You cannot specify both.
         * - _Required_: No
         * - _Type_: Number
         * - _Minimum_: `0`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#cfn-ce-anomalysubscription-threshold */
        "Threshold"?: number | Intrinsic;
        /**
         * - An [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html) object in JSON string format used to specify the anomalies that you want to generate alerts for. This supports dimensions and nested expressions. The supported dimensions are `ANOMALY_TOTAL_IMPACT_ABSOLUTE` and `ANOMALY_TOTAL_IMPACT_PERCENTAGE`, corresponding to an anomaly’s TotalImpact and TotalImpactPercentage, respectively (see [Impact](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Impact.html) for more details). The supported nested expression types are `AND` and `OR`. The match option `GREATER_THAN_OR_EQUAL` is required. Values must be numbers between 0 and 10,000,000,000 in string format.
         * - One of Threshold or ThresholdExpression is required for `AWS::CE::AnomalySubscription`. You cannot specify both.
         * - For further information, see the [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#aws-resource-ce-anomalysubscription--examples) section of this page.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#cfn-ce-anomalysubscription-thresholdexpression */
        "ThresholdExpression"?: string | Intrinsic;
    };
}