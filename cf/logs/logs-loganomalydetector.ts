import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Creates or updates an _anomaly detector_ that regularly scans one or more log groups and look for patterns and anomalies in the logs.
 * An anomaly detector can help surface issues by automatically discovering anomalies in your log event traffic. An anomaly detector uses machine learning algorithms to scan log events and find _patterns_. A pattern is a shared text structure that recurs among your log fields. Patterns provide a useful tool for analyzing large sets of logs because a large number of log events can often be compressed into a few patterns.
 * The anomaly detector uses pattern recognition to find `anomalies`, which are unusual log events. It compares current log events and patterns with trained baselines.
 * Fields within a pattern are called _tokens_. Fields that vary within a pattern, such as a request ID or timestamp, are referred to as _dynamic tokens_ and represented by `<*>`.
 * For more information see [Log anomaly detection](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/LogsAnomalyDetection.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loganomalydetector.html */

export interface LogsLogAnomalyDetector extends ResourceAttributes {
  Type: 'AWS::Logs::LogAnomalyDetector'
  Properties: {
    /**
     * - The ID of the account to create the anomaly detector in.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loganomalydetector.html#cfn-logs-loganomalydetector-accountid */
    AccountId?: string | Intrinsic
    /**
     * - The number of days to have visibility on an anomaly. After this time period has elapsed for an anomaly, it will be automatically baselined and the anomaly detector will treat new occurrences of a similar anomaly as normal. Therefore, if you do not correct the cause of an anomaly during the time period specified in `AnomalyVisibilityTime`, it will be considered normal going forward and will not be detected as an anomaly.
     * - _Required_: No
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loganomalydetector.html#cfn-logs-loganomalydetector-anomalyvisibilitytime */
    AnomalyVisibilityTime?: number | Intrinsic
    /**
     * - A name for this anomaly detector.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loganomalydetector.html#cfn-logs-loganomalydetector-detectorname */
    DetectorName?: string | Intrinsic
    /**
     * - Specifies how often the anomaly detector is to run and look for anomalies. Set this value according to the frequency that the log group receives new logs. For example, if the log group receives new log events every 10 minutes, then 15 minutes might be a good setting for `EvaluationFrequency` .
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `FIVE_MIN | TEN_MIN | FIFTEEN_MIN | THIRTY_MIN | ONE_HOUR`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loganomalydetector.html#cfn-logs-loganomalydetector-evaluationfrequency */
    EvaluationFrequency?: string | Intrinsic
    /**
     * - You can use this parameter to limit the anomaly detection model to examine only log events that match the pattern you specify here. For more information, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loganomalydetector.html#cfn-logs-loganomalydetector-filterpattern */
    FilterPattern?: string | Intrinsic
    /**
     * - Optionally assigns a AWS KMS key to secure this anomaly detector and its findings. If a key is assigned, the anomalies found and the model used by this detector are encrypted at rest with the key. If a key is assigned to an anomaly detector, a user must have permissions for both this key and for the anomaly detector to retrieve information about the anomalies that it finds.
     * - For more information about using a AWS KMS key and to see the required IAM policy, see [Use a AWS KMS key with an anomaly detector](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/LogsAnomalyDetection-KMS.html).
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loganomalydetector.html#cfn-logs-loganomalydetector-kmskeyid */
    KmsKeyId?: string | Intrinsic
    /**
     * - The ARN of the log group that is associated with this anomaly detector. You can specify only one log group ARN.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loganomalydetector.html#cfn-logs-loganomalydetector-loggrouparnlist */
    LogGroupArnList?: (string | Intrinsic)[]
  }
}
