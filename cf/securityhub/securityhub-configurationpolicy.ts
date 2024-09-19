import type { Intrinsic } from '../intrinsic/index.js' /**
 * An object that includes the data type of a security control parameter and its current value.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html */

export interface ParameterValue {
  /**
   * - A control parameter that is a boolean.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-parametervalue-boolean */
  Boolean?: boolean | Intrinsic
  /**
   * - A control parameter that is a double.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-parametervalue-double */
  Double?: number | Intrinsic
  /**
   * - A control parameter that is an enum.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-parametervalue-enum */
  Enum?: string | Intrinsic
  /**
   * - A control parameter that is a list of enums.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `2048 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-parametervalue-enumlist */
  EnumList?: (string | Intrinsic)[]
  /**
   * - A control parameter that is an integer.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-parametervalue-integer */
  Integer?: number | Intrinsic
  /**
   * - A control parameter that is a list of integers.
   * - _Required_: No
   * - _Type_: Array of Integer
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-parametervalue-integerlist */
  IntegerList?: (number | Intrinsic)[]
  /**
   * - A control parameter that is a string.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-parametervalue-string */
  String?: string | Intrinsic
  /**
   * - A control parameter that is a list of strings.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `2048 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-parametervalue-stringlist */
  StringList?: (string | Intrinsic)[]
}

/**
 * An object that provides the current value of a security control parameter and identifies whether it has been customized.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html */

export interface ParameterConfiguration {
  /**
   * - The current value of a control parameter.
   * - _Required_: No
   * - _Type_: [ParameterValue](./aws-properties-securityhub-configurationpolicy-parametervalue.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-parameterconfiguration-value */
  Value?: ParameterValue
  /**
   * - Identifies whether a control parameter uses a custom user-defined value or subscribes to the default AWS Security Hub behavior.
   * - When `ValueType` is set equal to `DEFAULT`, the default behavior can be a specific Security Hub default value, or the default behavior can be to ignore a specific parameter. When `ValueType` is set equal to `DEFAULT`, Security Hub ignores user-provided input for the `Value` field.
   * - When `ValueType` is set equal to `CUSTOM`, the `Value` field can't be empty.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `DEFAULT | CUSTOM`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-parameterconfiguration-valuetype */
  ValueType: string | Intrinsic
}

/**
 * A list of security controls and control parameter values that are included in a configuration policy.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html */

export interface SecurityControlCustomParameter {
  /**
   * - An object that specifies parameter values for a control in a configuration policy.
   * - _Required_: No
   * - _Type_: Object of [ParameterConfiguration](./aws-properties-securityhub-configurationpolicy-parameterconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-securitycontrolcustomparameter-parameters */
  Parameters?: Record<string, ParameterConfiguration>
  /**
   * - The ID of the security control.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-securitycontrolcustomparameter-securitycontrolid */
  SecurityControlId?: string | Intrinsic
}

/**
 * An object that defines which security controls are enabled in an AWS Security Hub configuration policy. The enablement status of a control is aligned across all of the enabled standards in an account.
 * This property is required only if `ServiceEnabled` is set to `true` in your configuration policy.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html */

export interface SecurityControlsConfiguration {
  /**
   * - A list of security controls that are disabled in the configuration policy.
   * - Provide only one of `EnabledSecurityControlIdentifiers` or `DisabledSecurityControlIdentifiers`.
   * - If you provide `DisabledSecurityControlIdentifiers`, Security Hub enables all other controls not in the list, and enables [AutoEnableControls](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateSecurityHubConfiguration.html#securityhub-UpdateSecurityHubConfiguration-request-AutoEnableControls).
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `2048 | 1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-securitycontrolsconfiguration-disabledsecuritycontrolidentifiers */
  DisabledSecurityControlIdentifiers?: (string | Intrinsic)[]
  /**
   * - A list of security controls that are enabled in the configuration policy.
   * - Provide only one of `EnabledSecurityControlIdentifiers` or `DisabledSecurityControlIdentifiers`.
   * - If you provide `EnabledSecurityControlIdentifiers`, Security Hub disables all other controls not in the list, and disables [AutoEnableControls](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateSecurityHubConfiguration.html#securityhub-UpdateSecurityHubConfiguration-request-AutoEnableControls).
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `2048 | 1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-securitycontrolsconfiguration-enabledsecuritycontrolidentifiers */
  EnabledSecurityControlIdentifiers?: (string | Intrinsic)[]
  /**
   * - A list of security controls and control parameter values that are included in a configuration policy.
   * - _Required_: No
   * - _Type_: Array of [SecurityControlCustomParameter](./aws-properties-securityhub-configurationpolicy-securitycontrolcustomparameter.html)
   * - _Maximum_: `1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-securitycontrolsconfiguration-securitycontrolcustomparameters */
  SecurityControlCustomParameters?: SecurityControlCustomParameter[]
}

/**
 * An object that defines how AWS Security Hub is configured. The configuration policy includes whether Security Hub is enabled or disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls. If you provide a list of security controls that are enabled in the configuration policy, Security Hub disables all other controls (including newly released controls). If you provide a list of security controls that are disabled in the configuration policy, Security Hub enables all other controls (including newly released controls).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html */

export interface SecurityHubPolicy {
  /**
   * - A list that defines which security standards are enabled in the configuration policy.
   * - This property is required only if `ServiceEnabled` is set to `true` in your configuration policy.
   * - _Required_: Conditional
   * - _Type_: Array of String
   * - _Maximum_: `2048 | 1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-securityhubpolicy-enabledstandardidentifiers */
  EnabledStandardIdentifiers?: (string | Intrinsic)[]
  /**
   * - An object that defines which security controls are enabled in the configuration policy. The enablement status of a control is aligned across all of the enabled standards in an account.
   * - This property is required only if `ServiceEnabled` is set to true in your configuration policy.
   * - _Required_: Conditional
   * - _Type_: [SecurityControlsConfiguration](./aws-properties-securityhub-configurationpolicy-securitycontrolsconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-securityhubpolicy-securitycontrolsconfiguration */
  SecurityControlsConfiguration?: SecurityControlsConfiguration
  /**
   * - Indicates whether Security Hub is enabled in the policy.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-securityhubpolicy-serviceenabled */
  ServiceEnabled?: boolean | Intrinsic
}

/**
 * An object that defines how AWS Security Hub is configured. It includes whether Security Hub is enabled or disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls. If you provide a list of security controls that are enabled in the configuration policy, Security Hub disables all other controls (including newly released controls). If you provide a list of security controls that are disabled in the configuration policy, Security Hub enables all other controls (including newly released controls).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html */

export interface Policy {
  /**
   * - The AWS service that the configuration policy applies to.
   * - _Required_: No
   * - _Type_: [SecurityHubPolicy](./aws-properties-securityhub-configurationpolicy-securityhubpolicy.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-policy-securityhub */
  SecurityHub?: SecurityHubPolicy
}

/**
 * The `AWS::SecurityHub::ConfigurationPolicy` resource creates a central configuration policy with the defined settings. Only the AWS Security Hub delegated administrator can create this resource in the home Region. For more information, see [Central configuration in Security Hub](https://docs.aws.amazon.com/securityhub/latest/userguide/central-configuration-intro.html) in the _AWS Security Hub User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html */

export interface SecurityHubConfigurationPolicy {
  Type: 'AWS::SecurityHub::ConfigurationPolicy'
  Properties: {
    /**
     * - An object that defines how AWS Security Hub is configured. It includes whether Security Hub is enabled or disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls. If you provide a list of security controls that are enabled in the configuration policy, Security Hub disables all other controls (including newly released controls). If you provide a list of security controls that are disabled in the configuration policy, Security Hub enables all other controls (including newly released controls).
     * - _Required_: Yes
     * - _Type_: [Policy](./aws-properties-securityhub-configurationpolicy-policy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-configurationpolicy */
    ConfigurationPolicy: Policy
    /**
     * - The description of the configuration policy.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-description */
    Description?: string | Intrinsic
    /**
     * - The name of the configuration policy. Alphanumeric characters and the following ASCII characters are permitted: `-, ., !, *, /`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-name */
    Name: string | Intrinsic
    /**
     * - User-defined tags associated with a configuration policy. For more information, see [Tagging AWS Security Hub resources](https://docs.aws.amazon.com/securityhub/latest/userguide/tagging-resources.html) in the _Security Hub user guide_.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^[a-zA-Z0-9]{1,128}$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-configurationpolicy.html#cfn-securityhub-configurationpolicy-tags */
    Tags?: Record<string, string | Intrinsic>
  }
}
