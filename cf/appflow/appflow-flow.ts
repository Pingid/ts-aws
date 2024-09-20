import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `Tag` property type specifies Property description not available. for an [AWS::AppFlow::Flow](./aws-resource-appflow-flow.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-tag-value */
  Value: string | Intrinsic
}

/**
 * The `GlueDataCatalog` property type specifies Property description not available. for an [AWS::AppFlow::Flow](./aws-resource-appflow-flow.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface GlueDataCatalog {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t]*`
   * - _Minimum_: `0`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-gluedatacatalog-databasename */
  DatabaseName: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:aws:iam:.*:[0-9]+:.*`
   * - _Minimum_: `0`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-gluedatacatalog-rolearn */
  RoleArn: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t]*`
   * - _Minimum_: `0`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-gluedatacatalog-tableprefix */
  TablePrefix: string | Intrinsic
}

/**
 * Specifies the configuration used when importing incremental records from the source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface IncrementalPullConfig {
  /**
   * - A field that specifies the date time or timestamp field as the criteria to use when importing incremental records from the source.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-incrementalpullconfig-datetimetypefieldname */
  DatetimeTypeFieldName?: string | Intrinsic
}

/**
 * The operation to be performed on the provided source fields.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface ConnectorOperator {
  /**
   * - The operation to be performed on the provided Amplitude source fields.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `BETWEEN`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-connectoroperator-amplitude */
  Amplitude?: string | Intrinsic
  /**
   * - Operators supported by the custom connector.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PROJECTION | LESS_THAN | GREATER_THAN | CONTAINS | BETWEEN | LESS_THAN_OR_EQUAL_TO | GREATER_THAN_OR_EQUAL_TO | EQUAL_TO | NOT_EQUAL_TO | ADDITION | MULTIPLICATION | DIVISION | SUBTRACTION | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NON_NEGATIVE | VALIDATE_NUMERIC | NO_OP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-connectoroperator-customconnector */
  CustomConnector?: string | Intrinsic
  /**
   * - The operation to be performed on the provided Datadog source fields.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PROJECTION | BETWEEN | EQUAL_TO | ADDITION | MULTIPLICATION | DIVISION | SUBTRACTION | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NON_NEGATIVE | VALIDATE_NUMERIC | NO_OP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-connectoroperator-datadog */
  Datadog?: string | Intrinsic
  /**
   * - The operation to be performed on the provided Dynatrace source fields.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PROJECTION | BETWEEN | EQUAL_TO | ADDITION | MULTIPLICATION | DIVISION | SUBTRACTION | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NON_NEGATIVE | VALIDATE_NUMERIC | NO_OP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-connectoroperator-dynatrace */
  Dynatrace?: string | Intrinsic
  /**
   * - The operation to be performed on the provided Google Analytics source fields.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PROJECTION | BETWEEN`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-connectoroperator-googleanalytics */
  GoogleAnalytics?: string | Intrinsic
  /**
   * - The operation to be performed on the provided Infor Nexus source fields.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PROJECTION | BETWEEN | EQUAL_TO | ADDITION | MULTIPLICATION | DIVISION | SUBTRACTION | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NON_NEGATIVE | VALIDATE_NUMERIC | NO_OP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-connectoroperator-infornexus */
  InforNexus?: string | Intrinsic
  /**
   * - The operation to be performed on the provided Marketo source fields.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PROJECTION | LESS_THAN | GREATER_THAN | BETWEEN | ADDITION | MULTIPLICATION | DIVISION | SUBTRACTION | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NON_NEGATIVE | VALIDATE_NUMERIC | NO_OP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-connectoroperator-marketo */
  Marketo?: string | Intrinsic
  /**
   * - The operation to be performed on the provided Salesforce Pardot source fields.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PROJECTION | EQUAL_TO | NO_OP | ADDITION | MULTIPLICATION | DIVISION | SUBTRACTION | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NON_NEGATIVE | VALIDATE_NUMERIC`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-connectoroperator-pardot */
  Pardot?: string | Intrinsic
  /**
   * - The operation to be performed on the provided Amazon S3 source fields.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PROJECTION | LESS_THAN | GREATER_THAN | BETWEEN | LESS_THAN_OR_EQUAL_TO | GREATER_THAN_OR_EQUAL_TO | EQUAL_TO | NOT_EQUAL_TO | ADDITION | MULTIPLICATION | DIVISION | SUBTRACTION | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NON_NEGATIVE | VALIDATE_NUMERIC | NO_OP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-connectoroperator-s3 */
  S3?: string | Intrinsic
  /**
   * - The operation to be performed on the provided Salesforce source fields.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PROJECTION | LESS_THAN | CONTAINS | GREATER_THAN | BETWEEN | LESS_THAN_OR_EQUAL_TO | GREATER_THAN_OR_EQUAL_TO | EQUAL_TO | NOT_EQUAL_TO | ADDITION | MULTIPLICATION | DIVISION | SUBTRACTION | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NON_NEGATIVE | VALIDATE_NUMERIC | NO_OP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-connectoroperator-salesforce */
  Salesforce?: string | Intrinsic
  /**
   * - The operation to be performed on the provided SAPOData source fields.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PROJECTION | LESS_THAN | CONTAINS | GREATER_THAN | BETWEEN | LESS_THAN_OR_EQUAL_TO | GREATER_THAN_OR_EQUAL_TO | EQUAL_TO | NOT_EQUAL_TO | ADDITION | MULTIPLICATION | DIVISION | SUBTRACTION | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NON_NEGATIVE | VALIDATE_NUMERIC | NO_OP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-connectoroperator-sapodata */
  SAPOData?: string | Intrinsic
  /**
   * - The operation to be performed on the provided ServiceNow source fields.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PROJECTION | LESS_THAN | CONTAINS | GREATER_THAN | BETWEEN | LESS_THAN_OR_EQUAL_TO | GREATER_THAN_OR_EQUAL_TO | EQUAL_TO | NOT_EQUAL_TO | ADDITION | MULTIPLICATION | DIVISION | SUBTRACTION | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NON_NEGATIVE | VALIDATE_NUMERIC | NO_OP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-connectoroperator-servicenow */
  ServiceNow?: string | Intrinsic
  /**
   * - The operation to be performed on the provided Singular source fields.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PROJECTION | EQUAL_TO | ADDITION | MULTIPLICATION | DIVISION | SUBTRACTION | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NON_NEGATIVE | VALIDATE_NUMERIC | NO_OP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-connectoroperator-singular */
  Singular?: string | Intrinsic
  /**
   * - The operation to be performed on the provided Slack source fields.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PROJECTION | BETWEEN | EQUAL_TO | ADDITION | MULTIPLICATION | DIVISION | SUBTRACTION | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NON_NEGATIVE | VALIDATE_NUMERIC | NO_OP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-connectoroperator-slack */
  Slack?: string | Intrinsic
  /**
   * - The operation to be performed on the provided Trend Micro source fields.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PROJECTION | EQUAL_TO | ADDITION | MULTIPLICATION | DIVISION | SUBTRACTION | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NON_NEGATIVE | VALIDATE_NUMERIC | NO_OP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-connectoroperator-trendmicro */
  Trendmicro?: string | Intrinsic
  /**
   * - The operation to be performed on the provided Veeva source fields.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PROJECTION | LESS_THAN | GREATER_THAN | BETWEEN | LESS_THAN_OR_EQUAL_TO | GREATER_THAN_OR_EQUAL_TO | EQUAL_TO | NOT_EQUAL_TO | ADDITION | MULTIPLICATION | DIVISION | SUBTRACTION | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NON_NEGATIVE | VALIDATE_NUMERIC | NO_OP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-connectoroperator-veeva */
  Veeva?: string | Intrinsic
  /**
   * - The operation to be performed on the provided Zendesk source fields.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PROJECTION | GREATER_THAN | ADDITION | MULTIPLICATION | DIVISION | SUBTRACTION | MASK_ALL | MASK_FIRST_N | MASK_LAST_N | VALIDATE_NON_NULL | VALIDATE_NON_ZERO | VALIDATE_NON_NEGATIVE | VALIDATE_NUMERIC | NO_OP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-connectoroperator-zendesk */
  Zendesk?: string | Intrinsic
}

/**
 * A map used to store task-related information. The execution service looks for particular information based on the `TaskType`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface TaskPropertiesObject {
  /**
   * - The task property key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `VALUE | VALUES | DATA_TYPE | UPPER_BOUND | LOWER_BOUND | SOURCE_DATA_TYPE | DESTINATION_DATA_TYPE | VALIDATION_ACTION | MASK_VALUE | MASK_LENGTH | TRUNCATE_LENGTH | MATH_OPERATION_FIELDS_ORDER | CONCAT_FORMAT | SUBFIELD_CATEGORY_MAP | EXCLUDE_SOURCE_FIELDS_LIST | INCLUDE_NEW_FIELDS | ORDERED_PARTITION_KEYS_LIST`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-taskpropertiesobject-key */
  Key: string | Intrinsic
  /**
   * - The task property value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.+`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-taskpropertiesobject-value */
  Value: string | Intrinsic
}

/**
 * Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the `Scheduled` trigger type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface ScheduledTriggerProperties {
  /**
   * - Specifies whether a scheduled flow has an incremental data transfer or a complete data transfer for each flow run.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `Incremental | Complete`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-scheduledtriggerproperties-datapullmode */
  DataPullMode?: string | Intrinsic
  /**
   * - Specifies the date range for the records to import from the connector in the first flow run.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-scheduledtriggerproperties-firstexecutionfrom */
  FirstExecutionFrom?: number | Intrinsic
  /**
   * - Defines how many times a scheduled flow fails consecutively before Amazon AppFlow deactivates it.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-scheduledtriggerproperties-flowerrordeactivationthreshold */
  FlowErrorDeactivationThreshold?: number | Intrinsic
  /**
   * - The time at which the scheduled flow ends. The time is formatted as a timestamp that follows the ISO 8601 standard, such as `2022-04-27T13:00:00-07:00`.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-scheduledtriggerproperties-scheduleendtime */
  ScheduleEndTime?: number | Intrinsic
  /**
   * - The scheduling expression that determines the rate at which the schedule will run, for example `rate(5minutes)`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-scheduledtriggerproperties-scheduleexpression */
  ScheduleExpression: string | Intrinsic
  /**
   * - Specifies the optional offset that is added to the time interval for a schedule-triggered flow.
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `0`
   * - _Maximum_: `36000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-scheduledtriggerproperties-scheduleoffset */
  ScheduleOffset?: number | Intrinsic
  /**
   * - The time at which the scheduled flow starts. The time is formatted as a timestamp that follows the ISO 8601 standard, such as `2022-04-26T13:00:00-07:00`.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-scheduledtriggerproperties-schedulestarttime */
  ScheduleStartTime?: number | Intrinsic
  /**
   * - Specifies the time zone used when referring to the dates and times of a scheduled flow, such as `America/New_York`. This time zone is only a descriptive label. It doesn't affect how Amazon AppFlow interprets the timestamps that you specify to schedule the flow.
   * - If you want to schedule a flow by using times in a particular time zone, indicate the time zone as a UTC offset in your timestamps. For example, the UTC offsets for the `America/New_York` timezone are `-04:00` EDT and `-05:00 EST`.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-scheduledtriggerproperties-timezone */
  TimeZone?: string | Intrinsic
}

/**
 * The properties that are applied when Amazon EventBridge is being used as a destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface EventBridgeDestinationProperties {
  /**
   * - The object specified in the Amplitude flow source.
   * - _Required_: No
   * - _Type_: [ErrorHandlingConfig](./aws-properties-appflow-flow-errorhandlingconfig.html)
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-eventbridgedestinationproperties-errorhandlingconfig */
  ErrorHandlingConfig?: ErrorHandlingConfig
  /**
   * - The object specified in the Amazon EventBridge flow destination.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-eventbridgedestinationproperties-object */
  Object: string | Intrinsic
}

/**
 * The properties that are applied when Amazon Lookout for Metrics is used as a destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface LookoutMetricsDestinationProperties {
  /**
   * - The object specified in the Amazon Lookout for Metrics flow destination.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-lookoutmetricsdestinationproperties-object */
  Object?: string | Intrinsic
}

/**
 * The properties that Amazon AppFlow applies when you use Marketo as a flow destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface MarketoDestinationProperties {
  /**
   * - The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
   * - _Required_: No
   * - _Type_: [ErrorHandlingConfig](./aws-properties-appflow-flow-errorhandlingconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-marketodestinationproperties-errorhandlingconfig */
  ErrorHandlingConfig?: ErrorHandlingConfig
  /**
   * - The object specified in the Marketo flow destination.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-marketodestinationproperties-object */
  Object: string | Intrinsic
}

/**
 * The properties that are applied when Amazon Redshift is being used as a destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface RedshiftDestinationProperties {
  /**
   * - The object key for the bucket in which Amazon AppFlow places the destination files.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-redshiftdestinationproperties-bucketprefix */
  BucketPrefix?: string | Intrinsic
  /**
   * - The settings that determine how Amazon AppFlow handles an error when placing data in the Amazon Redshift destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
   * - _Required_: No
   * - _Type_: [ErrorHandlingConfig](./aws-properties-appflow-flow-errorhandlingconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-redshiftdestinationproperties-errorhandlingconfig */
  ErrorHandlingConfig?: ErrorHandlingConfig
  /**
   * - The intermediate bucket that Amazon AppFlow uses when moving data into Amazon Redshift.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Minimum_: `3`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-redshiftdestinationproperties-intermediatebucketname */
  IntermediateBucketName: string | Intrinsic
  /**
   * - The object specified in the Amazon Redshift flow destination.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-redshiftdestinationproperties-object */
  Object: string | Intrinsic
}

/**
 * The properties that are applied when Salesforce is being used as a destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface SalesforceDestinationProperties {
  /**
   * - Specifies which Salesforce API is used by Amazon AppFlow when your flow transfers data to Salesforce.
   * - _Required_: No
   * - _Type_: [String](./aws-properties-appflow-flow-datatransferapi.html)
   * - _Allowed values_: `AUTOMATIC | BULKV2 | REST_SYNC`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-salesforcedestinationproperties-datatransferapi */
  DataTransferApi?: string | Intrinsic
  /**
   * - The settings that determine how Amazon AppFlow handles an error when placing data in the Salesforce destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
   * - _Required_: No
   * - _Type_: [ErrorHandlingConfig](./aws-properties-appflow-flow-errorhandlingconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-salesforcedestinationproperties-errorhandlingconfig */
  ErrorHandlingConfig?: ErrorHandlingConfig
  /**
   * - The name of the field that Amazon AppFlow uses as an ID when performing a write operation such as update or delete.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-salesforcedestinationproperties-idfieldnames */
  IdFieldNames?: (string | Intrinsic)[]
  /**
   * - The object specified in the Salesforce flow destination.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-salesforcedestinationproperties-object */
  Object: string | Intrinsic
  /**
   * - This specifies the type of write operation to be performed in Salesforce. When the value is `UPSERT`, then `idFieldNames` is required.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `INSERT | UPSERT | UPDATE | DELETE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-salesforcedestinationproperties-writeoperationtype */
  WriteOperationType?: string | Intrinsic
}

/**
 * The properties that are applied when Snowflake is being used as a destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface SnowflakeDestinationProperties {
  /**
   * - The object key for the destination bucket in which Amazon AppFlow places the files.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-snowflakedestinationproperties-bucketprefix */
  BucketPrefix?: string | Intrinsic
  /**
   * - The settings that determine how Amazon AppFlow handles an error when placing data in the Snowflake destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
   * - _Required_: No
   * - _Type_: [ErrorHandlingConfig](./aws-properties-appflow-flow-errorhandlingconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-snowflakedestinationproperties-errorhandlingconfig */
  ErrorHandlingConfig?: ErrorHandlingConfig
  /**
   * - The intermediate bucket that Amazon AppFlow uses when moving data into Snowflake.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Minimum_: `3`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-snowflakedestinationproperties-intermediatebucketname */
  IntermediateBucketName: string | Intrinsic
  /**
   * - The object specified in the Snowflake flow destination.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-snowflakedestinationproperties-object */
  Object: string | Intrinsic
}

/**
 * The properties that are applied when Zendesk is used as a destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface ZendeskDestinationProperties {
  /**
   * - The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
   * - _Required_: No
   * - _Type_: [ErrorHandlingConfig](./aws-properties-appflow-flow-errorhandlingconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-zendeskdestinationproperties-errorhandlingconfig */
  ErrorHandlingConfig?: ErrorHandlingConfig
  /**
   * - A list of field names that can be used as an ID field when performing a write operation.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-zendeskdestinationproperties-idfieldnames */
  IdFieldNames?: (string | Intrinsic)[]
  /**
   * - The object specified in the Zendesk flow destination.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-zendeskdestinationproperties-object */
  Object: string | Intrinsic
  /**
   * - The possible write operations in the destination connector. When this value is not provided, this defaults to the `INSERT` operation.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `INSERT | UPSERT | UPDATE | DELETE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-zendeskdestinationproperties-writeoperationtype */
  WriteOperationType?: string | Intrinsic
}

/**
 * The properties that are applied when Amplitude is being used as a source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface AmplitudeSourceProperties {
  /**
   * - The object specified in the Amplitude flow source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-amplitudesourceproperties-object */
  Object: string | Intrinsic
}

/**
 * The properties that are applied when Datadog is being used as a source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface DatadogSourceProperties {
  /**
   * - The object specified in the Datadog flow source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-datadogsourceproperties-object */
  Object: string | Intrinsic
}

/**
 * The properties that are applied when Dynatrace is being used as a source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface DynatraceSourceProperties {
  /**
   * - The object specified in the Dynatrace flow source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-dynatracesourceproperties-object */
  Object: string | Intrinsic
}

/**
 * The properties that are applied when Google Analytics is being used as a source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface GoogleAnalyticsSourceProperties {
  /**
   * - The object specified in the Google Analytics flow source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-googleanalyticssourceproperties-object */
  Object: string | Intrinsic
}

/**
 * The properties that are applied when Infor Nexus is being used as a source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface InforNexusSourceProperties {
  /**
   * - The object specified in the Infor Nexus flow source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-infornexussourceproperties-object */
  Object: string | Intrinsic
}

/**
 * The properties that are applied when Marketo is being used as a source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface MarketoSourceProperties {
  /**
   * - The object specified in the Marketo flow source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-marketosourceproperties-object */
  Object: string | Intrinsic
}

/**
 * The properties that are applied when Salesforce Pardot is being used as a source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface PardotSourceProperties {
  /**
   * - The object specified in the Salesforce Pardot flow source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-pardotsourceproperties-object */
  Object: string | Intrinsic
}

/**
 * The properties that are applied when Salesforce is being used as a source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface SalesforceSourceProperties {
  /**
   * - Specifies which Salesforce API is used by Amazon AppFlow when your flow transfers data from Salesforce.
   * - _Required_: No
   * - _Type_: [String](./aws-properties-appflow-flow-datatransferapi.html)
   * - _Allowed values_: `AUTOMATIC | BULKV2 | REST_SYNC`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-salesforcesourceproperties-datatransferapi */
  DataTransferApi?: string | Intrinsic
  /**
   * - The flag that enables dynamic fetching of new (recently added) fields in the Salesforce objects while running a flow.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-salesforcesourceproperties-enabledynamicfieldupdate */
  EnableDynamicFieldUpdate?: boolean | Intrinsic
  /**
   * - Indicates whether Amazon AppFlow includes deleted files in the flow run.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-salesforcesourceproperties-includedeletedrecords */
  IncludeDeletedRecords?: boolean | Intrinsic
  /**
   * - The object specified in the Salesforce flow source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-salesforcesourceproperties-object */
  Object: string | Intrinsic
}

/**
 * The properties that are applied when ServiceNow is being used as a source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface ServiceNowSourceProperties {
  /**
   * - The object specified in the ServiceNow flow source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-servicenowsourceproperties-object */
  Object: string | Intrinsic
}

/**
 * The properties that are applied when Singular is being used as a source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface SingularSourceProperties {
  /**
   * - The object specified in the Singular flow source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-singularsourceproperties-object */
  Object: string | Intrinsic
}

/**
 * The properties that are applied when Slack is being used as a source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface SlackSourceProperties {
  /**
   * - The object specified in the Slack flow source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-slacksourceproperties-object */
  Object: string | Intrinsic
}

/**
 * The properties that are applied when using Trend Micro as a flow source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface TrendmicroSourceProperties {
  /**
   * - The object specified in the Trend Micro flow source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-trendmicrosourceproperties-object */
  Object: string | Intrinsic
}

/**
 * The properties that are applied when using Veeva as a flow source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface VeevaSourceProperties {
  /**
   * - The document type specified in the Veeva document extract flow.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[\s\w_-]+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-veevasourceproperties-documenttype */
  DocumentType?: string | Intrinsic
  /**
   * - Boolean value to include All Versions of files in Veeva document extract flow.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-veevasourceproperties-includeallversions */
  IncludeAllVersions?: boolean | Intrinsic
  /**
   * - Boolean value to include file renditions in Veeva document extract flow.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-veevasourceproperties-includerenditions */
  IncludeRenditions?: boolean | Intrinsic
  /**
   * - Boolean value to include source files in Veeva document extract flow.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-veevasourceproperties-includesourcefiles */
  IncludeSourceFiles?: boolean | Intrinsic
  /**
   * - The object specified in the Veeva flow source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-veevasourceproperties-object */
  Object: string | Intrinsic
}

/**
 * The properties that are applied when using Zendesk as a flow source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface ZendeskSourceProperties {
  /**
   * - The object specified in the Zendesk flow source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-zendesksourceproperties-object */
  Object: string | Intrinsic
}

/**
 * The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface ErrorHandlingConfig {
  /**
   * - Specifies the name of the Amazon S3 bucket.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Minimum_: `3`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-errorhandlingconfig-bucketname */
  BucketName?: string | Intrinsic
  /**
   * - Specifies the Amazon S3 bucket prefix.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-errorhandlingconfig-bucketprefix */
  BucketPrefix?: string | Intrinsic
  /**
   * - Specifies if the flow should fail after the first instance of a failure when attempting to place data in the destination.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-errorhandlingconfig-failonfirsterror */
  FailOnFirstError?: boolean | Intrinsic
}

/**
 * Determines how Amazon AppFlow handles the success response that it gets from the connector after placing data.
 * For example, this setting would determine where to write the response from the destination connector upon a successful insert operation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface SuccessResponseHandlingConfig {
  /**
   * - The name of the Amazon S3 bucket.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Minimum_: `3`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-successresponsehandlingconfig-bucketname */
  BucketName?: string | Intrinsic
  /**
   * - The Amazon S3 bucket prefix.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-successresponsehandlingconfig-bucketprefix */
  BucketPrefix?: string | Intrinsic
}

/**
 * The configuration that determines how Amazon AppFlow formats the flow output data when Upsolver is used as the destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface UpsolverS3OutputFormatConfig {
  /**
   * - The aggregation settings that you can use to customize the output format of your flow data.
   * - _Required_: No
   * - _Type_: [AggregationConfig](./aws-properties-appflow-flow-aggregationconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-upsolvers3outputformatconfig-aggregationconfig */
  AggregationConfig?: AggregationConfig
  /**
   * - Indicates the file type that Amazon AppFlow places in the Upsolver Amazon S3 bucket.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CSV | JSON | PARQUET`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-upsolvers3outputformatconfig-filetype */
  FileType?: string | Intrinsic
  /**
   * - Specifies elements that Amazon AppFlow includes in the file and folder names in the flow destination.
   * - _Required_: Yes
   * - _Type_: [PrefixConfig](./aws-properties-appflow-flow-prefixconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-upsolvers3outputformatconfig-prefixconfig */
  PrefixConfig: PrefixConfig
}

/**
 * The API of the connector application that Amazon AppFlow uses to transfer your data.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface DataTransferApi {
  /**
   * - The name of the connector application API.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[\w/-]+`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-datatransferapi-name */
  Name: string | Intrinsic
  /**
   * - You can specify one of the following types:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `SYNC | ASYNC | AUTOMATIC`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-datatransferapi-type */
  Type: string | Intrinsic
}

/**
 * When you use Amazon S3 as the source, the configuration format that you provide the flow input data.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface S3InputFormatConfig {
  /**
   * - The file type that Amazon AppFlow gets from your Amazon S3 bucket.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CSV | JSON`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-s3inputformatconfig-s3inputfiletype */
  S3InputFileType?: string | Intrinsic
}

/**
 * The `SAPODataPaginationConfig` property type specifies Property description not available. for an [AWS::AppFlow::Flow](./aws-resource-appflow-flow.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface SAPODataPaginationConfig {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `10000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sapodatapaginationconfig-maxpagesize */
  maxPageSize: number | Intrinsic
}

/**
 * The `SAPODataParallelismConfig` property type specifies Property description not available. for an [AWS::AppFlow::Flow](./aws-resource-appflow-flow.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface SAPODataParallelismConfig {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sapodataparallelismconfig-maxparallelism */
  maxParallelism: number | Intrinsic
}

/**
 * The aggregation settings that you can use to customize the output format of your flow data.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface AggregationConfig {
  /**
   * - Specifies whether Amazon AppFlow aggregates the flow records into a single file, or leave them unaggregated.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `None | SingleFile`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-aggregationconfig-aggregationtype */
  AggregationType?: string | Intrinsic
  /**
   * - The desired file size, in MB, for each output file that Amazon AppFlow writes to the flow destination. For each file, Amazon AppFlow attempts to achieve the size that you specify. The actual file sizes might differ from this target based on the number and size of the records that each file contains.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-aggregationconfig-targetfilesize */
  TargetFileSize?: number | Intrinsic
}

/**
 * Specifies elements that Amazon AppFlow includes in the file and folder names in the flow destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface PrefixConfig {
  /**
   * - Specifies whether the destination file path includes either or both of the following elements:
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-prefixconfig-pathprefixhierarchy */
  PathPrefixHierarchy?: (string | Intrinsic)[]
  /**
   * - Determines the level of granularity for the date and time that's included in the prefix.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `YEAR | MONTH | DAY | HOUR | MINUTE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-prefixconfig-prefixformat */
  PrefixFormat?: string | Intrinsic
  /**
   * - Determines the format of the prefix, and whether it applies to the file name, file path, or both.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `FILENAME | PATH | PATH_AND_FILENAME`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-prefixconfig-prefixtype */
  PrefixType?: string | Intrinsic
}

/**
 * Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface MetadataCatalogConfig {
  /**
   * - Specifies the configuration that Amazon AppFlow uses when it catalogs your data with the AWS Glue Data Catalog.
   * - _Required_: No
   * - _Type_: [GlueDataCatalog](./aws-properties-appflow-flow-gluedatacatalog.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-metadatacatalogconfig-gluedatacatalog */
  GlueDataCatalog?: GlueDataCatalog
}

/**
 * A class for modeling different type of tasks. Task implementation varies based on the `TaskType`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface Task {
  /**
   * - The operation to be performed on the provided source fields.
   * - _Required_: No
   * - _Type_: [ConnectorOperator](./aws-properties-appflow-flow-connectoroperator.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-task-connectoroperator */
  ConnectorOperator?: ConnectorOperator
  /**
   * - A field in a destination connector, or a field value against which Amazon AppFlow validates a source field.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-task-destinationfield */
  DestinationField?: string | Intrinsic
  /**
   * - The source fields to which a particular task is applied.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-task-sourcefields */
  SourceFields: (string | Intrinsic)[]
  /**
   * - A map used to store task-related information. The execution service looks for particular information based on the `TaskType`.
   * - _Required_: No
   * - _Type_: Array of [TaskPropertiesObject](./aws-properties-appflow-flow-taskpropertiesobject.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-task-taskproperties */
  TaskProperties?: TaskPropertiesObject[]
  /**
   * - Specifies the particular task implementation that Amazon AppFlow performs.
   * - _Allowed values_: `Arithmetic` | `Filter` | `Map` | `Map_all` | `Mask` | `Merge` | `Truncate` | `Validate`
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `Arithmetic | Filter | Map | Map_all | Mask | Merge | Passthrough | Truncate | Validate | Partition`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-task-tasktype */
  TaskType: string | Intrinsic
}

/**
 * The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface TriggerConfig {
  /**
   * - Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the `Scheduled` trigger type.
   * - _Required_: No
   * - _Type_: [ScheduledTriggerProperties](./aws-properties-appflow-flow-scheduledtriggerproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-triggerconfig-triggerproperties */
  TriggerProperties?: ScheduledTriggerProperties
  /**
   * - Specifies the type of flow trigger. This can be `OnDemand`, `Scheduled`, or `Event`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `Scheduled | Event | OnDemand`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-triggerconfig-triggertype */
  TriggerType: string | Intrinsic
}

/**
 * The properties that are applied when the custom connector is being used as a destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface CustomConnectorDestinationProperties {
  /**
   * - The custom properties that are specific to the connector when it's used as a destination in the flow.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `^[\w]{1,2048}$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-customconnectordestinationproperties-customproperties */
  CustomProperties?: Record<string, string | Intrinsic>
  /**
   * - The entity specified in the custom connector as a destination in the flow.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-customconnectordestinationproperties-entityname */
  EntityName: string | Intrinsic
  /**
   * - The settings that determine how Amazon AppFlow handles an error when placing data in the custom connector as destination.
   * - _Required_: No
   * - _Type_: [ErrorHandlingConfig](./aws-properties-appflow-flow-errorhandlingconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-customconnectordestinationproperties-errorhandlingconfig */
  ErrorHandlingConfig?: ErrorHandlingConfig
  /**
   * - The name of the field that Amazon AppFlow uses as an ID when performing a write operation such as update, delete, or upsert.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-customconnectordestinationproperties-idfieldnames */
  IdFieldNames?: (string | Intrinsic)[]
  /**
   * - Specifies the type of write operation to be performed in the custom connector when it's used as destination.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `INSERT | UPSERT | UPDATE | DELETE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-customconnectordestinationproperties-writeoperationtype */
  WriteOperationType?: string | Intrinsic
}

/**
 * The properties that are applied when using SAPOData as a flow destination
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface SAPODataDestinationProperties {
  /**
   * - The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. `ErrorHandlingConfig` is a part of the destination connector details.
   * - _Required_: No
   * - _Type_: [ErrorHandlingConfig](./aws-properties-appflow-flow-errorhandlingconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sapodatadestinationproperties-errorhandlingconfig */
  ErrorHandlingConfig?: ErrorHandlingConfig
  /**
   * - A list of field names that can be used as an ID field when performing a write operation.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sapodatadestinationproperties-idfieldnames */
  IdFieldNames?: (string | Intrinsic)[]
  /**
   * - The object path specified in the SAPOData flow destination.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sapodatadestinationproperties-objectpath */
  ObjectPath: string | Intrinsic
  /**
   * - Determines how Amazon AppFlow handles the success response that it gets from the connector after placing data.
   * - For example, this setting would determine where to write the response from a destination connector upon a successful insert operation.
   * - _Required_: No
   * - _Type_: [SuccessResponseHandlingConfig](./aws-properties-appflow-flow-successresponsehandlingconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sapodatadestinationproperties-successresponsehandlingconfig */
  SuccessResponseHandlingConfig?: SuccessResponseHandlingConfig
  /**
   * - The possible write operations in the destination connector. When this value is not provided, this defaults to the `INSERT` operation.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `INSERT | UPSERT | UPDATE | DELETE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sapodatadestinationproperties-writeoperationtype */
  WriteOperationType?: string | Intrinsic
}

/**
 * The properties that are applied when Upsolver is used as a destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface UpsolverDestinationProperties {
  /**
   * - The Upsolver Amazon S3 bucket name in which Amazon AppFlow places the transferred data.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(upsolver-appflow)\S*`
   * - _Minimum_: `16`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-upsolverdestinationproperties-bucketname */
  BucketName: string | Intrinsic
  /**
   * - The object key for the destination Upsolver Amazon S3 bucket in which Amazon AppFlow places the files.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-upsolverdestinationproperties-bucketprefix */
  BucketPrefix?: string | Intrinsic
  /**
   * - The configuration that determines how data is formatted when Upsolver is used as the flow destination.
   * - _Required_: Yes
   * - _Type_: [UpsolverS3OutputFormatConfig](./aws-properties-appflow-flow-upsolvers3outputformatconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-upsolverdestinationproperties-s3outputformatconfig */
  S3OutputFormatConfig: UpsolverS3OutputFormatConfig
}

/**
 * The properties that are applied when the custom connector is being used as a source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface CustomConnectorSourceProperties {
  /**
   * - Custom properties that are required to use the custom connector as a source.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `^[\w]{1,2048}$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-customconnectorsourceproperties-customproperties */
  CustomProperties?: Record<string, string | Intrinsic>
  /**
   * - The API of the connector application that Amazon AppFlow uses to transfer your data.
   * - _Required_: No
   * - _Type_: [DataTransferApi](./aws-properties-appflow-flow-datatransferapi.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-customconnectorsourceproperties-datatransferapi */
  DataTransferApi?: DataTransferApi
  /**
   * - The entity specified in the custom connector as a source in the flow.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-customconnectorsourceproperties-entityname */
  EntityName: string | Intrinsic
}

/**
 * The properties that are applied when Amazon S3 is being used as the flow source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-s3sourceproperties-bucketname */
  BucketName: string | Intrinsic
  /**
   * - The object key for the Amazon S3 bucket in which the source files are stored.
   * - _Required_: Yes
   * - _Type_: String
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-s3sourceproperties-bucketprefix */
  BucketPrefix: string | Intrinsic
  /**
   * - When you use Amazon S3 as the source, the configuration format that you provide the flow input data.
   * - _Required_: No
   * - _Type_: [S3InputFormatConfig](./aws-properties-appflow-flow-s3inputformatconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-s3sourceproperties-s3inputformatconfig */
  S3InputFormatConfig?: S3InputFormatConfig
}

/**
 * The properties that are applied when using SAPOData as a flow source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface SAPODataSourceProperties {
  /**
   * - The object path specified in the SAPOData flow source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sapodatasourceproperties-objectpath */
  ObjectPath: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [SAPODataPaginationConfig](./aws-properties-appflow-flow-sapodatapaginationconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sapodatasourceproperties-paginationconfig */
  paginationConfig?: SAPODataPaginationConfig
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [SAPODataParallelismConfig](./aws-properties-appflow-flow-sapodataparallelismconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sapodatasourceproperties-parallelismconfig */
  parallelismConfig?: SAPODataParallelismConfig
}

/**
 * The configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface S3OutputFormatConfig {
  /**
   * - The aggregation settings that you can use to customize the output format of your flow data.
   * - _Required_: No
   * - _Type_: [AggregationConfig](./aws-properties-appflow-flow-aggregationconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-s3outputformatconfig-aggregationconfig */
  AggregationConfig?: AggregationConfig
  /**
   * - Indicates the file type that Amazon AppFlow places in the Amazon S3 bucket.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CSV | JSON | PARQUET`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-s3outputformatconfig-filetype */
  FileType?: string | Intrinsic
  /**
   * - Determines the prefix that Amazon AppFlow applies to the folder name in the Amazon S3 bucket. You can name folders according to the flow frequency and date.
   * - _Required_: No
   * - _Type_: [PrefixConfig](./aws-properties-appflow-flow-prefixconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-s3outputformatconfig-prefixconfig */
  PrefixConfig?: PrefixConfig
  /**
   * - If your file output format is Parquet, use this parameter to set whether Amazon AppFlow preserves the data types in your source data when it writes the output to Amazon S3.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-s3outputformatconfig-preservesourcedatatyping */
  PreserveSourceDataTyping?: boolean | Intrinsic
}

/**
 * Specifies the information that is required to query a particular connector.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface SourceConnectorProperties {
  /**
   * - Specifies the information that is required for querying Amplitude.
   * - _Required_: No
   * - _Type_: [AmplitudeSourceProperties](./aws-properties-appflow-flow-amplitudesourceproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceconnectorproperties-amplitude */
  Amplitude?: AmplitudeSourceProperties
  /**
   * - The properties that are applied when the custom connector is being used as a source.
   * - _Required_: No
   * - _Type_: [CustomConnectorSourceProperties](./aws-properties-appflow-flow-customconnectorsourceproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceconnectorproperties-customconnector */
  CustomConnector?: CustomConnectorSourceProperties
  /**
   * - Specifies the information that is required for querying Datadog.
   * - _Required_: No
   * - _Type_: [DatadogSourceProperties](./aws-properties-appflow-flow-datadogsourceproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceconnectorproperties-datadog */
  Datadog?: DatadogSourceProperties
  /**
   * - Specifies the information that is required for querying Dynatrace.
   * - _Required_: No
   * - _Type_: [DynatraceSourceProperties](./aws-properties-appflow-flow-dynatracesourceproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceconnectorproperties-dynatrace */
  Dynatrace?: DynatraceSourceProperties
  /**
   * - Specifies the information that is required for querying Google Analytics.
   * - _Required_: No
   * - _Type_: [GoogleAnalyticsSourceProperties](./aws-properties-appflow-flow-googleanalyticssourceproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceconnectorproperties-googleanalytics */
  GoogleAnalytics?: GoogleAnalyticsSourceProperties
  /**
   * - Specifies the information that is required for querying Infor Nexus.
   * - _Required_: No
   * - _Type_: [InforNexusSourceProperties](./aws-properties-appflow-flow-infornexussourceproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceconnectorproperties-infornexus */
  InforNexus?: InforNexusSourceProperties
  /**
   * - Specifies the information that is required for querying Marketo.
   * - _Required_: No
   * - _Type_: [MarketoSourceProperties](./aws-properties-appflow-flow-marketosourceproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceconnectorproperties-marketo */
  Marketo?: MarketoSourceProperties
  /**
   * - Specifies the information that is required for querying Salesforce Pardot.
   * - _Required_: No
   * - _Type_: [PardotSourceProperties](./aws-properties-appflow-flow-pardotsourceproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceconnectorproperties-pardot */
  Pardot?: PardotSourceProperties
  /**
   * - Specifies the information that is required for querying Amazon S3.
   * - _Required_: No
   * - _Type_: [S3SourceProperties](./aws-properties-appflow-flow-s3sourceproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceconnectorproperties-s3 */
  S3?: S3SourceProperties
  /**
   * - Specifies the information that is required for querying Salesforce.
   * - _Required_: No
   * - _Type_: [SalesforceSourceProperties](./aws-properties-appflow-flow-salesforcesourceproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceconnectorproperties-salesforce */
  Salesforce?: SalesforceSourceProperties
  /**
   * - The properties that are applied when using SAPOData as a flow source.
   * - _Required_: No
   * - _Type_: [SAPODataSourceProperties](./aws-properties-appflow-flow-sapodatasourceproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceconnectorproperties-sapodata */
  SAPOData?: SAPODataSourceProperties
  /**
   * - Specifies the information that is required for querying ServiceNow.
   * - _Required_: No
   * - _Type_: [ServiceNowSourceProperties](./aws-properties-appflow-flow-servicenowsourceproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceconnectorproperties-servicenow */
  ServiceNow?: ServiceNowSourceProperties
  /**
   * - Specifies the information that is required for querying Singular.
   * - _Required_: No
   * - _Type_: [SingularSourceProperties](./aws-properties-appflow-flow-singularsourceproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceconnectorproperties-singular */
  Singular?: SingularSourceProperties
  /**
   * - Specifies the information that is required for querying Slack.
   * - _Required_: No
   * - _Type_: [SlackSourceProperties](./aws-properties-appflow-flow-slacksourceproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceconnectorproperties-slack */
  Slack?: SlackSourceProperties
  /**
   * - Specifies the information that is required for querying Trend Micro.
   * - _Required_: No
   * - _Type_: [TrendmicroSourceProperties](./aws-properties-appflow-flow-trendmicrosourceproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceconnectorproperties-trendmicro */
  Trendmicro?: TrendmicroSourceProperties
  /**
   * - Specifies the information that is required for querying Veeva.
   * - _Required_: No
   * - _Type_: [VeevaSourceProperties](./aws-properties-appflow-flow-veevasourceproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceconnectorproperties-veeva */
  Veeva?: VeevaSourceProperties
  /**
   * - Specifies the information that is required for querying Zendesk.
   * - _Required_: No
   * - _Type_: [ZendeskSourceProperties](./aws-properties-appflow-flow-zendesksourceproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceconnectorproperties-zendesk */
  Zendesk?: ZendeskSourceProperties
}

/**
 * The properties that are applied when Amazon S3 is used as a destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface S3DestinationProperties {
  /**
   * - The Amazon S3 bucket name in which Amazon AppFlow places the transferred data.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Minimum_: `3`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-s3destinationproperties-bucketname */
  BucketName: string | Intrinsic
  /**
   * - The object key for the destination bucket in which Amazon AppFlow places the files.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-s3destinationproperties-bucketprefix */
  BucketPrefix?: string | Intrinsic
  /**
   * - The configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination.
   * - _Required_: No
   * - _Type_: [S3OutputFormatConfig](./aws-properties-appflow-flow-s3outputformatconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-s3destinationproperties-s3outputformatconfig */
  S3OutputFormatConfig?: S3OutputFormatConfig
}

/**
 * Contains information about the configuration of the source connector used in the flow.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface SourceFlowConfig {
  /**
   * - The API version of the connector when it's used as a source in the flow.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceflowconfig-apiversion */
  ApiVersion?: string | Intrinsic
  /**
   * - The name of the connector profile. This name must be unique for each connector profile in the AWS account.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[\w/!@#+=.-]+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceflowconfig-connectorprofilename */
  ConnectorProfileName?: string | Intrinsic
  /**
   * - The type of connector, such as Salesforce, Amplitude, and so on.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `SAPOData | Salesforce | Pardot | Singular | Slack | Redshift | S3 | Marketo | Googleanalytics | Zendesk | Servicenow | Datadog | Trendmicro | Snowflake | Dynatrace | Infornexus | Amplitude | Veeva | CustomConnector | EventBridge | Upsolver | LookoutMetrics`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceflowconfig-connectortype */
  ConnectorType: string | Intrinsic
  /**
   * - Defines the configuration for a scheduled incremental data pull. If a valid configuration is provided, the fields specified in the configuration are used when querying for the incremental data pull.
   * - _Required_: No
   * - _Type_: [IncrementalPullConfig](./aws-properties-appflow-flow-incrementalpullconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceflowconfig-incrementalpullconfig */
  IncrementalPullConfig?: IncrementalPullConfig
  /**
   * - Specifies the information that is required to query a particular source connector.
   * - _Required_: Yes
   * - _Type_: [SourceConnectorProperties](./aws-properties-appflow-flow-sourceconnectorproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceflowconfig-sourceconnectorproperties */
  SourceConnectorProperties: SourceConnectorProperties
}

/**
 * This stores the information that is required to query a particular connector.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface DestinationConnectorProperties {
  /**
   * - The properties that are required to query the custom Connector.
   * - _Required_: No
   * - _Type_: [CustomConnectorDestinationProperties](./aws-properties-appflow-flow-customconnectordestinationproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-destinationconnectorproperties-customconnector */
  CustomConnector?: CustomConnectorDestinationProperties
  /**
   * - The properties required to query Amazon EventBridge.
   * - _Required_: No
   * - _Type_: [EventBridgeDestinationProperties](./aws-properties-appflow-flow-eventbridgedestinationproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-destinationconnectorproperties-eventbridge */
  EventBridge?: EventBridgeDestinationProperties
  /**
   * - The properties required to query Amazon Lookout for Metrics.
   * - _Required_: No
   * - _Type_: [LookoutMetricsDestinationProperties](./aws-properties-appflow-flow-lookoutmetricsdestinationproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-destinationconnectorproperties-lookoutmetrics */
  LookoutMetrics?: LookoutMetricsDestinationProperties
  /**
   * - The properties required to query Marketo.
   * - _Required_: No
   * - _Type_: [MarketoDestinationProperties](./aws-properties-appflow-flow-marketodestinationproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-destinationconnectorproperties-marketo */
  Marketo?: MarketoDestinationProperties
  /**
   * - The properties required to query Amazon Redshift.
   * - _Required_: No
   * - _Type_: [RedshiftDestinationProperties](./aws-properties-appflow-flow-redshiftdestinationproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-destinationconnectorproperties-redshift */
  Redshift?: RedshiftDestinationProperties
  /**
   * - The properties required to query Amazon S3.
   * - _Required_: No
   * - _Type_: [S3DestinationProperties](./aws-properties-appflow-flow-s3destinationproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-destinationconnectorproperties-s3 */
  S3?: S3DestinationProperties
  /**
   * - The properties required to query Salesforce.
   * - _Required_: No
   * - _Type_: [SalesforceDestinationProperties](./aws-properties-appflow-flow-salesforcedestinationproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-destinationconnectorproperties-salesforce */
  Salesforce?: SalesforceDestinationProperties
  /**
   * - The properties required to query SAPOData.
   * - _Required_: No
   * - _Type_: [SAPODataDestinationProperties](./aws-properties-appflow-flow-sapodatadestinationproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-destinationconnectorproperties-sapodata */
  SAPOData?: SAPODataDestinationProperties
  /**
   * - The properties required to query Snowflake.
   * - _Required_: No
   * - _Type_: [SnowflakeDestinationProperties](./aws-properties-appflow-flow-snowflakedestinationproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-destinationconnectorproperties-snowflake */
  Snowflake?: SnowflakeDestinationProperties
  /**
   * - The properties required to query Upsolver.
   * - _Required_: No
   * - _Type_: [UpsolverDestinationProperties](./aws-properties-appflow-flow-upsolverdestinationproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-destinationconnectorproperties-upsolver */
  Upsolver?: UpsolverDestinationProperties
  /**
   * - The properties required to query Zendesk.
   * - _Required_: No
   * - _Type_: [ZendeskDestinationProperties](./aws-properties-appflow-flow-zendeskdestinationproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-destinationconnectorproperties-zendesk */
  Zendesk?: ZendeskDestinationProperties
}

/**
 * Contains information about the configuration of destination connectors present in the flow.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface DestinationFlowConfig {
  /**
   * - The API version that the destination connector uses.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-destinationflowconfig-apiversion */
  ApiVersion?: string | Intrinsic
  /**
   * - The name of the connector profile. This name must be unique for each connector profile in the AWS account.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[\w/!@#+=.-]+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-destinationflowconfig-connectorprofilename */
  ConnectorProfileName?: string | Intrinsic
  /**
   * - The type of destination connector, such as Sales force, Amazon S3, and so on.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `SAPOData | Salesforce | Pardot | Singular | Slack | Redshift | S3 | Marketo | Googleanalytics | Zendesk | Servicenow | Datadog | Trendmicro | Snowflake | Dynatrace | Infornexus | Amplitude | Veeva | CustomConnector | EventBridge | Upsolver | LookoutMetrics`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-destinationflowconfig-connectortype */
  ConnectorType: string | Intrinsic
  /**
   * - This stores the information that is required to query a particular connector.
   * - _Required_: Yes
   * - _Type_: [DestinationConnectorProperties](./aws-properties-appflow-flow-destinationconnectorproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-destinationflowconfig-destinationconnectorproperties */
  DestinationConnectorProperties: DestinationConnectorProperties
}

/**
 * The `AWS::AppFlow::Flow` resource is an Amazon AppFlow resource type that specifies a new flow.
 * ###### Note
 *
 * If you want to use AWS CloudFormation to create a connector profile for connectors that implement OAuth (such as Salesforce, Slack, Zendesk, and Google Analytics), you must fetch the access and refresh tokens. You can do this by implementing your own UI for OAuth, or by retrieving the tokens from elsewhere. Alternatively, you can use the Amazon AppFlow console to create the connector profile, and then use that connector profile in the flow creation CloudFormation template.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html */

export interface AppFlowFlow extends ResourceAttributes {
  Type: 'AWS::AppFlow::Flow'
  Properties: {
    /**
     * - A user-entered description of the flow.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\w!@#\-.?,\s]*`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-description */
    Description?: string | Intrinsic
    /**
     * - The configuration that controls how Amazon AppFlow places data in the destination connector.
     * - _Required_: Yes
     * - _Type_: Array of [DestinationFlowConfig](./aws-properties-appflow-flow-destinationflowconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-destinationflowconfiglist */
    DestinationFlowConfigList: DestinationFlowConfig[]
    /**
     * - The specified name of the flow. Spaces are not allowed. Use underscores (\_) or hyphens (-) only.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9][\w!@#.-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-flowname */
    FlowName: string | Intrinsic
    /**
     * - Sets the status of the flow. You can specify one of the following values:
     * - If you omit the FlowStatus parameter, Amazon AppFlow creates the flow with a default status. The default status for on-demand flows is Active. The default status for scheduled and event-triggered flows is Draft, which means they’re not yet active.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Active | Suspended | Draft`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-flowstatus */
    FlowStatus?: string | Intrinsic
    /**
     * - The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:aws:kms:.*:[0-9]+:.*`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-kmsarn */
    KMSArn?: string | Intrinsic
    /**
     * - Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog.
     * - _Required_: No
     * - _Type_: [MetadataCatalogConfig](./aws-properties-appflow-flow-metadatacatalogconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-metadatacatalogconfig */
    MetadataCatalogConfig?: MetadataCatalogConfig
    /**
     * - Contains information about the configuration of the source connector used in the flow.
     * - _Required_: Yes
     * - _Type_: [SourceFlowConfig](./aws-properties-appflow-flow-sourceflowconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-sourceflowconfig */
    SourceFlowConfig: SourceFlowConfig
    /**
     * - The tags used to organize, track, or control access for your flow.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-appflow-flow-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-tags */
    Tags?: Tag[]
    /**
     * - A list of tasks that Amazon AppFlow performs while transferring the data in the flow run.
     * - _Required_: Yes
     * - _Type_: Array of [Task](./aws-properties-appflow-flow-task.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-tasks */
    Tasks: Task[]
    /**
     * - The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
     * - _Required_: Yes
     * - _Type_: [TriggerConfig](./aws-properties-appflow-flow-triggerconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-flow.html#cfn-appflow-flow-triggerconfig */
    TriggerConfig: TriggerConfig
  }
}
