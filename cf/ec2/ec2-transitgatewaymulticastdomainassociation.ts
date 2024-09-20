import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Associates the specified subnets and transit gateway attachments with the specified transit gateway multicast domain.
 * The transit gateway attachment must be in the available state before you can add a resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomainassociation.html */

export interface EC2TransitGatewayMulticastDomainAssociation extends ResourceAttributes {
  Type: 'AWS::EC2::TransitGatewayMulticastDomainAssociation'
  Properties: {
    /**
     * - The IDs of the subnets to associate with the transit gateway multicast domain.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomainassociation.html#cfn-ec2-transitgatewaymulticastdomainassociation-subnetid */
    SubnetId: string | Intrinsic
    /**
     * - The ID of the transit gateway attachment.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomainassociation.html#cfn-ec2-transitgatewaymulticastdomainassociation-transitgatewayattachmentid */
    TransitGatewayAttachmentId: string | Intrinsic
    /**
     * - The ID of the transit gateway multicast domain.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomainassociation.html#cfn-ec2-transitgatewaymulticastdomainassociation-transitgatewaymulticastdomainid */
    TransitGatewayMulticastDomainId: string | Intrinsic
  }
}
