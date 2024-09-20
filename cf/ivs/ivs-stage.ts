import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `AWS::IVS::AutoParticipantRecordingConfiguration` property type describes a configuration for individual participant recording.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-stage.html */

export interface AutoParticipantRecordingConfiguration {
  /**
   * - Types of media to be recorded. Default: `AUDIO_VIDEO`.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Allowed values_: `AUDIO_VIDEO | AUDIO_ONLY`
   * - _Minimum_: `0`
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-stage.html#cfn-ivs-stage-autoparticipantrecordingconfiguration-mediatypes */
  MediaTypes?: (string | Intrinsic)[]
  /**
   * - ARN of the [StorageConfiguration](./aws-resource-ivs-storageconfiguration.html) resource to use for individual participant recording. Default: "" (empty string, no storage configuration is specified). Individual participant recording cannot be started unless a storage configuration is specified, when a [Stage](./aws-resource-ivs-stage.html) is created or updated.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^$|^arn:aws:ivs:[a-z0-9-]+:[0-9]+:storage-configuration/[a-zA-Z0-9-]+$`
   * - _Minimum_: `0`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-stage.html#cfn-ivs-stage-autoparticipantrecordingconfiguration-storageconfigurationarn */
  StorageConfigurationArn: string | Intrinsic
}

/**
 * A key-value pair that you can use to categorize and manage Amazon IVS Stages.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-stage.html */

export interface Tag {
  /**
   * - One part of a key-value pair that makes up a tag. A `key` is a general label that acts like a category for more specific tag values.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-stage.html#cfn-ivs-stage-tag-key */
  Key: string | Intrinsic
  /**
   * - The optional part of a key-value pair that makes up a tag. A `value` acts as a descriptor within a tag category (key).
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-stage.html#cfn-ivs-stage-tag-value */
  Value: string | Intrinsic
}

/**
 * The `AWS::IVS::Stage` resource specifies an Amazon IVS stage. A stage is a virtual space where participants can exchange video in real time. For more information, see [CreateStage](https://docs.aws.amazon.com/ivs/latest/RealTimeAPIReference/API_CreateStage.html) in the _Amazon IVS Real-Time Streaming API Reference_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-stage.html */

export interface IVSStage extends ResourceAttributes {
  Type: 'AWS::IVS::Stage'
  Properties: {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [AutoParticipantRecordingConfiguration](./aws-properties-ivs-stage-autoparticipantrecordingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-stage.html#cfn-ivs-stage-autoparticipantrecordingconfiguration */
    AutoParticipantRecordingConfiguration?: AutoParticipantRecordingConfiguration
    /**
     * - Stage name.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9-_]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-stage.html#cfn-ivs-stage-name */
    Name?: string | Intrinsic
    /**
     * - An array of key-value pairs to apply to this resource.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-stage-tag.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ivs-stage-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-stage.html#cfn-ivs-stage-tags */
    Tags?: Tag[]
  }
}
