import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The tag structure that contains a tag key and value.
 * ###### Note
 *
 * Tagging is supported only for the following Cost Explorer resource types: [`AnomalyMonitor`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html), [`AnomalySubscription`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html), [`CostCategory`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategory.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html#cfn-ce-anomalymonitor-resourcetag-key */
  Key: string | Intrinsic
  /**
   * - The value that's associated with the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html#cfn-ce-anomalymonitor-resourcetag-value */
  Value: string | Intrinsic
}

/**
 * The `AWS::CE::AnomalyMonitor` resource is a Cost Explorer resource type that continuously inspects your account's cost data for anomalies, based on `MonitorType` and `MonitorSpecification`. The content consists of detailed metadata and the current status of the monitor object.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html */

export interface CEAnomalyMonitor extends ResourceAttributes {
  Type: 'AWS::CE::AnomalyMonitor'
  Properties: {
    /**
     * - The dimensions to evaluate.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `SERVICE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html#cfn-ce-anomalymonitor-monitordimension */
    MonitorDimension?: string | Intrinsic
    /**
     * - The name of the monitor.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\S\s]*`
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html#cfn-ce-anomalymonitor-monitorname */
    MonitorName: string | Intrinsic
    /**
     * - The array of `MonitorSpecification` in JSON array format. For instance, you can use `MonitorSpecification` to specify a tag, Cost Category, or linked account for your custom anomaly monitor. For further information, see the [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html#aws-resource-ce-anomalymonitor--examples) section of this page.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html#cfn-ce-anomalymonitor-monitorspecification */
    MonitorSpecification?: string | Intrinsic
    /**
     * - The possible type values.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `DIMENSIONAL | CUSTOM`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html#cfn-ce-anomalymonitor-monitortype */
    MonitorType: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of [ResourceTag](./aws-properties-ce-anomalymonitor-resourcetag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html#cfn-ce-anomalymonitor-resourcetags */
    ResourceTags?: ResourceTag[]
  }
}
