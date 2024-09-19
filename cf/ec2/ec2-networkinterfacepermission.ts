import type { Intrinsic } from '../intrinsic/index.js' /**
 * Specifies a permission for an Amazon EC2 network interface. For example, you can grant an AWS authorized partner account permission to attach the specified network interface to an instance in their account.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfacepermission.html */

export interface EC2NetworkInterfacePermission {
  Type: 'AWS::EC2::NetworkInterfacePermission'
  Properties: {
    /**
     * - The AWS account ID.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfacepermission.html#cfn-ec2-networkinterfacepermission-awsaccountid */
    AwsAccountId: string | Intrinsic
    /**
     * - The ID of the network interface.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfacepermission.html#cfn-ec2-networkinterfacepermission-networkinterfaceid */
    NetworkInterfaceId: string | Intrinsic
    /**
     * - The type of permission to grant: `INSTANCE-ATTACH` or `EIP-ASSOCIATE`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `INSTANCE-ATTACH | EIP-ASSOCIATE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfacepermission.html#cfn-ec2-networkinterfacepermission-permission */
    Permission: string | Intrinsic
  }
}
