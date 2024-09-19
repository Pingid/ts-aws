import type { Intrinsic } from '../intrinsic/index.js' /**
 * Settings that apply only if the input is a push type of input.
 * The parent of this entity is Input.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html */

export interface InputDestinationRequest {
  /**
   * - The stream name (application name/application instance) for the location the RTMP source content will be pushed to in MediaLive.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-inputdestinationrequest-streamname */
  StreamName?: string | Intrinsic
}

/**
 * Settings that apply only if the input is an Elemental Link input.
 * The parent of this entity is Input.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html */

export interface InputDeviceSettings {
  /**
   * - The unique ID for the device.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-inputdevicesettings-id */
  Id?: string | Intrinsic
}

/**
 * Settings that apply only if the input is a MediaConnect input.
 * The parent of this entity is Input.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html */

export interface MediaConnectFlowRequest {
  /**
   * - The ARN of one or two MediaConnect flows that are the sources for this MediaConnect input.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-mediaconnectflowrequest-flowarn */
  FlowArn?: string | Intrinsic
}

/**
 * Settings that apply only if the input is a pull type of input.
 * The parent of this entity is Input.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html */

export interface InputSourceRequest {
  /**
   * - The password parameter that holds the password for accessing the upstream system. The password parameter applies only if the upstream system requires credentials.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-inputsourcerequest-passwordparam */
  PasswordParam?: string | Intrinsic
  /**
   * - For a pull input, the URL where MediaLive pulls the source content from.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-inputsourcerequest-url */
  Url?: string | Intrinsic
  /**
   * - The user name to connect to the upstream system. The user name applies only if the upstream system requires credentials.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-inputsourcerequest-username */
  Username?: string | Intrinsic
}

/**
 * You can use the Resource Tags property to apply tags to resources, which can help you identify and categorize those resources. You can tag only resources for which AWS CloudFormation supports tagging. For information about which resources you can tag with CloudFormation, see the individual resources in [AWS resource and property types reference](./aws-template-resource-type-ref.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html */

export interface Tag {
  /**
   * - The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with `aws:`. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `:`, `/`, `=`, `+`, `@`, `-`, and `"`.
   * - _Required_: Yes
   * - _Type_: String
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-resource-tags-key */
  Key: string | Intrinsic
  /**
   * - The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
   * - _Required_: Yes
   * - _Type_: String
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-resource-tags-value */
  Value: string | Intrinsic
}

/**
 * Settings that apply only if the input is an push input where the source is on Amazon VPC.
 * The parent of this entity is Input.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html */

export interface InputVpcRequest {
  /**
   * - The list of up to five VPC security group IDs to attach to the input VPC network interfaces. The security groups require subnet IDs. If none are specified, MediaLive uses the VPC default security group.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-inputvpcrequest-securitygroupids */
  SecurityGroupIds?: (string | Intrinsic)[]
  /**
   * - The list of two VPC subnet IDs from the same VPC. You must associate subnet IDs to two unique Availability Zones.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-inputvpcrequest-subnetids */
  SubnetIds?: (string | Intrinsic)[]
}

/**
 * The `SrtCallerDecryptionRequest` property type specifies Property description not available. for an [AWS::MediaLive::Input](./aws-resource-medialive-input.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html */

export interface SrtCallerDecryptionRequest {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-srtcallerdecryptionrequest-algorithm */
  Algorithm?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-srtcallerdecryptionrequest-passphrasesecretarn */
  PassphraseSecretArn?: string | Intrinsic
}

/**
 * The `SrtCallerSourceRequest` property type specifies Property description not available. for an [AWS::MediaLive::Input](./aws-resource-medialive-input.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html */

export interface SrtCallerSourceRequest {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [SrtCallerDecryptionRequest](./aws-properties-medialive-input-srtcallerdecryptionrequest.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-srtcallersourcerequest-decryption */
  Decryption?: SrtCallerDecryptionRequest
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-srtcallersourcerequest-minimumlatency */
  MinimumLatency?: number | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-srtcallersourcerequest-srtlisteneraddress */
  SrtListenerAddress?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-srtcallersourcerequest-srtlistenerport */
  SrtListenerPort?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-srtcallersourcerequest-streamid */
  StreamId?: string | Intrinsic
}

/**
 * The `SrtSettingsRequest` property type specifies Property description not available. for an [AWS::MediaLive::Input](./aws-resource-medialive-input.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html */

export interface SrtSettingsRequest {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Array of [SrtCallerSourceRequest](./aws-properties-medialive-input-srtcallersourcerequest.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-srtsettingsrequest-srtcallersources */
  SrtCallerSources?: SrtCallerSourceRequest[]
}

/**
 * The AWS::MediaLive::Input resource is a MediaLive resource type that creates an input.
 * A MediaLive input holds information that describes how the MediaLive channel is connected to the upstream system that is providing the source content that is to be transcoded.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html */

export interface MediaLiveInput {
  Type: 'AWS::MediaLive::Input'
  Properties: {
    /**
     * - Settings that apply only if the input is a push type of input.
     * - _Required_: No
     * - _Type_: Array of [InputDestinationRequest](./aws-properties-medialive-input-inputdestinationrequest.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-destinations */
    Destinations?: InputDestinationRequest[]
    /**
     * - Settings that apply only if the input is an Elemental Link input.
     * - _Required_: No
     * - _Type_: Array of [InputDeviceSettings](./aws-properties-medialive-input-inputdevicesettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-inputdevices */
    InputDevices?: InputDeviceSettings[]
    /**
     * - The list of input security groups (referenced by IDs) to attach to the input if the input is a push type.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-inputsecuritygroups */
    InputSecurityGroups?: (string | Intrinsic)[]
    /**
     * - Settings that apply only if the input is a MediaConnect input.
     * - _Required_: No
     * - _Type_: Array of [MediaConnectFlowRequest](./aws-properties-medialive-input-mediaconnectflowrequest.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-mediaconnectflows */
    MediaConnectFlows?: MediaConnectFlowRequest[]
    /**
     * - A name for the input.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-name */
    Name?: string | Intrinsic
    /**
     * - The IAM role for MediaLive to assume when creating a MediaConnect input or Amazon VPC input. This doesn't apply to other types of inputs. The role is identified by its ARN.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-rolearn */
    RoleArn?: string | Intrinsic
    /**
     * - Settings that apply only if the input is a pull type of input.
     * - _Required_: No
     * - _Type_: Array of [InputSourceRequest](./aws-properties-medialive-input-inputsourcerequest.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-sources */
    Sources?: InputSourceRequest[]
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [SrtSettingsRequest](./aws-properties-medialive-input-srtsettingsrequest.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-srtsettings */
    SrtSettings?: SrtSettingsRequest
    /**
     * - A collection of tags for this input. Each tag is a key-value pair.
     * - _Required_: No
     * - _Type_: Array of [`Tag`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-tags */
    Tags?: Tag[]
    /**
     * - The type for this input.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-type */
    Type?: string | Intrinsic
    /**
     * - Settings that apply only if the input is an push input where the source is on Amazon VPC.
     * - _Required_: No
     * - _Type_: [InputVpcRequest](./aws-properties-medialive-input-inputvpcrequest.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-vpc */
    Vpc?: InputVpcRequest
  }
}
