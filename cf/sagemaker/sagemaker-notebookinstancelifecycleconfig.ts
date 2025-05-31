import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies the notebook instance lifecycle configuration script. Each lifecycle configuration script has a limit of 16384 characters.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html */

export interface NotebookInstanceLifecycleHook {
    /**
     * - A base64-encoded string that contains a shell script for a notebook instance lifecycle configuration.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\S\s]+`
     * - _Minimum_: `1`
     * - _Maximum_: `16384`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html#cfn-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook-content */
    "Content"?: string | Intrinsic;
}

/**
 * The `AWS::SageMaker::NotebookInstanceLifecycleConfig` resource creates shell scripts that run when you create and/or start a notebook instance. For information about notebook instance lifecycle configurations, see [Customize a Notebook Instance](https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html) in the _Amazon SageMaker Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html */

export interface SageMakerNotebookInstanceLifecycleConfig extends ResourceAttributes {
    "Type": "AWS::SageMaker::NotebookInstanceLifecycleConfig";
    "Properties": {
        /**
         * - The name of the lifecycle configuration.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9](-*[a-zA-Z0-9])*`
         * - _Minimum_: `0`
         * - _Maximum_: `63`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html#cfn-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecycleconfigname */
        "NotebookInstanceLifecycleConfigName"?: string | Intrinsic;
        /**
         * - A shell script that runs only once, when you create a notebook instance. The shell script must be a base64-encoded string.
         * - _Required_: No
         * - _Type_: Array of [NotebookInstanceLifecycleHook](./aws-properties-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook.html)
         * - _Minimum_: `0`
         * - _Maximum_: `1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html#cfn-sagemaker-notebookinstancelifecycleconfig-oncreate */
        "OnCreate"?: NotebookInstanceLifecycleHook[];
        /**
         * - A shell script that runs every time you start a notebook instance, including when you create the notebook instance. The shell script must be a base64-encoded string.
         * - _Required_: No
         * - _Type_: Array of [NotebookInstanceLifecycleHook](./aws-properties-sagemaker-notebookinstancelifecycleconfig-notebookinstancelifecyclehook.html)
         * - _Minimum_: `0`
         * - _Maximum_: `1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-notebookinstancelifecycleconfig.html#cfn-sagemaker-notebookinstancelifecycleconfig-onstart */
        "OnStart"?: NotebookInstanceLifecycleHook[];
    };
}