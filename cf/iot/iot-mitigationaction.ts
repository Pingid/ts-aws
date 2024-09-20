import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A set of key/value pairs that are used to manage the resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html */

export interface Tag {
  /**
   * - The tag's key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag's value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-tag-value */
  Value: string | Intrinsic
}

/**
 * Parameters used when defining a mitigation action that move a set of things to a thing group.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html */

export interface AddThingsToThingGroupParams {
  /**
   * - Specifies if this mitigation action can move the things that triggered the mitigation action even if they are part of one or more dynamic thing groups.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-addthingstothinggroupparams-overridedynamicgroups */
  OverrideDynamicGroups?: boolean | Intrinsic
  /**
   * - The list of groups to which you want to add the things that triggered the mitigation action. You can add a thing to a maximum of 10 groups, but you can't add a thing to more than one group in the same hierarchy.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `128 | 10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-addthingstothinggroupparams-thinggroupnames */
  ThingGroupNames: (string | Intrinsic)[]
}

/**
 * Parameters used when defining a mitigation action that enable AWS IoT Core logging.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html */

export interface EnableIoTLoggingParams {
  /**
   * - Specifies the type of information to be logged.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `DEBUG | INFO | ERROR | WARN | UNSET_VALUE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-enableiotloggingparams-loglevel */
  LogLevel: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the IAM role used for logging.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-enableiotloggingparams-rolearnforlogging */
  RoleArnForLogging: string | Intrinsic
}

/**
 * Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html */

export interface PublishFindingToSnsParams {
  /**
   * - The ARN of the topic to which you want to publish the findings.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-publishfindingtosnsparams-topicarn */
  TopicArn: string | Intrinsic
}

/**
 * Parameters to define a mitigation action that adds a blank policy to restrict permissions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html */

export interface ReplaceDefaultPolicyVersionParams {
  /**
   * - The name of the template to be applied. The only supported value is `BLANK_POLICY`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `BLANK_POLICY | UNSET_VALUE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-replacedefaultpolicyversionparams-templatename */
  TemplateName: string | Intrinsic
}

/**
 * Parameters to define a mitigation action that changes the state of the CA certificate to inactive.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html */

export interface UpdateCACertificateParams {
  /**
   * - The action that you want to apply to the CA certificate. The only supported value is `DEACTIVATE`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `DEACTIVATE | UNSET_VALUE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-updatecacertificateparams-action */
  Action: string | Intrinsic
}

/**
 * Parameters to define a mitigation action that changes the state of the device certificate to inactive.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html */

export interface UpdateDeviceCertificateParams {
  /**
   * - The action that you want to apply to the device certificate. The only supported value is `DEACTIVATE`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `DEACTIVATE | UNSET_VALUE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-updatedevicecertificateparams-action */
  Action: string | Intrinsic
}

/**
 * Defines the type of action and the parameters for that action.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html */

export interface ActionParams {
  /**
   * - Specifies the group to which you want to add the devices.
   * - _Required_: No
   * - _Type_: [AddThingsToThingGroupParams](./aws-properties-iot-mitigationaction-addthingstothinggroupparams.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-actionparams-addthingstothinggroupparams */
  AddThingsToThingGroupParams?: AddThingsToThingGroupParams
  /**
   * - Specifies the logging level and the role with permissions for logging. You cannot specify a logging level of `DISABLED`.
   * - _Required_: No
   * - _Type_: [EnableIoTLoggingParams](./aws-properties-iot-mitigationaction-enableiotloggingparams.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-actionparams-enableiotloggingparams */
  EnableIoTLoggingParams?: EnableIoTLoggingParams
  /**
   * - Specifies the topic to which the finding should be published.
   * - _Required_: No
   * - _Type_: [PublishFindingToSnsParams](./aws-properties-iot-mitigationaction-publishfindingtosnsparams.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-actionparams-publishfindingtosnsparams */
  PublishFindingToSnsParams?: PublishFindingToSnsParams
  /**
   * - Replaces the policy version with a default or blank policy. You specify the template name. Only a value of `BLANK_POLICY` is currently supported.
   * - _Required_: No
   * - _Type_: [ReplaceDefaultPolicyVersionParams](./aws-properties-iot-mitigationaction-replacedefaultpolicyversionparams.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-actionparams-replacedefaultpolicyversionparams */
  ReplaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams
  /**
   * - Specifies the new state for the CA certificate. Only a value of `DEACTIVATE` is currently supported.
   * - _Required_: No
   * - _Type_: [UpdateCACertificateParams](./aws-properties-iot-mitigationaction-updatecacertificateparams.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-actionparams-updatecacertificateparams */
  UpdateCACertificateParams?: UpdateCACertificateParams
  /**
   * - Specifies the new state for a device certificate. Only a value of `DEACTIVATE` is currently supported.
   * - _Required_: No
   * - _Type_: [UpdateDeviceCertificateParams](./aws-properties-iot-mitigationaction-updatedevicecertificateparams.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-actionparams-updatedevicecertificateparams */
  UpdateDeviceCertificateParams?: UpdateDeviceCertificateParams
}

/**
 * Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. For API reference, see [CreateMitigationAction](https://docs.aws.amazon.com/iot/latest/apireference/API_CreateMitigationAction.html) and for general information, see [Mitigation actions](https://docs.aws.amazon.com/iot/latest/developerguide/dd-mitigation-actions.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html */

export interface IoTMitigationAction extends ResourceAttributes {
  Type: 'AWS::IoT::MitigationAction'
  Properties: {
    /**
     * - The friendly name of the mitigation action.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9:_-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-actionname */
    ActionName?: string | Intrinsic
    /**
     * - The set of parameters for this mitigation action. The parameters vary, depending on the kind of action you apply.
     * - _Required_: Yes
     * - _Type_: [ActionParams](./aws-properties-iot-mitigationaction-actionparams.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-actionparams */
    ActionParams: ActionParams
    /**
     * - The IAM role ARN used to apply this mitigation action.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-rolearn */
    RoleArn: string | Intrinsic
    /**
     * - Metadata that can be used to manage the mitigation action.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-iot-mitigationaction-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-mitigationaction.html#cfn-iot-mitigationaction-tags */
    Tags?: Tag[]
  }
}
