import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * ###### Note
 * 
 * AWS Chatbot is now Amazon Q Developer. [Learn more](https://docs.aws.amazon.com/chatbot/latest/adminguide/service-rename.html)
 * 
 * `Type` attribute values remain unchanged.
 * The Tag type enables you to specify a key-value pair that can be used to store information about a Slack channel configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html */

export interface Tag {
    /**
     * - A string used to identify this tag. You can specify a maximum of 128 characters for a tag key. Tags owned by Amazon Web Services (AWS) have the reserved prefix: `aws:`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-tag-key */
    "Key": string | Intrinsic;
    /**
     * - A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-tag-value */
    "Value": string | Intrinsic;
}

/**
 * ###### Note
 * 
 * AWS Chatbot is now Amazon Q Developer. [Learn more](https://docs.aws.amazon.com/chatbot/latest/adminguide/service-rename.html)
 * 
 * `Type` attribute values remain unchanged.
 * The `AWS::Chatbot::SlackChannelConfiguration` resource configures a Slack channel to allow users to use Amazon Q Developer with AWS CloudFormation templates.
 * This resource requires some setup to be done in the Amazon Q Developer in chat applications console. To provide the required Slack workspace ID, you must perform the initial authorization flow with Slack in the Amazon Q Developer in chat applications console, then copy and paste the workspace ID from the console. For more details, see steps 1-3 in [Tutorial: Get started with Slack](https://docs.aws.amazon.com/chatbot/latest/adminguide/slack-setup.html#slack-client-setup) in the _Amazon Q Developer in chat applications User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html */

export interface ChatbotSlackChannelConfiguration extends ResourceAttributes {
    "Type": "AWS::Chatbot::SlackChannelConfiguration";
    "Properties": {
        /**
         * - The name of the configuration.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[A-Za-z0-9-_]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-configurationname */
        "ConfigurationName": string | Intrinsic;
        /**
         * - Links a list of resource ARNs (for example, custom action ARNs) to a Slack channel configuration for Amazon Q Developer.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-customizationresourcearns */
        "CustomizationResourceArns"?: (string | Intrinsic)[];
        /**
         * - The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied as a default if this is not set.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-guardrailpolicies */
        "GuardrailPolicies"?: (string | Intrinsic)[];
        /**
         * - The ARN of the IAM role that defines the permissions for Amazon Q Developer.
         * - This is a user-defined role that Amazon Q Developer will assume. This is not the service-linked role. For more information, see [IAM Policies for Amazon Q Developerin chat applications](https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html).
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:(aws[a-zA-Z-]*)?:[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-iamrolearn */
        "IamRoleArn": string | Intrinsic;
        /**
         * - Specifies the logging level for this configuration. This property affects the log entries pushed to Amazon CloudWatch Logs.
         * - Logging levels include `ERROR`, `INFO`, or `NONE`.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^(ERROR|INFO|NONE)$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-logginglevel */
        "LoggingLevel"?: string | Intrinsic;
        /**
         * - The ID of the Slack channel.
         * - To get the ID, open Slack, right click on the channel name in the left pane, then choose Copy Link. The channel ID is the character string at the end of the URL. For example, `ABCBBLZZZ`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[A-Za-z0-9]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-slackchannelid */
        "SlackChannelId": string | Intrinsic;
        /**
         * - The ID of the Slack workspace authorized with Amazon Q Developer.
         * - To get the workspace ID, you must perform the initial authorization flow with Slack in the Amazon Q Developer in chat applications console. Then you can copy and paste the workspace ID from the console. For more details, see steps 1-3 in [Tutorial: Get started with Slack](https://docs.aws.amazon.com/chatbot/latest/adminguide/slack-setup.html#slack-client-setup) in the _Amazon Q Developer in chat applications User Guide_.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[0-9A-Z]{1,255}$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-slackworkspaceid */
        "SlackWorkspaceId": string | Intrinsic;
        /**
         * - The ARNs of the SNS topics that deliver notifications to Amazon Q Developer.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-snstopicarns */
        "SnsTopicArns"?: (string | Intrinsic)[];
        /**
         * - The tags to add to the configuration.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-chatbot-slackchannelconfiguration-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-tags */
        "Tags"?: Tag[];
        /**
         * - Enables use of a user role requirement in your chat configuration.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-userrolerequired */
        "UserRoleRequired"?: boolean | Intrinsic;
    };
}