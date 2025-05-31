import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Configuration that controls the parallelism of the pipeline. By default, the parallelism configuration specified applies to all executions of the pipeline unless overridden.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html */

export interface ParallelismConfiguration {
    /**
     * - The max number of steps that can be executed in parallel.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-parallelismconfiguration-maxparallelexecutionsteps */
    "MaxParallelExecutionSteps": number | Intrinsic;
}

/**
 * A tag object that consists of a key and an optional value, used to manage metadata for SageMaker AWS resources.
 * You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints. For more information on adding tags to SageMaker resources, see [AddTags](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html).
 * For more information on adding metadata to your AWS resources with tagging, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html). For advice on best practices for managing AWS resources with tagging, see [Tagging Best Practices: Implement an Effective AWS Resource Tagging Strategy](https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html */

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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-tag-key */
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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The location of the pipeline definition stored in Amazon S3. If specified, SageMaker will retrieve the pipeline definition from this location.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html */

export interface S3Location {
    /**
     * - The name of the S3 bucket.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-s3location-bucket */
    "Bucket": string | Intrinsic;
    /**
     * - A file checksum of the pipeline definition file.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-s3location-etag */
    "ETag"?: string | Intrinsic;
    /**
     * - The object key (or key name) which uniquely identifies the object in an S3 bucket.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-s3location-key */
    "Key": string | Intrinsic;
    /**
     * - The version ID of the pipeline definition file. If not specified, Amazon SageMaker will retrieve the latest version.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-s3location-version */
    "Version"?: string | Intrinsic;
}

/**
 * The definition of the pipeline. This can be either a JSON string or an Amazon S3 location.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html */

export interface PipelineDefinition {
    /**
     * - The [JSON pipeline definition](https://aws-sagemaker-mlops.github.io/sagemaker-model-building-pipeline-definition-JSON-schema/) of the pipeline.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-pipelinedefinition-pipelinedefinitionbody */
    "PipelineDefinitionBody"?: string | Intrinsic;
    /**
     * - The location of the pipeline definition stored in Amazon S3. If specified, SageMaker retrieves the pipeline definition from this location.
     * - _Required_: No
     * - _Type_: [S3Location](./aws-properties-sagemaker-pipeline-s3location.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-pipelinedefinition-pipelinedefinitions3location */
    "PipelineDefinitionS3Location"?: S3Location;
}

/**
 * The `AWS::SageMaker::Pipeline` resource creates shell scripts that run when you create and/or start a SageMaker Pipeline. For information about SageMaker Pipelines, see [SageMaker Pipelines](https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines.html) in the _Amazon SageMaker Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html */

export interface SageMakerPipeline extends ResourceAttributes {
    "Type": "AWS::SageMaker::Pipeline";
    "Properties": {
        /**
         * - The parallelism configuration applied to the pipeline.
         * - _Required_: No
         * - _Type_: [ParallelismConfiguration](./aws-properties-sagemaker-pipeline-parallelismconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-parallelismconfiguration */
        "ParallelismConfiguration"?: ParallelismConfiguration;
        /**
         * - The definition of the pipeline. This can be either a JSON string or an Amazon S3 location.
         * - _Required_: Yes
         * - _Type_: [PipelineDefinition](./aws-properties-sagemaker-pipeline-pipelinedefinition.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-pipelinedefinition */
        "PipelineDefinition": PipelineDefinition;
        /**
         * - The description of the pipeline.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `0`
         * - _Maximum_: `3072`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-pipelinedescription */
        "PipelineDescription"?: string | Intrinsic;
        /**
         * - The display name of the pipeline.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-pipelinedisplayname */
        "PipelineDisplayName"?: string | Intrinsic;
        /**
         * - The name of the pipeline.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-pipelinename */
        "PipelineName": string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the IAM role used to execute the pipeline.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
         * - _Minimum_: `20`
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-rolearn */
        "RoleArn": string | Intrinsic;
        /**
         * - The tags of the pipeline.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-sagemaker-pipeline-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-pipeline.html#cfn-sagemaker-pipeline-tags */
        "Tags"?: Tag[];
    };
}