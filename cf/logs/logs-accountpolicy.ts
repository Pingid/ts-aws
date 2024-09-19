import type { Intrinsic } from '../intrinsic/index.js' /**
 * Creates or updates an account-level data protection policy or subscription filter policy that applies to all log groups or a subset of log groups in the account.
 * **Data protection policy**
 * A data protection policy can help safeguard sensitive data that's ingested by your log groups by auditing and masking the sensitive log data. Each account can have only one account-level data protection policy.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html */

export interface LogsAccountPolicy {
  Type: 'AWS::Logs::AccountPolicy'
  Properties: {
    /**
     * - Specify the policy, in JSON.
     * - **Data protection policy**
     * - A data protection policy must include two JSON blocks:
     * - In addition to the two JSON blocks, the `policyDocument` can also include `Name`, `Description`, and `Version` fields. The `Name` is different than the operation's `policyName` parameter, and is used as a dimension when CloudWatch Logs reports audit findings metrics to CloudWatch.
     * - The JSON specified in `policyDocument` can be up to 30,720 characters long.
     * - **Subscription filter policy**
     * - A subscription filter policy can include the following attributes in a JSON block:
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `30720`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html#cfn-logs-accountpolicy-policydocument */
    PolicyDocument: string | Intrinsic
    /**
     * - A name for the policy. This must be unique within the account.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[^:*]{1,256}$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html#cfn-logs-accountpolicy-policyname */
    PolicyName: string | Intrinsic
    /**
     * - The type of policy that you're creating or updating.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `DATA_PROTECTION_POLICY | SUBSCRIPTION_FILTER_POLICY`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html#cfn-logs-accountpolicy-policytype */
    PolicyType: string | Intrinsic
    /**
     * - Currently the only valid value for this parameter is `ALL`, which specifies that the policy applies to all log groups in the account. If you omit this parameter, the default of `ALL` is used. To scope down a subscription filter policy to a subset of log groups, use the `selectionCriteria` parameter.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ALL`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html#cfn-logs-accountpolicy-scope */
    Scope?: string | Intrinsic
    /**
     * - Use this parameter to apply a subscription filter policy to a subset of log groups in the account. Currently, the only supported filter is `LogGroupName NOT IN []`. The `selectionCriteria` string can be up to 25KB in length. The length is determined by using its UTF-8 bytes.
     * - Using the `selectionCriteria` parameter is useful to help prevent infinite loops. For more information, see [Log recursion prevention](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Subscriptions-recursion-prevention.html).
     * - Specifing `selectionCriteria` is valid only when you specify `SUBSCRIPTION_FILTER_POLICY` for `policyType`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html#cfn-logs-accountpolicy-selectioncriteria */
    SelectionCriteria?: string | Intrinsic
  }
}
