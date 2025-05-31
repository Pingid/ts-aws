import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Provides encryption details of the Amazon Security Lake object. The AWS shared responsibility model applies to data protection in Amazon Security Lake. As described in this model, AWS is responsible for protecting the global infrastructure that runs all of the AWS Cloud. You are responsible for maintaining control over your content that is hosted on this infrastructure. For more details, see [Data protection](https://docs.aws.amazon.com/security-lake/latest/userguide/data-protection.html) in the Amazon Security Lake User Guide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html */

export interface EncryptionConfiguration {
    /**
     * - The ID of KMS encryption key used by Amazon Security Lake to encrypt the Security Lake object.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html#cfn-securitylake-datalake-encryptionconfiguration-kmskeyid */
    "KmsKeyId"?: string | Intrinsic;
}

/**
 * Provides replication configuration details for objects stored in the Amazon Security Lake data lake.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html */

export interface ReplicationConfiguration {
    /**
     * - Specifies one or more centralized rollup Regions. The AWS Region specified in the region parameter of the `CreateDataLake` or `UpdateDataLake` operations contributes data to the rollup Region or Regions specified in this parameter.
     * - Replication enables automatic, asynchronous copying of objects across Amazon S3 buckets. S3 buckets that are configured for object replication can be owned by the same AWS account or by different accounts. You can replicate objects to a single destination bucket or to multiple destination buckets. The destination buckets can be in different Regions or within the same Region as the source bucket.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html#cfn-securitylake-datalake-replicationconfiguration-regions */
    "Regions"?: (string | Intrinsic)[];
    /**
     * - Replication settings for the Amazon S3 buckets. This parameter uses the AWS Identity and Access Management (IAM) role you created that is managed by Security Lake, to ensure the replication setting is correct.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html#cfn-securitylake-datalake-replicationconfiguration-rolearn */
    "RoleArn"?: string | Intrinsic;
}

/**
 * A _tag_ is a label that you can define and associate with AWS resources, including certain types of Amazon Security Lake resources. Tags can help you identify, categorize, and manage resources in different ways, such as by owner, environment, or other criteria. You can associate tags with the following types of Security Lake resources: subscribers, and the data lake configuration for your AWS account in individual AWS Regions.
 * A resource can have up to 50 tags. Each tag consists of a required _tag key_ and an associated _tag value_. A _tag key_ is a general label that acts as a category for a more specific tag value. Each tag key must be unique and it can have only one tag value. A _tag value_ acts as a descriptor for a tag key. Tag keys and values are case sensitive. They can contain letters, numbers, spaces, or the following symbols: \_ . : / = + @ -
 * For more information, see [Tagging Amazon Security Lake resources](https://docs.aws.amazon.com/security-lake/latest/userguide/tagging-resources.html) in the _Amazon Security Lake User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html */

export interface Tag {
    /**
     * - The name of the tag. This is a general label that acts as a category for a more specific tag value (`value`).
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html#cfn-securitylake-datalake-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value that’s associated with the specified tag key (`key`). This value acts as a descriptor for the tag key. A tag value cannot be null, but it can be an empty string.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html#cfn-securitylake-datalake-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Provides transition lifecycle details of the Amazon Security Lake object. For more information about Amazon S3 Lifecycle configurations, see [Managing your storage lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html) in the _Amazon Simple Storage Service User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html */

export interface Transitions {
    /**
     * - The number of days before data transitions to a different S3 Storage Class in the Amazon Security Lake object.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html#cfn-securitylake-datalake-transitions-days */
    "Days"?: number | Intrinsic;
    /**
     * - The list of storage classes that you can choose from based on the data access, resiliency, and cost requirements of your workloads. The default storage class is **S3 Standard**. For information about other storage classes, see [Setting the storage class of an object](https://docs.aws.amazon.com/AmazonS3/latest/userguide/sc-howtoset.html) in the _Amazon S3 User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html#cfn-securitylake-datalake-transitions-storageclass */
    "StorageClass"?: string | Intrinsic;
}

/**
 * Provides data expiration details of the Amazon Security Lake object. You can specify your preferred Amazon S3 storage class and the time period for S3 objects to stay in that storage class before they expire. For more information about Amazon S3 Lifecycle configurations, see [Managing your storage lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html) in the _Amazon Simple Storage Service User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html */

export interface Expiration {
    /**
     * - The number of days before data expires in the Amazon Security Lake object.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html#cfn-securitylake-datalake-expiration-days */
    "Days"?: number | Intrinsic;
}

/**
 * Provides lifecycle details of Amazon Security Lake object. To manage your data so that it is stored cost effectively, you can configure retention settings for the data. You can specify your preferred Amazon S3 storage class and the time period for Amazon S3 objects to stay in that storage class before they transition to a different storage class or expire. For more information about Amazon S3 Lifecycle configurations, see [Managing your storage lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html) in the _Amazon Simple Storage Service User Guide_.
 * In Security Lake, you specify retention settings at the Region level. For example, you might choose to transition all S3 objects in a specific AWS Region to the `S3 Standard-IA` storage class 30 days after they're written to the data lake. The default Amazon S3 storage class is S3 Standard.
 * ###### Important
 * 
 * Security Lake doesn't support Amazon S3 Object Lock. When the data lake buckets are created, S3 Object Lock is disabled by default. Enabling S3 Object Lock with default retention mode interrupts the delivery of normalized log data to the data lake.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html */

export interface LifecycleConfiguration {
    /**
     * - Provides data expiration details of the Amazon Security Lake object.
     * - _Required_: No
     * - _Type_: [Expiration](./aws-properties-securitylake-datalake-expiration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html#cfn-securitylake-datalake-lifecycleconfiguration-expiration */
    "Expiration"?: Expiration;
    /**
     * - Provides data storage transition details of Amazon Security Lake object. By configuring these settings, you can specify your preferred Amazon S3 storage class and the time period for S3 objects to stay in that storage class before they transition to a different storage class.
     * - _Required_: No
     * - _Type_: [Array](./aws-properties-securitylake-datalake-transitions.html) of [Transitions](./aws-properties-securitylake-datalake-transitions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html#cfn-securitylake-datalake-lifecycleconfiguration-transitions */
    "Transitions"?: Transitions[];
}

/**
 * Initializes an Amazon Security Lake instance with the provided (or default) configuration. You can enable Security Lake in AWS Regions with customized settings before enabling log collection in Regions. To specify particular Regions, configure these Regions using the `configurations` parameter. If you have already enabled Security Lake in a Region when you call this command, the command will update the Region if you provide new configuration parameters. If you have not already enabled Security Lake in the Region when you call this API, it will set up the data lake in the Region with the specified configurations.
 * When you enable Security Lake, it starts ingesting security data after the `CreateAwsLogSource` call. This includes ingesting security data from sources, storing data, and making data accessible to subscribers. Security Lake also enables all the existing settings and resources that it stores or maintains for your AWS account in the current Region, including security log and event data. For more information, see the [Amazon Security Lake User Guide](https://docs.aws.amazon.com/security-lake/latest/userguide/what-is-security-lake.html).
 * ###### Important
 * 
 * If you use this template to create multiple data lakes in different AWS Regions, and more than one of your data lakes include an [AWS::SecurityLake::AwsLogSource](/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-awslogsource.html) resource, then you must deploy these data lakes sequentially. This is required because data lakes operate globally, and `AwsLogSource` resources must be deployed one at a time.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html */

export interface SecurityLakeDataLake extends ResourceAttributes {
    "Type": "AWS::SecurityLake::DataLake";
    "Properties": {
        /**
         * - Provides encryption details of the Amazon Security Lake object.
         * - _Required_: No
         * - _Type_: [EncryptionConfiguration](./aws-properties-securitylake-datalake-encryptionconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html#cfn-securitylake-datalake-encryptionconfiguration */
        "EncryptionConfiguration"?: EncryptionConfiguration;
        /**
         * - You can customize Security Lake to store data in your preferred AWS Regions for your preferred amount of time. Lifecycle management can help you comply with different compliance requirements. For more details, see [Lifecycle management](https://docs.aws.amazon.com/security-lake/latest/userguide/lifecycle-management.html) in the Amazon Security Lake User Guide.
         * - _Required_: No
         * - _Type_: [LifecycleConfiguration](./aws-properties-securitylake-datalake-lifecycleconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html#cfn-securitylake-datalake-lifecycleconfiguration */
        "LifecycleConfiguration"?: LifecycleConfiguration;
        /**
         * - The Amazon Resource Name (ARN) used to create and update the AWS Glue table. This table contains partitions generated by the ingestion and normalization of AWS log sources and custom sources.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^arn:.*$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html#cfn-securitylake-datalake-metastoremanagerrolearn */
        "MetaStoreManagerRoleArn"?: string | Intrinsic;
        /**
         * - Provides replication details of Amazon Security Lake object.
         * - _Required_: No
         * - _Type_: [ReplicationConfiguration](./aws-properties-securitylake-datalake-replicationconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html#cfn-securitylake-datalake-replicationconfiguration */
        "ReplicationConfiguration"?: ReplicationConfiguration;
        /**
         * - An array of objects, one for each tag to associate with the data lake configuration. For each tag, you must specify both a tag key and a tag value. A tag value cannot be null, but it can be an empty string.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-securitylake-datalake-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-datalake.html#cfn-securitylake-datalake-tags */
        "Tags"?: Tag[];
    };
}