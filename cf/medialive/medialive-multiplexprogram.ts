import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The current source for one of the pipelines in the multiplex.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html */

export interface MultiplexProgramPipelineDetail {
    /**
     * - Identifies the channel pipeline that is currently active for the pipeline (identified by PipelineId) in the multiplex.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogrampipelinedetail-activechannelpipeline */
    "ActiveChannelPipeline"?: string | Intrinsic;
    /**
     * - Identifies a specific pipeline in the multiplex.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogrampipelinedetail-pipelineid */
    "PipelineId"?: string | Intrinsic;
}

/**
 * Packet identifiers map for a given Multiplex program.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html */

export interface MultiplexProgramPacketIdentifiersMap {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-audiopids */
    "AudioPids"?: (number | Intrinsic)[];
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-dvbsubpids */
    "DvbSubPids"?: (number | Intrinsic)[];
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-dvbteletextpid */
    "DvbTeletextPid"?: number | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-etvplatformpid */
    "EtvPlatformPid"?: number | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-etvsignalpid */
    "EtvSignalPid"?: number | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-klvdatapids */
    "KlvDataPids"?: (number | Intrinsic)[];
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-pcrpid */
    "PcrPid"?: number | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-pmtpid */
    "PmtPid"?: number | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-privatemetadatapid */
    "PrivateMetadataPid"?: number | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-scte27pids */
    "Scte27Pids"?: (number | Intrinsic)[];
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-scte35pid */
    "Scte35Pid"?: number | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-timedmetadatapid */
    "TimedMetadataPid"?: number | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-videopid */
    "VideoPid"?: number | Intrinsic;
}

/**
 * Transport stream service descriptor configuration for the Multiplex program.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html */

export interface MultiplexProgramServiceDescriptor {
    /**
     * - Name of the provider.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogramservicedescriptor-providername */
    "ProviderName": string | Intrinsic;
    /**
     * - Name of the service.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogramservicedescriptor-servicename */
    "ServiceName": string | Intrinsic;
}

/**
 * Statmux rate control settings
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html */

export interface MultiplexStatmuxVideoSettings {
    /**
     * - Maximum statmux bitrate.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `100000`
     * - _Maximum_: `100000000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexstatmuxvideosettings-maximumbitrate */
    "MaximumBitrate"?: number | Intrinsic;
    /**
     * - Minimum statmux bitrate.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `100000`
     * - _Maximum_: `100000000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexstatmuxvideosettings-minimumbitrate */
    "MinimumBitrate"?: number | Intrinsic;
    /**
     * - The purpose of the priority is to use a combination of the\\nmultiplex rate control algorithm and the QVBR capability of the\\nencoder to prioritize the video quality of some channels in a\\nmultiplex over others. Channels that have a higher priority will\\nget higher video quality at the expense of the video quality of\\nother channels in the multiplex with lower priority.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `-5`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexstatmuxvideosettings-priority */
    "Priority"?: number | Intrinsic;
}

/**
 * The video configuration for each program in a multiplex.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html */

export interface MultiplexVideoSettings {
    /**
     * - The constant bitrate configuration for the video encode. When this field is defined, StatmuxSettings must be undefined.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `100000`
     * - _Maximum_: `100000000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexvideosettings-constantbitrate */
    "ConstantBitrate"?: number | Intrinsic;
    /**
     * - Statmux rate control settings. When this field is defined, ConstantBitrate must be undefined.
     * - _Required_: No
     * - _Type_: [MultiplexStatmuxVideoSettings](./aws-properties-medialive-multiplexprogram-multiplexstatmuxvideosettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexvideosettings-statmuxsettings */
    "StatmuxSettings"?: MultiplexStatmuxVideoSettings;
}

/**
 * Multiplex Program settings configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html */

export interface MultiplexProgramSettings {
    /**
     * - Indicates which pipeline is preferred by the multiplex for program ingest.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `CURRENTLY_ACTIVE | PIPELINE_0 | PIPELINE_1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogramsettings-preferredchannelpipeline */
    "PreferredChannelPipeline"?: string | Intrinsic;
    /**
     * - Unique program number.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `65535`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogramsettings-programnumber */
    "ProgramNumber": number | Intrinsic;
    /**
     * - Transport stream service descriptor configuration for the Multiplex program.
     * - _Required_: No
     * - _Type_: [MultiplexProgramServiceDescriptor](./aws-properties-medialive-multiplexprogram-multiplexprogramservicedescriptor.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogramsettings-servicedescriptor */
    "ServiceDescriptor"?: MultiplexProgramServiceDescriptor;
    /**
     * - Program video settings configuration.
     * - _Required_: No
     * - _Type_: [MultiplexVideoSettings](./aws-properties-medialive-multiplexprogram-multiplexvideosettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogramsettings-videosettings */
    "VideoSettings"?: MultiplexVideoSettings;
}

/**
 * The `AWS::MediaLive::Multiplexprogram` resource Property description not available. for MediaLive.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html */

export interface MediaLiveMultiplexprogram extends ResourceAttributes {
    "Type": "AWS::MediaLive::Multiplexprogram";
    "Properties": {
        /**
         * - The unique id of the multiplex.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexid */
        "MultiplexId"?: string | Intrinsic;
        /**
         * - Multiplex Program settings configuration.
         * - _Required_: No
         * - _Type_: [MultiplexProgramSettings](./aws-properties-medialive-multiplexprogram-multiplexprogramsettings.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogramsettings */
        "MultiplexProgramSettings"?: MultiplexProgramSettings;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: [MultiplexProgramPacketIdentifiersMap](./aws-properties-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-packetidentifiersmap */
        "PacketIdentifiersMap"?: MultiplexProgramPacketIdentifiersMap;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Array of [MultiplexProgramPipelineDetail](./aws-properties-medialive-multiplexprogram-multiplexprogrampipelinedetail.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-pipelinedetails */
        "PipelineDetails"?: MultiplexProgramPipelineDetail[];
        /**
         * - Indicates which pipeline is preferred by the multiplex for program ingest. If set to \\"PIPELINE\_0\\" or \\"PIPELINE\_1\\" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline, it will switch back once that ingest is healthy again. If set to \\"CURRENTLY\_ACTIVE\\", it will not switch back to the other pipeline based on it recovering to a healthy state, it will only switch if the active pipeline becomes unhealthy.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `CURRENTLY_ACTIVE | PIPELINE_0 | PIPELINE_1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-preferredchannelpipeline */
        "PreferredChannelPipeline"?: string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-programname */
        "ProgramName"?: string | Intrinsic;
    };
}