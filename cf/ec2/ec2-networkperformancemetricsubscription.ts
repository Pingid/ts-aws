import type { Intrinsic } from '../intrinsic/index.js' /**
 * Describes Infrastructure Performance subscriptions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkperformancemetricsubscription.html */

export interface EC2NetworkPerformanceMetricSubscription {
  Type: 'AWS::EC2::NetworkPerformanceMetricSubscription'
  Properties: {
    /**
     * - The Region or Availability Zone that's the target for the subscription. For example, `eu-west-1`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkperformancemetricsubscription.html#cfn-ec2-networkperformancemetricsubscription-destination */
    Destination: string | Intrinsic
    /**
     * - The metric used for the subscription.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `aggregate-latency`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkperformancemetricsubscription.html#cfn-ec2-networkperformancemetricsubscription-metric */
    Metric: string | Intrinsic
    /**
     * - The Region or Availability Zone that's the source for the subscription. For example, `us-east-1`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkperformancemetricsubscription.html#cfn-ec2-networkperformancemetricsubscription-source */
    Source: string | Intrinsic
    /**
     * - The statistic used for the subscription.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `p50`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkperformancemetricsubscription.html#cfn-ec2-networkperformancemetricsubscription-statistic */
    Statistic: string | Intrinsic
  }
}
