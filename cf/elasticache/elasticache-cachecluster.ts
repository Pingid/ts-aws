import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A tag that can be added to an ElastiCache cluster or replication group. Tags are composed of a Key/Value pair. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. A tag with a null Value is permitted.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html */

export interface Tag {
  /**
   * - The key for the tag. May not be null.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag's value. May be null.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-tag-value */
  Value: string | Intrinsic
}

/**
 * Configuration details of a CloudWatch Logs destination. Note that this field is marked as required but only if CloudWatch Logs was chosen as the destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html */

export interface CloudWatchLogsDestinationDetails {
  /**
   * - The name of the CloudWatch Logs log group.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-cloudwatchlogsdestinationdetails-loggroup */
  LogGroup: string | Intrinsic
}

/**
 * The configuration details of the Kinesis Data Firehose destination. Note that this field is marked as required but only if Kinesis Data Firehose was chosen as the destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html */

export interface KinesisFirehoseDestinationDetails {
  /**
   * - The name of the Kinesis Data Firehose delivery stream.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-kinesisfirehosedestinationdetails-deliverystream */
  DeliveryStream: string | Intrinsic
}

/**
 * Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html */

export interface DestinationDetails {
  /**
   * - The configuration details of the CloudWatch Logs destination. Note that this field is marked as required but only if CloudWatch Logs was chosen as the destination.
   * - _Required_: No
   * - _Type_: [CloudWatchLogsDestinationDetails](./aws-properties-elasticache-cachecluster-cloudwatchlogsdestinationdetails.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-destinationdetails-cloudwatchlogsdetails */
  CloudWatchLogsDetails?: CloudWatchLogsDestinationDetails
  /**
   * - The configuration details of the Kinesis Data Firehose destination. Note that this field is marked as required but only if Kinesis Data Firehose was chosen as the destination.
   * - _Required_: No
   * - _Type_: [KinesisFirehoseDestinationDetails](./aws-properties-elasticache-cachecluster-kinesisfirehosedestinationdetails.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-destinationdetails-kinesisfirehosedetails */
  KinesisFirehoseDetails?: KinesisFirehoseDestinationDetails
}

/**
 * Specifies the destination, format and type of the logs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html */

export interface LogDeliveryConfigurationRequest {
  /**
   * - Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
   * - _Required_: Yes
   * - _Type_: [DestinationDetails](./aws-properties-elasticache-cachecluster-destinationdetails.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-logdeliveryconfigurationrequest-destinationdetails */
  DestinationDetails: DestinationDetails
  /**
   * - Specify either CloudWatch Logs or Kinesis Data Firehose as the destination type. Valid values are either `cloudwatch-logs` or `kinesis-firehose`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-logdeliveryconfigurationrequest-destinationtype */
  DestinationType: string | Intrinsic
  /**
   * - Valid values are either `json` or `text`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-logdeliveryconfigurationrequest-logformat */
  LogFormat: string | Intrinsic
  /**
   * - Valid value is either `slow-log`, which refers to [slow-log](https://redis.io/commands/slowlog) or `engine-log`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-logdeliveryconfigurationrequest-logtype */
  LogType: string | Intrinsic
}

/**
 * The `AWS::ElastiCache::CacheCluster` type creates an Amazon ElastiCache cache cluster.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html */

export interface ElastiCacheCacheCluster extends ResourceAttributes {
  Type: 'AWS::ElastiCache::CacheCluster'
  Properties: {
    /**
     * - If you are running Redis OSS engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next minor version upgrade campaign. This parameter is disabled for previous versions.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-autominorversionupgrade */
    AutoMinorVersionUpgrade?: boolean | Intrinsic
    /**
     * - Specifies whether the nodes in this Memcached cluster are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region.
     * - This parameter is only supported for Memcached clusters.
     * - If the `AZMode` and `PreferredAvailabilityZones` are not specified, ElastiCache assumes `single-az` mode.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `single-az | cross-az`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-azmode */
    AZMode?: string | Intrinsic
    /**
     * - The compute and memory capacity of the nodes in the node group (shard).
     * - The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts. Changing the CacheNodeType of a Memcached instance is currently not supported. If you need to scale using Memcached, we recommend forcing a replacement update by changing the `LogicalResourceId` of the resource.
     * - For region availability, see [Supported Node Types by Region](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion)
     * - **Additional node type info**
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-cachenodetype */
    CacheNodeType: string | Intrinsic
    /**
     * - The name of the parameter group to associate with this cluster. If this argument is omitted, the default parameter group for the specified engine is used. You cannot use any parameter group which has `cluster-enabled='yes'` when creating a cluster.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-cacheparametergroupname */
    CacheParameterGroupName?: string | Intrinsic
    /**
     * - A list of security group names to associate with this cluster.
     * - Use this parameter only when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC).
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-cachesecuritygroupnames */
    CacheSecurityGroupNames?: (string | Intrinsic)[]
    /**
     * - The name of the subnet group to be used for the cluster.
     * - Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-cachesubnetgroupname */
    CacheSubnetGroupName?: string | Intrinsic
    /**
     * - A name for the cache cluster. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the cache cluster. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
     * - The name must contain 1 to 50 alphanumeric characters or hyphens. The name must start with a letter and cannot end with a hyphen or contain two consecutive hyphens.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-clustername */
    ClusterName?: string | Intrinsic
    /**
     * - The name of the cache engine to be used for this cluster.
     * - Valid values for this parameter are: `memcached` | `redis`
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-engine */
    Engine: string | Intrinsic
    /**
     * - The version number of the cache engine to be used for this cluster. To view the supported cache engine versions, use the DescribeCacheEngineVersions operation.
     * - **Important:** You can upgrade to a newer engine version (see [Selecting a Cache Engine and Version](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement)), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster or replication group and create it anew with the earlier engine version.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-engineversion */
    EngineVersion?: string | Intrinsic
    /**
     * - The network type you choose when modifying a cluster, either `ipv4` | `ipv6`. IPv6 is supported for workloads using Redis OSS engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the [Nitro system](https://aws.amazon.com/ec2/nitro/).
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ipv4 | ipv6`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-ipdiscovery */
    IpDiscovery?: string | Intrinsic
    /**
     * - Specifies the destination, format and type of the logs.
     * - _Required_: No
     * - _Type_: Array of [LogDeliveryConfigurationRequest](./aws-properties-elasticache-cachecluster-logdeliveryconfigurationrequest.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-logdeliveryconfigurations */
    LogDeliveryConfigurations?: LogDeliveryConfigurationRequest[]
    /**
     * - Must be either `ipv4` | `ipv6` | `dual_stack`. IPv6 is supported for workloads using Redis OSS engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the [Nitro system](https://aws.amazon.com/ec2/nitro/).
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ipv4 | ipv6 | dual_stack`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-networktype */
    NetworkType?: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-notificationtopicarn */
    NotificationTopicArn?: string | Intrinsic
    /**
     * - The number of cache nodes that the cache cluster should have.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-numcachenodes */
    NumCacheNodes: number | Intrinsic
    /**
     * - The port number on which each of the cache nodes accepts connections.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-port */
    Port?: number | Intrinsic
    /**
     * - The EC2 Availability Zone in which the cluster is created.
     * - All nodes belonging to this cluster are placed in the preferred Availability Zone. If you want to create your nodes across multiple Availability Zones, use `PreferredAvailabilityZones`.
     * - Default: System chosen Availability Zone.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-preferredavailabilityzone */
    PreferredAvailabilityZone?: string | Intrinsic
    /**
     * - A list of the Availability Zones in which cache nodes are created. The order of the zones in the list is not important.
     * - This option is only supported on Memcached.
     * - If you want all the nodes in the same Availability Zone, use `PreferredAvailabilityZone` instead, or repeat the Availability Zone multiple times in the list.
     * - Default: System chosen Availability Zones.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-preferredavailabilityzones */
    PreferredAvailabilityZones?: (string | Intrinsic)[]
    /**
     * - Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.
     * - Valid values for `ddd` are:
     * - Example: `sun:23:00-mon:01:30`
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-preferredmaintenancewindow */
    PreferredMaintenanceWindow?: string | Intrinsic
    /**
     * - A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies a Redis OSS RDB snapshot file stored in Amazon S3. The snapshot file is used to populate the node group (shard). The Amazon S3 object name in the ARN cannot contain any commas.
     * - Example of an Amazon S3 ARN: `arn:aws:s3:::my_bucket/snapshot1.rdb`
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-snapshotarns */
    SnapshotArns?: (string | Intrinsic)[]
    /**
     * - The name of a Redis OSS snapshot from which to restore data into the new node group (shard). The snapshot status changes to `restoring` while the new node group (shard) is being created.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-snapshotname */
    SnapshotName?: string | Intrinsic
    /**
     * - The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set `SnapshotRetentionLimit` to 5, a snapshot taken today is retained for 5 days before being deleted.
     * - Default: 0 (i.e., automatic backups are disabled for this cache cluster).
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-snapshotretentionlimit */
    SnapshotRetentionLimit?: number | Intrinsic
    /**
     * - The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).
     * - Example: `05:00-09:00`
     * - If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-snapshotwindow */
    SnapshotWindow?: string | Intrinsic
    /**
     * - A list of tags to be added to this resource.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-elasticache-cachecluster-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-tags */
    Tags?: Tag[]
    /**
     * - A flag that enables in-transit encryption when set to true.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-transitencryptionenabled */
    TransitEncryptionEnabled?: boolean | Intrinsic
    /**
     * - One or more VPC security groups associated with the cluster.
     * - Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-vpcsecuritygroupids */
    VpcSecurityGroupIds?: (string | Intrinsic)[]
  }
}
