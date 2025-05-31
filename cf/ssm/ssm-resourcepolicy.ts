import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates or updates a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an AWS account) that can manage your Systems Manager resources. Currently, `OpsItemGroup` is the only resource that supports Systems Manager resource policies. The resource policy for `OpsItemGroup` enables AWS accounts to view and interact with OpsCenter operational work items (OpsItems). OpsCenter is a tool in Systems Manager.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcepolicy.html */

export interface SSMResourcePolicy extends ResourceAttributes {
    "Type": "AWS::SSM::ResourcePolicy";
    "Properties": {
        /**
         * - A policy you want to associate with a resource.
         * - _Required_: Yes
         * - _Type_: Json
         * - _Pattern_: `^(?!\s*$).+`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcepolicy.html#cfn-ssm-resourcepolicy-policy */
        "Policy": any | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the resource to which you want to attach a policy.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `20`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcepolicy.html#cfn-ssm-resourcepolicy-resourcearn */
        "ResourceArn": string | Intrinsic;
    };
}