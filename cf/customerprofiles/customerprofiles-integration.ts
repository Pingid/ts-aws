import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an `ObjectTypeName` (template) used to ingest the event.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html */

export interface ObjectTypeMapping {
    /**
     * - The key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-objecttypemapping-key */
    "Key": string | Intrinsic;
    /**
     * - The value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z_][a-zA-Z_0-9-]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-objecttypemapping-value */
    "Value": string | Intrinsic;
}

/**
 * The `Tag` property type specifies Property description not available. for an [AWS::CustomerProfiles::Integration](./aws-resource-customerprofiles-integration.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html */

export interface Tag {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The operation to be performed on the provided source fields.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html */

export interface ConnectorOperator {
    /**
     * - The operation to be performed on the provided Marketo source fields.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `PROJECTION | LESS_THAN | GREATER_THAN | BETWEEN | ADDITION | MULTIPLICATION | DIVISION | SUBTRACTION | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NON_NEGATIVE | VALIDATE_NUMERIC | NO_OP`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-connectoroperator-marketo */
    "Marketo"?: string | Intrinsic;
    /**
     * - The operation to be performed on the provided Amazon S3 source fields.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `PROJECTION | LESS_THAN | GREATER_THAN | BETWEEN | LESS_THAN_OR_EQUAL_TO | GREATER_THAN_OR_EQUAL_TO | EQUAL_TO | NOT_EQUAL_TO | ADDITION | MULTIPLICATION | DIVISION | SUBTRACTION | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NON_NEGATIVE | VALIDATE_NUMERIC | NO_OP`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-connectoroperator-s3 */
    "S3"?: string | Intrinsic;
    /**
     * - The operation to be performed on the provided Salesforce source fields.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `PROJECTION | LESS_THAN | GREATER_THAN | CONTAINS | BETWEEN | LESS_THAN_OR_EQUAL_TO | GREATER_THAN_OR_EQUAL_TO | EQUAL_TO | NOT_EQUAL_TO | ADDITION | MULTIPLICATION | DIVISION | SUBTRACTION | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NON_NEGATIVE | VALIDATE_NUMERIC | NO_OP`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-connectoroperator-salesforce */
    "Salesforce"?: string | Intrinsic;
    /**
     * - The operation to be performed on the provided ServiceNow source fields.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `PROJECTION | LESS_THAN | GREATER_THAN | CONTAINS | BETWEEN | LESS_THAN_OR_EQUAL_TO | GREATER_THAN_OR_EQUAL_TO | EQUAL_TO | NOT_EQUAL_TO | ADDITION | MULTIPLICATION | DIVISION | SUBTRACTION | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NON_NEGATIVE | VALIDATE_NUMERIC | NO_OP`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-connectoroperator-servicenow */
    "ServiceNow"?: string | Intrinsic;
    /**
     * - The operation to be performed on the provided Zendesk source fields.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `PROJECTION | GREATER_THAN | ADDITION | MULTIPLICATION | DIVISION | SUBTRACTION | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NON_NEGATIVE | VALIDATE_NUMERIC | NO_OP`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-connectoroperator-zendesk */
    "Zendesk"?: string | Intrinsic;
}

/**
 * Specifies the configuration used when importing incremental records from the source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html */

export interface IncrementalPullConfig {
    /**
     * - A field that specifies the date time or timestamp field as the criteria to use when importing incremental records from the source.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-incrementalpullconfig-datetimetypefieldname */
    "DatetimeTypeFieldName"?: string | Intrinsic;
}

/**
 * A map used to store task-related information. The execution service looks for particular information based on the `TaskType`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html */

export interface TaskPropertiesMap {
    /**
     * - The task property key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `VALUE | VALUES | DATA_TYPE | UPPER_BOUND | LOWER_BOUND | SOURCE_DATA_TYPE | DESTINATION_DATA_TYPE | VALIDATION_ACTION | MASK_VALUE | MASK_LENGTH | TRUNCATE_LENGTH | MATH_OPERATION_FIELDS_ORDER | CONCAT_FORMAT | SUBFIELD_CATEGORY_MAP`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-taskpropertiesmap-operatorpropertykey */
    "OperatorPropertyKey": string | Intrinsic;
    /**
     * - The task property value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.+`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-taskpropertiesmap-property */
    "Property": string | Intrinsic;
}

/**
 * The `Task` property type specifies the class for modeling different type of tasks. Task implementation varies based on the TaskType.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html */

export interface Task {
    /**
     * - The operation to be performed on the provided source fields.
     * - _Required_: No
     * - _Type_: [ConnectorOperator](./aws-properties-customerprofiles-integration-connectoroperator.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-task-connectoroperator */
    "ConnectorOperator"?: ConnectorOperator;
    /**
     * - A field in a destination connector, or a field value against which Amazon AppFlow validates a source field.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-task-destinationfield */
    "DestinationField"?: string | Intrinsic;
    /**
     * - The source fields to which a particular task is applied.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-task-sourcefields */
    "SourceFields": (string | Intrinsic)[];
    /**
     * - A map used to store task-related information. The service looks for particular information based on the TaskType.
     * - _Required_: No
     * - _Type_: Array of [TaskPropertiesMap](./aws-properties-customerprofiles-integration-taskpropertiesmap.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-task-taskproperties */
    "TaskProperties"?: TaskPropertiesMap[];
    /**
     * - Specifies the particular task implementation that Amazon AppFlow performs.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `Arithmetic | Filter | Map | Mask | Merge | Truncate | Validate`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-task-tasktype */
    "TaskType": string | Intrinsic;
}

/**
 * The properties that are applied when Marketo is being used as a source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html */

export interface MarketoSourceProperties {
    /**
     * - The object specified in the Marketo flow source.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `\S+`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-marketosourceproperties-object */
    "Object": string | Intrinsic;
}

/**
 * The properties that are applied when Amazon S3 is being used as the flow source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html */

export interface S3SourceProperties {
    /**
     * - The Amazon S3 bucket name where the source files are stored.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `\S+`
     * - _Minimum_: `3`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-s3sourceproperties-bucketname */
    "BucketName": string | Intrinsic;
    /**
     * - The object key for the Amazon S3 bucket in which the source files are stored.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-s3sourceproperties-bucketprefix */
    "BucketPrefix"?: string | Intrinsic;
}

/**
 * The properties that are applied when Salesforce is being used as a source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html */

export interface SalesforceSourceProperties {
    /**
     * - The flag that enables dynamic fetching of new (recently added) fields in the Salesforce objects while running a flow.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-salesforcesourceproperties-enabledynamicfieldupdate */
    "EnableDynamicFieldUpdate"?: boolean | Intrinsic;
    /**
     * - Indicates whether Amazon AppFlow includes deleted files in the flow run.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-salesforcesourceproperties-includedeletedrecords */
    "IncludeDeletedRecords"?: boolean | Intrinsic;
    /**
     * - The object specified in the Salesforce flow source.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `\S+`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-salesforcesourceproperties-object */
    "Object": string | Intrinsic;
}

/**
 * The properties that are applied when using Zendesk as a flow source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html */

export interface ZendeskSourceProperties {
    /**
     * - The object specified in the Zendesk flow source.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `\S+`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-zendesksourceproperties-object */
    "Object": string | Intrinsic;
}

/**
 * The properties that are applied when ServiceNow is being used as a source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html */

export interface ServiceNowSourceProperties {
    /**
     * - The object specified in the ServiceNow flow source.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `\S+`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-servicenowsourceproperties-object */
    "Object": string | Intrinsic;
}

/**
 * Specifies the information that is required to query a particular Amazon AppFlow connector. Customer Profiles supports Salesforce, Zendesk, Marketo, ServiceNow and Amazon S3.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html */

export interface SourceConnectorProperties {
    /**
     * - The properties that are applied when Marketo is being used as a source.
     * - _Required_: No
     * - _Type_: [MarketoSourceProperties](./aws-properties-customerprofiles-integration-marketosourceproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-sourceconnectorproperties-marketo */
    "Marketo"?: MarketoSourceProperties;
    /**
     * - The properties that are applied when Amazon S3 is being used as the flow source.
     * - _Required_: No
     * - _Type_: [S3SourceProperties](./aws-properties-customerprofiles-integration-s3sourceproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-sourceconnectorproperties-s3 */
    "S3"?: S3SourceProperties;
    /**
     * - The properties that are applied when Salesforce is being used as a source.
     * - _Required_: No
     * - _Type_: [SalesforceSourceProperties](./aws-properties-customerprofiles-integration-salesforcesourceproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-sourceconnectorproperties-salesforce */
    "Salesforce"?: SalesforceSourceProperties;
    /**
     * - The properties that are applied when ServiceNow is being used as a source.
     * - _Required_: No
     * - _Type_: [ServiceNowSourceProperties](./aws-properties-customerprofiles-integration-servicenowsourceproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-sourceconnectorproperties-servicenow */
    "ServiceNow"?: ServiceNowSourceProperties;
    /**
     * - The properties that are applied when using Zendesk as a flow source.
     * - _Required_: No
     * - _Type_: [ZendeskSourceProperties](./aws-properties-customerprofiles-integration-zendesksourceproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-sourceconnectorproperties-zendesk */
    "Zendesk"?: ZendeskSourceProperties;
}

/**
 * The configuration that controls how Customer Profiles retrieves data from the source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html */

export interface SourceFlowConfig {
    /**
     * - The name of the Amazon AppFlow connector profile. This name must be unique for each connector profile in the AWS account.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\w/!@#+=.-]+`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-sourceflowconfig-connectorprofilename */
    "ConnectorProfileName"?: string | Intrinsic;
    /**
     * - The type of connector, such as Salesforce, Marketo, and so on.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `Salesforce | Marketo | ServiceNow | Zendesk | S3`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-sourceflowconfig-connectortype */
    "ConnectorType": string | Intrinsic;
    /**
     * - Defines the configuration for a scheduled incremental data pull. If a valid configuration is provided, the fields specified in the configuration are used when querying for the incremental data pull.
     * - _Required_: No
     * - _Type_: [IncrementalPullConfig](./aws-properties-customerprofiles-integration-incrementalpullconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-sourceflowconfig-incrementalpullconfig */
    "IncrementalPullConfig"?: IncrementalPullConfig;
    /**
     * - Specifies the information that is required to query a particular source connector.
     * - _Required_: Yes
     * - _Type_: [SourceConnectorProperties](./aws-properties-customerprofiles-integration-sourceconnectorproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-sourceflowconfig-sourceconnectorproperties */
    "SourceConnectorProperties": SourceConnectorProperties;
}

/**
 * Specifies the configuration details of a scheduled-trigger flow that you define. Currently, these settings only apply to the scheduled-trigger type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html */

export interface ScheduledTriggerProperties {
    /**
     * - Specifies whether a scheduled flow has an incremental data transfer or a complete data transfer for each flow run.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Incremental | Complete`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-scheduledtriggerproperties-datapullmode */
    "DataPullMode"?: string | Intrinsic;
    /**
     * - Specifies the date range for the records to import from the connector in the first flow run.
     * - _Required_: No
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-scheduledtriggerproperties-firstexecutionfrom */
    "FirstExecutionFrom"?: number | Intrinsic;
    /**
     * - Specifies the scheduled end time for a scheduled-trigger flow.
     * - _Required_: No
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-scheduledtriggerproperties-scheduleendtime */
    "ScheduleEndTime"?: number | Intrinsic;
    /**
     * - The scheduling expression that determines the rate at which the schedule will run, for example rate (5 minutes).
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-scheduledtriggerproperties-scheduleexpression */
    "ScheduleExpression": string | Intrinsic;
    /**
     * - Specifies the optional offset that is added to the time interval for a schedule-triggered flow.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `36000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-scheduledtriggerproperties-scheduleoffset */
    "ScheduleOffset"?: number | Intrinsic;
    /**
     * - Specifies the scheduled start time for a scheduled-trigger flow. The value must be a date/time value in EPOCH format.
     * - _Required_: No
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-scheduledtriggerproperties-schedulestarttime */
    "ScheduleStartTime"?: number | Intrinsic;
    /**
     * - Specifies the time zone used when referring to the date and time of a scheduled-triggered flow, such as America/New\_York.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-scheduledtriggerproperties-timezone */
    "Timezone"?: string | Intrinsic;
}

/**
 * Specifies the configuration details that control the trigger for a flow. Currently, these settings only apply to the Scheduled trigger type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html */

export interface TriggerProperties {
    /**
     * - Specifies the configuration details of a schedule-triggered flow that you define.
     * - _Required_: No
     * - _Type_: [ScheduledTriggerProperties](./aws-properties-customerprofiles-integration-scheduledtriggerproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-triggerproperties-scheduled */
    "Scheduled"?: ScheduledTriggerProperties;
}

/**
 * The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html */

export interface TriggerConfig {
    /**
     * - Specifies the configuration details of a schedule-triggered flow that you define. Currently, these settings only apply to the Scheduled trigger type.
     * - _Required_: No
     * - _Type_: [TriggerProperties](./aws-properties-customerprofiles-integration-triggerproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-triggerconfig-triggerproperties */
    "TriggerProperties"?: TriggerProperties;
    /**
     * - Specifies the type of flow trigger. It can be OnDemand, Scheduled, or Event.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `Scheduled | Event | OnDemand`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-triggerconfig-triggertype */
    "TriggerType": string | Intrinsic;
}

/**
 * The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html */

export interface FlowDefinition {
    /**
     * - A description of the flow you want to create.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\w!@#\-.?,\s]*`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-flowdefinition-description */
    "Description"?: string | Intrinsic;
    /**
     * - The specified name of the flow. Use underscores (\_) or hyphens (-) only. Spaces are not allowed.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9][\w!@#.-]+`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-flowdefinition-flowname */
    "FlowName": string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the AWS Key Management Service (KMS) key you provide for encryption.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:aws:kms:.*:[0-9]+:.*`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-flowdefinition-kmsarn */
    "KmsArn": string | Intrinsic;
    /**
     * - The configuration that controls how Customer Profiles retrieves data from the source.
     * - _Required_: Yes
     * - _Type_: [SourceFlowConfig](./aws-properties-customerprofiles-integration-sourceflowconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-flowdefinition-sourceflowconfig */
    "SourceFlowConfig": SourceFlowConfig;
    /**
     * - A list of tasks that Customer Profiles performs while transferring the data in the flow run.
     * - _Required_: Yes
     * - _Type_: Array of [Task](./aws-properties-customerprofiles-integration-task.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-flowdefinition-tasks */
    "Tasks": Task[];
    /**
     * - The trigger settings that determine how and when the flow runs.
     * - _Required_: Yes
     * - _Type_: [TriggerConfig](./aws-properties-customerprofiles-integration-triggerconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-flowdefinition-triggerconfig */
    "TriggerConfig": TriggerConfig;
}

/**
 * Specifies an Amazon Connect Customer Profiles Integration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html */

export interface CustomerProfilesIntegration extends ResourceAttributes {
    "Type": "AWS::CustomerProfiles::Integration";
    "Properties": {
        /**
         * - The unique name of the domain.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_-]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-domainname */
        "DomainName": string | Intrinsic;
        /**
         * - A list of unique names for active event triggers associated with the integration.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Minimum_: `1 | 1`
         * - _Maximum_: `64 | 1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-eventtriggernames */
        "EventTriggerNames"?: (string | Intrinsic)[];
        /**
         * - The configuration that controls how Customer Profiles retrieves data from the source.
         * - _Required_: No
         * - _Type_: [FlowDefinition](./aws-properties-customerprofiles-integration-flowdefinition.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-flowdefinition */
        "FlowDefinition"?: FlowDefinition;
        /**
         * - The name of the profile object type mapping to use.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z_][a-zA-Z_0-9-]*$`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-objecttypename */
        "ObjectTypeName"?: string | Intrinsic;
        /**
         * - The object type mapping.
         * - _Required_: No
         * - _Type_: Array of [ObjectTypeMapping](./aws-properties-customerprofiles-integration-objecttypemapping.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-objecttypenames */
        "ObjectTypeNames"?: ObjectTypeMapping[];
        /**
         * - The tags used to organize, track, or control access for this resource.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-customerprofiles-integration-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-tags */
        "Tags"?: Tag[];
        /**
         * - The URI of the S3 bucket or any other type of data source.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-integration.html#cfn-customerprofiles-integration-uri */
        "Uri"?: string | Intrinsic;
    };
}