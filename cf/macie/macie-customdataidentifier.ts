import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies a tag (key-value pair) to apply to a custom data identifier. A _tag_ is a label that you can define and associate with AWS resources, including certain types of Amazon Macie resources. Each tag consists of a _tag key_ and an associated _tag value_. A _tag key_ is a general label that acts as a category for a more specific tag value. Each tag key must be unique and it can have only one tag value. A _tag value_ acts as a descriptor for a tag key. Tag keys and values are case sensitive. They can contain letters, numbers, spaces, or the following symbols: \_ . : / = + - @
 * For more information, see [Tagging Macie resources](https://docs.aws.amazon.com/macie/latest/user/tagging-resources.html) in the _Amazon Macie User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html */

export interface Tag {
    /**
     * - The name of the tag key. A tag key can contain up to 128 UTF-8 characters.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html#cfn-macie-customdataidentifier-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag value to associate with the specified tag key (`Key`). A tag value can contain up to 256 UTF-8 characters. A tag value cannot be null, but it can be an empty string.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html#cfn-macie-customdataidentifier-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The `AWS::Macie::CustomDataIdentifier` resource specifies a custom data identifier. A _custom data identifier_ is a set of custom criteria for Amazon Macie to use when it inspects data sources for sensitive data. The criteria consist of a regular expression (_regex_) that defines a text pattern to match and, optionally, character sequences and a proximity rule that refine the results. The character sequences can be:
 * *   _Keywords_, which are words or phrases that must be in proximity of text that matches the regex, or
 *     
 * *   _Ignore words_, which are words or phrases to exclude from the results.
 * By using custom data identifiers, you can supplement the managed data identifiers that Macie provides and detect sensitive data that reflects your particular scenarios, intellectual property, or proprietary data. For more information, see [Building custom data identifiers](https://docs.aws.amazon.com/macie/latest/user/custom-data-identifiers.html) in the _Amazon Macie User Guide_.
 * An `AWS::Macie::Session` resource must exist for an AWS account before you can create an `AWS::Macie::CustomDataIdentifier` resource for the account. Use a [DependsOn attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) to ensure that an `AWS::Macie::Session` resource is created before other Macie resources are created for an account. For example, `"DependsOn": "Session"`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html */

export interface MacieCustomDataIdentifier extends ResourceAttributes {
    "Type": "AWS::Macie::CustomDataIdentifier";
    "Properties": {
        /**
         * - A custom description of the custom data identifier. The description can contain 1-512 characters.
         * - Avoid including sensitive data in the description. Users of the account might be able to see the description, depending on the actions that they're allowed to perform in Amazon Macie.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html#cfn-macie-customdataidentifier-description */
        "Description"?: string | Intrinsic;
        /**
         * - An array of character sequences (_ignore words_) to exclude from the results. If text matches the regular expression (`Regex`) but it contains a string in this array, Amazon Macie ignores the text and doesn't include it in the results.
         * - The array can contain 1-10 ignore words. Each ignore word can contain 4-90 UTF-8 characters. Ignore words are case sensitive.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html#cfn-macie-customdataidentifier-ignorewords */
        "IgnoreWords"?: (string | Intrinsic)[];
        /**
         * - An array of character sequences (_keywords_), one of which must precede and be in proximity (`MaximumMatchDistance`) of the regular expression (`Regex`) to match.
         * - The array can contain 1-50 keywords. Each keyword can contain 3-90 UTF-8 characters. Keywords aren't case sensitive.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html#cfn-macie-customdataidentifier-keywords */
        "Keywords"?: (string | Intrinsic)[];
        /**
         * - The maximum number of characters that can exist between the end of at least one complete character sequence specified by the `Keywords` array and the end of text that matches the regular expression (`Regex`). If a complete keyword precedes all the text that matches the regular expression and the keyword is within the specified distance, Amazon Macie includes the result.
         * - The distance can be 1-300 characters. The default value is 50.
         * - _Required_: No
         * - _Type_: Integer
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html#cfn-macie-customdataidentifier-maximummatchdistance */
        "MaximumMatchDistance"?: number | Intrinsic;
        /**
         * - A custom name for the custom data identifier. The name can contain 1-128 characters.
         * - Avoid including sensitive data in the name of a custom data identifier. Users of the account might be able to see the name, depending on the actions that they're allowed to perform in Amazon Macie.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html#cfn-macie-customdataidentifier-name */
        "Name": string | Intrinsic;
        /**
         * - The regular expression (_regex_) that defines the text pattern to match. The expression can contain 1-512 characters.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html#cfn-macie-customdataidentifier-regex */
        "Regex": string | Intrinsic;
        /**
         * - An array of key-value pairs to apply to the custom data identifier.
         * - For more information, see [Resource tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-macie-customdataidentifier-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-customdataidentifier.html#cfn-macie-customdataidentifier-tags */
        "Tags"?: Tag[];
    };
}