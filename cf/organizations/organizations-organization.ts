import type { Intrinsic } from '../intrinsic/index.js' /**
 * Creates an AWS organization. The account whose user is calling the [`CreateOrganization`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateOrganization.html) operation automatically becomes the [management account](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#account) of the new organization.
 * This operation must be called using credentials from the account that is to become the new organization's management account. The principal must also have the [relevant IAM permissions](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_create.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organization.html */

export interface OrganizationsOrganization {
  Type: 'AWS::Organizations::Organization'
  Properties: {
    /**
     * - Specifies the feature set supported by the new organization. Each feature set supports different levels of functionality.
     * - Feature set `ALL` provides the following advanced features:
     * - If you don't specify this property, the default value is `ALL`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ALL | CONSOLIDATED_BILLING`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-organization.html#cfn-organizations-organization-featureset */
    FeatureSet?: string | Intrinsic
  }
}
