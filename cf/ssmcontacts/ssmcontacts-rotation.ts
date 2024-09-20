import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A container of a key-value name pair.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html */

export interface Tag {
  /**
   * - Name of the object key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-tag-key */
  Key: string | Intrinsic
  /**
   * - Value of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-tag-value */
  Value: string | Intrinsic
}

/**
 * Information about on-call rotations that recur monthly.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html */

export interface MonthlySetting {
  /**
   * - The day of the month when monthly recurring on-call rotations begin.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `31`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-monthlysetting-dayofmonth */
  DayOfMonth: number | Intrinsic
  /**
   * - The time of day when a monthly recurring on-call shift rotation begins.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-monthlysetting-handofftime */
  HandOffTime: string | Intrinsic
}

/**
 * Information about rotations that recur weekly.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html */

export interface WeeklySetting {
  /**
   * - The day of the week when weekly recurring on-call shift rotations begins.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `MON | TUE | WED | THU | FRI | SAT | SUN`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-weeklysetting-dayofweek */
  DayOfWeek: string | Intrinsic
  /**
   * - The time of day when a weekly recurring on-call shift rotation begins.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-weeklysetting-handofftime */
  HandOffTime: string | Intrinsic
}

/**
 * Information about when an on-call shift begins and ends.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html */

export interface CoverageTime {
  /**
   * - Information about when an on-call rotation shift ends.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-coveragetime-endtime */
  EndTime: string | Intrinsic
  /**
   * - Information about when an on-call rotation shift begins.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-coveragetime-starttime */
  StartTime: string | Intrinsic
}

/**
 * Information about the days of the week that the on-call rotation coverage includes.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html */

export interface ShiftCoverage {
  /**
   * - The start and end times of the shift.
   * - _Required_: Yes
   * - _Type_: Array of [CoverageTime](./aws-properties-ssmcontacts-rotation-coveragetime.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-shiftcoverage-coveragetimes */
  CoverageTimes: CoverageTime[]
  /**
   * - A list of days on which the schedule is active.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `MON | TUE | WED | THU | FRI | SAT | SUN`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-shiftcoverage-dayofweek */
  DayOfWeek: string | Intrinsic
}

/**
 * Information about when an on-call rotation is in effect and how long the rotation period lasts.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html */

export interface RecurrenceSettings {
  /**
   * - Information about on-call rotations that recur daily.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-recurrencesettings-dailysettings */
  DailySettings?: (string | Intrinsic)[]
  /**
   * - Information about on-call rotations that recur monthly.
   * - _Required_: No
   * - _Type_: Array of [MonthlySetting](./aws-properties-ssmcontacts-rotation-monthlysetting.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-recurrencesettings-monthlysettings */
  MonthlySettings?: MonthlySetting[]
  /**
   * - The number of contacts, or shift team members designated to be on call concurrently during a shift. For example, in an on-call schedule that contains ten contacts, a value of `2` designates that two of them are on call at any given time.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-recurrencesettings-numberofoncalls */
  NumberOfOnCalls?: number | Intrinsic
  /**
   * - The number of days, weeks, or months a single rotation lasts.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-recurrencesettings-recurrencemultiplier */
  RecurrenceMultiplier?: number | Intrinsic
  /**
   * - Information about the days of the week included in on-call rotation coverage.
   * - _Required_: No
   * - _Type_: Array of [ShiftCoverage](./aws-properties-ssmcontacts-rotation-shiftcoverage.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-recurrencesettings-shiftcoverages */
  ShiftCoverages?: ShiftCoverage[]
  /**
   * - Information about on-call rotations that recur weekly.
   * - _Required_: No
   * - _Type_: Array of [WeeklySetting](./aws-properties-ssmcontacts-rotation-weeklysetting.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-recurrencesettings-weeklysettings */
  WeeklySettings?: WeeklySetting[]
}

/**
 * Specifies a rotation in an on-call schedule.
 * ###### Note
 *
 * **Template example**: We recommend creating all Incident Manager `Contacts` resources using a single AWS CloudFormation template. For a demonstration, see the examples for [AWS::SSMContacts::Contacts](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html */

export interface SSMContactsRotation extends ResourceAttributes {
  Type: 'AWS::SSMContacts::Rotation'
  Properties: {
    /**
     * - The Amazon Resource Names (ARNs) of the contacts to add to the rotation.
     * - The order in which you list the contacts is their shift order in the rotation schedule.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `0`
     * - _Maximum_: `25`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-contactids */
    ContactIds: (string | Intrinsic)[]
    /**
     * - The name for the rotation.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-name */
    Name: string | Intrinsic
    /**
     * - Information about the rule that specifies when shift team members rotate.
     * - _Required_: Yes
     * - _Type_: [RecurrenceSettings](./aws-properties-ssmcontacts-rotation-recurrencesettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-recurrence */
    Recurrence: RecurrenceSettings
    /**
     * - The date and time the rotation goes into effect.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-starttime */
    StartTime: string | Intrinsic
    /**
     * - Optional metadata to assign to the rotation. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For more information, see [Tagging Incident Manager resources](https://docs.aws.amazon.com/incident-manager/latest/userguide/tagging.html) in the _Incident Manager User Guide_.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ssmcontacts-rotation-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-tags */
    Tags?: Tag[]
    /**
     * - The time zone to base the rotation’s activity on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los\_Angeles", "UTC", or "Asia/Seoul". For more information, see the [Time Zone Database](https://www.iana.org/time-zones) on the IANA website.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[:a-zA-Z0-9_\-\s\.\\/]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-rotation.html#cfn-ssmcontacts-rotation-timezoneid */
    TimeZoneId: string | Intrinsic
  }
}
