import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Adds or updates an inline policy document that is embedded in the specified IAM user.
 * An IAM user can also have a managed policy attached to it. To attach a managed policy to a user, use [`AWS::IAM::User`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html). To create a new managed policy, use [`AWS::IAM::ManagedPolicy`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-managedpolicy.html). For information about policies, see [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the _IAM User Guide_.
 * For information about the maximum number of inline policies that you can embed in a user, see [IAM and AWS STS quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html) in the _IAM User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-userpolicy.html */

export interface IAMUserPolicy extends ResourceAttributes {
  Type: 'AWS::IAM::UserPolicy'
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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-userpolicy.html#cfn-iam-userpolicy-policydocument */
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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-userpolicy.html#cfn-iam-userpolicy-policyname */
    PolicyName: string | Intrinsic
    /**
     * - The name of the user to associate the policy with.
     * - This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: \_+=,.@-
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\w+=,.@-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-userpolicy.html#cfn-iam-userpolicy-username */
    UserName: string | Intrinsic
  }
}
