import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::Detective::OrganizationAdmin` resource is an Amazon Detective resource type that designates the Detective administrator account for the organization in the current region. If the account does not have Detective enabled, then this resource enables Detective for that account and creates a new behavior graph.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-organizationadmin.html */

export interface DetectiveOrganizationAdmin extends ResourceAttributes {
    "Type": "AWS::Detective::OrganizationAdmin";
    "Properties": {
        /**
         * - The AWS account identifier of the account to designate as the Detective administrator account for the organization.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[0-9]{12}`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-organizationadmin.html#cfn-detective-organizationadmin-accountid */
        "AccountId": string | Intrinsic;
    };
}