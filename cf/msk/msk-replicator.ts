import type { Intrinsic } from '../intrinsic/index.js' /**
 * The `Tag` property type specifies Property description not available. for an [AWS::MSK::Replicator](./aws-resource-msk-replicator.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-tag-value */
  Value: string | Intrinsic
}

/**
 * Details of an Amazon MSK Cluster.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html */

export interface AmazonMskCluster {
  /**
   * - The Amazon Resource Name (ARN) of an Amazon MSK cluster.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:(aws|aws-us-gov|aws-cn):kafka:.*`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-amazonmskcluster-mskclusterarn */
  MskClusterArn: string | Intrinsic
}

/**
 * Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html */

export interface KafkaClusterClientVpcConfig {
  /**
   * - The security groups to attach to the ENIs for the broker nodes.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `16`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-kafkaclusterclientvpcconfig-securitygroupids */
  SecurityGroupIds?: (string | Intrinsic)[]
  /**
   * - The list of subnets in the client VPC to connect to.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `2`
   * - _Maximum_: `3`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-kafkaclusterclientvpcconfig-subnetids */
  SubnetIds: (string | Intrinsic)[]
}

/**
 * Details about consumer group replication.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html */

export interface ConsumerGroupReplication {
  /**
   * - List of regular expression patterns indicating the consumer groups that should not be replicated.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `256 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-consumergroupreplication-consumergroupstoexclude */
  ConsumerGroupsToExclude?: (string | Intrinsic)[]
  /**
   * - List of regular expression patterns indicating the consumer groups to copy.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `256 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-consumergroupreplication-consumergroupstoreplicate */
  ConsumerGroupsToReplicate: (string | Intrinsic)[]
  /**
   * - Enables synchronization of consumer groups to target cluster.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-consumergroupreplication-detectandcopynewconsumergroups */
  DetectAndCopyNewConsumerGroups?: boolean | Intrinsic
  /**
   * - Enables synchronization of consumer group offsets to target cluster. The translated offsets will be written to topic \_\_consumer\_offsets.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-consumergroupreplication-synchroniseconsumergroupoffsets */
  SynchroniseConsumerGroupOffsets?: boolean | Intrinsic
}

/**
 * Specifies the position in the topics to start replicating from.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html */

export interface ReplicationStartingPosition {
  /**
   * - The type of replication starting position.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `LATEST | EARLIEST`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-replicationstartingposition-type */
  Type?: string | Intrinsic
}

/**
 * Configuration for specifying replicated topic names will be the same as their corresponding upstream topics or prefixed with source cluster alias.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html */

export interface ReplicationTopicNameConfiguration {
  /**
   * - The type of replication topic name configuration, identical to upstream topic name or prefixed with source cluster alias.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PREFIXED_WITH_SOURCE_CLUSTER_ALIAS | IDENTICAL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-replicationtopicnameconfiguration-type */
  Type?: string | Intrinsic
}

/**
 * Information about Kafka Cluster to be used as source / target for replication.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html */

export interface KafkaCluster {
  /**
   * - Details of an Amazon MSK Cluster.
   * - _Required_: Yes
   * - _Type_: [AmazonMskCluster](./aws-properties-msk-replicator-amazonmskcluster.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-kafkacluster-amazonmskcluster */
  AmazonMskCluster: AmazonMskCluster
  /**
   * - Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.
   * - _Required_: Yes
   * - _Type_: [KafkaClusterClientVpcConfig](./aws-properties-msk-replicator-kafkaclusterclientvpcconfig.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-kafkacluster-vpcconfig */
  VpcConfig: KafkaClusterClientVpcConfig
}

/**
 * Details about topic replication.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html */

export interface TopicReplication {
  /**
   * - Whether to periodically configure remote topic ACLs to match their corresponding upstream topics.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-topicreplication-copyaccesscontrollistsfortopics */
  CopyAccessControlListsForTopics?: boolean | Intrinsic
  /**
   * - Whether to periodically configure remote topics to match their corresponding upstream topics.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-topicreplication-copytopicconfigurations */
  CopyTopicConfigurations?: boolean | Intrinsic
  /**
   * - Whether to periodically check for new topics and partitions.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-topicreplication-detectandcopynewtopics */
  DetectAndCopyNewTopics?: boolean | Intrinsic
  /**
   * - Specifies the position in the topics to start replicating from.
   * - _Required_: No
   * - _Type_: [ReplicationStartingPosition](./aws-properties-msk-replicator-replicationstartingposition.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-topicreplication-startingposition */
  StartingPosition?: ReplicationStartingPosition
  /**
   * - Configuration for specifying replicated topic names will be the same as their corresponding upstream topics or prefixed with source cluster alias.
   * - _Required_: No
   * - _Type_: [ReplicationTopicNameConfiguration](./aws-properties-msk-replicator-replicationtopicnameconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-topicreplication-topicnameconfiguration */
  TopicNameConfiguration?: ReplicationTopicNameConfiguration
  /**
   * - List of regular expression patterns indicating the topics that should not be replicated.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `249 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-topicreplication-topicstoexclude */
  TopicsToExclude?: (string | Intrinsic)[]
  /**
   * - List of regular expression patterns indicating the topics to copy.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `249 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-topicreplication-topicstoreplicate */
  TopicsToReplicate: (string | Intrinsic)[]
}

/**
 * Specifies configuration for replication between a source and target Kafka cluster.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html */

export interface ReplicationInfo {
  /**
   * - Configuration relating to consumer group replication.
   * - _Required_: Yes
   * - _Type_: [ConsumerGroupReplication](./aws-properties-msk-replicator-consumergroupreplication.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-replicationinfo-consumergroupreplication */
  ConsumerGroupReplication: ConsumerGroupReplication
  /**
   * - The ARN of the source Kafka cluster.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:(aws|aws-us-gov|aws-cn):kafka:.*`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-replicationinfo-sourcekafkaclusterarn */
  SourceKafkaClusterArn: string | Intrinsic
  /**
   * - The compression type to use when producing records to target cluster.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `NONE | GZIP | SNAPPY | LZ4 | ZSTD`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-replicationinfo-targetcompressiontype */
  TargetCompressionType: string | Intrinsic
  /**
   * - The ARN of the target Kafka cluster.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:(aws|aws-us-gov|aws-cn):kafka:.*`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-replicationinfo-targetkafkaclusterarn */
  TargetKafkaClusterArn: string | Intrinsic
  /**
   * - Configuration relating to topic replication.
   * - _Required_: Yes
   * - _Type_: [TopicReplication](./aws-properties-msk-replicator-topicreplication.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-replicationinfo-topicreplication */
  TopicReplication: TopicReplication
}

/**
 * Creates the replicator.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html */

export interface MSKReplicator {
  Type: 'AWS::MSK::Replicator'
  Properties: {
    /**
     * - The current version number of the replicator.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-currentversion */
    CurrentVersion?: string | Intrinsic
    /**
     * - A summary description of the replicator.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-description */
    Description?: string | Intrinsic
    /**
     * - Kafka Clusters to use in setting up sources / targets for replication.
     * - _Required_: Yes
     * - _Type_: Array of [KafkaCluster](./aws-properties-msk-replicator-kafkacluster.html)
     * - _Minimum_: `2`
     * - _Maximum_: `2`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-kafkaclusters */
    KafkaClusters: KafkaCluster[]
    /**
     * - A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.
     * - _Required_: Yes
     * - _Type_: Array of [ReplicationInfo](./aws-properties-msk-replicator-replicationinfo.html)
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-replicationinfolist */
    ReplicationInfoList: ReplicationInfo[]
    /**
     * - The name of the replicator. Alpha-numeric characters with '-' are allowed.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[0-9A-Za-z][0-9A-Za-z-]{0,}$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-replicatorname */
    ReplicatorName: string | Intrinsic
    /**
     * - The ARN of the IAM role used by the replicator to access resources in the customer's account (e.g source and target clusters)
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:(aws|aws-us-gov|aws-cn):iam:.*`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-serviceexecutionrolearn */
    ServiceExecutionRoleArn: string | Intrinsic
    /**
     * - List of tags to attach to created Replicator.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-msk-replicator-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-replicator.html#cfn-msk-replicator-tags */
    Tags?: Tag[]
  }
}
