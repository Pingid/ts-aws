import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Docker container image configuration object for the model explainability job.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html */

export interface ModelExplainabilityAppSpecification {
  /**
   * - JSON formatted Amazon S3 file that defines explainability parameters. For more information on this JSON configuration file, see [Configure model explainability parameters](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-config-json-monitor-model-explainability-parameters.html).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
   * - _Maximum_: `1024`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification-configuri */
  ConfigUri: string | Intrinsic
  /**
   * - Sets the environment variables in the Docker container.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `[a-zA-Z_][a-zA-Z0-9_]*`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification-environment */
  Environment?: Record<string, string | Intrinsic>
  /**
   * - The container image to be run by the model explainability job.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*`
   * - _Maximum_: `255`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification-imageuri */
  ImageUri: string | Intrinsic
}

/**
 * Specifies a limit to how long a job can run. When the job reaches the time limit, SageMaker ends the job. Use this API to cap costs.
 * To stop a training job, SageMaker sends the algorithm the `SIGTERM` signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost.
 * The training algorithms provided by SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with `CreateModel`.
 * ###### Note
 *
 * The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html */

export interface StoppingCondition {
  /**
   * - The maximum length of time, in seconds, that a training or compilation job can run before it is stopped.
   * - For compilation jobs, if the job does not complete during this time, a `TimeOut` error is generated. We recommend starting with 900 seconds and increasing as necessary based on your model.
   * - For all other jobs, if the job does not complete during this time, SageMaker ends the job. When `RetryStrategy` is specified in the job request, `MaxRuntimeInSeconds` specifies the maximum time for all of the attempts in total, not each individual attempt. The default value is 1 day. The maximum value is 28 days.
   * - The maximum time that a `TrainingJob` can run in total, including any time spent publishing metrics or archiving and uploading models after it has been stopped, is 30 days.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `86400`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-stoppingcondition-maxruntimeinseconds */
  MaxRuntimeInSeconds: number | Intrinsic
}

/**
 * A tag object that consists of a key and an optional value, used to manage metadata for SageMaker AWS resources.
 * You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints. For more information on adding tags to SageMaker resources, see [AddTags](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html).
 * For more information on adding metadata to your AWS resources with tagging, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html). For advice on best practices for managing AWS resources with tagging, see [Tagging Best Practices: Implement an Effective AWS Resource Tagging Strategy](https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html */

export interface Tag {
  /**
   * - The tag key. Tag keys must be unique per resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-tag-value */
  Value: string | Intrinsic
}

/**
 * The configuration for the cluster resources used to run the processing job.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html */

export interface ClusterConfig {
  /**
   * - The number of ML compute instances to use in the model monitoring job. For distributed processing jobs, specify a value greater than 1. The default value is 1.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-clusterconfig-instancecount */
  InstanceCount: number | Intrinsic
  /**
   * - The ML compute instance type for the processing job.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-clusterconfig-instancetype */
  InstanceType: string | Intrinsic
  /**
   * - The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-clusterconfig-volumekmskeyid */
  VolumeKmsKeyId?: string | Intrinsic
  /**
   * - The size of the ML storage volume, in gigabytes, that you want to provision. You must specify sufficient ML storage for your scenario.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `16384`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-clusterconfig-volumesizeingb */
  VolumeSizeInGB: number | Intrinsic
}

/**
 * Input object for the endpoint
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html */

export interface ConstraintsResource {
  /**
   * - The Amazon S3 URI for the constraints resource.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
   * - _Maximum_: `1024`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-constraintsresource-s3uri */
  S3Uri?: string | Intrinsic
}

/**
 * Input object for the endpoint
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html */

export interface EndpointInput {
  /**
   * - An endpoint in customer's account which has enabled `DataCaptureConfig` enabled.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*`
   * - _Maximum_: `63`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-endpointinput-endpointname */
  EndpointName: string | Intrinsic
  /**
   * - The attributes of the input data that are the input features.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-endpointinput-featuresattribute */
  FeaturesAttribute?: string | Intrinsic
  /**
   * - The attribute of the input data that represents the ground truth label.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-endpointinput-inferenceattribute */
  InferenceAttribute?: string | Intrinsic
  /**
   * - Path to the filesystem where the endpoint data is available to the container.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-endpointinput-localpath */
  LocalPath: string | Intrinsic
  /**
   * - In a classification problem, the attribute that represents the class probability.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-endpointinput-probabilityattribute */
  ProbabilityAttribute?: string | Intrinsic
  /**
   * - Whether input data distributed in Amazon S3 is fully replicated or sharded by an Amazon S3 key. Defaults to `FullyReplicated`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `FullyReplicated | ShardedByS3Key`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-endpointinput-s3datadistributiontype */
  S3DataDistributionType?: string | Intrinsic
  /**
   * - Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job. `Pipe` mode is recommended for large datasets. `File` mode is useful for small files that fit in memory. Defaults to `File`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `Pipe | File`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-endpointinput-s3inputmode */
  S3InputMode?: string | Intrinsic
}

/**
 * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html */

export interface VpcConfig {
  /**
   * - The VPC security group IDs, in the form `sg-xxxxxxxx`. Specify the security groups for the VPC that is specified in the `Subnets` field.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `32 | 5`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-vpcconfig-securitygroupids */
  SecurityGroupIds: (string | Intrinsic)[]
  /**
   * - The ID of the subnets in the VPC to which you want to connect your training job or model. For information about the availability of specific instance types, see [Supported Instance Types and Availability Zones](https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html).
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `32 | 16`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-vpcconfig-subnets */
  Subnets: (string | Intrinsic)[]
}

/**
 * The Amazon S3 storage location where the results of a monitoring job are saved.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html */

export interface S3Output {
  /**
   * - The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. LocalPath is an absolute path for the output data.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-s3output-localpath */
  LocalPath: string | Intrinsic
  /**
   * - Whether to upload the results of the monitoring job continuously or after the job completes.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `Continuous | EndOfJob`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-s3output-s3uploadmode */
  S3UploadMode?: string | Intrinsic
  /**
   * - A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
   * - _Maximum_: `512`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-s3output-s3uri */
  S3Uri: string | Intrinsic
}

/**
 * The `Csv` property type specifies Property description not available. for an [AWS::SageMaker::ModelExplainabilityJobDefinition](./aws-resource-sagemaker-modelexplainabilityjobdefinition.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html */

export interface Csv {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-csv-header */
  Header?: boolean | Intrinsic
}

/**
 * Identifies the resources to deploy for a monitoring job.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html */

export interface MonitoringResources {
  /**
   * - The configuration for the cluster resources used to run the processing job.
   * - _Required_: Yes
   * - _Type_: [ClusterConfig](./aws-properties-sagemaker-modelexplainabilityjobdefinition-clusterconfig.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-monitoringresources-clusterconfig */
  ClusterConfig: ClusterConfig
}

/**
 * The configuration for a baseline model explainability job.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html */

export interface ModelExplainabilityBaselineConfig {
  /**
   * - The name of the baseline model explainability job.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   * - _Minimum_: `1`
   * - _Maximum_: `63`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilitybaselineconfig-baseliningjobname */
  BaseliningJobName?: string | Intrinsic
  /**
   * - The constraints resource for a model explainability job.
   * - _Required_: No
   * - _Type_: [ConstraintsResource](./aws-properties-sagemaker-modelexplainabilityjobdefinition-constraintsresource.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilitybaselineconfig-constraintsresource */
  ConstraintsResource?: ConstraintsResource
}

/**
 * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html */

export interface NetworkConfig {
  /**
   * - Whether to encrypt all communications between distributed processing jobs. Choose `True` to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-networkconfig-enableintercontainertrafficencryption */
  EnableInterContainerTrafficEncryption?: boolean | Intrinsic
  /**
   * - Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-networkconfig-enablenetworkisolation */
  EnableNetworkIsolation?: boolean | Intrinsic
  /**
   * - Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC.
   * - _Required_: No
   * - _Type_: [VpcConfig](./aws-properties-sagemaker-modelexplainabilityjobdefinition-vpcconfig.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-networkconfig-vpcconfig */
  VpcConfig?: VpcConfig
}

/**
 * The output object for a monitoring job.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html */

export interface MonitoringOutput {
  /**
   * - The Amazon S3 storage location where the results of a monitoring job are saved.
   * - _Required_: Yes
   * - _Type_: [S3Output](./aws-properties-sagemaker-modelexplainabilityjobdefinition-s3output.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-monitoringoutput-s3output */
  S3Output: S3Output
}

/**
 * The `DatasetFormat` property type specifies Property description not available. for an [AWS::SageMaker::ModelExplainabilityJobDefinition](./aws-resource-sagemaker-modelexplainabilityjobdefinition.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html */

export interface DatasetFormat {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [Csv](./aws-properties-sagemaker-modelexplainabilityjobdefinition-csv.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-datasetformat-csv */
  Csv?: Csv
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [Json](./aws-properties-sagemaker-modelexplainabilityjobdefinition-json.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-datasetformat-json */
  Json?: any | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-datasetformat-parquet */
  Parquet?: boolean | Intrinsic
}

/**
 * The output configuration for monitoring jobs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html */

export interface MonitoringOutputConfig {
  /**
   * - The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `.*`
   * - _Maximum_: `2048`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-monitoringoutputconfig-kmskeyid */
  KmsKeyId?: string | Intrinsic
  /**
   * - Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.
   * - _Required_: Yes
   * - _Type_: Array of [MonitoringOutput](./aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringoutput.html)
   * - _Minimum_: `1`
   * - _Maximum_: `1`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-monitoringoutputconfig-monitoringoutputs */
  MonitoringOutputs: MonitoringOutput[]
}

/**
 * Input object for the batch transform job.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html */

export interface BatchTransformInput {
  /**
   * - The Amazon S3 location being used to capture the data.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
   * - _Maximum_: `512`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-batchtransforminput-datacaptureddestinations3uri */
  DataCapturedDestinationS3Uri: string | Intrinsic
  /**
   * - The dataset format for your batch transform job.
   * - _Required_: Yes
   * - _Type_: [DatasetFormat](./aws-properties-sagemaker-modelexplainabilityjobdefinition-datasetformat.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-batchtransforminput-datasetformat */
  DatasetFormat: DatasetFormat
  /**
   * - The attributes of the input data that are the input features.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-batchtransforminput-featuresattribute */
  FeaturesAttribute?: string | Intrinsic
  /**
   * - The attribute of the input data that represents the ground truth label.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-batchtransforminput-inferenceattribute */
  InferenceAttribute?: string | Intrinsic
  /**
   * - Path to the filesystem where the batch transform data is available to the container.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-batchtransforminput-localpath */
  LocalPath: string | Intrinsic
  /**
   * - In a classification problem, the attribute that represents the class probability.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-batchtransforminput-probabilityattribute */
  ProbabilityAttribute?: string | Intrinsic
  /**
   * - Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defaults to `FullyReplicated`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `FullyReplicated | ShardedByS3Key`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-batchtransforminput-s3datadistributiontype */
  S3DataDistributionType?: string | Intrinsic
  /**
   * - Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job. `Pipe` mode is recommended for large datasets. `File` mode is useful for small files that fit in memory. Defaults to `File`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `Pipe | File`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-batchtransforminput-s3inputmode */
  S3InputMode?: string | Intrinsic
}

/**
 * Inputs for the model explainability job.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html */

export interface ModelExplainabilityJobInput {
  /**
   * - Input object for the batch transform job.
   * - _Required_: No
   * - _Type_: [BatchTransformInput](./aws-properties-sagemaker-modelexplainabilityjobdefinition-batchtransforminput.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityjobinput-batchtransforminput */
  BatchTransformInput?: BatchTransformInput
  /**
   * - Input object for the endpoint
   * - _Required_: No
   * - _Type_: [EndpointInput](./aws-properties-sagemaker-modelexplainabilityjobdefinition-endpointinput.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityjobinput-endpointinput */
  EndpointInput?: EndpointInput
}

/**
 * Creates the definition for a model explainability job.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html */

export interface SageMakerModelExplainabilityJobDefinition extends ResourceAttributes {
  Type: 'AWS::SageMaker::ModelExplainabilityJobDefinition'
  Properties: {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-endpointname */
    EndpointName?: string | Intrinsic
    /**
     * - The name of the model explainability job definition. The name must be unique within an AWS Region in the AWS account.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-jobdefinitionname */
    JobDefinitionName?: string | Intrinsic
    /**
     * - Identifies the resources to deploy for a monitoring job.
     * - _Required_: Yes
     * - _Type_: [MonitoringResources](./aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringresources.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-jobresources */
    JobResources: MonitoringResources
    /**
     * - Configures the model explainability job to run a specified Docker container image.
     * - _Required_: Yes
     * - _Type_: [ModelExplainabilityAppSpecification](./aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification */
    ModelExplainabilityAppSpecification: ModelExplainabilityAppSpecification
    /**
     * - The baseline configuration for a model explainability job.
     * - _Required_: No
     * - _Type_: [ModelExplainabilityBaselineConfig](./aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilitybaselineconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilitybaselineconfig */
    ModelExplainabilityBaselineConfig?: ModelExplainabilityBaselineConfig
    /**
     * - Inputs for the model explainability job.
     * - _Required_: Yes
     * - _Type_: [ModelExplainabilityJobInput](./aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityjobinput.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityjobinput */
    ModelExplainabilityJobInput: ModelExplainabilityJobInput
    /**
     * - The output configuration for monitoring jobs.
     * - _Required_: Yes
     * - _Type_: [MonitoringOutputConfig](./aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringoutputconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityjoboutputconfig */
    ModelExplainabilityJobOutputConfig: MonitoringOutputConfig
    /**
     * - Networking options for a model explainability job.
     * - _Required_: No
     * - _Type_: [NetworkConfig](./aws-properties-sagemaker-modelexplainabilityjobdefinition-networkconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-networkconfig */
    NetworkConfig?: NetworkConfig
    /**
     * - The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-rolearn */
    RoleArn: string | Intrinsic
    /**
     * - A time limit for how long the monitoring job is allowed to run before stopping.
     * - _Required_: No
     * - _Type_: [StoppingCondition](./aws-properties-sagemaker-modelexplainabilityjobdefinition-stoppingcondition.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-stoppingcondition */
    StoppingCondition?: StoppingCondition
    /**
     * - An array of key-value pairs to apply to this resource.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-sagemaker-modelexplainabilityjobdefinition-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html#cfn-sagemaker-modelexplainabilityjobdefinition-tags */
    Tags?: Tag[]
  }
}
