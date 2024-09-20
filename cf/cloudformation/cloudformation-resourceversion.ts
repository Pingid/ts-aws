import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Logging configuration information for a resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html */

export interface LoggingConfig {
  /**
   * - The Amazon CloudWatch logs group to which CloudFormation sends error logging information when invoking the type's handlers.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[\.\-_/#A-Za-z0-9]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html#cfn-cloudformation-resourceversion-loggingconfig-loggroupname */
  LogGroupName?: string | Intrinsic
  /**
   * - The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html#cfn-cloudformation-resourceversion-loggingconfig-logrolearn */
  LogRoleArn?: string | Intrinsic
}

/**
 * Registers a resource version with the CloudFormation service. Registering a resource version makes it available for use in CloudFormation templates in your AWS account, and includes:
 * *   Validating the resource schema.
 *
 * *   Determining which handlers, if any, have been specified for the resource.
 *
 * *   Making the resource available for use in your account.
 * For more information on how to develop resources and ready them for registration, see [Creating Resource Providers](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html) in the _CloudFormation CLI User Guide_.
 * You can have a maximum of 50 resource versions registered at a time. This maximum is per account and per Region.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html */

export interface CloudFormationResourceVersion extends ResourceAttributes {
  Type: 'AWS::CloudFormation::ResourceVersion'
  Properties: {
    /**
     * - The Amazon Resource Name (ARN) of the IAM role for CloudFormation to assume when invoking the resource. If your resource calls AWS APIs in any of its handlers, you must create an _[IAM execution role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html)_ that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. When CloudFormation needs to invoke the resource type handler, CloudFormation assumes this execution role to create a temporary session token, which it then passes to the resource type handler, thereby supplying your resource type with the appropriate credentials.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:.+:iam::[0-9]{12}:role/.+`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html#cfn-cloudformation-resourceversion-executionrolearn */
    ExecutionRoleArn?: string | Intrinsic
    /**
     * - Logging configuration information for a resource.
     * - _Required_: No
     * - _Type_: [LoggingConfig](./aws-properties-cloudformation-resourceversion-loggingconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html#cfn-cloudformation-resourceversion-loggingconfig */
    LoggingConfig?: LoggingConfig
    /**
     * - A URL to the S3 bucket containing the resource project package that contains the necessary files for the resource you want to register.
     * - For information on generating a schema handler package for the resource you want to register, see [submit](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-cli-submit.html) in the _CloudFormation CLI User Guide_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `4096`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html#cfn-cloudformation-resourceversion-schemahandlerpackage */
    SchemaHandlerPackage: string | Intrinsic
    /**
     * - The name of the resource being registered.
     * - We recommend that resource names adhere to the following pattern: _company\_or\_organization_::_service_::_type_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html#cfn-cloudformation-resourceversion-typename */
    TypeName: string | Intrinsic
  }
}
