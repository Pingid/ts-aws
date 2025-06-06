import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Determines how multiple nodes in a flow can run in parallel. Running nodes concurrently can improve your flow's performance.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html */

export interface FlowAliasConcurrencyConfiguration {
    /**
     * - The maximum number of nodes that can be executed concurrently in the flow.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html#cfn-bedrock-flowalias-flowaliasconcurrencyconfiguration-maxconcurrency */
    "MaxConcurrency"?: number | Intrinsic;
    /**
     * - The type of concurrency to use for parallel node execution. Specify one of the following options:
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `Automatic | Manual`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html#cfn-bedrock-flowalias-flowaliasconcurrencyconfiguration-type */
    "Type": string | Intrinsic;
}

/**
 * Contains information about a version that the alias maps to.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html */

export interface FlowAliasRoutingConfigurationListItem {
    /**
     * - The version that the alias maps to.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(DRAFT|[0-9]{0,4}[1-9][0-9]{0,4})$`
     * - _Minimum_: `1`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html#cfn-bedrock-flowalias-flowaliasroutingconfigurationlistitem-flowversion */
    "FlowVersion"?: string | Intrinsic;
}

/**
 * Creates an alias of a flow for deployment. For more information, see [Deploy a flow in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-deploy.html) in the Amazon Bedrock User Guide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html */

export interface BedrockFlowAlias extends ResourceAttributes {
    "Type": "AWS::Bedrock::FlowAlias";
    "Properties": {
        /**
         * - The configuration that specifies how nodes in the flow are executed concurrently.
         * - _Required_: No
         * - _Type_: [FlowAliasConcurrencyConfiguration](./aws-properties-bedrock-flowalias-flowaliasconcurrencyconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html#cfn-bedrock-flowalias-concurrencyconfiguration */
        "ConcurrencyConfiguration"?: FlowAliasConcurrencyConfiguration;
        /**
         * - A description of the alias.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html#cfn-bedrock-flowalias-description */
        "Description"?: string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the alias.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:flow/[0-9a-zA-Z]{10}$`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html#cfn-bedrock-flowalias-flowarn */
        "FlowArn": string | Intrinsic;
        /**
         * - The name of the alias.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^([0-9a-zA-Z][_-]?){1,100}$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html#cfn-bedrock-flowalias-name */
        "Name": string | Intrinsic;
        /**
         * - A list of configurations about the versions that the alias maps to. Currently, you can only specify one.
         * - _Required_: Yes
         * - _Type_: Array of [FlowAliasRoutingConfigurationListItem](./aws-properties-bedrock-flowalias-flowaliasroutingconfigurationlistitem.html)
         * - _Minimum_: `1`
         * - _Maximum_: `1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html#cfn-bedrock-flowalias-routingconfiguration */
        "RoutingConfiguration": FlowAliasRoutingConfigurationListItem[];
        /**
         * - Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `^[a-zA-Z0-9\s._:/=+@-]*$`
         * - _Minimum_: `0`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowalias.html#cfn-bedrock-flowalias-tags */
        "Tags"?: Record<string, string | Intrinsic>;
    };
}