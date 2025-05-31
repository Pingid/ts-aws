import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Configuration information of a Kinesis Data Firehose delivery stream.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html */

export interface KinesisFirehoseConfig {
    /**
     * - The Amazon Resource Name (ARN) of the delivery stream.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws[-a-z0-9]*:firehose:[-a-z0-9]*:[0-9]{12}:deliverystream/[-a-zA-Z0-9_.]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-kinesisfirehoseconfig-firehosearn */
    "FirehoseArn": string | Intrinsic;
}

/**
 * Configuration information of a Kinesis data stream.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html */

export interface KinesisStreamConfig {
    /**
     * - The Amazon Resource Name (ARN) of the data stream.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws[-a-z0-9]*:kinesis:[-a-z0-9]*:[0-9]{12}:stream/[-a-zA-Z0-9_.]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-kinesisstreamconfig-streamarn */
    "StreamArn": string | Intrinsic;
}

/**
 * Configuration information of a Kinesis video stream.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html */

export interface KinesisVideoStreamConfig {
    /**
     * - The encryption configuration.
     * - _Required_: Yes
     * - _Type_: [EncryptionConfig](./aws-properties-connect-instancestorageconfig-encryptionconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-kinesisvideostreamconfig-encryptionconfig */
    "EncryptionConfig": EncryptionConfig;
    /**
     * - The prefix of the video stream.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-kinesisvideostreamconfig-prefix */
    "Prefix": string | Intrinsic;
    /**
     * - The number of hours data is retained in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream.
     * - The default value is 0, indicating that the stream does not persist data.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Maximum_: `87600`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-kinesisvideostreamconfig-retentionperiodhours */
    "RetentionPeriodHours": number | Intrinsic;
}

/**
 * The encryption configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html */

export interface EncryptionConfig {
    /**
     * - The type of encryption.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `KMS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-encryptionconfig-encryptiontype */
    "EncryptionType": string | Intrinsic;
    /**
     * - The full ARN of the encryption key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-encryptionconfig-keyid */
    "KeyId": string | Intrinsic;
}

/**
 * Information about the Amazon Simple Storage Service (Amazon S3) storage type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html */

export interface S3Config {
    /**
     * - The S3 bucket name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-s3config-bucketname */
    "BucketName": string | Intrinsic;
    /**
     * - The S3 bucket prefix.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-s3config-bucketprefix */
    "BucketPrefix": string | Intrinsic;
    /**
     * - The Amazon S3 encryption configuration.
     * - _Required_: No
     * - _Type_: [EncryptionConfig](./aws-properties-connect-instancestorageconfig-encryptionconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-s3config-encryptionconfig */
    "EncryptionConfig"?: EncryptionConfig;
}

/**
 * The storage configuration for the instance.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html */

export interface ConnectInstanceStorageConfig extends ResourceAttributes {
    "Type": "AWS::Connect::InstanceStorageConfig";
    "Properties": {
        /**
         * - The Amazon Resource Name (ARN) of the instance.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-instancearn */
        "InstanceArn": string | Intrinsic;
        /**
         * - The configuration of the Kinesis Firehose delivery stream.
         * - _Required_: No
         * - _Type_: [KinesisFirehoseConfig](./aws-properties-connect-instancestorageconfig-kinesisfirehoseconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-kinesisfirehoseconfig */
        "KinesisFirehoseConfig"?: KinesisFirehoseConfig;
        /**
         * - The configuration of the Kinesis data stream.
         * - _Required_: No
         * - _Type_: [KinesisStreamConfig](./aws-properties-connect-instancestorageconfig-kinesisstreamconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-kinesisstreamconfig */
        "KinesisStreamConfig"?: KinesisStreamConfig;
        /**
         * - The configuration of the Kinesis video stream.
         * - _Required_: No
         * - _Type_: [KinesisVideoStreamConfig](./aws-properties-connect-instancestorageconfig-kinesisvideostreamconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-kinesisvideostreamconfig */
        "KinesisVideoStreamConfig"?: KinesisVideoStreamConfig;
        /**
         * - A valid resource type. Following are the valid resource types: `CHAT_TRANSCRIPTS` | `CALL_RECORDINGS` | `SCHEDULED_REPORTS` | `MEDIA_STREAMS` | `CONTACT_TRACE_RECORDS` | `AGENT_EVENTS`
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `CHAT_TRANSCRIPTS | CALL_RECORDINGS | SCHEDULED_REPORTS | MEDIA_STREAMS | CONTACT_TRACE_RECORDS | AGENT_EVENTS`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-resourcetype */
        "ResourceType": string | Intrinsic;
        /**
         * - The S3 bucket configuration.
         * - _Required_: No
         * - _Type_: [S3Config](./aws-properties-connect-instancestorageconfig-s3config.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-s3config */
        "S3Config"?: S3Config;
        /**
         * - A valid storage type.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `S3 | KINESIS_VIDEO_STREAM | KINESIS_STREAM | KINESIS_FIREHOSE`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instancestorageconfig.html#cfn-connect-instancestorageconfig-storagetype */
        "StorageType": string | Intrinsic;
    };
}