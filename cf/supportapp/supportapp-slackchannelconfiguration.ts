import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * You can use the `AWS::SupportApp::SlackChannelConfiguration` resource to specify your AWS account when you configure the AWS Support App. This resource includes the following information:
 * *   The Slack channel name and ID
 *     
 * *   The team ID in Slack
 *     
 * *   The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role
 *     
 * *   Whether you want the AWS Support App to notify you when your support cases are created, updated, resolved, or reopened
 *     
 * *   The case severity that you want to get notified for
 * For more information, see the following topics in the _AWS Support User Guide_:
 * *   [AWS Support App in Slack](https://docs.aws.amazon.com/awssupport/latest/user/aws-support-app-for-slack.html)
 *     
 * *   [Creating AWS Support App in Slack resources with AWS CloudFormation](https://docs.aws.amazon.com/awssupport/latest/user/creating-resources-with-cloudformation.html)
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackchannelconfiguration.html */

export interface SupportAppSlackChannelConfiguration extends ResourceAttributes {
    "Type": "AWS::SupportApp::SlackChannelConfiguration";
    "Properties": {
        /**
         * - The channel ID in Slack. This ID identifies a channel within a Slack workspace.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^\S+$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackchannelconfiguration.html#cfn-supportapp-slackchannelconfiguration-channelid */
        "ChannelId": string | Intrinsic;
        /**
         * - The channel name in Slack. This is the channel where you invite the AWS Support App.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^.+$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackchannelconfiguration.html#cfn-supportapp-slackchannelconfiguration-channelname */
        "ChannelName"?: string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the IAM role for this Slack channel configuration. The AWS Support App uses this role to perform AWS Support and Service Quotas actions on your behalf.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws[-a-z0-9]*:iam::[0-9]{12}:role\/(.+)$`
         * - _Minimum_: `31`
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackchannelconfiguration.html#cfn-supportapp-slackchannelconfiguration-channelrolearn */
        "ChannelRoleArn": string | Intrinsic;
        /**
         * - Whether to get notified when a correspondence is added to your support cases.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackchannelconfiguration.html#cfn-supportapp-slackchannelconfiguration-notifyonaddcorrespondencetocase */
        "NotifyOnAddCorrespondenceToCase"?: boolean | Intrinsic;
        /**
         * - The case severity for your support cases that you want to receive notifications. You can specify `none`, `all`, or `high`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `none | all | high`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackchannelconfiguration.html#cfn-supportapp-slackchannelconfiguration-notifyoncaseseverity */
        "NotifyOnCaseSeverity": string | Intrinsic;
        /**
         * - Whether to get notified when your support cases are created or reopened
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackchannelconfiguration.html#cfn-supportapp-slackchannelconfiguration-notifyoncreateorreopencase */
        "NotifyOnCreateOrReopenCase"?: boolean | Intrinsic;
        /**
         * - Whether to get notified when your support cases are resolved.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackchannelconfiguration.html#cfn-supportapp-slackchannelconfiguration-notifyonresolvecase */
        "NotifyOnResolveCase"?: boolean | Intrinsic;
        /**
         * - The team ID in Slack. This ID uniquely identifies a Slack workspace.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^\S+$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackchannelconfiguration.html#cfn-supportapp-slackchannelconfiguration-teamid */
        "TeamId": string | Intrinsic;
    };
}