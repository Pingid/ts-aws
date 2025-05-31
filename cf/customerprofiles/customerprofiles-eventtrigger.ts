import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A key-value pair to associate with a resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html */

export interface Tag {
    /**
     * - The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, \_, ., /, =, +, and -.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, \_, ., /, =, +, and -.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Defines a limit and the time period during which it is enforced.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html */

export interface Period {
    /**
     * - The maximum allowed number of destination invocations per profile.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-period-maxinvocationsperprofile */
    "MaxInvocationsPerProfile"?: number | Intrinsic;
    /**
     * - The unit of time.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `HOURS | DAYS | WEEKS | MONTHS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-period-unit */
    "Unit": string | Intrinsic;
    /**
     * - If set to true, there is no limit on the number of destination invocations per profile. The default is false.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-period-unlimited */
    "Unlimited"?: boolean | Intrinsic;
    /**
     * - The amount of time of the specified unit.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `24`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-period-value */
    "Value": number | Intrinsic;
}

/**
 * Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html */

export interface EventTriggerLimits {
    /**
     * - Specifies that an event will only trigger the destination if it is processed within a certain latency period.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-eventtriggerlimits-eventexpiration */
    "EventExpiration"?: number | Intrinsic;
    /**
     * - A list of time periods during which the limits apply.
     * - _Required_: No
     * - _Type_: Array of [Period](./aws-properties-customerprofiles-eventtrigger-period.html)
     * - _Minimum_: `1`
     * - _Maximum_: `4`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-eventtriggerlimits-periods */
    "Periods"?: Period[];
}

/**
 * The criteria that a specific object attribute must meet to trigger the destination.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html */

export interface ObjectAttribute {
    /**
     * - The operator used to compare an attribute against a list of values.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `INCLUSIVE | EXCLUSIVE | CONTAINS | BEGINS_WITH | ENDS_WITH | GREATER_THAN | LESS_THAN | GREATER_THAN_OR_EQUAL | LESS_THAN_OR_EQUAL | EQUAL | BEFORE | AFTER | ON | BETWEEN | NOT_BETWEEN`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-objectattribute-comparisonoperator */
    "ComparisonOperator": string | Intrinsic;
    /**
     * - A field defined within an object type.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_.-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-objectattribute-fieldname */
    "FieldName"?: string | Intrinsic;
    /**
     * - An attribute contained within a source object.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-objectattribute-source */
    "Source"?: string | Intrinsic;
    /**
     * - The amount of time of the specified unit.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1 | 1`
     * - _Maximum_: `255 | 10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-objectattribute-values */
    "Values": (string | Intrinsic)[];
}

/**
 * A specific event dimension to be assessed.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html */

export interface EventTriggerDimension {
    /**
     * - A list of object attributes to be evaluated.
     * - _Required_: Yes
     * - _Type_: Array of [ObjectAttribute](./aws-properties-customerprofiles-eventtrigger-objectattribute.html)
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-eventtriggerdimension-objectattributes */
    "ObjectAttributes": ObjectAttribute[];
}

/**
 * Specifies the circumstances under which the event should trigger the destination.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html */

export interface EventTriggerCondition {
    /**
     * - A list of dimensions to be evaluated for the event.
     * - _Required_: Yes
     * - _Type_: Array of [EventTriggerDimension](./aws-properties-customerprofiles-eventtrigger-eventtriggerdimension.html)
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-eventtriggercondition-eventtriggerdimensions */
    "EventTriggerDimensions": EventTriggerDimension[];
    /**
     * - The operator used to combine multiple dimensions.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ANY | ALL | NONE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-eventtriggercondition-logicaloperator */
    "LogicalOperator": string | Intrinsic;
}

/**
 * Specifies the rules to perform an action based on customer ingested data.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html */

export interface CustomerProfilesEventTrigger extends ResourceAttributes {
    "Type": "AWS::CustomerProfiles::EventTrigger";
    "Properties": {
        /**
         * - The description of the event trigger.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `1000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-description */
        "Description"?: string | Intrinsic;
        /**
         * - The unique name of the domain.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_-]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-domainname */
        "DomainName": string | Intrinsic;
        /**
         * - A list of conditions that determine when an event should trigger the destination.
         * - _Required_: Yes
         * - _Type_: Array of [EventTriggerCondition](./aws-properties-customerprofiles-eventtrigger-eventtriggercondition.html)
         * - _Minimum_: `1`
         * - _Maximum_: `5`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-eventtriggerconditions */
        "EventTriggerConditions": EventTriggerCondition[];
        /**
         * - Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.
         * - _Required_: No
         * - _Type_: [EventTriggerLimits](./aws-properties-customerprofiles-eventtrigger-eventtriggerlimits.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-eventtriggerlimits */
        "EventTriggerLimits"?: EventTriggerLimits;
        /**
         * - The unique name of the event trigger.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_-]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-eventtriggername */
        "EventTriggerName": string | Intrinsic;
        /**
         * - The unique name of the object type.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z_][a-zA-Z_0-9-]*$`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-objecttypename */
        "ObjectTypeName": string | Intrinsic;
        /**
         * - The destination is triggered only for profiles that meet the criteria of a segment definition.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_-]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-segmentfilter */
        "SegmentFilter"?: string | Intrinsic;
        /**
         * - An array of key-value pairs to apply to this resource.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-customerprofiles-eventtrigger-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-eventtrigger.html#cfn-customerprofiles-eventtrigger-tags */
        "Tags"?: Tag[];
    };
}