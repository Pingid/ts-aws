import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The RenditionConfiguration property type describes which renditions should be recorded for a stream.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html */

export interface RenditionConfiguration {
    /**
     * - A list of which renditions are recorded for a stream, if `renditionSelection` is `CUSTOM`; otherwise, this field is irrelevant. The selected renditions are recorded if they are available during the stream. If a selected rendition is unavailable, the best available rendition is recorded. For details on the resolution dimensions of each rendition, see [Auto-Record to Amazon S3](https://docs.aws.amazon.com/ivs/latest/LowLatencyUserGuide/record-to-s3.html).
     * - _Required_: No
     * - _Type_: Array of String
     * - _Allowed values_: `FULL_HD | HD | SD | LOWEST_RESOLUTION`
     * - _Minimum_: `0`
     * - _Maximum_: `4`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-renditionconfiguration-renditions */
    "Renditions"?: (string | Intrinsic)[];
    /**
     * - The set of renditions are recorded for a stream. For `BASIC` channels, the `CUSTOM` value has no effect. If `CUSTOM` is specified, a set of renditions can be specified in the `renditions` field. Default: `ALL`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ALL | NONE | CUSTOM`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-renditionconfiguration-renditionselection */
    "RenditionSelection"?: string | Intrinsic;
}

/**
 * A key-value pair that you can use to categorize and manage Amazon IVS RecordingConfigurations.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html */

export interface Tag {
    /**
     * - One part of a key-value pair that makes up a tag. A `key` is a general label that acts like a category for more specific tag values.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The optional part of a key-value pair that makes up a tag. A `value` acts as a descriptor within a tag category (key).
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The ThumbnailConfiguration property type describes a configuration of thumbnails for recorded video.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html */

export interface ThumbnailConfiguration {
    /**
     * - Thumbnail recording mode. Valid values:
     * - _Default_: `INTERVAL`
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `INTERVAL | DISABLED`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-thumbnailconfiguration-recordingmode */
    "RecordingMode"?: string | Intrinsic;
    /**
     * - The desired resolution of recorded thumbnails for a stream. Thumbnails are recorded at the selected resolution if the corresponding rendition is available during the stream; otherwise, they are recorded at source resolution. For more information about resolution values and their corresponding height and width dimensions, see [Auto-Record to Amazon S3](https://docs.aws.amazon.com/ivs/latest/LowLatencyUserGuide/record-to-s3.html).
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `FULL_HD | HD | SD | LOWEST_RESOLUTION`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-thumbnailconfiguration-resolution */
    "Resolution"?: string | Intrinsic;
    /**
     * - The format in which thumbnails are recorded for a stream. `SEQUENTIAL` records all generated thumbnails in a serial manner, to the media/thumbnails directory. `LATEST` saves the latest thumbnail in media/thumbnails/latest/thumb.jpg and overwrites it at the interval specified by `targetIntervalSeconds`. You can enable both `SEQUENTIAL` and `LATEST`. Default: `SEQUENTIAL`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Allowed values_: `SEQUENTIAL | LATEST`
     * - _Minimum_: `0`
     * - _Maximum_: `2`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-thumbnailconfiguration-storage */
    "Storage"?: (string | Intrinsic)[];
    /**
     * - The targeted thumbnail-generation interval in seconds. This is configurable (and required) only if [RecordingMode](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-thumbnailconfiguration.html#cfn-ivs-recordingconfiguration-thumbnailconfiguration-recordingmode) is `INTERVAL`.
     * - _Default_: 60
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `60`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-thumbnailconfiguration-targetintervalseconds */
    "TargetIntervalSeconds"?: number | Intrinsic;
}

/**
 * The S3DestinationConfiguration property type describes an S3 location where recorded videos will be stored.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html */

export interface S3DestinationConfiguration {
    /**
     * - Location (S3 bucket name) where recorded videos will be stored.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-z0-9-.]+$`
     * - _Minimum_: `3`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-s3destinationconfiguration-bucketname */
    "BucketName": string | Intrinsic;
}

/**
 * The DestinationConfiguration property type describes the location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html */

export interface DestinationConfiguration {
    /**
     * - An S3 destination configuration where recorded videos will be stored. See the [S3DestinationConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-s3destinationconfiguration.html) property type for more information.
     * - _Required_: No
     * - _Type_: [S3DestinationConfiguration](./aws-properties-ivs-recordingconfiguration-s3destinationconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-destinationconfiguration-s3 */
    "S3"?: S3DestinationConfiguration;
}

/**
 * The `AWS::IVS::RecordingConfiguration` resource specifies an Amazon IVS recording configuration. A recording configuration enables the recording of a channel’s live streams to a data store. Multiple channels can reference the same recording configuration. For more information, see [RecordingConfiguration](https://docs.aws.amazon.com/ivs/latest/LowLatencyAPIReference/API_RecordingConfiguration.html) in the _Amazon IVS Low-Latency Streaming API Reference_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html */

export interface IVSRecordingConfiguration extends ResourceAttributes {
    "Type": "AWS::IVS::RecordingConfiguration";
    "Properties": {
        /**
         * - A destination configuration describes an S3 bucket where recorded video will be stored. See the [DestinationConfiguration](./aws-properties-ivs-recordingconfiguration-destinationconfiguration.html) property type for more information.
         * - _Required_: Yes
         * - _Type_: [DestinationConfiguration](./aws-properties-ivs-recordingconfiguration-destinationconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-destinationconfiguration */
        "DestinationConfiguration": DestinationConfiguration;
        /**
         * - Recording-configuration name. The value does not need to be unique.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9-_]*$`
         * - _Minimum_: `0`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-name */
        "Name"?: string | Intrinsic;
        /**
         * - If a broadcast disconnects and then reconnects within the specified interval, the multiple streams will be considered a single broadcast and merged together.
         * - _Default_: `0`
         * - _Required_: No
         * - _Type_: Integer
         * - _Minimum_: `0`
         * - _Maximum_: `300`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-recordingreconnectwindowseconds */
        "RecordingReconnectWindowSeconds"?: number | Intrinsic;
        /**
         * - A rendition configuration describes which renditions should be recorded for a stream. See the [RenditionConfiguration](./aws-properties-ivs-recordingconfiguration-renditionconfiguration.html) property type for more information.
         * - _Required_: No
         * - _Type_: [RenditionConfiguration](./aws-properties-ivs-recordingconfiguration-renditionconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-renditionconfiguration */
        "RenditionConfiguration"?: RenditionConfiguration;
        /**
         * - An array of key-value pairs to apply to this resource.
         * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-tag.html).
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-ivs-recordingconfiguration-tag.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-tags */
        "Tags"?: Tag[];
        /**
         * - A thumbnail configuration enables/disables the recording of thumbnails for a live session and controls the interval at which thumbnails are generated for the live session. See the [ThumbnailConfiguration](./aws-properties-ivs-recordingconfiguration-thumbnailconfiguration.html) property type for more information.
         * - _Required_: No
         * - _Type_: [ThumbnailConfiguration](./aws-properties-ivs-recordingconfiguration-thumbnailconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html#cfn-ivs-recordingconfiguration-thumbnailconfiguration */
        "ThumbnailConfiguration"?: ThumbnailConfiguration;
    };
}