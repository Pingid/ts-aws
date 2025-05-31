import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Create a private graph endpoint to allow private access from to the graph from within a VPC. You can attach security groups to the private graph endpoint.
 * ###### Note
 * 
 * VPC endpoint charges apply.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-privategraphendpoint.html */

export interface NeptuneGraphPrivateGraphEndpoint extends ResourceAttributes {
    "Type": "AWS::NeptuneGraph::PrivateGraphEndpoint";
    "Properties": {
        /**
         * - The unique identifier of the Neptune Analytics graph.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-privategraphendpoint.html#cfn-neptunegraph-privategraphendpoint-graphidentifier */
        "GraphIdentifier": string | Intrinsic;
        /**
         * - Security groups to be attached to the private graph endpoint..
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-privategraphendpoint.html#cfn-neptunegraph-privategraphendpoint-securitygroupids */
        "SecurityGroupIds"?: (string | Intrinsic)[];
        /**
         * - Subnets in which private graph endpoint ENIs are created.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-privategraphendpoint.html#cfn-neptunegraph-privategraphendpoint-subnetids */
        "SubnetIds"?: (string | Intrinsic)[];
        /**
         * - The VPC in which the private graph endpoint needs to be created.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptunegraph-privategraphendpoint.html#cfn-neptunegraph-privategraphendpoint-vpcid */
        "VpcId": string | Intrinsic;
    };
}