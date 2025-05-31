import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A set of key/value pairs that are used to manage the resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html */

export interface Tag {
    /**
     * - The tag's key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html#cfn-iot-thingtype-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag's value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html#cfn-iot-thingtype-tag-value */
    "Value": string | Intrinsic;
}

/**
 * An object that represents the connection attribute, the thing attribute, and the MQTT 5 user property key.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html */

export interface PropagatingAttribute {
    /**
     * - The attribute associated with the connection details.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `iot:ClientId | iot:Thing.ThingName`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html#cfn-iot-thingtype-propagatingattribute-connectionattribute */
    "ConnectionAttribute"?: string | Intrinsic;
    /**
     * - The thing attribute that is propagating for MQTT 5 message enrichment.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9_.,@/:#-]+`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html#cfn-iot-thingtype-propagatingattribute-thingattribute */
    "ThingAttribute"?: string | Intrinsic;
    /**
     * - The key of the MQTT 5 user property, which is a key-value pair.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9:$.]+`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html#cfn-iot-thingtype-propagatingattribute-userpropertykey */
    "UserPropertyKey": string | Intrinsic;
}

/**
 * The configuration to add user-defined properties to enrich MQTT 5 messages.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html */

export interface Mqtt5Configuration {
    /**
     * - An object that represents the connection attribute, the thing attribute, and the MQTT 5 user property key.
     * - _Required_: No
     * - _Type_: Array of [PropagatingAttribute](./aws-properties-iot-thingtype-propagatingattribute.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html#cfn-iot-thingtype-mqtt5configuration-propagatingattributes */
    "PropagatingAttributes"?: PropagatingAttribute[];
}

/**
 * The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html */

export interface ThingTypeProperties {
    /**
     * - The configuration to add user-defined properties to enrich MQTT 5 messages.
     * - _Required_: No
     * - _Type_: [Mqtt5Configuration](./aws-properties-iot-thingtype-mqtt5configuration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html#cfn-iot-thingtype-thingtypeproperties-mqtt5configuration */
    "Mqtt5Configuration"?: Mqtt5Configuration;
    /**
     * - A list of searchable thing attribute names.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `128 | 3`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html#cfn-iot-thingtype-thingtypeproperties-searchableattributes */
    "SearchableAttributes"?: (string | Intrinsic)[];
    /**
     * - The description of the thing type.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\p{Graph}\x20]*`
     * - _Maximum_: `2028`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html#cfn-iot-thingtype-thingtypeproperties-thingtypedescription */
    "ThingTypeDescription"?: string | Intrinsic;
}

/**
 * Creates a new thing type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html */

export interface IoTThingType extends ResourceAttributes {
    "Type": "AWS::IoT::ThingType";
    "Properties": {
        /**
         * - Deprecates a thing type. You can not associate new things with deprecated thing type.
         * - Requires permission to access the [DeprecateThingType](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html#cfn-iot-thingtype-deprecatethingtype */
        "DeprecateThingType"?: boolean | Intrinsic;
        /**
         * - Metadata which can be used to manage the thing type.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-iot-thingtype-tag.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html#cfn-iot-thingtype-tags */
        "Tags"?: Tag[];
        /**
         * - The name of the thing type.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9:_-]+`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html#cfn-iot-thingtype-thingtypename */
        "ThingTypeName"?: string | Intrinsic;
        /**
         * - The thing type properties for the thing type to create. It contains information about the new thing type including a description, a list of searchable thing attribute names, and a list of propagating attributes. After a thing type is created, you can only update `Mqtt5Configuration`.
         * - _Required_: No
         * - _Type_: [ThingTypeProperties](./aws-properties-iot-thingtype-thingtypeproperties.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thingtype.html#cfn-iot-thingtype-thingtypeproperties */
        "ThingTypeProperties"?: ThingTypeProperties;
    };
}