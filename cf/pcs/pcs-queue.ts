import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The compute node group configuration for a queue.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-queue.html */

export interface ComputeNodeGroupConfiguration {
    /**
     * - The compute node group ID for the compute node group configuration.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-queue.html#cfn-pcs-queue-computenodegroupconfiguration-computenodegroupid */
    "ComputeNodeGroupId"?: string | Intrinsic;
}

/**
 * The `AWS::PCS::Queue` resource creates an AWS PCS queue.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-queue.html */

export interface PCSQueue extends ResourceAttributes {
    "Type": "AWS::PCS::Queue";
    "Properties": {
        /**
         * - The ID of the cluster of the queue.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-queue.html#cfn-pcs-queue-clusterid */
        "ClusterId": string | Intrinsic;
        /**
         * - The list of compute node group configurations associated with the queue. Queues assign jobs to associated compute node groups.
         * - _Required_: No
         * - _Type_: Array of [ComputeNodeGroupConfiguration](./aws-properties-pcs-queue-computenodegroupconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-queue.html#cfn-pcs-queue-computenodegroupconfigurations */
        "ComputeNodeGroupConfigurations"?: ComputeNodeGroupConfiguration[];
        /**
         * - The name that identifies the queue.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-queue.html#cfn-pcs-queue-name */
        "Name"?: string | Intrinsic;
        /**
         * - 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `^.+$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-queue.html#cfn-pcs-queue-tags */
        "Tags"?: Record<string, string | Intrinsic>;
    };
}