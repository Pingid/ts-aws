import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A subscription configuration for additional CloudWatch metrics.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-monitoringsubscription.html */

export interface RealtimeMetricsSubscriptionConfig {
    /**
     * - A flag that indicates whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `Enabled | Disabled`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-monitoringsubscription.html#cfn-cloudfront-monitoringsubscription-realtimemetricssubscriptionconfig-realtimemetricssubscriptionstatus */
    "RealtimeMetricsSubscriptionStatus": string | Intrinsic;
}

/**
 * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-monitoringsubscription.html */

export interface MonitoringSubscription {
    /**
     * - A subscription configuration for additional CloudWatch metrics.
     * - _Required_: No
     * - _Type_: [RealtimeMetricsSubscriptionConfig](./aws-properties-cloudfront-monitoringsubscription-realtimemetricssubscriptionconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-monitoringsubscription.html#cfn-cloudfront-monitoringsubscription-monitoringsubscription-realtimemetricssubscriptionconfig */
    "RealtimeMetricsSubscriptionConfig"?: RealtimeMetricsSubscriptionConfig;
}

/**
 * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-monitoringsubscription.html */

export interface CloudFrontMonitoringSubscription extends ResourceAttributes {
    "Type": "AWS::CloudFront::MonitoringSubscription";
    "Properties": {
        /**
         * - The ID of the distribution that you are enabling metrics for.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-monitoringsubscription.html#cfn-cloudfront-monitoringsubscription-distributionid */
        "DistributionId": string | Intrinsic;
        /**
         * - A subscription configuration for additional CloudWatch metrics.
         * - _Required_: Yes
         * - _Type_: [MonitoringSubscription](./aws-properties-cloudfront-monitoringsubscription-monitoringsubscription.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-monitoringsubscription.html#cfn-cloudfront-monitoringsubscription-monitoringsubscription */
        "MonitoringSubscription": MonitoringSubscription;
    };
}