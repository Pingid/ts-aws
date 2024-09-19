import type { Intrinsic } from '../intrinsic/index.js' /**
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ipset.html */

export interface IPSetDescriptor {
  /**
   * - Specify `IPV4` or `IPV6`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `IPV4 | IPV6`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ipset.html#cfn-wafregional-ipset-ipsetdescriptor-type */
  Type: string | Intrinsic
  /**
   * - Specify an IPv4 address by using CIDR notation. For example:
   * - For more information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).
   * - Specify an IPv6 address by using CIDR notation. For example:
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ipset.html#cfn-wafregional-ipset-ipsetdescriptor-value */
  Value: string | Intrinsic
}

/**
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ipset.html */

export interface WAFRegionalIPSet {
  Type: 'AWS::WAFRegional::IPSet'
  Properties: {
    /**
     * - The IP address type (`IPV4` or `IPV6`) and the IP address range (in CIDR notation) that web requests originate from.
     * - _Required_: No
     * - _Type_: Array of [IPSetDescriptor](./aws-properties-wafregional-ipset-ipsetdescriptor.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ipset.html#cfn-wafregional-ipset-ipsetdescriptors */
    IPSetDescriptors?: IPSetDescriptor[]
    /**
     * - A friendly name or description of the `IPSet`. You can't change the name of an `IPSet` after you create it.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.*\S.*`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ipset.html#cfn-wafregional-ipset-name */
    Name: string | Intrinsic
  }
}
