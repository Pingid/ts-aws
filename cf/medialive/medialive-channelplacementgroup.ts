import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `Tags` property type specifies Property description not available. for an [AWS::MediaLive::ChannelPlacementGroup](./aws-resource-medialive-channelplacementgroup.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channelplacementgroup.html */

export interface Tags {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channelplacementgroup.html#cfn-medialive-channelplacementgroup-tags-key */
  Key?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channelplacementgroup.html#cfn-medialive-channelplacementgroup-tags-value */
  Value?: string | Intrinsic
}

/**
 * The `AWS::MediaLive::ChannelPlacementGroup` resource Property description not available. for MediaLive.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channelplacementgroup.html */

export interface MediaLiveChannelPlacementGroup extends ResourceAttributes {
  Type: 'AWS::MediaLive::ChannelPlacementGroup'
  Properties: {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channelplacementgroup.html#cfn-medialive-channelplacementgroup-clusterid */
    ClusterId?: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channelplacementgroup.html#cfn-medialive-channelplacementgroup-name */
    Name?: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channelplacementgroup.html#cfn-medialive-channelplacementgroup-nodes */
    Nodes?: (string | Intrinsic)[]
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [Array](./aws-properties-medialive-channelplacementgroup-tags.html) of [Tags](./aws-properties-medialive-channelplacementgroup-tags.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channelplacementgroup.html#cfn-medialive-channelplacementgroup-tags */
    Tags?: Tags[]
  }
}
