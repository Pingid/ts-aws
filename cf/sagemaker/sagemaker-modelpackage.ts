import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Defines how to perform inference generation after a training job is run.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface InferenceSpecification {
    /**
     * - The Amazon ECR registry path of the Docker image that contains the inference code.
     * - _Required_: Yes
     * - _Type_: Array of [ModelPackageContainerDefinition](./aws-properties-sagemaker-modelpackage-modelpackagecontainerdefinition.html)
     * - _Minimum_: `1`
     * - _Maximum_: `15`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-inferencespecification-containers */
    "Containers": ModelPackageContainerDefinition[];
    /**
     * - The supported MIME types for the input data.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-inferencespecification-supportedcontenttypes */
    "SupportedContentTypes": (string | Intrinsic)[];
    /**
     * - A list of the instance types that are used to generate inferences in real-time.
     * - This parameter is required for unversioned models, and optional for versioned models.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-inferencespecification-supportedrealtimeinferenceinstancetypes */
    "SupportedRealtimeInferenceInstanceTypes"?: (string | Intrinsic)[];
    /**
     * - The supported MIME types for the output data.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-inferencespecification-supportedresponsemimetypes */
    "SupportedResponseMIMETypes": (string | Intrinsic)[];
    /**
     * - A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.
     * - This parameter is required for unversioned models, and optional for versioned models.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-inferencespecification-supportedtransforminstancetypes */
    "SupportedTransformInstanceTypes"?: (string | Intrinsic)[];
}

/**
 * An Amazon SageMaker Model Card.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface ModelCard {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Minimum_: `0`
     * - _Maximum_: `100000`
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelcard-modelcardcontent */
    "ModelCardContent": string | Intrinsic;
    /**
     * - The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `Draft | PendingReview | Approved | Archived`
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelcard-modelcardstatus */
    "ModelCardStatus": string | Intrinsic;
}

/**
 * Metadata properties of the tracking entity, trial, or trial component.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface MetadataProperties {
    /**
     * - The commit ID.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-metadataproperties-commitid */
    "CommitId"?: string | Intrinsic;
    /**
     * - The entity this entity was generated by.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-metadataproperties-generatedby */
    "GeneratedBy"?: string | Intrinsic;
    /**
     * - The project ID.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-metadataproperties-projectid */
    "ProjectId"?: string | Intrinsic;
    /**
     * - The repository.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-metadataproperties-repository */
    "Repository"?: string | Intrinsic;
}

/**
 * The `SecurityConfig` property type specifies Property description not available. for an [AWS::SageMaker::ModelPackage](./aws-resource-sagemaker-modelpackage.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface SecurityConfig {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9:/_-]*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-securityconfig-kmskeyid */
    "KmsKeyId": string | Intrinsic;
}

/**
 * A tag object that consists of a key and an optional value, used to manage metadata for SageMaker AWS resources.
 * You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints. For more information on adding tags to SageMaker resources, see [AddTags](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html).
 * For more information on adding metadata to your AWS resources with tagging, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html). For advice on best practices for managing AWS resources with tagging, see [Tagging Best Practices: Implement an Effective AWS Resource Tagging Strategy](https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface Tag {
    /**
     * - The tag key. Tag keys must be unique per resource.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Represents the drift check model quality baselines that can be used when the model monitor is set using the model package.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface DriftCheckModelQuality {
    /**
     * - The drift check model quality constraints.
     * - _Required_: No
     * - _Type_: [MetricsSource](./aws-properties-sagemaker-modelpackage-metricssource.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-driftcheckmodelquality-constraints */
    "Constraints"?: MetricsSource;
    /**
     * - The drift check model quality statistics.
     * - _Required_: No
     * - _Type_: [MetricsSource](./aws-properties-sagemaker-modelpackage-metricssource.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-driftcheckmodelquality-statistics */
    "Statistics"?: MetricsSource;
}

/**
 * Represents the overall status of a model package.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface ModelPackageStatusItem {
    /**
     * - if the overall status is `Failed`, the reason for the failure.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagestatusitem-failurereason */
    "FailureReason"?: string | Intrinsic;
    /**
     * - The name of the model package for which the overall status is being reported.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagestatusitem-name */
    "Name": string | Intrinsic;
    /**
     * - The current status.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `NotStarted | Failed | InProgress | Completed`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagestatusitem-status */
    "Status": string | Intrinsic;
}

/**
 * Specifies the validation and image scan statuses of the model package.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface ModelPackageStatusDetails {
    /**
     * - The validation status of the model package.
     * - _Required_: No
     * - _Type_: Array of [ModelPackageStatusItem](./aws-properties-sagemaker-modelpackage-modelpackagestatusitem.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagestatusdetails-validationstatuses */
    "ValidationStatuses"?: ModelPackageStatusItem[];
}

/**
 * Contains bias metrics for a model.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface Bias {
    /**
     * - The post-training bias report for a model.
     * - _Required_: No
     * - _Type_: [MetricsSource](./aws-properties-sagemaker-modelpackage-metricssource.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-bias-posttrainingreport */
    "PostTrainingReport"?: MetricsSource;
    /**
     * - The pre-training bias report for a model.
     * - _Required_: No
     * - _Type_: [MetricsSource](./aws-properties-sagemaker-modelpackage-metricssource.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-bias-pretrainingreport */
    "PreTrainingReport"?: MetricsSource;
    /**
     * - The bias report for a model
     * - _Required_: No
     * - _Type_: [MetricsSource](./aws-properties-sagemaker-modelpackage-metricssource.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-bias-report */
    "Report"?: MetricsSource;
}

/**
 * Data quality constraints and statistics for a model.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface ModelDataQuality {
    /**
     * - Data quality constraints for a model.
     * - _Required_: No
     * - _Type_: [MetricsSource](./aws-properties-sagemaker-modelpackage-metricssource.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modeldataquality-constraints */
    "Constraints"?: MetricsSource;
    /**
     * - Data quality statistics for a model.
     * - _Required_: No
     * - _Type_: [MetricsSource](./aws-properties-sagemaker-modelpackage-metricssource.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modeldataquality-statistics */
    "Statistics"?: MetricsSource;
}

/**
 * Contains explainability metrics for a model.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface Explainability {
    /**
     * - The explainability report for a model.
     * - _Required_: No
     * - _Type_: [MetricsSource](./aws-properties-sagemaker-modelpackage-metricssource.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-explainability-report */
    "Report"?: MetricsSource;
}

/**
 * Specifies an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface SourceAlgorithm {
    /**
     * - The name of an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `(arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:[a-z\-]*\/)?([a-zA-Z0-9]([a-zA-Z0-9-]){0,62})(?<!-)$`
     * - _Minimum_: `1`
     * - _Maximum_: `170`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-sourcealgorithm-algorithmname */
    "AlgorithmName": string | Intrinsic;
    /**
     * - The Amazon S3 path where the model artifacts, which result from model training, are stored. This path must point to a single `gzip` compressed tar archive (`.tar.gz` suffix).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-sourcealgorithm-modeldataurl */
    "ModelDataUrl"?: string | Intrinsic;
}

/**
 * A list of algorithms that were used to create a model package.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface SourceAlgorithmSpecification {
    /**
     * - A list of the algorithms that were used to create a model package.
     * - _Required_: Yes
     * - _Type_: Array of [SourceAlgorithm](./aws-properties-sagemaker-modelpackage-sourcealgorithm.html)
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-sourcealgorithmspecification-sourcealgorithms */
    "SourceAlgorithms": SourceAlgorithm[];
}

/**
 * Model quality statistics and constraints.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface ModelQuality {
    /**
     * - Model quality constraints.
     * - _Required_: No
     * - _Type_: [MetricsSource](./aws-properties-sagemaker-modelpackage-metricssource.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelquality-constraints */
    "Constraints"?: MetricsSource;
    /**
     * - Model quality statistics.
     * - _Required_: No
     * - _Type_: [MetricsSource](./aws-properties-sagemaker-modelpackage-metricssource.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelquality-statistics */
    "Statistics"?: MetricsSource;
}

/**
 * Contains metrics captured from a model.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface ModelMetrics {
    /**
     * - Metrics that measure bias in a model.
     * - _Required_: No
     * - _Type_: [Bias](./aws-properties-sagemaker-modelpackage-bias.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelmetrics-bias */
    "Bias"?: Bias;
    /**
     * - Metrics that help explain a model.
     * - _Required_: No
     * - _Type_: [Explainability](./aws-properties-sagemaker-modelpackage-explainability.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelmetrics-explainability */
    "Explainability"?: Explainability;
    /**
     * - Metrics that measure the quality of the input data for a model.
     * - _Required_: No
     * - _Type_: [ModelDataQuality](./aws-properties-sagemaker-modelpackage-modeldataquality.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelmetrics-modeldataquality */
    "ModelDataQuality"?: ModelDataQuality;
    /**
     * - Metrics that measure the quality of a model.
     * - _Required_: No
     * - _Type_: [ModelQuality](./aws-properties-sagemaker-modelpackage-modelquality.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelmetrics-modelquality */
    "ModelQuality"?: ModelQuality;
}

/**
 * Represents the drift check explainability baselines that can be used when the model monitor is set using the model package.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface DriftCheckExplainability {
    /**
     * - The explainability config file for the model.
     * - _Required_: No
     * - _Type_: [FileSource](./aws-properties-sagemaker-modelpackage-filesource.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-driftcheckexplainability-configfile */
    "ConfigFile"?: FileSource;
    /**
     * - The drift check explainability constraints.
     * - _Required_: No
     * - _Type_: [MetricsSource](./aws-properties-sagemaker-modelpackage-metricssource.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-driftcheckexplainability-constraints */
    "Constraints"?: MetricsSource;
}

/**
 * Input object for the model.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface ModelInput {
    /**
     * - The input configuration object for the model.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\S\s]+`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelinput-datainputconfig */
    "DataInputConfig": string | Intrinsic;
}

/**
 * Details about the metrics source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface MetricsSource {
    /**
     * - The hash key used for the metrics source.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[Ss][Hh][Aa]256:[0-9a-fA-F]{64}$`
     * - _Maximum_: `72`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-metricssource-contentdigest */
    "ContentDigest"?: string | Intrinsic;
    /**
     * - The metric source content type.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-metricssource-contenttype */
    "ContentType": string | Intrinsic;
    /**
     * - The S3 URI for the metrics source.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-metricssource-s3uri */
    "S3Uri": string | Intrinsic;
}

/**
 * Represents the drift check data quality baselines that can be used when the model monitor is set using the model package.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface DriftCheckModelDataQuality {
    /**
     * - The drift check model data quality constraints.
     * - _Required_: No
     * - _Type_: [MetricsSource](./aws-properties-sagemaker-modelpackage-metricssource.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-driftcheckmodeldataquality-constraints */
    "Constraints"?: MetricsSource;
    /**
     * - The drift check model data quality statistics.
     * - _Required_: No
     * - _Type_: [MetricsSource](./aws-properties-sagemaker-modelpackage-metricssource.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-driftcheckmodeldataquality-statistics */
    "Statistics"?: MetricsSource;
}

/**
 * Contains details regarding the file source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface FileSource {
    /**
     * - The digest of the file source.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[Ss][Hh][Aa]256:[0-9a-fA-F]{64}$`
     * - _Maximum_: `72`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-filesource-contentdigest */
    "ContentDigest"?: string | Intrinsic;
    /**
     * - The type of content stored in the file source.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-filesource-contenttype */
    "ContentType"?: string | Intrinsic;
    /**
     * - The Amazon S3 URI for the file source.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-filesource-s3uri */
    "S3Uri": string | Intrinsic;
}

/**
 * Represents the drift check bias baselines that can be used when the model monitor is set using the model package.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface DriftCheckBias {
    /**
     * - The bias config file for a model.
     * - _Required_: No
     * - _Type_: [FileSource](./aws-properties-sagemaker-modelpackage-filesource.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-driftcheckbias-configfile */
    "ConfigFile"?: FileSource;
    /**
     * - The post-training constraints.
     * - _Required_: No
     * - _Type_: [MetricsSource](./aws-properties-sagemaker-modelpackage-metricssource.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-driftcheckbias-posttrainingconstraints */
    "PostTrainingConstraints"?: MetricsSource;
    /**
     * - The pre-training constraints.
     * - _Required_: No
     * - _Type_: [MetricsSource](./aws-properties-sagemaker-modelpackage-metricssource.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-driftcheckbias-pretrainingconstraints */
    "PreTrainingConstraints"?: MetricsSource;
}

/**
 * Represents the drift check baselines that can be used when the model monitor is set using the model package.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface DriftCheckBaselines {
    /**
     * - Represents the drift check bias baselines that can be used when the model monitor is set using the model package.
     * - _Required_: No
     * - _Type_: [DriftCheckBias](./aws-properties-sagemaker-modelpackage-driftcheckbias.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-driftcheckbaselines-bias */
    "Bias"?: DriftCheckBias;
    /**
     * - Represents the drift check explainability baselines that can be used when the model monitor is set using the model package.
     * - _Required_: No
     * - _Type_: [DriftCheckExplainability](./aws-properties-sagemaker-modelpackage-driftcheckexplainability.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-driftcheckbaselines-explainability */
    "Explainability"?: DriftCheckExplainability;
    /**
     * - Represents the drift check model data quality baselines that can be used when the model monitor is set using the model package.
     * - _Required_: No
     * - _Type_: [DriftCheckModelDataQuality](./aws-properties-sagemaker-modelpackage-driftcheckmodeldataquality.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-driftcheckbaselines-modeldataquality */
    "ModelDataQuality"?: DriftCheckModelDataQuality;
    /**
     * - Represents the drift check model quality baselines that can be used when the model monitor is set using the model package.
     * - _Required_: No
     * - _Type_: [DriftCheckModelQuality](./aws-properties-sagemaker-modelpackage-driftcheckmodelquality.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-driftcheckbaselines-modelquality */
    "ModelQuality"?: DriftCheckModelQuality;
}

/**
 * Describes the resources, including ML instance types and ML instance count, to use for transform job.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface TransformResources {
    /**
     * - The number of ML compute instances to use in the transform job. The default value is `1`, and the maximum is `100`. For distributed transform jobs, specify a value greater than `1`.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-transformresources-instancecount */
    "InstanceCount": number | Intrinsic;
    /**
     * - The ML compute instance type for the transform job. If you are using built-in algorithms to transform moderately sized datasets, we recommend using ml.m4.xlarge or `ml.m5.large`instance types.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ml.m4.xlarge | ml.m4.2xlarge | ml.m4.4xlarge | ml.m4.10xlarge | ml.m4.16xlarge | ml.c4.xlarge | ml.c4.2xlarge | ml.c4.4xlarge | ml.c4.8xlarge | ml.p2.xlarge | ml.p2.8xlarge | ml.p2.16xlarge | ml.p3.2xlarge | ml.p3.8xlarge | ml.p3.16xlarge | ml.c5.xlarge | ml.c5.2xlarge | ml.c5.4xlarge | ml.c5.9xlarge | ml.c5.18xlarge | ml.m5.large | ml.m5.xlarge | ml.m5.2xlarge | ml.m5.4xlarge | ml.m5.12xlarge | ml.m5.24xlarge | ml.m6i.large | ml.m6i.xlarge | ml.m6i.2xlarge | ml.m6i.4xlarge | ml.m6i.8xlarge | ml.m6i.12xlarge | ml.m6i.16xlarge | ml.m6i.24xlarge | ml.m6i.32xlarge | ml.c6i.large | ml.c6i.xlarge | ml.c6i.2xlarge | ml.c6i.4xlarge | ml.c6i.8xlarge | ml.c6i.12xlarge | ml.c6i.16xlarge | ml.c6i.24xlarge | ml.c6i.32xlarge | ml.r6i.large | ml.r6i.xlarge | ml.r6i.2xlarge | ml.r6i.4xlarge | ml.r6i.8xlarge | ml.r6i.12xlarge | ml.r6i.16xlarge | ml.r6i.24xlarge | ml.r6i.32xlarge | ml.m7i.large | ml.m7i.xlarge | ml.m7i.2xlarge | ml.m7i.4xlarge | ml.m7i.8xlarge | ml.m7i.12xlarge | ml.m7i.16xlarge | ml.m7i.24xlarge | ml.m7i.48xlarge | ml.c7i.large | ml.c7i.xlarge | ml.c7i.2xlarge | ml.c7i.4xlarge | ml.c7i.8xlarge | ml.c7i.12xlarge | ml.c7i.16xlarge | ml.c7i.24xlarge | ml.c7i.48xlarge | ml.r7i.large | ml.r7i.xlarge | ml.r7i.2xlarge | ml.r7i.4xlarge | ml.r7i.8xlarge | ml.r7i.12xlarge | ml.r7i.16xlarge | ml.r7i.24xlarge | ml.r7i.48xlarge | ml.g4dn.xlarge | ml.g4dn.2xlarge | ml.g4dn.4xlarge | ml.g4dn.8xlarge | ml.g4dn.12xlarge | ml.g4dn.16xlarge | ml.g5.xlarge | ml.g5.2xlarge | ml.g5.4xlarge | ml.g5.8xlarge | ml.g5.12xlarge | ml.g5.16xlarge | ml.g5.24xlarge | ml.g5.48xlarge | ml.trn1.2xlarge | ml.trn1.32xlarge | ml.inf2.xlarge | ml.inf2.8xlarge | ml.inf2.24xlarge | ml.inf2.48xlarge`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-transformresources-instancetype */
    "InstanceType": string | Intrinsic;
    /**
     * - The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt model data on the storage volume attached to the ML compute instance(s) that run the batch transform job.
     * - The `VolumeKmsKeyId` can be any of the following formats:
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-transformresources-volumekmskeyid */
    "VolumeKmsKeyId"?: string | Intrinsic;
}

/**
 * Describes the results of a transform job.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface TransformOutput {
    /**
     * - The MIME type used to specify the output data. Amazon SageMaker uses the MIME type with each http call to transfer data from the transform job.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-transformoutput-accept */
    "Accept"?: string | Intrinsic;
    /**
     * - Defines how to assemble the results of the transform job as a single S3 object. Choose a format that is most convenient to you. To concatenate the results in binary format, specify `None`. To add a newline character at the end of every transformed record, specify `Line`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `None | Line`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-transformoutput-assemblewith */
    "AssembleWith"?: string | Intrinsic;
    /**
     * - The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption. The `KmsKeyId` can be any of the following formats:
     * - If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account. For more information, see [KMS-Managed Encryption Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html) in the _Amazon Simple Storage Service Developer Guide._
     * - The KMS key policy must grant permission to the IAM role that you specify in your [CreateModel](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModel.html) request. For more information, see [Using Key Policies in AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html) in the _AWS Key Management Service Developer Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-transformoutput-kmskeyid */
    "KmsKeyId"?: string | Intrinsic;
    /**
     * - The Amazon S3 path where you want Amazon SageMaker to store the results of the transform job. For example, `s3://bucket-name/key-name-prefix`.
     * - For every S3 object used as input for the transform job, batch transform stores the transformed data with an .`out` suffix in a corresponding subfolder in the location in the output prefix. For example, for the input data stored at `s3://bucket-name/input-name-prefix/dataset01/data.csv`, batch transform stores the transformed data at `s3://bucket-name/output-name-prefix/input-name-prefix/data.csv.out`. Batch transform doesn't upload partially processed objects. For an input S3 object that contains multiple records, it creates an .`out` file only if the transform job succeeds on the entire file. When the input contains multiple S3 objects, the batch transform job processes the listed S3 objects and uploads only the output for successfully processed objects. If any object fails in the transform job batch transform marks the job as failed to prompt investigation.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-transformoutput-s3outputpath */
    "S3OutputPath": string | Intrinsic;
}

/**
 * The access configuration file to control access to the ML model. You can explicitly accept the model end-user license agreement (EULA) within the `ModelAccessConfig`.
 * *   If you are a Jumpstart user, see the [End-user license agreements](https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-foundation-models-choose.html#jumpstart-foundation-models-choose-eula) section for more details on accepting the EULA.
 *     
 * *   If you are an AutoML user, see the _Optional Parameters_ section of _Create an AutoML job to fine-tune text generation models using the API_ for details on [How to set the EULA acceptance when fine-tuning a model using the AutoML API](https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-create-experiment-finetune-llms.html#autopilot-llms-finetuning-api-optional-params).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface ModelAccessConfig {
    /**
     * - Specifies agreement to the model end-user license agreement (EULA). The `AcceptEula` value must be explicitly defined as `True` in order to accept the EULA that this model requires. You are responsible for reviewing and complying with any applicable license terms and making sure they are acceptable for your use case before downloading or using a model.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelaccessconfig-accepteula */
    "AcceptEula": boolean | Intrinsic;
}

/**
 * Specifies the S3 location of ML model data to deploy.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface S3ModelDataSource {
    /**
     * - Specifies how the ML model data is prepared.
     * - If you choose `Gzip` and choose `S3Object` as the value of `S3DataType`, `S3Uri` identifies an object that is a gzip-compressed TAR archive. SageMaker will attempt to decompress and untar the object during model deployment.
     * - If you choose `None` and chooose `S3Object` as the value of `S3DataType`, `S3Uri` identifies an object that represents an uncompressed ML model to deploy.
     * - If you choose None and choose `S3Prefix` as the value of `S3DataType`, `S3Uri` identifies a key name prefix, under which all objects represents the uncompressed ML model to deploy.
     * - If you choose None, then SageMaker will follow rules below when creating model data files under /opt/ml/model directory for use by your inference code:
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `None | Gzip`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-s3modeldatasource-compressiontype */
    "CompressionType": string | Intrinsic;
    /**
     * - Specifies the access configuration file for the ML model. You can explicitly accept the model end-user license agreement (EULA) within the `ModelAccessConfig`. You are responsible for reviewing and complying with any applicable license terms and making sure they are acceptable for your use case before downloading or using a model.
     * - _Required_: No
     * - _Type_: [ModelAccessConfig](./aws-properties-sagemaker-modelpackage-modelaccessconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-s3modeldatasource-modelaccessconfig */
    "ModelAccessConfig"?: ModelAccessConfig;
    /**
     * - Specifies the type of ML model data to deploy.
     * - If you choose `S3Prefix`, `S3Uri` identifies a key name prefix. SageMaker uses all objects that match the specified key name prefix as part of the ML model data to deploy. A valid key name prefix identified by `S3Uri` always ends with a forward slash (/).
     * - If you choose `S3Object`, `S3Uri` identifies an object that is the ML model data to deploy.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `S3Prefix | S3Object`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-s3modeldatasource-s3datatype */
    "S3DataType": string | Intrinsic;
    /**
     * - Specifies the S3 path of ML model data to deploy.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-s3modeldatasource-s3uri */
    "S3Uri": string | Intrinsic;
}

/**
 * Specifies the location of ML model data to deploy. If specified, you must specify one and only one of the available data sources.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface ModelDataSource {
    /**
     * - Specifies the S3 location of ML model data to deploy.
     * - _Required_: No
     * - _Type_: [S3ModelDataSource](./aws-properties-sagemaker-modelpackage-s3modeldatasource.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modeldatasource-s3datasource */
    "S3DataSource"?: S3ModelDataSource;
}

/**
 * Describes the Docker container for the model package.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface ModelPackageContainerDefinition {
    /**
     * - The DNS host name for the Docker container.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagecontainerdefinition-containerhostname */
    "ContainerHostname"?: string | Intrinsic;
    /**
     * - The environment variables to set in the Docker container. Each key and value in the `Environment` string to string map can have length of up to 1024. We support up to 16 entries in the map.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `[a-zA-Z_][a-zA-Z0-9_]*`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagecontainerdefinition-environment */
    "Environment"?: Record<string, string | Intrinsic>;
    /**
     * - The machine learning framework of the model package container image.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagecontainerdefinition-framework */
    "Framework"?: string | Intrinsic;
    /**
     * - The framework version of the Model Package Container Image.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[0-9]\.[A-Za-z0-9.]+`
     * - _Minimum_: `3`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagecontainerdefinition-frameworkversion */
    "FrameworkVersion"?: string | Intrinsic;
    /**
     * - The Amazon Elastic Container Registry (Amazon ECR) path where inference code is stored.
     * - If you are using your own custom algorithm instead of an algorithm provided by SageMaker, the inference code must meet SageMaker requirements. SageMaker supports both `registry/repository[:tag]` and `registry/repository[@digest]` image path formats. For more information, see [Using Your Own Algorithms with Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html).
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\S]{1,255}`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagecontainerdefinition-image */
    "Image": string | Intrinsic;
    /**
     * - An MD5 hash of the training algorithm that identifies the Docker image used for training.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[Ss][Hh][Aa]256:[0-9a-fA-F]{64}$`
     * - _Maximum_: `72`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagecontainerdefinition-imagedigest */
    "ImageDigest"?: string | Intrinsic;
    /**
     * - Specifies the location of ML model data to deploy during endpoint creation.
     * - _Required_: No
     * - _Type_: [ModelDataSource](./aws-properties-sagemaker-modelpackage-modeldatasource.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagecontainerdefinition-modeldatasource */
    "ModelDataSource"?: ModelDataSource;
    /**
     * - The Amazon S3 path where the model artifacts, which result from model training, are stored. This path must point to a single `gzip` compressed tar archive (`.tar.gz` suffix).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagecontainerdefinition-modeldataurl */
    "ModelDataUrl"?: string | Intrinsic;
    /**
     * - A structure with Model Input details.
     * - _Required_: No
     * - _Type_: [ModelInput](./aws-properties-sagemaker-modelpackage-modelinput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagecontainerdefinition-modelinput */
    "ModelInput"?: ModelInput;
    /**
     * - The name of a pre-trained machine learning benchmarked by Amazon SageMaker Inference Recommender model that matches your model. You can find a list of benchmarked models by calling `ListModelMetadata`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagecontainerdefinition-nearestmodelname */
    "NearestModelName"?: string | Intrinsic;
}

/**
 * A structure of additional Inference Specification. Additional Inference Specification specifies details about inference jobs that can be run with models based on this model package
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface AdditionalInferenceSpecificationDefinition {
    /**
     * - The Amazon ECR registry path of the Docker image that contains the inference code.
     * - _Required_: Yes
     * - _Type_: Array of [ModelPackageContainerDefinition](./aws-properties-sagemaker-modelpackage-modelpackagecontainerdefinition.html)
     * - _Minimum_: `1`
     * - _Maximum_: `15`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-additionalinferencespecificationdefinition-containers */
    "Containers": ModelPackageContainerDefinition[];
    /**
     * - A description of the additional Inference specification
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-additionalinferencespecificationdefinition-description */
    "Description"?: string | Intrinsic;
    /**
     * - A unique name to identify the additional inference specification. The name must be unique within the list of your additional inference specifications for a particular model package.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-additionalinferencespecificationdefinition-name */
    "Name": string | Intrinsic;
    /**
     * - The supported MIME types for the input data.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-additionalinferencespecificationdefinition-supportedcontenttypes */
    "SupportedContentTypes"?: (string | Intrinsic)[];
    /**
     * - A list of the instance types that are used to generate inferences in real-time.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-additionalinferencespecificationdefinition-supportedrealtimeinferenceinstancetypes */
    "SupportedRealtimeInferenceInstanceTypes"?: (string | Intrinsic)[];
    /**
     * - The supported MIME types for the output data.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-additionalinferencespecificationdefinition-supportedresponsemimetypes */
    "SupportedResponseMIMETypes"?: (string | Intrinsic)[];
    /**
     * - A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-additionalinferencespecificationdefinition-supportedtransforminstancetypes */
    "SupportedTransformInstanceTypes"?: (string | Intrinsic)[];
}

/**
 * Describes the S3 data source.
 * Your input bucket must be in the same AWS region as your training job.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface S3DataSource {
    /**
     * - If you choose `S3Prefix`, `S3Uri` identifies a key name prefix. SageMaker uses all objects that match the specified key name prefix for model training.
     * - If you choose `ManifestFile`, `S3Uri` identifies an object that is a manifest file containing a list of object keys that you want SageMaker to use for model training.
     * - If you choose `AugmentedManifestFile`, `S3Uri` identifies an object that is an augmented manifest file in JSON lines format. This file contains the data you want to use for model training. `AugmentedManifestFile` can only be used if the Channel's input mode is `Pipe`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ManifestFile | S3Prefix | AugmentedManifestFile`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-s3datasource-s3datatype */
    "S3DataType": string | Intrinsic;
    /**
     * - Depending on the value specified for the `S3DataType`, identifies either a key name prefix or a manifest. For example:
     * - Your input bucket must be located in same AWS region as your training job.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-s3datasource-s3uri */
    "S3Uri": string | Intrinsic;
}

/**
 * Describes the location of the channel data.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface DataSource {
    /**
     * - The S3 location of the data source that is associated with a channel.
     * - _Required_: Yes
     * - _Type_: [S3DataSource](./aws-properties-sagemaker-modelpackage-s3datasource.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-datasource-s3datasource */
    "S3DataSource": S3DataSource;
}

/**
 * Describes the input source of a transform job and the way the transform job consumes it.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface TransformInput {
    /**
     * - If your transform data is compressed, specify the compression type. Amazon SageMaker automatically decompresses the data for the transform job accordingly. The default value is `None`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `None | Gzip`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-transforminput-compressiontype */
    "CompressionType"?: string | Intrinsic;
    /**
     * - The multipurpose internet mail extension (MIME) type of the data. Amazon SageMaker uses the MIME type with each http call to transfer data to the transform job.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-transforminput-contenttype */
    "ContentType"?: string | Intrinsic;
    /**
     * - Describes the location of the channel data, which is, the S3 location of the input data that the model can consume.
     * - _Required_: Yes
     * - _Type_: [DataSource](./aws-properties-sagemaker-modelpackage-datasource.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-transforminput-datasource */
    "DataSource": DataSource;
    /**
     * - The method to use to split the transform job's data files into smaller batches. Splitting is necessary when the total size of each object is too large to fit in a single request. You can also use data splitting to improve performance by processing multiple concurrent mini-batches. The default value for `SplitType` is `None`, which indicates that input data files are not split, and request payloads contain the entire contents of an input object. Set the value of this parameter to `Line` to split records on a newline character boundary. `SplitType` also supports a number of record-oriented binary data formats. Currently, the supported record formats are:
     * - When splitting is enabled, the size of a mini-batch depends on the values of the `BatchStrategy` and `MaxPayloadInMB` parameters. When the value of `BatchStrategy` is `MultiRecord`, Amazon SageMaker sends the maximum number of records in each request, up to the `MaxPayloadInMB` limit. If the value of `BatchStrategy` is `SingleRecord`, Amazon SageMaker sends individual records in each request.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `None | TFRecord | Line | RecordIO`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-transforminput-splittype */
    "SplitType"?: string | Intrinsic;
}

/**
 * Defines the input needed to run a transform job using the inference specification specified in the algorithm.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface TransformJobDefinition {
    /**
     * - A string that determines the number of records included in a single mini-batch.
     * - `SingleRecord` means only one record is used per mini-batch. `MultiRecord` means a mini-batch is set to contain as many records that can fit within the `MaxPayloadInMB` limit.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `MultiRecord | SingleRecord`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-transformjobdefinition-batchstrategy */
    "BatchStrategy"?: string | Intrinsic;
    /**
     * - The environment variables to set in the Docker container. We support up to 16 key and values entries in the map.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `[a-zA-Z_][a-zA-Z0-9_]*`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-transformjobdefinition-environment */
    "Environment"?: Record<string, string | Intrinsic>;
    /**
     * - The maximum number of parallel requests that can be sent to each instance in a transform job. The default value is 1.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-transformjobdefinition-maxconcurrenttransforms */
    "MaxConcurrentTransforms"?: number | Intrinsic;
    /**
     * - The maximum payload size allowed, in MB. A payload is the data portion of a record (without metadata).
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-transformjobdefinition-maxpayloadinmb */
    "MaxPayloadInMB"?: number | Intrinsic;
    /**
     * - A description of the input source and the way the transform job consumes it.
     * - _Required_: Yes
     * - _Type_: [TransformInput](./aws-properties-sagemaker-modelpackage-transforminput.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-transformjobdefinition-transforminput */
    "TransformInput": TransformInput;
    /**
     * - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.
     * - _Required_: Yes
     * - _Type_: [TransformOutput](./aws-properties-sagemaker-modelpackage-transformoutput.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-transformjobdefinition-transformoutput */
    "TransformOutput": TransformOutput;
    /**
     * - Identifies the ML compute instances for the transform job.
     * - _Required_: Yes
     * - _Type_: [TransformResources](./aws-properties-sagemaker-modelpackage-transformresources.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-transformjobdefinition-transformresources */
    "TransformResources": TransformResources;
}

/**
 * Contains data, such as the inputs and targeted instance types that are used in the process of validating the model package.
 * The data provided in the validation profile is made available to your buyers on AWS Marketplace.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface ValidationProfile {
    /**
     * - The name of the profile for the model package.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-validationprofile-profilename */
    "ProfileName": string | Intrinsic;
    /**
     * - The `TransformJobDefinition` object that describes the transform job used for the validation of the model package.
     * - _Required_: Yes
     * - _Type_: [TransformJobDefinition](./aws-properties-sagemaker-modelpackage-transformjobdefinition.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-validationprofile-transformjobdefinition */
    "TransformJobDefinition": TransformJobDefinition;
}

/**
 * Specifies batch transform jobs that SageMaker runs to validate your model package.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface ValidationSpecification {
    /**
     * - An array of `ModelPackageValidationProfile` objects, each of which specifies a batch transform job that SageMaker runs to validate your model package.
     * - _Required_: Yes
     * - _Type_: Array of [ValidationProfile](./aws-properties-sagemaker-modelpackage-validationprofile.html)
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-validationspecification-validationprofiles */
    "ValidationProfiles": ValidationProfile[];
    /**
     * - The IAM roles to be used for the validation of the model package.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-validationspecification-validationrole */
    "ValidationRole": string | Intrinsic;
}

/**
 * A container for your trained model that can be deployed for SageMaker inference. This can include inference code, artifacts, and metadata. The model package type can be one of the following.
 * *   Versioned model: A part of a model package group in Model Registry.
 *     
 * *   Unversioned model: Not part of a model package group and used in AWS Marketplace.
 * For more information, see [`CreateModelPackage`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModelPackage.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html */

export interface SageMakerModelPackage extends ResourceAttributes {
    "Type": "AWS::SageMaker::ModelPackage";
    "Properties": {
        /**
         * - An array of additional Inference Specification objects.
         * - _Required_: No
         * - _Type_: Array of [AdditionalInferenceSpecificationDefinition](./aws-properties-sagemaker-modelpackage-additionalinferencespecificationdefinition.html)
         * - _Minimum_: `1`
         * - _Maximum_: `15`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-additionalinferencespecifications */
        "AdditionalInferenceSpecifications"?: AdditionalInferenceSpecificationDefinition[];
        /**
         * - An array of additional Inference Specification objects to be added to the existing array. The total number of additional Inference Specification objects cannot exceed 15. Each additional Inference Specification object specifies artifacts based on this model package that can be used on inference endpoints. Generally used with SageMaker Neo to store the compiled artifacts.
         * - _Required_: No
         * - _Type_: Array of [AdditionalInferenceSpecificationDefinition](./aws-properties-sagemaker-modelpackage-additionalinferencespecificationdefinition.html)
         * - _Minimum_: `1`
         * - _Maximum_: `15`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-additionalinferencespecificationstoadd */
        "AdditionalInferenceSpecificationsToAdd"?: AdditionalInferenceSpecificationDefinition[];
        /**
         * - A description provided when the model approval is set.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `.*`
         * - _Maximum_: `1024`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-approvaldescription */
        "ApprovalDescription"?: string | Intrinsic;
        /**
         * - Whether the model package is to be certified to be listed on AWS Marketplace. For information about listing model packages on AWS Marketplace, see [List Your Algorithm or Model Package on AWS Marketplace](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-mkt-list.html).
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-certifyformarketplace */
        "CertifyForMarketplace"?: boolean | Intrinsic;
        /**
         * - A unique token that guarantees that the call to this API is idempotent.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9-]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `36`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-clienttoken */
        "ClientToken"?: string | Intrinsic;
        /**
         * - The metadata properties for the model package.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:\/=+\-@]*)${1,128}`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-customermetadataproperties */
        "CustomerMetadataProperties"?: Record<string, string | Intrinsic>;
        /**
         * - The machine learning domain of your model package and its components. Common machine learning domains include computer vision and natural language processing.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-domain */
        "Domain"?: string | Intrinsic;
        /**
         * - Represents the drift check baselines that can be used when the model monitor is set using the model package.
         * - _Required_: No
         * - _Type_: [DriftCheckBaselines](./aws-properties-sagemaker-modelpackage-driftcheckbaselines.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-driftcheckbaselines */
        "DriftCheckBaselines"?: DriftCheckBaselines;
        /**
         * - Defines how to perform inference generation after a training job is run.
         * - _Required_: No
         * - _Type_: [InferenceSpecification](./aws-properties-sagemaker-modelpackage-inferencespecification.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-inferencespecification */
        "InferenceSpecification"?: InferenceSpecification;
        /**
         * - The last time the model package was modified.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-lastmodifiedtime */
        "LastModifiedTime"?: string | Intrinsic;
        /**
         * - Metadata properties of the tracking entity, trial, or trial component.
         * - _Required_: No
         * - _Type_: [MetadataProperties](./aws-properties-sagemaker-modelpackage-metadataproperties.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-metadataproperties */
        "MetadataProperties"?: MetadataProperties;
        /**
         * - The approval status of the model. This can be one of the following values.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `Approved | Rejected | PendingManualApproval`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelapprovalstatus */
        "ModelApprovalStatus"?: string | Intrinsic;
        /**
         * - An Amazon SageMaker Model Card.
         * - _Required_: No
         * - _Type_: [ModelCard](./aws-properties-sagemaker-modelpackage-modelcard.html)
         * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelcard */
        "ModelCard"?: ModelCard;
        /**
         * - Metrics for the model.
         * - _Required_: No
         * - _Type_: [ModelMetrics](./aws-properties-sagemaker-modelpackage-modelmetrics.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelmetrics */
        "ModelMetrics"?: ModelMetrics;
        /**
         * - The description of the model package.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[\p{L}\p{M}\p{Z}\p{S}\p{N}\p{P}]*`
         * - _Maximum_: `1024`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagedescription */
        "ModelPackageDescription"?: string | Intrinsic;
        /**
         * - The model group to which the model belongs.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `(arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:[a-z\-]*\/)?([a-zA-Z0-9]([a-zA-Z0-9-]){0,62})(?<!-)$`
         * - _Minimum_: `1`
         * - _Maximum_: `170`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagegroupname */
        "ModelPackageGroupName"?: string | Intrinsic;
        /**
         * - The name of the model package. The name can be as follows:
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
         * - _Minimum_: `1`
         * - _Maximum_: `63`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagename */
        "ModelPackageName"?: string | Intrinsic;
        /**
         * - Specifies the validation and image scan statuses of the model package.
         * - _Required_: No
         * - _Type_: [ModelPackageStatusDetails](./aws-properties-sagemaker-modelpackage-modelpackagestatusdetails.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackagestatusdetails */
        "ModelPackageStatusDetails"?: ModelPackageStatusDetails;
        /**
         * - The version number of a versioned model.
         * - _Required_: No
         * - _Type_: Integer
         * - _Minimum_: `1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-modelpackageversion */
        "ModelPackageVersion"?: number | Intrinsic;
        /**
         * - The Amazon Simple Storage Service path where the sample payload are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix).
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
         * - _Maximum_: `1024`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-samplepayloadurl */
        "SamplePayloadUrl"?: string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: [SecurityConfig](./aws-properties-sagemaker-modelpackage-securityconfig.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-securityconfig */
        "SecurityConfig"?: SecurityConfig;
        /**
         * - Indicates if you want to skip model validation.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `None | All`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-skipmodelvalidation */
        "SkipModelValidation"?: string | Intrinsic;
        /**
         * - A list of algorithms that were used to create a model package.
         * - _Required_: No
         * - _Type_: [SourceAlgorithmSpecification](./aws-properties-sagemaker-modelpackage-sourcealgorithmspecification.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-sourcealgorithmspecification */
        "SourceAlgorithmSpecification"?: SourceAlgorithmSpecification;
        /**
         * - The URI of the source for the model package.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[\p{L}\p{M}\p{Z}\p{N}\p{P}]{0,1024}`
         * - _Minimum_: `0`
         * - _Maximum_: `1024`
         * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-sourceuri */
        "SourceUri"?: string | Intrinsic;
        /**
         * - A list of the tags associated with the model package. For more information, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the _AWS General Reference Guide_.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-sagemaker-modelpackage-tag.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-tags */
        "Tags"?: Tag[];
        /**
         * - The machine learning task your model package accomplishes. Common machine learning tasks include object detection and image classification.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-task */
        "Task"?: string | Intrinsic;
        /**
         * - Specifies batch transform jobs that SageMaker runs to validate your model package.
         * - _Required_: No
         * - _Type_: [ValidationSpecification](./aws-properties-sagemaker-modelpackage-validationspecification.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelpackage.html#cfn-sagemaker-modelpackage-validationspecification */
        "ValidationSpecification"?: ValidationSpecification;
    };
}