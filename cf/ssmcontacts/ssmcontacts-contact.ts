import type { Intrinsic } from '../intrinsic/index.js' /**
 * Information about the contact channel that Incident Manager uses to engage the contact.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html#cfn-ssmcontacts-contact-channeltargetinfo-channelid */
  ChannelId: string | Intrinsic
  /**
   * - The number of minutes to wait before retrying to send engagement if the engagement initially failed.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `60`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html#cfn-ssmcontacts-contact-channeltargetinfo-retryintervalinminutes */
  RetryIntervalInMinutes: number | Intrinsic
}

/**
 * The contact that Incident Manager is engaging during an incident.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html#cfn-ssmcontacts-contact-contacttargetinfo-contactid */
  ContactId: string | Intrinsic
  /**
   * - A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html#cfn-ssmcontacts-contact-contacttargetinfo-isessential */
  IsEssential: boolean | Intrinsic
}

/**
 * The contact or contact channel that's being engaged.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html */

export interface Targets {
  /**
   * - Information about the contact channel that Incident Manager engages.
   * - _Required_: No
   * - _Type_: [ChannelTargetInfo](./aws-properties-ssmcontacts-contact-channeltargetinfo.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html#cfn-ssmcontacts-contact-targets-channeltargetinfo */
  ChannelTargetInfo?: ChannelTargetInfo
  /**
   * - The contact that Incident Manager is engaging during an incident.
   * - _Required_: No
   * - _Type_: [ContactTargetInfo](./aws-properties-ssmcontacts-contact-contacttargetinfo.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html#cfn-ssmcontacts-contact-targets-contacttargetinfo */
  ContactTargetInfo?: ContactTargetInfo
}

/**
 * The `Stage` property type specifies a set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html */

export interface Stage {
  /**
   * - The time to wait until beginning the next stage. The duration can only be set to 0 if a target is specified.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html#cfn-ssmcontacts-contact-stage-durationinminutes */
  DurationInMinutes?: number | Intrinsic
  /**
   * - The Amazon Resource Names (ARNs) of the on-call rotations associated with the plan.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html#cfn-ssmcontacts-contact-stage-rotationids */
  RotationIds?: (string | Intrinsic)[]
  /**
   * - The contacts or contact methods that the escalation plan or engagement plan is engaging.
   * - _Required_: No
   * - _Type_: [Array](./aws-properties-ssmcontacts-contact-targets.html) of [Targets](./aws-properties-ssmcontacts-contact-targets.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html#cfn-ssmcontacts-contact-stage-targets */
  Targets?: Targets[]
}

/**
 * The `AWS::SSMContacts::Contact` resource specifies a contact or escalation plan. Incident Manager contacts are a subset of actions and data types that you can use for managing responder engagement and interaction.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html */

export interface SSMContactsContact {
  Type: 'AWS::SSMContacts::Contact'
  Properties: {
    /**
     * - The unique and identifiable alias of the contact or escalation plan.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-z0-9_\-\.]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html#cfn-ssmcontacts-contact-alias */
    Alias: string | Intrinsic
    /**
     * - The full name of the contact or escalation plan.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_\-\s]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html#cfn-ssmcontacts-contact-displayname */
    DisplayName: string | Intrinsic
    /**
     * - A list of stages. A contact has an engagement plan with stages that contact specified contact channels. An escalation plan uses stages that contact specified contacts.
     * - _Required_: No
     * - _Type_: Array of [Stage](./aws-properties-ssmcontacts-contact-stage.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html#cfn-ssmcontacts-contact-plan */
    Plan?: Stage[]
    /**
     * - The type of contact.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `PERSONAL | ESCALATION | ONCALL_SCHEDULE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html#cfn-ssmcontacts-contact-type */
    Type: string | Intrinsic
  }
}
