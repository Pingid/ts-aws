import type { Intrinsic } from '../intrinsic/index.js' /**
 * The `Tag` property type specifies Property description not available. for an [AWS::DataBrew::Dataset](./aws-resource-databrew-dataset.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-tag-value */
  Value: string | Intrinsic
}

/**
 * Represents a set of options that define how DataBrew will read a comma-separated value (CSV) file when creating a dataset from that file.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html */

export interface CsvOptions {
  /**
   * - A single character that specifies the delimiter being used in the CSV file.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-csvoptions-delimiter */
  Delimiter?: string | Intrinsic
  /**
   * - A variable that specifies whether the first row in the file is parsed as the header. If this value is false, column names are auto-generated.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-csvoptions-headerrow */
  HeaderRow?: boolean | Intrinsic
}

/**
 * Represents a set of options that define how DataBrew will interpret a Microsoft Excel file when creating a dataset from that file.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html */

export interface ExcelOptions {
  /**
   * - A variable that specifies whether the first row in the file is parsed as the header. If this value is false, column names are auto-generated.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-exceloptions-headerrow */
  HeaderRow?: boolean | Intrinsic
  /**
   * - One or more sheet numbers in the Excel file that will be included in the dataset.
   * - _Required_: No
   * - _Type_: Array of Integer
   * - _Minimum_: `1`
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-exceloptions-sheetindexes */
  SheetIndexes?: (number | Intrinsic)[]
  /**
   * - One or more named sheets in the Excel file that will be included in the dataset.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-exceloptions-sheetnames */
  SheetNames?: (string | Intrinsic)[]
}

/**
 * Represents the JSON-specific options that define how input is to be interpreted by AWS Glue DataBrew.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html */

export interface JsonOptions {
  /**
   * - A value that specifies whether JSON input contains embedded new line characters.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-jsonoptions-multiline */
  MultiLine?: boolean | Intrinsic
}

/**
 * Connection information for dataset input files stored in a database.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html */

export interface DatabaseInputDefinition {
  /**
   * - The table within the target database.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-databaseinputdefinition-databasetablename */
  DatabaseTableName?: string | Intrinsic
  /**
   * - The AWS Glue Connection that stores the connection information for the target database.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-databaseinputdefinition-glueconnectionname */
  GlueConnectionName: string | Intrinsic
  /**
   * - Custom SQL to run against the provided AWS Glue connection. This SQL will be used as the input for DataBrew projects and jobs.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-databaseinputdefinition-querystring */
  QueryString?: string | Intrinsic
  /**
   * - An Amazon location that AWS Glue Data Catalog can use as a temporary directory.
   * - _Required_: No
   * - _Type_: [S3Location](./aws-properties-databrew-dataset-s3location.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-databaseinputdefinition-tempdirectory */
  TempDirectory?: S3Location
}

/**
 * Represents how metadata stored in the AWS Glue Data Catalog is defined in a DataBrew dataset.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html */

export interface DataCatalogInputDefinition {
  /**
   * - The unique identifier of the AWS account that holds the Data Catalog that stores the data.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-datacataloginputdefinition-catalogid */
  CatalogId?: string | Intrinsic
  /**
   * - The name of a database in the Data Catalog.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-datacataloginputdefinition-databasename */
  DatabaseName?: string | Intrinsic
  /**
   * - The name of a database table in the Data Catalog. This table corresponds to a DataBrew dataset.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-datacataloginputdefinition-tablename */
  TableName?: string | Intrinsic
  /**
   * - An Amazon location that AWS Glue Data Catalog can use as a temporary directory.
   * - _Required_: No
   * - _Type_: [S3Location](./aws-properties-databrew-dataset-s3location.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-datacataloginputdefinition-tempdirectory */
  TempDirectory?: S3Location
}

/**
 * Contains additional resource information needed for specific datasets.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html */

export interface Metadata {
  /**
   * - The Amazon Resource Name (ARN) associated with the dataset. Currently, DataBrew only supports ARNs from Amazon AppFlow.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-metadata-sourcearn */
  SourceArn?: string | Intrinsic
}

/**
 * Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html */

export interface S3Location {
  /**
   * - The Amazon S3 bucket name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `3`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-s3location-bucket */
  Bucket: string | Intrinsic
  /**
   * - The unique name of the object in the bucket.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1280`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-s3location-key */
  Key?: string | Intrinsic
}

/**
 * Represents a limit imposed on number of Amazon S3 files that should be selected for a dataset from a connected Amazon S3 path.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html */

export interface FilesLimit {
  /**
   * - The number of Amazon S3 files to select.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-fileslimit-maxfiles */
  MaxFiles: number | Intrinsic
  /**
   * - A criteria to use for Amazon S3 files sorting before their selection. By default uses DESCENDING order, i.e. most recent files are selected first. Anotherpossible value is ASCENDING.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ASCENDING | DESCENDING`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-fileslimit-order */
  Order?: string | Intrinsic
  /**
   * - A criteria to use for Amazon S3 files sorting before their selection. By default uses LAST\_MODIFIED\_DATE as a sorting criteria. Currently it's the only allowed value.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `LAST_MODIFIED_DATE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-fileslimit-orderedby */
  OrderedBy?: string | Intrinsic
}

/**
 * Represents a single entry in the `ValuesMap` of a `FilterExpression`. A `FilterValue` associates the name of a substitution variable in an expression to its value.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html */

export interface FilterValue {
  /**
   * - The value to be associated with the substitution variable.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-filtervalue-value */
  Value: string | Intrinsic
  /**
   * - The substitution variable reference.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^:[A-Za-z0-9_]+$`
   * - _Minimum_: `2`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-filtervalue-valuereference */
  ValueReference: string | Intrinsic
}

/**
 * Represents additional options for correct interpretation of datetime parameters used in the Amazon S3 path of a dataset.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html */

export interface DatetimeOptions {
  /**
   * - Required option, that defines the datetime format used for a date parameter in the Amazon S3 path. Should use only supported datetime specifiers and separation characters, all litera a-z or A-Z character should be escaped with single quotes. E.g. "MM.dd.yyyy-'at'-HH:mm".
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `2`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-datetimeoptions-format */
  Format: string | Intrinsic
  /**
   * - Optional value for a non-US locale code, needed for correct interpretation of some date formats.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[A-Za-z0-9_\.#@\-]+$`
   * - _Minimum_: `2`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-datetimeoptions-localecode */
  LocaleCode?: string | Intrinsic
  /**
   * - Optional value for a timezone offset of the datetime parameter value in the Amazon S3 path. Shouldn't be used if Format for this parameter includes timezone fields. If no offset specified, UTC is assumed.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(Z|[-+](\d|\d{2}|\d{2}:?\d{2}))$`
   * - _Minimum_: `1`
   * - _Maximum_: `6`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-datetimeoptions-timezoneoffset */
  TimezoneOffset?: string | Intrinsic
}

/**
 * Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html */

export interface FormatOptions {
  /**
   * - Options that define how CSV input is to be interpreted by DataBrew.
   * - _Required_: No
   * - _Type_: [CsvOptions](./aws-properties-databrew-dataset-csvoptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-formatoptions-csv */
  Csv?: CsvOptions
  /**
   * - Options that define how Excel input is to be interpreted by DataBrew.
   * - _Required_: No
   * - _Type_: [ExcelOptions](./aws-properties-databrew-dataset-exceloptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-formatoptions-excel */
  Excel?: ExcelOptions
  /**
   * - Options that define how JSON input is to be interpreted by DataBrew.
   * - _Required_: No
   * - _Type_: [JsonOptions](./aws-properties-databrew-dataset-jsonoptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-formatoptions-json */
  Json?: JsonOptions
}

/**
 * Represents information on how DataBrew can find data, in either the AWS Glue Data Catalog or Amazon S3.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html */

export interface Input {
  /**
   * - Connection information for dataset input files stored in a database.
   * - _Required_: No
   * - _Type_: [DatabaseInputDefinition](./aws-properties-databrew-dataset-databaseinputdefinition.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-input-databaseinputdefinition */
  DatabaseInputDefinition?: DatabaseInputDefinition
  /**
   * - The AWS Glue Data Catalog parameters for the data.
   * - _Required_: No
   * - _Type_: [DataCatalogInputDefinition](./aws-properties-databrew-dataset-datacataloginputdefinition.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-input-datacataloginputdefinition */
  DataCatalogInputDefinition?: DataCatalogInputDefinition
  /**
   * - Contains additional resource information needed for specific datasets.
   * - _Required_: No
   * - _Type_: [Metadata](./aws-properties-databrew-dataset-metadata.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-input-metadata */
  Metadata?: Metadata
  /**
   * - The Amazon S3 location where the data is stored.
   * - _Required_: No
   * - _Type_: [S3Location](./aws-properties-databrew-dataset-s3location.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-input-s3inputdefinition */
  S3InputDefinition?: S3Location
}

/**
 * Represents a structure for defining parameter conditions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html */

export interface FilterExpression {
  /**
   * - The expression which includes condition names followed by substitution variables, possibly grouped and combined with other conditions. For example, "(starts\_with :prefix1 or starts\_with :prefix2) and (ends\_with :suffix1 or ends\_with :suffix2)". Substitution variables should start with ':' symbol.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[><0-9A-Za-z_.,:)(!= ]+$`
   * - _Minimum_: `4`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-filterexpression-expression */
  Expression: string | Intrinsic
  /**
   * - The map of substitution variable names to their values used in this filter expression.
   * - _Required_: Yes
   * - _Type_: Array of [FilterValue](./aws-properties-databrew-dataset-filtervalue.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-filterexpression-valuesmap */
  ValuesMap: FilterValue[]
}

/**
 * Represents a dataset paramater that defines type and conditions for a parameter in the Amazon S3 path of the dataset.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html */

export interface DatasetParameter {
  /**
   * - Optional boolean value that defines whether the captured value of this parameter should be loaded as an additional column in the dataset.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-datasetparameter-createcolumn */
  CreateColumn?: boolean | Intrinsic
  /**
   * - Additional parameter options such as a format and a timezone. Required for datetime parameters.
   * - _Required_: No
   * - _Type_: [DatetimeOptions](./aws-properties-databrew-dataset-datetimeoptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-datasetparameter-datetimeoptions */
  DatetimeOptions?: DatetimeOptions
  /**
   * - The optional filter expression structure to apply additional matching criteria to the parameter.
   * - _Required_: No
   * - _Type_: [FilterExpression](./aws-properties-databrew-dataset-filterexpression.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-datasetparameter-filter */
  Filter?: FilterExpression
  /**
   * - The name of the parameter that is used in the dataset's Amazon S3 path.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-datasetparameter-name */
  Name: string | Intrinsic
  /**
   * - The type of the dataset parameter, can be one of a 'String', 'Number' or 'Datetime'.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `String | Number | Datetime`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-datasetparameter-type */
  Type: string | Intrinsic
}

/**
 * Represents a single entry in the path parameters of a dataset. Each `PathParameter` consists of a name and a parameter definition.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html */

export interface PathParameter {
  /**
   * - The path parameter definition.
   * - _Required_: Yes
   * - _Type_: [DatasetParameter](./aws-properties-databrew-dataset-datasetparameter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-pathparameter-datasetparameter */
  DatasetParameter: DatasetParameter
  /**
   * - The name of the path parameter.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-pathparameter-pathparametername */
  PathParameterName: string | Intrinsic
}

/**
 * Represents a set of options that define how DataBrew selects files for a given Amazon S3 path in a dataset.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html */

export interface PathOptions {
  /**
   * - If provided, this structure imposes a limit on a number of files that should be selected.
   * - _Required_: No
   * - _Type_: [FilesLimit](./aws-properties-databrew-dataset-fileslimit.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-pathoptions-fileslimit */
  FilesLimit?: FilesLimit
  /**
   * - If provided, this structure defines a date range for matching Amazon S3 objects based on their LastModifiedDate attribute in Amazon S3.
   * - _Required_: No
   * - _Type_: [FilterExpression](./aws-properties-databrew-dataset-filterexpression.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-pathoptions-lastmodifieddatecondition */
  LastModifiedDateCondition?: FilterExpression
  /**
   * - A structure that maps names of parameters used in the Amazon S3 path of a dataset to their definitions.
   * - _Required_: No
   * - _Type_: Array of [PathParameter](./aws-properties-databrew-dataset-pathparameter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-pathoptions-parameters */
  Parameters?: PathParameter[]
}

/**
 * Specifies a new DataBrew dataset.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html */

export interface DataBrewDataset {
  Type: 'AWS::DataBrew::Dataset'
  Properties: {
    /**
     * - The file format of a dataset that is created from an Amazon S3 file or folder.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `CSV | JSON | PARQUET | EXCEL | ORC`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-format */
    Format?: string | Intrinsic
    /**
     * - A set of options that define how DataBrew interprets the data in the dataset.
     * - _Required_: No
     * - _Type_: [FormatOptions](./aws-properties-databrew-dataset-formatoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-formatoptions */
    FormatOptions?: FormatOptions
    /**
     * - Information on how DataBrew can find the dataset, in either the AWS Glue Data Catalog or Amazon S3.
     * - _Required_: Yes
     * - _Type_: [Input](./aws-properties-databrew-dataset-input.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-input */
    Input: Input
    /**
     * - The unique name of the dataset.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-name */
    Name: string | Intrinsic
    /**
     * - A set of options that defines how DataBrew interprets an Amazon S3 path of the dataset.
     * - _Required_: No
     * - _Type_: [PathOptions](./aws-properties-databrew-dataset-pathoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-pathoptions */
    PathOptions?: PathOptions
    /**
     * - Metadata tags that have been applied to the dataset.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-databrew-dataset-tag.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-databrew-dataset.html#cfn-databrew-dataset-tags */
    Tags?: Tag[]
  }
}
