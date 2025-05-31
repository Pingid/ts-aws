import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Associates a CIDR block with your subnet. You can associate a single IPv6 CIDR block with your subnet.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetcidrblock.html */

export interface EC2SubnetCidrBlock extends ResourceAttributes {
    "Type": "AWS::EC2::SubnetCidrBlock";
    "Properties": {
        /**
         * - The IPv6 network range for the subnet, in CIDR notation.
         * - _Required_: Conditional
         * - _Type_: String
         * - _Maximum_: `42`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetcidrblock.html#cfn-ec2-subnetcidrblock-ipv6cidrblock */
        "Ipv6CidrBlock"?: string | Intrinsic;
        /**
         * - An IPv6 IPAM pool ID for the subnet.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetcidrblock.html#cfn-ec2-subnetcidrblock-ipv6ipampoolid */
        "Ipv6IpamPoolId"?: string | Intrinsic;
        /**
         * - An IPv6 netmask length for the subnet.
         * - _Required_: No
         * - _Type_: Integer
         * - _Minimum_: `0`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetcidrblock.html#cfn-ec2-subnetcidrblock-ipv6netmasklength */
        "Ipv6NetmaskLength"?: number | Intrinsic;
        /**
         * - The ID of the subnet.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetcidrblock.html#cfn-ec2-subnetcidrblock-subnetid */
        "SubnetId": string | Intrinsic;
    };
}