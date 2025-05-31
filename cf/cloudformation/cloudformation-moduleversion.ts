import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::CloudFormation::ModuleVersion` resource registers the specified version of the module with the CloudFormation registry. Registering a module makes it available for use in CloudFormation templates in your AWS account and Region.
 * For more information, see [Create reusable resource configurations that can be included across templates with CloudFormation modules](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/modules.html) in the _CloudFormation User Guide_.
 * For information about the CloudFormation registry, see [Managing extensions with the CloudFormation registry](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html) in the _AWS CloudFormation User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduleversion.html */

export interface CloudFormationModuleVersion extends ResourceAttributes {
    "Type": "AWS::CloudFormation::ModuleVersion";
    "Properties": {
        /**
         * - The name of the module being registered.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::MODULE`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduleversion.html#cfn-cloudformation-moduleversion-modulename */
        "ModuleName": string | Intrinsic;
        /**
         * - A URL to the S3 bucket containing the package that contains the template fragment and schema files for the module version to register.
         * - For more information, see [Module structure and requirements](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/modules-structure.html) in the _AWS CloudFormation Command Line Interface (CLI) User Guide_.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `4096`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduleversion.html#cfn-cloudformation-moduleversion-modulepackage */
        "ModulePackage": string | Intrinsic;
    };
}