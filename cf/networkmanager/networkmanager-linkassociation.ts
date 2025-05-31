import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Describes the association between a device and a link.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-linkassociation.html */

export interface NetworkManagerLinkAssociation extends ResourceAttributes {
    "Type": "AWS::NetworkManager::LinkAssociation";
    "Properties": {
        /**
         * - The device ID for the link association.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\s\S]*`
         * - _Minimum_: `0`
         * - _Maximum_: `50`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-linkassociation.html#cfn-networkmanager-linkassociation-deviceid */
        "DeviceId": string | Intrinsic;
        /**
         * - The ID of the global network.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\s\S]*`
         * - _Minimum_: `0`
         * - _Maximum_: `50`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-linkassociation.html#cfn-networkmanager-linkassociation-globalnetworkid */
        "GlobalNetworkId": string | Intrinsic;
        /**
         * - The ID of the link.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\s\S]*`
         * - _Minimum_: `0`
         * - _Maximum_: `50`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-linkassociation.html#cfn-networkmanager-linkassociation-linkid */
        "LinkId": string | Intrinsic;
    };
}