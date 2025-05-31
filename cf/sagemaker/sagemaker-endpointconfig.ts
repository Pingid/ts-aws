import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A tag object that consists of a key and an optional value, used to manage metadata for SageMaker AWS resources.
 * You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints. For more information on adding tags to SageMaker resources, see [AddTags](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html).
 * For more information on adding metadata to your AWS resources with tagging, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html). For advice on best practices for managing AWS resources with tagging, see [Tagging Best Practices: Implement an Effective AWS Resource Tagging Strategy](https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html */

export interface Tag {
    /**
     * - The tag key. Tag keys must be unique per resource.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `([\p{L}\p{Z}\p{N}_.:/=+\-@]*)`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `([\p{L}\p{Z}\p{N}_.:/=+\-@]*)`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Specifies the JSON and CSV content types of the data that the endpoint captures.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html */

export interface CaptureContentTypeHeader {
    /**
     * - A list of the CSV content types of the data that the endpoint captures. For the endpoint to capture the data, you must also specify the content type when you invoke the endpoint.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-capturecontenttypeheader-csvcontenttypes */
    "CsvContentTypes"?: (string | Intrinsic)[];
    /**
     * - A list of the JSON content types of the data that the endpoint captures. For the endpoint to capture the data, you must also specify the content type when you invoke the endpoint.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-capturecontenttypeheader-jsoncontenttypes */
    "JsonContentTypes"?: (string | Intrinsic)[];
}

/**
 * Specifies whether the endpoint captures input data or output data.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html */

export interface CaptureOption {
    /**
     * - Specifies whether the endpoint captures input data or output data.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `Input | Output | InputAndOutput`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-captureoption-capturemode */
    "CaptureMode": string | Intrinsic;
}

/**
 * Specifies the configuration of your endpoint for model monitor data capture.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html */

export interface DataCaptureConfig {
    /**
     * - A list of the JSON and CSV content type that the endpoint captures.
     * - _Required_: No
     * - _Type_: [CaptureContentTypeHeader](./aws-properties-sagemaker-endpointconfig-capturecontenttypeheader.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-datacaptureconfig-capturecontenttypeheader */
    "CaptureContentTypeHeader"?: CaptureContentTypeHeader;
    /**
     * - Specifies whether the endpoint captures input data to your model, output data from your model, or both.
     * - _Required_: Yes
     * - _Type_: Array of [CaptureOption](./aws-properties-sagemaker-endpointconfig-captureoption.html)
     * - _Minimum_: `1`
     * - _Maximum_: `32`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-datacaptureconfig-captureoptions */
    "CaptureOptions": CaptureOption[];
    /**
     * - The S3 bucket where model monitor stores captured data.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `(https|s3)://([^/])/?(.*)`
     * - _Minimum_: `0`
     * - _Maximum_: `512`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-datacaptureconfig-destinations3uri */
    "DestinationS3Uri": string | Intrinsic;
    /**
     * - Set to `True` to enable data capture.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-datacaptureconfig-enablecapture */
    "EnableCapture"?: boolean | Intrinsic;
    /**
     * - The percentage of data to capture.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-datacaptureconfig-initialsamplingpercentage */
    "InitialSamplingPercentage": number | Intrinsic;
    /**
     * - The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the captured data at rest using Amazon S3 server-side encryption. The KmsKeyId can be any of the following formats: Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab Key ARN: arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab Alias name: alias/ExampleAlias Alias name ARN: arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account. For more information, see KMS-Managed Encryption Keys (https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html) in the Amazon Simple Storage Service Developer Guide. The KMS key policy must grant permission to the IAM role that you specify in your CreateModel (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API\_CreateModel.html) request. For more information, see Using Key Policies in AWS KMS (http://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html) in the AWS Key Management Service Developer Guide.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9:/_-]*`
     * - _Minimum_: `0`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-datacaptureconfig-kmskeyid */
    "KmsKeyId"?: string | Intrinsic;
}

/**
 * Specifies the serverless configuration for an endpoint variant.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html */

export interface ServerlessConfig {
    /**
     * - The maximum number of concurrent invocations your serverless endpoint can process.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-serverlessconfig-maxconcurrency */
    "MaxConcurrency": number | Intrinsic;
    /**
     * - The memory size of your serverless endpoint. Valid values are in 1 GB increments: 1024 MB, 2048 MB, 3072 MB, 4096 MB, 5120 MB, or 6144 MB.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1024`
     * - _Maximum_: `6144`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-serverlessconfig-memorysizeinmb */
    "MemorySizeInMB": number | Intrinsic;
    /**
     * - The amount of provisioned concurrency to allocate for the serverless endpoint. Should be less than or equal to `MaxConcurrency`.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-serverlessconfig-provisionedconcurrency */
    "ProvisionedConcurrency"?: number | Intrinsic;
}

/**
 * Specifies a model that you want to host and the resources to deploy for hosting it. If you are deploying multiple models, tell Amazon SageMaker how to distribute traffic among the models by specifying the `InitialVariantWeight` objects.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html */

export interface ProductionVariant {
    /**
     * - The size of the Elastic Inference (EI) instance to use for the production variant. EI instances provide on-demand GPU computing for inference. For more information, see [Using Elastic Inference in Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html). For more information, see [Using Elastic Inference in Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html).
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ml.eia1.medium | ml.eia1.large | ml.eia1.xlarge | ml.eia2.medium | ml.eia2.large | ml.eia2.xlarge`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-productionvariant-acceleratortype */
    "AcceleratorType"?: string | Intrinsic;
    /**
     * - The timeout value, in seconds, for your inference container to pass health check by SageMaker Hosting. For more information about health check, see [How Your Container Should Respond to Health Check (Ping) Requests](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-inference-code.html#your-algorithms-inference-algo-ping-requests).
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `60`
     * - _Maximum_: `3600`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-productionvariant-containerstartuphealthchecktimeoutinseconds */
    "ContainerStartupHealthCheckTimeoutInSeconds"?: number | Intrinsic;
    /**
     * - You can use this parameter to turn on native AWS Systems Manager (SSM) access for a production variant behind an endpoint. By default, SSM access is disabled for all production variants behind an endpoint. You can turn on or turn off SSM access for a production variant behind an existing endpoint by creating a new endpoint configuration and calling `UpdateEndpoint`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-productionvariant-enablessmaccess */
    "EnableSSMAccess"?: boolean | Intrinsic;
    /**
     * - Number of instances to launch initially.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-productionvariant-initialinstancecount */
    "InitialInstanceCount"?: number | Intrinsic;
    /**
     * - Determines initial traffic distribution among all of the models that you specify in the endpoint configuration. The traffic to a production variant is determined by the ratio of the `VariantWeight` to the sum of all `VariantWeight` values across all ProductionVariants. If unspecified, it defaults to 1.0.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-productionvariant-initialvariantweight */
    "InitialVariantWeight": number | Intrinsic;
    /**
     * - The ML compute instance type.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ml.t2.medium | ml.t2.large | ml.t2.xlarge | ml.t2.2xlarge | ml.m4.xlarge | ml.m4.2xlarge | ml.m4.4xlarge | ml.m4.10xlarge | ml.m4.16xlarge | ml.m5.large | ml.m5.xlarge | ml.m5.2xlarge | ml.m5.4xlarge | ml.m5.12xlarge | ml.m5.24xlarge | ml.m5d.large | ml.m5d.xlarge | ml.m5d.2xlarge | ml.m5d.4xlarge | ml.m5d.12xlarge | ml.m5d.24xlarge | ml.c4.large | ml.c4.xlarge | ml.c4.2xlarge | ml.c4.4xlarge | ml.c4.8xlarge | ml.p2.xlarge | ml.p2.8xlarge | ml.p2.16xlarge | ml.p3.2xlarge | ml.p3.8xlarge | ml.p3.16xlarge | ml.c5.large | ml.c5.xlarge | ml.c5.2xlarge | ml.c5.4xlarge | ml.c5.9xlarge | ml.c5.18xlarge | ml.c5d.large | ml.c5d.xlarge | ml.c5d.2xlarge | ml.c5d.4xlarge | ml.c5d.9xlarge | ml.c5d.18xlarge | ml.g4dn.xlarge | ml.g4dn.2xlarge | ml.g4dn.4xlarge | ml.g4dn.8xlarge | ml.g4dn.12xlarge | ml.g4dn.16xlarge | ml.r5.large | ml.r5.xlarge | ml.r5.2xlarge | ml.r5.4xlarge | ml.r5.12xlarge | ml.r5.24xlarge | ml.r5d.large | ml.r5d.xlarge | ml.r5d.2xlarge | ml.r5d.4xlarge | ml.r5d.12xlarge | ml.r5d.24xlarge | ml.inf1.xlarge | ml.inf1.2xlarge | ml.inf1.6xlarge | ml.inf1.24xlarge | ml.dl1.24xlarge | ml.c6i.large | ml.c6i.xlarge | ml.c6i.2xlarge | ml.c6i.4xlarge | ml.c6i.8xlarge | ml.c6i.12xlarge | ml.c6i.16xlarge | ml.c6i.24xlarge | ml.c6i.32xlarge | ml.m6i.large | ml.m6i.xlarge | ml.m6i.2xlarge | ml.m6i.4xlarge | ml.m6i.8xlarge | ml.m6i.12xlarge | ml.m6i.16xlarge | ml.m6i.24xlarge | ml.m6i.32xlarge | ml.r6i.large | ml.r6i.xlarge | ml.r6i.2xlarge | ml.r6i.4xlarge | ml.r6i.8xlarge | ml.r6i.12xlarge | ml.r6i.16xlarge | ml.r6i.24xlarge | ml.r6i.32xlarge | ml.g5.xlarge | ml.g5.2xlarge | ml.g5.4xlarge | ml.g5.8xlarge | ml.g5.12xlarge | ml.g5.16xlarge | ml.g5.24xlarge | ml.g5.48xlarge | ml.g6.xlarge | ml.g6.2xlarge | ml.g6.4xlarge | ml.g6.8xlarge | ml.g6.12xlarge | ml.g6.16xlarge | ml.g6.24xlarge | ml.g6.48xlarge | ml.r8g.medium | ml.r8g.large | ml.r8g.xlarge | ml.r8g.2xlarge | ml.r8g.4xlarge | ml.r8g.8xlarge | ml.r8g.12xlarge | ml.r8g.16xlarge | ml.r8g.24xlarge | ml.r8g.48xlarge | ml.g6e.xlarge | ml.g6e.2xlarge | ml.g6e.4xlarge | ml.g6e.8xlarge | ml.g6e.12xlarge | ml.g6e.16xlarge | ml.g6e.24xlarge | ml.g6e.48xlarge | ml.p4d.24xlarge | ml.c7g.large | ml.c7g.xlarge | ml.c7g.2xlarge | ml.c7g.4xlarge | ml.c7g.8xlarge | ml.c7g.12xlarge | ml.c7g.16xlarge | ml.m6g.large | ml.m6g.xlarge | ml.m6g.2xlarge | ml.m6g.4xlarge | ml.m6g.8xlarge | ml.m6g.12xlarge | ml.m6g.16xlarge | ml.m6gd.large | ml.m6gd.xlarge | ml.m6gd.2xlarge | ml.m6gd.4xlarge | ml.m6gd.8xlarge | ml.m6gd.12xlarge | ml.m6gd.16xlarge | ml.c6g.large | ml.c6g.xlarge | ml.c6g.2xlarge | ml.c6g.4xlarge | ml.c6g.8xlarge | ml.c6g.12xlarge | ml.c6g.16xlarge | ml.c6gd.large | ml.c6gd.xlarge | ml.c6gd.2xlarge | ml.c6gd.4xlarge | ml.c6gd.8xlarge | ml.c6gd.12xlarge | ml.c6gd.16xlarge | ml.c6gn.large | ml.c6gn.xlarge | ml.c6gn.2xlarge | ml.c6gn.4xlarge | ml.c6gn.8xlarge | ml.c6gn.12xlarge | ml.c6gn.16xlarge | ml.r6g.large | ml.r6g.xlarge | ml.r6g.2xlarge | ml.r6g.4xlarge | ml.r6g.8xlarge | ml.r6g.12xlarge | ml.r6g.16xlarge | ml.r6gd.large | ml.r6gd.xlarge | ml.r6gd.2xlarge | ml.r6gd.4xlarge | ml.r6gd.8xlarge | ml.r6gd.12xlarge | ml.r6gd.16xlarge | ml.p4de.24xlarge | ml.trn1.2xlarge | ml.trn1.32xlarge | ml.trn1n.32xlarge | ml.trn2.48xlarge | ml.inf2.xlarge | ml.inf2.8xlarge | ml.inf2.24xlarge | ml.inf2.48xlarge | ml.p5.48xlarge | ml.p5e.48xlarge | ml.p5en.48xlarge | ml.m7i.large | ml.m7i.xlarge | ml.m7i.2xlarge | ml.m7i.4xlarge | ml.m7i.8xlarge | ml.m7i.12xlarge | ml.m7i.16xlarge | ml.m7i.24xlarge | ml.m7i.48xlarge | ml.c7i.large | ml.c7i.xlarge | ml.c7i.2xlarge | ml.c7i.4xlarge | ml.c7i.8xlarge | ml.c7i.12xlarge | ml.c7i.16xlarge | ml.c7i.24xlarge | ml.c7i.48xlarge | ml.r7i.large | ml.r7i.xlarge | ml.r7i.2xlarge | ml.r7i.4xlarge | ml.r7i.8xlarge | ml.r7i.12xlarge | ml.r7i.16xlarge | ml.r7i.24xlarge | ml.r7i.48xlarge`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-productionvariant-instancetype */
    "InstanceType"?: string | Intrinsic;
    /**
     * - The timeout value, in seconds, to download and extract the model that you want to host from Amazon S3 to the individual inference instance associated with this production variant.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `60`
     * - _Maximum_: `3600`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-productionvariant-modeldatadownloadtimeoutinseconds */
    "ModelDataDownloadTimeoutInSeconds"?: number | Intrinsic;
    /**
     * - The name of the model that you want to host. This is the name that you specified when creating the model.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9]([\-a-zA-Z0-9]*[a-zA-Z0-9])?`
     * - _Minimum_: `0`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-productionvariant-modelname */
    "ModelName": string | Intrinsic;
    /**
     * - The serverless configuration for an endpoint. Specifies a serverless endpoint configuration instead of an instance-based endpoint configuration.
     * - _Required_: No
     * - _Type_: [ServerlessConfig](./aws-properties-sagemaker-endpointconfig-serverlessconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-productionvariant-serverlessconfig */
    "ServerlessConfig"?: ServerlessConfig;
    /**
     * - The name of the production variant.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
     * - _Minimum_: `0`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-productionvariant-variantname */
    "VariantName": string | Intrinsic;
    /**
     * - The size, in GB, of the ML storage volume attached to individual inference instance associated with the production variant. Currently only Amazon EBS gp2 storage volumes are supported.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-productionvariant-volumesizeingb */
    "VolumeSizeInGB"?: number | Intrinsic;
}

/**
 * Configures the behavior of the client used by SageMaker to interact with the model container during asynchronous inference.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html */

export interface AsyncInferenceClientConfig {
    /**
     * - The maximum number of concurrent requests sent by the SageMaker client to the model container. If no value is provided, SageMaker will choose an optimal value for you.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-asyncinferenceclientconfig-maxconcurrentinvocationsperinstance */
    "MaxConcurrentInvocationsPerInstance"?: number | Intrinsic;
}

/**
 * The inference configuration parameter for the model container.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html */

export interface ClarifyInferenceConfig {
    /**
     * - A template string used to format a JSON record into an acceptable model container input. For example, a `ContentTemplate` string `'{"myfeatures":$features}'` will format a list of features `[1,2,3]` into the record string `'{"myfeatures":[1,2,3]}'`. Required only when the model container input is in JSON Lines format.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-contenttemplate */
    "ContentTemplate"?: string | Intrinsic;
    /**
     * - The names of the features. If provided, these are included in the endpoint response payload to help readability of the `InvokeEndpoint` output. See the [Response](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-invoke-endpoint.html#clarify-online-explainability-response) section under **Invoke the endpoint** in the Developer Guide for more information.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-featureheaders */
    "FeatureHeaders"?: (string | Intrinsic)[];
    /**
     * - Provides the JMESPath expression to extract the features from a model container input in JSON Lines format. For example, if `FeaturesAttribute` is the JMESPath expression `'myfeatures'`, it extracts a list of features `[1,2,3]` from request data `'{"myfeatures":[1,2,3]}'`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-featuresattribute */
    "FeaturesAttribute"?: string | Intrinsic;
    /**
     * - A list of data types of the features (optional). Applicable only to NLP explainability. If provided, `FeatureTypes` must have at least one `'text'` string (for example, `['text']`). If `FeatureTypes` is not provided, the explainer infers the feature types based on the baseline data. The feature types are included in the endpoint response payload. For additional information see the [response](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-invoke-endpoint.html#clarify-online-explainability-response) section under **Invoke the endpoint** in the Developer Guide for more information.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-featuretypes */
    "FeatureTypes"?: (string | Intrinsic)[];
    /**
     * - A JMESPath expression used to locate the list of label headers in the model container output.
     * - **Example**: If the model container output of a batch request is `'{"labels":["cat","dog","fish"],"probability":[0.6,0.3,0.1]}'`, then set `LabelAttribute` to `'labels'` to extract the list of label headers `["cat","dog","fish"]`
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-labelattribute */
    "LabelAttribute"?: string | Intrinsic;
    /**
     * - For multiclass classification problems, the label headers are the names of the classes. Otherwise, the label header is the name of the predicted label. These are used to help readability for the output of the `InvokeEndpoint` API. See the [response](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-invoke-endpoint.html#clarify-online-explainability-response) section under **Invoke the endpoint** in the Developer Guide for more information. If there are no label headers in the model container output, provide them manually using this parameter.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `16`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-labelheaders */
    "LabelHeaders"?: (string | Intrinsic)[];
    /**
     * - A zero-based index used to extract a label header or list of label headers from model container output in CSV format.
     * - **Example for a multiclass model:** If the model container output consists of label headers followed by probabilities: `'"[\'cat\',\'dog\',\'fish\']","[0.1,0.6,0.3]"'`, set `LabelIndex` to `0` to select the label headers `['cat','dog','fish']`.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-labelindex */
    "LabelIndex"?: number | Intrinsic;
    /**
     * - The maximum payload size (MB) allowed of a request from the explainer to the model container. Defaults to `6` MB.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `25`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-maxpayloadinmb */
    "MaxPayloadInMB"?: number | Intrinsic;
    /**
     * - The maximum number of records in a request that the model container can process when querying the model container for the predictions of a [synthetic dataset](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html#clarify-online-explainability-create-endpoint-synthetic). A record is a unit of input data that inference can be made on, for example, a single line in CSV data. If `MaxRecordCount` is `1`, the model container expects one record per request. A value of 2 or greater means that the model expects batch requests, which can reduce overhead and speed up the inferencing process. If this parameter is not provided, the explainer will tune the record count per request according to the model container's capacity at runtime.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-maxrecordcount */
    "MaxRecordCount"?: number | Intrinsic;
    /**
     * - A JMESPath expression used to extract the probability (or score) from the model container output if the model container is in JSON Lines format.
     * - **Example**: If the model container output of a single request is `'{"predicted_label":1,"probability":0.6}'`, then set `ProbabilityAttribute` to `'probability'`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-probabilityattribute */
    "ProbabilityAttribute"?: string | Intrinsic;
    /**
     * - A zero-based index used to extract a probability value (score) or list from model container output in CSV format. If this value is not provided, the entire model container output will be treated as a probability value (score) or list.
     * - **Example for a single class model:** If the model container output consists of a string-formatted prediction label followed by its probability: `'1,0.6'`, set `ProbabilityIndex` to `1` to select the probability value `0.6`.
     * - **Example for a multiclass model:** If the model container output consists of a string-formatted prediction label followed by its probability: `'"[\'cat\',\'dog\',\'fish\']","[0.1,0.6,0.3]"'`, set `ProbabilityIndex` to `1` to select the probability values `[0.1,0.6,0.3]`.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyinferenceconfig-probabilityindex */
    "ProbabilityIndex"?: number | Intrinsic;
}

/**
 * Specifies the configuration for notifications of inference results for asynchronous inference.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html */

export interface AsyncInferenceNotificationConfig {
    /**
     * - Amazon SNS topic to post a notification to when an inference fails. If no topic is provided, no notification is sent on failure.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-asyncinferencenotificationconfig-errortopic */
    "ErrorTopic"?: string | Intrinsic;
    /**
     * - The Amazon SNS topics where you want the inference response to be included.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `0`
     * - _Maximum_: `2`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-asyncinferencenotificationconfig-includeinferenceresponsein */
    "IncludeInferenceResponseIn"?: (string | Intrinsic)[];
    /**
     * - Amazon SNS topic to post a notification to when an inference completes successfully. If no topic is provided, no notification is sent on success.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-asyncinferencenotificationconfig-successtopic */
    "SuccessTopic"?: string | Intrinsic;
}

/**
 * Specifies the configuration for asynchronous inference invocation outputs.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html */

export interface AsyncInferenceOutputConfig {
    /**
     * - The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the asynchronous inference output in Amazon S3.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-asyncinferenceoutputconfig-kmskeyid */
    "KmsKeyId"?: string | Intrinsic;
    /**
     * - Specifies the configuration for notifications of inference results for asynchronous inference.
     * - _Required_: No
     * - _Type_: [AsyncInferenceNotificationConfig](./aws-properties-sagemaker-endpointconfig-asyncinferencenotificationconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-asyncinferenceoutputconfig-notificationconfig */
    "NotificationConfig"?: AsyncInferenceNotificationConfig;
    /**
     * - The Amazon S3 location to upload failure inference responses to.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `(https|s3)://([^/])/?(.*)`
     * - _Minimum_: `0`
     * - _Maximum_: `512`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-asyncinferenceoutputconfig-s3failurepath */
    "S3FailurePath"?: string | Intrinsic;
    /**
     * - The Amazon S3 location to upload inference responses to.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-asyncinferenceoutputconfig-s3outputpath */
    "S3OutputPath"?: string | Intrinsic;
}

/**
 * Specifies configuration for how an endpoint performs asynchronous inference.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html */

export interface AsyncInferenceConfig {
    /**
     * - Configures the behavior of the client used by SageMaker to interact with the model container during asynchronous inference.
     * - _Required_: No
     * - _Type_: [AsyncInferenceClientConfig](./aws-properties-sagemaker-endpointconfig-asyncinferenceclientconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-asyncinferenceconfig-clientconfig */
    "ClientConfig"?: AsyncInferenceClientConfig;
    /**
     * - Specifies the configuration for asynchronous inference invocation outputs.
     * - _Required_: Yes
     * - _Type_: [AsyncInferenceOutputConfig](./aws-properties-sagemaker-endpointconfig-asyncinferenceoutputconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-asyncinferenceconfig-outputconfig */
    "OutputConfig": AsyncInferenceOutputConfig;
}

/**
 * A parameter used to configure the SageMaker Clarify explainer to treat text features as text so that explanations are provided for individual units of text. Required only for natural language processing (NLP) explainability.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html */

export interface ClarifyTextConfig {
    /**
     * - The unit of granularity for the analysis of text features. For example, if the unit is `'token'`, then each token (like a word in English) of the text is treated as a feature. SHAP values are computed for each unit/feature.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `token | sentence | paragraph`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifytextconfig-granularity */
    "Granularity": string | Intrinsic;
    /**
     * - Specifies the language of the text features in [ISO 639-1]( https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) or [ISO 639-3](https://en.wikipedia.org/wiki/ISO_639-3) code of a supported language.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `af | sq | ar | hy | eu | bn | bg | ca | zh | hr | cs | da | nl | en | et | fi | fr | de | el | gu | he | hi | hu | is | id | ga | it | kn | ky | lv | lt | lb | mk | ml | mr | ne | nb | fa | pl | pt | ro | ru | sa | sr | tn | si | sk | sl | es | sv | tl | ta | tt | te | tr | uk | ur | yo | lij | xx`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifytextconfig-language */
    "Language": string | Intrinsic;
}

/**
 * The configuration for the [SHAP baseline](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-feature-attribute-shap-baselines.html) (also called the background or reference dataset) of the Kernal SHAP algorithm.
 * ###### Note
 * 
 * *   The number of records in the baseline data determines the size of the synthetic dataset, which has an impact on latency of explainability requests. For more information, see the **Synthetic data** of [Configure and create an endpoint](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html).
 *     
 * *   `ShapBaseline` and `ShapBaselineUri` are mutually exclusive parameters. One or the either is required to configure a SHAP baseline.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html */

export interface ClarifyShapBaselineConfig {
    /**
     * - The MIME type of the baseline data. Choose from `'text/csv'` or `'application/jsonlines'`. Defaults to `'text/csv'`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9](-*[a-zA-Z0-9])*\/[a-zA-Z0-9](-*[a-zA-Z0-9+.])*`
     * - _Minimum_: `0`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyshapbaselineconfig-mimetype */
    "MimeType"?: string | Intrinsic;
    /**
     * - The inline SHAP baseline data in string format. `ShapBaseline` can have one or multiple records to be used as the baseline dataset. The format of the SHAP baseline file should be the same format as the training dataset. For example, if the training dataset is in CSV format and each record contains four features, and all features are numerical, then the format of the baseline data should also share these characteristics. For natural language processing (NLP) of text columns, the baseline value should be the value used to replace the unit of text specified by the `Granularity` of the `TextConfig` parameter. The size limit for `ShapBasline` is 4 KB. Use the `ShapBaselineUri` parameter if you want to provide more than 4 KB of baseline data.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\s\S]+`
     * - _Minimum_: `1`
     * - _Maximum_: `4096`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyshapbaselineconfig-shapbaseline */
    "ShapBaseline"?: string | Intrinsic;
    /**
     * - The uniform resource identifier (URI) of the S3 bucket where the SHAP baseline file is stored. The format of the SHAP baseline file should be the same format as the format of the training dataset. For example, if the training dataset is in CSV format, and each record in the training dataset has four features, and all features are numerical, then the baseline file should also have this same format. Each record should contain only the features. If you are using a virtual private cloud (VPC), the `ShapBaselineUri` should be accessible to the VPC. For more information about setting up endpoints with Amazon Virtual Private Cloud, see [Give SageMaker access to Resources in your Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `(https|s3)://([^/]+)/?(.*)`
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyshapbaselineconfig-shapbaselineuri */
    "ShapBaselineUri"?: string | Intrinsic;
}

/**
 * The configuration for SHAP analysis using SageMaker Clarify Explainer.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html */

export interface ClarifyShapConfig {
    /**
     * - The number of samples to be used for analysis by the Kernal SHAP algorithm.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyshapconfig-numberofsamples */
    "NumberOfSamples"?: number | Intrinsic;
    /**
     * - The starting value used to initialize the random number generator in the explainer. Provide a value for this parameter to obtain a deterministic SHAP result.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyshapconfig-seed */
    "Seed"?: number | Intrinsic;
    /**
     * - The configuration for the SHAP baseline of the Kernal SHAP algorithm.
     * - _Required_: Yes
     * - _Type_: [ClarifyShapBaselineConfig](./aws-properties-sagemaker-endpointconfig-clarifyshapbaselineconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyshapconfig-shapbaselineconfig */
    "ShapBaselineConfig": ClarifyShapBaselineConfig;
    /**
     * - A parameter that indicates if text features are treated as text and explanations are provided for individual units of text. Required for natural language processing (NLP) explainability only.
     * - _Required_: No
     * - _Type_: [ClarifyTextConfig](./aws-properties-sagemaker-endpointconfig-clarifytextconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyshapconfig-textconfig */
    "TextConfig"?: ClarifyTextConfig;
    /**
     * - A Boolean toggle to indicate if you want to use the logit function (true) or log-odds units (false) for model predictions. Defaults to false.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyshapconfig-uselogit */
    "UseLogit"?: boolean | Intrinsic;
}

/**
 * The configuration parameters for the SageMaker Clarify explainer.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html */

export interface ClarifyExplainerConfig {
    /**
     * - A JMESPath boolean expression used to filter which records to explain. Explanations are activated by default. See [`EnableExplanations`](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-online-explainability-create-endpoint.html#clarify-online-explainability-create-endpoint-enable)for additional information.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyexplainerconfig-enableexplanations */
    "EnableExplanations"?: string | Intrinsic;
    /**
     * - The inference configuration parameter for the model container.
     * - _Required_: No
     * - _Type_: [ClarifyInferenceConfig](./aws-properties-sagemaker-endpointconfig-clarifyinferenceconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyexplainerconfig-inferenceconfig */
    "InferenceConfig"?: ClarifyInferenceConfig;
    /**
     * - The configuration for SHAP analysis.
     * - _Required_: Yes
     * - _Type_: [ClarifyShapConfig](./aws-properties-sagemaker-endpointconfig-clarifyshapconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-clarifyexplainerconfig-shapconfig */
    "ShapConfig": ClarifyShapConfig;
}

/**
 * A parameter to activate explainers.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html */

export interface ExplainerConfig {
    /**
     * - A member of `ExplainerConfig` that contains configuration parameters for the SageMaker Clarify explainer.
     * - _Required_: No
     * - _Type_: [ClarifyExplainerConfig](./aws-properties-sagemaker-endpointconfig-clarifyexplainerconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-explainerconfig-clarifyexplainerconfig */
    "ClarifyExplainerConfig"?: ClarifyExplainerConfig;
}

/**
 * The `AWS::SageMaker::EndpointConfig` resource creates a configuration for an Amazon SageMaker endpoint. For more information, see [CreateEndpointConfig](https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpointConfig.html) in the _SageMaker Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html */

export interface SageMakerEndpointConfig extends ResourceAttributes {
    "Type": "AWS::SageMaker::EndpointConfig";
    "Properties": {
        /**
         * - Specifies configuration for how an endpoint performs asynchronous inference.
         * - _Required_: No
         * - _Type_: [AsyncInferenceConfig](./aws-properties-sagemaker-endpointconfig-asyncinferenceconfig.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-asyncinferenceconfig */
        "AsyncInferenceConfig"?: AsyncInferenceConfig;
        /**
         * - Specifies how to capture endpoint data for model monitor. The data capture configuration applies to all production variants hosted at the endpoint.
         * - _Required_: No
         * - _Type_: [DataCaptureConfig](./aws-properties-sagemaker-endpointconfig-datacaptureconfig.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-datacaptureconfig */
        "DataCaptureConfig"?: DataCaptureConfig;
        /**
         * - The name of the endpoint configuration.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
         * - _Minimum_: `0`
         * - _Maximum_: `63`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-endpointconfigname */
        "EndpointConfigName"?: string | Intrinsic;
        /**
         * - A parameter to activate explainers.
         * - _Required_: No
         * - _Type_: [ExplainerConfig](./aws-properties-sagemaker-endpointconfig-explainerconfig.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-explainerconfig */
        "ExplainerConfig"?: ExplainerConfig;
        /**
         * - The Amazon Resource Name (ARN) of an AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
         * - The KMS key policy must grant permission to the IAM role that you specify in your `CreateEndpoint`, `UpdateEndpoint` requests. For more information, refer to the AWS Key Management Service section [Using Key Policies in AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html)
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9:/_-]*`
         * - _Minimum_: `0`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-kmskeyid */
        "KmsKeyId"?: string | Intrinsic;
        /**
         * - A list of `ProductionVariant` objects, one for each model that you want to host at this endpoint.
         * - _Required_: Yes
         * - _Type_: Array of [ProductionVariant](./aws-properties-sagemaker-endpointconfig-productionvariant.html)
         * - _Minimum_: `1`
         * - _Maximum_: `10`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-productionvariants */
        "ProductionVariants": ProductionVariant[];
        /**
         * - Array of `ProductionVariant` objects. There is one for each model that you want to host at this endpoint in shadow mode with production traffic replicated from the model specified on `ProductionVariants`. If you use this field, you can only specify one variant for `ProductionVariants` and one variant for `ShadowProductionVariants`.
         * - _Required_: No
         * - _Type_: Array of [ProductionVariant](./aws-properties-sagemaker-endpointconfig-productionvariant.html)
         * - _Minimum_: `1`
         * - _Maximum_: `10`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-shadowproductionvariants */
        "ShadowProductionVariants"?: ProductionVariant[];
        /**
         * - A list of key-value pairs to apply to this resource.
         * - For more information, see [Resource Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) and [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what).
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-sagemaker-endpointconfig-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html#cfn-sagemaker-endpointconfig-tags */
        "Tags"?: Tag[];
    };
}