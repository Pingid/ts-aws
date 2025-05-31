import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * How long, in days, message data is kept.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html */

export interface RetentionPeriod {
    /**
     * - The number of days that message data is kept. The `unlimited` parameter must be false.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-retentionperiod-numberofdays */
    "NumberOfDays"?: number | Intrinsic;
    /**
     * - If true, message data is kept indefinitely.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-retentionperiod-unlimited */
    "Unlimited"?: boolean | Intrinsic;
}

/**
 * A set of key-value pairs that are used to manage the resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html */

export interface Tag {
    /**
     * - The tag's key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag's value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-tag-value */
    "Value": string | Intrinsic;
}

/**
 * S3-customer-managed; When you choose customer-managed storage, the `retentionPeriod` parameter is ignored. You can't change the choice of Amazon S3 storage after your data store is created.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html */

export interface CustomerManagedS3 {
    /**
     * - The name of the Amazon S3 bucket where your data is stored.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9.\-_]*`
     * - _Minimum_: `3`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-customermanageds3-bucket */
    "Bucket": string | Intrinsic;
    /**
     * - (Optional) The prefix used to create the keys of the data store data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier in the bucket. Each object in a bucket has exactly one key. The prefix must end with a forward slash (/).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9!_.*'()/{}:-]*`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-customermanageds3-keyprefix */
    "KeyPrefix"?: string | Intrinsic;
    /**
     * - The ARN of the role that grants AWS IoT Analytics permission to interact with your Amazon S3 resources.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-customermanageds3-rolearn */
    "RoleArn": string | Intrinsic;
}

/**
 * A partition dimension defined by a timestamp attribute.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html */

export interface TimestampPartition {
    /**
     * - The attribute name of the partition defined by a timestamp.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9_]+`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-timestamppartition-attributename */
    "AttributeName": string | Intrinsic;
    /**
     * - The timestamp format of a partition defined by a timestamp. The default format is seconds since epoch (January 1, 1970 at midnight UTC time).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9\s\[\]_,.'/:-]*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-timestamppartition-timestampformat */
    "TimestampFormat"?: string | Intrinsic;
}

/**
 * A single dimension to partition a data store. The dimension must be an `AttributePartition` or a `TimestampPartition`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html */

export interface Partition {
    /**
     * - The name of the attribute that defines a partition dimension.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9_]+`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-partition-attributename */
    "AttributeName": string | Intrinsic;
}

/**
 * A single dimension to partition a data store. The dimension must be an `AttributePartition` or a `TimestampPartition`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html */

export interface DatastorePartition {
    /**
     * - A partition dimension defined by an attribute.
     * - _Required_: No
     * - _Type_: [Partition](./aws-properties-iotanalytics-datastore-partition.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-datastorepartition-partition */
    "Partition"?: Partition;
    /**
     * - A partition dimension defined by a timestamp attribute.
     * - _Required_: No
     * - _Type_: [TimestampPartition](./aws-properties-iotanalytics-datastore-timestamppartition.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-datastorepartition-timestamppartition */
    "TimestampPartition"?: TimestampPartition;
}

/**
 * Information about the partition dimensions in a data store.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html */

export interface DatastorePartitions {
    /**
     * - A list of partition dimensions in a data store.
     * - _Required_: No
     * - _Type_: Array of [DatastorePartition](./aws-properties-iotanalytics-datastore-datastorepartition.html)
     * - _Minimum_: `0`
     * - _Maximum_: `25`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-datastorepartitions-partitions */
    "Partitions"?: DatastorePartition[];
}

/**
 * Amazon S3-customer-managed; When you choose customer-managed storage, the `retentionPeriod` parameter is ignored. You can't change the choice of Amazon S3 storage after your data store is created.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html */

export interface CustomerManagedS3Storage {
    /**
     * - The name of the Amazon S3 bucket where your data is stored.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9.\-_]*`
     * - _Minimum_: `3`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-customermanageds3storage-bucket */
    "Bucket": string | Intrinsic;
    /**
     * - (Optional) The prefix used to create the keys of the data store data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier in the bucket. Each object in a bucket has exactly one key. The prefix must end with a forward slash (/).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9!_.*'()/{}:-]*`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-customermanageds3storage-keyprefix */
    "KeyPrefix"?: string | Intrinsic;
}

/**
 * Stores data used by AWS IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html */

export interface IotSiteWiseMultiLayerStorage {
    /**
     * - Stores data used by AWS IoT SiteWise in an Amazon S3 bucket that you manage.
     * - _Required_: No
     * - _Type_: [CustomerManagedS3Storage](./aws-properties-iotanalytics-datastore-customermanageds3storage.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-iotsitewisemultilayerstorage-customermanageds3storage */
    "CustomerManagedS3Storage"?: CustomerManagedS3Storage;
}

/**
 * Where data store data is stored.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html */

export interface DatastoreStorage {
    /**
     * - Use this to store data store data in an S3 bucket that you manage. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store.
     * - _Required_: No
     * - _Type_: [CustomerManagedS3](./aws-properties-iotanalytics-datastore-customermanageds3.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-datastorestorage-customermanageds3 */
    "CustomerManagedS3"?: CustomerManagedS3;
    /**
     * - Use this to store data used by AWS IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created.
     * - _Required_: No
     * - _Type_: [IotSiteWiseMultiLayerStorage](./aws-properties-iotanalytics-datastore-iotsitewisemultilayerstorage.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-datastorestorage-iotsitewisemultilayerstorage */
    "IotSiteWiseMultiLayerStorage"?: IotSiteWiseMultiLayerStorage;
    /**
     * - Use this to store data store data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-datastorestorage-servicemanageds3 */
    "ServiceManagedS3"?: any | Intrinsic;
}

/**
 * Contains information about a column that stores your data.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html */

export interface Column {
    /**
     * - The name of the column.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-column-name */
    "Name": string | Intrinsic;
    /**
     * - The type of data. For more information about the supported data types, see [Common data types](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-common.html) in the _AWS Glue Developer Guide_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-column-type */
    "Type": string | Intrinsic;
}

/**
 * Information needed to define a schema.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html */

export interface SchemaDefinition {
    /**
     * - Specifies one or more columns that store your data.
     * - Each schema can have up to 100 columns. Each column can have up to 100 nested types.
     * - _Required_: No
     * - _Type_: Array of [Column](./aws-properties-iotanalytics-datastore-column.html)
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-schemadefinition-columns */
    "Columns"?: Column[];
}

/**
 * Contains the configuration information of the Parquet format.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html */

export interface ParquetConfiguration {
    /**
     * - Information needed to define a schema.
     * - _Required_: No
     * - _Type_: [SchemaDefinition](./aws-properties-iotanalytics-datastore-schemadefinition.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-parquetconfiguration-schemadefinition */
    "SchemaDefinition"?: SchemaDefinition;
}

/**
 * Contains the configuration information of file formats. AWS IoT Analytics data stores support JSON and [Parquet](https://parquet.apache.org/).
 * The default file format is JSON. You can specify only one format.
 * You can't change the file format after you create the data store.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html */

export interface FileFormatConfiguration {
    /**
     * - Contains the configuration information of the JSON format.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-fileformatconfiguration-jsonconfiguration */
    "JsonConfiguration"?: any | Intrinsic;
    /**
     * - Contains the configuration information of the Parquet format.
     * - _Required_: No
     * - _Type_: [ParquetConfiguration](./aws-properties-iotanalytics-datastore-parquetconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-fileformatconfiguration-parquetconfiguration */
    "ParquetConfiguration"?: ParquetConfiguration;
}

/**
 * AWS::IoTAnalytics::Datastore resource is a repository for messages. For more information, see [How to Use AWS IoT Analytics](https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html#aws-iot-analytics-how) in the _AWS IoT Analytics User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html */

export interface IoTAnalyticsDatastore extends ResourceAttributes {
    "Type": "AWS::IoTAnalytics::Datastore";
    "Properties": {
        /**
         * - The name of the data store.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9_]+`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-datastorename */
        "DatastoreName"?: string | Intrinsic;
        /**
         * - Information about the partition dimensions in a data store.
         * - _Required_: No
         * - _Type_: [DatastorePartitions](./aws-properties-iotanalytics-datastore-datastorepartitions.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-datastorepartitions */
        "DatastorePartitions"?: DatastorePartitions;
        /**
         * - Where data store data is stored.
         * - _Required_: No
         * - _Type_: [DatastoreStorage](./aws-properties-iotanalytics-datastore-datastorestorage.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-datastorestorage */
        "DatastoreStorage"?: DatastoreStorage;
        /**
         * - Contains the configuration information of file formats. AWS IoT Analytics data stores support JSON and [Parquet](https://parquet.apache.org/).
         * - The default file format is JSON. You can specify only one format.
         * - You can't change the file format after you create the data store.
         * - _Required_: No
         * - _Type_: [FileFormatConfiguration](./aws-properties-iotanalytics-datastore-fileformatconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-fileformatconfiguration */
        "FileFormatConfiguration"?: FileFormatConfiguration;
        /**
         * - How long, in days, message data is kept for the data store. When `customerManagedS3` storage is selected, this parameter is ignored.
         * - _Required_: No
         * - _Type_: [RetentionPeriod](./aws-properties-iotanalytics-datastore-retentionperiod.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-retentionperiod */
        "RetentionPeriod"?: RetentionPeriod;
        /**
         * - Metadata which can be used to manage the data store.
         * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-iotanalytics-datastore-tag.html)
         * - _Minimum_: `1`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotanalytics-datastore.html#cfn-iotanalytics-datastore-tags */
        "Tags"?: Tag[];
    };
}