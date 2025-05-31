import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A control condition is an alarm that you specify for a practice run. When you configure practice runs with zonal autoshift for a resource, you specify Amazon CloudWatch alarms, which you create in CloudWatch to use with the practice run. The alarms that you specify are an _outcome alarm_, to monitor application health during practice runs and, optionally, a _blocking alarm_, to block practice runs from starting or to interrupt a practice run in progress.
 * Control condition alarms do not apply for autoshifts.
 * For more information, see [Considerations when you configure zonal autoshift](https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-autoshift.considerations.html) in the Route 53 ARC Developer Guide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-zonalautoshiftconfiguration.html */

export interface ControlCondition {
    /**
     * - The Amazon Resource Name (ARN) for an Amazon CloudWatch alarm that you specify as a control condition for a practice run.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Minimum_: `8`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-zonalautoshiftconfiguration.html#cfn-arczonalshift-zonalautoshiftconfiguration-controlcondition-alarmidentifier */
    "AlarmIdentifier": string | Intrinsic;
    /**
     * - The type of alarm specified for a practice run. You can only specify Amazon CloudWatch alarms for practice runs, so the only valid value is `CLOUDWATCH`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z]*$`
     * - _Minimum_: `8`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-zonalautoshiftconfiguration.html#cfn-arczonalshift-zonalautoshiftconfiguration-controlcondition-type */
    "Type": string | Intrinsic;
}

/**
 * A practice run configuration for a resource includes the Amazon CloudWatch alarms that you've specified for a practice run, as well as any blocked dates or blocked windows for the practice run.
 * When a resource has a practice run configuation, Route 53 ARC starts weekly zonal shifts for the resource, to shift traffic away from an Availability Zone. Weekly practice runs help you to make sure that your application can continue to operate normally with the loss of one Availability Zone.
 * You can update or delete a practice run configuration. When you delete a practice run configuration, zonal autoshift is disabled for the resource. A practice run configuration is required when zonal autoshift is enabled.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-zonalautoshiftconfiguration.html */

export interface PracticeRunConfiguration {
    /**
     * - An array of one or more dates that you can specify when AWS does not start practice runs for a resource. Dates are in UTC.
     * - Specify blocked dates in the format `YYYY-MM-DD`, separated by spaces.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `10 | 0`
     * - _Maximum_: `10 | 15`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-zonalautoshiftconfiguration.html#cfn-arczonalshift-zonalautoshiftconfiguration-practicerunconfiguration-blockeddates */
    "BlockedDates"?: (string | Intrinsic)[];
    /**
     * - An array of one or more days and times that you can specify when Route 53 ARC does not start practice runs for a resource. Days and times are in UTC.
     * - Specify blocked windows in the format `DAY:HH:MM-DAY:HH:MM`, separated by spaces. For example, `MON:18:30-MON:19:30 TUE:18:30-TUE:19:30`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `19 | 0`
     * - _Maximum_: `19 | 15`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-zonalautoshiftconfiguration.html#cfn-arczonalshift-zonalautoshiftconfiguration-practicerunconfiguration-blockedwindows */
    "BlockedWindows"?: (string | Intrinsic)[];
    /**
     * - An optional alarm that you can specify that blocks practice runs when the alarm is in an `ALARM` state. When a blocking alarm goes into an `ALARM` state, it prevents practice runs from being started, and ends practice runs that are in progress.
     * - _Required_: No
     * - _Type_: Array of [ControlCondition](./aws-properties-arczonalshift-zonalautoshiftconfiguration-controlcondition.html)
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-zonalautoshiftconfiguration.html#cfn-arczonalshift-zonalautoshiftconfiguration-practicerunconfiguration-blockingalarms */
    "BlockingAlarms"?: ControlCondition[];
    /**
     * - The alarm that you specify to monitor the health of your application during practice runs. When the outcome alarm goes into an `ALARM` state, the practice run is ended and the outcome is set to `FAILED`.
     * - _Required_: Yes
     * - _Type_: Array of [ControlCondition](./aws-properties-arczonalshift-zonalautoshiftconfiguration-controlcondition.html)
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-zonalautoshiftconfiguration.html#cfn-arczonalshift-zonalautoshiftconfiguration-practicerunconfiguration-outcomealarms */
    "OutcomeAlarms": ControlCondition[];
}

/**
 * The zonal autoshift configuration for a resource includes the practice run configuration and the status for running autoshifts, zonal autoshift status. When a resource has a practice run configuation, Route 53 ARC starts weekly zonal shifts for the resource, to shift traffic away from an Availability Zone. Weekly practice runs help you to make sure that your application can continue to operate normally with the loss of one Availability Zone.
 * You can update the zonal autoshift autoshift status to enable or disable zonal autoshift. When zonal autoshift is `ENABLED`, you authorize AWS to shift away resource traffic for an application from an Availability Zone during events, on your behalf, to help reduce time to recovery. Traffic is also shifted away for the required weekly practice runs.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-zonalautoshiftconfiguration.html */

export interface ARCZonalShiftZonalAutoshiftConfiguration extends ResourceAttributes {
    "Type": "AWS::ARCZonalShift::ZonalAutoshiftConfiguration";
    "Properties": {
        /**
         * - A practice run configuration for a resource includes the Amazon CloudWatch alarms that you've specified for a practice run, as well as any blocked dates or blocked windows for the practice run. When a resource has a practice run configuration, ARC shifts traffic for the resource weekly for practice runs.
         * - Practice runs are required for zonal autoshift. The zonal shifts that ARC starts for practice runs help you to ensure that shifting away traffic from an Availability Zone during an autoshift is safe for your application.
         * - You can update or delete a practice run configuration. Before you delete a practice run configuration, you must disable zonal autoshift for the resource. A practice run configuration is required when zonal autoshift is enabled.
         * - _Required_: No
         * - _Type_: [PracticeRunConfiguration](./aws-properties-arczonalshift-zonalautoshiftconfiguration-practicerunconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-zonalautoshiftconfiguration.html#cfn-arczonalshift-zonalautoshiftconfiguration-practicerunconfiguration */
        "PracticeRunConfiguration"?: PracticeRunConfiguration;
        /**
         * - The identifier for the resource that AWS shifts traffic for. The identifier is the Amazon Resource Name (ARN) for the resource.
         * - At this time, supported resources are Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `8`
         * - _Maximum_: `1024`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-zonalautoshiftconfiguration.html#cfn-arczonalshift-zonalautoshiftconfiguration-resourceidentifier */
        "ResourceIdentifier"?: string | Intrinsic;
        /**
         * - When zonal autoshift is `ENABLED`, you authorize AWS to shift away resource traffic for an application from an Availability Zone during events, on your behalf, to help reduce time to recovery. Traffic is also shifted away for the required weekly practice runs.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `ENABLED`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-zonalautoshiftconfiguration.html#cfn-arczonalshift-zonalautoshiftconfiguration-zonalautoshiftstatus */
        "ZonalAutoshiftStatus"?: string | Intrinsic;
    };
}