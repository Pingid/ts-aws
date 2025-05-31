import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The tag.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-networksettings.html */

export interface Tag {
    /**
     * - The key of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-networksettings.html#cfn-workspacesweb-networksettings-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the tag
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-networksettings.html#cfn-workspacesweb-networksettings-tag-value */
    "Value": string | Intrinsic;
}

/**
 * This resource specifies network settings that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC.
 * The VPC must have default tenancy. VPCs with dedicated tenancy are not supported.
 * For availability consideration, you must have at least two subnets created in two different Availability Zones. WorkSpaces Secure Browser is available in a subset of the Availability Zones for each supported Region. For more information, see [Supported Availability Zones](https://docs.aws.amazon.com/workspaces-web/latest/adminguide/availability-zones.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-networksettings.html */

export interface WorkSpacesWebNetworkSettings extends ResourceAttributes {
    "Type": "AWS::WorkSpacesWeb::NetworkSettings";
    "Properties": {
        /**
         * - One or more security groups used to control access from streaming instances to your VPC.
         * - _Pattern_: `^[\w+\-]+$`
         * - _Required_: Yes
         * - _Type_: Array of String
         * - _Minimum_: `1 | 1`
         * - _Maximum_: `128 | 5`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-networksettings.html#cfn-workspacesweb-networksettings-securitygroupids */
        "SecurityGroupIds": (string | Intrinsic)[];
        /**
         * - The subnets in which network interfaces are created to connect streaming instances to your VPC. At least two of these subnets must be in different availability zones.
         * - _Pattern_: `^subnet-([0-9a-f]{8}|[0-9a-f]{17})$`
         * - _Required_: Yes
         * - _Type_: Array of String
         * - _Minimum_: `1 | 2`
         * - _Maximum_: `32 | 3`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-networksettings.html#cfn-workspacesweb-networksettings-subnetids */
        "SubnetIds": (string | Intrinsic)[];
        /**
         * - The tags to add to the network settings resource. A tag is a key-value pair.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-workspacesweb-networksettings-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-networksettings.html#cfn-workspacesweb-networksettings-tags */
        "Tags"?: Tag[];
        /**
         * - The VPC that streaming instances will connect to.
         * - _Pattern_: `^vpc-[0-9a-z]*$`
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^vpc-[0-9a-z]*$`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-networksettings.html#cfn-workspacesweb-networksettings-vpcid */
        "VpcId": string | Intrinsic;
    };
}