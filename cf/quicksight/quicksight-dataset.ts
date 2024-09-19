import type { Intrinsic } from '../intrinsic/index.js' /**
 * A rule defined to grant access on one or more restricted columns. Each dataset can have multiple rules. To create a restricted column, you add it to one or more rules. Each rule must contain at least one column and at least one user or group. To be able to see a restricted column, a user or group needs to be added to a rule for that column.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface ColumnLevelPermissionRule {
  /**
   * - An array of column names.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-columnlevelpermissionrule-columnnames */
  ColumnNames?: (string | Intrinsic)[]
  /**
   * - An array of Amazon Resource Names (ARNs) for Amazon QuickSight users or groups.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-columnlevelpermissionrule-principals */
  Principals?: (string | Intrinsic)[]
}

/**
 * The usage configuration to apply to child datasets that reference this dataset as a source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface DataSetUsageConfiguration {
  /**
   * - An option that controls whether a child dataset of a direct query can use this dataset as a source.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-datasetusageconfiguration-disableuseasdirectquerysource */
  DisableUseAsDirectQuerySource?: boolean | Intrinsic
  /**
   * - An option that controls whether a child dataset that's stored in QuickSight can use this dataset as a source.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-datasetusageconfiguration-disableuseasimportedsource */
  DisableUseAsImportedSource?: boolean | Intrinsic
}

/**
 * A FieldFolder element is a folder that contains fields and nested subfolders.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface FieldFolder {
  /**
   * - A folder has a list of columns. A column can only be in one folder.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `5000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-fieldfolder-columns */
  Columns?: (string | Intrinsic)[]
  /**
   * - The description for a field folder.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `500`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-fieldfolder-description */
  Description?: string | Intrinsic
}

/**
 * The wait policy to use when creating or updating a Dataset. The default is to wait for SPICE ingestion to finish with timeout of 36 hours.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface IngestionWaitPolicy {
  /**
   * - The maximum time (in hours) to wait for Ingestion to complete. Default timeout is 36 hours. Applicable only when `DataSetImportMode` mode is set to SPICE and `WaitForSpiceIngestion` is set to true.
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `1`
   * - _Maximum_: `36`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-ingestionwaitpolicy-ingestionwaittimeinhours */
  IngestionWaitTimeInHours?: number | Intrinsic
  /**
   * - Wait for SPICE ingestion to finish to mark dataset creation or update as successful. Default (true). Applicable only when `DataSetImportMode` mode is set to SPICE.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-ingestionwaitpolicy-waitforspiceingestion */
  WaitForSpiceIngestion?: boolean | Intrinsic
}

/**
 * Permission for the resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface ResourcePermission {
  /**
   * - The IAM action to grant or revoke permisions on
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-resourcepermission-actions */
  Actions: (string | Intrinsic)[]
  /**
   * - The Amazon Resource Name (ARN) of the principal. This can be one of the following:
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-resourcepermission-principal */
  Principal: string | Intrinsic
}

/**
 * Information about a dataset that contains permissions for row-level security (RLS). The permissions dataset maps fields to users or groups. For more information, see [Using Row-Level Security (RLS) to Restrict Access to a Dataset](https://docs.aws.amazon.com/quicksight/latest/user/restrict-access-to-a-data-set-using-row-level-security.html) in the _Amazon QuickSight User Guide_.
 * The option to deny permissions by setting `PermissionPolicy` to `DENY_ACCESS` is not supported for new RLS datasets.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface RowLevelPermissionDataSet {
  /**
   * - The Amazon Resource Name (ARN) of the dataset that contains permissions for RLS.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-rowlevelpermissiondataset-arn */
  Arn: string | Intrinsic
  /**
   * - The user or group rules associated with the dataset that contains permissions for RLS.
   * - By default, `FormatVersion` is `VERSION_1`. When `FormatVersion` is `VERSION_1`, `UserName` and `GroupName` are required. When `FormatVersion` is `VERSION_2`, `UserARN` and `GroupARN` are required, and `Namespace` must not exist.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `VERSION_1 | VERSION_2`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-rowlevelpermissiondataset-formatversion */
  FormatVersion?: string | Intrinsic
  /**
   * - The namespace associated with the dataset that contains permissions for RLS.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9._-]*$`
   * - _Minimum_: `0`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-rowlevelpermissiondataset-namespace */
  Namespace?: string | Intrinsic
  /**
   * - The type of permissions to use when interpreting the permissions for RLS. `DENY_ACCESS` is included for backward compatibility only.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `GRANT_ACCESS | DENY_ACCESS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-rowlevelpermissiondataset-permissionpolicy */
  PermissionPolicy: string | Intrinsic
  /**
   * - The status of the row-level security permission dataset. If enabled, the status is `ENABLED`. If disabled, the status is `DISABLED`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ENABLED | DISABLED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-rowlevelpermissiondataset-status */
  Status?: string | Intrinsic
}

/**
 * The `Tag` property type specifies Property description not available. for an [AWS::QuickSight::DataSet](./aws-resource-quicksight-dataset.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-tag-value */
  Value: string | Intrinsic
}

/**
 * Geospatial column group that denotes a hierarchy.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface GeoSpatialColumnGroup {
  /**
   * - Columns in this hierarchy.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `127 | 16`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-geospatialcolumngroup-columns */
  Columns: (string | Intrinsic)[]
  /**
   * - Country code.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `US`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-geospatialcolumngroup-countrycode */
  CountryCode?: string | Intrinsic
  /**
   * - A display name for the hierarchy.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-geospatialcolumngroup-name */
  Name: string | Intrinsic
}

/**
 * A physical table type for relational data sources.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface RelationalTable {
  /**
   * - The catalog associated with a table.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-relationaltable-catalog */
  Catalog?: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) for the data source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-relationaltable-datasourcearn */
  DataSourceArn: string | Intrinsic
  /**
   * - The column schema of the table.
   * - _Required_: Yes
   * - _Type_: Array of [InputColumn](./aws-properties-quicksight-dataset-inputcolumn.html)
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-relationaltable-inputcolumns */
  InputColumns: InputColumn[]
  /**
   * - The name of the relational table.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-relationaltable-name */
  Name: string | Intrinsic
  /**
   * - The schema name. This name applies to certain relational database engines.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-relationaltable-schema */
  Schema?: string | Intrinsic
}

/**
 * A set of rules associated with a tag.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface RowLevelPermissionTagRule {
  /**
   * - The column name that a tag key is assigned to.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-rowlevelpermissiontagrule-columnname */
  ColumnName: string | Intrinsic
  /**
   * - A string that you want to use to filter by all the values in a column in the dataset and don’t want to list the values one by one. For example, you can use an asterisk as your match all value.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-rowlevelpermissiontagrule-matchallvalue */
  MatchAllValue?: string | Intrinsic
  /**
   * - The unique key for a tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-rowlevelpermissiontagrule-tagkey */
  TagKey: string | Intrinsic
  /**
   * - A string that you want to use to delimit the values when you pass the values at run time. For example, you can delimit the values with a comma.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-rowlevelpermissiontagrule-tagmultivaluedelimiter */
  TagMultiValueDelimiter?: string | Intrinsic
}

/**
 * The `DateTimeDatasetParameterDefaultValues` property type specifies Property description not available. for an [AWS::QuickSight::DataSet](./aws-resource-quicksight-dataset.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface DateTimeDatasetParameterDefaultValues {
  /**
   * - A list of static default values for a given date time parameter. The valid format for this property is `yyyy-MM-dd’T’HH:mm:ss’Z’`.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `32`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-datetimedatasetparameterdefaultvalues-staticvalues */
  StaticValues?: (string | Intrinsic)[]
}

/**
 * A list of default values for a given decimal parameter. This structure only accepts static values.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface DecimalDatasetParameterDefaultValues {
  /**
   * - A list of static default values for a given decimal parameter.
   * - _Required_: No
   * - _Type_: Array of Number
   * - _Minimum_: `0`
   * - _Maximum_: `32`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-decimaldatasetparameterdefaultvalues-staticvalues */
  StaticValues?: (number | Intrinsic)[]
}

/**
 * A list of default values for a given integer parameter. This structure only accepts static values.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface IntegerDatasetParameterDefaultValues {
  /**
   * - A list of static default values for a given integer parameter.
   * - _Required_: No
   * - _Type_: Array of Number
   * - _Minimum_: `0`
   * - _Maximum_: `32`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-integerdatasetparameterdefaultvalues-staticvalues */
  StaticValues?: (number | Intrinsic)[]
}

/**
 * A list of default values for a given string dataset parameter type. This structure only accepts static values.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface StringDatasetParameterDefaultValues {
  /**
   * - A list of static default values for a given string parameter.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0 | 0`
   * - _Maximum_: `512 | 32`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-stringdatasetparameterdefaultvalues-staticvalues */
  StaticValues?: (string | Intrinsic)[]
}

/**
 * A transform operation that casts a column to a different type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface CastColumnTypeOperation {
  /**
   * - Column name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `127`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-castcolumntypeoperation-columnname */
  ColumnName: string | Intrinsic
  /**
   * - When casting a column from string to datetime type, you can supply a string in a format supported by Amazon QuickSight to denote the source data format.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `32`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-castcolumntypeoperation-format */
  Format?: string | Intrinsic
  /**
   * - New column data type.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `STRING | INTEGER | DECIMAL | DATETIME`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-castcolumntypeoperation-newcolumntype */
  NewColumnType: string | Intrinsic
  /**
   * - The sub data type of the new column. Sub types are only available for decimal columns that are part of a SPICE dataset.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `FLOAT | FIXED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-castcolumntypeoperation-subtype */
  SubType?: string | Intrinsic
}

/**
 * A transform operation that filters rows based on a condition.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface FilterOperation {
  /**
   * - An expression that must evaluate to a Boolean value. Rows for which the expression evaluates to true are kept in the dataset.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-filteroperation-conditionexpression */
  ConditionExpression: string | Intrinsic
}

/**
 * A transform operation that projects columns. Operations that come after a projection can only refer to projected columns.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface ProjectOperation {
  /**
   * - Projected columns.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `2000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-projectoperation-projectedcolumns */
  ProjectedColumns: (string | Intrinsic)[]
}

/**
 * A transform operation that renames a column.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface RenameColumnOperation {
  /**
   * - The name of the column to be renamed.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `127`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-renamecolumnoperation-columnname */
  ColumnName: string | Intrinsic
  /**
   * - The new name for the column.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `127`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-renamecolumnoperation-newcolumnname */
  NewColumnName: string | Intrinsic
}

/**
 * A transform operation that removes tags associated with a column.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface UntagColumnOperation {
  /**
   * - The column that this operation acts on.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `127`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-untagcolumnoperation-columnname */
  ColumnName: string | Intrinsic
  /**
   * - The column tags to remove from this column.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-untagcolumnoperation-tagnames */
  TagNames: (string | Intrinsic)[]
}

/**
 * Metadata for a column that is used as the input of a transform operation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface InputColumn {
  /**
   * - The name of this column in the underlying data source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `127`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-inputcolumn-name */
  Name: string | Intrinsic
  /**
   * - The sub data type of the column. Sub types are only available for decimal columns that are part of a SPICE dataset.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `FLOAT | FIXED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-inputcolumn-subtype */
  SubType?: string | Intrinsic
  /**
   * - The data type of the column.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `STRING | INTEGER | DECIMAL | DATETIME | BIT | BOOLEAN | JSON`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-inputcolumn-type */
  Type: string | Intrinsic
}

/**
 * Information about the format for a source file or files.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface UploadSettings {
  /**
   * - Whether the file has a header row, or the files each have a header row.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-uploadsettings-containsheader */
  ContainsHeader?: boolean | Intrinsic
  /**
   * - The delimiter between values in the file.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-uploadsettings-delimiter */
  Delimiter?: string | Intrinsic
  /**
   * - File format.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CSV | TSV | CLF | ELF | XLSX | JSON`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-uploadsettings-format */
  Format?: string | Intrinsic
  /**
   * - A row number to start reading data from.
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-uploadsettings-startfromrow */
  StartFromRow?: number | Intrinsic
  /**
   * - Text qualifier.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `DOUBLE_QUOTE | SINGLE_QUOTE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-uploadsettings-textqualifier */
  TextQualifier?: string | Intrinsic
}

/**
 * The lookback window setup of an incremental refresh configuration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface LookbackWindow {
  /**
   * - The name of the lookback window column.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-lookbackwindow-columnname */
  ColumnName: string | Intrinsic
  /**
   * - The lookback window column size.
   * - _Required_: Yes
   * - _Type_: Number
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-lookbackwindow-size */
  Size: number | Intrinsic
  /**
   * - The size unit that is used for the lookback window column. Valid values for this structure are `HOUR`, `DAY`, and `WEEK`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `HOUR | DAY | WEEK`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-lookbackwindow-sizeunit */
  SizeUnit: string | Intrinsic
}

/**
 * A calculated column for a dataset.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface CalculatedColumn {
  /**
   * - A unique ID to identify a calculated column. During a dataset update, if the column ID of a calculated column matches that of an existing calculated column, Amazon QuickSight preserves the existing calculated column.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-calculatedcolumn-columnid */
  ColumnId: string | Intrinsic
  /**
   * - Column name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `127`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-calculatedcolumn-columnname */
  ColumnName: string | Intrinsic
  /**
   * - An expression that defines the calculated column.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `250000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-calculatedcolumn-expression */
  Expression: string | Intrinsic
}

/**
 * The new default values for the parameter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface NewDefaultValues {
  /**
   * - A list of static default values for a given date time parameter. The valid format for this property is `yyyy-MM-dd’T’HH:mm:ss’Z’`.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `32`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-newdefaultvalues-datetimestaticvalues */
  DateTimeStaticValues?: (string | Intrinsic)[]
  /**
   * - A list of static default values for a given decimal parameter.
   * - _Required_: No
   * - _Type_: Array of Number
   * - _Minimum_: `0`
   * - _Maximum_: `32`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-newdefaultvalues-decimalstaticvalues */
  DecimalStaticValues?: (number | Intrinsic)[]
  /**
   * - A list of static default values for a given integer parameter.
   * - _Required_: No
   * - _Type_: Array of Number
   * - _Minimum_: `0`
   * - _Maximum_: `32`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-newdefaultvalues-integerstaticvalues */
  IntegerStaticValues?: (number | Intrinsic)[]
  /**
   * - A list of static default values for a given string parameter.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0 | 0`
   * - _Maximum_: `512 | 32`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-newdefaultvalues-stringstaticvalues */
  StringStaticValues?: (string | Intrinsic)[]
}

/**
 * Properties associated with the columns participating in a join.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface JoinKeyProperties {
  /**
   * - A value that indicates that a row in a table is uniquely identified by the columns in a join key. This is used by Amazon QuickSight to optimize query performance.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-joinkeyproperties-uniquekey */
  UniqueKey?: boolean | Intrinsic
}

/**
 * Metadata that contains a description for a column.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface ColumnDescription {
  /**
   * - The text of a description for a column.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `500`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-columndescription-text */
  Text?: string | Intrinsic
}

/**
 * Groupings of columns that work together in certain Amazon QuickSight features. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface ColumnGroup {
  /**
   * - Geospatial column group that denotes a hierarchy.
   * - _Required_: No
   * - _Type_: [GeoSpatialColumnGroup](./aws-properties-quicksight-dataset-geospatialcolumngroup.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-columngroup-geospatialcolumngroup */
  GeoSpatialColumnGroup?: GeoSpatialColumnGroup
}

/**
 * The element you can use to define tags for row-level security.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface RowLevelPermissionTagConfiguration {
  /**
   * - The status of row-level security tags. If enabled, the status is `ENABLED`. If disabled, the status is `DISABLED`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ENABLED | DISABLED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-rowlevelpermissiontagconfiguration-status */
  Status?: string | Intrinsic
  /**
   * - The configuration of tags on a dataset to set row-level security.
   * - _Required_: No
   * - _Type_: Array of Array
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-rowlevelpermissiontagconfiguration-tagruleconfigurations */
  TagRuleConfigurations?: (any | Intrinsic)[][]
  /**
   * - A set of rules associated with row-level security, such as the tag names and columns that they are assigned to.
   * - _Required_: Yes
   * - _Type_: Array of [RowLevelPermissionTagRule](./aws-properties-quicksight-dataset-rowlevelpermissiontagrule.html)
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-rowlevelpermissiontagconfiguration-tagrules */
  TagRules: RowLevelPermissionTagRule[]
}

/**
 * A date time parameter that is created in the dataset.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface DateTimeDatasetParameter {
  /**
   * - A list of default values for a given date time parameter. This structure only accepts static values.
   * - _Required_: No
   * - _Type_: [DateTimeDatasetParameterDefaultValues](./aws-properties-quicksight-dataset-datetimedatasetparameterdefaultvalues.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-datetimedatasetparameter-defaultvalues */
  DefaultValues?: DateTimeDatasetParameterDefaultValues
  /**
   * - An identifier for the parameter that is created in the dataset.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-datetimedatasetparameter-id */
  Id: string | Intrinsic
  /**
   * - The name of the date time parameter that is created in the dataset.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-datetimedatasetparameter-name */
  Name: string | Intrinsic
  /**
   * - The time granularity of the date time parameter.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `YEAR | QUARTER | MONTH | WEEK | DAY | HOUR | MINUTE | SECOND | MILLISECOND`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-datetimedatasetparameter-timegranularity */
  TimeGranularity?: string | Intrinsic
  /**
   * - The value type of the dataset parameter. Valid values are `single value` or `multi value`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `MULTI_VALUED | SINGLE_VALUED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-datetimedatasetparameter-valuetype */
  ValueType: string | Intrinsic
}

/**
 * A decimal parameter that is created in the dataset.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface DecimalDatasetParameter {
  /**
   * - A list of default values for a given decimal parameter. This structure only accepts static values.
   * - _Required_: No
   * - _Type_: [DecimalDatasetParameterDefaultValues](./aws-properties-quicksight-dataset-decimaldatasetparameterdefaultvalues.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-decimaldatasetparameter-defaultvalues */
  DefaultValues?: DecimalDatasetParameterDefaultValues
  /**
   * - An identifier for the decimal parameter created in the dataset.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-decimaldatasetparameter-id */
  Id: string | Intrinsic
  /**
   * - The name of the decimal parameter that is created in the dataset.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-decimaldatasetparameter-name */
  Name: string | Intrinsic
  /**
   * - The value type of the dataset parameter. Valid values are `single value` or `multi value`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `MULTI_VALUED | SINGLE_VALUED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-decimaldatasetparameter-valuetype */
  ValueType: string | Intrinsic
}

/**
 * An integer parameter that is created in the dataset.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface IntegerDatasetParameter {
  /**
   * - A list of default values for a given integer parameter. This structure only accepts static values.
   * - _Required_: No
   * - _Type_: [IntegerDatasetParameterDefaultValues](./aws-properties-quicksight-dataset-integerdatasetparameterdefaultvalues.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-integerdatasetparameter-defaultvalues */
  DefaultValues?: IntegerDatasetParameterDefaultValues
  /**
   * - An identifier for the integer parameter created in the dataset.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-integerdatasetparameter-id */
  Id: string | Intrinsic
  /**
   * - The name of the integer parameter that is created in the dataset.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-integerdatasetparameter-name */
  Name: string | Intrinsic
  /**
   * - The value type of the dataset parameter. Valid values are `single value` or `multi value`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `MULTI_VALUED | SINGLE_VALUED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-integerdatasetparameter-valuetype */
  ValueType: string | Intrinsic
}

/**
 * A string parameter that is created in the dataset.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface StringDatasetParameter {
  /**
   * - A list of default values for a given string dataset parameter type. This structure only accepts static values.
   * - _Required_: No
   * - _Type_: [StringDatasetParameterDefaultValues](./aws-properties-quicksight-dataset-stringdatasetparameterdefaultvalues.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-stringdatasetparameter-defaultvalues */
  DefaultValues?: StringDatasetParameterDefaultValues
  /**
   * - An identifier for the string parameter that is created in the dataset.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-stringdatasetparameter-id */
  Id: string | Intrinsic
  /**
   * - The name of the string parameter that is created in the dataset.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-stringdatasetparameter-name */
  Name: string | Intrinsic
  /**
   * - The value type of the dataset parameter. Valid values are `single value` or `multi value`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `MULTI_VALUED | SINGLE_VALUED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-stringdatasetparameter-valuetype */
  ValueType: string | Intrinsic
}

/**
 * A physical table type built from the results of the custom SQL query.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface CustomSql {
  /**
   * - The column schema from the SQL query result set.
   * - _Required_: Yes
   * - _Type_: Array of [InputColumn](./aws-properties-quicksight-dataset-inputcolumn.html)
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-customsql-columns */
  Columns: InputColumn[]
  /**
   * - The Amazon Resource Name (ARN) of the data source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-customsql-datasourcearn */
  DataSourceArn: string | Intrinsic
  /**
   * - A display name for the SQL query result.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-customsql-name */
  Name: string | Intrinsic
  /**
   * - The SQL query.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `168000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-customsql-sqlquery */
  SqlQuery: string | Intrinsic
}

/**
 * A physical table type for an S3 data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface S3Source {
  /**
   * - The Amazon Resource Name (ARN) for the data source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-s3source-datasourcearn */
  DataSourceArn: string | Intrinsic
  /**
   * - A physical table type for an S3 data source.
   * - _Required_: Yes
   * - _Type_: Array of [InputColumn](./aws-properties-quicksight-dataset-inputcolumn.html)
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-s3source-inputcolumns */
  InputColumns: InputColumn[]
  /**
   * - Information about the format for the S3 source file or files.
   * - _Required_: No
   * - _Type_: [UploadSettings](./aws-properties-quicksight-dataset-uploadsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-s3source-uploadsettings */
  UploadSettings?: UploadSettings
}

/**
 * The incremental refresh configuration for a dataset.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface IncrementalRefresh {
  /**
   * - The lookback window setup for an incremental refresh configuration.
   * - _Required_: Yes
   * - _Type_: [LookbackWindow](./aws-properties-quicksight-dataset-lookbackwindow.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-incrementalrefresh-lookbackwindow */
  LookbackWindow: LookbackWindow
}

/**
 * A transform operation that creates calculated columns. Columns created in one such operation form a lexical closure.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface CreateColumnsOperation {
  /**
   * - Calculated columns to create.
   * - _Required_: Yes
   * - _Type_: Array of [CalculatedColumn](./aws-properties-quicksight-dataset-calculatedcolumn.html)
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-createcolumnsoperation-columns */
  Columns: CalculatedColumn[]
}

/**
 * A transform operation that overrides the dataset parameter values that are defined in another dataset.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface OverrideDatasetParameterOperation {
  /**
   * - The new default values for the parameter.
   * - _Required_: No
   * - _Type_: [NewDefaultValues](./aws-properties-quicksight-dataset-newdefaultvalues.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-overridedatasetparameteroperation-newdefaultvalues */
  NewDefaultValues?: NewDefaultValues
  /**
   * - The new name for the parameter.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-overridedatasetparameteroperation-newparametername */
  NewParameterName?: string | Intrinsic
  /**
   * - The name of the parameter to be overridden with different values.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-overridedatasetparameteroperation-parametername */
  ParameterName: string | Intrinsic
}

/**
 * The instructions associated with a join.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface JoinInstruction {
  /**
   * - Join key properties of the left operand.
   * - _Required_: No
   * - _Type_: [JoinKeyProperties](./aws-properties-quicksight-dataset-joinkeyproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-joininstruction-leftjoinkeyproperties */
  LeftJoinKeyProperties?: JoinKeyProperties
  /**
   * - The operand on the left side of a join.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9a-zA-Z-]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-joininstruction-leftoperand */
  LeftOperand: string | Intrinsic
  /**
   * - The join instructions provided in the `ON` clause of a join.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-joininstruction-onclause */
  OnClause: string | Intrinsic
  /**
   * - Join key properties of the right operand.
   * - _Required_: No
   * - _Type_: [JoinKeyProperties](./aws-properties-quicksight-dataset-joinkeyproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-joininstruction-rightjoinkeyproperties */
  RightJoinKeyProperties?: JoinKeyProperties
  /**
   * - The operand on the right side of a join.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9a-zA-Z-]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-joininstruction-rightoperand */
  RightOperand: string | Intrinsic
  /**
   * - The type of join that it is.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `INNER | OUTER | LEFT | RIGHT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-joininstruction-type */
  Type: string | Intrinsic
}

/**
 * A tag for a column in a `[TagColumnOperation](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_TagColumnOperation.html)` structure. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface ColumnTag {
  /**
   * - A description for a column.
   * - _Required_: No
   * - _Type_: [ColumnDescription](./aws-properties-quicksight-dataset-columndescription.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-columntag-columndescription */
  ColumnDescription?: ColumnDescription
  /**
   * - A geospatial role for a column.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `COUNTRY | STATE | COUNTY | CITY | POSTCODE | LONGITUDE | LATITUDE | POLITICAL1 | CENSUS_TRACT | CENSUS_BLOCK_GROUP | CENSUS_BLOCK`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-columntag-columngeographicrole */
  ColumnGeographicRole?: string | Intrinsic
}

/**
 * The parameter declarations of the dataset.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface DatasetParameter {
  /**
   * - A date time parameter that is created in the dataset.
   * - _Required_: No
   * - _Type_: [DateTimeDatasetParameter](./aws-properties-quicksight-dataset-datetimedatasetparameter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-datasetparameter-datetimedatasetparameter */
  DateTimeDatasetParameter?: DateTimeDatasetParameter
  /**
   * - A decimal parameter that is created in the dataset.
   * - _Required_: No
   * - _Type_: [DecimalDatasetParameter](./aws-properties-quicksight-dataset-decimaldatasetparameter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-datasetparameter-decimaldatasetparameter */
  DecimalDatasetParameter?: DecimalDatasetParameter
  /**
   * - An integer parameter that is created in the dataset.
   * - _Required_: No
   * - _Type_: [IntegerDatasetParameter](./aws-properties-quicksight-dataset-integerdatasetparameter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-datasetparameter-integerdatasetparameter */
  IntegerDatasetParameter?: IntegerDatasetParameter
  /**
   * - A string parameter that is created in the dataset.
   * - _Required_: No
   * - _Type_: [StringDatasetParameter](./aws-properties-quicksight-dataset-stringdatasetparameter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-datasetparameter-stringdatasetparameter */
  StringDatasetParameter?: StringDatasetParameter
}

/**
 * A view of a data source that contains information about the shape of the data in the underlying source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface PhysicalTable {
  /**
   * - A physical table type built from the results of the custom SQL query.
   * - _Required_: No
   * - _Type_: [CustomSql](./aws-properties-quicksight-dataset-customsql.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-physicaltable-customsql */
  CustomSql?: CustomSql
  /**
   * - A physical table type for relational data sources.
   * - _Required_: No
   * - _Type_: [RelationalTable](./aws-properties-quicksight-dataset-relationaltable.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-physicaltable-relationaltable */
  RelationalTable?: RelationalTable
  /**
   * - A physical table type for as S3 data source.
   * - _Required_: No
   * - _Type_: [S3Source](./aws-properties-quicksight-dataset-s3source.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-physicaltable-s3source */
  S3Source?: S3Source
}

/**
 * The refresh configuration of a dataset.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface RefreshConfiguration {
  /**
   * - The incremental refresh for the dataset.
   * - _Required_: Yes
   * - _Type_: [IncrementalRefresh](./aws-properties-quicksight-dataset-incrementalrefresh.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-refreshconfiguration-incrementalrefresh */
  IncrementalRefresh: IncrementalRefresh
}

/**
 * Information about the source of a logical table. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface LogicalTableSource {
  /**
   * - The Amazon Resource Number (ARN) of the parent dataset.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-logicaltablesource-datasetarn */
  DataSetArn?: string | Intrinsic
  /**
   * - Specifies the result of a join of two logical tables.
   * - _Required_: No
   * - _Type_: [JoinInstruction](./aws-properties-quicksight-dataset-joininstruction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-logicaltablesource-joininstruction */
  JoinInstruction?: JoinInstruction
  /**
   * - Physical table ID.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[0-9a-zA-Z-]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-logicaltablesource-physicaltableid */
  PhysicalTableId?: string | Intrinsic
}

/**
 * A transform operation that tags a column with additional information.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface TagColumnOperation {
  /**
   * - The column that this operation acts on.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `127`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-tagcolumnoperation-columnname */
  ColumnName: string | Intrinsic
  /**
   * - The dataset column tag, currently only used for geospatial type tagging.
   * - _Required_: Yes
   * - _Type_: Array of [ColumnTag](./aws-properties-quicksight-dataset-columntag.html)
   * - _Minimum_: `1`
   * - _Maximum_: `16`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-tagcolumnoperation-tags */
  Tags: ColumnTag[]
}

/**
 * The refresh properties of a dataset.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface DataSetRefreshProperties {
  /**
   * - The refresh configuration for a dataset.
   * - _Required_: No
   * - _Type_: [RefreshConfiguration](./aws-properties-quicksight-dataset-refreshconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-datasetrefreshproperties-refreshconfiguration */
  RefreshConfiguration?: RefreshConfiguration
}

/**
 * A data transformation on a logical table. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface TransformOperation {
  /**
   * - A transform operation that casts a column to a different type.
   * - _Required_: No
   * - _Type_: [CastColumnTypeOperation](./aws-properties-quicksight-dataset-castcolumntypeoperation.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-transformoperation-castcolumntypeoperation */
  CastColumnTypeOperation?: CastColumnTypeOperation
  /**
   * - An operation that creates calculated columns. Columns created in one such operation form a lexical closure.
   * - _Required_: No
   * - _Type_: [CreateColumnsOperation](./aws-properties-quicksight-dataset-createcolumnsoperation.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-transformoperation-createcolumnsoperation */
  CreateColumnsOperation?: CreateColumnsOperation
  /**
   * - An operation that filters rows based on some condition.
   * - _Required_: No
   * - _Type_: [FilterOperation](./aws-properties-quicksight-dataset-filteroperation.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-transformoperation-filteroperation */
  FilterOperation?: FilterOperation
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [OverrideDatasetParameterOperation](./aws-properties-quicksight-dataset-overridedatasetparameteroperation.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-transformoperation-overridedatasetparameteroperation */
  OverrideDatasetParameterOperation?: OverrideDatasetParameterOperation
  /**
   * - An operation that projects columns. Operations that come after a projection can only refer to projected columns.
   * - _Required_: No
   * - _Type_: [ProjectOperation](./aws-properties-quicksight-dataset-projectoperation.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-transformoperation-projectoperation */
  ProjectOperation?: ProjectOperation
  /**
   * - An operation that renames a column.
   * - _Required_: No
   * - _Type_: [RenameColumnOperation](./aws-properties-quicksight-dataset-renamecolumnoperation.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-transformoperation-renamecolumnoperation */
  RenameColumnOperation?: RenameColumnOperation
  /**
   * - An operation that tags a column with additional information.
   * - _Required_: No
   * - _Type_: [TagColumnOperation](./aws-properties-quicksight-dataset-tagcolumnoperation.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-transformoperation-tagcolumnoperation */
  TagColumnOperation?: TagColumnOperation
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [UntagColumnOperation](./aws-properties-quicksight-dataset-untagcolumnoperation.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-transformoperation-untagcolumnoperation */
  UntagColumnOperation?: UntagColumnOperation
}

/**
 * A _logical table_ is a unit that joins and that data transformations operate on. A logical table has a source, which can be either a physical table or result of a join. When a logical table points to a physical table, the logical table acts as a mutable copy of that physical table through transform operations.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface LogicalTable {
  /**
   * - A display name for the logical table.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-logicaltable-alias */
  Alias: string | Intrinsic
  /**
   * - Transform operations that act on this logical table. For this structure to be valid, only one of the attributes can be non-null.
   * - _Required_: No
   * - _Type_: Array of [TransformOperation](./aws-properties-quicksight-dataset-transformoperation.html)
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-logicaltable-datatransforms */
  DataTransforms?: TransformOperation[]
  /**
   * - Source of this logical table.
   * - _Required_: No
   * - _Type_: [LogicalTableSource](./aws-properties-quicksight-dataset-logicaltablesource.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-logicaltable-source */
  Source?: LogicalTableSource
}

/**
 * Creates a dataset. This operation doesn't support datasets that include uploaded files as a source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html */

export interface QuickSightDataSet {
  Type: 'AWS::QuickSight::DataSet'
  Properties: {
    /**
     * - The AWS account ID.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[0-9]{12}$`
     * - _Minimum_: `12`
     * - _Maximum_: `12`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-awsaccountid */
    AwsAccountId?: string | Intrinsic
    /**
     * - Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported.
     * - _Required_: No
     * - _Type_: Array of [ColumnGroup](./aws-properties-quicksight-dataset-columngroup.html)
     * - _Minimum_: `1`
     * - _Maximum_: `8`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-columngroups */
    ColumnGroups?: ColumnGroup[]
    /**
     * - A set of one or more definitions of a `ColumnLevelPermissionRule` .
     * - _Required_: No
     * - _Type_: Array of [ColumnLevelPermissionRule](./aws-properties-quicksight-dataset-columnlevelpermissionrule.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-columnlevelpermissionrules */
    ColumnLevelPermissionRules?: ColumnLevelPermissionRule[]
    /**
     * - An ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-datasetid */
    DataSetId?: string | Intrinsic
    /**
     * - The parameters that are declared in a dataset.
     * - _Required_: No
     * - _Type_: Array of [DatasetParameter](./aws-properties-quicksight-dataset-datasetparameter.html)
     * - _Minimum_: `0`
     * - _Maximum_: `32`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-datasetparameters */
    DatasetParameters?: DatasetParameter[]
    /**
     * - The refresh properties of a dataset.
     * - _Required_: No
     * - _Type_: [DataSetRefreshProperties](./aws-properties-quicksight-dataset-datasetrefreshproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-datasetrefreshproperties */
    DataSetRefreshProperties?: DataSetRefreshProperties
    /**
     * - The usage configuration to apply to child datasets that reference this dataset as a source.
     * - _Required_: No
     * - _Type_: [DataSetUsageConfiguration](./aws-properties-quicksight-dataset-datasetusageconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-datasetusageconfiguration */
    DataSetUsageConfiguration?: DataSetUsageConfiguration
    /**
     * - The folder that contains fields and nested subfolders for your dataset.
     * - _Required_: No
     * - _Type_: Object of [FieldFolder](./aws-properties-quicksight-dataset-fieldfolder.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-fieldfolders */
    FieldFolders?: Record<string, FieldFolder>
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `0`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-folderarns */
    FolderArns?: (string | Intrinsic)[]
    /**
     * - Indicates whether you want to import the data into SPICE.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `SPICE | DIRECT_QUERY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-importmode */
    ImportMode?: string | Intrinsic
    /**
     * - The wait policy to use when creating or updating a Dataset. The default is to wait for SPICE ingestion to finish with timeout of 36 hours.
     * - _Required_: No
     * - _Type_: [IngestionWaitPolicy](./aws-properties-quicksight-dataset-ingestionwaitpolicy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-ingestionwaitpolicy */
    IngestionWaitPolicy?: IngestionWaitPolicy
    /**
     * - Configures the combination and transformation of the data from the physical tables.
     * - _Required_: No
     * - _Type_: Object of [LogicalTable](./aws-properties-quicksight-dataset-logicaltable.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-logicaltablemap */
    LogicalTableMap?: Record<string, LogicalTable>
    /**
     * - The display name for the dataset.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-name */
    Name?: string | Intrinsic
    /**
     * - A list of resource permissions on the dataset.
     * - _Required_: No
     * - _Type_: Array of [ResourcePermission](./aws-properties-quicksight-dataset-resourcepermission.html)
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-permissions */
    Permissions?: ResourcePermission[]
    /**
     * - Declares the physical tables that are available in the underlying data sources.
     * - _Required_: No
     * - _Type_: Object of [PhysicalTable](./aws-properties-quicksight-dataset-physicaltable.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-physicaltablemap */
    PhysicalTableMap?: Record<string, PhysicalTable>
    /**
     * - The row-level security configuration for the data that you want to create.
     * - _Required_: No
     * - _Type_: [RowLevelPermissionDataSet](./aws-properties-quicksight-dataset-rowlevelpermissiondataset.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-rowlevelpermissiondataset */
    RowLevelPermissionDataSet?: RowLevelPermissionDataSet
    /**
     * - The element you can use to define tags for row-level security.
     * - _Required_: No
     * - _Type_: [RowLevelPermissionTagConfiguration](./aws-properties-quicksight-dataset-rowlevelpermissiontagconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-rowlevelpermissiontagconfiguration */
    RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration
    /**
     * - Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-quicksight-dataset-tag.html)
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-dataset.html#cfn-quicksight-dataset-tags */
    Tags?: Tag[]
  }
}
