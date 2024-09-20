import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies an attribute for an Application Load Balancer, a Network Load Balancer, or a Gateway Load Balancer.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html */

export interface LoadBalancerAttribute {
  /**
   * - The name of the attribute.
   * - The following attributes are supported by all load balancers:
   * - The following attributes are supported by both Application Load Balancers and Network Load Balancers:
   * - The following attributes are supported by only Application Load Balancers:
   * - The following attributes are supported by only Network Load Balancers:
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9._]+$`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-loadbalancerattribute-key */
  Key?: string | Intrinsic
  /**
   * - The value of the attribute.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-loadbalancerattribute-value */
  Value?: string | Intrinsic
}

/**
 * Specifies a subnet for a load balancer.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html */

export interface SubnetMapping {
  /**
   * - \[Network Load Balancers\] The allocation ID of the Elastic IP address for an internet-facing load balancer.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-subnetmapping-allocationid */
  AllocationId?: string | Intrinsic
  /**
   * - \[Network Load Balancers\] The IPv6 address.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-subnetmapping-ipv6address */
  IPv6Address?: string | Intrinsic
  /**
   * - \[Network Load Balancers\] The private IPv4 address for an internal load balancer.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-subnetmapping-privateipv4address */
  PrivateIPv4Address?: string | Intrinsic
  /**
   * - The ID of the subnet.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-subnetmapping-subnetid */
  SubnetId: string | Intrinsic
}

/**
 * Information about a tag.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html */

export interface Tag {
  /**
   * - The key of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the tag.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-tag-value */
  Value?: string | Intrinsic
}

/**
 * Specifies an Application Load Balancer, a Network Load Balancer, or a Gateway Load Balancer.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html */

export interface ElasticLoadBalancingV2LoadBalancer extends ResourceAttributes {
  Type: 'AWS::ElasticLoadBalancingV2::LoadBalancer'
  Properties: {
    /**
     * - Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through AWS PrivateLink.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-enforcesecuritygroupinboundrulesonprivatelinktraffic */
    EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: string | Intrinsic
    /**
     * - Note: Internal load balancers must use the `ipv4` IP address type.
     * - \[Application Load Balancers\] The IP address type. The possible values are `ipv4` (for only IPv4 addresses), `dualstack` (for IPv4 and IPv6 addresses), and `dualstack-without-public-ipv4` (for IPv6 only public addresses, with private IPv4 and IPv6 addresses).
     * - Note: Application Load Balancer authentication only supports IPv4 addresses when connecting to an Identity Provider (IdP) or Amazon Cognito endpoint. Without a public IPv4 address the load balancer cannot complete the authentication process, resulting in HTTP 500 errors.
     * - \[Network Load Balancers\] The IP address type. The possible values are `ipv4` (for only IPv4 addresses) and `dualstack` (for IPv4 and IPv6 addresses). You can’t specify `dualstack` for a load balancer with a UDP or TCP\_UDP listener.
     * - \[Gateway Load Balancers\] The IP address type. The possible values are `ipv4` (for only IPv4 addresses) and `dualstack` (for IPv4 and IPv6 addresses).
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ipv4 | dualstack | dualstack-without-public-ipv4`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-ipaddresstype */
    IpAddressType?: string | Intrinsic
    /**
     * - The load balancer attributes.
     * - _Required_: No
     * - _Type_: Array of [LoadBalancerAttribute](./aws-properties-elasticloadbalancingv2-loadbalancer-loadbalancerattribute.html)
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-loadbalancerattributes */
    LoadBalancerAttributes?: LoadBalancerAttribute[]
    /**
     * - The name of the load balancer. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with "internal-".
     * - If you don't specify a name, AWS CloudFormation generates a unique physical ID for the load balancer. If you specify a name, you cannot perform updates that require replacement of this resource, but you can perform other updates. To replace the resource, specify a new name.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-name */
    Name?: string | Intrinsic
    /**
     * - The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.
     * - The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.
     * - The default is an Internet-facing load balancer.
     * - You cannot specify a scheme for a Gateway Load Balancer.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `internet-facing | internal`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-scheme */
    Scheme?: string | Intrinsic
    /**
     * - \[Application Load Balancers and Network Load Balancers\] The IDs of the security groups for the load balancer.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-securitygroups */
    SecurityGroups?: (string | Intrinsic)[]
    /**
     * - The IDs of the subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both.
     * - \[Application Load Balancers\] You must specify subnets from at least two Availability Zones. You cannot specify Elastic IP addresses for your subnets.
     * - \[Application Load Balancers on Outposts\] You must specify one Outpost subnet.
     * - \[Application Load Balancers on Local Zones\] You can specify subnets from one or more Local Zones.
     * - \[Network Load Balancers\] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.
     * - \[Gateway Load Balancers\] You can specify subnets from one or more Availability Zones. You cannot specify Elastic IP addresses for your subnets.
     * - _Required_: Conditional
     * - _Type_: Array of [SubnetMapping](./aws-properties-elasticloadbalancingv2-loadbalancer-subnetmapping.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-subnetmappings */
    SubnetMappings?: SubnetMapping[]
    /**
     * - The IDs of the subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets.
     * - \[Application Load Balancers\] You must specify subnets from at least two Availability Zones.
     * - \[Application Load Balancers on Outposts\] You must specify one Outpost subnet.
     * - \[Application Load Balancers on Local Zones\] You can specify subnets from one or more Local Zones.
     * - \[Network Load Balancers\] You can specify subnets from one or more Availability Zones.
     * - \[Gateway Load Balancers\] You can specify subnets from one or more Availability Zones.
     * - _Required_: Conditional
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-subnets */
    Subnets?: (string | Intrinsic)[]
    /**
     * - The tags to assign to the load balancer.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-elasticloadbalancingv2-loadbalancer-tag.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-tags */
    Tags?: Tag[]
    /**
     * - The type of load balancer. The default is `application`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `application | network | gateway`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#cfn-elasticloadbalancingv2-loadbalancer-type */
    Type?: string | Intrinsic
  }
}
