import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies the CloudWatch metric dimensions to publish with this metric.
 * Because dimensions are part of the unique identifier for a metric, whenever a unique dimension name/value pair is extracted from your logs, you are creating a new variation of that metric.
 * For more information about publishing dimensions with metrics created by metric filters, see [Publishing dimensions with metrics from values in JSON or space-delimited log events](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html#logs-metric-filters-dimensions).
 * ###### Important
 *
 * Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as `IPAddress` or `requestID` as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric.
 *
 * To help prevent accidental high charges, Amazon disables a metric filter if it generates 1000 different name/value pairs for the dimensions that you have specified within a certain amount of time.
 *
 * You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see [Creating a Billing Alarm to Monitor Your Estimated AWS Charges](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html */

export interface Dimension {
  /**
   * - The name for the CloudWatch metric dimension that the metric filter creates.
   * - Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:).
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html#cfn-logs-metricfilter-dimension-key */
  Key: string | Intrinsic
  /**
   * - The log event field that will contain the value for this dimension. This dimension will only be published for a metric if the value is found in the log event. For example, `$.eventType` for JSON log events, or `$server` for space-delimited log events.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html#cfn-logs-metricfilter-dimension-value */
  Value: string | Intrinsic
}

/**
 * `MetricTransformation` is a property of the `AWS::Logs::MetricFilter` resource that describes how to transform log streams into a CloudWatch metric.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html */

export interface MetricTransformation {
  /**
   * - (Optional) The value to emit when a filter pattern does not match a log event. This value can be null.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html#cfn-logs-metricfilter-metrictransformation-defaultvalue */
  DefaultValue?: number | Intrinsic
  /**
   * - The fields to use as dimensions for the metric. One metric filter can include as many as three dimensions.
   * - _Required_: No
   * - _Type_: Array of [Dimension](./aws-properties-logs-metricfilter-dimension.html)
   * - _Minimum_: `1`
   * - _Maximum_: `3`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html#cfn-logs-metricfilter-metrictransformation-dimensions */
  Dimensions?: Dimension[]
  /**
   * - The name of the CloudWatch metric.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^((?![:*$])[\x00-\x7F]){1,255}`
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html#cfn-logs-metricfilter-metrictransformation-metricname */
  MetricName: string | Intrinsic
  /**
   * - A custom namespace to contain your metric in CloudWatch. Use namespaces to group together metrics that are similar. For more information, see [Namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9a-zA-Z\.\-_\/#]{1,256}`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html#cfn-logs-metricfilter-metrictransformation-metricnamespace */
  MetricNamespace: string | Intrinsic
  /**
   * - The value that is published to the CloudWatch metric. For example, if you're counting the occurrences of a particular term like `Error`, specify 1 for the metric value. If you're counting the number of bytes transferred, reference the value that is in the log event by using $. followed by the name of the field that you specified in the filter pattern, such as `$.size`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.{1,100}`
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html#cfn-logs-metricfilter-metrictransformation-metricvalue */
  MetricValue: string | Intrinsic
  /**
   * - The unit to assign to the metric. If you omit this, the unit is set as `None`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `Seconds | Microseconds | Milliseconds | Bytes | Kilobytes | Megabytes | Gigabytes | Terabytes | Bits | Kilobits | Megabits | Gigabits | Terabits | Percent | Count | Bytes/Second | Kilobytes/Second | Megabytes/Second | Gigabytes/Second | Terabytes/Second | Bits/Second | Kilobits/Second | Megabits/Second | Gigabits/Second | Terabits/Second | Count/Second | None`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html#cfn-logs-metricfilter-metrictransformation-unit */
  Unit?: string | Intrinsic
}

/**
 * The `AWS::Logs::MetricFilter` resource specifies a metric filter that describes how CloudWatch Logs extracts information from logs and transforms it into Amazon CloudWatch metrics. If you have multiple metric filters that are associated with a log group, all the filters are applied to the log streams in that group.
 * The maximum number of metric filters that can be associated with a log group is 100.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html */

export interface LogsMetricFilter extends ResourceAttributes {
  Type: 'AWS::Logs::MetricFilter'
  Properties: {
    /**
     * - The name of the metric filter.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[^:*]{1,512}`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html#cfn-logs-metricfilter-filtername */
    FilterName?: string | Intrinsic
    /**
     * - A filter pattern for extracting metric data out of ingested log events. For more information, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html#cfn-logs-metricfilter-filterpattern */
    FilterPattern: string | Intrinsic
    /**
     * - The name of an existing log group that you want to associate with this metric filter.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[.\-_/#A-Za-z0-9]{1,512}`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html#cfn-logs-metricfilter-loggroupname */
    LogGroupName: string | Intrinsic
    /**
     * - The metric transformations.
     * - _Required_: Yes
     * - _Type_: Array of [MetricTransformation](./aws-properties-logs-metricfilter-metrictransformation.html)
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-metricfilter.html#cfn-logs-metricfilter-metrictransformations */
    MetricTransformations: MetricTransformation[]
  }
}
