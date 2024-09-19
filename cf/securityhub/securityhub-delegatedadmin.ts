import type { Intrinsic } from '../intrinsic/index.js' /**
 * The `AWS::SecurityHub::DelegatedAdmin` resource designates the delegated AWS Security Hub administrator account for an organization. You must enable the integration between Security Hub and AWS Organizations before you can designate a delegated Security Hub administrator. Only the management account for an organization can designate the delegated Security Hub administrator account. For more information, see [Designating the delegated Security Hub administrator](https://docs.aws.amazon.com/securityhub/latest/userguide/designate-orgs-admin-account.html#designate-admin-instructions) in the _AWS Security Hub User Guide_.
 * To change the delegated administrator account, remove the current delegated administrator account, and then designate the new account.
 * To designate multiple delegated administrators in different organizations and AWS Regions, we recommend using [AWS CloudFormation mappings](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html).
 * Tags aren't supported for this resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-delegatedadmin.html */

export interface SecurityHubDelegatedAdmin {
  Type: 'AWS::SecurityHub::DelegatedAdmin'
  Properties: {
    /**
     * - The AWS account identifier of the account to designate as the Security Hub administrator account.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[0-9]{12}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-delegatedadmin.html#cfn-securityhub-delegatedadmin-adminaccountid */
    AdminAccountId: string | Intrinsic
  }
}
