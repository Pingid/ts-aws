import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A key-value pair to associate with a resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html */

export interface Tag {
    /**
     * - The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, \_, ., /, =, +, and -
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, \_, ., /, =, +, and -
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The start time or end time for an hours of operation.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html */

export interface HoursOfOperationTimeSlice {
    /**
     * - The hours.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `23`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-hoursofoperationtimeslice-hours */
    "Hours": number | Intrinsic;
    /**
     * - The minutes.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `59`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-hoursofoperationtimeslice-minutes */
    "Minutes": number | Intrinsic;
}

/**
 * Contains information about the hours of operation.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html */

export interface HoursOfOperationConfig {
    /**
     * - The day that the hours of operation applies to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `SUNDAY | MONDAY | TUESDAY | WEDNESDAY | THURSDAY | FRIDAY | SATURDAY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-hoursofoperationconfig-day */
    "Day": string | Intrinsic;
    /**
     * - The end time that your contact center closes.
     * - _Required_: Yes
     * - _Type_: [HoursOfOperationTimeSlice](./aws-properties-connect-hoursofoperation-hoursofoperationtimeslice.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-hoursofoperationconfig-endtime */
    "EndTime": HoursOfOperationTimeSlice;
    /**
     * - The start time that your contact center opens.
     * - _Required_: Yes
     * - _Type_: [HoursOfOperationTimeSlice](./aws-properties-connect-hoursofoperation-hoursofoperationtimeslice.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-hoursofoperationconfig-starttime */
    "StartTime": HoursOfOperationTimeSlice;
}

/**
 * The start time or end time for an hours of operation override.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html */

export interface OverrideTimeSlice {
    /**
     * - The hours.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `23`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-overridetimeslice-hours */
    "Hours": number | Intrinsic;
    /**
     * - The minutes.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `59`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-overridetimeslice-minutes */
    "Minutes": number | Intrinsic;
}

/**
 * Information about the hours of operation override config: day, start time, and end time.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html */

export interface HoursOfOperationOverrideConfig {
    /**
     * - The day that the hours of operation override applies to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `SUNDAY | MONDAY | TUESDAY | WEDNESDAY | THURSDAY | FRIDAY | SATURDAY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-hoursofoperationoverrideconfig-day */
    "Day": string | Intrinsic;
    /**
     * - The end time that your contact center closes if overrides are applied.
     * - _Required_: Yes
     * - _Type_: [OverrideTimeSlice](./aws-properties-connect-hoursofoperation-overridetimeslice.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-hoursofoperationoverrideconfig-endtime */
    "EndTime": OverrideTimeSlice;
    /**
     * - The start time when your contact center opens if overrides are applied.
     * - _Required_: Yes
     * - _Type_: [OverrideTimeSlice](./aws-properties-connect-hoursofoperation-overridetimeslice.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-hoursofoperationoverrideconfig-starttime */
    "StartTime": OverrideTimeSlice;
}

/**
 * Information about the hours of operations override.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html */

export interface HoursOfOperationOverride {
    /**
     * - The date from which the hours of operation override would be effective.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^\d{4}-\d{2}-\d{2}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-hoursofoperationoverride-effectivefrom */
    "EffectiveFrom": string | Intrinsic;
    /**
     * - The date till which the hours of operation override would be effective.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^\d{4}-\d{2}-\d{2}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-hoursofoperationoverride-effectivetill */
    "EffectiveTill": string | Intrinsic;
    /**
     * - The identifier for the hours of operation override.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[-a-zA-Z0-9]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-hoursofoperationoverride-hoursofoperationoverrideid */
    "HoursOfOperationOverrideId"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: Array of [HoursOfOperationOverrideConfig](./aws-properties-connect-hoursofoperation-hoursofoperationoverrideconfig.html)
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-hoursofoperationoverride-overrideconfig */
    "OverrideConfig": HoursOfOperationOverrideConfig[];
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `250`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-hoursofoperationoverride-overridedescription */
    "OverrideDescription"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `127`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-hoursofoperationoverride-overridename */
    "OverrideName": string | Intrinsic;
}

/**
 * Specifies hours of operation.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html */

export interface ConnectHoursOfOperation extends ResourceAttributes {
    "Type": "AWS::Connect::HoursOfOperation";
    "Properties": {
        /**
         * - Configuration information for the hours of operation.
         * - _Required_: Yes
         * - _Type_: Array of [HoursOfOperationConfig](./aws-properties-connect-hoursofoperation-hoursofoperationconfig.html)
         * - _Maximum_: `100`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-config */
        "Config": HoursOfOperationConfig[];
        /**
         * - The description for the hours of operation.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `250`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-description */
        "Description"?: string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Array of [HoursOfOperationOverride](./aws-properties-connect-hoursofoperation-hoursofoperationoverride.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-hoursofoperationoverrides */
        "HoursOfOperationOverrides"?: HoursOfOperationOverride[];
        /**
         * - The Amazon Resource Name (ARN) of the instance.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-instancearn */
        "InstanceArn": string | Intrinsic;
        /**
         * - The name for the hours of operation.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `127`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-name */
        "Name": string | Intrinsic;
        /**
         * - The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-connect-hoursofoperation-tag.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-tags */
        "Tags"?: Tag[];
        /**
         * - The time zone for the hours of operation.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-hoursofoperation.html#cfn-connect-hoursofoperation-timezone */
        "TimeZone": string | Intrinsic;
    };
}