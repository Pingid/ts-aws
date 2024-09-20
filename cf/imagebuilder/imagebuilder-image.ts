import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * When you create an image or container recipe with Image Builder, you can add the build or test components that are used to create the final image. You must have at least one build component to create a recipe, but test components are not required. If you have added tests, they run after the image is created, to ensure that the target image is functional and can be used reliably for launching Amazon EC2 instances.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html */

export interface ImageTestsConfiguration {
  /**
   * - Determines if tests should run after building the image. Image Builder defaults to enable tests to run following the image build, before image distribution.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-imagetestsconfiguration-imagetestsenabled */
  ImageTestsEnabled?: boolean | Intrinsic
  /**
   * - The maximum time in minutes that tests are permitted to run.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `60`
   * - _Maximum_: `1440`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-imagetestsconfiguration-timeoutminutes */
  TimeoutMinutes?: number | Intrinsic
}

/**
 * Settings that Image Builder uses to configure the ECR repository and the output container images that Amazon Inspector scans.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html */

export interface EcrConfiguration {
  /**
   * - Tags for Image Builder to apply to the output container image that Amazon Inspector scans. Tags can help you identify and manage your scanned images.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-ecrconfiguration-containertags */
  ContainerTags?: (string | Intrinsic)[]
  /**
   * - The name of the container repository that Amazon Inspector scans to identify findings for your container images. The name includes the path for the repository location. If you don’t provide this information, Image Builder creates a repository in your account named `image-builder-image-scanning-repository` for vulnerability scans of your output container images.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-ecrconfiguration-repositoryname */
  RepositoryName?: string | Intrinsic
}

/**
 * Contains a key/value pair that sets the named workflow parameter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html */

export interface WorkflowParameter {
  /**
   * - The name of the workflow parameter to set.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[^\x00]+`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-workflowparameter-name */
  Name?: string | Intrinsic
  /**
   * - Sets the value for the named workflow parameter.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-workflowparameter-value */
  Value?: (string | Intrinsic)[]
}

/**
 * Contains settings for Image Builder image resource and container image scans.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html */

export interface ImageScanningConfiguration {
  /**
   * - Contains Amazon ECR settings for vulnerability scans.
   * - _Required_: No
   * - _Type_: [EcrConfiguration](./aws-properties-imagebuilder-image-ecrconfiguration.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-imagescanningconfiguration-ecrconfiguration */
  EcrConfiguration?: EcrConfiguration
  /**
   * - A setting that indicates whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-imagescanningconfiguration-imagescanningenabled */
  ImageScanningEnabled?: boolean | Intrinsic
}

/**
 * Contains control settings and configurable inputs for a workflow resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html */

export interface WorkflowConfiguration {
  /**
   * - The action to take if the workflow fails.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CONTINUE | ABORT`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-workflowconfiguration-onfailure */
  OnFailure?: string | Intrinsic
  /**
   * - Test workflows are defined within named runtime groups called parallel groups. The parallel group is the named group that contains this test workflow. Test workflows within a parallel group can run at the same time. Image Builder starts up to five test workflows in the group at the same time, and starts additional workflows as others complete, until all workflows in the group have completed. This field only applies for test workflows.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[A-Za-z0-9][A-Za-z0-9-_+#]{0,99}$`
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-workflowconfiguration-parallelgroup */
  ParallelGroup?: string | Intrinsic
  /**
   * - Contains parameter values for each of the parameters that the workflow document defined for the workflow resource.
   * - _Required_: No
   * - _Type_: Array of [WorkflowParameter](./aws-properties-imagebuilder-image-workflowparameter.html)
   * - _Minimum_: `1`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-workflowconfiguration-parameters */
  Parameters?: WorkflowParameter[]
  /**
   * - The Amazon Resource Name (ARN) of the workflow resource.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:aws(?:-[a-z]+)*:imagebuilder:[a-z]{2,}(?:-[a-z]+)+-[0-9]+:(?:[0-9]{12}|aws(?:-[a-z-]+)?):workflow/(build|test|distribution)/[a-z0-9-_]+/(?:(?:([0-9]+|x)\.([0-9]+|x)\.([0-9]+|x))|(?:[0-9]+\.[0-9]+\.[0-9]+/[0-9]+))$`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-workflowconfiguration-workflowarn */
  WorkflowArn?: string | Intrinsic
}

/**
 * Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html */

export interface ImageBuilderImage extends ResourceAttributes {
  Type: 'AWS::ImageBuilder::Image'
  Properties: {
    /**
     * - The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-containerrecipearn */
    ContainerRecipeArn?: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the distribution configuration that defines and configures the outputs of your pipeline.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-distributionconfigurationarn */
    DistributionConfigurationArn?: string | Intrinsic
    /**
     * - Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-enhancedimagemetadataenabled */
    EnhancedImageMetadataEnabled?: boolean | Intrinsic
    /**
     * - The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(?:arn:aws(?:-[a-z]+)*:iam::[0-9]{12}:role/)?[a-zA-Z_0-9+=,.@\-_/]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-executionrole */
    ExecutionRole?: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-imagerecipearn */
    ImageRecipeArn?: string | Intrinsic
    /**
     * - Contains settings for vulnerability scans.
     * - _Required_: No
     * - _Type_: [ImageScanningConfiguration](./aws-properties-imagebuilder-image-imagescanningconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-imagescanningconfiguration */
    ImageScanningConfiguration?: ImageScanningConfiguration
    /**
     * - The image tests configuration of the image.
     * - _Required_: No
     * - _Type_: [ImageTestsConfiguration](./aws-properties-imagebuilder-image-imagetestsconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-imagetestsconfiguration */
    ImageTestsConfiguration?: ImageTestsConfiguration
    /**
     * - The Amazon Resource Name (ARN) of the infrastructure configuration that defines the environment in which your image will be built and tested.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-infrastructureconfigurationarn */
    InfrastructureConfigurationArn?: string | Intrinsic
    /**
     * - The tags of the image.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.{1,}`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-tags */
    Tags?: Record<string, string | Intrinsic>
    /**
     * - Contains an array of workflow configuration objects.
     * - _Required_: No
     * - _Type_: Array of [WorkflowConfiguration](./aws-properties-imagebuilder-image-workflowconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-image.html#cfn-imagebuilder-image-workflows */
    Workflows?: WorkflowConfiguration[]
  }
}
