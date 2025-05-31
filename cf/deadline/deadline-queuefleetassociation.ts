import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates an association between a queue and a fleet.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queuefleetassociation.html */

export interface DeadlineQueueFleetAssociation extends ResourceAttributes {
    "Type": "AWS::Deadline::QueueFleetAssociation";
    "Properties": {
        /**
         * - The identifier of the farm that contains the queue and the fleet.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^farm-[0-9a-f]{32}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queuefleetassociation.html#cfn-deadline-queuefleetassociation-farmid */
        "FarmId": string | Intrinsic;
        /**
         * - The fleet ID.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^fleet-[0-9a-f]{32}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queuefleetassociation.html#cfn-deadline-queuefleetassociation-fleetid */
        "FleetId": string | Intrinsic;
        /**
         * - The queue ID.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^queue-[0-9a-f]{32}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queuefleetassociation.html#cfn-deadline-queuefleetassociation-queueid */
        "QueueId": string | Intrinsic;
    };
}