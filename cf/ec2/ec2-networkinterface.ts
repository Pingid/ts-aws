import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Configurable options for connection tracking on a network interface. For more information, see [Connection tracking timeouts](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts) in the _Amazon Elastic Compute Cloud User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html */

export interface ConnectionTrackingSpecification {
  /**
   * - Timeout (in seconds) for idle TCP connections in an established state. Min: 60 seconds. Max: 432000 seconds (5 days). Default: 432000 seconds. Recommended: Less than 432000 seconds.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-connectiontrackingspecification-tcpestablishedtimeout */
  TcpEstablishedTimeout?: number | Intrinsic
  /**
   * - Timeout (in seconds) for idle UDP flows classified as streams which have seen more than one request-response transaction. Min: 60 seconds. Max: 180 seconds (3 minutes). Default: 180 seconds.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-connectiontrackingspecification-udpstreamtimeout */
  UdpStreamTimeout?: number | Intrinsic
  /**
   * - Timeout (in seconds) for idle UDP flows that have seen traffic only in a single direction or a single request-response transaction. Min: 30 seconds. Max: 60 seconds. Default: 30 seconds.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-connectiontrackingspecification-udptimeout */
  UdpTimeout?: number | Intrinsic
}

/**
 * Describes an IPv4 prefix.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html */

export interface Ipv4PrefixSpecification {
  /**
   * - The IPv4 prefix. For information, see [Assigning prefixes to network interfaces](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html) in the _Amazon EC2 User Guide_.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-ipv4prefixspecification-ipv4prefix */
  Ipv4Prefix: string | Intrinsic
}

/**
 * Describes the IPv6 addresses to associate with the network interface.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html */

export interface InstanceIpv6Address {
  /**
   * - An IPv6 address to associate with the network interface.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-instanceipv6address-ipv6address */
  Ipv6Address: string | Intrinsic
}

/**
 * Describes the IPv6 prefix.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html */

export interface Ipv6PrefixSpecification {
  /**
   * - The IPv6 prefix. For information, see [Assigning prefixes to Amazon EC2 network interfaces](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html) in the _Amazon Elastic Compute Cloud User Guide_.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-ipv6prefixspecification-ipv6prefix */
  Ipv6Prefix: string | Intrinsic
}

/**
 * Describes a secondary private IPv4 address for a network interface.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html */

export interface PrivateIpAddressSpecification {
  /**
   * - Sets the private IP address as the primary private address. You can set only one primary private IP address. If you don't specify a primary private IP address, Amazon EC2 automatically assigns a primary private IP address.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-privateipaddressspecification-primary */
  Primary: boolean | Intrinsic
  /**
   * - The private IP address of the network interface.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-privateipaddressspecification-privateipaddress */
  PrivateIpAddress: string | Intrinsic
}

/**
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html */

export interface Tag {
  /**
   * - The tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-tag-value */
  Value: string | Intrinsic
}

/**
 * Describes a network interface in an Amazon EC2 instance for AWS CloudFormation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html */

export interface EC2NetworkInterface extends ResourceAttributes {
  Type: 'AWS::EC2::NetworkInterface'
  Properties: {
    /**
     * - A connection tracking specification for the network interface.
     * - _Required_: No
     * - _Type_: [ConnectionTrackingSpecification](./aws-properties-ec2-networkinterface-connectiontrackingspecification.html)
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-connectiontrackingspecification */
    ConnectionTrackingSpecification?: ConnectionTrackingSpecification
    /**
     * - A description for the network interface.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-description */
    Description?: string | Intrinsic
    /**
     * - If you’re modifying a network interface in a dual-stack or IPv6-only subnet, you have the option to assign a primary IPv6 IP address. A primary IPv6 address is an IPv6 GUA address associated with an ENI that you have enabled to use a primary IPv6 address. Use this option if the instance that this ENI will be attached to relies on its IPv6 address not changing. AWS will automatically assign an IPv6 address associated with the ENI attached to your instance to be the primary IPv6 address. Once you enable an IPv6 GUA address to be a primary IPv6, you cannot disable it. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. If you have multiple IPv6 addresses associated with an ENI attached to your instance and you enable a primary IPv6 address, the first IPv6 GUA address associated with the ENI becomes the primary IPv6 address.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-enableprimaryipv6 */
    EnablePrimaryIpv6?: boolean | Intrinsic
    /**
     * - The IDs of the security groups associated with this network interface.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-groupset */
    GroupSet?: (string | Intrinsic)[]
    /**
     * - The type of network interface. The default is `interface`. The supported values are `efa` and `trunk`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `efa | branch | trunk`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-interfacetype */
    InterfaceType?: string | Intrinsic
    /**
     * - The number of IPv4 prefixes to be automatically assigned to the network interface.
     * - When creating a network interface, you can't specify a count of IPv4 prefixes if you've specified one of the following: specific IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-ipv4prefixcount */
    Ipv4PrefixCount?: number | Intrinsic
    /**
     * - The IPv4 delegated prefixes that are assigned to the network interface.
     * - When creating a network interface, you can't specify IPv4 prefixes if you've specified one of the following: a count of IPv4 prefixes, specific private IPv4 addresses, or a count of private IPv4 addresses.
     * - _Required_: No
     * - _Type_: Array of [Ipv4PrefixSpecification](./aws-properties-ec2-networkinterface-ipv4prefixspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-ipv4prefixes */
    Ipv4Prefixes?: Ipv4PrefixSpecification[]
    /**
     * - The number of IPv6 addresses to assign to the network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. To specify specific IPv6 addresses, use the `Ipv6Addresses` property and don't specify this property.
     * - When creating a network interface, you can't specify a count of IPv6 addresses if you've specified one of the following: specific IPv6 addresses, specific IPv6 prefixes, or a count of IPv6 prefixes.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-ipv6addresscount */
    Ipv6AddressCount?: number | Intrinsic
    /**
     * - The IPv6 addresses from the IPv6 CIDR block range of your subnet to assign to the network interface. If you're specifying a number of IPv6 addresses, use the `Ipv6AddressCount` property and don't specify this property.
     * - When creating a network interface, you can't specify IPv6 addresses if you've specified one of the following: a count of IPv6 addresses, specific IPv6 prefixes, or a count of IPv6 prefixes.
     * - _Required_: No
     * - _Type_: Array of [InstanceIpv6Address](./aws-properties-ec2-networkinterface-instanceipv6address.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-ipv6addresses */
    Ipv6Addresses?: InstanceIpv6Address[]
    /**
     * - The number of IPv6 prefixes to be automatically assigned to the network interface.
     * - When creating a network interface, you can't specify a count of IPv6 prefixes if you've specified one of the following: specific IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-ipv6prefixcount */
    Ipv6PrefixCount?: number | Intrinsic
    /**
     * - The IPv6 delegated prefixes that are assigned to the network interface.
     * - When creating a network interface, you can't specify IPv6 prefixes if you've specified one of the following: a count of IPv6 prefixes, specific IPv6 addresses, or a count of IPv6 addresses.
     * - _Required_: No
     * - _Type_: Array of [Ipv6PrefixSpecification](./aws-properties-ec2-networkinterface-ipv6prefixspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-ipv6prefixes */
    Ipv6Prefixes?: Ipv6PrefixSpecification[]
    /**
     * - The private IPv4 address to assign to the network interface as the primary private IP address. If you want to specify multiple private IP addresses, use the `PrivateIpAddresses` property.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-privateipaddress */
    PrivateIpAddress?: string | Intrinsic
    /**
     * - The private IPv4 addresses to assign to the network interface. You can specify a primary private IP address by setting the value of the `Primary` property to `true` in the `PrivateIpAddressSpecification` property. If you want EC2 to automatically assign private IP addresses, use the `SecondaryPrivateIpAddressCount` property and do not specify this property.
     * - When creating a network interface, you can't specify private IPv4 addresses if you've specified one of the following: a count of private IPv4 addresses, specific IPv4 prefixes, or a count of IPv4 prefixes.
     * - _Required_: No
     * - _Type_: Array of [PrivateIpAddressSpecification](./aws-properties-ec2-networkinterface-privateipaddressspecification.html)
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-privateipaddresses */
    PrivateIpAddresses?: PrivateIpAddressSpecification[]
    /**
     * - The number of secondary private IPv4 addresses to assign to a network interface. When you specify a number of secondary IPv4 addresses, Amazon EC2 selects these IP addresses within the subnet's IPv4 CIDR range. You can't specify this option and specify more than one private IP address using `privateIpAddresses`.
     * - When creating a Network Interface, you can't specify a count of private IPv4 addresses if you've specified one of the following: specific private IPv4 addresses, specific IPv4 prefixes, or a count of IPv4 prefixes.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-secondaryprivateipaddresscount */
    SecondaryPrivateIpAddressCount?: number | Intrinsic
    /**
     * - Enable or disable source/destination checks, which ensure that the instance is either the source or the destination of any traffic that it receives. If the value is `true`, source/destination checks are enabled; otherwise, they are disabled. The default value is `true`. You must disable source/destination checks if the instance runs services such as network address translation, routing, or firewalls.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-sourcedestcheck */
    SourceDestCheck?: boolean | Intrinsic
    /**
     * - The ID of the subnet to associate with the network interface.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-subnetid */
    SubnetId: string | Intrinsic
    /**
     * - The tags to apply to the network interface.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ec2-networkinterface-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#cfn-ec2-networkinterface-tags */
    Tags?: Tag[]
  }
}
