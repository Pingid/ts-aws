import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates an [`EventRule`](https://docs.aws.amazon.com/notifications/latest/userguide/glossary.html) that is associated with a specified `NotificationConfiguration`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-eventrule.html */

export interface NotificationsEventRule extends ResourceAttributes {
    "Type": "AWS::Notifications::EventRule";
    "Properties": {
        /**
         * - An additional event pattern used to further filter the events this `EventRule` receives.
         * - For more information, see [Amazon EventBridge event patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html) in the _Amazon EventBridge User Guide._
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `0`
         * - _Maximum_: `4096`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-eventrule.html#cfn-notifications-eventrule-eventpattern */
        "EventPattern"?: string | Intrinsic;
        /**
         * - The event type this rule should match with the EventBridge events. It must match with atleast one of the valid EventBridge event types. For example, Amazon EC2 Instance State change Notification and Amazon CloudWatch State Change. For more information, see [Event delivery from AWS services](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level) in the _Amazon EventBridge User Guide_.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^([a-zA-Z0-9 \-\(\)])+$`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-eventrule.html#cfn-notifications-eventrule-eventtype */
        "EventType": string | Intrinsic;
        /**
         * - The ARN for the `NotificationConfiguration` associated with this `EventRule`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws:notifications::[0-9]{12}:configuration/[a-z0-9]{27}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-eventrule.html#cfn-notifications-eventrule-notificationconfigurationarn */
        "NotificationConfigurationArn": string | Intrinsic;
        /**
         * - A list of AWS Regions that send events to this `EventRule`.
         * - _Required_: Yes
         * - _Type_: Array of String
         * - _Maximum_: `25`
         * - _Minimum_: `2 | 1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-eventrule.html#cfn-notifications-eventrule-regions */
        "Regions": (string | Intrinsic)[];
        /**
         * - The event source this rule should match with the EventBridge event sources. It must match with atleast one of the valid EventBridge event sources. Only AWS service sourced events are supported. For example, `aws.ec2` and `aws.cloudwatch`. For more information, see [Event delivery from AWS services](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-delivery-level) in the _Amazon EventBridge User Guide_.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^aws.([a-z0-9\-])+$`
         * - _Minimum_: `1`
         * - _Maximum_: `36`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-notifications-eventrule.html#cfn-notifications-eventrule-source */
        "Source": string | Intrinsic;
    };
}