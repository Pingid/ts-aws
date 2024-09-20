import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A list of key/value pairs that identify an index, FAQ, or data source. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: \_ . : / = + - @.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html */

export interface Tag {
  /**
   * - The key for the tag. Keys are not case sensitive and must be unique for the Amazon Q Business application or data source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-tag-key */
  Key: string | Intrinsic
  /**
   * - The value associated with the tag. The value may be an empty string but it can't be null.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-tag-value */
  Value: string | Intrinsic
}

/**
 * Provides configuration information needed to connect to an Amazon VPC (Virtual Private Cloud).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html */

export interface DataSourceVpcConfiguration {
  /**
   * - A list of identifiers of security groups within your Amazon VPC. The security groups should enable Amazon Q Business to connect to the data source.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `200 | 10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-datasourcevpcconfiguration-securitygroupids */
  SecurityGroupIds: (string | Intrinsic)[]
  /**
   * - A list of identifiers for subnets within your Amazon VPC. The subnets should be able to connect to each other in the VPC, and they should have outgoing access to the Internet through a NAT device.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-datasourcevpcconfiguration-subnetids */
  SubnetIds: (string | Intrinsic)[]
}

/**
 * Provides the configuration information for invoking a Lambda function in AWS Lambda to alter document metadata and content when ingesting documents into Amazon Q Business.
 * You can configure your Lambda function using the `PreExtractionHookConfiguration` parameter if you want to apply advanced alterations on the original or raw documents.
 * If you want to apply advanced alterations on the Amazon Q Business structured documents, you must configure your Lambda function using `PostExtractionHookConfiguration`.
 * You can only invoke one Lambda function. However, this function can invoke other functions it requires.
 * For more information, see [Custom document enrichment](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html */

export interface HookConfiguration {
  /**
   * - The condition used for when a Lambda function should be invoked.
   * - For example, you can specify a condition that if there are empty date-time values, then Amazon Q Business should invoke a function that inserts the current date-time.
   * - _Required_: No
   * - _Type_: [DocumentAttributeCondition](./aws-properties-qbusiness-datasource-documentattributecondition.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-hookconfiguration-invocationcondition */
  InvocationCondition?: DocumentAttributeCondition
  /**
   * - The Amazon Resource Name (ARN) of a role with permission to run a Lambda function during ingestion. For more information, see [IAM roles for Custom Document Enrichment (CDE)](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/iam-roles.html#cde-iam-role).
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:aws[a-zA-Z-]*:lambda:[a-z-]*-[0-9]:[0-9]{12}:function:[a-zA-Z0-9-_]+(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})?(:[a-zA-Z0-9-_]+)?$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-hookconfiguration-lambdaarn */
  LambdaArn?: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of a role with permission to run `PreExtractionHookConfiguration` and `PostExtractionHookConfiguration` for altering document metadata and content during the document ingestion process.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   * - _Minimum_: `0`
   * - _Maximum_: `1284`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-hookconfiguration-rolearn */
  RoleArn?: string | Intrinsic
  /**
   * - Stores the original, raw documents or the structured, parsed documents before and after altering them. For more information, see [Data contracts for Lambda functions](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/cde-lambda-operations.html#cde-lambda-operations-data-contracts).
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   * - _Minimum_: `1`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-hookconfiguration-s3bucketname */
  S3BucketName?: string | Intrinsic
}

/**
 * The target document attribute or metadata field you want to alter when ingesting documents into Amazon Q Business.
 * For example, you can delete all customer identification numbers associated with the documents, stored in the document metadata field called 'Customer\_ID' by setting the target key as 'Customer\_ID' and the deletion flag to `TRUE`. This removes all customer ID values in the field 'Customer\_ID'. This would scrub personally identifiable information from each document's metadata.
 * Amazon Q Business can't create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using [`DocumentAttributeTarget`](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeTarget.html). Amazon Q Business will then map your newly created document attribute to your index field.
 * You can also use this with [`DocumentAttributeCondition`](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeCondition.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html */

export interface DocumentAttributeTarget {
  /**
   * - `TRUE` to delete the existing target value for your specified target attribute key. You cannot create a target value and set this to `TRUE`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `DELETE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-documentattributetarget-attributevalueoperator */
  AttributeValueOperator?: string | Intrinsic
  /**
   * - The identifier of the target document attribute or metadata field. For example, 'Department' could be an identifier for the target attribute or metadata field that includes the department names associated with the documents.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9_][a-zA-Z0-9_-]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-documentattributetarget-key */
  Key: string | Intrinsic
  /**
   * - The value of a document attribute. You can only provide one value for a document attribute.
   * - _Required_: No
   * - _Type_: [DocumentAttributeValue](./aws-properties-qbusiness-datasource-documentattributevalue.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-documentattributetarget-value */
  Value?: DocumentAttributeValue
}

/**
 * The value of a document attribute. You can only provide one value for a document attribute.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html */

export interface DocumentAttributeValue {
  /**
   * - A date expressed as an ISO 8601 string.
   * - It's important for the time zone to be included in the ISO 8601 date-time format. For example, 2012-03-25T12:30:10+01:00 is the ISO 8601 date-time format for March 25th 2012 at 12:30PM (plus 10 seconds) in Central European Time.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-documentattributevalue-datevalue */
  DateValue?: string | Intrinsic
  /**
   * - A long integer value.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-documentattributevalue-longvalue */
  LongValue?: number | Intrinsic
  /**
   * - A list of strings.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-documentattributevalue-stringlistvalue */
  StringListValue?: (string | Intrinsic)[]
  /**
   * - A string.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-documentattributevalue-stringvalue */
  StringValue?: string | Intrinsic
}

/**
 * The condition used for the target document attribute or metadata field when ingesting documents into Amazon Q Business. You use this with [`DocumentAttributeTarget`](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeTarget.html) to apply the condition.
 * For example, you can create the 'Department' target field and have it prefill department names associated with the documents based on information in the 'Source\_URI' field. Set the condition that if the 'Source\_URI' field contains 'financial' in its URI value, then prefill the target field 'Department' with the target value 'Finance' for the document.
 * Amazon Q Business can't create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using `DocumentAttributeTarget`. Amazon Q Business then will map your newly created metadata field to your index field.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html */

export interface DocumentAttributeCondition {
  /**
   * - The identifier of the document attribute used for the condition.
   * - For example, 'Source\_URI' could be an identifier for the attribute or metadata field that contains source URIs associated with the documents.
   * - Amazon Q Business currently doesn't support `_document_body` as an attribute key used for the condition.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9_][a-zA-Z0-9_-]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-documentattributecondition-key */
  Key: string | Intrinsic
  /**
   * - The identifier of the document attribute used for the condition.
   * - For example, 'Source\_URI' could be an identifier for the attribute or metadata field that contains source URIs associated with the documents.
   * - Amazon Q Business currently does not support `_document_body` as an attribute key used for the condition.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `GREATER_THAN | GREATER_THAN_OR_EQUALS | LESS_THAN | LESS_THAN_OR_EQUALS | EQUALS | NOT_EQUALS | CONTAINS | NOT_CONTAINS | EXISTS | NOT_EXISTS | BEGINS_WITH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-documentattributecondition-operator */
  Operator: string | Intrinsic
  /**
   * - The value of a document attribute. You can only provide one value for a document attribute.
   * - _Required_: No
   * - _Type_: [DocumentAttributeValue](./aws-properties-qbusiness-datasource-documentattributevalue.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-documentattributecondition-value */
  Value?: DocumentAttributeValue
}

/**
 * Provides the configuration information for applying basic logic to alter document metadata and content when ingesting documents into Amazon Q Business.
 * To apply advanced logic, to go beyond what you can do with basic logic, see [`HookConfiguration`](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_HookConfiguration.html).
 * For more information, see [Custom document enrichment](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html */

export interface InlineDocumentEnrichmentConfiguration {
  /**
   * - Configuration of the condition used for the target document attribute or metadata field when ingesting documents into Amazon Q Business.
   * - _Required_: No
   * - _Type_: [DocumentAttributeCondition](./aws-properties-qbusiness-datasource-documentattributecondition.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-inlinedocumentenrichmentconfiguration-condition */
  Condition?: DocumentAttributeCondition
  /**
   * - `TRUE` to delete content if the condition used for the target attribute is met.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `DELETE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-inlinedocumentenrichmentconfiguration-documentcontentoperator */
  DocumentContentOperator?: string | Intrinsic
  /**
   * - Configuration of the target document attribute or metadata field when ingesting documents into Amazon Q Business. You can also include a value.
   * - _Required_: No
   * - _Type_: [DocumentAttributeTarget](./aws-properties-qbusiness-datasource-documentattributetarget.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-inlinedocumentenrichmentconfiguration-target */
  Target?: DocumentAttributeTarget
}

/**
 * Provides the configuration information for altering document metadata and content during the document ingestion process.
 * For more information, see [Custom document enrichment](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html */

export interface DocumentEnrichmentConfiguration {
  /**
   * - Configuration information to alter document attributes or metadata fields and content when ingesting documents into Amazon Q Business.
   * - _Required_: No
   * - _Type_: Array of [InlineDocumentEnrichmentConfiguration](./aws-properties-qbusiness-datasource-inlinedocumentenrichmentconfiguration.html)
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-documentenrichmentconfiguration-inlineconfigurations */
  InlineConfigurations?: InlineDocumentEnrichmentConfiguration[]
  /**
   * - Configuration information for invoking a Lambda function in AWS Lambda on the structured documents with their metadata and text extracted. You can use a Lambda function to apply advanced logic for creating, modifying, or deleting document metadata and content. For more information, see [Using Lambda functions](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/cde-lambda-operations.html).
   * - _Required_: No
   * - _Type_: [HookConfiguration](./aws-properties-qbusiness-datasource-hookconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-documentenrichmentconfiguration-postextractionhookconfiguration */
  PostExtractionHookConfiguration?: HookConfiguration
  /**
   * - Configuration information for invoking a Lambda function in AWS Lambda on the original or raw documents before extracting their metadata and text. You can use a Lambda function to apply advanced logic for creating, modifying, or deleting document metadata and content. For more information, see [Using Lambda functions](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/cde-lambda-operations.html).
   * - _Required_: No
   * - _Type_: [HookConfiguration](./aws-properties-qbusiness-datasource-hookconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-documentenrichmentconfiguration-preextractionhookconfiguration */
  PreExtractionHookConfiguration?: HookConfiguration
}

/**
 * Creates a data source connector for an Amazon Q Business application.
 * `CreateDataSource` is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html */

export interface QBusinessDataSource extends ResourceAttributes {
  Type: 'AWS::QBusiness::DataSource'
  Properties: {
    /**
     * - The identifier of the Amazon Q Business application the data source will be attached to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9-]{35}$`
     * - _Minimum_: `36`
     * - _Maximum_: `36`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-applicationid */
    ApplicationId: string | Intrinsic
    /**
     * - Use this property to specify a JSON or YAML schema with configuration information specific to your data source connector to connect your data source repository to Amazon Q Business. You must use the JSON or YAML schema provided by Amazon Q.
     * - You can find configuration templates for your specific data source using the following steps:
     * - _Required_: Yes
     * - _Type_:
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-configuration */
    Configuration: any | Intrinsic
    /**
     * - A description for the data source connector.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\s\S]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-description */
    Description?: string | Intrinsic
    /**
     * - The name of the Amazon Q Business data source.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9_-]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-displayname */
    DisplayName: string | Intrinsic
    /**
     * - Provides the configuration information for altering document metadata and content during the document ingestion process.
     * - For more information, see [Custom document enrichment](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/custom-document-enrichment.html).
     * - _Required_: No
     * - _Type_: [DocumentEnrichmentConfiguration](./aws-properties-qbusiness-datasource-documentenrichmentconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-documentenrichmentconfiguration */
    DocumentEnrichmentConfiguration?: DocumentEnrichmentConfiguration
    /**
     * - The identifier of the index the data source is attached to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9-]{35}$`
     * - _Minimum_: `36`
     * - _Maximum_: `36`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-indexid */
    IndexId: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of an IAM role with permission to access the data source and required resources.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
     * - _Minimum_: `0`
     * - _Maximum_: `1284`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-rolearn */
    RoleArn?: string | Intrinsic
    /**
     * - Sets the frequency for Amazon Q Business to check the documents in your data source repository and update your index. If you don't set a schedule, Amazon Q Business won't periodically update the index.
     * - Specify a `cron-` format schedule string or an empty string to indicate that the index is updated on demand. You can't specify the `Schedule` parameter when the `Type` parameter is set to `CUSTOM`. If you do, you receive a `ValidationException` exception.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\s\S]*$`
     * - _Maximum_: `998`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-syncschedule */
    SyncSchedule?: string | Intrinsic
    /**
     * - A list of key-value pairs that identify or categorize the data source connector. You can also use tags to help control access to the data source connector. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: \_ . : / = + - @.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-qbusiness-datasource-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-tags */
    Tags?: Tag[]
    /**
     * - Configuration information for an Amazon VPC (Virtual Private Cloud) to connect to your data source. For more information, see [Using Amazon VPC with Amazon Q Business connectors](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/connector-vpc.html).
     * - _Required_: No
     * - _Type_: [DataSourceVpcConfiguration](./aws-properties-qbusiness-datasource-datasourcevpcconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-datasource.html#cfn-qbusiness-datasource-vpcconfiguration */
    VpcConfiguration?: DataSourceVpcConfiguration
  }
}
