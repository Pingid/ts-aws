import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Registers a transit gateway in your global network. Not all Regions support transit gateways for global networks. For a list of the supported Regions, see [Region Availability](https://docs.aws.amazon.com/network-manager/latest/tgwnm/what-are-global-networks.html#nm-available-regions) in the _AWS Transit Gateways for Global Networks User Guide_. The transit gateway can be in any of the supported AWS Regions, but it must be owned by the same AWS account that owns the global network. You cannot register a transit gateway in more than one global network.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayregistration.html */

export interface NetworkManagerTransitGatewayRegistration extends ResourceAttributes {
  Type: 'AWS::NetworkManager::TransitGatewayRegistration'
  Properties: {
    /**
     * - The ID of the global network.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\s\S]*`
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayregistration.html#cfn-networkmanager-transitgatewayregistration-globalnetworkid */
    GlobalNetworkId: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the transit gateway.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\s\S]*`
     * - _Minimum_: `0`
     * - _Maximum_: `500`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayregistration.html#cfn-networkmanager-transitgatewayregistration-transitgatewayarn */
    TransitGatewayArn: string | Intrinsic
  }
}
