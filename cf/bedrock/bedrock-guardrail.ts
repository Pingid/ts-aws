import type { Intrinsic } from '../intrinsic/index.js' /**
 * Definition of the key/value pair for a tag.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html */

export interface Tag {
  /**
   * - Key for the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9\s._:/=+@-]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-tag-key */
  Key: string | Intrinsic
  /**
   * - Value for the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9\s._:/=+@-]*$`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-tag-value */
  Value: string | Intrinsic
}

/**
 * Contains filter strengths for harmful content. Guardrails support the following content filters to detect and filter harmful user inputs and FM-generated outputs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html */

export interface ContentFilterConfig {
  /**
   * - The strength of the content filter to apply to prompts. As you increase the filter strength, the likelihood of filtering harmful content increases and the probability of seeing harmful content in your application reduces.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `NONE | LOW | MEDIUM | HIGH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-contentfilterconfig-inputstrength */
  InputStrength: string | Intrinsic
  /**
   * - The strength of the content filter to apply to model responses. As you increase the filter strength, the likelihood of filtering harmful content increases and the probability of seeing harmful content in your application reduces.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `NONE | LOW | MEDIUM | HIGH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-contentfilterconfig-outputstrength */
  OutputStrength: string | Intrinsic
  /**
   * - The harmful category that the content filter is applied to.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `SEXUAL | VIOLENCE | HATE | INSULTS | MISCONDUCT | PROMPT_ATTACK`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-contentfilterconfig-type */
  Type: string | Intrinsic
}

/**
 * The filter configuration details for the guardrails contextual grounding filter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html */

export interface ContextualGroundingFilterConfig {
  /**
   * - The threshold details for the guardrails contextual grounding filter.
   * - _Required_: Yes
   * - _Type_: Number
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-contextualgroundingfilterconfig-threshold */
  Threshold: number | Intrinsic
  /**
   * - The filter details for the guardrails contextual grounding filter.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `GROUNDING | RELEVANCE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-contextualgroundingfilterconfig-type */
  Type: string | Intrinsic
}

/**
 * The PII entity to configure for the guardrail.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html */

export interface PiiEntityConfig {
  /**
   * - Configure guardrail action when the PII entity is detected.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `BLOCK | ANONYMIZE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-piientityconfig-action */
  Action: string | Intrinsic
  /**
   * - Configure guardrail type when the PII entity is detected.
   * - The following PIIs are used to block or mask sensitive information:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ADDRESS | AGE | AWS_ACCESS_KEY | AWS_SECRET_KEY | CA_HEALTH_NUMBER | CA_SOCIAL_INSURANCE_NUMBER | CREDIT_DEBIT_CARD_CVV | CREDIT_DEBIT_CARD_EXPIRY | CREDIT_DEBIT_CARD_NUMBER | DRIVER_ID | EMAIL | INTERNATIONAL_BANK_ACCOUNT_NUMBER | IP_ADDRESS | LICENSE_PLATE | MAC_ADDRESS | NAME | PASSWORD | PHONE | PIN | SWIFT_CODE | UK_NATIONAL_HEALTH_SERVICE_NUMBER | UK_NATIONAL_INSURANCE_NUMBER | UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER | URL | USERNAME | US_BANK_ACCOUNT_NUMBER | US_BANK_ROUTING_NUMBER | US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER | US_PASSPORT_NUMBER | US_SOCIAL_SECURITY_NUMBER | VEHICLE_IDENTIFICATION_NUMBER`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-piientityconfig-type */
  Type: string | Intrinsic
}

/**
 * The regular expression to configure for the guardrail.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html */

export interface RegexConfig {
  /**
   * - The guardrail action to configure when matching regular expression is detected.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `BLOCK | ANONYMIZE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-regexconfig-action */
  Action: string | Intrinsic
  /**
   * - The description of the regular expression to configure for the guardrail.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-regexconfig-description */
  Description?: string | Intrinsic
  /**
   * - The name of the regular expression to configure for the guardrail.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-regexconfig-name */
  Name: string | Intrinsic
  /**
   * - The regular expression pattern to configure for the guardrail.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-regexconfig-pattern */
  Pattern: string | Intrinsic
}

/**
 * Details about topics for the guardrail to identify and deny.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html */

export interface TopicConfig {
  /**
   * - A definition of the topic to deny.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-topicconfig-definition */
  Definition: string | Intrinsic
  /**
   * - A list of prompts, each of which is an example of a prompt that can be categorized as belonging to the topic.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `100`
   * - _Minimum_: `1 | 0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-topicconfig-examples */
  Examples?: (string | Intrinsic)[]
  /**
   * - The name of the topic to deny.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9a-zA-Z-_ !?.]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-topicconfig-name */
  Name: string | Intrinsic
  /**
   * - Specifies to deny the topic.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `DENY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-topicconfig-type */
  Type: string | Intrinsic
}

/**
 * The managed word list to configure for the guardrail.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html */

export interface ManagedWordsConfig {
  /**
   * - The managed word type to configure for the guardrail.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `PROFANITY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-managedwordsconfig-type */
  Type: string | Intrinsic
}

/**
 * A word to configure for the guardrail.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html */

export interface WordConfig {
  /**
   * - Text of the word configured for the guardrail to block.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-wordconfig-text */
  Text: string | Intrinsic
}

/**
 * Contains details about how to handle harmful content.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html */

export interface ContentPolicyConfig {
  /**
   * - Contains the type of the content filter and how strongly it should apply to prompts and model responses.
   * - _Required_: Yes
   * - _Type_: Array of [ContentFilterConfig](./aws-properties-bedrock-guardrail-contentfilterconfig.html)
   * - _Minimum_: `1`
   * - _Maximum_: `6`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-contentpolicyconfig-filtersconfig */
  FiltersConfig: ContentFilterConfig[]
}

/**
 * The policy configuration details for the guardrails contextual grounding policy.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html */

export interface ContextualGroundingPolicyConfig {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Array of [ContextualGroundingFilterConfig](./aws-properties-bedrock-guardrail-contextualgroundingfilterconfig.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-contextualgroundingpolicyconfig-filtersconfig */
  FiltersConfig: ContextualGroundingFilterConfig[]
}

/**
 * Contains details about PII entities and regular expressions to configure for the guardrail.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html */

export interface SensitiveInformationPolicyConfig {
  /**
   * - A list of PII entities to configure to the guardrail.
   * - _Required_: No
   * - _Type_: Array of [PiiEntityConfig](./aws-properties-bedrock-guardrail-piientityconfig.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-sensitiveinformationpolicyconfig-piientitiesconfig */
  PiiEntitiesConfig?: PiiEntityConfig[]
  /**
   * - A list of regular expressions to configure to the guardrail.
   * - _Required_: No
   * - _Type_: Array of [RegexConfig](./aws-properties-bedrock-guardrail-regexconfig.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-sensitiveinformationpolicyconfig-regexesconfig */
  RegexesConfig?: RegexConfig[]
}

/**
 * Contains details about topics that the guardrail should identify and deny.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html */

export interface TopicPolicyConfig {
  /**
   * - A list of policies related to topics that the guardrail should deny.
   * - _Required_: Yes
   * - _Type_: Array of [TopicConfig](./aws-properties-bedrock-guardrail-topicconfig.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-topicpolicyconfig-topicsconfig */
  TopicsConfig: TopicConfig[]
}

/**
 * Contains details about the word policy to configured for the guardrail.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html */

export interface WordPolicyConfig {
  /**
   * - A list of managed words to configure for the guardrail.
   * - _Required_: No
   * - _Type_: Array of [ManagedWordsConfig](./aws-properties-bedrock-guardrail-managedwordsconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-wordpolicyconfig-managedwordlistsconfig */
  ManagedWordListsConfig?: ManagedWordsConfig[]
  /**
   * - A list of words to configure for the guardrail.
   * - _Required_: No
   * - _Type_: Array of [WordConfig](./aws-properties-bedrock-guardrail-wordconfig.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-wordpolicyconfig-wordsconfig */
  WordsConfig?: WordConfig[]
}

/**
 * Creates a guardrail to block topics and to implement safeguards for your generative AI applications.
 * You can configure the following policies in a guardrail to avoid undesirable and harmful content, filter out denied topics and words, and remove sensitive information for privacy protection.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html */

export interface BedrockGuardrail {
  Type: 'AWS::Bedrock::Guardrail'
  Properties: {
    /**
     * - The message to return when the guardrail blocks a prompt.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `500`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-blockedinputmessaging */
    BlockedInputMessaging: string | Intrinsic
    /**
     * - The message to return when the guardrail blocks a model response.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `500`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-blockedoutputsmessaging */
    BlockedOutputsMessaging: string | Intrinsic
    /**
     * - The content filter policies to configure for the guardrail.
     * - _Required_: No
     * - _Type_: [ContentPolicyConfig](./aws-properties-bedrock-guardrail-contentpolicyconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-contentpolicyconfig */
    ContentPolicyConfig?: ContentPolicyConfig
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [ContextualGroundingPolicyConfig](./aws-properties-bedrock-guardrail-contextualgroundingpolicyconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-contextualgroundingpolicyconfig */
    ContextualGroundingPolicyConfig?: ContextualGroundingPolicyConfig
    /**
     * - A description of the guardrail.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-description */
    Description?: string | Intrinsic
    /**
     * - The ARN of the AWS KMS key that you use to encrypt the guardrail.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws(-[^:]+)?:kms:[a-zA-Z0-9-]*:[0-9]{12}:key/[a-zA-Z0-9-]{36}$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-kmskeyarn */
    KmsKeyArn?: string | Intrinsic
    /**
     * - The name of the guardrail.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[0-9a-zA-Z-_]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-name */
    Name: string | Intrinsic
    /**
     * - The sensitive information policy to configure for the guardrail.
     * - _Required_: No
     * - _Type_: [SensitiveInformationPolicyConfig](./aws-properties-bedrock-guardrail-sensitiveinformationpolicyconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-sensitiveinformationpolicyconfig */
    SensitiveInformationPolicyConfig?: SensitiveInformationPolicyConfig
    /**
     * - The tags that you want to attach to the guardrail.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-bedrock-guardrail-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-tags */
    Tags?: Tag[]
    /**
     * - The topic policies to configure for the guardrail.
     * - _Required_: No
     * - _Type_: [TopicPolicyConfig](./aws-properties-bedrock-guardrail-topicpolicyconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-topicpolicyconfig */
    TopicPolicyConfig?: TopicPolicyConfig
    /**
     * - The word policy you configure for the guardrail.
     * - _Required_: No
     * - _Type_: [WordPolicyConfig](./aws-properties-bedrock-guardrail-wordpolicyconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-guardrail.html#cfn-bedrock-guardrail-wordpolicyconfig */
    WordPolicyConfig?: WordPolicyConfig
  }
}
