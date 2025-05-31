import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * PII entity configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html */

export interface GuardrailPiiEntityConfig {
    /**
     * - The action of guardrail PII entity configuration.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `BLOCK | ANONYMIZE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-guardrailpiientityconfig-action */
    "Action": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ADDRESS | AGE | AWS_ACCESS_KEY | AWS_SECRET_KEY | CA_HEALTH_NUMBER | CA_SOCIAL_INSURANCE_NUMBER | CREDIT_DEBIT_CARD_CVV | CREDIT_DEBIT_CARD_EXPIRY | CREDIT_DEBIT_CARD_NUMBER | DRIVER_ID | EMAIL | INTERNATIONAL_BANK_ACCOUNT_NUMBER | IP_ADDRESS | LICENSE_PLATE | MAC_ADDRESS | NAME | PASSWORD | PHONE | PIN | SWIFT_CODE | UK_NATIONAL_HEALTH_SERVICE_NUMBER | UK_NATIONAL_INSURANCE_NUMBER | UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER | URL | USERNAME | US_BANK_ACCOUNT_NUMBER | US_BANK_ROUTING_NUMBER | US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER | US_PASSPORT_NUMBER | US_SOCIAL_SECURITY_NUMBER | VEHICLE_IDENTIFICATION_NUMBER`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-guardrailpiientityconfig-type */
    "Type": string | Intrinsic;
}

/**
 * A regex configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html */

export interface GuardrailRegexConfig {
    /**
     * - The action of the guardrail regex configuration.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `BLOCK | ANONYMIZE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-guardrailregexconfig-action */
    "Action": string | Intrinsic;
    /**
     * - The regex description.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-guardrailregexconfig-description */
    "Description"?: string | Intrinsic;
    /**
     * - A regex configuration.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-guardrailregexconfig-name */
    "Name": string | Intrinsic;
    /**
     * - The regex pattern.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-guardrailregexconfig-pattern */
    "Pattern": string | Intrinsic;
}

/**
 * Sensitive information policy configuration for a guardrail.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html */

export interface AIGuardrailSensitiveInformationPolicyConfig {
    /**
     * - List of entities.
     * - _Required_: No
     * - _Type_: Array of [GuardrailPiiEntityConfig](./aws-properties-wisdom-aiguardrail-guardrailpiientityconfig.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-aiguardrailsensitiveinformationpolicyconfig-piientitiesconfig */
    "PiiEntitiesConfig"?: GuardrailPiiEntityConfig[];
    /**
     * - List of regex.
     * - _Required_: No
     * - _Type_: Array of [GuardrailRegexConfig](./aws-properties-wisdom-aiguardrail-guardrailregexconfig.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-aiguardrailsensitiveinformationpolicyconfig-regexesconfig */
    "RegexesConfig"?: GuardrailRegexConfig[];
}

/**
 * Content filter configuration in content policy.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html */

export interface GuardrailContentFilterConfig {
    /**
     * - The strength of the input for the guardrail content filter.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `NONE | LOW | MEDIUM | HIGH`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-guardrailcontentfilterconfig-inputstrength */
    "InputStrength": string | Intrinsic;
    /**
     * - The output strength of the guardrail content filter.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `NONE | LOW | MEDIUM | HIGH`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-guardrailcontentfilterconfig-outputstrength */
    "OutputStrength": string | Intrinsic;
    /**
     * - The type of the guardrail content filter.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `SEXUAL | VIOLENCE | HATE | INSULTS | MISCONDUCT | PROMPT_ATTACK`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-guardrailcontentfilterconfig-type */
    "Type": string | Intrinsic;
}

/**
 * Content policy config for a guardrail.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html */

export interface AIGuardrailContentPolicyConfig {
    /**
     * - List of content filter configurations in a content policy.
     * - _Required_: Yes
     * - _Type_: Array of [GuardrailContentFilterConfig](./aws-properties-wisdom-aiguardrail-guardrailcontentfilterconfig.html)
     * - _Minimum_: `1`
     * - _Maximum_: `6`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-aiguardrailcontentpolicyconfig-filtersconfig */
    "FiltersConfig": GuardrailContentFilterConfig[];
}

/**
 * A managed words config.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html */

export interface GuardrailManagedWordsConfig {
    /**
     * - The type of guardrail managed words.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `PROFANITY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-guardrailmanagedwordsconfig-type */
    "Type": string | Intrinsic;
}

/**
 * A custom word config.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html */

export interface GuardrailWordConfig {
    /**
     * - The custom word text.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-guardrailwordconfig-text */
    "Text": string | Intrinsic;
}

/**
 * Word policy config for a guardrail.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html */

export interface AIGuardrailWordPolicyConfig {
    /**
     * - A config for the list of managed words.
     * - _Required_: No
     * - _Type_: Array of [GuardrailManagedWordsConfig](./aws-properties-wisdom-aiguardrail-guardrailmanagedwordsconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-aiguardrailwordpolicyconfig-managedwordlistsconfig */
    "ManagedWordListsConfig"?: GuardrailManagedWordsConfig[];
    /**
     * - List of custom word configurations.
     * - _Required_: No
     * - _Type_: Array of [GuardrailWordConfig](./aws-properties-wisdom-aiguardrail-guardrailwordconfig.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-aiguardrailwordpolicyconfig-wordsconfig */
    "WordsConfig"?: GuardrailWordConfig[];
}

/**
 * Topic configuration in topic policy.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html */

export interface GuardrailTopicConfig {
    /**
     * - Definition of topic in topic policy.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-guardrailtopicconfig-definition */
    "Definition": string | Intrinsic;
    /**
     * - Text example in topic policy.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `100`
     * - _Minimum_: `1 | 0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-guardrailtopicconfig-examples */
    "Examples"?: (string | Intrinsic)[];
    /**
     * - Name of topic in topic policy.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[0-9a-zA-Z-_ !?.]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-guardrailtopicconfig-name */
    "Name": string | Intrinsic;
    /**
     * - Type of topic in a policy.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-guardrailtopicconfig-type */
    "Type": string | Intrinsic;
}

/**
 * Topic policy configuration for a guardrail.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html */

export interface AIGuardrailTopicPolicyConfig {
    /**
     * - List of topic configs in topic policy.
     * - _Required_: Yes
     * - _Type_: Array of [GuardrailTopicConfig](./aws-properties-wisdom-aiguardrail-guardrailtopicconfig.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-aiguardrailtopicpolicyconfig-topicsconfig */
    "TopicsConfig": GuardrailTopicConfig[];
}

/**
 * A configuration for grounding filter.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html */

export interface GuardrailContextualGroundingFilterConfig {
    /**
     * - The threshold for this filter.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-guardrailcontextualgroundingfilterconfig-threshold */
    "Threshold": number | Intrinsic;
    /**
     * - The type of this filter.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `GROUNDING | RELEVANCE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-guardrailcontextualgroundingfilterconfig-type */
    "Type": string | Intrinsic;
}

/**
 * Contextual grounding policy config for a guardrail.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html */

export interface AIGuardrailContextualGroundingPolicyConfig {
    /**
     * - List of contextual grounding filter configs.
     * - _Required_: Yes
     * - _Type_: Array of [GuardrailContextualGroundingFilterConfig](./aws-properties-wisdom-aiguardrail-guardrailcontextualgroundingfilterconfig.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-aiguardrailcontextualgroundingpolicyconfig-filtersconfig */
    "FiltersConfig": GuardrailContextualGroundingFilterConfig[];
}

/**
 * Creates an Amazon Q in Connect AI Guardrail.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html */

export interface WisdomAIGuardrail extends ResourceAttributes {
    "Type": "AWS::Wisdom::AIGuardrail";
    "Properties": {
        /**
         * - The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$|^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}){0,2}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-assistantid */
        "AssistantId": string | Intrinsic;
        /**
         * - The message to return when the AI Guardrail blocks a prompt.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `500`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-blockedinputmessaging */
        "BlockedInputMessaging": string | Intrinsic;
        /**
         * - The message to return when the AI Guardrail blocks a model response.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `500`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-blockedoutputsmessaging */
        "BlockedOutputsMessaging": string | Intrinsic;
        /**
         * - Contains details about how to handle harmful content.
         * - _Required_: No
         * - _Type_: [AIGuardrailContentPolicyConfig](./aws-properties-wisdom-aiguardrail-aiguardrailcontentpolicyconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-contentpolicyconfig */
        "ContentPolicyConfig"?: AIGuardrailContentPolicyConfig;
        /**
         * - The policy configuration details for the AI Guardrail's contextual grounding policy.
         * - _Required_: No
         * - _Type_: [AIGuardrailContextualGroundingPolicyConfig](./aws-properties-wisdom-aiguardrail-aiguardrailcontextualgroundingpolicyconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-contextualgroundingpolicyconfig */
        "ContextualGroundingPolicyConfig"?: AIGuardrailContextualGroundingPolicyConfig;
        /**
         * - A description of the AI Guardrail.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-description */
        "Description"?: string | Intrinsic;
        /**
         * - The name of the AI Guardrail.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9\s_.,-]+`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-name */
        "Name"?: string | Intrinsic;
        /**
         * - Contains details about PII entities and regular expressions to configure for the AI Guardrail.
         * - _Required_: No
         * - _Type_: [AIGuardrailSensitiveInformationPolicyConfig](./aws-properties-wisdom-aiguardrail-aiguardrailsensitiveinformationpolicyconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-sensitiveinformationpolicyconfig */
        "SensitiveInformationPolicyConfig"?: AIGuardrailSensitiveInformationPolicyConfig;
        /**
         * - The tags used to organize, track, or control access for this resource.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-tags */
        "Tags"?: Record<string, string | Intrinsic>;
        /**
         * - Contains details about topics that the AI Guardrail should identify and deny.
         * - _Required_: No
         * - _Type_: [AIGuardrailTopicPolicyConfig](./aws-properties-wisdom-aiguardrail-aiguardrailtopicpolicyconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-topicpolicyconfig */
        "TopicPolicyConfig"?: AIGuardrailTopicPolicyConfig;
        /**
         * - Contains details about the word policy to configured for the AI Guardrail.
         * - _Required_: No
         * - _Type_: [AIGuardrailWordPolicyConfig](./aws-properties-wisdom-aiguardrail-aiguardrailwordpolicyconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrail.html#cfn-wisdom-aiguardrail-wordpolicyconfig */
        "WordPolicyConfig"?: AIGuardrailWordPolicyConfig;
    };
}