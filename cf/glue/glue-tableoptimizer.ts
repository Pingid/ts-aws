import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The configuration for a snapshot retention optimizer for Apache Iceberg tables.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html */

export interface RetentionConfiguration {
    /**
     * - The configuration for an Iceberg snapshot retention optimizer.
     * - _Required_: No
     * - _Type_: [IcebergConfiguration](./aws-properties-glue-tableoptimizer-icebergconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-retentionconfiguration-icebergconfiguration */
    "IcebergConfiguration"?: IcebergConfiguration;
}

/**
 * An object that describes the VPC configuration for a table optimizer. This configuration is necessary to perform optimization on tables that are in a customer VPC.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html */

export interface VpcConfiguration {
    /**
     * - The name of the AWS Glue connection used for the VPC for the table optimizer.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-vpcconfiguration-glueconnectionname */
    "GlueConnectionName"?: string | Intrinsic;
}

/**
 * IcebergConfiguration is a property type within the `AWS::Glue::TableOptimizer` resource in AWS CloudFormation. This configuration is used when setting up table optimization for Iceberg tables in AWS Glue.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html */

export interface IcebergConfiguration {
    /**
     * - Specifies a directory in which to look for orphan files (defaults to the table's location). You may choose a sub-directory rather than the top-level table location.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-icebergconfiguration-location */
    "Location"?: string | Intrinsic;
    /**
     * - The specific number of days you want to keep the orphan files.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-icebergconfiguration-orphanfileretentionperiodindays */
    "OrphanFileRetentionPeriodInDays"?: number | Intrinsic;
}

/**
 * Configuration for removing files that are are not tracked by the Iceberg table metadata, and are older than your configured age limit. This configuration helps optimize storage usage and costs by automatically cleaning up files that are no longer needed by the table.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html */

export interface OrphanFileDeletionConfiguration {
    /**
     * - The `IcebergConfiguration` property helps optimize your Iceberg tables in AWS Glue by allowing you to specify format-specific settings that control how data is stored, compressed, and managed.
     * - _Required_: No
     * - _Type_: [IcebergConfiguration](./aws-properties-glue-tableoptimizer-icebergconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-orphanfiledeletionconfiguration-icebergconfiguration */
    "IcebergConfiguration"?: IcebergConfiguration;
}

/**
 * Specifies configuration details of a table optimizer.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html */

export interface TableOptimizerConfiguration {
    /**
     * - Whether the table optimization is enabled.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-tableoptimizerconfiguration-enabled */
    "Enabled": boolean | Intrinsic;
    /**
     * - `OrphanFileDeletionConfiguration` is a property that can be included within the TableOptimizer resource. It controls the automatic deletion of orphaned files - files that are not tracked by the table metadata, and older than the configured age limit.
     * - _Required_: No
     * - _Type_: [OrphanFileDeletionConfiguration](./aws-properties-glue-tableoptimizer-orphanfiledeletionconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-tableoptimizerconfiguration-orphanfiledeletionconfiguration */
    "OrphanFileDeletionConfiguration"?: OrphanFileDeletionConfiguration;
    /**
     * - The configuration for a snapshot retention optimizer for Apache Iceberg tables.
     * - _Required_: No
     * - _Type_: [RetentionConfiguration](./aws-properties-glue-tableoptimizer-retentionconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-tableoptimizerconfiguration-retentionconfiguration */
    "RetentionConfiguration"?: RetentionConfiguration;
    /**
     * - A role passed by the caller which gives the service permission to update the resources associated with the optimizer on the caller's behalf.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-tableoptimizerconfiguration-rolearn */
    "RoleArn": string | Intrinsic;
    /**
     * - An object that describes the VPC configuration for a table optimizer. This configuration is necessary to perform optimization on tables that are in a customer VPC.
     * - _Required_: No
     * - _Type_: [VpcConfiguration](./aws-properties-glue-tableoptimizer-vpcconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-tableoptimizerconfiguration-vpcconfiguration */
    "VpcConfiguration"?: VpcConfiguration;
}

/**
 * An AWS Glue resource for enabling table optimizers to improve read performance for open table formats.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html */

export interface GlueTableOptimizer extends ResourceAttributes {
    "Type": "AWS::Glue::TableOptimizer";
    "Properties": {
        /**
         * - The catalog ID of the table.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-catalogid */
        "CatalogId": string | Intrinsic;
        /**
         * - The name of the database. For Hive compatibility, this is folded to lowercase when it is stored.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t]*`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-databasename */
        "DatabaseName": string | Intrinsic;
        /**
         * - The table name. For Hive compatibility, this must be entirely lowercase.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t]*`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-tablename */
        "TableName": string | Intrinsic;
        /**
         * - Specifies configuration details of a table optimizer.
         * - _Required_: Yes
         * - _Type_: [TableOptimizerConfiguration](./aws-properties-glue-tableoptimizer-tableoptimizerconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-tableoptimizerconfiguration */
        "TableOptimizerConfiguration": TableOptimizerConfiguration;
        /**
         * - The type of table optimizer. The valid values are:
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-type */
        "Type": string | Intrinsic;
    };
}