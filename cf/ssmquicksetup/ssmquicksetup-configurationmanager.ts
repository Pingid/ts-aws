import type { Intrinsic } from '../intrinsic/index.js' /**
 * The definition of a Quick Setup configuration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-configurationmanager.html */

export interface ConfigurationDefinition {
  /**
   * - The ID of the configuration definition.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-configurationmanager.html#cfn-ssmquicksetup-configurationmanager-configurationdefinition-id */
  id?: string | Intrinsic
  /**
   * - The ARN of the IAM role used to administrate local configuration deployments.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-configurationmanager.html#cfn-ssmquicksetup-configurationmanager-configurationdefinition-localdeploymentadministrationrolearn */
  LocalDeploymentAdministrationRoleArn?: string | Intrinsic
  /**
   * - The name of the IAM role used to deploy local configurations.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-configurationmanager.html#cfn-ssmquicksetup-configurationmanager-configurationdefinition-localdeploymentexecutionrolename */
  LocalDeploymentExecutionRoleName?: string | Intrinsic
  /**
   * - The parameters for the configuration definition type. Parameters for configuration definitions vary based the configuration type. The following tables outline the parameters for each configuration type.
   * - _Required_: Yes
   * - _Type_: Object of String
   * - _Pattern_: `^[A-Za-z0-9+=@_\/\s-]+$`
   * - _Maximum_: `40960`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-configurationmanager.html#cfn-ssmquicksetup-configurationmanager-configurationdefinition-parameters */
  Parameters: Record<string, string | Intrinsic>
  /**
   * - The type of the Quick Setup configuration.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9_\-.:/]{3,200}$`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-configurationmanager.html#cfn-ssmquicksetup-configurationmanager-configurationdefinition-type */
  Type: string | Intrinsic
  /**
   * - The version of the Quick Setup type used.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-configurationmanager.html#cfn-ssmquicksetup-configurationmanager-configurationdefinition-typeversion */
  TypeVersion?: string | Intrinsic
}

/**
 * Creates a Quick Setup configuration manager resource. This object is a collection of desired state configurations for multiple configuration definitions and summaries describing the deployments of those definitions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-configurationmanager.html */

export interface SSMQuickSetupConfigurationManager {
  Type: 'AWS::SSMQuickSetup::ConfigurationManager'
  Properties: {
    /**
     * - The definition of the Quick Setup configuration that the configuration manager deploys.
     * - _Required_: Yes
     * - _Type_: Array of [ConfigurationDefinition](./aws-properties-ssmquicksetup-configurationmanager-configurationdefinition.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-configurationmanager.html#cfn-ssmquicksetup-configurationmanager-configurationdefinitions */
    ConfigurationDefinitions: ConfigurationDefinition[]
    /**
     * - The description of the configuration.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.{0,512}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-configurationmanager.html#cfn-ssmquicksetup-configurationmanager-description */
    Description?: string | Intrinsic
    /**
     * - The name of the configuration
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[ A-Za-z0-9_-]{1,50}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-configurationmanager.html#cfn-ssmquicksetup-configurationmanager-name */
    Name?: string | Intrinsic
    /**
     * - Key-value pairs of metadata to assign to the configuration manager.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^[A-Za-z0-9+=@_\/-:]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmquicksetup-configurationmanager.html#cfn-ssmquicksetup-configurationmanager-tags */
    Tags?: Record<string, string | Intrinsic>
  }
}
