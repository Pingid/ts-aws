import type { Intrinsic } from '../intrinsic/index.js' /**
 * Specifies the default version of a resource. The default version of a resource will be used in CloudFormation operations.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html */

export interface CloudFormationResourceDefaultVersion {
  Type: 'AWS::CloudFormation::ResourceDefaultVersion'
  Properties: {
    /**
     * - The name of the resource.
     * - Conditional: You must specify either `TypeVersionArn`, or `TypeName` and `VersionId`.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html#cfn-cloudformation-resourcedefaultversion-typename */
    TypeName?: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the resource version.
     * - Conditional: You must specify either `TypeVersionArn`, or `TypeName` and `VersionId`.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Pattern_: `^arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/resource/.+$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html#cfn-cloudformation-resourcedefaultversion-typeversionarn */
    TypeVersionArn?: string | Intrinsic
    /**
     * - The ID of a specific version of the resource. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the resource version when it's registered.
     * - Conditional: You must specify either `TypeVersionArn`, or `TypeName` and `VersionId`.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z0-9-]{1,128}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourcedefaultversion.html#cfn-cloudformation-resourcedefaultversion-versionid */
    VersionId?: string | Intrinsic
  }
}
