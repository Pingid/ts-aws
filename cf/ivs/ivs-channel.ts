import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A key-value pair that you can use to categorize and manage Amazon IVS Channels.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html */

export interface Tag {
  /**
   * - One part of a key-value pair that makes up a tag. A `key` is a general label that acts like a category for more specific tag values.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html#cfn-ivs-channel-tag-key */
  Key: string | Intrinsic
  /**
   * - The optional part of a key-value pair that makes up a tag. A `value` acts as a descriptor within a tag category (key).
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html#cfn-ivs-channel-tag-value */
  Value: string | Intrinsic
}

/**
 * The `AWS::IVS::Channel` resource specifies an Amazon IVS channel. A channel stores configuration information related to your live stream. For more information, see [CreateChannel](https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_CreateChannel.html) in the _Amazon IVS Low-Latency Streaming API Reference_.
 * ###### Note
 *
 * By default, the IVS API CreateChannel endpoint creates a stream key in addition to a channel. The Amazon IVS Channel resource _does not_ create a stream key; to create a stream key, use the StreamKey resource instead.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html */

export interface IVSChannel extends ResourceAttributes {
  Type: 'AWS::IVS::Channel'
  Properties: {
    /**
     * - Whether the channel is authorized.
     * - _Default_: `false`
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html#cfn-ivs-channel-authorized */
    Authorized?: boolean | Intrinsic
    /**
     * - Whether the channel allows insecure RTMP ingest.
     * - _Default_: `false`
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html#cfn-ivs-channel-insecureingest */
    InsecureIngest?: boolean | Intrinsic
    /**
     * - Channel latency mode. Valid values:
     * - _Default_: `LOW`
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `NORMAL | LOW`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html#cfn-ivs-channel-latencymode */
    LatencyMode?: string | Intrinsic
    /**
     * - Channel name.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9-_]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html#cfn-ivs-channel-name */
    Name?: string | Intrinsic
    /**
     * - An optional transcode preset for the channel. This is selectable only for `ADVANCED_HD` and `ADVANCED_SD` channel types. For those channel types, the default preset is `HIGHER_BANDWIDTH_DELIVERY`. For other channel types (`BASIC` and `STANDARD`), `preset` is the empty string ("").
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `| HIGHER_BANDWIDTH_DELIVERY | CONSTRAINED_BANDWIDTH_DELIVERY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html#cfn-ivs-channel-preset */
    Preset?: string | Intrinsic
    /**
     * - The ARN of a RecordingConfiguration resource. An empty string indicates that recording is disabled for the channel. A RecordingConfiguration ARN indicates that recording is enabled using the specified recording configuration. See the [RecordingConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html) resource for more information and an example.
     * - _Default_: "" (empty string, recording is disabled)
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^$|arn:aws:ivs:[a-z0-9-]+:[0-9]+:recording-configuration/[a-zA-Z0-9-]+$`
     * - _Minimum_: `0`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html#cfn-ivs-channel-recordingconfigurationarn */
    RecordingConfigurationArn?: string | Intrinsic
    /**
     * - An array of key-value pairs to apply to this resource.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-channel-tag.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ivs-channel-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html#cfn-ivs-channel-tags */
    Tags?: Tag[]
    /**
     * - The channel type, which determines the allowable resolution and bitrate. _If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately._ Valid values:
     * - Optional _transcode presets_ (available for the `ADVANCED` types) allow you to trade off available download bandwidth and video quality, to optimize the viewing experience. There are two presets:
     * - _Default_: `STANDARD`
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `STANDARD | BASIC | ADVANCED_SD | ADVANCED_HD`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html#cfn-ivs-channel-type */
    Type?: string | Intrinsic
  }
}
