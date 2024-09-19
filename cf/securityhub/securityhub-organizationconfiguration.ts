import type { Intrinsic } from '../intrinsic/index.js' /**
 * The `AWS::SecurityHub::OrganizationConfiguration` resource specifies the way that your AWS organization is configured in AWS Security Hub. Specifically, you can use this resource to specify the configuration type for your organization and whether to automatically Security Hub and security standards in new member accounts. For more information, see [Managing administrator and member accounts](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-accounts.html) in the _AWS Security Hub User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-organizationconfiguration.html */

export interface SecurityHubOrganizationConfiguration {
  Type: 'AWS::SecurityHub::OrganizationConfiguration'
  Properties: {
    /**
     * - Whether to automatically enable Security Hub in new member accounts when they join the organization.
     * - If set to `true`, then Security Hub is automatically enabled in new accounts. If set to `false`, then Security Hub isn't enabled in new accounts automatically. The default value is `false`.
     * - If the `ConfigurationType` of your organization is set to `CENTRAL`, then this field is set to `false` and can't be changed in the home Region and linked Regions. However, in that case, the delegated administrator can create a configuration policy in which Security Hub is enabled and associate the policy with new organization accounts.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-organizationconfiguration.html#cfn-securityhub-organizationconfiguration-autoenable */
    AutoEnable: boolean | Intrinsic
    /**
     * - Whether to automatically enable Security Hub [default standards](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-enable-disable.html) in new member accounts when they join the organization.
     * - The default value of this parameter is equal to `DEFAULT`.
     * - If equal to `DEFAULT`, then Security Hub default standards are automatically enabled for new member accounts. If equal to `NONE`, then default standards are not automatically enabled for new member accounts.
     * - If the `ConfigurationType` of your organization is set to `CENTRAL`, then this field is set to `NONE` and can't be changed in the home Region and linked Regions. However, in that case, the delegated administrator can create a configuration policy in which specific security standards are enabled and associate the policy with new organization accounts.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DEFAULT | NONE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-organizationconfiguration.html#cfn-securityhub-organizationconfiguration-autoenablestandards */
    AutoEnableStandards?: string | Intrinsic
    /**
     * - Indicates whether the organization uses local or central configuration.
     * - If you use local configuration, the Security Hub delegated administrator can set `AutoEnable` to `true` and `AutoEnableStandards` to `DEFAULT`. This automatically enables Security Hub and default security standards in new organization accounts. These new account settings must be set separately in each AWS Region, and settings may be different in each Region.
     * - If you use central configuration, the delegated administrator can create configuration policies. Configuration policies can be used to configure Security Hub, security standards, and security controls in multiple accounts and Regions. If you want new organization accounts to use a specific configuration, you can create a configuration policy and associate it with the root or specific organizational units (OUs). New accounts will inherit the policy from the root or their assigned OU.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `CENTRAL | LOCAL`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-organizationconfiguration.html#cfn-securityhub-organizationconfiguration-configurationtype */
    ConfigurationType?: string | Intrinsic
  }
}
