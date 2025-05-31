import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html */

export interface Tag {
    /**
     * - The tag key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Describes the options for instance hostnames.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html */

export interface PrivateDnsNameOptionsOnLaunch {
    /**
     * - Indicates whether to respond to DNS queries for instance hostname with DNS AAAA records.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-privatednsnameoptionsonlaunch-enableresourcenamednsaaaarecord */
    "EnableResourceNameDnsAAAARecord"?: boolean | Intrinsic;
    /**
     * - Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-privatednsnameoptionsonlaunch-enableresourcenamednsarecord */
    "EnableResourceNameDnsARecord"?: boolean | Intrinsic;
    /**
     * - The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ip-name | resource-name`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-privatednsnameoptionsonlaunch-hostnametype */
    "HostnameType"?: string | Intrinsic;
}

/**
 * Specifies a subnet for the specified VPC.
 * For an IPv4 only subnet, specify an IPv4 CIDR block. If the VPC has an IPv6 CIDR block, you can create an IPv6 only subnet or a dual stack subnet instead. For an IPv6 only subnet, specify an IPv6 CIDR block. For a dual stack subnet, specify both an IPv4 CIDR block and an IPv6 CIDR block.
 * For more information, see [Subnets for your VPC](https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html) in the _Amazon VPC User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html */

export interface EC2Subnet extends ResourceAttributes {
    "Type": "AWS::EC2::Subnet";
    "Properties": {
        /**
         * - Indicates whether a network interface created in this subnet receives an IPv6 address. The default value is `false`.
         * - If you specify `AssignIpv6AddressOnCreation`, you must also specify an IPv6 CIDR block.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-assignipv6addressoncreation */
        "AssignIpv6AddressOnCreation"?: boolean | Intrinsic;
        /**
         * - The Availability Zone of the subnet.
         * - If you update this property, you must also update the `CidrBlock` property.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-availabilityzone */
        "AvailabilityZone"?: string | Intrinsic;
        /**
         * - The AZ ID of the subnet.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-availabilityzoneid */
        "AvailabilityZoneId"?: string | Intrinsic;
        /**
         * - The IPv4 CIDR block assigned to the subnet.
         * - If you update this property, we create a new subnet, and then delete the existing one.
         * - _Required_: Conditional
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-cidrblock */
        "CidrBlock"?: string | Intrinsic;
        /**
         * - Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-enabledns64 */
        "EnableDns64"?: boolean | Intrinsic;
        /**
         * - Indicates the device position for local network interfaces in this subnet. For example, `1` indicates local network interfaces in this subnet are the secondary network interface (eth1).
         * - _Required_: No
         * - _Type_: Integer
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-enablelniatdeviceindex */
        "EnableLniAtDeviceIndex"?: number | Intrinsic;
        /**
         * - An IPv4 IPAM pool ID for the subnet.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-ipv4ipampoolid */
        "Ipv4IpamPoolId"?: string | Intrinsic;
        /**
         * - An IPv4 netmask length for the subnet.
         * - _Required_: No
         * - _Type_: Integer
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-ipv4netmasklength */
        "Ipv4NetmaskLength"?: number | Intrinsic;
        /**
         * - The IPv6 CIDR block.
         * - If you specify `AssignIpv6AddressOnCreation`, you must also specify an IPv6 CIDR block.
         * - _Required_: Conditional
         * - _Type_: String
         * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-ipv6cidrblock */
        "Ipv6CidrBlock"?: string | Intrinsic;
        /**
         * - An IPv6 IPAM pool ID for the subnet.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-ipv6ipampoolid */
        "Ipv6IpamPoolId"?: string | Intrinsic;
        /**
         * - Indicates whether this is an IPv6 only subnet. For more information, see [Subnet basics](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#subnet-basics) in the _Amazon Virtual Private Cloud User Guide_.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-ipv6native */
        "Ipv6Native"?: boolean | Intrinsic;
        /**
         * - An IPv6 netmask length for the subnet.
         * - _Required_: No
         * - _Type_: Integer
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-ipv6netmasklength */
        "Ipv6NetmaskLength"?: number | Intrinsic;
        /**
         * - Indicates whether instances launched in this subnet receive a public IPv4 address. The default value is `false`.
         * - AWS charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the _Public IPv4 Address_ tab on the [VPC pricing page](https://aws.amazon.com/vpc/pricing/).
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-mappubliciponlaunch */
        "MapPublicIpOnLaunch"?: boolean | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the Outpost.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-outpostarn */
        "OutpostArn"?: string | Intrinsic;
        /**
         * - The hostname type for EC2 instances launched into this subnet and how DNS A and AAAA record queries to the instances should be handled. For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the _Amazon Elastic Compute Cloud User Guide_.
         * - Available options:
         * - _Required_: No
         * - _Type_: [PrivateDnsNameOptionsOnLaunch](./aws-properties-ec2-subnet-privatednsnameoptionsonlaunch.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-privatednsnameoptionsonlaunch */
        "PrivateDnsNameOptionsOnLaunch"?: PrivateDnsNameOptionsOnLaunch;
        /**
         * - Any tags assigned to the subnet.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-ec2-subnet-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-tags */
        "Tags"?: Tag[];
        /**
         * - The ID of the VPC the subnet is in.
         * - If you update this property, you must also update the `CidrBlock` property.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnet.html#cfn-ec2-subnet-vpcid */
        "VpcId": string | Intrinsic;
    };
}