import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Adds or updates an inline policy document that is embedded in the specified IAM role.
 * When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role, using [`CreateRole`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html). You can update a role's trust policy using [`UpdateAssumeRolePolicy`](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UpdateAssumeRolePolicy.html). For information about roles, see [IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html) in the _IAM User Guide_.
 * A role can also have a managed policy attached to it. To attach a managed policy to a role, use [`AWS::IAM::Role`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html). To create a new managed policy, use [`AWS::IAM::ManagedPolicy`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-managedpolicy.html). For information about policies, see [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the _IAM User Guide_.
 * For information about the maximum number of inline policies that you can embed with a role, see [IAM and AWS STS quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html) in the _IAM User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-rolepolicy.html */

export interface IAMRolePolicy extends ResourceAttributes {
  Type: 'AWS::IAM::RolePolicy'
  Properties: {
    /**
     * - The policy document.
     * - You must provide policies in JSON format in IAM. However, for AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.
     * - The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
     * - _Required_: No
     * - _Type_: Json
     * - _Pattern_: `[\u0009\u000A\u000D\u0020-\u00FF]+`
     * - _Minimum_: `1`
     * - _Maximum_: `131072`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-rolepolicy.html#cfn-iam-rolepolicy-policydocument */
    PolicyDocument?: any | Intrinsic
    /**
     * - The name of the policy document.
     * - This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: \_+=,.@-
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\w+=,.@-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-rolepolicy.html#cfn-iam-rolepolicy-policyname */
    PolicyName: string | Intrinsic
    /**
     * - The name of the role to associate the policy with.
     * - This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: \_+=,.@-
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\w+=,.@-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-rolepolicy.html#cfn-iam-rolepolicy-rolename */
    RoleName: string | Intrinsic
  }
}
