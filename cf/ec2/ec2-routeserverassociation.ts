import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies the association between a route server and a VPC.
 * A route server association is the connection established between a route server and a VPC.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverassociation.html */

export interface EC2RouteServerAssociation extends ResourceAttributes {
    "Type": "AWS::EC2::RouteServerAssociation";
    "Properties": {
        /**
         * - The ID of the associated route server.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverassociation.html#cfn-ec2-routeserverassociation-routeserverid */
        "RouteServerId": string | Intrinsic;
        /**
         * - The ID of the associated VPC.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverassociation.html#cfn-ec2-routeserverassociation-vpcid */
        "VpcId": string | Intrinsic;
    };
}