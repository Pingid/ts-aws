import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * In a [CreateResolverEndpoint](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html) request, the IP address that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). `IpAddressRequest` also includes the ID of the subnet that contains the IP address.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html */

export interface IpAddressRequest {
  /**
   * - The IPv4 address that you want to use for DNS queries.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `7`
   * - _Maximum_: `36`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-ipaddressrequest-ip */
  Ip?: string | Intrinsic
  /**
   * - The IPv6 address that you want to use for DNS queries.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `7`
   * - _Maximum_: `39`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-ipaddressrequest-ipv6 */
  Ipv6?: string | Intrinsic
  /**
   * - The ID of the subnet that contains the IP address.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `32`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-ipaddressrequest-subnetid */
  SubnetId: string | Intrinsic
}

/**
 * One tag that you want to add to the specified resource. A tag consists of a `Key` (a name for the tag) and a `Value`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html */

export interface Tag {
  /**
   * - The name for the tag. For example, if you want to associate Resolver resources with the account IDs of your customers for billing purposes, the value of `Key` might be `account-id`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-tag-key */
  Key: string | Intrinsic
  /**
   * - The value for the tag. For example, if `Key` is `account-id`, then `Value` might be the ID of the customer account that you're creating the resource for.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-tag-value */
  Value: string | Intrinsic
}

/**
 * Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:
 * *   An _inbound Resolver endpoint_ forwards DNS queries to the DNS service for a VPC from your network.
 *
 * *   An _outbound Resolver endpoint_ forwards DNS queries from the DNS service for a VPC to your network.
 * ###### Important
 *
 * *   You cannot update `ResolverEndpointType` and `IpAddresses` in the same request.
 *
 * *   When you update a dual-stack IP address, you must update both IP addresses. You can’t update only an IPv4 or IPv6 and keep an existing IP address.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html */

export interface Route53ResolverResolverEndpoint extends ResourceAttributes {
  Type: 'AWS::Route53Resolver::ResolverEndpoint'
  Properties: {
    /**
     * - Indicates whether the Resolver endpoint allows inbound or outbound DNS queries:
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `INBOUND | OUTBOUND`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-direction */
    Direction: string | Intrinsic
    /**
     * - The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). The subnet ID uniquely identifies a VPC.
     * - _Required_: Yes
     * - _Type_: Array of [IpAddressRequest](./aws-properties-route53resolver-resolverendpoint-ipaddressrequest.html)
     * - _Minimum_: `2`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-ipaddresses */
    IpAddresses: IpAddressRequest[]
    /**
     * - A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `(?!^[0-9]+$)([a-zA-Z0-9\-_' ']+)`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-name */
    Name?: string | Intrinsic
    /**
     * - The ARN (Amazon Resource Name) for the Outpost.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost/op-[a-f0-9]{17}$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-outpostarn */
    OutpostArn?: string | Intrinsic
    /**
     * - The Amazon EC2 instance type.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-preferredinstancetype */
    PreferredInstanceType?: string | Intrinsic
    /**
     * - Protocols used for the endpoint. DoH-FIPS is applicable for inbound endpoints only.
     * - For an inbound endpoint you can apply the protocols as follows:
     * - For an outbound endpoint you can apply the protocols as follows:
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `2`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-protocols */
    Protocols?: (string | Intrinsic)[]
    /**
     * - The Resolver endpoint IP address type.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `IPV6 | IPV4 | DUALSTACK`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-resolverendpointtype */
    ResolverEndpointType?: string | Intrinsic
    /**
     * - The ID of one or more security groups that control access to this VPC. The security group must include one or more inbound rules (for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-securitygroupids */
    SecurityGroupIds: (string | Intrinsic)[]
    /**
     * - Route 53 Resolver doesn't support updating tags through CloudFormation.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-route53resolver-resolverendpoint-tag.html)
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-tags */
    Tags?: Tag[]
  }
}
