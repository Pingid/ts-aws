import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Adds the specified outbound (egress) rule to a security group.
 * An outbound rule permits instances to send traffic to the specified IPv4 or IPv6 address range, the IP address ranges that are specified by a prefix list, or the instances that are associated with a destination security group. For more information, see [Security group rules](https://docs.aws.amazon.com/vpc/latest/userguide/security-group-rules.html).
 * You must specify exactly one of the following destinations: an IPv4 address range, an IPv6 address range, a prefix list, or a security group.
 * You must specify a protocol for each rule (for example, TCP). If the protocol is TCP or UDP, you must also specify a port or port range. If the protocol is ICMP or ICMPv6, you must also specify the ICMP/ICMPv6 type and code.
 * Rule changes are propagated to instances associated with the security group as quickly as possible. However, a small delay might occur.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html */

export interface Egress {
  /**
   * - The IPv4 address range, in CIDR format.
   * - You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.
   * - For examples of rules that you can add to security groups for specific access scenarios, see [Security group rules for different use cases](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html) in the _Amazon EC2 User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-egress-cidrip */
  CidrIp?: string | Intrinsic
  /**
   * - The IPv6 address range, in CIDR format.
   * - You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.
   * - For examples of rules that you can add to security groups for specific access scenarios, see [Security group rules for different use cases](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html) in the _Amazon EC2 User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-egress-cidripv6 */
  CidrIpv6?: string | Intrinsic
  /**
   * - A description for the security group rule.
   * - Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9, spaces, and .\_-:/()#,@\[\]+=;{}!$\*
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-egress-description */
  Description?: string | Intrinsic
  /**
   * - The prefix list IDs for the destination AWS service. This is the AWS service that you want to access through a VPC endpoint from instances associated with the security group.
   * - You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-egress-destinationprefixlistid */
  DestinationPrefixListId?: string | Intrinsic
  /**
   * - The ID of the destination VPC security group.
   * - You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-egress-destinationsecuritygroupid */
  DestinationSecurityGroupId?: string | Intrinsic
  /**
   * - If the protocol is TCP or UDP, this is the start of the port range. If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types).
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-egress-fromport */
  FromPort?: number | Intrinsic
  /**
   * - The IP protocol name (`tcp`, `udp`, `icmp`, `icmpv6`) or number (see [Protocol Numbers](http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)).
   * - Use `-1` to specify all protocols. When authorizing security group rules, specifying `-1` or a protocol number other than `tcp`, `udp`, `icmp`, or `icmpv6` allows traffic on all ports, regardless of any port range you specify. For `tcp`, `udp`, and `icmp`, you must specify a port range. For `icmpv6`, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-egress-ipprotocol */
  IpProtocol: string | Intrinsic
  /**
   * - If the protocol is TCP or UDP, this is the end of the port range. If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes). If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes).
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-egress-toport */
  ToPort?: number | Intrinsic
}

/**
 * Adds an inbound (ingress) rule to a security group.
 * An inbound rule permits instances to receive traffic from the specified IPv4 or IPv6 address range, the IP address ranges that are specified by a prefix list, or the instances that are associated with a source security group. For more information, see [Security group rules](https://docs.aws.amazon.com/vpc/latest/userguide/security-group-rules.html).
 * You must specify exactly one of the following sources: an IPv4 address range, an IPv6 address range, a prefix list, or a security group.
 * You must specify a protocol for each rule (for example, TCP). If the protocol is TCP or UDP, you must also specify a port or port range. If the protocol is ICMP or ICMPv6, you must also specify the ICMP/ICMPv6 type and code.
 * Rule changes are propagated to instances associated with the security group as quickly as possible. However, a small delay might occur.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html */

export interface Ingress {
  /**
   * - The IPv4 address range, in CIDR format.
   * - You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `SourcePrefixListId`, or `SourceSecurityGroupId`.
   * - For examples of rules that you can add to security groups for specific access scenarios, see [Security group rules for different use cases](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html) in the _Amazon EC2 User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-ingress-cidrip */
  CidrIp?: string | Intrinsic
  /**
   * - The IPv6 address range, in CIDR format.
   * - You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `SourcePrefixListId`, or `SourceSecurityGroupId`.
   * - For examples of rules that you can add to security groups for specific access scenarios, see [Security group rules for different use cases](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html) in the _Amazon EC2 User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-ingress-cidripv6 */
  CidrIpv6?: string | Intrinsic
  /**
   * - Updates the description of an ingress (inbound) security group rule. You can replace an existing description, or add a description to a rule that did not have one previously.
   * - Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9, spaces, and .\_-:/()#,@\[\]+=;{}!$\*
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-ingress-description */
  Description?: string | Intrinsic
  /**
   * - If the protocol is TCP or UDP, this is the start of the port range. If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types).
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-ingress-fromport */
  FromPort?: number | Intrinsic
  /**
   * - The IP protocol name (`tcp`, `udp`, `icmp`, `icmpv6`) or number (see [Protocol Numbers](http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)).
   * - Use `-1` to specify all protocols. When authorizing security group rules, specifying `-1` or a protocol number other than `tcp`, `udp`, `icmp`, or `icmpv6` allows traffic on all ports, regardless of any port range you specify. For `tcp`, `udp`, and `icmp`, you must specify a port range. For `icmpv6`, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-ingress-ipprotocol */
  IpProtocol: string | Intrinsic
  /**
   * - The ID of a prefix list.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-ingress-sourceprefixlistid */
  SourcePrefixListId?: string | Intrinsic
  /**
   * - The ID of the security group.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-ingress-sourcesecuritygroupid */
  SourceSecurityGroupId?: string | Intrinsic
  /**
   * - \[Default VPC\] The name of the source security group. You must specify either the security group ID or the security group name. You can't specify the group name in combination with an IP address range. Creates rules that grant full ICMP, UDP, and TCP access.
   * - For security groups in a nondefault VPC, you must specify the group ID.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-ingress-sourcesecuritygroupname */
  SourceSecurityGroupName?: string | Intrinsic
  /**
   * - \[nondefault VPC\] The AWS account ID for the source security group, if the source security group is in a different account. You can't specify this property with an IP address range. Creates rules that grant full ICMP, UDP, and TCP access.
   * - If you specify `SourceSecurityGroupName` or `SourceSecurityGroupId` and that security group is owned by a different account than the account creating the stack, you must specify the `SourceSecurityGroupOwnerId`; otherwise, this property is optional.
   * - _Required_: Conditional
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-ingress-sourcesecuritygroupownerid */
  SourceSecurityGroupOwnerId?: string | Intrinsic
  /**
   * - If the protocol is TCP or UDP, this is the end of the port range. If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes). If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes).
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-ingress-toport */
  ToPort?: number | Intrinsic
}

/**
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html */

export interface Tag {
  /**
   * - The tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-tag-value */
  Value: string | Intrinsic
}

/**
 * Specifies a security group. To create a security group, use the [VpcId](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group.html#cfn-ec2-securitygroup-vpcid) property to specify the VPC for which to create the security group.
 * If you do not specify an egress rule, we add egress rules that allow IPv4 and IPv6 traffic on all ports and protocols to any destination. We do not add these rules if you specify your own egress rules.
 * This type supports updates. For more information about updating stacks, see [AWS CloudFormation Stacks Updates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html).
 * ###### Important
 *
 * To cross-reference two security groups in the ingress and egress rules of those security groups, use the [AWS::EC2::SecurityGroupEgress](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-security-group-egress.html) and [AWS::EC2::SecurityGroupIngress](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-security-group-ingress.html) resources to define your rules. Do not use the embedded ingress and egress rules in the `AWS::EC2::SecurityGroup`. Doing so creates a circular dependency, which AWS CloudFormation doesn't allow.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html */

export interface EC2SecurityGroup extends ResourceAttributes {
  Type: 'AWS::EC2::SecurityGroup'
  Properties: {
    /**
     * - A description for the security group.
     * - Constraints: Up to 255 characters in length
     * - Valid characters: a-z, A-Z, 0-9, spaces, and .\_-:/()#,@\[\]+=&;{}!$\*
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-groupdescription */
    GroupDescription: string | Intrinsic
    /**
     * - The name of the security group.
     * - Constraints: Up to 255 characters in length. Cannot start with `sg-`.
     * - Valid characters: a-z, A-Z, 0-9, spaces, and .\_-:/()#,@\[\]+=&;{}!$\*
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-groupname */
    GroupName?: string | Intrinsic
    /**
     * - The outbound rules associated with the security group. There is a short interruption during which you cannot connect to the security group.
     * - _Required_: No
     * - _Type_: Array of [Egress](./aws-properties-ec2-securitygroup-egress.html)
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-securitygroupegress */
    SecurityGroupEgress?: Egress[]
    /**
     * - The inbound rules associated with the security group. There is a short interruption during which you cannot connect to the security group.
     * - _Required_: No
     * - _Type_: Array of [Ingress](./aws-properties-ec2-securitygroup-ingress.html)
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-securitygroupingress */
    SecurityGroupIngress?: Ingress[]
    /**
     * - Any tags assigned to the security group.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ec2-securitygroup-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-tags */
    Tags?: Tag[]
    /**
     * - The ID of the VPC for the security group. If you do not specify a VPC, the default is to use the default VPC for the Region. If there's no specified VPC and no default VPC, security group creation fails.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroup.html#cfn-ec2-securitygroup-vpcid */
    VpcId?: string | Intrinsic
  }
}
