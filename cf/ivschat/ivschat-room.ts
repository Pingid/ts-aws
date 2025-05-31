import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The MessageReviewHandler property type specifies configuration information for optional message review.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html */

export interface MessageReviewHandler {
    /**
     * - Specifies the fallback behavior (whether the message is allowed or denied) if the handler does not return a valid response, encounters an error, or times out. (For the timeout period, see [Service Quotas](https://docs.aws.amazon.com/ivs/latest/userguide/service-quotas.html).) If allowed, the message is delivered with returned content to all users connected to the room. If denied, the message is not delivered to any user.
     * - _Default_: `ALLOW`
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ALLOW | DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html#cfn-ivschat-room-messagereviewhandler-fallbackresult */
    "FallbackResult"?: string | Intrinsic;
    /**
     * - Identifier of the message review handler. Currently this must be an ARN of a lambda function.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^$|^arn:aws:lambda:[a-z0-9-]+:[0-9]{12}:function:.+`
     * - _Minimum_: `0`
     * - _Maximum_: `170`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html#cfn-ivschat-room-messagereviewhandler-uri */
    "Uri"?: string | Intrinsic;
}

/**
 * A key-value pair that you can use to categorize and manage Amazon IVSChat Rooms.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html */

export interface Tag {
    /**
     * - One part of a key-value pair that makes up a tag. A `key` is a general label that acts like a category for more specific tag values.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html#cfn-ivschat-room-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The optional part of a key-value pair that makes up a tag. A `value` acts as a descriptor within a tag category (key).
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html#cfn-ivschat-room-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The `AWS::IVSChat::Room` resource specifies an Amazon IVS room that allows clients to connect and pass messages. For more information, see [CreateRoom](https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_CreateRoom.html) in the _Amazon Interactive Video Service Chat API Reference_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html */

export interface IVSChatRoom extends ResourceAttributes {
    "Type": "AWS::IVSChat::Room";
    "Properties": {
        /**
         * - List of logging-configuration identifiers attached to the room.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Minimum_: `1 | 0`
         * - _Maximum_: `128 | 50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html#cfn-ivschat-room-loggingconfigurationidentifiers */
        "LoggingConfigurationIdentifiers"?: (string | Intrinsic)[];
        /**
         * - Maximum number of characters in a single message. Messages are expected to be UTF-8 encoded and this limit applies specifically to rune/code-point count, not number of bytes.
         * - _Required_: No
         * - _Type_: Integer
         * - _Minimum_: `1`
         * - _Maximum_: `500`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html#cfn-ivschat-room-maximummessagelength */
        "MaximumMessageLength"?: number | Intrinsic;
        /**
         * - Maximum number of messages per second that can be sent to the room (by all clients).
         * - _Required_: No
         * - _Type_: Integer
         * - _Minimum_: `1`
         * - _Maximum_: `10`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html#cfn-ivschat-room-maximummessageratepersecond */
        "MaximumMessageRatePerSecond"?: number | Intrinsic;
        /**
         * - Configuration information for optional review of messages.
         * - _Required_: No
         * - _Type_: [MessageReviewHandler](./aws-properties-ivschat-room-messagereviewhandler.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html#cfn-ivschat-room-messagereviewhandler */
        "MessageReviewHandler"?: MessageReviewHandler;
        /**
         * - Room name. The value does not need to be unique.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9-_]*$`
         * - _Minimum_: `0`
         * - _Maximum_: `128`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html#cfn-ivschat-room-name */
        "Name"?: string | Intrinsic;
        /**
         * - An array of key-value pairs to apply to this resource.
         * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-room-tag.html).
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-ivschat-room-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html#cfn-ivschat-room-tags */
        "Tags"?: Tag[];
    };
}