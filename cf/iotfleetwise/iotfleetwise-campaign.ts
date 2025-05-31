import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Information about a signal.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html */

export interface SignalInformation {
    /**
     * - The ID of the data partition this signal is associated with.
     * - The ID must match one of the IDs provided in `dataPartitions`. This is accomplished either by specifying a particular data partition ID or by using `default` for an established default partition. You can establish a default partition in the `DataPartition` data type.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-signalinformation-datapartitionid */
    "DataPartitionId"?: string | Intrinsic;
    /**
     * - The maximum number of samples to collect.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Maximum_: `4294967295`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-signalinformation-maxsamplecount */
    "MaxSampleCount"?: number | Intrinsic;
    /**
     * - The minimum duration of time (in milliseconds) between two triggering events to collect data.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Maximum_: `4294967295`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-signalinformation-minimumsamplingintervalms */
    "MinimumSamplingIntervalMs"?: number | Intrinsic;
    /**
     * - The name of the signal.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[\w|*|-]+(\.[\w|*|-]+)*$`
     * - _Minimum_: `1`
     * - _Maximum_: `150`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-signalinformation-name */
    "Name": string | Intrinsic;
}

/**
 * A set of key/value pairs that are used to manage the resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html */

export interface Tag {
    /**
     * - The tag's key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag's value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Information about a collection scheme that uses a time period to decide how often to collect data.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html */

export interface TimeBasedCollectionScheme {
    /**
     * - The time period (in milliseconds) to decide how often to collect data. For example, if the time period is `60000`, the Edge Agent software collects data once every minute.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `10000`
     * - _Maximum_: `86400000`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-timebasedcollectionscheme-periodms */
    "PeriodMs": number | Intrinsic;
}

/**
 * Information about a collection scheme that uses a simple logical expression to recognize what data to collect.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html */

export interface ConditionBasedCollectionScheme {
    /**
     * - Specifies the version of the conditional expression language.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-conditionbasedcollectionscheme-conditionlanguageversion */
    "ConditionLanguageVersion"?: number | Intrinsic;
    /**
     * - The logical expression used to recognize what data to collect. For example, `$variable.Vehicle.OutsideAirTemperature >= 105.0`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-conditionbasedcollectionscheme-expression */
    "Expression": string | Intrinsic;
    /**
     * - The minimum duration of time between two triggering events to collect data, in milliseconds.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Maximum_: `4294967295`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-conditionbasedcollectionscheme-minimumtriggerintervalms */
    "MinimumTriggerIntervalMs"?: number | Intrinsic;
    /**
     * - Whether to collect data for all triggering events (`ALWAYS`). Specify (`RISING_EDGE`), or specify only when the condition first evaluates to false. For example, triggering on "AirbagDeployed"; Users aren't interested on triggering when the airbag is already exploded; they only care about the change from not deployed => deployed.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ALWAYS | RISING_EDGE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-conditionbasedcollectionscheme-triggermode */
    "TriggerMode"?: string | Intrinsic;
}

/**
 * Specifies what data to collect and how often or when to collect it.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html */

export interface CollectionScheme {
    /**
     * - Information about a collection scheme that uses a simple logical expression to recognize what data to collect.
     * - _Required_: No
     * - _Type_: [ConditionBasedCollectionScheme](./aws-properties-iotfleetwise-campaign-conditionbasedcollectionscheme.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-collectionscheme-conditionbasedcollectionscheme */
    "ConditionBasedCollectionScheme"?: ConditionBasedCollectionScheme;
    /**
     * - Information about a collection scheme that uses a time period to decide how often to collect data.
     * - _Required_: No
     * - _Type_: [TimeBasedCollectionScheme](./aws-properties-iotfleetwise-campaign-timebasedcollectionscheme.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-collectionscheme-timebasedcollectionscheme */
    "TimeBasedCollectionScheme"?: TimeBasedCollectionScheme;
}

/**
 * The Amazon S3 bucket where the AWS IoT FleetWise campaign sends data. Amazon S3 is an object storage service that stores data as objects within buckets. For more information, see [Creating, configuring, and working with Amazon S3 buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) in the _Amazon Simple Storage Service User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html */

export interface S3Config {
    /**
     * - The Amazon Resource Name (ARN) of the Amazon S3 bucket.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:(aws[a-zA-Z0-9-]*):s3:::.+$`
     * - _Minimum_: `16`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-s3config-bucketarn */
    "BucketArn": string | Intrinsic;
    /**
     * - Specify the format that files are saved in the Amazon S3 bucket. You can save files in an Apache Parquet or JSON format.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `JSON | PARQUET`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-s3config-dataformat */
    "DataFormat"?: string | Intrinsic;
    /**
     * - Enter an S3 bucket prefix. The prefix is the string of characters after the bucket name and before the object name. You can use the prefix to organize data stored in Amazon S3 buckets. For more information, see [Organizing objects using prefixes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html) in the _Amazon Simple Storage Service User Guide_.
     * - By default, AWS IoT FleetWise sets the prefix `processed-data/year=YY/month=MM/date=DD/hour=HH/` (in UTC) to data it delivers to Amazon S3. You can enter a prefix to append it to this default prefix. For example, if you enter the prefix `vehicles`, the prefix will be `vehicles/processed-data/year=YY/month=MM/date=DD/hour=HH/`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9-_:./!*'()]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-s3config-prefix */
    "Prefix"?: string | Intrinsic;
    /**
     * - By default, stored data is compressed as a .gzip file. Compressed files have a reduced file size, which can optimize the cost of data storage.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `NONE | GZIP`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-s3config-storagecompressionformat */
    "StorageCompressionFormat"?: string | Intrinsic;
}

/**
 * The MQTT topic to which the AWS IoT FleetWise campaign routes data. For more information, see [Device communication protocols](https://docs.aws.amazon.com/iot/latest/developerguide/protocols.html) in the _AWS IoT Core Developer Guide_.
 * ###### Important
 * 
 * Access to certain AWS IoT FleetWise features is currently gated. For more information, see [AWS Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the _AWS IoT FleetWise Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html */

export interface MqttTopicConfig {
    /**
     * - The ARN of the role that grants AWS IoT FleetWise permission to access and act on messages sent to the MQTT topic.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:(aws[a-zA-Z0-9-]*):iam::(\d{12})?:(role((\u002F)|(\u002F[\u0021-\u007F]+\u002F))[\w+=,.@-]+)$`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-mqtttopicconfig-executionrolearn */
    "ExecutionRoleArn": string | Intrinsic;
    /**
     * - The ARN of the MQTT topic.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:.*`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-mqtttopicconfig-mqtttopicarn */
    "MqttTopicArn": string | Intrinsic;
}

/**
 * The Amazon Timestream table where the AWS IoT FleetWise campaign sends data. Timestream stores and organizes data to optimize query processing time and to reduce storage costs. For more information, see [Data modeling](https://docs.aws.amazon.com/timestream/latest/developerguide/data-modeling.html) in the _Amazon Timestream Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html */

export interface TimestreamConfig {
    /**
     * - The Amazon Resource Name (ARN) of the task execution role that grants AWS IoT FleetWise permission to deliver data to the Amazon Timestream table.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:(aws[a-zA-Z0-9-]*):iam::(\d{12})?:(role((\u002F)|(\u002F[\u0021-\u007F]+\u002F))[\w+=,.@-]+)$`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-timestreamconfig-executionrolearn */
    "ExecutionRoleArn": string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the Amazon Timestream table.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:(aws[a-zA-Z0-9-]*):timestream:[a-zA-Z0-9-]+:[0-9]{12}:database\/[a-zA-Z0-9_.-]+\/table\/[a-zA-Z0-9_.-]+$`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-timestreamconfig-timestreamtablearn */
    "TimestreamTableArn": string | Intrinsic;
}

/**
 * The destination where the AWS IoT FleetWise campaign sends data. You can send data to be stored in Amazon S3 or Amazon Timestream.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html */

export interface DataDestinationConfig {
    /**
     * - The MQTT topic to which the AWS IoT FleetWise campaign routes data.
     * - _Required_: No
     * - _Type_: [MqttTopicConfig](./aws-properties-iotfleetwise-campaign-mqtttopicconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-datadestinationconfig-mqtttopicconfig */
    "MqttTopicConfig"?: MqttTopicConfig;
    /**
     * - The Amazon S3 bucket where the AWS IoT FleetWise campaign sends data.
     * - _Required_: No
     * - _Type_: [S3Config](./aws-properties-iotfleetwise-campaign-s3config.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-datadestinationconfig-s3config */
    "S3Config"?: S3Config;
    /**
     * - The Amazon Timestream table where the campaign sends data.
     * - _Required_: No
     * - _Type_: [TimestreamConfig](./aws-properties-iotfleetwise-campaign-timestreamconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-datadestinationconfig-timestreamconfig */
    "TimestreamConfig"?: TimestreamConfig;
}

/**
 * The upload options for the data partition. If upload options are specified, you must also specify storage options. See [DataPartitionStorageOptions](https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_DataPartitionStorageOptions.html).
 * ###### Important
 * 
 * Access to certain AWS IoT FleetWise features is currently gated. For more information, see [AWS Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the _AWS IoT FleetWise Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html */

export interface DataPartitionUploadOptions {
    /**
     * - The version of the condition language. Defaults to the most recent condition language version.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-datapartitionuploadoptions-conditionlanguageversion */
    "ConditionLanguageVersion"?: number | Intrinsic;
    /**
     * - The logical expression used to recognize what data to collect. For example, ``$variable.`Vehicle.OutsideAirTemperature` >= 105.0``.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-datapartitionuploadoptions-expression */
    "Expression": string | Intrinsic;
}

/**
 * Specifies the condition under which a signal fetch occurs.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html */

export interface ConditionBasedSignalFetchConfig {
    /**
     * - The condition that must be satisfied to trigger a signal fetch.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-conditionbasedsignalfetchconfig-conditionexpression */
    "ConditionExpression": string | Intrinsic;
    /**
     * - Indicates the mode in which the signal fetch is triggered.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ALWAYS | RISING_EDGE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-conditionbasedsignalfetchconfig-triggermode */
    "TriggerMode": string | Intrinsic;
}

/**
 * The maximum storage size for the data partition.
 * ###### Important
 * 
 * Access to certain AWS IoT FleetWise features is currently gated. For more information, see [AWS Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the _AWS IoT FleetWise Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html */

export interface StorageMaximumSize {
    /**
     * - The data type of the data to store.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `MB | GB | TB`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-storagemaximumsize-unit */
    "Unit": string | Intrinsic;
    /**
     * - The maximum amount of time to store data.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `1073741824`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-storagemaximumsize-value */
    "Value": number | Intrinsic;
}

/**
 * Information about the minimum amount of time that data will be kept.
 * ###### Important
 * 
 * Access to certain AWS IoT FleetWise features is currently gated. For more information, see [AWS Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the _AWS IoT FleetWise Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html */

export interface StorageMinimumTimeToLive {
    /**
     * - The time increment type.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `HOURS | DAYS | WEEKS`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-storageminimumtimetolive-unit */
    "Unit": string | Intrinsic;
    /**
     * - The minimum amount of time to store the data.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `10000`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-storageminimumtimetolive-value */
    "Value": number | Intrinsic;
}

/**
 * Size, time, and location options for the data partition.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html */

export interface DataPartitionStorageOptions {
    /**
     * - The maximum storage size of the data stored in the data partition.
     * - _Required_: Yes
     * - _Type_: [StorageMaximumSize](./aws-properties-iotfleetwise-campaign-storagemaximumsize.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-datapartitionstorageoptions-maximumsize */
    "MaximumSize": StorageMaximumSize;
    /**
     * - The amount of time that data in this partition will be kept on disk.
     * - _Required_: Yes
     * - _Type_: [StorageMinimumTimeToLive](./aws-properties-iotfleetwise-campaign-storageminimumtimetolive.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-datapartitionstorageoptions-minimumtimetolive */
    "MinimumTimeToLive": StorageMinimumTimeToLive;
    /**
     * - The folder name for the data partition under the campaign storage folder.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `4096`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-datapartitionstorageoptions-storagelocation */
    "StorageLocation": string | Intrinsic;
}

/**
 * The configuration for signal data storage and upload options. You can only specify these options when the campaign's spooling mode is `TO_DISK`.
 * ###### Important
 * 
 * Access to certain AWS IoT FleetWise features is currently gated. For more information, see [AWS Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the _AWS IoT FleetWise Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html */

export interface DataPartition {
    /**
     * - The ID of the data partition. The data partition ID must be unique within a campaign. You can establish a data partition as the default partition for a campaign by using `default` as the ID.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-datapartition-id */
    "Id": string | Intrinsic;
    /**
     * - The storage options for a data partition.
     * - _Required_: Yes
     * - _Type_: [DataPartitionStorageOptions](./aws-properties-iotfleetwise-campaign-datapartitionstorageoptions.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-datapartition-storageoptions */
    "StorageOptions": DataPartitionStorageOptions;
    /**
     * - The upload options for the data partition.
     * - _Required_: No
     * - _Type_: [DataPartitionUploadOptions](./aws-properties-iotfleetwise-campaign-datapartitionuploadoptions.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-datapartition-uploadoptions */
    "UploadOptions"?: DataPartitionUploadOptions;
}

/**
 * Used to configure a frequency-based vehicle signal fetch.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html */

export interface TimeBasedSignalFetchConfig {
    /**
     * - The frequency with which the signal fetch will be executed.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-timebasedsignalfetchconfig-executionfrequencyms */
    "ExecutionFrequencyMs": number | Intrinsic;
}

/**
 * The configuration of the signal fetch operation.
 * ###### Important
 * 
 * Access to certain AWS IoT FleetWise features is currently gated. For more information, see [AWS Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the _AWS IoT FleetWise Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html */

export interface SignalFetchConfig {
    /**
     * - The configuration of a condition-based signal fetch operation.
     * - _Required_: No
     * - _Type_: [ConditionBasedSignalFetchConfig](./aws-properties-iotfleetwise-campaign-conditionbasedsignalfetchconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-signalfetchconfig-conditionbased */
    "ConditionBased"?: ConditionBasedSignalFetchConfig;
    /**
     * - The configuration of a time-based signal fetch operation.
     * - _Required_: No
     * - _Type_: [TimeBasedSignalFetchConfig](./aws-properties-iotfleetwise-campaign-timebasedsignalfetchconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-signalfetchconfig-timebased */
    "TimeBased"?: TimeBasedSignalFetchConfig;
}

/**
 * Information about the signal to be fetched.
 * ###### Important
 * 
 * Access to certain AWS IoT FleetWise features is currently gated. For more information, see [AWS Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the _AWS IoT FleetWise Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html */

export interface SignalFetchInformation {
    /**
     * - The actions to be performed by the signal fetch.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1 | 1`
     * - _Maximum_: `2048 | 5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-signalfetchinformation-actions */
    "Actions": (string | Intrinsic)[];
    /**
     * - The version of the condition language used.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-signalfetchinformation-conditionlanguageversion */
    "ConditionLanguageVersion"?: number | Intrinsic;
    /**
     * - The fully qualified name of the signal to be fetched.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_.]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `150`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-signalfetchinformation-fullyqualifiedname */
    "FullyQualifiedName": string | Intrinsic;
    /**
     * - The configuration of the signal fetch operation.
     * - _Required_: Yes
     * - _Type_: [SignalFetchConfig](./aws-properties-iotfleetwise-campaign-signalfetchconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-signalfetchinformation-signalfetchconfig */
    "SignalFetchConfig": SignalFetchConfig;
}

/**
 * Creates an orchestration of data collection rules. The AWS IoT FleetWise Edge Agent software running in vehicles uses campaigns to decide how to collect and transfer data to the cloud. You create campaigns in the cloud. After you or your team approve campaigns, AWS IoT FleetWise automatically deploys them to vehicles.
 * For more information, see [Campaigns](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/campaigns.html) in the _AWS IoT FleetWise Developer Guide_.
 * ###### Important
 * 
 * Access to certain AWS IoT FleetWise features is currently gated. For more information, see [AWS Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the _AWS IoT FleetWise Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html */

export interface IoTFleetWiseCampaign extends ResourceAttributes {
    "Type": "AWS::IoTFleetWise::Campaign";
    "Properties": {
        /**
         * - Specifies how to update a campaign. The action can be one of the following:
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `APPROVE | SUSPEND | RESUME | UPDATE`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-action */
        "Action"?: string | Intrinsic;
        /**
         * - The data collection scheme associated with the campaign. You can specify a scheme that collects data based on time or an event.
         * - _Required_: Yes
         * - _Type_: [CollectionScheme](./aws-properties-iotfleetwise-campaign-collectionscheme.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-collectionscheme */
        "CollectionScheme": CollectionScheme;
        /**
         * - Whether to compress signals before transmitting data to AWS IoT FleetWise. If you don't want to compress the signals, use `OFF`. If it's not specified, `SNAPPY` is used.
         * - Default: `SNAPPY`
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `OFF | SNAPPY`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-compression */
        "Compression"?: string | Intrinsic;
        /**
         * - The destination where the campaign sends data. You can choose to send data to be stored in Amazon S3 or Amazon Timestream.
         * - Amazon S3 optimizes the cost of data storage and provides additional mechanisms to use vehicle data, such as data lakes, centralized data storage, data processing pipelines, and analytics. AWS IoT FleetWise supports at-least-once file delivery to S3. Your vehicle data is stored on multiple AWS IoT FleetWise servers for redundancy and high availability.
         * - You can use Amazon Timestream to access and analyze time series data, and Timestream to query vehicle data so that you can identify trends and patterns.
         * - _Required_: No
         * - _Type_: Array of [DataDestinationConfig](./aws-properties-iotfleetwise-campaign-datadestinationconfig.html)
         * - _Minimum_: `1`
         * - _Maximum_: `1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-datadestinationconfigs */
        "DataDestinationConfigs"?: DataDestinationConfig[];
        /**
         * - A list of vehicle attributes to associate with a campaign.
         * - Enrich the data with specified vehicle attributes. For example, add `make` and `model` to the campaign, and AWS IoT FleetWise will associate the data with those attributes as dimensions in Amazon Timestream. You can then query the data against `make` and `model`.
         * - Default: An empty array
         * - _Required_: No
         * - _Type_: Array of String
         * - _Minimum_: `1 | 0`
         * - _Maximum_: `150 | 5`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-dataextradimensions */
        "DataExtraDimensions"?: (string | Intrinsic)[];
        /**
         * - The data partitions associated with the signals collected from the vehicle.
         * - _Required_: No
         * - _Type_: Array of [DataPartition](./aws-properties-iotfleetwise-campaign-datapartition.html)
         * - _Minimum_: `0`
         * - _Maximum_: `20`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-datapartitions */
        "DataPartitions"?: DataPartition[];
        /**
         * - The description of the campaign.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[^\u0000-\u001F\u007F]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-description */
        "Description"?: string | Intrinsic;
        /**
         * - Option for a vehicle to send diagnostic trouble codes to AWS IoT FleetWise. If you want to send diagnostic trouble codes, use `SEND_ACTIVE_DTCS`. If it's not specified, `OFF` is used.
         * - Default: `OFF`
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `OFF | SEND_ACTIVE_DTCS`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-diagnosticsmode */
        "DiagnosticsMode"?: string | Intrinsic;
        /**
         * - The time the campaign expires, in seconds since epoch (January 1, 1970 at midnight UTC time). Vehicle data isn't collected after the campaign expires.
         * - Default: 253402214400 (December 31, 9999, 00:00:00 UTC)
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-expirytime */
        "ExpiryTime"?: string | Intrinsic;
        /**
         * - The name of a campaign.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z\d\-_:]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `100`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-name */
        "Name": string | Intrinsic;
        /**
         * - How long (in milliseconds) to collect raw data after a triggering event initiates the collection. If it's not specified, `0` is used.
         * - Default: `0`
         * - _Required_: No
         * - _Type_: Number
         * - _Minimum_: `0`
         * - _Maximum_: `4294967295`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-posttriggercollectionduration */
        "PostTriggerCollectionDuration"?: number | Intrinsic;
        /**
         * - A number indicating the priority of one campaign over another campaign for a certain vehicle or fleet. A campaign with the lowest value is deployed to vehicles before any other campaigns. If it's not specified, `0` is used.
         * - Default: `0`
         * - _Required_: No
         * - _Type_: Integer
         * - _Minimum_: `0`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-priority */
        "Priority"?: number | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the signal catalog associated with the campaign.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-signalcatalogarn */
        "SignalCatalogArn": string | Intrinsic;
        /**
         * - A list of information about signals to collect.
         * - _Required_: No
         * - _Type_: Array of [SignalInformation](./aws-properties-iotfleetwise-campaign-signalinformation.html)
         * - _Minimum_: `0`
         * - _Maximum_: `1000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-signalstocollect */
        "SignalsToCollect"?: SignalInformation[];
        /**
         * - A list of information about signals to fetch.
         * - _Required_: No
         * - _Type_: Array of [SignalFetchInformation](./aws-properties-iotfleetwise-campaign-signalfetchinformation.html)
         * - _Minimum_: `0`
         * - _Maximum_: `10`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-signalstofetch */
        "SignalsToFetch"?: SignalFetchInformation[];
        /**
         * - Whether to store collected data after a vehicle lost a connection with the cloud. After a connection is re-established, the data is automatically forwarded to AWS IoT FleetWise. If you want to store collected data when a vehicle loses connection with the cloud, use `TO_DISK`. If it's not specified, `OFF` is used.
         * - Default: `OFF`
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `OFF | TO_DISK`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-spoolingmode */
        "SpoolingMode"?: string | Intrinsic;
        /**
         * - The time, in milliseconds, to deliver a campaign after it was approved. If it's not specified, `0` is used.
         * - Default: `0`
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-starttime */
        "StartTime"?: string | Intrinsic;
        /**
         * - Metadata that can be used to manage the campaign.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-iotfleetwise-campaign-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-tags */
        "Tags"?: Tag[];
        /**
         * - The Amazon Resource Name (ARN) of a vehicle or fleet to which the campaign is deployed.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-campaign.html#cfn-iotfleetwise-campaign-targetarn */
        "TargetArn": string | Intrinsic;
    };
}