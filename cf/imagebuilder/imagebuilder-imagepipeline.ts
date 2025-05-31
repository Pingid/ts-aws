import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * When you create an image or container recipe with Image Builder, you can add the build or test components that your image pipeline uses to create the final image. You must have at least one build component to create a recipe, but test components are not required. Your pipeline runs tests after it builds the image, to ensure that the target image is functional and can be used reliably for launching Amazon EC2 instances.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html */

export interface ImageTestsConfiguration {
    /**
     * - Defines if tests should be executed when building this image. For example, `true` or `false`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-imagetestsconfiguration-imagetestsenabled */
    "ImageTestsEnabled"?: boolean | Intrinsic;
    /**
     * - The maximum time in minutes that tests are permitted to run.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `60`
     * - _Maximum_: `1440`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-imagetestsconfiguration-timeoutminutes */
    "TimeoutMinutes"?: number | Intrinsic;
}

/**
 * A schedule configures when and how often a pipeline will automatically create a new image.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html */

export interface Schedule {
    /**
     * - The condition configures when the pipeline should trigger a new image build. When the `pipelineExecutionStartCondition` is set to `EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE`, and you use semantic version filters on the base image or components in your image recipe, Image Builder will build a new image only when there are new versions of the image or components in your recipe that match the semantic version filter. When it is set to `EXPRESSION_MATCH_ONLY`, it will build a new image every time the CRON expression matches the current time. For semantic version syntax, see [CreateComponent](https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateComponent.html) in the _Image Builder API Reference_.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `EXPRESSION_MATCH_ONLY | EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-schedule-pipelineexecutionstartcondition */
    "PipelineExecutionStartCondition"?: string | Intrinsic;
    /**
     * - The cron expression determines how often EC2 Image Builder evaluates your `pipelineExecutionStartCondition`.
     * - For information on how to format a cron expression in Image Builder, see [Use cron expressions in EC2 Image Builder](https://docs.aws.amazon.com/imagebuilder/latest/userguide/image-builder-cron.html).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-schedule-scheduleexpression */
    "ScheduleExpression"?: string | Intrinsic;
}

/**
 * Settings that Image Builder uses to configure the ECR repository and the output container images that Amazon Inspector scans.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html */

export interface EcrConfiguration {
    /**
     * - Tags for Image Builder to apply to the output container image that Amazon Inspector scans. Tags can help you identify and manage your scanned images.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-ecrconfiguration-containertags */
    "ContainerTags"?: (string | Intrinsic)[];
    /**
     * - The name of the container repository that Amazon Inspector scans to identify findings for your container images. The name includes the path for the repository location. If you don’t provide this information, Image Builder creates a repository in your account named `image-builder-image-scanning-repository` for vulnerability scans of your output container images.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-ecrconfiguration-repositoryname */
    "RepositoryName"?: string | Intrinsic;
}

/**
 * Contains settings for Image Builder image resource and container image scans.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html */

export interface ImageScanningConfiguration {
    /**
     * - Contains Amazon ECR settings for vulnerability scans.
     * - _Required_: No
     * - _Type_: [EcrConfiguration](./aws-properties-imagebuilder-imagepipeline-ecrconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-imagescanningconfiguration-ecrconfiguration */
    "EcrConfiguration"?: EcrConfiguration;
    /**
     * - A setting that indicates whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-imagescanningconfiguration-imagescanningenabled */
    "ImageScanningEnabled"?: boolean | Intrinsic;
}

/**
 * Contains a key/value pair that sets the named workflow parameter.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html */

export interface WorkflowParameter {
    /**
     * - The name of the workflow parameter to set.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[^\x00]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-workflowparameter-name */
    "Name"?: string | Intrinsic;
    /**
     * - Sets the value for the named workflow parameter.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-workflowparameter-value */
    "Value"?: (string | Intrinsic)[];
}

/**
 * Contains control settings and configurable inputs for a workflow resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html */

export interface WorkflowConfiguration {
    /**
     * - The action to take if the workflow fails.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `CONTINUE | ABORT`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-workflowconfiguration-onfailure */
    "OnFailure"?: string | Intrinsic;
    /**
     * - Test workflows are defined within named runtime groups called parallel groups. The parallel group is the named group that contains this test workflow. Test workflows within a parallel group can run at the same time. Image Builder starts up to five test workflows in the group at the same time, and starts additional workflows as others complete, until all workflows in the group have completed. This field only applies for test workflows.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z0-9][A-Za-z0-9-_+#]{0,99}$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-workflowconfiguration-parallelgroup */
    "ParallelGroup"?: string | Intrinsic;
    /**
     * - Contains parameter values for each of the parameters that the workflow document defined for the workflow resource.
     * - _Required_: No
     * - _Type_: Array of [WorkflowParameter](./aws-properties-imagebuilder-imagepipeline-workflowparameter.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-workflowconfiguration-parameters */
    "Parameters"?: WorkflowParameter[];
    /**
     * - The Amazon Resource Name (ARN) of the workflow resource.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws(?:-[a-z]+)*:imagebuilder:[a-z]{2,}(?:-[a-z]+)+-[0-9]+:(?:[0-9]{12}|aws(?:-[a-z-]+)?):workflow/(build|test|distribution)/[a-z0-9-_]+/(?:(?:([0-9]+|x)\.([0-9]+|x)\.([0-9]+|x))|(?:[0-9]+\.[0-9]+\.[0-9]+/[0-9]+))$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-workflowconfiguration-workflowarn */
    "WorkflowArn"?: string | Intrinsic;
}

/**
 * An image pipeline is the automation configuration for building secure OS images on AWS. The Image Builder image pipeline is associated with an image recipe that defines the build, validation, and test phases for an image build lifecycle. An image pipeline can be associated with an infrastructure configuration that defines where your image is built. You can define attributes, such as instance types, a subnet for your VPC, security groups, logging, and other infrastructure-related configurations. You can also associate your image pipeline with a distribution configuration to define how you would like to deploy your image.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html */

export interface ImageBuilderImagePipeline extends ResourceAttributes {
    "Type": "AWS::ImageBuilder::ImagePipeline";
    "Properties": {
        /**
         * - The Amazon Resource Name (ARN) of the container recipe that is used for this pipeline.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-containerrecipearn */
        "ContainerRecipeArn"?: string | Intrinsic;
        /**
         * - The description of this image pipeline.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `1024`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-description */
        "Description"?: string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the distribution configuration associated with this image pipeline.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-distributionconfigurationarn */
        "DistributionConfigurationArn"?: string | Intrinsic;
        /**
         * - Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-enhancedimagemetadataenabled */
        "EnhancedImageMetadataEnabled"?: boolean | Intrinsic;
        /**
         * - The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^(?:arn:aws(?:-[a-z]+)*:iam::[0-9]{12}:role/)?[a-zA-Z_0-9+=,.@\-_/]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-executionrole */
        "ExecutionRole"?: string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the image recipe associated with this image pipeline.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-imagerecipearn */
        "ImageRecipeArn"?: string | Intrinsic;
        /**
         * - Contains settings for vulnerability scans.
         * - _Required_: No
         * - _Type_: [ImageScanningConfiguration](./aws-properties-imagebuilder-imagepipeline-imagescanningconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-imagescanningconfiguration */
        "ImageScanningConfiguration"?: ImageScanningConfiguration;
        /**
         * - The configuration of the image tests that run after image creation to ensure the quality of the image that was created.
         * - _Required_: No
         * - _Type_: [ImageTestsConfiguration](./aws-properties-imagebuilder-imagepipeline-imagetestsconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-imagetestsconfiguration */
        "ImageTestsConfiguration"?: ImageTestsConfiguration;
        /**
         * - The Amazon Resource Name (ARN) of the infrastructure configuration associated with this image pipeline.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-infrastructureconfigurationarn */
        "InfrastructureConfigurationArn"?: string | Intrinsic;
        /**
         * - The name of the image pipeline.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-name */
        "Name"?: string | Intrinsic;
        /**
         * - The schedule of the image pipeline. A schedule configures how often and when a pipeline automatically creates a new image.
         * - _Required_: No
         * - _Type_: [Schedule](./aws-properties-imagebuilder-imagepipeline-schedule.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-schedule */
        "Schedule"?: Schedule;
        /**
         * - The status of the image pipeline.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `DISABLED | ENABLED`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-status */
        "Status"?: string | Intrinsic;
        /**
         * - The tags of this image pipeline.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `.{1,}`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-tags */
        "Tags"?: Record<string, string | Intrinsic>;
        /**
         * - Contains the workflows that run for the image pipeline.
         * - _Required_: No
         * - _Type_: Array of [WorkflowConfiguration](./aws-properties-imagebuilder-imagepipeline-workflowconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-imagepipeline.html#cfn-imagebuilder-imagepipeline-workflows */
        "Workflows"?: WorkflowConfiguration[];
    };
}