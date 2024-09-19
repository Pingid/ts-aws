import type { Intrinsic } from '../intrinsic/index.js' /**
 * Designates the IAM role and Amazon Simple Notification Service (SNS) topic to use to record SNS logs.
 * To perform this action outside of the console, you must configure the SNS topic to allow the role `AWSServiceRoleForFMS` to publish SNS logs. For more information, see [Firewall Manager required permissions for API actions](https://docs.aws.amazon.com/waf/latest/developerguide/fms-api-permissions-ref.html) in the _AWS Firewall Manager Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-notificationchannel.html */

export interface FMSNotificationChannel {
  Type: 'AWS::FMS::NotificationChannel'
  Properties: {
    /**
     * - The Amazon Resource Name (ARN) of the IAM role that allows Amazon SNS to record AWS Firewall Manager activity.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([^\s]+)$`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-notificationchannel.html#cfn-fms-notificationchannel-snsrolename */
    SnsRoleName: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the SNS topic that collects notifications from AWS Firewall Manager.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([^\s]+)$`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fms-notificationchannel.html#cfn-fms-notificationchannel-snstopicarn */
    SnsTopicArn: string | Intrinsic
  }
}
