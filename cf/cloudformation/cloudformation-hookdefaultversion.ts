import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::CloudFormation::HookDefaultVersion` resource specifies the default version of a Hook. The default version of the Hook is used in CloudFormation operations for this AWS account and AWS Region.
 * For information about the CloudFormation registry, see [Managing extensions with the CloudFormation registry](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html) in the _AWS CloudFormation User Guide_.
 * This resource type is not compatible with Guard and Lambda Hooks.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookdefaultversion.html */

export interface CloudFormationHookDefaultVersion extends ResourceAttributes {
    "Type": "AWS::CloudFormation::HookDefaultVersion";
    "Properties": {
        /**
         * - The name of the Hook.
         * - You must specify either `TypeVersionArn`, or `TypeName` and `VersionId`.
         * - _Required_: Conditional
         * - _Type_: String
         * - _Pattern_: `^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookdefaultversion.html#cfn-cloudformation-hookdefaultversion-typename */
        "TypeName"?: string | Intrinsic;
        /**
         * - The version ID of the type configuration.
         * - You must specify either `TypeVersionArn`, or `TypeName` and `VersionId`.
         * - _Required_: Conditional
         * - _Type_: String
         * - _Pattern_: `^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/hook/.+$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookdefaultversion.html#cfn-cloudformation-hookdefaultversion-typeversionarn */
        "TypeVersionArn"?: string | Intrinsic;
        /**
         * - The version ID of the type specified.
         * - You must specify either `TypeVersionArn`, or `TypeName` and `VersionId`.
         * - _Required_: Conditional
         * - _Type_: String
         * - _Pattern_: `^[A-Za-z0-9-]{1,128}$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookdefaultversion.html#cfn-cloudformation-hookdefaultversion-versionid */
        "VersionId"?: string | Intrinsic;
    };
}