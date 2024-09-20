import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html */

export interface Tag {
  /**
   * - The tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-tag-value */
  Value?: string | Intrinsic
}

/**
 * Describes a port range.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html */

export interface FilterPortRange {
  /**
   * - The first port in the range.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `65535`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-filterportrange-fromport */
  FromPort?: number | Intrinsic
  /**
   * - The last port in the range.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `65535`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-filterportrange-toport */
  ToPort?: number | Intrinsic
}

/**
 * Describes a set of filters for a path analysis. Use path filters to scope the analysis when there can be multiple resulting paths.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html */

export interface PathFilter {
  /**
   * - The destination IPv4 address.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^([0-9]{1,3}.){3}[0-9]{1,3}$`
   * - _Minimum_: `0`
   * - _Maximum_: `15`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-pathfilter-destinationaddress */
  DestinationAddress?: string | Intrinsic
  /**
   * - The destination port range.
   * - _Required_: No
   * - _Type_: [FilterPortRange](./aws-properties-ec2-networkinsightspath-filterportrange.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-pathfilter-destinationportrange */
  DestinationPortRange?: FilterPortRange
  /**
   * - The source IPv4 address.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^([0-9]{1,3}.){3}[0-9]{1,3}$`
   * - _Minimum_: `0`
   * - _Maximum_: `15`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-pathfilter-sourceaddress */
  SourceAddress?: string | Intrinsic
  /**
   * - The source port range.
   * - _Required_: No
   * - _Type_: [FilterPortRange](./aws-properties-ec2-networkinsightspath-filterportrange.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-pathfilter-sourceportrange */
  SourcePortRange?: FilterPortRange
}

/**
 * Specifies a path to analyze for reachability.
 * VPC Reachability Analyzer enables you to analyze and debug network reachability between two resources in your virtual private cloud (VPC). For more information, see the [Reachability Analyzer User Guide](https://docs.aws.amazon.com/vpc/latest/reachability/what-is-reachability-analyzer.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html */

export interface EC2NetworkInsightsPath extends ResourceAttributes {
  Type: 'AWS::EC2::NetworkInsightsPath'
  Properties: {
    /**
     * - The ID or ARN of the destination. If the resource is in another account, you must specify an ARN.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-destination */
    Destination?: string | Intrinsic
    /**
     * - The IP address of the destination.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^([0-9]{1,3}.){3}[0-9]{1,3}$`
     * - _Minimum_: `0`
     * - _Maximum_: `15`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-destinationip */
    DestinationIp?: string | Intrinsic
    /**
     * - The destination port.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `65535`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-destinationport */
    DestinationPort?: number | Intrinsic
    /**
     * - Scopes the analysis to network paths that match specific filters at the destination. If you specify this parameter, you can't specify the parameter for the destination IP address.
     * - _Required_: No
     * - _Type_: [PathFilter](./aws-properties-ec2-networkinsightspath-pathfilter.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-filteratdestination */
    FilterAtDestination?: PathFilter
    /**
     * - Scopes the analysis to network paths that match specific filters at the source. If you specify this parameter, you can't specify the parameters for the source IP address or the destination port.
     * - _Required_: No
     * - _Type_: [PathFilter](./aws-properties-ec2-networkinsightspath-pathfilter.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-filteratsource */
    FilterAtSource?: PathFilter
    /**
     * - The protocol.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `tcp | udp`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-protocol */
    Protocol: string | Intrinsic
    /**
     * - The ID or ARN of the source. If the resource is in another account, you must specify an ARN.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-source */
    Source: string | Intrinsic
    /**
     * - The IP address of the source.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^([0-9]{1,3}.){3}[0-9]{1,3}$`
     * - _Minimum_: `0`
     * - _Maximum_: `15`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-sourceip */
    SourceIp?: string | Intrinsic
    /**
     * - The tags to add to the path.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ec2-networkinsightspath-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightspath.html#cfn-ec2-networkinsightspath-tags */
    Tags?: Tag[]
  }
}
