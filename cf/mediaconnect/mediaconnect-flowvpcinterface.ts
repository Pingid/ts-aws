import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::MediaConnect::FlowVpcInterface` resource is a connection between your AWS Elemental MediaConnect flow and a virtual private cloud (VPC) that you created using the Amazon Virtual Private Cloud service.
 * To avoid streaming your content over the public internet, you can add up to two VPC interfaces to your flow and use those connections to transfer content between your VPC and MediaConnect.
 * You can update an existing flow to add a VPC interface. If you haven’t created the flow yet, you must create the flow with a temporary standard source by doing the following:
 * 1.  Use CloudFormation to create a flow with a standard source that uses to the flow’s public IP address.
 *     
 * 2.  Use CloudFormation to create a VPC interface to add to this flow. This can also be done as part of the previous step.
 *     
 * 3.  After CloudFormation has created the flow and the VPC interface, update the source to point to the VPC interface that you created.
 * ###### Important
 * 
 * The previous steps must be undone before the CloudFormation stack can be deleted. Because the source is manually updated in step 3, CloudFormation is not aware of this change. The source must be returned to a standard source before CloudFormation stack deletion.
 * ###### Note
 * 
 * When configuring NDI outputs for your flow, define the VPC interface as a nested attribute within the `AWS::MediaConnect::Flow` resource. Do not use the top-level `AWS::MediaConnect::FlowVpcInterface` resource type to specify NDI configurations.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html */

export interface MediaConnectFlowVpcInterface extends ResourceAttributes {
    "Type": "AWS::MediaConnect::FlowVpcInterface";
    "Properties": {
        /**
         * - The Amazon Resource Name (ARN) of the flow.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html#cfn-mediaconnect-flowvpcinterface-flowarn */
        "FlowArn": string | Intrinsic;
        /**
         * - The name for the VPC interface. This name must be unique within the flow.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html#cfn-mediaconnect-flowvpcinterface-name */
        "Name": string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the role that you created when you set up MediaConnect as a trusted service.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html#cfn-mediaconnect-flowvpcinterface-rolearn */
        "RoleArn": string | Intrinsic;
        /**
         * - A virtual firewall to control inbound and outbound traffic.
         * - _Required_: Yes
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html#cfn-mediaconnect-flowvpcinterface-securitygroupids */
        "SecurityGroupIds": (string | Intrinsic)[];
        /**
         * - The subnet IDs that you want to use for your VPC interface. A range of IP addresses in your VPC. When you create your VPC, you specify a range of IPv4 addresses for the VPC in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16. This is the primary CIDR block for your VPC. When you create a subnet for your VPC, you specify the CIDR block for the subnet, which is a subset of the VPC CIDR block. The subnets that you use across all VPC interfaces on the flow must be in the same Availability Zone as the flow.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flowvpcinterface.html#cfn-mediaconnect-flowvpcinterface-subnetid */
        "SubnetId": string | Intrinsic;
    };
}