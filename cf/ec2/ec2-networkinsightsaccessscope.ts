import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html */

export interface Tag {
  /**
   * - The tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html#cfn-ec2-networkinsightsaccessscope-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html#cfn-ec2-networkinsightsaccessscope-tag-value */
  Value?: string | Intrinsic
}

/**
 * Describes a through resource statement.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html */

export interface ThroughResourcesStatementRequest {
  /**
   * - The resource statement.
   * - _Required_: No
   * - _Type_: [ResourceStatementRequest](./aws-properties-ec2-networkinsightsaccessscope-resourcestatementrequest.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html#cfn-ec2-networkinsightsaccessscope-throughresourcesstatementrequest-resourcestatement */
  ResourceStatement?: ResourceStatementRequest
}

/**
 * Describes a packet header statement.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html */

export interface PacketHeaderStatementRequest {
  /**
   * - The destination addresses.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html#cfn-ec2-networkinsightsaccessscope-packetheaderstatementrequest-destinationaddresses */
  DestinationAddresses?: (string | Intrinsic)[]
  /**
   * - The destination ports.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html#cfn-ec2-networkinsightsaccessscope-packetheaderstatementrequest-destinationports */
  DestinationPorts?: (string | Intrinsic)[]
  /**
   * - The destination prefix lists.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html#cfn-ec2-networkinsightsaccessscope-packetheaderstatementrequest-destinationprefixlists */
  DestinationPrefixLists?: (string | Intrinsic)[]
  /**
   * - The protocols.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html#cfn-ec2-networkinsightsaccessscope-packetheaderstatementrequest-protocols */
  Protocols?: (string | Intrinsic)[]
  /**
   * - The source addresses.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html#cfn-ec2-networkinsightsaccessscope-packetheaderstatementrequest-sourceaddresses */
  SourceAddresses?: (string | Intrinsic)[]
  /**
   * - The source ports.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html#cfn-ec2-networkinsightsaccessscope-packetheaderstatementrequest-sourceports */
  SourcePorts?: (string | Intrinsic)[]
  /**
   * - The source prefix lists.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html#cfn-ec2-networkinsightsaccessscope-packetheaderstatementrequest-sourceprefixlists */
  SourcePrefixLists?: (string | Intrinsic)[]
}

/**
 * Describes a resource statement.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html */

export interface ResourceStatementRequest {
  /**
   * - The resources.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html#cfn-ec2-networkinsightsaccessscope-resourcestatementrequest-resources */
  Resources?: (string | Intrinsic)[]
  /**
   * - The resource types.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html#cfn-ec2-networkinsightsaccessscope-resourcestatementrequest-resourcetypes */
  ResourceTypes?: (string | Intrinsic)[]
}

/**
 * Describes a path statement.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html */

export interface PathStatementRequest {
  /**
   * - The packet header statement.
   * - _Required_: No
   * - _Type_: [PacketHeaderStatementRequest](./aws-properties-ec2-networkinsightsaccessscope-packetheaderstatementrequest.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html#cfn-ec2-networkinsightsaccessscope-pathstatementrequest-packetheaderstatement */
  PacketHeaderStatement?: PacketHeaderStatementRequest
  /**
   * - The resource statement.
   * - _Required_: No
   * - _Type_: [ResourceStatementRequest](./aws-properties-ec2-networkinsightsaccessscope-resourcestatementrequest.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html#cfn-ec2-networkinsightsaccessscope-pathstatementrequest-resourcestatement */
  ResourceStatement?: ResourceStatementRequest
}

/**
 * Describes a path.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html */

export interface AccessScopePathRequest {
  /**
   * - The destination.
   * - _Required_: No
   * - _Type_: [PathStatementRequest](./aws-properties-ec2-networkinsightsaccessscope-pathstatementrequest.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html#cfn-ec2-networkinsightsaccessscope-accessscopepathrequest-destination */
  Destination?: PathStatementRequest
  /**
   * - The source.
   * - _Required_: No
   * - _Type_: [PathStatementRequest](./aws-properties-ec2-networkinsightsaccessscope-pathstatementrequest.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html#cfn-ec2-networkinsightsaccessscope-accessscopepathrequest-source */
  Source?: PathStatementRequest
  /**
   * - The through resources.
   * - _Required_: No
   * - _Type_: Array of [ThroughResourcesStatementRequest](./aws-properties-ec2-networkinsightsaccessscope-throughresourcesstatementrequest.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html#cfn-ec2-networkinsightsaccessscope-accessscopepathrequest-throughresources */
  ThroughResources?: ThroughResourcesStatementRequest[]
}

/**
 * Describes a Network Access Scope. A Network Access Scope defines outbound (egress) and inbound (ingress) traffic patterns, including sources, destinations, paths, and traffic types.
 * Network Access Analyzer identifies unintended network access to your resources on AWS. When you start an analysis on a Network Access Scope, Network Access Analyzer produces findings. For more information, see the [Network Access Analyzer User Guide](https://docs.aws.amazon.com/vpc/latest/network-access-analyzer/).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html */

export interface EC2NetworkInsightsAccessScope extends ResourceAttributes {
  Type: 'AWS::EC2::NetworkInsightsAccessScope'
  Properties: {
    /**
     * - The paths to exclude.
     * - _Required_: No
     * - _Type_: Array of [AccessScopePathRequest](./aws-properties-ec2-networkinsightsaccessscope-accessscopepathrequest.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html#cfn-ec2-networkinsightsaccessscope-excludepaths */
    ExcludePaths?: AccessScopePathRequest[]
    /**
     * - The paths to match.
     * - _Required_: No
     * - _Type_: Array of [AccessScopePathRequest](./aws-properties-ec2-networkinsightsaccessscope-accessscopepathrequest.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html#cfn-ec2-networkinsightsaccessscope-matchpaths */
    MatchPaths?: AccessScopePathRequest[]
    /**
     * - The tags.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ec2-networkinsightsaccessscope-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsaccessscope.html#cfn-ec2-networkinsightsaccessscope-tags */
    Tags?: Tag[]
  }
}
