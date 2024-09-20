import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Contains information about a detector's configuration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html */

export interface AnomalyDetectorConfig {
  /**
   * - The frequency at which the detector analyzes its source data.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `PT5M | PT10M | PT1H | P1D`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-anomalydetectorconfig-anomalydetectorfrequency */
  AnomalyDetectorFrequency: string | Intrinsic
}

/**
 * A calculation made by contrasting a measure and a dimension from your source data.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html */

export interface Metric {
  /**
   * - The function with which the metric is calculated.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `AVG | SUM`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-metric-aggregationfunction */
  AggregationFunction: string | Intrinsic
  /**
   * - The name of the metric.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
   * - _Minimum_: `1`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-metric-metricname */
  MetricName: string | Intrinsic
  /**
   * - The namespace for the metric.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[^:].*`
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-metric-namespace */
  Namespace?: string | Intrinsic
}

/**
 * Contains information about the column used to track time in a source data file.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html */

export interface TimestampColumn {
  /**
   * - The format of the timestamp column.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-timestampcolumn-columnformat */
  ColumnFormat?: string | Intrinsic
  /**
   * - The name of the timestamp column.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
   * - _Minimum_: `1`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-timestampcolumn-columnname */
  ColumnName?: string | Intrinsic
}

/**
 * Details about an Amazon AppFlow flow datasource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html */

export interface AppFlowConfig {
  /**
   * - name of the flow.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z0-9][\w!@#.-]+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-appflowconfig-flowname */
  FlowName: string | Intrinsic
  /**
   * - An IAM role that gives Amazon Lookout for Metrics permission to access the flow.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:([a-z\d-]+):.*:.*:.*:.+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-appflowconfig-rolearn */
  RoleArn: string | Intrinsic
}

/**
 * Details about an Amazon CloudWatch datasource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html */

export interface CloudwatchConfig {
  /**
   * - An IAM role that gives Amazon Lookout for Metrics permission to access data in Amazon CloudWatch.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:([a-z\d-]+):.*:.*:.*:.+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-cloudwatchconfig-rolearn */
  RoleArn: string | Intrinsic
}

/**
 * Provides information about the Amazon Redshift database configuration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html */

export interface RedshiftSourceConfig {
  /**
   * - A string identifying the Redshift cluster.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-z](?!.*--)(?!.*-$)[0-9a-z\-]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-clusteridentifier */
  ClusterIdentifier: string | Intrinsic
  /**
   * - The name of the database host.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Minimum_: `1`
   * - _Maximum_: `253`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-databasehost */
  DatabaseHost: string | Intrinsic
  /**
   * - The Redshift database name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[a-z0-9]+`
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-databasename */
  DatabaseName: string | Intrinsic
  /**
   * - The port number where the database can be accessed.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `65535`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-databaseport */
  DatabasePort: number | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the role providing access to the database.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:([a-z\d-]+):.*:.*:.*:.+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-rolearn */
  RoleArn: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the AWS Secrets Manager role.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:([a-z\d-]+):.*:.*:secret:AmazonLookoutMetrics-.+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-secretmanagerarn */
  SecretManagerArn: string | Intrinsic
  /**
   * - The table name of the Redshift database.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z][a-zA-Z0-9_]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-tablename */
  TableName: string | Intrinsic
  /**
   * - Contains information about the Amazon Virtual Private Cloud (VPC) configuration.
   * - _Required_: Yes
   * - _Type_: [VpcConfiguration](./aws-properties-lookoutmetrics-anomalydetector-vpcconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-redshiftsourceconfig-vpcconfiguration */
  VpcConfiguration: VpcConfiguration
}

/**
 * Contains configuration information about the Amazon Virtual Private Cloud (VPC).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html */

export interface VpcConfiguration {
  /**
   * - An array of strings containing the list of security groups.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-vpcconfiguration-securitygroupidlist */
  SecurityGroupIdList: (string | Intrinsic)[]
  /**
   * - An array of strings containing the Amazon VPC subnet IDs (e.g., `subnet-0bb1c79de3EXAMPLE`.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-vpcconfiguration-subnetidlist */
  SubnetIdList: (string | Intrinsic)[]
}

/**
 * Contains information about how a source CSV data file should be analyzed.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html */

export interface CsvFormatDescriptor {
  /**
   * - The character set in which the source CSV file is written.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-charset */
  Charset?: string | Intrinsic
  /**
   * - Whether or not the source CSV file contains a header.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-containsheader */
  ContainsHeader?: boolean | Intrinsic
  /**
   * - The character used to delimit the source CSV file.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[^\r\n]`
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-delimiter */
  Delimiter?: string | Intrinsic
  /**
   * - The level of compression of the source CSV file.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | GZIP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-filecompression */
  FileCompression?: string | Intrinsic
  /**
   * - A list of the source CSV file's headers, if any.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-headerlist */
  HeaderList?: (string | Intrinsic)[]
  /**
   * - The character used as a quote character.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[^\r\n]|^$`
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-csvformatdescriptor-quotesymbol */
  QuoteSymbol?: string | Intrinsic
}

/**
 * Contains information about how a source JSON data file should be analyzed.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html */

export interface JsonFormatDescriptor {
  /**
   * - The character set in which the source JSON file is written.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-jsonformatdescriptor-charset */
  Charset?: string | Intrinsic
  /**
   * - The level of compression of the source CSV file.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | GZIP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-jsonformatdescriptor-filecompression */
  FileCompression?: string | Intrinsic
}

/**
 * Contains information about the Amazon Relational Database Service (RDS) configuration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html */

export interface RDSSourceConfig {
  /**
   * - The host name of the database.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Minimum_: `1`
   * - _Maximum_: `253`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-rdssourceconfig-databasehost */
  DatabaseHost: string | Intrinsic
  /**
   * - The name of the RDS database.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z0-9_]+`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-rdssourceconfig-databasename */
  DatabaseName: string | Intrinsic
  /**
   * - The port number where the database can be accessed.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `65535`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-rdssourceconfig-databaseport */
  DatabasePort: number | Intrinsic
  /**
   * - A string identifying the database instance.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z](?!.*--)(?!.*-$)[0-9a-zA-Z\-]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-rdssourceconfig-dbinstanceidentifier */
  DBInstanceIdentifier: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the role.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:([a-z\d-]+):.*:.*:.*:.+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-rdssourceconfig-rolearn */
  RoleArn: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the AWS Secrets Manager role.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:([a-z\d-]+):.*:.*:secret:AmazonLookoutMetrics-.+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-rdssourceconfig-secretmanagerarn */
  SecretManagerArn: string | Intrinsic
  /**
   * - The name of the table in the database.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z][a-zA-Z0-9_]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-rdssourceconfig-tablename */
  TableName: string | Intrinsic
  /**
   * - An object containing information about the Amazon Virtual Private Cloud (VPC) configuration.
   * - _Required_: Yes
   * - _Type_: [VpcConfiguration](./aws-properties-lookoutmetrics-anomalydetector-vpcconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-rdssourceconfig-vpcconfiguration */
  VpcConfiguration: VpcConfiguration
}

/**
 * Contains information about a source file's formatting.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html */

export interface FileFormatDescriptor {
  /**
   * - Contains information about how a source CSV data file should be analyzed.
   * - _Required_: No
   * - _Type_: [CsvFormatDescriptor](./aws-properties-lookoutmetrics-anomalydetector-csvformatdescriptor.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-fileformatdescriptor-csvformatdescriptor */
  CsvFormatDescriptor?: CsvFormatDescriptor
  /**
   * - Contains information about how a source JSON data file should be analyzed.
   * - _Required_: No
   * - _Type_: [JsonFormatDescriptor](./aws-properties-lookoutmetrics-anomalydetector-jsonformatdescriptor.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-fileformatdescriptor-jsonformatdescriptor */
  JsonFormatDescriptor?: JsonFormatDescriptor
}

/**
 * Contains information about the configuration of the S3 bucket that contains source files.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html */

export interface S3SourceConfig {
  /**
   * - Contains information about a source file's formatting.
   * - _Required_: Yes
   * - _Type_: [FileFormatDescriptor](./aws-properties-lookoutmetrics-anomalydetector-fileformatdescriptor.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-s3sourceconfig-fileformatdescriptor */
  FileFormatDescriptor: FileFormatDescriptor
  /**
   * - A list of paths to the historical data files.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `1024 | 1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-s3sourceconfig-historicaldatapathlist */
  HistoricalDataPathList?: (string | Intrinsic)[]
  /**
   * - The ARN of an IAM role that has read and write access permissions to the source S3 bucket.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:([a-z\d-]+):.*:.*:.*:.+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-s3sourceconfig-rolearn */
  RoleArn: string | Intrinsic
  /**
   * - A list of templated paths to the source files.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `1024 | 1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-s3sourceconfig-templatedpathlist */
  TemplatedPathList?: (string | Intrinsic)[]
}

/**
 * Contains information about how the source data should be interpreted.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html */

export interface MetricSource {
  /**
   * - Details about an AppFlow datasource.
   * - _Required_: No
   * - _Type_: [AppFlowConfig](./aws-properties-lookoutmetrics-anomalydetector-appflowconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-metricsource-appflowconfig */
  AppFlowConfig?: AppFlowConfig
  /**
   * - Details about an Amazon CloudWatch monitoring datasource.
   * - _Required_: No
   * - _Type_: [CloudwatchConfig](./aws-properties-lookoutmetrics-anomalydetector-cloudwatchconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-metricsource-cloudwatchconfig */
  CloudwatchConfig?: CloudwatchConfig
  /**
   * - Details about an Amazon Relational Database Service (RDS) datasource.
   * - _Required_: No
   * - _Type_: [RDSSourceConfig](./aws-properties-lookoutmetrics-anomalydetector-rdssourceconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-metricsource-rdssourceconfig */
  RDSSourceConfig?: RDSSourceConfig
  /**
   * - Details about an Amazon Redshift database datasource.
   * - _Required_: No
   * - _Type_: [RedshiftSourceConfig](./aws-properties-lookoutmetrics-anomalydetector-redshiftsourceconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-metricsource-redshiftsourceconfig */
  RedshiftSourceConfig?: RedshiftSourceConfig
  /**
   * - Contains information about the configuration of the S3 bucket that contains source files.
   * - _Required_: No
   * - _Type_: [S3SourceConfig](./aws-properties-lookoutmetrics-anomalydetector-s3sourceconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-metricsource-s3sourceconfig */
  S3SourceConfig?: S3SourceConfig
}

/**
 * Contains information about a dataset.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html */

export interface MetricSet {
  /**
   * - A list of the fields you want to treat as dimensions.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-metricset-dimensionlist */
  DimensionList?: (string | Intrinsic)[]
  /**
   * - A list of metrics that the dataset will contain.
   * - _Required_: Yes
   * - _Type_: Array of [Metric](./aws-properties-lookoutmetrics-anomalydetector-metric.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-metricset-metriclist */
  MetricList: Metric[]
  /**
   * - A description of the dataset you are creating.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-metricset-metricsetdescription */
  MetricSetDescription?: string | Intrinsic
  /**
   * - The frequency with which the source data will be analyzed for anomalies.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PT5M | PT10M | PT1H | P1D`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-metricset-metricsetfrequency */
  MetricSetFrequency?: string | Intrinsic
  /**
   * - The name of the dataset.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
   * - _Minimum_: `1`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-metricset-metricsetname */
  MetricSetName: string | Intrinsic
  /**
   * - Contains information about how the source data should be interpreted.
   * - _Required_: Yes
   * - _Type_: [MetricSource](./aws-properties-lookoutmetrics-anomalydetector-metricsource.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-metricset-metricsource */
  MetricSource: MetricSource
  /**
   * - After an interval ends, the amount of seconds that the detector waits before importing data. Offset is only supported for S3, Redshift, Athena and datasources.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `432000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-metricset-offset */
  Offset?: number | Intrinsic
  /**
   * - Contains information about the column used for tracking time in your source data.
   * - _Required_: No
   * - _Type_: [TimestampColumn](./aws-properties-lookoutmetrics-anomalydetector-timestampcolumn.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-metricset-timestampcolumn */
  TimestampColumn?: TimestampColumn
  /**
   * - The time zone in which your source data was recorded.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Maximum_: `60`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-metricset-timezone */
  Timezone?: string | Intrinsic
}

/**
 * The `AWS::LookoutMetrics::AnomalyDetector` type creates an anomaly detector.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html */

export interface LookoutMetricsAnomalyDetector extends ResourceAttributes {
  Type: 'AWS::LookoutMetrics::AnomalyDetector'
  Properties: {
    /**
     * - Contains information about the configuration of the anomaly detector.
     * - _Required_: Yes
     * - _Type_: [AnomalyDetectorConfig](./aws-properties-lookoutmetrics-anomalydetector-anomalydetectorconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-anomalydetectorconfig */
    AnomalyDetectorConfig: AnomalyDetectorConfig
    /**
     * - A description of the detector.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*\S.*`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-anomalydetectordescription */
    AnomalyDetectorDescription?: string | Intrinsic
    /**
     * - The name of the detector.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-anomalydetectorname */
    AnomalyDetectorName?: string | Intrinsic
    /**
     * - The ARN of the KMS key to use to encrypt your data.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:aws.*:kms:.*:[0-9]{12}:key/.*`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-kmskeyarn */
    KmsKeyArn?: string | Intrinsic
    /**
     * - The detector's dataset.
     * - _Required_: Yes
     * - _Type_: Array of [MetricSet](./aws-properties-lookoutmetrics-anomalydetector-metricset.html)
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-anomalydetector.html#cfn-lookoutmetrics-anomalydetector-metricsetlist */
    MetricSetList: MetricSet[]
  }
}
