import type { Intrinsic } from '../intrinsic/index.js' /**
 * You can use the `AWS::SupportApp::AccountAlias` resource to specify your AWS account when you configure the AWS Support App in Slack. Your alias name appears on the AWS Support App page in the Support Center Console and in messages from the AWS Support App. You can use this alias to identify the account you've configured with the AWS Support App.
 * For more information, see [AWS Support App in Slack](https://docs.aws.amazon.com/awssupport/latest/user/aws-support-app-for-slack.html) in the _AWS Support User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-accountalias.html */

export interface SupportAppAccountAlias {
  Type: 'AWS::SupportApp::AccountAlias'
  Properties: {
    /**
     * - An alias or short name for an AWS account.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[\w\- ]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `30`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-accountalias.html#cfn-supportapp-accountalias-accountalias */
    AccountAlias: string | Intrinsic
  }
}
