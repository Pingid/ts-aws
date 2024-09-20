import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies an ingress authorization rule to add to a Client VPN endpoint. Ingress authorization rules act as firewall rules that grant access to networks. You must configure ingress authorization rules to enable clients to access resources in AWS or on-premises networks.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html */

export interface EC2ClientVpnAuthorizationRule extends ResourceAttributes {
  Type: 'AWS::EC2::ClientVpnAuthorizationRule'
  Properties: {
    /**
     * - The ID of the group to grant access to, for example, the Active Directory group or identity provider (IdP) group. Required if `AuthorizeAllGroups` is `false` or not specified.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html#cfn-ec2-clientvpnauthorizationrule-accessgroupid */
    AccessGroupId?: string | Intrinsic
    /**
     * - Indicates whether to grant access to all clients. Specify `true` to grant all clients who successfully establish a VPN connection access to the network. Must be set to `true` if `AccessGroupId` is not specified.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html#cfn-ec2-clientvpnauthorizationrule-authorizeallgroups */
    AuthorizeAllGroups?: boolean | Intrinsic
    /**
     * - The ID of the Client VPN endpoint.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html#cfn-ec2-clientvpnauthorizationrule-clientvpnendpointid */
    ClientVpnEndpointId: string | Intrinsic
    /**
     * - A brief description of the authorization rule.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html#cfn-ec2-clientvpnauthorizationrule-description */
    Description?: string | Intrinsic
    /**
     * - The IPv4 address range, in CIDR notation, of the network for which access is being authorized.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html#cfn-ec2-clientvpnauthorizationrule-targetnetworkcidr */
    TargetNetworkCidr: string | Intrinsic
  }
}
