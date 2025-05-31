import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A security group association with a VPC.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroupvpcassociation.html */

export interface EC2SecurityGroupVpcAssociation extends ResourceAttributes {
    "Type": "AWS::EC2::SecurityGroupVpcAssociation";
    "Properties": {
        /**
         * - The association's security group ID.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroupvpcassociation.html#cfn-ec2-securitygroupvpcassociation-groupid */
        "GroupId": string | Intrinsic;
        /**
         * - The association's VPC ID.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-securitygroupvpcassociation.html#cfn-ec2-securitygroupvpcassociation-vpcid */
        "VpcId": string | Intrinsic;
    };
}