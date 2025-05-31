import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Create or update cluster policy.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-clusterpolicy.html */

export interface MSKClusterPolicy extends ResourceAttributes {
    "Type": "AWS::MSK::ClusterPolicy";
    "Properties": {
        /**
         * - The Amazon Resource Name (ARN) that uniquely identifies the cluster.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:[\w-]+:kafka:[\w-]+:\d+:cluster.*\Z`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-clusterpolicy.html#cfn-msk-clusterpolicy-clusterarn */
        "ClusterArn": string | Intrinsic;
        /**
         * - Resource policy for the cluster.
         * - _Required_: Yes
         * - _Type_: Json
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-clusterpolicy.html#cfn-msk-clusterpolicy-policy */
        "Policy": any | Intrinsic;
    };
}