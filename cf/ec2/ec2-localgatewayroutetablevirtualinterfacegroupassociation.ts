import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevirtualinterfacegroupassociation.html */

export interface Tag {
    /**
     * - The tag key.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(?!aws:.*)`
     * - _Minimum_: `1`
     * - _Maximum_: `127`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevirtualinterfacegroupassociation.html#cfn-ec2-localgatewayroutetablevirtualinterfacegroupassociation-tag-key */
    "Key"?: string | Intrinsic;
    /**
     * - The tag value.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(?!aws:.*)`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevirtualinterfacegroupassociation.html#cfn-ec2-localgatewayroutetablevirtualinterfacegroupassociation-tag-value */
    "Value"?: string | Intrinsic;
}

/**
 * Describes an association between a local gateway route table and a virtual interface group.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevirtualinterfacegroupassociation.html */

export interface EC2LocalGatewayRouteTableVirtualInterfaceGroupAssociation extends ResourceAttributes {
    "Type": "AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation";
    "Properties": {
        /**
         * - The ID of the local gateway route table.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevirtualinterfacegroupassociation.html#cfn-ec2-localgatewayroutetablevirtualinterfacegroupassociation-localgatewayroutetableid */
        "LocalGatewayRouteTableId": string | Intrinsic;
        /**
         * - The ID of the virtual interface group.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevirtualinterfacegroupassociation.html#cfn-ec2-localgatewayroutetablevirtualinterfacegroupassociation-localgatewayvirtualinterfacegroupid */
        "LocalGatewayVirtualInterfaceGroupId": string | Intrinsic;
        /**
         * - The tags assigned to the association.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-ec2-localgatewayroutetablevirtualinterfacegroupassociation-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-localgatewayroutetablevirtualinterfacegroupassociation.html#cfn-ec2-localgatewayroutetablevirtualinterfacegroupassociation-tags */
        "Tags"?: Tag[];
    };
}