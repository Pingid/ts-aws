import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Runtime settings for a model that is deployed with an inference component.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html */

export interface InferenceComponentRuntimeConfig {
  /**
   * - The number of runtime copies of the model container to deploy with the inference component. Each copy can serve inference requests.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-inferencecomponentruntimeconfig-copycount */
  CopyCount?: number | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-inferencecomponentruntimeconfig-currentcopycount */
  CurrentCopyCount?: number | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-inferencecomponentruntimeconfig-desiredcopycount */
  DesiredCopyCount?: number | Intrinsic
}

/**
 * A tag object that consists of a key and an optional value, used to manage metadata for SageMaker AWS resources.
 * You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints. For more information on adding tags to SageMaker resources, see [AddTags](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html).
 * For more information on adding metadata to your AWS resources with tagging, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html). For advice on best practices for managing AWS resources with tagging, see [Tagging Best Practices: Implement an Effective AWS Resource Tagging Strategy](https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html */

export interface Tag {
  /**
   * - The tag key. Tag keys must be unique per resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-tag-value */
  Value: string | Intrinsic
}

/**
 * Defines the compute resources to allocate to run a model that you assign to an inference component. These resources include CPU cores, accelerators, and memory.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html */

export interface InferenceComponentComputeResourceRequirements {
  /**
   * - The maximum MB of memory to allocate to run a model that you assign to an inference component.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-inferencecomponentcomputeresourcerequirements-maxmemoryrequiredinmb */
  MaxMemoryRequiredInMb?: number | Intrinsic
  /**
   * - The minimum MB of memory to allocate to run a model that you assign to an inference component.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-inferencecomponentcomputeresourcerequirements-minmemoryrequiredinmb */
  MinMemoryRequiredInMb?: number | Intrinsic
  /**
   * - The number of accelerators to allocate to run a model that you assign to an inference component. Accelerators include GPUs and AWS Inferentia.
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-inferencecomponentcomputeresourcerequirements-numberofacceleratordevicesrequired */
  NumberOfAcceleratorDevicesRequired?: number | Intrinsic
  /**
   * - The number of CPU cores to allocate to run a model that you assign to an inference component.
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-inferencecomponentcomputeresourcerequirements-numberofcpucoresrequired */
  NumberOfCpuCoresRequired?: number | Intrinsic
}

/**
 * Settings that take effect while the model container starts up.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html */

export interface InferenceComponentStartupParameters {
  /**
   * - The timeout value, in seconds, for your inference container to pass health check by Amazon S3 Hosting. For more information about health check, see [How Your Container Should Respond to Health Check (Ping) Requests](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-inference-code.html#your-algorithms-inference-algo-ping-requests).
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `60`
   * - _Maximum_: `3600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-inferencecomponentstartupparameters-containerstartuphealthchecktimeoutinseconds */
  ContainerStartupHealthCheckTimeoutInSeconds?: number | Intrinsic
  /**
   * - The timeout value, in seconds, to download and extract the model that you want to host from Amazon S3 to the individual inference instance associated with this inference component.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `60`
   * - _Maximum_: `3600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-inferencecomponentstartupparameters-modeldatadownloadtimeoutinseconds */
  ModelDataDownloadTimeoutInSeconds?: number | Intrinsic
}

/**
 * Gets the Amazon EC2 Container Registry path of the docker image of the model that is hosted in this [ProductionVariant](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ProductionVariant.html).
 * If you used the `registry/repository[:tag]` form to specify the image path of the primary container when you created the model hosted in this `ProductionVariant`, the path resolves to a path of the form `registry/repository[@digest]`. A digest is a hash value that identifies a specific version of an image. For information about Amazon ECR paths, see [Pulling an Image](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html) in the _Amazon ECR User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html */

export interface DeployedImage {
  /**
   * - The date and time when the image path for the model resolved to the `ResolvedImage`
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-deployedimage-resolutiontime */
  ResolutionTime?: string | Intrinsic
  /**
   * - The specific digest path of the image hosted in this `ProductionVariant`.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[\S]+`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-deployedimage-resolvedimage */
  ResolvedImage?: string | Intrinsic
  /**
   * - The image path you specified when you created the model.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[\S]+`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-deployedimage-specifiedimage */
  SpecifiedImage?: string | Intrinsic
}

/**
 * Defines a container that provides the runtime environment for a model that you deploy with an inference component.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html */

export interface InferenceComponentContainerSpecification {
  /**
   * - The Amazon S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix).
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-inferencecomponentcontainerspecification-artifacturl */
  ArtifactUrl?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [DeployedImage](./aws-properties-sagemaker-inferencecomponent-deployedimage.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-inferencecomponentcontainerspecification-deployedimage */
  DeployedImage?: DeployedImage
  /**
   * - The environment variables to set in the Docker container. Each key and value in the Environment string-to-string map can have length of up to 1024. We support up to 16 entries in the map.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `^[a-zA-Z_][a-zA-Z0-9_]{1,1024}$`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-inferencecomponentcontainerspecification-environment */
  Environment?: Record<string, string | Intrinsic>
  /**
   * - The Amazon Elastic Container Registry (Amazon ECR) path where the Docker image for the model is stored.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[\S]+`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-inferencecomponentcontainerspecification-image */
  Image?: string | Intrinsic
}

/**
 * Details about the resources to deploy with this inference component, including the model, container, and compute resources.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html */

export interface InferenceComponentSpecification {
  /**
   * - The compute resources allocated to run the model assigned to the inference component.
   * - _Required_: Yes
   * - _Type_: [InferenceComponentComputeResourceRequirements](./aws-properties-sagemaker-inferencecomponent-inferencecomponentcomputeresourcerequirements.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-inferencecomponentspecification-computeresourcerequirements */
  ComputeResourceRequirements: InferenceComponentComputeResourceRequirements
  /**
   * - Defines a container that provides the runtime environment for a model that you deploy with an inference component.
   * - _Required_: No
   * - _Type_: [InferenceComponentContainerSpecification](./aws-properties-sagemaker-inferencecomponent-inferencecomponentcontainerspecification.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-inferencecomponentspecification-container */
  Container?: InferenceComponentContainerSpecification
  /**
   * - The name of an existing SageMaker model object in your account that you want to deploy with the inference component.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-inferencecomponentspecification-modelname */
  ModelName?: string | Intrinsic
  /**
   * - Settings that take effect while the model container starts up.
   * - _Required_: No
   * - _Type_: [InferenceComponentStartupParameters](./aws-properties-sagemaker-inferencecomponent-inferencecomponentstartupparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-inferencecomponentspecification-startupparameters */
  StartupParameters?: InferenceComponentStartupParameters
}

/**
 * Creates an inference component, which is a SageMaker hosting object that you can use to deploy a model to an endpoint. In the inference component settings, you specify the model, the endpoint, and how the model utilizes the resources that the endpoint hosts. You can optimize resource utilization by tailoring how the required CPU cores, accelerators, and memory are allocated. You can deploy multiple inference components to an endpoint, where each inference component contains one model and the resource utilization needs for that individual model. After you deploy an inference component, you can directly invoke the associated model when you use the InvokeEndpoint API action.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html */

export interface SageMakerInferenceComponent extends ResourceAttributes {
  Type: 'AWS::SageMaker::InferenceComponent'
  Properties: {
    /**
     * - The Amazon Resource Name (ARN) of the endpoint that hosts the inference component.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-endpointarn */
    EndpointArn?: string | Intrinsic
    /**
     * - The name of the endpoint that hosts the inference component.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-endpointname */
    EndpointName: string | Intrinsic
    /**
     * - The name of the inference component.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-inferencecomponentname */
    InferenceComponentName?: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: [InferenceComponentRuntimeConfig](./aws-properties-sagemaker-inferencecomponent-inferencecomponentruntimeconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-runtimeconfig */
    RuntimeConfig: InferenceComponentRuntimeConfig
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: [InferenceComponentSpecification](./aws-properties-sagemaker-inferencecomponent-inferencecomponentspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-specification */
    Specification: InferenceComponentSpecification
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-sagemaker-inferencecomponent-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-tags */
    Tags?: Tag[]
    /**
     * - The name of the production variant that hosts the inference component.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferencecomponent.html#cfn-sagemaker-inferencecomponent-variantname */
    VariantName: string | Intrinsic
  }
}
