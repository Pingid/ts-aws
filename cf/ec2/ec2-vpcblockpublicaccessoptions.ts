import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. To learn more about VPC BPA, see [Block public access to VPCs and subnets](https://docs.aws.amazon.com/vpc/latest/userguide/security-vpc-bpa.html) in the _Amazon VPC User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcblockpublicaccessoptions.html */

export interface EC2VPCBlockPublicAccessOptions extends ResourceAttributes {
    "Type": "AWS::EC2::VPCBlockPublicAccessOptions";
    "Properties": {
        /**
         * - The desired VPC Block Public Access mode for internet gateways in your account. We do not allow you to create this resource type in an "off" mode since off is the default value.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `block-bidirectional | block-ingress`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcblockpublicaccessoptions.html#cfn-ec2-vpcblockpublicaccessoptions-internetgatewayblockmode */
        "InternetGatewayBlockMode": string | Intrinsic;
    };
}