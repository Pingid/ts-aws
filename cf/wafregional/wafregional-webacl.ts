import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies the action AWS WAF takes when a web request matches or doesn't match all rule conditions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webacl.html */

export interface Action {
  /**
   * - For actions that are associated with a rule, the action that AWS WAF takes when a web request matches all conditions in a rule.
   * - For the default action of a web access control list (ACL), the action that AWS WAF takes when a web request doesn't match all conditions in any rule.
   * - Valid settings include the following:
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webacl.html#cfn-wafregional-webacl-action-type */
  Type: string | Intrinsic
}

/**
 * A combination of `ByteMatchSet`, `IPSet`, and/or `SqlInjectionMatchSet` objects that identify the web requests that you want to allow, block, or count. For example, you might create a `Rule` that includes the following predicates:
 * *   An `IPSet` that causes AWS WAF to search for web requests that originate from the IP address `192.0.2.44`
 *
 * *   A `ByteMatchSet` that causes AWS WAF to search for web requests for which the value of the `User-Agent` header is `BadBot`.
 * To match the settings in this `Rule`, a request must originate from `192.0.2.44` AND include a `User-Agent` header for which the value is `BadBot`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webacl.html */

export interface Rule {
  /**
   * - The action that AWS WAF takes when a web request matches all conditions in the rule, such as allow, block, or count the request.
   * - _Required_: Yes
   * - _Type_: [Action](./aws-properties-wafregional-webacl-action.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webacl.html#cfn-wafregional-webacl-rule-action */
  Action: Action
  /**
   * - The order in which AWS WAF evaluates the rules in a web ACL. AWS WAF evaluates rules with a lower value before rules with a higher value. The value must be a unique integer. If you have multiple rules in a web ACL, the priority numbers do not need to be consecutive.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webacl.html#cfn-wafregional-webacl-rule-priority */
  Priority: number | Intrinsic
  /**
   * - The ID of an AWS WAF Regional rule to associate with a web ACL.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webacl.html#cfn-wafregional-webacl-rule-ruleid */
  RuleId: string | Intrinsic
}

/**
 * ###### Note
 *
 * This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 *
 * **For the latest version of AWS WAF** , use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 * Contains the `Rules` that identify the requests that you want to allow, block, or count. In a `WebACL`, you also specify a default action (`ALLOW` or `BLOCK`), and the action for each `Rule` that you add to a `WebACL`, for example, block requests from specified IP addresses or block requests from specified referrers. If you add more than one `Rule` to a `WebACL`, a request needs to match only one of the specifications to be allowed, blocked, or counted.
 * To identify the requests that you want AWS WAF to filter, you associate the `WebACL` with an API Gateway API or an Application Load Balancer.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webacl.html */

export interface WAFRegionalWebACL extends ResourceAttributes {
  Type: 'AWS::WAFRegional::WebACL'
  Properties: {
    /**
     * - The action to perform if none of the `Rules` contained in the `WebACL` match. The action is specified by the `WafAction` object.
     * - _Required_: Yes
     * - _Type_: [Action](./aws-properties-wafregional-webacl-action.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webacl.html#cfn-wafregional-webacl-defaultaction */
    DefaultAction: Action
    /**
     * - A name for the metrics for this `WebACL`. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default\_Action." You can't change `MetricName` after you create the `WebACL`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.*\S.*`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webacl.html#cfn-wafregional-webacl-metricname */
    MetricName: string | Intrinsic
    /**
     * - A friendly name or description of the `WebACL`. You can't change the name of a `WebACL` after you create it.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.*\S.*`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webacl.html#cfn-wafregional-webacl-name */
    Name: string | Intrinsic
    /**
     * - An array that contains the action for each `Rule` in a `WebACL`, the priority of the `Rule`, and the ID of the `Rule`.
     * - _Required_: No
     * - _Type_: Array of [Rule](./aws-properties-wafregional-webacl-rule.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-webacl.html#cfn-wafregional-webacl-rules */
    Rules?: Rule[]
  }
}
