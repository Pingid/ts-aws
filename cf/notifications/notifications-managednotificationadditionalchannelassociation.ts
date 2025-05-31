import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Associates a `Channel` with a `ManagedNotificationAdditionalChannelAssociation` for AWS User Notifications. For more information about AWS User Notifications, see the [AWS User Notifications User Guide](https://docs.aws.amazon.com/notifications/latest/userguide/what-is-service.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-managednotificationadditionalchannelassociation.html */

export interface NotificationsManagedNotificationAdditionalChannelAssociation extends ResourceAttributes {
    "Type": "AWS::Notifications::ManagedNotificationAdditionalChannelAssociation";
    "Properties": {
        /**
         * - The ARN of the `Channel`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws:(chatbot|consoleapp|notifications-contacts):[a-zA-Z0-9-]*:[0-9]{12}:[a-zA-Z0-9-_.@]+/[a-zA-Z0-9/_.@:-]+$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-managednotificationadditionalchannelassociation.html#cfn-notifications-managednotificationadditionalchannelassociation-channelarn */
        "ChannelArn": string | Intrinsic;
        /**
         * - The ARN of the `ManagedNotificationAdditionalChannelAssociation` associated with the `Channel`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:[-.a-z0-9]{1,63}:notifications::[0-9]{12}:managed-notification-configuration/category/[a-zA-Z0-9-]{3,64}/sub-category/[a-zA-Z0-9-]{3,64}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-managednotificationadditionalchannelassociation.html#cfn-notifications-managednotificationadditionalchannelassociation-managednotificationconfigurationarn */
        "ManagedNotificationConfigurationArn": string | Intrinsic;
    };
}