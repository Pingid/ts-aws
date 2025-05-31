import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A fleet or alias designated in a game session queue. Queues fulfill requests for new game sessions by placing a new game session on any of the queue's destinations.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html */

export interface GameSessionQueueDestination {
    /**
     * - The Amazon Resource Name (ARN) that is assigned to fleet or fleet alias. ARNs, which include a fleet ID or alias ID and a Region name, provide a unique identifier across all Regions.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9:/-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-gamesessionqueuedestination-destinationarn */
    "DestinationArn"?: string | Intrinsic;
}

/**
 * The queue setting that determines the highest latency allowed for individual players when placing a game session. When a latency policy is in force, a game session cannot be placed with any fleet in a Region where a player reports latency higher than the cap. Latency policies are only enforced when the placement request contains player latency information.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html */

export interface PlayerLatencyPolicy {
    /**
     * - The maximum latency value that is allowed for any player, in milliseconds. All policies must have a value set for this property.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-playerlatencypolicy-maximumindividualplayerlatencymilliseconds */
    "MaximumIndividualPlayerLatencyMilliseconds"?: number | Intrinsic;
    /**
     * - The length of time, in seconds, that the policy is enforced while placing a new game session. A null value for this property means that the policy is enforced until the queue times out.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-playerlatencypolicy-policydurationseconds */
    "PolicyDurationSeconds"?: number | Intrinsic;
}

/**
 * Custom prioritization settings for use by a game session queue when placing new game sessions with available game servers. When defined, this configuration replaces the default FleetIQ prioritization process, which is as follows:
 * *   If player latency data is included in a game session request, destinations and locations are prioritized first based on lowest average latency (1), then on lowest hosting cost (2), then on destination list order (3), and finally on location (alphabetical) (4). This approach ensures that the queue's top priority is to place game sessions where average player latency is lowest, and--if latency is the same--where the hosting cost is less, etc.
 *     
 * *   If player latency data is not included, destinations and locations are prioritized first on destination list order (1), and then on location (alphabetical) (2). This approach ensures that the queue's top priority is to place game sessions on the first destination fleet listed. If that fleet has multiple locations, the game session is placed on the first location (when listed alphabetically).
 * Changing the priority order will affect how game sessions are placed.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html */

export interface PriorityConfiguration {
    /**
     * - The prioritization order to use for fleet locations, when the `PriorityOrder` property includes `LOCATION`. Locations can include AWS Region codes (such as `us-west-2`), local zones, and custom locations (for Anywhere fleets). Each location must be listed only once. For details, see [Amazon GameLift Servers service locations.](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-regions.html)
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1 | 1`
     * - _Maximum_: `64 | 100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-priorityconfiguration-locationorder */
    "LocationOrder"?: (string | Intrinsic)[];
    /**
     * - A custom sequence to use when prioritizing where to place new game sessions. Each priority type is listed once.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Allowed values_: `LATENCY | COST | DESTINATION | LOCATION`
     * - _Minimum_: `1`
     * - _Maximum_: `4`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-priorityconfiguration-priorityorder */
    "PriorityOrder"?: (string | Intrinsic)[];
}

/**
 * A list of fleet locations where a game session queue can place new game sessions. You can use a filter to temporarily turn off placements for specific locations. For queues that have multi-location fleets, you can use a filter configuration allow placement with some, but not all of these locations.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html */

export interface FilterConfiguration {
    /**
     * - A list of locations to allow game session placement in, in the form of AWS Region codes such as `us-west-2`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1 | 1`
     * - _Maximum_: `64 | 100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-filterconfiguration-allowedlocations */
    "AllowedLocations"?: (string | Intrinsic)[];
}

/**
 * A label that you can assign to a Amazon GameLift Servers resource.
 * **Learn more**
 * [Tagging AWS Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the _AWS General Reference_
 * [AWS Tagging Strategies](https://aws.amazon.com/answers/account-management/aws-tagging-strategies/)
 * **Related actions**
 * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html */

export interface Tag {
    /**
     * - The key for a developer-defined key value pair for tagging an AWS resource.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value for a developer-defined key value pair for tagging an AWS resource.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The `AWS::GameLift::GameSessionQueue` resource creates a placement queue that processes requests for new game sessions. A queue uses FleetIQ algorithms to determine the best placement locations and find an available game server, then prompts the game server to start a new game session. Queues can have destinations (GameLift fleets or aliases), which determine where the queue can place new game sessions. A queue can have destinations with varied fleet type (Spot and On-Demand), instance type, and AWS Region.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html */

export interface GameLiftGameSessionQueue extends ResourceAttributes {
    "Type": "AWS::GameLift::GameSessionQueue";
    "Properties": {
        /**
         * - Information to be added to all events that are related to this game session queue.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[\s\S]*`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-customeventdata */
        "CustomEventData"?: string | Intrinsic;
        /**
         * - A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue. Destinations are identified by either a fleet ARN or a fleet alias ARN, and are listed in order of placement preference.
         * - _Required_: No
         * - _Type_: Array of [GameSessionQueueDestination](./aws-properties-gamelift-gamesessionqueue-gamesessionqueuedestination.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-destinations */
        "Destinations"?: GameSessionQueueDestination[];
        /**
         * - A list of locations where a queue is allowed to place new game sessions. Locations are specified in the form of AWS Region codes, such as `us-west-2`. If this parameter is not set, game sessions can be placed in any queue location.
         * - _Required_: No
         * - _Type_: [FilterConfiguration](./aws-properties-gamelift-gamesessionqueue-filterconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-filterconfiguration */
        "FilterConfiguration"?: FilterConfiguration;
        /**
         * - A descriptive label that is associated with game session queue. Queue names must be unique within each Region.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9-]+`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-name */
        "Name": string | Intrinsic;
        /**
         * - An SNS topic ARN that is set up to receive game session placement notifications. See [Setting up notifications for game session placement](https://docs.aws.amazon.com/gamelift/latest/developerguide/queue-notification.html).
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9:_-]*(\.fifo)?`
         * - _Minimum_: `1`
         * - _Maximum_: `300`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-notificationtarget */
        "NotificationTarget"?: string | Intrinsic;
        /**
         * - A set of policies that enforce a sliding cap on player latency when processing game sessions placement requests. Use multiple policies to gradually relax the cap over time if Amazon GameLift Servers can't make a placement. Policies are evaluated in order starting with the lowest maximum latency value.
         * - _Required_: No
         * - _Type_: Array of [PlayerLatencyPolicy](./aws-properties-gamelift-gamesessionqueue-playerlatencypolicy.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-playerlatencypolicies */
        "PlayerLatencyPolicies"?: PlayerLatencyPolicy[];
        /**
         * - Custom settings to use when prioritizing destinations and locations for game session placements. This configuration replaces the FleetIQ default prioritization process. Priority types that are not explicitly named will be automatically applied at the end of the prioritization process.
         * - _Required_: No
         * - _Type_: [PriorityConfiguration](./aws-properties-gamelift-gamesessionqueue-priorityconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-priorityconfiguration */
        "PriorityConfiguration"?: PriorityConfiguration;
        /**
         * - A list of labels to assign to the new game session queue resource. Tags are developer-defined key-value pairs. Tagging AWS resources are useful for resource management, access management and cost allocation. For more information, see [Tagging AWS Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the _AWS General Reference_. Once the resource is created, you can use TagResource, UntagResource, and ListTagsForResource to add, remove, and view tags. The maximum tag limit may be lower than stated. See the AWS General Reference for actual tagging limits.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-gamelift-gamesessionqueue-tag.html)
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-tags */
        "Tags"?: Tag[];
        /**
         * - The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a `TIMED_OUT` status. If you don't specify a request timeout, the queue uses a default value.
         * - _Required_: No
         * - _Type_: Integer
         * - _Minimum_: `0`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-gamesessionqueue.html#cfn-gamelift-gamesessionqueue-timeoutinseconds */
        "TimeoutInSeconds"?: number | Intrinsic;
    };
}