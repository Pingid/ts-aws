import type { Intrinsic } from '../intrinsic/index.js' /**
 * A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a `JobSample` value isn't provided, the default is used. The default value is CUSTOM\_ROWS for the mode parameter and 20,000 for the size parameter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html */

export interface JobSample {
  /**
   * - A value that determines whether the profile job is run on the entire dataset or a specified number of rows. This value must be one of the following:
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `FULL_DATASET | CUSTOM_ROWS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-jobsample-mode */
  Mode?: string | Intrinsic
  /**
   * - The `Size` parameter is only required when the mode is CUSTOM\_ROWS. The profile job is run on the specified number of rows. The maximum value for size is Long.MAX\_VALUE.
   * - Long.MAX\_VALUE = 9223372036854775807
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-jobsample-size */
  Size?: number | Intrinsic
}

/**
 * The location in Amazon S3 or AWS Glue Data Catalog where the job writes its output.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html */

export interface OutputLocation {
  /**
   * - The Amazon S3 bucket name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-outputlocation-bucket */
  Bucket: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `12`
   * - _Maximum_: `12`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-outputlocation-bucketowner */
  BucketOwner?: string | Intrinsic
  /**
   * - The unique name of the object in the bucket.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-outputlocation-key */
  Key?: string | Intrinsic
}

/**
 * Represents one or more actions to be performed on a DataBrew dataset.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html */

export interface Recipe {
  /**
   * - The unique name for the recipe.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-recipe-name */
  Name: string | Intrinsic
  /**
   * - The identifier for the version for the recipe.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-recipe-version */
  Version?: string | Intrinsic
}

/**
 * The `Tag` property type specifies Property description not available. for an [AWS::DataBrew::Job](./aws-resource-databrew-job.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-tag-value */
  Value: string | Intrinsic
}

/**
 * Configuration for data quality validation. Used to select the Rulesets and Validation Mode to be used in the profile job. When ValidationConfiguration is null, the profile job will run without data quality validation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html */

export interface ValidationConfiguration {
  /**
   * - The Amazon Resource Name (ARN) for the ruleset to be validated in the profile job. The TargetArn of the selected ruleset should be the same as the Amazon Resource Name (ARN) of the dataset that is associated with the profile job.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-validationconfiguration-rulesetarn */
  RulesetArn: string | Intrinsic
  /**
   * - Mode of data quality validation. Default mode is “CHECK\_ALL” which verifies all rules defined in the selected ruleset.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CHECK_ALL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-validationconfiguration-validationmode */
  ValidationMode?: string | Intrinsic
}

/**
 * Represents options that specify how and where DataBrew writes the database output generated by recipe jobs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html */

export interface DatabaseTableOutputOptions {
  /**
   * - A prefix for the name of a table DataBrew will create in the database.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-databasetableoutputoptions-tablename */
  TableName: string | Intrinsic
  /**
   * - Represents an Amazon S3 location (bucket name and object key) where DataBrew can store intermediate results.
   * - _Required_: No
   * - _Type_: [S3Location](./aws-properties-databrew-job-s3location.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-databasetableoutputoptions-tempdirectory */
  TempDirectory?: S3Location
}

/**
 * Represents options that specify how and where DataBrew writes the Amazon S3 output generated by recipe jobs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html */

export interface S3TableOutputOptions {
  /**
   * - Represents an Amazon S3 location (bucket name and object key) where DataBrew can write output from a job.
   * - _Required_: Yes
   * - _Type_: [S3Location](./aws-properties-databrew-job-s3location.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-s3tableoutputoptions-location */
  Location: S3Location
}

/**
 * Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html */

export interface S3Location {
  /**
   * - The Amazon S3 bucket name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `3`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-s3location-bucket */
  Bucket: string | Intrinsic
  /**
   * - The AWS account ID of the bucket owner.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `12`
   * - _Maximum_: `12`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-s3location-bucketowner */
  BucketOwner?: string | Intrinsic
  /**
   * - The unique name of the object in the bucket.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1280`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-s3location-key */
  Key?: string | Intrinsic
}

/**
 * Configuration for column evaluations for a profile job. ColumnStatisticsConfiguration can be used to select evaluations and override parameters of evaluations for particular columns.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html */

export interface ColumnStatisticsConfiguration {
  /**
   * - List of column selectors. Selectors can be used to select columns from the dataset. When selectors are undefined, configuration will be applied to all supported columns.
   * - _Required_: No
   * - _Type_: Array of [ColumnSelector](./aws-properties-databrew-job-columnselector.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-columnstatisticsconfiguration-selectors */
  Selectors?: ColumnSelector[]
  /**
   * - Configuration for evaluations. Statistics can be used to select evaluations and override parameters of evaluations.
   * - _Required_: Yes
   * - _Type_: [StatisticsConfiguration](./aws-properties-databrew-job-statisticsconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-columnstatisticsconfiguration-statistics */
  Statistics: StatisticsConfiguration
}

/**
 * Selector of a column from a dataset for profile job configuration. One selector includes either a column name or a regular expression.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html */

export interface ColumnSelector {
  /**
   * - The name of a column from a dataset.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-columnselector-name */
  Name?: string | Intrinsic
  /**
   * - A regular expression for selecting a column from a dataset.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-columnselector-regex */
  Regex?: string | Intrinsic
}

/**
 * Represents a set of options that define how DataBrew will write a comma-separated value (CSV) file.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html */

export interface CsvOutputOptions {
  /**
   * - A single character that specifies the delimiter used to create CSV job output.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-csvoutputoptions-delimiter */
  Delimiter?: string | Intrinsic
}

/**
 * Override of a particular evaluation for a profile job.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html */

export interface StatisticOverride {
  /**
   * - A map that includes overrides of an evaluation’s parameters.
   * - _Required_: Yes
   * - _Type_: Object of String
   * - _Pattern_: `^[A-Za-z0-9]{1,128}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-statisticoverride-parameters */
  Parameters: Record<string, string | Intrinsic>
  /**
   * - The name of an evaluation
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[A-Z\_]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-statisticoverride-statistic */
  Statistic: string | Intrinsic
}

/**
 * Configuration of statistics that are allowed to be run on columns that contain detected entities. When undefined, no statistics will be computed on columns that contain detected entities.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html */

export interface AllowedStatistics {
  /**
   * - One or more column statistics to allow for columns that contain detected entities.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-allowedstatistics-statistics */
  Statistics: (string | Intrinsic)[]
}

/**
 * Represents a JDBC database output object which defines the output destination for a DataBrew recipe job to write into.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html */

export interface DatabaseOutput {
  /**
   * - Represents options that specify how and where DataBrew writes the database output generated by recipe jobs.
   * - _Required_: Yes
   * - _Type_: [DatabaseTableOutputOptions](./aws-properties-databrew-job-databasetableoutputoptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-databaseoutput-databaseoptions */
  DatabaseOptions: DatabaseTableOutputOptions
  /**
   * - The output mode to write into the database. Currently supported option: NEW\_TABLE.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NEW_TABLE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-databaseoutput-databaseoutputmode */
  DatabaseOutputMode?: string | Intrinsic
  /**
   * - The AWS Glue connection that stores the connection information for the target database.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-databaseoutput-glueconnectionname */
  GlueConnectionName: string | Intrinsic
}

/**
 * Represents options that specify how and where in the AWS Glue Data Catalog DataBrew writes the output generated by recipe jobs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html */

export interface DataCatalogOutput {
  /**
   * - The unique identifier of the AWS account that holds the Data Catalog that stores the data.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-datacatalogoutput-catalogid */
  CatalogId?: string | Intrinsic
  /**
   * - The name of a database in the Data Catalog.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-datacatalogoutput-databasename */
  DatabaseName: string | Intrinsic
  /**
   * - Represents options that specify how and where DataBrew writes the database output generated by recipe jobs.
   * - _Required_: No
   * - _Type_: [DatabaseTableOutputOptions](./aws-properties-databrew-job-databasetableoutputoptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-datacatalogoutput-databaseoptions */
  DatabaseOptions?: DatabaseTableOutputOptions
  /**
   * - A value that, if true, means that any data in the location specified for output is overwritten with new output. Not supported with DatabaseOptions.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-datacatalogoutput-overwrite */
  Overwrite?: boolean | Intrinsic
  /**
   * - Represents options that specify how and where DataBrew writes the Amazon S3 output generated by recipe jobs.
   * - _Required_: No
   * - _Type_: [S3TableOutputOptions](./aws-properties-databrew-job-s3tableoutputoptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-datacatalogoutput-s3options */
  S3Options?: S3TableOutputOptions
  /**
   * - The name of a table in the Data Catalog.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-datacatalogoutput-tablename */
  TableName: string | Intrinsic
}

/**
 * Represents a set of options that define the structure of comma-separated (CSV) job output.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html */

export interface OutputFormatOptions {
  /**
   * - Represents a set of options that define the structure of comma-separated value (CSV) job output.
   * - _Required_: No
   * - _Type_: [CsvOutputOptions](./aws-properties-databrew-job-csvoutputoptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-outputformatoptions-csv */
  Csv?: CsvOutputOptions
}

/**
 * Configuration of evaluations for a profile job. This configuration can be used to select evaluations and override the parameters of selected evaluations.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html */

export interface StatisticsConfiguration {
  /**
   * - List of included evaluations. When the list is undefined, all supported evaluations will be included.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-statisticsconfiguration-includedstatistics */
  IncludedStatistics?: (string | Intrinsic)[]
  /**
   * - List of overrides for evaluations.
   * - _Required_: No
   * - _Type_: Array of [StatisticOverride](./aws-properties-databrew-job-statisticoverride.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-statisticsconfiguration-overrides */
  Overrides?: StatisticOverride[]
}

/**
 * Configuration of entity detection for a profile job. When undefined, entity detection is disabled.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html */

export interface EntityDetectorConfiguration {
  /**
   * - Configuration of statistics that are allowed to be run on columns that contain detected entities. When undefined, no statistics will be computed on columns that contain detected entities.
   * - _Required_: No
   * - _Type_: [AllowedStatistics](./aws-properties-databrew-job-allowedstatistics.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-entitydetectorconfiguration-allowedstatistics */
  AllowedStatistics?: AllowedStatistics
  /**
   * - Entity types to detect. Can be any of the following:
   * - The Entity type group USA\_ALL is also supported, and includes all of the above entity types except PERSON\_NAME and DATE.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Maximum_: `128`
   * - _Minimum_: `1 | 1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-entitydetectorconfiguration-entitytypes */
  EntityTypes: (string | Intrinsic)[]
}

/**
 * Represents options that specify how and where in Amazon S3 DataBrew writes the output generated by recipe jobs or profile jobs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html */

export interface Output {
  /**
   * - The compression algorithm used to compress the output text of the job.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `GZIP | LZ4 | SNAPPY | BZIP2 | DEFLATE | LZO | BROTLI | ZSTD | ZLIB`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-output-compressionformat */
  CompressionFormat?: string | Intrinsic
  /**
   * - The data format of the output of the job.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CSV | JSON | PARQUET | GLUEPARQUET | AVRO | ORC | XML | TABLEAUHYPER`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-output-format */
  Format?: string | Intrinsic
  /**
   * - Represents options that define how DataBrew formats job output files.
   * - _Required_: No
   * - _Type_: [OutputFormatOptions](./aws-properties-databrew-job-outputformatoptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-output-formatoptions */
  FormatOptions?: OutputFormatOptions
  /**
   * - The location in Amazon S3 where the job writes its output.
   * - _Required_: Yes
   * - _Type_: [S3Location](./aws-properties-databrew-job-s3location.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-output-location */
  Location: S3Location
  /**
   * - The maximum number of files to be generated by the job and written to the output folder.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `999`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-output-maxoutputfiles */
  MaxOutputFiles?: number | Intrinsic
  /**
   * - A value that, if true, means that any data in the location specified for output is overwritten with new output.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-output-overwrite */
  Overwrite?: boolean | Intrinsic
  /**
   * - The names of one or more partition columns for the output of the job.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-output-partitioncolumns */
  PartitionColumns?: (string | Intrinsic)[]
}

/**
 * Configuration for profile jobs. Configuration can be used to select columns, do evaluations, and override default parameters of evaluations. When configuration is undefined, the profile job will apply default settings to all supported columns.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html */

export interface ProfileConfiguration {
  /**
   * - List of configurations for column evaluations. ColumnStatisticsConfigurations are used to select evaluations and override parameters of evaluations for particular columns. When ColumnStatisticsConfigurations is undefined, the profile job will profile all supported columns and run all supported evaluations.
   * - _Required_: No
   * - _Type_: Array of [ColumnStatisticsConfiguration](./aws-properties-databrew-job-columnstatisticsconfiguration.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-profileconfiguration-columnstatisticsconfigurations */
  ColumnStatisticsConfigurations?: ColumnStatisticsConfiguration[]
  /**
   * - Configuration for inter-column evaluations. Configuration can be used to select evaluations and override parameters of evaluations. When configuration is undefined, the profile job will run all supported inter-column evaluations.
   * - _Required_: No
   * - _Type_: [StatisticsConfiguration](./aws-properties-databrew-job-statisticsconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-profileconfiguration-datasetstatisticsconfiguration */
  DatasetStatisticsConfiguration?: StatisticsConfiguration
  /**
   * - Configuration of entity detection for a profile job. When undefined, entity detection is disabled.
   * - _Required_: No
   * - _Type_: [EntityDetectorConfiguration](./aws-properties-databrew-job-entitydetectorconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-profileconfiguration-entitydetectorconfiguration */
  EntityDetectorConfiguration?: EntityDetectorConfiguration
  /**
   * - List of column selectors. ProfileColumns can be used to select columns from the dataset. When ProfileColumns is undefined, the profile job will profile all supported columns.
   * - _Required_: No
   * - _Type_: Array of [ColumnSelector](./aws-properties-databrew-job-columnselector.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-profileconfiguration-profilecolumns */
  ProfileColumns?: ColumnSelector[]
}

/**
 * Specifies a new DataBrew job.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html */

export interface DataBrewJob {
  Type: 'AWS::DataBrew::Job'
  Properties: {
    /**
     * - Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write into.
     * - _Required_: No
     * - _Type_: Array of [DatabaseOutput](./aws-properties-databrew-job-databaseoutput.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-databaseoutputs */
    DatabaseOutputs?: DatabaseOutput[]
    /**
     * - One or more artifacts that represent the AWS Glue Data Catalog output from running the job.
     * - _Required_: No
     * - _Type_: Array of [DataCatalogOutput](./aws-properties-databrew-job-datacatalogoutput.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-datacatalogoutputs */
    DataCatalogOutputs?: DataCatalogOutput[]
    /**
     * - A dataset that the job is to process.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-datasetname */
    DatasetName?: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of an encryption key that is used to protect the job output. For more information, see [Encrypting data written by DataBrew jobs](https://docs.aws.amazon.com/databrew/latest/dg/encryption-security-configuration.html)
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-encryptionkeyarn */
    EncryptionKeyArn?: string | Intrinsic
    /**
     * - The encryption mode for the job, which can be one of the following:
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `SSE-KMS | SSE-S3`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-encryptionmode */
    EncryptionMode?: string | Intrinsic
    /**
     * - A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a `JobSample` value isn't provided, the default value is used. The default value is CUSTOM\_ROWS for the mode parameter and 20,000 for the size parameter.
     * - _Required_: No
     * - _Type_: [JobSample](./aws-properties-databrew-job-jobsample.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-jobsample */
    JobSample?: JobSample
    /**
     * - The current status of Amazon CloudWatch logging for the job.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLE | DISABLE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-logsubscription */
    LogSubscription?: string | Intrinsic
    /**
     * - The maximum number of nodes that can be consumed when the job processes data.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-maxcapacity */
    MaxCapacity?: number | Intrinsic
    /**
     * - The maximum number of times to retry the job after a job run fails.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-maxretries */
    MaxRetries?: number | Intrinsic
    /**
     * - The unique name of the job.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-name */
    Name: string | Intrinsic
    /**
     * - The location in Amazon S3 where the job writes its output.
     * - _Required_: No
     * - _Type_: [OutputLocation](./aws-properties-databrew-job-outputlocation.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-outputlocation */
    OutputLocation?: OutputLocation
    /**
     * - One or more artifacts that represent output from running the job.
     * - _Required_: No
     * - _Type_: Array of [Output](./aws-properties-databrew-job-output.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-outputs */
    Outputs?: Output[]
    /**
     * - Configuration for profile jobs. Configuration can be used to select columns, do evaluations, and override default parameters of evaluations. When configuration is undefined, the profile job will apply default settings to all supported columns.
     * - _Required_: No
     * - _Type_: [ProfileConfiguration](./aws-properties-databrew-job-profileconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-profileconfiguration */
    ProfileConfiguration?: ProfileConfiguration
    /**
     * - The name of the project that the job is associated with.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-projectname */
    ProjectName?: string | Intrinsic
    /**
     * - A series of data transformation steps that the job runs.
     * - _Required_: No
     * - _Type_: [Recipe](./aws-properties-databrew-job-recipe.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-recipe */
    Recipe?: Recipe
    /**
     * - The Amazon Resource Name (ARN) of the role to be assumed for this job.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-rolearn */
    RoleArn: string | Intrinsic
    /**
     * - Metadata tags that have been applied to the job.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-databrew-job-tag.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-tags */
    Tags?: Tag[]
    /**
     * - The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of `TIMEOUT`.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-timeout */
    Timeout?: number | Intrinsic
    /**
     * - The job type of the job, which must be one of the following:
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `PROFILE | RECIPE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-type */
    Type: string | Intrinsic
    /**
     * - List of validation configurations that are applied to the profile job.
     * - _Required_: No
     * - _Type_: Array of [ValidationConfiguration](./aws-properties-databrew-job-validationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-job.html#cfn-databrew-job-validationconfigurations */
    ValidationConfigurations?: ValidationConfiguration[]
  }
}
