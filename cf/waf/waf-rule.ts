import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies the `ByteMatchSet`, `IPSet`, `SqlInjectionMatchSet`, `XssMatchSet`, `RegexMatchSet`, `GeoMatchSet`, and `SizeConstraintSet` objects that you want to add to a `Rule` and, for each object, indicates whether you want to negate the settings, for example, requests that do NOT originate from the IP address 192.0.2.44.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-rule.html */

export interface Predicate {
    /**
     * - A unique identifier for a predicate in a `Rule`, such as `ByteMatchSetId` or `IPSetId`. The ID is returned by the corresponding `Create` or `List` command.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.*\S.*`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-rule.html#cfn-waf-rule-predicate-dataid */
    "DataId": string | Intrinsic;
    /**
     * - Set `Negated` to `False` if you want AWS WAF to allow, block, or count requests based on the settings in the specified `ByteMatchSet`, `IPSet`, `SqlInjectionMatchSet`, `XssMatchSet`, `RegexMatchSet`, `GeoMatchSet`, or `SizeConstraintSet`. For example, if an `IPSet` includes the IP address `192.0.2.44`, AWS WAF will allow or block requests based on that IP address.
     * - Set `Negated` to `True` if you want AWS WAF to allow or block a request based on the negation of the settings in the `ByteMatchSet`, `IPSet`, `SqlInjectionMatchSet`, `XssMatchSet`, `RegexMatchSet`, `GeoMatchSet`, or `SizeConstraintSet`. For example, if an `IPSet` includes the IP address `192.0.2.44`, AWS WAF will allow, block, or count requests based on all IP addresses _except_`192.0.2.44`.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-rule.html#cfn-waf-rule-predicate-negated */
    "Negated": boolean | Intrinsic;
    /**
     * - The type of predicate in a `Rule`, such as `ByteMatch` or `IPSet`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `IPMatch | ByteMatch | SqlInjectionMatch | GeoMatch | SizeConstraint | XssMatch | RegexMatch`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-rule.html#cfn-waf-rule-predicate-type */
    "Type": string | Intrinsic;
}

/**
 * ###### Note
 * 
 * This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 * 
 * **For the latest version of AWS WAF**, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 * A combination of `ByteMatchSet`, `IPSet`, and/or `SqlInjectionMatchSet` objects that identify the web requests that you want to allow, block, or count. For example, you might create a `Rule` that includes the following predicates:
 * *   An `IPSet` that causes AWS WAF to search for web requests that originate from the IP address `192.0.2.44`
 *     
 * *   A `ByteMatchSet` that causes AWS WAF to search for web requests for which the value of the `User-Agent` header is `BadBot`.
 * To match the settings in this `Rule`, a request must originate from `192.0.2.44` AND include a `User-Agent` header for which the value is `BadBot`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-rule.html */

export interface WAFRule extends ResourceAttributes {
    "Type": "AWS::WAF::Rule";
    "Properties": {
        /**
         * - The name of the metrics for this `Rule`. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default\_Action." You can't change `MetricName` after you create the `Rule`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `.*\S.*`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-rule.html#cfn-waf-rule-metricname */
        "MetricName": string | Intrinsic;
        /**
         * - The friendly name or description for the `Rule`. You can't change the name of a `Rule` after you create it.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `.*\S.*`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-rule.html#cfn-waf-rule-name */
        "Name": string | Intrinsic;
        /**
         * - The `Predicates` object contains one `Predicate` element for each `ByteMatchSet`, `IPSet`, or `SqlInjectionMatchSet` object that you want to include in a `Rule`.
         * - _Required_: No
         * - _Type_: Array of [Predicate](./aws-properties-waf-rule-predicate.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-rule.html#cfn-waf-rule-predicates */
        "Predicates"?: Predicate[];
    };
}