import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A list of features. You must include `FeatureName` and `FeatureType`. Valid feature `FeatureType`s are `Integral`, `Fractional` and `String`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html */

export interface FeatureDefinition {
    /**
     * - The name of a feature. The type must be a string. `FeatureName` cannot be any of the following: `is_deleted`, `write_time`, `api_invocation_time`.
     * - The name:
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,63}`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-featuredefinition-featurename */
    "FeatureName": string | Intrinsic;
    /**
     * - The value type of a feature. Valid values are Integral, Fractional, or String.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `Integral | Fractional | String`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-featuredefinition-featuretype */
    "FeatureType": string | Intrinsic;
}

/**
 * A tag object that consists of a key and an optional value, used to manage metadata for SageMaker AWS resources.
 * You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints. For more information on adding tags to SageMaker resources, see [AddTags](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html).
 * For more information on adding metadata to your AWS resources with tagging, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html). For advice on best practices for managing AWS resources with tagging, see [Tagging Best Practices: Implement an Effective AWS Resource Tagging Strategy](https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html */

export interface Tag {
    /**
     * - The tag key. Tag keys must be unique per resource.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `([\p{L}\p{Z}\p{N}_.:/=+\-@]*)`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `([\p{L}\p{Z}\p{N}_.:/=+\-@]*)`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Used to set feature group throughput configuration. There are two modes: `ON_DEMAND` and `PROVISIONED`. With on-demand mode, you are charged for data reads and writes that your application performs on your feature group. You do not need to specify read and write throughput because Feature Store accommodates your workloads as they ramp up and down. You can switch a feature group to on-demand only once in a 24 hour period. With provisioned throughput mode, you specify the read and write capacity per second that you expect your application to require, and you are billed based on those limits. Exceeding provisioned throughput will result in your requests being throttled.
 * Note: `PROVISIONED` throughput mode is supported only for feature groups that are offline-only, or use the [`Standard`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OnlineStoreConfig.html#sagemaker-Type-OnlineStoreConfig-StorageType) tier online store.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html */

export interface ThroughputConfig {
    /**
     * - For provisioned feature groups with online store enabled, this indicates the read throughput you are billed for and can consume without throttling.
     * - This field is not applicable for on-demand feature groups.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `10000000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-throughputconfig-provisionedreadcapacityunits */
    "ProvisionedReadCapacityUnits"?: number | Intrinsic;
    /**
     * - For provisioned feature groups, this indicates the write throughput you are billed for and can consume without throttling.
     * - This field is not applicable for on-demand feature groups.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `10000000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-throughputconfig-provisionedwritecapacityunits */
    "ProvisionedWriteCapacityUnits"?: number | Intrinsic;
    /**
     * - The mode used for your feature group throughput: `ON_DEMAND` or `PROVISIONED`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `OnDemand | Provisioned`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-throughputconfig-throughputmode */
    "ThroughputMode": string | Intrinsic;
}

/**
 * The Amazon Simple Storage (Amazon S3) location and security configuration for `OfflineStore`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html */

export interface S3StorageConfig {
    /**
     * - The AWS Key Management Service (KMS) key ARN of the key used to encrypt any objects written into the `OfflineStore` S3 location.
     * - The IAM `roleARN` that is passed as a parameter to `CreateFeatureGroup` must have below permissions to the `KmsKeyId`:
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-s3storageconfig-kmskeyid */
    "KmsKeyId"?: string | Intrinsic;
    /**
     * - The S3 URI, or location in Amazon S3, of `OfflineStore`.
     * - S3 URIs have a format similar to the following: `s3://example-bucket/prefix/`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-s3storageconfig-s3uri */
    "S3Uri": string | Intrinsic;
}

/**
 * The meta data of the Glue table which serves as data catalog for the `OfflineStore`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html */

export interface DataCatalogConfig {
    /**
     * - The name of the Glue table catalog.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF ]*`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-datacatalogconfig-catalog */
    "Catalog": string | Intrinsic;
    /**
     * - The name of the Glue table database.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF ]*`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-datacatalogconfig-database */
    "Database": string | Intrinsic;
    /**
     * - The name of the Glue table.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF ]*`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-datacatalogconfig-tablename */
    "TableName": string | Intrinsic;
}

/**
 * The configuration of an `OfflineStore`.
 * Provide an `OfflineStoreConfig` in a request to `CreateFeatureGroup` to create an `OfflineStore`.
 * To encrypt an `OfflineStore` using at rest data encryption, specify AWS Key Management Service (KMS) key ID, or `KMSKeyId`, in `S3StorageConfig`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html */

export interface OfflineStoreConfig {
    /**
     * - The meta data of the Glue table that is autogenerated when an `OfflineStore` is created.
     * - _Required_: No
     * - _Type_: [DataCatalogConfig](./aws-properties-sagemaker-featuregroup-datacatalogconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-offlinestoreconfig-datacatalogconfig */
    "DataCatalogConfig"?: DataCatalogConfig;
    /**
     * - Set to `True` to disable the automatic creation of an AWS Glue table when configuring an `OfflineStore`. If set to `False`, Feature Store will name the `OfflineStore` Glue table following [Athena's naming recommendations](https://docs.aws.amazon.com/athena/latest/ug/tables-databases-columns-names.html).
     * - The default value is `False`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-offlinestoreconfig-disablegluetablecreation */
    "DisableGlueTableCreation"?: boolean | Intrinsic;
    /**
     * - The Amazon Simple Storage (Amazon S3) location of `OfflineStore`.
     * - _Required_: Yes
     * - _Type_: [S3StorageConfig](./aws-properties-sagemaker-featuregroup-s3storageconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-offlinestoreconfig-s3storageconfig */
    "S3StorageConfig": S3StorageConfig;
    /**
     * - Format for the offline store table. Supported formats are Glue (Default) and [Apache Iceberg](https://iceberg.apache.org/).
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Iceberg | Glue`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-offlinestoreconfig-tableformat */
    "TableFormat"?: string | Intrinsic;
}

/**
 * The security configuration for `OnlineStore`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html */

export interface OnlineStoreSecurityConfig {
    /**
     * - The AWS Key Management Service (KMS) key ARN that SageMaker Feature Store uses to encrypt the Amazon S3 objects at rest using Amazon S3 server-side encryption.
     * - The caller (either user or IAM role) of `CreateFeatureGroup` must have below permissions to the `OnlineStore``KmsKeyId`:
     * - The caller (either user or IAM role) to all DataPlane operations (`PutRecord`, `GetRecord`, `DeleteRecord`) must have the following permissions to the `KmsKeyId`:
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-onlinestoresecurityconfig-kmskeyid */
    "KmsKeyId"?: string | Intrinsic;
}

/**
 * Time to live duration, where the record is hard deleted after the expiration time is reached; `ExpiresAt` = `EventTime` + `TtlDuration`. For information on HardDelete, see the [DeleteRecord](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_DeleteRecord.html) API in the Amazon SageMaker API Reference guide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html */

export interface TtlDuration {
    /**
     * - `TtlDuration` time unit.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Seconds | Minutes | Hours | Days | Weeks`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-ttlduration-unit */
    "Unit"?: string | Intrinsic;
    /**
     * - `TtlDuration` time value.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-ttlduration-value */
    "Value"?: number | Intrinsic;
}

/**
 * Use this to specify the AWS Key Management Service (KMS) Key ID, or `KMSKeyId`, for at rest data encryption. You can turn `OnlineStore` on or off by specifying the `EnableOnlineStore` flag at General Assembly.
 * The default value is `False`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html */

export interface OnlineStoreConfig {
    /**
     * - Turn `OnlineStore` off by specifying `False` for the `EnableOnlineStore` flag. Turn `OnlineStore` on by specifying `True` for the `EnableOnlineStore` flag.
     * - The default value is `False`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-onlinestoreconfig-enableonlinestore */
    "EnableOnlineStore"?: boolean | Intrinsic;
    /**
     * - Use to specify KMS Key ID (`KMSKeyId`) for at-rest encryption of your `OnlineStore`.
     * - _Required_: No
     * - _Type_: [OnlineStoreSecurityConfig](./aws-properties-sagemaker-featuregroup-onlinestoresecurityconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-onlinestoreconfig-securityconfig */
    "SecurityConfig"?: OnlineStoreSecurityConfig;
    /**
     * - Option for different tiers of low latency storage for real-time data retrieval.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Standard | InMemory`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-onlinestoreconfig-storagetype */
    "StorageType"?: string | Intrinsic;
    /**
     * - Time to live duration, where the record is hard deleted after the expiration time is reached; `ExpiresAt` = `EventTime` + `TtlDuration`. For information on HardDelete, see the [DeleteRecord](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_DeleteRecord.html) API in the Amazon SageMaker API Reference guide.
     * - _Required_: No
     * - _Type_: [TtlDuration](./aws-properties-sagemaker-featuregroup-ttlduration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-onlinestoreconfig-ttlduration */
    "TtlDuration"?: TtlDuration;
}

/**
 * Create a new `FeatureGroup`. A `FeatureGroup` is a group of `Features` defined in the `FeatureStore` to describe a `Record`.
 * The `FeatureGroup` defines the schema and features contained in the FeatureGroup. A `FeatureGroup` definition is composed of a list of `Features`, a `RecordIdentifierFeatureName`, an `EventTimeFeatureName` and configurations for its `OnlineStore` and `OfflineStore`. Check [AWS service quotas](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) to see the `FeatureGroup`s quota for your AWS account.
 * ###### Important
 * 
 * You must include at least one of `OnlineStoreConfig` and `OfflineStoreConfig` to create a `FeatureGroup`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html */

export interface SageMakerFeatureGroup extends ResourceAttributes {
    "Type": "AWS::SageMaker::FeatureGroup";
    "Properties": {
        /**
         * - A free form description of a `FeatureGroup`.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-description */
        "Description"?: string | Intrinsic;
        /**
         * - The name of the feature that stores the `EventTime` of a Record in a `FeatureGroup`.
         * - A `EventTime` is point in time when a new event occurs that corresponds to the creation or update of a `Record` in `FeatureGroup`. All `Records` in the `FeatureGroup` must have a corresponding `EventTime`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,63}`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-eventtimefeaturename */
        "EventTimeFeatureName": string | Intrinsic;
        /**
         * - A list of `Feature`s. Each `Feature` must include a `FeatureName` and a `FeatureType`.
         * - Valid `FeatureType`s are `Integral`, `Fractional` and `String`.
         * - `FeatureName`s cannot be any of the following: `is_deleted`, `write_time`, `api_invocation_time`.
         * - You can create up to 2,500 `FeatureDefinition`s per `FeatureGroup`.
         * - _Required_: Yes
         * - _Type_: Array of [FeatureDefinition](./aws-properties-sagemaker-featuregroup-featuredefinition.html)
         * - _Minimum_: `1`
         * - _Maximum_: `2500`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-featuredefinitions */
        "FeatureDefinitions": FeatureDefinition[];
        /**
         * - The name of the `FeatureGroup`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,63}`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-featuregroupname */
        "FeatureGroupName": string | Intrinsic;
        /**
         * - The configuration of an `OfflineStore`.
         * - _Required_: No
         * - _Type_: [OfflineStoreConfig](./aws-properties-sagemaker-featuregroup-offlinestoreconfig.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-offlinestoreconfig */
        "OfflineStoreConfig"?: OfflineStoreConfig;
        /**
         * - The configuration of an `OnlineStore`.
         * - _Required_: No
         * - _Type_: [OnlineStoreConfig](./aws-properties-sagemaker-featuregroup-onlinestoreconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-onlinestoreconfig */
        "OnlineStoreConfig"?: OnlineStoreConfig;
        /**
         * - The name of the `Feature` whose value uniquely identifies a `Record` defined in the `FeatureGroup``FeatureDefinitions`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,63}`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-recordidentifierfeaturename */
        "RecordIdentifierFeatureName": string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the IAM execution role used to create the feature group.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
         * - _Minimum_: `20`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-rolearn */
        "RoleArn"?: string | Intrinsic;
        /**
         * - Tags used to define a `FeatureGroup`.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-sagemaker-featuregroup-tag.html)
         * - _Maximum_: `50`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-tags */
        "Tags"?: Tag[];
        /**
         * - Used to set feature group throughput configuration. There are two modes: `ON_DEMAND` and `PROVISIONED`. With on-demand mode, you are charged for data reads and writes that your application performs on your feature group. You do not need to specify read and write throughput because Feature Store accommodates your workloads as they ramp up and down. You can switch a feature group to on-demand only once in a 24 hour period. With provisioned throughput mode, you specify the read and write capacity per second that you expect your application to require, and you are billed based on those limits. Exceeding provisioned throughput will result in your requests being throttled.
         * - Note: `PROVISIONED` throughput mode is supported only for feature groups that are offline-only, or use the [`Standard`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_OnlineStoreConfig.html#sagemaker-Type-OnlineStoreConfig-StorageType) tier online store.
         * - _Required_: No
         * - _Type_: [ThroughputConfig](./aws-properties-sagemaker-featuregroup-throughputconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-featuregroup.html#cfn-sagemaker-featuregroup-throughputconfig */
        "ThroughputConfig"?: ThroughputConfig;
    };
}