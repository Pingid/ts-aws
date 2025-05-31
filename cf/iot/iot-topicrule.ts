import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A set of key/value pairs that are used to manage the resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface Tag {
    /**
     * - The tag's key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag's value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Describes an action that updates a CloudWatch alarm.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface CloudwatchAlarmAction {
    /**
     * - The CloudWatch alarm name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-cloudwatchalarmaction-alarmname */
    "AlarmName": string | Intrinsic;
    /**
     * - The IAM role that allows access to the CloudWatch alarm.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-cloudwatchalarmaction-rolearn */
    "RoleArn": string | Intrinsic;
    /**
     * - The reason for the alarm change.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-cloudwatchalarmaction-statereason */
    "StateReason": string | Intrinsic;
    /**
     * - The value of the alarm state. Acceptable values are: OK, ALARM, INSUFFICIENT\_DATA.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-cloudwatchalarmaction-statevalue */
    "StateValue": string | Intrinsic;
}

/**
 * Describes an action to write to a DynamoDB table.
 * The `tableName`, `hashKeyField`, and `rangeKeyField` values must match the values used when you created the table.
 * The `hashKeyValue` and `rangeKeyvalue` fields use a substitution template syntax. These templates provide data at runtime. The syntax is as follows: ${_sql-expression_}.
 * You can specify any valid expression in a WHERE or SELECT clause, including JSON properties, comparisons, calculations, and functions. For example, the following field uses the third level of the topic:
 * `"hashKeyValue": "${topic(3)}"`
 * The following field uses the timestamp:
 * `"rangeKeyValue": "${timestamp()}"`
 * For more information, see [DynamoDBv2 Action](https://docs.aws.amazon.com/iot/latest/developerguide/iot-rule-actions.html) in the _AWS IoT Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface DynamoDBAction {
    /**
     * - The hash key name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-dynamodbaction-hashkeyfield */
    "HashKeyField": string | Intrinsic;
    /**
     * - The hash key type. Valid values are "STRING" or "NUMBER"
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `STRING | NUMBER`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-dynamodbaction-hashkeytype */
    "HashKeyType"?: string | Intrinsic;
    /**
     * - The hash key value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-dynamodbaction-hashkeyvalue */
    "HashKeyValue": string | Intrinsic;
    /**
     * - The action payload. This name can be customized.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-dynamodbaction-payloadfield */
    "PayloadField"?: string | Intrinsic;
    /**
     * - The range key name.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-dynamodbaction-rangekeyfield */
    "RangeKeyField"?: string | Intrinsic;
    /**
     * - The range key type. Valid values are "STRING" or "NUMBER"
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `STRING | NUMBER`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-dynamodbaction-rangekeytype */
    "RangeKeyType"?: string | Intrinsic;
    /**
     * - The range key value.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-dynamodbaction-rangekeyvalue */
    "RangeKeyValue"?: string | Intrinsic;
    /**
     * - The ARN of the IAM role that grants access to the DynamoDB table.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-dynamodbaction-rolearn */
    "RoleArn": string | Intrinsic;
    /**
     * - The name of the DynamoDB table.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-dynamodbaction-tablename */
    "TableName": string | Intrinsic;
}

/**
 * Describes an action that updates a CloudWatch log.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface CloudwatchLogsAction {
    /**
     * - Indicates whether batches of log records will be extracted and uploaded into CloudWatch.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-cloudwatchlogsaction-batchmode */
    "BatchMode"?: boolean | Intrinsic;
    /**
     * - The CloudWatch log name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-cloudwatchlogsaction-loggroupname */
    "LogGroupName": string | Intrinsic;
    /**
     * - The IAM role that allows access to the CloudWatch log.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-cloudwatchlogsaction-rolearn */
    "RoleArn": string | Intrinsic;
}

/**
 * Describes an action that captures a CloudWatch metric.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface CloudwatchMetricAction {
    /**
     * - The CloudWatch metric name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-cloudwatchmetricaction-metricname */
    "MetricName": string | Intrinsic;
    /**
     * - The CloudWatch metric namespace name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-cloudwatchmetricaction-metricnamespace */
    "MetricNamespace": string | Intrinsic;
    /**
     * - An optional [Unix timestamp](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#about_timestamp).
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-cloudwatchmetricaction-metrictimestamp */
    "MetricTimestamp"?: string | Intrinsic;
    /**
     * - The [metric unit](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#Unit) supported by CloudWatch.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-cloudwatchmetricaction-metricunit */
    "MetricUnit": string | Intrinsic;
    /**
     * - The CloudWatch metric value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-cloudwatchmetricaction-metricvalue */
    "MetricValue": string | Intrinsic;
    /**
     * - The IAM role that allows access to the CloudWatch metric.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-cloudwatchmetricaction-rolearn */
    "RoleArn": string | Intrinsic;
}

/**
 * Describes an action that writes data to an Amazon OpenSearch Service domain.
 * ###### Note
 * 
 * The `Elasticsearch` action can only be used by existing rule actions. To create a new rule action or to update an existing rule action, use the `OpenSearch` rule action instead. For more information, see [OpenSearchAction](https://docs.aws.amazon.com/iot/latest/apireference/API_OpenSearchAction.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface ElasticsearchAction {
    /**
     * - The endpoint of your OpenSearch domain.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `https?://.*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-elasticsearchaction-endpoint */
    "Endpoint": string | Intrinsic;
    /**
     * - The unique identifier for the document you are storing.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-elasticsearchaction-id */
    "Id": string | Intrinsic;
    /**
     * - The index where you want to store your data.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-elasticsearchaction-index */
    "Index": string | Intrinsic;
    /**
     * - The IAM role ARN that has access to OpenSearch.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-elasticsearchaction-rolearn */
    "RoleArn": string | Intrinsic;
    /**
     * - The type of document you are storing.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-elasticsearchaction-type */
    "Type": string | Intrinsic;
}

/**
 * Describes an action that writes data to an Amazon Kinesis Firehose stream.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface FirehoseAction {
    /**
     * - Whether to deliver the Kinesis Data Firehose stream as a batch by using [`PutRecordBatch`](https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html). The default value is `false`.
     * - When `batchMode` is `true` and the rule's SQL statement evaluates to an Array, each Array element forms one record in the [`PutRecordBatch`](https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html) request. The resulting array can't have more than 500 records.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-firehoseaction-batchmode */
    "BatchMode"?: boolean | Intrinsic;
    /**
     * - The delivery stream name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-firehoseaction-deliverystreamname */
    "DeliveryStreamName": string | Intrinsic;
    /**
     * - The IAM role that grants access to the Amazon Kinesis Firehose stream.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-firehoseaction-rolearn */
    "RoleArn": string | Intrinsic;
    /**
     * - A character separator that will be used to separate records written to the Firehose stream. Valid values are: '\\n' (newline), '\\t' (tab), '\\r\\n' (Windows newline), ',' (comma).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `([\n\t])|(\r\n)|(,)`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-firehoseaction-separator */
    "Separator"?: string | Intrinsic;
}

/**
 * Sends an input to an AWS IoT Events detector.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface IotEventsAction {
    /**
     * - Whether to process the event actions as a batch. The default value is `false`.
     * - When `batchMode` is `true`, you can't specify a `messageId`.
     * - When `batchMode` is `true` and the rule SQL statement evaluates to an Array, each Array element is treated as a separate message when Events by calling [`BatchPutMessage`](https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchPutMessage.html). The resulting array can't have more than 10 messages.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-ioteventsaction-batchmode */
    "BatchMode"?: boolean | Intrinsic;
    /**
     * - The name of the AWS IoT Events input.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-ioteventsaction-inputname */
    "InputName": string | Intrinsic;
    /**
     * - The ID of the message. The default `messageId` is a new UUID value.
     * - When `batchMode` is `true`, you can't specify a `messageId`\--a new UUID value will be assigned.
     * - Assign a value to this property to ensure that only one input (message) with a given `messageId` will be processed by an AWS IoT Events detector.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-ioteventsaction-messageid */
    "MessageId"?: string | Intrinsic;
    /**
     * - The ARN of the role that grants AWS IoT permission to send an input to an AWS IoT Events detector. ("Action":"iotevents:BatchPutMessage").
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-ioteventsaction-rolearn */
    "RoleArn": string | Intrinsic;
}

/**
 * Sends message data to an AWS IoT Analytics channel.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface IotAnalyticsAction {
    /**
     * - Whether to process the action as a batch. The default value is `false`.
     * - When `batchMode` is `true` and the rule SQL statement evaluates to an Array, each Array element is delivered as a separate message when passed by [`BatchPutMessage`](https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_BatchPutMessage.html) The resulting array can't have more than 100 messages.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-iotanalyticsaction-batchmode */
    "BatchMode"?: boolean | Intrinsic;
    /**
     * - The name of the IoT Analytics channel to which message data will be sent.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-iotanalyticsaction-channelname */
    "ChannelName": string | Intrinsic;
    /**
     * - The ARN of the role which has a policy that grants IoT Analytics permission to send message data via IoT Analytics (iotanalytics:BatchPutMessage).
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-iotanalyticsaction-rolearn */
    "RoleArn": string | Intrinsic;
}

/**
 * Describes an action to write data to an Amazon Kinesis stream.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface KinesisAction {
    /**
     * - The partition key.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-kinesisaction-partitionkey */
    "PartitionKey"?: string | Intrinsic;
    /**
     * - The ARN of the IAM role that grants access to the Amazon Kinesis stream.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-kinesisaction-rolearn */
    "RoleArn": string | Intrinsic;
    /**
     * - The name of the Amazon Kinesis stream.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-kinesisaction-streamname */
    "StreamName": string | Intrinsic;
}

/**
 * Describes an action that writes data to an Amazon OpenSearch Service domain.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface OpenSearchAction {
    /**
     * - The endpoint of your OpenSearch domain.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `https?://.*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-opensearchaction-endpoint */
    "Endpoint": string | Intrinsic;
    /**
     * - The unique identifier for the document you are storing.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-opensearchaction-id */
    "Id": string | Intrinsic;
    /**
     * - The OpenSearch index where you want to store your data.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-opensearchaction-index */
    "Index": string | Intrinsic;
    /**
     * - The IAM role ARN that has access to OpenSearch.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-opensearchaction-rolearn */
    "RoleArn": string | Intrinsic;
    /**
     * - The type of document you are storing.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-opensearchaction-type */
    "Type": string | Intrinsic;
}

/**
 * Describes an action to write data to an Amazon S3 bucket.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface S3Action {
    /**
     * - The Amazon S3 bucket.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-s3action-bucketname */
    "BucketName": string | Intrinsic;
    /**
     * - The Amazon S3 canned ACL that controls access to the object identified by the object key. For more information, see [S3 canned ACLs](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl).
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `private | public-read | public-read-write | aws-exec-read | authenticated-read | bucket-owner-read | bucket-owner-full-control | log-delivery-write`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-s3action-cannedacl */
    "CannedAcl"?: string | Intrinsic;
    /**
     * - The object key. For more information, see [Actions, resources, and condition keys for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/list_amazons3.html).
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-s3action-key */
    "Key": string | Intrinsic;
    /**
     * - The ARN of the IAM role that grants access.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-s3action-rolearn */
    "RoleArn": string | Intrinsic;
}

/**
 * Describes an action to invoke a Lambda function.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface LambdaAction {
    /**
     * - The ARN of the Lambda function.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-lambdaaction-functionarn */
    "FunctionArn"?: string | Intrinsic;
}

/**
 * Describes an action to publish data to an Amazon SQS queue.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface SqsAction {
    /**
     * - The URL of the Amazon SQS queue.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-sqsaction-queueurl */
    "QueueUrl": string | Intrinsic;
    /**
     * - The ARN of the IAM role that grants access.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-sqsaction-rolearn */
    "RoleArn": string | Intrinsic;
    /**
     * - Specifies whether to use Base64 encoding.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-sqsaction-usebase64 */
    "UseBase64"?: boolean | Intrinsic;
}

/**
 * Describes an action to publish to an Amazon SNS topic.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface SnsAction {
    /**
     * - (Optional) The message format of the message to publish. Accepted values are "JSON" and "RAW". The default value of the attribute is "RAW". SNS uses this setting to determine if the payload should be parsed and relevant platform-specific bits of the payload should be extracted. For more information, see [Amazon SNS Message and JSON Formats](https://docs.aws.amazon.com/sns/latest/dg/json-formats.html) in the _Amazon Simple Notification Service Developer Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `RAW | JSON`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-snsaction-messageformat */
    "MessageFormat"?: string | Intrinsic;
    /**
     * - The ARN of the IAM role that grants access.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-snsaction-rolearn */
    "RoleArn": string | Intrinsic;
    /**
     * - The ARN of the SNS topic.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-snsaction-targetarn */
    "TargetArn": string | Intrinsic;
}

/**
 * Starts execution of a Step Functions state machine.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface StepFunctionsAction {
    /**
     * - (Optional) A name will be given to the state machine execution consisting of this prefix followed by a UUID. Step Functions automatically creates a unique name for each state machine execution if one is not provided.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-stepfunctionsaction-executionnameprefix */
    "ExecutionNamePrefix"?: string | Intrinsic;
    /**
     * - The ARN of the role that grants IoT permission to start execution of a state machine ("Action":"states:StartExecution").
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-stepfunctionsaction-rolearn */
    "RoleArn": string | Intrinsic;
    /**
     * - The name of the Step Functions state machine whose execution will be started.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-stepfunctionsaction-statemachinename */
    "StateMachineName": string | Intrinsic;
}

/**
 * The HTTP action header.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface HttpActionHeader {
    /**
     * - The HTTP header key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-httpactionheader-key */
    "Key": string | Intrinsic;
    /**
     * - The HTTP header value. Substitution templates are supported.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-httpactionheader-value */
    "Value": string | Intrinsic;
}

/**
 * Specifies a Kafka header using key-value pairs when you create a Rule’s Kafka Action. You can use these headers to route data from IoT clients to downstream Kafka clusters without modifying your message payload.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface KafkaActionHeader {
    /**
     * - The key of the Kafka header.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-kafkaactionheader-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the Kafka header.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-kafkaactionheader-value */
    "Value": string | Intrinsic;
}

/**
 * Send messages to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) or self-managed Apache Kafka cluster.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface KafkaAction {
    /**
     * - Properties of the Apache Kafka producer client.
     * - _Required_: Yes
     * - _Type_: Object of String
     * - _Pattern_: `.*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-kafkaaction-clientproperties */
    "ClientProperties": Record<string, string | Intrinsic>;
    /**
     * - The ARN of Kafka action's VPC `TopicRuleDestination`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-kafkaaction-destinationarn */
    "DestinationArn": string | Intrinsic;
    /**
     * - The list of Kafka headers that you specify.
     * - _Required_: No
     * - _Type_: Array of [KafkaActionHeader](./aws-properties-iot-topicrule-kafkaactionheader.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-kafkaaction-headers */
    "Headers"?: KafkaActionHeader[];
    /**
     * - The Kafka message key.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-kafkaaction-key */
    "Key"?: string | Intrinsic;
    /**
     * - The Kafka message partition.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-kafkaaction-partition */
    "Partition"?: string | Intrinsic;
    /**
     * - The Kafka topic for messages to be sent to the Kafka broker.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-kafkaaction-topic */
    "Topic": string | Intrinsic;
}

/**
 * The input for the DynamoActionVS action that specifies the DynamoDB table to which the message data will be written.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface PutItemInput {
    /**
     * - The table where the message data will be written.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-putiteminput-tablename */
    "TableName": string | Intrinsic;
}

/**
 * Describes an action to write to a DynamoDB table.
 * This DynamoDB action writes each attribute in the message payload into it's own column in the DynamoDB table.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface DynamoDBv2Action {
    /**
     * - Specifies the DynamoDB table to which the message data will be written. For example:
     * - `{ "dynamoDBv2": { "roleArn": "aws:iam:12341251:my-role" "putItem": { "tableName": "my-table" } } }`
     * - Each attribute in the message payload will be written to a separate column in the DynamoDB database.
     * - _Required_: No
     * - _Type_: [PutItemInput](./aws-properties-iot-topicrule-putiteminput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-dynamodbv2action-putitem */
    "PutItem"?: PutItemInput;
    /**
     * - The ARN of the IAM role that grants access to the DynamoDB table.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-dynamodbv2action-rolearn */
    "RoleArn"?: string | Intrinsic;
}

/**
 * Describes how to interpret an application-defined timestamp value from an MQTT message payload and the precision of that value.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface Timestamp {
    /**
     * - The precision of the timestamp value that results from the expression described in `value`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-timestamp-unit */
    "Unit"?: string | Intrinsic;
    /**
     * - An expression that returns a long epoch time value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-timestamp-value */
    "Value": string | Intrinsic;
}

/**
 * Describes an action to send device location updates from an MQTT message to an Amazon Location tracker resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface LocationAction {
    /**
     * - The unique ID of the device providing the location data.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-locationaction-deviceid */
    "DeviceId": string | Intrinsic;
    /**
     * - A string that evaluates to a double value that represents the latitude of the device's location.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-locationaction-latitude */
    "Latitude": string | Intrinsic;
    /**
     * - A string that evaluates to a double value that represents the longitude of the device's location.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-locationaction-longitude */
    "Longitude": string | Intrinsic;
    /**
     * - The IAM role that grants permission to write to the Amazon Location resource.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-locationaction-rolearn */
    "RoleArn": string | Intrinsic;
    /**
     * - The time that the location data was sampled. The default value is the time the MQTT message was processed.
     * - _Required_: No
     * - _Type_: [Timestamp](./aws-properties-iot-topicrule-timestamp.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-locationaction-timestamp */
    "Timestamp"?: Timestamp;
    /**
     * - The name of the tracker resource in Amazon Location in which the location is updated.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-locationaction-trackername */
    "TrackerName": string | Intrinsic;
}

/**
 * Metadata attributes of the time series that are written in each measure record.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface TimestreamDimension {
    /**
     * - The metadata dimension name. This is the name of the column in the Amazon Timestream database table record.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-timestreamdimension-name */
    "Name": string | Intrinsic;
    /**
     * - The value to write in this column of the database record.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-timestreamdimension-value */
    "Value": string | Intrinsic;
}

/**
 * The value to use for the entry's timestamp. If blank, the time that the entry was processed is used.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface TimestreamTimestamp {
    /**
     * - The precision of the timestamp value that results from the expression described in `value`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-timestreamtimestamp-unit */
    "Unit": string | Intrinsic;
    /**
     * - An expression that returns a long epoch time value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-timestreamtimestamp-value */
    "Value": string | Intrinsic;
}

/**
 * Describes an action that writes records into an Amazon Timestream table.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface TimestreamAction {
    /**
     * - The name of an Amazon Timestream database that has the table to write records into.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-timestreamaction-databasename */
    "DatabaseName": string | Intrinsic;
    /**
     * - Metadata attributes of the time series that are written in each measure record.
     * - _Required_: Yes
     * - _Type_: Array of [TimestreamDimension](./aws-properties-iot-topicrule-timestreamdimension.html)
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-timestreamaction-dimensions */
    "Dimensions": TimestreamDimension[];
    /**
     * - The Amazon Resource Name (ARN) of the role that grants AWS IoT permission to write to the Timestream database table.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-timestreamaction-rolearn */
    "RoleArn": string | Intrinsic;
    /**
     * - The table where the message data will be written.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-timestreamaction-tablename */
    "TableName": string | Intrinsic;
    /**
     * - The value to use for the entry's timestamp. If blank, the time that the entry was processed is used.
     * - _Required_: No
     * - _Type_: [TimestreamTimestamp](./aws-properties-iot-topicrule-timestreamtimestamp.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-timestreamaction-timestamp */
    "Timestamp"?: TimestreamTimestamp;
}

/**
 * For more information, see [Signature Version 4 signing process](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface SigV4Authorization {
    /**
     * - The ARN of the signing role.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-sigv4authorization-rolearn */
    "RoleArn": string | Intrinsic;
    /**
     * - The service name to use while signing with Sig V4.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-sigv4authorization-servicename */
    "ServiceName": string | Intrinsic;
    /**
     * - The signing region.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-sigv4authorization-signingregion */
    "SigningRegion": string | Intrinsic;
}

/**
 * The authorization method used to send messages.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface HttpAuthorization {
    /**
     * - Use Sig V4 authorization. For more information, see [Signature Version 4 Signing Process](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
     * - _Required_: No
     * - _Type_: [SigV4Authorization](./aws-properties-iot-topicrule-sigv4authorization.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-httpauthorization-sigv4 */
    "Sigv4"?: SigV4Authorization;
}

/**
 * Send data to an HTTPS endpoint.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface HttpAction {
    /**
     * - The authentication method to use when sending data to an HTTPS endpoint.
     * - _Required_: No
     * - _Type_: [HttpAuthorization](./aws-properties-iot-topicrule-httpauthorization.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-httpaction-auth */
    "Auth"?: HttpAuthorization;
    /**
     * - The URL to which AWS IoT sends a confirmation message. The value of the confirmation URL must be a prefix of the endpoint URL. If you do not specify a confirmation URL AWS IoT uses the endpoint URL as the confirmation URL. If you use substitution templates in the confirmationUrl, you must create and enable topic rule destinations that match each possible value of the substitution template before traffic is allowed to your endpoint URL.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-httpaction-confirmationurl */
    "ConfirmationUrl"?: string | Intrinsic;
    /**
     * - The HTTP headers to send with the message data.
     * - _Required_: No
     * - _Type_: Array of [HttpActionHeader](./aws-properties-iot-topicrule-httpactionheader.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-httpaction-headers */
    "Headers"?: HttpActionHeader[];
    /**
     * - The endpoint URL. If substitution templates are used in the URL, you must also specify a `confirmationUrl`. If this is a new destination, a new `TopicRuleDestination` is created if possible.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-httpaction-url */
    "Url": string | Intrinsic;
}

/**
 * A key-value pair that you define in the header.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface UserProperty {
    /**
     * - A key to be specified in `UserProperty`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-userproperty-key */
    "Key": string | Intrinsic;
    /**
     * - A value to be specified in `UserProperty`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-userproperty-value */
    "Value": string | Intrinsic;
}

/**
 * Specifies MQTT Version 5.0 headers information. For more information, see [MQTT](https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html) in the IoT Core Developer Guide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface RepublishActionHeaders {
    /**
     * - A UTF-8 encoded string that describes the content of the publishing message.
     * - For more information, see [Content Type](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901118) in the MQTT Version 5.0 specification.
     * - Supports [substitution templates](https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-republishactionheaders-contenttype */
    "ContentType"?: string | Intrinsic;
    /**
     * - The base64-encoded binary data used by the sender of the request message to identify which request the response message is for.
     * - For more information, see [Correlation Data](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901115) in the MQTT Version 5.0 specification.
     * - Supports [substitution templates](https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-republishactionheaders-correlationdata */
    "CorrelationData"?: string | Intrinsic;
    /**
     * - A user-defined integer value that represents the message expiry interval at the broker. If the messages haven't been sent to the subscribers within that interval, the message expires and is removed. The value of `messageExpiry` represents the number of seconds before it expires. For more information about the limits of `messageExpiry`, see [Message broker and protocol limits and quotas](https://docs.aws.amazon.com/general/latest/gr/iot-core.html#limits_iot) in the IoT Core Reference Guide.
     * - Supports [substitution templates](https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-republishactionheaders-messageexpiry */
    "MessageExpiry"?: string | Intrinsic;
    /**
     * - An `Enum` string value that indicates whether the payload is formatted as UTF-8.
     * - Valid values are `UNSPECIFIED_BYTES` and `UTF8_DATA`.
     * - For more information, see [Payload Format Indicator](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901111) from the MQTT Version 5.0 specification.
     * - Supports [substitution templates](https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-republishactionheaders-payloadformatindicator */
    "PayloadFormatIndicator"?: string | Intrinsic;
    /**
     * - A UTF-8 encoded string that's used as the topic name for a response message. The response topic is used to describe the topic to which the receiver should publish as part of the request-response flow. The topic must not contain wildcard characters.
     * - For more information, see [Response Topic](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901114) in the MQTT Version 5.0 specification.
     * - Supports [substitution templates](https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-republishactionheaders-responsetopic */
    "ResponseTopic"?: string | Intrinsic;
    /**
     * - An array of key-value pairs that you define in the MQTT5 header.
     * - _Required_: No
     * - _Type_: Array of [UserProperty](./aws-properties-iot-topicrule-userproperty.html)
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-republishactionheaders-userproperties */
    "UserProperties"?: UserProperty[];
}

/**
 * Describes an action to republish to another topic.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface RepublishAction {
    /**
     * - MQTT Version 5.0 headers information. For more information, see [MQTT](https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html) in the IoT Core Developer Guide.
     * - _Required_: No
     * - _Type_: [RepublishActionHeaders](./aws-properties-iot-topicrule-republishactionheaders.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-republishaction-headers */
    "Headers"?: RepublishActionHeaders;
    /**
     * - The Quality of Service (QoS) level to use when republishing messages. The default value is 0.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-republishaction-qos */
    "Qos"?: number | Intrinsic;
    /**
     * - The ARN of the IAM role that grants access.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-republishaction-rolearn */
    "RoleArn": string | Intrinsic;
    /**
     * - The name of the MQTT topic.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-republishaction-topic */
    "Topic": string | Intrinsic;
}

/**
 * An asset property timestamp entry containing the following information.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface AssetPropertyTimestamp {
    /**
     * - Optional. A string that contains the nanosecond time offset. Accepts substitution templates.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-assetpropertytimestamp-offsetinnanos */
    "OffsetInNanos"?: string | Intrinsic;
    /**
     * - A string that contains the time in seconds since epoch. Accepts substitution templates.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-assetpropertytimestamp-timeinseconds */
    "TimeInSeconds": string | Intrinsic;
}

/**
 * Contains an asset property value (of a single type).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface AssetPropertyVariant {
    /**
     * - Optional. A string that contains the boolean value (`true` or `false`) of the value entry. Accepts substitution templates.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-assetpropertyvariant-booleanvalue */
    "BooleanValue"?: string | Intrinsic;
    /**
     * - Optional. A string that contains the double value of the value entry. Accepts substitution templates.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-assetpropertyvariant-doublevalue */
    "DoubleValue"?: string | Intrinsic;
    /**
     * - Optional. A string that contains the integer value of the value entry. Accepts substitution templates.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-assetpropertyvariant-integervalue */
    "IntegerValue"?: string | Intrinsic;
    /**
     * - Optional. The string value of the value entry. Accepts substitution templates.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-assetpropertyvariant-stringvalue */
    "StringValue"?: string | Intrinsic;
}

/**
 * An asset property value entry containing the following information.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface AssetPropertyValue {
    /**
     * - Optional. A string that describes the quality of the value. Accepts substitution templates. Must be `GOOD`, `BAD`, or `UNCERTAIN`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-assetpropertyvalue-quality */
    "Quality"?: string | Intrinsic;
    /**
     * - The asset property value timestamp.
     * - _Required_: Yes
     * - _Type_: [AssetPropertyTimestamp](./aws-properties-iot-topicrule-assetpropertytimestamp.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-assetpropertyvalue-timestamp */
    "Timestamp": AssetPropertyTimestamp;
    /**
     * - The value of the asset property.
     * - _Required_: Yes
     * - _Type_: [AssetPropertyVariant](./aws-properties-iot-topicrule-assetpropertyvariant.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-assetpropertyvalue-value */
    "Value": AssetPropertyVariant;
}

/**
 * An asset property value entry containing the following information.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface PutAssetPropertyValueEntry {
    /**
     * - The ID of the AWS IoT SiteWise asset. You must specify either a `propertyAlias` or both an `aliasId` and a `propertyId`. Accepts substitution templates.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-putassetpropertyvalueentry-assetid */
    "AssetId"?: string | Intrinsic;
    /**
     * - Optional. A unique identifier for this entry that you can define to better track which message caused an error in case of failure. Accepts substitution templates. Defaults to a new UUID.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-putassetpropertyvalueentry-entryid */
    "EntryId"?: string | Intrinsic;
    /**
     * - The name of the property alias associated with your asset property. You must specify either a `propertyAlias` or both an `aliasId` and a `propertyId`. Accepts substitution templates.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-putassetpropertyvalueentry-propertyalias */
    "PropertyAlias"?: string | Intrinsic;
    /**
     * - The ID of the asset's property. You must specify either a `propertyAlias` or both an `aliasId` and a `propertyId`. Accepts substitution templates.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-putassetpropertyvalueentry-propertyid */
    "PropertyId"?: string | Intrinsic;
    /**
     * - A list of property values to insert that each contain timestamp, quality, and value (TQV) information.
     * - _Required_: Yes
     * - _Type_: Array of [AssetPropertyValue](./aws-properties-iot-topicrule-assetpropertyvalue.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-putassetpropertyvalueentry-propertyvalues */
    "PropertyValues": AssetPropertyValue[];
}

/**
 * Describes an action to send data from an MQTT message that triggered the rule to AWS IoT SiteWise asset properties.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface IotSiteWiseAction {
    /**
     * - A list of asset property value entries.
     * - _Required_: Yes
     * - _Type_: Array of [PutAssetPropertyValueEntry](./aws-properties-iot-topicrule-putassetpropertyvalueentry.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-iotsitewiseaction-putassetpropertyvalueentries */
    "PutAssetPropertyValueEntries": PutAssetPropertyValueEntry[];
    /**
     * - The ARN of the role that grants AWS IoT permission to send an asset property value to AWS IoT SiteWise. (`"Action": "iotsitewise:BatchPutAssetPropertyValue"`). The trust policy can restrict access to specific asset hierarchy paths.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-iotsitewiseaction-rolearn */
    "RoleArn": string | Intrinsic;
}

/**
 * Describes the actions associated with a rule.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface Action {
    /**
     * - Change the state of a CloudWatch alarm.
     * - _Required_: No
     * - _Type_: [CloudwatchAlarmAction](./aws-properties-iot-topicrule-cloudwatchalarmaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-cloudwatchalarm */
    "CloudwatchAlarm"?: CloudwatchAlarmAction;
    /**
     * - Sends data to CloudWatch.
     * - _Required_: No
     * - _Type_: [CloudwatchLogsAction](./aws-properties-iot-topicrule-cloudwatchlogsaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-cloudwatchlogs */
    "CloudwatchLogs"?: CloudwatchLogsAction;
    /**
     * - Capture a CloudWatch metric.
     * - _Required_: No
     * - _Type_: [CloudwatchMetricAction](./aws-properties-iot-topicrule-cloudwatchmetricaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-cloudwatchmetric */
    "CloudwatchMetric"?: CloudwatchMetricAction;
    /**
     * - Write to a DynamoDB table.
     * - _Required_: No
     * - _Type_: [DynamoDBAction](./aws-properties-iot-topicrule-dynamodbaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-dynamodb */
    "DynamoDB"?: DynamoDBAction;
    /**
     * - Write to a DynamoDB table. This is a new version of the DynamoDB action. It allows you to write each attribute in an MQTT message payload into a separate DynamoDB column.
     * - _Required_: No
     * - _Type_: [DynamoDBv2Action](./aws-properties-iot-topicrule-dynamodbv2action.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-dynamodbv2 */
    "DynamoDBv2"?: DynamoDBv2Action;
    /**
     * - Write data to an Amazon OpenSearch Service domain.
     * - _Required_: No
     * - _Type_: [ElasticsearchAction](./aws-properties-iot-topicrule-elasticsearchaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-elasticsearch */
    "Elasticsearch"?: ElasticsearchAction;
    /**
     * - Write to an Amazon Kinesis Firehose stream.
     * - _Required_: No
     * - _Type_: [FirehoseAction](./aws-properties-iot-topicrule-firehoseaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-firehose */
    "Firehose"?: FirehoseAction;
    /**
     * - Send data to an HTTPS endpoint.
     * - _Required_: No
     * - _Type_: [HttpAction](./aws-properties-iot-topicrule-httpaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-http */
    "Http"?: HttpAction;
    /**
     * - Sends message data to an AWS IoT Analytics channel.
     * - _Required_: No
     * - _Type_: [IotAnalyticsAction](./aws-properties-iot-topicrule-iotanalyticsaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-iotanalytics */
    "IotAnalytics"?: IotAnalyticsAction;
    /**
     * - Sends an input to an AWS IoT Events detector.
     * - _Required_: No
     * - _Type_: [IotEventsAction](./aws-properties-iot-topicrule-ioteventsaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-iotevents */
    "IotEvents"?: IotEventsAction;
    /**
     * - Sends data from the MQTT message that triggered the rule to AWS IoT SiteWise asset properties.
     * - _Required_: No
     * - _Type_: [IotSiteWiseAction](./aws-properties-iot-topicrule-iotsitewiseaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-iotsitewise */
    "IotSiteWise"?: IotSiteWiseAction;
    /**
     * - Send messages to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) or self-managed Apache Kafka cluster.
     * - _Required_: No
     * - _Type_: [KafkaAction](./aws-properties-iot-topicrule-kafkaaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-kafka */
    "Kafka"?: KafkaAction;
    /**
     * - Write data to an Amazon Kinesis stream.
     * - _Required_: No
     * - _Type_: [KinesisAction](./aws-properties-iot-topicrule-kinesisaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-kinesis */
    "Kinesis"?: KinesisAction;
    /**
     * - Invoke a Lambda function.
     * - _Required_: No
     * - _Type_: [LambdaAction](./aws-properties-iot-topicrule-lambdaaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-lambda */
    "Lambda"?: LambdaAction;
    /**
     * - Sends device location data to [Amazon Location Service](https://docs.aws.amazon.com/location/latest/developerguide/welcome.html).
     * - _Required_: No
     * - _Type_: [LocationAction](./aws-properties-iot-topicrule-locationaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-location */
    "Location"?: LocationAction;
    /**
     * - Write data to an Amazon OpenSearch Service domain.
     * - _Required_: No
     * - _Type_: [OpenSearchAction](./aws-properties-iot-topicrule-opensearchaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-opensearch */
    "OpenSearch"?: OpenSearchAction;
    /**
     * - Publish to another MQTT topic.
     * - _Required_: No
     * - _Type_: [RepublishAction](./aws-properties-iot-topicrule-republishaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-republish */
    "Republish"?: RepublishAction;
    /**
     * - Write to an Amazon S3 bucket.
     * - _Required_: No
     * - _Type_: [S3Action](./aws-properties-iot-topicrule-s3action.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-s3 */
    "S3"?: S3Action;
    /**
     * - Publish to an Amazon SNS topic.
     * - _Required_: No
     * - _Type_: [SnsAction](./aws-properties-iot-topicrule-snsaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-sns */
    "Sns"?: SnsAction;
    /**
     * - Publish to an Amazon SQS queue.
     * - _Required_: No
     * - _Type_: [SqsAction](./aws-properties-iot-topicrule-sqsaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-sqs */
    "Sqs"?: SqsAction;
    /**
     * - Starts execution of a Step Functions state machine.
     * - _Required_: No
     * - _Type_: [StepFunctionsAction](./aws-properties-iot-topicrule-stepfunctionsaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-stepfunctions */
    "StepFunctions"?: StepFunctionsAction;
    /**
     * - Writes attributes from an MQTT message.
     * - _Required_: No
     * - _Type_: [TimestreamAction](./aws-properties-iot-topicrule-timestreamaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-action-timestream */
    "Timestream"?: TimestreamAction;
}

/**
 * Describes a rule.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface TopicRulePayload {
    /**
     * - The actions associated with the rule.
     * - _Required_: Yes
     * - _Type_: Array of [Action](./aws-properties-iot-topicrule-action.html)
     * - _Minimum_: `0`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-topicrulepayload-actions */
    "Actions": Action[];
    /**
     * - The version of the SQL rules engine to use when evaluating the rule.
     * - The default value is 2015-10-08.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-topicrulepayload-awsiotsqlversion */
    "AwsIotSqlVersion"?: string | Intrinsic;
    /**
     * - The description of the rule.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-topicrulepayload-description */
    "Description"?: string | Intrinsic;
    /**
     * - The action to take when an error occurs.
     * - _Required_: No
     * - _Type_: [Action](./aws-properties-iot-topicrule-action.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-topicrulepayload-erroraction */
    "ErrorAction"?: Action;
    /**
     * - Specifies whether the rule is disabled.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-topicrulepayload-ruledisabled */
    "RuleDisabled"?: boolean | Intrinsic;
    /**
     * - The SQL statement used to query the topic. For more information, see [AWS IoT SQL Reference](https://docs.aws.amazon.com/iot/latest/developerguide/iot-sql-reference.html) in the _AWS IoT Developer Guide_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-topicrulepayload-sql */
    "Sql": string | Intrinsic;
}

/**
 * Use the `AWS::IoT::TopicRule` resource to declare an AWS IoT rule. For information about working with AWS IoT rules, see [Rules for AWS IoT](https://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html) in the _AWS IoT Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html */

export interface IoTTopicRule extends ResourceAttributes {
    "Type": "AWS::IoT::TopicRule";
    "Properties": {
        /**
         * - The name of the rule.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-rulename */
        "RuleName"?: string | Intrinsic;
        /**
         * - Metadata which can be used to manage the topic rule.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-iot-topicrule-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-tags */
        "Tags"?: Tag[];
        /**
         * - The rule payload.
         * - _Required_: Yes
         * - _Type_: [TopicRulePayload](./aws-properties-iot-topicrule-topicrulepayload.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html#cfn-iot-topicrule-topicrulepayload */
        "TopicRulePayload": TopicRulePayload;
    };
}