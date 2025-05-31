import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The tag.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html */

export interface Tag {
    /**
     * - The key of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The redaction placeholder that will replace the redacted text in session.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html */

export interface RedactionPlaceHolder {
    /**
     * - The redaction placeholder text that will replace the redacted text in session for the custom text redaction placeholder type.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[*_\-\d\w]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-redactionplaceholder-redactionplaceholdertext */
    "RedactionPlaceHolderText"?: string | Intrinsic;
    /**
     * - The redaction placeholder type that will replace the redacted text in session.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `CustomText`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-redactionplaceholder-redactionplaceholdertype */
    "RedactionPlaceHolderType": string | Intrinsic;
}

/**
 * The pattern configuration for redacting custom data types in session.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html */

export interface CustomPattern {
    /**
     * - The keyword regex for the customer pattern. After there is a match to the pattern regex, the keyword regex is used to search within the proximity of the match. If there is a keyword match, then the match is confirmed. If no keyword regex is provided, the pattern regex match will automatically be confirmed. The format must follow JavaScript regex format. The pattern must be enclosed between slashes, and can have flags behind the second slash. For example, “/ab+c/gi”
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\/((?:[^\n])+)\/([gimsuyvd]{0,8})$`
     * - _Minimum_: `0`
     * - _Maximum_: `300`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-custompattern-keywordregex */
    "KeywordRegex"?: string | Intrinsic;
    /**
     * - The pattern description for the customer pattern.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[ _\-\d\w]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-custompattern-patterndescription */
    "PatternDescription"?: string | Intrinsic;
    /**
     * - The pattern name for the custom pattern.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[_\-\d\w]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-custompattern-patternname */
    "PatternName": string | Intrinsic;
    /**
     * - The pattern regex for the customer pattern. The format must follow JavaScript regex format. The pattern must be enclosed between slashes, and can have flags behind the second slash. For example: “/ab+c/gi”.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^\/((?:[^\n])+)\/([gimsuyvd]{0,8})$`
     * - _Minimum_: `0`
     * - _Maximum_: `300`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-custompattern-patternregex */
    "PatternRegex": string | Intrinsic;
}

/**
 * The set of patterns that determine the data types redacted in session.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html */

export interface InlineRedactionPattern {
    /**
     * - The built-in pattern from the list of preconfigured patterns. Either a customPattern or builtInPatternId is required. To view the entire list of data types and their corresponding built-in pattern IDs, see [Base inline redaction](https://docs.aws.amazon.com/workspaces-web/latest/adminguide/base-inline-redaction.html).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[_\-\d\w]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-inlineredactionpattern-builtinpatternid */
    "BuiltInPatternId"?: string | Intrinsic;
    /**
     * - The confidence level for inline redaction pattern. This indicates the certainty of data type matches in the redaction process. Confidence level 3 means high confidence, and requires a formatted text pattern match in order for content to be redacted. Confidence level 2 means medium confidence, and redaction considers both formatted and unformatted text, and adds keyword associate to the logic. Confidence level 1 means low confidence, and redaction is enforced for both formatted pattern + unformatted pattern without keyword. This overrides the global confidence level.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Maximum_: `3`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-inlineredactionpattern-confidencelevel */
    "ConfidenceLevel"?: number | Intrinsic;
    /**
     * - The configuration for a custom pattern. Either a customPattern or builtInPatternId is required.
     * - _Required_: No
     * - _Type_: [CustomPattern](./aws-properties-workspacesweb-dataprotectionsettings-custompattern.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-inlineredactionpattern-custompattern */
    "CustomPattern"?: CustomPattern;
    /**
     * - The enforced URL configuration for the inline redaction pattern. This will override the global enforced URL configuration.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-inlineredactionpattern-enforcedurls */
    "EnforcedUrls"?: (string | Intrinsic)[];
    /**
     * - The exempt URL configuration for the inline redaction pattern. This will override the global exempt URL configuration for the inline redaction pattern.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-inlineredactionpattern-exempturls */
    "ExemptUrls"?: (string | Intrinsic)[];
    /**
     * - The redaction placeholder that will replace the redacted text in session for the inline redaction pattern.
     * - _Required_: Yes
     * - _Type_: [RedactionPlaceHolder](./aws-properties-workspacesweb-dataprotectionsettings-redactionplaceholder.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-inlineredactionpattern-redactionplaceholder */
    "RedactionPlaceHolder": RedactionPlaceHolder;
}

/**
 * The configuration for in-session inline redaction.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html */

export interface InlineRedactionConfiguration {
    /**
     * - The global confidence level for the inline redaction configuration. This indicates the certainty of data type matches in the redaction process. Confidence level 3 means high confidence, and requires a formatted text pattern match in order for content to be redacted. Confidence level 2 means medium confidence, and redaction considers both formatted and unformatted text, and adds keyword associate to the logic. Confidence level 1 means low confidence, and redaction is enforced for both formatted pattern + unformatted pattern without keyword. This is applied to patterns that do not have a pattern-level confidence level. Defaults to confidence level 2.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Maximum_: `3`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-inlineredactionconfiguration-globalconfidencelevel */
    "GlobalConfidenceLevel"?: number | Intrinsic;
    /**
     * - The global enforced URL configuration for the inline redaction configuration. This is applied to patterns that do not have a pattern-level enforced URL list.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-inlineredactionconfiguration-globalenforcedurls */
    "GlobalEnforcedUrls"?: (string | Intrinsic)[];
    /**
     * - The global exempt URL configuration for the inline redaction configuration. This is applied to patterns that do not have a pattern-level exempt URL list.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-inlineredactionconfiguration-globalexempturls */
    "GlobalExemptUrls"?: (string | Intrinsic)[];
    /**
     * - The inline redaction patterns to be enabled for the inline redaction configuration.
     * - _Required_: Yes
     * - _Type_: Array of [InlineRedactionPattern](./aws-properties-workspacesweb-dataprotectionsettings-inlineredactionpattern.html)
     * - _Minimum_: `0`
     * - _Maximum_: `150`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-inlineredactionconfiguration-inlineredactionpatterns */
    "InlineRedactionPatterns": InlineRedactionPattern[];
}

/**
 * The data protection settings resource that can be associated with a web portal.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html */

export interface WorkSpacesWebDataProtectionSettings extends ResourceAttributes {
    "Type": "AWS::WorkSpacesWeb::DataProtectionSettings";
    "Properties": {
        /**
         * - The additional encryption context of the data protection settings.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `^[\s\S]*$`
         * - _Minimum_: `0`
         * - _Maximum_: `131072`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-additionalencryptioncontext */
        "AdditionalEncryptionContext"?: Record<string, string | Intrinsic>;
        /**
         * - The customer managed key used to encrypt sensitive information in the data protection settings.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^arn:[\w+=\/,.@-]+:kms:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:key\/[a-zA-Z0-9-]+$`
         * - _Minimum_: `20`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-customermanagedkey */
        "CustomerManagedKey"?: string | Intrinsic;
        /**
         * - The description of the data protection settings.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[ _\-\d\w]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-description */
        "Description"?: string | Intrinsic;
        /**
         * - The display name of the data protection settings.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[ _\-\d\w]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-displayname */
        "DisplayName"?: string | Intrinsic;
        /**
         * - The inline redaction configuration for the data protection settings.
         * - _Required_: No
         * - _Type_: [InlineRedactionConfiguration](./aws-properties-workspacesweb-dataprotectionsettings-inlineredactionconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-inlineredactionconfiguration */
        "InlineRedactionConfiguration"?: InlineRedactionConfiguration;
        /**
         * - The tags of the data protection settings.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-workspacesweb-dataprotectionsettings-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-dataprotectionsettings.html#cfn-workspacesweb-dataprotectionsettings-tags */
        "Tags"?: Tag[];
    };
}