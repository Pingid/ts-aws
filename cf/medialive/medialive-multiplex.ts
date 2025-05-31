import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Contains configuration for a Multiplex event
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html */

export interface MultiplexSettings {
    /**
     * - Maximum video buffer delay in milliseconds.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `800`
     * - _Maximum_: `3000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html#cfn-medialive-multiplex-multiplexsettings-maximumvideobufferdelaymilliseconds */
    "MaximumVideoBufferDelayMilliseconds"?: number | Intrinsic;
    /**
     * - Transport stream bit rate.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1000000`
     * - _Maximum_: `100000000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html#cfn-medialive-multiplex-multiplexsettings-transportstreambitrate */
    "TransportStreamBitrate": number | Intrinsic;
    /**
     * - Transport stream ID.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `65535`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html#cfn-medialive-multiplex-multiplexsettings-transportstreamid */
    "TransportStreamId": number | Intrinsic;
    /**
     * - Transport stream reserved bit rate.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `100000000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html#cfn-medialive-multiplex-multiplexsettings-transportstreamreservedbitrate */
    "TransportStreamReservedBitrate"?: number | Intrinsic;
}

/**
 * The `Tags` property type specifies Property description not available. for an [AWS::MediaLive::Multiplex](./aws-resource-medialive-multiplex.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html */

export interface Tags {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html#cfn-medialive-multiplex-tags-key */
    "Key"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html#cfn-medialive-multiplex-tags-value */
    "Value"?: string | Intrinsic;
}

/**
 * Multiplex MediaConnect output destination settings.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html */

export interface MultiplexMediaConnectOutputDestinationSettings {
    /**
     * - The MediaConnect entitlement ARN available as a Flow source.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html#cfn-medialive-multiplex-multiplexmediaconnectoutputdestinationsettings-entitlementarn */
    "EntitlementArn"?: string | Intrinsic;
}

/**
 * Multiplex output destination settings
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html */

export interface MultiplexOutputDestination {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [MultiplexMediaConnectOutputDestinationSettings](./aws-properties-medialive-multiplex-multiplexmediaconnectoutputdestinationsettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html#cfn-medialive-multiplex-multiplexoutputdestination-multiplexmediaconnectoutputdestinationsettings */
    "MultiplexMediaConnectOutputDestinationSettings"?: MultiplexMediaConnectOutputDestinationSettings;
}

/**
 * The multiplex object.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html */

export interface MediaLiveMultiplex extends ResourceAttributes {
    "Type": "AWS::MediaLive::Multiplex";
    "Properties": {
        /**
         * - A list of availability zones for the multiplex.
         * - _Required_: Yes
         * - _Type_: Array of String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html#cfn-medialive-multiplex-availabilityzones */
        "AvailabilityZones": (string | Intrinsic)[];
        /**
         * - A list of the multiplex output destinations.
         * - _Required_: No
         * - _Type_: Array of [MultiplexOutputDestination](./aws-properties-medialive-multiplex-multiplexoutputdestination.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html#cfn-medialive-multiplex-destinations */
        "Destinations"?: MultiplexOutputDestination[];
        /**
         * - Configuration for a multiplex event.
         * - _Required_: Yes
         * - _Type_: [MultiplexSettings](./aws-properties-medialive-multiplex-multiplexsettings.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html#cfn-medialive-multiplex-multiplexsettings */
        "MultiplexSettings": MultiplexSettings;
        /**
         * - The name of the multiplex.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html#cfn-medialive-multiplex-name */
        "Name": string | Intrinsic;
        /**
         * - A collection of key-value pairs.
         * - _Required_: No
         * - _Type_: [Array](./aws-properties-medialive-multiplex-tags.html) of [Tags](./aws-properties-medialive-multiplex-tags.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html#cfn-medialive-multiplex-tags */
        "Tags"?: Tags[];
    };
}