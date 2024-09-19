import type { Intrinsic } from '../intrinsic/index.js' /**
 * The `AWS::Lightsail::Alarm` resource specifies an alarm that can be used to monitor a single metric for one of your Lightsail resources.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html */

export interface LightsailAlarm {
  Type: 'AWS::Lightsail::Alarm'
  Properties: {
    /**
     * - The name of the alarm.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `\w[\w\-]*\w`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-alarmname */
    AlarmName: string | Intrinsic
    /**
     * - The arithmetic operation to use when comparing the specified statistic and threshold.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `GreaterThanOrEqualToThreshold | GreaterThanThreshold | LessThanThreshold | LessThanOrEqualToThreshold`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-comparisonoperator */
    ComparisonOperator: string | Intrinsic
    /**
     * - The contact protocols for the alarm, such as `Email`, `SMS` (text messaging), or both.
     * - _Allowed Values_: `Email` | `SMS`
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-contactprotocols */
    ContactProtocols?: (string | Intrinsic)[]
    /**
     * - The number of data points within the evaluation periods that must be breaching to cause the alarm to go to the `ALARM` state.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-datapointstoalarm */
    DatapointsToAlarm?: number | Intrinsic
    /**
     * - The number of periods over which data is compared to the specified threshold.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-evaluationperiods */
    EvaluationPeriods: number | Intrinsic
    /**
     * - The name of the metric associated with the alarm.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `CPUUtilization | NetworkIn | NetworkOut | StatusCheckFailed | StatusCheckFailed_Instance | StatusCheckFailed_System | ClientTLSNegotiationErrorCount | HealthyHostCount | UnhealthyHostCount | HTTPCode_LB_4XX_Count | HTTPCode_LB_5XX_Count | HTTPCode_Instance_2XX_Count | HTTPCode_Instance_3XX_Count | HTTPCode_Instance_4XX_Count | HTTPCode_Instance_5XX_Count | InstanceResponseTime | RejectedConnectionCount | RequestCount | DatabaseConnections | DiskQueueDepth | FreeStorageSpace | NetworkReceiveThroughput | NetworkTransmitThroughput | BurstCapacityTime | BurstCapacityPercentage`
     * - _Update requires_: Updates are not supported.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-metricname */
    MetricName: string | Intrinsic
    /**
     * - The name of the Lightsail resource that the alarm monitors.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: Updates are not supported.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-monitoredresourcename */
    MonitoredResourceName: string | Intrinsic
    /**
     * - A Boolean value indicating whether the alarm is enabled.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-notificationenabled */
    NotificationEnabled?: boolean | Intrinsic
    /**
     * - The alarm states that trigger a notification.
     * - _Allowed Values_: `OK` | `ALARM` | `INSUFFICIENT_DATA`
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-notificationtriggers */
    NotificationTriggers?: (string | Intrinsic)[]
    /**
     * - The value against which the specified statistic is compared.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-threshold */
    Threshold: number | Intrinsic
    /**
     * - Specifies how the alarm handles missing data points.
     * - An alarm can treat missing data in the following ways:
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `breaching | notBreaching | ignore | missing`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html#cfn-lightsail-alarm-treatmissingdata */
    TreatMissingData?: string | Intrinsic
  }
}
