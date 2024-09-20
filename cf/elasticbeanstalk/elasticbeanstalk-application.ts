import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A lifecycle rule that deletes application versions after the specified number of days.
 * `MaxAgeRule` is a property of the [ApplicationVersionLifecycleConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-applicationversionlifecycleconfig.html) property type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html */

export interface MaxAgeRule {
  /**
   * - Set to `true` to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html#cfn-elasticbeanstalk-application-maxagerule-deletesourcefroms3 */
  DeleteSourceFromS3?: boolean | Intrinsic
  /**
   * - Specify `true` to apply the rule, or `false` to disable it.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html#cfn-elasticbeanstalk-application-maxagerule-enabled */
  Enabled?: boolean | Intrinsic
  /**
   * - Specify the number of days to retain an application versions.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html#cfn-elasticbeanstalk-application-maxagerule-maxageindays */
  MaxAgeInDays?: number | Intrinsic
}

/**
 * A lifecycle rule that deletes the oldest application version when the maximum count is exceeded.
 * `MaxCountRule` is a property of the [ApplicationVersionLifecycleConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-applicationversionlifecycleconfig.html) property type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html */

export interface MaxCountRule {
  /**
   * - Set to `true` to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html#cfn-elasticbeanstalk-application-maxcountrule-deletesourcefroms3 */
  DeleteSourceFromS3?: boolean | Intrinsic
  /**
   * - Specify `true` to apply the rule, or `false` to disable it.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html#cfn-elasticbeanstalk-application-maxcountrule-enabled */
  Enabled?: boolean | Intrinsic
  /**
   * - Specify the maximum number of application versions to retain.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html#cfn-elasticbeanstalk-application-maxcountrule-maxcount */
  MaxCount?: number | Intrinsic
}

/**
 * The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.
 * When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.
 * `ApplicationVersionLifecycleConfig` is a property of the [ApplicationResourceLifecycleConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-application-applicationresourcelifecycleconfig.html) property type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html */

export interface ApplicationVersionLifecycleConfig {
  /**
   * - Specify a max age rule to restrict the length of time that application versions are retained for an application.
   * - _Required_: No
   * - _Type_: [MaxAgeRule](./aws-properties-elasticbeanstalk-application-maxagerule.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html#cfn-elasticbeanstalk-application-applicationversionlifecycleconfig-maxagerule */
  MaxAgeRule?: MaxAgeRule
  /**
   * - Specify a max count rule to restrict the number of application versions that are retained for an application.
   * - _Required_: No
   * - _Type_: [MaxCountRule](./aws-properties-elasticbeanstalk-application-maxcountrule.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html#cfn-elasticbeanstalk-application-applicationversionlifecycleconfig-maxcountrule */
  MaxCountRule?: MaxCountRule
}

/**
 * The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions.
 * `ApplicationResourceLifecycleConfig` is a property of the [AWS::ElasticBeanstalk::Application](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk.html) resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html */

export interface ApplicationResourceLifecycleConfig {
  /**
   * - The ARN of an IAM service role that Elastic Beanstalk has permission to assume.
   * - The `ServiceRole` property is required the first time that you provide a `ResourceLifecycleConfig` for the application. After you provide it once, Elastic Beanstalk persists the Service Role with the application, and you don't need to specify it again. You can, however, specify it in subsequent updates to change the Service Role to another value.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html#cfn-elasticbeanstalk-application-applicationresourcelifecycleconfig-servicerole */
  ServiceRole?: string | Intrinsic
  /**
   * - Defines lifecycle settings for application versions.
   * - _Required_: No
   * - _Type_: [ApplicationVersionLifecycleConfig](./aws-properties-elasticbeanstalk-application-applicationversionlifecycleconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html#cfn-elasticbeanstalk-application-applicationresourcelifecycleconfig-versionlifecycleconfig */
  VersionLifecycleConfig?: ApplicationVersionLifecycleConfig
}

/**
 * The AWS::ElasticBeanstalk::Application resource is an AWS Elastic Beanstalk Beanstalk resource type that specifies an Elastic Beanstalk application.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html */

export interface ElasticBeanstalkApplication extends ResourceAttributes {
  Type: 'AWS::ElasticBeanstalk::Application'
  Properties: {
    /**
     * - A name for the Elastic Beanstalk application. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html#cfn-elasticbeanstalk-application-applicationname */
    ApplicationName?: string | Intrinsic
    /**
     * - Your description of the application.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html#cfn-elasticbeanstalk-application-description */
    Description?: string | Intrinsic
    /**
     * - Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions.
     * - _Required_: No
     * - _Type_: [ApplicationResourceLifecycleConfig](./aws-properties-elasticbeanstalk-application-applicationresourcelifecycleconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-application.html#cfn-elasticbeanstalk-application-resourcelifecycleconfig */
    ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig
  }
}
