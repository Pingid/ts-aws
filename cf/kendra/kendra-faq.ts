import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Information required to find a specific file in an Amazon S3 bucket.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html */

export interface S3Path {
  /**
   * - The name of the S3 bucket that contains the file.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]`
   * - _Minimum_: `3`
   * - _Maximum_: `63`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html#cfn-kendra-faq-s3path-bucket */
  Bucket: string | Intrinsic
  /**
   * - The name of the file.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html#cfn-kendra-faq-s3path-key */
  Key: string | Intrinsic
}

/**
 * A key-value pair that identifies or categorizes an index, FAQ, data source, or other resource. TA tag key and value can consist of Unicode letters, digits, white space, and any of the following symbols: \_ . : / = + - @.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html */

export interface Tag {
  /**
   * - The key for the tag. Keys are not case sensitive and must be unique for the index, FAQ, data source, or other resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html#cfn-kendra-faq-tag-key */
  Key: string | Intrinsic
  /**
   * - The value associated with the tag. The value may be an empty string but it can't be null.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html#cfn-kendra-faq-tag-value */
  Value: string | Intrinsic
}

/**
 * Creates an new set of frequently asked question (FAQ) questions and answers.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html */

export interface KendraFaq extends ResourceAttributes {
  Type: 'AWS::Kendra::Faq'
  Properties: {
    /**
     * - A description for the FAQ.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html#cfn-kendra-faq-description */
    Description?: string | Intrinsic
    /**
     * - The format of the input file. You can choose between a basic CSV format, a CSV format that includes customs attributes in a header, and a JSON format that includes custom attributes.
     * - The format must match the format of the file stored in the S3 bucket identified in the S3Path parameter.
     * - Valid values are:
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `CSV | CSV_WITH_HEADER | JSON`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html#cfn-kendra-faq-fileformat */
    FileFormat?: string | Intrinsic
    /**
     * - The identifier of the index that contains the FAQ.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `36`
     * - _Maximum_: `36`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html#cfn-kendra-faq-indexid */
    IndexId: string | Intrinsic
    /**
     * - The code for a language. This shows a supported language for the FAQ document as part of the summary information for FAQs. English is supported by default. For more information on supported languages, including their codes, see [Adding documents in languages other than English](https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z-]*`
     * - _Minimum_: `2`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html#cfn-kendra-faq-languagecode */
    LanguageCode?: string | Intrinsic
    /**
     * - The name that you assigned the FAQ when you created or updated the FAQ.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html#cfn-kendra-faq-name */
    Name: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of a role with permission to access the S3 bucket that contains the FAQ.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
     * - _Minimum_: `1`
     * - _Maximum_: `1284`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html#cfn-kendra-faq-rolearn */
    RoleArn: string | Intrinsic
    /**
     * - The Amazon Simple Storage Service (Amazon S3) location of the FAQ input data.
     * - _Required_: Yes
     * - _Type_: [S3Path](./aws-properties-kendra-faq-s3path.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html#cfn-kendra-faq-s3path */
    S3Path: S3Path
    /**
     * - An array of key-value pairs to apply to this resource
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-kendra-faq-tag.html)
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-faq.html#cfn-kendra-faq-tags */
    Tags?: Tag[]
  }
}
