import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Describes a tag.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html */

export interface Tag {
    /**
     * - The tag key.
     * - Constraints: Maximum length of 128 characters.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\s\S]*`
     * - _Minimum_: `0`
     * - _Maximum_: `10000000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html#cfn-networkmanager-connectpeer-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag value.
     * - Constraints: Maximum length of 256 characters.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\s\S]*`
     * - _Minimum_: `0`
     * - _Maximum_: `10000000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html#cfn-networkmanager-connectpeer-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Describes the BGP options.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html */

export interface BgpOptions {
    /**
     * - The Peer ASN of the BGP.
     * - _Required_: No
     * - _Type_: Number
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html#cfn-networkmanager-connectpeer-bgpoptions-peerasn */
    "PeerAsn"?: number | Intrinsic;
}

/**
 * Creates a core network Connect peer for a specified core network connect attachment between a core network and an appliance. The peer address and transit gateway address must be the same IP address family (IPv4 or IPv6).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html */

export interface NetworkManagerConnectPeer extends ResourceAttributes {
    "Type": "AWS::NetworkManager::ConnectPeer";
    "Properties": {
        /**
         * - Describes the BGP options.
         * - _Required_: No
         * - _Type_: [BgpOptions](./aws-properties-networkmanager-connectpeer-bgpoptions.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html#cfn-networkmanager-connectpeer-bgpoptions */
        "BgpOptions"?: BgpOptions;
        /**
         * - The ID of the attachment to connect.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^attachment-([0-9a-f]{8,17})$`
         * - _Minimum_: `0`
         * - _Maximum_: `50`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html#cfn-networkmanager-connectpeer-connectattachmentid */
        "ConnectAttachmentId": string | Intrinsic;
        /**
         * - The IP address of a core network.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[\s\S]*`
         * - _Minimum_: `1`
         * - _Maximum_: `50`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html#cfn-networkmanager-connectpeer-corenetworkaddress */
        "CoreNetworkAddress"?: string | Intrinsic;
        /**
         * - The inside IP addresses used for a Connect peer configuration.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html#cfn-networkmanager-connectpeer-insidecidrblocks */
        "InsideCidrBlocks"?: (string | Intrinsic)[];
        /**
         * - The IP address of the Connect peer.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\s\S]*`
         * - _Minimum_: `1`
         * - _Maximum_: `50`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html#cfn-networkmanager-connectpeer-peeraddress */
        "PeerAddress": string | Intrinsic;
        /**
         * - The subnet ARN of the Connect peer.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^arn:[^:]{1,63}:ec2:[^:]{0,63}:[^:]{0,63}:subnet\/subnet-[0-9a-f]{8,17}$|^$`
         * - _Minimum_: `0`
         * - _Maximum_: `500`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html#cfn-networkmanager-connectpeer-subnetarn */
        "SubnetArn"?: string | Intrinsic;
        /**
         * - The list of key-value tags associated with the Connect peer.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-networkmanager-connectpeer-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html#cfn-networkmanager-connectpeer-tags */
        "Tags"?: Tag[];
    };
}