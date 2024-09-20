import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `Tag` property type specifies Property description not available. for an [AWS::DocDBElastic::Cluster](./aws-resource-docdbelastic-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-tag-value */
  Value: string | Intrinsic
}

/**
 * Creates a new Amazon DocumentDB elastic cluster and returns its cluster structure.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html */

export interface DocDBElasticCluster extends ResourceAttributes {
  Type: 'AWS::DocDBElastic::Cluster'
  Properties: {
    /**
     * - The name of the Amazon DocumentDB elastic clusters administrator.
     * - _Constraints_:
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-adminusername */
    AdminUserName: string | Intrinsic
    /**
     * - The password for the Elastic DocumentDB cluster administrator and can contain any printable ASCII characters.
     * - _Constraints_:
     * - _Required_: Conditional
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-adminuserpassword */
    AdminUserPassword?: string | Intrinsic
    /**
     * - The authentication type used to determine where to fetch the password used for accessing the elastic cluster. Valid types are `PLAIN_TEXT` or `SECRET_ARN`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `PLAIN_TEXT | SECRET_ARN`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-authtype */
    AuthType: string | Intrinsic
    /**
     * - The number of days for which automatic snapshots are retained.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-backupretentionperiod */
    BackupRetentionPeriod?: number | Intrinsic
    /**
     * - The name of the new elastic cluster. This parameter is stored as a lowercase string.
     * - _Constraints_:
     * - _Example_: `my-cluster`
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-z][a-zA-Z0-9]*(-[a-zA-Z0-9]+)*`
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-clustername */
    ClusterName: string | Intrinsic
    /**
     * - The KMS key identifier to use to encrypt the new elastic cluster.
     * - The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon account that owns this KMS encryption key, you can use the KMS key alias instead of the ARN as the KMS encryption key.
     * - If an encryption key is not specified, Amazon DocumentDB uses the default encryption key that KMS creates for your account. Your account has a different default encryption key for each Amazon Region.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-kmskeyid */
    KmsKeyId?: string | Intrinsic
    /**
     * - The daily time range during which automated backups are created if automated backups are enabled, as determined by `backupRetentionPeriod`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-preferredbackupwindow */
    PreferredBackupWindow?: string | Intrinsic
    /**
     * - The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
     * - _Format_: `ddd:hh24:mi-ddd:hh24:mi`
     * - _Default_: a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week.
     * - _Valid days_: Mon, Tue, Wed, Thu, Fri, Sat, Sun
     * - _Constraints_: Minimum 30-minute window.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-preferredmaintenancewindow */
    PreferredMaintenanceWindow?: string | Intrinsic
    /**
     * - The number of vCPUs assigned to each elastic cluster shard. Maximum is 64. Allowed values are 2, 4, 8, 16, 32, 64.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-shardcapacity */
    ShardCapacity: number | Intrinsic
    /**
     * - The number of shards assigned to the elastic cluster. Maximum is 32.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-shardcount */
    ShardCount: number | Intrinsic
    /**
     * - The number of replica instances applying to all shards in the cluster. A `shardInstanceCount` value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-shardinstancecount */
    ShardInstanceCount?: number | Intrinsic
    /**
     * - The Amazon EC2 subnet IDs for the new elastic cluster.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-subnetids */
    SubnetIds?: (string | Intrinsic)[]
    /**
     * - The tags to be assigned to the new elastic cluster.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-docdbelastic-cluster-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-tags */
    Tags?: Tag[]
    /**
     * - A list of EC2 VPC security groups to associate with the new elastic cluster.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-vpcsecuritygroupids */
    VpcSecurityGroupIds?: (string | Intrinsic)[]
  }
}
