import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `AWS::SecurityHub::Hub` resource specifies the enablement of the AWS Security Hub service in your AWS account. The service is enabled in the current AWS Region or the specified Region. You create a separate `Hub` resource in each Region in which you want to enable Security Hub.
 * When you use this resource to enable Security Hub, default security standards are enabled. To disable default standards, set the `EnableDefaultStandards` property to `false`. You can use the [`AWS::SecurityHub::Standard`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html) resource to enable additional standards.
 * When you use this resource to enable Security Hub, new controls are automatically enabled for your enabled standards. To disable automatic enablement of new controls, set the `AutoEnableControls` property to `false`.
 * You must create an `AWS::SecurityHub::Hub` resource for an account before you can create other types of Security Hub resources for the account through AWS CloudFormation. Use a [DependsOn attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html), such as `"DependsOn": "Hub"`, to ensure that you've created an `AWS::SecurityHub::Hub` resource before creating other Security Hub resources for an account.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html */

export interface SecurityHubHub extends ResourceAttributes {
  Type: 'AWS::SecurityHub::Hub'
  Properties: {
    /**
     * - Whether to automatically enable new controls when they are added to standards that are enabled.
     * - By default, this is set to `true`, and new controls are enabled automatically. To not automatically enable new controls, set this to `false`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html#cfn-securityhub-hub-autoenablecontrols */
    AutoEnableControls?: boolean | Intrinsic
    /**
     * - Specifies whether an account has consolidated control findings turned on or off. If the value for this field is set to `SECURITY_CONTROL`, Security Hub generates a single finding for a control check even when the check applies to multiple enabled standards.
     * - If the value for this field is set to `STANDARD_CONTROL`, Security Hub generates separate findings for a control check when the check applies to multiple enabled standards.
     * - The value for this field in a member account matches the value in the administrator account. For accounts that aren't part of an organization, the default value of this field is `SECURITY_CONTROL` if you enabled Security Hub on or after February 23, 2023.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(SECURITY_CONTROL|STANDARD_CONTROL)$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html#cfn-securityhub-hub-controlfindinggenerator */
    ControlFindingGenerator?: string | Intrinsic
    /**
     * - Whether to enable the security standards that Security Hub has designated as automatically enabled. If you don't provide a value for `EnableDefaultStandards`, it is set to `true`, and the designated standards are automatically enabled in each AWS Region where you enable Security Hub. If you don't want to enable the designated standards, set `EnableDefaultStandards` to `false`.
     * - Currently, the automatically enabled standards are the Center for Internet Security (CIS) AWS Foundations Benchmark v1.2.0 and AWS Foundational Security Best Practices (FSBP).
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html#cfn-securityhub-hub-enabledefaultstandards */
    EnableDefaultStandards?: boolean | Intrinsic
    /**
     * - An array of key-value pairs to apply to this resource.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^[a-zA-Z0-9-_]{1,128}$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-hub.html#cfn-securityhub-hub-tags */
    Tags?: Record<string, string | Intrinsic>
  }
}
