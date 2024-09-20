import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `HookTypeConfig` resource specifies the configuration of a hook.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hooktypeconfig.html */

export interface CloudFormationHookTypeConfig extends ResourceAttributes {
  Type: 'AWS::CloudFormation::HookTypeConfig'
  Properties: {
    /**
     * - Specifies the activated hook type configuration, in this AWS account and AWS Region.
     * - You must specify either `TypeName` and `Configuration` or `TypeARN` and `Configuration`.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Pattern_: `[\s\S]+`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hooktypeconfig.html#cfn-cloudformation-hooktypeconfig-configuration */
    Configuration?: string | Intrinsic
    /**
     * - Specifies the activated hook type configuration, in this AWS account and AWS Region.
     * - Defaults to `default` alias. Hook types currently support default configuration alias.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `default`
     * - _Pattern_: `^[a-zA-Z0-9]{1,256}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hooktypeconfig.html#cfn-cloudformation-hooktypeconfig-configurationalias */
    ConfigurationAlias?: string | Intrinsic
    /**
     * - The Amazon Resource Number (ARN) for the hook to set `Configuration` for.
     * - You must specify either `TypeName` and `Configuration` or `TypeARN` and `Configuration`.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Pattern_: `^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/hook/.+$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hooktypeconfig.html#cfn-cloudformation-hooktypeconfig-typearn */
    TypeArn?: string | Intrinsic
    /**
     * - The unique name for your hook. Specifies a three-part namespace for your hook, with a recommended pattern of `Organization::Service::Hook`.
     * - You must specify either `TypeName` and `Configuration` or `TypeARN` and `Configuration`.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hooktypeconfig.html#cfn-cloudformation-hooktypeconfig-typename */
    TypeName?: string | Intrinsic
  }
}
