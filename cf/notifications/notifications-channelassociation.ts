import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::Notifications::ChannelAssociation` resource associates a `Channel` with a `NotificationConfiguration` for AWS User Notifications. For more information about AWS User Notifications, see the [AWS User Notifications User Guide](https://docs.aws.amazon.com/notifications/latest/userguide/what-is-service.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-channelassociation.html */

export interface NotificationsChannelAssociation extends ResourceAttributes {
    "Type": "AWS::Notifications::ChannelAssociation";
    "Properties": {
        /**
         * - The Amazon Resource Name (ARN) of the `Channel`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws:(chatbot|consoleapp|notifications-contacts):[a-zA-Z0-9-]*:[0-9]{12}:[a-zA-Z0-9-_.@]+/[a-zA-Z0-9/_.@:-]+$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-channelassociation.html#cfn-notifications-channelassociation-arn */
        "Arn": string | Intrinsic;
        /**
         * - The ARN of the `NotificationConfiguration` associated with the `Channel`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws:notifications::[0-9]{12}:configuration\/[a-z0-9]{27}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-channelassociation.html#cfn-notifications-channelassociation-notificationconfigurationarn */
        "NotificationConfigurationArn": string | Intrinsic;
    };
}