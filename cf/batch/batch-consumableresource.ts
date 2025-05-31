import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::Batch::ConsumableResource` resource specifies the parameters for an AWS Batch consumable resource. For more information, see [Resource-aware scheduling](https://docs.aws.amazon.com/batch/latest/userguide/resource-aware-scheduling.html) in the _AWS Batch User Guide_ .
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-consumableresource.html */

export interface BatchConsumableResource extends ResourceAttributes {
    "Type": "AWS::Batch::ConsumableResource";
    "Properties": {
        /**
         * - The name of the consumable resource.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-consumableresource.html#cfn-batch-consumableresource-consumableresourcename */
        "ConsumableResourceName"?: string | Intrinsic;
        /**
         * - Indicates whether the resource is available to be re-used after a job completes. Can be one of:
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `REPLENISHABLE | NON_REPLENISHABLE`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-consumableresource.html#cfn-batch-consumableresource-resourcetype */
        "ResourceType": string | Intrinsic;
        /**
         * - The tags that you apply to the consumable resource to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see [Tagging your AWS Batch resources](https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html).
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `.*`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-consumableresource.html#cfn-batch-consumableresource-tags */
        "Tags"?: Record<string, string | Intrinsic>;
        /**
         * - The total amount of the consumable resource that is available.
         * - _Required_: Yes
         * - _Type_: Integer
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-consumableresource.html#cfn-batch-consumableresource-totalquantity */
        "TotalQuantity": number | Intrinsic;
    };
}