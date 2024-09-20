import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Describes the VPC options.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html */

export interface VpcOptions {
  /**
   * - Indicates whether appliance mode is supported. If enabled, traffic flow between a source and destination use the same Availability Zone for the VPC attachment for the lifetime of that flow. The default value is `false`.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-vpcoptions-appliancemodesupport */
  ApplianceModeSupport?: boolean | Intrinsic
  /**
   * - Indicates whether IPv6 is supported.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-vpcoptions-ipv6support */
  Ipv6Support?: boolean | Intrinsic
}

/**
 * Describes proposed changes to a network function group.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html */

export interface ProposedNetworkFunctionGroupChange {
  /**
   * - The proposed new attachment policy rule number for the network function group.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-proposednetworkfunctiongroupchange-attachmentpolicyrulenumber */
  AttachmentPolicyRuleNumber?: number | Intrinsic
  /**
   * - The proposed name change for the network function group name.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[\s\S]*`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-proposednetworkfunctiongroupchange-networkfunctiongroupname */
  NetworkFunctionGroupName?: string | Intrinsic
  /**
   * - The list of proposed changes to the key-value tags associated with the network function group.
   * - _Required_: No
   * - _Type_: Array of [Tag](./aws-properties-networkmanager-vpcattachment-tag.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-proposednetworkfunctiongroupchange-tags */
  Tags?: Tag[]
}

/**
 * Describes a proposed segment change. In some cases, the segment change must first be evaluated and accepted.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html */

export interface ProposedSegmentChange {
  /**
   * - The rule number in the policy document that applies to this change.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-proposedsegmentchange-attachmentpolicyrulenumber */
  AttachmentPolicyRuleNumber?: number | Intrinsic
  /**
   * - The name of the segment to change.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[\s\S]*`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-proposedsegmentchange-segmentname */
  SegmentName?: string | Intrinsic
  /**
   * - The list of key-value tags that changed for the segment.
   * - _Required_: No
   * - _Type_: Array of [Tag](./aws-properties-networkmanager-vpcattachment-tag.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-proposedsegmentchange-tags */
  Tags?: Tag[]
}

/**
 * Describes a tag.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-tag-key */
  Key: string | Intrinsic
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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-tag-value */
  Value: string | Intrinsic
}

/**
 * Creates a VPC attachment on an edge location of a core network.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html */

export interface NetworkManagerVpcAttachment extends ResourceAttributes {
  Type: 'AWS::NetworkManager::VpcAttachment'
  Properties: {
    /**
     * - The core network ID.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-corenetworkid */
    CoreNetworkId: string | Intrinsic
    /**
     * - Options for creating the VPC attachment.
     * - _Required_: No
     * - _Type_: [VpcOptions](./aws-properties-networkmanager-vpcattachment-vpcoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-options */
    Options?: VpcOptions
    /**
     * - Describes proposed changes to a network function group.
     * - _Required_: No
     * - _Type_: [ProposedNetworkFunctionGroupChange](./aws-properties-networkmanager-vpcattachment-proposednetworkfunctiongroupchange.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-proposednetworkfunctiongroupchange */
    ProposedNetworkFunctionGroupChange?: ProposedNetworkFunctionGroupChange
    /**
     * - Describes a proposed segment change. In some cases, the segment change must first be evaluated and accepted.
     * - _Required_: No
     * - _Type_: [ProposedSegmentChange](./aws-properties-networkmanager-vpcattachment-proposedsegmentchange.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-proposedsegmentchange */
    ProposedSegmentChange?: ProposedSegmentChange
    /**
     * - The subnet ARNs.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-subnetarns */
    SubnetArns: (string | Intrinsic)[]
    /**
     * - The tags associated with the VPC attachment.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-networkmanager-vpcattachment-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-tags */
    Tags?: Tag[]
    /**
     * - The ARN of the VPC attachment.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-vpcarn */
    VpcArn: string | Intrinsic
  }
}
