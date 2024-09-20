import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Provides details about an individual security control. For a list of Security Hub controls, see [Security Hub controls reference](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-controls-reference.html) in the _AWS Security Hub User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html */

export interface StandardsControl {
  /**
   * - A user-defined reason for changing a control's enablement status in a specified standard. If you are disabling a control, then this property is required.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html#cfn-securityhub-standard-standardscontrol-reason */
  Reason?: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the control.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:aws\S*:securityhub:\S*`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html#cfn-securityhub-standard-standardscontrol-standardscontrolarn */
  StandardsControlArn: string | Intrinsic
}

/**
 * The `AWS::SecurityHub::Standard` resource specifies the enablement of a security standard. The standard is identified by the `StandardsArn` property. To view a list of Security Hub standards and their Amazon Resource Names (ARNs), use the [`DescribeStandards`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html) API operation.
 * You must create a separate `AWS::SecurityHub::Standard` resource for each standard that you want to enable.
 * For more information about Security Hub standards, see [Security Hub standards reference](https://docs.aws.amazon.com/securityhub/latest/userguide/standards-reference.html) in the _AWS Security Hub User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html */

export interface SecurityHubStandard extends ResourceAttributes {
  Type: 'AWS::SecurityHub::Standard'
  Properties: {
    /**
     * - Specifies which controls are to be disabled in a standard.
     * - _Maximum_: `100`
     * - _Required_: No
     * - _Type_: Array of [StandardsControl](./aws-properties-securityhub-standard-standardscontrol.html)
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html#cfn-securityhub-standard-disabledstandardscontrols */
    DisabledStandardsControls?: StandardsControl[]
    /**
     * - The ARN of the standard that you want to enable. To view a list of available Security Hub standards and their ARNs, use the [`DescribeStandards`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html) API operation.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:aws\S*:securityhub:\S`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-standard.html#cfn-securityhub-standard-standardsarn */
    StandardsArn: string | Intrinsic
  }
}
