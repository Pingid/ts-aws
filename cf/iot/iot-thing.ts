import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The AttributePayload property specifies up to three attributes for an AWS IoT as key-value pairs. AttributePayload is a property of the [AWS::IoT::Thing](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html) resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html */

export interface AttributePayload {
    /**
     * - A JSON string containing up to three key-value pair in JSON format. For example:
     * - `{\"attributes\":{\"string1\":\"string2\"}}`
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `[a-zA-Z0-9_.,@/:#-]+`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html#cfn-iot-thing-attributepayload-attributes */
    "Attributes"?: Record<string, string | Intrinsic>;
}

/**
 * Use the `AWS::IoT::Thing` resource to declare an AWS IoT thing.
 * For information about working with things, see [How AWS IoT Works](https://docs.aws.amazon.com/iot/latest/developerguide/aws-iot-how-it-works.html) and [Device Registry for AWS IoT](https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html) in the _AWS IoT Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html */

export interface IoTThing extends ResourceAttributes {
    "Type": "AWS::IoT::Thing";
    "Properties": {
        /**
         * - A string that contains up to three key value pairs. Maximum length of 800. Duplicates not allowed.
         * - _Required_: No
         * - _Type_: [AttributePayload](./aws-properties-iot-thing-attributepayload.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html#cfn-iot-thing-attributepayload */
        "AttributePayload"?: AttributePayload;
        /**
         * - The name of the thing to update.
         * - You can't change a thing's name. To change a thing's name, you must create a new thing, give it the new name, and then delete the old thing.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9:_-]+`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thing.html#cfn-iot-thing-thingname */
        "ThingName"?: string | Intrinsic;
    };
}