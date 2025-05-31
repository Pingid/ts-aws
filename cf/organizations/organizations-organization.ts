import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates an AWS organization. The account whose user is calling the [`CreateOrganization`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateOrganization.html) operation automatically becomes the [management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) of the new organization.
 * This operation must be called using credentials from the account that is to become the new organization's management account. The principal must also have the [relevant IAM permissions](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_create.html).
 * ###### Important
 * 
 * *   If you delete an organization, you can't recover it. If you created any policies inside of the organization, they're also deleted and you can't recover them.
 *     
 * *   You can delete an organization only after you remove all member accounts from the organization. If you created some of your member accounts using AWS Organizations, you might be blocked from removing those accounts. You can remove a member account only if it has all the information that's required to operate as a standalone AWS account. For more information about how to provide that information and then remove the account, see [Leave an organization from your member account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_leave-as-member.html) in the _AWS Organizations User Guide_.
 *     
 * *   If you closed a member account before you remove it from the organization, it enters a 'suspended' state for a period of time and you can't remove the account from the organization until it is finally closed. This can take up to 90 days and can prevent you from deleting the organization until all member accounts are completely closed.
 *     
 * 
 * For more information, see [Deleting an organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_delete.html) in the _AWS Organizations User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organization.html */

export interface OrganizationsOrganization extends ResourceAttributes {
    "Type": "AWS::Organizations::Organization";
    "Properties": {
        /**
         * - Specifies the feature set supported by the new organization. Each feature set supports different levels of functionality.
         * - If you don't specify this property, the default value is `ALL`.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `ALL | CONSOLIDATED_BILLING`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organization.html#cfn-organizations-organization-featureset */
        "FeatureSet"?: string | Intrinsic;
    };
}