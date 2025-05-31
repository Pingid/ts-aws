import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A container of a key value name pair.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html */

export interface Tag {
    /**
     * - Name of the object key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!aws:.*)[a-zA-Z0-9\s\_\.\/\=\+\-\@\:]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `127`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Value of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!aws:.*)[a-zA-Z0-9\s\_\.\/\=\+\-\@\:]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-tag-value */
    "Value": string | Intrinsic;
}

/**
 * This resource contains the details of the buckets and Regions for the Amazon S3 Storage Lens configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html */

export interface BucketsAndRegions {
    /**
     * - This property contains the details of the buckets for the Amazon S3 Storage Lens configuration. This should be the bucket Amazon Resource Name(ARN). For valid values, see [Buckets ARN format here](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_Include.html#API_control_Include_Contents) in the _Amazon S3 API Reference_.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-bucketsandregions-buckets */
    "Buckets"?: (string | Intrinsic)[];
    /**
     * - This property contains the details of the Regions for the S3 Storage Lens configuration.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-bucketsandregions-regions */
    "Regions"?: (string | Intrinsic)[];
}

/**
 * This resource contains the details of the AWS Organization for Amazon S3 Storage Lens.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html */

export interface AwsOrg {
    /**
     * - This resource contains the ARN of the AWS Organization.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-awsorg-arn */
    "Arn": string | Intrinsic;
}

/**
 * This resource enables Amazon S3 Storage Lens activity metrics. Activity metrics show details about how your storage is requested, such as requests (for example, All requests, Get requests, Put requests), bytes uploaded or downloaded, and errors.
 * For more information, see [Assessing your storage activity and usage with S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html) in the _Amazon S3 User Guide_. For a complete list of metrics, see [S3 Storage Lens metrics glossary](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html) in the _Amazon S3 User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html */

export interface ActivityMetrics {
    /**
     * - A property that indicates whether the activity metrics is enabled.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-activitymetrics-isenabled */
    "IsEnabled"?: boolean | Intrinsic;
}

/**
 * This resource enables Amazon S3 Storage Lens advanced data protection metrics. Advanced data protection metrics provide insights that you can use to perform audits and protect your data, for example replication rule counts within and across Regions.
 * For more information, see [Assessing your storage activity and usage with S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html) in the _Amazon S3 User Guide_. For a complete list of metrics, see [S3 Storage Lens metrics glossary](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html) in the _Amazon S3 User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html */

export interface AdvancedDataProtectionMetrics {
    /**
     * - Indicates whether advanced data protection metrics are enabled.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-advanceddataprotectionmetrics-isenabled */
    "IsEnabled"?: boolean | Intrinsic;
}

/**
 * This resource enables Amazon S3 Storage Lens advanced cost optimization metrics. Advanced cost optimization metrics provide insights that you can use to manage and optimize your storage costs, for example, lifecycle rule counts for transitions, expirations, and incomplete multipart uploads.
 * For more information, see [Assessing your storage activity and usage with S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html) in the _Amazon S3 User Guide_. For a complete list of metrics, see [S3 Storage Lens metrics glossary](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html) in the _Amazon S3 User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html */

export interface AdvancedCostOptimizationMetrics {
    /**
     * - Indicates whether advanced cost optimization metrics are enabled.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-advancedcostoptimizationmetrics-isenabled */
    "IsEnabled"?: boolean | Intrinsic;
}

/**
 * This resource enables Amazon S3 Storage Lens detailed status code metrics. Detailed status code metrics generate metrics for HTTP status codes, such as `200 OK`, `403 Forbidden`, `503 Service Unavailable` and others.
 * For more information, see [Assessing your storage activity and usage with S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html) in the _Amazon S3 User Guide_. For a complete list of metrics, see [S3 Storage Lens metrics glossary](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html) in the _Amazon S3 User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html */

export interface DetailedStatusCodesMetrics {
    /**
     * - Indicates whether detailed status code metrics are enabled.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-detailedstatuscodesmetrics-isenabled */
    "IsEnabled"?: boolean | Intrinsic;
}

/**
 * This resource enables the Amazon CloudWatch publishing option for Amazon S3 Storage Lens metrics.
 * For more information, see [Monitor S3 Storage Lens metrics in CloudWatch](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_view_metrics_cloudwatch.html) in the _Amazon S3 User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html */

export interface CloudWatchMetrics {
    /**
     * - This property identifies whether the CloudWatch publishing option for S3 Storage Lens is enabled.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-cloudwatchmetrics-isenabled */
    "IsEnabled": boolean | Intrinsic;
}

/**
 * This resource indicates which Storage Lens group ARNs to include or exclude in the Storage Lens group aggregation. You can only attach Storage Lens groups to your dashboard if they're included in your Storage Lens group aggregation. If this value is left null, then all Storage Lens groups are selected.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html */

export interface StorageLensGroupSelectionCriteria {
    /**
     * - This property indicates which Storage Lens group ARNs to exclude from the Storage Lens group aggregation.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-storagelensgroupselectioncriteria-exclude */
    "Exclude"?: (string | Intrinsic)[];
    /**
     * - This property indicates which Storage Lens group ARNs to include in the Storage Lens group aggregation.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-storagelensgroupselectioncriteria-include */
    "Include"?: (string | Intrinsic)[];
}

/**
 * This resource determines the scope of Storage Lens group data that is displayed in the Storage Lens dashboard.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html */

export interface StorageLensGroupLevel {
    /**
     * - This property indicates which Storage Lens group ARNs to include or exclude in the Storage Lens group aggregation. If this value is left null, then all Storage Lens groups are selected.
     * - _Required_: No
     * - _Type_: [StorageLensGroupSelectionCriteria](./aws-properties-s3-storagelens-storagelensgroupselectioncriteria.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-storagelensgrouplevel-storagelensgroupselectioncriteria */
    "StorageLensGroupSelectionCriteria"?: StorageLensGroupSelectionCriteria;
}

/**
 * Specifies the use of server-side encryption using an AWS Key Management Service key (SSE-KMS) to encrypt the delivered S3 Storage Lens metrics export file.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html */

export interface SSEKMS {
    /**
     * - Specifies the Amazon Resource Name (ARN) of the customer managed AWS KMS key to use for encrypting the S3 Storage Lens metrics export file. Amazon S3 only supports symmetric encryption keys. For more information, see [Special-purpose keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-types.html) in the _AWS Key Management Service Developer Guide_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-ssekms-keyid */
    "KeyId": string | Intrinsic;
}

/**
 * This resource contains the type of server-side encryption used to encrypt an Amazon S3 Storage Lens metrics export. For valid values, see the [StorageLensDataExportEncryption](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_StorageLensDataExportEncryption.html) in the _Amazon S3 API Reference_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html */

export interface Encryption {
    /**
     * - Specifies the use of AWS Key Management Service keys (SSE-KMS) to encrypt the S3 Storage Lens metrics export file.
     * - _Required_: No
     * - _Type_: [SSEKMS](./aws-properties-s3-storagelens-ssekms.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-encryption-ssekms */
    "SSEKMS"?: SSEKMS;
    /**
     * - Specifies the use of an Amazon S3-managed key (SSE-S3) to encrypt the S3 Storage Lens metrics export file.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-encryption-sses3 */
    "SSES3"?: any | Intrinsic;
}

/**
 * This resource contains the details of the bucket where the Amazon S3 Storage Lens metrics export will be placed.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html */

export interface S3BucketDestination {
    /**
     * - This property contains the details of the AWS account ID of the S3 Storage Lens export bucket destination.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-s3bucketdestination-accountid */
    "AccountId": string | Intrinsic;
    /**
     * - This property contains the details of the ARN of the bucket destination of the S3 Storage Lens export.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-s3bucketdestination-arn */
    "Arn": string | Intrinsic;
    /**
     * - This property contains the details of the encryption of the bucket destination of the Amazon S3 Storage Lens metrics export.
     * - _Required_: No
     * - _Type_: [Encryption](./aws-properties-s3-storagelens-encryption.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-s3bucketdestination-encryption */
    "Encryption"?: Encryption;
    /**
     * - This property contains the details of the format of the S3 Storage Lens export bucket destination.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `CSV | Parquet`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-s3bucketdestination-format */
    "Format": string | Intrinsic;
    /**
     * - This property contains the details of the output schema version of the S3 Storage Lens export bucket destination.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `V_1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-s3bucketdestination-outputschemaversion */
    "OutputSchemaVersion": string | Intrinsic;
    /**
     * - This property contains the details of the prefix of the bucket destination of the S3 Storage Lens export .
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-s3bucketdestination-prefix */
    "Prefix"?: string | Intrinsic;
}

/**
 * This resource contains the details of the Amazon S3 Storage Lens metrics export.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html */

export interface DataExport {
    /**
     * - This property enables the Amazon CloudWatch publishing option for S3 Storage Lens metrics.
     * - _Required_: No
     * - _Type_: [CloudWatchMetrics](./aws-properties-s3-storagelens-cloudwatchmetrics.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-dataexport-cloudwatchmetrics */
    "CloudWatchMetrics"?: CloudWatchMetrics;
    /**
     * - This property contains the details of the bucket where the S3 Storage Lens metrics export will be placed.
     * - _Required_: No
     * - _Type_: [S3BucketDestination](./aws-properties-s3-storagelens-s3bucketdestination.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-dataexport-s3bucketdestination */
    "S3BucketDestination"?: S3BucketDestination;
}

/**
 * This resource contains the details of the Amazon S3 Storage Lens selection criteria.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html */

export interface SelectionCriteria {
    /**
     * - This property contains the details of the S3 Storage Lens delimiter being used.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-selectioncriteria-delimiter */
    "Delimiter"?: string | Intrinsic;
    /**
     * - This property contains the details of the max depth that S3 Storage Lens will collect metrics up to.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-selectioncriteria-maxdepth */
    "MaxDepth"?: number | Intrinsic;
    /**
     * - This property contains the details of the minimum storage bytes percentage threshold that S3 Storage Lens will collect metrics up to.
     * - _Required_: No
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-selectioncriteria-minstoragebytespercentage */
    "MinStorageBytesPercentage"?: number | Intrinsic;
}

/**
 * This resource contains the details of the prefix-level storage metrics for Amazon S3 Storage Lens.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html */

export interface PrefixLevelStorageMetrics {
    /**
     * - This property identifies whether the details of the prefix-level storage metrics for S3 Storage Lens are enabled.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-prefixlevelstoragemetrics-isenabled */
    "IsEnabled"?: boolean | Intrinsic;
    /**
     * - This property identifies whether the details of the prefix-level storage metrics for S3 Storage Lens are enabled.
     * - _Required_: No
     * - _Type_: [SelectionCriteria](./aws-properties-s3-storagelens-selectioncriteria.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-prefixlevelstoragemetrics-selectioncriteria */
    "SelectionCriteria"?: SelectionCriteria;
}

/**
 * This resource contains the details of the prefix-level of the Amazon S3 Storage Lens.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html */

export interface PrefixLevel {
    /**
     * - A property for the prefix-level storage metrics for Amazon S3 Storage Lens.
     * - _Required_: Yes
     * - _Type_: [PrefixLevelStorageMetrics](./aws-properties-s3-storagelens-prefixlevelstoragemetrics.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-prefixlevel-storagemetrics */
    "StorageMetrics": PrefixLevelStorageMetrics;
}

/**
 * A property for the bucket-level storage metrics for Amazon S3 Storage Lens.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html */

export interface BucketLevel {
    /**
     * - A property for bucket-level activity metrics for S3 Storage Lens.
     * - _Required_: No
     * - _Type_: [ActivityMetrics](./aws-properties-s3-storagelens-activitymetrics.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-bucketlevel-activitymetrics */
    "ActivityMetrics"?: ActivityMetrics;
    /**
     * - A property for bucket-level advanced cost optimization metrics for S3 Storage Lens.
     * - _Required_: No
     * - _Type_: [AdvancedCostOptimizationMetrics](./aws-properties-s3-storagelens-advancedcostoptimizationmetrics.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-bucketlevel-advancedcostoptimizationmetrics */
    "AdvancedCostOptimizationMetrics"?: AdvancedCostOptimizationMetrics;
    /**
     * - A property for bucket-level advanced data protection metrics for S3 Storage Lens.
     * - _Required_: No
     * - _Type_: [AdvancedDataProtectionMetrics](./aws-properties-s3-storagelens-advanceddataprotectionmetrics.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-bucketlevel-advanceddataprotectionmetrics */
    "AdvancedDataProtectionMetrics"?: AdvancedDataProtectionMetrics;
    /**
     * - A property for bucket-level detailed status code metrics for S3 Storage Lens.
     * - _Required_: No
     * - _Type_: [DetailedStatusCodesMetrics](./aws-properties-s3-storagelens-detailedstatuscodesmetrics.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-bucketlevel-detailedstatuscodesmetrics */
    "DetailedStatusCodesMetrics"?: DetailedStatusCodesMetrics;
    /**
     * - A property for bucket-level prefix-level storage metrics for S3 Storage Lens.
     * - _Required_: No
     * - _Type_: [PrefixLevel](./aws-properties-s3-storagelens-prefixlevel.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-bucketlevel-prefixlevel */
    "PrefixLevel"?: PrefixLevel;
}

/**
 * This resource contains the details of the account-level metrics for Amazon S3 Storage Lens.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html */

export interface AccountLevel {
    /**
     * - This property contains the details of account-level activity metrics for S3 Storage Lens.
     * - _Required_: No
     * - _Type_: [ActivityMetrics](./aws-properties-s3-storagelens-activitymetrics.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-accountlevel-activitymetrics */
    "ActivityMetrics"?: ActivityMetrics;
    /**
     * - This property contains the details of account-level advanced cost optimization metrics for S3 Storage Lens.
     * - _Required_: No
     * - _Type_: [AdvancedCostOptimizationMetrics](./aws-properties-s3-storagelens-advancedcostoptimizationmetrics.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-accountlevel-advancedcostoptimizationmetrics */
    "AdvancedCostOptimizationMetrics"?: AdvancedCostOptimizationMetrics;
    /**
     * - This property contains the details of account-level advanced data protection metrics for S3 Storage Lens.
     * - _Required_: No
     * - _Type_: [AdvancedDataProtectionMetrics](./aws-properties-s3-storagelens-advanceddataprotectionmetrics.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-accountlevel-advanceddataprotectionmetrics */
    "AdvancedDataProtectionMetrics"?: AdvancedDataProtectionMetrics;
    /**
     * - This property contains the details of the account-level bucket-level configurations for Amazon S3 Storage Lens. To enable bucket-level configurations, make sure to also set the same metrics at the account level.
     * - _Required_: Yes
     * - _Type_: [BucketLevel](./aws-properties-s3-storagelens-bucketlevel.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-accountlevel-bucketlevel */
    "BucketLevel": BucketLevel;
    /**
     * - This property contains the details of account-level detailed status code metrics for S3 Storage Lens.
     * - _Required_: No
     * - _Type_: [DetailedStatusCodesMetrics](./aws-properties-s3-storagelens-detailedstatuscodesmetrics.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-accountlevel-detailedstatuscodesmetrics */
    "DetailedStatusCodesMetrics"?: DetailedStatusCodesMetrics;
    /**
     * - This property determines the scope of Storage Lens group data that is displayed in the Storage Lens dashboard.
     * - _Required_: No
     * - _Type_: [StorageLensGroupLevel](./aws-properties-s3-storagelens-storagelensgrouplevel.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-accountlevel-storagelensgrouplevel */
    "StorageLensGroupLevel"?: StorageLensGroupLevel;
}

/**
 * This is the property of the Amazon S3 Storage Lens configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html */

export interface StorageLensConfiguration {
    /**
     * - This property contains the details of the account-level metrics for Amazon S3 Storage Lens configuration.
     * - _Required_: Yes
     * - _Type_: [AccountLevel](./aws-properties-s3-storagelens-accountlevel.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-storagelensconfiguration-accountlevel */
    "AccountLevel": AccountLevel;
    /**
     * - This property contains the details of the AWS Organization for the S3 Storage Lens configuration.
     * - _Required_: No
     * - _Type_: [AwsOrg](./aws-properties-s3-storagelens-awsorg.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-storagelensconfiguration-awsorg */
    "AwsOrg"?: AwsOrg;
    /**
     * - This property contains the details of this S3 Storage Lens configuration's metrics export.
     * - _Required_: No
     * - _Type_: [DataExport](./aws-properties-s3-storagelens-dataexport.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-storagelensconfiguration-dataexport */
    "DataExport"?: DataExport;
    /**
     * - This property contains the details of the bucket and or Regions excluded for Amazon S3 Storage Lens configuration.
     * - _Required_: No
     * - _Type_: [BucketsAndRegions](./aws-properties-s3-storagelens-bucketsandregions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-storagelensconfiguration-exclude */
    "Exclude"?: BucketsAndRegions;
    /**
     * - This property contains the details of the ID of the S3 Storage Lens configuration.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9\-_.]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-storagelensconfiguration-id */
    "Id": string | Intrinsic;
    /**
     * - This property contains the details of the bucket and or Regions included for Amazon S3 Storage Lens configuration.
     * - _Required_: No
     * - _Type_: [BucketsAndRegions](./aws-properties-s3-storagelens-bucketsandregions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-storagelensconfiguration-include */
    "Include"?: BucketsAndRegions;
    /**
     * - This property contains the details of whether the Amazon S3 Storage Lens configuration is enabled.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-storagelensconfiguration-isenabled */
    "IsEnabled": boolean | Intrinsic;
    /**
     * - This property contains the details of the ARN of the S3 Storage Lens configuration. This property is read-only.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-storagelensconfiguration-storagelensarn */
    "StorageLensArn"?: string | Intrinsic;
}

/**
 * The AWS::S3::StorageLens resource creates an Amazon S3 Storage Lens configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html */

export interface S3StorageLens extends ResourceAttributes {
    "Type": "AWS::S3::StorageLens";
    "Properties": {
        /**
         * - This resource contains the details Amazon S3 Storage Lens configuration.
         * - _Required_: Yes
         * - _Type_: [StorageLensConfiguration](./aws-properties-s3-storagelens-storagelensconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-storagelensconfiguration */
        "StorageLensConfiguration": StorageLensConfiguration;
        /**
         * - A set of tags (key–value pairs) to associate with the Storage Lens configuration.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-s3-storagelens-tag.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-tags */
        "Tags"?: Tag[];
    };
}