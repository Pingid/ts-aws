import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The S3 location of the flow definition.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface S3Location {
  /**
   * - The S3 bucket containing the flow definition.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   * - _Minimum_: `3`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-s3location-bucket */
  Bucket: string | Intrinsic
  /**
   * - The object key for the S3 location containing the definition.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-s3location-key */
  Key: string | Intrinsic
  /**
   * - The Amazon S3 location from which to retrieve data for an S3 retrieve node or to which to store data for an S3 storage node.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-s3location-version */
  Version?: string | Intrinsic
}

/**
 * Contains configurations for an input to a node.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface FlowNodeInput {
  /**
   * - An expression that formats the input for the node. For an explanation of how to create expressions, see [Expressions in Prompt flows in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-expressions.html).
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownodeinput-expression */
  Expression: string | Intrinsic
  /**
   * - A name for the input that you can reference.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,50}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownodeinput-name */
  Name: string | Intrinsic
  /**
   * - The data type of the input. If the input doesn't match this type at runtime, a validation error will be thrown.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `String | Number | Boolean | Object | Array`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownodeinput-type */
  Type: string | Intrinsic
}

/**
 * Contains configurations for an output from a node.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface FlowNodeOutput {
  /**
   * - A name for the output that you can reference.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,50}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownodeoutput-name */
  Name: string | Intrinsic
  /**
   * - The data type of the output. If the output doesn't match this type at runtime, a validation error will be thrown.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `String | Number | Boolean | Object | Array`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownodeoutput-type */
  Type: string | Intrinsic
}

/**
 * The configuration of a connection between a condition node and another node.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface FlowConditionalConnectionConfiguration {
  /**
   * - The condition that triggers this connection. For more information about how to write conditions, see the **Condition** node type in the [Node types](https://docs.aws.amazon.com/bedrock/latest/userguide/node-types.html) topic in the Amazon Bedrock User Guide.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,50}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flowconditionalconnectionconfiguration-condition */
  Condition: string | Intrinsic
}

/**
 * The configuration of a connection originating from a node that isn't a Condition node.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface FlowDataConnectionConfiguration {
  /**
   * - The name of the output in the source node that the connection begins from.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,50}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flowdataconnectionconfiguration-sourceoutput */
  SourceOutput: string | Intrinsic
  /**
   * - The name of the input in the target node that the connection ends at.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,50}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flowdataconnectionconfiguration-targetinput */
  TargetInput: string | Intrinsic
}

/**
 * Defines an agent node in your flow. You specify the agent to invoke at this point in the flow. For more information, see [Node types in Amazon Bedrock works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface AgentFlowNodeConfiguration {
  /**
   * - The Amazon Resource Name (ARN) of the alias of the agent to invoke.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:agent-alias/[0-9a-zA-Z]{10}/[0-9a-zA-Z]{10}$`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-agentflownodeconfiguration-agentaliasarn */
  AgentAliasArn: string | Intrinsic
}

/**
 * Contains configurations for a knowledge base node in a flow. This node takes a query as the input and returns, as the output, the retrieved responses directly (as an array) or a response generated based on the retrieved responses. For more information, see [Node types in Amazon Bedrock works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface KnowledgeBaseFlowNodeConfiguration {
  /**
   * - The unique identifier of the knowledge base to query.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9a-zA-Z]+$`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-knowledgebaseflownodeconfiguration-knowledgebaseid */
  KnowledgeBaseId: string | Intrinsic
  /**
   * - The unique identifier of the model to use to generate a response from the query results. Omit this field if you want to return the retrieved results as an array.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:(([0-9]{12}:custom-model/[a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}(([:][a-z0-9-]{1,63}){0,2})?/[a-z0-9]{12})|(:foundation-model/([a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.]?[a-z0-9-]{1,63})([:][a-z0-9-]{1,63}){0,2})))|(([a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.]?[a-z0-9-]{1,63})([:][a-z0-9-]{1,63}){0,2}))|(([0-9a-zA-Z][_-]?)+)$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-knowledgebaseflownodeconfiguration-modelid */
  ModelId?: string | Intrinsic
}

/**
 * Contains configurations for a Lambda function node in the flow. You specify the Lambda function to invoke and the inputs into the function. The output is the response that is defined in the Lambda function. For more information, see [Node types in Amazon Bedrock works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface LambdaFunctionFlowNodeConfiguration {
  /**
   * - The Amazon Resource Name (ARN) of the Lambda function to invoke.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}(-gov)?-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9-_\.]+(:(\$LATEST|[a-zA-Z0-9-_]+))?$`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-lambdafunctionflownodeconfiguration-lambdaarn */
  LambdaArn: string | Intrinsic
}

/**
 * Contains configurations for a Lex node in the flow. You specify a Amazon Lex bot to invoke. This node takes an utterance as the input and returns as the output the intent identified by the Amazon Lex bot. For more information, see [Node types in Amazon Bedrock works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface LexFlowNodeConfiguration {
  /**
   * - The Amazon Resource Name (ARN) of the Amazon Lex bot alias to invoke.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws(|-us-gov):lex:[a-z]{2}(-gov)?-[a-z]+-\d{1}:\d{12}:bot-alias/[0-9a-zA-Z]+/[0-9a-zA-Z]+$`
   * - _Maximum_: `78`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-lexflownodeconfiguration-botaliasarn */
  BotAliasArn: string | Intrinsic
  /**
   * - The Region to invoke the Amazon Lex bot in.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-lexflownodeconfiguration-localeid */
  LocaleId: string | Intrinsic
}

/**
 * Defines a condition in the condition node.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface FlowCondition {
  /**
   * - Defines the condition. You must refer to at least one of the inputs in the condition. For more information, expand the Condition node section in [Node types in prompt flows](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-how-it-works.html#flows-nodes).
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flowcondition-expression */
  Expression?: string | Intrinsic
  /**
   * - A name for the condition that you can reference.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,50}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flowcondition-name */
  Name: string | Intrinsic
}

/**
 * Contains configurations for a prompt from Prompt management to use in a node.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface PromptFlowNodeResourceConfiguration {
  /**
   * - The Amazon Resource Name (ARN) of the prompt from Prompt management.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:prompt/[0-9a-zA-Z]{10}(?::[0-9]{1,5})?)$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-promptflownoderesourceconfiguration-promptarn */
  PromptArn: string | Intrinsic
}

/**
 * Contains configurations for the Amazon S3 location from which to retrieve data to return as the output from the node.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface RetrievalFlowNodeS3Configuration {
  /**
   * - The name of the Amazon S3 bucket from which to retrieve data.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-retrievalflownodes3configuration-bucketname */
  BucketName: string | Intrinsic
}

/**
 * Contains configurations for the Amazon S3 location in which to store the input into the node.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface StorageFlowNodeS3Configuration {
  /**
   * - The name of the Amazon S3 bucket in which to store the input into the node.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-storageflownodes3configuration-bucketname */
  BucketName: string | Intrinsic
}

/**
 * Contains inference configurations related to model inference for a prompt. For more information, see [Inference parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface PromptModelInferenceConfiguration {
  /**
   * - The maximum number of tokens to return in the response.
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `0`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-promptmodelinferenceconfiguration-maxtokens */
  MaxTokens?: number | Intrinsic
  /**
   * - A list of strings that define sequences after which the model will stop generating.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `4`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-promptmodelinferenceconfiguration-stopsequences */
  StopSequences?: (string | Intrinsic)[]
  /**
   * - Controls the randomness of the response. Choose a lower value for more predictable outputs and a higher value for more surprising outputs.
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `0`
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-promptmodelinferenceconfiguration-temperature */
  Temperature?: number | Intrinsic
  /**
   * - The number of most-likely candidates that the model considers for the next token during generation.
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `0`
   * - _Maximum_: `500`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-promptmodelinferenceconfiguration-topk */
  TopK?: number | Intrinsic
  /**
   * - The percentage of most-likely candidates that the model considers for the next token.
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `0`
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-promptmodelinferenceconfiguration-topp */
  TopP?: number | Intrinsic
}

/**
 * The configuration of the connection.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface FlowConnectionConfiguration {
  /**
   * - The configuration of a connection originating from a Condition node.
   * - _Required_: No
   * - _Type_: [FlowConditionalConnectionConfiguration](./aws-properties-bedrock-flow-flowconditionalconnectionconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flowconnectionconfiguration-conditional */
  Conditional?: FlowConditionalConnectionConfiguration
  /**
   * - The configuration of a connection originating from a node that isn't a Condition node.
   * - _Required_: No
   * - _Type_: [FlowDataConnectionConfiguration](./aws-properties-bedrock-flow-flowdataconnectionconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flowconnectionconfiguration-data */
  Data?: FlowDataConnectionConfiguration
}

/**
 * Contains information about a variable in the prompt.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface PromptInputVariable {
  /**
   * - The name of the variable.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^([0-9a-zA-Z][_-]?){1,100}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-promptinputvariable-name */
  Name?: string | Intrinsic
}

/**
 * Defines a condition node in your flow. You can specify conditions that determine which node comes next in the flow. For more information, see [Node types in Amazon Bedrock works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface ConditionFlowNodeConfiguration {
  /**
   * - An array of conditions. Each member contains the name of a condition and an expression that defines the condition.
   * - _Required_: Yes
   * - _Type_: Array of [FlowCondition](./aws-properties-bedrock-flow-flowcondition.html)
   * - _Minimum_: `1`
   * - _Maximum_: `5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-conditionflownodeconfiguration-conditions */
  Conditions: FlowCondition[]
}

/**
 * Contains configurations for the service to use for retrieving data to return as the output from the node.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface RetrievalFlowNodeServiceConfiguration {
  /**
   * - Contains configurations for the Amazon S3 location from which to retrieve data to return as the output from the node.
   * - _Required_: No
   * - _Type_: [RetrievalFlowNodeS3Configuration](./aws-properties-bedrock-flow-retrievalflownodes3configuration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-retrievalflownodeserviceconfiguration-s3 */
  S3?: RetrievalFlowNodeS3Configuration
}

/**
 * Contains configurations for the service to use for storing the input into the node.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface StorageFlowNodeServiceConfiguration {
  /**
   * - Contains configurations for the Amazon S3 location in which to store the input into the node.
   * - _Required_: No
   * - _Type_: [StorageFlowNodeS3Configuration](./aws-properties-bedrock-flow-storageflownodes3configuration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-storageflownodeserviceconfiguration-s3 */
  S3?: StorageFlowNodeS3Configuration
}

/**
 * Contains inference configurations for the prompt.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface PromptInferenceConfiguration {
  /**
   * - Contains inference configurations for a text prompt.
   * - _Required_: Yes
   * - _Type_: [PromptModelInferenceConfiguration](./aws-properties-bedrock-flow-promptmodelinferenceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-promptinferenceconfiguration-text */
  Text: PromptModelInferenceConfiguration
}

/**
 * Contains information about a connection between two nodes in the flow.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface FlowConnection {
  /**
   * - The configuration of the connection.
   * - _Required_: No
   * - _Type_: [FlowConnectionConfiguration](./aws-properties-bedrock-flow-flowconnectionconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flowconnection-configuration */
  Configuration?: FlowConnectionConfiguration
  /**
   * - A name for the connection that you can reference.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,100}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flowconnection-name */
  Name: string | Intrinsic
  /**
   * - The node that the connection starts at.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,50}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flowconnection-source */
  Source: string | Intrinsic
  /**
   * - The node that the connection ends at.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,50}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flowconnection-target */
  Target: string | Intrinsic
  /**
   * - Whether the source node that the connection begins from is a condition node (`Conditional`) or not (`Data`).
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `Data | Conditional`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flowconnection-type */
  Type: string | Intrinsic
}

/**
 * Contains configurations for a text prompt template. To include a variable, enclose a word in double curly braces as in `{{variable}}`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface TextPromptTemplateConfiguration {
  /**
   * - An array of the variables in the prompt template.
   * - _Required_: No
   * - _Type_: Array of [PromptInputVariable](./aws-properties-bedrock-flow-promptinputvariable.html)
   * - _Minimum_: `0`
   * - _Maximum_: `5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-textprompttemplateconfiguration-inputvariables */
  InputVariables?: PromptInputVariable[]
  /**
   * - The message for the prompt.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `200000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-textprompttemplateconfiguration-text */
  Text: string | Intrinsic
}

/**
 * Contains configurations for a Retrieval node in a flow. This node retrieves data from the Amazon S3 location that you specify and returns it as the output.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface RetrievalFlowNodeConfiguration {
  /**
   * - Contains configurations for the service to use for retrieving data to return as the output from the node.
   * - _Required_: Yes
   * - _Type_: [RetrievalFlowNodeServiceConfiguration](./aws-properties-bedrock-flow-retrievalflownodeserviceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-retrievalflownodeconfiguration-serviceconfiguration */
  ServiceConfiguration: RetrievalFlowNodeServiceConfiguration
}

/**
 * Contains configurations for a Storage node in a flow. This node stores the input in an Amazon S3 location that you specify.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface StorageFlowNodeConfiguration {
  /**
   * - Contains configurations for the service to use for storing the input into the node.
   * - _Required_: Yes
   * - _Type_: [StorageFlowNodeServiceConfiguration](./aws-properties-bedrock-flow-storageflownodeserviceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-storageflownodeconfiguration-serviceconfiguration */
  ServiceConfiguration: StorageFlowNodeServiceConfiguration
}

/**
 * Contains the message for a prompt. For more information, see [Prompt management in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface PromptTemplateConfiguration {
  /**
   * - Contains configurations for the text in a message for a prompt.
   * - _Required_: Yes
   * - _Type_: [TextPromptTemplateConfiguration](./aws-properties-bedrock-flow-textprompttemplateconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-prompttemplateconfiguration-text */
  Text: TextPromptTemplateConfiguration
}

/**
 * Contains configurations for a prompt defined inline in the node.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface PromptFlowNodeInlineConfiguration {
  /**
   * - Contains inference configurations for the prompt.
   * - _Required_: No
   * - _Type_: [PromptInferenceConfiguration](./aws-properties-bedrock-flow-promptinferenceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-promptflownodeinlineconfiguration-inferenceconfiguration */
  InferenceConfiguration?: PromptInferenceConfiguration
  /**
   * - The unique identifier of the model to run inference with.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:(([0-9]{12}:custom-model/[a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}/[a-z0-9]{12})|(:foundation-model/[a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.:]?[a-z0-9-]{1,63}))|([0-9]{12}:provisioned-model/[a-z0-9]{12})))|([a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.:]?[a-z0-9-]{1,63}))|(([0-9a-zA-Z][_-]?)+)$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-promptflownodeinlineconfiguration-modelid */
  ModelId: string | Intrinsic
  /**
   * - Contains a prompt and variables in the prompt that can be replaced with values at runtime.
   * - _Required_: Yes
   * - _Type_: [PromptTemplateConfiguration](./aws-properties-bedrock-flow-prompttemplateconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-promptflownodeinlineconfiguration-templateconfiguration */
  TemplateConfiguration: PromptTemplateConfiguration
  /**
   * - The type of prompt template.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `TEXT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-promptflownodeinlineconfiguration-templatetype */
  TemplateType: string | Intrinsic
}

/**
 * Contains configurations for a prompt and whether it is from Prompt management or defined inline.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface PromptFlowNodeSourceConfiguration {
  /**
   * - Contains configurations for a prompt that is defined inline
   * - _Required_: No
   * - _Type_: [PromptFlowNodeInlineConfiguration](./aws-properties-bedrock-flow-promptflownodeinlineconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-promptflownodesourceconfiguration-inline */
  Inline?: PromptFlowNodeInlineConfiguration
  /**
   * - Contains configurations for a prompt from Prompt management.
   * - _Required_: No
   * - _Type_: [PromptFlowNodeResourceConfiguration](./aws-properties-bedrock-flow-promptflownoderesourceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-promptflownodesourceconfiguration-resource */
  Resource?: PromptFlowNodeResourceConfiguration
}

/**
 * Contains configurations for a prompt node in the flow. You can use a prompt from Prompt management or you can define one in this node. If the prompt contains variables, the inputs into this node will fill in the variables. The output from this node is the response generated by the model. For more information, see [Node types in Amazon Bedrock works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface PromptFlowNodeConfiguration {
  /**
   * - Specifies whether the prompt is from Prompt management or defined inline.
   * - _Required_: Yes
   * - _Type_: [PromptFlowNodeSourceConfiguration](./aws-properties-bedrock-flow-promptflownodesourceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-promptflownodeconfiguration-sourceconfiguration */
  SourceConfiguration: PromptFlowNodeSourceConfiguration
}

/**
 * Contains configurations for a node in your flow. For more information, see [Node types in Amazon Bedrock works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-nodes.html) in the Amazon Bedrock User Guide.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface FlowNodeConfiguration {
  /**
   * - Contains configurations for an agent node in your flow. Invokes an alias of an agent and returns the response.
   * - _Required_: No
   * - _Type_: [AgentFlowNodeConfiguration](./aws-properties-bedrock-flow-agentflownodeconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownodeconfiguration-agent */
  Agent?: AgentFlowNodeConfiguration
  /**
   * - Contains configurations for a collector node in your flow. Collects an iteration of inputs and consolidates them into an array of outputs.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownodeconfiguration-collector */
  Collector?: any | Intrinsic
  /**
   * - Contains configurations for a Condition node in your flow. Defines conditions that lead to different branches of the flow.
   * - _Required_: No
   * - _Type_: [ConditionFlowNodeConfiguration](./aws-properties-bedrock-flow-conditionflownodeconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownodeconfiguration-condition */
  Condition?: ConditionFlowNodeConfiguration
  /**
   * - Contains configurations for an input flow node in your flow. The first node in the flow. `inputs` can't be specified for this node.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownodeconfiguration-input */
  Input?: any | Intrinsic
  /**
   * - Contains configurations for an iterator node in your flow. Takes an input that is an array and iteratively sends each item of the array as an output to the following node. The size of the array is also returned in the output.
   * - The output flow node at the end of the flow iteration will return a response for each member of the array. To return only one response, you can include a collector node downstream from the iterator node.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownodeconfiguration-iterator */
  Iterator?: any | Intrinsic
  /**
   * - Contains configurations for a knowledge base node in your flow. Queries a knowledge base and returns the retrieved results or generated response.
   * - _Required_: No
   * - _Type_: [KnowledgeBaseFlowNodeConfiguration](./aws-properties-bedrock-flow-knowledgebaseflownodeconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownodeconfiguration-knowledgebase */
  KnowledgeBase?: KnowledgeBaseFlowNodeConfiguration
  /**
   * - Contains configurations for a Lambda function node in your flow. Invokes an AWS Lambda function.
   * - _Required_: No
   * - _Type_: [LambdaFunctionFlowNodeConfiguration](./aws-properties-bedrock-flow-lambdafunctionflownodeconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownodeconfiguration-lambdafunction */
  LambdaFunction?: LambdaFunctionFlowNodeConfiguration
  /**
   * - Contains configurations for a Lex node in your flow. Invokes an Amazon Lex bot to identify the intent of the input and return the intent as the output.
   * - _Required_: No
   * - _Type_: [LexFlowNodeConfiguration](./aws-properties-bedrock-flow-lexflownodeconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownodeconfiguration-lex */
  Lex?: LexFlowNodeConfiguration
  /**
   * - Contains configurations for an output flow node in your flow. The last node in the flow. `outputs` can't be specified for this node.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownodeconfiguration-output */
  Output?: any | Intrinsic
  /**
   * - Contains configurations for a prompt node in your flow. Runs a prompt and generates the model response as the output. You can use a prompt from Prompt management or you can configure one in this node.
   * - _Required_: No
   * - _Type_: [PromptFlowNodeConfiguration](./aws-properties-bedrock-flow-promptflownodeconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownodeconfiguration-prompt */
  Prompt?: PromptFlowNodeConfiguration
  /**
   * - Contains configurations for a Retrieval node in your flow. Retrieves data from an Amazon S3 location and returns it as the output.
   * - _Required_: No
   * - _Type_: [RetrievalFlowNodeConfiguration](./aws-properties-bedrock-flow-retrievalflownodeconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownodeconfiguration-retrieval */
  Retrieval?: RetrievalFlowNodeConfiguration
  /**
   * - Contains configurations for a Storage node in your flow. Stores an input in an Amazon S3 location.
   * - _Required_: No
   * - _Type_: [StorageFlowNodeConfiguration](./aws-properties-bedrock-flow-storageflownodeconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownodeconfiguration-storage */
  Storage?: StorageFlowNodeConfiguration
}

/**
 * Contains configurations about a node in the flow.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface FlowNode {
  /**
   * - Contains configurations for the node.
   * - _Required_: No
   * - _Type_: [FlowNodeConfiguration](./aws-properties-bedrock-flow-flownodeconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownode-configuration */
  Configuration?: FlowNodeConfiguration
  /**
   * - An array of objects, each of which contains information about an input into the node.
   * - _Required_: No
   * - _Type_: Array of [FlowNodeInput](./aws-properties-bedrock-flow-flownodeinput.html)
   * - _Maximum_: `5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownode-inputs */
  Inputs?: FlowNodeInput[]
  /**
   * - A name for the node.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z]([_]?[0-9a-zA-Z]){1,50}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownode-name */
  Name: string | Intrinsic
  /**
   * - A list of objects, each of which contains information about an output from the node.
   * - _Required_: No
   * - _Type_: Array of [FlowNodeOutput](./aws-properties-bedrock-flow-flownodeoutput.html)
   * - _Maximum_: `5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownode-outputs */
  Outputs?: FlowNodeOutput[]
  /**
   * - The type of node. This value must match the name of the key that you provide in the configuration you provide in the `FlowNodeConfiguration` field.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `Input | Output | KnowledgeBase | Condition | Lex | Prompt | LambdaFunction | Agent | Storage | Retrieval | Iterator | Collector`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flownode-type */
  Type: string | Intrinsic
}

/**
 * The definition of the nodes and connections between nodes in the flow.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface FlowDefinition {
  /**
   * - An array of connection definitions in the flow.
   * - _Required_: No
   * - _Type_: Array of [FlowConnection](./aws-properties-bedrock-flow-flowconnection.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flowdefinition-connections */
  Connections?: FlowConnection[]
  /**
   * - An array of node definitions in the flow.
   * - _Required_: No
   * - _Type_: Array of [FlowNode](./aws-properties-bedrock-flow-flownode.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-flowdefinition-nodes */
  Nodes?: FlowNode[]
}

/**
 * Creates a prompt flow that you can use to send an input through various steps to yield an output. You define a flow by configuring nodes, each of which corresponds to a step of the flow, and creating connections between the nodes to create paths to different outputs. You can define the flow in one of the following ways:
 * *   Define a [FlowDefinition](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowdefinition.html) in the `Definition` property.
 *
 * *   Provide the definition in the `DefinitionString` property as a JSON-formatted string matching the [FlowDefinition](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowdefinition.html) property.
 *
 * *   Provide an Amazon S3 location in the `DefinitionS3Location` property that matches the [FlowDefinition](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowdefinition.html).
 * If you use the `DefinitionString` or `DefinitionS3Location` property, you can use the `DefinitionSubstitutions` property to define key-value pairs to replace at runtime.
 * For more information, see [How it works](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-how-it-works.html) and [Create a prompt flow in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-create.html) in the Amazon Bedrock User Guide.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html */

export interface BedrockFlow extends ResourceAttributes {
  Type: 'AWS::Bedrock::Flow'
  Properties: {
    /**
     * - The Amazon Resource Name (ARN) of the KMS key that the flow is encrypted with.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws(|-cn|-us-gov):kms:[a-zA-Z0-9-]*:[0-9]{12}:key/[a-zA-Z0-9-]{36}$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-customerencryptionkeyarn */
    CustomerEncryptionKeyArn?: string | Intrinsic
    /**
     * - The definition of the nodes and connections between the nodes in the flow.
     * - _Required_: No
     * - _Type_: [FlowDefinition](./aws-properties-bedrock-flow-flowdefinition.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-definition */
    Definition?: FlowDefinition
    /**
     * - The Amazon S3 location of the flow definition.
     * - _Required_: No
     * - _Type_: [S3Location](./aws-properties-bedrock-flow-s3location.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-definitions3location */
    DefinitionS3Location?: S3Location
    /**
     * - The definition of the flow as a JSON-formatted string. The string must match the format in [FlowDefinition](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-bedrock-flow-flowdefinition.html).
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `512000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-definitionstring */
    DefinitionString?: string | Intrinsic
    /**
     * - A map that specifies the mappings for placeholder variables in the prompt flow definition. This enables the customer to inject values obtained at runtime. Variables can be template parameter names, resource logical IDs, resource attributes, or a variable in a key-value map. Only supported with the `DefinitionString` and `DefinitionS3Location` fields.
     * - Substitutions must follow the syntax: `${key_name}` or `${variable_1,variable_2,...}`.
     * - _Required_: No
     * - _Type_: Object
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-definitionsubstitutions */
    DefinitionSubstitutions?: Record<string, any | Intrinsic>
    /**
     * - A description of the flow.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-description */
    Description?: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see [Create a service row for flows](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-permissions.html) in the Amazon Bedrock User Guide.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws(-[^:]+)?:iam::([0-9]{12})?:role/(service-role/)?.+$`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-executionrolearn */
    ExecutionRoleArn: string | Intrinsic
    /**
     * - The name of the flow.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([0-9a-zA-Z][_-]?){1,100}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-name */
    Name: string | Intrinsic
    /**
     * - Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^[a-zA-Z0-9\s._:/=+@-]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-tags */
    Tags?: Record<string, string | Intrinsic>
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^[a-zA-Z0-9\s._:/=+@-]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flow.html#cfn-bedrock-flow-testaliastags */
    TestAliasTags?: Record<string, string | Intrinsic>
  }
}
