import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Associates a limit with a particular queue. After the limit is associated, all workers for jobs that specify the limit associated with the queue are subject to the limit. You can't associate two limits with the same `amountRequirementName` to the same queue.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queuelimitassociation.html */

export interface DeadlineQueueLimitAssociation extends ResourceAttributes {
    "Type": "AWS::Deadline::QueueLimitAssociation";
    "Properties": {
        /**
         * - The unique identifier of the farm that contains the queue-limit association.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^farm-[0-9a-f]{32}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queuelimitassociation.html#cfn-deadline-queuelimitassociation-farmid */
        "FarmId": string | Intrinsic;
        /**
         * - The unique identifier of the limit in the association.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^limit-[0-9a-f]{32}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queuelimitassociation.html#cfn-deadline-queuelimitassociation-limitid */
        "LimitId": string | Intrinsic;
        /**
         * - The unique identifier of the queue in the association.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^queue-[0-9a-f]{32}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queuelimitassociation.html#cfn-deadline-queuelimitassociation-queueid */
        "QueueId": string | Intrinsic;
    };
}