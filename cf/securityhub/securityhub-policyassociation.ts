import type { Intrinsic } from '../intrinsic/index.js' /**
 * The `AWS::SecurityHub::PolicyAssociation` resource specifies associations for a configuration policy or a self-managed configuration. You can associate a AWS Security Hub configuration policy or self-managed configuration with the organization root, organizational units (OUs), or AWS accounts. After a successful association, the configuration policy takes effect in the specified targets. For more information, see [Creating and associating Security Hub configuration policies](https://docs.aws.amazon.com/securityhub/latest/userguide/create-associate-policy.html) in the _AWS Security Hub User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-policyassociation.html */

export interface SecurityHubPolicyAssociation {
  Type: 'AWS::SecurityHub::PolicyAssociation'
  Properties: {
    /**
     * - The universally unique identifier (UUID) of the configuration policy. A self-managed configuration has no UUID. The identifier of a self-managed configuration is `SELF_MANAGED_SECURITY_HUB`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$|^SELF_MANAGED_SECURITY_HUB$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-policyassociation.html#cfn-securityhub-policyassociation-configurationpolicyid */
    ConfigurationPolicyId: string | Intrinsic
    /**
     * - The identifier of the target account, organizational unit, or the root.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.*\S.*`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-policyassociation.html#cfn-securityhub-policyassociation-targetid */
    TargetId: string | Intrinsic
    /**
     * - Specifies whether the target is an AWS account, organizational unit, or the root.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ACCOUNT | ORGANIZATIONAL_UNIT | ROOT`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-policyassociation.html#cfn-securityhub-policyassociation-targettype */
    TargetType: string | Intrinsic
  }
}
