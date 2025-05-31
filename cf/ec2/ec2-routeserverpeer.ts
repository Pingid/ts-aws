import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The BGP configuration options for this peer, including ASN (Autonomous System Number) and BFD (Bidrectional Forwarding Detection) settings.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverpeer.html */

export interface BgpOptions {
    /**
     * - The Border Gateway Protocol (BGP) Autonomous System Number (ASN) for the appliance. Valid values are from 1 to 4294967295. We recommend using a private ASN in the 64512–65534 (16-bit ASN) or 4200000000–4294967294 (32-bit ASN) range.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `4294967294`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverpeer.html#cfn-ec2-routeserverpeer-bgpoptions-peerasn */
    "PeerAsn"?: number | Intrinsic;
    /**
     * - The liveness detection protocol used for the BGP peer.
     * - The requested liveness detection protocol for the BGP peer.
     * - Defaults to `bgp-keepalive`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `bfd | bgp-keepalive`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverpeer.html#cfn-ec2-routeserverpeer-bgpoptions-peerlivenessdetection */
    "PeerLivenessDetection"?: string | Intrinsic;
}

/**
 * Describes a tag.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverpeer.html */

export interface Tag {
    /**
     * - The key of the tag.
     * - Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with `aws:`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverpeer.html#cfn-ec2-routeserverpeer-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the tag.
     * - Constraints: Tag values are case-sensitive and accept a maximum of 256 Unicode characters.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverpeer.html#cfn-ec2-routeserverpeer-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Specifies a BGP peer configuration for a route server endpoint.
 * A route server peer is a session between a route server endpoint and the device deployed in AWS (such as a firewall appliance or other network security function running on an EC2 instance).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverpeer.html */

export interface EC2RouteServerPeer extends ResourceAttributes {
    "Type": "AWS::EC2::RouteServerPeer";
    "Properties": {
        /**
         * - The BGP configuration options for this peer, including ASN (Autonomous System Number) and BFD (Bidrectional Forwarding Detection) settings.
         * - _Required_: Yes
         * - _Type_: [BgpOptions](./aws-properties-ec2-routeserverpeer-bgpoptions.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverpeer.html#cfn-ec2-routeserverpeer-bgpoptions */
        "BgpOptions": BgpOptions;
        /**
         * - The IPv4 address of the peer device.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverpeer.html#cfn-ec2-routeserverpeer-peeraddress */
        "PeerAddress": string | Intrinsic;
        /**
         * - The ID of the route server endpoint associated with this peer.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverpeer.html#cfn-ec2-routeserverpeer-routeserverendpointid */
        "RouteServerEndpointId": string | Intrinsic;
        /**
         * - Any tags assigned to the route server peer.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-ec2-routeserverpeer-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-routeserverpeer.html#cfn-ec2-routeserverpeer-tags */
        "Tags"?: Tag[];
    };
}