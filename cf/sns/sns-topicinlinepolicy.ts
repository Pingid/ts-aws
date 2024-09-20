import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `AWS::SNS::TopicInlinePolicy` resource associates one Amazon SNS topic with one policy.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicinlinepolicy.html */

export interface SNSTopicInlinePolicy extends ResourceAttributes {
  Type: 'AWS::SNS::TopicInlinePolicy'
  Properties: {
    /**
     * - A policy document that contains permissions to add to the specified Amazon SNS topic.
     * - _Required_: Yes
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicinlinepolicy.html#cfn-sns-topicinlinepolicy-policydocument */
    PolicyDocument: any | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the topic to which you want to add the policy.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicinlinepolicy.html#cfn-sns-topicinlinepolicy-topicarn */
    TopicArn: string | Intrinsic
  }
}
