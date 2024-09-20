import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Slate VOD source configuration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html */

export interface SlateSource {
  /**
   * - The name of the source location where the slate VOD source is stored.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-slatesource-sourcelocationname */
  SourceLocationName?: string | Intrinsic
  /**
   * - The slate VOD source name. The VOD source must already exist in a source location before it can be used for slate.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-slatesource-vodsourcename */
  VodSourceName?: string | Intrinsic
}

/**
 * The log configuration for the channel.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html */

export interface LogConfigurationForChannel {
  /**
   * - The log types.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-logconfigurationforchannel-logtypes */
  LogTypes?: (string | Intrinsic)[]
}

/**
 * The `Tag` property type specifies Property description not available. for an [AWS::MediaTailor::Channel](./aws-resource-mediatailor-channel.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-tag-value */
  Value: string | Intrinsic
}

/**
 * The configuration for time-shifted viewing.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html */

export interface TimeShiftConfiguration {
  /**
   * - The maximum time delay for time-shifted viewing. The minimum allowed maximum time delay is 0 seconds, and the maximum allowed maximum time delay is 21600 seconds (6 hours).
   * - _Required_: Yes
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-timeshiftconfiguration-maxtimedelayseconds */
  MaxTimeDelaySeconds: number | Intrinsic
}

/**
 * Dash manifest configuration parameters.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html */

export interface DashPlaylistSettings {
  /**
   * - The total duration (in seconds) of each manifest. Minimum value: `30` seconds. Maximum value: `3600` seconds.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-dashplaylistsettings-manifestwindowseconds */
  ManifestWindowSeconds?: number | Intrinsic
  /**
   * - Minimum amount of content (measured in seconds) that a player must keep available in the buffer. Minimum value: `2` seconds. Maximum value: `60` seconds.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-dashplaylistsettings-minbuffertimeseconds */
  MinBufferTimeSeconds?: number | Intrinsic
  /**
   * - Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest. Minimum value: `2` seconds. Maximum value: `60` seconds.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-dashplaylistsettings-minupdateperiodseconds */
  MinUpdatePeriodSeconds?: number | Intrinsic
  /**
   * - Amount of time (in seconds) that the player should be from the live point at the end of the manifest. Minimum value: `2` seconds. Maximum value: `60` seconds.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-dashplaylistsettings-suggestedpresentationdelayseconds */
  SuggestedPresentationDelaySeconds?: number | Intrinsic
}

/**
 * HLS playlist configuration parameters.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html */

export interface HlsPlaylistSettings {
  /**
   * - Determines the type of SCTE 35 tags to use in ad markup. Specify `DATERANGE` to use `DATERANGE` tags (for live or VOD content). Specify `SCTE35_ENHANCED` to use `EXT-X-CUE-OUT` and `EXT-X-CUE-IN` tags (for VOD content only).
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-hlsplaylistsettings-admarkuptype */
  AdMarkupType?: (string | Intrinsic)[]
  /**
   * - The total duration (in seconds) of each manifest. Minimum value: `30` seconds. Maximum value: `3600` seconds.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-hlsplaylistsettings-manifestwindowseconds */
  ManifestWindowSeconds?: number | Intrinsic
}

/**
 * The output configuration for this channel.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html */

export interface RequestOutputItem {
  /**
   * - DASH manifest configuration parameters.
   * - _Required_: No
   * - _Type_: [DashPlaylistSettings](./aws-properties-mediatailor-channel-dashplaylistsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-requestoutputitem-dashplaylistsettings */
  DashPlaylistSettings?: DashPlaylistSettings
  /**
   * - HLS playlist configuration parameters.
   * - _Required_: No
   * - _Type_: [HlsPlaylistSettings](./aws-properties-mediatailor-channel-hlsplaylistsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-requestoutputitem-hlsplaylistsettings */
  HlsPlaylistSettings?: HlsPlaylistSettings
  /**
   * - The name of the manifest for the channel. The name appears in the `PlaybackUrl`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-requestoutputitem-manifestname */
  ManifestName: string | Intrinsic
  /**
   * - A string used to match which `HttpPackageConfiguration` is used for each `VodSource`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-requestoutputitem-sourcegroup */
  SourceGroup: string | Intrinsic
}

/**
 * The configuration parameters for a channel. For information about MediaTailor channels, see [Working with channels](https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html) in the _MediaTailor User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html */

export interface MediaTailorChannel extends ResourceAttributes {
  Type: 'AWS::MediaTailor::Channel'
  Properties: {
    /**
     * - The list of audiences defined in channel.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-audiences */
    Audiences?: (string | Intrinsic)[]
    /**
     * - The name of the channel.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-channelname */
    ChannelName: string | Intrinsic
    /**
     * - The slate used to fill gaps between programs in the schedule. You must configure filler slate if your channel uses the `LINEAR` `PlaybackMode`. MediaTailor doesn't support filler slate for channels using the `LOOP` `PlaybackMode`.
     * - _Required_: No
     * - _Type_: [SlateSource](./aws-properties-mediatailor-channel-slatesource.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-fillerslate */
    FillerSlate?: SlateSource
    /**
     * - The log configuration.
     * - _Required_: No
     * - _Type_: [LogConfigurationForChannel](./aws-properties-mediatailor-channel-logconfigurationforchannel.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-logconfiguration */
    LogConfiguration?: LogConfigurationForChannel
    /**
     * - The channel's output properties.
     * - _Required_: Yes
     * - _Type_: Array of [RequestOutputItem](./aws-properties-mediatailor-channel-requestoutputitem.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-outputs */
    Outputs: RequestOutputItem[]
    /**
     * - The type of playback mode for this channel.
     * - `LINEAR` - Programs play back-to-back only once.
     * - `LOOP` - Programs play back-to-back in an endless loop. When the last program in the schedule plays, playback loops back to the first program in the schedule.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `LOOP | LINEAR`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-playbackmode */
    PlaybackMode: string | Intrinsic
    /**
     * - The tags to assign to the channel. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-mediatailor-channel-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-tags */
    Tags?: Tag[]
    /**
     * - The tier for this channel. STANDARD tier channels can contain live programs.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `BASIC | STANDARD`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-tier */
    Tier?: string | Intrinsic
    /**
     * - The configuration for time-shifted viewing.
     * - _Required_: No
     * - _Type_: [TimeShiftConfiguration](./aws-properties-mediatailor-channel-timeshiftconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-timeshiftconfiguration */
    TimeShiftConfiguration?: TimeShiftConfiguration
  }
}
