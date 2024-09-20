import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies the default version of a module. The default version of the module will be used in CloudFormation operations for this account and Region.
 * To register a module version, use the ``[`AWS::CloudFormation::ModuleVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduleversion.html)`` resource.
 * For more information using modules, see [Using modules to encapsulate and reuse resource configurations](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/modules.html) and [Registering extensions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html#registry-register) in the _AWS CloudFormation User Guide_. For information on developing modules, see [Developing modules](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/modules.html) in the _AWS CloudFormation CLI User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduledefaultversion.html */

export interface CloudFormationModuleDefaultVersion extends ResourceAttributes {
  Type: 'AWS::CloudFormation::ModuleDefaultVersion'
  Properties: {
    /**
     * - The Amazon Resource Name (ARN) of the module version to set as the default version.
     * - Conditional: You must specify either `Arn`, or `ModuleName` and `VersionId`.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Pattern_: `^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/module/.+/[0-9]{8}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduledefaultversion.html#cfn-cloudformation-moduledefaultversion-arn */
    Arn?: string | Intrinsic
    /**
     * - The name of the module.
     * - Conditional: You must specify either `Arn`, or `ModuleName` and `VersionId`.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::MODULE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduledefaultversion.html#cfn-cloudformation-moduledefaultversion-modulename */
    ModuleName?: string | Intrinsic
    /**
     * - The ID for the specific version of the module.
     * - Conditional: You must specify either `Arn`, or `ModuleName` and `VersionId`.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Pattern_: `^[0-9]{8}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-moduledefaultversion.html#cfn-cloudformation-moduledefaultversion-versionid */
    VersionId?: string | Intrinsic
  }
}
