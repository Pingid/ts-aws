import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The options for the transit gateway multicast domain.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html */

export interface Options {
  /**
   * - Indicates whether to automatically accept cross-account subnet associations that are associated with the transit gateway multicast domain.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `enable | disable`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html#cfn-ec2-transitgatewaymulticastdomain-options-autoacceptsharedassociations */
  AutoAcceptSharedAssociations?: string | Intrinsic
  /**
   * - Specify whether to enable Internet Group Management Protocol (IGMP) version 2 for the transit gateway multicast domain.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `enable | disable`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html#cfn-ec2-transitgatewaymulticastdomain-options-igmpv2support */
  Igmpv2Support?: string | Intrinsic
  /**
   * - Specify whether to enable support for statically configuring multicast group sources for a domain.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `enable | disable`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html#cfn-ec2-transitgatewaymulticastdomain-options-staticsourcessupport */
  StaticSourcesSupport?: string | Intrinsic
}

/**
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html */

export interface Tag {
  /**
   * - The tag key.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html#cfn-ec2-transitgatewaymulticastdomain-tag-key */
  Key?: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html#cfn-ec2-transitgatewaymulticastdomain-tag-value */
  Value?: string | Intrinsic
}

/**
 * Creates a multicast domain using the specified transit gateway.
 * The transit gateway must be in the available state before you create a domain.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html */

export interface EC2TransitGatewayMulticastDomain extends ResourceAttributes {
  Type: 'AWS::EC2::TransitGatewayMulticastDomain'
  Properties: {
    /**
     * - The options for the transit gateway multicast domain.
     * - _Required_: No
     * - _Type_: [Options](./aws-properties-ec2-transitgatewaymulticastdomain-options.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html#cfn-ec2-transitgatewaymulticastdomain-options */
    Options?: Options
    /**
     * - The tags for the transit gateway multicast domain.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ec2-transitgatewaymulticastdomain-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html#cfn-ec2-transitgatewaymulticastdomain-tags */
    Tags?: Tag[]
    /**
     * - The ID of the transit gateway.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html#cfn-ec2-transitgatewaymulticastdomain-transitgatewayid */
    TransitGatewayId: string | Intrinsic
  }
}
