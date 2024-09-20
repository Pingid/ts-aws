import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
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
  LogGroupName?: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the role that CloudFormation should assume when sending log entries to CloudWatch Logs.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html#cfn-cloudformation-hookversion-loggingconfig-logrolearn */
  LogRoleArn?: string | Intrinsic
}

/**
 * The `HookVersion` resource publishes new or first hook version to the AWS CloudFormation registry.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html */

export interface CloudFormationHookVersion extends ResourceAttributes {
  Type: 'AWS::CloudFormation::HookVersion'
  Properties: {
    /**
     * - The Amazon Resource Name (ARN) of the task execution role that grants the hook permission.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:.+:iam::[0-9]{12}:role/.+`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html#cfn-cloudformation-hookversion-executionrolearn */
    ExecutionRoleArn?: string | Intrinsic
    /**
     * - Contains logging configuration information for an extension.
     * - _Required_: No
     * - _Type_: [LoggingConfig](./aws-properties-cloudformation-hookversion-loggingconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html#cfn-cloudformation-hookversion-loggingconfig */
    LoggingConfig?: LoggingConfig
    /**
     * - A URL to the Amazon S3 bucket containing the hook project package that contains the necessary files for the hook you want to register.
     * - For information on generating a schema handler package for the resource you want to register, see [submit](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-cli-submit.html) in the _CloudFormation CLI User Guide for Extension Development_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `4096`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html#cfn-cloudformation-hookversion-schemahandlerpackage */
    SchemaHandlerPackage: string | Intrinsic
    /**
     * - The unique name for your hook. Specifies a three-part namespace for your hook, with a recommended pattern of `Organization::Service::Hook`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html#cfn-cloudformation-hookversion-typename */
    TypeName: string | Intrinsic
  }
}
