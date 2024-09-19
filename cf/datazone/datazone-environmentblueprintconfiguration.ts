import type { Intrinsic } from '../intrinsic/index.js' /**
 * The regional parameters in the environment blueprint.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html */

export interface RegionalParameter {
  /**
   * - A string to string map containing parameters for the region.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `.+`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-regionalparameter-parameters */
  Parameters?: Record<string, string | Intrinsic>
  /**
   * - The region specified in the environment parameter.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-z]{2}-?(iso|gov)?-{1}[a-z]*-{1}[0-9]$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-regionalparameter-region */
  Region?: string | Intrinsic
}

/**
 * The configuration details of an environment blueprint.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html */

export interface DataZoneEnvironmentBlueprintConfiguration {
  Type: 'AWS::DataZone::EnvironmentBlueprintConfiguration'
  Properties: {
    /**
     * - The identifier of the Amazon DataZone domain in which an environment blueprint exists.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-domainidentifier */
    DomainIdentifier: string | Intrinsic
    /**
     * - The enabled AWS Regions specified in a blueprint configuration.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Maximum_: `16`
     * - _Minimum_: `4 | 0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-enabledregions */
    EnabledRegions: (string | Intrinsic)[]
    /**
     * - The identifier of the environment blueprint.
     * - In the current release, only the following values are supported: `DefaultDataLake` and `DefaultDataWarehouse`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_-]{1,36}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-environmentblueprintidentifier */
    EnvironmentBlueprintIdentifier: string | Intrinsic
    /**
     * - The ARN of the manage access role.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws[^:]*:iam::\d{12}:(role|role/service-role)/[\w+=,.@-]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-manageaccessrolearn */
    ManageAccessRoleArn?: string | Intrinsic
    /**
     * - The ARN of the provisioning role.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws[^:]*:iam::\d{12}:(role|role/service-role)/[\w+=,.@-]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-provisioningrolearn */
    ProvisioningRoleArn?: string | Intrinsic
    /**
     * - The regional parameters of the environment blueprint.
     * - _Required_: No
     * - _Type_: Array of [RegionalParameter](./aws-properties-datazone-environmentblueprintconfiguration-regionalparameter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-regionalparameters */
    RegionalParameters?: RegionalParameter[]
  }
}
