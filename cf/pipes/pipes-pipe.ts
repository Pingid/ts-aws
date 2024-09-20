import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations. In the latter case, these are merged with any InvocationParameters specified on the Connection, with any values from the Connection taking precedence.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeEnrichmentHttpParameters {
  /**
   * - The headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: ``^[!#$%&'*+-.^_`|~0-9a-zA-Z]+|(\$(\.[\w/_-]+(\[(\d+|\*)\])*)*)$``
   * - _Minimum_: `0`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipeenrichmenthttpparameters-headerparameters */
  HeaderParameters?: Record<string, string | Intrinsic>
  /**
   * - The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("\*").
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipeenrichmenthttpparameters-pathparametervalues */
  PathParameterValues?: (string | Intrinsic)[]
  /**
   * - The query string keys/values that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `^[^\x00-\x1F\x7F]+|(\$(\.[\w/_-]+(\[(\d+|\*)\])*)*)$`
   * - _Minimum_: `0`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipeenrichmenthttpparameters-querystringparameters */
  QueryStringParameters?: Record<string, string | Intrinsic>
}

/**
 * Represents the Amazon CloudWatch Logs logging configuration settings for the pipe.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface CloudwatchLogsLogDestination {
  /**
   * - The AWS Resource Name (ARN) for the CloudWatch log group to which EventBridge sends the log records.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(^arn:aws([a-z]|\-)*:logs:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}):(\d{12}):log-group:.+)$`
   * - _Minimum_: `1`
   * - _Maximum_: `1600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-cloudwatchlogslogdestination-loggrouparn */
  LogGroupArn?: string | Intrinsic
}

/**
 * Represents the Amazon Data Firehose logging configuration settings for the pipe.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface FirehoseLogDestination {
  /**
   * - The Amazon Resource Name (ARN) of the Firehose delivery stream to which EventBridge delivers the pipe log records.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(^arn:aws([a-z]|\-)*:firehose:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}):(\d{12}):deliverystream/.+)$`
   * - _Minimum_: `1`
   * - _Maximum_: `1600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-firehoselogdestination-deliverystreamarn */
  DeliveryStreamArn?: string | Intrinsic
}

/**
 * Represents the Amazon S3 logging configuration settings for the pipe.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface S3LogDestination {
  /**
   * - The name of the Amazon S3 bucket to which EventBridge delivers the log records for the pipe.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-s3logdestination-bucketname */
  BucketName?: string | Intrinsic
  /**
   * - The AWS account that owns the Amazon S3 bucket to which EventBridge delivers the log records for the pipe.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-s3logdestination-bucketowner */
  BucketOwner?: string | Intrinsic
  /**
   * - The format EventBridge uses for the log records.
   * - EventBridge currently only supports `json` formatting.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `json | plain | w3c`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-s3logdestination-outputformat */
  OutputFormat?: string | Intrinsic
  /**
   * - The prefix text with which to begin Amazon S3 log object names.
   * - For more information, see [Organizing objects using prefixes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html) in the _Amazon Simple Storage Service User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-s3logdestination-prefix */
  Prefix?: string | Intrinsic
}

/**
 * The parameters for using a Kinesis stream as a source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeSourceKinesisStreamParameters {
  /**
   * - The maximum number of records to include in each batch.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `10000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-batchsize */
  BatchSize?: number | Intrinsic
  /**
   * - Define the target queue to send dead-letter queue events to.
   * - _Required_: No
   * - _Type_: [DeadLetterConfig](./aws-properties-pipes-pipe-deadletterconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-deadletterconfig */
  DeadLetterConfig?: DeadLetterConfig
  /**
   * - The maximum length of a time to wait for events.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `300`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-maximumbatchingwindowinseconds */
  MaximumBatchingWindowInSeconds?: number | Intrinsic
  /**
   * - Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, EventBridge never discards old records.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `-1`
   * - _Maximum_: `604800`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-maximumrecordageinseconds */
  MaximumRecordAgeInSeconds?: number | Intrinsic
  /**
   * - Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `-1`
   * - _Maximum_: `10000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-maximumretryattempts */
  MaximumRetryAttempts?: number | Intrinsic
  /**
   * - Define how to handle item process failures. `AUTOMATIC_BISECT` halves each batch and retry each half until all the records are processed or there is one failed message left in the batch.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `AUTOMATIC_BISECT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-onpartialbatchitemfailure */
  OnPartialBatchItemFailure?: string | Intrinsic
  /**
   * - The number of batches to process concurrently from each shard. The default value is 1.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-parallelizationfactor */
  ParallelizationFactor?: number | Intrinsic
  /**
   * - The position in a stream from which to start reading.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `TRIM_HORIZON | LATEST | AT_TIMESTAMP`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-startingposition */
  StartingPosition: string | Intrinsic
  /**
   * - With `StartingPosition` set to `AT_TIMESTAMP`, the time from which to start reading, in Unix time seconds.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcekinesisstreamparameters-startingpositiontimestamp */
  StartingPositionTimestamp?: string | Intrinsic
}

/**
 * The parameters for using a Rabbit MQ broker as a source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeSourceRabbitMQBrokerParameters {
  /**
   * - The maximum number of records to include in each batch.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `10000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-batchsize */
  BatchSize?: number | Intrinsic
  /**
   * - The credentials needed to access the resource.
   * - _Required_: Yes
   * - _Type_: [MQBrokerAccessCredentials](./aws-properties-pipes-pipe-mqbrokeraccesscredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-credentials */
  Credentials: MQBrokerAccessCredentials
  /**
   * - The maximum length of a time to wait for events.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `300`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-maximumbatchingwindowinseconds */
  MaximumBatchingWindowInSeconds?: number | Intrinsic
  /**
   * - The name of the destination queue to consume.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[\s\S]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `1000`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-queuename */
  QueueName: string | Intrinsic
  /**
   * - The name of the virtual host associated with the source broker.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9-\/*:_+=.@-]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `200`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-virtualhost */
  VirtualHost?: string | Intrinsic
}

/**
 * The parameters for using a Amazon SQS stream as a source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeSourceSqsQueueParameters {
  /**
   * - The maximum number of records to include in each batch.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `10000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcesqsqueueparameters-batchsize */
  BatchSize?: number | Intrinsic
  /**
   * - The maximum length of a time to wait for events.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `300`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcesqsqueueparameters-maximumbatchingwindowinseconds */
  MaximumBatchingWindowInSeconds?: number | Intrinsic
}

/**
 * The parameters for using an CloudWatch Logs log stream as a target.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeTargetCloudWatchLogsParameters {
  /**
   * - The name of the log stream.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetcloudwatchlogsparameters-logstreamname */
  LogStreamName?: string | Intrinsic
  /**
   * - The time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^\$(\.[\w_-]+(\[(\d+|\*)\])*)*$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetcloudwatchlogsparameters-timestamp */
  Timestamp?: string | Intrinsic
}

/**
 * The parameters for using an EventBridge event bus as a target.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeTargetEventBridgeEventBusParameters {
  /**
   * - A free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-detailtype */
  DetailType?: string | Intrinsic
  /**
   * - The URL subdomain of the endpoint. For example, if the URL for Endpoint is https://abcde.veo.endpoints.event.amazonaws.com, then the EndpointId is `abcde.veo`.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[A-Za-z0-9\-]+[\.][A-Za-z0-9\-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-endpointid */
  EndpointId?: string | Intrinsic
  /**
   * - AWS resources, identified by Amazon Resource Name (ARN), which the event primarily concerns. Any number, including zero, may be present.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 0`
   * - _Maximum_: `1600 | 10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-resources */
  Resources?: (string | Intrinsic)[]
  /**
   * - The source of the event.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `(?=[/\.\-_A-Za-z0-9]+)((?!aws\.).*)|(\$(\.[\w/_-]+(\[(\d+|\*)\])*)*)`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-source */
  Source?: string | Intrinsic
  /**
   * - The time stamp of the event, per [RFC3339](https://www.rfc-editor.org/rfc/rfc3339.txt). If no time stamp is provided, the time stamp of the [PutEvents](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html) call is used.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^\$(\.[\w/_-]+(\[(\d+|\*)\])*)*$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargeteventbridgeeventbusparameters-time */
  Time?: string | Intrinsic
}

/**
 * These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeTargetHttpParameters {
  /**
   * - The headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: ``^[!#$%&'*+-.^_`|~0-9a-zA-Z]+|(\$(\.[\w/_-]+(\[(\d+|\*)\])*)*)$``
   * - _Minimum_: `0`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargethttpparameters-headerparameters */
  HeaderParameters?: Record<string, string | Intrinsic>
  /**
   * - The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("\*").
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargethttpparameters-pathparametervalues */
  PathParameterValues?: (string | Intrinsic)[]
  /**
   * - The query string keys/values that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `^[^\x00-\x1F\x7F]+|(\$(\.[\w/_-]+(\[(\d+|\*)\])*)*)$`
   * - _Minimum_: `0`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargethttpparameters-querystringparameters */
  QueryStringParameters?: Record<string, string | Intrinsic>
}

/**
 * The parameters for using a Kinesis stream as a target.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeTargetKinesisStreamParameters {
  /**
   * - Determines which shard in the stream the data record is assigned to. Partition keys are Unicode strings with a maximum length limit of 256 characters for each key. Amazon Kinesis Data Streams uses the partition key as input to a hash function that maps the partition key and associated data to a specific shard. Specifically, an MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards. As a result of this hashing mechanism, all data records with the same partition key map to the same shard within the stream.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetkinesisstreamparameters-partitionkey */
  PartitionKey: string | Intrinsic
}

/**
 * The parameters for using a Lambda function as a target.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeTargetLambdaFunctionParameters {
  /**
   * - Specify whether to invoke the function synchronously or asynchronously.
   * - For more information, see [Invocation types](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html#pipes-invocation) in the _Amazon EventBridge User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `REQUEST_RESPONSE | FIRE_AND_FORGET`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetlambdafunctionparameters-invocationtype */
  InvocationType?: string | Intrinsic
}

/**
 * These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API BatchExecuteStatement.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeTargetRedshiftDataParameters {
  /**
   * - The name of the database. Required when authenticating using temporary credentials.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetredshiftdataparameters-database */
  Database: string | Intrinsic
  /**
   * - The database user name. Required when authenticating using temporary credentials.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetredshiftdataparameters-dbuser */
  DbUser?: string | Intrinsic
  /**
   * - The name or ARN of the secret that enables access to the database. Required when authenticating using Secrets Manager.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(^arn:aws([a-z]|\-)*:secretsmanager:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}):(\d{12}):secret:.+)|(\$(\.[\w/_-]+(\[(\d+|\*)\])*)*)$`
   * - _Minimum_: `1`
   * - _Maximum_: `1600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetredshiftdataparameters-secretmanagerarn */
  SecretManagerArn?: string | Intrinsic
  /**
   * - The SQL statement text to run.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `100000 | 40`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetredshiftdataparameters-sqls */
  Sqls: (string | Intrinsic)[]
  /**
   * - The name of the SQL statement. You can name the SQL statement when you create it to identify the query.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `500`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetredshiftdataparameters-statementname */
  StatementName?: string | Intrinsic
  /**
   * - Indicates whether to send an event back to EventBridge after the SQL statement runs.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetredshiftdataparameters-withevent */
  WithEvent?: boolean | Intrinsic
}

/**
 * The parameters for using a Amazon SQS stream as a target.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeTargetSqsQueueParameters {
  /**
   * - This parameter applies only to FIFO (first-in-first-out) queues.
   * - The token used for deduplication of sent messages.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetsqsqueueparameters-messagededuplicationid */
  MessageDeduplicationId?: string | Intrinsic
  /**
   * - The FIFO message group ID to use as the target.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetsqsqueueparameters-messagegroupid */
  MessageGroupId?: string | Intrinsic
}

/**
 * The parameters for using a Step Functions state machine as a target.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeTargetStateMachineParameters {
  /**
   * - Specify whether to invoke the Step Functions state machine synchronously or asynchronously.
   * - For more information, see [Invocation types](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html#pipes-invocation) in the _Amazon EventBridge User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `REQUEST_RESPONSE | FIRE_AND_FORGET`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetstatemachineparameters-invocationtype */
  InvocationType?: string | Intrinsic
}

/**
 * The AWS Secrets Manager secret that stores your broker credentials.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface MQBrokerAccessCredentials {
  /**
   * - The ARN of the Secrets Manager secret.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(^arn:aws([a-z]|\-)*:secretsmanager:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}):(\d{12}):secret:.+)$`
   * - _Minimum_: `1`
   * - _Maximum_: `1600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-mqbrokeraccesscredentials-basicauth */
  BasicAuth: string | Intrinsic
}

/**
 * A `DeadLetterConfig` object that contains information about a dead-letter queue configuration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface DeadLetterConfig {
  /**
   * - The ARN of the specified target for the dead-letter queue.
   * - For Amazon Kinesis stream and Amazon DynamoDB stream sources, specify either an Amazon SNS topic or Amazon SQS queue ARN.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-]+):([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1})?:(\d{12})?:(.+)$`
   * - _Minimum_: `1`
   * - _Maximum_: `1600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-deadletterconfig-arn */
  Arn?: string | Intrinsic
}

/**
 * Filter events using an event pattern. For more information, see [Events and Event Patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) in the _Amazon EventBridge User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface Filter {
  /**
   * - The event pattern.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-filter-pattern */
  Pattern?: string | Intrinsic
}

/**
 * The AWS Secrets Manager secret that stores your stream credentials.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface MSKAccessCredentials {
  /**
   * - The ARN of the Secrets Manager secret.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(^arn:aws([a-z]|\-)*:secretsmanager:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}):(\d{12}):secret:.+)$`
   * - _Minimum_: `1`
   * - _Maximum_: `1600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-mskaccesscredentials-clientcertificatetlsauth */
  ClientCertificateTlsAuth?: string | Intrinsic
  /**
   * - The ARN of the Secrets Manager secret.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(^arn:aws([a-z]|\-)*:secretsmanager:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}):(\d{12}):secret:.+)$`
   * - _Minimum_: `1`
   * - _Maximum_: `1600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-mskaccesscredentials-saslscram512auth */
  SaslScram512Auth?: string | Intrinsic
}

/**
 * The AWS Secrets Manager secret that stores your stream credentials.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface SelfManagedKafkaAccessConfigurationCredentials {
  /**
   * - The ARN of the Secrets Manager secret.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(^arn:aws([a-z]|\-)*:secretsmanager:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}):(\d{12}):secret:.+)$`
   * - _Minimum_: `1`
   * - _Maximum_: `1600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-selfmanagedkafkaaccessconfigurationcredentials-basicauth */
  BasicAuth?: string | Intrinsic
  /**
   * - The ARN of the Secrets Manager secret.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(^arn:aws([a-z]|\-)*:secretsmanager:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}):(\d{12}):secret:.+)$`
   * - _Minimum_: `1`
   * - _Maximum_: `1600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-selfmanagedkafkaaccessconfigurationcredentials-clientcertificatetlsauth */
  ClientCertificateTlsAuth?: string | Intrinsic
  /**
   * - The ARN of the Secrets Manager secret.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(^arn:aws([a-z]|\-)*:secretsmanager:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}):(\d{12}):secret:.+)$`
   * - _Minimum_: `1`
   * - _Maximum_: `1600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-selfmanagedkafkaaccessconfigurationcredentials-saslscram256auth */
  SaslScram256Auth?: string | Intrinsic
  /**
   * - The ARN of the Secrets Manager secret.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(^arn:aws([a-z]|\-)*:secretsmanager:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}):(\d{12}):secret:.+)$`
   * - _Minimum_: `1`
   * - _Maximum_: `1600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-selfmanagedkafkaaccessconfigurationcredentials-saslscram512auth */
  SaslScram512Auth?: string | Intrinsic
}

/**
 * This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface SelfManagedKafkaAccessConfigurationVpc {
  /**
   * - Specifies the security groups associated with the stream. These security groups must all be in the same VPC. You can specify as many as five security groups.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 0`
   * - _Maximum_: `1024 | 5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc-securitygroup */
  SecurityGroup?: (string | Intrinsic)[]
  /**
   * - Specifies the subnets associated with the stream. These subnets must all be in the same VPC. You can specify as many as 16 subnets.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 0`
   * - _Maximum_: `1024 | 16`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc-subnets */
  Subnets?: (string | Intrinsic)[]
}

/**
 * The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface BatchArrayProperties {
  /**
   * - The size of the array, if this is an array batch job.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `2`
   * - _Maximum_: `10000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-batcharrayproperties-size */
  Size?: number | Intrinsic
}

/**
 * An object that represents an AWS Batch job dependency.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface BatchJobDependency {
  /**
   * - The job ID of the AWS Batch job that's associated with this dependency.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-batchjobdependency-jobid */
  JobId?: string | Intrinsic
  /**
   * - The type of the job dependency.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `N_TO_N | SEQUENTIAL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-batchjobdependency-type */
  Type?: string | Intrinsic
}

/**
 * The retry strategy that's associated with a job. For more information, see [Automated job retries](https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html) in the _AWS Batch User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface BatchRetryStrategy {
  /**
   * - The number of times to move a job to the `RUNNABLE` status. If the value of `attempts` is greater than one, the job is retried on failure the same number of attempts as the value.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-batchretrystrategy-attempts */
  Attempts?: number | Intrinsic
}

/**
 * The details of a capacity provider strategy. To learn more, see [CapacityProviderStrategyItem](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html) in the Amazon ECS API Reference.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface CapacityProviderStrategyItem {
  /**
   * - The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of 0 is used.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `100000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-capacityproviderstrategyitem-base */
  Base?: number | Intrinsic
  /**
   * - The short name of the capacity provider.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-capacityproviderstrategyitem-capacityprovider */
  CapacityProvider: string | Intrinsic
  /**
   * - The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the base value, if defined, is satisfied.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-capacityproviderstrategyitem-weight */
  Weight?: number | Intrinsic
}

/**
 * An object representing a constraint on task placement. To learn more, see [Task Placement Constraints](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html) in the Amazon Elastic Container Service Developer Guide.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PlacementConstraint {
  /**
   * - A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is `distinctInstance`. To learn more, see [Cluster Query Language](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html) in the Amazon Elastic Container Service Developer Guide.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `2000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-placementconstraint-expression */
  Expression?: string | Intrinsic
  /**
   * - The type of constraint. Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict the selection to a group of valid candidates.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `distinctInstance | memberOf`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-placementconstraint-type */
  Type?: string | Intrinsic
}

/**
 * The task placement strategy for a task or service. To learn more, see [Task Placement Strategies](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html) in the Amazon Elastic Container Service Service Developer Guide.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PlacementStrategy {
  /**
   * - The field to apply the placement strategy against. For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-placementstrategy-field */
  Field?: string | Intrinsic
  /**
   * - The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `random | spread | binpack`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-placementstrategy-type */
  Type?: string | Intrinsic
}

/**
 * The `Tag` property type specifies Property description not available. for an [AWS::Pipes::Pipe](./aws-resource-pipes-pipe.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface Tag {
  /**
   * - The key of the key-value pair.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the key-value pair.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-tag-value */
  Value: string | Intrinsic
}

/**
 * Name/Value pair of a parameter to start execution of a SageMaker Model Building Pipeline.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface SageMakerPipelineParameter {
  /**
   * - Name of parameter to start execution of a SageMaker Model Building Pipeline.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*|(\$(\.[\w/_-]+(\[(\d+|\*)\])*)*)$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-sagemakerpipelineparameter-name */
  Name: string | Intrinsic
  /**
   * - Value of parameter to start execution of a SageMaker Model Building Pipeline.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-sagemakerpipelineparameter-value */
  Value: string | Intrinsic
}

/**
 * Maps source data to a dimension in the target Timestream for LiveAnalytics table.
 * For more information, see [Amazon Timestream for LiveAnalytics concepts](https://docs.aws.amazon.com/timestream/latest/developerguide/concepts.html)
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface DimensionMapping {
  /**
   * - The metadata attributes of the time series. For example, the name and Availability Zone of an Amazon EC2 instance or the name of the manufacturer of a wind turbine are dimensions.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-dimensionmapping-dimensionname */
  DimensionName: string | Intrinsic
  /**
   * - Dynamic path to the dimension value in the source event.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-dimensionmapping-dimensionvalue */
  DimensionValue: string | Intrinsic
  /**
   * - The data type of the dimension for the time-series data.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `VARCHAR`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-dimensionmapping-dimensionvaluetype */
  DimensionValueType: string | Intrinsic
}

/**
 * Maps a single source data field to a single record in the specified Timestream for LiveAnalytics table.
 * For more information, see [Amazon Timestream for LiveAnalytics concepts](https://docs.aws.amazon.com/timestream/latest/developerguide/concepts.html)
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface SingleMeasureMapping {
  /**
   * - Target measure name for the measurement attribute in the Timestream table.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-singlemeasuremapping-measurename */
  MeasureName: string | Intrinsic
  /**
   * - Dynamic path of the source field to map to the measure in the record.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-singlemeasuremapping-measurevalue */
  MeasureValue: string | Intrinsic
  /**
   * - Data type of the source field.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `DOUBLE | BIGINT | VARCHAR | BOOLEAN | TIMESTAMP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-singlemeasuremapping-measurevaluetype */
  MeasureValueType: string | Intrinsic
}

/**
 * The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition.
 * ###### Note
 *
 * Environment variables cannot start with " `AWS Batch` ". This naming convention is reserved for variables that AWS Batch sets.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface BatchEnvironmentVariable {
  /**
   * - The name of the key-value pair. For environment variables, this is the name of the environment variable.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-batchenvironmentvariable-name */
  Name?: string | Intrinsic
  /**
   * - The value of the key-value pair. For environment variables, this is the value of the environment variable.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-batchenvironmentvariable-value */
  Value?: string | Intrinsic
}

/**
 * The type and amount of a resource to assign to a container. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface BatchResourceRequirement {
  /**
   * - The type of resource to assign to a container. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `GPU | MEMORY | VCPU`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-batchresourcerequirement-type */
  Type: string | Intrinsic
  /**
   * - The quantity of the specified resource to reserve for the container. The values vary based on the `type` specified.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-batchresourcerequirement-value */
  Value: string | Intrinsic
}

/**
 * This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the `awsvpc` network mode.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface AwsVpcConfiguration {
  /**
   * - Specifies whether the task's elastic network interface receives a public IP address. You can specify `ENABLED` only when `LaunchType` in `EcsParameters` is set to `FARGATE`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ENABLED | DISABLED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-awsvpcconfiguration-assignpublicip */
  AssignPublicIp?: string | Intrinsic
  /**
   * - Specifies the security groups associated with the task. These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 0`
   * - _Maximum_: `1024 | 5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-awsvpcconfiguration-securitygroups */
  SecurityGroups?: (string | Intrinsic)[]
  /**
   * - Specifies the subnets associated with the task. These subnets must all be in the same VPC. You can specify as many as 16 subnets.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1 | 0`
   * - _Maximum_: `1024 | 16`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-awsvpcconfiguration-subnets */
  Subnets: (string | Intrinsic)[]
}

/**
 * The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate. For more information, see [Fargate task storage](https://docs.aws.amazon.com/AmazonECS/latest/userguide/using_data_volumes.html) in the _Amazon ECS User Guide for Fargate_.
 * ###### Note
 *
 * This parameter is only supported for tasks hosted on Fargate using Linux platform version `1.4.0` or later. This parameter is not supported for Windows containers on Fargate.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface EcsEphemeralStorage {
  /**
   * - The total amount, in GiB, of ephemeral storage to set for the task. The minimum supported value is `21` GiB and the maximum supported value is `200` GiB.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `21`
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecsephemeralstorage-sizeingib */
  SizeInGiB: number | Intrinsic
}

/**
 * Details on an Elastic Inference accelerator task override. This parameter is used to override the Elastic Inference accelerator specified in the task definition. For more information, see [Working with Amazon Elastic Inference on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/userguide/ecs-inference.html) in the _Amazon Elastic Container Service Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface EcsInferenceAcceleratorOverride {
  /**
   * - The Elastic Inference accelerator device name to override for the task. This parameter must match a `deviceName` specified in the task definition.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecsinferenceacceleratoroverride-devicename */
  DeviceName?: string | Intrinsic
  /**
   * - The Elastic Inference accelerator type to use.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecsinferenceacceleratoroverride-devicetype */
  DeviceType?: string | Intrinsic
}

/**
 * A mapping of a source event data field to a measure in a Timestream for LiveAnalytics record.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface MultiMeasureAttributeMapping {
  /**
   * - Dynamic path to the measurement attribute in the source event.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-multimeasureattributemapping-measurevalue */
  MeasureValue: string | Intrinsic
  /**
   * - Data type of the measurement attribute in the source event.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `DOUBLE | BIGINT | VARCHAR | BOOLEAN | TIMESTAMP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-multimeasureattributemapping-measurevaluetype */
  MeasureValueType: string | Intrinsic
  /**
   * - Target measure name to be used.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-multimeasureattributemapping-multimeasureattributename */
  MultiMeasureAttributeName: string | Intrinsic
}

/**
 * The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface EcsEnvironmentVariable {
  /**
   * - The name of the key-value pair. For environment variables, this is the name of the environment variable.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecsenvironmentvariable-name */
  Name?: string | Intrinsic
  /**
   * - The value of the key-value pair. For environment variables, this is the value of the environment variable.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecsenvironmentvariable-value */
  Value?: string | Intrinsic
}

/**
 * A list of files containing the environment variables to pass to a container. You can specify up to ten environment files. The file must have a `.env` file extension. Each line in an environment file should contain an environment variable in `VARIABLE=VALUE` format. Lines beginning with `#` are treated as comments and are ignored. For more information about the environment variable file syntax, see [Declare default environment variables in file](https://docs.docker.com/compose/env-file/).
 * If there are environment variables specified using the `environment` parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they're processed from the top down. We recommend that you use unique variable names. For more information, see [Specifying environment variables](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html) in the _Amazon Elastic Container Service Developer Guide_.
 * This parameter is only supported for tasks hosted on Fargate using the following platform versions:
 * *   Linux platform version `1.4.0` or later.
 *
 * *   Windows platform version `1.0.0` or later.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface EcsEnvironmentFile {
  /**
   * - The file type to use. The only supported value is `s3`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `s3`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecsenvironmentfile-type */
  Type: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the Amazon S3 object containing the environment variable file.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecsenvironmentfile-value */
  Value: string | Intrinsic
}

/**
 * The type and amount of a resource to assign to a container. The supported resource types are GPUs and Elastic Inference accelerators. For more information, see [Working with GPUs on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html) or [Working with Amazon Elastic Inference on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html) in the _Amazon Elastic Container Service Developer Guide_
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface EcsResourceRequirement {
  /**
   * - The type of resource to assign to a container. The supported values are `GPU` or `InferenceAccelerator`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `GPU | InferenceAccelerator`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecsresourcerequirement-type */
  Type: string | Intrinsic
  /**
   * - The value for the specified resource type.
   * - If the `GPU` type is used, the value is the number of physical `GPUs` the Amazon ECS container agent reserves for the container. The number of GPUs that's reserved for all containers in a task can't exceed the number of available GPUs on the container instance that the task is launched on.
   * - If the `InferenceAccelerator` type is used, the `value` matches the `deviceName` for an InferenceAccelerator specified in a task definition.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecsresourcerequirement-value */
  Value: string | Intrinsic
}

/**
 * The parameters required to set up enrichment on your pipe.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeEnrichmentParameters {
  /**
   * - Contains the HTTP parameters to use when the target is a API Gateway REST endpoint or EventBridge ApiDestination.
   * - If you specify an API Gateway REST API or EventBridge ApiDestination as a target, you can use this parameter to specify headers, path parameters, and query string keys/values as part of your target invoking request. If you're using ApiDestinations, the corresponding Connection can also have these values configured. In case of any conflicting keys, values from the Connection take precedence.
   * - _Required_: No
   * - _Type_: [PipeEnrichmentHttpParameters](./aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipeenrichmentparameters-httpparameters */
  HttpParameters?: PipeEnrichmentHttpParameters
  /**
   * - Valid JSON text passed to the enrichment. In this case, nothing from the event itself is passed to the enrichment. For more information, see [The JavaScript Object Notation (JSON) Data Interchange Format](http://www.rfc-editor.org/rfc/rfc7159.txt).
   * - To remove an input template, specify an empty string.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `8192`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipeenrichmentparameters-inputtemplate */
  InputTemplate?: string | Intrinsic
}

/**
 * Represents the configuration settings for the logs to which this pipe should report events.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeLogConfiguration {
  /**
   * - The logging configuration settings for the pipe.
   * - _Required_: No
   * - _Type_: [CloudwatchLogsLogDestination](./aws-properties-pipes-pipe-cloudwatchlogslogdestination.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipelogconfiguration-cloudwatchlogslogdestination */
  CloudwatchLogsLogDestination?: CloudwatchLogsLogDestination
  /**
   * - The Amazon Data Firehose logging configuration settings for the pipe.
   * - _Required_: No
   * - _Type_: [FirehoseLogDestination](./aws-properties-pipes-pipe-firehoselogdestination.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipelogconfiguration-firehoselogdestination */
  FirehoseLogDestination?: FirehoseLogDestination
  /**
   * - Whether the execution data (specifically, the `payload`, `awsRequest`, and `awsResponse` fields) is included in the log messages for this pipe.
   * - This applies to all log destinations for the pipe.
   * - For more information, see [Including execution data in logs](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-logs.html#eb-pipes-logs-execution-data) in the _Amazon EventBridge User Guide_.
   * - _Allowed values:_ `ALL`
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipelogconfiguration-includeexecutiondata */
  IncludeExecutionData?: (string | Intrinsic)[]
  /**
   * - The level of logging detail to include. This applies to all log destinations for the pipe.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `OFF | ERROR | INFO | TRACE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipelogconfiguration-level */
  Level?: string | Intrinsic
  /**
   * - The Amazon S3 logging configuration settings for the pipe.
   * - _Required_: No
   * - _Type_: [S3LogDestination](./aws-properties-pipes-pipe-s3logdestination.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipelogconfiguration-s3logdestination */
  S3LogDestination?: S3LogDestination
}

/**
 * The parameters for using an Active MQ broker as a source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeSourceActiveMQBrokerParameters {
  /**
   * - The maximum number of records to include in each batch.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `10000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-batchsize */
  BatchSize?: number | Intrinsic
  /**
   * - The credentials needed to access the resource.
   * - _Required_: Yes
   * - _Type_: [MQBrokerAccessCredentials](./aws-properties-pipes-pipe-mqbrokeraccesscredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-credentials */
  Credentials: MQBrokerAccessCredentials
  /**
   * - The maximum length of a time to wait for events.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `300`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-maximumbatchingwindowinseconds */
  MaximumBatchingWindowInSeconds?: number | Intrinsic
  /**
   * - The name of the destination queue to consume.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[\s\S]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `1000`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-queuename */
  QueueName: string | Intrinsic
}

/**
 * The parameters for using a DynamoDB stream as a source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeSourceDynamoDBStreamParameters {
  /**
   * - The maximum number of records to include in each batch.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `10000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-batchsize */
  BatchSize?: number | Intrinsic
  /**
   * - Define the target queue to send dead-letter queue events to.
   * - _Required_: No
   * - _Type_: [DeadLetterConfig](./aws-properties-pipes-pipe-deadletterconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-deadletterconfig */
  DeadLetterConfig?: DeadLetterConfig
  /**
   * - The maximum length of a time to wait for events.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `300`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-maximumbatchingwindowinseconds */
  MaximumBatchingWindowInSeconds?: number | Intrinsic
  /**
   * - Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, EventBridge never discards old records.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `-1`
   * - _Maximum_: `604800`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-maximumrecordageinseconds */
  MaximumRecordAgeInSeconds?: number | Intrinsic
  /**
   * - Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `-1`
   * - _Maximum_: `10000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-maximumretryattempts */
  MaximumRetryAttempts?: number | Intrinsic
  /**
   * - Define how to handle item process failures. `AUTOMATIC_BISECT` halves each batch and retry each half until all the records are processed or there is one failed message left in the batch.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `AUTOMATIC_BISECT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-onpartialbatchitemfailure */
  OnPartialBatchItemFailure?: string | Intrinsic
  /**
   * - The number of batches to process concurrently from each shard. The default value is 1.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-parallelizationfactor */
  ParallelizationFactor?: number | Intrinsic
  /**
   * - (Streams only) The position in a stream from which to start reading.
   * - _Valid values_: `TRIM_HORIZON | LATEST`
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `TRIM_HORIZON | LATEST`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcedynamodbstreamparameters-startingposition */
  StartingPosition: string | Intrinsic
}

/**
 * The collection of event patterns used to filter events.
 * To remove a filter, specify a `FilterCriteria` object with an empty array of `Filter` objects.
 * For more information, see [Events and Event Patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) in the _Amazon EventBridge User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface FilterCriteria {
  /**
   * - The event patterns.
   * - _Required_: No
   * - _Type_: Array of [Filter](./aws-properties-pipes-pipe-filter.html)
   * - _Minimum_: `0`
   * - _Maximum_: `5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-filtercriteria-filters */
  Filters?: Filter[]
}

/**
 * The parameters for using an MSK stream as a source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeSourceManagedStreamingKafkaParameters {
  /**
   * - The maximum number of records to include in each batch.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `10000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcemanagedstreamingkafkaparameters-batchsize */
  BatchSize?: number | Intrinsic
  /**
   * - The name of the destination queue to consume.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9-\/*:_+=.@-]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `200`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcemanagedstreamingkafkaparameters-consumergroupid */
  ConsumerGroupID?: string | Intrinsic
  /**
   * - The credentials needed to access the resource.
   * - _Required_: No
   * - _Type_: [MSKAccessCredentials](./aws-properties-pipes-pipe-mskaccesscredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcemanagedstreamingkafkaparameters-credentials */
  Credentials?: MSKAccessCredentials
  /**
   * - The maximum length of a time to wait for events.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `300`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcemanagedstreamingkafkaparameters-maximumbatchingwindowinseconds */
  MaximumBatchingWindowInSeconds?: number | Intrinsic
  /**
   * - The position in a stream from which to start reading.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `TRIM_HORIZON | LATEST`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcemanagedstreamingkafkaparameters-startingposition */
  StartingPosition?: string | Intrinsic
  /**
   * - The name of the topic that the pipe will read from.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[^.]([a-zA-Z0-9\-_.]+)$`
   * - _Minimum_: `1`
   * - _Maximum_: `249`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourcemanagedstreamingkafkaparameters-topicname */
  TopicName: string | Intrinsic
}

/**
 * The parameters for using a self-managed Apache Kafka stream as a source.
 * A _self managed_ cluster refers to any Apache Kafka cluster not hosted by AWS. This includes both clusters you manage yourself, as well as those hosted by a third-party provider, such as [Confluent Cloud](https://www.confluent.io/), [CloudKarafka](https://www.cloudkarafka.com/), or [Redpanda](https://redpanda.com/). For more information, see [Apache Kafka streams as a source](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-kafka.html) in the _Amazon EventBridge User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeSourceSelfManagedKafkaParameters {
  /**
   * - An array of server URLs.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 0`
   * - _Maximum_: `300 | 2`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-additionalbootstrapservers */
  AdditionalBootstrapServers?: (string | Intrinsic)[]
  /**
   * - The maximum number of records to include in each batch.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `10000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-batchsize */
  BatchSize?: number | Intrinsic
  /**
   * - The name of the destination queue to consume.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9-\/*:_+=.@-]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `200`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-consumergroupid */
  ConsumerGroupID?: string | Intrinsic
  /**
   * - The credentials needed to access the resource.
   * - _Required_: No
   * - _Type_: [SelfManagedKafkaAccessConfigurationCredentials](./aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationcredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-credentials */
  Credentials?: SelfManagedKafkaAccessConfigurationCredentials
  /**
   * - The maximum length of a time to wait for events.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `300`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-maximumbatchingwindowinseconds */
  MaximumBatchingWindowInSeconds?: number | Intrinsic
  /**
   * - The ARN of the Secrets Manager secret used for certification.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(^arn:aws([a-z]|\-)*:secretsmanager:([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}):(\d{12}):secret:.+)$`
   * - _Minimum_: `1`
   * - _Maximum_: `1600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-serverrootcacertificate */
  ServerRootCaCertificate?: string | Intrinsic
  /**
   * - The position in a stream from which to start reading.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `TRIM_HORIZON | LATEST`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-startingposition */
  StartingPosition?: string | Intrinsic
  /**
   * - The name of the topic that the pipe will read from.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[^.]([a-zA-Z0-9\-_.]+)$`
   * - _Minimum_: `1`
   * - _Maximum_: `249`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-topicname */
  TopicName: string | Intrinsic
  /**
   * - This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used.
   * - _Required_: No
   * - _Type_: [SelfManagedKafkaAccessConfigurationVpc](./aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-vpc */
  Vpc?: SelfManagedKafkaAccessConfigurationVpc
}

/**
 * The parameters for using a SageMaker pipeline as a target.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeTargetSageMakerPipelineParameters {
  /**
   * - List of Parameter names and values for SageMaker Model Building Pipeline execution.
   * - _Required_: No
   * - _Type_: Array of [SageMakerPipelineParameter](./aws-properties-pipes-pipe-sagemakerpipelineparameter.html)
   * - _Minimum_: `0`
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetsagemakerpipelineparameters-pipelineparameterlist */
  PipelineParameterList?: SageMakerPipelineParameter[]
}

/**
 * The overrides that are sent to a container.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface BatchContainerOverrides {
  /**
   * - The command to send to the container that overrides the default command from the Docker image or the task definition.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-batchcontaineroverrides-command */
  Command?: (string | Intrinsic)[]
  /**
   * - The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition.
   * - _Required_: No
   * - _Type_: Array of [BatchEnvironmentVariable](./aws-properties-pipes-pipe-batchenvironmentvariable.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-batchcontaineroverrides-environment */
  Environment?: BatchEnvironmentVariable[]
  /**
   * - The instance type to use for a multi-node parallel job.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-batchcontaineroverrides-instancetype */
  InstanceType?: string | Intrinsic
  /**
   * - The type and amount of resources to assign to a container. This overrides the settings in the job definition. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
   * - _Required_: No
   * - _Type_: Array of [BatchResourceRequirement](./aws-properties-pipes-pipe-batchresourcerequirement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-batchcontaineroverrides-resourcerequirements */
  ResourceRequirements?: BatchResourceRequirement[]
}

/**
 * This structure specifies the network configuration for an Amazon ECS task.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface NetworkConfiguration {
  /**
   * - Use this structure to specify the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the `awsvpc` network mode.
   * - _Required_: No
   * - _Type_: [AwsVpcConfiguration](./aws-properties-pipes-pipe-awsvpcconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-networkconfiguration-awsvpcconfiguration */
  AwsvpcConfiguration?: AwsVpcConfiguration
}

/**
 * Maps multiple measures from the source event to the same Timestream for LiveAnalytics record.
 * For more information, see [Amazon Timestream for LiveAnalytics concepts](https://docs.aws.amazon.com/timestream/latest/developerguide/concepts.html)
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface MultiMeasureMapping {
  /**
   * - Mappings that represent multiple source event fields mapped to measures in the same Timestream for LiveAnalytics record.
   * - _Required_: Yes
   * - _Type_: Array of [MultiMeasureAttributeMapping](./aws-properties-pipes-pipe-multimeasureattributemapping.html)
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-multimeasuremapping-multimeasureattributemappings */
  MultiMeasureAttributeMappings: MultiMeasureAttributeMapping[]
  /**
   * - The name of the multiple measurements per record (multi-measure).
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-multimeasuremapping-multimeasurename */
  MultiMeasureName: string | Intrinsic
}

/**
 * The overrides that are sent to a container. An empty container override can be passed in. An example of an empty container override is `{"containerOverrides": [ ] }`. If a non-empty container override is specified, the `name` parameter must be included.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface EcsContainerOverride {
  /**
   * - The command to send to the container that overrides the default command from the Docker image or the task definition. You must also specify a container name.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecscontaineroverride-command */
  Command?: (string | Intrinsic)[]
  /**
   * - The number of `cpu` units reserved for the container, instead of the default value from the task definition. You must also specify a container name.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecscontaineroverride-cpu */
  Cpu?: number | Intrinsic
  /**
   * - The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name.
   * - _Required_: No
   * - _Type_: Array of [EcsEnvironmentVariable](./aws-properties-pipes-pipe-ecsenvironmentvariable.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecscontaineroverride-environment */
  Environment?: EcsEnvironmentVariable[]
  /**
   * - A list of files containing the environment variables to pass to a container, instead of the value from the container definition.
   * - _Required_: No
   * - _Type_: Array of [EcsEnvironmentFile](./aws-properties-pipes-pipe-ecsenvironmentfile.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecscontaineroverride-environmentfiles */
  EnvironmentFiles?: EcsEnvironmentFile[]
  /**
   * - The hard limit (in MiB) of memory to present to the container, instead of the default value from the task definition. If your container attempts to exceed the memory specified here, the container is killed. You must also specify a container name.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecscontaineroverride-memory */
  Memory?: number | Intrinsic
  /**
   * - The soft limit (in MiB) of memory to reserve for the container, instead of the default value from the task definition. You must also specify a container name.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecscontaineroverride-memoryreservation */
  MemoryReservation?: number | Intrinsic
  /**
   * - The name of the container that receives the override. This parameter is required if any override is specified.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecscontaineroverride-name */
  Name?: string | Intrinsic
  /**
   * - The type and amount of a resource to assign to a container, instead of the default value from the task definition. The only supported resource is a GPU.
   * - _Required_: No
   * - _Type_: Array of [EcsResourceRequirement](./aws-properties-pipes-pipe-ecsresourcerequirement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecscontaineroverride-resourcerequirements */
  ResourceRequirements?: EcsResourceRequirement[]
}

/**
 * The parameters required to set up a source for your pipe.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeSourceParameters {
  /**
   * - The parameters for using an Active MQ broker as a source.
   * - _Required_: No
   * - _Type_: [PipeSourceActiveMQBrokerParameters](./aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourceparameters-activemqbrokerparameters */
  ActiveMQBrokerParameters?: PipeSourceActiveMQBrokerParameters
  /**
   * - The parameters for using a DynamoDB stream as a source.
   * - _Required_: No
   * - _Type_: [PipeSourceDynamoDBStreamParameters](./aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourceparameters-dynamodbstreamparameters */
  DynamoDBStreamParameters?: PipeSourceDynamoDBStreamParameters
  /**
   * - The collection of event patterns used to filter events.
   * - To remove a filter, specify a `FilterCriteria` object with an empty array of `Filter` objects.
   * - For more information, see [Events and Event Patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) in the _Amazon EventBridge User Guide_.
   * - _Required_: No
   * - _Type_: [FilterCriteria](./aws-properties-pipes-pipe-filtercriteria.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourceparameters-filtercriteria */
  FilterCriteria?: FilterCriteria
  /**
   * - The parameters for using a Kinesis stream as a source.
   * - _Required_: No
   * - _Type_: [PipeSourceKinesisStreamParameters](./aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourceparameters-kinesisstreamparameters */
  KinesisStreamParameters?: PipeSourceKinesisStreamParameters
  /**
   * - The parameters for using an MSK stream as a source.
   * - _Required_: No
   * - _Type_: [PipeSourceManagedStreamingKafkaParameters](./aws-properties-pipes-pipe-pipesourcemanagedstreamingkafkaparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourceparameters-managedstreamingkafkaparameters */
  ManagedStreamingKafkaParameters?: PipeSourceManagedStreamingKafkaParameters
  /**
   * - The parameters for using a Rabbit MQ broker as a source.
   * - _Required_: No
   * - _Type_: [PipeSourceRabbitMQBrokerParameters](./aws-properties-pipes-pipe-pipesourcerabbitmqbrokerparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourceparameters-rabbitmqbrokerparameters */
  RabbitMQBrokerParameters?: PipeSourceRabbitMQBrokerParameters
  /**
   * - The parameters for using a self-managed Apache Kafka stream as a source.
   * - A _self managed_ cluster refers to any Apache Kafka cluster not hosted by AWS. This includes both clusters you manage yourself, as well as those hosted by a third-party provider, such as [Confluent Cloud](https://www.confluent.io/), [CloudKarafka](https://www.cloudkarafka.com/), or [Redpanda](https://redpanda.com/). For more information, see [Apache Kafka streams as a source](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-kafka.html) in the _Amazon EventBridge User Guide_.
   * - _Required_: No
   * - _Type_: [PipeSourceSelfManagedKafkaParameters](./aws-properties-pipes-pipe-pipesourceselfmanagedkafkaparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourceparameters-selfmanagedkafkaparameters */
  SelfManagedKafkaParameters?: PipeSourceSelfManagedKafkaParameters
  /**
   * - The parameters for using a Amazon SQS stream as a source.
   * - _Required_: No
   * - _Type_: [PipeSourceSqsQueueParameters](./aws-properties-pipes-pipe-pipesourcesqsqueueparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipesourceparameters-sqsqueueparameters */
  SqsQueueParameters?: PipeSourceSqsQueueParameters
}

/**
 * The parameters for using an AWS Batch job as a target.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeTargetBatchJobParameters {
  /**
   * - The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job.
   * - _Required_: No
   * - _Type_: [BatchArrayProperties](./aws-properties-pipes-pipe-batcharrayproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetbatchjobparameters-arrayproperties */
  ArrayProperties?: BatchArrayProperties
  /**
   * - The overrides that are sent to a container.
   * - _Required_: No
   * - _Type_: [BatchContainerOverrides](./aws-properties-pipes-pipe-batchcontaineroverrides.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetbatchjobparameters-containeroverrides */
  ContainerOverrides?: BatchContainerOverrides
  /**
   * - A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a `SEQUENTIAL` type dependency without specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an `N_TO_N` type dependency with a job ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each dependency to complete before it can begin.
   * - _Required_: No
   * - _Type_: Array of [BatchJobDependency](./aws-properties-pipes-pipe-batchjobdependency.html)
   * - _Minimum_: `0`
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetbatchjobparameters-dependson */
  DependsOn?: BatchJobDependency[]
  /**
   * - The job definition used by this job. This value can be one of `name`, `name:revision`, or the Amazon Resource Name (ARN) for the job definition. If name is specified without a revision then the latest active revision is used.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetbatchjobparameters-jobdefinition */
  JobDefinition: string | Intrinsic
  /**
   * - The name of the job. It can be up to 128 letters long. The first character must be alphanumeric, can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (\_).
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetbatchjobparameters-jobname */
  JobName: string | Intrinsic
  /**
   * - Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and value pair mapping. Parameters included here override any corresponding parameter defaults from the job definition.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `.+`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetbatchjobparameters-parameters */
  Parameters?: Record<string, string | Intrinsic>
  /**
   * - The retry strategy to use for failed jobs. When a retry strategy is specified here, it overrides the retry strategy defined in the job definition.
   * - _Required_: No
   * - _Type_: [BatchRetryStrategy](./aws-properties-pipes-pipe-batchretrystrategy.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetbatchjobparameters-retrystrategy */
  RetryStrategy?: BatchRetryStrategy
}

/**
 * The parameters for using a Timestream for LiveAnalytics table as a target.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeTargetTimestreamParameters {
  /**
   * - Map source data to dimensions in the target Timestream for LiveAnalytics table.
   * - For more information, see [Amazon Timestream for LiveAnalytics concepts](https://docs.aws.amazon.com/timestream/latest/developerguide/concepts.html)
   * - _Required_: Yes
   * - _Type_: Array of [DimensionMapping](./aws-properties-pipes-pipe-dimensionmapping.html)
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargettimestreamparameters-dimensionmappings */
  DimensionMappings: DimensionMapping[]
  /**
   * - The granularity of the time units used. Default is `MILLISECONDS`.
   * - Required if `TimeFieldType` is specified as `EPOCH`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `MILLISECONDS | SECONDS | MICROSECONDS | NANOSECONDS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargettimestreamparameters-epochtimeunit */
  EpochTimeUnit?: string | Intrinsic
  /**
   * - Maps multiple measures from the source event to the same record in the specified Timestream for LiveAnalytics table.
   * - _Required_: No
   * - _Type_: Array of [MultiMeasureMapping](./aws-properties-pipes-pipe-multimeasuremapping.html)
   * - _Minimum_: `0`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargettimestreamparameters-multimeasuremappings */
  MultiMeasureMappings?: MultiMeasureMapping[]
  /**
   * - Mappings of single source data fields to individual records in the specified Timestream for LiveAnalytics table.
   * - _Required_: No
   * - _Type_: Array of [SingleMeasureMapping](./aws-properties-pipes-pipe-singlemeasuremapping.html)
   * - _Minimum_: `0`
   * - _Maximum_: `8192`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargettimestreamparameters-singlemeasuremappings */
  SingleMeasureMappings?: SingleMeasureMapping[]
  /**
   * - The type of time value used.
   * - The default is `EPOCH`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `EPOCH | TIMESTAMP_FORMAT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargettimestreamparameters-timefieldtype */
  TimeFieldType?: string | Intrinsic
  /**
   * - How to format the timestamps. For example, `yyyy-MM-dd'T'HH:mm:ss'Z'`.
   * - Required if `TimeFieldType` is specified as `TIMESTAMP_FORMAT`.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargettimestreamparameters-timestampformat */
  TimestampFormat?: string | Intrinsic
  /**
   * - Dynamic path to the source data field that represents the time value for your data.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargettimestreamparameters-timevalue */
  TimeValue: string | Intrinsic
  /**
   * - 64 bit version value or source data field that represents the version value for your data.
   * - Write requests with a higher version number will update the existing measure values of the record and version. In cases where the measure value is the same, the version will still be updated.
   * - Default value is 1.
   * - Timestream for LiveAnalytics does not support updating partial measure values in a record.
   * - Write requests for duplicate data with a higher version number will update the existing measure value and version. In cases where the measure value is the same, `Version` will still be updated. Default value is `1`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargettimestreamparameters-versionvalue */
  VersionValue: string | Intrinsic
}

/**
 * The overrides that are associated with a task.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface EcsTaskOverride {
  /**
   * - One or more container overrides that are sent to a task.
   * - _Required_: No
   * - _Type_: Array of [EcsContainerOverride](./aws-properties-pipes-pipe-ecscontaineroverride.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecstaskoverride-containeroverrides */
  ContainerOverrides?: EcsContainerOverride[]
  /**
   * - The cpu override for the task.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecstaskoverride-cpu */
  Cpu?: string | Intrinsic
  /**
   * - The ephemeral storage setting override for the task.
   * - _Required_: No
   * - _Type_: [EcsEphemeralStorage](./aws-properties-pipes-pipe-ecsephemeralstorage.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecstaskoverride-ephemeralstorage */
  EphemeralStorage?: EcsEphemeralStorage
  /**
   * - The Amazon Resource Name (ARN) of the task execution IAM role override for the task. For more information, see [Amazon ECS task execution IAM role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html) in the _Amazon Elastic Container Service Developer Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-]+):([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1})?:(\d{12})?:(.+)|(\$(\.[\w/_-]+(\[(\d+|\*)\])*)*)$`
   * - _Minimum_: `1`
   * - _Maximum_: `1600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecstaskoverride-executionrolearn */
  ExecutionRoleArn?: string | Intrinsic
  /**
   * - The Elastic Inference accelerator override for the task.
   * - _Required_: No
   * - _Type_: Array of [EcsInferenceAcceleratorOverride](./aws-properties-pipes-pipe-ecsinferenceacceleratoroverride.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecstaskoverride-inferenceacceleratoroverrides */
  InferenceAcceleratorOverrides?: EcsInferenceAcceleratorOverride[]
  /**
   * - The memory override for the task.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecstaskoverride-memory */
  Memory?: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role. For more information, see [IAM Role for Tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) in the _Amazon Elastic Container Service Developer Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-]+):([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1})?:(\d{12})?:(.+)|(\$(\.[\w/_-]+(\[(\d+|\*)\])*)*)$`
   * - _Minimum_: `1`
   * - _Maximum_: `1600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-ecstaskoverride-taskrolearn */
  TaskRoleArn?: string | Intrinsic
}

/**
 * The parameters for using an Amazon ECS task as a target.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeTargetEcsTaskParameters {
  /**
   * - The capacity provider strategy to use for the task.
   * - If a `capacityProviderStrategy` is specified, the `launchType` parameter must be omitted. If no `capacityProviderStrategy` or launchType is specified, the `defaultCapacityProviderStrategy` for the cluster is used.
   * - _Required_: No
   * - _Type_: Array of [CapacityProviderStrategyItem](./aws-properties-pipes-pipe-capacityproviderstrategyitem.html)
   * - _Minimum_: `0`
   * - _Maximum_: `6`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetecstaskparameters-capacityproviderstrategy */
  CapacityProviderStrategy?: CapacityProviderStrategyItem[]
  /**
   * - Specifies whether to enable Amazon ECS managed tags for the task. For more information, see [Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the Amazon Elastic Container Service Developer Guide.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetecstaskparameters-enableecsmanagedtags */
  EnableECSManagedTags?: boolean | Intrinsic
  /**
   * - Whether or not to enable the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetecstaskparameters-enableexecutecommand */
  EnableExecuteCommand?: boolean | Intrinsic
  /**
   * - Specifies an Amazon ECS task group for the task. The maximum length is 255 characters.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetecstaskparameters-group */
  Group?: string | Intrinsic
  /**
   * - Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The `FARGATE` value is supported only in the Regions where AWS Fargate with Amazon ECS is supported. For more information, see [AWS Fargate on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS-Fargate.html) in the _Amazon Elastic Container Service Developer Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `EC2 | FARGATE | EXTERNAL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetecstaskparameters-launchtype */
  LaunchType?: string | Intrinsic
  /**
   * - Use this structure if the Amazon ECS task uses the `awsvpc` network mode. This structure specifies the VPC subnets and security groups associated with the task, and whether a public IP address is to be used. This structure is required if `LaunchType` is `FARGATE` because the `awsvpc` mode is required for Fargate tasks.
   * - If you specify `NetworkConfiguration` when the target ECS task does not use the `awsvpc` network mode, the task fails.
   * - _Required_: No
   * - _Type_: [NetworkConfiguration](./aws-properties-pipes-pipe-networkconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetecstaskparameters-networkconfiguration */
  NetworkConfiguration?: NetworkConfiguration
  /**
   * - The overrides that are associated with a task.
   * - _Required_: No
   * - _Type_: [EcsTaskOverride](./aws-properties-pipes-pipe-ecstaskoverride.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetecstaskparameters-overrides */
  Overrides?: EcsTaskOverride
  /**
   * - An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).
   * - _Required_: No
   * - _Type_: Array of [PlacementConstraint](./aws-properties-pipes-pipe-placementconstraint.html)
   * - _Minimum_: `0`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetecstaskparameters-placementconstraints */
  PlacementConstraints?: PlacementConstraint[]
  /**
   * - The placement strategy objects to use for the task. You can specify a maximum of five strategy rules per task.
   * - _Required_: No
   * - _Type_: [Array](./aws-properties-pipes-pipe-placementstrategy.html) of [PlacementStrategy](./aws-properties-pipes-pipe-placementstrategy.html)
   * - _Minimum_: `0`
   * - _Maximum_: `5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetecstaskparameters-placementstrategy */
  PlacementStrategy?: PlacementStrategy[]
  /**
   * - Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as `1.1.0`.
   * - This structure is used only if `LaunchType` is `FARGATE`. For more information about valid platform versions, see [AWS Fargate Platform Versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the _Amazon Elastic Container Service Developer Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetecstaskparameters-platformversion */
  PlatformVersion?: string | Intrinsic
  /**
   * - Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the `TagResource` API action.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `TASK_DEFINITION`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetecstaskparameters-propagatetags */
  PropagateTags?: string | Intrinsic
  /**
   * - The reference ID to use for the task.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetecstaskparameters-referenceid */
  ReferenceId?: string | Intrinsic
  /**
   * - The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. To learn more, see [RunTask](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-tags) in the Amazon ECS API Reference.
   * - _Required_: No
   * - _Type_: Array of [Tag](./aws-properties-pipes-pipe-tag.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetecstaskparameters-tags */
  Tags?: Tag[]
  /**
   * - The number of tasks to create based on `TaskDefinition`. The default is 1.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetecstaskparameters-taskcount */
  TaskCount?: number | Intrinsic
  /**
   * - The ARN of the task definition to use if the event target is an Amazon ECS task.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-]+):([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1})?:(\d{12})?:(.+)|(\$(\.[\w/_-]+(\[(\d+|\*)\])*)*)$`
   * - _Minimum_: `1`
   * - _Maximum_: `1600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetecstaskparameters-taskdefinitionarn */
  TaskDefinitionArn: string | Intrinsic
}

/**
 * The parameters required to set up a target for your pipe.
 * For more information about pipe target parameters, including how to use dynamic path parameters, see [Target parameters](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html) in the _Amazon EventBridge User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipeTargetParameters {
  /**
   * - The parameters for using an AWS Batch job as a target.
   * - _Required_: No
   * - _Type_: [PipeTargetBatchJobParameters](./aws-properties-pipes-pipe-pipetargetbatchjobparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetparameters-batchjobparameters */
  BatchJobParameters?: PipeTargetBatchJobParameters
  /**
   * - The parameters for using an CloudWatch Logs log stream as a target.
   * - _Required_: No
   * - _Type_: [PipeTargetCloudWatchLogsParameters](./aws-properties-pipes-pipe-pipetargetcloudwatchlogsparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetparameters-cloudwatchlogsparameters */
  CloudWatchLogsParameters?: PipeTargetCloudWatchLogsParameters
  /**
   * - The parameters for using an Amazon ECS task as a target.
   * - _Required_: No
   * - _Type_: [PipeTargetEcsTaskParameters](./aws-properties-pipes-pipe-pipetargetecstaskparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetparameters-ecstaskparameters */
  EcsTaskParameters?: PipeTargetEcsTaskParameters
  /**
   * - The parameters for using an EventBridge event bus as a target.
   * - _Required_: No
   * - _Type_: [PipeTargetEventBridgeEventBusParameters](./aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetparameters-eventbridgeeventbusparameters */
  EventBridgeEventBusParameters?: PipeTargetEventBridgeEventBusParameters
  /**
   * - These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations.
   * - _Required_: No
   * - _Type_: [PipeTargetHttpParameters](./aws-properties-pipes-pipe-pipetargethttpparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetparameters-httpparameters */
  HttpParameters?: PipeTargetHttpParameters
  /**
   * - Valid JSON text passed to the target. In this case, nothing from the event itself is passed to the target. For more information, see [The JavaScript Object Notation (JSON) Data Interchange Format](http://www.rfc-editor.org/rfc/rfc7159.txt).
   * - To remove an input template, specify an empty string.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `8192`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetparameters-inputtemplate */
  InputTemplate?: string | Intrinsic
  /**
   * - The parameters for using a Kinesis stream as a target.
   * - _Required_: No
   * - _Type_: [PipeTargetKinesisStreamParameters](./aws-properties-pipes-pipe-pipetargetkinesisstreamparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetparameters-kinesisstreamparameters */
  KinesisStreamParameters?: PipeTargetKinesisStreamParameters
  /**
   * - The parameters for using a Lambda function as a target.
   * - _Required_: No
   * - _Type_: [PipeTargetLambdaFunctionParameters](./aws-properties-pipes-pipe-pipetargetlambdafunctionparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetparameters-lambdafunctionparameters */
  LambdaFunctionParameters?: PipeTargetLambdaFunctionParameters
  /**
   * - These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API BatchExecuteStatement.
   * - _Required_: No
   * - _Type_: [PipeTargetRedshiftDataParameters](./aws-properties-pipes-pipe-pipetargetredshiftdataparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetparameters-redshiftdataparameters */
  RedshiftDataParameters?: PipeTargetRedshiftDataParameters
  /**
   * - The parameters for using a SageMaker pipeline as a target.
   * - _Required_: No
   * - _Type_: [PipeTargetSageMakerPipelineParameters](./aws-properties-pipes-pipe-pipetargetsagemakerpipelineparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetparameters-sagemakerpipelineparameters */
  SageMakerPipelineParameters?: PipeTargetSageMakerPipelineParameters
  /**
   * - The parameters for using a Amazon SQS stream as a target.
   * - _Required_: No
   * - _Type_: [PipeTargetSqsQueueParameters](./aws-properties-pipes-pipe-pipetargetsqsqueueparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetparameters-sqsqueueparameters */
  SqsQueueParameters?: PipeTargetSqsQueueParameters
  /**
   * - The parameters for using a Step Functions state machine as a target.
   * - _Required_: No
   * - _Type_: [PipeTargetStateMachineParameters](./aws-properties-pipes-pipe-pipetargetstatemachineparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetparameters-stepfunctionstatemachineparameters */
  StepFunctionStateMachineParameters?: PipeTargetStateMachineParameters
  /**
   * - The parameters for using a Timestream for LiveAnalytics table as a target.
   * - _Required_: No
   * - _Type_: [PipeTargetTimestreamParameters](./aws-properties-pipes-pipe-pipetargettimestreamparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-pipetargetparameters-timestreamparameters */
  TimestreamParameters?: PipeTargetTimestreamParameters
}

/**
 * Specifies a pipe. Amazon EventBridge Pipes connect event sources to targets and reduces the need for specialized knowledge and integration code.
 * ###### Note
 *
 * As an aid to help you jumpstart developing CloudFormation templates, the EventBridge console enables you to create templates from the existing pipes in your account. For more information, see [Generate an CloudFormation template from EventBridge Pipes](https://docs.aws.amazon.com/eventbridge/latest/userguide/pipes-generate-template.html) in the _Amazon EventBridge User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html */

export interface PipesPipe extends ResourceAttributes {
  Type: 'AWS::Pipes::Pipe'
  Properties: {
    /**
     * - A description of the pipe.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Minimum_: `0`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-description */
    Description?: string | Intrinsic
    /**
     * - The state the pipe should be in.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `RUNNING | STOPPED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-desiredstate */
    DesiredState?: string | Intrinsic
    /**
     * - The ARN of the enrichment resource.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^$|arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-]+):([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1})?:(\d{12})?:(.+)$`
     * - _Minimum_: `0`
     * - _Maximum_: `1600`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-enrichment */
    Enrichment?: string | Intrinsic
    /**
     * - The parameters required to set up enrichment on your pipe.
     * - _Required_: No
     * - _Type_: [PipeEnrichmentParameters](./aws-properties-pipes-pipe-pipeenrichmentparameters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-enrichmentparameters */
    EnrichmentParameters?: PipeEnrichmentParameters
    /**
     * - The identifier of the AWS KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt pipe data. The identifier can be the key Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN.
     * - To update a pipe that is using the default AWS owned key to use a customer managed key instead, or update a pipe that is using a customer managed key to use a different customer managed key, specify a customer managed key identifier.
     * - To update a pipe that is using a customer managed key to use the default AWS owned key, specify an empty string.
     * - For more information, see [Managing keys](https://docs.aws.amazon.com/kms/latest/developerguide/getting-started.html) in the _AWS Key Management Service Developer Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-kmskeyidentifier */
    KmsKeyIdentifier?: string | Intrinsic
    /**
     * - The logging configuration settings for the pipe.
     * - _Required_: No
     * - _Type_: [PipeLogConfiguration](./aws-properties-pipes-pipe-pipelogconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-logconfiguration */
    LogConfiguration?: PipeLogConfiguration
    /**
     * - The name of the pipe.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\.\-_A-Za-z0-9]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-name */
    Name?: string | Intrinsic
    /**
     * - The ARN of the role that allows the pipe to send data to the target.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role/?[a-zA-Z0-9+=,.@\-_/]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `1600`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-rolearn */
    RoleArn: string | Intrinsic
    /**
     * - The ARN of the source resource.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^smk://(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9]):[0-9]{1,5}|arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-]+):([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1})?:(\d{12})?:(.+)$`
     * - _Minimum_: `1`
     * - _Maximum_: `1600`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-source */
    Source: string | Intrinsic
    /**
     * - The parameters required to set up a source for your pipe.
     * - _Required_: No
     * - _Type_: [PipeSourceParameters](./aws-properties-pipes-pipe-pipesourceparameters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-sourceparameters */
    SourceParameters?: PipeSourceParameters
    /**
     * - The list of key-value pairs to associate with the pipe.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.+`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-tags */
    Tags?: Record<string, string | Intrinsic>
    /**
     * - The ARN of the target resource.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-]+):([a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1})?:(\d{12})?:(.+)$`
     * - _Minimum_: `1`
     * - _Maximum_: `1600`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-target */
    Target: string | Intrinsic
    /**
     * - The parameters required to set up a target for your pipe.
     * - For more information about pipe target parameters, including how to use dynamic path parameters, see [Target parameters](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html) in the _Amazon EventBridge User Guide_.
     * - _Required_: No
     * - _Type_: [PipeTargetParameters](./aws-properties-pipes-pipe-pipetargetparameters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html#cfn-pipes-pipe-targetparameters */
    TargetParameters?: PipeTargetParameters
  }
}
