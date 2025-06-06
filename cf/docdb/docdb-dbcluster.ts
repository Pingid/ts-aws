import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `ServerlessV2ScalingConfiguration` property type specifies Property description not available. for an [AWS::DocDB::DBCluster](./aws-resource-docdb-dbcluster.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html */

export interface ServerlessV2ScalingConfiguration {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-serverlessv2scalingconfiguration-maxcapacity */
    "MaxCapacity": number | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-serverlessv2scalingconfiguration-mincapacity */
    "MinCapacity": number | Intrinsic;
}

/**
 * Metadata assigned to an Amazon DocumentDB resource consisting of a key-value pair.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html */

export interface Tag {
    /**
     * - The required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with "`aws:`" or "`rds:`". The string can contain only the set of Unicode letters, digits, white space, '\_', '.', '/', '=', '+', '-' (Java regex: "^(\[\\\\p{L}\\\\p{Z}\\\\p{N}\_.:/=+\\\\-\]\*)$").
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with "`aws:`" or "`rds:`". The string can contain only the set of Unicode letters, digits, white space, '\_', '.', '/', '=', '+', '-' (Java regex: "^(\[\\\\p{L}\\\\p{Z}\\\\p{N}\_.:/=+\\\\-\]\*)$").
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The `AWS::DocDB::DBCluster`Amazon DocumentDB (with MongoDB compatibility) resource describes a DBCluster. Amazon DocumentDB is a fully managed, MongoDB-compatible document database engine. For more information, see [DBCluster](https://docs.aws.amazon.com/documentdb/latest/developerguide/API_DBCluster.html) in the _Amazon DocumentDB Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html */

export interface DocDBDBCluster extends ResourceAttributes {
    "Type": "AWS::DocDB::DBCluster";
    "Properties": {
        /**
         * - A list of Amazon EC2 Availability Zones that instances in the cluster can be created in.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-availabilityzones */
        "AvailabilityZones"?: (string | Intrinsic)[];
        /**
         * - The number of days for which automated backups are retained. You must specify a minimum value of 1.
         * - Default: 1
         * - Constraints:
         * - _Required_: No
         * - _Type_: Integer
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-backupretentionperiod */
        "BackupRetentionPeriod"?: number | Intrinsic;
        /**
         * - Set to `true` to copy all tags from the source cluster snapshot to the target cluster snapshot, and otherwise `false`. The default is `false`.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-copytagstosnapshot */
        "CopyTagsToSnapshot"?: boolean | Intrinsic;
        /**
         * - The cluster identifier. This parameter is stored as a lowercase string.
         * - Constraints:
         * - Example: `my-cluster`
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-dbclusteridentifier */
        "DBClusterIdentifier"?: string | Intrinsic;
        /**
         * - The name of the cluster parameter group to associate with this cluster.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-dbclusterparametergroupname */
        "DBClusterParameterGroupName"?: string | Intrinsic;
        /**
         * - A subnet group to associate with this cluster.
         * - Constraints: Must match the name of an existing `DBSubnetGroup`. Must not be default.
         * - Example: `mySubnetgroup`
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-dbsubnetgroupname */
        "DBSubnetGroupName"?: string | Intrinsic;
        /**
         * - Protects clusters from being accidentally deleted. If enabled, the cluster cannot be deleted unless it is modified and `DeletionProtection` is disabled.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-deletionprotection */
        "DeletionProtection"?: boolean | Intrinsic;
        /**
         * - The list of log types that need to be enabled for exporting to Amazon CloudWatch Logs. You can enable audit logs or profiler logs. For more information, see [Auditing Amazon DocumentDB Events](https://docs.aws.amazon.com/documentdb/latest/developerguide/event-auditing.html) and [Profiling Amazon DocumentDB Operations](https://docs.aws.amazon.com/documentdb/latest/developerguide/profiling.html).
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-enablecloudwatchlogsexports */
        "EnableCloudwatchLogsExports"?: (string | Intrinsic)[];
        /**
         * - The version number of the database engine to use. The `--engine-version` will default to the latest major engine version. For production workloads, we recommend explicitly declaring this parameter with the intended major engine version.
         * - If you intend to trigger an in-place upgrade, please refer to [Amazon DocumentDB in-place major version upgrade](https://docs.aws.amazon.com/documentdb/latest/developerguide/docdb-mvu.html). Note that for an in-place engine version upgrade, you need to remove other cluster properties changes (e.g. SecurityGroupId) from the CFN template.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-engineversion */
        "EngineVersion"?: string | Intrinsic;
        /**
         * - The AWS KMS key identifier for an encrypted cluster.
         * - The AWS KMS key identifier is the Amazon Resource Name (ARN) for the AWS KMS encryption key. If you are creating a cluster using the same AWS account that owns the AWS KMS encryption key that is used to encrypt the new cluster, you can use the AWS KMS key alias instead of the ARN for the AWS KMS encryption key.
         * - If an encryption key is not specified in `KmsKeyId`:
         * - AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Regions.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-kmskeyid */
        "KmsKeyId"?: string | Intrinsic;
        /**
         * - Specifies whether to manage the master user password with Amazon Web Services Secrets Manager.
         * - Constraint: You can't manage the master user password with Amazon Web Services Secrets Manager if `MasterUserPassword` is specified.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-managemasteruserpassword */
        "ManageMasterUserPassword"?: boolean | Intrinsic;
        /**
         * - The name of the master user for the cluster.
         * - Constraints:
         * - _Required_: Conditional
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-masterusername */
        "MasterUsername"?: string | Intrinsic;
        /**
         * - The password for the master database user. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).
         * - Constraints: Must contain from 8 to 100 characters.
         * - _Required_: Conditional
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-masteruserpassword */
        "MasterUserPassword"?: string | Intrinsic;
        /**
         * - The Amazon Web Services KMS key identifier to encrypt a secret that is automatically generated and managed in Amazon Web Services Secrets Manager. This setting is valid only if the master user password is managed by Amazon DocumentDB in Amazon Web Services Secrets Manager for the DB cluster.
         * - The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. To use a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN.
         * - If you don't specify `MasterUserSecretKmsKeyId`, then the `aws/secretsmanager` KMS key is used to encrypt the secret. If the secret is in a different Amazon Web Services account, then you can't use the `aws/secretsmanager` KMS key to encrypt the secret, and you must use a customer managed KMS key.
         * - There is a default KMS key for your Amazon Web Services account. Your Amazon Web Services account has a different default KMS key for each Amazon Web Services Region.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-masterusersecretkmskeyid */
        "MasterUserSecretKmsKeyId"?: string | Intrinsic;
        /**
         * - Specifies the port that the database engine is listening on.
         * - _Required_: No
         * - _Type_: Integer
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-port */
        "Port"?: number | Intrinsic;
        /**
         * - The daily time range during which automated backups are created if automated backups are enabled using the `BackupRetentionPeriod` parameter.
         * - The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region.
         * - Constraints:
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-preferredbackupwindow */
        "PreferredBackupWindow"?: string | Intrinsic;
        /**
         * - The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
         * - Format: `ddd:hh24:mi-ddd:hh24:mi`
         * - The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week.
         * - Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun
         * - Constraints: Minimum 30-minute window.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-preferredmaintenancewindow */
        "PreferredMaintenanceWindow"?: string | Intrinsic;
        /**
         * - The date and time to restore the cluster to.
         * - Valid values: A time in Universal Coordinated Time (UTC) format.
         * - Constraints:
         * - Example: `2015-03-07T23:45:00Z`
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-restoretotime */
        "RestoreToTime"?: string | Intrinsic;
        /**
         * - The type of restore to be performed. You can specify one of the following values:
         * - Constraints: You can't specify `copy-on-write` if the engine version of the source DB cluster is earlier than 1.11.
         * - If you don't specify a `RestoreType` value, then the new DB cluster is restored as a full copy of the source DB cluster.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-restoretype */
        "RestoreType"?: string | Intrinsic;
        /**
         * - Specifies whether to rotate the secret managed by Amazon Web Services Secrets Manager for the master user password.
         * - This setting is valid only if the master user password is managed by Amazon DocumentDB in Amazon Web Services Secrets Manager for the cluster. The secret value contains the updated password.
         * - Constraint: You must apply the change immediately when rotating the master user password.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-rotatemasteruserpassword */
        "RotateMasterUserPassword"?: boolean | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: [ServerlessV2ScalingConfiguration](./aws-properties-docdb-dbcluster-serverlessv2scalingconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-serverlessv2scalingconfiguration */
        "ServerlessV2ScalingConfiguration"?: ServerlessV2ScalingConfiguration;
        /**
         * - The identifier for the snapshot or cluster snapshot to restore from.
         * - You can use either the name or the Amazon Resource Name (ARN) to specify a cluster snapshot. However, you can use only the ARN to specify a snapshot.
         * - Constraints:
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-snapshotidentifier */
        "SnapshotIdentifier"?: string | Intrinsic;
        /**
         * - The identifier of the source cluster from which to restore.
         * - Constraints:
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-sourcedbclusteridentifier */
        "SourceDBClusterIdentifier"?: string | Intrinsic;
        /**
         * - Specifies whether the cluster is encrypted.
         * - If you specify `SourceDBClusterIdentifier` or `SnapshotIdentifier` and don’t specify `StorageEncrypted`, the encryption property is inherited from the source cluster or snapshot (unless `KMSKeyId` is specified, in which case the restored cluster will be encrypted with that KMS key). If the source is encrypted and `StorageEncrypted` is specified to be true, the restored cluster will be encrypted (if you want to use a different KMS key, specify the `KMSKeyId` property as well). If the source is unencrypted and `StorageEncrypted` is specified to be true, then the `KMSKeyId` property must be specified. If the source is encrypted, don’t specify `StorageEncrypted` to be false as opting out of encryption is not allowed.
         * - _Required_: Conditional
         * - _Type_: Boolean
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-storageencrypted */
        "StorageEncrypted"?: boolean | Intrinsic;
        /**
         * - The storage type to associate with the DB cluster.
         * - For information on storage types for Amazon DocumentDB clusters, see Cluster storage configurations in the _Amazon DocumentDB Developer Guide_.
         * - Valid values for storage type - `standard | iopt1`
         * - Default value is `standard`
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-storagetype */
        "StorageType"?: string | Intrinsic;
        /**
         * - The tags to be assigned to the cluster.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-docdb-dbcluster-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-tags */
        "Tags"?: Tag[];
        /**
         * - A value that is set to `true` to restore the cluster to the latest restorable backup time, and `false` otherwise.
         * - Default: `false`
         * - Constraints: Cannot be specified if the `RestoreToTime` parameter is provided.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-uselatestrestorabletime */
        "UseLatestRestorableTime"?: boolean | Intrinsic;
        /**
         * - A list of EC2 VPC security groups to associate with this cluster.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html#cfn-docdb-dbcluster-vpcsecuritygroupids */
        "VpcSecurityGroupIds"?: (string | Intrinsic)[];
    };
}