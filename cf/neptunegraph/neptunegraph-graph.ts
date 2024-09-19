import type { Intrinsic } from '../intrinsic/index.js' /**
 * A key-value pair to associate with the Neptune Analytics graph.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html */

export interface Tag {
  /**
   * - **Key** (string)   –   A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length. It can't be prefixed with `AWS:` and can only contain the set of Unicode characters specified by this Java regular expression: `"^([\p{L}\p{Z}\p{N}_.:/=+\-]*)$")`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html#cfn-neptunegraph-graph-tag-key */
  Key: string | Intrinsic
  /**
   * - **Value** (string)   –   A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length. It can't be prefixed with `AWS:` and can only contain the set of Unicode characters specified by this Java regular expression: `"^([\p{L}\p{Z}\p{N}_.:/=+\-]*)$")`.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html#cfn-neptunegraph-graph-tag-value */
  Value?: string | Intrinsic
}

/**
 * The vector-search configuration for the graph, which specifies the vector dimension to use in the vector index, if any.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html */

export interface VectorSearchConfiguration {
  /**
   * - The number of dimensions.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html#cfn-neptunegraph-graph-vectorsearchconfiguration-vectorsearchdimension */
  VectorSearchDimension: number | Intrinsic
}

/**
 * The `AWS::NeptuneGraph::Graph` resource creates an Amazon Neptune Analytics graph. Amazon Neptune Analytics is a memory-optimized graph database engine for analytics. For more information, see [Amazon Neptune Analytics](https://docs.aws.amazon.com/neptune-analytics/latest/userguide/what-is-neptune-analytics.html) .
 * You can use `AWS::NeptuneGraph::Graph.DeletionProtection` to help guard against unintended deletion of your graph.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html */

export interface NeptuneGraphGraph {
  Type: 'AWS::NeptuneGraph::Graph'
  Properties: {
    /**
     * - A value that indicates whether the graph has deletion protection enabled. The graph can't be deleted when deletion protection is enabled.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html#cfn-neptunegraph-graph-deletionprotection */
    DeletionProtection?: boolean | Intrinsic
    /**
     * - The graph name. For example: `my-graph-1`.
     * - The name must contain from 1 to 63 letters, numbers, or hyphens, and its first character must be a letter. It cannot end with a hyphen or contain two consecutive hyphens.
     * - If you don't specify a graph name, a unique graph name is generated for you using the prefix `graph-for`, followed by a combination of `Stack Name` and a `UUID`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-z][a-zA-Z0-9]*(-[a-zA-Z0-9]+)*$`
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html#cfn-neptunegraph-graph-graphname */
    GraphName?: string | Intrinsic
    /**
     * - The provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.
     * - Min = 128
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html#cfn-neptunegraph-graph-provisionedmemory */
    ProvisionedMemory: number | Intrinsic
    /**
     * - Specifies whether or not the graph can be reachable over the internet. All access to graphs is IAM authenticated.
     * - When the graph is publicly available, its domain name system (DNS) endpoint resolves to the public IP address from the internet. When the graph isn't publicly available, you need to create a `PrivateGraphEndpoint` in a given VPC to ensure the DNS name resolves to a private IP address that is reachable from the VPC.
     * - Default: If not specified, the default value is false.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html#cfn-neptunegraph-graph-publicconnectivity */
    PublicConnectivity?: boolean | Intrinsic
    /**
     * - The number of replicas in other AZs.
     * - Default: If not specified, the default value is 1.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html#cfn-neptunegraph-graph-replicacount */
    ReplicaCount?: number | Intrinsic
    /**
     * - Adds metadata tags to the new graph. These tags can also be used with cost allocation reporting, or used in a Condition statement in an IAM policy.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-neptunegraph-graph-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html#cfn-neptunegraph-graph-tags */
    Tags?: Tag[]
    /**
     * - Specifies the number of dimensions for vector embeddings that will be loaded into the graph. The value is specified as `dimension=`value. Max = 65,535
     * - _Required_: No
     * - _Type_: [VectorSearchConfiguration](./aws-properties-neptunegraph-graph-vectorsearchconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-graph.html#cfn-neptunegraph-graph-vectorsearchconfiguration */
    VectorSearchConfiguration?: VectorSearchConfiguration
  }
}
