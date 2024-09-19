import type { Intrinsic } from '../intrinsic/index.js' /**
 * You can use the `AWS::SupportApp::SlackWorkspaceConfiguration` resource to specify your Slack workspace configuration. This resource configures your AWS account so that you can use the specified Slack workspace in the AWS Support App. This resource includes the following information:
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackworkspaceconfiguration.html */

export interface SupportAppSlackWorkspaceConfiguration {
  Type: 'AWS::SupportApp::SlackWorkspaceConfiguration'
  Properties: {
    /**
     * - The team ID in Slack. This ID uniquely identifies a Slack workspace, such as `T012ABCDEFG`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^\S+$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackworkspaceconfiguration.html#cfn-supportapp-slackworkspaceconfiguration-teamid */
    TeamId: string | Intrinsic
    /**
     * - An identifier used to update an existing Slack workspace configuration in AWS CloudFormation, such as `100`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[0-9]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackworkspaceconfiguration.html#cfn-supportapp-slackworkspaceconfiguration-versionid */
    VersionId?: string | Intrinsic
  }
}
