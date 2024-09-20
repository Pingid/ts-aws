import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The CIS targets.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html */

export interface CisTargets {
  /**
   * - The CIS target account ids.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `10000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-cistargets-accountids */
  AccountIds: (string | Intrinsic)[]
  /**
   * - The CIS target resource tags.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Pattern_: `^.+$`
   * - _Minimum_: `1`
   * - _Maximum_: `5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-cistargets-targetresourcetags */
  TargetResourceTags?: (string | Intrinsic)[]
}

/**
 * A monthly schedule.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html */

export interface MonthlySchedule {
  /**
   * - The monthly schedule's day.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `MON | TUE | WED | THU | FRI | SAT | SUN`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-monthlyschedule-day */
  Day: string | Intrinsic
  /**
   * - The monthly schedule's start time.
   * - _Required_: Yes
   * - _Type_: [Time](./aws-properties-inspectorv2-cisscanconfiguration-time.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-monthlyschedule-starttime */
  StartTime: Time
}

/**
 * A weekly schedule.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html */

export interface WeeklySchedule {
  /**
   * - The weekly schedule's days.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `7`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-weeklyschedule-days */
  Days: (string | Intrinsic)[]
  /**
   * - The weekly schedule's start time.
   * - _Required_: Yes
   * - _Type_: [Time](./aws-properties-inspectorv2-cisscanconfiguration-time.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-weeklyschedule-starttime */
  StartTime: Time
}

/**
 * The time.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html */

export interface Time {
  /**
   * - The time of day in 24-hour format (00:00).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-time-timeofday */
  TimeOfDay: string | Intrinsic
  /**
   * - The timezone.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-time-timezone */
  TimeZone: string | Intrinsic
}

/**
 * A daily schedule.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html */

export interface DailySchedule {
  /**
   * - The schedule start time.
   * - _Required_: Yes
   * - _Type_: [Time](./aws-properties-inspectorv2-cisscanconfiguration-time.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-dailyschedule-starttime */
  StartTime: Time
}

/**
 * The schedule the CIS scan configuration runs on. Each CIS scan configuration has exactly one type of schedule.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html */

export interface Schedule {
  /**
   * - A daily schedule.
   * - _Required_: No
   * - _Type_: [DailySchedule](./aws-properties-inspectorv2-cisscanconfiguration-dailyschedule.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-schedule-daily */
  Daily?: DailySchedule
  /**
   * - A monthly schedule.
   * - _Required_: No
   * - _Type_: [MonthlySchedule](./aws-properties-inspectorv2-cisscanconfiguration-monthlyschedule.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-schedule-monthly */
  Monthly?: MonthlySchedule
  /**
   * - A one time schedule.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-schedule-onetime */
  OneTime?: any | Intrinsic
  /**
   * - A weekly schedule.
   * - _Required_: No
   * - _Type_: [WeeklySchedule](./aws-properties-inspectorv2-cisscanconfiguration-weeklyschedule.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-schedule-weekly */
  Weekly?: WeeklySchedule
}

/**
 * The CIS scan configuration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html */

export interface InspectorV2CisScanConfiguration extends ResourceAttributes {
  Type: 'AWS::InspectorV2::CisScanConfiguration'
  Properties: {
    /**
     * - The name of the CIS scan configuration.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-scanname */
    ScanName: string | Intrinsic
    /**
     * - The CIS scan configuration's schedule.
     * - _Required_: Yes
     * - _Type_: [Schedule](./aws-properties-inspectorv2-cisscanconfiguration-schedule.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-schedule */
    Schedule: Schedule
    /**
     * - The CIS scan configuration's CIS Benchmark level.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `LEVEL_1 | LEVEL_2`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-securitylevel */
    SecurityLevel: string | Intrinsic
    /**
     * - The CIS scan configuration's tags.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^.{2,127}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-tags */
    Tags?: Record<string, string | Intrinsic>
    /**
     * - The CIS scan configuration's targets.
     * - _Required_: Yes
     * - _Type_: [CisTargets](./aws-properties-inspectorv2-cisscanconfiguration-cistargets.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-cisscanconfiguration.html#cfn-inspectorv2-cisscanconfiguration-targets */
    Targets: CisTargets
  }
}
