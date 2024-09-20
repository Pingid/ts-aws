import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * This structure contains a metric namespace and optionally, a list of metric names, to either include in a metric ' stream or exclude from a metric stream.
 * A metric stream's filters can include up to 1000 total names. This limit applies to the sum of namespace names and metric names in the filters. For example, this could include 10 metric namespace filters with 99 metrics each, or 20 namespace filters with 49 metrics specified in each filter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html */

export interface MetricStreamFilter {
  /**
   * - The names of the metrics to either include or exclude from the metric stream.
   * - If you omit this parameter, all metrics in the namespace are included or excluded, depending on whether this filter is specified as an exclude filter or an include filter.
   * - Each metric name can contain only ASCII printable characters (ASCII range 32 through 126). Each metric name must contain at least one non-whitespace character.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `255 | 999`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-metricstreamfilter-metricnames */
  MetricNames?: (string | Intrinsic)[]
  /**
   * - The name of the metric namespace in the filter.
   * - The namespace can contain only ASCII printable characters (ASCII range 32 through 126). It must contain at least one non-whitespace character.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-metricstreamfilter-namespace */
  Namespace: string | Intrinsic
}

/**
 * A key-value pair associated with a CloudWatch resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html */

export interface Tag {
  /**
   * - A string that you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-tag-key */
  Key: string | Intrinsic
  /**
   * - The value for the specified tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-tag-value */
  Value: string | Intrinsic
}

/**
 * A structure that specifies the metric name and namespace for one metric that is going to have additional statistics included in the stream.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html */

export interface MetricStreamStatisticsMetric {
  /**
   * - The name of the metric.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-metricstreamstatisticsmetric-metricname */
  MetricName: string | Intrinsic
  /**
   * - The namespace of the metric.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-metricstreamstatisticsmetric-namespace */
  Namespace: string | Intrinsic
}

/**
 * This structure specifies a list of additional statistics to stream, and the metrics to stream those additional statistics for.
 * All metrics that match the combination of metric name and namespace will be streamed with the additional statistics, no matter their dimensions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html */

export interface MetricStreamStatisticsConfiguration {
  /**
   * - The additional statistics to stream for the metrics listed in `IncludeMetrics`.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-metricstreamstatisticsconfiguration-additionalstatistics */
  AdditionalStatistics: (string | Intrinsic)[]
  /**
   * - An array that defines the metrics that are to have additional statistics streamed.
   * - _Required_: Yes
   * - _Type_: Array of [MetricStreamStatisticsMetric](./aws-properties-cloudwatch-metricstream-metricstreamstatisticsmetric.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-metricstreamstatisticsconfiguration-includemetrics */
  IncludeMetrics: MetricStreamStatisticsMetric[]
}

/**
 * Creates or updates a metric stream. Metrics streams can automatically stream CloudWatch metrics to AWS destinations including Amazon S3 and to many third-party solutions. For more information, see [Metric streams](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Streams.html).
 * To create a metric stream, you must be logged on to an account that has the `iam:PassRole` permission and either the **CloudWatchFullAccess** policy or the `cloudwatch:PutMetricStream` permission.
 * When you create or update a metric stream, you choose one of the following:
 * *   Stream metrics from all metric namespaces in the account.
 *
 * *   Stream metrics from all metric namespaces in the account, except for the namespaces that you list in `ExcludeFilters`.
 *
 * *   Stream metrics from only the metric namespaces that you list in `IncludeFilters`.
 * When you create a metric stream, the stream is created in the `running` state. If you update an existing metric stream, the state does not change.
 * If you create a metric stream in an account that has been set up as a monitoring account in CloudWatch cross-account observability, you can choose whether to include metrics from linked source accounts in the metric stream.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html */

export interface CloudWatchMetricStream extends ResourceAttributes {
  Type: 'AWS::CloudWatch::MetricStream'
  Properties: {
    /**
     * - If you specify this parameter, the stream sends metrics from all metric namespaces except for the namespaces that you specify here. You cannot specify both `IncludeFilters` and `ExcludeFilters` in the same metric stream.
     * - When you modify the `IncludeFilters` or `ExcludeFilters` of an existing metric stream in any way, the metric stream is effectively restarted, so after such a change you will get only the datapoints that have a timestamp after the time of the update.
     * - _Required_: No
     * - _Type_: Array of [MetricStreamFilter](./aws-properties-cloudwatch-metricstream-metricstreamfilter.html)
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-excludefilters */
    ExcludeFilters?: MetricStreamFilter[]
    /**
     * - The ARN of the Amazon Kinesis Firehose delivery stream to use for this metric stream. This Amazon Kinesis Firehose delivery stream must already exist and must be in the same account as the metric stream.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-firehosearn */
    FirehoseArn?: string | Intrinsic
    /**
     * - If you specify this parameter, the stream sends only the metrics from the metric namespaces that you specify here. You cannot specify both `IncludeFilters` and `ExcludeFilters` in the same metric stream.
     * - When you modify the `IncludeFilters` or `ExcludeFilters` of an existing metric stream in any way, the metric stream is effectively restarted, so after such a change you will get only the datapoints that have a timestamp after the time of the update.
     * - _Required_: No
     * - _Type_: Array of [MetricStreamFilter](./aws-properties-cloudwatch-metricstream-metricstreamfilter.html)
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-includefilters */
    IncludeFilters?: MetricStreamFilter[]
    /**
     * - If you are creating a metric stream in a monitoring account, specify `true` to include metrics from source accounts that are linked to this monitoring account, in the metric stream. The default is `false`.
     * - For more information about linking accounts, see [CloudWatch cross-account observability](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html)
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-includelinkedaccountsmetrics */
    IncludeLinkedAccountsMetrics?: boolean | Intrinsic
    /**
     * - If you are creating a new metric stream, this is the name for the new stream. The name must be different than the names of other metric streams in this account and Region.
     * - If you are updating a metric stream, specify the name of that stream here.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-name */
    Name?: string | Intrinsic
    /**
     * - The output format for the stream. Valid values are `json`, `opentelemetry1.0` and `opentelemetry0.7` For more information about metric stream output formats, see [Metric streams output formats](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-metric-streams-formats.html).
     * - This parameter is required.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-outputformat */
    OutputFormat?: string | Intrinsic
    /**
     * - The ARN of an IAM role that this metric stream will use to access Amazon Kinesis Firehose resources. This IAM role must already exist and must be in the same account as the metric stream. This IAM role must include the `firehose:PutRecord` and `firehose:PutRecordBatch` permissions.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-rolearn */
    RoleArn?: string | Intrinsic
    /**
     * - By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed. You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have up to 100 members.
     * - For each entry in this array, you specify one or more metrics and the list of additional statistics to stream for those metrics. The additional statistics that you can stream depend on the stream's `OutputFormat`. If the `OutputFormat` is `json`, you can stream any additional statistic that is supported by CloudWatch, listed in [CloudWatch statistics definitions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html). If the `OutputFormat` is OpenTelemetry, you can stream percentile statistics.
     * - _Required_: No
     * - _Type_: Array of [MetricStreamStatisticsConfiguration](./aws-properties-cloudwatch-metricstream-metricstreamstatisticsconfiguration.html)
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-statisticsconfigurations */
    StatisticsConfigurations?: MetricStreamStatisticsConfiguration[]
    /**
     * - An array of key-value pairs to apply to the metric stream.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-cloudwatch-metricstream-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-tags */
    Tags?: Tag[]
  }
}
