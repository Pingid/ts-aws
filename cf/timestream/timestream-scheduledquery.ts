import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Configuration of the schedule of the query.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html */

export interface ScheduleConfiguration {
    /**
     * - An expression that denotes when to trigger the scheduled query run. This can be a cron expression or a rate expression.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-scheduleconfiguration-scheduleexpression */
    "ScheduleExpression": string | Intrinsic;
}

/**
 * A tag is a label that you assign to a Timestream database and/or table. Each tag consists of a key and an optional value, both of which you define. With tags, you can categorize databases and/or tables, for example, by purpose, owner, or environment.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html */

export interface Tag {
    /**
     * - The key of the tag. Tag keys are case sensitive.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the tag. Tag values are case-sensitive and can be null.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Details on S3 location for error reports that result from running a query.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html */

export interface S3Configuration {
    /**
     * - Name of the S3 bucket under which error reports will be created.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]`
     * - _Minimum_: `3`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-s3configuration-bucketname */
    "BucketName": string | Intrinsic;
    /**
     * - Encryption at rest options for the error reports. If no encryption option is specified, Timestream will choose SSE\_S3 as default.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `SSE_S3 | SSE_KMS`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-s3configuration-encryptionoption */
    "EncryptionOption"?: string | Intrinsic;
    /**
     * - Prefix for the error report key. Timestream by default adds the following prefix to the error report path.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9|!\-_*'\(\)]([a-zA-Z0-9]|[!\-_*'\(\)\/.])+`
     * - _Minimum_: `1`
     * - _Maximum_: `896`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-s3configuration-objectkeyprefix */
    "ObjectKeyPrefix"?: string | Intrinsic;
}

/**
 * Configuration required for error reporting.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html */

export interface ErrorReportConfiguration {
    /**
     * - The S3 configuration for the error reports.
     * - _Required_: Yes
     * - _Type_: [S3Configuration](./aws-properties-timestream-scheduledquery-s3configuration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-errorreportconfiguration-s3configuration */
    "S3Configuration": S3Configuration;
}

/**
 * Details on SNS that are required to send the notification.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html */

export interface SnsConfiguration {
    /**
     * - SNS topic ARN that the scheduled query status notifications will be sent to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-snsconfiguration-topicarn */
    "TopicArn": string | Intrinsic;
}

/**
 * Notification configuration for a scheduled query. A notification is sent by Timestream when a scheduled query is created, its state is updated or when it is deleted.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html */

export interface NotificationConfiguration {
    /**
     * - Details on SNS configuration.
     * - _Required_: Yes
     * - _Type_: [SnsConfiguration](./aws-properties-timestream-scheduledquery-snsconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-notificationconfiguration-snsconfiguration */
    "SnsConfiguration": SnsConfiguration;
}

/**
 * This type is used to map column(s) from the query result to a dimension in the destination table.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html */

export interface DimensionMapping {
    /**
     * - Type for the dimension: VARCHAR
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `VARCHAR`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-dimensionmapping-dimensionvaluetype */
    "DimensionValueType": string | Intrinsic;
    /**
     * - Column name from query result.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-dimensionmapping-name */
    "Name": string | Intrinsic;
}

/**
 * MixedMeasureMappings are mappings that can be used to ingest data into a mixture of narrow and multi measures in the derived table.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html */

export interface MixedMeasureMapping {
    /**
     * - Refers to the value of measure\_name in a result row. This field is required if MeasureNameColumn is provided.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-mixedmeasuremapping-measurename */
    "MeasureName"?: string | Intrinsic;
    /**
     * - Type of the value that is to be read from sourceColumn. If the mapping is for MULTI, use MeasureValueType.MULTI.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `BIGINT | BOOLEAN | DOUBLE | VARCHAR | MULTI`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-mixedmeasuremapping-measurevaluetype */
    "MeasureValueType": string | Intrinsic;
    /**
     * - Required when measureValueType is MULTI. Attribute mappings for MULTI value measures.
     * - _Required_: No
     * - _Type_: Array of [MultiMeasureAttributeMapping](./aws-properties-timestream-scheduledquery-multimeasureattributemapping.html)
     * - _Minimum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-mixedmeasuremapping-multimeasureattributemappings */
    "MultiMeasureAttributeMappings"?: MultiMeasureAttributeMapping[];
    /**
     * - This field refers to the source column from which measure-value is to be read for result materialization.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-mixedmeasuremapping-sourcecolumn */
    "SourceColumn"?: string | Intrinsic;
    /**
     * - Target measure name to be used. If not provided, the target measure name by default would be measure-name if provided, or sourceColumn otherwise.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-mixedmeasuremapping-targetmeasurename */
    "TargetMeasureName"?: string | Intrinsic;
}

/**
 * Attribute mapping for MULTI value measures.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html */

export interface MultiMeasureAttributeMapping {
    /**
     * - Type of the attribute to be read from the source column.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `BIGINT | BOOLEAN | DOUBLE | VARCHAR | TIMESTAMP`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-multimeasureattributemapping-measurevaluetype */
    "MeasureValueType": string | Intrinsic;
    /**
     * - Source column from where the attribute value is to be read.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-multimeasureattributemapping-sourcecolumn */
    "SourceColumn": string | Intrinsic;
    /**
     * - Custom name to be used for attribute name in derived table. If not provided, source column name would be used.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-multimeasureattributemapping-targetmultimeasureattributename */
    "TargetMultiMeasureAttributeName"?: string | Intrinsic;
}

/**
 * Only one of MixedMeasureMappings or MultiMeasureMappings is to be provided. MultiMeasureMappings can be used to ingest data as multi measures in the derived table.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html */

export interface MultiMeasureMappings {
    /**
     * - Required. Attribute mappings to be used for mapping query results to ingest data for multi-measure attributes.
     * - _Required_: Yes
     * - _Type_: Array of [MultiMeasureAttributeMapping](./aws-properties-timestream-scheduledquery-multimeasureattributemapping.html)
     * - _Minimum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-multimeasuremappings-multimeasureattributemappings */
    "MultiMeasureAttributeMappings": MultiMeasureAttributeMapping[];
    /**
     * - The name of the target multi-measure name in the derived table. This input is required when measureNameColumn is not provided. If MeasureNameColumn is provided, then value from that column will be used as multi-measure name.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-multimeasuremappings-targetmultimeasurename */
    "TargetMultiMeasureName"?: string | Intrinsic;
}

/**
 * Configuration to write data into Timestream database and table. This configuration allows the user to map the query result select columns into the destination table columns.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html */

export interface TimestreamConfiguration {
    /**
     * - Name of Timestream database to which the query result will be written.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-timestreamconfiguration-databasename */
    "DatabaseName": string | Intrinsic;
    /**
     * - This is to allow mapping column(s) from the query result to the dimension in the destination table.
     * - _Required_: Yes
     * - _Type_: Array of [DimensionMapping](./aws-properties-timestream-scheduledquery-dimensionmapping.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-timestreamconfiguration-dimensionmappings */
    "DimensionMappings": DimensionMapping[];
    /**
     * - Name of the measure column. Also see `MultiMeasureMappings` and `MixedMeasureMappings` for how measure name properties on those relate to `MeasureNameColumn`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-timestreamconfiguration-measurenamecolumn */
    "MeasureNameColumn"?: string | Intrinsic;
    /**
     * - Specifies how to map measures to multi-measure records.
     * - _Required_: No
     * - _Type_: Array of [MixedMeasureMapping](./aws-properties-timestream-scheduledquery-mixedmeasuremapping.html)
     * - _Minimum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-timestreamconfiguration-mixedmeasuremappings */
    "MixedMeasureMappings"?: MixedMeasureMapping[];
    /**
     * - Multi-measure mappings.
     * - _Required_: No
     * - _Type_: [MultiMeasureMappings](./aws-properties-timestream-scheduledquery-multimeasuremappings.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-timestreamconfiguration-multimeasuremappings */
    "MultiMeasureMappings"?: MultiMeasureMappings;
    /**
     * - Name of Timestream table that the query result will be written to. The table should be within the same database that is provided in Timestream configuration.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-timestreamconfiguration-tablename */
    "TableName": string | Intrinsic;
    /**
     * - Column from query result that should be used as the time column in destination table. Column type for this should be TIMESTAMP.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-timestreamconfiguration-timecolumn */
    "TimeColumn": string | Intrinsic;
}

/**
 * Configuration used for writing the output of a query.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html */

export interface TargetConfiguration {
    /**
     * - Configuration needed to write data into the Timestream database and table.
     * - _Required_: Yes
     * - _Type_: [TimestreamConfiguration](./aws-properties-timestream-scheduledquery-timestreamconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-targetconfiguration-timestreamconfiguration */
    "TimestreamConfiguration": TimestreamConfiguration;
}

/**
 * Create a scheduled query that will be run on your behalf at the configured schedule. Timestream assumes the execution role provided as part of the `ScheduledQueryExecutionRoleArn` parameter to run the query. You can use the `NotificationConfiguration` parameter to configure notification for your scheduled query operations.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html */

export interface TimestreamScheduledQuery extends ResourceAttributes {
    "Type": "AWS::Timestream::ScheduledQuery";
    "Properties": {
        /**
         * - Using a ClientToken makes the call to CreateScheduledQuery idempotent, in other words, making the same request repeatedly will produce the same result. Making multiple identical CreateScheduledQuery requests has the same effect as making a single request.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `32`
         * - _Maximum_: `128`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-clienttoken */
        "ClientToken"?: string | Intrinsic;
        /**
         * - Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results.
         * - _Required_: Yes
         * - _Type_: [ErrorReportConfiguration](./aws-properties-timestream-scheduledquery-errorreportconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-errorreportconfiguration */
        "ErrorReportConfiguration": ErrorReportConfiguration;
        /**
         * - The Amazon KMS key used to encrypt the scheduled query resource, at-rest. If the Amazon KMS key is not specified, the scheduled query resource will be encrypted with a Timestream owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix the name with _alias/_
         * - If ErrorReportConfiguration uses `SSE_KMS` as encryption type, the same KmsKeyId is used to encrypt the error report at rest.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-kmskeyid */
        "KmsKeyId"?: string | Intrinsic;
        /**
         * - Notification configuration for the scheduled query. A notification is sent by Timestream when a query run finishes, when the state is updated or when you delete it.
         * - _Required_: Yes
         * - _Type_: [NotificationConfiguration](./aws-properties-timestream-scheduledquery-notificationconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-notificationconfiguration */
        "NotificationConfiguration": NotificationConfiguration;
        /**
         * - The query string to run. Parameter names can be specified in the query string `@` character followed by an identifier. The named Parameter `@scheduled_runtime` is reserved and can be used in the query to get the time at which the query is scheduled to run.
         * - The timestamp calculated according to the ScheduleConfiguration parameter, will be the value of `@scheduled_runtime` paramater for each query run. For example, consider an instance of a scheduled query executing on 2021-12-01 00:00:00. For this instance, the `@scheduled_runtime` parameter is initialized to the timestamp 2021-12-01 00:00:00 when invoking the query.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `262144`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-querystring */
        "QueryString": string | Intrinsic;
        /**
         * - Schedule configuration.
         * - _Required_: Yes
         * - _Type_: [ScheduleConfiguration](./aws-properties-timestream-scheduledquery-scheduleconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-scheduleconfiguration */
        "ScheduleConfiguration": ScheduleConfiguration;
        /**
         * - The ARN for the IAM role that Timestream will assume when running the scheduled query.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-scheduledqueryexecutionrolearn */
        "ScheduledQueryExecutionRoleArn": string | Intrinsic;
        /**
         * - A name for the query. Scheduled query names must be unique within each Region.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9_.-]+`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-scheduledqueryname */
        "ScheduledQueryName"?: string | Intrinsic;
        /**
         * - A list of key-value pairs to label the scheduled query.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-timestream-scheduledquery-tag.html)
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-tags */
        "Tags"?: Tag[];
        /**
         * - Scheduled query target store configuration.
         * - _Required_: No
         * - _Type_: [TargetConfiguration](./aws-properties-timestream-scheduledquery-targetconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-scheduledquery.html#cfn-timestream-scheduledquery-targetconfiguration */
        "TargetConfiguration"?: TargetConfiguration;
    };
}