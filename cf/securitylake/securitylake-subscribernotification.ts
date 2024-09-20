import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specify the configurations you want to use for HTTPS subscriber notification.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscribernotification.html */

export interface HttpsNotificationConfiguration {
  /**
   * - The key name for the notification subscription.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscribernotification.html#cfn-securitylake-subscribernotification-httpsnotificationconfiguration-authorizationapikeyname */
  AuthorizationApiKeyName?: string | Intrinsic
  /**
   * - The key value for the notification subscription.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscribernotification.html#cfn-securitylake-subscribernotification-httpsnotificationconfiguration-authorizationapikeyvalue */
  AuthorizationApiKeyValue?: string | Intrinsic
  /**
   * - The subscription endpoint in Security Lake. If you prefer notification with an HTTPS endpoint, populate this field.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^https?://.+$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscribernotification.html#cfn-securitylake-subscribernotification-httpsnotificationconfiguration-endpoint */
  Endpoint: string | Intrinsic
  /**
   * - The HTTPS method used for the notification subscription.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `POST | PUT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscribernotification.html#cfn-securitylake-subscribernotification-httpsnotificationconfiguration-httpmethod */
  HttpMethod?: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the EventBridge API destinations IAM role that you created. For more information about ARNs and how to use them in policies, see [Managing data access](https://docs.aws.amazon.com//security-lake/latest/userguide/subscriber-data-access.html) and [AWS Managed Policies](https://docs.aws.amazon.com/security-lake/latest/userguide/security-iam-awsmanpol.html) in the _Amazon Security Lake User Guide_.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:.*$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscribernotification.html#cfn-securitylake-subscribernotification-httpsnotificationconfiguration-targetrolearn */
  TargetRoleArn: string | Intrinsic
}

/**
 * Specify the configurations you want to use for subscriber notification. The subscriber is notified when new data is written to the data lake for sources that the subscriber consumes in Security Lake.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscribernotification.html */

export interface NotificationConfiguration {
  /**
   * - The configurations used for HTTPS subscriber notification.
   * - _Required_: No
   * - _Type_: [HttpsNotificationConfiguration](./aws-properties-securitylake-subscribernotification-httpsnotificationconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscribernotification.html#cfn-securitylake-subscribernotification-notificationconfiguration-httpsnotificationconfiguration */
  HttpsNotificationConfiguration?: HttpsNotificationConfiguration
  /**
   * - The configurations for SQS subscriber notification. The members of this structure are context-dependent.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscribernotification.html#cfn-securitylake-subscribernotification-notificationconfiguration-sqsnotificationconfiguration */
  SqsNotificationConfiguration?: any | Intrinsic
}

/**
 * Notifies the subscriber when new data is written to the data lake for the sources that the subscriber consumes in Security Lake. You can create only one subscriber notification per subscriber.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscribernotification.html */

export interface SecurityLakeSubscriberNotification extends ResourceAttributes {
  Type: 'AWS::SecurityLake::SubscriberNotification'
  Properties: {
    /**
     * - Specify the configurations you want to use for subscriber notification. The subscriber is notified when new data is written to the data lake for sources that the subscriber consumes in Security Lake.
     * - _Required_: Yes
     * - _Type_: [NotificationConfiguration](./aws-properties-securitylake-subscribernotification-notificationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscribernotification.html#cfn-securitylake-subscribernotification-notificationconfiguration */
    NotificationConfiguration: NotificationConfiguration
    /**
     * - The Amazon Resource Name (ARN) of the Security Lake subscriber.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:.*$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securitylake-subscribernotification.html#cfn-securitylake-subscribernotification-subscriberarn */
    SubscriberArn: string | Intrinsic
  }
}
