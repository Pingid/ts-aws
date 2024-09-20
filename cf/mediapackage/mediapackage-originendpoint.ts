import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Parameters for enabling CDN authorization on the endpoint.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html */

export interface Authorization {
  /**
   * - The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that your Content Delivery Network (CDN) uses for authorization to access your endpoint.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-authorization-cdnidentifiersecret */
  CdnIdentifierSecret: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) for the IAM role that allows AWS Elemental MediaPackage to communicate with AWS Secrets Manager.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-authorization-secretsrolearn */
  SecretsRoleArn: string | Intrinsic
}

/**
 * The `Tag` property type specifies Property description not available. for an [AWS::MediaPackage::OriginEndpoint](./aws-resource-mediapackage-originendpoint.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-tag-value */
  Value: string | Intrinsic
}

/**
 * An HTTP Live Streaming (HLS) manifest configuration on a CMAF endpoint.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html */

export interface HlsManifest {
  /**
   * - Controls how ad markers are included in the packaged endpoint.
   * - Valid values:
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | SCTE35_ENHANCED | PASSTHROUGH | DATERANGE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlsmanifest-admarkers */
  AdMarkers?: string | Intrinsic
  /**
   * - The flags on SCTE-35 segmentation descriptors that have to be present for AWS Elemental MediaPackage to insert ad markers in the output manifest. For information about SCTE-35 in AWS Elemental MediaPackage, see [SCTE-35 Message Options in AWS Elemental MediaPackage](https://docs.aws.amazon.com/mediapackage/latest/ug/scte.html).
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | RESTRICTED | UNRESTRICTED | BOTH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlsmanifest-adsondeliveryrestrictions */
  AdsOnDeliveryRestrictions?: string | Intrinsic
  /**
   * - Specifies the SCTE-35 message types that AWS Elemental MediaPackage treats as ad markers in the output manifest.
   * - Valid values:
   * - _Required_: No
   * - _Type_: Array of String
   * - _Allowed values_: `SPLICE_INSERT | BREAK | PROVIDER_ADVERTISEMENT | DISTRIBUTOR_ADVERTISEMENT | PROVIDER_PLACEMENT_OPPORTUNITY | DISTRIBUTOR_PLACEMENT_OPPORTUNITY | PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY | DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlsmanifest-adtriggers */
  AdTriggers?: (string | Intrinsic)[]
  /**
   * - The manifest ID is required and must be unique within the OriginEndpoint. The ID can't be changed after the endpoint is created.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlsmanifest-id */
  Id: string | Intrinsic
  /**
   * - Applies to stream sets with a single video track only. When true, the stream set includes an additional I-frame only stream, along with the other tracks. If false, this extra stream is not included.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlsmanifest-includeiframeonlystream */
  IncludeIframeOnlyStream?: boolean | Intrinsic
  /**
   * - A short string that's appended to the end of the endpoint URL to create a unique path to this endpoint. The manifestName on the HLSManifest object overrides the manifestName that you provided on the originEndpoint object.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlsmanifest-manifestname */
  ManifestName?: string | Intrinsic
  /**
   * - When specified as either `event` or `vod`, a corresponding `EXT-X-PLAYLIST-TYPE` entry is included in the media playlist. Indicates if the playlist is live-to-VOD content.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | EVENT | VOD`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlsmanifest-playlisttype */
  PlaylistType?: string | Intrinsic
  /**
   * - Time window (in seconds) contained in each parent manifest.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlsmanifest-playlistwindowseconds */
  PlaylistWindowSeconds?: number | Intrinsic
  /**
   * - Inserts `EXT-X-PROGRAM-DATE-TIME` tags in the output manifest at the interval that you specify. Additionally, ID3Timed metadata messages are generated every 5 seconds starting when the content was ingested.
   * - Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.
   * - Omit this attribute or enter `0` to indicate that the `EXT-X-PROGRAM-DATE-TIME` tags are not included in the manifest.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlsmanifest-programdatetimeintervalseconds */
  ProgramDateTimeIntervalSeconds?: number | Intrinsic
  /**
   * - The URL that's used to request this manifest from this endpoint.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlsmanifest-url */
  Url?: string | Intrinsic
}

/**
 * Limitations for outputs from the endpoint, based on the video bitrate.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html */

export interface StreamSelection {
  /**
   * - The upper limit of the bitrates that this endpoint serves. If the video track exceeds this threshold, then AWS Elemental MediaPackage excludes it from output. If you don't specify a value, it defaults to 2147483647 bits per second.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-streamselection-maxvideobitspersecond */
  MaxVideoBitsPerSecond?: number | Intrinsic
  /**
   * - The lower limit of the bitrates that this endpoint serves. If the video track is below this threshold, then AWS Elemental MediaPackage excludes it from output. If you don't specify a value, it defaults to 0 bits per second.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-streamselection-minvideobitspersecond */
  MinVideoBitsPerSecond?: number | Intrinsic
  /**
   * - Order in which the different video bitrates are presented to the player.
   * - Valid values: `ORIGINAL`, `VIDEO_BITRATE_ASCENDING`, `VIDEO_BITRATE_DESCENDING`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ORIGINAL | VIDEO_BITRATE_ASCENDING | VIDEO_BITRATE_DESCENDING`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-streamselection-streamorder */
  StreamOrder?: string | Intrinsic
}

/**
 * Holds encryption information so that access to the content can be controlled by a DRM solution.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html */

export interface DashEncryption {
  /**
   * - Number of seconds before AWS Elemental MediaPackage rotates to a new key. By default, rotation is set to 60 seconds. Set to `0` to disable key rotation.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-dashencryption-keyrotationintervalseconds */
  KeyRotationIntervalSeconds?: number | Intrinsic
  /**
   * - Parameters for the SPEKE key provider.
   * - _Required_: Yes
   * - _Type_: [SpekeKeyProvider](./aws-properties-mediapackage-originendpoint-spekekeyprovider.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-dashencryption-spekekeyprovider */
  SpekeKeyProvider: SpekeKeyProvider
}

/**
 * Holds encryption information so that access to the content can be controlled by a DRM solution.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html */

export interface HlsEncryption {
  /**
   * - A 128-bit, 16-byte hex value represented by a 32-character string, used with the key for encrypting blocks.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlsencryption-constantinitializationvector */
  ConstantInitializationVector?: string | Intrinsic
  /**
   * - HLS encryption type.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `AES_128 | SAMPLE_AES`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlsencryption-encryptionmethod */
  EncryptionMethod?: string | Intrinsic
  /**
   * - Number of seconds before AWS Elemental MediaPackage rotates to a new key. By default, rotation is set to 60 seconds. Set to `0` to disable key rotation.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlsencryption-keyrotationintervalseconds */
  KeyRotationIntervalSeconds?: number | Intrinsic
  /**
   * - Repeat the `EXT-X-KEY` directive for every media segment. This might result in an increase in client requests to the DRM server.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlsencryption-repeatextxkey */
  RepeatExtXKey?: boolean | Intrinsic
  /**
   * - Parameters for the SPEKE key provider.
   * - _Required_: Yes
   * - _Type_: [SpekeKeyProvider](./aws-properties-mediapackage-originendpoint-spekekeyprovider.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlsencryption-spekekeyprovider */
  SpekeKeyProvider: SpekeKeyProvider
}

/**
 * Holds encryption information so that access to the content can be controlled by a DRM solution.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html */

export interface MssEncryption {
  /**
   * - Parameters for the SPEKE key provider.
   * - _Required_: Yes
   * - _Type_: [SpekeKeyProvider](./aws-properties-mediapackage-originendpoint-spekekeyprovider.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-mssencryption-spekekeyprovider */
  SpekeKeyProvider: SpekeKeyProvider
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
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html */

export interface EncryptionContractConfiguration {
  /**
   * - A collection of audio encryption presets.
   * - Value description:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `PRESET-AUDIO-1 | PRESET-AUDIO-2 | PRESET-AUDIO-3 | SHARED | UNENCRYPTED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-encryptioncontractconfiguration-presetspeke20audio */
  PresetSpeke20Audio: string | Intrinsic
  /**
   * - A collection of video encryption presets.
   * - Value description:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `PRESET-VIDEO-1 | PRESET-VIDEO-2 | PRESET-VIDEO-3 | PRESET-VIDEO-4 | PRESET-VIDEO-5 | PRESET-VIDEO-6 | PRESET-VIDEO-7 | PRESET-VIDEO-8 | SHARED | UNENCRYPTED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-encryptioncontractconfiguration-presetspeke20video */
  PresetSpeke20Video: string | Intrinsic
}

/**
 * Parameters for DASH packaging.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html */

export interface DashPackage {
  /**
   * - The flags on SCTE-35 segmentation descriptors that have to be present for AWS Elemental MediaPackage to insert ad markers in the output manifest. For information about SCTE-35 in AWS Elemental MediaPackage, see [SCTE-35 Message Options in AWS Elemental MediaPackage](https://docs.aws.amazon.com/mediapackage/latest/ug/scte.html).
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | RESTRICTED | UNRESTRICTED | BOTH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-dashpackage-adsondeliveryrestrictions */
  AdsOnDeliveryRestrictions?: string | Intrinsic
  /**
   * - Specifies the SCTE-35 message types that AWS Elemental MediaPackage treats as ad markers in the output manifest.
   * - Valid values:
   * - _Required_: No
   * - _Type_: Array of String
   * - _Allowed values_: `SPLICE_INSERT | BREAK | PROVIDER_ADVERTISEMENT | DISTRIBUTOR_ADVERTISEMENT | PROVIDER_PLACEMENT_OPPORTUNITY | DISTRIBUTOR_PLACEMENT_OPPORTUNITY | PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY | DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-dashpackage-adtriggers */
  AdTriggers?: (string | Intrinsic)[]
  /**
   * - Parameters for encrypting content.
   * - _Required_: No
   * - _Type_: [DashEncryption](./aws-properties-mediapackage-originendpoint-dashencryption.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-dashpackage-encryption */
  Encryption?: DashEncryption
  /**
   * - This applies only to stream sets with a single video track. When true, the stream set includes an additional I-frame trick-play only stream, along with the other tracks. If false, this extra stream is not included.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-dashpackage-includeiframeonlystream */
  IncludeIframeOnlyStream?: boolean | Intrinsic
  /**
   * - Determines the position of some tags in the manifest.
   * - Valid values:
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `FULL | COMPACT | DRM_TOP_LEVEL_COMPACT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-dashpackage-manifestlayout */
  ManifestLayout?: string | Intrinsic
  /**
   * - Time window (in seconds) contained in each manifest.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-dashpackage-manifestwindowseconds */
  ManifestWindowSeconds?: number | Intrinsic
  /**
   * - Minimum amount of content (measured in seconds) that a player must keep available in the buffer.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-dashpackage-minbuffertimeseconds */
  MinBufferTimeSeconds?: number | Intrinsic
  /**
   * - Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-dashpackage-minupdateperiodseconds */
  MinUpdatePeriodSeconds?: number | Intrinsic
  /**
   * - Controls whether AWS Elemental MediaPackage produces single-period or multi-period DASH manifests. For more information about periods, see [Multi-period DASH in AWS Elemental MediaPackage](https://docs.aws.amazon.com/mediapackage/latest/ug/multi-period.html).
   * - Valid values:
   * - _Required_: No
   * - _Type_: Array of String
   * - _Allowed values_: `ADS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-dashpackage-periodtriggers */
  PeriodTriggers?: (string | Intrinsic)[]
  /**
   * - The DASH profile for the output.
   * - Valid values:
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | HBBTV_1_5 | HYBRIDCAST | DVB_DASH_2014`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-dashpackage-profile */
  Profile?: string | Intrinsic
  /**
   * - Duration (in seconds) of each fragment. Actual fragments are rounded to the nearest multiple of the source fragment duration.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-dashpackage-segmentdurationseconds */
  SegmentDurationSeconds?: number | Intrinsic
  /**
   * - Determines the type of variable used in the `media` URL of the `SegmentTemplate` tag in the manifest. Also specifies if segment timeline information is included in `SegmentTimeline` or `SegmentTemplate`.
   * - Valid values:
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NUMBER_WITH_TIMELINE | TIME_WITH_TIMELINE | NUMBER_WITH_DURATION`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-dashpackage-segmenttemplateformat */
  SegmentTemplateFormat?: string | Intrinsic
  /**
   * - Limitations for outputs from the endpoint, based on the video bitrate.
   * - _Required_: No
   * - _Type_: [StreamSelection](./aws-properties-mediapackage-originendpoint-streamselection.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-dashpackage-streamselection */
  StreamSelection?: StreamSelection
  /**
   * - Amount of time (in seconds) that the player should be from the live point at the end of the manifest.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-dashpackage-suggestedpresentationdelayseconds */
  SuggestedPresentationDelaySeconds?: number | Intrinsic
  /**
   * - Determines the type of UTC timing included in the DASH Media Presentation Description (MPD).
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `HTTP-XSDATE | HTTP-ISO | HTTP-HEAD | NONE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-dashpackage-utctiming */
  UtcTiming?: string | Intrinsic
  /**
   * - Specifies the value attribute of the UTC timing field when utcTiming is set to HTTP-ISO or HTTP-HEAD.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-dashpackage-utctiminguri */
  UtcTimingUri?: string | Intrinsic
}

/**
 * Parameters for Apple HLS packaging.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html */

export interface HlsPackage {
  /**
   * - Controls how ad markers are included in the packaged endpoint.
   * - Valid values:
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | SCTE35_ENHANCED | PASSTHROUGH | DATERANGE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlspackage-admarkers */
  AdMarkers?: string | Intrinsic
  /**
   * - The flags on SCTE-35 segmentation descriptors that have to be present for AWS Elemental MediaPackage to insert ad markers in the output manifest. For information about SCTE-35 in AWS Elemental MediaPackage, see [SCTE-35 Message Options in AWS Elemental MediaPackage](https://docs.aws.amazon.com/mediapackage/latest/ug/scte.html).
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | RESTRICTED | UNRESTRICTED | BOTH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlspackage-adsondeliveryrestrictions */
  AdsOnDeliveryRestrictions?: string | Intrinsic
  /**
   * - Specifies the SCTE-35 message types that AWS Elemental MediaPackage treats as ad markers in the output manifest.
   * - Valid values:
   * - _Required_: No
   * - _Type_: Array of String
   * - _Allowed values_: `SPLICE_INSERT | BREAK | PROVIDER_ADVERTISEMENT | DISTRIBUTOR_ADVERTISEMENT | PROVIDER_PLACEMENT_OPPORTUNITY | DISTRIBUTOR_PLACEMENT_OPPORTUNITY | PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY | DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlspackage-adtriggers */
  AdTriggers?: (string | Intrinsic)[]
  /**
   * - Parameters for encrypting content.
   * - _Required_: No
   * - _Type_: [HlsEncryption](./aws-properties-mediapackage-originendpoint-hlsencryption.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlspackage-encryption */
  Encryption?: HlsEncryption
  /**
   * - When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlspackage-includedvbsubtitles */
  IncludeDvbSubtitles?: boolean | Intrinsic
  /**
   * - Only applies to stream sets with a single video track. When true, the stream set includes an additional I-frame only stream, along with the other tracks. If false, this extra stream is not included.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlspackage-includeiframeonlystream */
  IncludeIframeOnlyStream?: boolean | Intrinsic
  /**
   * - When specified as either `event` or `vod`, a corresponding `EXT-X-PLAYLIST-TYPE` entry is included in the media playlist. Indicates if the playlist is live-to-VOD content.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | EVENT | VOD`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlspackage-playlisttype */
  PlaylistType?: string | Intrinsic
  /**
   * - Time window (in seconds) contained in each parent manifest.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlspackage-playlistwindowseconds */
  PlaylistWindowSeconds?: number | Intrinsic
  /**
   * - Inserts `EXT-X-PROGRAM-DATE-TIME` tags in the output manifest at the interval that you specify. Additionally, ID3Timed metadata messages are generated every 5 seconds starting when the content was ingested.
   * - Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.
   * - Omit this attribute or enter `0` to indicate that the `EXT-X-PROGRAM-DATE-TIME` tags are not included in the manifest.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlspackage-programdatetimeintervalseconds */
  ProgramDateTimeIntervalSeconds?: number | Intrinsic
  /**
   * - Duration (in seconds) of each fragment. Actual fragments are rounded to the nearest multiple of the source fragment duration.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlspackage-segmentdurationseconds */
  SegmentDurationSeconds?: number | Intrinsic
  /**
   * - Limitations for outputs from the endpoint, based on the video bitrate.
   * - _Required_: No
   * - _Type_: [StreamSelection](./aws-properties-mediapackage-originendpoint-streamselection.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlspackage-streamselection */
  StreamSelection?: StreamSelection
  /**
   * - When true, AWS Elemental MediaPackage bundles all audio tracks in a rendition group. All other tracks in the stream can be used with any audio rendition from the group.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlspackage-useaudiorenditiongroup */
  UseAudioRenditionGroup?: boolean | Intrinsic
}

/**
 * Parameters for Microsoft Smooth Streaming packaging.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html */

export interface MssPackage {
  /**
   * - Parameters for encrypting content.
   * - _Required_: No
   * - _Type_: [MssEncryption](./aws-properties-mediapackage-originendpoint-mssencryption.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-msspackage-encryption */
  Encryption?: MssEncryption
  /**
   * - Time window (in seconds) contained in each manifest.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-msspackage-manifestwindowseconds */
  ManifestWindowSeconds?: number | Intrinsic
  /**
   * - Duration (in seconds) of each fragment. Actual fragments are rounded to the nearest multiple of the source fragment duration.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-msspackage-segmentdurationseconds */
  SegmentDurationSeconds?: number | Intrinsic
  /**
   * - Limitations for outputs from the endpoint, based on the video bitrate.
   * - _Required_: No
   * - _Type_: [StreamSelection](./aws-properties-mediapackage-originendpoint-streamselection.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-msspackage-streamselection */
  StreamSelection?: StreamSelection
}

/**
 * Key provider settings for DRM.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html */

export interface SpekeKeyProvider {
  /**
   * - The Amazon Resource Name (ARN) for the certificate that you imported to AWS Certificate Manager to add content key encryption to this endpoint. For this feature to work, your DRM key provider must support content key encryption.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-spekekeyprovider-certificatearn */
  CertificateArn?: string | Intrinsic
  /**
   * - Use `encryptionContractConfiguration` to configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use.
   * - _Required_: No
   * - _Type_: [EncryptionContractConfiguration](./aws-properties-mediapackage-originendpoint-encryptioncontractconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-spekekeyprovider-encryptioncontractconfiguration */
  EncryptionContractConfiguration?: EncryptionContractConfiguration
  /**
   * - Unique identifier for this endpoint, as it is configured in the key provider service.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-spekekeyprovider-resourceid */
  ResourceId: string | Intrinsic
  /**
   * - The ARN for the IAM role that's granted by the key provider to provide access to the key provider API. This role must have a trust policy that allows AWS Elemental MediaPackage to assume the role, and it must have a sufficient permissions policy to allow access to the specific key retrieval URL. Valid format: arn:aws:iam::{accountID}:role/{name}
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-spekekeyprovider-rolearn */
  RoleArn: string | Intrinsic
  /**
   * - List of unique identifiers for the DRM systems to use, as defined in the CPIX specification.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-spekekeyprovider-systemids */
  SystemIds: (string | Intrinsic)[]
  /**
   * - URL for the key provider’s key retrieval API endpoint. Must start with https://.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-spekekeyprovider-url */
  Url: string | Intrinsic
}

/**
 * Holds encryption information so that access to the content can be controlled by a DRM solution.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html */

export interface CmafEncryption {
  /**
   * - An optional 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting blocks. If you don't specify a value, then AWS Elemental MediaPackage creates the constant initialization vector (IV).
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\A[0-9a-fA-F]+\Z`
   * - _Minimum_: `32`
   * - _Maximum_: `32`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-cmafencryption-constantinitializationvector */
  ConstantInitializationVector?: string | Intrinsic
  /**
   * - The encryption method to use.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SAMPLE_AES | AES_CTR`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-cmafencryption-encryptionmethod */
  EncryptionMethod?: string | Intrinsic
  /**
   * - Number of seconds before AWS Elemental MediaPackage rotates to a new key. By default, rotation is set to 60 seconds. Set to `0` to disable key rotation.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-cmafencryption-keyrotationintervalseconds */
  KeyRotationIntervalSeconds?: number | Intrinsic
  /**
   * - Parameters for the SPEKE key provider.
   * - _Required_: Yes
   * - _Type_: [SpekeKeyProvider](./aws-properties-mediapackage-originendpoint-spekekeyprovider.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-cmafencryption-spekekeyprovider */
  SpekeKeyProvider: SpekeKeyProvider
}

/**
 * Parameters for Common Media Application Format (CMAF) packaging.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html */

export interface CmafPackage {
  /**
   * - Parameters for encrypting content.
   * - _Required_: No
   * - _Type_: [CmafEncryption](./aws-properties-mediapackage-originendpoint-cmafencryption.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-cmafpackage-encryption */
  Encryption?: CmafEncryption
  /**
   * - A list of HLS manifest configurations that are available from this endpoint.
   * - _Required_: No
   * - _Type_: Array of [HlsManifest](./aws-properties-mediapackage-originendpoint-hlsmanifest.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-cmafpackage-hlsmanifests */
  HlsManifests?: HlsManifest[]
  /**
   * - Duration (in seconds) of each segment. Actual segments are rounded to the nearest multiple of the source segment duration.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-cmafpackage-segmentdurationseconds */
  SegmentDurationSeconds?: number | Intrinsic
  /**
   * - An optional custom string that is prepended to the name of each segment. If not specified, the segment prefix defaults to the ChannelId.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-cmafpackage-segmentprefix */
  SegmentPrefix?: string | Intrinsic
  /**
   * - Limitations for outputs from the endpoint, based on the video bitrate.
   * - _Required_: No
   * - _Type_: [StreamSelection](./aws-properties-mediapackage-originendpoint-streamselection.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-cmafpackage-streamselection */
  StreamSelection?: StreamSelection
}

/**
 * Create an endpoint on an AWS Elemental MediaPackage channel.
 * An endpoint represents a single delivery point of a channel, and defines content output handling through various components, such as packaging protocols, DRM and encryption integration, and more.
 * After it's created, an endpoint provides a fixed public URL. This URL remains the same throughout the lifetime of the endpoint, regardless of any failures or upgrades that might occur. Integrate the URL with a downstream CDN (such as Amazon CloudFront) or playback device.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html */

export interface MediaPackageOriginEndpoint extends ResourceAttributes {
  Type: 'AWS::MediaPackage::OriginEndpoint'
  Properties: {
    /**
     * - Parameters for CDN authorization.
     * - _Required_: No
     * - _Type_: [Authorization](./aws-properties-mediapackage-originendpoint-authorization.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-authorization */
    Authorization?: Authorization
    /**
     * - The ID of the channel associated with this endpoint.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-channelid */
    ChannelId: string | Intrinsic
    /**
     * - Parameters for Common Media Application Format (CMAF) packaging.
     * - _Required_: No
     * - _Type_: [CmafPackage](./aws-properties-mediapackage-originendpoint-cmafpackage.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-cmafpackage */
    CmafPackage?: CmafPackage
    /**
     * - Parameters for DASH packaging.
     * - _Required_: No
     * - _Type_: [DashPackage](./aws-properties-mediapackage-originendpoint-dashpackage.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-dashpackage */
    DashPackage?: DashPackage
    /**
     * - Any descriptive information that you want to add to the endpoint for future identification purposes.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-description */
    Description?: string | Intrinsic
    /**
     * - Parameters for Apple HLS packaging.
     * - _Required_: No
     * - _Type_: [HlsPackage](./aws-properties-mediapackage-originendpoint-hlspackage.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-hlspackage */
    HlsPackage?: HlsPackage
    /**
     * - The manifest ID is required and must be unique within the OriginEndpoint. The ID can't be changed after the endpoint is created.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `\A[0-9a-zA-Z-_]+\Z`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-id */
    Id: string | Intrinsic
    /**
     * - A short string that's appended to the end of the endpoint URL to create a unique path to this endpoint.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-manifestname */
    ManifestName?: string | Intrinsic
    /**
     * - Parameters for Microsoft Smooth Streaming packaging.
     * - _Required_: No
     * - _Type_: [MssPackage](./aws-properties-mediapackage-originendpoint-msspackage.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-msspackage */
    MssPackage?: MssPackage
    /**
     * - Controls video origination from this endpoint.
     * - Valid values:
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ALLOW | DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-origination */
    Origination?: string | Intrinsic
    /**
     * - Maximum duration (seconds) of content to retain for startover playback. Omit this attribute or enter `0` to indicate that startover playback is disabled for this endpoint.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-startoverwindowseconds */
    StartoverWindowSeconds?: number | Intrinsic
    /**
     * - The tags to assign to the endpoint.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-mediapackage-originendpoint-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-tags */
    Tags?: Tag[]
    /**
     * - Minimum duration (seconds) of delay to enforce on the playback of live content. Omit this attribute or enter `0` to indicate that there is no time delay in effect for this endpoint.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-timedelayseconds */
    TimeDelaySeconds?: number | Intrinsic
    /**
     * - The IP addresses that can access this endpoint.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html#cfn-mediapackage-originendpoint-whitelist */
    Whitelist?: (string | Intrinsic)[]
  }
}
