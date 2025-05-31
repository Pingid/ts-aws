import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The part of a web request that you want to inspect, such as a specified header or a query string.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html */

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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html#cfn-waf-sizeconstraintset-fieldtomatch-data */
    "Data"?: string | Intrinsic;
    /**
     * - The part of the web request that you want AWS WAF to search for a specified string. Parts of a request that you can search include the following:
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `URI | QUERY_STRING | HEADER | METHOD | BODY | SINGLE_QUERY_ARG | ALL_QUERY_ARGS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html#cfn-waf-sizeconstraintset-fieldtomatch-type */
    "Type": string | Intrinsic;
}

/**
 * ###### Note
 * 
 * AWS WAF Classic support will end on September 30, 2025.
 * 
 * This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * 
 * **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 * Specifies a constraint on the size of a part of the web request. AWS WAF uses the `Size`, `ComparisonOperator`, and `FieldToMatch` to build an expression in the form of "`Size``ComparisonOperator` size in bytes of `FieldToMatch`". If that expression is true, the `SizeConstraint` is considered to match.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html */

export interface SizeConstraint {
    /**
     * - The type of comparison you want AWS WAF to perform. AWS WAF uses this in combination with the provided `Size` and `FieldToMatch` to build an expression in the form of "`Size``ComparisonOperator` size in bytes of `FieldToMatch`". If that expression is true, the `SizeConstraint` is considered to match.
     * - **EQ**: Used to test if the `Size` is equal to the size of the `FieldToMatch`
     * - **NE**: Used to test if the `Size` is not equal to the size of the `FieldToMatch`
     * - **LE**: Used to test if the `Size` is less than or equal to the size of the `FieldToMatch`
     * - **LT**: Used to test if the `Size` is strictly less than the size of the `FieldToMatch`
     * - **GE**: Used to test if the `Size` is greater than or equal to the size of the `FieldToMatch`
     * - **GT**: Used to test if the `Size` is strictly greater than the size of the `FieldToMatch`
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `EQ | NE | LE | LT | GE | GT`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html#cfn-waf-sizeconstraintset-sizeconstraint-comparisonoperator */
    "ComparisonOperator": string | Intrinsic;
    /**
     * - The part of a web request that you want to inspect, such as a specified header or a query string.
     * - _Required_: Yes
     * - _Type_: [FieldToMatch](./aws-properties-waf-sizeconstraintset-fieldtomatch.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html#cfn-waf-sizeconstraintset-sizeconstraint-fieldtomatch */
    "FieldToMatch": FieldToMatch;
    /**
     * - The size in bytes that you want AWS WAF to compare against the size of the specified `FieldToMatch`. AWS WAF uses this in combination with `ComparisonOperator` and `FieldToMatch` to build an expression in the form of "`Size``ComparisonOperator` size in bytes of `FieldToMatch`". If that expression is true, the `SizeConstraint` is considered to match.
     * - Valid values for size are 0 - 21474836480 bytes (0 - 20 GB).
     * - If you specify `URI` for the value of `Type`, the / in the URI path that you specify counts as one character. For example, the URI `/logo.jpg` is nine characters long.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html#cfn-waf-sizeconstraintset-sizeconstraint-size */
    "Size": number | Intrinsic;
    /**
     * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass AWS WAF. If you specify a transformation, AWS WAF performs the transformation on `FieldToMatch` before inspecting it for a match.
     * - You can only specify a single type of TextTransformation.
     * - Note that if you choose `BODY` for the value of `Type`, you must choose `NONE` for `TextTransformation` because Amazon CloudFront forwards only the first 8192 bytes for inspection.
     * - **NONE**
     * - Specify `NONE` if you don't want to perform any text transformations.
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
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `NONE | COMPRESS_WHITE_SPACE | HTML_ENTITY_DECODE | LOWERCASE | CMD_LINE | URL_DECODE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html#cfn-waf-sizeconstraintset-sizeconstraint-texttransformation */
    "TextTransformation": string | Intrinsic;
}

/**
 * ###### Note
 * 
 * AWS WAF Classic support will end on September 30, 2025.
 * 
 * This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * 
 * **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 * A complex type that contains `SizeConstraint` objects, which specify the parts of web requests that you want AWS WAF to inspect the size of. If a `SizeConstraintSet` contains more than one `SizeConstraint` object, a request only needs to match one constraint to be considered a match.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html */

export interface WAFSizeConstraintSet extends ResourceAttributes {
    "Type": "AWS::WAF::SizeConstraintSet";
    "Properties": {
        /**
         * - The name, if any, of the `SizeConstraintSet`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `.*\S.*`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html#cfn-waf-sizeconstraintset-name */
        "Name": string | Intrinsic;
        /**
         * - The size constraint and the part of the web request to check.
         * - _Required_: Yes
         * - _Type_: Array of [SizeConstraint](./aws-properties-waf-sizeconstraintset-sizeconstraint.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-sizeconstraintset.html#cfn-waf-sizeconstraintset-sizeconstraints */
        "SizeConstraints": SizeConstraint[];
    };
}