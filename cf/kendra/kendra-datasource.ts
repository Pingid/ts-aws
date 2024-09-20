import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A key-value pair that identifies or categorizes an index, FAQ, data source, or other resource. TA tag key and value can consist of Unicode letters, digits, white space, and any of the following symbols: \_ . : / = + - @.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface Tag {
  /**
   * - The key for the tag. Keys are not case sensitive and must be unique for the index, FAQ, data source, or other resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-tag-key */
  Key: string | Intrinsic
  /**
   * - The value associated with the tag. The value may be an empty string but it can't be null.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-tag-value */
  Value: string | Intrinsic
}

/**
 * Provides the configuration information for invoking a Lambda function in AWS Lambda to alter document metadata and content when ingesting documents into Amazon Kendra. You can configure your Lambda function using [PreExtractionHookConfiguration](https://docs.aws.amazon.com/kendra/latest/dg/API_CustomDocumentEnrichmentConfiguration.html) if you want to apply advanced alterations on the original or raw documents. If you want to apply advanced alterations on the Amazon Kendra structured documents, you must configure your Lambda function using [PostExtractionHookConfiguration](https://docs.aws.amazon.com/kendra/latest/dg/API_CustomDocumentEnrichmentConfiguration.html). You can only invoke one Lambda function. However, this function can invoke other functions it requires.
 * For more information, see [Customizing document metadata during the ingestion process](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface HookConfiguration {
  /**
   * - The condition used for when a Lambda function should be invoked.
   * - For example, you can specify a condition that if there are empty date-time values, then Amazon Kendra should invoke a function that inserts the current date-time.
   * - _Required_: No
   * - _Type_: [DocumentAttributeCondition](./aws-properties-kendra-datasource-documentattributecondition.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-hookconfiguration-invocationcondition */
  InvocationCondition?: DocumentAttributeCondition
  /**
   * - The Amazon Resource Name (ARN) of an IAM role with permission to run a Lambda function during ingestion. For more information, see [an IAM roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html).
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-hookconfiguration-lambdaarn */
  LambdaArn: string | Intrinsic
  /**
   * - Stores the original, raw documents or the structured, parsed documents before and after altering them. For more information, see [Data contracts for Lambda functions](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#cde-data-contracts-lambda).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]`
   * - _Minimum_: `3`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-hookconfiguration-s3bucket */
  S3Bucket: string | Intrinsic
}

/**
 * Provides the configuration information to connect to Amazon WorkDocs as your data source.
 * Amazon WorkDocs connector is available in Oregon, North Virginia, Sydney, Singapore and Ireland regions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface WorkDocsConfiguration {
  /**
   * - `TRUE` to include comments on documents in your index. Including comments in your index means each comment is a document that can be searched on.
   * - The default is set to `FALSE`.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-workdocsconfiguration-crawlcomments */
  CrawlComments?: boolean | Intrinsic
  /**
   * - A list of regular expression patterns to exclude certain files in your Amazon WorkDocs site repository. Files that match the patterns are excluded from the index. Files that don’t match the patterns are included in the index. If a file matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `50 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-workdocsconfiguration-exclusionpatterns */
  ExclusionPatterns?: (string | Intrinsic)[]
  /**
   * - A list of `DataSourceToIndexFieldMapping` objects that map Amazon WorkDocs data source attributes or field names to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Amazon WorkDocs fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Amazon WorkDocs data source field names must exist in your Amazon WorkDocs custom metadata.
   * - _Required_: No
   * - _Type_: Array of [DataSourceToIndexFieldMapping](./aws-properties-kendra-datasource-datasourcetoindexfieldmapping.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-workdocsconfiguration-fieldmappings */
  FieldMappings?: DataSourceToIndexFieldMapping[]
  /**
   * - A list of regular expression patterns to include certain files in your Amazon WorkDocs site repository. Files that match the patterns are included in the index. Files that don't match the patterns are excluded from the index. If a file matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `50 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-workdocsconfiguration-inclusionpatterns */
  InclusionPatterns?: (string | Intrinsic)[]
  /**
   * - The identifier of the directory corresponding to your Amazon WorkDocs site repository.
   * - You can find the organization ID in the [AWS Directory Service](https://console.aws.amazon.com/directoryservicev2/) by going to **Active Directory**, then **Directories**. Your Amazon WorkDocs site directory has an ID, which is the organization ID. You can also set up a new Amazon WorkDocs directory in the AWS Directory Service console and enable a Amazon WorkDocs site for the directory in the Amazon WorkDocs console.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `d-[0-9a-fA-F]{10}`
   * - _Minimum_: `12`
   * - _Maximum_: `12`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-workdocsconfiguration-organizationid */
  OrganizationId: string | Intrinsic
  /**
   * - `TRUE` to use the Amazon WorkDocs change log to determine which documents require updating in the index. Depending on the change log's size, it may take longer for Amazon Kendra to use the change log than to scan all of your documents in Amazon WorkDocs.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-workdocsconfiguration-usechangelog */
  UseChangeLog?: boolean | Intrinsic
}

/**
 * The target document attribute or metadata field you want to alter when ingesting documents into Amazon Kendra.
 * For example, you can delete customer identification numbers associated with the documents, stored in the document metadata field called 'Customer\_ID'. You set the target key as 'Customer\_ID' and the deletion flag to `TRUE`. This removes all customer ID values in the field 'Customer\_ID'. This would scrub personally identifiable information from each document's metadata.
 * Amazon Kendra cannot create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using `DocumentAttributeTarget`. Amazon Kendra then will map your newly created metadata field to your index field.
 * You can also use this with [DocumentAttributeCondition](https://docs.aws.amazon.com/kendra/latest/dg/API_DocumentAttributeCondition.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface DocumentAttributeTarget {
  /**
   * - The identifier of the target document attribute or metadata field.
   * - For example, 'Department' could be an identifier for the target attribute or metadata field that includes the department names associated with the documents.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z0-9_][a-zA-Z0-9_-]*`
   * - _Minimum_: `1`
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-documentattributetarget-targetdocumentattributekey */
  TargetDocumentAttributeKey: string | Intrinsic
  /**
   * - The target value you want to create for the target attribute.
   * - For example, 'Finance' could be the target value for the target attribute key 'Department'.
   * - _Required_: No
   * - _Type_: [DocumentAttributeValue](./aws-properties-kendra-datasource-documentattributevalue.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-documentattributetarget-targetdocumentattributevalue */
  TargetDocumentAttributeValue?: DocumentAttributeValue
  /**
   * - `TRUE` to delete the existing target value for your specified target attribute key. You cannot create a target value and set this to `TRUE`. To create a target value (`TargetDocumentAttributeValue`), set this to `FALSE`.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-documentattributetarget-targetdocumentattributevaluedeletion */
  TargetDocumentAttributeValueDeletion?: boolean | Intrinsic
}

/**
 * Provides the configuration information to connect to an Amazon VPC.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface DataSourceVpcConfiguration {
  /**
   * - A list of identifiers of security groups within your Amazon VPC. The security groups should enable Amazon Kendra to connect to the data source.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `200 | 10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-datasourcevpcconfiguration-securitygroupids */
  SecurityGroupIds: (string | Intrinsic)[]
  /**
   * - A list of identifiers for subnets within your Amazon VPC. The subnets should be able to connect to each other in the VPC, and they should have outgoing access to the Internet through a NAT device.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `200 | 6`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-datasourcevpcconfiguration-subnetids */
  SubnetIds: (string | Intrinsic)[]
}

/**
 * Provides information about the column that should be used for filtering the query response by groups.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface AclConfiguration {
  /**
   * - A list of groups, separated by semi-colons, that filters a query response based on user context. The document is only returned to users that are in one of the groups specified in the `UserContext` field of the [Query](https://docs.aws.amazon.com/kendra/latest/dg/API_Query.html) operation.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-aclconfiguration-allowedgroupscolumnname */
  AllowedGroupsColumnName: string | Intrinsic
}

/**
 * Provides information about how Amazon Kendra should use the columns of a database in an index.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface ColumnConfiguration {
  /**
   * - One to five columns that indicate when a document in the database has changed.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-columnconfiguration-changedetectingcolumns */
  ChangeDetectingColumns: (string | Intrinsic)[]
  /**
   * - The column that contains the contents of the document.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-columnconfiguration-documentdatacolumnname */
  DocumentDataColumnName: string | Intrinsic
  /**
   * - The column that provides the document's identifier.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-columnconfiguration-documentidcolumnname */
  DocumentIdColumnName: string | Intrinsic
  /**
   * - The column that contains the title of the document.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-columnconfiguration-documenttitlecolumnname */
  DocumentTitleColumnName?: string | Intrinsic
  /**
   * - An array of objects that map database column names to the corresponding fields in an index. You must first create the fields in the index using the [UpdateIndex](https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateIndex.html) operation.
   * - _Required_: No
   * - _Type_: Array of [DataSourceToIndexFieldMapping](./aws-properties-kendra-datasource-datasourcetoindexfieldmapping.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-columnconfiguration-fieldmappings */
  FieldMappings?: DataSourceToIndexFieldMapping[]
}

/**
 * Provides the configuration information that's required to connect to a database.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface ConnectionConfiguration {
  /**
   * - The name of the host for the database. Can be either a string (host.subdomain.domain.tld) or an IPv4 or IPv6 address.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `253`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-connectionconfiguration-databasehost */
  DatabaseHost: string | Intrinsic
  /**
   * - The name of the database containing the document data.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-connectionconfiguration-databasename */
  DatabaseName: string | Intrinsic
  /**
   * - The port that the database uses for connections.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `65535`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-connectionconfiguration-databaseport */
  DatabasePort: number | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of an AWS Secrets Manager secret that stores the credentials. The credentials should be a user-password pair. For more information, see [Using a Database Data Source](https://docs.aws.amazon.com/kendra/latest/dg/data-source-database.html). For more information about AWS Secrets Manager, see [What Is AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html) in the _AWS Secrets Manager_ user guide.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   * - _Minimum_: `1`
   * - _Maximum_: `1284`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-connectionconfiguration-secretarn */
  SecretArn: string | Intrinsic
  /**
   * - The name of the table that contains the document data.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-connectionconfiguration-tablename */
  TableName: string | Intrinsic
}

/**
 * Provides information that configures Amazon Kendra to use a SQL database.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface SqlConfiguration {
  /**
   * - Determines whether Amazon Kendra encloses SQL identifiers for tables and column names in double quotes (") when making a database query. You can set the value to `DOUBLE_QUOTES` or `NONE`.
   * - By default, Amazon Kendra passes SQL identifiers the way that they are entered into the data source configuration. It does not change the case of identifiers or enclose them in quotes.
   * - PostgreSQL internally converts uppercase characters to lower case characters in identifiers unless they are quoted. Choosing this option encloses identifiers in quotes so that PostgreSQL does not convert the character's case.
   * - For MySQL databases, you must enable the ansi\_quotes option when you set this field to `DOUBLE_QUOTES`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `DOUBLE_QUOTES | NONE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-sqlconfiguration-queryidentifiersenclosingoption */
  QueryIdentifiersEnclosingOption?: string | Intrinsic
}

/**
 * Maps a column or attribute in the data source to an index field. You must first create the fields in the index using the [UpdateIndex](https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateIndex.html) operation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface DataSourceToIndexFieldMapping {
  /**
   * - The name of the field in the data source. You must first create the index field using the `UpdateIndex` API.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-datasourcetoindexfieldmapping-datasourcefieldname */
  DataSourceFieldName: string | Intrinsic
  /**
   * - The format for date fields in the data source. If the field specified in `DataSourceFieldName` is a date field, you must specify the date format. If the field is not a date field, an exception is thrown.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `4`
   * - _Maximum_: `40`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-datasourcetoindexfieldmapping-datefieldformat */
  DateFieldFormat?: string | Intrinsic
  /**
   * - The name of the index field to map to the data source field. The index field type must match the data source field type.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-datasourcetoindexfieldmapping-indexfieldname */
  IndexFieldName: string | Intrinsic
}

/**
 * User accounts whose documents should be indexed.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface OneDriveUsers {
  /**
   * - A list of users whose documents should be indexed. Specify the user names in email format, for example, `username@tenantdomain`. If you need to index the documents of more than 10 users, use the `OneDriveUserS3Path` field to specify the location of a file containing a list of users.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-onedriveusers-onedriveuserlist */
  OneDriveUserList?: (string | Intrinsic)[]
  /**
   * - The S3 bucket location of a file containing a list of users whose documents should be indexed.
   * - _Required_: No
   * - _Type_: [S3Path](./aws-properties-kendra-datasource-s3path.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-onedriveusers-onedriveusers3path */
  OneDriveUserS3Path?: S3Path
}

/**
 * Specifies access control list files for the documents in a data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface AccessControlListConfiguration {
  /**
   * - Path to the AWS S3 bucket that contains the access control list files.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-accesscontrollistconfiguration-keypath */
  KeyPath?: string | Intrinsic
}

/**
 * Document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes. Each metadata file contains metadata about a single document.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface DocumentsMetadataConfiguration {
  /**
   * - A prefix used to filter metadata configuration files in the AWS S3 bucket. The S3 bucket might contain multiple metadata files. Use `S3Prefix` to include only the desired metadata files.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-documentsmetadataconfiguration-s3prefix */
  S3Prefix?: string | Intrinsic
}

/**
 * The configuration information for syncing a Salesforce chatter feed. The contents of the object comes from the Salesforce FeedItem table.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface SalesforceChatterFeedConfiguration {
  /**
   * - The name of the column in the Salesforce FeedItem table that contains the content to index. Typically this is the `Body` column.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforcechatterfeedconfiguration-documentdatafieldname */
  DocumentDataFieldName: string | Intrinsic
  /**
   * - The name of the column in the Salesforce FeedItem table that contains the title of the document. This is typically the `Title` column.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforcechatterfeedconfiguration-documenttitlefieldname */
  DocumentTitleFieldName?: string | Intrinsic
  /**
   * - Maps fields from a Salesforce chatter feed into Amazon Kendra index fields.
   * - _Required_: No
   * - _Type_: Array of [DataSourceToIndexFieldMapping](./aws-properties-kendra-datasource-datasourcetoindexfieldmapping.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforcechatterfeedconfiguration-fieldmappings */
  FieldMappings?: DataSourceToIndexFieldMapping[]
  /**
   * - Filters the documents in the feed based on status of the user. When you specify `ACTIVE_USERS` only documents from users who have an active account are indexed. When you specify `STANDARD_USER` only documents for Salesforce standard users are documented. You can specify both.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `2`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforcechatterfeedconfiguration-includefiltertypes */
  IncludeFilterTypes?: (string | Intrinsic)[]
}

/**
 * Provides the configuration information for processing attachments to Salesforce standard objects.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface SalesforceStandardObjectAttachmentConfiguration {
  /**
   * - The name of the field used for the document title.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforcestandardobjectattachmentconfiguration-documenttitlefieldname */
  DocumentTitleFieldName?: string | Intrinsic
  /**
   * - One or more objects that map fields in attachments to Amazon Kendra index fields.
   * - _Required_: No
   * - _Type_: Array of [DataSourceToIndexFieldMapping](./aws-properties-kendra-datasource-datasourcetoindexfieldmapping.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforcestandardobjectattachmentconfiguration-fieldmappings */
  FieldMappings?: DataSourceToIndexFieldMapping[]
}

/**
 * Specifies configuration information for indexing a single standard object.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface SalesforceStandardObjectConfiguration {
  /**
   * - The name of the field in the standard object table that contains the document contents.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforcestandardobjectconfiguration-documentdatafieldname */
  DocumentDataFieldName: string | Intrinsic
  /**
   * - The name of the field in the standard object table that contains the document title.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforcestandardobjectconfiguration-documenttitlefieldname */
  DocumentTitleFieldName?: string | Intrinsic
  /**
   * - Maps attributes or field names of the standard object to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Salesforce fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Salesforce data source field names must exist in your Salesforce custom metadata.
   * - _Required_: No
   * - _Type_: Array of [DataSourceToIndexFieldMapping](./aws-properties-kendra-datasource-datasourcetoindexfieldmapping.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforcestandardobjectconfiguration-fieldmappings */
  FieldMappings?: DataSourceToIndexFieldMapping[]
  /**
   * - The name of the standard object.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ACCOUNT | CAMPAIGN | CASE | CONTACT | CONTRACT | DOCUMENT | GROUP | IDEA | LEAD | OPPORTUNITY | PARTNER | PRICEBOOK | PRODUCT | PROFILE | SOLUTION | TASK | USER`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforcestandardobjectconfiguration-name */
  Name: string | Intrinsic
}

/**
 * Provides the configuration information for crawling knowledge articles in the ServiceNow site.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface ServiceNowKnowledgeArticleConfiguration {
  /**
   * - `TRUE` to index attachments to knowledge articles.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-crawlattachments */
  CrawlAttachments?: boolean | Intrinsic
  /**
   * - The name of the ServiceNow field that is mapped to the index document contents field in the Amazon Kendra index.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-documentdatafieldname */
  DocumentDataFieldName: string | Intrinsic
  /**
   * - The name of the ServiceNow field that is mapped to the index document title field.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-documenttitlefieldname */
  DocumentTitleFieldName?: string | Intrinsic
  /**
   * - A list of regular expression patterns applied to exclude certain knowledge article attachments. Attachments that match the patterns are excluded from the index. Items that don't match the patterns are included in the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `50 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-excludeattachmentfilepatterns */
  ExcludeAttachmentFilePatterns?: (string | Intrinsic)[]
  /**
   * - Maps attributes or field names of knoweldge articles to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to ServiceNow fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The ServiceNow data source field names must exist in your ServiceNow custom metadata.
   * - _Required_: No
   * - _Type_: Array of [DataSourceToIndexFieldMapping](./aws-properties-kendra-datasource-datasourcetoindexfieldmapping.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-fieldmappings */
  FieldMappings?: DataSourceToIndexFieldMapping[]
  /**
   * - A query that selects the knowledge articles to index. The query can return articles from multiple knowledge bases, and the knowledge bases can be public or private.
   * - The query string must be one generated by the ServiceNow console. For more information, see [Specifying documents to index with a query](https://docs.aws.amazon.com/kendra/latest/dg/servicenow-query.html).
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-filterquery */
  FilterQuery?: string | Intrinsic
  /**
   * - A list of regular expression patterns applied to include knowledge article attachments. Attachments that match the patterns are included in the index. Items that don't match the patterns are excluded from the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `50 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-includeattachmentfilepatterns */
  IncludeAttachmentFilePatterns?: (string | Intrinsic)[]
}

/**
 * Provides the configuration information for crawling service catalog items in the ServiceNow site
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface ServiceNowServiceCatalogConfiguration {
  /**
   * - `TRUE` to index attachments to service catalog items.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-servicenowservicecatalogconfiguration-crawlattachments */
  CrawlAttachments?: boolean | Intrinsic
  /**
   * - The name of the ServiceNow field that is mapped to the index document contents field in the Amazon Kendra index.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-servicenowservicecatalogconfiguration-documentdatafieldname */
  DocumentDataFieldName: string | Intrinsic
  /**
   * - The name of the ServiceNow field that is mapped to the index document title field.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-servicenowservicecatalogconfiguration-documenttitlefieldname */
  DocumentTitleFieldName?: string | Intrinsic
  /**
   * - A list of regular expression patterns to exclude certain attachments of catalogs in your ServiceNow. Item that match the patterns are excluded from the index. Items that don't match the patterns are included in the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.
   * - The regex is applied to the file name of the attachment.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `50 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-servicenowservicecatalogconfiguration-excludeattachmentfilepatterns */
  ExcludeAttachmentFilePatterns?: (string | Intrinsic)[]
  /**
   * - Maps attributes or field names of catalogs to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to ServiceNow fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The ServiceNow data source field names must exist in your ServiceNow custom metadata.
   * - _Required_: No
   * - _Type_: Array of [DataSourceToIndexFieldMapping](./aws-properties-kendra-datasource-datasourcetoindexfieldmapping.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-servicenowservicecatalogconfiguration-fieldmappings */
  FieldMappings?: DataSourceToIndexFieldMapping[]
  /**
   * - A list of regular expression patterns to include certain attachments of catalogs in your ServiceNow. Item that match the patterns are included in the index. Items that don't match the patterns are excluded from the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.
   * - The regex is applied to the file name of the attachment.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `50 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-servicenowservicecatalogconfiguration-includeattachmentfilepatterns */
  IncludeAttachmentFilePatterns?: (string | Intrinsic)[]
}

/**
 * Information required to find a specific file in an Amazon S3 bucket.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface S3Path {
  /**
   * - The name of the S3 bucket that contains the file.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]`
   * - _Minimum_: `3`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-s3path-bucket */
  Bucket: string | Intrinsic
  /**
   * - The name of the file.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-s3path-key */
  Key: string | Intrinsic
}

/**
 * Provides the configuration information for a web proxy to connect to website hosts.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface ProxyConfiguration {
  /**
   * - The Amazon Resource Name (ARN) of an AWS Secrets Manager secret. You create a secret to store your credentials in [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html)
   * - The credentials are optional. You use a secret if web proxy credentials are required to connect to a website host. Amazon Kendra currently support basic authentication to connect to a web proxy server. The secret stores your credentials.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   * - _Minimum_: `1`
   * - _Maximum_: `1284`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-proxyconfiguration-credentials */
  Credentials?: string | Intrinsic
  /**
   * - The name of the website host you want to connect to via a web proxy server.
   * - For example, the host name of https://a.example.com/page1.html is "a.example.com".
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `([^\s]*)`
   * - _Minimum_: `1`
   * - _Maximum_: `253`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-proxyconfiguration-host */
  Host: string | Intrinsic
  /**
   * - The port number of the website host you want to connect to via a web proxy server.
   * - For example, the port for https://a.example.com/page1.html is 443, the standard port for HTTPS.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `65535`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-proxyconfiguration-port */
  Port: number | Intrinsic
}

/**
 * The value of a document attribute. You can only provide one value for a document attribute.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface DocumentAttributeValue {
  /**
   * - A date expressed as an ISO 8601 string.
   * - It is important for the time zone to be included in the ISO 8601 date-time format. For example, 2012-03-25T12:30:10+01:00 is the ISO 8601 date-time format for March 25th 2012 at 12:30PM (plus 10 seconds) in Central European Time.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-documentattributevalue-datevalue */
  DateValue?: string | Intrinsic
  /**
   * - A long integer value.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-documentattributevalue-longvalue */
  LongValue?: number | Intrinsic
  /**
   * - A list of strings. The default maximum length or number of strings is 10.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-documentattributevalue-stringlistvalue */
  StringListValue?: (string | Intrinsic)[]
  /**
   * - A string, such as "department".
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-documentattributevalue-stringvalue */
  StringValue?: string | Intrinsic
}

/**
 * Maps attributes or field names of Confluence attachments to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Confuence data source field names must exist in your Confluence custom metadata.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface ConfluenceAttachmentToIndexFieldMapping {
  /**
   * - The name of the field in the data source.
   * - You must first create the index field using the `UpdateIndex` API.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `AUTHOR | CONTENT_TYPE | CREATED_DATE | DISPLAY_URL | FILE_SIZE | ITEM_TYPE | PARENT_ID | SPACE_KEY | SPACE_NAME | URL | VERSION`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluenceattachmenttoindexfieldmapping-datasourcefieldname */
  DataSourceFieldName: string | Intrinsic
  /**
   * - The format for date fields in the data source. If the field specified in `DataSourceFieldName` is a date field you must specify the date format. If the field is not a date field, an exception is thrown.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `4`
   * - _Maximum_: `40`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluenceattachmenttoindexfieldmapping-datefieldformat */
  DateFieldFormat?: string | Intrinsic
  /**
   * - The name of the index field to map to the Confluence data source field. The index field type must match the Confluence field type.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluenceattachmenttoindexfieldmapping-indexfieldname */
  IndexFieldName: string | Intrinsic
}

/**
 * Maps attributes or field names of Confluence blog to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Confluence data source field names must exist in your Confluence custom metadata.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface ConfluenceBlogToIndexFieldMapping {
  /**
   * - The name of the field in the data source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `AUTHOR | DISPLAY_URL | ITEM_TYPE | LABELS | PUBLISH_DATE | SPACE_KEY | SPACE_NAME | URL | VERSION`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluenceblogtoindexfieldmapping-datasourcefieldname */
  DataSourceFieldName: string | Intrinsic
  /**
   * - The format for date fields in the data source. If the field specified in `DataSourceFieldName` is a date field you must specify the date format. If the field is not a date field, an exception is thrown.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `4`
   * - _Maximum_: `40`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluenceblogtoindexfieldmapping-datefieldformat */
  DateFieldFormat?: string | Intrinsic
  /**
   * - The name of the index field to map to the Confluence data source field. The index field type must match the Confluence field type.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluenceblogtoindexfieldmapping-indexfieldname */
  IndexFieldName: string | Intrinsic
}

/**
 * Maps attributes or field names of Confluence pages to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Confluence data source field names must exist in your Confluence custom metadata.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface ConfluencePageToIndexFieldMapping {
  /**
   * - The name of the field in the data source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `AUTHOR | CONTENT_STATUS | CREATED_DATE | DISPLAY_URL | ITEM_TYPE | LABELS | MODIFIED_DATE | PARENT_ID | SPACE_KEY | SPACE_NAME | URL | VERSION`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluencepagetoindexfieldmapping-datasourcefieldname */
  DataSourceFieldName: string | Intrinsic
  /**
   * - The format for date fields in the data source. If the field specified in `DataSourceFieldName` is a date field you must specify the date format. If the field is not a date field, an exception is thrown.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `4`
   * - _Maximum_: `40`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluencepagetoindexfieldmapping-datefieldformat */
  DateFieldFormat?: string | Intrinsic
  /**
   * - The name of the index field to map to the Confluence data source field. The index field type must match the Confluence field type.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluencepagetoindexfieldmapping-indexfieldname */
  IndexFieldName: string | Intrinsic
}

/**
 * Maps attributes or field names of Confluence spaces to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Confluence data source field names must exist in your Confluence custom metadata.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface ConfluenceSpaceToIndexFieldMapping {
  /**
   * - The name of the field in the data source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `DISPLAY_URL | ITEM_TYPE | SPACE_KEY | URL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluencespacetoindexfieldmapping-datasourcefieldname */
  DataSourceFieldName: string | Intrinsic
  /**
   * - The format for date fields in the data source. If the field specified in `DataSourceFieldName` is a date field you must specify the date format. If the field is not a date field, an exception is thrown.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `4`
   * - _Maximum_: `40`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluencespacetoindexfieldmapping-datefieldformat */
  DateFieldFormat?: string | Intrinsic
  /**
   * - The name of the index field to map to the Confluence data source field. The index field type must match the Confluence field type.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluencespacetoindexfieldmapping-indexfieldname */
  IndexFieldName: string | Intrinsic
}

/**
 * Provides the configuration information for indexing Salesforce custom articles.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface SalesforceCustomKnowledgeArticleTypeConfiguration {
  /**
   * - The name of the field in the custom knowledge article that contains the document data to index.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-documentdatafieldname */
  DocumentDataFieldName: string | Intrinsic
  /**
   * - The name of the field in the custom knowledge article that contains the document title.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-documenttitlefieldname */
  DocumentTitleFieldName?: string | Intrinsic
  /**
   * - Maps attributes or field names of the custom knowledge article to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Salesforce fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Salesforce data source field names must exist in your Salesforce custom metadata.
   * - _Required_: No
   * - _Type_: Array of [DataSourceToIndexFieldMapping](./aws-properties-kendra-datasource-datasourcetoindexfieldmapping.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-fieldmappings */
  FieldMappings?: DataSourceToIndexFieldMapping[]
  /**
   * - The name of the configuration.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-name */
  Name: string | Intrinsic
}

/**
 * Provides the configuration information for standard Salesforce knowledge articles.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface SalesforceStandardKnowledgeArticleTypeConfiguration {
  /**
   * - The name of the field that contains the document data to index.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration-documentdatafieldname */
  DocumentDataFieldName: string | Intrinsic
  /**
   * - The name of the field that contains the document title.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration-documenttitlefieldname */
  DocumentTitleFieldName?: string | Intrinsic
  /**
   * - Maps attributes or field names of the knowledge article to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Salesforce fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Salesforce data source field names must exist in your Salesforce custom metadata.
   * - _Required_: No
   * - _Type_: Array of [DataSourceToIndexFieldMapping](./aws-properties-kendra-datasource-datasourcetoindexfieldmapping.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration-fieldmappings */
  FieldMappings?: DataSourceToIndexFieldMapping[]
}

/**
 * Provides the configuration information to connect to websites that require basic user authentication.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface WebCrawlerBasicAuthentication {
  /**
   * - The Amazon Resource Name (ARN) of an AWS Secrets Manager secret. You create a secret to store your credentials in [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html)
   * - You use a secret if basic authentication credentials are required to connect to a website. The secret stores your credentials of user name and password.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   * - _Minimum_: `1`
   * - _Maximum_: `1284`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-webcrawlerbasicauthentication-credentials */
  Credentials: string | Intrinsic
  /**
   * - The name of the website host you want to connect to using authentication credentials.
   * - For example, the host name of https://a.example.com/page1.html is "a.example.com".
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `([^\s]*)`
   * - _Minimum_: `1`
   * - _Maximum_: `253`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-webcrawlerbasicauthentication-host */
  Host: string | Intrinsic
  /**
   * - The port number of the website host you want to connect to using authentication credentials.
   * - For example, the port for https://a.example.com/page1.html is 443, the standard port for HTTPS.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `65535`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-webcrawlerbasicauthentication-port */
  Port: number | Intrinsic
}

/**
 * Provides the configuration information of the seed or starting point URLs to crawl.
 * _When selecting websites to index, you must adhere to the [Amazon Acceptable Use Policy](https://aws.amazon.com/aup/) and all other Amazon terms. Remember that you must only use the Amazon Kendra web crawler to index your own webpages, or webpages that you have authorization to index._
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface WebCrawlerSeedUrlConfiguration {
  /**
   * - The list of seed or starting point URLs of the websites you want to crawl.
   * - The list can include a maximum of 100 seed URLs.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-webcrawlerseedurlconfiguration-seedurls */
  SeedUrls: (string | Intrinsic)[]
  /**
   * - You can choose one of the following modes:
   * - The default mode is set to `HOST_ONLY`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `HOST_ONLY | SUBDOMAINS | EVERYTHING`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-webcrawlerseedurlconfiguration-webcrawlermode */
  WebCrawlerMode?: string | Intrinsic
}

/**
 * Provides the configuration information of the sitemap URLs to crawl.
 * _When selecting websites to index, you must adhere to the [Amazon Acceptable Use Policy](https://aws.amazon.com/aup/) and all other Amazon terms. Remember that you must only use the Amazon Kendra web crawler to index your own webpages, or webpages that you have authorization to index._
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface WebCrawlerSiteMapsConfiguration {
  /**
   * - The list of sitemap URLs of the websites you want to crawl.
   * - The list can include a maximum of three sitemap URLs.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `3`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-webcrawlersitemapsconfiguration-sitemaps */
  SiteMaps: (string | Intrinsic)[]
}

/**
 * Provides the configuration information to an [Amazon Kendra supported database](https://docs.aws.amazon.com/kendra/latest/dg/data-source-database.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface DatabaseConfiguration {
  /**
   * - Information about the database column that provides information for user context filtering.
   * - _Required_: No
   * - _Type_: [AclConfiguration](./aws-properties-kendra-datasource-aclconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-databaseconfiguration-aclconfiguration */
  AclConfiguration?: AclConfiguration
  /**
   * - Information about where the index should get the document information from the database.
   * - _Required_: Yes
   * - _Type_: [ColumnConfiguration](./aws-properties-kendra-datasource-columnconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-databaseconfiguration-columnconfiguration */
  ColumnConfiguration: ColumnConfiguration
  /**
   * - Configuration information that's required to connect to a database.
   * - _Required_: Yes
   * - _Type_: [ConnectionConfiguration](./aws-properties-kendra-datasource-connectionconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-databaseconfiguration-connectionconfiguration */
  ConnectionConfiguration: ConnectionConfiguration
  /**
   * - The type of database engine that runs the database.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `RDS_AURORA_MYSQL | RDS_AURORA_POSTGRESQL | RDS_MYSQL | RDS_POSTGRESQL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-databaseconfiguration-databaseenginetype */
  DatabaseEngineType: string | Intrinsic
  /**
   * - Provides information about how Amazon Kendra uses quote marks around SQL identifiers when querying a database data source.
   * - _Required_: No
   * - _Type_: [SqlConfiguration](./aws-properties-kendra-datasource-sqlconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-databaseconfiguration-sqlconfiguration */
  SqlConfiguration?: SqlConfiguration
  /**
   * - Provides information for connecting to an Amazon VPC.
   * - _Required_: No
   * - _Type_: [DataSourceVpcConfiguration](./aws-properties-kendra-datasource-datasourcevpcconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-databaseconfiguration-vpcconfiguration */
  VpcConfiguration?: DataSourceVpcConfiguration
}

/**
 * Provides the configuration information to connect to Google Drive as your data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface GoogleDriveConfiguration {
  /**
   * - A list of MIME types to exclude from the index. All documents matching the specified MIME type are excluded.
   * - For a list of MIME types, see [Using a Google Workspace Drive data source](https://docs.aws.amazon.com/kendra/latest/dg/data-source-google-drive.html).
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-googledriveconfiguration-excludemimetypes */
  ExcludeMimeTypes?: (string | Intrinsic)[]
  /**
   * - A list of identifiers or shared drives to exclude from the index. All files and folders stored on the shared drive are excluded.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-googledriveconfiguration-excludeshareddrives */
  ExcludeSharedDrives?: (string | Intrinsic)[]
  /**
   * - A list of email addresses of the users. Documents owned by these users are excluded from the index. Documents shared with excluded users are indexed unless they are excluded in another way.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-googledriveconfiguration-excludeuseraccounts */
  ExcludeUserAccounts?: (string | Intrinsic)[]
  /**
   * - A list of regular expression patterns to exclude certain items in your Google Drive, including shared drives and users' My Drives. Items that match the patterns are excluded from the index. Items that don't match the patterns are included in the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `50 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-googledriveconfiguration-exclusionpatterns */
  ExclusionPatterns?: (string | Intrinsic)[]
  /**
   * - Maps Google Drive data source attributes or field names to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Google Drive fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Google Drive data source field names must exist in your Google Drive custom metadata.
   * - _Required_: No
   * - _Type_: Array of [DataSourceToIndexFieldMapping](./aws-properties-kendra-datasource-datasourcetoindexfieldmapping.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-googledriveconfiguration-fieldmappings */
  FieldMappings?: DataSourceToIndexFieldMapping[]
  /**
   * - A list of regular expression patterns to include certain items in your Google Drive, including shared drives and users' My Drives. Items that match the patterns are included in the index. Items that don't match the patterns are excluded from the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `50 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-googledriveconfiguration-inclusionpatterns */
  InclusionPatterns?: (string | Intrinsic)[]
  /**
   * - The Amazon Resource Name (ARN) of a AWS Secrets Managersecret that contains the credentials required to connect to Google Drive. For more information, see [Using a Google Workspace Drive data source](https://docs.aws.amazon.com/kendra/latest/dg/data-source-google-drive.html).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   * - _Minimum_: `1`
   * - _Maximum_: `1284`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-googledriveconfiguration-secretarn */
  SecretArn: string | Intrinsic
}

/**
 * Provides the configuration information to connect to OneDrive as your data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface OneDriveConfiguration {
  /**
   * - `TRUE` to disable local groups information.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-onedriveconfiguration-disablelocalgroups */
  DisableLocalGroups?: boolean | Intrinsic
  /**
   * - A list of regular expression patterns to exclude certain documents in your OneDrive. Documents that match the patterns are excluded from the index. Documents that don't match the patterns are included in the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index.
   * - The pattern is applied to the file name.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `50 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-onedriveconfiguration-exclusionpatterns */
  ExclusionPatterns?: (string | Intrinsic)[]
  /**
   * - A list of `DataSourceToIndexFieldMapping` objects that map OneDrive data source attributes or field names to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to OneDrive fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The OneDrive data source field names must exist in your OneDrive custom metadata.
   * - _Required_: No
   * - _Type_: Array of [DataSourceToIndexFieldMapping](./aws-properties-kendra-datasource-datasourcetoindexfieldmapping.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-onedriveconfiguration-fieldmappings */
  FieldMappings?: DataSourceToIndexFieldMapping[]
  /**
   * - A list of regular expression patterns to include certain documents in your OneDrive. Documents that match the patterns are included in the index. Documents that don't match the patterns are excluded from the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index.
   * - The pattern is applied to the file name.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `50 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-onedriveconfiguration-inclusionpatterns */
  InclusionPatterns?: (string | Intrinsic)[]
  /**
   * - A list of user accounts whose documents should be indexed.
   * - _Required_: Yes
   * - _Type_: [OneDriveUsers](./aws-properties-kendra-datasource-onedriveusers.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-onedriveconfiguration-onedriveusers */
  OneDriveUsers: OneDriveUsers
  /**
   * - The Amazon Resource Name (ARN) of an AWS Secrets Manager secret that contains the user name and password to connect to OneDrive. The user name should be the application ID for the OneDrive application, and the password is the application key for the OneDrive application.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   * - _Minimum_: `1`
   * - _Maximum_: `1284`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-onedriveconfiguration-secretarn */
  SecretArn: string | Intrinsic
  /**
   * - The Azure Active Directory domain of the organization.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-z]{2,}$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-onedriveconfiguration-tenantdomain */
  TenantDomain: string | Intrinsic
}

/**
 * Provides the configuration information to connect to an Amazon S3 bucket.
 * ###### Note
 *
 * Amazon Kendra now supports an upgraded Amazon S3 connector.
 *
 * You must now use the [TemplateConfiguration](https://docs.aws.amazon.com/kendra/latest/APIReference/API_TemplateConfiguration.html) object instead of the `S3DataSourceConfiguration` object to configure your connector.
 *
 * Connectors configured using the older console and API architecture will continue to function as configured. However, you won't be able to edit or update them. If you want to edit or update your connector configuration, you must create a new connector.
 *
 * We recommended migrating your connector workflow to the upgraded version. Support for connectors configured using the older architecture is scheduled to end by June 2024.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface S3DataSourceConfiguration {
  /**
   * - Provides the path to the S3 bucket that contains the user context filtering files for the data source. For the format of the file, see [Access control for S3 data sources](https://docs.aws.amazon.com/kendra/latest/dg/s3-acl.html).
   * - _Required_: No
   * - _Type_: [AccessControlListConfiguration](./aws-properties-kendra-datasource-accesscontrollistconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-s3datasourceconfiguration-accesscontrollistconfiguration */
  AccessControlListConfiguration?: AccessControlListConfiguration
  /**
   * - The name of the bucket that contains the documents.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]`
   * - _Minimum_: `3`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-s3datasourceconfiguration-bucketname */
  BucketName: string | Intrinsic
  /**
   * - Specifies document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes. Each metadata file contains metadata about a single document.
   * - _Required_: No
   * - _Type_: [DocumentsMetadataConfiguration](./aws-properties-kendra-datasource-documentsmetadataconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-s3datasourceconfiguration-documentsmetadataconfiguration */
  DocumentsMetadataConfiguration?: DocumentsMetadataConfiguration
  /**
   * - A list of glob patterns (patterns that can expand a wildcard pattern into a list of path names that match the given pattern) for certain file names and file types to exclude from your index. If a document matches both an inclusion and exclusion prefix or pattern, the exclusion prefix takes precendence and the document is not indexed. Examples of glob patterns include:
   * - For more examples, see [Use of Exclude and Include Filters](https://docs.aws.amazon.com/cli/latest/reference/s3/#use-of-exclude-and-include-filters) in the AWS CLI Command Reference.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `50 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-s3datasourceconfiguration-exclusionpatterns */
  ExclusionPatterns?: (string | Intrinsic)[]
  /**
   * - A list of glob patterns (patterns that can expand a wildcard pattern into a list of path names that match the given pattern) for certain file names and file types to include in your index. If a document matches both an inclusion and exclusion prefix or pattern, the exclusion prefix takes precendence and the document is not indexed. Examples of glob patterns include:
   * - For more examples, see [Use of Exclude and Include Filters](https://docs.aws.amazon.com/cli/latest/reference/s3/#use-of-exclude-and-include-filters) in the AWS CLI Command Reference.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `50 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-s3datasourceconfiguration-inclusionpatterns */
  InclusionPatterns?: (string | Intrinsic)[]
  /**
   * - A list of S3 prefixes for the documents that should be included in the index.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `50 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-s3datasourceconfiguration-inclusionprefixes */
  InclusionPrefixes?: (string | Intrinsic)[]
}

/**
 * Provides the configuration information to connect to ServiceNow as your data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface ServiceNowConfiguration {
  /**
   * - The type of authentication used to connect to the ServiceNow instance. If you choose `HTTP_BASIC`, Amazon Kendra is authenticated using the user name and password provided in the AWS Secrets Manager secret in the `SecretArn` field. If you choose `OAUTH2`, Amazon Kendra is authenticated using the credentials of client ID, client secret, user name and password.
   * - When you use `OAUTH2` authentication, you must generate a token and a client secret using the ServiceNow console. For more information, see [Using a ServiceNow data source](https://docs.aws.amazon.com/kendra/latest/dg/data-source-servicenow.html).
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `HTTP_BASIC | OAUTH2`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-servicenowconfiguration-authenticationtype */
  AuthenticationType?: string | Intrinsic
  /**
   * - The ServiceNow instance that the data source connects to. The host endpoint should look like the following: _{instance}.service-now.com._
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(?!(^(https?|ftp|file):\/\/))[a-z0-9-]+(\.service-now\.com)$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-servicenowconfiguration-hosturl */
  HostUrl: string | Intrinsic
  /**
   * - Configuration information for crawling knowledge articles in the ServiceNow site.
   * - _Required_: No
   * - _Type_: [ServiceNowKnowledgeArticleConfiguration](./aws-properties-kendra-datasource-servicenowknowledgearticleconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-servicenowconfiguration-knowledgearticleconfiguration */
  KnowledgeArticleConfiguration?: ServiceNowKnowledgeArticleConfiguration
  /**
   * - The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the user name and password required to connect to the ServiceNow instance. You can also provide OAuth authentication credentials of user name, password, client ID, and client secret. For more information, see [Using a ServiceNow data source](https://docs.aws.amazon.com/kendra/latest/dg/data-source-servicenow.html).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   * - _Minimum_: `1`
   * - _Maximum_: `1284`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-servicenowconfiguration-secretarn */
  SecretArn: string | Intrinsic
  /**
   * - Configuration information for crawling service catalogs in the ServiceNow site.
   * - _Required_: No
   * - _Type_: [ServiceNowServiceCatalogConfiguration](./aws-properties-kendra-datasource-servicenowservicecatalogconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-servicenowconfiguration-servicecatalogconfiguration */
  ServiceCatalogConfiguration?: ServiceNowServiceCatalogConfiguration
  /**
   * - The identifier of the release that the ServiceNow host is running. If the host is not running the `LONDON` release, use `OTHERS`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `LONDON | OTHERS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-servicenowconfiguration-servicenowbuildversion */
  ServiceNowBuildVersion: string | Intrinsic
}

/**
 * Provides the configuration information to connect to Microsoft SharePoint as your data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface SharePointConfiguration {
  /**
   * - `TRUE` to index document attachments.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-sharepointconfiguration-crawlattachments */
  CrawlAttachments?: boolean | Intrinsic
  /**
   * - `TRUE` to disable local groups information.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-sharepointconfiguration-disablelocalgroups */
  DisableLocalGroups?: boolean | Intrinsic
  /**
   * - The Microsoft SharePoint attribute field that contains the title of the document.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-sharepointconfiguration-documenttitlefieldname */
  DocumentTitleFieldName?: string | Intrinsic
  /**
   * - A list of regular expression patterns. Documents that match the patterns are excluded from the index. Documents that don't match the patterns are included in the index. If a document matches both an exclusion pattern and an inclusion pattern, the document is not included in the index.
   * - The regex is applied to the display URL of the SharePoint document.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `50 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-sharepointconfiguration-exclusionpatterns */
  ExclusionPatterns?: (string | Intrinsic)[]
  /**
   * - A list of `DataSourceToIndexFieldMapping` objects that map Microsoft SharePoint attributes or fields to Amazon Kendra index fields. You must first create the index fields using the [UpdateIndex](https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateIndex.html) operation before you map SharePoint attributes. For more information, see [Mapping Data Source Fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html).
   * - _Required_: No
   * - _Type_: Array of [DataSourceToIndexFieldMapping](./aws-properties-kendra-datasource-datasourcetoindexfieldmapping.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-sharepointconfiguration-fieldmappings */
  FieldMappings?: DataSourceToIndexFieldMapping[]
  /**
   * - A list of regular expression patterns to include certain documents in your SharePoint. Documents that match the patterns are included in the index. Documents that don't match the patterns are excluded from the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index.
   * - The regex applies to the display URL of the SharePoint document.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `50 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-sharepointconfiguration-inclusionpatterns */
  InclusionPatterns?: (string | Intrinsic)[]
  /**
   * - The Amazon Resource Name (ARN) of an AWS Secrets Manager secret that contains the user name and password required to connect to the SharePoint instance. For more information, see [Microsoft SharePoint](https://docs.aws.amazon.com/kendra/latest/dg/data-source-sharepoint.html).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   * - _Minimum_: `1`
   * - _Maximum_: `1284`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-sharepointconfiguration-secretarn */
  SecretArn: string | Intrinsic
  /**
   * - The version of Microsoft SharePoint that you use.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `SHAREPOINT_ONLINE | SHAREPOINT_2013 | SHAREPOINT_2016`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-sharepointconfiguration-sharepointversion */
  SharePointVersion: string | Intrinsic
  /**
   * - Information required to find a specific file in an Amazon S3 bucket.
   * - _Required_: No
   * - _Type_: [S3Path](./aws-properties-kendra-datasource-s3path.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-sharepointconfiguration-sslcertificates3path */
  SslCertificateS3Path?: S3Path
  /**
   * - The Microsoft SharePoint site URLs for the documents you want to index.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-sharepointconfiguration-urls */
  Urls: (string | Intrinsic)[]
  /**
   * - `TRUE` to use the SharePoint change log to determine which documents require updating in the index. Depending on the change log's size, it may take longer for Amazon Kendra to use the change log than to scan all of your documents in SharePoint.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-sharepointconfiguration-usechangelog */
  UseChangeLog?: boolean | Intrinsic
  /**
   * - Provides information for connecting to an Amazon VPC.
   * - _Required_: No
   * - _Type_: [DataSourceVpcConfiguration](./aws-properties-kendra-datasource-datasourcevpcconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-sharepointconfiguration-vpcconfiguration */
  VpcConfiguration?: DataSourceVpcConfiguration
}

/**
 * The condition used for the target document attribute or metadata field when ingesting documents into Amazon Kendra. You use this with [DocumentAttributeTarget to apply the condition](https://docs.aws.amazon.com/kendra/latest/dg/API_DocumentAttributeTarget.html).
 * For example, you can create the 'Department' target field and have it prefill department names associated with the documents based on information in the 'Source\_URI' field. Set the condition that if the 'Source\_URI' field contains 'financial' in its URI value, then prefill the target field 'Department' with the target value 'Finance' for the document.
 * Amazon Kendra cannot create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using `DocumentAttributeTarget`. Amazon Kendra then will map your newly created metadata field to your index field.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface DocumentAttributeCondition {
  /**
   * - The identifier of the document attribute used for the condition.
   * - For example, 'Source\_URI' could be an identifier for the attribute or metadata field that contains source URIs associated with the documents.
   * - Amazon Kendra currently does not support `_document_body` as an attribute key used for the condition.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z0-9_][a-zA-Z0-9_-]*`
   * - _Minimum_: `1`
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-documentattributecondition-conditiondocumentattributekey */
  ConditionDocumentAttributeKey: string | Intrinsic
  /**
   * - The value used by the operator.
   * - For example, you can specify the value 'financial' for strings in the 'Source\_URI' field that partially match or contain this value.
   * - _Required_: No
   * - _Type_: [DocumentAttributeValue](./aws-properties-kendra-datasource-documentattributevalue.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-documentattributecondition-conditiononvalue */
  ConditionOnValue?: DocumentAttributeValue
  /**
   * - The condition operator.
   * - For example, you can use 'Contains' to partially match a string.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `GreaterThan | GreaterThanOrEquals | LessThan | LessThanOrEquals | Equals | NotEquals | Contains | NotContains | Exists | NotExists | BeginsWith`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-documentattributecondition-operator */
  Operator: string | Intrinsic
}

/**
 * Configuration of attachment settings for the Confluence data source. Attachment settings are optional, if you don't specify settings attachments, Amazon Kendra won't index them.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface ConfluenceAttachmentConfiguration {
  /**
   * - Maps attributes or field names of Confluence attachments to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Confluence data source field names must exist in your Confluence custom metadata.
   * - If you specify the `AttachentFieldMappings` parameter, you must specify at least one field mapping.
   * - _Required_: No
   * - _Type_: Array of [ConfluenceAttachmentToIndexFieldMapping](./aws-properties-kendra-datasource-confluenceattachmenttoindexfieldmapping.html)
   * - _Minimum_: `1`
   * - _Maximum_: `11`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluenceattachmentconfiguration-attachmentfieldmappings */
  AttachmentFieldMappings?: ConfluenceAttachmentToIndexFieldMapping[]
  /**
   * - `TRUE` to index attachments of pages and blogs in Confluence.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluenceattachmentconfiguration-crawlattachments */
  CrawlAttachments?: boolean | Intrinsic
}

/**
 * Configuration of blog settings for the Confluence data source. Blogs are always indexed unless filtered from the index by the `ExclusionPatterns` or `InclusionPatterns` fields in the `ConfluenceConfiguration` object.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface ConfluenceBlogConfiguration {
  /**
   * - Maps attributes or field names of Confluence blogs to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Confluence data source field names must exist in your Confluence custom metadata.
   * - If you specify the `BlogFieldMappings` parameter, you must specify at least one field mapping.
   * - _Required_: No
   * - _Type_: Array of [ConfluenceBlogToIndexFieldMapping](./aws-properties-kendra-datasource-confluenceblogtoindexfieldmapping.html)
   * - _Minimum_: `1`
   * - _Maximum_: `9`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluenceblogconfiguration-blogfieldmappings */
  BlogFieldMappings?: ConfluenceBlogToIndexFieldMapping[]
}

/**
 * Configuration of the page settings for the Confluence data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface ConfluencePageConfiguration {
  /**
   * - Maps attributes or field names of Confluence pages to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Confluence data source field names must exist in your Confluence custom metadata.
   * - If you specify the `PageFieldMappings` parameter, you must specify at least one field mapping.
   * - _Required_: No
   * - _Type_: Array of [ConfluencePageToIndexFieldMapping](./aws-properties-kendra-datasource-confluencepagetoindexfieldmapping.html)
   * - _Minimum_: `1`
   * - _Maximum_: `12`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluencepageconfiguration-pagefieldmappings */
  PageFieldMappings?: ConfluencePageToIndexFieldMapping[]
}

/**
 * Configuration information for indexing Confluence spaces.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface ConfluenceSpaceConfiguration {
  /**
   * - `TRUE` to index archived spaces.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluencespaceconfiguration-crawlarchivedspaces */
  CrawlArchivedSpaces?: boolean | Intrinsic
  /**
   * - `TRUE` to index personal spaces. You can add restrictions to items in personal spaces. If personal spaces are indexed, queries without user context information may return restricted items from a personal space in their results. For more information, see [Filtering on user context](https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html).
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluencespaceconfiguration-crawlpersonalspaces */
  CrawlPersonalSpaces?: boolean | Intrinsic
  /**
   * - A list of space keys of Confluence spaces. If you include a key, the blogs, documents, and attachments in the space are not indexed. If a space is in both the `ExcludeSpaces` and the `IncludeSpaces` list, the space is excluded.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluencespaceconfiguration-excludespaces */
  ExcludeSpaces?: (string | Intrinsic)[]
  /**
   * - A list of space keys for Confluence spaces. If you include a key, the blogs, documents, and attachments in the space are indexed. Spaces that aren't in the list aren't indexed. A space in the list must exist. Otherwise, Amazon Kendra logs an error when the data source is synchronized. If a space is in both the `IncludeSpaces` and the `ExcludeSpaces` list, the space is excluded.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluencespaceconfiguration-includespaces */
  IncludeSpaces?: (string | Intrinsic)[]
  /**
   * - Maps attributes or field names of Confluence spaces to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Confluence data source field names must exist in your Confluence custom metadata.
   * - If you specify the `SpaceFieldMappings` parameter, you must specify at least one field mapping.
   * - _Required_: No
   * - _Type_: Array of [ConfluenceSpaceToIndexFieldMapping](./aws-properties-kendra-datasource-confluencespacetoindexfieldmapping.html)
   * - _Minimum_: `1`
   * - _Maximum_: `4`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluencespaceconfiguration-spacefieldmappings */
  SpaceFieldMappings?: ConfluenceSpaceToIndexFieldMapping[]
}

/**
 * Provides the configuration information for the knowledge article types that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface SalesforceKnowledgeArticleConfiguration {
  /**
   * - Configuration information for custom Salesforce knowledge articles.
   * - _Required_: No
   * - _Type_: Array of [SalesforceCustomKnowledgeArticleTypeConfiguration](./aws-properties-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforceknowledgearticleconfiguration-customknowledgearticletypeconfigurations */
  CustomKnowledgeArticleTypeConfigurations?: SalesforceCustomKnowledgeArticleTypeConfiguration[]
  /**
   * - Specifies the document states that should be included when Amazon Kendra indexes knowledge articles. You must specify at least one state.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `3`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforceknowledgearticleconfiguration-includedstates */
  IncludedStates: (string | Intrinsic)[]
  /**
   * - Configuration information for standard Salesforce knowledge articles.
   * - _Required_: No
   * - _Type_: [SalesforceStandardKnowledgeArticleTypeConfiguration](./aws-properties-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforceknowledgearticleconfiguration-standardknowledgearticletypeconfiguration */
  StandardKnowledgeArticleTypeConfiguration?: SalesforceStandardKnowledgeArticleTypeConfiguration
}

/**
 * Provides the configuration information to connect to websites that require user authentication.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface WebCrawlerAuthenticationConfiguration {
  /**
   * - The list of configuration information that's required to connect to and crawl a website host using basic authentication credentials.
   * - The list includes the name and port number of the website host.
   * - _Required_: No
   * - _Type_: Array of [WebCrawlerBasicAuthentication](./aws-properties-kendra-datasource-webcrawlerbasicauthentication.html)
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-webcrawlerauthenticationconfiguration-basicauthentication */
  BasicAuthentication?: WebCrawlerBasicAuthentication[]
}

/**
 * Specifies the seed or starting point URLs of the websites or the sitemap URLs of the websites you want to crawl.
 * You can include website subdomains. You can list up to 100 seed URLs and up to three sitemap URLs.
 * You can only crawl websites that use the secure communication protocol, Hypertext Transfer Protocol Secure (HTTPS). If you receive an error when crawling a website, it could be that the website is blocked from crawling.
 * _When selecting websites to index, you must adhere to the [Amazon Acceptable Use Policy](https://aws.amazon.com/aup/) and all other Amazon terms. Remember that you must only use the Amazon Kendra web crawler to index your own webpages, or webpages that you have authorization to index._
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface WebCrawlerUrls {
  /**
   * - Configuration of the seed or starting point URLs of the websites you want to crawl.
   * - You can choose to crawl only the website host names, or the website host names with subdomains, or the website host names with subdomains and other domains that the web pages link to.
   * - You can list up to 100 seed URLs.
   * - _Required_: No
   * - _Type_: [WebCrawlerSeedUrlConfiguration](./aws-properties-kendra-datasource-webcrawlerseedurlconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-webcrawlerurls-seedurlconfiguration */
  SeedUrlConfiguration?: WebCrawlerSeedUrlConfiguration
  /**
   * - Configuration of the sitemap URLs of the websites you want to crawl.
   * - Only URLs belonging to the same website host names are crawled. You can list up to three sitemap URLs.
   * - _Required_: No
   * - _Type_: [WebCrawlerSiteMapsConfiguration](./aws-properties-kendra-datasource-webcrawlersitemapsconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-webcrawlerurls-sitemapsconfiguration */
  SiteMapsConfiguration?: WebCrawlerSiteMapsConfiguration
}

/**
 * Provides the configuration information for applying basic logic to alter document metadata and content when ingesting documents into Amazon Kendra. To apply advanced logic, to go beyond what you can do with basic logic, see [HookConfiguration](https://docs.aws.amazon.com/kendra/latest/dg/API_HookConfiguration.html).
 * For more information, see [Customizing document metadata during the ingestion process](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface InlineCustomDocumentEnrichmentConfiguration {
  /**
   * - Configuration of the condition used for the target document attribute or metadata field when ingesting documents into Amazon Kendra.
   * - _Required_: No
   * - _Type_: [DocumentAttributeCondition](./aws-properties-kendra-datasource-documentattributecondition.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-inlinecustomdocumentenrichmentconfiguration-condition */
  Condition?: DocumentAttributeCondition
  /**
   * - `TRUE` to delete content if the condition used for the target attribute is met.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-inlinecustomdocumentenrichmentconfiguration-documentcontentdeletion */
  DocumentContentDeletion?: boolean | Intrinsic
  /**
   * - Configuration of the target document attribute or metadata field when ingesting documents into Amazon Kendra. You can also include a value.
   * - _Required_: No
   * - _Type_: [DocumentAttributeTarget](./aws-properties-kendra-datasource-documentattributetarget.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-inlinecustomdocumentenrichmentconfiguration-target */
  Target?: DocumentAttributeTarget
}

/**
 * Provides the configuration information to connect to Confluence as your data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface ConfluenceConfiguration {
  /**
   * - Configuration information for indexing attachments to Confluence blogs and pages.
   * - _Required_: No
   * - _Type_: [ConfluenceAttachmentConfiguration](./aws-properties-kendra-datasource-confluenceattachmentconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluenceconfiguration-attachmentconfiguration */
  AttachmentConfiguration?: ConfluenceAttachmentConfiguration
  /**
   * - Configuration information for indexing Confluence blogs.
   * - _Required_: No
   * - _Type_: [ConfluenceBlogConfiguration](./aws-properties-kendra-datasource-confluenceblogconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluenceconfiguration-blogconfiguration */
  BlogConfiguration?: ConfluenceBlogConfiguration
  /**
   * - A list of regular expression patterns to exclude certain blog posts, pages, spaces, or attachments in your Confluence. Content that matches the patterns are excluded from the index. Content that doesn't match the patterns is included in the index. If content matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the content isn't included in the index.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `50 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluenceconfiguration-exclusionpatterns */
  ExclusionPatterns?: (string | Intrinsic)[]
  /**
   * - A list of regular expression patterns to include certain blog posts, pages, spaces, or attachments in your Confluence. Content that matches the patterns are included in the index. Content that doesn't match the patterns is excluded from the index. If content matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the content isn't included in the index.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `50 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluenceconfiguration-inclusionpatterns */
  InclusionPatterns?: (string | Intrinsic)[]
  /**
   * - Configuration information for indexing Confluence pages.
   * - _Required_: No
   * - _Type_: [ConfluencePageConfiguration](./aws-properties-kendra-datasource-confluencepageconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluenceconfiguration-pageconfiguration */
  PageConfiguration?: ConfluencePageConfiguration
  /**
   * - The Amazon Resource Name (ARN) of an AWS Secrets Manager secret that contains the user name and password required to connect to the Confluence instance. If you use Confluence Cloud, you use a generated API token as the password.
   * - You can also provide authentication credentials in the form of a personal access token. For more information, see [Using a Confluence data source](https://docs.aws.amazon.com/kendra/latest/dg/data-source-confluence.html).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   * - _Minimum_: `1`
   * - _Maximum_: `1284`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluenceconfiguration-secretarn */
  SecretArn: string | Intrinsic
  /**
   * - The URL of your Confluence instance. Use the full URL of the server. For example, _https://server.example.com:port/_. You can also use an IP address, for example, _https://192.168.1.113/_.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(https?|ftp|file)://([^\s]*)`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluenceconfiguration-serverurl */
  ServerUrl: string | Intrinsic
  /**
   * - Configuration information for indexing Confluence spaces.
   * - _Required_: No
   * - _Type_: [ConfluenceSpaceConfiguration](./aws-properties-kendra-datasource-confluencespaceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluenceconfiguration-spaceconfiguration */
  SpaceConfiguration?: ConfluenceSpaceConfiguration
  /**
   * - The version or the type of Confluence installation to connect to.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `CLOUD | SERVER`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluenceconfiguration-version */
  Version: string | Intrinsic
  /**
   * - Configuration information for an Amazon Virtual Private Cloud to connect to your Confluence. For more information, see [Configuring a VPC](https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html).
   * - _Required_: No
   * - _Type_: [DataSourceVpcConfiguration](./aws-properties-kendra-datasource-datasourcevpcconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-confluenceconfiguration-vpcconfiguration */
  VpcConfiguration?: DataSourceVpcConfiguration
}

/**
 * Provides the configuration information to connect to Salesforce as your data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface SalesforceConfiguration {
  /**
   * - Configuration information for Salesforce chatter feeds.
   * - _Required_: No
   * - _Type_: [SalesforceChatterFeedConfiguration](./aws-properties-kendra-datasource-salesforcechatterfeedconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforceconfiguration-chatterfeedconfiguration */
  ChatterFeedConfiguration?: SalesforceChatterFeedConfiguration
  /**
   * - Indicates whether Amazon Kendra should index attachments to Salesforce objects.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforceconfiguration-crawlattachments */
  CrawlAttachments?: boolean | Intrinsic
  /**
   * - A list of regular expression patterns to exclude certain documents in your Salesforce. Documents that match the patterns are excluded from the index. Documents that don't match the patterns are included in the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index.
   * - The pattern is applied to the name of the attached file.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `50 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforceconfiguration-excludeattachmentfilepatterns */
  ExcludeAttachmentFilePatterns?: (string | Intrinsic)[]
  /**
   * - A list of regular expression patterns to include certain documents in your Salesforce. Documents that match the patterns are included in the index. Documents that don't match the patterns are excluded from the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index.
   * - The pattern is applied to the name of the attached file.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `50 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforceconfiguration-includeattachmentfilepatterns */
  IncludeAttachmentFilePatterns?: (string | Intrinsic)[]
  /**
   * - Configuration information for the knowledge article types that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both.
   * - _Required_: No
   * - _Type_: [SalesforceKnowledgeArticleConfiguration](./aws-properties-kendra-datasource-salesforceknowledgearticleconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforceconfiguration-knowledgearticleconfiguration */
  KnowledgeArticleConfiguration?: SalesforceKnowledgeArticleConfiguration
  /**
   * - The Amazon Resource Name (ARN) of an AWS Secrets Managersecret that contains the key/value pairs required to connect to your Salesforce instance. The secret must contain a JSON structure with the following keys:
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   * - _Minimum_: `1`
   * - _Maximum_: `1284`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforceconfiguration-secretarn */
  SecretArn: string | Intrinsic
  /**
   * - The instance URL for the Salesforce site that you want to index.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(https?|ftp|file)://([^\s]*)`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforceconfiguration-serverurl */
  ServerUrl: string | Intrinsic
  /**
   * - Configuration information for processing attachments to Salesforce standard objects.
   * - _Required_: No
   * - _Type_: [SalesforceStandardObjectAttachmentConfiguration](./aws-properties-kendra-datasource-salesforcestandardobjectattachmentconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforceconfiguration-standardobjectattachmentconfiguration */
  StandardObjectAttachmentConfiguration?: SalesforceStandardObjectAttachmentConfiguration
  /**
   * - Configuration of the Salesforce standard objects that Amazon Kendra indexes.
   * - _Required_: No
   * - _Type_: Array of [SalesforceStandardObjectConfiguration](./aws-properties-kendra-datasource-salesforcestandardobjectconfiguration.html)
   * - _Minimum_: `1`
   * - _Maximum_: `17`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-salesforceconfiguration-standardobjectconfigurations */
  StandardObjectConfigurations?: SalesforceStandardObjectConfiguration[]
}

/**
 * Provides the configuration information required for Amazon Kendra Web Crawler.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface WebCrawlerConfiguration {
  /**
   * - Configuration information required to connect to websites using authentication.
   * - You can connect to websites using basic authentication of user name and password. You use a secret in [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html) to store your authentication credentials.
   * - You must provide the website host name and port number. For example, the host name of https://a.example.com/page1.html is "a.example.com" and the port is 443, the standard port for HTTPS.
   * - _Required_: No
   * - _Type_: [WebCrawlerAuthenticationConfiguration](./aws-properties-kendra-datasource-webcrawlerauthenticationconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-webcrawlerconfiguration-authenticationconfiguration */
  AuthenticationConfiguration?: WebCrawlerAuthenticationConfiguration
  /**
   * - The 'depth' or number of levels from the seed level to crawl. For example, the seed URL page is depth 1 and any hyperlinks on this page that are also crawled are depth 2.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-webcrawlerconfiguration-crawldepth */
  CrawlDepth?: number | Intrinsic
  /**
   * - The maximum size (in MB) of a web page or attachment to crawl.
   * - Files larger than this size (in MB) are skipped/not crawled.
   * - The default maximum size of a web page or attachment is set to 50 MB.
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `0`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-webcrawlerconfiguration-maxcontentsizeperpageinmegabytes */
  MaxContentSizePerPageInMegaBytes?: number | Intrinsic
  /**
   * - The maximum number of URLs on a web page to include when crawling a website. This number is per web page.
   * - As a website’s web pages are crawled, any URLs the web pages link to are also crawled. URLs on a web page are crawled in order of appearance.
   * - The default maximum links per page is 100.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-webcrawlerconfiguration-maxlinksperpage */
  MaxLinksPerPage?: number | Intrinsic
  /**
   * - The maximum number of URLs crawled per website host per minute.
   * - A minimum of one URL is required.
   * - The default maximum number of URLs crawled per website host per minute is 300.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `300`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-webcrawlerconfiguration-maxurlsperminutecrawlrate */
  MaxUrlsPerMinuteCrawlRate?: number | Intrinsic
  /**
   * - Configuration information required to connect to your internal websites via a web proxy.
   * - You must provide the website host name and port number. For example, the host name of https://a.example.com/page1.html is "a.example.com" and the port is 443, the standard port for HTTPS.
   * - Web proxy credentials are optional and you can use them to connect to a web proxy server that requires basic authentication. To store web proxy credentials, you use a secret in [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html).
   * - _Required_: No
   * - _Type_: [ProxyConfiguration](./aws-properties-kendra-datasource-proxyconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-webcrawlerconfiguration-proxyconfiguration */
  ProxyConfiguration?: ProxyConfiguration
  /**
   * - A list of regular expression patterns to exclude certain URLs to crawl. URLs that match the patterns are excluded from the index. URLs that don't match the patterns are included in the index. If a URL matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the URL file isn't included in the index.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `50 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-webcrawlerconfiguration-urlexclusionpatterns */
  UrlExclusionPatterns?: (string | Intrinsic)[]
  /**
   * - A list of regular expression patterns to include certain URLs to crawl. URLs that match the patterns are included in the index. URLs that don't match the patterns are excluded from the index. If a URL matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the URL file isn't included in the index.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `50 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-webcrawlerconfiguration-urlinclusionpatterns */
  UrlInclusionPatterns?: (string | Intrinsic)[]
  /**
   * - Specifies the seed or starting point URLs of the websites or the sitemap URLs of the websites you want to crawl.
   * - You can include website subdomains. You can list up to 100 seed URLs and up to three sitemap URLs.
   * - You can only crawl websites that use the secure communication protocol, Hypertext Transfer Protocol Secure (HTTPS). If you receive an error when crawling a website, it could be that the website is blocked from crawling.
   * - _When selecting websites to index, you must adhere to the [Amazon Acceptable Use Policy](https://aws.amazon.com/aup/) and all other Amazon terms. Remember that you must only use Amazon Kendra Web Crawler to index your own webpages, or webpages that you have authorization to index._
   * - _Required_: Yes
   * - _Type_: [WebCrawlerUrls](./aws-properties-kendra-datasource-webcrawlerurls.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-webcrawlerconfiguration-urls */
  Urls: WebCrawlerUrls
}

/**
 * Provides the configuration information for altering document metadata and content during the document ingestion process.
 * For more information, see [Customizing document metadata during the ingestion process](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface CustomDocumentEnrichmentConfiguration {
  /**
   * - Configuration information to alter document attributes or metadata fields and content when ingesting documents into Amazon Kendra.
   * - _Required_: No
   * - _Type_: Array of [InlineCustomDocumentEnrichmentConfiguration](./aws-properties-kendra-datasource-inlinecustomdocumentenrichmentconfiguration.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-customdocumentenrichmentconfiguration-inlineconfigurations */
  InlineConfigurations?: InlineCustomDocumentEnrichmentConfiguration[]
  /**
   * - Configuration information for invoking a Lambda function in AWS Lambda on the structured documents with their metadata and text extracted. You can use a Lambda function to apply advanced logic for creating, modifying, or deleting document metadata and content. For more information, see [Advanced data manipulation](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#advanced-data-manipulation).
   * - _Required_: No
   * - _Type_: [HookConfiguration](./aws-properties-kendra-datasource-hookconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-customdocumentenrichmentconfiguration-postextractionhookconfiguration */
  PostExtractionHookConfiguration?: HookConfiguration
  /**
   * - Configuration information for invoking a Lambda function in AWS Lambda on the original or raw documents before extracting their metadata and text. You can use a Lambda function to apply advanced logic for creating, modifying, or deleting document metadata and content. For more information, see [Advanced data manipulation](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#advanced-data-manipulation).
   * - _Required_: No
   * - _Type_: [HookConfiguration](./aws-properties-kendra-datasource-hookconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-customdocumentenrichmentconfiguration-preextractionhookconfiguration */
  PreExtractionHookConfiguration?: HookConfiguration
  /**
   * - The Amazon Resource Name (ARN) of an IAM role with permission to run `PreExtractionHookConfiguration` and `PostExtractionHookConfiguration` for altering document metadata and content during the document ingestion process. For more information, see [an IAM roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html).
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
   * - _Minimum_: `1`
   * - _Maximum_: `1284`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-customdocumentenrichmentconfiguration-rolearn */
  RoleArn?: string | Intrinsic
}

/**
 * Provides the configuration information for an Amazon Kendra data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface DataSourceConfiguration {
  /**
   * - Provides the configuration information to connect to Confluence as your data source.
   * - _Required_: No
   * - _Type_: [ConfluenceConfiguration](./aws-properties-kendra-datasource-confluenceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-datasourceconfiguration-confluenceconfiguration */
  ConfluenceConfiguration?: ConfluenceConfiguration
  /**
   * - Provides the configuration information to connect to a database as your data source.
   * - _Required_: No
   * - _Type_: [DatabaseConfiguration](./aws-properties-kendra-datasource-databaseconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-datasourceconfiguration-databaseconfiguration */
  DatabaseConfiguration?: DatabaseConfiguration
  /**
   * - Provides the configuration information to connect to Google Drive as your data source.
   * - _Required_: No
   * - _Type_: [GoogleDriveConfiguration](./aws-properties-kendra-datasource-googledriveconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-datasourceconfiguration-googledriveconfiguration */
  GoogleDriveConfiguration?: GoogleDriveConfiguration
  /**
   * - Provides the configuration information to connect to Microsoft OneDrive as your data source.
   * - _Required_: No
   * - _Type_: [OneDriveConfiguration](./aws-properties-kendra-datasource-onedriveconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-datasourceconfiguration-onedriveconfiguration */
  OneDriveConfiguration?: OneDriveConfiguration
  /**
   * - Provides the configuration information to connect to an Amazon S3 bucket as your data source.
   * - _Required_: No
   * - _Type_: [S3DataSourceConfiguration](./aws-properties-kendra-datasource-s3datasourceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-datasourceconfiguration-s3configuration */
  S3Configuration?: S3DataSourceConfiguration
  /**
   * - Provides the configuration information to connect to Salesforce as your data source.
   * - _Required_: No
   * - _Type_: [SalesforceConfiguration](./aws-properties-kendra-datasource-salesforceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-datasourceconfiguration-salesforceconfiguration */
  SalesforceConfiguration?: SalesforceConfiguration
  /**
   * - Provides the configuration information to connect to ServiceNow as your data source.
   * - _Required_: No
   * - _Type_: [ServiceNowConfiguration](./aws-properties-kendra-datasource-servicenowconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-datasourceconfiguration-servicenowconfiguration */
  ServiceNowConfiguration?: ServiceNowConfiguration
  /**
   * - Provides the configuration information to connect to Microsoft SharePoint as your data source.
   * - _Required_: No
   * - _Type_: [SharePointConfiguration](./aws-properties-kendra-datasource-sharepointconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-datasourceconfiguration-sharepointconfiguration */
  SharePointConfiguration?: SharePointConfiguration
  /**
   * - Provides the configuration information required for Amazon Kendra Web Crawler.
   * - _Required_: No
   * - _Type_: [WebCrawlerConfiguration](./aws-properties-kendra-datasource-webcrawlerconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-datasourceconfiguration-webcrawlerconfiguration */
  WebCrawlerConfiguration?: WebCrawlerConfiguration
  /**
   * - Provides the configuration information to connect to Amazon WorkDocs as your data source.
   * - _Required_: No
   * - _Type_: [WorkDocsConfiguration](./aws-properties-kendra-datasource-workdocsconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-datasourceconfiguration-workdocsconfiguration */
  WorkDocsConfiguration?: WorkDocsConfiguration
}

/**
 * Creates a data source connector that you want to use with an Amazon Kendra index.
 * You specify a name, data source connector type and description for your data source. You also specify configuration information for the data source connector.
 * ###### Important
 *
 * `CreateDataSource` does _not_ support connectors which [require a `TemplateConfiguration` object](https://docs.aws.amazon.com/kendra/latest/dg/ds-schemas.html) for connecting to Amazon Kendra.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html */

export interface KendraDataSource extends ResourceAttributes {
  Type: 'AWS::Kendra::DataSource'
  Properties: {
    /**
     * - Configuration information for altering document metadata and content during the document ingestion process.
     * - _Required_: No
     * - _Type_: [CustomDocumentEnrichmentConfiguration](./aws-properties-kendra-datasource-customdocumentenrichmentconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-customdocumentenrichmentconfiguration */
    CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration
    /**
     * - Configuration information for an Amazon Kendra data source. The contents of the configuration depend on the type of data source. You can only specify one type of data source in the configuration.
     * - You can't specify the `Configuration` parameter when the `Type` parameter is set to `CUSTOM`.
     * - The `Configuration` parameter is required for all other data sources.
     * - _Required_: No
     * - _Type_: [DataSourceConfiguration](./aws-properties-kendra-datasource-datasourceconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-datasourceconfiguration */
    DataSourceConfiguration?: DataSourceConfiguration
    /**
     * - A description for the data source connector.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-description */
    Description?: string | Intrinsic
    /**
     * - The identifier of the index you want to use with the data source connector.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `36`
     * - _Maximum_: `36`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-indexid */
    IndexId: string | Intrinsic
    /**
     * - The code for a language. This shows a supported language for all documents in the data source. English is supported by default. For more information on supported languages, including their codes, see [Adding documents in languages other than English](https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z-]*`
     * - _Minimum_: `2`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-languagecode */
    LanguageCode?: string | Intrinsic
    /**
     * - The name of the data source.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-name */
    Name: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of a role with permission to access the data source.
     * - You can't specify the `RoleArn` parameter when the `Type` parameter is set to `CUSTOM`.
     * - The `RoleArn` parameter is required for all other data sources.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
     * - _Minimum_: `1`
     * - _Maximum_: `1284`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-rolearn */
    RoleArn?: string | Intrinsic
    /**
     * - Sets the frequency that Amazon Kendra checks the documents in your data source and updates the index. If you don't set a schedule, Amazon Kendra doesn't periodically update the index.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-schedule */
    Schedule?: string | Intrinsic
    /**
     * - An array of key-value pairs to apply to this resource
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-kendra-datasource-tag.html)
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-tags */
    Tags?: Tag[]
    /**
     * - The type of the data source.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `S3 | SHAREPOINT | SALESFORCE | ONEDRIVE | SERVICENOW | DATABASE | CUSTOM | CONFLUENCE | GOOGLEDRIVE | WEBCRAWLER | WORKDOCS`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html#cfn-kendra-datasource-type */
    Type: string | Intrinsic
  }
}
