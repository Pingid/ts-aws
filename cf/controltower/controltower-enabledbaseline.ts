import type { Intrinsic } from '../intrinsic/index.js' /**
 * A key-value parameter to an `EnabledBaseline` resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html */

export interface Parameter {
  /**
   * - A string denoting the parameter key.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html#cfn-controltower-enabledbaseline-parameter-key */
  Key?: string | Intrinsic
  /**
   * - A low-level `Document` object of any type (for example, a Java Object).
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html#cfn-controltower-enabledbaseline-parameter-value */
  Value?: string | Intrinsic
}

/**
 * A key-value parameter to an `EnabledBaseline` resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html */

export interface Tag {
  /**
   * - A string that identifies a key-value pair.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html#cfn-controltower-enabledbaseline-tag-key */
  Key?: string | Intrinsic
  /**
   * - A string parameter that describes an `EnabledBaseline` resource.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html#cfn-controltower-enabledbaseline-tag-value */
  Value?: string | Intrinsic
}

/**
 * This resource represents a `Baseline` that has been applied to a target.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html */

export interface ControlTowerEnabledBaseline {
  Type: 'AWS::ControlTower::EnabledBaseline'
  Properties: {
    /**
     * - The specific `Baseline` enabled as part of the `EnabledBaseline` resource.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws[0-9a-zA-Z_\-:\/]+$`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html#cfn-controltower-enabledbaseline-baselineidentifier */
    BaselineIdentifier: string | Intrinsic
    /**
     * - The enabled version of the `Baseline`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^\d+(?:\.\d+){0,2}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html#cfn-controltower-enabledbaseline-baselineversion */
    BaselineVersion: string | Intrinsic
    /**
     * - Parameters that are applied when enabling this `Baseline`. These parameters configure the behavior of the baseline.
     * - _Required_: No
     * - _Type_: Array of [Parameter](./aws-properties-controltower-enabledbaseline-parameter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html#cfn-controltower-enabledbaseline-parameters */
    Parameters?: Parameter[]
    /**
     * - Tags associated with input to `EnableBaseline`.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-controltower-enabledbaseline-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html#cfn-controltower-enabledbaseline-tags */
    Tags?: Tag[]
    /**
     * - The target on which to enable the `Baseline`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws[0-9a-zA-Z_\-:\/]+$`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledbaseline.html#cfn-controltower-enabledbaseline-targetidentifier */
    TargetIdentifier: string | Intrinsic
  }
}
