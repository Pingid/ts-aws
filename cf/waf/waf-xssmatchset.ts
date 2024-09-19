import type { Intrinsic } from '../intrinsic/index.js' /**
 * The part of a web request that you want to inspect, such as a specified header or a query string.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-xssmatchset.html */

export interface FieldToMatch {
  /**
   * - When the value of `Type` is `HEADER`, enter the name of the header that you want AWS WAF to search, for example, `User-Agent` or `Referer`. The name of the header is not case sensitive.
   * - When the value of `Type` is `SINGLE_QUERY_ARG`, enter the name of the parameter that you want AWS WAF to search, for example, `UserName` or `SalesRegion`. The parameter name is not case sensitive.
   * - If the value of `Type` is any other value, omit `Data`.
   * - _Required_: Conditional
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-xssmatchset.html#cfn-waf-xssmatchset-fieldtomatch-data */
  Data?: string | Intrinsic
  /**
   * - The part of the web request that you want AWS WAF to search for a specified string. Parts of a request that you can search include the following:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `URI | QUERY_STRING | HEADER | METHOD | BODY | SINGLE_QUERY_ARG | ALL_QUERY_ARGS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-xssmatchset.html#cfn-waf-xssmatchset-fieldtomatch-type */
  Type: string | Intrinsic
}

/**
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-xssmatchset.html */

export interface XssMatchTuple {
  /**
   * - The part of a web request that you want to inspect, such as a specified header or a query string.
   * - _Required_: Yes
   * - _Type_: [FieldToMatch](./aws-properties-waf-xssmatchset-fieldtomatch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-xssmatchset.html#cfn-waf-xssmatchset-xssmatchtuple-fieldtomatch */
  FieldToMatch: FieldToMatch
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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-xssmatchset.html#cfn-waf-xssmatchset-xssmatchtuple-texttransformation */
  TextTransformation: string | Intrinsic
}

/**
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-xssmatchset.html */

export interface WAFXssMatchSet {
  Type: 'AWS::WAF::XssMatchSet'
  Properties: {
    /**
     * - The name, if any, of the `XssMatchSet`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.*\S.*`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-xssmatchset.html#cfn-waf-xssmatchset-name */
    Name: string | Intrinsic
    /**
     * - Specifies the parts of web requests that you want to inspect for cross-site scripting attacks.
     * - _Required_: Yes
     * - _Type_: Array of [XssMatchTuple](./aws-properties-waf-xssmatchset-xssmatchtuple.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-xssmatchset.html#cfn-waf-xssmatchset-xssmatchtuples */
    XssMatchTuples: XssMatchTuple[]
  }
}
