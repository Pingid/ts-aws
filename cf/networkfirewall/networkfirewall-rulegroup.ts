import type { Intrinsic } from '../intrinsic/index.js' /**
 * A key:value pair associated with an AWS resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface Tag {
  /**
   * - The part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-tag-key */
  Key: string | Intrinsic
  /**
   * - The part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Minimum_: `0`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-tag-value */
  Value: string | Intrinsic
}

/**
 * Additional options governing how Network Firewall handles the rule group. You can only use these for stateful rule groups.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface StatefulRuleOptions {
  /**
   * - Indicates how to manage the order of the rule evaluation for the rule group. `DEFAULT_ACTION_ORDER` is the default behavior. Stateful rules are provided to the rule engine as Suricata compatible strings, and Suricata evaluates them based on certain settings. For more information, see [Evaluation order for stateful rules](https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html) in the _AWS Network Firewall Developer Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `DEFAULT_ACTION_ORDER | STRICT_ORDER`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-statefulruleoptions-ruleorder */
  RuleOrder?: string | Intrinsic
}

/**
 * Configures one or more [IPSetReferences](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-referencesets.html#cfn-networkfirewall-rulegroup-referencesets-ipsetreferences) for a Suricata-compatible rule group. An IP set reference is a rule variable that references a resource that you create and manage in another AWS service, such as an Amazon VPC prefix list. Network Firewall IP set references enable you to dynamically update the contents of your rules. When you create, update, or delete the IP set you are referencing in your rule, Network Firewall automatically updates the rule's content with the changes. For more information about IP set references in Network Firewall, see [Using IP set references](https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references.html) in the _Network Firewall Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface IPSetReference {
  /**
   * - The Amazon Resource Name (ARN) of the resource to include in the [AWS::NetworkFirewall::RuleGroup IPSetReference](./aws-properties-networkfirewall-rulegroup-ipsetreference.html).
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(arn:aws.*)$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-ipsetreference-referencearn */
  ReferenceArn?: string | Intrinsic
}

/**
 * Stateful inspection criteria for a domain list rule group.
 * For HTTPS traffic, domain filtering is SNI-based. It uses the server name indicator extension of the TLS handshake.
 * By default, Network Firewall domain list inspection only includes traffic coming from the VPC where you deploy the firewall. To inspect traffic from IP addresses outside of the deployment VPC, you set the `HOME_NET` rule variable to include the CIDR range of the deployment VPC plus the other CIDR ranges. For more information, see [AWS::NetworkFirewall::RuleGroup RuleVariables](./aws-properties-networkfirewall-rulegroup-rulevariables.html) in this guide and [Stateful domain list rule groups in AWS Network Firewall](https://docs.aws.amazon.com/network-firewall/latest/developerguide/stateful-rule-groups-domain-names.html) in the _Network Firewall Developer Guide_
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface RulesSourceList {
  /**
   * - Whether you want to allow or deny access to the domains in your target list.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ALLOWLIST | DENYLIST`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-rulessourcelist-generatedrulestype */
  GeneratedRulesType: string | Intrinsic
  /**
   * - The domains that you want to inspect for in your traffic flows. Valid domain specifications are the following:
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-rulessourcelist-targets */
  Targets: (string | Intrinsic)[]
  /**
   * - The types of targets to inspect for. Valid values are `TLS_SNI` and `HTTP_HOST`.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-rulessourcelist-targettypes */
  TargetTypes: (string | Intrinsic)[]
}

/**
 * A list of IP addresses and address ranges, in CIDR notation. This is part of a [AWS::NetworkFirewall::RuleGroup RuleVariables](./aws-properties-networkfirewall-rulegroup-rulevariables.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface IPSet {
  /**
   * - The list of IP addresses and address ranges, in CIDR notation.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-ipset-definition */
  Definition?: (string | Intrinsic)[]
}

/**
 * A set of port ranges for use in the rules in a rule group.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface PortSet {
  /**
   * - The set of port ranges.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-portset-definition */
  Definition?: (string | Intrinsic)[]
}

/**
 * The 5-tuple criteria for AWS Network Firewall to use to inspect packet headers in stateful traffic flow inspection. Traffic flows that match the criteria are a match for the corresponding stateful rule.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface Header {
  /**
   * - The destination IP address or address range to inspect for, in CIDR notation. To match with any address, specify `ANY`.
   * - Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation. Network Firewall supports all address ranges for IPv4 and IPv6.
   * - Examples:
   * - For more information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-header-destination */
  Destination: string | Intrinsic
  /**
   * - The destination port to inspect for. You can specify an individual port, for example `1994` and you can specify a port range, for example `1990:1994`. To match with any port, specify `ANY`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-header-destinationport */
  DestinationPort: string | Intrinsic
  /**
   * - The direction of traffic flow to inspect. If set to `ANY`, the inspection matches bidirectional traffic, both from the source to the destination and from the destination to the source. If set to `FORWARD`, the inspection only matches traffic going from the source to the destination.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `FORWARD | ANY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-header-direction */
  Direction: string | Intrinsic
  /**
   * - The protocol to inspect for. To specify all, you can use `IP`, because all traffic on AWS and on the internet is IP.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `IP | TCP | UDP | ICMP | HTTP | FTP | TLS | SMB | DNS | DCERPC | SSH | SMTP | IMAP | MSN | KRB5 | IKEV2 | TFTP | NTP | DHCP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-header-protocol */
  Protocol: string | Intrinsic
  /**
   * - The source IP address or address range to inspect for, in CIDR notation. To match with any address, specify `ANY`.
   * - Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation. Network Firewall supports all address ranges for IPv4 and IPv6.
   * - Examples:
   * - For more information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-header-source */
  Source: string | Intrinsic
  /**
   * - The source port to inspect for. You can specify an individual port, for example `1994` and you can specify a port range, for example `1990:1994`. To match with any port, specify `ANY`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-header-sourceport */
  SourcePort: string | Intrinsic
}

/**
 * Additional settings for a stateful rule.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface RuleOption {
  /**
   * - The Suricata rule option keywords. For Network Firewall, the keyword signature ID (sid) is required in the format `sid:112233`. The sid must be unique within the rule group. For information about Suricata rule option keywords, see [Rule options](https://suricata.readthedocs.io/en/suricata-6.0.9/rules/intro.html#rule-options).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-ruleoption-keyword */
  Keyword: string | Intrinsic
  /**
   * - The Suricata rule option settings. Settings have zero or more values, and the number of possible settings and required settings depends on the keyword. The format for Settings is `number`. For information about Suricata rule option settings, see [Rule options](https://suricata.readthedocs.io/en/suricata-6.0.9/rules/intro.html#rule-options).
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-ruleoption-settings */
  Settings?: (string | Intrinsic)[]
}

/**
 * The value to use in an Amazon CloudWatch custom metric dimension. This is used in the `PublishMetrics` custom action. A CloudWatch custom metric dimension is a name/value pair that's part of the identity of a metric.
 * AWS Network Firewall sets the dimension name to `CustomAction` and you provide the dimension value.
 * For more information about CloudWatch custom metric dimensions, see [Publishing Custom Metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#usingDimensions) in the [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface Dimension {
  /**
   * - The value to use in the custom metric dimension.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9-_ ]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-dimension-value */
  Value: string | Intrinsic
}

/**
 * A single port range specification. This is used for source and destination port ranges in the stateless [AWS::NetworkFirewall::RuleGroup MatchAttributes](./aws-properties-networkfirewall-rulegroup-matchattributes.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface PortRange {
  /**
   * - The lower limit of the port range. This must be less than or equal to the `ToPort` specification.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `65535`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-portrange-fromport */
  FromPort: number | Intrinsic
  /**
   * - The upper limit of the port range. This must be greater than or equal to the `FromPort` specification.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `65535`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-portrange-toport */
  ToPort: number | Intrinsic
}

/**
 * A single IP address specification. This is used in the [AWS::NetworkFirewall::RuleGroup MatchAttributes](./aws-properties-networkfirewall-rulegroup-matchattributes.html) source and destination specifications.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface Address {
  /**
   * - Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation. Network Firewall supports all address ranges for IPv4 and IPv6.
   * - Examples:
   * - For more information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([a-fA-F\d:\.]+/\d{1,3})$`
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-address-addressdefinition */
  AddressDefinition: string | Intrinsic
}

/**
 * TCP flags and masks to inspect packets for. This is used in the [AWS::NetworkFirewall::RuleGroup MatchAttributes](./aws-properties-networkfirewall-rulegroup-matchattributes.html) specification.
 * For example:
 * `"TCPFlags": [ { "Flags": [ "ECE", "SYN" ], "Masks": [ "SYN", "ECE" ] } ]`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface TCPFlagField {
  /**
   * - Used in conjunction with the `Masks` setting to define the flags that must be set and flags that must not be set in order for the packet to match. This setting can only specify values that are also specified in the `Masks` setting.
   * - For the flags that are specified in the masks setting, the following must be true for the packet to match:
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-tcpflagfield-flags */
  Flags: (string | Intrinsic)[]
  /**
   * - The set of flags to consider in the inspection. To inspect all flags in the valid values list, leave this with no setting.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-tcpflagfield-masks */
  Masks?: (string | Intrinsic)[]
}

/**
 * Configures the [ReferenceSets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulegroup.html#cfn-networkfirewall-rulegroup-rulegroup-referencesets) for a stateful rule group. For more information, see the [Using IP set references in Suricata compatible rule groups](https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references.html) in the _Network Firewall User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface ReferenceSets {
  /**
   * - The IP set references to use in the stateful rule group.
   * - _Required_: No
   * - _Type_: Object of [IPSetReference](./aws-properties-networkfirewall-rulegroup-ipsetreference.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-referencesets-ipsetreferences */
  IPSetReferences?: Record<string, IPSetReference>
}

/**
 * Settings that are available for use in the rules in the [AWS::NetworkFirewall::RuleGroup](./aws-resource-networkfirewall-rulegroup.html) where this is defined.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface RuleVariables {
  /**
   * - A list of IP addresses and address ranges, in CIDR notation.
   * - _Required_: No
   * - _Type_: Object of [IPSet](./aws-properties-networkfirewall-rulegroup-ipset.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-rulevariables-ipsets */
  IPSets?: Record<string, IPSet>
  /**
   * - A list of port ranges.
   * - _Required_: No
   * - _Type_: Object of [PortSet](./aws-properties-networkfirewall-rulegroup-portset.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-rulevariables-portsets */
  PortSets?: Record<string, PortSet>
}

/**
 * A single Suricata rules specification, for use in a stateful rule group. Use this option to specify a simple Suricata rule with protocol, source and destination, ports, direction, and rule options. For information about the Suricata `Rules` format, see [Rules Format](https://suricata.readthedocs.io/en/suricata-6.0.9/rules/intro.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface StatefulRule {
  /**
   * - Defines what Network Firewall should do with the packets in a traffic flow when the flow matches the stateful rule criteria. For all actions, Network Firewall performs the specified action and discontinues stateful inspection of the traffic flow.
   * - The actions for a stateful rule are defined as follows:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `PASS | DROP | ALERT | REJECT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-statefulrule-action */
  Action: string | Intrinsic
  /**
   * - The stateful inspection criteria for this rule, used to inspect traffic flows.
   * - _Required_: Yes
   * - _Type_: [Header](./aws-properties-networkfirewall-rulegroup-header.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-statefulrule-header */
  Header: Header
  /**
   * - Additional settings for a stateful rule, provided as keywords and settings.
   * - _Required_: Yes
   * - _Type_: Array of [RuleOption](./aws-properties-networkfirewall-rulegroup-ruleoption.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-statefulrule-ruleoptions */
  RuleOptions: RuleOption[]
}

/**
 * Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface PublishMetricAction {
  /**
   * -
   * - _Required_: Yes
   * - _Type_: Array of [Dimension](./aws-properties-networkfirewall-rulegroup-dimension.html)
   * - _Minimum_: `1`
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-publishmetricaction-dimensions */
  Dimensions: Dimension[]
}

/**
 * Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface MatchAttributes {
  /**
   * - The destination ports to inspect for. If not specified, this matches with any destination port. This setting is only used for protocols 6 (TCP) and 17 (UDP).
   * - You can specify individual ports, for example `1994` and you can specify port ranges, for example `1990:1994`.
   * - _Required_: No
   * - _Type_: Array of [PortRange](./aws-properties-networkfirewall-rulegroup-portrange.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-matchattributes-destinationports */
  DestinationPorts?: PortRange[]
  /**
   * - The destination IP addresses and address ranges to inspect for, in CIDR notation. If not specified, this matches with any destination address.
   * - _Required_: No
   * - _Type_: Array of [Address](./aws-properties-networkfirewall-rulegroup-address.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-matchattributes-destinations */
  Destinations?: Address[]
  /**
   * - The protocols to inspect for, specified using each protocol's assigned internet protocol number (IANA). If not specified, this matches with any protocol.
   * - _Required_: No
   * - _Type_: Array of Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-matchattributes-protocols */
  Protocols?: (number | Intrinsic)[]
  /**
   * - The source ports to inspect for. If not specified, this matches with any source port. This setting is only used for protocols 6 (TCP) and 17 (UDP).
   * - You can specify individual ports, for example `1994` and you can specify port ranges, for example `1990:1994`.
   * - _Required_: No
   * - _Type_: Array of [PortRange](./aws-properties-networkfirewall-rulegroup-portrange.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-matchattributes-sourceports */
  SourcePorts?: PortRange[]
  /**
   * - The source IP addresses and address ranges to inspect for, in CIDR notation. If not specified, this matches with any source address.
   * - _Required_: No
   * - _Type_: Array of [Address](./aws-properties-networkfirewall-rulegroup-address.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-matchattributes-sources */
  Sources?: Address[]
  /**
   * - The TCP flags and masks to inspect for. If not specified, this matches with any settings. This setting is only used for protocol 6 (TCP).
   * - _Required_: No
   * - _Type_: Array of [TCPFlagField](./aws-properties-networkfirewall-rulegroup-tcpflagfield.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-matchattributes-tcpflags */
  TCPFlags?: TCPFlagField[]
}

/**
 * A custom action to use in stateless rule actions settings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface ActionDefinition {
  /**
   * - Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published.
   * - You can pair this custom action with any of the standard stateless rule actions. For example, you could pair this in a rule action with the standard action that forwards the packet for stateful inspection. Then, when a packet matches the rule, Network Firewall publishes metrics for the packet and forwards it.
   * - _Required_: No
   * - _Type_: [PublishMetricAction](./aws-properties-networkfirewall-rulegroup-publishmetricaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-actiondefinition-publishmetricaction */
  PublishMetricAction?: PublishMetricAction
}

/**
 * The inspection criteria and action for a single stateless rule. AWS Network Firewall inspects each packet for the specified matching criteria. When a packet matches the criteria, Network Firewall performs the rule's actions on the packet.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface RuleDefinition {
  /**
   * - The actions to take on a packet that matches one of the stateless rule definition's match attributes. You must specify a standard action and you can add custom actions.
   * - For every rule, you must specify exactly one of the following standard actions.
   * - Additionally, you can specify a custom action. To do this, you define a custom action by name and type, then provide the name you've assigned to the action in this `Actions` setting.
   * - To provide more than one action in this setting, separate the settings with a comma. For example, if you have a publish metrics custom action that you've named `MyMetricsAction`, then you could specify the standard action `aws:pass` combined with the custom action using `[“aws:pass”, “MyMetricsAction”]`.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-ruledefinition-actions */
  Actions: (string | Intrinsic)[]
  /**
   * - Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection. Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags.
   * - _Required_: Yes
   * - _Type_: [MatchAttributes](./aws-properties-networkfirewall-rulegroup-matchattributes.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-ruledefinition-matchattributes */
  MatchAttributes: MatchAttributes
}

/**
 * An optional, non-standard action to use for stateless packet handling. You can define this in addition to the standard action that you must specify.
 * You define and name the custom actions that you want to be able to use, and then you reference them by name in your actions settings.
 * You can use custom actions in the following places:
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface CustomAction {
  /**
   * - The custom action associated with the action name.
   * - _Required_: Yes
   * - _Type_: [ActionDefinition](./aws-properties-networkfirewall-rulegroup-actiondefinition.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-customaction-actiondefinition */
  ActionDefinition: ActionDefinition
  /**
   * - The descriptive name of the custom action. You can't change the name of a custom action after you create it.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-customaction-actionname */
  ActionName: string | Intrinsic
}

/**
 * A single stateless rule. This is used in [AWS::NetworkFirewall::RuleGroup StatelessRulesAndCustomActions](./aws-properties-networkfirewall-rulegroup-statelessrulesandcustomactions.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface StatelessRule {
  /**
   * - Indicates the order in which to run this rule relative to all of the rules that are defined for a stateless rule group. Network Firewall evaluates the rules in a rule group starting with the lowest priority setting. You must ensure that the priority settings are unique for the rule group.
   * - Each stateless rule group uses exactly one `StatelessRulesAndCustomActions` object, and each `StatelessRulesAndCustomActions` contains exactly one `StatelessRules` object. To ensure unique priority settings for your rule groups, set unique priorities for the stateless rules that you define inside any single `StatelessRules` object.
   * - You can change the priority settings of your rules at any time. To make it easier to insert rules later, number them so there's a wide range in between, for example use 100, 200, and so on.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `65535`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-statelessrule-priority */
  Priority: number | Intrinsic
  /**
   * - Defines the stateless 5-tuple packet inspection criteria and the action to take on a packet that matches the criteria.
   * - _Required_: Yes
   * - _Type_: [RuleDefinition](./aws-properties-networkfirewall-rulegroup-ruledefinition.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-statelessrule-ruledefinition */
  RuleDefinition: RuleDefinition
}

/**
 * Stateless inspection criteria. Each stateless rule group uses exactly one of these data types to define its stateless rules.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface StatelessRulesAndCustomActions {
  /**
   * - Defines an array of individual custom action definitions that are available for use by the stateless rules in this `StatelessRulesAndCustomActions` specification. You name each custom action that you define, and then you can use it by name in your stateless rule [AWS::NetworkFirewall::RuleGroup RuleDefinition](./aws-properties-networkfirewall-rulegroup-ruledefinition.html) `Actions` specification.
   * - _Required_: No
   * - _Type_: Array of [CustomAction](./aws-properties-networkfirewall-rulegroup-customaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-statelessrulesandcustomactions-customactions */
  CustomActions?: CustomAction[]
  /**
   * - Defines the set of stateless rules for use in a stateless rule group.
   * - _Required_: Yes
   * - _Type_: Array of [StatelessRule](./aws-properties-networkfirewall-rulegroup-statelessrule.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-statelessrulesandcustomactions-statelessrules */
  StatelessRules: StatelessRule[]
}

/**
 * The stateless or stateful rules definitions for use in a single rule group. Each rule group requires a single `RulesSource`. You can use an instance of this for either stateless rules or stateful rules.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface RulesSource {
  /**
   * - Stateful inspection criteria for a domain list rule group.
   * - _Required_: No
   * - _Type_: [RulesSourceList](./aws-properties-networkfirewall-rulegroup-rulessourcelist.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-rulessource-rulessourcelist */
  RulesSourceList?: RulesSourceList
  /**
   * - Stateful inspection criteria, provided in Suricata compatible rules. Suricata is an open-source threat detection framework that includes a standard rule-based language for network traffic inspection.
   * - These rules contain the inspection criteria and the action to take for traffic that matches the criteria, so this type of rule group doesn't have a separate action setting.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `1000000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-rulessource-rulesstring */
  RulesString?: string | Intrinsic
  /**
   * - An array of individual stateful rules inspection criteria to be used together in a stateful rule group. Use this option to specify simple Suricata rules with protocol, source and destination, ports, direction, and rule options. For information about the Suricata `Rules` format, see [Rules Format](https://suricata.readthedocs.io/en/suricata-6.0.9/rules/intro.html).
   * - _Required_: No
   * - _Type_: Array of [StatefulRule](./aws-properties-networkfirewall-rulegroup-statefulrule.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-rulessource-statefulrules */
  StatefulRules?: StatefulRule[]
  /**
   * - Stateless inspection criteria to be used in a stateless rule group.
   * - _Required_: No
   * - _Type_: [StatelessRulesAndCustomActions](./aws-properties-networkfirewall-rulegroup-statelessrulesandcustomactions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-rulessource-statelessrulesandcustomactions */
  StatelessRulesAndCustomActions?: StatelessRulesAndCustomActions
}

/**
 * The object that defines the rules in a rule group.
 * AWS Network Firewall uses a rule group to inspect and control network traffic. You define stateless rule groups to inspect individual packets and you define stateful rule groups to inspect packets in the context of their traffic flow.
 * To use a rule group, you include it by reference in an Network Firewall firewall policy, then you use the policy in a firewall. You can reference a rule group from more than one firewall policy, and you can use a firewall policy in more than one firewall.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface RuleGroup {
  /**
   * - The reference sets for the stateful rule group.
   * - _Required_: No
   * - _Type_: [ReferenceSets](./aws-properties-networkfirewall-rulegroup-referencesets.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-rulegroup-referencesets */
  ReferenceSets?: ReferenceSets
  /**
   * - The stateful rules or stateless rules for the rule group.
   * - _Required_: Yes
   * - _Type_: [RulesSource](./aws-properties-networkfirewall-rulegroup-rulessource.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-rulegroup-rulessource */
  RulesSource: RulesSource
  /**
   * - Settings that are available for use in the rules in the rule group. You can only use these for stateful rule groups.
   * - _Required_: No
   * - _Type_: [RuleVariables](./aws-properties-networkfirewall-rulegroup-rulevariables.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-rulegroup-rulevariables */
  RuleVariables?: RuleVariables
  /**
   * - Additional options governing how Network Firewall handles stateful rules. The policies where you use your stateful rule group must have stateful rule options settings that are compatible with these settings. Some limitations apply; for more information, see [Strict evaluation order](https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-limitations-caveats.html) in the _AWS Network Firewall Developer Guide_.
   * - _Required_: No
   * - _Type_: [StatefulRuleOptions](./aws-properties-networkfirewall-rulegroup-statefulruleoptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-rulegroup-statefulruleoptions */
  StatefulRuleOptions?: StatefulRuleOptions
}

/**
 * Use the AWS::NetworkFirewall::RuleGroup to define a reusable collection of stateless or stateful network traffic filtering rules. You use rule groups in an [AWS::NetworkFirewall::FirewallPolicy](./aws-resource-networkfirewall-firewallpolicy.html) to specify the filtering behavior of an [AWS::NetworkFirewall::Firewall](./aws-resource-networkfirewall-firewall.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html */

export interface NetworkFirewallRuleGroup {
  Type: 'AWS::NetworkFirewall::RuleGroup'
  Properties: {
    /**
     * - The maximum operating resources that this rule group can use. You can't change a rule group's capacity setting after you create the rule group. When you update a rule group, you are limited to this capacity. When you reference a rule group from a firewall policy, Network Firewall reserves this capacity for the rule group.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-capacity */
    Capacity: number | Intrinsic
    /**
     * - A description of the rule group.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-description */
    Description?: string | Intrinsic
    /**
     * - An object that defines the rule group rules.
     * - _Required_: No
     * - _Type_: [RuleGroup](./aws-properties-networkfirewall-rulegroup-rulegroup.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-rulegroup */
    RuleGroup?: RuleGroup
    /**
     * - The descriptive name of the rule group. You can't change the name of a rule group after you create it.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-rulegroupname */
    RuleGroupName: string | Intrinsic
    /**
     * - An array of key-value pairs to apply to this resource.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-networkfirewall-rulegroup-tag.html)
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-tags */
    Tags?: Tag[]
    /**
     * - Indicates whether the rule group is stateless or stateful. If the rule group is stateless, it contains stateless rules. If it is stateful, it contains stateful rules.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `STATELESS | STATEFUL`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-type */
    Type: string | Intrinsic
  }
}
