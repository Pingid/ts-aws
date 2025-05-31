import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Describes proposed changes to a network function group.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html */

export interface ProposedNetworkFunctionGroupChange {
    /**
     * - The proposed new attachment policy rule number for the network function group.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html#cfn-networkmanager-transitgatewayroutetableattachment-proposednetworkfunctiongroupchange-attachmentpolicyrulenumber */
    "AttachmentPolicyRuleNumber"?: number | Intrinsic;
    /**
     * - The proposed name change for the network function group name.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\s\S]*`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html#cfn-networkmanager-transitgatewayroutetableattachment-proposednetworkfunctiongroupchange-networkfunctiongroupname */
    "NetworkFunctionGroupName"?: string | Intrinsic;
    /**
     * - The list of proposed changes to the key-value tags associated with the network function group.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-networkmanager-transitgatewayroutetableattachment-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html#cfn-networkmanager-transitgatewayroutetableattachment-proposednetworkfunctiongroupchange-tags */
    "Tags"?: Tag[];
}

/**
 * Describes a proposed segment change. In some cases, the segment change must first be evaluated and accepted.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html */

export interface ProposedSegmentChange {
    /**
     * - The rule number in the policy document that applies to this change.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html#cfn-networkmanager-transitgatewayroutetableattachment-proposedsegmentchange-attachmentpolicyrulenumber */
    "AttachmentPolicyRuleNumber"?: number | Intrinsic;
    /**
     * - The name of the segment to change.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\s\S]*`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html#cfn-networkmanager-transitgatewayroutetableattachment-proposedsegmentchange-segmentname */
    "SegmentName"?: string | Intrinsic;
    /**
     * - The list of key-value tags that changed for the segment.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-networkmanager-transitgatewayroutetableattachment-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html#cfn-networkmanager-transitgatewayroutetableattachment-proposedsegmentchange-tags */
    "Tags"?: Tag[];
}

/**
 * Describes a tag.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html */

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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html#cfn-networkmanager-transitgatewayroutetableattachment-tag-key */
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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html#cfn-networkmanager-transitgatewayroutetableattachment-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Creates a transit gateway route table attachment.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html */

export interface NetworkManagerTransitGatewayRouteTableAttachment extends ResourceAttributes {
    "Type": "AWS::NetworkManager::TransitGatewayRouteTableAttachment";
    "Properties": {
        /**
         * - The name of the network function group.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[\s\S]*`
         * - _Minimum_: `0`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html#cfn-networkmanager-transitgatewayroutetableattachment-networkfunctiongroupname */
        "NetworkFunctionGroupName"?: string | Intrinsic;
        /**
         * - The ID of the transit gateway peering.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^peering-([0-9a-f]{8,17})$`
         * - _Minimum_: `0`
         * - _Maximum_: `50`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html#cfn-networkmanager-transitgatewayroutetableattachment-peeringid */
        "PeeringId": string | Intrinsic;
        /**
         * - Describes proposed changes to a network function group.
         * - _Required_: No
         * - _Type_: [ProposedNetworkFunctionGroupChange](./aws-properties-networkmanager-transitgatewayroutetableattachment-proposednetworkfunctiongroupchange.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html#cfn-networkmanager-transitgatewayroutetableattachment-proposednetworkfunctiongroupchange */
        "ProposedNetworkFunctionGroupChange"?: ProposedNetworkFunctionGroupChange;
        /**
         * - This property is read-only. Values can't be assigned to it.
         * - _Required_: No
         * - _Type_: [ProposedSegmentChange](./aws-properties-networkmanager-transitgatewayroutetableattachment-proposedsegmentchange.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html#cfn-networkmanager-transitgatewayroutetableattachment-proposedsegmentchange */
        "ProposedSegmentChange"?: ProposedSegmentChange;
        /**
         * - The list of key-value pairs associated with the transit gateway route table attachment.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-networkmanager-transitgatewayroutetableattachment-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html#cfn-networkmanager-transitgatewayroutetableattachment-tags */
        "Tags"?: Tag[];
        /**
         * - The ARN of the transit gateway attachment route table. For example, `"TransitGatewayRouteTableArn": "arn:aws:ec2:us-west-2:123456789012:transit-gateway-route-table/tgw-rtb-9876543210123456"`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\s\S]*`
         * - _Minimum_: `0`
         * - _Maximum_: `500`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html#cfn-networkmanager-transitgatewayroutetableattachment-transitgatewayroutetablearn */
        "TransitGatewayRouteTableArn": string | Intrinsic;
    };
}