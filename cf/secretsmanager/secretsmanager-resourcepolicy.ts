import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Attaches a resource-based permission policy to a secret. A resource-based policy is optional. If a secret already has a resource policy attached, you must first remove it before attaching a new policy using this CloudFormation resource. You can remove the policy using the [console](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-policies.html), [CLI](https://docs.aws.amazon.com/cli/latest/reference/secretsmanager/delete-resource-policy.html), or [API](https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_DeleteResourcePolicy.html). For more information, see [Authentication and access control for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html).
 * **Required permissions:** `secretsmanager:PutResourcePolicy`, `secretsmanager:GetResourcePolicy`. For more information, see [IAM policy actions for Secrets Manager](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecretsmanager.html#awssecretsmanager-actions-as-permissions) and [Authentication and access control in Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html */

export interface SecretsManagerResourcePolicy extends ResourceAttributes {
    "Type": "AWS::SecretsManager::ResourcePolicy";
    "Properties": {
        /**
         * - Specifies whether to block resource-based policies that allow broad access to the secret. By default, Secrets Manager blocks policies that allow broad access, for example those that use a wildcard for the principal.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html#cfn-secretsmanager-resourcepolicy-blockpublicpolicy */
        "BlockPublicPolicy"?: boolean | Intrinsic;
        /**
         * - A JSON-formatted string for an AWS resource-based policy. For example policies, see [Permissions policy examples](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html).
         * - _Required_: Yes
         * - _Type_: Json
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html#cfn-secretsmanager-resourcepolicy-resourcepolicy */
        "ResourcePolicy": any | Intrinsic;
        /**
         * - The ARN or name of the secret to attach the resource-based policy.
         * - For an ARN, we recommend that you specify a complete ARN rather than a partial ARN.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html#cfn-secretsmanager-resourcepolicy-secretid */
        "SecretId": string | Intrinsic;
    };
}