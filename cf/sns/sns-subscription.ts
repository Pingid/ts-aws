import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `AWS::SNS::Subscription` resource subscribes an endpoint to an Amazon SNS topic. For a subscription to be created, the owner of the endpoint must\` confirm the subscription.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html */

export interface SNSSubscription extends ResourceAttributes {
  Type: 'AWS::SNS::Subscription'
  Properties: {
    /**
     * - The delivery policy JSON assigned to the subscription. Enables the subscriber to define the message delivery retry strategy in the case of an HTTP/S endpoint subscribed to the topic. For more information, see `[GetSubscriptionAttributes](https://docs.aws.amazon.com/sns/latest/api/API_GetSubscriptionAttributes.html)` in the _Amazon SNS API Reference_ and [Message delivery retries](https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.html) in the _Amazon SNS Developer Guide_.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-deliverypolicy */
    DeliveryPolicy?: any | Intrinsic
    /**
     * - The subscription's endpoint. The endpoint value depends on the protocol that you specify. For more information, see the `Endpoint` parameter of the `[Subscribe](https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html)` action in the _Amazon SNS API Reference_.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-endpoint */
    Endpoint?: string | Intrinsic
    /**
     * - The filter policy JSON assigned to the subscription. Enables the subscriber to filter out unwanted messages. For more information, see `[GetSubscriptionAttributes](https://docs.aws.amazon.com/sns/latest/api/API_GetSubscriptionAttributes.html)` in the _Amazon SNS API Reference_ and [Message filtering](https://docs.aws.amazon.com/sns/latest/dg/sns-message-filtering.html) in the _Amazon SNS Developer Guide_.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-filterpolicy */
    FilterPolicy?: any | Intrinsic
    /**
     * - This attribute lets you choose the filtering scope by using one of the following string value types:
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-filterpolicyscope */
    FilterPolicyScope?: string | Intrinsic
    /**
     * - The subscription's protocol. For more information, see the `Protocol` parameter of the `[Subscribe](https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html)` action in the _Amazon SNS API Reference_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-protocol */
    Protocol: string | Intrinsic
    /**
     * - When set to `true`, enables raw message delivery. Raw messages don't contain any JSON formatting and can be sent to Amazon SQS and HTTP/S endpoints. For more information, see `[GetSubscriptionAttributes](https://docs.aws.amazon.com/sns/latest/api/API_GetSubscriptionAttributes.html)` in the _Amazon SNS API Reference_.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-rawmessagedelivery */
    RawMessageDelivery?: boolean | Intrinsic
    /**
     * - When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can't be delivered due to client errors (for example, when the subscribed endpoint is unreachable) or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held in the dead-letter queue for further analysis or reprocessing.
     * - For more information about the redrive policy and dead-letter queues, see [Amazon SQS dead-letter queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html) in the _Amazon SQS Developer Guide_.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-redrivepolicy */
    RedrivePolicy?: any | Intrinsic
    /**
     * - For cross-region subscriptions, the region in which the topic resides.
     * - If no region is specified, AWS CloudFormation uses the region of the caller as the default.
     * - If you perform an update operation that only updates the `Region` property of a `AWS::SNS::Subscription` resource, that operation will fail unless you are either:
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-region */
    Region?: string | Intrinsic
    /**
     * - Specifies whether Amazon SNS resends the notification to the subscription when a message's attribute changes.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-replaypolicy */
    ReplayPolicy?: any | Intrinsic
    /**
     * - This property applies only to Amazon Data Firehose delivery stream subscriptions. Specify the ARN of the IAM role that has the following:
     * - Specifying a valid ARN for this attribute is required for Firehose delivery stream subscriptions. For more information, see [Fanout to Amazon Data Firehose delivery streams](https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html) in the _Amazon SNS Developer Guide._
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-subscriptionrolearn */
    SubscriptionRoleArn?: string | Intrinsic
    /**
     * - The ARN of the topic to subscribe to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-topicarn */
    TopicArn: string | Intrinsic
  }
}
