import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A key-value pair to associate with a resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html#cfn-connect-agentstatus-tag-key */
  Key: string | Intrinsic
  /**
   * - The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, \_, ., /, =, +, and -
   * - _Required_: Yes
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html#cfn-connect-agentstatus-tag-value */
  Value: string | Intrinsic
}

/**
 * Contains information about an agent status.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html */

export interface ConnectAgentStatus extends ResourceAttributes {
  Type: 'AWS::Connect::AgentStatus'
  Properties: {
    /**
     * - The description of the agent status.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `250`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html#cfn-connect-agentstatus-description */
    Description?: string | Intrinsic
    /**
     * - The display order of the agent status.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html#cfn-connect-agentstatus-displayorder */
    DisplayOrder?: number | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the instance.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html#cfn-connect-agentstatus-instancearn */
    InstanceArn: string | Intrinsic
    /**
     * - The name of the agent status.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `127`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html#cfn-connect-agentstatus-name */
    Name: string | Intrinsic
    /**
     * - A number indicating the reset order of the agent status.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html#cfn-connect-agentstatus-resetordernumber */
    ResetOrderNumber?: boolean | Intrinsic
    /**
     * - The state of the agent status.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html#cfn-connect-agentstatus-state */
    State: string | Intrinsic
    /**
     * - The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-connect-agentstatus-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html#cfn-connect-agentstatus-tags */
    Tags?: Tag[]
    /**
     * - The type of agent status.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ROUTABLE | CUSTOM | OFFLINE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-agentstatus.html#cfn-connect-agentstatus-type */
    Type?: string | Intrinsic
  }
}
