import type { Intrinsic } from '../intrinsic/index.js' /**
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html */

export interface FieldToMatch {
  /**
   * - When the value of `Type` is `HEADER`, enter the name of the header that you want AWS WAF to search, for example, `User-Agent` or `Referer`. The name of the header is not case sensitive.
   * - When the value of `Type` is `SINGLE_QUERY_ARG`, enter the name of the parameter that you want AWS WAF to search, for example, `UserName` or `SalesRegion`. The parameter name is not case sensitive.
   * - If the value of `Type` is any other value, omit `Data`.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html#cfn-waf-bytematchset-fieldtomatch-data */
  Data?: string | Intrinsic
  /**
   * - The part of the web request that you want AWS WAF to search for a specified string. Parts of a request that you can search include the following:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `URI | QUERY_STRING | HEADER | METHOD | BODY | SINGLE_QUERY_ARG | ALL_QUERY_ARGS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html#cfn-waf-bytematchset-fieldtomatch-type */
  Type: string | Intrinsic
}

/**
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html */

export interface ByteMatchTuple {
  /**
   * - The part of a web request that you want to inspect, such as a specified header or a query string.
   * - _Required_: Yes
   * - _Type_: [FieldToMatch](./aws-properties-waf-bytematchset-fieldtomatch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html#cfn-waf-bytematchset-bytematchtuple-fieldtomatch */
  FieldToMatch: FieldToMatch
  /**
   * - Within the portion of a web request that you want to search (for example, in the query string, if any), specify where you want AWS WAF to search. Valid values include the following:
   * - **CONTAINS**
   * - The specified part of the web request must include the value of `TargetString`, but the location doesn't matter.
   * - **CONTAINS\_WORD**
   * - The specified part of the web request must include the value of `TargetString`, and `TargetString` must contain only alphanumeric characters or underscore (A-Z, a-z, 0-9, or \_). In addition, `TargetString` must be a word, which means one of the following:
   * - **EXACTLY**
   * - The value of the specified part of the web request must exactly match the value of `TargetString`.
   * - **STARTS\_WITH**
   * - The value of `TargetString` must appear at the beginning of the specified part of the web request.
   * - **ENDS\_WITH**
   * - The value of `TargetString` must appear at the end of the specified part of the web request.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `EXACTLY | STARTS_WITH | ENDS_WITH | CONTAINS | CONTAINS_WORD`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html#cfn-waf-bytematchset-bytematchtuple-positionalconstraint */
  PositionalConstraint: string | Intrinsic
  /**
   * - The value that you want AWS WAF to search for. AWS WAF searches for the specified string in the part of web requests that you specified in `FieldToMatch`. The maximum length of the value is 50 bytes.
   * - You must specify this property or the `TargetStringBase64` property.
   * - Valid values depend on the values that you specified for `FieldToMatch`:
   * - If `TargetString` includes alphabetic characters A-Z and a-z, note that the value is case sensitive.
   * - _Required_: Conditional
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html#cfn-waf-bytematchset-bytematchtuple-targetstring */
  TargetString?: string | Intrinsic
  /**
   * - The base64-encoded value that AWS WAF searches for. AWS CloudFormation sends this value to AWS WAF without encoding it.
   * - You must specify this property or the `TargetString` property.
   * - AWS WAF searches for this value in a specific part of web requests, which you define in the `FieldToMatch` property.
   * - Valid values depend on the Type value in the `FieldToMatch` property. For example, for a `METHOD` type, you must specify HTTP methods such as `DELETE, GET, HEAD, OPTIONS, PATCH, POST`, and `PUT`.
   * - _Required_: Conditional
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html#cfn-waf-bytematchset-bytematchtuple-targetstringbase64 */
  TargetStringBase64?: string | Intrinsic
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF performs the transformation on `FieldToMatch` before inspecting it for a match.
   * - You can only specify a single type of TextTransformation.
   * - **CMD\_LINE**
   * - When you're concerned that attackers are injecting an operating system command line command and using unusual formatting to disguise some or all of the command, use this option to perform the following transformations:
   * - **COMPRESS\_WHITE\_SPACE**
   * - Use this option to replace the following characters with a space character (decimal 32):
   * - `COMPRESS_WHITE_SPACE` also replaces multiple spaces with one space.
   * - **HTML\_ENTITY\_DECODE**
   * - Use this option to replace HTML-encoded characters with unencoded characters. `HTML_ENTITY_DECODE` performs the following operations:
   * - **LOWERCASE**
   * - Use this option to convert uppercase letters (A-Z) to lowercase (a-z).
   * - **URL\_DECODE**
   * - Use this option to decode a URL-encoded value.
   * - **NONE**
   * - Specify `NONE` if you don't want to perform any text transformations.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `NONE | COMPRESS_WHITE_SPACE | HTML_ENTITY_DECODE | LOWERCASE | CMD_LINE | URL_DECODE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html#cfn-waf-bytematchset-bytematchtuple-texttransformation */
  TextTransformation: string | Intrinsic
}

/**
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html */

export interface WAFByteMatchSet {
  Type: 'AWS::WAF::ByteMatchSet'
  Properties: {
    /**
     * - Specifies the bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.
     * - _Required_: No
     * - _Type_: Array of [ByteMatchTuple](./aws-properties-waf-bytematchset-bytematchtuple.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html#cfn-waf-bytematchset-bytematchtuples */
    ByteMatchTuples?: ByteMatchTuple[]
    /**
     * - The name of the `ByteMatchSet`. You can't change `Name` after you create a `ByteMatchSet`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.*\S.*`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-bytematchset.html#cfn-waf-bytematchset-name */
    Name: string | Intrinsic
  }
}
