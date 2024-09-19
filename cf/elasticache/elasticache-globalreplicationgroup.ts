import type { Intrinsic } from '../intrinsic/index.js' /**
 * A member of a Global datastore. It contains the Replication Group Id, the Amazon region and the role of the replication group.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html */

export interface GlobalReplicationGroupMember {
  /**
   * - The replication group id of the Global datastore member.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-globalreplicationgroupmember-replicationgroupid */
  ReplicationGroupId?: string | Intrinsic
  /**
   * - The Amazon region of the Global datastore member.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-globalreplicationgroupmember-replicationgroupregion */
  ReplicationGroupRegion?: string | Intrinsic
  /**
   * - Indicates the role of the replication group, `PRIMARY` or `SECONDARY`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PRIMARY | SECONDARY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-globalreplicationgroupmember-role */
  Role?: string | Intrinsic
}

/**
 * A list of `PreferredAvailabilityZones` objects that specifies the configuration of a node group in the resharded cluster.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html */

export interface ReshardingConfiguration {
  /**
   * - Either the ElastiCache (Redis OSS) supplied 4-digit id or a user supplied id for the node group these configuration values apply to.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\d+`
   * - _Minimum_: `1`
   * - _Maximum_: `4`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-reshardingconfiguration-nodegroupid */
  NodeGroupId?: string | Intrinsic
  /**
   * - A list of preferred availability zones for the nodes in this cluster.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-reshardingconfiguration-preferredavailabilityzones */
  PreferredAvailabilityZones?: (string | Intrinsic)[]
}

/**
 * A list of the replication groups
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html */

export interface RegionalConfiguration {
  /**
   * - The name of the secondary cluster
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-regionalconfiguration-replicationgroupid */
  ReplicationGroupId?: string | Intrinsic
  /**
   * - The Amazon region where the cluster is stored
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-regionalconfiguration-replicationgroupregion */
  ReplicationGroupRegion?: string | Intrinsic
  /**
   * - A list of PreferredAvailabilityZones objects that specifies the configuration of a node group in the resharded cluster.
   * - _Required_: No
   * - _Type_: Array of [ReshardingConfiguration](./aws-properties-elasticache-globalreplicationgroup-reshardingconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-regionalconfiguration-reshardingconfigurations */
  ReshardingConfigurations?: ReshardingConfiguration[]
}

/**
 * Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html */

export interface ElastiCacheGlobalReplicationGroup {
  Type: 'AWS::ElastiCache::GlobalReplicationGroup'
  Properties: {
    /**
     * - Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails.
     * - `AutomaticFailoverEnabled` must be enabled for Redis OSS (cluster mode enabled) replication groups.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-automaticfailoverenabled */
    AutomaticFailoverEnabled?: boolean | Intrinsic
    /**
     * - The cache node type of the Global datastore
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-cachenodetype */
    CacheNodeType?: string | Intrinsic
    /**
     * - The name of the cache parameter group to use with the Global datastore. It must be compatible with the major engine version used by the Global datastore.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-cacheparametergroupname */
    CacheParameterGroupName?: string | Intrinsic
    /**
     * - The Elasticache Redis OSS engine version.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-engineversion */
    EngineVersion?: string | Intrinsic
    /**
     * - The number of node groups that comprise the Global Datastore.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-globalnodegroupcount */
    GlobalNodeGroupCount?: number | Intrinsic
    /**
     * - The optional description of the Global datastore
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-globalreplicationgroupdescription */
    GlobalReplicationGroupDescription?: string | Intrinsic
    /**
     * - The suffix name of a Global Datastore. The suffix guarantees uniqueness of the Global Datastore name across multiple regions.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-globalreplicationgroupidsuffix */
    GlobalReplicationGroupIdSuffix?: string | Intrinsic
    /**
     * - The replication groups that comprise the Global datastore.
     * - _Required_: Yes
     * - _Type_: Array of [GlobalReplicationGroupMember](./aws-properties-elasticache-globalreplicationgroup-globalreplicationgroupmember.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-members */
    Members: GlobalReplicationGroupMember[]
    /**
     * - The Regions that comprise the Global Datastore.
     * - _Required_: No
     * - _Type_: Array of [RegionalConfiguration](./aws-properties-elasticache-globalreplicationgroup-regionalconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-regionalconfigurations */
    RegionalConfigurations?: RegionalConfiguration[]
  }
}
