import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The tags to attach to the destination. Tags are metadata that you can use to manage a resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html */

export interface Tag {
  /**
   * - The tag's key value.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `127`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html#cfn-iotwireless-destination-tag-key */
  Key?: string | Intrinsic
  /**
   * - The tag's value.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html#cfn-iotwireless-destination-tag-value */
  Value?: string | Intrinsic
}

/**
 * Creates a new destination that maps a device message to an AWS IoT rule.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html */

export interface IoTWirelessDestination extends ResourceAttributes {
  Type: 'AWS::IoTWireless::Destination'
  Properties: {
    /**
     * - The description of the new resource. Maximum length is 2048 characters.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html#cfn-iotwireless-destination-description */
    Description?: string | Intrinsic
    /**
     * - The rule name to send messages to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html#cfn-iotwireless-destination-expression */
    Expression: string | Intrinsic
    /**
     * - The type of value in `Expression`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `RuleName | MqttTopic | SnsTopic`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html#cfn-iotwireless-destination-expressiontype */
    ExpressionType: string | Intrinsic
    /**
     * - The name of the new resource.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9:_-]+`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html#cfn-iotwireless-destination-name */
    Name: string | Intrinsic
    /**
     * - The ARN of the IAM Role that authorizes the destination.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html#cfn-iotwireless-destination-rolearn */
    RoleArn?: string | Intrinsic
    /**
     * - The tags are an array of key-value pairs to attach to the specified resource. Tags can have a minimum of 0 and a maximum of 50 items.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-iotwireless-destination-tag.html)
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-destination.html#cfn-iotwireless-destination-tags */
    Tags?: Tag[]
  }
}
