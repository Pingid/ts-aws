import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `LoggingConfig` property type specifies logging configuration information for an extension.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html */

export interface LoggingConfig {
    /**
     * - The Amazon CloudWatch Logs group to which CloudFormation sends error logging information when invoking the extension's handlers.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\.\-_/#A-Za-z0-9]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html#cfn-cloudformation-hookversion-loggingconfig-loggroupname */
    "LogGroupName"?: string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the role that CloudFormation should assume when sending log entries to CloudWatch Logs.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html#cfn-cloudformation-hookversion-loggingconfig-logrolearn */
    "LogRoleArn"?: string | Intrinsic;
}

/**
 * The `AWS::CloudFormation::HookVersion` resource publishes new or first version of a Hook to the CloudFormation registry.
 * For information about the CloudFormation registry, see [Managing extensions with the CloudFormation registry](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html) in the _AWS CloudFormation User Guide_.
 * This resource type is not compatible with Guard and Lambda Hooks.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html */

export interface CloudFormationHookVersion extends ResourceAttributes {
    "Type": "AWS::CloudFormation::HookVersion";
    "Properties": {
        /**
         * - The Amazon Resource Name (ARN) of the task execution role that grants the Hook permission.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `arn:.+:iam::[0-9]{12}:role/.+`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html#cfn-cloudformation-hookversion-executionrolearn */
        "ExecutionRoleArn"?: string | Intrinsic;
        /**
         * - Contains logging configuration information for an extension.
         * - _Required_: No
         * - _Type_: [LoggingConfig](./aws-properties-cloudformation-hookversion-loggingconfig.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html#cfn-cloudformation-hookversion-loggingconfig */
        "LoggingConfig"?: LoggingConfig;
        /**
         * - A URL to the Amazon S3 bucket containing the Hook project package that contains the necessary files for the Hook you want to register.
         * - For information on generating a schema handler package, see [Modeling custom CloudFormation Hooks](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-model.html) in the _AWS CloudFormation Hooks User Guide_.
         * - _Required_: Yes
         * - _Type_: String
         * - _Maximum_: `4096`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html#cfn-cloudformation-hookversion-schemahandlerpackage */
        "SchemaHandlerPackage": string | Intrinsic;
        /**
         * - The unique name for your hook. Specifies a three-part namespace for your hook, with a recommended pattern of `Organization::Service::Hook`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html#cfn-cloudformation-hookversion-typename */
        "TypeName": string | Intrinsic;
    };
}