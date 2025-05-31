import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A CIDR provisioned to an IPAM pool.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipampoolcidr.html */

export interface EC2IPAMPoolCidr extends ResourceAttributes {
    "Type": "AWS::EC2::IPAMPoolCidr";
    "Properties": {
        /**
         * - The CIDR provisioned to the IPAM pool. A CIDR is a representation of an IP address and its associated network mask (or netmask) and refers to a range of IP addresses. An IPv4 CIDR example is `10.24.34.0/23`. An IPv6 CIDR example is `2001:DB8::/32`.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipampoolcidr.html#cfn-ec2-ipampoolcidr-cidr */
        "Cidr"?: string | Intrinsic;
        /**
         * - The ID of the IPAM pool.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipampoolcidr.html#cfn-ec2-ipampoolcidr-ipampoolid */
        "IpamPoolId": string | Intrinsic;
        /**
         * - The netmask length of the CIDR you'd like to provision to a pool. Can be used for provisioning Amazon-provided IPv6 CIDRs to top-level pools and for provisioning CIDRs to pools with source pools. Cannot be used to provision BYOIP CIDRs to top-level pools. "NetmaskLength" or "Cidr" is required.
         * - _Required_: No
         * - _Type_: Integer
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipampoolcidr.html#cfn-ec2-ipampoolcidr-netmasklength */
        "NetmaskLength"?: number | Intrinsic;
    };
}