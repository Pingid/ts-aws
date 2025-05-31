import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The target model for a prompt router.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-intelligentpromptrouter.html */

export interface PromptRouterTargetModel {
    /**
     * - The target model's ARN.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `(^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}::foundation-model/[a-z0-9-]{1,63}[.]{1}([a-z0-9-]{1,63}[.]){0,2}[a-z0-9-]{1,63}([:][a-z0-9-]{1,63}){0,2})|(^arn:aws(|-us-gov|-cn|-iso|-iso-b):bedrock:(|[0-9a-z-]{0,20}):(|[0-9]{12}):(inference-profile|application-inference-profile)/[a-zA-Z0-9-:.]+)$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-intelligentpromptrouter.html#cfn-bedrock-intelligentpromptrouter-promptroutertargetmodel-modelarn */
    "ModelArn": string | Intrinsic;
}

/**
 * Routing criteria for a prompt router.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-intelligentpromptrouter.html */

export interface RoutingCriteria {
    /**
     * - The criteria's response quality difference.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-intelligentpromptrouter.html#cfn-bedrock-intelligentpromptrouter-routingcriteria-responsequalitydifference */
    "ResponseQualityDifference": number | Intrinsic;
}

/**
 * An array of key-value pairs to apply to this resource as tags. You can use tags to categorize and manage your AWS resources.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-intelligentpromptrouter.html */

export interface Tag {
    /**
     * - The tag's key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9\s._:/=+@-]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-intelligentpromptrouter.html#cfn-bedrock-intelligentpromptrouter-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value associated with a tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9\s._:/=+@-]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-intelligentpromptrouter.html#cfn-bedrock-intelligentpromptrouter-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Specifies an intelligent prompt router resource for Amazon Bedrock.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-intelligentpromptrouter.html */

export interface BedrockIntelligentPromptRouter extends ResourceAttributes {
    "Type": "AWS::Bedrock::IntelligentPromptRouter";
    "Properties": {
        /**
         * - An optional description of the prompt router to help identify its purpose.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^([0-9a-zA-Z:.][ _-]?)+$`
         * - _Minimum_: `1`
         * - _Maximum_: `200`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-intelligentpromptrouter.html#cfn-bedrock-intelligentpromptrouter-description */
        "Description"?: string | Intrinsic;
        /**
         * - The default model to use when the routing criteria is not met.
         * - _Required_: Yes
         * - _Type_: [PromptRouterTargetModel](./aws-properties-bedrock-intelligentpromptrouter-promptroutertargetmodel.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-intelligentpromptrouter.html#cfn-bedrock-intelligentpromptrouter-fallbackmodel */
        "FallbackModel": PromptRouterTargetModel;
        /**
         * - A list of foundation models that the prompt router can route requests to. At least one model must be specified.
         * - _Required_: Yes
         * - _Type_: Array of [PromptRouterTargetModel](./aws-properties-bedrock-intelligentpromptrouter-promptroutertargetmodel.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-intelligentpromptrouter.html#cfn-bedrock-intelligentpromptrouter-models */
        "Models": PromptRouterTargetModel[];
        /**
         * - The name of the prompt router. The name must be unique within your AWS account in the current region.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^([0-9a-zA-Z][ _-]?)+$`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-intelligentpromptrouter.html#cfn-bedrock-intelligentpromptrouter-promptroutername */
        "PromptRouterName": string | Intrinsic;
        /**
         * - Routing criteria for a prompt router.
         * - _Required_: Yes
         * - _Type_: [RoutingCriteria](./aws-properties-bedrock-intelligentpromptrouter-routingcriteria.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-intelligentpromptrouter.html#cfn-bedrock-intelligentpromptrouter-routingcriteria */
        "RoutingCriteria": RoutingCriteria;
        /**
         * - An array of key-value pairs to apply to this resource as tags. You can use tags to categorize and manage your AWS resources.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-bedrock-intelligentpromptrouter-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-intelligentpromptrouter.html#cfn-bedrock-intelligentpromptrouter-tags */
        "Tags"?: Tag[];
    };
}