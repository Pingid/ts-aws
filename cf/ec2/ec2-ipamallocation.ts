import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * In IPAM, an allocation is a CIDR assignment from an IPAM pool to another IPAM pool or to a resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamallocation.html */

export interface EC2IPAMAllocation extends ResourceAttributes {
  Type: 'AWS::EC2::IPAMAllocation'
  Properties: {
    /**
     * - The CIDR you would like to allocate from the IPAM pool. Note the following:
     * - Possible values: Any available IPv4 or IPv6 CIDR.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamallocation.html#cfn-ec2-ipamallocation-cidr */
    Cidr?: string | Intrinsic
    /**
     * - A description for the allocation.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamallocation.html#cfn-ec2-ipamallocation-description */
    Description?: string | Intrinsic
    /**
     * - The ID of the IPAM pool from which you would like to allocate a CIDR.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamallocation.html#cfn-ec2-ipamallocation-ipampoolid */
    IpamPoolId: string | Intrinsic
    /**
     * - The netmask length of the CIDR you would like to allocate from the IPAM pool. Note the following:
     * - Possible netmask lengths for IPv4 addresses are 0 - 32. Possible netmask lengths for IPv6 addresses are 0 - 128.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamallocation.html#cfn-ec2-ipamallocation-netmasklength */
    NetmaskLength?: number | Intrinsic
  }
}
