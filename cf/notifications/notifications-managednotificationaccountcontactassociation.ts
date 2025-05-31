import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Associates an Account Management Contact with a `ManagedNotificationConfiguration` for AWS User Notifications. For more information about AWS User Notifications, see the [AWS User Notifications User Guide](https://docs.aws.amazon.com/notifications/latest/userguide/what-is-service.html). For more information about Account Management Contacts, see the [AWS Account Management Reference Guide](https://docs.aws.amazon.com/accounts/latest/reference/API_AlternateContact.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-managednotificationaccountcontactassociation.html */

export interface NotificationsManagedNotificationAccountContactAssociation extends ResourceAttributes {
    "Type": "AWS::Notifications::ManagedNotificationAccountContactAssociation";
    "Properties": {
        /**
         * - The unique identifier of the notification contact associated with the AWS account. For more information about the contact types associated with an account, see the [AWS Account Management Reference Guide](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact-alternate.html#manage-acct-update-contact-alternate-orgs).
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `ACCOUNT_PRIMARY | ACCOUNT_ALTERNATE_SECURITY | ACCOUNT_ALTERNATE_OPERATIONS | ACCOUNT_ALTERNATE_BILLING`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-managednotificationaccountcontactassociation.html#cfn-notifications-managednotificationaccountcontactassociation-contactidentifier */
        "ContactIdentifier": string | Intrinsic;
        /**
         * - The ARN of the `ManagedNotificationConfiguration` to be associated with the `Channel`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:[-.a-z0-9]{1,63}:notifications::[0-9]{12}:managed-notification-configuration/category/[a-zA-Z0-9-]{3,64}/sub-category/[a-zA-Z0-9-]{3,64}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-managednotificationaccountcontactassociation.html#cfn-notifications-managednotificationaccountcontactassociation-managednotificationconfigurationarn */
        "ManagedNotificationConfigurationArn": string | Intrinsic;
    };
}