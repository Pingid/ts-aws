import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Represents the default Amazon GameLift Streams application that a stream group hosts.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-streamgroup.html */

export interface DefaultApplication {
    /**
     * - An [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that uniquely identifies the application resource. Example ARN: `arn:aws:gameliftstreams:us-west-2:111122223333:application/a-9ZY8X7Wv6`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws:gameliftstreams:([^: ]*):([0-9]{12}):([^: ]*)$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-streamgroup.html#cfn-gameliftstreams-streamgroup-defaultapplication-arn */
    "Arn"?: string | Intrinsic;
    /**
     * - An ID that uniquely identifies the application resource. Example ID: `a-9ZY8X7Wv6`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `32`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-streamgroup.html#cfn-gameliftstreams-streamgroup-defaultapplication-id */
    "Id"?: string | Intrinsic;
}

/**
 * Configuration settings that define a stream group's stream capacity for a location. When configuring a location for the first time, you must specify a numeric value for at least one of the two capacity types.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-streamgroup.html */

export interface LocationConfiguration {
    /**
     * - The streaming capacity that is allocated and ready to handle stream requests without delay. You pay for this capacity whether it's in use or not. Best for quickest time from streaming request to streaming session.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-streamgroup.html#cfn-gameliftstreams-streamgroup-locationconfiguration-alwaysoncapacity */
    "AlwaysOnCapacity"?: number | Intrinsic;
    /**
     * - A location's name. For example, `us-east-1`. For a complete list of locations that Amazon GameLift Streams supports, refer to [Regions, quotas, and limitations](https://docs.aws.amazon.com/gameliftstreams/latest/developerguide/regions-quotas.html) in the _Amazon GameLift Streams Developer Guide_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-streamgroup.html#cfn-gameliftstreams-streamgroup-locationconfiguration-locationname */
    "LocationName": string | Intrinsic;
    /**
     * - The streaming capacity that Amazon GameLift Streams can allocate in response to stream requests, and then de-allocate when the session has terminated. This offers a cost control measure at the expense of a greater startup time (typically under 5 minutes).
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-streamgroup.html#cfn-gameliftstreams-streamgroup-locationconfiguration-ondemandcapacity */
    "OnDemandCapacity"?: number | Intrinsic;
}

/**
 * The `AWS::GameLiftStreams::StreamGroup` resource defines a group of compute resources that will be running and streaming your game. When you create a stream group, you specify the hardware configuration (CPU, GPU, RAM) that will run your game (known as the _stream class_), the geographical locations where your game can run, and the number of streams that can run simultaneously in each location (known as _stream capacity_). Stream groups manage how Amazon GameLift Streams allocates resources and handles concurrent streams, allowing you to effectively manage capacity and costs.
 * There are two types of stream capacity: always-on and on-demand.
 * *   **Always-on**: The streaming capacity that is allocated and ready to handle stream requests without delay. You pay for this capacity whether it's in use or not. Best for quickest time from streaming request to streaming session.
 *     
 * *   **On-demand**: The streaming capacity that Amazon GameLift Streams can allocate in response to stream requests, and then de-allocate when the session has terminated. This offers a cost control measure at the expense of a greater startup time (typically under 5 minutes).
 * ###### Note
 * 
 * Application association is not currently supported in AWS CloudFormation. To link additional applications to a stream group, use the Amazon GameLift Streams console or the AWS CLI.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-streamgroup.html */

export interface GameLiftStreamsStreamGroup extends ResourceAttributes {
    "Type": "AWS::GameLiftStreams::StreamGroup";
    "Properties": {
        /**
         * - Object that identifies the Amazon GameLift Streams application to stream with this stream group.
         * - _Required_: No
         * - _Type_: [DefaultApplication](./aws-properties-gameliftstreams-streamgroup-defaultapplication.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-streamgroup.html#cfn-gameliftstreams-streamgroup-defaultapplication */
        "DefaultApplication"?: DefaultApplication;
        /**
         * - A descriptive label for the stream group.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9-_.!+@/][a-zA-Z0-9-_.!+@/ ]*$`
         * - _Minimum_: `1`
         * - _Maximum_: `80`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-streamgroup.html#cfn-gameliftstreams-streamgroup-description */
        "Description": string | Intrinsic;
        /**
         * - A set of one or more locations and the streaming capacity for each location. One of the locations MUST be your primary location, which is the AWS Region where you are specifying this resource.
         * - _Required_: Yes
         * - _Type_: Array of [LocationConfiguration](./aws-properties-gameliftstreams-streamgroup-locationconfiguration.html)
         * - _Minimum_: `1`
         * - _Maximum_: `100`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-streamgroup.html#cfn-gameliftstreams-streamgroup-locationconfigurations */
        "LocationConfigurations": LocationConfiguration[];
        /**
         * - The target stream quality for sessions that are hosted in this stream group. Set a stream class that is appropriate to the type of content that you're streaming. Stream class determines the type of computing resources Amazon GameLift Streams uses and impacts the cost of streaming. The following options are available:
         * - A stream class can be one of the following:
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `20`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-streamgroup.html#cfn-gameliftstreams-streamgroup-streamclass */
        "StreamClass": string | Intrinsic;
        /**
         * - A list of labels to assign to the new stream group resource. Tags are developer-defined key-value pairs. Tagging AWS resources is useful for resource management, access management and cost allocation. See [Tagging AWS Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the _AWS General Reference_.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `.+`
         * - _Minimum_: `0`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gameliftstreams-streamgroup.html#cfn-gameliftstreams-streamgroup-tags */
        "Tags"?: Record<string, string | Intrinsic>;
    };
}