import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates a limit that manages the distribution of shared resources, such as floating licenses. A limit can throttle work assignments, help manage workloads, and track current usage. Before you use a limit, you must associate the limit with one or more queues.
 * You must add the `amountRequirementName` to a step in a job template to declare the limit requirement.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-limit.html */

export interface DeadlineLimit extends ResourceAttributes {
    "Type": "AWS::Deadline::Limit";
    "Properties": {
        /**
         * - The value that you specify as the `name` in the `amounts` field of the `hostRequirements` in a step of a job template to declare the limit requirement.
         * - _Required_: Yes
         * - _Type_: String
         * - _Maximum_: `1024`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-limit.html#cfn-deadline-limit-amountrequirementname */
        "AmountRequirementName": string | Intrinsic;
        /**
         * - A description of the limit. A clear description helps you identify the purpose of the limit.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `0`
         * - _Maximum_: `100`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-limit.html#cfn-deadline-limit-description */
        "Description"?: string | Intrinsic;
        /**
         * - The name of the limit used in lists to identify the limit.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `100`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-limit.html#cfn-deadline-limit-displayname */
        "DisplayName": string | Intrinsic;
        /**
         * - The unique identifier of the farm that contains the limit.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^farm-[0-9a-f]{32}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-limit.html#cfn-deadline-limit-farmid */
        "FarmId": string | Intrinsic;
        /**
         * - The maximum number of resources constrained by this limit. When all of the resources are in use, steps that require the limit won't be scheduled until the resource is available.
         * - The `maxValue` must not be 0. If the value is -1, there is no restriction on the number of resources that can be acquired for this limit.
         * - _Required_: Yes
         * - _Type_: Integer
         * - _Minimum_: `-1`
         * - _Maximum_: `2147483647`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-limit.html#cfn-deadline-limit-maxcount */
        "MaxCount": number | Intrinsic;
    };
}