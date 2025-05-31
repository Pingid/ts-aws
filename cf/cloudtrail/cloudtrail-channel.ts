import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Contains information about the destination receiving events.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html */

export interface Destination {
    /**
     * - For channels used for a CloudTrail Lake integration, the location is the ARN of an event data store that receives events from a channel. For service-linked channels, the location is the name of the AWS service.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `(^[a-zA-Z0-9._/\-:]+$)`
     * - _Minimum_: `3`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html#cfn-cloudtrail-channel-destination-location */
    "Location": string | Intrinsic;
    /**
     * - The type of destination for events arriving from a channel. For channels used for a CloudTrail Lake integration, the value is `EVENT_DATA_STORE`. For service-linked channels, the value is `AWS_SERVICE`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `EVENT_DATA_STORE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html#cfn-cloudtrail-channel-destination-type */
    "Type": string | Intrinsic;
}

/**
 * A custom key-value pair associated with a resource such as a CloudTrail trail, event data store, dashboard, or channel.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html */

export interface Tag {
    /**
     * - The key in a key-value pair. The key must be must be no longer than 128 Unicode characters. The key must be unique for the resource to which it applies.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html#cfn-cloudtrail-channel-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value in a key-value pair of a tag. The value must be no longer than 256 Unicode characters.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html#cfn-cloudtrail-channel-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Contains information about a returned CloudTrail channel.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html */

export interface CloudTrailChannel extends ResourceAttributes {
    "Type": "AWS::CloudTrail::Channel";
    "Properties": {
        /**
         * - One or more event data stores to which events arriving through a channel will be logged.
         * - _Required_: No
         * - _Type_: Array of [Destination](./aws-properties-cloudtrail-channel-destination.html)
         * - _Maximum_: `10`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html#cfn-cloudtrail-channel-destinations */
        "Destinations"?: Destination[];
        /**
         * - The name of the channel.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `(^[a-zA-Z0-9._\-]+$)`
         * - _Minimum_: `3`
         * - _Maximum_: `128`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html#cfn-cloudtrail-channel-name */
        "Name"?: string | Intrinsic;
        /**
         * - The name of the partner or external event source. You cannot change this name after you create the channel. A maximum of one channel is allowed per source.
         * - A source can be either `Custom` for all valid non-AWS events, or the name of a partner event source. For information about the source names for available partners, see [Additional information about integration partners](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-event-data-store-integration.html#cloudtrail-lake-partner-information) in the CloudTrail User Guide.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `(.*)`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html#cfn-cloudtrail-channel-source */
        "Source"?: string | Intrinsic;
        /**
         * - A list of tags.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-cloudtrail-channel-tag.html)
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html#cfn-cloudtrail-channel-tags */
        "Tags"?: Tag[];
    };
}