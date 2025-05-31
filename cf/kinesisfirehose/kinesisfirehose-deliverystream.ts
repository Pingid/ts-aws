import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The structure that configures parameters such as `ThroughputHintInMBs` for a stream configured with Direct PUT as a source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface DirectPutSourceConfiguration {
    /**
     * - The value that you configure for this parameter is for information purpose only and does not affect Firehose delivery throughput limit. You can use the [Firehose Limits form](https://support.console.aws.amazon.com/support/home#/case/create%3FissueType=service-limit-increase%26limitType=kinesis-firehose-limits) to request a throughput limit increase.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-directputsourceconfiguration-throughputhintinmbs */
    "ThroughputHintInMBs"?: number | Intrinsic;
}

/**
 * Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface DeliveryStreamEncryptionConfigurationInput {
    /**
     * - If you set `KeyType` to `CUSTOMER_MANAGED_CMK`, you must specify the Amazon Resource Name (ARN) of the CMK. If you set `KeyType` to `AWS_OWNED_CMK`, Firehose uses a service-account CMK.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-deliverystreamencryptionconfigurationinput-keyarn */
    "KeyARN"?: string | Intrinsic;
    /**
     * - Indicates the type of customer master key (CMK) to use for encryption. The default setting is `AWS_OWNED_CMK`. For more information about CMKs, see [Customer Master Keys (CMKs)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys).
     * - You can use a CMK of type CUSTOMER\_MANAGED\_CMK to encrypt up to 500 delivery streams.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `AWS_OWNED_CMK | CUSTOMER_MANAGED_CMK`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-deliverystreamencryptionconfigurationinput-keytype */
    "KeyType": string | Intrinsic;
}

/**
 * The `KinesisStreamSourceConfiguration` property type specifies the stream and role Amazon Resource Names (ARNs) for a Kinesis stream used as the source for a delivery stream.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface KinesisStreamSourceConfiguration {
    /**
     * - The ARN of the source Kinesis data stream.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-kinesisstreamsourceconfiguration-kinesisstreamarn */
    "KinesisStreamARN": string | Intrinsic;
    /**
     * - The ARN of the role that provides access to the source Kinesis data stream.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-kinesisstreamsourceconfiguration-rolearn */
    "RoleARN": string | Intrinsic;
}

/**
 * The `S3DestinationConfiguration` property type specifies an Amazon Simple Storage Service (Amazon S3) destination to which Amazon Kinesis Data Firehose (Kinesis Data Firehose) delivers data.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface S3DestinationConfiguration {
    /**
     * - The Amazon Resource Name (ARN) of the Amazon S3 bucket to send data to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-bucketarn */
    "BucketARN": string | Intrinsic;
    /**
     * - Configures how Kinesis Data Firehose buffers incoming data while delivering it to the Amazon S3 bucket.
     * - _Required_: No
     * - _Type_: [BufferingHints](./aws-properties-kinesisfirehose-deliverystream-bufferinghints.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-bufferinghints */
    "BufferingHints"?: BufferingHints;
    /**
     * - The CloudWatch logging options for your Firehose stream.
     * - _Required_: No
     * - _Type_: [CloudWatchLoggingOptions](./aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-cloudwatchloggingoptions */
    "CloudWatchLoggingOptions"?: CloudWatchLoggingOptions;
    /**
     * - The type of compression that Kinesis Data Firehose uses to compress the data that it delivers to the Amazon S3 bucket. For valid values, see the `CompressionFormat` content for the [S3DestinationConfiguration](https://docs.aws.amazon.com/firehose/latest/APIReference/API_S3DestinationConfiguration.html) data type in the _Amazon Kinesis Data Firehose API Reference_.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `UNCOMPRESSED | GZIP | ZIP | Snappy | HADOOP_SNAPPY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-compressionformat */
    "CompressionFormat"?: string | Intrinsic;
    /**
     * - Configures Amazon Simple Storage Service (Amazon S3) server-side encryption. Kinesis Data Firehose uses AWS Key Management Service (AWS KMS) to encrypt the data that it delivers to your Amazon S3 bucket.
     * - _Required_: No
     * - _Type_: [EncryptionConfiguration](./aws-properties-kinesisfirehose-deliverystream-encryptionconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-encryptionconfiguration */
    "EncryptionConfiguration"?: EncryptionConfiguration;
    /**
     * - A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing them to S3. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-erroroutputprefix */
    "ErrorOutputPrefix"?: string | Intrinsic;
    /**
     * - A prefix that Kinesis Data Firehose adds to the files that it delivers to the Amazon S3 bucket. The prefix helps you identify the files that Kinesis Data Firehose delivered.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-prefix */
    "Prefix"?: string | Intrinsic;
    /**
     * - The ARN of an AWS Identity and Access Management (IAM) role that grants Kinesis Data Firehose access to your Amazon S3 bucket and AWS KMS (if you enable data encryption). For more information, see [Grant Kinesis Data Firehose Access to an Amazon S3 Destination](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3) in the _Amazon Kinesis Data Firehose Developer Guide_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration-rolearn */
    "RoleARN": string | Intrinsic;
}

/**
 * Metadata that you can assign to a Firehose stream, consisting of a key-value pair.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface Tag {
    /**
     * - A unique identifier for the tag. Maximum length: 128 characters. Valid characters: Unicode letters, digits, white space, \_ . / = + - % @
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!aws:)[\p{L}\p{Z}\p{N}_.:\/=+\-@%]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-tag-key */
    "Key": string | Intrinsic;
    /**
     * - An optional string, which you can use to describe or define the tag. Maximum length: 256 characters. Valid characters: Unicode letters, digits, white space, \_ . / = + - % @
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\p{L}\p{Z}\p{N}_.:\/=+\-@%]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-tag-value */
    "Value"?: string | Intrinsic;
}

/**
 * The `CloudWatchLoggingOptions` property type specifies Amazon CloudWatch Logs (CloudWatch Logs) logging options that Amazon Kinesis Data Firehose (Kinesis Data Firehose) uses for the delivery stream.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface CloudWatchLoggingOptions {
    /**
     * - Indicates whether CloudWatch Logs logging is enabled.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-cloudwatchloggingoptions-enabled */
    "Enabled"?: boolean | Intrinsic;
    /**
     * - The name of the CloudWatch Logs log group that contains the log stream that Kinesis Data Firehose will use.
     * - Conditional. If you enable logging, you must specify this property.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Pattern_: `[\.\-_/#A-Za-z0-9]*`
     * - _Minimum_: `0`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-cloudwatchloggingoptions-loggroupname */
    "LogGroupName"?: string | Intrinsic;
    /**
     * - The name of the CloudWatch Logs log stream that Kinesis Data Firehose uses to send logs about data delivery.
     * - Conditional. If you enable logging, you must specify this property.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Pattern_: `[^:*]*`
     * - _Minimum_: `0`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-cloudwatchloggingoptions-logstreamname */
    "LogStreamName"?: string | Intrinsic;
}

/**
 * Describes the buffering to perform before delivering data to the Serverless offering for Amazon OpenSearch Service destination.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface AmazonOpenSearchServerlessBufferingHints {
    /**
     * - Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300 (5 minutes).
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `900`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessbufferinghints-intervalinseconds */
    "IntervalInSeconds"?: number | Intrinsic;
    /**
     * - Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5.
     * - We recommend setting this parameter to a value greater than the amount of data you typically ingest into the Firehose stream in 10 seconds. For example, if you typically ingest data at 1 MB/sec, the value should be 10 MB or higher.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessbufferinghints-sizeinmbs */
    "SizeInMBs"?: number | Intrinsic;
}

/**
 * The `Databases` property type specifies Property description not available. for an [AWS::KinesisFirehose::DeliveryStream](./aws-resource-kinesisfirehose-deliverystream.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface Databases {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databases-exclude */
    "Exclude"?: (string | Intrinsic)[];
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databases-include */
    "Include"?: (string | Intrinsic)[];
}

/**
 * The `DatabaseColumns` property type specifies Property description not available. for an [AWS::KinesisFirehose::DeliveryStream](./aws-resource-kinesisfirehose-deliverystream.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface DatabaseColumns {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databasecolumns-exclude */
    "Exclude"?: (string | Intrinsic)[];
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databasecolumns-include */
    "Include"?: (string | Intrinsic)[];
}

/**
 * The structure to configure the authentication methods for Firehose to connect to source database endpoint.
 * Amazon Data Firehose is in preview release and is subject to change.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface DatabaseSourceAuthenticationConfiguration {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: [SecretsManagerConfiguration](./aws-properties-kinesisfirehose-deliverystream-secretsmanagerconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databasesourceauthenticationconfiguration-secretsmanagerconfiguration */
    "SecretsManagerConfiguration": SecretsManagerConfiguration;
}

/**
 * Configures retry behavior in case Firehose is unable to deliver documents to the Serverless offering for Amazon OpenSearch Service.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface AmazonOpenSearchServerlessRetryOptions {
    /**
     * - After an initial failure to deliver to the Serverless offering for Amazon OpenSearch Service, the total amount of time during which Firehose retries delivery (including the first attempt). After this time has elapsed, the failed documents are written to Amazon S3. Default value is 300 seconds (5 minutes). A value of 0 (zero) results in no retries.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `7200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessretryoptions-durationinseconds */
    "DurationInSeconds"?: number | Intrinsic;
}

/**
 * The structure for details of the VPC Endpoint Service which Firehose uses to create a PrivateLink to the database.
 * Amazon Data Firehose is in preview release and is subject to change.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface DatabaseSourceVPCConfiguration {
    /**
     * - The VPC endpoint service name which Firehose uses to create a PrivateLink to the database. The endpoint service must have the Firehose service principle `firehose.amazonaws.com` as an allowed principal on the VPC endpoint service. The VPC endpoint service name is a string that looks like `com.amazonaws.vpce.<region>.<vpc-endpoint-service-id>`.
     * - Amazon Data Firehose is in preview release and is subject to change.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `([a-zA-Z0-9\-\_]+\.){2,3}vpce\.[a-zA-Z0-9\-]*\.vpce-svc\-[a-zA-Z0-9\-]{17}$`
     * - _Minimum_: `47`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databasesourcevpcconfiguration-vpcendpointservicename */
    "VpcEndpointServiceName": string | Intrinsic;
}

/**
 * Describes the buffering to perform before delivering data to the Amazon OpenSearch Service destination.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface AmazonopensearchserviceBufferingHints {
    /**
     * - Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300 (5 minutes).
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `900`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicebufferinghints-intervalinseconds */
    "IntervalInSeconds"?: number | Intrinsic;
    /**
     * - Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5. We recommend setting this parameter to a value greater than the amount of data you typically ingest into the delivery stream in 10 seconds. For example, if you typically ingest data at 1 MB/sec, the value should be 10 MB or higher.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicebufferinghints-sizeinmbs */
    "SizeInMBs"?: number | Intrinsic;
}

/**
 * The `DatabaseTables` property type specifies Property description not available. for an [AWS::KinesisFirehose::DeliveryStream](./aws-resource-kinesisfirehose-deliverystream.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface DatabaseTables {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databasetables-exclude */
    "Exclude"?: (string | Intrinsic)[];
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databasetables-include */
    "Include"?: (string | Intrinsic)[];
}

/**
 * The top level object for configuring streams with database as a source.
 * Amazon Data Firehose is in preview release and is subject to change.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface DatabaseSourceConfiguration {
    /**
     * - The list of column patterns in source database endpoint for Firehose to read from.
     * - Amazon Data Firehose is in preview release and is subject to change.
     * - _Required_: No
     * - _Type_: [DatabaseColumns](./aws-properties-kinesisfirehose-deliverystream-databasecolumns.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-columns */
    "Columns"?: DatabaseColumns;
    /**
     * - The list of database patterns in source database endpoint for Firehose to read from.
     * - Amazon Data Firehose is in preview release and is subject to change.
     * - _Required_: Yes
     * - _Type_: [Databases](./aws-properties-kinesisfirehose-deliverystream-databases.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-databases */
    "Databases": Databases;
    /**
     * - The structure to configure the authentication methods for Firehose to connect to source database endpoint.
     * - Amazon Data Firehose is in preview release and is subject to change.
     * - _Required_: Yes
     * - _Type_: [DatabaseSourceAuthenticationConfiguration](./aws-properties-kinesisfirehose-deliverystream-databasesourceauthenticationconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-databasesourceauthenticationconfiguration */
    "DatabaseSourceAuthenticationConfiguration": DatabaseSourceAuthenticationConfiguration;
    /**
     * - The details of the VPC Endpoint Service which Firehose uses to create a PrivateLink to the database.
     * - Amazon Data Firehose is in preview release and is subject to change.
     * - _Required_: Yes
     * - _Type_: [DatabaseSourceVPCConfiguration](./aws-properties-kinesisfirehose-deliverystream-databasesourcevpcconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-databasesourcevpcconfiguration */
    "DatabaseSourceVPCConfiguration": DatabaseSourceVPCConfiguration;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-digest */
    "Digest"?: string | Intrinsic;
    /**
     * - The endpoint of the database server.
     * - Amazon Data Firehose is in preview release and is subject to change.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!\s*$).+`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-endpoint */
    "Endpoint": string | Intrinsic;
    /**
     * - The port of the database. This can be one of the following values.
     * - Amazon Data Firehose is in preview release and is subject to change.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `65535`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-port */
    "Port": number | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Minimum_: `1`
     * - _Maximum_: `4096`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-publiccertificate */
    "PublicCertificate"?: string | Intrinsic;
    /**
     * - The fully qualified name of the table in source database endpoint that Firehose uses to track snapshot progress.
     * - Amazon Data Firehose is in preview release and is subject to change.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\u0001-\uFFFF]*`
     * - _Minimum_: `1`
     * - _Maximum_: `129`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-snapshotwatermarktable */
    "SnapshotWatermarkTable": string | Intrinsic;
    /**
     * - The mode to enable or disable SSL when Firehose connects to the database endpoint.
     * - Amazon Data Firehose is in preview release and is subject to change.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Disabled | Enabled`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-sslmode */
    "SSLMode"?: string | Intrinsic;
    /**
     * - The optional list of table and column names used as unique key columns when taking snapshot if the tables don’t have primary keys configured.
     * - Amazon Data Firehose is in preview release and is subject to change.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-surrogatekeys */
    "SurrogateKeys"?: (string | Intrinsic)[];
    /**
     * - The list of table patterns in source database endpoint for Firehose to read from.
     * - Amazon Data Firehose is in preview release and is subject to change.
     * - _Required_: Yes
     * - _Type_: [DatabaseTables](./aws-properties-kinesisfirehose-deliverystream-databasetables.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-tables */
    "Tables": DatabaseTables;
    /**
     * - The type of database engine. This can be one of the following values.
     * - Amazon Data Firehose is in preview release and is subject to change.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `MySQL | PostgreSQL`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration-type */
    "Type": string | Intrinsic;
}

/**
 * Indicates the method for setting up document ID. The supported methods are Firehose generated document ID and OpenSearch Service generated document ID.
 * 
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface DocumentIdOptions {
    /**
     * - When the `FIREHOSE_DEFAULT` option is chosen, Firehose generates a unique document ID for each record based on a unique internal identifier. The generated document ID is stable across multiple delivery attempts, which helps prevent the same record from being indexed multiple times with different document IDs.
     * - When the `NO_DOCUMENT_ID` option is chosen, Firehose does not include any document IDs in the requests it sends to the Amazon OpenSearch Service. This causes the Amazon OpenSearch Service domain to generate document IDs. In case of multiple delivery attempts, this may cause the same record to be indexed more than once with different document IDs. This option enables write-heavy operations, such as the ingestion of logs and observability data, to consume less resources in the Amazon OpenSearch Service domain, resulting in improved performance.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `FIREHOSE_DEFAULT | NO_DOCUMENT_ID`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-documentidoptions-defaultdocumentidformat */
    "DefaultDocumentIdFormat": string | Intrinsic;
}

/**
 * The `BufferingHints` property type specifies how Amazon Kinesis Data Firehose (Kinesis Data Firehose) buffers incoming data before delivering it to the destination. The first buffer condition that is satisfied triggers Kinesis Data Firehose to deliver the data.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface BufferingHints {
    /**
     * - The length of time, in seconds, that Kinesis Data Firehose buffers incoming data before delivering it to the destination. For valid values, see the `IntervalInSeconds` content for the [BufferingHints](https://docs.aws.amazon.com/firehose/latest/APIReference/API_BufferingHints.html) data type in the _Amazon Kinesis Data Firehose API Reference_.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `900`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-bufferinghints-intervalinseconds */
    "IntervalInSeconds"?: number | Intrinsic;
    /**
     * - The size of the buffer, in MBs, that Kinesis Data Firehose uses for incoming data before delivering it to the destination. For valid values, see the `SizeInMBs` content for the [BufferingHints](https://docs.aws.amazon.com/firehose/latest/APIReference/API_BufferingHints.html) data type in the _Amazon Kinesis Data Firehose API Reference_.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-bufferinghints-sizeinmbs */
    "SizeInMBs"?: number | Intrinsic;
}

/**
 * The details of the VPC of the Amazon ES destination.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface VpcConfiguration {
    /**
     * - The ARN of the IAM role that you want the delivery stream to use to create endpoints in the destination VPC. You can use your existing Kinesis Data Firehose delivery role or you can specify a new role. In either case, make sure that the role trusts the Kinesis Data Firehose service principal and that it grants the following permissions:
     * - If you revoke these permissions after you create the delivery stream, Kinesis Data Firehose can't scale out by creating more ENIs when necessary. You might therefore see a degradation in performance.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-vpcconfiguration-rolearn */
    "RoleARN": string | Intrinsic;
    /**
     * - The IDs of the security groups that you want Kinesis Data Firehose to use when it creates ENIs in the VPC of the Amazon ES destination. You can use the same security group that the Amazon ES domain uses or different ones. If you specify different security groups here, ensure that they allow outbound HTTPS traffic to the Amazon ES domain's security group. Also ensure that the Amazon ES domain's security group allows HTTPS traffic from the security groups specified here. If you use the same security group for both your delivery stream and the Amazon ES domain, make sure the security group inbound rule allows HTTPS traffic.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1 | 1`
     * - _Maximum_: `1024 | 5`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-vpcconfiguration-securitygroupids */
    "SecurityGroupIds": (string | Intrinsic)[];
    /**
     * - The IDs of the subnets that Kinesis Data Firehose uses to create ENIs in the VPC of the Amazon ES destination. Make sure that the routing tables and inbound and outbound rules allow traffic to flow from the subnets whose IDs are specified here to the subnets that have the destination Amazon ES endpoints. Kinesis Data Firehose creates at least one ENI in each of the subnets that are specified here. Do not delete or modify these ENIs.
     * - The number of ENIs that Kinesis Data Firehose creates in the subnets specified here scales up and down automatically based on throughput. To enable Kinesis Data Firehose to scale up the number of ENIs to match throughput, ensure that you have sufficient quota. To help you calculate the quota you need, assume that Kinesis Data Firehose can create up to three ENIs for this delivery stream for each of the subnets specified here.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1 | 1`
     * - _Maximum_: `1024 | 16`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-vpcconfiguration-subnetids */
    "SubnetIds": (string | Intrinsic)[];
}

/**
 * Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon OpenSearch Service.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface AmazonopensearchserviceRetryOptions {
    /**
     * - After an initial failure to deliver to Amazon OpenSearch Service, the total amount of time during which Kinesis Data Firehose retries delivery (including the first attempt). After this time has elapsed, the failed documents are written to Amazon S3. Default value is 300 seconds (5 minutes). A value of 0 (zero) results in no retries.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `7200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserviceretryoptions-durationinseconds */
    "DurationInSeconds"?: number | Intrinsic;
}

/**
 * Describes the configuration of a destination in Amazon OpenSearch Service.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface AmazonopensearchserviceDestinationConfiguration {
    /**
     * - The buffering options. If no value is specified, the default values for AmazonopensearchserviceBufferingHints are used.
     * - _Required_: No
     * - _Type_: [AmazonopensearchserviceBufferingHints](./aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicebufferinghints.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-bufferinghints */
    "BufferingHints"?: AmazonopensearchserviceBufferingHints;
    /**
     * - Describes the Amazon CloudWatch logging options for your delivery stream.
     * - _Required_: No
     * - _Type_: [CloudWatchLoggingOptions](./aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-cloudwatchloggingoptions */
    "CloudWatchLoggingOptions"?: CloudWatchLoggingOptions;
    /**
     * - The endpoint to use when communicating with the cluster. Specify either this ClusterEndpoint or the DomainARN field.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `https:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-clusterendpoint */
    "ClusterEndpoint"?: string | Intrinsic;
    /**
     * - Indicates the method for setting up document ID. The supported methods are Firehose generated document ID and OpenSearch Service generated document ID.
     * - _Required_: No
     * - _Type_: [DocumentIdOptions](./aws-properties-kinesisfirehose-deliverystream-documentidoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-documentidoptions */
    "DocumentIdOptions"?: DocumentIdOptions;
    /**
     * - The ARN of the Amazon OpenSearch Service domain.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-domainarn */
    "DomainARN"?: string | Intrinsic;
    /**
     * - The Amazon OpenSearch Service index name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `80`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-indexname */
    "IndexName": string | Intrinsic;
    /**
     * - The Amazon OpenSearch Service index rotation period. Index rotation appends a timestamp to the IndexName to facilitate the expiration of old data.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `NoRotation | OneHour | OneDay | OneWeek | OneMonth`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-indexrotationperiod */
    "IndexRotationPeriod"?: string | Intrinsic;
    /**
     * - Describes a data processing configuration.
     * - _Required_: No
     * - _Type_: [ProcessingConfiguration](./aws-properties-kinesisfirehose-deliverystream-processingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-processingconfiguration */
    "ProcessingConfiguration"?: ProcessingConfiguration;
    /**
     * - The retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon OpenSearch Service. The default value is 300 (5 minutes).
     * - _Required_: No
     * - _Type_: [AmazonopensearchserviceRetryOptions](./aws-properties-kinesisfirehose-deliverystream-amazonopensearchserviceretryoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-retryoptions */
    "RetryOptions"?: AmazonopensearchserviceRetryOptions;
    /**
     * - The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose for calling the Amazon OpenSearch Service Configuration API and for indexing documents.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-rolearn */
    "RoleARN": string | Intrinsic;
    /**
     * - Defines how documents should be delivered to Amazon S3.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `FailedDocumentsOnly | AllDocuments`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-s3backupmode */
    "S3BackupMode"?: string | Intrinsic;
    /**
     * - Describes the configuration of a destination in Amazon S3.
     * - _Required_: Yes
     * - _Type_: [S3DestinationConfiguration](./aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-s3configuration */
    "S3Configuration": S3DestinationConfiguration;
    /**
     * - The Amazon OpenSearch Service type name.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-typename */
    "TypeName"?: string | Intrinsic;
    /**
     * - The details of the VPC of the Amazon OpenSearch Service destination.
     * - _Required_: No
     * - _Type_: [VpcConfiguration](./aws-properties-kinesisfirehose-deliverystream-vpcconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration-vpcconfiguration */
    "VpcConfiguration"?: VpcConfiguration;
}

/**
 * The `DynamicPartitioningConfiguration` property type specifies the configuration of the dynamic partitioning mechanism that creates targeted data sets from the streaming data by partitioning it based on partition keys.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface DynamicPartitioningConfiguration {
    /**
     * - Specifies whether dynamic partitioning is enabled for this Kinesis Data Firehose delivery stream.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-dynamicpartitioningconfiguration-enabled */
    "Enabled"?: boolean | Intrinsic;
    /**
     * - Specifies the retry behavior in case Kinesis Data Firehose is unable to deliver data to an Amazon S3 prefix.
     * - _Required_: No
     * - _Type_: [RetryOptions](./aws-properties-kinesisfirehose-deliverystream-retryoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-dynamicpartitioningconfiguration-retryoptions */
    "RetryOptions"?: RetryOptions;
}

/**
 * The `ElasticsearchRetryOptions` property type configures the retry behavior for when Amazon Kinesis Data Firehose (Kinesis Data Firehose) can't deliver data to Amazon Elasticsearch Service (Amazon ES).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface ElasticsearchRetryOptions {
    /**
     * - After an initial failure to deliver to Amazon ES, the total amount of time during which Kinesis Data Firehose re-attempts delivery (including the first attempt). If Kinesis Data Firehose can't deliver the data within the specified time, it writes the data to the backup S3 bucket. For valid values, see the `DurationInSeconds` content for the [ElasticsearchRetryOptions](https://docs.aws.amazon.com/firehose/latest/APIReference/API_ElasticsearchRetryOptions.html) data type in the _Amazon Kinesis Data Firehose API Reference_.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `7200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-elasticsearchretryoptions-durationinseconds */
    "DurationInSeconds"?: number | Intrinsic;
}

/**
 * Describes the configuration of the HTTP endpoint to which Kinesis Firehose delivers data. Kinesis Firehose supports any custom HTTP endpoint or HTTP endpoints owned by supported third-party service providers, including Datadog, MongoDB, and New Relic.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface HttpEndpointConfiguration {
    /**
     * - The access key required for Kinesis Firehose to authenticate with the HTTP endpoint selected as the destination.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `4096`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-httpendpointconfiguration-accesskey */
    "AccessKey"?: string | Intrinsic;
    /**
     * - The name of the HTTP endpoint selected as the destination.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-httpendpointconfiguration-name */
    "Name"?: string | Intrinsic;
    /**
     * - The URL of the HTTP endpoint selected as the destination.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-httpendpointconfiguration-url */
    "Url": string | Intrinsic;
}

/**
 * Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination. Kinesis Firehose supports any custom HTTP endpoint or HTTP endpoints owned by supported third-party service providers, including Datadog, MongoDB, and New Relic.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface RetryOptions {
    /**
     * - The total amount of time that Kinesis Data Firehose spends on retries. This duration starts after the initial attempt to send data to the custom destination via HTTPS endpoint fails. It doesn't include the periods during which Kinesis Data Firehose waits for acknowledgment from the specified destination after each attempt.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `7200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-retryoptions-durationinseconds */
    "DurationInSeconds"?: number | Intrinsic;
}

/**
 * The structure that defines how Firehose accesses the secret.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface SecretsManagerConfiguration {
    /**
     * - Specifies whether you want to use the secrets manager feature. When set as `True` the secrets manager configuration overwrites the existing secrets in the destination configuration. When it's set to `False` Firehose falls back to the credentials in the destination configuration.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-secretsmanagerconfiguration-enabled */
    "Enabled": boolean | Intrinsic;
    /**
     * - Specifies the role that Firehose assumes when calling the Secrets Manager API operation. When you provide the role, it overrides any destination specific role defined in the destination configuration. If you do not provide the then we use the destination specific role. This parameter is required for Splunk.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:.*:iam::\d{12}:role/[a-zA-Z_0-9+=,.@\-_/]+`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-secretsmanagerconfiguration-rolearn */
    "RoleARN"?: string | Intrinsic;
    /**
     * - The ARN of the secret that stores your credentials. It must be in the same region as the Firehose stream and the role. The secret ARN can reside in a different account than the Firehose stream and role as Firehose supports cross-account secret access. This parameter is required when **Enabled** is set to `True`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:.*:secretsmanager:[a-zA-Z0-9\-]+:\d{12}:secret:[a-zA-Z0-9\-/_+=.@]+`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-secretsmanagerconfiguration-secretarn */
    "SecretARN"?: string | Intrinsic;
}

/**
 * Describes the configuration of a destination in Apache Iceberg Tables.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface DestinationTableConfiguration {
    /**
     * - The name of the Apache Iceberg database.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-destinationtableconfiguration-destinationdatabasename */
    "DestinationDatabaseName": string | Intrinsic;
    /**
     * - Specifies the name of the Apache Iceberg Table.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-destinationtableconfiguration-destinationtablename */
    "DestinationTableName": string | Intrinsic;
    /**
     * - The table specific S3 error output prefix. All the errors that occurred while delivering to this table will be prefixed with this value in S3 destination.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-destinationtableconfiguration-s3erroroutputprefix */
    "S3ErrorOutputPrefix"?: string | Intrinsic;
    /**
     * - A list of unique keys for a given Apache Iceberg table. Firehose will use these for running Create, Update, or Delete operations on the given Iceberg table.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-destinationtableconfiguration-uniquekeys */
    "UniqueKeys"?: (string | Intrinsic)[];
}

/**
 * Describes the containers where the destination Apache Iceberg Tables are persisted.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface CatalogConfiguration {
    /**
     * - Specifies the Glue catalog ARN identifier of the destination Apache Iceberg Tables. You must specify the ARN in the format `arn:aws:glue:region:account-id:catalog`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-catalogconfiguration-catalogarn */
    "CatalogArn"?: string | Intrinsic;
}

/**
 * Specifies the destination configure settings for Apache Iceberg Table.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface IcebergDestinationConfiguration {
    /**
     * - Describes whether all incoming data for this delivery stream will be append only (inserts only and not for updates and deletes) for Iceberg delivery. This feature is only applicable for Apache Iceberg Tables.
     * - The default value is false. If you set this value to true, Firehose automatically increases the throughput limit of a stream based on the throttling levels of the stream. If you set this parameter to true for a stream with updates and deletes, you will see out of order delivery.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration-appendonly */
    "AppendOnly"?: boolean | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [BufferingHints](./aws-properties-kinesisfirehose-deliverystream-bufferinghints.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration-bufferinghints */
    "BufferingHints"?: BufferingHints;
    /**
     * - Configuration describing where the destination Apache Iceberg Tables are persisted.
     * - _Required_: Yes
     * - _Type_: [CatalogConfiguration](./aws-properties-kinesisfirehose-deliverystream-catalogconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration-catalogconfiguration */
    "CatalogConfiguration": CatalogConfiguration;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [CloudWatchLoggingOptions](./aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration-cloudwatchloggingoptions */
    "CloudWatchLoggingOptions"?: CloudWatchLoggingOptions;
    /**
     * - Provides a list of `DestinationTableConfigurations` which Firehose uses to deliver data to Apache Iceberg Tables. Firehose will write data with insert if table specific configuration is not provided here.
     * - _Required_: No
     * - _Type_: Array of [DestinationTableConfiguration](./aws-properties-kinesisfirehose-deliverystream-destinationtableconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration-destinationtableconfigurationlist */
    "DestinationTableConfigurationList"?: DestinationTableConfiguration[];
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [ProcessingConfiguration](./aws-properties-kinesisfirehose-deliverystream-processingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration-processingconfiguration */
    "ProcessingConfiguration"?: ProcessingConfiguration;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [RetryOptions](./aws-properties-kinesisfirehose-deliverystream-retryoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration-retryoptions */
    "RetryOptions"?: RetryOptions;
    /**
     * - The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose for calling Apache Iceberg Tables.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration-rolearn */
    "RoleARN": string | Intrinsic;
    /**
     * - Describes how Firehose will backup records. Currently,S3 backup only supports `FailedDataOnly`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `AllData | FailedDataOnly`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration-s3backupmode */
    "s3BackupMode"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: [S3DestinationConfiguration](./aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration-s3configuration */
    "S3Configuration": S3DestinationConfiguration;
}

/**
 * Describes the buffering to perform before delivering data to the Snowflake destination. If you do not specify any value, Firehose uses the default values.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface SnowflakeBufferingHints {
    /**
     * - Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 0.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `900`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakebufferinghints-intervalinseconds */
    "IntervalInSeconds"?: number | Intrinsic;
    /**
     * - Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 128.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakebufferinghints-sizeinmbs */
    "SizeInMBs"?: number | Intrinsic;
}

/**
 * Specify how long Firehose retries sending data to the New Relic HTTP endpoint. After sending data, Firehose first waits for an acknowledgment from the HTTP endpoint. If an error occurs or the acknowledgment doesn’t arrive within the acknowledgment timeout period, Firehose starts the retry duration counter. It keeps retrying until the retry duration expires. After that, Firehose considers it a data delivery failure and backs up the data to your Amazon S3 bucket. Every time that Firehose sends data to the HTTP endpoint (either the initial attempt or a retry), it restarts the acknowledgement timeout counter and waits for an acknowledgement from the HTTP endpoint. Even if the retry duration expires, Firehose still waits for the acknowledgment until it receives it or the acknowledgement timeout period is reached. If the acknowledgment times out, Firehose determines whether there's time left in the retry counter. If there is time left, it retries again and repeats the logic until it receives an acknowledgment or determines that the retry time has expired. If you don't want Firehose to retry sending data, set this value to 0.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface SnowflakeRetryOptions {
    /**
     * - the time period where Firehose will retry sending data to the chosen HTTP endpoint.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `7200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakeretryoptions-durationinseconds */
    "DurationInSeconds"?: number | Intrinsic;
}

/**
 * Optionally configure a Snowflake role. Otherwise the default user role will be used.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface SnowflakeRoleConfiguration {
    /**
     * - Enable Snowflake role
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakeroleconfiguration-enabled */
    "Enabled"?: boolean | Intrinsic;
    /**
     * - The Snowflake role you wish to configure
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakeroleconfiguration-snowflakerole */
    "SnowflakeRole"?: string | Intrinsic;
}

/**
 * Configure a Snowflake VPC
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface SnowflakeVpcConfiguration {
    /**
     * - The VPCE ID for Firehose to privately connect with Snowflake. The ID format is com.amazonaws.vpce.\[region\].vpce-svc-<\[id\]>. For more information, see [Amazon PrivateLink & Snowflake](https://docs.snowflake.com/en/user-guide/admin-security-privatelink)
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `([a-zA-Z0-9\-\_]+\.){2,3}vpce\.[a-zA-Z0-9\-]*\.vpce-svc\-[a-zA-Z0-9\-]{17}$`
     * - _Minimum_: `47`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakevpcconfiguration-privatelinkvpceid */
    "PrivateLinkVpceId": string | Intrinsic;
}

/**
 * Configure Snowflake destination
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface SnowflakeDestinationConfiguration {
    /**
     * - URL for accessing your Snowflake account. This URL must include your [account identifier](https://docs.snowflake.com/en/user-guide/admin-account-identifier). Note that the protocol (https://) and port number are optional.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.+?\.snowflakecomputing\.com`
     * - _Minimum_: `24`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-accounturl */
    "AccountUrl": string | Intrinsic;
    /**
     * - Describes the buffering to perform before delivering data to the Snowflake destination. If you do not specify any value, Firehose uses the default values.
     * - _Required_: No
     * - _Type_: [SnowflakeBufferingHints](./aws-properties-kinesisfirehose-deliverystream-snowflakebufferinghints.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-bufferinghints */
    "BufferingHints"?: SnowflakeBufferingHints;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [CloudWatchLoggingOptions](./aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-cloudwatchloggingoptions */
    "CloudWatchLoggingOptions"?: CloudWatchLoggingOptions;
    /**
     * - The name of the record content column.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-contentcolumnname */
    "ContentColumnName"?: string | Intrinsic;
    /**
     * - All data in Snowflake is maintained in databases.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-database */
    "Database": string | Intrinsic;
    /**
     * - Choose to load JSON keys mapped to table column names or choose to split the JSON payload where content is mapped to a record content column and source metadata is mapped to a record metadata column.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `JSON_MAPPING | VARIANT_CONTENT_MAPPING | VARIANT_CONTENT_AND_METADATA_MAPPING`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-dataloadingoption */
    "DataLoadingOption"?: string | Intrinsic;
    /**
     * - Passphrase to decrypt the private key when the key is encrypted. For information, see [Using Key Pair Authentication & Key Rotation](https://docs.snowflake.com/en/user-guide/data-load-snowpipe-streaming-configuration#using-key-pair-authentication-key-rotation).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `7`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-keypassphrase */
    "KeyPassphrase"?: string | Intrinsic;
    /**
     * - Specify a column name in the table, where the metadata information has to be loaded. When you enable this field, you will see the following column in the snowflake table, which differs based on the source type.
     * - For Direct PUT as source
     * - `{ "firehoseDeliveryStreamName" : "streamname", "IngestionTime" : "timestamp" }`
     * - For Kinesis Data Stream as source
     * - `"kinesisStreamName" : "streamname", "kinesisShardId" : "Id", "kinesisPartitionKey" : "key", "kinesisSequenceNumber" : "1234", "subsequenceNumber" : "2334", "IngestionTime" : "timestamp" }`
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-metadatacolumnname */
    "MetaDataColumnName"?: string | Intrinsic;
    /**
     * - The private key used to encrypt your Snowflake client. For information, see [Using Key Pair Authentication & Key Rotation](https://docs.snowflake.com/en/user-guide/data-load-snowpipe-streaming-configuration#using-key-pair-authentication-key-rotation).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$`
     * - _Minimum_: `256`
     * - _Maximum_: `4096`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-privatekey */
    "PrivateKey"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [ProcessingConfiguration](./aws-properties-kinesisfirehose-deliverystream-processingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-processingconfiguration */
    "ProcessingConfiguration"?: ProcessingConfiguration;
    /**
     * - The time period where Firehose will retry sending data to the chosen HTTP endpoint.
     * - _Required_: No
     * - _Type_: [SnowflakeRetryOptions](./aws-properties-kinesisfirehose-deliverystream-snowflakeretryoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-retryoptions */
    "RetryOptions"?: SnowflakeRetryOptions;
    /**
     * - The Amazon Resource Name (ARN) of the Snowflake role
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-rolearn */
    "RoleARN": string | Intrinsic;
    /**
     * - Choose an S3 backup mode
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `FailedDataOnly | AllData`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-s3backupmode */
    "S3BackupMode"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: [S3DestinationConfiguration](./aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-s3configuration */
    "S3Configuration": S3DestinationConfiguration;
    /**
     * - Each database consists of one or more schemas, which are logical groupings of database objects, such as tables and views
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-schema */
    "Schema": string | Intrinsic;
    /**
     * - The configuration that defines how you access secrets for Snowflake.
     * - _Required_: No
     * - _Type_: [SecretsManagerConfiguration](./aws-properties-kinesisfirehose-deliverystream-secretsmanagerconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-secretsmanagerconfiguration */
    "SecretsManagerConfiguration"?: SecretsManagerConfiguration;
    /**
     * - Optionally configure a Snowflake role. Otherwise the default user role will be used.
     * - _Required_: No
     * - _Type_: [SnowflakeRoleConfiguration](./aws-properties-kinesisfirehose-deliverystream-snowflakeroleconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-snowflakeroleconfiguration */
    "SnowflakeRoleConfiguration"?: SnowflakeRoleConfiguration;
    /**
     * - The VPCE ID for Firehose to privately connect with Snowflake. The ID format is com.amazonaws.vpce.\[region\].vpce-svc-<\[id\]>. For more information, see [Amazon PrivateLink & Snowflake](https://docs.snowflake.com/en/user-guide/admin-security-privatelink)
     * - _Required_: No
     * - _Type_: [SnowflakeVpcConfiguration](./aws-properties-kinesisfirehose-deliverystream-snowflakevpcconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-snowflakevpcconfiguration */
    "SnowflakeVpcConfiguration"?: SnowflakeVpcConfiguration;
    /**
     * - All data in Snowflake is stored in database tables, logically structured as collections of columns and rows.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-table */
    "Table": string | Intrinsic;
    /**
     * - User login name for the Snowflake account.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration-user */
    "User"?: string | Intrinsic;
}

/**
 * The authentication configuration of the Amazon MSK cluster.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface AuthenticationConfiguration {
    /**
     * - The type of connectivity used to access the Amazon MSK cluster.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `PUBLIC | PRIVATE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-authenticationconfiguration-connectivity */
    "Connectivity": string | Intrinsic;
    /**
     * - The ARN of the role used to access the Amazon MSK cluster.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-authenticationconfiguration-rolearn */
    "RoleARN": string | Intrinsic;
}

/**
 * The configuration for the Amazon MSK cluster to be used as the source for a delivery stream.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface MSKSourceConfiguration {
    /**
     * - The authentication configuration of the Amazon MSK cluster.
     * - _Required_: Yes
     * - _Type_: [AuthenticationConfiguration](./aws-properties-kinesisfirehose-deliverystream-authenticationconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-msksourceconfiguration-authenticationconfiguration */
    "AuthenticationConfiguration": AuthenticationConfiguration;
    /**
     * - The ARN of the Amazon MSK cluster.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-msksourceconfiguration-mskclusterarn */
    "MSKClusterARN": string | Intrinsic;
    /**
     * - The start date and time in UTC for the offset position within your MSK topic from where Firehose begins to read. By default, this is set to timestamp when Firehose becomes Active.
     * - If you want to create a Firehose stream with Earliest start position from SDK or CLI, you need to set the `ReadFromTimestamp` parameter to Epoch (1970-01-01T00:00:00Z).
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-msksourceconfiguration-readfromtimestamp */
    "ReadFromTimestamp"?: string | Intrinsic;
    /**
     * - The topic name within the Amazon MSK cluster.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9\._\-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-msksourceconfiguration-topicname */
    "TopicName": string | Intrinsic;
}

/**
 * The `CopyCommand` property type configures the Amazon Redshift `COPY` command that Amazon Kinesis Data Firehose (Kinesis Data Firehose) uses to load data into an Amazon Redshift cluster from an Amazon S3 bucket.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface CopyCommand {
    /**
     * - Parameters to use with the Amazon Redshift `COPY` command. For examples, see the `CopyOptions` content for the [CopyCommand](https://docs.aws.amazon.com/firehose/latest/APIReference/API_CopyCommand.html) data type in the _Amazon Kinesis Data Firehose API Reference_.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `204800`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-copycommand-copyoptions */
    "CopyOptions"?: string | Intrinsic;
    /**
     * - A comma-separated list of column names.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `204800`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-copycommand-datatablecolumns */
    "DataTableColumns"?: string | Intrinsic;
    /**
     * - The name of the target table. The table must already exist in the database.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-copycommand-datatablename */
    "DataTableName": string | Intrinsic;
}

/**
 * Configures retry behavior in case Firehose is unable to deliver documents to Amazon Redshift.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface RedshiftRetryOptions {
    /**
     * - The length of time during which Firehose retries delivery after a failure, starting from the initial request and including the first attempt. The default value is 3600 seconds (60 minutes). Firehose does not retry if the value of `DurationInSeconds` is 0 (zero) or if the first delivery attempt takes longer than the current value.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `7200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-redshiftretryoptions-durationinseconds */
    "DurationInSeconds"?: number | Intrinsic;
}

/**
 * The `RedshiftDestinationConfiguration` property type specifies an Amazon Redshift cluster to which Amazon Kinesis Data Firehose (Kinesis Data Firehose) delivers data.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface RedshiftDestinationConfiguration {
    /**
     * - The CloudWatch logging options for your Firehose stream.
     * - _Required_: No
     * - _Type_: [CloudWatchLoggingOptions](./aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-cloudwatchloggingoptions */
    "CloudWatchLoggingOptions"?: CloudWatchLoggingOptions;
    /**
     * - The connection string that Kinesis Data Firehose uses to connect to the Amazon Redshift cluster.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-clusterjdbcurl */
    "ClusterJDBCURL": string | Intrinsic;
    /**
     * - Configures the Amazon Redshift `COPY` command that Kinesis Data Firehose uses to load data into the cluster from the Amazon S3 bucket.
     * - _Required_: Yes
     * - _Type_: [CopyCommand](./aws-properties-kinesisfirehose-deliverystream-copycommand.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-copycommand */
    "CopyCommand": CopyCommand;
    /**
     * - The password for the Amazon Redshift user that you specified in the `Username` property.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `6`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-password */
    "Password"?: string | Intrinsic;
    /**
     * - The data processing configuration for the Kinesis Data Firehose delivery stream.
     * - _Required_: No
     * - _Type_: [ProcessingConfiguration](./aws-properties-kinesisfirehose-deliverystream-processingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-processingconfiguration */
    "ProcessingConfiguration"?: ProcessingConfiguration;
    /**
     * - The retry behavior in case Firehose is unable to deliver documents to Amazon Redshift. Default value is 3600 (60 minutes).
     * - _Required_: No
     * - _Type_: [RedshiftRetryOptions](./aws-properties-kinesisfirehose-deliverystream-redshiftretryoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-retryoptions */
    "RetryOptions"?: RedshiftRetryOptions;
    /**
     * - The ARN of the AWS Identity and Access Management (IAM) role that grants Kinesis Data Firehose access to your Amazon S3 bucket and AWS KMS (if you enable data encryption). For more information, see [Grant Kinesis Data Firehose Access to an Amazon Redshift Destination](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-rs) in the _Amazon Kinesis Data Firehose Developer Guide_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-rolearn */
    "RoleARN": string | Intrinsic;
    /**
     * - The configuration for backup in Amazon S3.
     * - _Required_: No
     * - _Type_: [S3DestinationConfiguration](./aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-s3backupconfiguration */
    "S3BackupConfiguration"?: S3DestinationConfiguration;
    /**
     * - The Amazon S3 backup mode. After you create a Firehose stream, you can update it to enable Amazon S3 backup if it is disabled. If backup is enabled, you can't update the Firehose stream to disable it.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Disabled | Enabled`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-s3backupmode */
    "S3BackupMode"?: string | Intrinsic;
    /**
     * - The S3 bucket where Kinesis Data Firehose first delivers data. After the data is in the bucket, Kinesis Data Firehose uses the `COPY` command to load the data into the Amazon Redshift cluster. For the Amazon S3 bucket's compression format, don't specify `SNAPPY` or `ZIP` because the Amazon Redshift `COPY` command doesn't support them.
     * - _Required_: Yes
     * - _Type_: [S3DestinationConfiguration](./aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-s3configuration */
    "S3Configuration": S3DestinationConfiguration;
    /**
     * - The configuration that defines how you access secrets for Amazon Redshift.
     * - _Required_: No
     * - _Type_: [SecretsManagerConfiguration](./aws-properties-kinesisfirehose-deliverystream-secretsmanagerconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-secretsmanagerconfiguration */
    "SecretsManagerConfiguration"?: SecretsManagerConfiguration;
    /**
     * - The Amazon Redshift user that has permission to access the Amazon Redshift cluster. This user must have `INSERT` privileges for copying data from the Amazon S3 bucket to the cluster.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-username */
    "Username"?: string | Intrinsic;
}

/**
 * The `SplunkRetryOptions` property type specifies retry behavior in case Kinesis Data Firehose is unable to deliver documents to Splunk or if it doesn't receive an acknowledgment from Splunk.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface SplunkRetryOptions {
    /**
     * - The total amount of time that Firehose spends on retries. This duration starts after the initial attempt to send data to Splunk fails. It doesn't include the periods during which Firehose waits for acknowledgment from Splunk after each attempt.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `7200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-splunkretryoptions-durationinseconds */
    "DurationInSeconds"?: number | Intrinsic;
}

/**
 * The buffering options. If no value is specified, the default values for Splunk are used.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface SplunkBufferingHints {
    /**
     * - Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 60 (1 minute).
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `60`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-splunkbufferinghints-intervalinseconds */
    "IntervalInSeconds"?: number | Intrinsic;
    /**
     * - Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-splunkbufferinghints-sizeinmbs */
    "SizeInMBs"?: number | Intrinsic;
}

/**
 * The `SplunkDestinationConfiguration` property type specifies the configuration of a destination in Splunk for a Kinesis Data Firehose delivery stream.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface SplunkDestinationConfiguration {
    /**
     * - The buffering options. If no value is specified, the default values for Splunk are used.
     * - _Required_: No
     * - _Type_: [SplunkBufferingHints](./aws-properties-kinesisfirehose-deliverystream-splunkbufferinghints.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-bufferinghints */
    "BufferingHints"?: SplunkBufferingHints;
    /**
     * - The Amazon CloudWatch logging options for your Firehose stream.
     * - _Required_: No
     * - _Type_: [CloudWatchLoggingOptions](./aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-cloudwatchloggingoptions */
    "CloudWatchLoggingOptions"?: CloudWatchLoggingOptions;
    /**
     * - The amount of time that Firehose waits to receive an acknowledgment from Splunk after it sends it data. At the end of the timeout period, Firehose either tries to send the data again or considers it an error, based on your retry settings.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `180`
     * - _Maximum_: `600`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-hecacknowledgmenttimeoutinseconds */
    "HECAcknowledgmentTimeoutInSeconds"?: number | Intrinsic;
    /**
     * - The HTTP Event Collector (HEC) endpoint to which Firehose sends your data.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-hecendpoint */
    "HECEndpoint": string | Intrinsic;
    /**
     * - This type can be either `Raw` or `Event`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `Raw | Event`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-hecendpointtype */
    "HECEndpointType": string | Intrinsic;
    /**
     * - This is a GUID that you obtain from your Splunk cluster when you create a new HEC endpoint.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-hectoken */
    "HECToken"?: string | Intrinsic;
    /**
     * - The data processing configuration.
     * - _Required_: No
     * - _Type_: [ProcessingConfiguration](./aws-properties-kinesisfirehose-deliverystream-processingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-processingconfiguration */
    "ProcessingConfiguration"?: ProcessingConfiguration;
    /**
     * - The retry behavior in case Firehose is unable to deliver data to Splunk, or if it doesn't receive an acknowledgment of receipt from Splunk.
     * - _Required_: No
     * - _Type_: [SplunkRetryOptions](./aws-properties-kinesisfirehose-deliverystream-splunkretryoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-retryoptions */
    "RetryOptions"?: SplunkRetryOptions;
    /**
     * - Defines how documents should be delivered to Amazon S3. When set to `FailedEventsOnly`, Firehose writes any data that could not be indexed to the configured Amazon S3 destination. When set to `AllEvents`, Firehose delivers all incoming records to Amazon S3, and also writes failed documents to Amazon S3. The default value is `FailedEventsOnly`.
     * - You can update this backup mode from `FailedEventsOnly` to `AllEvents`. You can't update it from `AllEvents` to `FailedEventsOnly`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `FailedEventsOnly | AllEvents`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-s3backupmode */
    "S3BackupMode"?: string | Intrinsic;
    /**
     * - The configuration for the backup Amazon S3 location.
     * - _Required_: Yes
     * - _Type_: [S3DestinationConfiguration](./aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-s3configuration */
    "S3Configuration": S3DestinationConfiguration;
    /**
     * - The configuration that defines how you access secrets for Splunk.
     * - _Required_: No
     * - _Type_: [SecretsManagerConfiguration](./aws-properties-kinesisfirehose-deliverystream-secretsmanagerconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration-secretsmanagerconfiguration */
    "SecretsManagerConfiguration"?: SecretsManagerConfiguration;
}

/**
 * The `ElasticsearchBufferingHints` property type specifies how Amazon Kinesis Data Firehose (Kinesis Data Firehose) buffers incoming data while delivering it to the destination. The first buffer condition that is satisfied triggers Kinesis Data Firehose to deliver the data.
 * ElasticsearchBufferingHints is the property type for the `BufferingHints` property of the [Amazon Kinesis Data Firehose DeliveryStream ElasticsearchDestinationConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html) property type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface ElasticsearchBufferingHints {
    /**
     * - The length of time, in seconds, that Kinesis Data Firehose buffers incoming data before delivering it to the destination. For valid values, see the `IntervalInSeconds` content for the [BufferingHints](https://docs.aws.amazon.com/firehose/latest/APIReference/API_BufferingHints.html) data type in the _Amazon Kinesis Data Firehose API Reference_.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `900`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-elasticsearchbufferinghints-intervalinseconds */
    "IntervalInSeconds"?: number | Intrinsic;
    /**
     * - The size of the buffer, in MBs, that Kinesis Data Firehose uses for incoming data before delivering it to the destination. For valid values, see the `SizeInMBs` content for the [BufferingHints](https://docs.aws.amazon.com/firehose/latest/APIReference/API_BufferingHints.html) data type in the _Amazon Kinesis Data Firehose API Reference_.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-elasticsearchbufferinghints-sizeinmbs */
    "SizeInMBs"?: number | Intrinsic;
}

/**
 * The `ElasticsearchDestinationConfiguration` property type specifies an Amazon Elasticsearch Service (Amazon ES) domain that Amazon Kinesis Data Firehose (Kinesis Data Firehose) delivers data to.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface ElasticsearchDestinationConfiguration {
    /**
     * - Configures how Kinesis Data Firehose buffers incoming data while delivering it to the Amazon ES domain.
     * - _Required_: No
     * - _Type_: [ElasticsearchBufferingHints](./aws-properties-kinesisfirehose-deliverystream-elasticsearchbufferinghints.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-bufferinghints */
    "BufferingHints"?: ElasticsearchBufferingHints;
    /**
     * - The Amazon CloudWatch Logs logging options for the delivery stream.
     * - _Required_: No
     * - _Type_: [CloudWatchLoggingOptions](./aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-cloudwatchloggingoptions */
    "CloudWatchLoggingOptions"?: CloudWatchLoggingOptions;
    /**
     * - The endpoint to use when communicating with the cluster. Specify either this `ClusterEndpoint` or the `DomainARN` field.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `https:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-clusterendpoint */
    "ClusterEndpoint"?: string | Intrinsic;
    /**
     * - Indicates the method for setting up document ID. The supported methods are Firehose generated document ID and OpenSearch Service generated document ID.
     * - _Required_: No
     * - _Type_: [DocumentIdOptions](./aws-properties-kinesisfirehose-deliverystream-documentidoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-documentidoptions */
    "DocumentIdOptions"?: DocumentIdOptions;
    /**
     * - The ARN of the Amazon ES domain. The IAM role must have permissions for `DescribeElasticsearchDomain`, `DescribeElasticsearchDomains`, and `DescribeElasticsearchDomainConfig` after assuming the role specified in **RoleARN**.
     * - Specify either `ClusterEndpoint` or `DomainARN`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-domainarn */
    "DomainARN"?: string | Intrinsic;
    /**
     * - The name of the Elasticsearch index to which Kinesis Data Firehose adds data for indexing.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `80`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-indexname */
    "IndexName": string | Intrinsic;
    /**
     * - The frequency of Elasticsearch index rotation. If you enable index rotation, Kinesis Data Firehose appends a portion of the UTC arrival timestamp to the specified index name, and rotates the appended timestamp accordingly. For more information, see [Index Rotation for the Amazon ES Destination](https://docs.aws.amazon.com/firehose/latest/dev/basic-deliver.html#es-index-rotation) in the _Amazon Kinesis Data Firehose Developer Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `NoRotation | OneHour | OneDay | OneWeek | OneMonth`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-indexrotationperiod */
    "IndexRotationPeriod"?: string | Intrinsic;
    /**
     * - The data processing configuration for the Kinesis Data Firehose delivery stream.
     * - _Required_: No
     * - _Type_: [ProcessingConfiguration](./aws-properties-kinesisfirehose-deliverystream-processingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-processingconfiguration */
    "ProcessingConfiguration"?: ProcessingConfiguration;
    /**
     * - The retry behavior when Kinesis Data Firehose is unable to deliver data to Amazon ES.
     * - _Required_: No
     * - _Type_: [ElasticsearchRetryOptions](./aws-properties-kinesisfirehose-deliverystream-elasticsearchretryoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-retryoptions */
    "RetryOptions"?: ElasticsearchRetryOptions;
    /**
     * - The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose for calling the Amazon ES Configuration API and for indexing documents. For more information, see [Controlling Access with Amazon Kinesis Data Firehose](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html).
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-rolearn */
    "RoleARN": string | Intrinsic;
    /**
     * - The condition under which Kinesis Data Firehose delivers data to Amazon Simple Storage Service (Amazon S3). You can send Amazon S3 all documents (all data) or only the documents that Kinesis Data Firehose could not deliver to the Amazon ES destination. For more information and valid values, see the `S3BackupMode` content for the [ElasticsearchDestinationConfiguration](https://docs.aws.amazon.com/firehose/latest/APIReference/API_ElasticsearchDestinationConfiguration.html) data type in the _Amazon Kinesis Data Firehose API Reference_.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `FailedDocumentsOnly | AllDocuments`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-s3backupmode */
    "S3BackupMode"?: string | Intrinsic;
    /**
     * - The S3 bucket where Kinesis Data Firehose backs up incoming data.
     * - _Required_: Yes
     * - _Type_: [S3DestinationConfiguration](./aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-s3configuration */
    "S3Configuration": S3DestinationConfiguration;
    /**
     * - The Elasticsearch type name that Amazon ES adds to documents when indexing data.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-typename */
    "TypeName"?: string | Intrinsic;
    /**
     * - The details of the VPC of the Amazon ES destination.
     * - _Required_: No
     * - _Type_: [VpcConfiguration](./aws-properties-kinesisfirehose-deliverystream-vpcconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration-vpcconfiguration */
    "VpcConfiguration"?: VpcConfiguration;
}

/**
 * Specifies the schema to which you want Firehose to configure your data before it writes it to Amazon S3. This parameter is required if `Enabled` is set to true.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface SchemaConfiguration {
    /**
     * - The ID of the AWS Glue Data Catalog. If you don't supply this, the AWS account ID is used by default.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\S+$`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-schemaconfiguration-catalogid */
    "CatalogId"?: string | Intrinsic;
    /**
     * - Specifies the name of the AWS Glue database that contains the schema for the output data.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\S+$`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-schemaconfiguration-databasename */
    "DatabaseName"?: string | Intrinsic;
    /**
     * - If you don't specify an AWS Region, the default is the current Region.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\S+$`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-schemaconfiguration-region */
    "Region"?: string | Intrinsic;
    /**
     * - The role that Firehose can use to access AWS Glue. This role must be in the same account you use for Firehose. Cross-account roles aren't allowed.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-schemaconfiguration-rolearn */
    "RoleARN"?: string | Intrinsic;
    /**
     * - Specifies the AWS Glue table that contains the column information that constitutes your data schema.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\S+$`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-schemaconfiguration-tablename */
    "TableName"?: string | Intrinsic;
    /**
     * - Specifies the table version for the output data schema. If you don't specify this version ID, or if you set it to `LATEST`, Firehose uses the most recent version. This means that any updates to the table are automatically picked up.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\S+$`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-schemaconfiguration-versionid */
    "VersionId"?: string | Intrinsic;
}

/**
 * The `KMSEncryptionConfig` property type specifies the AWS Key Management Service (AWS KMS) encryption key that Amazon Simple Storage Service (Amazon S3) uses to encrypt data delivered by the Amazon Kinesis Data Firehose (Kinesis Data Firehose) stream.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface KMSEncryptionConfig {
    /**
     * - The Amazon Resource Name (ARN) of the AWS KMS encryption key that Amazon S3 uses to encrypt data delivered by the Kinesis Data Firehose stream. The key must belong to the same region as the destination S3 bucket.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:.*:kms:[a-zA-Z0-9\-]+:\d{12}:(key|alias)/[a-zA-Z_0-9+=,.@\-_/]+`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-kmsencryptionconfig-awskmskeyarn */
    "AWSKMSKeyARN": string | Intrinsic;
}

/**
 * The `EncryptionConfiguration` property type specifies the encryption settings that Amazon Kinesis Data Firehose (Kinesis Data Firehose) uses when delivering data to Amazon Simple Storage Service (Amazon S3).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface EncryptionConfiguration {
    /**
     * - The AWS Key Management Service (AWS KMS) encryption key that Amazon S3 uses to encrypt your data.
     * - _Required_: No
     * - _Type_: [KMSEncryptionConfig](./aws-properties-kinesisfirehose-deliverystream-kmsencryptionconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-encryptionconfiguration-kmsencryptionconfig */
    "KMSEncryptionConfig"?: KMSEncryptionConfig;
    /**
     * - Disables encryption. For valid values, see the `NoEncryptionConfig` content for the [EncryptionConfiguration](https://docs.aws.amazon.com/firehose/latest/APIReference/API_EncryptionConfiguration.html) data type in the _Amazon Kinesis Data Firehose API Reference_.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `NoEncryption`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-encryptionconfiguration-noencryptionconfig */
    "NoEncryptionConfig"?: string | Intrinsic;
}

/**
 * Describes the metadata that's delivered to the specified HTTP endpoint destination. Kinesis Firehose supports any custom HTTP endpoint or HTTP endpoints owned by supported third-party service providers, including Datadog, MongoDB, and New Relic.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface HttpEndpointCommonAttribute {
    /**
     * - The name of the HTTP endpoint common attribute.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-httpendpointcommonattribute-attributename */
    "AttributeName": string | Intrinsic;
    /**
     * - The value of the HTTP endpoint common attribute.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-httpendpointcommonattribute-attributevalue */
    "AttributeValue": string | Intrinsic;
}

/**
 * The configuration of the HTTP endpoint request. Kinesis Firehose supports any custom HTTP endpoint or HTTP endpoints owned by supported third-party service providers, including Datadog, MongoDB, and New Relic.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface HttpEndpointRequestConfiguration {
    /**
     * - Describes the metadata sent to the HTTP endpoint destination.
     * - _Required_: No
     * - _Type_: Array of [HttpEndpointCommonAttribute](./aws-properties-kinesisfirehose-deliverystream-httpendpointcommonattribute.html)
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-httpendpointrequestconfiguration-commonattributes */
    "CommonAttributes"?: HttpEndpointCommonAttribute[];
    /**
     * - Kinesis Data Firehose uses the content encoding to compress the body of a request before sending the request to the destination. For more information, see Content-Encoding in MDN Web Docs, the official Mozilla documentation.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `NONE | GZIP`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-httpendpointrequestconfiguration-contentencoding */
    "ContentEncoding"?: string | Intrinsic;
}

/**
 * Describes the configuration of the HTTP endpoint destination. Kinesis Firehose supports any custom HTTP endpoint or HTTP endpoints owned by supported third-party service providers, including Datadog, MongoDB, and New Relic.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface HttpEndpointDestinationConfiguration {
    /**
     * - The buffering options that can be used before data is delivered to the specified destination. Kinesis Data Firehose treats these options as hints, and it might choose to use more optimal values. The SizeInMBs and IntervalInSeconds parameters are optional. However, if you specify a value for one of them, you must also provide a value for the other.
     * - _Required_: No
     * - _Type_: [BufferingHints](./aws-properties-kinesisfirehose-deliverystream-bufferinghints.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration-bufferinghints */
    "BufferingHints"?: BufferingHints;
    /**
     * - Describes the Amazon CloudWatch logging options for your delivery stream.
     * - _Required_: No
     * - _Type_: [CloudWatchLoggingOptions](./aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration-cloudwatchloggingoptions */
    "CloudWatchLoggingOptions"?: CloudWatchLoggingOptions;
    /**
     * - The configuration of the HTTP endpoint selected as the destination.
     * - _Required_: Yes
     * - _Type_: [HttpEndpointConfiguration](./aws-properties-kinesisfirehose-deliverystream-httpendpointconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration-endpointconfiguration */
    "EndpointConfiguration": HttpEndpointConfiguration;
    /**
     * - Describes the data processing configuration.
     * - _Required_: No
     * - _Type_: [ProcessingConfiguration](./aws-properties-kinesisfirehose-deliverystream-processingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration-processingconfiguration */
    "ProcessingConfiguration"?: ProcessingConfiguration;
    /**
     * - The configuration of the request sent to the HTTP endpoint specified as the destination.
     * - _Required_: No
     * - _Type_: [HttpEndpointRequestConfiguration](./aws-properties-kinesisfirehose-deliverystream-httpendpointrequestconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration-requestconfiguration */
    "RequestConfiguration"?: HttpEndpointRequestConfiguration;
    /**
     * - Describes the retry behavior in case Kinesis Data Firehose is unable to deliver data to the specified HTTP endpoint destination, or if it doesn't receive a valid acknowledgment of receipt from the specified HTTP endpoint destination.
     * - _Required_: No
     * - _Type_: [RetryOptions](./aws-properties-kinesisfirehose-deliverystream-retryoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration-retryoptions */
    "RetryOptions"?: RetryOptions;
    /**
     * - Kinesis Data Firehose uses this IAM role for all the permissions that the delivery stream needs.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration-rolearn */
    "RoleARN"?: string | Intrinsic;
    /**
     * - Describes the S3 bucket backup options for the data that Kinesis Data Firehose delivers to the HTTP endpoint destination. You can back up all documents (AllData) or only the documents that Kinesis Data Firehose could not deliver to the specified HTTP endpoint destination (FailedDataOnly).
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `FailedDataOnly | AllData`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration-s3backupmode */
    "S3BackupMode"?: string | Intrinsic;
    /**
     * - Describes the configuration of a destination in Amazon S3.
     * - _Required_: Yes
     * - _Type_: [S3DestinationConfiguration](./aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration-s3configuration */
    "S3Configuration": S3DestinationConfiguration;
    /**
     * - The configuration that defines how you access secrets for HTTP Endpoint destination.
     * - _Required_: No
     * - _Type_: [SecretsManagerConfiguration](./aws-properties-kinesisfirehose-deliverystream-secretsmanagerconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration-secretsmanagerconfiguration */
    "SecretsManagerConfiguration"?: SecretsManagerConfiguration;
}

/**
 * The `ProcessorParameter` property specifies a processor parameter in a data processor for an Amazon Kinesis Data Firehose delivery stream.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface ProcessorParameter {
    /**
     * - The name of the parameter. Currently the following default values are supported: 3 for `NumberOfRetries` and 60 for the `BufferIntervalInSeconds`. The `BufferSizeInMBs` ranges between 0.2 MB and up to 3MB. The default buffering hint is 1MB for all destinations, except Splunk. For Splunk, the default buffering hint is 256 KB.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `LambdaArn | NumberOfRetries | MetadataExtractionQuery | JsonParsingEngine | RoleArn | BufferSizeInMBs | BufferIntervalInSeconds | SubRecordType | Delimiter | CompressionFormat | DataMessageExtraction`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-processorparameter-parametername */
    "ParameterName": string | Intrinsic;
    /**
     * - The parameter value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!\s*$).+`
     * - _Minimum_: `1`
     * - _Maximum_: `5120`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-processorparameter-parametervalue */
    "ParameterValue": string | Intrinsic;
}

/**
 * The `Processor` property specifies a data processor for an Amazon Kinesis Data Firehose delivery stream.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface Processor {
    /**
     * - The processor parameters.
     * - _Required_: No
     * - _Type_: Array of [ProcessorParameter](./aws-properties-kinesisfirehose-deliverystream-processorparameter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-processor-parameters */
    "Parameters"?: ProcessorParameter[];
    /**
     * - The type of processor. Valid values: `Lambda`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `RecordDeAggregation | Decompression | CloudWatchLogProcessing | Lambda | MetadataExtraction | AppendDelimiterToRecord`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-processor-type */
    "Type": string | Intrinsic;
}

/**
 * The `ProcessingConfiguration` property configures data processing for an Amazon Kinesis Data Firehose delivery stream.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface ProcessingConfiguration {
    /**
     * - Indicates whether data processing is enabled (true) or disabled (false).
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-processingconfiguration-enabled */
    "Enabled"?: boolean | Intrinsic;
    /**
     * - The data processors.
     * - _Required_: No
     * - _Type_: Array of [Processor](./aws-properties-kinesisfirehose-deliverystream-processor.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-processingconfiguration-processors */
    "Processors"?: Processor[];
}

/**
 * Describes the configuration of a destination in the Serverless offering for Amazon OpenSearch Service.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface AmazonOpenSearchServerlessDestinationConfiguration {
    /**
     * - The buffering options. If no value is specified, the default values for AmazonopensearchserviceBufferingHints are used.
     * - _Required_: No
     * - _Type_: [AmazonOpenSearchServerlessBufferingHints](./aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessbufferinghints.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-bufferinghints */
    "BufferingHints"?: AmazonOpenSearchServerlessBufferingHints;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [CloudWatchLoggingOptions](./aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-cloudwatchloggingoptions */
    "CloudWatchLoggingOptions"?: CloudWatchLoggingOptions;
    /**
     * - The endpoint to use when communicating with the collection in the Serverless offering for Amazon OpenSearch Service.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `https:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-collectionendpoint */
    "CollectionEndpoint"?: string | Intrinsic;
    /**
     * - The Serverless offering for Amazon OpenSearch Service index name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `80`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-indexname */
    "IndexName": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [ProcessingConfiguration](./aws-properties-kinesisfirehose-deliverystream-processingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-processingconfiguration */
    "ProcessingConfiguration"?: ProcessingConfiguration;
    /**
     * - The retry behavior in case Firehose is unable to deliver documents to the Serverless offering for Amazon OpenSearch Service. The default value is 300 (5 minutes).
     * - _Required_: No
     * - _Type_: [AmazonOpenSearchServerlessRetryOptions](./aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessretryoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-retryoptions */
    "RetryOptions"?: AmazonOpenSearchServerlessRetryOptions;
    /**
     * - The Amazon Resource Name (ARN) of the IAM role to be assumed by Firehose for calling the Serverless offering for Amazon OpenSearch Service Configuration API and for indexing documents.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-rolearn */
    "RoleARN": string | Intrinsic;
    /**
     * - Defines how documents should be delivered to Amazon S3. When it is set to FailedDocumentsOnly, Firehose writes any documents that could not be indexed to the configured Amazon S3 destination, with AmazonOpenSearchService-failed/ appended to the key prefix. When set to AllDocuments, Firehose delivers all incoming records to Amazon S3, and also writes failed documents with AmazonOpenSearchService-failed/ appended to the prefix.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `FailedDocumentsOnly | AllDocuments`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-s3backupmode */
    "S3BackupMode"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: [S3DestinationConfiguration](./aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-s3configuration */
    "S3Configuration": S3DestinationConfiguration;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [VpcConfiguration](./aws-properties-kinesisfirehose-deliverystream-vpcconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-vpcconfiguration */
    "VpcConfiguration"?: VpcConfiguration;
}

/**
 * The native Hive / HCatalog JsonSerDe. Used by Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the OpenX SerDe.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface HiveJsonSerDe {
    /**
     * - Indicates how you want Firehose to parse the date and timestamps that may be present in your input data JSON. To specify these format strings, follow the pattern syntax of JodaTime's DateTimeFormat format strings. For more information, see [Class DateTimeFormat](https://www.joda.org/joda-time/apidocs/org/joda/time/format/DateTimeFormat.html). You can also use the special value `millis` to parse timestamps in epoch milliseconds. If you don't specify a format, Firehose uses `java.sql.Timestamp::valueOf` by default.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-hivejsonserde-timestampformats */
    "TimestampFormats"?: (string | Intrinsic)[];
}

/**
 * A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see [Apache ORC](https://orc.apache.org/docs/).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface OrcSerDe {
    /**
     * - The Hadoop Distributed File System (HDFS) block size. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the minimum is 64 MiB. Firehose uses this value for padding calculations.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `67108864`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-orcserde-blocksizebytes */
    "BlockSizeBytes"?: number | Intrinsic;
    /**
     * - The column names for which you want Firehose to create bloom filters. The default is `null`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-orcserde-bloomfiltercolumns */
    "BloomFilterColumns"?: (string | Intrinsic)[];
    /**
     * - The Bloom filter false positive probability (FPP). The lower the FPP, the bigger the Bloom filter. The default value is 0.05, the minimum is 0, and the maximum is 1.
     * - _Required_: No
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-orcserde-bloomfilterfalsepositiveprobability */
    "BloomFilterFalsePositiveProbability"?: number | Intrinsic;
    /**
     * - The compression code to use over data blocks. The default is `SNAPPY`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `NONE | ZLIB | SNAPPY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-orcserde-compression */
    "Compression"?: string | Intrinsic;
    /**
     * - Represents the fraction of the total number of non-null rows. To turn off dictionary encoding, set this fraction to a number that is less than the number of distinct keys in a dictionary. To always use dictionary encoding, set this threshold to 1.
     * - _Required_: No
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-orcserde-dictionarykeythreshold */
    "DictionaryKeyThreshold"?: number | Intrinsic;
    /**
     * - Set this to `true` to indicate that you want stripes to be padded to the HDFS block boundaries. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is `false`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-orcserde-enablepadding */
    "EnablePadding"?: boolean | Intrinsic;
    /**
     * - The version of the file to write. The possible values are `V0_11` and `V0_12`. The default is `V0_12`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `V0_11 | V0_12`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-orcserde-formatversion */
    "FormatVersion"?: string | Intrinsic;
    /**
     * - A number between 0 and 1 that defines the tolerance for block padding as a decimal fraction of stripe size. The default value is 0.05, which means 5 percent of stripe size.
     * - For the default values of 64 MiB ORC stripes and 256 MiB HDFS blocks, the default block padding tolerance of 5 percent reserves a maximum of 3.2 MiB for padding within the 256 MiB block. In such a case, if the available size within the block is more than 3.2 MiB, a new, smaller stripe is inserted to fit within that space. This ensures that no stripe crosses block boundaries and causes remote reads within a node-local task.
     * - Kinesis Data Firehose ignores this parameter when `EnablePadding` is `false`.
     * - _Required_: No
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-orcserde-paddingtolerance */
    "PaddingTolerance"?: number | Intrinsic;
    /**
     * - The number of rows between index entries. The default is 10,000 and the minimum is 1,000.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-orcserde-rowindexstride */
    "RowIndexStride"?: number | Intrinsic;
    /**
     * - The number of bytes in each stripe. The default is 64 MiB and the minimum is 8 MiB.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `8388608`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-orcserde-stripesizebytes */
    "StripeSizeBytes"?: number | Intrinsic;
}

/**
 * The OpenX SerDe. Used by Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface OpenXJsonSerDe {
    /**
     * - When set to `true`, which is the default, Firehose converts JSON keys to lowercase before deserializing them.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-openxjsonserde-caseinsensitive */
    "CaseInsensitive"?: boolean | Intrinsic;
    /**
     * - Maps column names to JSON keys that aren't identical to the column names. This is useful when the JSON contains keys that are Hive keywords. For example, `timestamp` is a Hive keyword. If you have a JSON key named `timestamp`, set this parameter to `{"ts": "timestamp"}` to map this key to a column named `ts`.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `[a-zA-Z0-9]+`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-openxjsonserde-columntojsonkeymappings */
    "ColumnToJsonKeyMappings"?: Record<string, string | Intrinsic>;
    /**
     * - When set to `true`, specifies that the names of the keys include dots and that you want Firehose to replace them with underscores. This is useful because Apache Hive does not allow dots in column names. For example, if the JSON contains a key whose name is "a.b", you can define the column name to be "a\_b" when using this option.
     * - The default is `false`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-openxjsonserde-convertdotsinjsonkeystounderscores */
    "ConvertDotsInJsonKeysToUnderscores"?: boolean | Intrinsic;
}

/**
 * The deserializer you want Kinesis Data Firehose to use for converting the input data from JSON. Kinesis Data Firehose then serializes the data to its final format using the `Serializer`. Kinesis Data Firehose supports two types of deserializers: the [Apache Hive JSON SerDe](https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-JSON) and the [OpenX JSON SerDe](https://github.com/rcongiu/Hive-JSON-Serde).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface Deserializer {
    /**
     * - The native Hive / HCatalog JsonSerDe. Used by Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the OpenX SerDe.
     * - _Required_: No
     * - _Type_: [HiveJsonSerDe](./aws-properties-kinesisfirehose-deliverystream-hivejsonserde.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-deserializer-hivejsonserde */
    "HiveJsonSerDe"?: HiveJsonSerDe;
    /**
     * - The OpenX SerDe. Used by Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe.
     * - _Required_: No
     * - _Type_: [OpenXJsonSerDe](./aws-properties-kinesisfirehose-deliverystream-openxjsonserde.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-deserializer-openxjsonserde */
    "OpenXJsonSerDe"?: OpenXJsonSerDe;
}

/**
 * Specifies the deserializer you want to use to convert the format of the input data. This parameter is required if `Enabled` is set to true.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface InputFormatConfiguration {
    /**
     * - Specifies which deserializer to use. You can choose either the Apache Hive JSON SerDe or the OpenX JSON SerDe. If both are non-null, the server rejects the request.
     * - _Required_: No
     * - _Type_: [Deserializer](./aws-properties-kinesisfirehose-deliverystream-deserializer.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-inputformatconfiguration-deserializer */
    "Deserializer"?: Deserializer;
}

/**
 * A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see [Apache Parquet](https://parquet.apache.org/docs/).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface ParquetSerDe {
    /**
     * - The Hadoop Distributed File System (HDFS) block size. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the minimum is 64 MiB. Firehose uses this value for padding calculations.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `67108864`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-parquetserde-blocksizebytes */
    "BlockSizeBytes"?: number | Intrinsic;
    /**
     * - The compression code to use over data blocks. The possible values are `UNCOMPRESSED`, `SNAPPY`, and `GZIP`, with the default being `SNAPPY`. Use `SNAPPY` for higher decompression speed. Use `GZIP` if the compression ratio is more important than speed.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `UNCOMPRESSED | GZIP | SNAPPY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-parquetserde-compression */
    "Compression"?: string | Intrinsic;
    /**
     * - Indicates whether to enable dictionary compression.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-parquetserde-enabledictionarycompression */
    "EnableDictionaryCompression"?: boolean | Intrinsic;
    /**
     * - The maximum amount of padding to apply. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 0.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-parquetserde-maxpaddingbytes */
    "MaxPaddingBytes"?: number | Intrinsic;
    /**
     * - The Parquet page size. Column chunks are divided into pages. A page is conceptually an indivisible unit (in terms of compression and encoding). The minimum value is 64 KiB and the default is 1 MiB.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `65536`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-parquetserde-pagesizebytes */
    "PageSizeBytes"?: number | Intrinsic;
    /**
     * - Indicates the version of row format to output. The possible values are `V1` and `V2`. The default is `V1`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `V1 | V2`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-parquetserde-writerversion */
    "WriterVersion"?: string | Intrinsic;
}

/**
 * The serializer that you want Firehose to use to convert data to the target format before writing it to Amazon S3. Firehose supports two types of serializers: the ORC SerDe and the Parquet SerDe.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface Serializer {
    /**
     * - A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see [Apache ORC](https://orc.apache.org/docs/).
     * - _Required_: No
     * - _Type_: [OrcSerDe](./aws-properties-kinesisfirehose-deliverystream-orcserde.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-serializer-orcserde */
    "OrcSerDe"?: OrcSerDe;
    /**
     * - A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see [Apache Parquet](https://parquet.apache.org/docs/contribution-guidelines/).
     * - _Required_: No
     * - _Type_: [ParquetSerDe](./aws-properties-kinesisfirehose-deliverystream-parquetserde.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-serializer-parquetserde */
    "ParquetSerDe"?: ParquetSerDe;
}

/**
 * Specifies the serializer that you want Firehose to use to convert the format of your data before it writes it to Amazon S3. This parameter is required if `Enabled` is set to true.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface OutputFormatConfiguration {
    /**
     * - Specifies which serializer to use. You can choose either the ORC SerDe or the Parquet SerDe. If both are non-null, the server rejects the request.
     * - _Required_: No
     * - _Type_: [Serializer](./aws-properties-kinesisfirehose-deliverystream-serializer.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-outputformatconfiguration-serializer */
    "Serializer"?: Serializer;
}

/**
 * Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the AWS Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see [Kinesis Data Firehose Record Format Conversion](https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface DataFormatConversionConfiguration {
    /**
     * - Defaults to `true`. Set it to `false` if you want to disable format conversion while preserving the configuration details.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-dataformatconversionconfiguration-enabled */
    "Enabled"?: boolean | Intrinsic;
    /**
     * - Specifies the deserializer that you want Firehose to use to convert the format of your data from JSON. This parameter is required if `Enabled` is set to true.
     * - _Required_: No
     * - _Type_: [InputFormatConfiguration](./aws-properties-kinesisfirehose-deliverystream-inputformatconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-dataformatconversionconfiguration-inputformatconfiguration */
    "InputFormatConfiguration"?: InputFormatConfiguration;
    /**
     * - Specifies the serializer that you want Firehose to use to convert the format of your data to the Parquet or ORC format. This parameter is required if `Enabled` is set to true.
     * - _Required_: No
     * - _Type_: [OutputFormatConfiguration](./aws-properties-kinesisfirehose-deliverystream-outputformatconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-dataformatconversionconfiguration-outputformatconfiguration */
    "OutputFormatConfiguration"?: OutputFormatConfiguration;
    /**
     * - Specifies the AWS Glue Data Catalog table that contains the column information. This parameter is required if `Enabled` is set to true.
     * - _Required_: No
     * - _Type_: [SchemaConfiguration](./aws-properties-kinesisfirehose-deliverystream-schemaconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-dataformatconversionconfiguration-schemaconfiguration */
    "SchemaConfiguration"?: SchemaConfiguration;
}

/**
 * The `ExtendedS3DestinationConfiguration` property type configures an Amazon S3 destination for an Amazon Kinesis Data Firehose delivery stream.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface ExtendedS3DestinationConfiguration {
    /**
     * - The Amazon Resource Name (ARN) of the Amazon S3 bucket. For constraints, see [ExtendedS3DestinationConfiguration](https://docs.aws.amazon.com/firehose/latest/APIReference/API_ExtendedS3DestinationConfiguration.html) in the _Amazon Kinesis Data Firehose API Reference_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-bucketarn */
    "BucketARN": string | Intrinsic;
    /**
     * - The buffering option.
     * - _Required_: No
     * - _Type_: [BufferingHints](./aws-properties-kinesisfirehose-deliverystream-bufferinghints.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-bufferinghints */
    "BufferingHints"?: BufferingHints;
    /**
     * - The Amazon CloudWatch logging options for your Firehose stream.
     * - _Required_: No
     * - _Type_: [CloudWatchLoggingOptions](./aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-cloudwatchloggingoptions */
    "CloudWatchLoggingOptions"?: CloudWatchLoggingOptions;
    /**
     * - The compression format. If no value is specified, the default is `UNCOMPRESSED`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `UNCOMPRESSED | GZIP | ZIP | Snappy | HADOOP_SNAPPY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-compressionformat */
    "CompressionFormat"?: string | Intrinsic;
    /**
     * - The time zone you prefer. UTC is the default.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-customtimezone */
    "CustomTimeZone"?: string | Intrinsic;
    /**
     * - The serializer, deserializer, and schema for converting data from the JSON format to the Parquet or ORC format before writing it to Amazon S3.
     * - _Required_: No
     * - _Type_: [DataFormatConversionConfiguration](./aws-properties-kinesisfirehose-deliverystream-dataformatconversionconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-dataformatconversionconfiguration */
    "DataFormatConversionConfiguration"?: DataFormatConversionConfiguration;
    /**
     * - The configuration of the dynamic partitioning mechanism that creates targeted data sets from the streaming data by partitioning it based on partition keys.
     * - _Required_: No
     * - _Type_: [DynamicPartitioningConfiguration](./aws-properties-kinesisfirehose-deliverystream-dynamicpartitioningconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-dynamicpartitioningconfiguration */
    "DynamicPartitioningConfiguration"?: DynamicPartitioningConfiguration;
    /**
     * - The encryption configuration for the Kinesis Data Firehose delivery stream. The default value is `NoEncryption`.
     * - _Required_: No
     * - _Type_: [EncryptionConfiguration](./aws-properties-kinesisfirehose-deliverystream-encryptionconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-encryptionconfiguration */
    "EncryptionConfiguration"?: EncryptionConfiguration;
    /**
     * - A prefix that Kinesis Data Firehose evaluates and adds to failed records before writing them to S3. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-erroroutputprefix */
    "ErrorOutputPrefix"?: string | Intrinsic;
    /**
     * - Specify a file extension. It will override the default file extension
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^$|\.[0-9a-z!\-_.*'()]+`
     * - _Minimum_: `0`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-fileextension */
    "FileExtension"?: string | Intrinsic;
    /**
     * - The `YYYY/MM/DD/HH` time format prefix is automatically used for delivered Amazon S3 files. For more information, see [ExtendedS3DestinationConfiguration](https://docs.aws.amazon.com/firehose/latest/APIReference/API_ExtendedS3DestinationConfiguration.html) in the _Amazon Kinesis Data Firehose API Reference_.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-prefix */
    "Prefix"?: string | Intrinsic;
    /**
     * - The data processing configuration for the Kinesis Data Firehose delivery stream.
     * - _Required_: No
     * - _Type_: [ProcessingConfiguration](./aws-properties-kinesisfirehose-deliverystream-processingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-processingconfiguration */
    "ProcessingConfiguration"?: ProcessingConfiguration;
    /**
     * - The Amazon Resource Name (ARN) of the AWS credentials. For constraints, see [ExtendedS3DestinationConfiguration](https://docs.aws.amazon.com/firehose/latest/APIReference/API_ExtendedS3DestinationConfiguration.html) in the _Amazon Kinesis Data Firehose API Reference_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:.*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-rolearn */
    "RoleARN": string | Intrinsic;
    /**
     * - The configuration for backup in Amazon S3.
     * - _Required_: No
     * - _Type_: [S3DestinationConfiguration](./aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-s3backupconfiguration */
    "S3BackupConfiguration"?: S3DestinationConfiguration;
    /**
     * - The Amazon S3 backup mode. After you create a Firehose stream, you can update it to enable Amazon S3 backup if it is disabled. If backup is enabled, you can't update the Firehose stream to disable it.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Disabled | Enabled`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration-s3backupmode */
    "S3BackupMode"?: string | Intrinsic;
}

/**
 * The `AWS::KinesisFirehose::DeliveryStream` resource specifies an Amazon Kinesis Data Firehose (Kinesis Data Firehose) delivery stream that delivers real-time streaming data to an Amazon Simple Storage Service (Amazon S3), Amazon Redshift, or Amazon Elasticsearch Service (Amazon ES) destination. For more information, see [Creating an Amazon Kinesis Data Firehose Delivery Stream](https://docs.aws.amazon.com/firehose/latest/dev/basic-create.html) in the _Amazon Kinesis Data Firehose Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html */

export interface KinesisFirehoseDeliveryStream extends ResourceAttributes {
    "Type": "AWS::KinesisFirehose::DeliveryStream";
    "Properties": {
        /**
         * - Describes the configuration of a destination in the Serverless offering for Amazon OpenSearch Service.
         * - _Required_: No
         * - _Type_: [AmazonOpenSearchServerlessDestinationConfiguration](./aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration */
        "AmazonOpenSearchServerlessDestinationConfiguration"?: AmazonOpenSearchServerlessDestinationConfiguration;
        /**
         * - The destination in Amazon OpenSearch Service. You can specify only one destination.
         * - _Required_: Conditional
         * - _Type_: [AmazonopensearchserviceDestinationConfiguration](./aws-properties-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-amazonopensearchservicedestinationconfiguration */
        "AmazonopensearchserviceDestinationConfiguration"?: AmazonopensearchserviceDestinationConfiguration;
        /**
         * - The top level object for configuring streams with database as a source.
         * - Amazon Data Firehose is in preview release and is subject to change.
         * - _Required_: No
         * - _Type_: [DatabaseSourceConfiguration](./aws-properties-kinesisfirehose-deliverystream-databasesourceconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-databasesourceconfiguration */
        "DatabaseSourceConfiguration"?: DatabaseSourceConfiguration;
        /**
         * - Specifies the type and Amazon Resource Name (ARN) of the CMK to use for Server-Side Encryption (SSE).
         * - _Required_: No
         * - _Type_: [DeliveryStreamEncryptionConfigurationInput](./aws-properties-kinesisfirehose-deliverystream-deliverystreamencryptionconfigurationinput.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-deliverystreamencryptionconfigurationinput */
        "DeliveryStreamEncryptionConfigurationInput"?: DeliveryStreamEncryptionConfigurationInput;
        /**
         * - The name of the Firehose stream.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9._-]+`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-deliverystreamname */
        "DeliveryStreamName"?: string | Intrinsic;
        /**
         * - The Firehose stream type. This can be one of the following values:
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `DatabaseAsSource | DirectPut | KinesisStreamAsSource | MSKAsSource`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-deliverystreamtype */
        "DeliveryStreamType"?: string | Intrinsic;
        /**
         * - The structure that configures parameters such as `ThroughputHintInMBs` for a stream configured with Direct PUT as a source.
         * - _Required_: No
         * - _Type_: [DirectPutSourceConfiguration](./aws-properties-kinesisfirehose-deliverystream-directputsourceconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-directputsourceconfiguration */
        "DirectPutSourceConfiguration"?: DirectPutSourceConfiguration;
        /**
         * - An Amazon ES destination for the delivery stream.
         * - Conditional. You must specify only one destination configuration.
         * - If you change the delivery stream destination from an Amazon ES destination to an Amazon S3 or Amazon Redshift destination, update requires [some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt).
         * - _Required_: Conditional
         * - _Type_: [ElasticsearchDestinationConfiguration](./aws-properties-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-elasticsearchdestinationconfiguration */
        "ElasticsearchDestinationConfiguration"?: ElasticsearchDestinationConfiguration;
        /**
         * - An Amazon S3 destination for the delivery stream.
         * - Conditional. You must specify only one destination configuration.
         * - If you change the delivery stream destination from an Amazon Extended S3 destination to an Amazon ES destination, update requires [some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt).
         * - _Required_: Conditional
         * - _Type_: [ExtendedS3DestinationConfiguration](./aws-properties-kinesisfirehose-deliverystream-extendeds3destinationconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-extendeds3destinationconfiguration */
        "ExtendedS3DestinationConfiguration"?: ExtendedS3DestinationConfiguration;
        /**
         * - Enables configuring Kinesis Firehose to deliver data to any HTTP endpoint destination. You can specify only one destination.
         * - _Required_: No
         * - _Type_: [HttpEndpointDestinationConfiguration](./aws-properties-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-httpendpointdestinationconfiguration */
        "HttpEndpointDestinationConfiguration"?: HttpEndpointDestinationConfiguration;
        /**
         * - Specifies the destination configure settings for Apache Iceberg Table.
         * - _Required_: No
         * - _Type_: [IcebergDestinationConfiguration](./aws-properties-kinesisfirehose-deliverystream-icebergdestinationconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-icebergdestinationconfiguration */
        "IcebergDestinationConfiguration"?: IcebergDestinationConfiguration;
        /**
         * - When a Kinesis stream is used as the source for the delivery stream, a [KinesisStreamSourceConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisfirehose-deliverystream-kinesisstreamsourceconfiguration.html) containing the Kinesis stream ARN and the role ARN for the source stream.
         * - _Required_: No
         * - _Type_: [KinesisStreamSourceConfiguration](./aws-properties-kinesisfirehose-deliverystream-kinesisstreamsourceconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-kinesisstreamsourceconfiguration */
        "KinesisStreamSourceConfiguration"?: KinesisStreamSourceConfiguration;
        /**
         * - The configuration for the Amazon MSK cluster to be used as the source for a delivery stream.
         * - _Required_: No
         * - _Type_: [MSKSourceConfiguration](./aws-properties-kinesisfirehose-deliverystream-msksourceconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-msksourceconfiguration */
        "MSKSourceConfiguration"?: MSKSourceConfiguration;
        /**
         * - An Amazon Redshift destination for the delivery stream.
         * - Conditional. You must specify only one destination configuration.
         * - If you change the delivery stream destination from an Amazon Redshift destination to an Amazon ES destination, update requires [some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt).
         * - _Required_: Conditional
         * - _Type_: [RedshiftDestinationConfiguration](./aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration */
        "RedshiftDestinationConfiguration"?: RedshiftDestinationConfiguration;
        /**
         * - The `S3DestinationConfiguration` property type specifies an Amazon Simple Storage Service (Amazon S3) destination to which Amazon Kinesis Data Firehose (Kinesis Data Firehose) delivers data.
         * - Conditional. You must specify only one destination configuration.
         * - If you change the delivery stream destination from an Amazon S3 destination to an Amazon ES destination, update requires [some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt).
         * - _Required_: Conditional
         * - _Type_: [S3DestinationConfiguration](./aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-s3destinationconfiguration */
        "S3DestinationConfiguration"?: S3DestinationConfiguration;
        /**
         * - Configure Snowflake destination
         * - _Required_: No
         * - _Type_: [SnowflakeDestinationConfiguration](./aws-properties-kinesisfirehose-deliverystream-snowflakedestinationconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-snowflakedestinationconfiguration */
        "SnowflakeDestinationConfiguration"?: SnowflakeDestinationConfiguration;
        /**
         * - The configuration of a destination in Splunk for the delivery stream.
         * - _Required_: No
         * - _Type_: [SplunkDestinationConfiguration](./aws-properties-kinesisfirehose-deliverystream-splunkdestinationconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-splunkdestinationconfiguration */
        "SplunkDestinationConfiguration"?: SplunkDestinationConfiguration;
        /**
         * - A set of tags to assign to the Firehose stream. A tag is a key-value pair that you can define and assign to AWS resources. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the Firehose stream. For more information about tags, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the AWS Billing and Cost Management User Guide.
         * - You can specify up to 50 tags when creating a Firehose stream.
         * - If you specify tags in the `CreateDeliveryStream` action, Amazon Data Firehose performs an additional authorization on the `firehose:TagDeliveryStream` action to verify if users have permissions to create tags. If you do not provide this permission, requests to create new Firehose streams with IAM resource tags will fail with an `AccessDeniedException` such as following.
         * - **AccessDeniedException**
         * - User: arn:aws:sts::x:assumed-role/x/x is not authorized to perform: firehose:TagDeliveryStream on resource: arn:aws:firehose:us-east-1:x:deliverystream/x with an explicit deny in an identity-based policy.
         * - For an example IAM policy, see [Tag example.](https://docs.aws.amazon.com/firehose/latest/APIReference/API_CreateDeliveryStream.html#API_CreateDeliveryStream_Examples)
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-kinesisfirehose-deliverystream-tag.html)
         * - _Minimum_: `1`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisfirehose-deliverystream.html#cfn-kinesisfirehose-deliverystream-tags */
        "Tags"?: Tag[];
    };
}