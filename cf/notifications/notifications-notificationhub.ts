import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Configures a `NotificationHub` for AWS User Notifications. For more information about notification hub, see the [AWS User Notifications User Guide](https://docs.aws.amazon.com/notifications/latest/userguide/notification-hubs.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-notificationhub.html */

export interface NotificationsNotificationHub extends ResourceAttributes {
    "Type": "AWS::Notifications::NotificationHub";
    "Properties": {
        /**
         * - The `NotificationHub` Region.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^([a-z]{1,2})-([a-z]{1,15}-)+([0-9])$`
         * - _Minimum_: `2`
         * - _Maximum_: `25`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-notificationhub.html#cfn-notifications-notificationhub-region */
        "Region": string | Intrinsic;
    };
}