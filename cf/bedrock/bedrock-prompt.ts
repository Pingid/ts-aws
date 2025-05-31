import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Contains a key-value pair that defines a metadata tag and value to attach to a prompt variant. For more information, see [Create a prompt using Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface PromptMetadataEntry {
    /**
     * - The key of a metadata tag for a prompt variant.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9\s._:/=+@-]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-promptmetadataentry-key */
    "Key": string | Intrinsic;
    /**
     * - The value of a metadata tag for a prompt variant.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9\s._:/=+@-]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-promptmetadataentry-value */
    "Value": string | Intrinsic;
}

/**
 * Contains inference configurations related to model inference for a prompt. For more information, see [Inference parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface PromptModelInferenceConfiguration {
    /**
     * - The maximum number of tokens to return in the response.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Maximum_: `512000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-promptmodelinferenceconfiguration-maxtokens */
    "MaxTokens"?: number | Intrinsic;
    /**
     * - A list of strings that define sequences after which the model will stop generating.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `0`
     * - _Maximum_: `4`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-promptmodelinferenceconfiguration-stopsequences */
    "StopSequences"?: (string | Intrinsic)[];
    /**
     * - Controls the randomness of the response. Choose a lower value for more predictable outputs and a higher value for more surprising outputs.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-promptmodelinferenceconfiguration-temperature */
    "Temperature"?: number | Intrinsic;
    /**
     * - The percentage of most-likely candidates that the model considers for the next token.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-promptmodelinferenceconfiguration-topp */
    "TopP"?: number | Intrinsic;
}

/**
 * Contains inference configurations for the prompt.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface PromptInferenceConfiguration {
    /**
     * - Contains inference configurations for a text prompt.
     * - _Required_: Yes
     * - _Type_: [PromptModelInferenceConfiguration](./aws-properties-bedrock-prompt-promptmodelinferenceconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-promptinferenceconfiguration-text */
    "Text": PromptModelInferenceConfiguration;
}

/**
 * Contains specifications for an Amazon Bedrock agent with which to use the prompt. For more information, see [Create a prompt using Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html) and [Automate tasks in your application using conversational agents](https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface PromptAgentResource {
    /**
     * - The ARN of the agent with which to use the prompt.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:agent-alias/[0-9a-zA-Z]{10}/[0-9a-zA-Z]{10}$`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-promptagentresource-agentidentifier */
    "AgentIdentifier": string | Intrinsic;
}

/**
 * Contains specifications for a generative AI resource with which to use the prompt. For more information, see [Create a prompt using Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface PromptGenAiResource {
    /**
     * - Specifies an Amazon Bedrock agent with which to use the prompt.
     * - _Required_: Yes
     * - _Type_: [PromptAgentResource](./aws-properties-bedrock-prompt-promptagentresource.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-promptgenairesource-agent */
    "Agent": PromptAgentResource;
}

/**
 * Contains information about a variable in the prompt.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface PromptInputVariable {
    /**
     * - The name of the variable.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^([0-9a-zA-Z][_-]?){1,100}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-promptinputvariable-name */
    "Name"?: string | Intrinsic;
}

/**
 * Contains configurations for instructions to provide the model for how to handle input. To learn more, see [Using the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference-call.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface SystemContentBlock {
    /**
     * - CachePoint to include in the system prompt.
     * - _Required_: No
     * - _Type_: [CachePointBlock](./aws-properties-bedrock-prompt-cachepointblock.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-systemcontentblock-cachepoint */
    "CachePoint"?: CachePointBlock;
    /**
     * - A system prompt for the model.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-systemcontentblock-text */
    "Text"?: string | Intrinsic;
}

/**
 * Defines a section of content to be cached for reuse in subsequent API calls.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface CachePointBlock {
    /**
     * - Specifies the type of cache point within the CachePointBlock.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `default`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-cachepointblock-type */
    "Type": string | Intrinsic;
}

/**
 * The Amazon S3location of the prompt text.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface TextS3Location {
    /**
     * - The Amazon S3bucket containing the prompt text.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
     * - _Minimum_: `3`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-texts3location-bucket */
    "Bucket": string | Intrinsic;
    /**
     * - The object key for the Amazon S3 location.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-texts3location-key */
    "Key": string | Intrinsic;
    /**
     * - The version of the Amazon S3location to use.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-texts3location-version */
    "Version"?: string | Intrinsic;
}

/**
 * Contains configurations for a text prompt template. To include a variable, enclose a word in double curly braces as in `{{variable}}`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface TextPromptTemplateConfiguration {
    /**
     * - A cache checkpoint within a template configuration.
     * - _Required_: No
     * - _Type_: [CachePointBlock](./aws-properties-bedrock-prompt-cachepointblock.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-textprompttemplateconfiguration-cachepoint */
    "CachePoint"?: CachePointBlock;
    /**
     * - An array of the variables in the prompt template.
     * - _Required_: No
     * - _Type_: Array of [PromptInputVariable](./aws-properties-bedrock-prompt-promptinputvariable.html)
     * - _Minimum_: `0`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-textprompttemplateconfiguration-inputvariables */
    "InputVariables"?: PromptInputVariable[];
    /**
     * - The message for the prompt.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `200000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-textprompttemplateconfiguration-text */
    "Text"?: string | Intrinsic;
    /**
     * - The Amazon S3location of the prompt text.
     * - _Required_: No
     * - _Type_: [TextS3Location](./aws-properties-bedrock-prompt-texts3location.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-textprompttemplateconfiguration-texts3location */
    "TextS3Location"?: TextS3Location;
}

/**
 * A block of content for a message that you pass to, or receive from, a model with the [Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html) or [ConverseStream](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html) API operations.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface ContentBlock {
    /**
     * - CachePoint to include in the message.
     * - _Required_: No
     * - _Type_: [CachePointBlock](./aws-properties-bedrock-prompt-cachepointblock.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-contentblock-cachepoint */
    "CachePoint"?: CachePointBlock;
    /**
     * - Text to include in the message.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-contentblock-text */
    "Text"?: string | Intrinsic;
}

/**
 * A message input, or returned from, a call to [Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html) or [ConverseStream](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface Message {
    /**
     * - The message content. Note the following restrictions:
     * - _Required_: Yes
     * - _Type_: Array of [ContentBlock](./aws-properties-bedrock-prompt-contentblock.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-message-content */
    "Content": ContentBlock[];
    /**
     * - The role that the message plays in the message.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `user | assistant`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-message-role */
    "Role": string | Intrinsic;
}

/**
 * The model must request a specific tool. For example, `{"tool" : {"name" : "Your tool name"}}`. For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide
 * ###### Note
 * 
 * This field is only supported by Anthropic Claude 3 models.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface SpecificToolChoice {
    /**
     * - The name of the tool that the model must request.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z][a-zA-Z0-9_]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-specifictoolchoice-name */
    "Name": string | Intrinsic;
}

/**
 * Determines which tools the model should request in a call to `Converse` or `ConverseStream`. For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface ToolChoice {
    /**
     * - The model must request at least one tool (no text is generated).
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-toolchoice-any */
    "Any"?: any | Intrinsic;
    /**
     * - (Default). The Model automatically decides if a tool should be called or whether to generate text instead.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-toolchoice-auto */
    "Auto"?: any | Intrinsic;
    /**
     * - The Model must request the specified tool. Only supported by Anthropic Claude 3 models.
     * - _Required_: No
     * - _Type_: [SpecificToolChoice](./aws-properties-bedrock-prompt-specifictoolchoice.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-toolchoice-tool */
    "Tool"?: SpecificToolChoice;
}

/**
 * The schema for the tool. The top level schema type must be `object`. For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface ToolInputSchema {
    /**
     * - The JSON schema for the tool. For more information, see [JSON Schema Reference](https://json-schema.org/understanding-json-schema/reference).
     * - _Required_: Yes
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-toolinputschema-json */
    "Json": any | Intrinsic;
}

/**
 * The specification for the tool. For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface ToolSpecification {
    /**
     * - The description for the tool.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-toolspecification-description */
    "Description"?: string | Intrinsic;
    /**
     * - The input schema for the tool in JSON format.
     * - _Required_: Yes
     * - _Type_: [ToolInputSchema](./aws-properties-bedrock-prompt-toolinputschema.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-toolspecification-inputschema */
    "InputSchema": ToolInputSchema;
    /**
     * - The name for the tool.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z][a-zA-Z0-9_]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-toolspecification-name */
    "Name": string | Intrinsic;
}

/**
 * Information about a tool that you can use with the Converse API. For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface Tool {
    /**
     * - CachePoint to include in the tool configuration.
     * - _Required_: No
     * - _Type_: [CachePointBlock](./aws-properties-bedrock-prompt-cachepointblock.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-tool-cachepoint */
    "CachePoint"?: CachePointBlock;
    /**
     * - The specfication for the tool.
     * - _Required_: No
     * - _Type_: [ToolSpecification](./aws-properties-bedrock-prompt-toolspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-tool-toolspec */
    "ToolSpec"?: ToolSpecification;
}

/**
 * Configuration information for the tools that you pass to a model. For more information, see [Tool use (function calling)](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface ToolConfiguration {
    /**
     * - If supported by model, forces the model to request a tool.
     * - _Required_: No
     * - _Type_: [ToolChoice](./aws-properties-bedrock-prompt-toolchoice.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-toolconfiguration-toolchoice */
    "ToolChoice"?: ToolChoice;
    /**
     * - An array of tools that you want to pass to a model.
     * - _Required_: Yes
     * - _Type_: Array of [Tool](./aws-properties-bedrock-prompt-tool.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-toolconfiguration-tools */
    "Tools": Tool[];
}

/**
 * Contains configurations to use a prompt in a conversational format. For more information, see [Create a prompt using Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface ChatPromptTemplateConfiguration {
    /**
     * - An array of the variables in the prompt template.
     * - _Required_: No
     * - _Type_: Array of [PromptInputVariable](./aws-properties-bedrock-prompt-promptinputvariable.html)
     * - _Minimum_: `0`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-chatprompttemplateconfiguration-inputvariables */
    "InputVariables"?: PromptInputVariable[];
    /**
     * - Contains messages in the chat for the prompt.
     * - _Required_: Yes
     * - _Type_: Array of [Message](./aws-properties-bedrock-prompt-message.html)
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-chatprompttemplateconfiguration-messages */
    "Messages": Message[];
    /**
     * - Contains system prompts to provide context to the model or to describe how it should behave.
     * - _Required_: No
     * - _Type_: Array of [SystemContentBlock](./aws-properties-bedrock-prompt-systemcontentblock.html)
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-chatprompttemplateconfiguration-system */
    "System"?: SystemContentBlock[];
    /**
     * - Configuration information for the tools that the model can use when generating a response.
     * - _Required_: No
     * - _Type_: [ToolConfiguration](./aws-properties-bedrock-prompt-toolconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-chatprompttemplateconfiguration-toolconfiguration */
    "ToolConfiguration"?: ToolConfiguration;
}

/**
 * Contains the message for a prompt. For more information, see [Construct and store reusable prompts with Prompt management in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface PromptTemplateConfiguration {
    /**
     * - Contains configurations to use the prompt in a conversational format.
     * - _Required_: No
     * - _Type_: [ChatPromptTemplateConfiguration](./aws-properties-bedrock-prompt-chatprompttemplateconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-prompttemplateconfiguration-chat */
    "Chat"?: ChatPromptTemplateConfiguration;
    /**
     * - Contains configurations for the text in a message for a prompt.
     * - _Required_: No
     * - _Type_: [TextPromptTemplateConfiguration](./aws-properties-bedrock-prompt-textprompttemplateconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-prompttemplateconfiguration-text */
    "Text"?: TextPromptTemplateConfiguration;
}

/**
 * Contains details about a variant of the prompt.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface PromptVariant {
    /**
     * - Contains model-specific inference configurations that aren't in the `inferenceConfiguration` field. To see model-specific inference parameters, see [Inference request parameters and response fields for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html).
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-promptvariant-additionalmodelrequestfields */
    "AdditionalModelRequestFields"?: any | Intrinsic;
    /**
     * - Specifies a generative AI resource with which to use the prompt.
     * - _Required_: No
     * - _Type_: [PromptGenAiResource](./aws-properties-bedrock-prompt-promptgenairesource.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-promptvariant-genairesource */
    "GenAiResource"?: PromptGenAiResource;
    /**
     * - Contains inference configurations for the prompt variant.
     * - _Required_: No
     * - _Type_: [PromptInferenceConfiguration](./aws-properties-bedrock-prompt-promptinferenceconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-promptvariant-inferenceconfiguration */
    "InferenceConfiguration"?: PromptInferenceConfiguration;
    /**
     * - An array of objects, each containing a key-value pair that defines a metadata tag and value to attach to a prompt variant.
     * - _Required_: No
     * - _Type_: Array of [PromptMetadataEntry](./aws-properties-bedrock-prompt-promptmetadataentry.html)
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-promptvariant-metadata */
    "Metadata"?: PromptMetadataEntry[];
    /**
     * - The unique identifier of the model or [inference profile](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html) with which to run inference on the prompt.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(arn:aws(-[^:]{1,12})?:(bedrock|sagemaker):[a-z0-9-]{1,20}:([0-9]{12})?:([a-z-]+/)?)?([a-zA-Z0-9.-]{1,63}){0,2}(([:][a-z0-9-]{1,63}){0,2})?(/[a-z0-9]{1,12})?$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-promptvariant-modelid */
    "ModelId"?: string | Intrinsic;
    /**
     * - The name of the prompt variant.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([0-9a-zA-Z][_-]?){1,100}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-promptvariant-name */
    "Name": string | Intrinsic;
    /**
     * - Contains configurations for the prompt template.
     * - _Required_: Yes
     * - _Type_: [PromptTemplateConfiguration](./aws-properties-bedrock-prompt-prompttemplateconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-promptvariant-templateconfiguration */
    "TemplateConfiguration": PromptTemplateConfiguration;
    /**
     * - The type of prompt template to use.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `TEXT | CHAT`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-promptvariant-templatetype */
    "TemplateType": string | Intrinsic;
}

/**
 * Creates a prompt in your prompt library that you can add to a flow. For more information, see [Prompt management in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html), [Create a prompt using Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html) and [Prompt flows in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows.html) in the Amazon Bedrock User Guide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html */

export interface BedrockPrompt extends ResourceAttributes {
    "Type": "AWS::Bedrock::Prompt";
    "Properties": {
        /**
         * - The Amazon Resource Name (ARN) of the KMS key that the prompt is encrypted with.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^arn:aws(|-cn|-us-gov):kms:[a-zA-Z0-9-]*:[0-9]{12}:key/[a-zA-Z0-9-]{36}$`
         * - _Minimum_: `1`
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-customerencryptionkeyarn */
        "CustomerEncryptionKeyArn"?: string | Intrinsic;
        /**
         * - The name of the default variant for the prompt. This value must match the `name` field in the relevant [PromptVariant](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html) object.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^([0-9a-zA-Z][_-]?){1,100}$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-defaultvariant */
        "DefaultVariant"?: string | Intrinsic;
        /**
         * - The description of the prompt.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-description */
        "Description"?: string | Intrinsic;
        /**
         * - The name of the prompt.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^([0-9a-zA-Z][_-]?){1,100}$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-name */
        "Name": string | Intrinsic;
        /**
         * - Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `^[a-zA-Z0-9\s._:/=+@-]*$`
         * - _Minimum_: `0`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-tags */
        "Tags"?: Record<string, string | Intrinsic>;
        /**
         * - A list of objects, each containing details about a variant of the prompt.
         * - _Required_: No
         * - _Type_: Array of [PromptVariant](./aws-properties-bedrock-prompt-promptvariant.html)
         * - _Minimum_: `0`
         * - _Maximum_: `1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-prompt.html#cfn-bedrock-prompt-variants */
        "Variants"?: PromptVariant[];
    };
}