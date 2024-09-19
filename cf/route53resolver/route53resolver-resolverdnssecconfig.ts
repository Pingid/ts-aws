import type { Intrinsic } from '../intrinsic/index.js' /**
 * The `AWS::Route53Resolver::ResolverDNSSECConfig` resource is a complex type that contains information about a configuration for DNSSEC validation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverdnssecconfig.html */

export interface Route53ResolverResolverDNSSECConfig {
  Type: 'AWS::Route53Resolver::ResolverDNSSECConfig'
  Properties: {
    /**
     * - The ID of the virtual private cloud (VPC) that you're configuring the DNSSEC validation status for.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverdnssecconfig.html#cfn-route53resolver-resolverdnssecconfig-resourceid */
    ResourceId?: string | Intrinsic
  }
}
