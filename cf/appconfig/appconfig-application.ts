import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Metadata to assign to the application. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-application.html */

export interface Tags {
  /**
   * - The key-value string map. The valid character set is `[a-zA-Z+-=._:/]`. The tag key can be up to 128 characters and must not start with `aws:`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(?!aws:.)[a-zA-Z1-9+=._:/-]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-application.html#cfn-appconfig-application-tags-key */
  Key: string | Intrinsic
  /**
   * - The tag value can be up to 256 characters.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-application.html#cfn-appconfig-application-tags-value */
  Value: string | Intrinsic
}

/**
 * The `AWS::AppConfig::Application` resource creates an application. In AWS AppConfig, an application is simply an organizational construct like a folder. This organizational construct has a relationship with some unit of executable code. For example, you could create an application called MyMobileApp to organize and manage configuration data for a mobile application installed by your users.
 * AWS AppConfig requires that you create resources and deploy a configuration in the following order:
 * 1.  Create an application
 *
 * 2.  Create an environment
 *
 * 3.  Create a configuration profile
 *
 * 4.  Choose a pre-defined deployment strategy or create your own
 *
 * 5.  Deploy the configuration
 * For more information, see [AWS AppConfig](https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html) in the _AWS AppConfig User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-application.html */

export interface AppConfigApplication extends ResourceAttributes {
  Type: 'AWS::AppConfig::Application'
  Properties: {
    /**
     * - A description of the application.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-application.html#cfn-appconfig-application-description */
    Description?: string | Intrinsic
    /**
     * - A name for the application.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-application.html#cfn-appconfig-application-name */
    Name: string | Intrinsic
    /**
     * - Metadata to assign to the application. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
     * - _Required_: No
     * - _Type_: [Array](./aws-properties-appconfig-application-tags.html) of [Tags](./aws-properties-appconfig-application-tags.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-application.html#cfn-appconfig-application-tags */
    Tags?: Tags[]
  }
}
