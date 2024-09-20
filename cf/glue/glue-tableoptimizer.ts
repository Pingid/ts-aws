import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
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
  Enabled: boolean | Intrinsic
  /**
   * - A role passed by the caller which gives the service permission to update the resources associated with the optimizer on the caller's behalf.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-tableoptimizerconfiguration-rolearn */
  RoleArn: string | Intrinsic
}

/**
 * A resource that describes the AWS Glue resource for enabling compaction to improve read performance for open table formats.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html */

export interface GlueTableOptimizer extends ResourceAttributes {
  Type: 'AWS::Glue::TableOptimizer'
  Properties: {
    /**
     * - The catalog ID of the table.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-catalogid */
    CatalogId: string | Intrinsic
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
    DatabaseName: string | Intrinsic
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
    TableName: string | Intrinsic
    /**
     * - Specifies configuration details of a table optimizer.
     * - _Required_: Yes
     * - _Type_: [TableOptimizerConfiguration](./aws-properties-glue-tableoptimizer-tableoptimizerconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-tableoptimizerconfiguration */
    TableOptimizerConfiguration: TableOptimizerConfiguration
    /**
     * - The type of table optimizer. Currently, the only valid value is compaction.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-tableoptimizer.html#cfn-glue-tableoptimizer-type */
    Type: string | Intrinsic
  }
}
