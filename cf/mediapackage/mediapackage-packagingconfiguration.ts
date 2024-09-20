import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `Tag` property type specifies Property description not available. for an [AWS::MediaPackage::PackagingConfiguration](./aws-resource-mediapackage-packagingconfiguration.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-tag-value */
  Value: string | Intrinsic
}

/**
 * Parameters for a DASH manifest.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html */

export interface DashManifest {
  /**
   * - Determines the position of some tags in the Media Presentation Description (MPD). When set to `FULL`, elements like `SegmentTemplate` and `ContentProtection` are included in each `Representation`. When set to `COMPACT`, duplicate elements are combined and presented at the AdaptationSet level.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `FULL | COMPACT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-dashmanifest-manifestlayout */
  ManifestLayout?: string | Intrinsic
  /**
   * - A short string that's appended to the end of the endpoint URL to create a unique path to this packaging configuration.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-dashmanifest-manifestname */
  ManifestName?: string | Intrinsic
  /**
   * - Minimum amount of content (measured in seconds) that a player must keep available in the buffer.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-dashmanifest-minbuffertimeseconds */
  MinBufferTimeSeconds?: number | Intrinsic
  /**
   * - The DASH profile type. When set to `HBBTV_1_5`, the content is compliant with HbbTV 1.5.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | HBBTV_1_5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-dashmanifest-profile */
  Profile?: string | Intrinsic
  /**
   * - The source of scte markers used.
   * - Value description:
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SEGMENTS | MANIFEST`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-dashmanifest-sctemarkerssource */
  ScteMarkersSource?: string | Intrinsic
  /**
   * - Limitations for outputs from the endpoint, based on the video bitrate.
   * - _Required_: No
   * - _Type_: [StreamSelection](./aws-properties-mediapackage-packagingconfiguration-streamselection.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-dashmanifest-streamselection */
  StreamSelection?: StreamSelection
}

/**
 * Holds encryption information so that access to the content can be controlled by a DRM solution.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html */

export interface DashEncryption {
  /**
   * - Parameters for the SPEKE key provider.
   * - _Required_: Yes
   * - _Type_: [SpekeKeyProvider](./aws-properties-mediapackage-packagingconfiguration-spekekeyprovider.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-dashencryption-spekekeyprovider */
  SpekeKeyProvider: SpekeKeyProvider
}

/**
 * Holds encryption information so that access to the content can be controlled by a DRM solution.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html */

export interface HlsEncryption {
  /**
   * - A 128-bit, 16-byte hex value represented by a 32-character string, used with the key for encrypting blocks. If you don't specify a constant initialization vector (IV), AWS Elemental MediaPackage periodically rotates the IV.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-hlsencryption-constantinitializationvector */
  ConstantInitializationVector?: string | Intrinsic
  /**
   * - HLS encryption type.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `AES_128 | SAMPLE_AES`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-hlsencryption-encryptionmethod */
  EncryptionMethod?: string | Intrinsic
  /**
   * - Parameters for the SPEKE key provider.
   * - _Required_: Yes
   * - _Type_: [SpekeKeyProvider](./aws-properties-mediapackage-packagingconfiguration-spekekeyprovider.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-hlsencryption-spekekeyprovider */
  SpekeKeyProvider: SpekeKeyProvider
}

/**
 * Holds encryption information so that access to the content can be controlled by a DRM solution.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html */

export interface MssEncryption {
  /**
   * - Parameters for the SPEKE key provider.
   * - _Required_: Yes
   * - _Type_: [SpekeKeyProvider](./aws-properties-mediapackage-packagingconfiguration-spekekeyprovider.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-mssencryption-spekekeyprovider */
  SpekeKeyProvider: SpekeKeyProvider
}

/**
 * Parameters for a Microsoft Smooth manifest.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html */

export interface MssManifest {
  /**
   * - A short string that's appended to the end of the endpoint URL to create a unique path to this packaging configuration.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-mssmanifest-manifestname */
  ManifestName?: string | Intrinsic
  /**
   * - Video bitrate limitations for outputs from this packaging configuration.
   * - _Required_: No
   * - _Type_: [StreamSelection](./aws-properties-mediapackage-packagingconfiguration-streamselection.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-mssmanifest-streamselection */
  StreamSelection?: StreamSelection
}

/**
 * Limitations for outputs from the endpoint, based on the video bitrate.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html */

export interface StreamSelection {
  /**
   * - The upper limit of the bitrates that this endpoint serves. If the video track exceeds this threshold, then AWS Elemental MediaPackage excludes it from output. If you don't specify a value, it defaults to 2147483647 bits per second.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-streamselection-maxvideobitspersecond */
  MaxVideoBitsPerSecond?: number | Intrinsic
  /**
   * - The lower limit of the bitrates that this endpoint serves. If the video track is below this threshold, then AWS Elemental MediaPackage excludes it from output. If you don't specify a value, it defaults to 0 bits per second.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-streamselection-minvideobitspersecond */
  MinVideoBitsPerSecond?: number | Intrinsic
  /**
   * - Order in which the different video bitrates are presented to the player.
   * - Valid values: `ORIGINAL`, `VIDEO_BITRATE_ASCENDING`, `VIDEO_BITRATE_DESCENDING`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ORIGINAL | VIDEO_BITRATE_ASCENDING | VIDEO_BITRATE_DESCENDING`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-streamselection-streamorder */
  StreamOrder?: string | Intrinsic
}

/**
 * Use `encryptionContractConfiguration` to configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines the content keys used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use. For more information about these presets, see [SPEKE Version 2.0 Presets](https://docs.aws.amazon.com/mediapackage/latest/ug/drm-content-speke-v2-presets.html).
 * Note the following considerations when using `encryptionContractConfiguration`:
 * *   You can use `encryptionContractConfiguration` for DASH endpoints that use SPEKE Version 2.0. SPEKE Version 2.0 relies on the CPIX Version 2.3 specification.
 *
 * *   You cannot combine an `UNENCRYPTED` preset with `UNENCRYPTED` or `SHARED` presets across `presetSpeke20Audio` and `presetSpeke20Video`.
 *
 * *   When you use a `SHARED` preset, you must use it for both `presetSpeke20Audio` and `presetSpeke20Video`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html */

export interface EncryptionContractConfiguration {
  /**
   * - A collection of audio encryption presets.
   * - Value description:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `PRESET-AUDIO-1 | PRESET-AUDIO-2 | PRESET-AUDIO-3 | SHARED | UNENCRYPTED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-encryptioncontractconfiguration-presetspeke20audio */
  PresetSpeke20Audio: string | Intrinsic
  /**
   * - A collection of video encryption presets.
   * - Value description:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `PRESET-VIDEO-1 | PRESET-VIDEO-2 | PRESET-VIDEO-3 | PRESET-VIDEO-4 | PRESET-VIDEO-5 | PRESET-VIDEO-6 | PRESET-VIDEO-7 | PRESET-VIDEO-8 | SHARED | UNENCRYPTED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-encryptioncontractconfiguration-presetspeke20video */
  PresetSpeke20Video: string | Intrinsic
}

/**
 * Parameters for a packaging configuration that uses Dynamic Adaptive Streaming over HTTP (DASH) packaging.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html */

export interface DashPackage {
  /**
   * - A list of DASH manifest configurations that are available from this endpoint.
   * - _Required_: Yes
   * - _Type_: Array of [DashManifest](./aws-properties-mediapackage-packagingconfiguration-dashmanifest.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-dashpackage-dashmanifests */
  DashManifests: DashManifest[]
  /**
   * - Parameters for encrypting content.
   * - _Required_: No
   * - _Type_: [DashEncryption](./aws-properties-mediapackage-packagingconfiguration-dashencryption.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-dashpackage-encryption */
  Encryption?: DashEncryption
  /**
   * - When includeEncoderConfigurationInSegments is set to true, AWS Elemental MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-dashpackage-includeencoderconfigurationinsegments */
  IncludeEncoderConfigurationInSegments?: boolean | Intrinsic
  /**
   * - This applies only to stream sets with a single video track. When true, the stream set includes an additional I-frame trick-play only stream, along with the other tracks. If false, this extra stream is not included.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-dashpackage-includeiframeonlystream */
  IncludeIframeOnlyStream?: boolean | Intrinsic
  /**
   * - Controls whether AWS Elemental MediaPackage produces single-period or multi-period DASH manifests. For more information about periods, see [Multi-period DASH in AWS Elemental MediaPackage](https://docs.aws.amazon.com/mediapackage/latest/ug/multi-period.html).
   * - Valid values:
   * - _Required_: No
   * - _Type_: Array of String
   * - _Allowed values_: `ADS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-dashpackage-periodtriggers */
  PeriodTriggers?: (string | Intrinsic)[]
  /**
   * - Duration (in seconds) of each fragment. Actual fragments are rounded to the nearest multiple of the source segment duration.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-dashpackage-segmentdurationseconds */
  SegmentDurationSeconds?: number | Intrinsic
  /**
   * - Determines the type of SegmentTemplate included in the Media Presentation Description (MPD). When set to `NUMBER_WITH_TIMELINE`, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs. When set to `TIME_WITH_TIMELINE`, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to `NUMBER_WITH_DURATION`, only a duration is included in each SegmentTemplate, with $Number$ media URLs.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NUMBER_WITH_TIMELINE | TIME_WITH_TIMELINE | NUMBER_WITH_DURATION`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-dashpackage-segmenttemplateformat */
  SegmentTemplateFormat?: string | Intrinsic
}

/**
 * Parameters for a packaging configuration that uses HTTP Live Streaming (HLS) packaging.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html */

export interface HlsPackage {
  /**
   * - Parameters for encrypting content.
   * - _Required_: No
   * - _Type_: [HlsEncryption](./aws-properties-mediapackage-packagingconfiguration-hlsencryption.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-hlspackage-encryption */
  Encryption?: HlsEncryption
  /**
   * - A list of HLS manifest configurations that are available from this endpoint.
   * - _Required_: Yes
   * - _Type_: Array of [HlsManifest](./aws-properties-mediapackage-packagingconfiguration-hlsmanifest.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-hlspackage-hlsmanifests */
  HlsManifests: HlsManifest[]
  /**
   * - When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-hlspackage-includedvbsubtitles */
  IncludeDvbSubtitles?: boolean | Intrinsic
  /**
   * - Duration (in seconds) of each fragment. Actual fragments are rounded to the nearest multiple of the source fragment duration.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-hlspackage-segmentdurationseconds */
  SegmentDurationSeconds?: number | Intrinsic
  /**
   * - When true, AWS Elemental MediaPackage bundles all audio tracks in a rendition group. All other tracks in the stream can be used with any audio rendition from the group.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-hlspackage-useaudiorenditiongroup */
  UseAudioRenditionGroup?: boolean | Intrinsic
}

/**
 * Parameters for a packaging configuration that uses Microsoft Smooth Streaming (MSS) packaging.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html */

export interface MssPackage {
  /**
   * - Parameters for encrypting content.
   * - _Required_: No
   * - _Type_: [MssEncryption](./aws-properties-mediapackage-packagingconfiguration-mssencryption.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-msspackage-encryption */
  Encryption?: MssEncryption
  /**
   * - A list of Microsoft Smooth manifest configurations that are available from this endpoint.
   * - _Required_: Yes
   * - _Type_: Array of [MssManifest](./aws-properties-mediapackage-packagingconfiguration-mssmanifest.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-msspackage-mssmanifests */
  MssManifests: MssManifest[]
  /**
   * - Duration (in seconds) of each fragment. Actual fragments are rounded to the nearest multiple of the source fragment duration.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-msspackage-segmentdurationseconds */
  SegmentDurationSeconds?: number | Intrinsic
}

/**
 * Parameters for an HLS manifest.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html */

export interface HlsManifest {
  /**
   * - This setting controls ad markers in the packaged content.
   * - Valid values:
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | SCTE35_ENHANCED | PASSTHROUGH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-hlsmanifest-admarkers */
  AdMarkers?: string | Intrinsic
  /**
   * - Applies to stream sets with a single video track only. When enabled, the output includes an additional I-frame only stream, along with the other tracks.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-hlsmanifest-includeiframeonlystream */
  IncludeIframeOnlyStream?: boolean | Intrinsic
  /**
   * - A short string that's appended to the end of the endpoint URL to create a unique path to this packaging configuration.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-hlsmanifest-manifestname */
  ManifestName?: string | Intrinsic
  /**
   * - Inserts `EXT-X-PROGRAM-DATE-TIME` tags in the output manifest at the interval that you specify. Additionally, ID3Timed metadata messages are generated every 5 seconds starting when the content was ingested.
   * - Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.
   * - Omit this attribute or enter `0` to indicate that the `EXT-X-PROGRAM-DATE-TIME` tags are not included in the manifest.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-hlsmanifest-programdatetimeintervalseconds */
  ProgramDateTimeIntervalSeconds?: number | Intrinsic
  /**
   * - Repeat the `EXT-X-KEY` directive for every media segment. This might result in an increase in client requests to the DRM server.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-hlsmanifest-repeatextxkey */
  RepeatExtXKey?: boolean | Intrinsic
  /**
   * - Video bitrate limitations for outputs from this packaging configuration.
   * - _Required_: No
   * - _Type_: [StreamSelection](./aws-properties-mediapackage-packagingconfiguration-streamselection.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-hlsmanifest-streamselection */
  StreamSelection?: StreamSelection
}

/**
 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that provides encryption keys.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html */

export interface SpekeKeyProvider {
  /**
   * - Use `encryptionContractConfiguration` to configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use.
   * - _Required_: No
   * - _Type_: [EncryptionContractConfiguration](./aws-properties-mediapackage-packagingconfiguration-encryptioncontractconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-spekekeyprovider-encryptioncontractconfiguration */
  EncryptionContractConfiguration?: EncryptionContractConfiguration
  /**
   * - The ARN for the IAM role that's granted by the key provider to provide access to the key provider API. Valid format: arn:aws:iam::{accountID}:role/{name}
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-spekekeyprovider-rolearn */
  RoleArn: string | Intrinsic
  /**
   * - List of unique identifiers for the DRM systems to use, as defined in the CPIX specification.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-spekekeyprovider-systemids */
  SystemIds: (string | Intrinsic)[]
  /**
   * - URL for the key provider's key retrieval API endpoint. Must start with https://.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-spekekeyprovider-url */
  Url: string | Intrinsic
}

/**
 * Holds encryption information so that access to the content can be controlled by a DRM solution.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html */

export interface CmafEncryption {
  /**
   * - Parameters for the SPEKE key provider.
   * - _Required_: Yes
   * - _Type_: [SpekeKeyProvider](./aws-properties-mediapackage-packagingconfiguration-spekekeyprovider.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-cmafencryption-spekekeyprovider */
  SpekeKeyProvider: SpekeKeyProvider
}

/**
 * Parameters for a packaging configuration that uses Common Media Application Format (CMAF) packaging.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html */

export interface CmafPackage {
  /**
   * - Parameters for encrypting content.
   * - _Required_: No
   * - _Type_: [CmafEncryption](./aws-properties-mediapackage-packagingconfiguration-cmafencryption.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-cmafpackage-encryption */
  Encryption?: CmafEncryption
  /**
   * - A list of HLS manifest configurations that are available from this endpoint.
   * - _Required_: Yes
   * - _Type_: Array of [HlsManifest](./aws-properties-mediapackage-packagingconfiguration-hlsmanifest.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-cmafpackage-hlsmanifests */
  HlsManifests: HlsManifest[]
  /**
   * - When includeEncoderConfigurationInSegments is set to true, AWS Elemental MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-cmafpackage-includeencoderconfigurationinsegments */
  IncludeEncoderConfigurationInSegments?: boolean | Intrinsic
  /**
   * - Duration (in seconds) of each segment. Actual segments are rounded to the nearest multiple of the source fragment duration.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-cmafpackage-segmentdurationseconds */
  SegmentDurationSeconds?: number | Intrinsic
}

/**
 * Creates a packaging configuration in a packaging group.
 * The packaging configuration represents a single delivery point for an asset. It determines the format and setting for the egressing content. Specify only one package format per configuration, such as `HlsPackage`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html */

export interface MediaPackagePackagingConfiguration extends ResourceAttributes {
  Type: 'AWS::MediaPackage::PackagingConfiguration'
  Properties: {
    /**
     * - Parameters for CMAF packaging.
     * - _Required_: No
     * - _Type_: [CmafPackage](./aws-properties-mediapackage-packagingconfiguration-cmafpackage.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-cmafpackage */
    CmafPackage?: CmafPackage
    /**
     * - Parameters for DASH-ISO packaging.
     * - _Required_: No
     * - _Type_: [DashPackage](./aws-properties-mediapackage-packagingconfiguration-dashpackage.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-dashpackage */
    DashPackage?: DashPackage
    /**
     * - Parameters for Apple HLS packaging.
     * - _Required_: No
     * - _Type_: [HlsPackage](./aws-properties-mediapackage-packagingconfiguration-hlspackage.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-hlspackage */
    HlsPackage?: HlsPackage
    /**
     * - Unique identifier that you assign to the packaging configuration.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-id */
    Id: string | Intrinsic
    /**
     * - Parameters for Microsoft Smooth Streaming packaging.
     * - _Required_: No
     * - _Type_: [MssPackage](./aws-properties-mediapackage-packagingconfiguration-msspackage.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-msspackage */
    MssPackage?: MssPackage
    /**
     * - The ID of the packaging group associated with this packaging configuration.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-packaginggroupid */
    PackagingGroupId: string | Intrinsic
    /**
     * - The tags to assign to the packaging configuration.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-mediapackage-packagingconfiguration-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html#cfn-mediapackage-packagingconfiguration-tags */
    Tags?: Tag[]
  }
}
