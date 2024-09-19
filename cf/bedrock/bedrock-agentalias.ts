import type { Intrinsic } from '../intrinsic/index.js' /**
 * Contains details about the routing configuration of the alias.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html */

export interface AgentAliasRoutingConfigurationListItem {
  /**
   * - The version of the agent with which the alias is associated.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(DRAFT|[0-9]{0,4}[1-9][0-9]{0,4})$`
   * - _Minimum_: `1`
   * - _Maximum_: `5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html#cfn-bedrock-agentalias-agentaliasroutingconfigurationlistitem-agentversion */
  AgentVersion: string | Intrinsic
}

/**
 * Specifies an agent alias as a resource in a top-level template. Minimally, you must specify the following properties:
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html */

export interface BedrockAgentAlias {
  Type: 'AWS::Bedrock::AgentAlias'
  Properties: {
    /**
     * - The name of the alias of the agent.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([0-9a-zA-Z][_-]?){1,100}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html#cfn-bedrock-agentalias-agentaliasname */
    AgentAliasName: string | Intrinsic
    /**
     * - The unique identifier of the agent.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[0-9a-zA-Z]{10}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html#cfn-bedrock-agentalias-agentid */
    AgentId: string | Intrinsic
    /**
     * - The description of the alias of the agent.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html#cfn-bedrock-agentalias-description */
    Description?: string | Intrinsic
    /**
     * - Contains details about the routing configuration of the alias.
     * - _Required_: No
     * - _Type_: Array of [AgentAliasRoutingConfigurationListItem](./aws-properties-bedrock-agentalias-agentaliasroutingconfigurationlistitem.html)
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html#cfn-bedrock-agentalias-routingconfiguration */
    RoutingConfiguration?: AgentAliasRoutingConfigurationListItem[]
    /**
     * - Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^[a-zA-Z0-9\s._:/=+@-]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-agentalias.html#cfn-bedrock-agentalias-tags */
    Tags?: Record<string, string | Intrinsic>
  }
}