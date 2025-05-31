import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies the AWS account IDs and AWS Organizations organizational units (OUs) to include in or exclude from the policy. Specifying an OU is the equivalent of specifying all accounts in the OU and in any of its child OUs, including any child OUs and accounts that are added at a later time.
 * This is used for the policy's `IncludeMap` and `ExcludeMap`.
 * You can specify account IDs, OUs, or a combination:
 * *   Specify account IDs by setting the key to `ACCOUNT`. For example, the following is a valid map: `{“ACCOUNT” : [“accountID1”, “accountID2”]}`.
 *     
 * *   Specify OUs by setting the key to `ORGUNIT`. For example, the following is a valid map: `{“ORGUNIT” : [“ouid111”, “ouid112”]}`.
 *     
 * *   Specify accounts and OUs together in a single map, separated with a comma. For example, the following is a valid map: `{“ACCOUNT” : [“accountID1”, “accountID2”], “ORGUNIT” : [“ouid111”, “ouid112”]}`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html */

export interface IEMap {
    /**
     * - The account list for the map.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-iemap-account */
    "ACCOUNT"?: (string | Intrinsic)[];
    /**
     * - The organizational unit list for the map.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-iemap-orgunit */
    "ORGUNIT"?: (string | Intrinsic)[];
}

/**
 * The resource tags that AWS Firewall Manager uses to determine if a particular resource should be included or excluded from the AWS Firewall Manager policy. Tags enable you to categorize your AWS resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value. Firewall Manager combines the tags with "AND" so that, if you add more than one tag to a policy scope, a resource must have all the specified tags to be included or excluded. For more information, see [Working with Tag Editor](https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/tag-editor.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html */

export interface ResourceTag {
    /**
     * - The resource tag key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-resourcetag-key */
    "Key": string | Intrinsic;
    /**
     * - The resource tag value.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-resourcetag-value */
    "Value"?: string | Intrinsic;
}

/**
 * A collection of key:value pairs associated with an AWS resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html */

export interface PolicyTag {
    /**
     * - Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([^\s]*)$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-policytag-key */
    "Key": string | Intrinsic;
    /**
     * - Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([^\s]*)$`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-policytag-value */
    "Value": string | Intrinsic;
}

/**
 * Configures the deployment model for the third-party firewall.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html */

export interface ThirdPartyFirewallPolicy {
    /**
     * - Defines the deployment model to use for the third-party firewall policy.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `DISTRIBUTED | CENTRALIZED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-thirdpartyfirewallpolicy-firewalldeploymentmodel */
    "FirewallDeploymentModel": string | Intrinsic;
}

/**
 * Configures the firewall policy deployment model of AWS Network Firewall. For information about Network Firewall deployment models, see [AWS Network Firewall example architectures with routing](https://docs.aws.amazon.com/network-firewall/latest/developerguide/architectures.html) in the _Network Firewall Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html */

export interface NetworkFirewallPolicy {
    /**
     * - Defines the deployment model to use for the firewall policy. To use a distributed model, set [FirewallDeploymentModel](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-fms-policy-thirdpartyfirewallpolicy.html) to `DISTRIBUTED`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `DISTRIBUTED | CENTRALIZED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-networkfirewallpolicy-firewalldeploymentmodel */
    "FirewallDeploymentModel": string | Intrinsic;
}

/**
 * ICMP protocol: The ICMP type and code.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html */

export interface IcmpTypeCode {
    /**
     * - ICMP code.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-icmptypecode-code */
    "Code": number | Intrinsic;
    /**
     * - ICMP type.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-icmptypecode-type */
    "Type": number | Intrinsic;
}

/**
 * TCP or UDP protocols: The range of ports the rule applies to.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html */

export interface PortRange {
    /**
     * - The beginning port number of the range.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `65535`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-portrange-from */
    "From": number | Intrinsic;
    /**
     * - The ending port number of the range.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `65535`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-portrange-to */
    "To": number | Intrinsic;
}

/**
 * Describes a rule in a network ACL.
 * Each network ACL has a set of numbered ingress rules and a separate set of numbered egress rules. When determining whether a packet should be allowed in or out of a subnet associated with the network ACL, AWS processes the entries in the network ACL according to the rule numbers, in ascending order.
 * When you manage an individual network ACL, you explicitly specify the rule numbers. When you specify the network ACL rules in a Firewall Manager policy, you provide the rules to run first, in the order that you want them to run, and the rules to run last, in the order that you want them to run. Firewall Manager assigns the rule numbers for you when you save the network ACL policy specification.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html */

export interface NetworkAclEntry {
    /**
     * - The IPv4 network range to allow or deny, in CIDR notation.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-networkaclentry-cidrblock */
    "CidrBlock"?: string | Intrinsic;
    /**
     * - Indicates whether the rule is an egress, or outbound, rule (applied to traffic leaving the subnet). If it's not an egress rule, then it's an ingress, or inbound, rule.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-networkaclentry-egress */
    "Egress": boolean | Intrinsic;
    /**
     * - ICMP protocol: The ICMP type and code.
     * - _Required_: No
     * - _Type_: [IcmpTypeCode](./aws-properties-fms-policy-icmptypecode.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-networkaclentry-icmptypecode */
    "IcmpTypeCode"?: IcmpTypeCode;
    /**
     * - The IPv6 network range to allow or deny, in CIDR notation.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))(/(1[0-2]|[0-9]))?$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-networkaclentry-ipv6cidrblock */
    "Ipv6CidrBlock"?: string | Intrinsic;
    /**
     * - TCP or UDP protocols: The range of ports the rule applies to.
     * - _Required_: No
     * - _Type_: [PortRange](./aws-properties-fms-policy-portrange.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-networkaclentry-portrange */
    "PortRange"?: PortRange;
    /**
     * - The protocol number. A value of "-1" means all protocols.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(tcp|udp|icmp|-1|([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]))$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-networkaclentry-protocol */
    "Protocol": string | Intrinsic;
    /**
     * - Indicates whether to allow or deny the traffic that matches the rule.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `allow | deny`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-networkaclentry-ruleaction */
    "RuleAction": string | Intrinsic;
}

/**
 * The configuration of the first and last rules for the network ACL policy, and the remediation settings for each.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html */

export interface NetworkAclEntrySet {
    /**
     * - The rules that you want to run first in the Firewall Manager managed network ACLs.
     * - You must specify at least one first entry or one last entry in any network ACL policy.
     * - _Required_: No
     * - _Type_: Array of [NetworkAclEntry](./aws-properties-fms-policy-networkaclentry.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-networkaclentryset-firstentries */
    "FirstEntries"?: NetworkAclEntry[];
    /**
     * - Applies only when remediation is enabled for the policy as a whole. Firewall Manager uses this setting when it finds policy violations that involve conflicts between the custom entries and the policy entries.
     * - If forced remediation is disabled, Firewall Manager marks the network ACL as noncompliant and does not try to remediate. For more information about the remediation behavior, see [Remediation for managed network ACLs](https://docs.aws.amazon.com/waf/latest/developerguide/network-acl-policies.html#network-acls-remediation) in the _AWS Firewall Manager Developer Guide_.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-networkaclentryset-forceremediateforfirstentries */
    "ForceRemediateForFirstEntries": boolean | Intrinsic;
    /**
     * - Applies only when remediation is enabled for the policy as a whole. Firewall Manager uses this setting when it finds policy violations that involve conflicts between the custom entries and the policy entries.
     * - If forced remediation is disabled, Firewall Manager marks the network ACL as noncompliant and does not try to remediate. For more information about the remediation behavior, see [Remediation for managed network ACLs](https://docs.aws.amazon.com/waf/latest/developerguide/network-acl-policies.html#network-acls-remediation) in the _AWS Firewall Manager Developer Guide_.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-networkaclentryset-forceremediateforlastentries */
    "ForceRemediateForLastEntries": boolean | Intrinsic;
    /**
     * - The rules that you want to run last in the Firewall Manager managed network ACLs.
     * - You must specify at least one first entry or one last entry in any network ACL policy.
     * - _Required_: No
     * - _Type_: Array of [NetworkAclEntry](./aws-properties-fms-policy-networkaclentry.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-networkaclentryset-lastentries */
    "LastEntries"?: NetworkAclEntry[];
}

/**
 * Defines a Firewall Manager network ACL policy. This is used in the `PolicyOption` of a `SecurityServicePolicyData` for a `Policy`, when the `SecurityServicePolicyData` type is set to `NETWORK_ACL_COMMON`.
 * For information about network ACLs, see [Control traffic to subnets using network ACLs](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html) in the _Amazon Virtual Private Cloud User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html */

export interface NetworkAclCommonPolicy {
    /**
     * - The definition of the first and last rules for the network ACL policy.
     * - _Required_: Yes
     * - _Type_: [NetworkAclEntrySet](./aws-properties-fms-policy-networkaclentryset.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-networkaclcommonpolicy-networkaclentryset */
    "NetworkAclEntrySet": NetworkAclEntrySet;
}

/**
 * Contains the settings to configure a network ACL policy, a AWS Network Firewall firewall policy deployment model, or a third-party firewall policy.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html */

export interface PolicyOption {
    /**
     * - Defines a Firewall Manager network ACL policy.
     * - _Required_: No
     * - _Type_: [NetworkAclCommonPolicy](./aws-properties-fms-policy-networkaclcommonpolicy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-policyoption-networkaclcommonpolicy */
    "NetworkAclCommonPolicy"?: NetworkAclCommonPolicy;
    /**
     * - Defines the deployment model to use for the firewall policy.
     * - _Required_: No
     * - _Type_: [NetworkFirewallPolicy](./aws-properties-fms-policy-networkfirewallpolicy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-policyoption-networkfirewallpolicy */
    "NetworkFirewallPolicy"?: NetworkFirewallPolicy;
    /**
     * - Defines the policy options for a third-party firewall policy.
     * - _Required_: No
     * - _Type_: [ThirdPartyFirewallPolicy](./aws-properties-fms-policy-thirdpartyfirewallpolicy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-policyoption-thirdpartyfirewallpolicy */
    "ThirdPartyFirewallPolicy"?: ThirdPartyFirewallPolicy;
}

/**
 * Details about the security service that is being used to protect the resources.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html */

export interface SecurityServicePolicyData {
    /**
     * - Details about the service that are specific to the service type, in JSON format.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `30000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-securityservicepolicydata-managedservicedata */
    "ManagedServiceData"?: string | Intrinsic;
    /**
     * - Contains the settings to configure a network ACL policy, a AWS Network Firewall firewall policy deployment model, or a third-party firewall policy.
     * - _Required_: No
     * - _Type_: [PolicyOption](./aws-properties-fms-policy-policyoption.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-securityservicepolicydata-policyoption */
    "PolicyOption"?: PolicyOption;
    /**
     * - The service that the policy is using to protect the resources. This specifies the type of policy that is created, either an AWS WAF policy, a Shield Advanced policy, or a security group policy. For security group policies, Firewall Manager supports one security group for each common policy and for each content audit policy. This is an adjustable limit that you can increase by contacting AWS Support.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `WAF | WAFV2 | SHIELD_ADVANCED | SECURITY_GROUPS_COMMON | SECURITY_GROUPS_CONTENT_AUDIT | SECURITY_GROUPS_USAGE_AUDIT | NETWORK_FIREWALL | THIRD_PARTY_FIREWALL | DNS_FIREWALL | IMPORT_NETWORK_FIREWALL | NETWORK_ACL_COMMON`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-securityservicepolicydata-type */
    "Type": string | Intrinsic;
}

/**
 * An AWS Firewall Manager policy.
 * A Firewall Manager policy is specific to the individual policy type. If you want to enforce multiple policy types across accounts, you can create multiple policies. You can create more than one policy for each type.
 * If you add a new account to an organization that you created with AWS Organizations, Firewall Manager automatically applies the policy to the resources in that account that are within scope of the policy.
 * Policies require some setup to use. For more information, see the sections on prerequisites and getting started under [Firewall Manager prerequisites](https://docs.aws.amazon.com/waf/latest/developerguide/fms-prereq.html).
 * Firewall Manager provides the following types of policies:
 * *   **AWS WAF policy** - This policy applies AWS WAF web ACL protections to specified accounts and resources.
 *     
 * *   **Shield Advanced policy** - This policy applies Shield Advanced protection to specified accounts and resources.
 *     
 * *   **Security Groups policy** - This type of policy gives you control over security groups that are in use throughout your organization in AWS Organizations and lets you enforce a baseline set of rules across your organization.
 *     
 * *   **Network ACL policy** - This type of policy gives you control over the network ACLs that are in use throughout your organization in AWS Organizations and lets you enforce a baseline set of first and last network ACL rules across your organization.
 *     
 * *   **Network Firewall policy** - This policy applies Network Firewall protection to your organization's VPCs.
 *     
 * *   **DNS Firewall policy** - This policy applies Amazon Route 53 Resolver DNS Firewall protections to your organization's VPCs.
 *     
 * *   **Third-party firewall policy** - This policy applies third-party firewall protections. Third-party firewalls are available by subscription through the AWS Marketplace console at [AWS Marketplace](https://aws.amazon.com/marketplace).
 *     
 *     *   **Palo Alto Networks Cloud NGFW policy** - This policy applies Palo Alto Networks Cloud Next Generation Firewall (NGFW) protections and Palo Alto Networks Cloud NGFW rulestacks to your organization's VPCs.
 *         
 *     *   **Fortigate CNF policy** - This policy applies Fortigate Cloud Native Firewall (CNF) protections. Fortigate CNF is a cloud-centered solution that blocks Zero-Day threats and secures cloud infrastructures with industry-leading advanced threat prevention, smart web application firewalls (WAF), and API protection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html */

export interface FMSPolicy extends ResourceAttributes {
    "Type": "AWS::FMS::Policy";
    "Properties": {
        /**
         * - Used when deleting a policy. If `true`, Firewall Manager performs cleanup according to the policy type.
         * - For AWS WAF and Shield Advanced policies, Firewall Manager does the following:
         * - For security group policies, Firewall Manager does the following for each security group in the policy:
         * - After the cleanup, in-scope resources are no longer protected by web ACLs in this policy. Protection of out-of-scope resources remains unchanged. Scope is determined by tags that you create and accounts that you associate with the policy. When creating the policy, if you specify that only resources in specific accounts or with specific tags are in scope of the policy, those accounts and resources are handled by the policy. All others are out of scope. If you don't specify tags or accounts, all resources are in scope.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-deleteallpolicyresources */
        "DeleteAllPolicyResources"?: boolean | Intrinsic;
        /**
         * - Specifies the AWS account IDs and AWS Organizations organizational units (OUs) to exclude from the policy. Specifying an OU is the equivalent of specifying all accounts in the OU and in any of its child OUs, including any child OUs and accounts that are added at a later time.
         * - You can specify inclusions or exclusions, but not both. If you specify an `IncludeMap`, AWS Firewall Manager applies the policy to all accounts specified by the `IncludeMap`, and does not evaluate any `ExcludeMap` specifications. If you do not specify an `IncludeMap`, then Firewall Manager applies the policy to all accounts except for those specified by the `ExcludeMap`.
         * - You can specify account IDs, OUs, or a combination:
         * - _Required_: No
         * - _Type_: [IEMap](./aws-properties-fms-policy-iemap.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-excludemap */
        "ExcludeMap"?: IEMap;
        /**
         * - Used only when tags are specified in the `ResourceTags` property. If this property is `True`, resources with the specified tags are not in scope of the policy. If it's `False`, only resources with the specified tags are in scope of the policy.
         * - _Required_: Yes
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-excluderesourcetags */
        "ExcludeResourceTags": boolean | Intrinsic;
        /**
         * - Specifies the AWS account IDs and AWS Organizations organizational units (OUs) to include in the policy. Specifying an OU is the equivalent of specifying all accounts in the OU and in any of its child OUs, including any child OUs and accounts that are added at a later time.
         * - You can specify inclusions or exclusions, but not both. If you specify an `IncludeMap`, AWS Firewall Manager applies the policy to all accounts specified by the `IncludeMap`, and does not evaluate any `ExcludeMap` specifications. If you do not specify an `IncludeMap`, then Firewall Manager applies the policy to all accounts except for those specified by the `ExcludeMap`.
         * - You can specify account IDs, OUs, or a combination:
         * - _Required_: No
         * - _Type_: [IEMap](./aws-properties-fms-policy-iemap.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-includemap */
        "IncludeMap"?: IEMap;
        /**
         * - Your description of the AWS Firewall Manager policy.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^([a-zA-Z0-9_.:/=+\-@\s]+)$`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-policydescription */
        "PolicyDescription"?: string | Intrinsic;
        /**
         * - The name of the AWS Firewall Manager policy.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^([a-zA-Z0-9_.:/=+\-@\s]+)$`
         * - _Minimum_: `1`
         * - _Maximum_: `1024`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-policyname */
        "PolicyName": string | Intrinsic;
        /**
         * - Indicates if the policy should be automatically applied to new resources.
         * - _Required_: Yes
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-remediationenabled */
        "RemediationEnabled": boolean | Intrinsic;
        /**
         * - Indicates whether AWS Firewall Manager should automatically remove protections from resources that leave the policy scope and clean up resources that Firewall Manager is managing for accounts when those accounts leave policy scope. For example, Firewall Manager will disassociate a Firewall Manager managed web ACL from a protected customer resource when the customer resource leaves policy scope.
         * - By default, Firewall Manager doesn't remove protections or delete Firewall Manager managed resources.
         * - This option is not available for Shield Advanced or AWS WAF Classic policies.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-resourcescleanup */
        "ResourcesCleanUp"?: boolean | Intrinsic;
        /**
         * - The unique identifiers of the resource sets used by the policy.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-resourcesetids */
        "ResourceSetIds"?: (string | Intrinsic)[];
        /**
         * - Specifies whether to combine multiple resource tags with AND, so that a resource must have all tags to be included or excluded, or OR, so that a resource must have at least one tag.
         * - Default: `AND`
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `AND | OR`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-resourcetaglogicaloperator */
        "ResourceTagLogicalOperator"?: string | Intrinsic;
        /**
         * - An array of `ResourceTag` objects, used to explicitly include resources in the policy scope or explicitly exclude them. If this isn't set, then tags aren't used to modify policy scope. See also `ExcludeResourceTags`.
         * - _Required_: No
         * - _Type_: Array of [ResourceTag](./aws-properties-fms-policy-resourcetag.html)
         * - _Maximum_: `8`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-resourcetags */
        "ResourceTags"?: ResourceTag[];
        /**
         * - The type of resource protected by or in scope of the policy. This is in the format shown in the [AWS Resource Types Reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html). To apply this policy to multiple resource types, specify a resource type of `ResourceTypeList` and then specify the resource types in a `ResourceTypeList`.
         * - The following are valid resource types for each Firewall Manager policy type:
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^([^\s]*)$`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-resourcetype */
        "ResourceType"?: string | Intrinsic;
        /**
         * - An array of `ResourceType` objects. Use this only to specify multiple resource types. To specify a single resource type, use `ResourceType`.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-resourcetypelist */
        "ResourceTypeList"?: (string | Intrinsic)[];
        /**
         * - Details about the security service that is being used to protect the resources.
         * - This contains the following settings:
         * - _Required_: Yes
         * - _Type_: [SecurityServicePolicyData](./aws-properties-fms-policy-securityservicepolicydata.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-securityservicepolicydata */
        "SecurityServicePolicyData": SecurityServicePolicyData;
        /**
         * - A collection of key:value pairs associated with an AWS resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.
         * - _Required_: No
         * - _Type_: Array of [PolicyTag](./aws-properties-fms-policy-policytag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-policy.html#cfn-fms-policy-tags */
        "Tags"?: PolicyTag[];
    };
}