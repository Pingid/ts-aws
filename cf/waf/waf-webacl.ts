import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * ###### Note
 *
 * This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 *
 * **For the latest version of AWS WAF** , use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 * For the action that is associated with a rule in a `WebACL`, specifies the action that you want AWS WAF to perform when a web request matches all of the conditions in a rule. For the default action in a `WebACL`, specifies the action that you want AWS WAF to take when a web request doesn't match all of the conditions in any of the rules in a `WebACL`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html */

export interface WafAction {
  /**
   * - Specifies how you want AWS WAF to respond to requests that match the settings in a `Rule`. Valid settings include the following:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `BLOCK | ALLOW | COUNT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html#cfn-waf-webacl-wafaction-type */
  Type: string | Intrinsic
}

/**
 * The `ActivatedRule` object in an `UpdateWebACL` request specifies a `Rule` that you want to insert or delete, the priority of the `Rule` in the `WebACL`, and the action that you want AWS WAF to take when a web request matches the `Rule` (`ALLOW`, `BLOCK`, or `COUNT`).
 * To specify whether to insert or delete a `Rule`, use the `Action` parameter in the `WebACLUpdate` data type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html */

export interface ActivatedRule {
  /**
   * - Specifies the action that Amazon CloudFront or AWS WAF takes when a web request matches the conditions in the `Rule`. Valid values for `Action` include the following:
   * - `ActivatedRule|OverrideAction` applies only when updating or adding a `RuleGroup` to a `WebACL`. In this case, you do not use `ActivatedRule|Action`. For all other update requests, `ActivatedRule|Action` is used instead of `ActivatedRule|OverrideAction`.
   * - _Required_: No
   * - _Type_: [WafAction](./aws-properties-waf-webacl-wafaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html#cfn-waf-webacl-activatedrule-action */
  Action?: WafAction
  /**
   * - Specifies the order in which the `Rules` in a `WebACL` are evaluated. Rules with a lower value for `Priority` are evaluated before `Rules` with a higher value. The value must be a unique integer. If you add multiple `Rules` to a `WebACL`, the values don't need to be consecutive.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html#cfn-waf-webacl-activatedrule-priority */
  Priority: number | Intrinsic
  /**
   * - The `RuleId` for a `Rule`. You use `RuleId` to get more information about a `Rule`, update a `Rule`, insert a `Rule` into a `WebACL` or delete a one from a `WebACL`, or delete a `Rule` from AWS WAF.
   * - `RuleId` is returned by `CreateRule` and by `ListRules`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html#cfn-waf-webacl-activatedrule-ruleid */
  RuleId: string | Intrinsic
}

/**
 * ###### Note
 *
 * This is **AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 *
 * **For the latest version of AWS WAF** , use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 * Contains the `Rules` that identify the requests that you want to allow, block, or count. In a `WebACL`, you also specify a default action (`ALLOW` or `BLOCK`), and the action for each `Rule` that you add to a `WebACL`, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the `WebACL` with a Amazon CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one `Rule` to a `WebACL`, a request needs to match only one of the specifications to be allowed, blocked, or counted.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html */

export interface WAFWebACL extends ResourceAttributes {
  Type: 'AWS::WAF::WebACL'
  Properties: {
    /**
     * - The action to perform if none of the `Rules` contained in the `WebACL` match. The action is specified by the `WafAction` object.
     * - _Required_: Yes
     * - _Type_: [WafAction](./aws-properties-waf-webacl-wafaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html#cfn-waf-webacl-defaultaction */
    DefaultAction: WafAction
    /**
     * - The name of the metrics for this `WebACL`. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default\_Action." You can't change `MetricName` after you create the `WebACL`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.*\S.*`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html#cfn-waf-webacl-metricname */
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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html#cfn-waf-webacl-name */
    Name: string | Intrinsic
    /**
     * - An array that contains the action for each `Rule` in a `WebACL`, the priority of the `Rule`, and the ID of the `Rule`.
     * - _Required_: No
     * - _Type_: Array of [ActivatedRule](./aws-properties-waf-webacl-activatedrule.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html#cfn-waf-webacl-rules */
    Rules?: ActivatedRule[]
  }
}
