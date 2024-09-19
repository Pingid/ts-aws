import type { Intrinsic } from '../intrinsic/index.js' /**
 * Contains logging configuration information for an extension.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-loggingconfig-loggroupname */
  LogGroupName?: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the role that CloudFormation should assume when sending log entries to CloudWatch Logs.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-loggingconfig-logrolearn */
  LogRoleArn?: string | Intrinsic
}

/**
 * Activates a public third-party extension, making it available for use in stack templates. For more information, see [Using public extensions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html) in the _AWS CloudFormation User Guide_.
 * Once you have activated a public third-party extension in your account and Region, use [SetTypeConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html) to specify configuration properties for the extension. For more information, see [Configuring extensions at the account level](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-private.html#registry-set-configuration) in the _AWS CloudFormation User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html */

export interface CloudFormationTypeActivation {
  Type: 'AWS::CloudFormation::TypeActivation'
  Properties: {
    /**
     * - Whether to automatically update the extension in this account and Region when a new _minor_ version is published by the extension publisher. Major versions released by the publisher must be manually updated.
     * - The default is `true`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-autoupdate */
    AutoUpdate?: boolean | Intrinsic
    /**
     * - The name of the IAM execution role to use to activate the extension.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:.+:iam::[0-9]{12}:role/.+`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-executionrolearn */
    ExecutionRoleArn?: string | Intrinsic
    /**
     * - Specifies logging configuration information for an extension.
     * - _Required_: No
     * - _Type_: [LoggingConfig](./aws-properties-cloudformation-typeactivation-loggingconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-loggingconfig */
    LoggingConfig?: LoggingConfig
    /**
     * - The major version of this extension you want to activate, if multiple major versions are available. The default is the latest major version. CloudFormation uses the latest available _minor_ version of the major version selected.
     * - You can specify `MajorVersion` or `VersionBump`, but not both.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `100000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-majorversion */
    MajorVersion?: string | Intrinsic
    /**
     * - The Amazon Resource Number (ARN) of the public extension.
     * - Conditional: You must specify `PublicTypeArn`, or `TypeName`, `Type`, and `PublisherId`.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Pattern_: `arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}:([0-9]{12})?:type/.+`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-publictypearn */
    PublicTypeArn?: string | Intrinsic
    /**
     * - The ID of the extension publisher.
     * - Conditional: You must specify `PublicTypeArn`, or `TypeName`, `Type`, and `PublisherId`.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Pattern_: `[0-9a-zA-Z]{40}`
     * - _Minimum_: `1`
     * - _Maximum_: `40`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-publisherid */
    PublisherId?: string | Intrinsic
    /**
     * - The extension type.
     * - Conditional: You must specify `PublicTypeArn`, or `TypeName`, `Type`, and `PublisherId`.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Allowed values_: `RESOURCE | MODULE | HOOK`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-type */
    Type?: string | Intrinsic
    /**
     * - The name of the extension.
     * - Conditional: You must specify `PublicTypeArn`, or `TypeName`, `Type`, and `PublisherId`.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Pattern_: `[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}(::MODULE){0,1}`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-typename */
    TypeName?: string | Intrinsic
    /**
     * - An alias to assign to the public extension, in this account and Region. If you specify an alias for the extension, CloudFormation treats the alias as the extension type name within this account and Region. You must use the alias to refer to the extension in your templates, API calls, and CloudFormation console.
     * - An extension alias must be unique within a given account and Region. You can activate the same public resource multiple times in the same account and Region, using different type name aliases.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}(::MODULE){0,1}`
     * - _Minimum_: `10`
     * - _Maximum_: `204`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-typenamealias */
    TypeNameAlias?: string | Intrinsic
    /**
     * - Manually updates a previously-activated type to a new major or minor version, if available. You can also use this parameter to update the value of `AutoUpdate`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `MAJOR | MINOR`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html#cfn-cloudformation-typeactivation-versionbump */
    VersionBump?: string | Intrinsic
  }
}
