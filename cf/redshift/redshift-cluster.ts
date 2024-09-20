import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Describes a connection endpoint.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html */

export interface Endpoint {
  /**
   * - The DNS address of the cluster. This property is read only.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `2147483647`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-endpoint-address */
  Address?: string | Intrinsic
  /**
   * - The port that the database engine is listening on. This property is read only.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-endpoint-port */
  Port?: string | Intrinsic
}

/**
 * Specifies logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html */

export interface LoggingProperties {
  /**
   * - The name of an existing S3 bucket where the log files are to be stored.
   * - Constraints:
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `2147483647`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-loggingproperties-bucketname */
  BucketName?: string | Intrinsic
  /**
   * - The log destination type. An enum with possible values of `s3` and `cloudwatch`.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-loggingproperties-logdestinationtype */
  LogDestinationType?: string | Intrinsic
  /**
   * - The collection of exported log types. Possible values are `connectionlog`, `useractivitylog`, and `userlog`.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `3`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-loggingproperties-logexports */
  LogExports?: (string | Intrinsic)[]
  /**
   * - The prefix applied to the log file names.
   * - Constraints:
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `2147483647`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-loggingproperties-s3keyprefix */
  S3KeyPrefix?: string | Intrinsic
}

/**
 * A tag consisting of a name/value pair for a resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html */

export interface Tag {
  /**
   * - The key, or name, for the resource tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `127`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-tag-key */
  Key: string | Intrinsic
  /**
   * - The value for the resource tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-tag-value */
  Value: string | Intrinsic
}

/**
 * Specifies a cluster. A _cluster_ is a fully managed data warehouse that consists of a set of compute nodes.
 * To create a cluster in Virtual Private Cloud (VPC), you must provide a cluster subnet group name. The cluster subnet group identifies the subnets of your VPC that Amazon Redshift uses when creating the cluster. For more information about managing clusters, go to [Amazon Redshift Clusters](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html) in the _Amazon Redshift Cluster Management Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html */

export interface RedshiftCluster extends ResourceAttributes {
  Type: 'AWS::Redshift::Cluster'
  Properties: {
    /**
     * - If `true`, major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster.
     * - When a new major version of the Amazon Redshift engine is released, you can request that the service automatically apply upgrades during the maintenance window to the Amazon Redshift engine that is running on your cluster.
     * - Default: `true`
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-allowversionupgrade */
    AllowVersionUpgrade?: boolean | Intrinsic
    /**
     * - This parameter is retired. It does not set the AQUA configuration status. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `enabled | disabled | auto`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-aquaconfigurationstatus */
    AquaConfigurationStatus?: string | Intrinsic
    /**
     * - The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with [CreateClusterSnapshot](https://docs.aws.amazon.com/redshift/latest/APIReference/API_CreateClusterSnapshot.html) in the _Amazon Redshift API Reference_.
     * - Default: `1`
     * - Constraints: Must be a value from 0 to 35.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-automatedsnapshotretentionperiod */
    AutomatedSnapshotRetentionPeriod?: number | Intrinsic
    /**
     * - The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. For example, if you have several EC2 instances running in a specific Availability Zone, then you might want the cluster to be provisioned in the same zone in order to decrease network latency.
     * - Default: A random, system-chosen Availability Zone in the region that is specified by the endpoint.
     * - Example: `us-east-2d`
     * - Constraint: The specified Availability Zone must be in the same region as the current endpoint.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-availabilityzone */
    AvailabilityZone?: string | Intrinsic
    /**
     * - The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster is created.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-availabilityzonerelocation */
    AvailabilityZoneRelocation?: boolean | Intrinsic
    /**
     * - Describes the status of the Availability Zone relocation operation.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-availabilityzonerelocationstatus */
    AvailabilityZoneRelocationStatus?: string | Intrinsic
    /**
     * - A boolean value indicating whether the resize operation is using the classic resize process. If you don't provide this parameter or set the value to `false`, the resize type is elastic.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-classic */
    Classic?: boolean | Intrinsic
    /**
     * - A unique identifier for the cluster. You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. The identifier also appears in the Amazon Redshift console.
     * - Constraints:
     * - Example: `myexamplecluster`
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-clusteridentifier */
    ClusterIdentifier?: string | Intrinsic
    /**
     * - The name of the parameter group to be associated with this cluster.
     * - Default: The default Amazon Redshift cluster parameter group. For information about the default parameter group, go to [Working with Amazon Redshift Parameter Groups](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html)
     * - Constraints:
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-clusterparametergroupname */
    ClusterParameterGroupName?: string | Intrinsic
    /**
     * - A list of security groups to be associated with this cluster.
     * - Default: The default cluster security group for Amazon Redshift.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-clustersecuritygroups */
    ClusterSecurityGroups?: (string | Intrinsic)[]
    /**
     * - The name of a cluster subnet group to be associated with this cluster.
     * - If this parameter is not provided the resulting cluster will be deployed outside virtual private cloud (VPC).
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-clustersubnetgroupname */
    ClusterSubnetGroupName?: string | Intrinsic
    /**
     * - The type of the cluster. When cluster type is specified as
     * - Valid Values: `multi-node` | `single-node`
     * - Default: `multi-node`
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-clustertype */
    ClusterType: string | Intrinsic
    /**
     * - The version of the Amazon Redshift engine software that you want to deploy on the cluster.
     * - The version selected runs on all the nodes in the cluster.
     * - Constraints: Only version 1.0 is currently available.
     * - Example: `1.0`
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-clusterversion */
    ClusterVersion?: string | Intrinsic
    /**
     * - The name of the first database to be created when the cluster is created.
     * - To create additional databases after the cluster is created, connect to the cluster with a SQL client and use SQL commands to create a database. For more information, go to [Create a Database](https://docs.aws.amazon.com/redshift/latest/dg/t_creating_database.html) in the Amazon Redshift Database Developer Guide.
     * - Default: `dev`
     * - Constraints:
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-dbname */
    DBName: string | Intrinsic
    /**
     * - A Boolean indicating whether to enable the deferred maintenance window.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-defermaintenance */
    DeferMaintenance?: boolean | Intrinsic
    /**
     * - An integer indicating the duration of the maintenance window in days. If you specify a duration, you can't specify an end time. The duration must be 45 days or less.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-defermaintenanceduration */
    DeferMaintenanceDuration?: number | Intrinsic
    /**
     * - A timestamp for the end of the time period when we defer maintenance.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-defermaintenanceendtime */
    DeferMaintenanceEndTime?: string | Intrinsic
    /**
     * - A timestamp indicating the start time for the deferred maintenance window.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-defermaintenancestarttime */
    DeferMaintenanceStartTime?: string | Intrinsic
    /**
     * - The destination region that snapshots are automatically copied to when cross-region snapshot copy is enabled.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-destinationregion */
    DestinationRegion?: string | Intrinsic
    /**
     * - The Elastic IP (EIP) address for the cluster.
     * - Constraints: The cluster must be provisioned in EC2-VPC and publicly-accessible through an Internet gateway. Don't specify the Elastic IP address for a publicly accessible cluster with availability zone relocation turned on. For more information about provisioning clusters in EC2-VPC, go to [Supported Platforms to Launch Your Cluster](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#cluster-platforms) in the Amazon Redshift Cluster Management Guide.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-elasticip */
    ElasticIp?: string | Intrinsic
    /**
     * - If `true`, the data in the cluster is encrypted at rest.
     * - Default: false
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-encrypted */
    Encrypted?: boolean | Intrinsic
    /**
     * - The connection endpoint.
     * - _Required_: No
     * - _Type_: [Endpoint](./aws-properties-redshift-cluster-endpoint.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-endpoint */
    Endpoint?: Endpoint
    /**
     * - An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see [Enhanced VPC Routing](https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html) in the Amazon Redshift Cluster Management Guide.
     * - If this option is `true`, enhanced VPC routing is enabled.
     * - Default: false
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-enhancedvpcrouting */
    EnhancedVpcRouting?: boolean | Intrinsic
    /**
     * - Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-hsmclientcertificateidentifier */
    HsmClientCertificateIdentifier?: string | Intrinsic
    /**
     * - Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-hsmconfigurationidentifier */
    HsmConfigurationIdentifier?: string | Intrinsic
    /**
     * - A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services. You must supply the IAM roles in their Amazon Resource Name (ARN) format.
     * - The maximum number of IAM roles that you can associate is subject to a quota. For more information, go to [Quotas and limits](https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html) in the _Amazon Redshift Cluster Management Guide_.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-iamroles */
    IamRoles?: (string | Intrinsic)[]
    /**
     * - The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-kmskeyid */
    KmsKeyId?: string | Intrinsic
    /**
     * - Specifies logging information, such as queries and connection attempts, for the specified Amazon Redshift cluster.
     * - _Required_: No
     * - _Type_: [LoggingProperties](./aws-properties-redshift-cluster-loggingproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-loggingproperties */
    LoggingProperties?: LoggingProperties
    /**
     * - An optional parameter for the name of the maintenance track for the cluster. If you don't provide a maintenance track name, the cluster is assigned to the `current` track.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-maintenancetrackname */
    MaintenanceTrackName?: string | Intrinsic
    /**
     * - If `true`, Amazon Redshift uses AWS Secrets Manager to manage this cluster's admin credentials. You can't use `MasterUserPassword` if `ManageMasterPassword` is true. If `ManageMasterPassword` is false or not set, Amazon Redshift uses `MasterUserPassword` for the admin user account's password.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-managemasterpassword */
    ManageMasterPassword?: boolean | Intrinsic
    /**
     * - The default number of days to retain a manual snapshot. If the value is -1, the snapshot is retained indefinitely. This setting doesn't change the retention period of existing snapshots.
     * - The value must be either -1 or an integer between 1 and 3,653.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-manualsnapshotretentionperiod */
    ManualSnapshotRetentionPeriod?: number | Intrinsic
    /**
     * - The ID of the AWS Key Management Service (KMS) key used to encrypt and store the cluster's admin credentials secret. You can only use this parameter if `ManageMasterPassword` is true.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-masterpasswordsecretkmskeyid */
    MasterPasswordSecretKmsKeyId?: string | Intrinsic
    /**
     * - The user name associated with the admin user account for the cluster that is being created.
     * - Constraints:
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-masterusername */
    MasterUsername: string | Intrinsic
    /**
     * - The password associated with the admin user account for the cluster that is being created.
     * - You can't use `MasterUserPassword` if `ManageMasterPassword` is `true`.
     * - Constraints:
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-masteruserpassword */
    MasterUserPassword?: string | Intrinsic
    /**
     * - A boolean indicating whether Amazon Redshift should deploy the cluster in two Availability Zones. The default is false.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-multiaz */
    MultiAZ?: boolean | Intrinsic
    /**
     * - The policy that is attached to a resource.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-namespaceresourcepolicy */
    NamespaceResourcePolicy?: any | Intrinsic
    /**
     * - The node type to be provisioned for the cluster. For information about node types, go to [Working with Clusters](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#how-many-nodes) in the _Amazon Redshift Cluster Management Guide_.
     * - Valid Values: `dc2.large` | `dc2.8xlarge` | `ra3.xlplus` | `ra3.4xlarge` | `ra3.16xlarge`
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-nodetype */
    NodeType: string | Intrinsic
    /**
     * - The number of compute nodes in the cluster. This parameter is required when the **ClusterType** parameter is specified as `multi-node`.
     * - For information about determining how many nodes you need, go to [Working with Clusters](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#how-many-nodes) in the _Amazon Redshift Cluster Management Guide_.
     * - If you don't specify this parameter, you get a single-node cluster. When requesting a multi-node cluster, you must specify the number of nodes that you want in the cluster.
     * - Default: `1`
     * - Constraints: Value must be at least 1 and no more than 100.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-numberofnodes */
    NumberOfNodes?: number | Intrinsic
    /**
     * - The AWS account used to create or copy the snapshot. Required if you are restoring a snapshot you do not own, optional if you own the snapshot.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-owneraccount */
    OwnerAccount?: string | Intrinsic
    /**
     * - The port number on which the cluster accepts incoming connections.
     * - The cluster is accessible only via the JDBC and ODBC connection strings. Part of the connection string requires the port on which the cluster will listen for incoming connections.
     * - Default: `5439`
     * - Valid Values:
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-port */
    Port?: number | Intrinsic
    /**
     * - The weekly time range (in UTC) during which automated cluster maintenance can occur.
     * - Format: `ddd:hh24:mi-ddd:hh24:mi`
     * - Default: A 30-minute window selected at random from an 8-hour block of time per region, occurring on a random day of the week. For more information about the time blocks for each region, see [Maintenance Windows](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-maintenance-windows) in Amazon Redshift Cluster Management Guide.
     * - Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun
     * - Constraints: Minimum 30-minute window.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-preferredmaintenancewindow */
    PreferredMaintenanceWindow?: string | Intrinsic
    /**
     * - If `true`, the cluster can be accessed from a public network.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-publiclyaccessible */
    PubliclyAccessible?: boolean | Intrinsic
    /**
     * - The Amazon Redshift operation to be performed. Supported operations are `pause-cluster`, `resume-cluster`, and `failover-primary-compute`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-resourceaction */
    ResourceAction?: string | Intrinsic
    /**
     * - Describes a `RevisionTarget` object.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-revisiontarget */
    RevisionTarget?: string | Intrinsic
    /**
     * - Rotates the encryption keys for a cluster.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-rotateencryptionkey */
    RotateEncryptionKey?: boolean | Intrinsic
    /**
     * - The name of the cluster the source snapshot was created from. This parameter is required if your user or role has a policy containing a snapshot resource element that specifies anything other than \* for the cluster name.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-snapshotclusteridentifier */
    SnapshotClusterIdentifier?: string | Intrinsic
    /**
     * - The name of the snapshot copy grant.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-snapshotcopygrantname */
    SnapshotCopyGrantName?: string | Intrinsic
    /**
     * - Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-snapshotcopymanual */
    SnapshotCopyManual?: boolean | Intrinsic
    /**
     * - The number of days to retain automated snapshots in the destination AWS Region after they are copied from the source AWS Region.
     * - By default, this only changes the retention period of copied automated snapshots.
     * - If you decrease the retention period for automated snapshots that are copied to a destination AWS Region, Amazon Redshift deletes any existing automated snapshots that were copied to the destination AWS Region and that fall outside of the new retention period.
     * - Constraints: Must be at least 1 and no more than 35 for automated snapshots.
     * - If you specify the `manual` option, only newly copied manual snapshots will have the new retention period.
     * - If you specify the value of -1 newly copied manual snapshots are retained indefinitely.
     * - Constraints: The number of days must be either -1 or an integer between 1 and 3,653 for manual snapshots.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-snapshotcopyretentionperiod */
    SnapshotCopyRetentionPeriod?: number | Intrinsic
    /**
     * - The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive. You must specify this parameter or `snapshotArn`, but not both.
     * - Example: `my-snapshot-id`
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-snapshotidentifier */
    SnapshotIdentifier?: string | Intrinsic
    /**
     * - A list of tag instances.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-redshift-cluster-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-tags */
    Tags?: Tag[]
    /**
     * - A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.
     * - Default: The default VPC security group is associated with the cluster.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-cluster.html#cfn-redshift-cluster-vpcsecuritygroupids */
    VpcSecurityGroupIds?: (string | Intrinsic)[]
  }
}
