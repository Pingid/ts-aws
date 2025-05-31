import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A structure containing the alert target ARN and the role ARN.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html */

export interface AlertTarget {
    /**
     * - The Amazon Resource Name (ARN) of the notification target to which alerts are sent.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-alerttarget-alerttargetarn */
    "AlertTargetArn": string | Intrinsic;
    /**
     * - The ARN of the role that grants permission to send alerts to the notification target.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-alerttarget-rolearn */
    "RoleArn": string | Intrinsic;
}

/**
 * A set of key/value pairs that are used to manage the resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html */

export interface Tag {
    /**
     * - The tag's key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag's value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The metric you want to retain. Dimensions are optional.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html */

export interface MetricToRetain {
    /**
     * - The value indicates exporting metrics related to the `MetricToRetain` when it's true.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-metrictoretain-exportmetric */
    "ExportMetric"?: boolean | Intrinsic;
    /**
     * - A standard of measurement.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9:_-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-metrictoretain-metric */
    "Metric": string | Intrinsic;
    /**
     * - The dimension of the metric.
     * - _Required_: No
     * - _Type_: [MetricDimension](./aws-properties-iot-securityprofile-metricdimension.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-metrictoretain-metricdimension */
    "MetricDimension"?: MetricDimension;
}

/**
 * Specifies the MQTT topic and role ARN required for metric export.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html */

export interface MetricsExportConfig {
    /**
     * - The MQTT topic that Device Defender Detect should publish messages to for metrics export.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-metricsexportconfig-mqtttopic */
    "MqttTopic": string | Intrinsic;
    /**
     * - This role ARN has permission to publish MQTT messages, after which Device Defender Detect can assume the role and publish messages on your behalf.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-metricsexportconfig-rolearn */
    "RoleArn": string | Intrinsic;
}

/**
 * The dimension of the metric.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html */

export interface MetricDimension {
    /**
     * - The name of the dimension.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9:_-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-metricdimension-dimensionname */
    "DimensionName": string | Intrinsic;
    /**
     * - Operators are constructs that perform logical operations. Valid values are `IN` and `NOT_IN`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `IN | NOT_IN`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-metricdimension-operator */
    "Operator"?: string | Intrinsic;
}

/**
 * A statistical ranking (percentile) that indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html */

export interface StatisticalThreshold {
    /**
     * - The percentile that resolves to a threshold value by which compliance with a behavior is determined. Metrics are collected over the specified period (`durationSeconds`) from all reporting devices in your account and statistical ranks are calculated. Then, the measurements from a device are collected over the same period. If the accumulated measurements from the device fall above or below (`comparisonOperator`) the value associated with the percentile specified, then the device is considered to be in compliance with the behavior, otherwise a violation occurs.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Average | p0 | p0.1 | p0.01 | p1 | p10 | p50 | p90 | p99 | p99.9 | p99.99 | p100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-statisticalthreshold-statistic */
    "Statistic"?: string | Intrinsic;
}

/**
 * The `MachineLearningDetectionConfig` property type controls confidence of the machine learning model.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html */

export interface MachineLearningDetectionConfig {
    /**
     * - The model confidence level.
     * - There are three levels of confidence, `"high"`, `"medium"`, and `"low"`.
     * - The higher the confidence level, the lower the sensitivity, and the lower the alarm frequency will be.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `LOW | MEDIUM | HIGH`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-machinelearningdetectionconfig-confidencelevel */
    "ConfidenceLevel"?: string | Intrinsic;
}

/**
 * The value to be compared with the `metric`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html */

export interface MetricValue {
    /**
     * - If the `comparisonOperator` calls for a set of CIDRs, use this to specify that set to be compared with the `metric`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-metricvalue-cidrs */
    "Cidrs"?: (string | Intrinsic)[];
    /**
     * - If the `comparisonOperator` calls for a numeric value, use this to specify that numeric value to be compared with the `metric`.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-metricvalue-count */
    "Count"?: string | Intrinsic;
    /**
     * - The numeric values of a metric.
     * - _Required_: No
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-metricvalue-number */
    "Number"?: number | Intrinsic;
    /**
     * - The numeric value of a metric.
     * - _Required_: No
     * - _Type_: Array of Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-metricvalue-numbers */
    "Numbers"?: (number | Intrinsic)[];
    /**
     * - If the `comparisonOperator` calls for a set of ports, use this to specify that set to be compared with the `metric`.
     * - _Required_: No
     * - _Type_: Array of Integer
     * - _Minimum_: `0`
     * - _Maximum_: `65535`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-metricvalue-ports */
    "Ports"?: (number | Intrinsic)[];
    /**
     * - The string values of a metric.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-metricvalue-strings */
    "Strings"?: (string | Intrinsic)[];
}

/**
 * The criteria by which the behavior is determined to be normal.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html */

export interface BehaviorCriteria {
    /**
     * - The operator that relates the thing measured (`metric`) to the criteria (containing a `value` or `statisticalThreshold`). Valid operators include:
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `less-than | less-than-equals | greater-than | greater-than-equals | in-cidr-set | not-in-cidr-set | in-port-set | not-in-port-set | in-set | not-in-set`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-behaviorcriteria-comparisonoperator */
    "ComparisonOperator"?: string | Intrinsic;
    /**
     * - If a device is in violation of the behavior for the specified number of consecutive datapoints, an alarm occurs. If not specified, the default is 1.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-behaviorcriteria-consecutivedatapointstoalarm */
    "ConsecutiveDatapointsToAlarm"?: number | Intrinsic;
    /**
     * - If an alarm has occurred and the offending device is no longer in violation of the behavior for the specified number of consecutive datapoints, the alarm is cleared. If not specified, the default is 1.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-behaviorcriteria-consecutivedatapointstoclear */
    "ConsecutiveDatapointsToClear"?: number | Intrinsic;
    /**
     * - Use this to specify the time duration over which the behavior is evaluated, for those criteria that have a time dimension (for example, `NUM_MESSAGES_SENT`). For a `statisticalThreshhold` metric comparison, measurements from all devices are accumulated over this time duration before being used to calculate percentiles, and later, measurements from an individual device are also accumulated over this time duration before being given a percentile rank. Cannot be used with list-based metric datatypes.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-behaviorcriteria-durationseconds */
    "DurationSeconds"?: number | Intrinsic;
    /**
     * - The confidence level of the detection model.
     * - _Required_: No
     * - _Type_: [MachineLearningDetectionConfig](./aws-properties-iot-securityprofile-machinelearningdetectionconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-behaviorcriteria-mldetectionconfig */
    "MlDetectionConfig"?: MachineLearningDetectionConfig;
    /**
     * - A statistical ranking (percentile)that indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.
     * - _Required_: No
     * - _Type_: [StatisticalThreshold](./aws-properties-iot-securityprofile-statisticalthreshold.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-behaviorcriteria-statisticalthreshold */
    "StatisticalThreshold"?: StatisticalThreshold;
    /**
     * - The value to be compared with the `metric`.
     * - _Required_: No
     * - _Type_: [MetricValue](./aws-properties-iot-securityprofile-metricvalue.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-behaviorcriteria-value */
    "Value"?: MetricValue;
}

/**
 * A Device Defender security profile behavior.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html */

export interface Behavior {
    /**
     * - The criteria that determine if a device is behaving normally in regard to the `metric`.
     * - _Required_: No
     * - _Type_: [BehaviorCriteria](./aws-properties-iot-securityprofile-behaviorcriteria.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-behavior-criteria */
    "Criteria"?: BehaviorCriteria;
    /**
     * - Value indicates exporting metrics related to the behavior when it is true.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-behavior-exportmetric */
    "ExportMetric"?: boolean | Intrinsic;
    /**
     * - What is measured by the behavior.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9:_-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-behavior-metric */
    "Metric"?: string | Intrinsic;
    /**
     * - The dimension of the metric.
     * - _Required_: No
     * - _Type_: [MetricDimension](./aws-properties-iot-securityprofile-metricdimension.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-behavior-metricdimension */
    "MetricDimension"?: MetricDimension;
    /**
     * - The name you've given to the behavior.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9:_-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-behavior-name */
    "Name": string | Intrinsic;
    /**
     * - The alert status. If you set the value to `true`, alerts will be suppressed.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-behavior-suppressalerts */
    "SuppressAlerts"?: boolean | Intrinsic;
}

/**
 * Use the `AWS::IoT::SecurityProfile` resource to create a Device Defender security profile. For API reference, see [CreateSecurityProfile](https://docs.aws.amazon.com/iot/latest/apireference/API_CreateSecurityProfile.html) and for general information, see [Detect](https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-detect.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html */

export interface IoTSecurityProfile extends ResourceAttributes {
    "Type": "AWS::IoT::SecurityProfile";
    "Properties": {
        /**
         * - A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's `behaviors`, but it's also retained for any metric specified here. Can be used with custom metrics; can't be used with dimensions.
         * - _Required_: No
         * - _Type_: Array of [MetricToRetain](./aws-properties-iot-securityprofile-metrictoretain.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-additionalmetricstoretainv2 */
        "AdditionalMetricsToRetainV2"?: MetricToRetain[];
        /**
         * - Specifies the destinations to which alerts are sent. (Alerts are always sent to the console.) Alerts are generated when a device (thing) violates a behavior.
         * - _Required_: No
         * - _Type_: Object of [AlertTarget](./aws-properties-iot-securityprofile-alerttarget.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-alerttargets */
        "AlertTargets"?: Record<string, AlertTarget>;
        /**
         * - Specifies the behaviors that, when violated by a device (thing), cause an alert.
         * - _Required_: No
         * - _Type_: Array of [Behavior](./aws-properties-iot-securityprofile-behavior.html)
         * - _Maximum_: `100`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-behaviors */
        "Behaviors"?: Behavior[];
        /**
         * - Specifies the MQTT topic and role ARN required for metric export.
         * - _Required_: No
         * - _Type_: [MetricsExportConfig](./aws-properties-iot-securityprofile-metricsexportconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-metricsexportconfig */
        "MetricsExportConfig"?: MetricsExportConfig;
        /**
         * - A description of the security profile.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `1000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-securityprofiledescription */
        "SecurityProfileDescription"?: string | Intrinsic;
        /**
         * - The name you gave to the security profile.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9:_-]+`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-securityprofilename */
        "SecurityProfileName"?: string | Intrinsic;
        /**
         * - Metadata that can be used to manage the security profile.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-iot-securityprofile-tag.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-tags */
        "Tags"?: Tag[];
        /**
         * - The ARN of the target (thing group) to which the security profile is attached.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html#cfn-iot-securityprofile-targetarns */
        "TargetArns"?: (string | Intrinsic)[];
    };
}