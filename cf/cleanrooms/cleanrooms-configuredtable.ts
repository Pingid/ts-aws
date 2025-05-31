import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html */

export interface Tag {
    /**
     * - The key of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-tag-value */
    "Value": string | Intrinsic;
}

/**
 * A reference to a table within Athena.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html */

export interface AthenaTableReference {
    /**
     * - The database name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-athenatablereference-databasename */
    "DatabaseName": string | Intrinsic;
    /**
     * - The output location for the Athena table.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `8`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-athenatablereference-outputlocation */
    "OutputLocation"?: string | Intrinsic;
    /**
     * - The table reference.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-athenatablereference-tablename */
    "TableName": string | Intrinsic;
    /**
     * - The workgroup of the Athena table reference.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-athenatablereference-workgroup */
    "WorkGroup": string | Intrinsic;
}

/**
 * A reference to a table within an AWS Glue data catalog.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html */

export interface GlueTableReference {
    /**
     * - The name of the database the AWS Glue table belongs to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_](([a-zA-Z0-9_ ]+-)*([a-zA-Z0-9_ ]+))?$`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-gluetablereference-databasename */
    "DatabaseName": string | Intrinsic;
    /**
     * - The name of the AWS Glue table.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_](([a-zA-Z0-9_ ]+-)*([a-zA-Z0-9_ ]+))?$`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-gluetablereference-tablename */
    "TableName": string | Intrinsic;
}

/**
 * A type of analysis rule that enables row-level analysis.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html */

export interface AnalysisRuleList {
    /**
     * - An indicator as to whether additional analyses (such as AWS Clean Rooms ML) can be applied to the output of the direct query.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ALLOWED | REQUIRED | NOT_ALLOWED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysisrulelist-additionalanalyses */
    "AdditionalAnalyses"?: string | Intrinsic;
    /**
     * - The logical operators (if any) that are to be used in an INNER JOIN match condition. Default is `AND`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `2`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysisrulelist-allowedjoinoperators */
    "AllowedJoinOperators"?: (string | Intrinsic)[];
    /**
     * - Columns that can be used to join a configured table with the table of the member who can query and other members' configured tables.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysisrulelist-joincolumns */
    "JoinColumns": (string | Intrinsic)[];
    /**
     * - Columns that can be listed in the output.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysisrulelist-listcolumns */
    "ListColumns": (string | Intrinsic)[];
}

/**
 * The Snowflake table schema.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html */

export interface SnowflakeTableSchemaV1 {
    /**
     * - The column name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-snowflaketableschemav1-columnname */
    "ColumnName": string | Intrinsic;
    /**
     * - The column's data type. Supported data types: `ARRAY`, `BIGINT`, `BOOLEAN`, `CHAR`, `DATE`, `DECIMAL`, `DOUBLE`, `DOUBLE PRECISION`, `FLOAT`, `FLOAT4`, `INT`, `INTEGER`, `MAP`, `NUMERIC`, `NUMBER`, `REAL`, `SMALLINT`, `STRING`, `TIMESTAMP`, `TIMESTAMP_LTZ`, `TIMESTAMP_NTZ`, `DATETIME`, `TINYINT`, `VARCHAR`, `TEXT`, `CHARACTER`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-snowflaketableschemav1-columntype */
    "ColumnType": string | Intrinsic;
}

/**
 * The schema of a Snowflake table.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html */

export interface SnowflakeTableSchema {
    /**
     * - The schema of a Snowflake table.
     * - _Required_: Yes
     * - _Type_: Array of [SnowflakeTableSchemaV1](./aws-properties-cleanrooms-configuredtable-snowflaketableschemav1.html)
     * - _Minimum_: `1`
     * - _Maximum_: `250`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-snowflaketableschema-v1 */
    "V1": SnowflakeTableSchemaV1[];
}

/**
 * A reference to a table within Snowflake.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html */

export interface SnowflakeTableReference {
    /**
     * - The account identifier for the Snowflake table reference.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `3`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-snowflaketablereference-accountidentifier */
    "AccountIdentifier": string | Intrinsic;
    /**
     * - The name of the database the Snowflake table belongs to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-snowflaketablereference-databasename */
    "DatabaseName": string | Intrinsic;
    /**
     * - The schema name of the Snowflake table reference.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-snowflaketablereference-schemaname */
    "SchemaName": string | Intrinsic;
    /**
     * - The secret ARN of the Snowflake table reference.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-snowflaketablereference-secretarn */
    "SecretArn": string | Intrinsic;
    /**
     * - The name of the Snowflake table.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-snowflaketablereference-tablename */
    "TableName": string | Intrinsic;
    /**
     * - The schema of the Snowflake table.
     * - _Required_: Yes
     * - _Type_: [SnowflakeTableSchema](./aws-properties-cleanrooms-configuredtable-snowflaketableschema.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-snowflaketablereference-tableschema */
    "TableSchema": SnowflakeTableSchema;
}

/**
 * A pointer to the dataset that underlies this table.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html */

export interface TableReference {
    /**
     * - If present, a reference to the Athena table referred to by this table reference.
     * - _Required_: No
     * - _Type_: [AthenaTableReference](./aws-properties-cleanrooms-configuredtable-athenatablereference.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-tablereference-athena */
    "Athena"?: AthenaTableReference;
    /**
     * - If present, a reference to the AWS Glue table referred to by this table reference.
     * - _Required_: No
     * - _Type_: [GlueTableReference](./aws-properties-cleanrooms-configuredtable-gluetablereference.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-tablereference-glue */
    "Glue"?: GlueTableReference;
    /**
     * - If present, a reference to the Snowflake table referred to by this table reference.
     * - _Required_: No
     * - _Type_: [SnowflakeTableReference](./aws-properties-cleanrooms-configuredtable-snowflaketablereference.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-tablereference-snowflake */
    "Snowflake"?: SnowflakeTableReference;
}

/**
 * Column in configured table that can be used in aggregate function in query.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html */

export interface AggregateColumn {
    /**
     * - Column names in configured table of aggregate columns.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-aggregatecolumn-columnnames */
    "ColumnNames": (string | Intrinsic)[];
    /**
     * - Aggregation function that can be applied to aggregate column in query.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `SUM | SUM_DISTINCT | COUNT | COUNT_DISTINCT | AVG`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-aggregatecolumn-function */
    "Function": string | Intrinsic;
}

/**
 * Constraint on query output removing output rows that do not meet a minimum number of distinct values of a specified column.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html */

export interface AggregationConstraint {
    /**
     * - Column in aggregation constraint for which there must be a minimum number of distinct values in an output row for it to be in the query output.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-z0-9_](([a-z0-9_ ]+-)*([a-z0-9_ ]+))?$`
     * - _Minimum_: `1`
     * - _Maximum_: `127`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-aggregationconstraint-columnname */
    "ColumnName": string | Intrinsic;
    /**
     * - The minimum number of distinct values that an output row must be an aggregation of. Minimum threshold of distinct values for a specified column that must exist in an output row for it to be in the query output.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `2`
     * - _Maximum_: `100000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-aggregationconstraint-minimum */
    "Minimum": number | Intrinsic;
    /**
     * - The type of aggregation the constraint allows. The only valid value is currently \`COUNT\_DISTINCT\`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `COUNT_DISTINCT`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-aggregationconstraint-type */
    "Type": string | Intrinsic;
}

/**
 * A type of analysis rule that enables query structure and specified queries that produce aggregate statistics.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html */

export interface AnalysisRuleAggregation {
    /**
     * - An indicator as to whether additional analyses (such as AWS Clean Rooms ML) can be applied to the output of the direct query.
     * - The `additionalAnalyses` parameter is currently supported for the list analysis rule (`AnalysisRuleList`) and the custom analysis rule (`AnalysisRuleCustom`).
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ALLOWED | REQUIRED | NOT_ALLOWED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysisruleaggregation-additionalanalyses */
    "AdditionalAnalyses"?: string | Intrinsic;
    /**
     * - The columns that query runners are allowed to use in aggregation queries.
     * - _Required_: Yes
     * - _Type_: Array of [AggregateColumn](./aws-properties-cleanrooms-configuredtable-aggregatecolumn.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysisruleaggregation-aggregatecolumns */
    "AggregateColumns": AggregateColumn[];
    /**
     * - Which logical operators (if any) are to be used in an INNER JOIN match condition. Default is `AND`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `2`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysisruleaggregation-allowedjoinoperators */
    "AllowedJoinOperators"?: (string | Intrinsic)[];
    /**
     * - The columns that query runners are allowed to select, group by, or filter by.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysisruleaggregation-dimensioncolumns */
    "DimensionColumns": (string | Intrinsic)[];
    /**
     * - Columns in configured table that can be used in join statements and/or as aggregate columns. They can never be outputted directly.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysisruleaggregation-joincolumns */
    "JoinColumns": (string | Intrinsic)[];
    /**
     * - Control that requires member who runs query to do a join with their configured table and/or other configured table in query.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `QUERY_RUNNER`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysisruleaggregation-joinrequired */
    "JoinRequired"?: string | Intrinsic;
    /**
     * - Columns that must meet a specific threshold value (after an aggregation function is applied to it) for each output row to be returned.
     * - _Required_: Yes
     * - _Type_: Array of [AggregationConstraint](./aws-properties-cleanrooms-configuredtable-aggregationconstraint.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysisruleaggregation-outputconstraints */
    "OutputConstraints": AggregationConstraint[];
    /**
     * - Set of scalar functions that are allowed to be used on dimension columns and the output of aggregation of metrics.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysisruleaggregation-scalarfunctions */
    "ScalarFunctions": (string | Intrinsic)[];
}

/**
 * Specifies the name of the column that contains the unique identifier of your users, whose privacy you want to protect.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html */

export interface DifferentialPrivacyColumn {
    /**
     * - The name of the column, such as user\_id, that contains the unique identifier of your users, whose privacy you want to protect. If you want to turn on differential privacy for two or more tables in a collaboration, you must configure the same column as the user identifier column in both analysis rules.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-differentialprivacycolumn-name */
    "Name": string | Intrinsic;
}

/**
 * The analysis method allowed for the configured tables.
 * `DIRECT_QUERY` allows SQL queries to be run directly on this table.
 * `DIRECT_JOB` allows PySpark jobs to be run directly on this table.
 * `MULTIPLE` allows both SQL queries and PySpark jobs to be run directly on this table.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html */

export interface DifferentialPrivacy {
    /**
     * - The name of the column, such as user\_id, that contains the unique identifier of your users, whose privacy you want to protect. If you want to turn on differential privacy for two or more tables in a collaboration, you must configure the same column as the user identifier column in both analysis rules.
     * - _Required_: Yes
     * - _Type_: Array of [DifferentialPrivacyColumn](./aws-properties-cleanrooms-configuredtable-differentialprivacycolumn.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-differentialprivacy-columns */
    "Columns": DifferentialPrivacyColumn[];
}

/**
 * A type of analysis rule that enables the table owner to approve custom SQL queries on their configured tables. It supports differential privacy.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html */

export interface AnalysisRuleCustom {
    /**
     * - An indicator as to whether additional analyses (such as AWS Clean Rooms ML) can be applied to the output of the direct query.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ALLOWED | REQUIRED | NOT_ALLOWED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysisrulecustom-additionalanalyses */
    "AdditionalAnalyses"?: string | Intrinsic;
    /**
     * - The ARN of the analysis templates that are allowed by the custom analysis rule.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysisrulecustom-allowedanalyses */
    "AllowedAnalyses": (string | Intrinsic)[];
    /**
     * - The IDs of the AWS accounts that are allowed to query by the custom analysis rule. Required when `allowedAnalyses` is `ANY_QUERY`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysisrulecustom-allowedanalysisproviders */
    "AllowedAnalysisProviders"?: (string | Intrinsic)[];
    /**
     * - The differential privacy configuration.
     * - _Required_: No
     * - _Type_: [DifferentialPrivacy](./aws-properties-cleanrooms-configuredtable-differentialprivacy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysisrulecustom-differentialprivacy */
    "DifferentialPrivacy"?: DifferentialPrivacy;
    /**
     * - A list of columns that aren't allowed to be shown in the query output.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysisrulecustom-disallowedoutputcolumns */
    "DisallowedOutputColumns"?: (string | Intrinsic)[];
}

/**
 * Controls on the query specifications that can be run on a configured table.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html */

export interface ConfiguredTableAnalysisRulePolicyV1 {
    /**
     * - Analysis rule type that enables only aggregation queries on a configured table.
     * - _Required_: No
     * - _Type_: [AnalysisRuleAggregation](./aws-properties-cleanrooms-configuredtable-analysisruleaggregation.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-configuredtableanalysisrulepolicyv1-aggregation */
    "Aggregation"?: AnalysisRuleAggregation;
    /**
     * - Analysis rule type that enables custom SQL queries on a configured table.
     * - _Required_: No
     * - _Type_: [AnalysisRuleCustom](./aws-properties-cleanrooms-configuredtable-analysisrulecustom.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-configuredtableanalysisrulepolicyv1-custom */
    "Custom"?: AnalysisRuleCustom;
    /**
     * - Analysis rule type that enables only list queries on a configured table.
     * - _Required_: No
     * - _Type_: [AnalysisRuleList](./aws-properties-cleanrooms-configuredtable-analysisrulelist.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-configuredtableanalysisrulepolicyv1-list */
    "List"?: AnalysisRuleList;
}

/**
 * Controls on the query specifications that can be run on a configured table.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html */

export interface ConfiguredTableAnalysisRulePolicy {
    /**
     * - Controls on the query specifications that can be run on a configured table.
     * - _Required_: Yes
     * - _Type_: [ConfiguredTableAnalysisRulePolicyV1](./aws-properties-cleanrooms-configuredtable-configuredtableanalysisrulepolicyv1.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-configuredtableanalysisrulepolicy-v1 */
    "V1": ConfiguredTableAnalysisRulePolicyV1;
}

/**
 * A specification about how data from the configured table can be used in a query.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html */

export interface AnalysisRule {
    /**
     * - A policy that describes the associated data usage limitations.
     * - _Required_: Yes
     * - _Type_: [ConfiguredTableAnalysisRulePolicy](./aws-properties-cleanrooms-configuredtable-configuredtableanalysisrulepolicy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysisrule-policy */
    "Policy": ConfiguredTableAnalysisRulePolicy;
    /**
     * - The type of analysis rule.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `AGGREGATION | LIST | CUSTOM`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysisrule-type */
    "Type": string | Intrinsic;
}

/**
 * Creates a new configured table resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html */

export interface CleanRoomsConfiguredTable extends ResourceAttributes {
    "Type": "AWS::CleanRooms::ConfiguredTable";
    "Properties": {
        /**
         * - The columns within the underlying AWS Glue table that can be utilized within collaborations.
         * - _Required_: Yes
         * - _Type_: Array of String
         * - _Minimum_: `1`
         * - _Maximum_: `128 | 100`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-allowedcolumns */
        "AllowedColumns": (string | Intrinsic)[];
        /**
         * - The analysis method for the configured table.
         * - `DIRECT_QUERY` allows SQL queries to be run directly on this table.
         * - `DIRECT_JOB` allows PySpark jobs to be run directly on this table.
         * - `MULTIPLE` allows both SQL queries and PySpark jobs to be run directly on this table.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `DIRECT_QUERY | DIRECT_JOB | MULTIPLE`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysismethod */
        "AnalysisMethod": string | Intrinsic;
        /**
         * - The analysis rule that was created for the configured table.
         * - _Required_: No
         * - _Type_: Array of [AnalysisRule](./aws-properties-cleanrooms-configuredtable-analysisrule.html)
         * - _Minimum_: `1`
         * - _Maximum_: `1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-analysisrules */
        "AnalysisRules"?: AnalysisRule[];
        /**
         * - A description for the configured table.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n]*$`
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-description */
        "Description"?: string | Intrinsic;
        /**
         * - A name for the configured table.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t]*$`
         * - _Minimum_: `1`
         * - _Maximum_: `100`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-name */
        "Name": string | Intrinsic;
        /**
         * - The selected analysis methods for the configured table.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-selectedanalysismethods */
        "SelectedAnalysisMethods"?: (string | Intrinsic)[];
        /**
         * - The table that this configured table represents.
         * - _Required_: Yes
         * - _Type_: [TableReference](./aws-properties-cleanrooms-configuredtable-tablereference.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-tablereference */
        "TableReference": TableReference;
        /**
         * - An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-cleanrooms-configuredtable-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-configuredtable.html#cfn-cleanrooms-configuredtable-tags */
        "Tags"?: Tag[];
    };
}