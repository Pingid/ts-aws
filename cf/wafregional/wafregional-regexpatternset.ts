import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `RegexPatternSet` specifies the regular expression (regex) pattern that you want AWS WAF to search for, such as `B[a@]dB[o0]t`. You can then configure AWS WAF to reject those requests.
 * Note that you can only create regex pattern sets using a AWS CloudFormation template. To add the regex pattern sets created through AWS CloudFormation to a RegexMatchSet, use the AWS WAF console, API, or command line interface (CLI). For more information, see [UpdateRegexMatchSet](https://docs.aws.amazon.com/waf/latest/APIReference/API_regional_UpdateRegexMatchSet.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-regexpatternset.html */

export interface WAFRegionalRegexPatternSet extends ResourceAttributes {
  Type: 'AWS::WAFRegional::RegexPatternSet'
  Properties: {
    /**
     * - A friendly name or description of the [AWS::WAFRegional::RegexPatternSet](./aws-resource-wafregional-regexpatternset.html). You can't change `Name` after you create a `RegexPatternSet`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.*\S.*`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-regexpatternset.html#cfn-wafregional-regexpatternset-name */
    Name: string | Intrinsic
    /**
     * - Specifies the regular expression (regex) patterns that you want AWS WAF to search for, such as `B[a@]dB[o0]t`.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-regexpatternset.html#cfn-wafregional-regexpatternset-regexpatternstrings */
    RegexPatternStrings: (string | Intrinsic)[]
  }
}
