import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Associates the specified attachment with the specified transit gateway route table. You can associate one route table with an attachment.
 * Before you can update the route table associated with an attachment, you must disassociate the transit gateway route table that is currently associated with the attachment. First update the stack to remove the associated transit gateway route table, and then update the stack with the ID of the new transit gateway route table to associate.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetableassociation.html */

export interface EC2TransitGatewayRouteTableAssociation extends ResourceAttributes {
  Type: 'AWS::EC2::TransitGatewayRouteTableAssociation'
  Properties: {
    /**
     * - The ID of the attachment.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetableassociation.html#cfn-ec2-transitgatewayroutetableassociation-transitgatewayattachmentid */
    TransitGatewayAttachmentId: string | Intrinsic
    /**
     * - The ID of the route table for the transit gateway.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetableassociation.html#cfn-ec2-transitgatewayroutetableassociation-transitgatewayroutetableid */
    TransitGatewayRouteTableId: string | Intrinsic
  }
}
