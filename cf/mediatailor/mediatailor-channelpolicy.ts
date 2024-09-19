import type { Intrinsic } from '../intrinsic/index.js' /**
 * Specifies an IAM policy for the channel. IAM policies are used to control access to your channel.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channelpolicy.html */

export interface MediaTailorChannelPolicy {
  Type: 'AWS::MediaTailor::ChannelPolicy'
  Properties: {
    /**
     * - The name of the channel associated with this Channel Policy.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channelpolicy.html#cfn-mediatailor-channelpolicy-channelname */
    ChannelName: string | Intrinsic
    /**
     * - The IAM policy for the channel. IAM policies are used to control access to your channel.
     * - _Required_: Yes
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channelpolicy.html#cfn-mediatailor-channelpolicy-policy */
    Policy: any | Intrinsic
  }
}
