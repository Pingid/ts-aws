import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The configuration for AI Agents of type `MANUAL_SEARCH`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html */

export interface ManualSearchAIAgentConfiguration {
    /**
     * - The ID of the answer generation AI guardrail.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-manualsearchaiagentconfiguration-answergenerationaiguardrailid */
    "AnswerGenerationAIGuardrailId"?: string | Intrinsic;
    /**
     * - The AI Prompt identifier for the Answer Generation prompt used by the `ANSWER_RECOMMENDATION` AI Agent.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-manualsearchaiagentconfiguration-answergenerationaipromptid */
    "AnswerGenerationAIPromptId"?: string | Intrinsic;
    /**
     * - The association configurations for overriding behavior on this AI Agent.
     * - _Required_: No
     * - _Type_: Array of [AssociationConfiguration](./aws-properties-wisdom-aiagent-associationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-manualsearchaiagentconfiguration-associationconfigurations */
    "AssociationConfigurations"?: AssociationConfiguration[];
    /**
     * - The locale to which specifies the language and region settings that determine the response language for [QueryAssistant](https://docs.aws.amazon.com/connect/latest/APIReference/API_amazon-q-connect_QueryAssistant.html).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-manualsearchaiagentconfiguration-locale */
    "Locale"?: string | Intrinsic;
}

/**
 * The configuration of the self-service AI agent.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html */

export interface SelfServiceAIAgentConfiguration {
    /**
     * - The association configuration of the self-service AI agent.
     * - _Required_: No
     * - _Type_: Array of [AssociationConfiguration](./aws-properties-wisdom-aiagent-associationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-selfserviceaiagentconfiguration-associationconfigurations */
    "AssociationConfigurations"?: AssociationConfiguration[];
    /**
     * - The ID of the self-service AI guardrail.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-selfserviceaiagentconfiguration-selfserviceaiguardrailid */
    "SelfServiceAIGuardrailId"?: string | Intrinsic;
    /**
     * - The ID of the self-service answer generation AI prompt.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-selfserviceaiagentconfiguration-selfserviceanswergenerationaipromptid */
    "SelfServiceAnswerGenerationAIPromptId"?: string | Intrinsic;
    /**
     * - The ID of the self-service preprocessing AI prompt.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-selfserviceaiagentconfiguration-selfservicepreprocessingaipromptid */
    "SelfServicePreProcessingAIPromptId"?: string | Intrinsic;
}

/**
 * An object that can be used to specify tag conditions.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html */

export interface TagCondition {
    /**
     * - The tag key in the tag condition.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-tagcondition-key */
    "Key": string | Intrinsic;
    /**
     * - The tag value in the tag condition.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-tagcondition-value */
    "Value"?: string | Intrinsic;
}

/**
 * The `OrCondition` property type specifies Property description not available. for an [AWS::Wisdom::AIAgent](./aws-resource-wisdom-aiagent.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html */

export interface OrCondition {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of [TagCondition](./aws-properties-wisdom-aiagent-tagcondition.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-orcondition-andconditions */
    "AndConditions"?: TagCondition[];
    /**
     * - A leaf node condition which can be used to specify a tag condition.
     * - _Required_: No
     * - _Type_: [TagCondition](./aws-properties-wisdom-aiagent-tagcondition.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-orcondition-tagcondition */
    "TagCondition"?: TagCondition;
}

/**
 * An object that can be used to specify tag conditions.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html */

export interface TagFilter {
    /**
     * - A list of conditions which would be applied together with an `AND` condition.
     * - _Required_: No
     * - _Type_: Array of [TagCondition](./aws-properties-wisdom-aiagent-tagcondition.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-tagfilter-andconditions */
    "AndConditions"?: TagCondition[];
    /**
     * - A list of conditions which would be applied together with an `OR` condition.
     * - _Required_: No
     * - _Type_: Array of [OrCondition](./aws-properties-wisdom-aiagent-orcondition.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-tagfilter-orconditions */
    "OrConditions"?: OrCondition[];
    /**
     * - A leaf node condition which can be used to specify a tag condition.
     * - _Required_: No
     * - _Type_: [TagCondition](./aws-properties-wisdom-aiagent-tagcondition.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-tagfilter-tagcondition */
    "TagCondition"?: TagCondition;
}

/**
 * The data of the configuration for a `KNOWLEDGE_BASE` type Amazon Q in Connect Assistant Association.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html */

export interface KnowledgeBaseAssociationConfigurationData {
    /**
     * - An object that can be used to specify Tag conditions.
     * - _Required_: No
     * - _Type_: [TagFilter](./aws-properties-wisdom-aiagent-tagfilter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-knowledgebaseassociationconfigurationdata-contenttagfilter */
    "ContentTagFilter"?: TagFilter;
    /**
     * - The maximum number of results to return per page.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-knowledgebaseassociationconfigurationdata-maxresults */
    "MaxResults"?: number | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `HYBRID | SEMANTIC`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-knowledgebaseassociationconfigurationdata-overrideknowledgebasesearchtype */
    "OverrideKnowledgeBaseSearchType"?: string | Intrinsic;
}

/**
 * A typed union of the data of the configuration for an Amazon Q in Connect Assistant Association.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html */

export interface AssociationConfigurationData {
    /**
     * - The data of the configuration for a `KNOWLEDGE_BASE` type Amazon Q in Connect Assistant Association.
     * - _Required_: Yes
     * - _Type_: [KnowledgeBaseAssociationConfigurationData](./aws-properties-wisdom-aiagent-knowledgebaseassociationconfigurationdata.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-associationconfigurationdata-knowledgebaseassociationconfigurationdata */
    "KnowledgeBaseAssociationConfigurationData": KnowledgeBaseAssociationConfigurationData;
}

/**
 * The configuration for an Amazon Q in Connect Assistant Association.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html */

export interface AssociationConfiguration {
    /**
     * - A typed union of the data of the configuration for an Amazon Q in Connect Assistant Association.
     * - _Required_: No
     * - _Type_: [AssociationConfigurationData](./aws-properties-wisdom-aiagent-associationconfigurationdata.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-associationconfiguration-associationconfigurationdata */
    "AssociationConfigurationData"?: AssociationConfigurationData;
    /**
     * - The identifier of the association for this Association Configuration.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-associationconfiguration-associationid */
    "AssociationId"?: string | Intrinsic;
    /**
     * - The type of the association for this Association Configuration.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `KNOWLEDGE_BASE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-associationconfiguration-associationtype */
    "AssociationType"?: string | Intrinsic;
}

/**
 * The configuration for AI Agents of type `ANSWER_RECOMMENDATION`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html */

export interface AnswerRecommendationAIAgentConfiguration {
    /**
     * - The ID of the answer generation AI guardrail.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-answerrecommendationaiagentconfiguration-answergenerationaiguardrailid */
    "AnswerGenerationAIGuardrailId"?: string | Intrinsic;
    /**
     * - The AI Prompt identifier for the Answer Generation prompt used by the `ANSWER_RECOMMENDATION` AI Agent.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-answerrecommendationaiagentconfiguration-answergenerationaipromptid */
    "AnswerGenerationAIPromptId"?: string | Intrinsic;
    /**
     * - The association configurations for overriding behavior on this AI Agent.
     * - _Required_: No
     * - _Type_: Array of [AssociationConfiguration](./aws-properties-wisdom-aiagent-associationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-answerrecommendationaiagentconfiguration-associationconfigurations */
    "AssociationConfigurations"?: AssociationConfiguration[];
    /**
     * - The AI Prompt identifier for the Intent Labeling prompt used by the `ANSWER_RECOMMENDATION` AI Agent.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-answerrecommendationaiagentconfiguration-intentlabelinggenerationaipromptid */
    "IntentLabelingGenerationAIPromptId"?: string | Intrinsic;
    /**
     * - The locale to which specifies the language and region settings that determine the response language for [QueryAssistant](https://docs.aws.amazon.com/connect/latest/APIReference/API_amazon-q-connect_QueryAssistant.html).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-answerrecommendationaiagentconfiguration-locale */
    "Locale"?: string | Intrinsic;
    /**
     * - The AI Prompt identifier for the Query Reformulation prompt used by the `ANSWER_RECOMMENDATION` AI Agent.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(:[A-Z0-9_$]+){0,1}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-answerrecommendationaiagentconfiguration-queryreformulationaipromptid */
    "QueryReformulationAIPromptId"?: string | Intrinsic;
}

/**
 * A typed union that specifies the configuration based on the type of AI Agent.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html */

export interface AIAgentConfiguration {
    /**
     * - The configuration for AI Agents of type `ANSWER_RECOMMENDATION`.
     * - _Required_: No
     * - _Type_: [AnswerRecommendationAIAgentConfiguration](./aws-properties-wisdom-aiagent-answerrecommendationaiagentconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-aiagentconfiguration-answerrecommendationaiagentconfiguration */
    "AnswerRecommendationAIAgentConfiguration"?: AnswerRecommendationAIAgentConfiguration;
    /**
     * - The configuration for AI Agents of type `MANUAL_SEARCH`.
     * - _Required_: No
     * - _Type_: [ManualSearchAIAgentConfiguration](./aws-properties-wisdom-aiagent-manualsearchaiagentconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-aiagentconfiguration-manualsearchaiagentconfiguration */
    "ManualSearchAIAgentConfiguration"?: ManualSearchAIAgentConfiguration;
    /**
     * - The self-service AI agent configuration.
     * - _Required_: No
     * - _Type_: [SelfServiceAIAgentConfiguration](./aws-properties-wisdom-aiagent-selfserviceaiagentconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-aiagentconfiguration-selfserviceaiagentconfiguration */
    "SelfServiceAIAgentConfiguration"?: SelfServiceAIAgentConfiguration;
}

/**
 * Creates an Amazon Q in Connect AI Agent.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html */

export interface WisdomAIAgent extends ResourceAttributes {
    "Type": "AWS::Wisdom::AIAgent";
    "Properties": {
        /**
         * - The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$|^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}){0,2}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-assistantid */
        "AssistantId": string | Intrinsic;
        /**
         * - Configuration for the AI Agent.
         * - _Required_: Yes
         * - _Type_: [AIAgentConfiguration](./aws-properties-wisdom-aiagent-aiagentconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-configuration */
        "Configuration": AIAgentConfiguration;
        /**
         * - The description of the AI Agent.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9\s_.,-]+`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-description */
        "Description"?: string | Intrinsic;
        /**
         * - The name of the AI Agent.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9\s_.,-]+`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-name */
        "Name"?: string | Intrinsic;
        /**
         * - The tags used to organize, track, or control access for this resource.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-tags */
        "Tags"?: Record<string, string | Intrinsic>;
        /**
         * - The type of the AI Agent.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `MANUAL_SEARCH | ANSWER_RECOMMENDATION | SELF_SERVICE`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiagent.html#cfn-wisdom-aiagent-type */
        "Type": string | Intrinsic;
    };
}