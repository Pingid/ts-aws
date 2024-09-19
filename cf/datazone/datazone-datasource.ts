import type { Intrinsic } from '../intrinsic/index.js' /**
 * The details of a metadata form.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html */

export interface FormInput {
  /**
   * - The content of the metadata form.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `75000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-forminput-content */
  Content?: string | Intrinsic
  /**
   * - The name of the metadata form.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(?![0-9_])\w+$|^_\w*[a-zA-Z0-9]\w*$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-forminput-formname */
  FormName: string | Intrinsic
  /**
   * - The ID of the metadata form type.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(?!\.)[\w\.]*\w$`
   * - _Minimum_: `1`
   * - _Maximum_: `385`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-forminput-typeidentifier */
  TypeIdentifier?: string | Intrinsic
  /**
   * - The revision of the metadata form type.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-forminput-typerevision */
  TypeRevision?: string | Intrinsic
}

/**
 * The recommendation configuration for the data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html */

export interface RecommendationConfiguration {
  /**
   * - Specifies whether automatic business name generation is to be enabled or not as part of the recommendation configuration.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-recommendationconfiguration-enablebusinessnamegeneration */
  EnableBusinessNameGeneration?: boolean | Intrinsic
}

/**
 * The details of the schedule of the data source runs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html */

export interface ScheduleConfiguration {
  /**
   * - The schedule of the data source runs.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `cron\((\b[0-5]?[0-9]\b) (\b2[0-3]\b|\b[0-1]?[0-9]\b) (.*){1,5} (.*){1,5} (.*){1,5} (.*){1,5}\)`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-scheduleconfiguration-schedule */
  Schedule?: string | Intrinsic
  /**
   * - The timezone of the data source run.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-scheduleconfiguration-timezone */
  Timezone?: string | Intrinsic
}

/**
 * The details of the credentials required to access an Amazon Redshift cluster.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html */

export interface RedshiftCredentialConfiguration {
  /**
   * - The ARN of a secret manager for an Amazon Redshift cluster.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws[^:]*:secretsmanager:[a-z]{2}-?(iso|gov)?-{1}[a-z]*-{1}[0-9]:\d{12}:secret:.*$`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-redshiftcredentialconfiguration-secretmanagerarn */
  SecretManagerArn: string | Intrinsic
}

/**
 * A filter expression in Amazon DataZone.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html */

export interface FilterExpression {
  /**
   * - The search filter expression.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-filterexpression-expression */
  Expression: string | Intrinsic
  /**
   * - The search filter explresison type.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `INCLUDE | EXCLUDE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-filterexpression-type */
  Type: string | Intrinsic
}

/**
 * The details of the Amazon Redshift cluster storage.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html */

export interface RedshiftClusterStorage {
  /**
   * - The name of an Amazon Redshift cluster.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9a-z].[a-z0-9\-]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-redshiftclusterstorage-clustername */
  ClusterName: string | Intrinsic
}

/**
 * The details of the Amazon Redshift Serverless workgroup storage.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html */

export interface RedshiftServerlessStorage {
  /**
   * - The name of the Amazon Redshift Serverless workgroup.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-z0-9-]+$`
   * - _Minimum_: `3`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-redshiftserverlessstorage-workgroupname */
  WorkgroupName: string | Intrinsic
}

/**
 * The relational filter configuration for the data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html */

export interface RelationalFilterConfiguration {
  /**
   * - The database name specified in the relational filter configuration for the data source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-relationalfilterconfiguration-databasename */
  DatabaseName: string | Intrinsic
  /**
   * - The filter expressions specified in the relational filter configuration for the data source.
   * - _Required_: No
   * - _Type_: Array of [FilterExpression](./aws-properties-datazone-datasource-filterexpression.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-relationalfilterconfiguration-filterexpressions */
  FilterExpressions?: FilterExpression[]
  /**
   * - The schema name specified in the relational filter configuration for the data source.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-relationalfilterconfiguration-schemaname */
  SchemaName?: string | Intrinsic
}

/**
 * The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html */

export interface RedshiftStorage {
  /**
   * - The details of the Amazon Redshift cluster source.
   * - _Required_: No
   * - _Type_: [RedshiftClusterStorage](./aws-properties-datazone-datasource-redshiftclusterstorage.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-redshiftstorage-redshiftclustersource */
  RedshiftClusterSource?: RedshiftClusterStorage
  /**
   * - The details of the Amazon Redshift Serverless workgroup source.
   * - _Required_: No
   * - _Type_: [RedshiftServerlessStorage](./aws-properties-datazone-datasource-redshiftserverlessstorage.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-redshiftstorage-redshiftserverlesssource */
  RedshiftServerlessSource?: RedshiftServerlessStorage
}

/**
 * The configuration details of the AWS Glue data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html */

export interface GlueRunConfigurationInput {
  /**
   * - Specifies whether to automatically import data quality metrics as part of the data source run.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-gluerunconfigurationinput-autoimportdataqualityresult */
  AutoImportDataQualityResult?: boolean | Intrinsic
  /**
   * - The data access role included in the configuration details of the AWS Glue data source.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:aws[^:]*:iam::\d{12}:(role|role/service-role)/[\w+=,.@-]{1,128}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-gluerunconfigurationinput-dataaccessrole */
  DataAccessRole?: string | Intrinsic
  /**
   * - The relational filter configurations included in the configuration details of the AWS Glue data source.
   * - _Required_: Yes
   * - _Type_: Array of [RelationalFilterConfiguration](./aws-properties-datazone-datasource-relationalfilterconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-gluerunconfigurationinput-relationalfilterconfigurations */
  RelationalFilterConfigurations: RelationalFilterConfiguration[]
}

/**
 * The relational filter configurations included in the configuration details of the Amazon Redshift data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html */

export interface RedshiftRunConfigurationInput {
  /**
   * - The data access role included in the configuration details of the Amazon Redshift data source.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:aws[^:]*:iam::\d{12}:(role|role/service-role)/[\w+=,.@-]{1,128}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-redshiftrunconfigurationinput-dataaccessrole */
  DataAccessRole?: string | Intrinsic
  /**
   * - The details of the credentials required to access an Amazon Redshift cluster.
   * - _Required_: Yes
   * - _Type_: [RedshiftCredentialConfiguration](./aws-properties-datazone-datasource-redshiftcredentialconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-redshiftrunconfigurationinput-redshiftcredentialconfiguration */
  RedshiftCredentialConfiguration: RedshiftCredentialConfiguration
  /**
   * - The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run.
   * - _Required_: Yes
   * - _Type_: [RedshiftStorage](./aws-properties-datazone-datasource-redshiftstorage.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-redshiftrunconfigurationinput-redshiftstorage */
  RedshiftStorage: RedshiftStorage
  /**
   * - The relational filter configurations included in the configuration details of the AWS Glue data source.
   * - _Required_: Yes
   * - _Type_: Array of [RelationalFilterConfiguration](./aws-properties-datazone-datasource-relationalfilterconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-redshiftrunconfigurationinput-relationalfilterconfigurations */
  RelationalFilterConfigurations: RelationalFilterConfiguration[]
}

/**
 * The configuration of the data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html */

export interface DataSourceConfigurationInput {
  /**
   * - The configuration of the AWS Glue data source.
   * - _Required_: No
   * - _Type_: [GlueRunConfigurationInput](./aws-properties-datazone-datasource-gluerunconfigurationinput.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-datasourceconfigurationinput-gluerunconfiguration */
  GlueRunConfiguration?: GlueRunConfigurationInput
  /**
   * - The configuration of the Amazon Redshift data source.
   * - _Required_: No
   * - _Type_: [RedshiftRunConfigurationInput](./aws-properties-datazone-datasource-redshiftrunconfigurationinput.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-datasourceconfigurationinput-redshiftrunconfiguration */
  RedshiftRunConfiguration?: RedshiftRunConfigurationInput
}

/**
 * The `AWS::DataZone::DataSource`resource specifies an Amazon DataZone data source that is used to import technical metadata of assets (data) from the source databases or data warehouses into Amazon DataZone.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html */

export interface DataZoneDataSource {
  Type: 'AWS::DataZone::DataSource'
  Properties: {
    /**
     * - The metadata forms attached to the assets that the data source works with.
     * - _Required_: No
     * - _Type_: Array of [FormInput](./aws-properties-datazone-datasource-forminput.html)
     * - _Minimum_: `0`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-assetformsinput */
    AssetFormsInput?: FormInput[]
    /**
     * - The configuration of the data source.
     * - _Required_: No
     * - _Type_: [DataSourceConfigurationInput](./aws-properties-datazone-datasource-datasourceconfigurationinput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-configuration */
    Configuration?: DataSourceConfigurationInput
    /**
     * - The description of the data source.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-description */
    Description?: string | Intrinsic
    /**
     * - The ID of the Amazon DataZone domain where the data source is created.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-domainidentifier */
    DomainIdentifier: string | Intrinsic
    /**
     * - Specifies whether the data source is enabled.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-enablesetting */
    EnableSetting?: string | Intrinsic
    /**
     * - The unique identifier of the Amazon DataZone environment to which the data source publishes assets.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-environmentidentifier */
    EnvironmentIdentifier: string | Intrinsic
    /**
     * - The name of the data source.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-name */
    Name: string | Intrinsic
    /**
     * - The identifier of the Amazon DataZone project in which you want to add this data source.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-projectidentifier */
    ProjectIdentifier: string | Intrinsic
    /**
     * - Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-publishonimport */
    PublishOnImport?: boolean | Intrinsic
    /**
     * - Specifies whether the business name generation is to be enabled for this data source.
     * - _Required_: No
     * - _Type_: [RecommendationConfiguration](./aws-properties-datazone-datasource-recommendationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-recommendation */
    Recommendation?: RecommendationConfiguration
    /**
     * - The schedule of the data source runs.
     * - _Required_: No
     * - _Type_: [ScheduleConfiguration](./aws-properties-datazone-datasource-scheduleconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-schedule */
    Schedule?: ScheduleConfiguration
    /**
     * - The type of the data source.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-datasource.html#cfn-datazone-datasource-type */
    Type: string | Intrinsic
  }
}
