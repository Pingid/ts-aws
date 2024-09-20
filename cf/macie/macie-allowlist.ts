import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies a tag (key-value pair) to apply to an allow list. A _tag_ is a label that you can define and associate with AWS resources, including certain types of Amazon Macie resources. Each tag consists of a _tag key_ and an associated _tag value_. A _tag key_ is a general label that acts as a category for a more specific tag value. Each tag key must be unique and it can have only one tag value. A _tag value_ acts as a descriptor for a tag key. Tag keys and values are case sensitive. They can contain letters, numbers, spaces, or the following symbols: \_ . : / = + - @
 * For more information, see [Tagging Macie resources](https://docs.aws.amazon.com/macie/latest/user/tagging-resources.html) in the _Amazon Macie User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-allowlist.html */

export interface Tag {
  /**
   * - The name of the tag key. A tag key can contain up to 128 UTF-8 characters.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-allowlist.html#cfn-macie-allowlist-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value to associate with the specified tag key (`Key`). A tag value can contain up to 256 UTF-8 characters. A tag value cannot be null, but it can be an empty string.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-allowlist.html#cfn-macie-allowlist-tag-value */
  Value: string | Intrinsic
}

/**
 * Specifies the location and name of an Amazon Simple Storage Service (Amazon S3) object that lists specific, predefined text to ignore when inspecting data sources for sensitive data.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-allowlist.html */

export interface S3WordsList {
  /**
   * - The full name of the S3 bucket that contains the object. This value correlates to the `Name` field of a bucket's properties in Amazon S3.
   * - This value is case sensitive. In addition, don't use wildcard characters or specify partial values for the name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-allowlist.html#cfn-macie-allowlist-s3wordslist-bucketname */
  BucketName: string | Intrinsic
  /**
   * - The full name of the S3 object. This value correlates to the `Key` field of an object's properties in Amazon S3. If the name includes a path, include the complete path. For example, `AllowLists/Macie/MyList.txt`.
   * - This value is case sensitive. In addition, don't use wildcard characters or specify partial values for the name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-allowlist.html#cfn-macie-allowlist-s3wordslist-objectkey */
  ObjectKey: string | Intrinsic
}

/**
 * Specifies the criteria for an allow list, which is a list that defines specific text or a text pattern to ignore when inspecting data sources for sensitive data. The criteria can be:
 * *   The location and name of an Amazon Simple Storage Service (Amazon S3) object that lists specific predefined text to ignore (`S3WordsList`), or
 *
 * *   A regular expression (`Regex`) that defines a text pattern to ignore.
 * The criteria must specify either an S3 object or a regular expression. It can't specify both.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-allowlist.html */

export interface Criteria {
  /**
   * - The regular expression (_regex_) that defines the text pattern to ignore. The expression can contain 1-512 characters.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-allowlist.html#cfn-macie-allowlist-criteria-regex */
  Regex?: string | Intrinsic
  /**
   * - The location and name of an Amazon S3 object that lists specific text to ignore.
   * - _Required_: No
   * - _Type_: [S3WordsList](./aws-properties-macie-allowlist-s3wordslist.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-allowlist.html#cfn-macie-allowlist-criteria-s3wordslist */
  S3WordsList?: S3WordsList
}

/**
 * The `AWS::Macie::AllowList` resource specifies an allow list. In Amazon Macie, an allow list defines specific text or a text pattern for Macie to ignore when it inspects data sources for sensitive data. If data matches text or a text pattern in an allow list, Macie doesn’t report the data in sensitive data findings or sensitive data discovery results, even if the data matches the criteria of a custom data identifier or a managed data identifier. You can create and use allow lists in all the AWS Regions where Macie is currently available except the Asia Pacific (Osaka) Region.
 * Macie supports two types of allow lists:
 * *   **Predefined text** - For this type of list (`S3WordsList`), you create a line-delimited plaintext file that lists specific text to ignore, and you store the file in an Amazon Simple Storage Service (Amazon S3) bucket. You then configure settings for Macie to access the list in the bucket.
 *
 *     This type of list typically contains specific words, phrases, and other kinds of character sequences that aren’t sensitive, aren't likely to change, and don’t necessarily adhere to a common pattern. If you use this type of list, Macie doesn't report occurrences of text that exactly match a complete entry in the list. Macie treats each entry in the list as a string literal value. Matches aren't case sensitive.
 *
 * *   **Regular expression** - For this type of list (`Regex`), you specify a regular expression that defines a text pattern to ignore. Unlike an allow list with predefined text, you store the regex and all other list settings in Macie.
 *
 *     This type of list is helpful if you want to specify text that isn’t sensitive but varies or is likely to change while also adhering to a common pattern. If you use this type of list, Macie doesn't report occurrences of text that completely match the pattern defined by the list.
 * For more information, see [Defining sensitive data exceptions with allow lists](https://docs.aws.amazon.com/macie/latest/user/allow-lists.html) in the _Amazon Macie User Guide_.
 * An `AWS::Macie::Session` resource must exist for an AWS account before you can create an `AWS::Macie::AllowList` resource for the account. Use a [DependsOn attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) to ensure that an `AWS::Macie::Session` resource is created before other Macie resources are created for an account. For example, `"DependsOn": "Session"`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-allowlist.html */

export interface MacieAllowList extends ResourceAttributes {
  Type: 'AWS::Macie::AllowList'
  Properties: {
    /**
     * - The criteria that specify the text or text pattern to ignore. The criteria can be the location and name of an Amazon S3 object that lists specific text to ignore (`S3WordsList`), or a regular expression (`Regex`) that defines a text pattern to ignore.
     * - _Required_: Yes
     * - _Type_: [Criteria](./aws-properties-macie-allowlist-criteria.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-allowlist.html#cfn-macie-allowlist-criteria */
    Criteria: Criteria
    /**
     * - A custom description of the allow list. The description can contain 1-512 characters.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-allowlist.html#cfn-macie-allowlist-description */
    Description?: string | Intrinsic
    /**
     * - A custom name for the allow list. The name can contain 1-128 characters.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-allowlist.html#cfn-macie-allowlist-name */
    Name: string | Intrinsic
    /**
     * - An array of key-value pairs to apply to the allow list.
     * - For more information, see [Resource tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-macie-allowlist-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-allowlist.html#cfn-macie-allowlist-tags */
    Tags?: Tag[]
  }
}
