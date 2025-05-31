import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Attaches an internet gateway, or a virtual private gateway to a VPC, enabling connectivity between the internet and the VPC.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcgatewayattachment.html */

export interface EC2VPCGatewayAttachment extends ResourceAttributes {
    "Type": "AWS::EC2::VPCGatewayAttachment";
    "Properties": {
        /**
         * - The ID of the internet gateway.
         * - You must specify either `InternetGatewayId` or `VpnGatewayId`, but not both.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcgatewayattachment.html#cfn-ec2-vpcgatewayattachment-internetgatewayid */
        "InternetGatewayId"?: string | Intrinsic;
        /**
         * - The ID of the VPC.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcgatewayattachment.html#cfn-ec2-vpcgatewayattachment-vpcid */
        "VpcId": string | Intrinsic;
        /**
         * - The ID of the virtual private gateway.
         * - You must specify either `InternetGatewayId` or `VpnGatewayId`, but not both.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcgatewayattachment.html#cfn-ec2-vpcgatewayattachment-vpngatewayid */
        "VpnGatewayId"?: string | Intrinsic;
    };
}