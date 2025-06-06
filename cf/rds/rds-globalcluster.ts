import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
 * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the _Amazon RDS User Guide_ or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the _Amazon Aurora User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html */

export interface Tag {
    /**
     * - A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '\_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^(\[\\\\p{L}\\\\p{Z}\\\\p{N}\_.:/=+\\\\-@\]\*)$").
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-tag-key */
    "Key": string | Intrinsic;
    /**
     * - A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '\_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^(\[\\\\p{L}\\\\p{Z}\\\\p{N}\_.:/=+\\\\-@\]\*)$").
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-tag-value */
    "Value"?: string | Intrinsic;
}

/**
 * The `AWS::RDS::GlobalCluster` resource creates or updates an Amazon Aurora global database spread across multiple AWS Regions.
 * The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem.
 * You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it.
 * For information about Aurora global databases, see [Working with Amazon Aurora Global Databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html) in the _Amazon Aurora User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html */

export interface RDSGlobalCluster extends ResourceAttributes {
    "Type": "AWS::RDS::GlobalCluster";
    "Properties": {
        /**
         * - Specifies whether to enable deletion protection for the new global database cluster. The global database can't be deleted when deletion protection is enabled.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-deletionprotection */
        "DeletionProtection"?: boolean | Intrinsic;
        /**
         * - The database engine to use for this global database cluster.
         * - Valid Values: `aurora-mysql | aurora-postgresql`
         * - Constraints:
         * - _Required_: Conditional
         * - _Type_: String
         * - _Allowed values_: `aurora | aurora-mysql | aurora-postgresql`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-engine */
        "Engine"?: string | Intrinsic;
        /**
         * - The life cycle type for this global database cluster.
         * - This setting only applies to Aurora PostgreSQL-based global databases.
         * - You can use this setting to enroll your global cluster into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your global cluster past the end of standard support for that engine version. For more information, see [Amazon RDS Extended Support with Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html) in the _Amazon Aurora User Guide_.
         * - Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
         * - Default: `open-source-rds-extended-support`
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-enginelifecyclesupport */
        "EngineLifecycleSupport"?: string | Intrinsic;
        /**
         * - The engine version to use for this global database cluster.
         * - Constraints:
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-engineversion */
        "EngineVersion"?: string | Intrinsic;
        /**
         * - The cluster identifier for this global database cluster. This parameter is stored as a lowercase string.
         * - _Required_: Conditional
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z]{1}(?:-?[a-zA-Z0-9]){0,62}$`
         * - _Minimum_: `1`
         * - _Maximum_: `63`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-globalclusteridentifier */
        "GlobalClusterIdentifier"?: string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) to use as the primary cluster of the global database.
         * - If you provide a value for this parameter, don't specify values for the following settings because Amazon Aurora uses the values from the specified source DB cluster:
         * - _Required_: Conditional
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z]{1}(?:-?[a-zA-Z0-9]){0,62}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-sourcedbclusteridentifier */
        "SourceDBClusterIdentifier"?: string | Intrinsic;
        /**
         * - Specifies whether to enable storage encryption for the new global database cluster.
         * - Constraints:
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-storageencrypted */
        "StorageEncrypted"?: boolean | Intrinsic;
        /**
         * - Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
         * - For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the _Amazon RDS User Guide_ or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the _Amazon Aurora User Guide_.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-rds-globalcluster-tag.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-tags */
        "Tags"?: Tag[];
    };
}