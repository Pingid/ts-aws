import type { Intrinsic } from '../intrinsic/index.js' /**
 * Information about the contact channel that Incident Manager uses to engage the contact.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html */

export interface ChannelTargetInfo {
  /**
   * - The Amazon Resource Name (ARN) of the contact channel.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:(aws|aws-cn|aws-us-gov):ssm-contacts:[-\w+=\/,.@]*:[0-9]+:([\w+=\/,.@:-])*`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html#cfn-ssmcontacts-plan-channeltargetinfo-channelid */
  ChannelId: string | Intrinsic
  /**
   * - The number of minutes to wait before retrying to send engagement if the engagement initially failed.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `60`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html#cfn-ssmcontacts-plan-channeltargetinfo-retryintervalinminutes */
  RetryIntervalInMinutes: number | Intrinsic
}

/**
 * The contact that Incident Manager is engaging during an incident.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html */

export interface ContactTargetInfo {
  /**
   * - The Amazon Resource Name (ARN) of the contact.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:(aws|aws-cn|aws-us-gov):ssm-contacts:[-\w+=\/,.@]*:[0-9]+:([\w+=\/,.@:-])*`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html#cfn-ssmcontacts-plan-contacttargetinfo-contactid */
  ContactId: string | Intrinsic
  /**
   * - A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html#cfn-ssmcontacts-plan-contacttargetinfo-isessential */
  IsEssential: boolean | Intrinsic
}

/**
 * The contact or contact channel that's being engaged.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html */

export interface Targets {
  /**
   * - Information about the contact channel that Incident Manager engages.
   * - _Required_: No
   * - _Type_: [ChannelTargetInfo](./aws-properties-ssmcontacts-plan-channeltargetinfo.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html#cfn-ssmcontacts-plan-targets-channeltargetinfo */
  ChannelTargetInfo?: ChannelTargetInfo
  /**
   * - Information about the contact that Incident Manager engages.
   * - _Required_: No
   * - _Type_: [ContactTargetInfo](./aws-properties-ssmcontacts-plan-contacttargetinfo.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html#cfn-ssmcontacts-plan-targets-contacttargetinfo */
  ContactTargetInfo?: ContactTargetInfo
}

/**
 * A set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html */

export interface Stage {
  /**
   * - The time to wait until beginning the next stage. The duration can only be set to 0 if a target is specified.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html#cfn-ssmcontacts-plan-stage-durationinminutes */
  DurationInMinutes: number | Intrinsic
  /**
   * - The contacts or contact methods that the escalation plan or engagement plan is engaging.
   * - _Required_: No
   * - _Type_: [Array](./aws-properties-ssmcontacts-plan-targets.html) of [Targets](./aws-properties-ssmcontacts-plan-targets.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html#cfn-ssmcontacts-plan-stage-targets */
  Targets?: Targets[]
}

/**
 * Information about the stages and on-call rotation teams associated with an escalation plan or engagement plan.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html */

export interface SSMContactsPlan {
  Type: 'AWS::SSMContacts::Plan'
  Properties: {
    /**
     * - The Amazon Resource Name (ARN) of the contact.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:[-\w+=\/,.@]+:[-\w+=\/,.@]+:[-\w+=\/,.@]*:[0-9]+:([\w+=\/,.@:-]+)*`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html#cfn-ssmcontacts-plan-contactid */
    ContactId?: string | Intrinsic
    /**
     * - The Amazon Resource Names (ARNs) of the on-call rotations associated with the plan.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html#cfn-ssmcontacts-plan-rotationids */
    RotationIds?: (string | Intrinsic)[]
    /**
     * - A list of stages that the escalation plan or engagement plan uses to engage contacts and contact methods.
     * - _Required_: No
     * - _Type_: Array of [Stage](./aws-properties-ssmcontacts-plan-stage.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-plan.html#cfn-ssmcontacts-plan-stages */
    Stages?: Stage[]
  }
}
