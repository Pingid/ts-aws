import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A complex type that contains information about a Resolver configuration for a VPC.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html */

export interface Route53ResolverResolverConfig extends ResourceAttributes {
  Type: 'AWS::Route53Resolver::ResolverConfig'
  Properties: {
    /**
     * - Represents the desired status of `AutodefinedReverse`. The only supported value on creation is `DISABLE`. Deletion of this resource will return `AutodefinedReverse` to its default value of `ENABLED`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `DISABLE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html#cfn-route53resolver-resolverconfig-autodefinedreverseflag */
    AutodefinedReverseFlag: string | Intrinsic
    /**
     * - The ID of the Amazon Virtual Private Cloud VPC that you're configuring Resolver for.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html#cfn-route53resolver-resolverconfig-resourceid */
    ResourceId: string | Intrinsic
  }
}
