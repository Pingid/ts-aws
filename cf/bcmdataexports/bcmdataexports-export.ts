import type { Intrinsic } from '../intrinsic/index.js' /**
 * The tag structure that contains a tag key and value.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html */

export interface ResourceTag {
  /**
   * - The key that's associated with the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-resourcetag-key */
  Key: string | Intrinsic
  /**
   * - The value that's associated with the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-resourcetag-value */
  Value: string | Intrinsic
}

/**
 * The SQL query of column selections and row filters from the data table you want.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html */

export interface DataQuery {
  /**
   * - The query statement.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[\S\s]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `36000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-dataquery-querystatement */
  QueryStatement: string | Intrinsic
  /**
   * - The table configuration.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `^[\S\s]*$`
   * - _Minimum_: `0`
   * - _Maximum_: `1024`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-dataquery-tableconfigurations */
  TableConfigurations?: Record<string, string | Intrinsic>
}

/**
 * The cadence for AWS to update the data export in your S3 bucket.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html */

export interface RefreshCadence {
  /**
   * - The frequency that data exports are updated. The export refreshes each time the source data updates, up to three times daily.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `SYNCHRONOUS`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-refreshcadence-frequency */
  Frequency: string | Intrinsic
}

/**
 * The compression type, file format, and overwrite preference for the data export.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html */

export interface S3OutputConfigurations {
  /**
   * - The compression type for the data export.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `GZIP | PARQUET`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-s3outputconfigurations-compression */
  Compression: string | Intrinsic
  /**
   * - The file format for the data export.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `TEXT_OR_CSV | PARQUET`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-s3outputconfigurations-format */
  Format: string | Intrinsic
  /**
   * - The output type for the data export.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `CUSTOM`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-s3outputconfigurations-outputtype */
  OutputType: string | Intrinsic
  /**
   * - The rule to follow when generating a version of the data export file. You have the choice to overwrite the previous version or to be delivered in addition to the previous versions. Overwriting exports can save on Amazon S3 storage costs. Creating new export versions allows you to track the changes in cost and usage data over time.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `CREATE_NEW_REPORT | OVERWRITE_REPORT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-s3outputconfigurations-overwrite */
  Overwrite: string | Intrinsic
}

/**
 * Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and object keys of a data exports file.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html */

export interface S3Destination {
  /**
   * - The name of the Amazon S3 bucket used as the destination of a data export file.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[\S\s]*$`
   * - _Minimum_: `0`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-s3destination-s3bucket */
  S3Bucket: string | Intrinsic
  /**
   * - The output configuration for the data export.
   * - _Required_: Yes
   * - _Type_: [S3OutputConfigurations](./aws-properties-bcmdataexports-export-s3outputconfigurations.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-s3destination-s3outputconfigurations */
  S3OutputConfigurations: S3OutputConfigurations
  /**
   * - The S3 path prefix you want prepended to the name of your data export.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[\S\s]*$`
   * - _Minimum_: `0`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-s3destination-s3prefix */
  S3Prefix: string | Intrinsic
  /**
   * - The S3 bucket Region.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[\S\s]*$`
   * - _Minimum_: `0`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-s3destination-s3region */
  S3Region: string | Intrinsic
}

/**
 * The destinations used for data exports.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html */

export interface DestinationConfigurations {
  /**
   * - An object that describes the destination of the data exports file.
   * - _Required_: Yes
   * - _Type_: [S3Destination](./aws-properties-bcmdataexports-export-s3destination.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-destinationconfigurations-s3destination */
  S3Destination: S3Destination
}

/**
 * The details that are available for an export.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html */

export interface Export {
  /**
   * - The data query for this specific data export.
   * - _Required_: Yes
   * - _Type_: [DataQuery](./aws-properties-bcmdataexports-export-dataquery.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-export-dataquery */
  DataQuery: DataQuery
  /**
   * - The description for this specific data export.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[\S\s]*$`
   * - _Minimum_: `0`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-export-description */
  Description?: string | Intrinsic
  /**
   * - The destination configuration for this specific data export.
   * - _Required_: Yes
   * - _Type_: [DestinationConfigurations](./aws-properties-bcmdataexports-export-destinationconfigurations.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-export-destinationconfigurations */
  DestinationConfigurations: DestinationConfigurations
  /**
   * - The Amazon Resource Name (ARN) for this export.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:aws[-a-z0-9]*:[-a-z0-9]+:[-a-z0-9]*:[0-9]{12}:[-a-zA-Z0-9/:_]+$`
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-export-exportarn */
  ExportArn?: string | Intrinsic
  /**
   * - The name of this specific data export.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9A-Za-z\-_]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-export-name */
  Name: string | Intrinsic
  /**
   * - The cadence for AWS to update the export in your S3 bucket.
   * - _Required_: Yes
   * - _Type_: [RefreshCadence](./aws-properties-bcmdataexports-export-refreshcadence.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-export-refreshcadence */
  RefreshCadence: RefreshCadence
}

/**
 * Creates a data export and specifies the data query, the delivery preference, and any optional resource tags.
 * A `DataQuery` consists of both a `QueryStatement` and `TableConfigurations`.
 * The `QueryStatement` is an SQL statement. Data Exports only supports a limited subset of the SQL syntax. For more information on the SQL syntax that is supported, see [Data query](https://docs.aws.amazon.com/cur/latest/userguide/de-data-query.html). To view the available tables and columns, see the [Data Exports table dictionary](https://docs.aws.amazon.com/cur/latest/userguide/de-table-dictionary.html).
 * The `TableConfigurations` is a collection of specified `TableProperties` for the table being queried in the `QueryStatement`. TableProperties are additional configurations you can provide to change the data and schema of a table. Each table can have different TableProperties. However, tables are not required to have any TableProperties. Each table property has a default value that it assumes if not specified. For more information on table configurations, see [Data query](https://docs.aws.amazon.com/cur/latest/userguide/de-data-query.html). To view the table properties available for each table, see the [Data Exports table dictionary](https://docs.aws.amazon.com/cur/latest/userguide/de-table-dictionary.html) or use the `ListTables` API to get a response of all tables and their available properties.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html */

export interface BCMDataExportsExport {
  Type: 'AWS::BCMDataExports::Export'
  Properties: {
    /**
     * - The details that are available for an export.
     * - _Required_: Yes
     * - _Type_: [Export](./aws-properties-bcmdataexports-export-export.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-export */
    Export: Export
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of [ResourceTag](./aws-properties-bcmdataexports-export-resourcetag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bcmdataexports-export.html#cfn-bcmdataexports-export-tags */
    Tags?: ResourceTag[]
  }
}
