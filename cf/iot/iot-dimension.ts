import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A set of key/value pairs that are used to manage the resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html */

export interface Tag {
    /**
     * - The tag's key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html#cfn-iot-dimension-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag's value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html#cfn-iot-dimension-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Use the `AWS::IoT::Dimension` to limit the scope of a metric used in a security profile for AWS IoT Device Defender. For example, using a `TOPIC_FILTER` dimension, you can narrow down the scope of the metric to only MQTT topics where the name matches the pattern specified in the dimension. For API reference, see [CreateDimension](https://docs.aws.amazon.com/iot/latest/apireference/API_CreateDimension.html) and for general information, see [Scoping metrics in security profiles using dimensions](https://docs.aws.amazon.com/iot/latest/developerguide/scoping-security-behavior.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html */

export interface IoTDimension extends ResourceAttributes {
    "Type": "AWS::IoT::Dimension";
    "Properties": {
        /**
         * - A unique identifier for the dimension.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9:_-]+`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html#cfn-iot-dimension-name */
        "Name"?: string | Intrinsic;
        /**
         * - Specifies the value or list of values for the dimension. For `TOPIC_FILTER` dimensions, this is a pattern used to match the MQTT topic (for example, "admin/#").
         * - _Required_: Yes
         * - _Type_: Array of String
         * - _Minimum_: `1 | 1`
         * - _Maximum_: `256 | 5`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html#cfn-iot-dimension-stringvalues */
        "StringValues": (string | Intrinsic)[];
        /**
         * - Metadata that can be used to manage the dimension.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-iot-dimension-tag.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html#cfn-iot-dimension-tags */
        "Tags"?: Tag[];
        /**
         * - Specifies the type of dimension. Supported types: `TOPIC_FILTER.`
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `TOPIC_FILTER`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-dimension.html#cfn-iot-dimension-type */
        "Type": string | Intrinsic;
    };
}