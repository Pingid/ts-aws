import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `AWS::MediaLive::CloudWatchAlarmTemplate` resource Property description not available. for MediaLive.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html */

export interface MediaLiveCloudWatchAlarmTemplate extends ResourceAttributes {
  Type: 'AWS::MediaLive::CloudWatchAlarmTemplate'
  Properties: {
    /**
     * - The comparison operator used to compare the specified statistic and the threshold.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `GreaterThanOrEqualToThreshold | GreaterThanThreshold | LessThanThreshold | LessThanOrEqualToThreshold`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-comparisonoperator */
    ComparisonOperator: string | Intrinsic
    /**
     * - The number of datapoints within the evaluation period that must be breaching to trigger the alarm.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-datapointstoalarm */
    DatapointsToAlarm?: number | Intrinsic
    /**
     * - A resource's optional description.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-description */
    Description?: string | Intrinsic
    /**
     * - The number of periods over which data is compared to the specified threshold.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-evaluationperiods */
    EvaluationPeriods: number | Intrinsic
    /**
     * - A cloudwatch alarm template group's identifier. Can be either be its id or current name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[^\s]+$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-groupidentifier */
    GroupIdentifier: string | Intrinsic
    /**
     * - The name of the metric associated with the alarm. Must be compatible with targetResourceType.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-metricname */
    MetricName: string | Intrinsic
    /**
     * - A resource's name. Names must be unique within the scope of a resource type in a specific region.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[^\s]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-name */
    Name: string | Intrinsic
    /**
     * - The period, in seconds, over which the specified statistic is applied.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `10`
     * - _Maximum_: `86400`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-period */
    Period: number | Intrinsic
    /**
     * - The statistic to apply to the alarm's metric data.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `SampleCount | Average | Sum | Minimum | Maximum`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-statistic */
    Statistic: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.+`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-tags */
    Tags?: Record<string, string | Intrinsic>
    /**
     * - The resource type this template should dynamically generate CloudWatch metric alarms for.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `CLOUDFRONT_DISTRIBUTION | MEDIALIVE_MULTIPLEX | MEDIALIVE_CHANNEL | MEDIALIVE_INPUT_DEVICE | MEDIAPACKAGE_CHANNEL | MEDIAPACKAGE_ORIGIN_ENDPOINT | MEDIACONNECT_FLOW | S3_BUCKET`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-targetresourcetype */
    TargetResourceType: string | Intrinsic
    /**
     * - The threshold value to compare with the specified statistic.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-threshold */
    Threshold: number | Intrinsic
    /**
     * - Specifies how missing data points are treated when evaluating the alarm's condition.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `notBreaching | breaching | ignore | missing`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-treatmissingdata */
    TreatMissingData: string | Intrinsic
  }
}
