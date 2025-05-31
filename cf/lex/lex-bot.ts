import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Defines an Amazon S3 bucket location.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface S3Location {
    /**
     * - The S3 bucket name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
     * - _Minimum_: `3`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-s3location-s3bucket */
    "S3Bucket": string | Intrinsic;
    /**
     * - The path and file name to the object in the S3 bucket.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\.\-\!\*\_\'\(\)a-zA-Z0-9][\.\-\!\*\_\'\(\)\/a-zA-Z0-9]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-s3location-s3objectkey */
    "S3ObjectKey": string | Intrinsic;
    /**
     * - The version of the object in the S3 bucket.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-s3location-s3objectversion */
    "S3ObjectVersion"?: string | Intrinsic;
}

/**
 * By default, data stored by Amazon Lex is encrypted. The `DataPrivacy` structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface DataPrivacy {
    /**
     * - For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying `true` or `false` in the `childDirected` field. By specifying `true` in the `childDirected` field, you confirm that your use of Amazon Lex **is** related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying `false` in the `childDirected` field, you confirm that your use of Amazon Lex **is not** related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the `childDirected` field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the [Amazon Lex FAQ](https://aws.amazon.com/lex/faqs#data-security).
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-dataprivacy-childdirected */
    "ChildDirected": boolean | Intrinsic;
}

/**
 * The `Tag` property type specifies Property description not available. for an [AWS::Lex::Bot](./aws-resource-lex-bot.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface Tag {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The `Replication` property type specifies Property description not available. for an [AWS::Lex::Bot](./aws-resource-lex-bot.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface Replication {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-replication-replicaregions */
    "ReplicaRegions": (string | Intrinsic)[];
}

/**
 * Defines settings for using an Amazon Polly voice to communicate with a user.
 * Valid values include:
 * *   `standard`
 *     
 * *   `neural`
 *     
 * *   `long-form`
 *     
 * *   `generative`
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface VoiceSettings {
    /**
     * - Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with the user. For more information, see the [`engine` parameter of the `SynthesizeSpeech` operation](https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html#polly-SynthesizeSpeech-request-Engine) in the _Amazon Polly developer guide_.
     * - If you do not specify a value, the default is `standard`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `standard | neural | long-form | generative`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-voicesettings-engine */
    "Engine"?: string | Intrinsic;
    /**
     * - The identifier of the Amazon Polly voice to use.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-voicesettings-voiceid */
    "VoiceId": string | Intrinsic;
}

/**
 * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface SentimentAnalysisSettings {
    /**
     * - Sets whether Amazon Lex uses Amazon Comprehend to detect the sentiment of user utterances.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-sentimentanalysissettings-detectsentiment */
    "DetectSentiment": boolean | Intrinsic;
}

/**
 * Specifies an entry in a custom vocabulary.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface CustomVocabularyItem {
    /**
     * - The DisplayAs value for the custom vocabulary item from the custom vocabulary list.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-customvocabularyitem-displayas */
    "DisplayAs"?: string | Intrinsic;
    /**
     * - Specifies 1 - 4 words that should be recognized.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-customvocabularyitem-phrase */
    "Phrase": string | Intrinsic;
    /**
     * - Specifies the degree to which the phrase recognition is boosted. The default value is 1.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `3`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-customvocabularyitem-weight */
    "Weight"?: number | Intrinsic;
}

/**
 * Specifies a custom vocabulary. A custom vocabulary is a list of words that you expect to be used during a conversation with your bot.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface CustomVocabulary {
    /**
     * - Specifies a list of words that you expect to be used during a conversation with your bot.
     * - _Required_: Yes
     * - _Type_: Array of [CustomVocabularyItem](./aws-properties-lex-bot-customvocabularyitem.html)
     * - _Maximum_: `500`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-customvocabulary-customvocabularyitems */
    "CustomVocabularyItems": CustomVocabularyItem[];
}

/**
 * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface IntentClosingSetting {
    /**
     * - The response that Amazon Lex sends to the user when the intent is complete.
     * - _Required_: No
     * - _Type_: [ResponseSpecification](./aws-properties-lex-bot-responsespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intentclosingsetting-closingresponse */
    "ClosingResponse"?: ResponseSpecification;
    /**
     * - A list of conditional branches associated with the intent's closing response. These branches are executed when the `nextStep` attribute is set to `EvalutateConditional`.
     * - _Required_: No
     * - _Type_: [ConditionalSpecification](./aws-properties-lex-bot-conditionalspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intentclosingsetting-conditional */
    "Conditional"?: ConditionalSpecification;
    /**
     * - Specifies whether an intent's closing response is used. When this field is false, the closing response isn't sent to the user. If the `IsActive` field isn't specified, the default is true.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intentclosingsetting-isactive */
    "IsActive"?: boolean | Intrinsic;
    /**
     * - Specifies the next step that the bot executes after playing the intent's closing response.
     * - _Required_: No
     * - _Type_: [DialogState](./aws-properties-lex-bot-dialogstate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intentclosingsetting-nextstep */
    "NextStep"?: DialogState;
}

/**
 * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface DialogCodeHookSetting {
    /**
     * - Enables the dialog code hook so that it processes user requests.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-dialogcodehooksetting-enabled */
    "Enabled": boolean | Intrinsic;
}

/**
 * Describes a session context that is activated when an intent is fulfilled.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface OutputContext {
    /**
     * - The name of the output context.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([0-9a-zA-Z][_-]?)+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-outputcontext-name */
    "Name": string | Intrinsic;
    /**
     * - The amount of time, in seconds, that the output context should remain active. The time is figured from the first time the context is sent to the user.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `5`
     * - _Maximum_: `86400`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-outputcontext-timetoliveinseconds */
    "TimeToLiveInSeconds": number | Intrinsic;
    /**
     * - The number of conversation turns that the output context should remain active. The number of turns is counted from the first time that the context is sent to the user.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-outputcontext-turnstolive */
    "TurnsToLive": number | Intrinsic;
}

/**
 * Provides configuration information for the `AMAZON.KendraSearchIntent` intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface KendraConfiguration {
    /**
     * - The Amazon Resource Name (ARN) of the Amazon Kendra index that you want the `AMAZON.KendraSearchIntent` intent to search. The index must be in the same account and Region as the Amazon Lex bot.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws[a-zA-Z-]*:kendra:[a-z]+-[a-z]+-[0-9]:[0-9]{12}:index/[a-zA-Z0-9][a-zA-Z0-9_-]*$`
     * - _Minimum_: `32`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-kendraconfiguration-kendraindex */
    "KendraIndex": string | Intrinsic;
    /**
     * - A query filter that Amazon Lex sends to Amazon Kendra to filter the response from a query. The filter is in the format defined by Amazon Kendra. For more information, see [Filtering queries](https://docs.aws.amazon.com/kendra/latest/dg/filtering.html).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `5000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-kendraconfiguration-queryfilterstring */
    "QueryFilterString"?: string | Intrinsic;
    /**
     * - Determines whether the `AMAZON.KendraSearchIntent` intent uses a custom query string to query the Amazon Kendra index.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-kendraconfiguration-queryfilterstringenabled */
    "QueryFilterStringEnabled"?: boolean | Intrinsic;
}

/**
 * A context that must be active for an intent to be selected by Amazon Lex.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface InputContext {
    /**
     * - The name of the context.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([0-9a-zA-Z][_-]?)+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-inputcontext-name */
    "Name": string | Intrinsic;
}

/**
 * A sample utterance that invokes an intent or respond to a slot elicitation prompt.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface SampleUtterance {
    /**
     * - A sample utterance that invokes an intent or respond to a slot elicitation prompt.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-sampleutterance-utterance */
    "Utterance": string | Intrinsic;
}

/**
 * Sets the priority that Amazon Lex should use when eliciting slot values from a user.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface SlotPriority {
    /**
     * - The priority that Amazon Lex should apply to the slot.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotpriority-priority */
    "Priority": number | Intrinsic;
    /**
     * - The name of the slot.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([0-9a-zA-Z][_-]?)+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotpriority-slotname */
    "SlotName": string | Intrinsic;
}

/**
 * The `BedrockAgentConfiguration` property type specifies Property description not available. for an [AWS::Lex::Bot](./aws-resource-lex-bot.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface BedrockAgentConfiguration {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `5000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-bedrockagentconfiguration-bedrockagentaliasid */
    "BedrockAgentAliasId"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `5000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-bedrockagentconfiguration-bedrockagentid */
    "BedrockAgentId"?: string | Intrinsic;
}

/**
 * The `BedrockAgentIntentKnowledgeBaseConfiguration` property type specifies Property description not available. for an [AWS::Lex::Bot](./aws-resource-lex-bot.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface BedrockAgentIntentKnowledgeBaseConfiguration {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `5000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-bedrockagentintentknowledgebaseconfiguration-bedrockknowledgebasearn */
    "BedrockKnowledgeBaseArn": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: [BedrockModelSpecification](./aws-properties-lex-bot-bedrockmodelspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-bedrockagentintentknowledgebaseconfiguration-bedrockmodelconfiguration */
    "BedrockModelConfiguration": BedrockModelSpecification;
}

/**
 * The `BedrockAgentIntentConfiguration` property type specifies Property description not available. for an [AWS::Lex::Bot](./aws-resource-lex-bot.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface BedrockAgentIntentConfiguration {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [BedrockAgentConfiguration](./aws-properties-lex-bot-bedrockagentconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-bedrockagentintentconfiguration-bedrockagentconfiguration */
    "BedrockAgentConfiguration"?: BedrockAgentConfiguration;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [BedrockAgentIntentKnowledgeBaseConfiguration](./aws-properties-lex-bot-bedrockagentintentknowledgebaseconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-bedrockagentintentconfiguration-bedrockagentintentknowledgebaseconfiguration */
    "BedrockAgentIntentKnowledgeBaseConfiguration"?: BedrockAgentIntentKnowledgeBaseConfiguration;
}

/**
 * Settings that specify the dialog code hook that is called by Amazon Lex between eliciting slot values.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface ElicitationCodeHookInvocationSetting {
    /**
     * - Indicates whether a Lambda function should be invoked for the dialog.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-elicitationcodehookinvocationsetting-enablecodehookinvocation */
    "EnableCodeHookInvocation": boolean | Intrinsic;
    /**
     * - A label that indicates the dialog step from which the dialog code hook is happening.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^([0-9a-zA-Z][_-]?)+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-elicitationcodehookinvocationsetting-invocationlabel */
    "InvocationLabel"?: string | Intrinsic;
}

/**
 * Provides a setting that determines whether the post-fulfillment response is sent to the user. For more information, see [https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete](https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete)
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface PostFulfillmentStatusSpecification {
    /**
     * - A list of conditional branches to evaluate after the fulfillment code hook throws an exception or returns with the `State` field of the `Intent` object set to `Failed`.
     * - _Required_: No
     * - _Type_: [ConditionalSpecification](./aws-properties-lex-bot-conditionalspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-postfulfillmentstatusspecification-failureconditional */
    "FailureConditional"?: ConditionalSpecification;
    /**
     * - Specifies the next step the bot runs after the fulfillment code hook throws an exception or returns with the `State` field of the `Intent` object set to `Failed`.
     * - _Required_: No
     * - _Type_: [DialogState](./aws-properties-lex-bot-dialogstate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-postfulfillmentstatusspecification-failurenextstep */
    "FailureNextStep"?: DialogState;
    /**
     * - Specifies a list of message groups that Amazon Lex uses to respond when fulfillment isn't successful.
     * - _Required_: No
     * - _Type_: [ResponseSpecification](./aws-properties-lex-bot-responsespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-postfulfillmentstatusspecification-failureresponse */
    "FailureResponse"?: ResponseSpecification;
    /**
     * - A list of conditional branches to evaluate after the fulfillment code hook finishes successfully.
     * - _Required_: No
     * - _Type_: [ConditionalSpecification](./aws-properties-lex-bot-conditionalspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-postfulfillmentstatusspecification-successconditional */
    "SuccessConditional"?: ConditionalSpecification;
    /**
     * - Specifies the next step in the conversation that Amazon Lex invokes when the fulfillment code hook completes successfully.
     * - _Required_: No
     * - _Type_: [DialogState](./aws-properties-lex-bot-dialogstate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-postfulfillmentstatusspecification-successnextstep */
    "SuccessNextStep"?: DialogState;
    /**
     * - Specifies a list of message groups that Amazon Lex uses to respond when the fulfillment is successful.
     * - _Required_: No
     * - _Type_: [ResponseSpecification](./aws-properties-lex-bot-responsespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-postfulfillmentstatusspecification-successresponse */
    "SuccessResponse"?: ResponseSpecification;
    /**
     * - A list of conditional branches to evaluate if the fulfillment code hook times out.
     * - _Required_: No
     * - _Type_: [ConditionalSpecification](./aws-properties-lex-bot-conditionalspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-postfulfillmentstatusspecification-timeoutconditional */
    "TimeoutConditional"?: ConditionalSpecification;
    /**
     * - Specifies the next step that the bot runs when the fulfillment code hook times out.
     * - _Required_: No
     * - _Type_: [DialogState](./aws-properties-lex-bot-dialogstate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-postfulfillmentstatusspecification-timeoutnextstep */
    "TimeoutNextStep"?: DialogState;
    /**
     * - Specifies a list of message groups that Amazon Lex uses to respond when fulfillment isn't completed within the timeout period.
     * - _Required_: No
     * - _Type_: [ResponseSpecification](./aws-properties-lex-bot-responsespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-postfulfillmentstatusspecification-timeoutresponse */
    "TimeoutResponse"?: ResponseSpecification;
}

/**
 * The `QInConnectAssistantConfiguration` property type specifies Property description not available. for an [AWS::Lex::Bot](./aws-resource-lex-bot.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface QInConnectAssistantConfiguration {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}){0,2}$`
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-qinconnectassistantconfiguration-assistantarn */
    "AssistantArn": string | Intrinsic;
}

/**
 * The `QInConnectIntentConfiguration` property type specifies Property description not available. for an [AWS::Lex::Bot](./aws-resource-lex-bot.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface QInConnectIntentConfiguration {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [QInConnectAssistantConfiguration](./aws-properties-lex-bot-qinconnectassistantconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-qinconnectintentconfiguration-qinconnectassistantconfiguration */
    "QInConnectAssistantConfiguration"?: QInConnectAssistantConfiguration;
}

/**
 * Indicates whether a slot can return multiple values.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface MultipleValuesSetting {
    /**
     * - Indicates whether a slot can return multiple values. When `true`, the slot may return more than one value in a response. When `false`, the slot returns only a single value.
     * - Multi-value slots are only available in the en-US locale. If you set this value to `true` in any other locale, Amazon Lex throws a `ValidationException`.
     * - If the `allowMutlipleValues` is not set, the default value is `false`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-multiplevaluessetting-allowmultiplevalues */
    "AllowMultipleValues"?: boolean | Intrinsic;
}

/**
 * Determines whether Amazon Lex obscures slot values in conversation logs.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface ObfuscationSetting {
    /**
     * - Value that determines whether Amazon Lex obscures slot values in conversation logs. The default is to obscure the values.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `None | DefaultObfuscation`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-obfuscationsetting-obfuscationsettingtype */
    "ObfuscationSettingType": string | Intrinsic;
}

/**
 * Provides a regular expression used to validate the value of a slot.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface SlotValueRegexFilter {
    /**
     * - A regular expression used to validate the value of a slot.
     * - Use a standard regular expression. Amazon Lex supports the following characters in the regular expression:
     * - Represent Unicode characters with four digits, for example "\\⁠u0041" or "\\⁠u005A".
     * - The following regular expression operators are not supported:
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `300`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotvalueregexfilter-pattern */
    "Pattern": string | Intrinsic;
}

/**
 * Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface LambdaCodeHook {
    /**
     * - The version of the request-response that you want Amazon Lex to use to invoke your Lambda function.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-lambdacodehook-codehookinterfaceversion */
    "CodeHookInterfaceVersion": string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the Lambda function.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-lambdacodehook-lambdaarn */
    "LambdaArn": string | Intrinsic;
}

/**
 * Contains information about code hooks that Amazon Lex calls during a conversation.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface CodeHookSpecification {
    /**
     * - Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.
     * - _Required_: Yes
     * - _Type_: [LambdaCodeHook](./aws-properties-lex-bot-lambdacodehook.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-codehookspecification-lambdacodehook */
    "LambdaCodeHook": LambdaCodeHook;
}

/**
 * Specifies settings that are unique to a locale. For example, you can use different Lambda function depending on the bot's locale.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface BotAliasLocaleSettingsItem {
    /**
     * - Specifies the Lambda function that should be used in the locale.
     * - _Required_: No
     * - _Type_: [CodeHookSpecification](./aws-properties-lex-bot-codehookspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-botaliaslocalesettings-codehookspecification */
    "CodeHookSpecification"?: CodeHookSpecification;
    /**
     * - Determines whether the locale is enabled for the bot. If the value is `false`, the locale isn't available for use.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-botaliaslocalesettings-enabled */
    "Enabled": boolean | Intrinsic;
}

/**
 * Subslot type composition.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface SubSlotTypeComposition {
    /**
     * - Name of a constituent sub slot inside a composite slot.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([0-9a-zA-Z][_-]?){1,100}$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-subslottypecomposition-name */
    "Name": string | Intrinsic;
    /**
     * - The unique identifier assigned to a slot type. This refers to either a built-in slot type or the unique slotTypeId of a custom slot type.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^((AMAZON\.)[a-zA-Z_]+?|[0-9a-zA-Z]+)$`
     * - _Minimum_: `1`
     * - _Maximum_: `25`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-subslottypecomposition-slottypeid */
    "SlotTypeId": string | Intrinsic;
}

/**
 * A composite slot is a combination of two or more slots that capture multiple pieces of information in a single user input.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface CompositeSlotTypeSetting {
    /**
     * - Subslots in the composite slot.
     * - _Required_: No
     * - _Type_: Array of [SubSlotTypeComposition](./aws-properties-lex-bot-subslottypecomposition.html)
     * - _Minimum_: `1`
     * - _Maximum_: `6`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-compositeslottypesetting-subslots */
    "SubSlots"?: SubSlotTypeComposition[];
}

/**
 * Provides settings that enable advanced recognition settings for slot values.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface AdvancedRecognitionSetting {
    /**
     * - Enables using the slot values as a custom vocabulary for recognizing user utterances.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `UseSlotValuesAsCustomVocabulary`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-advancedrecognitionsetting-audiorecognitionstrategy */
    "AudioRecognitionStrategy"?: string | Intrinsic;
}

/**
 * Contains settings used by Amazon Lex to select a slot value.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface SlotValueSelectionSetting {
    /**
     * - Provides settings that enable advanced recognition settings for slot values. You can use this to enable using slot values as a custom vocabulary for recognizing user utterances.
     * - _Required_: No
     * - _Type_: [AdvancedRecognitionSetting](./aws-properties-lex-bot-advancedrecognitionsetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotvalueselectionsetting-advancedrecognitionsetting */
    "AdvancedRecognitionSetting"?: AdvancedRecognitionSetting;
    /**
     * - A regular expression used to validate the value of a slot.
     * - _Required_: No
     * - _Type_: [SlotValueRegexFilter](./aws-properties-lex-bot-slotvalueregexfilter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotvalueselectionsetting-regexfilter */
    "RegexFilter"?: SlotValueRegexFilter;
    /**
     * - Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values:
     * - If you don't specify the `valueSelectionStrategy`, the default is `ORIGINAL_VALUE`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ORIGINAL_VALUE | TOP_RESOLUTION | CONCATENATION`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotvalueselectionsetting-resolutionstrategy */
    "ResolutionStrategy": string | Intrinsic;
}

/**
 * Defines one of the values for a slot type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface SampleValue {
    /**
     * - The value that can be used for a slot type.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `140`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-samplevalue-value */
    "Value": string | Intrinsic;
}

/**
 * Each slot type can have a set of values. Each `SlotTypeValue` represents a value that the slot type can take.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface SlotTypeValue {
    /**
     * - The value of the slot type entry.
     * - _Required_: Yes
     * - _Type_: [SampleValue](./aws-properties-lex-bot-samplevalue.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slottypevalue-samplevalue */
    "SampleValue": SampleValue;
    /**
     * - Additional values related to the slot type entry.
     * - _Required_: No
     * - _Type_: Array of [SampleValue](./aws-properties-lex-bot-samplevalue.html)
     * - _Maximum_: `10000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slottypevalue-synonyms */
    "Synonyms"?: SampleValue[];
}

/**
 * Specifies next steps to run after the dialog code hook finishes.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface PostDialogCodeHookInvocationSpecification {
    /**
     * - A list of conditional branches to evaluate after the dialog code hook throws an exception or returns with the `State` field of the `Intent` object set to `Failed`.
     * - _Required_: No
     * - _Type_: [ConditionalSpecification](./aws-properties-lex-bot-conditionalspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-postdialogcodehookinvocationspecification-failureconditional */
    "FailureConditional"?: ConditionalSpecification;
    /**
     * - Specifies the next step the bot runs after the dialog code hook throws an exception or returns with the `State` field of the `Intent` object set to `Failed`.
     * - _Required_: No
     * - _Type_: [DialogState](./aws-properties-lex-bot-dialogstate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-postdialogcodehookinvocationspecification-failurenextstep */
    "FailureNextStep"?: DialogState;
    /**
     * - Specifies a list of message groups that Amazon Lex uses to respond the user input when the code hook fails.
     * - _Required_: No
     * - _Type_: [ResponseSpecification](./aws-properties-lex-bot-responsespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-postdialogcodehookinvocationspecification-failureresponse */
    "FailureResponse"?: ResponseSpecification;
    /**
     * - A list of conditional branches to evaluate after the dialog code hook finishes successfully.
     * - _Required_: No
     * - _Type_: [ConditionalSpecification](./aws-properties-lex-bot-conditionalspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-postdialogcodehookinvocationspecification-successconditional */
    "SuccessConditional"?: ConditionalSpecification;
    /**
     * - Specifics the next step the bot runs after the dialog code hook finishes successfully.
     * - _Required_: No
     * - _Type_: [DialogState](./aws-properties-lex-bot-dialogstate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-postdialogcodehookinvocationspecification-successnextstep */
    "SuccessNextStep"?: DialogState;
    /**
     * - Specifies a list of message groups that Amazon Lex uses to respond when the code hook succeeds.
     * - _Required_: No
     * - _Type_: [ResponseSpecification](./aws-properties-lex-bot-responsespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-postdialogcodehookinvocationspecification-successresponse */
    "SuccessResponse"?: ResponseSpecification;
    /**
     * - A list of conditional branches to evaluate if the code hook times out.
     * - _Required_: No
     * - _Type_: [ConditionalSpecification](./aws-properties-lex-bot-conditionalspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-postdialogcodehookinvocationspecification-timeoutconditional */
    "TimeoutConditional"?: ConditionalSpecification;
    /**
     * - Specifies the next step that the bot runs when the code hook times out.
     * - _Required_: No
     * - _Type_: [DialogState](./aws-properties-lex-bot-dialogstate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-postdialogcodehookinvocationspecification-timeoutnextstep */
    "TimeoutNextStep"?: DialogState;
    /**
     * - Specifies a list of message groups that Amazon Lex uses to respond to the user input when the code hook times out.
     * - _Required_: No
     * - _Type_: [ResponseSpecification](./aws-properties-lex-bot-responsespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-postdialogcodehookinvocationspecification-timeoutresponse */
    "TimeoutResponse"?: ResponseSpecification;
}

/**
 * Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface DialogCodeHookInvocationSetting {
    /**
     * - Indicates whether a Lambda function should be invoked for the dialog.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-dialogcodehookinvocationsetting-enablecodehookinvocation */
    "EnableCodeHookInvocation": boolean | Intrinsic;
    /**
     * - A label that indicates the dialog step from which the dialog code hook is happening.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^([0-9a-zA-Z][_-]?)+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-dialogcodehookinvocationsetting-invocationlabel */
    "InvocationLabel"?: string | Intrinsic;
    /**
     * - Determines whether a dialog code hook is used when the intent is activated.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-dialogcodehookinvocationsetting-isactive */
    "IsActive": boolean | Intrinsic;
    /**
     * - Contains the responses and actions that Amazon Lex takes after the Lambda function is complete.
     * - _Required_: Yes
     * - _Type_: [PostDialogCodeHookInvocationSpecification](./aws-properties-lex-bot-postdialogcodehookinvocationspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-dialogcodehookinvocationsetting-postcodehookspecification */
    "PostCodeHookSpecification": PostDialogCodeHookInvocationSpecification;
}

/**
 * A set of actions that Amazon Lex should run if none of the other conditions are met.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface DefaultConditionalBranch {
    /**
     * - The next step in the conversation.
     * - _Required_: No
     * - _Type_: [DialogState](./aws-properties-lex-bot-dialogstate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-defaultconditionalbranch-nextstep */
    "NextStep"?: DialogState;
    /**
     * - Specifies a list of message groups that Amazon Lex uses to respond the user input.
     * - _Required_: No
     * - _Type_: [ResponseSpecification](./aws-properties-lex-bot-responsespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-defaultconditionalbranch-response */
    "Response"?: ResponseSpecification;
}

/**
 * A key/value pair representing session-specific context information. It contains application information passed between Amazon Lex V2 and a client application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface SessionAttribute {
    /**
     * - The name of the session attribute.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-sessionattribute-key */
    "Key": string | Intrinsic;
    /**
     * - The session-specific context information for the session attribute.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-sessionattribute-value */
    "Value"?: string | Intrinsic;
}

/**
 * Contains details about the configuration of the Amazon Kendra index used for the `AMAZON.QnAIntent`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface QnAKendraConfiguration {
    /**
     * - Specifies whether to return an exact response from the Amazon Kendra index or to let the Amazon Bedrock model you select generate a response based on the results. To use this feature, you must first add FAQ questions to your index by following the steps at [Adding frequently asked questions (FAQs) to an index](https://docs.aws.amazon.com/kendra/latest/dg/in-creating-faq.html).
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-qnakendraconfiguration-exactresponse */
    "ExactResponse": boolean | Intrinsic;
    /**
     * - The ARN of the Amazon Kendra index to use.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `5000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-qnakendraconfiguration-kendraindex */
    "KendraIndex": string | Intrinsic;
    /**
     * - Contains the Amazon Kendra filter string to use if enabled. For more information on the Amazon Kendra search filter JSON format, see [Using document attributes to filter search results](https://docs.aws.amazon.com/kendra/latest/dg/filtering.html#search-filtering).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `5000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-qnakendraconfiguration-queryfilterstring */
    "QueryFilterString"?: string | Intrinsic;
    /**
     * - Specifies whether to enable an Amazon Kendra filter string or not.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-qnakendraconfiguration-queryfilterstringenabled */
    "QueryFilterStringEnabled": boolean | Intrinsic;
}

/**
 * Provides settings for a message that is sent to the user when a fulfillment Lambda function starts running.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface FulfillmentStartResponseSpecification {
    /**
     * - Determines whether the user can interrupt the start message while it is playing.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-fulfillmentstartresponsespecification-allowinterrupt */
    "AllowInterrupt"?: boolean | Intrinsic;
    /**
     * - The delay between when the Lambda fulfillment function starts running and the start message is played. If the Lambda function returns before the delay is over, the start message isn't played.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `900`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-fulfillmentstartresponsespecification-delayinseconds */
    "DelayInSeconds": number | Intrinsic;
    /**
     * - 1 - 5 message groups that contain start messages. Amazon Lex chooses one of the messages to play to the user.
     * - _Required_: Yes
     * - _Type_: Array of [MessageGroup](./aws-properties-lex-bot-messagegroup.html)
     * - _Minimum_: `1`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-fulfillmentstartresponsespecification-messagegroups */
    "MessageGroups": MessageGroup[];
}

/**
 * Provides settings for a message that is sent periodically to the user while a fulfillment Lambda function is running.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface FulfillmentUpdateResponseSpecification {
    /**
     * - Determines whether the user can interrupt an update message while it is playing.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-fulfillmentupdateresponsespecification-allowinterrupt */
    "AllowInterrupt"?: boolean | Intrinsic;
    /**
     * - The frequency that a message is sent to the user. When the period ends, Amazon Lex chooses a message from the message groups and plays it to the user. If the fulfillment Lambda returns before the first period ends, an update message is not played to the user.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `900`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-fulfillmentupdateresponsespecification-frequencyinseconds */
    "FrequencyInSeconds": number | Intrinsic;
    /**
     * - 1 - 5 message groups that contain update messages. Amazon Lex chooses one of the messages to play to the user.
     * - _Required_: Yes
     * - _Type_: Array of [MessageGroup](./aws-properties-lex-bot-messagegroup.html)
     * - _Minimum_: `1`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-fulfillmentupdateresponsespecification-messagegroups */
    "MessageGroups": MessageGroup[];
}

/**
 * Provides information for updating the user on the progress of fulfilling an intent.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface FulfillmentUpdatesSpecification {
    /**
     * - Determines whether fulfillment updates are sent to the user. When this field is true, updates are sent.
     * - If the `active` field is set to true, the `startResponse`, `updateResponse`, and `timeoutInSeconds` fields are required.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-fulfillmentupdatesspecification-active */
    "Active": boolean | Intrinsic;
    /**
     * - Provides configuration information for the message sent to users when the fulfillment Lambda functions starts running.
     * - _Required_: No
     * - _Type_: [FulfillmentStartResponseSpecification](./aws-properties-lex-bot-fulfillmentstartresponsespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-fulfillmentupdatesspecification-startresponse */
    "StartResponse"?: FulfillmentStartResponseSpecification;
    /**
     * - The length of time that the fulfillment Lambda function should run before it times out.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `900`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-fulfillmentupdatesspecification-timeoutinseconds */
    "TimeoutInSeconds"?: number | Intrinsic;
    /**
     * - Provides configuration information for messages sent periodically to the user while the fulfillment Lambda function is running.
     * - _Required_: No
     * - _Type_: [FulfillmentUpdateResponseSpecification](./aws-properties-lex-bot-fulfillmentupdateresponsespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-fulfillmentupdatesspecification-updateresponse */
    "UpdateResponse"?: FulfillmentUpdateResponseSpecification;
}

/**
 * Determines if a Lambda function should be invoked for a specific intent.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface FulfillmentCodeHookSetting {
    /**
     * - Indicates whether a Lambda function should be invoked to fulfill a specific intent.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-fulfillmentcodehooksetting-enabled */
    "Enabled": boolean | Intrinsic;
    /**
     * - Provides settings for update messages sent to the user for long-running Lambda fulfillment functions. Fulfillment updates can be used only with streaming conversations.
     * - _Required_: No
     * - _Type_: [FulfillmentUpdatesSpecification](./aws-properties-lex-bot-fulfillmentupdatesspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-fulfillmentcodehooksetting-fulfillmentupdatesspecification */
    "FulfillmentUpdatesSpecification"?: FulfillmentUpdatesSpecification;
    /**
     * - Determines whether the fulfillment code hook is used. When `active` is false, the code hook doesn't run.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-fulfillmentcodehooksetting-isactive */
    "IsActive"?: boolean | Intrinsic;
    /**
     * - Provides settings for messages sent to the user for after the Lambda fulfillment function completes. Post-fulfillment messages can be sent for both streaming and non-streaming conversations.
     * - _Required_: No
     * - _Type_: [PostFulfillmentStatusSpecification](./aws-properties-lex-bot-postfulfillmentstatusspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-fulfillmentcodehooksetting-postfulfillmentstatusspecification */
    "PostFulfillmentStatusSpecification"?: PostFulfillmentStatusSpecification;
}

/**
 * The details on the Bedrock guardrail configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface BedrockGuardrailConfiguration {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `5000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-bedrockguardrailconfiguration-bedrockguardrailidentifier */
    "BedrockGuardrailIdentifier"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `5000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-bedrockguardrailconfiguration-bedrockguardrailversion */
    "BedrockGuardrailVersion"?: string | Intrinsic;
}

/**
 * Contains information about the Amazon Bedrock model used to interpret the prompt used in descriptive bot building.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface BedrockModelSpecification {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [BedrockGuardrailConfiguration](./aws-properties-lex-bot-bedrockguardrailconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-bedrockmodelspecification-bedrockguardrailconfiguration */
    "BedrockGuardrailConfiguration"?: BedrockGuardrailConfiguration;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `5000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-bedrockmodelspecification-bedrockmodelcustomprompt */
    "BedrockModelCustomPrompt"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-bedrockmodelspecification-bedrocktracestatus */
    "BedrockTraceStatus"?: string | Intrinsic;
    /**
     * - The ARN of the foundation model used in descriptive bot building.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `5000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-bedrockmodelspecification-modelarn */
    "ModelArn": string | Intrinsic;
}

/**
 * Defines the action that the bot executes at runtime when the conversation reaches this step.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface DialogAction {
    /**
     * - If the dialog action is `ElicitSlot`, defines the slot to elicit from the user.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^([0-9a-zA-Z][_-]?)+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-dialogaction-slottoelicit */
    "SlotToElicit"?: string | Intrinsic;
    /**
     * - When true the next message for the intent is not used.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-dialogaction-suppressnextmessage */
    "SuppressNextMessage"?: boolean | Intrinsic;
    /**
     * - The action that the bot should execute.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `CloseIntent | ConfirmIntent | ElicitIntent | ElicitSlot | StartIntent | FulfillIntent | EndConversation | EvaluateConditional | InvokeDialogCodeHook`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-dialogaction-type */
    "Type": string | Intrinsic;
}

/**
 * Settings used when Amazon Lex successfully captures a slot value from a user.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface SlotCaptureSetting {
    /**
     * - A list of conditional branches to evaluate after the slot value is captured.
     * - _Required_: No
     * - _Type_: [ConditionalSpecification](./aws-properties-lex-bot-conditionalspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotcapturesetting-captureconditional */
    "CaptureConditional"?: ConditionalSpecification;
    /**
     * - Specifies the next step that the bot runs when the slot value is captured before the code hook times out.
     * - _Required_: No
     * - _Type_: [DialogState](./aws-properties-lex-bot-dialogstate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotcapturesetting-capturenextstep */
    "CaptureNextStep"?: DialogState;
    /**
     * - Specifies a list of message groups that Amazon Lex uses to respond the user input.
     * - _Required_: No
     * - _Type_: [ResponseSpecification](./aws-properties-lex-bot-responsespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotcapturesetting-captureresponse */
    "CaptureResponse"?: ResponseSpecification;
    /**
     * - Code hook called after Amazon Lex successfully captures a slot value.
     * - _Required_: No
     * - _Type_: [DialogCodeHookInvocationSetting](./aws-properties-lex-bot-dialogcodehookinvocationsetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotcapturesetting-codehook */
    "CodeHook"?: DialogCodeHookInvocationSetting;
    /**
     * - Code hook called when Amazon Lex doesn't capture a slot value.
     * - _Required_: No
     * - _Type_: [ElicitationCodeHookInvocationSetting](./aws-properties-lex-bot-elicitationcodehookinvocationsetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotcapturesetting-elicitationcodehook */
    "ElicitationCodeHook"?: ElicitationCodeHookInvocationSetting;
    /**
     * - A list of conditional branches to evaluate when the slot value isn't captured.
     * - _Required_: No
     * - _Type_: [ConditionalSpecification](./aws-properties-lex-bot-conditionalspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotcapturesetting-failureconditional */
    "FailureConditional"?: ConditionalSpecification;
    /**
     * - Specifies the next step that the bot runs when the slot value code is not recognized.
     * - _Required_: No
     * - _Type_: [DialogState](./aws-properties-lex-bot-dialogstate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotcapturesetting-failurenextstep */
    "FailureNextStep"?: DialogState;
    /**
     * - Specifies a list of message groups that Amazon Lex uses to respond the user input when the slot fails to be captured.
     * - _Required_: No
     * - _Type_: [ResponseSpecification](./aws-properties-lex-bot-responsespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotcapturesetting-failureresponse */
    "FailureResponse"?: ResponseSpecification;
}

/**
 * Describes the Amazon S3 bucket name and location for the grammar that is the source for the slot type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface GrammarSlotTypeSource {
    /**
     * - The AWS KMS key required to decrypt the contents of the grammar, if any.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:[\w\-]+:kms:[\w\-]+:[\d]{12}:(?:key\/[\w\-]+|alias\/[a-zA-Z0-9:\/_\-]{1,256})$`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-grammarslottypesource-kmskeyarn */
    "KmsKeyArn"?: string | Intrinsic;
    /**
     * - The name of the Amazon S3 bucket that contains the grammar source.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
     * - _Minimum_: `3`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-grammarslottypesource-s3bucketname */
    "S3BucketName": string | Intrinsic;
    /**
     * - The path to the grammar in the Amazon S3 bucket.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\.\-\!\*\_\'\(\)a-zA-Z0-9][\.\-\!\*\_\'\(\)\/a-zA-Z0-9]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-grammarslottypesource-s3objectkey */
    "S3ObjectKey": string | Intrinsic;
}

/**
 * Settings requried for a slot type based on a grammar that you provide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface GrammarSlotTypeSetting {
    /**
     * - The source of the grammar used to create the slot type.
     * - _Required_: No
     * - _Type_: [GrammarSlotTypeSource](./aws-properties-lex-bot-grammarslottypesource.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-grammarslottypesetting-source */
    "Source"?: GrammarSlotTypeSource;
}

/**
 * Provides information about the external source of the slot type's definition.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface ExternalSourceSetting {
    /**
     * - Settings required for a slot type based on a grammar that you provide.
     * - _Required_: No
     * - _Type_: [GrammarSlotTypeSetting](./aws-properties-lex-bot-grammarslottypesetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-externalsourcesetting-grammarslottypesetting */
    "GrammarSlotTypeSetting"?: GrammarSlotTypeSetting;
}

/**
 * Describes a slot type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface SlotType {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [CompositeSlotTypeSetting](./aws-properties-lex-bot-compositeslottypesetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slottype-compositeslottypesetting */
    "CompositeSlotTypeSetting"?: CompositeSlotTypeSetting;
    /**
     * - A description of the slot type. Use the description to help identify the slot type in lists.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slottype-description */
    "Description"?: string | Intrinsic;
    /**
     * - Sets the type of external information used to create the slot type.
     * - _Required_: No
     * - _Type_: [ExternalSourceSetting](./aws-properties-lex-bot-externalsourcesetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slottype-externalsourcesetting */
    "ExternalSourceSetting"?: ExternalSourceSetting;
    /**
     * - The name of the slot type. A slot type name must be unique withing the account.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([0-9a-zA-Z][_-]?)+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slottype-name */
    "Name": string | Intrinsic;
    /**
     * - The built-in slot type used as a parent of this slot type. When you define a parent slot type, the new slot type has the configuration of the parent lot type.
     * - Only `AMAZON.AlphaNumeric` is supported.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slottype-parentslottypesignature */
    "ParentSlotTypeSignature"?: string | Intrinsic;
    /**
     * - A list of SlotTypeValue objects that defines the values that the slot type can take. Each value can have a list of synonyms, additional values that help train the machine learning model about the values that it resolves for the slot.
     * - _Required_: No
     * - _Type_: Array of [SlotTypeValue](./aws-properties-lex-bot-slottypevalue.html)
     * - _Maximum_: `10000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slottype-slottypevalues */
    "SlotTypeValues"?: SlotTypeValue[];
    /**
     * - Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values:
     * - If you don't specify the `valueSelectionStrategy`, the default is `ORIGINAL_VALUE`.
     * - _Required_: No
     * - _Type_: [SlotValueSelectionSetting](./aws-properties-lex-bot-slotvalueselectionsetting.html)
     * - _Allowed values_: `OriginalValue | TopResolution | Concatenation`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slottype-valueselectionsetting */
    "ValueSelectionSetting"?: SlotValueSelectionSetting;
}

/**
 * The Amazon CloudWatch Logs log group where the text and metadata logs are delivered. The log group must exist before you enable logging.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface CloudWatchLogGroupLogDestination {
    /**
     * - The Amazon Resource Name (ARN) of the log group where text and metadata logs are delivered.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-cloudwatchloggrouplogdestination-cloudwatchloggrouparn */
    "CloudWatchLogGroupArn": string | Intrinsic;
    /**
     * - The prefix of the log stream name within the log group that you specified
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-cloudwatchloggrouplogdestination-logprefix */
    "LogPrefix": string | Intrinsic;
}

/**
 * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface TextLogDestination {
    /**
     * - Defines the Amazon CloudWatch Logs log group where text and metadata logs are delivered.
     * - _Required_: Yes
     * - _Type_: [CloudWatchLogGroupLogDestination](./aws-properties-lex-bot-cloudwatchloggrouplogdestination.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-textlogdestination-cloudwatch */
    "CloudWatch": CloudWatchLogGroupLogDestination;
}

/**
 * Defines settings to enable text conversation logs.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface TextLogSetting {
    /**
     * - Specifies the Amazon CloudWatch Logs destination log group for conversation text logs.
     * - _Required_: Yes
     * - _Type_: [TextLogDestination](./aws-properties-lex-bot-textlogdestination.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-textlogsetting-destination */
    "Destination": TextLogDestination;
    /**
     * - Determines whether conversation logs should be stored for an alias.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-textlogsetting-enabled */
    "Enabled": boolean | Intrinsic;
}

/**
 * Specifies an Amazon S3 bucket for logging audio conversations
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface S3BucketLogDestination {
    /**
     * - The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key for encrypting audio log files stored in an Amazon S3 bucket.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:[\w\-]+:kms:[\w\-]+:[\d]{12}:(?:key\/[\w\-]+|alias\/[a-zA-Z0-9:\/_\-]{1,256})$`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-s3bucketlogdestination-kmskeyarn */
    "KmsKeyArn"?: string | Intrinsic;
    /**
     * - The S3 prefix to assign to audio log files.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-s3bucketlogdestination-logprefix */
    "LogPrefix": string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:[\w\-]+:s3:::[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-s3bucketlogdestination-s3bucketarn */
    "S3BucketArn": string | Intrinsic;
}

/**
 * The location of audio log files collected when conversation logging is enabled for a bot.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface AudioLogDestination {
    /**
     * - Specifies the Amazon S3 bucket where the audio files are stored.
     * - _Required_: Yes
     * - _Type_: [S3BucketLogDestination](./aws-properties-lex-bot-s3bucketlogdestination.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-audiologdestination-s3bucket */
    "S3Bucket": S3BucketLogDestination;
}

/**
 * Settings for logging audio of conversations between Amazon Lex and a user. You specify whether to log audio and the Amazon S3 bucket where the audio file is stored.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface AudioLogSetting {
    /**
     * - Specifies the location of the audio log files collected when conversation logging is enabled for a bot.
     * - _Required_: Yes
     * - _Type_: [AudioLogDestination](./aws-properties-lex-bot-audiologdestination.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-audiologsetting-destination */
    "Destination": AudioLogDestination;
    /**
     * - Determines whether audio logging in enabled for the bot.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-audiologsetting-enabled */
    "Enabled": boolean | Intrinsic;
}

/**
 * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface ConversationLogSettings {
    /**
     * - The Amazon S3 settings for logging audio to an S3 bucket.
     * - _Required_: No
     * - _Type_: Array of [AudioLogSetting](./aws-properties-lex-bot-audiologsetting.html)
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-conversationlogsettings-audiologsettings */
    "AudioLogSettings"?: AudioLogSetting[];
    /**
     * - The Amazon CloudWatch Logs settings for logging text and metadata.
     * - _Required_: No
     * - _Type_: Array of [TextLogSetting](./aws-properties-lex-bot-textlogsetting.html)
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-conversationlogsettings-textlogsettings */
    "TextLogSettings"?: TextLogSetting[];
}

/**
 * Specifies configuration settings for the alias used to test the bot. If the `TestBotAliasSettings` property is not specified, the settings are configured with default values.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface TestBotAliasSettings {
    /**
     * - Specifies settings that are unique to a locale. For example, you can use a different Lambda function depending on the bot's locale.
     * - _Required_: No
     * - _Type_: [Array](./aws-properties-lex-bot-botaliaslocalesettings.html) of [BotAliasLocaleSettingsItem](./aws-properties-lex-bot-botaliaslocalesettingsitem.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-testbotaliassettings-botaliaslocalesettings */
    "BotAliasLocaleSettings"?: BotAliasLocaleSettingsItem[];
    /**
     * - Specifies settings for conversation logs that save audio, text, and metadata information for conversations with your users.
     * - _Required_: No
     * - _Type_: [ConversationLogSettings](./aws-properties-lex-bot-conversationlogsettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-testbotaliassettings-conversationlogsettings */
    "ConversationLogSettings"?: ConversationLogSettings;
    /**
     * - Specifies a description for the test bot alias.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-testbotaliassettings-description */
    "Description"?: string | Intrinsic;
    /**
     * - Specifies whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
     * - _Required_: No
     * - _Type_: [SentimentAnalysisSettings](./aws-properties-lex-bot-sentimentanalysissettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-testbotaliassettings-sentimentanalysissettings */
    "SentimentAnalysisSettings"?: SentimentAnalysisSettings;
}

/**
 * Specifies the allowed input types.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface AllowedInputTypes {
    /**
     * - Indicates whether audio input is allowed.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-allowedinputtypes-allowaudioinput */
    "AllowAudioInput": boolean | Intrinsic;
    /**
     * - Indicates whether DTMF input is allowed.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-allowedinputtypes-allowdtmfinput */
    "AllowDTMFInput": boolean | Intrinsic;
}

/**
 * Specifies the text input specifications.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface TextInputSpecification {
    /**
     * - Time for which a bot waits before re-prompting a customer for text input.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-textinputspecification-starttimeoutms */
    "StartTimeoutMs": number | Intrinsic;
}

/**
 * The `BKBExactResponseFields` property type specifies Property description not available. for an [AWS::Lex::Bot](./aws-resource-lex-bot.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface BKBExactResponseFields {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `5000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-bkbexactresponsefields-answerfield */
    "AnswerField"?: string | Intrinsic;
}

/**
 * Contains details about the configuration of a Amazon Bedrock knowledge base.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface BedrockKnowledgeStoreConfiguration {
    /**
     * - The base ARN of the knowledge base used.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `5000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-bedrockknowledgestoreconfiguration-bedrockknowledgebasearn */
    "BedrockKnowledgeBaseArn"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [BKBExactResponseFields](./aws-properties-lex-bot-bkbexactresponsefields.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-bedrockknowledgestoreconfiguration-bkbexactresponsefields */
    "BKBExactResponseFields"?: BKBExactResponseFields;
    /**
     * - Specifies whether to return an exact response, or to return an answer generated by the model, using the fields you specify from the database.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-bedrockknowledgestoreconfiguration-exactresponse */
    "ExactResponse"?: boolean | Intrinsic;
}

/**
 * Provides an expression that evaluates to true or false.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface Condition {
    /**
     * - The expression string that is evaluated.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-condition-expressionstring */
    "ExpressionString": string | Intrinsic;
}

/**
 * A set of actions that Amazon Lex should run if the condition is matched.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface ConditionalBranch {
    /**
     * - Contains the expression to evaluate. If the condition is true, the branch's actions are taken.
     * - _Required_: Yes
     * - _Type_: [Condition](./aws-properties-lex-bot-condition.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-conditionalbranch-condition */
    "Condition": Condition;
    /**
     * - The name of the branch.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([0-9a-zA-Z][_-]?)+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-conditionalbranch-name */
    "Name": string | Intrinsic;
    /**
     * - The next step in the conversation.
     * - _Required_: Yes
     * - _Type_: [DialogState](./aws-properties-lex-bot-dialogstate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-conditionalbranch-nextstep */
    "NextStep": DialogState;
    /**
     * - Specifies a list of message groups that Amazon Lex uses to respond the user input.
     * - _Required_: No
     * - _Type_: [ResponseSpecification](./aws-properties-lex-bot-responsespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-conditionalbranch-response */
    "Response"?: ResponseSpecification;
}

/**
 * Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface ConditionalSpecification {
    /**
     * - A list of conditional branches. A conditional branch is made up of a condition, a response and a next step. The response and next step are executed when the condition is true.
     * - _Required_: Yes
     * - _Type_: Array of [ConditionalBranch](./aws-properties-lex-bot-conditionalbranch.html)
     * - _Minimum_: `1`
     * - _Maximum_: `4`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-conditionalspecification-conditionalbranches */
    "ConditionalBranches": ConditionalBranch[];
    /**
     * - The conditional branch that should be followed when the conditions for other branches are not satisfied. A conditional branch is made up of a condition, a response and a next step.
     * - _Required_: Yes
     * - _Type_: [DefaultConditionalBranch](./aws-properties-lex-bot-defaultconditionalbranch.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-conditionalspecification-defaultbranch */
    "DefaultBranch": DefaultConditionalBranch;
    /**
     * - Determines whether a conditional branch is active. When `IsActive` is false, the conditions are not evaluated.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-conditionalspecification-isactive */
    "IsActive": boolean | Intrinsic;
}

/**
 * Contains the names of the fields used for an exact response to the user.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface ExactResponseFields {
    /**
     * - The name of the field that contains the answer to the query made to the OpenSearch Service database.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `5000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-exactresponsefields-answerfield */
    "AnswerField"?: string | Intrinsic;
    /**
     * - The name of the field that contains the query made to the OpenSearch Service database.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `5000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-exactresponsefields-questionfield */
    "QuestionField"?: string | Intrinsic;
}

/**
 * Contains details about the configuration of the Amazon OpenSearch Service database used for the `AMAZON.QnAIntent`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface OpensearchConfiguration {
    /**
     * - The endpoint of the Amazon OpenSearch Service domain.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `5000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-opensearchconfiguration-domainendpoint */
    "DomainEndpoint"?: string | Intrinsic;
    /**
     * - Specifies whether to return an exact response or to return an answer generated by the model using the fields you specify from the database.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-opensearchconfiguration-exactresponse */
    "ExactResponse"?: boolean | Intrinsic;
    /**
     * - Contains the names of the fields used for an exact response to the user.
     * - _Required_: No
     * - _Type_: [ExactResponseFields](./aws-properties-lex-bot-exactresponsefields.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-opensearchconfiguration-exactresponsefields */
    "ExactResponseFields"?: ExactResponseFields;
    /**
     * - Contains a list of fields from the Amazon OpenSearch Service that the model can use to generate the answer to the query.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `5000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-opensearchconfiguration-includefields */
    "IncludeFields"?: (string | Intrinsic)[];
    /**
     * - The name of the Amazon OpenSearch Service index.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `5000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-opensearchconfiguration-indexname */
    "IndexName"?: string | Intrinsic;
}

/**
 * Contains details about the configuration of the knowledge store used for the `AMAZON.QnAIntent`. You must have already created the knowledge store and indexed the documents within it.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface DataSourceConfiguration {
    /**
     * - Contains details about the configuration of the Amazon Bedrock knowledge base used for the `AMAZON.QnAIntent`. To set up a knowledge base, follow the steps at [Building a knowledge base](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html).
     * - _Required_: No
     * - _Type_: [BedrockKnowledgeStoreConfiguration](./aws-properties-lex-bot-bedrockknowledgestoreconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-datasourceconfiguration-bedrockknowledgestoreconfiguration */
    "BedrockKnowledgeStoreConfiguration"?: BedrockKnowledgeStoreConfiguration;
    /**
     * - Contains details about the configuration of the Amazon Kendra index used for the `AMAZON.QnAIntent`. To create a Amazon Kendra index, follow the steps at [Creating an index](https://docs.aws.amazon.com/kendra/latest/dg/create-index.html).
     * - _Required_: No
     * - _Type_: [QnAKendraConfiguration](./aws-properties-lex-bot-qnakendraconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-datasourceconfiguration-kendraconfiguration */
    "KendraConfiguration"?: QnAKendraConfiguration;
    /**
     * - Contains details about the configuration of the Amazon OpenSearch Service database used for the `AMAZON.QnAIntent`. To create a domain, follow the steps at [Creating and managing Amazon OpenSearch Service domains](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html).
     * - _Required_: No
     * - _Type_: [OpensearchConfiguration](./aws-properties-lex-bot-opensearchconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-datasourceconfiguration-opensearchconfiguration */
    "OpensearchConfiguration"?: OpensearchConfiguration;
}

/**
 * Details about the the configuration of the built-in `Amazon.QnAIntent`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface QnAIntentConfiguration {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: [BedrockModelSpecification](./aws-properties-lex-bot-bedrockmodelspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-qnaintentconfiguration-bedrockmodelconfiguration */
    "BedrockModelConfiguration": BedrockModelSpecification;
    /**
     * - Contains details about the configuration of the data source used for the `AMAZON.QnAIntent`.
     * - _Required_: Yes
     * - _Type_: [DataSourceConfiguration](./aws-properties-lex-bot-datasourceconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-qnaintentconfiguration-datasourceconfiguration */
    "DataSourceConfiguration": DataSourceConfiguration;
}

/**
 * Defines the messages that Amazon Lex sends to a user to remind them that the bot is waiting for a response.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface StillWaitingResponseSpecification {
    /**
     * - Indicates that the user can interrupt the response by speaking while the message is being played.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-stillwaitingresponsespecification-allowinterrupt */
    "AllowInterrupt"?: boolean | Intrinsic;
    /**
     * - How often a message should be sent to the user. Minimum of 1 second, maximum of 5 minutes.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `300`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-stillwaitingresponsespecification-frequencyinseconds */
    "FrequencyInSeconds": number | Intrinsic;
    /**
     * - One or more message groups, each containing one or more messages, that define the prompts that Amazon Lex sends to the user.
     * - _Required_: Yes
     * - _Type_: Array of [MessageGroup](./aws-properties-lex-bot-messagegroup.html)
     * - _Minimum_: `1`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-stillwaitingresponsespecification-messagegroupslist */
    "MessageGroupsList": MessageGroup[];
    /**
     * - If Amazon Lex waits longer than this length of time for a response, it will stop sending messages.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `900`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-stillwaitingresponsespecification-timeoutinseconds */
    "TimeoutInSeconds": number | Intrinsic;
}

/**
 * Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface WaitAndContinueSpecification {
    /**
     * - The response that Amazon Lex sends to indicate that the bot is ready to continue the conversation.
     * - _Required_: Yes
     * - _Type_: [ResponseSpecification](./aws-properties-lex-bot-responsespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-waitandcontinuespecification-continueresponse */
    "ContinueResponse": ResponseSpecification;
    /**
     * - Specifies whether the bot will wait for a user to respond. When this field is false, wait and continue responses for a slot aren't used. If the `IsActive` field isn't specified, the default is true.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-waitandcontinuespecification-isactive */
    "IsActive"?: boolean | Intrinsic;
    /**
     * - A response that Amazon Lex sends periodically to the user to indicate that the bot is still waiting for input from the user.
     * - _Required_: No
     * - _Type_: [StillWaitingResponseSpecification](./aws-properties-lex-bot-stillwaitingresponsespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-waitandcontinuespecification-stillwaitingresponse */
    "StillWaitingResponse"?: StillWaitingResponseSpecification;
    /**
     * - The response that Amazon Lex sends to indicate that the bot is waiting for the conversation to continue.
     * - _Required_: Yes
     * - _Type_: [ResponseSpecification](./aws-properties-lex-bot-responsespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-waitandcontinuespecification-waitingresponse */
    "WaitingResponse": ResponseSpecification;
}

/**
 * Specifies the default value to use when a user doesn't provide a value for a slot.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface SlotDefaultValue {
    /**
     * - The default value to use when a user doesn't provide a value for a slot.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `202`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotdefaultvalue-defaultvalue */
    "DefaultValue": string | Intrinsic;
}

/**
 * The default value to use when a user doesn't provide a value for a slot.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface SlotDefaultValueSpecification {
    /**
     * - A list of default values. Amazon Lex chooses the default value to use in the order that they are presented in the list.
     * - _Required_: Yes
     * - _Type_: Array of [SlotDefaultValue](./aws-properties-lex-bot-slotdefaultvalue.html)
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotdefaultvaluespecification-defaultvaluelist */
    "DefaultValueList": SlotDefaultValue[];
}

/**
 * Specifies the elicitation setting details eliciting a slot.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface SlotValueElicitationSetting {
    /**
     * - A list of default values for a slot. Default values are used when Amazon Lex hasn't determined a value for a slot. You can specify default values from context variables, session attributes, and defined values.
     * - _Required_: No
     * - _Type_: [SlotDefaultValueSpecification](./aws-properties-lex-bot-slotdefaultvaluespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotvalueelicitationsetting-defaultvaluespecification */
    "DefaultValueSpecification"?: SlotDefaultValueSpecification;
    /**
     * - The prompt that Amazon Lex uses to elicit the slot value from the user.
     * - _Required_: No
     * - _Type_: [PromptSpecification](./aws-properties-lex-bot-promptspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotvalueelicitationsetting-promptspecification */
    "PromptSpecification"?: PromptSpecification;
    /**
     * - If you know a specific pattern that users might respond to an Amazon Lex request for a slot value, you can provide those utterances to improve accuracy. This is optional. In most cases, Amazon Lex is capable of understanding user utterances.
     * - _Required_: No
     * - _Type_: Array of [SampleUtterance](./aws-properties-lex-bot-sampleutterance.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotvalueelicitationsetting-sampleutterances */
    "SampleUtterances"?: SampleUtterance[];
    /**
     * - Specifies the settings that Amazon Lex uses when a slot value is successfully entered by a user.
     * - _Required_: No
     * - _Type_: [SlotCaptureSetting](./aws-properties-lex-bot-slotcapturesetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotvalueelicitationsetting-slotcapturesetting */
    "SlotCaptureSetting"?: SlotCaptureSetting;
    /**
     * - Specifies whether the slot is required or optional.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `Required | Optional`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotvalueelicitationsetting-slotconstraint */
    "SlotConstraint": string | Intrinsic;
    /**
     * - Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input.
     * - _Required_: No
     * - _Type_: [WaitAndContinueSpecification](./aws-properties-lex-bot-waitandcontinuespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotvalueelicitationsetting-waitandcontinuespecification */
    "WaitAndContinueSpecification"?: WaitAndContinueSpecification;
}

/**
 * Subslot elicitation settings.
 * `DefaultValueSpecification` is a list of default values for a constituent sub slot in a composite slot. Default values are used when Amazon Lex hasn't determined a value for a slot. You can specify default values from context variables, session attributes, and defined values. This is similar to `DefaultValueSpecification` for slots.
 * `PromptSpecification` is the prompt that Amazon Lex uses to elicit the sub slot value from the user. This is similar to `PromptSpecification` for slots.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface SubSlotValueElicitationSetting {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [SlotDefaultValueSpecification](./aws-properties-lex-bot-slotdefaultvaluespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-subslotvalueelicitationsetting-defaultvaluespecification */
    "DefaultValueSpecification"?: SlotDefaultValueSpecification;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [PromptSpecification](./aws-properties-lex-bot-promptspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-subslotvalueelicitationsetting-promptspecification */
    "PromptSpecification"?: PromptSpecification;
    /**
     * - If you know a specific pattern that users might respond to an Amazon Lex request for a sub slot value, you can provide those utterances to improve accuracy. This is optional. In most cases Amazon Lex is capable of understanding user utterances. This is similar to `SampleUtterances` for slots.
     * - _Required_: No
     * - _Type_: Array of [SampleUtterance](./aws-properties-lex-bot-sampleutterance.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-subslotvalueelicitationsetting-sampleutterances */
    "SampleUtterances"?: SampleUtterance[];
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [WaitAndContinueSpecification](./aws-properties-lex-bot-waitandcontinuespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-subslotvalueelicitationsetting-waitandcontinuespecification */
    "WaitAndContinueSpecification"?: WaitAndContinueSpecification;
}

/**
 * Subslot specifications.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface Specifications {
    /**
     * - The unique identifier assigned to the slot type.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^((AMAZON\.)[a-zA-Z_]+?|[0-9a-zA-Z]+)$`
     * - _Minimum_: `1`
     * - _Maximum_: `25`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-specifications-slottypeid */
    "SlotTypeId": string | Intrinsic;
    /**
     * - Specifies the elicitation setting details for constituent sub slots of a composite slot.
     * - _Required_: Yes
     * - _Type_: [SubSlotValueElicitationSetting](./aws-properties-lex-bot-subslotvalueelicitationsetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-specifications-valueelicitationsetting */
    "ValueElicitationSetting": SubSlotValueElicitationSetting;
}

/**
 * Specifications for the constituent sub slots and the expression for the composite slot.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface SubSlotSetting {
    /**
     * - The expression text for defining the constituent sub slots in the composite slot using logical AND and OR operators.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[0-9A-Za-z_\-\s\(\)]+`
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-subslotsetting-expression */
    "Expression"?: string | Intrinsic;
    /**
     * - Specifications for the constituent sub slots of a composite slot.
     * - _Required_: No
     * - _Type_: Object of [Specifications](./aws-properties-lex-bot-specifications.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-subslotsetting-slotspecifications */
    "SlotSpecifications"?: Record<string, Specifications>;
}

/**
 * Specifies the definition of a slot. Amazon Lex elicits slot values from uses to fulfill the user's intent.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface Slot {
    /**
     * - The description of the slot.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slot-description */
    "Description"?: string | Intrinsic;
    /**
     * - Indicates whether a slot can return multiple values.
     * - _Required_: No
     * - _Type_: [MultipleValuesSetting](./aws-properties-lex-bot-multiplevaluessetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slot-multiplevaluessetting */
    "MultipleValuesSetting"?: MultipleValuesSetting;
    /**
     * - The name given to the slot.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([0-9a-zA-Z][_-]?)+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slot-name */
    "Name": string | Intrinsic;
    /**
     * - Determines whether the contents of the slot are obfuscated in Amazon CloudWatch Logs logs. Use obfuscated slots to protect information such as personally identifiable information (PII) in logs.
     * - _Required_: No
     * - _Type_: [ObfuscationSetting](./aws-properties-lex-bot-obfuscationsetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slot-obfuscationsetting */
    "ObfuscationSetting"?: ObfuscationSetting;
    /**
     * - The name of the slot type that this slot is based on. The slot type defines the acceptable values for the slot.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slot-slottypename */
    "SlotTypeName": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [SubSlotSetting](./aws-properties-lex-bot-subslotsetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slot-subslotsetting */
    "SubSlotSetting"?: SubSlotSetting;
    /**
     * - Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values:
     * - If you don't specify the `valueSelectionStrategy`, the default is `ORIGINAL_VALUE`.
     * - _Required_: Yes
     * - _Type_: [SlotValueElicitationSetting](./aws-properties-lex-bot-slotvalueelicitationsetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slot-valueelicitationsetting */
    "ValueElicitationSetting": SlotValueElicitationSetting;
}

/**
 * A custom response string that Amazon Lex sends to your application. You define the content and structure the string.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface CustomPayload {
    /**
     * - The string that is sent to your application.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-custompayload-value */
    "Value": string | Intrinsic;
}

/**
 * Defines a Speech Synthesis Markup Language (SSML) prompt.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface SSMLMessage {
    /**
     * - The SSML text that defines the prompt.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-ssmlmessage-value */
    "Value": string | Intrinsic;
}

/**
 * Specifies the audio input specifications.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface AudioSpecification {
    /**
     * - Time for which a bot waits after the customer stops speaking to assume the utterance is finished.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-audiospecification-endtimeoutms */
    "EndTimeoutMs": number | Intrinsic;
    /**
     * - Time for how long Amazon Lex waits before speech input is truncated and the speech is returned to application.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-audiospecification-maxlengthms */
    "MaxLengthMs": number | Intrinsic;
}

/**
 * Defines an ASCII text message to send to the user.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface PlainTextMessage {
    /**
     * - The message to send to the user.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-plaintextmessage-value */
    "Value": string | Intrinsic;
}

/**
 * Specifies the DTMF input specifications.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface DTMFSpecification {
    /**
     * - The DTMF character that clears the accumulated DTMF digits and immediately ends the input.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[A-D0-9#*]{1}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-dtmfspecification-deletioncharacter */
    "DeletionCharacter": string | Intrinsic;
    /**
     * - The DTMF character that immediately ends input. If the user does not press this character, the input ends after the end timeout.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[A-D0-9#*]{1}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-dtmfspecification-endcharacter */
    "EndCharacter": string | Intrinsic;
    /**
     * - How long the bot should wait after the last DTMF character input before assuming that the input has concluded.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-dtmfspecification-endtimeoutms */
    "EndTimeoutMs": number | Intrinsic;
    /**
     * - The maximum number of DTMF digits allowed in an utterance.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-dtmfspecification-maxlength */
    "MaxLength": number | Intrinsic;
}

/**
 * Specifies the audio and DTMF input specification.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface AudioAndDTMFInputSpecification {
    /**
     * - Specifies the settings on audio input.
     * - _Required_: No
     * - _Type_: [AudioSpecification](./aws-properties-lex-bot-audiospecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-audioanddtmfinputspecification-audiospecification */
    "AudioSpecification"?: AudioSpecification;
    /**
     * - Specifies the settings on DTMF input.
     * - _Required_: No
     * - _Type_: [DTMFSpecification](./aws-properties-lex-bot-dtmfspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-audioanddtmfinputspecification-dtmfspecification */
    "DTMFSpecification"?: DTMFSpecification;
    /**
     * - Time for which a bot waits before assuming that the customer isn't going to speak or press a key. This timeout is shared between Audio and DTMF inputs.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-audioanddtmfinputspecification-starttimeoutms */
    "StartTimeoutMs": number | Intrinsic;
}

/**
 * Specifies the settings on a prompt attempt.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface PromptAttemptSpecification {
    /**
     * - Indicates the allowed input types of the prompt attempt.
     * - _Required_: Yes
     * - _Type_: [AllowedInputTypes](./aws-properties-lex-bot-allowedinputtypes.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-promptattemptspecification-allowedinputtypes */
    "AllowedInputTypes": AllowedInputTypes;
    /**
     * - Indicates whether the user can interrupt a speech prompt attempt from the bot.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-promptattemptspecification-allowinterrupt */
    "AllowInterrupt"?: boolean | Intrinsic;
    /**
     * - Specifies the settings on audio and DTMF input.
     * - _Required_: No
     * - _Type_: [AudioAndDTMFInputSpecification](./aws-properties-lex-bot-audioanddtmfinputspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-promptattemptspecification-audioanddtmfinputspecification */
    "AudioAndDTMFInputSpecification"?: AudioAndDTMFInputSpecification;
    /**
     * - Specifies the settings on text input.
     * - _Required_: No
     * - _Type_: [TextInputSpecification](./aws-properties-lex-bot-textinputspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-promptattemptspecification-textinputspecification */
    "TextInputSpecification"?: TextInputSpecification;
}

/**
 * Specifies a list of message groups that Amazon Lex sends to a user to elicit a response.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface PromptSpecification {
    /**
     * - Indicates whether the user can interrupt a speech prompt from the bot.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-promptspecification-allowinterrupt */
    "AllowInterrupt"?: boolean | Intrinsic;
    /**
     * - The maximum number of times the bot tries to elicit a response from the user using this prompt.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-promptspecification-maxretries */
    "MaxRetries": number | Intrinsic;
    /**
     * - A collection of messages that Amazon Lex can send to the user. Amazon Lex chooses the actual message to send at runtime.
     * - _Required_: Yes
     * - _Type_: Array of [MessageGroup](./aws-properties-lex-bot-messagegroup.html)
     * - _Minimum_: `1`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-promptspecification-messagegroupslist */
    "MessageGroupsList": MessageGroup[];
    /**
     * - Indicates how a message is selected from a message group among retries.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Random | Ordered`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-promptspecification-messageselectionstrategy */
    "MessageSelectionStrategy"?: string | Intrinsic;
    /**
     * - Specifies the advanced settings on each attempt of the prompt.
     * - _Required_: No
     * - _Type_: Object of [PromptAttemptSpecification](./aws-properties-lex-bot-promptattemptspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-promptspecification-promptattemptsspecification */
    "PromptAttemptsSpecification"?: Record<string, PromptAttemptSpecification>;
}

/**
 * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface IntentConfirmationSetting {
    /**
     * - The `DialogCodeHookInvocationSetting` object associated with intent's confirmation step. The dialog code hook is triggered based on these invocation settings when the confirmation next step or declination next step or failure next step is `InvokeDialogCodeHook`.
     * - _Required_: No
     * - _Type_: [DialogCodeHookInvocationSetting](./aws-properties-lex-bot-dialogcodehookinvocationsetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intentconfirmationsetting-codehook */
    "CodeHook"?: DialogCodeHookInvocationSetting;
    /**
     * - A list of conditional branches to evaluate after the intent is closed.
     * - _Required_: No
     * - _Type_: [ConditionalSpecification](./aws-properties-lex-bot-conditionalspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intentconfirmationsetting-confirmationconditional */
    "ConfirmationConditional"?: ConditionalSpecification;
    /**
     * - Specifies the next step that the bot executes when the customer confirms the intent.
     * - _Required_: No
     * - _Type_: [DialogState](./aws-properties-lex-bot-dialogstate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intentconfirmationsetting-confirmationnextstep */
    "ConfirmationNextStep"?: DialogState;
    /**
     * - Specifies a list of message groups that Amazon Lex uses to respond the user input.
     * - _Required_: No
     * - _Type_: [ResponseSpecification](./aws-properties-lex-bot-responsespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intentconfirmationsetting-confirmationresponse */
    "ConfirmationResponse"?: ResponseSpecification;
    /**
     * - A list of conditional branches to evaluate after the intent is declined.
     * - _Required_: No
     * - _Type_: [ConditionalSpecification](./aws-properties-lex-bot-conditionalspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intentconfirmationsetting-declinationconditional */
    "DeclinationConditional"?: ConditionalSpecification;
    /**
     * - Specifies the next step that the bot executes when the customer declines the intent.
     * - _Required_: No
     * - _Type_: [DialogState](./aws-properties-lex-bot-dialogstate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intentconfirmationsetting-declinationnextstep */
    "DeclinationNextStep"?: DialogState;
    /**
     * - When the user answers "no" to the question defined in `promptSpecification`, Amazon Lex responds with this response to acknowledge that the intent was canceled.
     * - _Required_: No
     * - _Type_: [ResponseSpecification](./aws-properties-lex-bot-responsespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intentconfirmationsetting-declinationresponse */
    "DeclinationResponse"?: ResponseSpecification;
    /**
     * - The `DialogCodeHookInvocationSetting` used when the code hook is invoked during confirmation prompt retries.
     * - _Required_: No
     * - _Type_: [ElicitationCodeHookInvocationSetting](./aws-properties-lex-bot-elicitationcodehookinvocationsetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intentconfirmationsetting-elicitationcodehook */
    "ElicitationCodeHook"?: ElicitationCodeHookInvocationSetting;
    /**
     * - Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
     * - _Required_: No
     * - _Type_: [ConditionalSpecification](./aws-properties-lex-bot-conditionalspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intentconfirmationsetting-failureconditional */
    "FailureConditional"?: ConditionalSpecification;
    /**
     * - The next step to take in the conversation if the confirmation step fails.
     * - _Required_: No
     * - _Type_: [DialogState](./aws-properties-lex-bot-dialogstate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intentconfirmationsetting-failurenextstep */
    "FailureNextStep"?: DialogState;
    /**
     * - Specifies a list of message groups that Amazon Lex uses to respond the user input when the intent confirmation fails.
     * - _Required_: No
     * - _Type_: [ResponseSpecification](./aws-properties-lex-bot-responsespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intentconfirmationsetting-failureresponse */
    "FailureResponse"?: ResponseSpecification;
    /**
     * - Specifies whether the intent's confirmation is sent to the user. When this field is false, confirmation and declination responses aren't sent. If the `IsActive` field isn't specified, the default is true.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intentconfirmationsetting-isactive */
    "IsActive"?: boolean | Intrinsic;
    /**
     * - Prompts the user to confirm the intent. This question should have a yes or no answer.
     * - Amazon Lex uses this prompt to ensure that the user acknowledges that the intent is ready for fulfillment. For example, with the `OrderPizza` intent, you might want to confirm that the order is correct before placing it. For other intents, such as intents that simply respond to user questions, you might not need to ask the user for confirmation before providing the information.
     * - _Required_: Yes
     * - _Type_: [PromptSpecification](./aws-properties-lex-bot-promptspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intentconfirmationsetting-promptspecification */
    "PromptSpecification": PromptSpecification;
}

/**
 * The value to set in a slot.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface SlotValue {
    /**
     * - The value that Amazon Lex determines for the slot. The actual value depends on the setting of the value selection strategy for the bot. You can choose to use the value entered by the user, or you can have Amazon Lex choose the first value in the `resolvedValues` list.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `202`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotvalue-interpretedvalue */
    "InterpretedValue"?: string | Intrinsic;
}

/**
 * The slot values that Amazon Lex uses when it sets slot values in a dialog step.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface SlotValueOverride {
    /**
     * - When the shape value is `List`, it indicates that the `values` field contains a list of slot values. When the value is `Scalar`, it indicates that the `value` field contains a single value.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Scalar | List`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotvalueoverride-shape */
    "Shape"?: string | Intrinsic;
    /**
     * - The current value of the slot.
     * - _Required_: No
     * - _Type_: [SlotValue](./aws-properties-lex-bot-slotvalue.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotvalueoverride-value */
    "Value"?: SlotValue;
    /**
     * - A list of one or more values that the user provided for the slot. For example, for a slot that elicits pizza toppings, the values might be "pepperoni" and "pineapple."
     * - _Required_: No
     * - _Type_: Array of [SlotValueOverride](./aws-properties-lex-bot-slotvalueoverride.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotvalueoverride-values */
    "Values"?: SlotValueOverride[];
}

/**
 * Maps a slot name to the [SlotValueOverride](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_SlotValueOverride.html) object.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface SlotValueOverrideMap {
    /**
     * - The name of the slot.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^([0-9a-zA-Z][_-]?)+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotvalueoverridemap-slotname */
    "SlotName"?: string | Intrinsic;
    /**
     * - The SlotValueOverride object to which the slot name will be mapped.
     * - _Required_: No
     * - _Type_: [SlotValueOverride](./aws-properties-lex-bot-slotvalueoverride.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-slotvalueoverridemap-slotvalueoverride */
    "SlotValueOverride"?: SlotValueOverride;
}

/**
 * Override settings to configure the intent state.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface IntentOverride {
    /**
     * - The name of the intent. Only required when you're switching intents.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^([0-9a-zA-Z][_-]?)+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intentoverride-name */
    "Name"?: string | Intrinsic;
    /**
     * - A map of all of the slot value overrides for the intent. The name of the slot maps to the value of the slot. Slots that are not included in the map aren't overridden.
     * - _Required_: No
     * - _Type_: Array of [SlotValueOverrideMap](./aws-properties-lex-bot-slotvalueoverridemap.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intentoverride-slots */
    "Slots"?: SlotValueOverrideMap[];
}

/**
 * The current state of the conversation with the user.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface DialogState {
    /**
     * - Defines the action that the bot executes at runtime when the conversation reaches this step.
     * - _Required_: No
     * - _Type_: [DialogAction](./aws-properties-lex-bot-dialogaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-dialogstate-dialogaction */
    "DialogAction"?: DialogAction;
    /**
     * - Override settings to configure the intent state.
     * - _Required_: No
     * - _Type_: [IntentOverride](./aws-properties-lex-bot-intentoverride.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-dialogstate-intent */
    "Intent"?: IntentOverride;
    /**
     * - Map of key/value pairs representing session-specific context information. It contains application information passed between Amazon Lex and a client application.
     * - _Required_: No
     * - _Type_: Array of [SessionAttribute](./aws-properties-lex-bot-sessionattribute.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-dialogstate-sessionattributes */
    "SessionAttributes"?: SessionAttribute[];
}

/**
 * Describes a button to use on a response card used to gather slot values from a user.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface Button {
    /**
     * - The text that appears on the button. Use this to tell the user what value is returned when they choose this button.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-button-text */
    "Text": string | Intrinsic;
    /**
     * - The value returned to Amazon Lex when the user chooses this button. This must be one of the slot values configured for the slot.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-button-value */
    "Value": string | Intrinsic;
}

/**
 * A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform.
 * When you use a response card, the response from the user is constrained to the text associated with a button on the card.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface ImageResponseCard {
    /**
     * - A list of buttons that should be displayed on the response card. The arrangement of the buttons is determined by the platform that displays the button.
     * - _Required_: No
     * - _Type_: Array of [Button](./aws-properties-lex-bot-button.html)
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-imageresponsecard-buttons */
    "Buttons"?: Button[];
    /**
     * - The URL of an image to display on the response card. The image URL must be publicly available so that the platform displaying the response card has access to the image.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `250`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-imageresponsecard-imageurl */
    "ImageUrl"?: string | Intrinsic;
    /**
     * - The subtitle to display on the response card. The format of the subtitle is determined by the platform displaying the response card.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `250`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-imageresponsecard-subtitle */
    "Subtitle"?: string | Intrinsic;
    /**
     * - The title to display on the response card. The format of the title is determined by the platform displaying the response card.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `250`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-imageresponsecard-title */
    "Title": string | Intrinsic;
}

/**
 * The object that provides message text and its type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface Message {
    /**
     * - A message in a custom format defined by the client application.
     * - _Required_: No
     * - _Type_: [CustomPayload](./aws-properties-lex-bot-custompayload.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-message-custompayload */
    "CustomPayload"?: CustomPayload;
    /**
     * - A message that defines a response card that the client application can show to the user.
     * - _Required_: No
     * - _Type_: [ImageResponseCard](./aws-properties-lex-bot-imageresponsecard.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-message-imageresponsecard */
    "ImageResponseCard"?: ImageResponseCard;
    /**
     * - A message in plain text format.
     * - _Required_: No
     * - _Type_: [PlainTextMessage](./aws-properties-lex-bot-plaintextmessage.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-message-plaintextmessage */
    "PlainTextMessage"?: PlainTextMessage;
    /**
     * - A message in Speech Synthesis Markup Language (SSML).
     * - _Required_: No
     * - _Type_: [SSMLMessage](./aws-properties-lex-bot-ssmlmessage.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-message-ssmlmessage */
    "SSMLMessage"?: SSMLMessage;
}

/**
 * Provides one or more messages that Amazon Lex should send to the user.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface MessageGroup {
    /**
     * - The primary message that Amazon Lex should send to the user.
     * - _Required_: Yes
     * - _Type_: [Message](./aws-properties-lex-bot-message.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-messagegroup-message */
    "Message": Message;
    /**
     * - Message variations to send to the user. When variations are defined, Amazon Lex chooses the primary message or one of the variations to send to the user.
     * - _Required_: No
     * - _Type_: Array of [Message](./aws-properties-lex-bot-message.html)
     * - _Maximum_: `2`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-messagegroup-variations */
    "Variations"?: Message[];
}

/**
 * Specifies a list of message groups that Amazon Lex uses to respond the user input.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface ResponseSpecification {
    /**
     * - Indicates whether the user can interrupt a speech response from Amazon Lex.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-responsespecification-allowinterrupt */
    "AllowInterrupt"?: boolean | Intrinsic;
    /**
     * - A collection of responses that Amazon Lex can send to the user. Amazon Lex chooses the actual response to send at runtime.
     * - _Required_: Yes
     * - _Type_: Array of [MessageGroup](./aws-properties-lex-bot-messagegroup.html)
     * - _Minimum_: `1`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-responsespecification-messagegroupslist */
    "MessageGroupsList": MessageGroup[];
}

/**
 * Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface InitialResponseSetting {
    /**
     * - Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation.
     * - _Required_: No
     * - _Type_: [DialogCodeHookInvocationSetting](./aws-properties-lex-bot-dialogcodehookinvocationsetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-initialresponsesetting-codehook */
    "CodeHook"?: DialogCodeHookInvocationSetting;
    /**
     * - Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
     * - _Required_: No
     * - _Type_: [ConditionalSpecification](./aws-properties-lex-bot-conditionalspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-initialresponsesetting-conditional */
    "Conditional"?: ConditionalSpecification;
    /**
     * - Specifies a list of message groups that Amazon Lex uses to respond the user input.
     * - _Required_: No
     * - _Type_: [ResponseSpecification](./aws-properties-lex-bot-responsespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-initialresponsesetting-initialresponse */
    "InitialResponse"?: ResponseSpecification;
    /**
     * - The next step in the conversation.
     * - _Required_: No
     * - _Type_: [DialogState](./aws-properties-lex-bot-dialogstate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-initialresponsesetting-nextstep */
    "NextStep"?: DialogState;
}

/**
 * Represents an action that the user wants to perform.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface Intent {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [BedrockAgentIntentConfiguration](./aws-properties-lex-bot-bedrockagentintentconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intent-bedrockagentintentconfiguration */
    "BedrockAgentIntentConfiguration"?: BedrockAgentIntentConfiguration;
    /**
     * - A description of the intent. Use the description to help identify the intent in lists.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intent-description */
    "Description"?: string | Intrinsic;
    /**
     * - Specifies that Amazon Lex invokes the alias Lambda function for each user input. You can invoke this Lambda function to personalize user interaction.
     * - _Required_: No
     * - _Type_: [DialogCodeHookSetting](./aws-properties-lex-bot-dialogcodehooksetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intent-dialogcodehook */
    "DialogCodeHook"?: DialogCodeHookSetting;
    /**
     * - Specifies that Amazon Lex invokes the alias Lambda function when the intent is ready for fulfillment. You can invoke this function to complete the bot's transaction with the user.
     * - _Required_: No
     * - _Type_: [FulfillmentCodeHookSetting](./aws-properties-lex-bot-fulfillmentcodehooksetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intent-fulfillmentcodehook */
    "FulfillmentCodeHook"?: FulfillmentCodeHookSetting;
    /**
     * - Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
     * - _Required_: No
     * - _Type_: [InitialResponseSetting](./aws-properties-lex-bot-initialresponsesetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intent-initialresponsesetting */
    "InitialResponseSetting"?: InitialResponseSetting;
    /**
     * - A list of contexts that must be active for this intent to be considered by Amazon Lex.
     * - _Required_: No
     * - _Type_: Array of [InputContext](./aws-properties-lex-bot-inputcontext.html)
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intent-inputcontexts */
    "InputContexts"?: InputContext[];
    /**
     * - Sets the response that Amazon Lex sends to the user when the intent is closed.
     * - _Required_: No
     * - _Type_: [IntentClosingSetting](./aws-properties-lex-bot-intentclosingsetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intent-intentclosingsetting */
    "IntentClosingSetting"?: IntentClosingSetting;
    /**
     * - Provides prompts that Amazon Lex sends to the user to confirm the completion of an intent. If the user answers "no," the settings contain a statement that is sent to the user to end the intent.
     * - _Required_: No
     * - _Type_: [IntentConfirmationSetting](./aws-properties-lex-bot-intentconfirmationsetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intent-intentconfirmationsetting */
    "IntentConfirmationSetting"?: IntentConfirmationSetting;
    /**
     * - Provides configuration information for the `AMAZON.KendraSearchIntent` intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
     * - _Required_: No
     * - _Type_: [KendraConfiguration](./aws-properties-lex-bot-kendraconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intent-kendraconfiguration */
    "KendraConfiguration"?: KendraConfiguration;
    /**
     * - The name of the intent. Intent names must be unique within the locale that contains the intent and can't match the name of any built-in intent.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([0-9a-zA-Z][_-]?)+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intent-name */
    "Name": string | Intrinsic;
    /**
     * - A list of contexts that the intent activates when it is fulfilled.
     * - _Required_: No
     * - _Type_: Array of [OutputContext](./aws-properties-lex-bot-outputcontext.html)
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intent-outputcontexts */
    "OutputContexts"?: OutputContext[];
    /**
     * - A unique identifier for the built-in intent to base this intent on.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intent-parentintentsignature */
    "ParentIntentSignature"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [QInConnectIntentConfiguration](./aws-properties-lex-bot-qinconnectintentconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intent-qinconnectintentconfiguration */
    "QInConnectIntentConfiguration"?: QInConnectIntentConfiguration;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [QnAIntentConfiguration](./aws-properties-lex-bot-qnaintentconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intent-qnaintentconfiguration */
    "QnAIntentConfiguration"?: QnAIntentConfiguration;
    /**
     * - A list of utterances that a user might say to signal the intent.
     * - _Required_: No
     * - _Type_: Array of [SampleUtterance](./aws-properties-lex-bot-sampleutterance.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intent-sampleutterances */
    "SampleUtterances"?: SampleUtterance[];
    /**
     * - Indicates the priority for slots. Amazon Lex prompts the user for slot values in priority order.
     * - _Required_: No
     * - _Type_: Array of [SlotPriority](./aws-properties-lex-bot-slotpriority.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intent-slotpriorities */
    "SlotPriorities"?: SlotPriority[];
    /**
     * - A list of slots that the intent requires for fulfillment.
     * - _Required_: No
     * - _Type_: Array of [Slot](./aws-properties-lex-bot-slot.html)
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-intent-slots */
    "Slots"?: Slot[];
}

/**
 * Provides configuration information for a locale.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface BotLocale {
    /**
     * - Specifies a custom vocabulary to use with a specific locale.
     * - _Required_: No
     * - _Type_: [CustomVocabulary](./aws-properties-lex-bot-customvocabulary.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-botlocale-customvocabulary */
    "CustomVocabulary"?: CustomVocabulary;
    /**
     * - A description of the bot locale. Use this to help identify the bot locale in lists.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-botlocale-description */
    "Description"?: string | Intrinsic;
    /**
     * - One or more intents defined for the locale.
     * - _Required_: No
     * - _Type_: Array of [Intent](./aws-properties-lex-bot-intent.html)
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-botlocale-intents */
    "Intents"?: Intent[];
    /**
     * - The identifier of the language and locale that the bot will be used in. The string must match one of the supported locales.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-botlocale-localeid */
    "LocaleId": string | Intrinsic;
    /**
     * - Determines the threshold where Amazon Lex will insert the `AMAZON.FallbackIntent`, `AMAZON.KendraSearchIntent`, or both when returning alternative intents. You must configure an `AMAZON.FallbackIntent`. `AMAZON.KendraSearchIntent` is only inserted if it is configured for the bot.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-botlocale-nluconfidencethreshold */
    "NluConfidenceThreshold": number | Intrinsic;
    /**
     * - One or more slot types defined for the locale.
     * - _Required_: No
     * - _Type_: Array of [SlotType](./aws-properties-lex-bot-slottype.html)
     * - _Maximum_: `250`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-botlocale-slottypes */
    "SlotTypes"?: SlotType[];
    /**
     * - Defines settings for using an Amazon Polly voice to communicate with a user.
     * - Valid values include:
     * - _Required_: No
     * - _Type_: [VoiceSettings](./aws-properties-lex-bot-voicesettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-botlocale-voicesettings */
    "VoiceSettings"?: VoiceSettings;
}

/**
 * ###### Note
 * 
 * Amazon Lex V2 is the only supported version in AWS CloudFormation.
 * Specifies an Amazon Lex conversational bot.
 * You must configure an intent based on the `AMAZON.FallbackIntent` built-in intent. If you don't add one, creating the bot will fail.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html */

export interface LexBot extends ResourceAttributes {
    "Type": "AWS::Lex::Bot";
    "Properties": {
        /**
         * - Indicates whether Amazon Lex V2 should automatically build the locales for the bot after a change.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-autobuildbotlocales */
        "AutoBuildBotLocales"?: boolean | Intrinsic;
        /**
         * - The Amazon S3 location of files used to import a bot. The files must be in the import format specified in [JSON format for importing and exporting](https://docs.aws.amazon.com/lexv2/latest/dg/import-export-format.html) in the _Amazon Lex developer guide._
         * - _Required_: No
         * - _Type_: [S3Location](./aws-properties-lex-bot-s3location.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-botfiles3location */
        "BotFileS3Location"?: S3Location;
        /**
         * - A list of locales for the bot.
         * - _Required_: No
         * - _Type_: Array of [BotLocale](./aws-properties-lex-bot-botlocale.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-botlocales */
        "BotLocales"?: BotLocale[];
        /**
         * - A list of tags to add to the bot. You can only add tags when you import a bot. You can't use the `UpdateBot` operation to update tags. To update tags, use the `TagResource` operation.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-lex-bot-tag.html)
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-bottags */
        "BotTags"?: Tag[];
        /**
         * - By default, data stored by Amazon Lex is encrypted. The `DataPrivacy` structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.
         * - _Required_: Yes
         * - _Type_: [DataPrivacy](./aws-properties-lex-bot-dataprivacy.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-dataprivacy */
        "DataPrivacy": DataPrivacy;
        /**
         * - The description of the version.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-description */
        "Description"?: string | Intrinsic;
        /**
         * - The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot.
         * - A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.
         * - You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.
         * - _Required_: Yes
         * - _Type_: Integer
         * - _Minimum_: `60`
         * - _Maximum_: `86400`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-idlesessionttlinseconds */
        "IdleSessionTTLInSeconds": number | Intrinsic;
        /**
         * - The name of the bot locale.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^([0-9a-zA-Z][_-]?)+$`
         * - _Minimum_: `1`
         * - _Maximum_: `100`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-name */
        "Name": string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: [Replication](./aws-properties-lex-bot-replication.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-replication */
        "Replication"?: Replication;
        /**
         * - The Amazon Resource Name (ARN) of the IAM role used to build and run the bot.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws[a-zA-Z-]*:iam::[0-9]{12}:role/.*$`
         * - _Minimum_: `32`
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-rolearn */
        "RoleArn": string | Intrinsic;
        /**
         * - Specifies configuration settings for the alias used to test the bot. If the `TestBotAliasSettings` property is not specified, the settings are configured with default values.
         * - _Required_: No
         * - _Type_: [TestBotAliasSettings](./aws-properties-lex-bot-testbotaliassettings.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-testbotaliassettings */
        "TestBotAliasSettings"?: TestBotAliasSettings;
        /**
         * - A list of tags to add to the test alias for a bot. You can only add tags when you import a bot. You can't use the `UpdateAlias` operation to update tags. To update tags on the test alias, use the `TagResource` operation.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-lex-bot-tag.html)
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-bot.html#cfn-lex-bot-testbotaliastags */
        "TestBotAliasTags"?: Tag[];
    };
}