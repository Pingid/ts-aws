import type { Intrinsic } from '../intrinsic/index.js' /**
 * The day that you want yout dataset to refresh.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html */

export interface RefreshOnDay {
  /**
   * - The day of the month that you want your dataset to refresh. This value is required for monthly refresh intervals.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html#cfn-quicksight-refreshschedule-refreshonday-dayofmonth */
  DayOfMonth?: string | Intrinsic
  /**
   * - The day of the week that you want to schedule the refresh on. This value is required for weekly and monthly refresh intervals.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SUNDAY | MONDAY | TUESDAY | WEDNESDAY | THURSDAY | FRIDAY | SATURDAY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html#cfn-quicksight-refreshschedule-refreshonday-dayofweek */
  DayOfWeek?: string | Intrinsic
}

/**
 * The frequency for the refresh schedule.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html */

export interface ScheduleFrequency {
  /**
   * - The interval between scheduled refreshes. Valid values are as follows:
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `MINUTE15 | MINUTE30 | HOURLY | DAILY | WEEKLY | MONTHLY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html#cfn-quicksight-refreshschedule-schedulefrequency-interval */
  Interval?: string | Intrinsic
  /**
   * - The day of the week that you want to schedule the refresh on. This value is required for weekly and monthly refresh intervals.
   * - _Required_: No
   * - _Type_: [RefreshOnDay](./aws-properties-quicksight-refreshschedule-refreshonday.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html#cfn-quicksight-refreshschedule-schedulefrequency-refreshonday */
  RefreshOnDay?: RefreshOnDay
  /**
   * - The time of day that you want the dataset to refresh. This value is expressed in HH:MM format. This field is not required for schedules that refresh hourly.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html#cfn-quicksight-refreshschedule-schedulefrequency-timeoftheday */
  TimeOfTheDay?: string | Intrinsic
  /**
   * - The timezone that you want the refresh schedule to use. The timezone ID must match a corresponding ID found on `java.util.time.getAvailableIDs()`.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html#cfn-quicksight-refreshschedule-schedulefrequency-timezone */
  TimeZone?: string | Intrinsic
}

/**
 * A summary of a configured refresh schedule for a dataset.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html */

export interface RefreshScheduleMap {
  /**
   * - The type of refresh that a dataset undergoes. Valid values are as follows:
   * - For more information on full and incremental refreshes, see [Refreshing SPICE data](https://docs.aws.amazon.com/quicksight/latest/user/refreshing-imported-data.html) in the _Amazon QuickSight User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `FULL_REFRESH | INCREMENTAL_REFRESH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html#cfn-quicksight-refreshschedule-refreshschedulemap-refreshtype */
  RefreshType?: string | Intrinsic
  /**
   * - The frequency for the refresh schedule.
   * - _Required_: No
   * - _Type_: [ScheduleFrequency](./aws-properties-quicksight-refreshschedule-schedulefrequency.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html#cfn-quicksight-refreshschedule-refreshschedulemap-schedulefrequency */
  ScheduleFrequency?: ScheduleFrequency
  /**
   * - An identifier for the refresh schedule.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html#cfn-quicksight-refreshschedule-refreshschedulemap-scheduleid */
  ScheduleId?: string | Intrinsic
  /**
   * - Time after which the refresh schedule can be started, expressed in `YYYY-MM-DDTHH:MM:SS` format.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html#cfn-quicksight-refreshschedule-refreshschedulemap-startafterdatetime */
  StartAfterDateTime?: string | Intrinsic
}

/**
 * Creates a refresh schedule for a dataset in Amazon QuickSight.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html */

export interface QuickSightRefreshSchedule {
  Type: 'AWS::QuickSight::RefreshSchedule'
  Properties: {
    /**
     * - The AWS account ID of the account that you are creating a schedule in.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[0-9]{12}$`
     * - _Minimum_: `12`
     * - _Maximum_: `12`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html#cfn-quicksight-refreshschedule-awsaccountid */
    AwsAccountId?: string | Intrinsic
    /**
     * - The ID of the dataset that you are creating a refresh schedule for.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html#cfn-quicksight-refreshschedule-datasetid */
    DataSetId?: string | Intrinsic
    /**
     * - The refresh schedule of a dataset.
     * - _Required_: No
     * - _Type_: [RefreshScheduleMap](./aws-properties-quicksight-refreshschedule-refreshschedulemap.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-refreshschedule.html#cfn-quicksight-refreshschedule-schedule */
    Schedule?: RefreshScheduleMap
  }
}
