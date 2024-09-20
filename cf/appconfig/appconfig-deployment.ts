import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A map of dynamic extension parameter names to values to pass to associated extensions with `PRE_START_DEPLOYMENT` actions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html */

export interface DynamicExtensionParameters {
  /**
   * - The ARN or ID of the extension for which you are inserting a dynamic parameter.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-dynamicextensionparameters-extensionreference */
  ExtensionReference?: string | Intrinsic
  /**
   * - The parameter name.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-dynamicextensionparameters-parametername */
  ParameterName?: string | Intrinsic
  /**
   * - The parameter value.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-dynamicextensionparameters-parametervalue */
  ParameterValue?: string | Intrinsic
}

/**
 * Metadata to assign to the deployment strategy. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html */

export interface Tags {
  /**
   * - The key-value string map. The valid character set is `[a-zA-Z+-=._:/]`. The tag key can be up to 128 characters and must not start with `aws:`.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-tags-key */
  Key?: string | Intrinsic
  /**
   * - The tag value can be up to 256 characters.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-tags-value */
  Value?: string | Intrinsic
}

/**
 * The `AWS::AppConfig::Deployment` resource starts a deployment. Starting a deployment in AWS AppConfig calls the `StartDeployment` API action. This call includes the IDs of the AWS AppConfig application, the environment, the configuration profile, and (optionally) the configuration data version to deploy. The call also includes the ID of the deployment strategy to use, which determines how the configuration data is deployed.
 * AWS AppConfig monitors the distribution to all hosts and reports status. If a distribution fails, then AWS AppConfig rolls back the configuration.
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
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html */

export interface AppConfigDeployment extends ResourceAttributes {
  Type: 'AWS::AppConfig::Deployment'
  Properties: {
    /**
     * - The application ID.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-z0-9]{4,7}`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-applicationid */
    ApplicationId: string | Intrinsic
    /**
     * - The configuration profile ID.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-z0-9]{4,7}`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-configurationprofileid */
    ConfigurationProfileId: string | Intrinsic
    /**
     * - The configuration version to deploy. If deploying an AWS AppConfig hosted configuration version, you can specify either the version number or version label. For all other configurations, you must specify the version number.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-configurationversion */
    ConfigurationVersion: string | Intrinsic
    /**
     * - The deployment strategy ID.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-z0-9]{4,7}`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-deploymentstrategyid */
    DeploymentStrategyId: string | Intrinsic
    /**
     * - A description of the deployment.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-description */
    Description?: string | Intrinsic
    /**
     * - A map of dynamic extension parameter names to values to pass to associated extensions with `PRE_START_DEPLOYMENT` actions.
     * - _Required_: No
     * - _Type_: [Array](./aws-properties-appconfig-deployment-dynamicextensionparameters.html) of [DynamicExtensionParameters](./aws-properties-appconfig-deployment-dynamicextensionparameters.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-dynamicextensionparameters */
    DynamicExtensionParameters?: DynamicExtensionParameters[]
    /**
     * - The environment ID.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-z0-9]{4,7}`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-environmentid */
    EnvironmentId: string | Intrinsic
    /**
     * - The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-kmskeyidentifier */
    KmsKeyIdentifier?: string | Intrinsic
    /**
     * - Metadata to assign to the deployment. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
     * - _Required_: No
     * - _Type_: [Array](./aws-properties-appconfig-deployment-tags.html) of [Tags](./aws-properties-appconfig-deployment-tags.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deployment.html#cfn-appconfig-deployment-tags */
    Tags?: Tags[]
  }
}
