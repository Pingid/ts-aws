import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
 * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the _Amazon RDS User Guide_ or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the _Amazon Aurora User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html */

export interface Tag {
  /**
   * - A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '\_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^(\[\\\\p{L}\\\\p{Z}\\\\p{N}\_.:/=+\\\\-@\]\*)$").
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html#cfn-rds-dbclusterparametergroup-tag-key */
  Key: string | Intrinsic
  /**
   * - A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '\_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^(\[\\\\p{L}\\\\p{Z}\\\\p{N}\_.:/=+\\\\-@\]\*)$").
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html#cfn-rds-dbclusterparametergroup-tag-value */
  Value?: string | Intrinsic
}

/**
 * The `AWS::RDS::DBClusterParameterGroup` resource creates a new Amazon RDS DB cluster parameter group.
 * For information about configuring parameters for Amazon Aurora DB clusters, see [Working with parameter groups](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithParamGroups.html) in the _Amazon Aurora User Guide_.
 * ###### Note
 *
 * If you apply a parameter group to a DB cluster, then its DB instances might need to reboot. This can result in an outage while the DB instances are rebooting.
 *
 * If you apply a change to parameter group associated with a stopped DB cluster, then the updated stack waits until the DB cluster is started.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html */

export interface RDSDBClusterParameterGroup extends ResourceAttributes {
  Type: 'AWS::RDS::DBClusterParameterGroup'
  Properties: {
    /**
     * - The name of the DB cluster parameter group.
     * - Constraints:
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z]{1}(?:-?[a-zA-Z0-9])*$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html#cfn-rds-dbclusterparametergroup-dbclusterparametergroupname */
    DBClusterParameterGroupName?: string | Intrinsic
    /**
     * - The description for the DB cluster parameter group.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html#cfn-rds-dbclusterparametergroup-description */
    Description: string | Intrinsic
    /**
     * - The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.
     * - **Aurora MySQL**
     * - Example: `aurora-mysql5.7`, `aurora-mysql8.0`
     * - **Aurora PostgreSQL**
     * - Example: `aurora-postgresql14`
     * - **RDS for MySQL**
     * - Example: `mysql8.0`
     * - **RDS for PostgreSQL**
     * - Example: `postgres13`
     * - To list all of the available parameter group families for a DB engine, use the following command:
     * - `aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine <engine>`
     * - For example, to list all of the available parameter group families for the Aurora PostgreSQL DB engine, use the following command:
     * - `aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine aurora-postgresql`
     * - The following are the valid DB engine values:
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html#cfn-rds-dbclusterparametergroup-family */
    Family: string | Intrinsic
    /**
     * - Provides a list of parameters for the DB cluster parameter group.
     * - _Required_: Yes
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html#cfn-rds-dbclusterparametergroup-parameters */
    Parameters: any | Intrinsic
    /**
     * - Tags to assign to the DB cluster parameter group.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-rds-dbclusterparametergroup-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html#cfn-rds-dbclusterparametergroup-tags */
    Tags?: Tag[]
  }
}
