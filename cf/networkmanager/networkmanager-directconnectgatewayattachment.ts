import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Describes proposed changes to a network function group.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html */

export interface ProposedNetworkFunctionGroupChange {
    /**
     * - The proposed new attachment policy rule number for the network function group.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html#cfn-networkmanager-directconnectgatewayattachment-proposednetworkfunctiongroupchange-attachmentpolicyrulenumber */
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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html#cfn-networkmanager-directconnectgatewayattachment-proposednetworkfunctiongroupchange-networkfunctiongroupname */
    "NetworkFunctionGroupName"?: string | Intrinsic;
    /**
     * - The list of proposed changes to the key-value tags associated with the network function group.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-networkmanager-directconnectgatewayattachment-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html#cfn-networkmanager-directconnectgatewayattachment-proposednetworkfunctiongroupchange-tags */
    "Tags"?: Tag[];
}

/**
 * Describes a proposed segment change. In some cases, the segment change must first be evaluated and accepted.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html */

export interface ProposedSegmentChange {
    /**
     * - The rule number in the policy document that applies to this change.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html#cfn-networkmanager-directconnectgatewayattachment-proposedsegmentchange-attachmentpolicyrulenumber */
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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html#cfn-networkmanager-directconnectgatewayattachment-proposedsegmentchange-segmentname */
    "SegmentName"?: string | Intrinsic;
    /**
     * - The list of key-value tags that changed for the segment.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-networkmanager-directconnectgatewayattachment-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html#cfn-networkmanager-directconnectgatewayattachment-proposedsegmentchange-tags */
    "Tags"?: Tag[];
}

/**
 * Describes a tag.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html */

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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html#cfn-networkmanager-directconnectgatewayattachment-tag-key */
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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html#cfn-networkmanager-directconnectgatewayattachment-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Creates an AWS Direct Connect gateway attachment
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html */

export interface NetworkManagerDirectConnectGatewayAttachment extends ResourceAttributes {
    "Type": "AWS::NetworkManager::DirectConnectGatewayAttachment";
    "Properties": {
        /**
         * - Property description not available.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html#cfn-networkmanager-directconnectgatewayattachment-corenetworkid */
        "CoreNetworkId": string | Intrinsic;
        /**
         * - The Direct Connect gateway attachment ARN.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:[^:]{1,63}:directconnect::[^:]{0,63}:dx-gateway\/[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$`
         * - _Minimum_: `0`
         * - _Maximum_: `500`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html#cfn-networkmanager-directconnectgatewayattachment-directconnectgatewayarn */
        "DirectConnectGatewayArn": string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: Yes
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html#cfn-networkmanager-directconnectgatewayattachment-edgelocations */
        "EdgeLocations": (string | Intrinsic)[];
        /**
         * - Describes proposed changes to a network function group.
         * - _Required_: No
         * - _Type_: [ProposedNetworkFunctionGroupChange](./aws-properties-networkmanager-directconnectgatewayattachment-proposednetworkfunctiongroupchange.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html#cfn-networkmanager-directconnectgatewayattachment-proposednetworkfunctiongroupchange */
        "ProposedNetworkFunctionGroupChange"?: ProposedNetworkFunctionGroupChange;
        /**
         * - Describes a proposed segment change. In some cases, the segment change must first be evaluated and accepted.
         * - _Required_: No
         * - _Type_: [ProposedSegmentChange](./aws-properties-networkmanager-directconnectgatewayattachment-proposedsegmentchange.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html#cfn-networkmanager-directconnectgatewayattachment-proposedsegmentchange */
        "ProposedSegmentChange"?: ProposedSegmentChange;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-networkmanager-directconnectgatewayattachment-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html#cfn-networkmanager-directconnectgatewayattachment-tags */
        "Tags"?: Tag[];
    };
}