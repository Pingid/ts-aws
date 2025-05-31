import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Associates a subnet with a network ACL. For more information, see [ReplaceNetworkAclAssociation](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-ReplaceNetworkAclAssociation.html) in the _Amazon EC2 API Reference_.
 * When `AWS::EC2::SubnetNetworkAclAssociation` resources are created during create or update operations, AWS CloudFormation adopts existing resources that share the same key properties (the properties that contribute to uniquely identify the resource). However, if the operation fails and rolls back, AWS CloudFormation deletes the previously out-of-band resources. You can protect against this behavior by using `Retain` deletion policies. For more information, see [DeletionPolicy Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetnetworkaclassociation.html */

export interface EC2SubnetNetworkAclAssociation extends ResourceAttributes {
    "Type": "AWS::EC2::SubnetNetworkAclAssociation";
    "Properties": {
        /**
         * - The ID of the network ACL.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetnetworkaclassociation.html#cfn-ec2-subnetnetworkaclassociation-networkaclid */
        "NetworkAclId": string | Intrinsic;
        /**
         * - The ID of the subnet.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-subnetnetworkaclassociation.html#cfn-ec2-subnetnetworkaclassociation-subnetid */
        "SubnetId": string | Intrinsic;
    };
}