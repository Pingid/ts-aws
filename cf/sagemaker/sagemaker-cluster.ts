import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A tag object that consists of a key and an optional value, used to manage metadata for SageMaker AWS resources.
 * You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints. For more information on adding tags to SageMaker resources, see [AddTags](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html).
 * For more information on adding metadata to your AWS resources with tagging, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html). For advice on best practices for managing AWS resources with tagging, see [Tagging Best Practices: Implement an Effective AWS Resource Tagging Strategy](https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-tag-value */
  Value: string | Intrinsic
}

/**
 * Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html */

export interface VpcConfig {
  /**
   * - The VPC security group IDs, in the form `sg-xxxxxxxx`. Specify the security groups for the VPC that is specified in the `Subnets` field.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `32 | 5`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-vpcconfig-securitygroupids */
  SecurityGroupIds: (string | Intrinsic)[]
  /**
   * - The ID of the subnets in the VPC to which you want to connect your training job or model. For information about the availability of specific instance types, see [Supported Instance Types and Availability Zones](https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html).
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `32 | 16`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-vpcconfig-subnets */
  Subnets: (string | Intrinsic)[]
}

/**
 * The lifecycle configuration for a SageMaker HyperPod cluster.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html */

export interface ClusterLifeCycleConfig {
  /**
   * - The file name of the entrypoint script of lifecycle scripts under `SourceS3Uri`. This entrypoint script runs during cluster creation.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[\S\s]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-clusterlifecycleconfig-oncreate */
  OnCreate: string | Intrinsic
  /**
   * - An Amazon S3 bucket path where your lifecycle scripts are stored.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-clusterlifecycleconfig-sources3uri */
  SourceS3Uri: string | Intrinsic
}

/**
 * The configuration for the Amazon EKS cluster that is used as the orchestrator for the SageMaker HyperPod cluster. This includes the Amazon Resource Name (ARN) of the EKS cluster
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html */

export interface ClusterOrchestratorEksConfig {
  /**
   * - The Amazon Resource Name (ARN) of the SageMaker HyperPod cluster.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:cluster/[a-z0-9]{12}$`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-clusterorchestratoreksconfig-clusterarn */
  ClusterArn: string | Intrinsic
}

/**
 * Defines the configuration for attaching an additional Amazon Elastic Block Store (EBS) volume to each instance of the SageMaker HyperPod cluster instance group. To learn more, see [SageMaker HyperPod release notes: June 20, 2024](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod-release-notes.html#sagemaker-hyperpod-release-notes-20240620).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html */

export interface ClusterEbsVolumeConfig {
  /**
   * - The size in gigabytes (GB) of the additional EBS volume to be attached to the instances in the SageMaker HyperPod cluster instance group. The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to `/opt/sagemaker`.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `16384`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-clusterebsvolumeconfig-volumesizeingb */
  VolumeSizeInGB?: number | Intrinsic
}

/**
 * The orchestrator for a SageMaker HyperPod cluster.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html */

export interface Orchestrator {
  /**
   * - The configuration of the Amazon EKS orchestrator cluster for the SageMaker HyperPod cluster.
   * - _Required_: Yes
   * - _Type_: [ClusterOrchestratorEksConfig](./aws-properties-sagemaker-cluster-clusterorchestratoreksconfig.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-orchestrator-eks */
  Eks: ClusterOrchestratorEksConfig
}

/**
 * Defines the configuration for attaching additional storage to the instances in the SageMaker HyperPod cluster instance group. To learn more, see [SageMaker HyperPod release notes: June 20, 2024](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod-release-notes.html#sagemaker-hyperpod-release-notes-20240620).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html */

export interface ClusterInstanceStorageConfig {
  /**
   * - Defines the configuration for attaching additional Amazon Elastic Block Store (EBS) volumes to the instances in the SageMaker HyperPod cluster instance group. The additional EBS volume is attached to each instance within the SageMaker HyperPod cluster instance group and mounted to `/opt/sagemaker`.
   * - _Required_: No
   * - _Type_: [ClusterEbsVolumeConfig](./aws-properties-sagemaker-cluster-clusterebsvolumeconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-clusterinstancestorageconfig-ebsvolumeconfig */
  EbsVolumeConfig?: ClusterEbsVolumeConfig
}

/**
 * The configuration information of the instance group within the HyperPod cluster.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html */

export interface ClusterInstanceGroup {
  /**
   * - The number of instances that are currently in the instance group of a SageMaker HyperPod cluster.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-clusterinstancegroup-currentcount */
  CurrentCount?: number | Intrinsic
  /**
   * - The execution role for the instance group to assume.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-clusterinstancegroup-executionrole */
  ExecutionRole: string | Intrinsic
  /**
   * - The number of instances in an instance group of the SageMaker HyperPod cluster.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-clusterinstancegroup-instancecount */
  InstanceCount: number | Intrinsic
  /**
   * - The name of the instance group of a SageMaker HyperPod cluster.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   * - _Minimum_: `1`
   * - _Maximum_: `63`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-clusterinstancegroup-instancegroupname */
  InstanceGroupName: string | Intrinsic
  /**
   * - The configurations of additional storage specified to the instance group where the instance (node) is launched.
   * - _Required_: No
   * - _Type_: Array of [ClusterInstanceStorageConfig](./aws-properties-sagemaker-cluster-clusterinstancestorageconfig.html)
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-clusterinstancegroup-instancestorageconfigs */
  InstanceStorageConfigs?: ClusterInstanceStorageConfig[]
  /**
   * - The instance type of the instance group of a SageMaker HyperPod cluster.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ml.p4d.24xlarge | ml.p4de.24xlarge | ml.p5.48xlarge | ml.trn1.32xlarge | ml.trn1n.32xlarge | ml.g5.xlarge | ml.g5.2xlarge | ml.g5.4xlarge | ml.g5.8xlarge | ml.g5.12xlarge | ml.g5.16xlarge | ml.g5.24xlarge | ml.g5.48xlarge | ml.c5.large | ml.c5.xlarge | ml.c5.2xlarge | ml.c5.4xlarge | ml.c5.9xlarge | ml.c5.12xlarge | ml.c5.18xlarge | ml.c5.24xlarge | ml.c5n.large | ml.c5n.2xlarge | ml.c5n.4xlarge | ml.c5n.9xlarge | ml.c5n.18xlarge | ml.m5.large | ml.m5.xlarge | ml.m5.2xlarge | ml.m5.4xlarge | ml.m5.8xlarge | ml.m5.12xlarge | ml.m5.16xlarge | ml.m5.24xlarge | ml.t3.medium | ml.t3.large | ml.t3.xlarge | ml.t3.2xlarge`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-clusterinstancegroup-instancetype */
  InstanceType: string | Intrinsic
  /**
   * - The lifecycle configuration for a SageMaker HyperPod cluster.
   * - _Required_: Yes
   * - _Type_: [ClusterLifeCycleConfig](./aws-properties-sagemaker-cluster-clusterlifecycleconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-clusterinstancegroup-lifecycleconfig */
  LifeCycleConfig: ClusterLifeCycleConfig
  /**
   * - A flag indicating whether deep health checks should be performed when the HyperPod cluster instance group is created or updated. Deep health checks are comprehensive, invasive tests that validate the health of the underlying hardware and infrastructure components.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-clusterinstancegroup-onstartdeephealthchecks */
  OnStartDeepHealthChecks?: (string | Intrinsic)[]
  /**
   * - The number of threads per CPU core you specified under `CreateCluster`.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `2`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-clusterinstancegroup-threadspercore */
  ThreadsPerCore?: number | Intrinsic
}

/**
 * Creates a SageMaker HyperPod cluster. SageMaker HyperPod is a capability of SageMaker for creating and managing persistent clusters for developing large machine learning models, such as large language models (LLMs) and diffusion models. To learn more, see [Amazon SageMaker HyperPod](https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-hyperpod.html) in the _Amazon SageMaker Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html */

export interface SageMakerCluster extends ResourceAttributes {
  Type: 'AWS::SageMaker::Cluster'
  Properties: {
    /**
     * - The name of the SageMaker HyperPod cluster.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-clustername */
    ClusterName?: string | Intrinsic
    /**
     * - The instance groups of the SageMaker HyperPod cluster.
     * - _Required_: Yes
     * - _Type_: Array of [ClusterInstanceGroup](./aws-properties-sagemaker-cluster-clusterinstancegroup.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-instancegroups */
    InstanceGroups: ClusterInstanceGroup[]
    /**
     * - Specifies whether to enable or disable the automatic node recovery feature of SageMaker HyperPod. Available values are `Automatic` for enabling and `None` for disabling.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Automatic | None`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-noderecovery */
    NodeRecovery?: string | Intrinsic
    /**
     * - The orchestrator type for the SageMaker HyperPod cluster. Currently, `'eks'` is the only available option.
     * - _Required_: No
     * - _Type_: [Orchestrator](./aws-properties-sagemaker-cluster-orchestrator.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-orchestrator */
    Orchestrator?: Orchestrator
    /**
     * - A tag object that consists of a key and an optional value, used to manage metadata for SageMaker AWS resources.
     * - You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints. For more information on adding tags to SageMaker resources, see [AddTags](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html).
     * - For more information on adding metadata to your AWS resources with tagging, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html). For advice on best practices for managing AWS resources with tagging, see [Tagging Best Practices: Implement an Effective AWS Resource Tagging Strategy](https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-sagemaker-cluster-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-tags */
    Tags?: Tag[]
    /**
     * - Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see [Give SageMaker Access to Resources in your Amazon VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/infrastructure-give-access.html).
     * - _Required_: No
     * - _Type_: [VpcConfig](./aws-properties-sagemaker-cluster-vpcconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-cluster.html#cfn-sagemaker-cluster-vpcconfig */
    VpcConfig?: VpcConfig
  }
}
