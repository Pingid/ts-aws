import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html */

export interface AmazonManagedKafkaEventSourceConfig {
    /**
     * - The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9-\/*:_+=.@-]*`
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-amazonmanagedkafkaeventsourceconfig-consumergroupid */
    "ConsumerGroupId"?: string | Intrinsic;
}

/**
 * Specific configuration settings for a DocumentDB event source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html */

export interface DocumentDBEventSourceConfig {
    /**
     * - The name of the collection to consume within the database. If you do not specify a collection, Lambda consumes all collections.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `57`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-documentdbeventsourceconfig-collectionname */
    "CollectionName"?: string | Intrinsic;
    /**
     * - The name of the database to consume within the DocumentDB cluster.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-documentdbeventsourceconfig-databasename */
    "DatabaseName"?: string | Intrinsic;
    /**
     * - Determines what DocumentDB sends to your event stream during document update operations. If set to UpdateLookup, DocumentDB sends a delta describing the changes, along with a copy of the entire document. Otherwise, DocumentDB sends only a partial document that contains the changes.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `UpdateLookup | Default`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-documentdbeventsourceconfig-fulldocument */
    "FullDocument"?: string | Intrinsic;
}

/**
 * The metrics configuration for your event source. Use this configuration object to define which metrics you want your event source mapping to produce.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html */

export interface MetricsConfig {
    /**
     * - The metrics you want your event source mapping to produce. Include `EventCount` to receive event source mapping metrics related to the number of events processed by your event source mapping. For more information about these metrics, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics).
     * - _Required_: No
     * - _Type_: Array of String
     * - _Allowed values_: `EventCount`
     * - _Minimum_: `0`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-metricsconfig-metrics */
    "Metrics"?: (string | Intrinsic)[];
}

/**
 * The [provisioned mode](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-provisioned-mode) configuration for the event source. Use provisioned mode to customize the minimum and maximum number of event pollers for your event source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html */

export interface ProvisionedPollerConfig {
    /**
     * - The maximum number of event pollers this event source can scale up to.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `2000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-provisionedpollerconfig-maximumpollers */
    "MaximumPollers"?: number | Intrinsic;
    /**
     * - The minimum number of event pollers this event source can scale down to.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-provisionedpollerconfig-minimumpollers */
    "MinimumPollers"?: number | Intrinsic;
}

/**
 * Specific configuration settings for a self-managed Apache Kafka event source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html */

export interface SelfManagedKafkaEventSourceConfig {
    /**
     * - The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-kafka-process.html#services-smaa-topic-add).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9-\/*:_+=.@-]*`
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-selfmanagedkafkaeventsourceconfig-consumergroupid */
    "ConsumerGroupId"?: string | Intrinsic;
}

/**
 * (Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html */

export interface ScalingConfig {
    /**
     * - Limits the number of concurrent instances that the Amazon SQS event source can invoke.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `2`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-scalingconfig-maximumconcurrency */
    "MaximumConcurrency"?: number | Intrinsic;
}

/**
 * An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html */

export interface SourceAccessConfiguration {
    /**
     * - The type of authentication protocol, VPC components, or virtual host for your event source. For example: `"Type":"SASL_SCRAM_512_AUTH"`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `BASIC_AUTH | VPC_SUBNET | VPC_SECURITY_GROUP | SASL_SCRAM_512_AUTH | SASL_SCRAM_256_AUTH | VIRTUAL_HOST | CLIENT_CERTIFICATE_TLS_AUTH | SERVER_ROOT_CA_CERTIFICATE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-sourceaccessconfiguration-type */
    "Type"?: string | Intrinsic;
    /**
     * - The value for your chosen configuration in `Type`. For example: `"URI": "arn:aws:secretsmanager:us-east-1:01234567890:secret:MyBrokerSecretName"`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9-\/*:_+=.@-]*`
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-sourceaccessconfiguration-uri */
    "URI"?: string | Intrinsic;
}

/**
 * A [tag](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the event source mapping.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html */

export interface Tag {
    /**
     * - The key for this tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value for this tag.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-tag-value */
    "Value"?: string | Intrinsic;
}

/**
 * A destination for events that failed processing. See [Capturing records of Lambda asynchronous invocations](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async-retain-records.html) for more information.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html */

export interface OnFailure {
    /**
     * - The Amazon Resource Name (ARN) of the destination resource.
     * - To retain records of unsuccessful [asynchronous invocations](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations), you can configure an Amazon SNS topic, Amazon SQS queue, Amazon S3 bucket, Lambda function, or Amazon EventBridge event bus as the destination.
     * - To retain records of failed invocations from [Kinesis](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html), [DynamoDB](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html), [self-managed Kafka](https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-smaa-onfailure-destination) or [Amazon MSK](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-onfailure-destination), you can configure an Amazon SNS topic, Amazon SQS queue, or Amazon S3 bucket as the destination.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?(-iso([a-z])?)?-[a-z]+-\d{1})?:(\d{12})?:(.*)`
     * - _Minimum_: `12`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-onfailure-destination */
    "Destination"?: string | Intrinsic;
}

/**
 * A configuration object that specifies the destination of an event after Lambda processes it.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html */

export interface DestinationConfig {
    /**
     * - The destination configuration for failed invocations.
     * - _Required_: No
     * - _Type_: [OnFailure](./aws-properties-lambda-eventsourcemapping-onfailure.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-destinationconfig-onfailure */
    "OnFailure"?: OnFailure;
}

/**
 * A structure within a `FilterCriteria` object that defines an event filtering pattern.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html */

export interface Filter {
    /**
     * - A filter pattern. For more information on the syntax of a filter pattern, see [Filter rule syntax](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-syntax).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Minimum_: `0`
     * - _Maximum_: `4096`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-filter-pattern */
    "Pattern"?: string | Intrinsic;
}

/**
 * An object that contains the filters for an event source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html */

export interface FilterCriteria {
    /**
     * - A list of filters.
     * - _Required_: No
     * - _Type_: Array of [Filter](./aws-properties-lambda-eventsourcemapping-filter.html)
     * - _Minimum_: `1`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-filtercriteria-filters */
    "Filters"?: Filter[];
}

/**
 * The list of bootstrap servers for your Kafka brokers in the following format: `"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html */

export interface Endpoints {
    /**
     * - The list of bootstrap servers for your Kafka brokers in the following format: `"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1 | 1`
     * - _Maximum_: `300 | 10`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-endpoints-kafkabootstrapservers */
    "KafkaBootstrapServers"?: (string | Intrinsic)[];
}

/**
 * The self-managed Apache Kafka cluster for your event source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html */

export interface SelfManagedEventSource {
    /**
     * - The list of bootstrap servers for your Kafka brokers in the following format: `"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]`.
     * - _Required_: No
     * - _Type_: [Endpoints](./aws-properties-lambda-eventsourcemapping-endpoints.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-selfmanagedeventsource-endpoints */
    "Endpoints"?: Endpoints;
}

/**
 * The `AWS::Lambda::EventSourceMapping` resource creates a mapping between an event source and an AWS Lambda function. Lambda reads items from the event source and triggers the function.
 * For details about each event source type, see the following topics. In particular, each of the topics describes the required and optional parameters for the specific event source.
 * *   [Configuring a Dynamo DB stream as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping)
 *     
 * *   [Configuring a Kinesis stream as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping)
 *     
 * *   [Configuring an SQS queue as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource)
 *     
 * *   [Configuring an MQ broker as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping)
 *     
 * *   [Configuring MSK as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html)
 *     
 * *   [Configuring Self-Managed Apache Kafka as an event source](https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html)
 *     
 * *   [Configuring Amazon DocumentDB as an event source](https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html)
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html */

export interface LambdaEventSourceMapping extends ResourceAttributes {
    "Type": "AWS::Lambda::EventSourceMapping";
    "Properties": {
        /**
         * - Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
         * - _Required_: No
         * - _Type_: [AmazonManagedKafkaEventSourceConfig](./aws-properties-lambda-eventsourcemapping-amazonmanagedkafkaeventsourceconfig.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-amazonmanagedkafkaeventsourceconfig */
        "AmazonManagedKafkaEventSourceConfig"?: AmazonManagedKafkaEventSourceConfig;
        /**
         * - The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).
         * - _Required_: No
         * - _Type_: Integer
         * - _Minimum_: `1`
         * - _Maximum_: `10000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-batchsize */
        "BatchSize"?: number | Intrinsic;
        /**
         * - (Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry. The default value is false.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-bisectbatchonfunctionerror */
        "BisectBatchOnFunctionError"?: boolean | Intrinsic;
        /**
         * - (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka event sources only) A configuration object that specifies the destination of an event after Lambda processes it.
         * - _Required_: No
         * - _Type_: [DestinationConfig](./aws-properties-lambda-eventsourcemapping-destinationconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-destinationconfig */
        "DestinationConfig"?: DestinationConfig;
        /**
         * - Specific configuration settings for a DocumentDB event source.
         * - _Required_: No
         * - _Type_: [DocumentDBEventSourceConfig](./aws-properties-lambda-eventsourcemapping-documentdbeventsourceconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-documentdbeventsourceconfig */
        "DocumentDBEventSourceConfig"?: DocumentDBEventSourceConfig;
        /**
         * - When true, the event source mapping is active. When false, Lambda pauses polling and invocation.
         * - Default: True
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-enabled */
        "Enabled"?: boolean | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the event source.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}(-gov)?(-iso([a-z])?)?-[a-z]+-\d{1})?:(\d{12})?:(.*)`
         * - _Minimum_: `12`
         * - _Maximum_: `1024`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-eventsourcearn */
        "EventSourceArn"?: string | Intrinsic;
        /**
         * - An object that defines the filter criteria that determine whether Lambda should process an event. For more information, see [Lambda event filtering](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html).
         * - _Required_: No
         * - _Type_: [FilterCriteria](./aws-properties-lambda-eventsourcemapping-filtercriteria.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-filtercriteria */
        "FilterCriteria"?: FilterCriteria;
        /**
         * - The name or ARN of the Lambda function.
         * - The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?(-iso([a-z])?)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?`
         * - _Minimum_: `1`
         * - _Maximum_: `140`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-functionname */
        "FunctionName": string | Intrinsic;
        /**
         * - (Kinesis, DynamoDB Streams, and SQS) A list of current response type enums applied to the event source mapping.
         * - Valid Values: `ReportBatchItemFailures`
         * - _Required_: No
         * - _Type_: Array of String
         * - _Allowed values_: `ReportBatchItemFailures`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-functionresponsetypes */
        "FunctionResponseTypes"?: (string | Intrinsic)[];
        /**
         * - The ARN of the AWS Key Management Service (AWS KMS) customer managed key that Lambda uses to encrypt your function's [filter criteria](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-basics).
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()`
         * - _Minimum_: `12`
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-kmskeyarn */
        "KmsKeyArn"?: string | Intrinsic;
        /**
         * - The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function.
         * - **Default (Kinesis, DynamoDB, Amazon SQS event sources)**: 0
         * - **Default (Amazon MSK, Kafka, Amazon MQ, Amazon DocumentDB event sources)**: 500 ms
         * - **Related setting:** For Amazon SQS event sources, when you set `BatchSize` to a value greater than 10, you must set `MaximumBatchingWindowInSeconds` to at least 1.
         * - _Required_: No
         * - _Type_: Integer
         * - _Minimum_: `0`
         * - _Maximum_: `300`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-maximumbatchingwindowinseconds */
        "MaximumBatchingWindowInSeconds"?: number | Intrinsic;
        /**
         * - (Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, Lambda never discards old records.
         * - _Required_: No
         * - _Type_: Integer
         * - _Minimum_: `-1`
         * - _Maximum_: `604800`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-maximumrecordageinseconds */
        "MaximumRecordAgeInSeconds"?: number | Intrinsic;
        /**
         * - (Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, Lambda retries failed records until the record expires in the event source.
         * - _Required_: No
         * - _Type_: Integer
         * - _Minimum_: `-1`
         * - _Maximum_: `10000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-maximumretryattempts */
        "MaximumRetryAttempts"?: number | Intrinsic;
        /**
         * - The metrics configuration for your event source. For more information, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics).
         * - _Required_: No
         * - _Type_: [MetricsConfig](./aws-properties-lambda-eventsourcemapping-metricsconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-metricsconfig */
        "MetricsConfig"?: MetricsConfig;
        /**
         * - (Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard. The default value is 1.
         * - _Required_: No
         * - _Type_: Integer
         * - _Minimum_: `1`
         * - _Maximum_: `10`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-parallelizationfactor */
        "ParallelizationFactor"?: number | Intrinsic;
        /**
         * - (Amazon MSK and self-managed Apache Kafka only) The provisioned mode configuration for the event source. For more information, see [provisioned mode](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-provisioned-mode).
         * - _Required_: No
         * - _Type_: [ProvisionedPollerConfig](./aws-properties-lambda-eventsourcemapping-provisionedpollerconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-provisionedpollerconfig */
        "ProvisionedPollerConfig"?: ProvisionedPollerConfig;
        /**
         * - (Amazon MQ) The name of the Amazon MQ broker destination queue to consume.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Minimum_: `1 | 1`
         * - _Maximum_: `1000 | 1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-queues */
        "Queues"?: (string | Intrinsic)[];
        /**
         * - (Amazon SQS only) The scaling configuration for the event source. For more information, see [Configuring maximum concurrency for Amazon SQS event sources](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency).
         * - _Required_: No
         * - _Type_: [ScalingConfig](./aws-properties-lambda-eventsourcemapping-scalingconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-scalingconfig */
        "ScalingConfig"?: ScalingConfig;
        /**
         * - The self-managed Apache Kafka cluster for your event source.
         * - _Required_: No
         * - _Type_: [SelfManagedEventSource](./aws-properties-lambda-eventsourcemapping-selfmanagedeventsource.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-selfmanagedeventsource */
        "SelfManagedEventSource"?: SelfManagedEventSource;
        /**
         * - Specific configuration settings for a self-managed Apache Kafka event source.
         * - _Required_: No
         * - _Type_: [SelfManagedKafkaEventSourceConfig](./aws-properties-lambda-eventsourcemapping-selfmanagedkafkaeventsourceconfig.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-selfmanagedkafkaeventsourceconfig */
        "SelfManagedKafkaEventSourceConfig"?: SelfManagedKafkaEventSourceConfig;
        /**
         * - An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.
         * - _Required_: No
         * - _Type_: Array of [SourceAccessConfiguration](./aws-properties-lambda-eventsourcemapping-sourceaccessconfiguration.html)
         * - _Minimum_: `1`
         * - _Maximum_: `22`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-sourceaccessconfigurations */
        "SourceAccessConfigurations"?: SourceAccessConfiguration[];
        /**
         * - The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `(LATEST|TRIM_HORIZON|AT_TIMESTAMP)+`
         * - _Minimum_: `6`
         * - _Maximum_: `12`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-startingposition */
        "StartingPosition"?: string | Intrinsic;
        /**
         * - With `StartingPosition` set to `AT_TIMESTAMP`, the time from which to start reading, in Unix time seconds. `StartingPositionTimestamp` cannot be in the future.
         * - _Required_: No
         * - _Type_: Number
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-startingpositiontimestamp */
        "StartingPositionTimestamp"?: number | Intrinsic;
        /**
         * - A list of tags to add to the event source mapping.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-lambda-eventsourcemapping-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-tags */
        "Tags"?: Tag[];
        /**
         * - The name of the Kafka topic.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Minimum_: `1 | 1`
         * - _Maximum_: `249 | 1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-topics */
        "Topics"?: (string | Intrinsic)[];
        /**
         * - (Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.
         * - _Required_: No
         * - _Type_: Integer
         * - _Minimum_: `0`
         * - _Maximum_: `900`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html#cfn-lambda-eventsourcemapping-tumblingwindowinseconds */
        "TumblingWindowInSeconds"?: number | Intrinsic;
    };
}