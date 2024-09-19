import type { Intrinsic } from '../intrinsic/index.js' /**
 * The `AWS::Macie::Session` resource represents the Amazon Macie service and certain configuration settings for an Amazon Macie account in a specific AWS Region. It enables Macie to become operational for a specific account in a specific Region. An account can have only one session in each Region.
 * You must create an `AWS::Macie::Session` resource for an account before you can create other types of resources for the account. Use a [DependsOn attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) to ensure that an `AWS::Macie::Session` resource is created before other Macie resources are created for an account. For example, `"DependsOn": "Session"`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-session.html */

export interface MacieSession {
  Type: 'AWS::Macie::Session'
  Properties: {
    /**
     * - Specifies how often Amazon Macie publishes updates to policy findings for the account. This includes publishing updates to AWS Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events). Valid values are:
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `FIFTEEN_MINUTES | ONE_HOUR | SIX_HOURS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-session.html#cfn-macie-session-findingpublishingfrequency */
    FindingPublishingFrequency?: string | Intrinsic
    /**
     * - The status of Amazon Macie for the account. Valid values are: `ENABLED`, start or resume all Macie activities for the account; and, `PAUSED`, suspend all Macie activities for the account.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | PAUSED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-session.html#cfn-macie-session-status */
    Status?: string | Intrinsic
  }
}
