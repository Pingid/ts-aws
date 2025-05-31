import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * An object that defines an Amazon EventBridge destination for email events. You can use Amazon EventBridge to send notifications when certain email events occur.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html */

export interface EventBridgeDestination {
    /**
     * - The Amazon Resource Name (ARN) of the Amazon EventBridge bus to publish email events to. Only the default bus is supported.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws[a-z0-9-]*:events:[a-z0-9-]+:\d{12}:event-bus/[^:]+$`
     * - _Minimum_: `36`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html#cfn-ses-configurationseteventdestination-eventbridgedestination-eventbusarn */
    "EventBusArn": string | Intrinsic;
}

/**
 * Contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.
 * Event destinations, such as Amazon SNS, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html */

export interface SnsDestination {
    /**
     * - The ARN of the Amazon SNS topic for email sending events. You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) Amazon SNS operation.
     * - For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html).
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws[a-z0-9-]*:sns:[a-z0-9-]+:\d{12}:[^:]+$`
     * - _Minimum_: `36`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html#cfn-ses-configurationseteventdestination-snsdestination-topicarn */
    "TopicARN": string | Intrinsic;
}

/**
 * An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html */

export interface KinesisFirehoseDestination {
    /**
     * - The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html#cfn-ses-configurationseteventdestination-kinesisfirehosedestination-deliverystreamarn */
    "DeliveryStreamARN": string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the IAM role that the Amazon SES API v2 uses to send email events to the Amazon Kinesis Data Firehose stream.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html#cfn-ses-configurationseteventdestination-kinesisfirehosedestination-iamrolearn */
    "IAMRoleARN": string | Intrinsic;
}

/**
 * An object that defines the dimension configuration to use when you send email events to Amazon CloudWatch.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html */

export interface DimensionConfiguration {
    /**
     * - The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email. This value has to meet the following criteria:
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_-]{1,256}$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html#cfn-ses-configurationseteventdestination-dimensionconfiguration-defaultdimensionvalue */
    "DefaultDimensionValue": string | Intrinsic;
    /**
     * - The name of an Amazon CloudWatch dimension associated with an email sending metric. The name has to meet the following criteria:
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_:-]{1,256}$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html#cfn-ses-configurationseteventdestination-dimensionconfiguration-dimensionname */
    "DimensionName": string | Intrinsic;
    /**
     * - The location where the Amazon SES API v2 finds the value of a dimension to publish to Amazon CloudWatch. To use the message tags that you specify using an `X-SES-MESSAGE-TAGS` header or a parameter to the `SendEmail` or `SendRawEmail` API, choose `messageTag`. To use your own email headers, choose `emailHeader`. To use link tags, choose `linkTag`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `messageTag | emailHeader | linkTag`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html#cfn-ses-configurationseteventdestination-dimensionconfiguration-dimensionvaluesource */
    "DimensionValueSource": string | Intrinsic;
}

/**
 * An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html */

export interface CloudWatchDestination {
    /**
     * - An array of objects that define the dimensions to use when you send email events to Amazon CloudWatch.
     * - _Required_: No
     * - _Type_: Array of [DimensionConfiguration](./aws-properties-ses-configurationseteventdestination-dimensionconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html#cfn-ses-configurationseteventdestination-cloudwatchdestination-dimensionconfigurations */
    "DimensionConfigurations"?: DimensionConfiguration[];
}

/**
 * In the Amazon SES API v2, _events_ include message sends, deliveries, opens, clicks, bounces, complaints and delivery delays. _Event destinations_ are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html */

export interface EventDestination {
    /**
     * - An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.
     * - _Required_: No
     * - _Type_: [CloudWatchDestination](./aws-properties-ses-configurationseteventdestination-cloudwatchdestination.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html#cfn-ses-configurationseteventdestination-eventdestination-cloudwatchdestination */
    "CloudWatchDestination"?: CloudWatchDestination;
    /**
     * - If `true`, the event destination is enabled. When the event destination is enabled, the specified event types are sent to the destinations in this `EventDestinationDefinition`.
     * - If `false`, the event destination is disabled. When the event destination is disabled, events aren't sent to the specified destinations.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html#cfn-ses-configurationseteventdestination-eventdestination-enabled */
    "Enabled"?: boolean | Intrinsic;
    /**
     * - An object that defines an Amazon EventBridge destination for email events. You can use Amazon EventBridge to send notifications when certain email events occur.
     * - _Required_: No
     * - _Type_: [EventBridgeDestination](./aws-properties-ses-configurationseteventdestination-eventbridgedestination.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html#cfn-ses-configurationseteventdestination-eventdestination-eventbridgedestination */
    "EventBridgeDestination"?: EventBridgeDestination;
    /**
     * - An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.
     * - _Required_: No
     * - _Type_: [KinesisFirehoseDestination](./aws-properties-ses-configurationseteventdestination-kinesisfirehosedestination.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html#cfn-ses-configurationseteventdestination-eventdestination-kinesisfirehosedestination */
    "KinesisFirehoseDestination"?: KinesisFirehoseDestination;
    /**
     * - The types of events that Amazon SES sends to the specified event destinations.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html#cfn-ses-configurationseteventdestination-eventdestination-matchingeventtypes */
    "MatchingEventTypes": (string | Intrinsic)[];
    /**
     * - The name of the event destination. The name must meet the following requirements:
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_-]{0,64}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html#cfn-ses-configurationseteventdestination-eventdestination-name */
    "Name"?: string | Intrinsic;
    /**
     * - An object that contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.
     * - _Required_: No
     * - _Type_: [SnsDestination](./aws-properties-ses-configurationseteventdestination-snsdestination.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html#cfn-ses-configurationseteventdestination-eventdestination-snsdestination */
    "SnsDestination"?: SnsDestination;
}

/**
 * Specifies a configuration set event destination. _Events_ include message sends, deliveries, opens, clicks, bounces, and complaints. _Event destinations_ are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.
 * A single configuration set can include more than one event destination.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html */

export interface SESConfigurationSetEventDestination extends ResourceAttributes {
    "Type": "AWS::SES::ConfigurationSetEventDestination";
    "Properties": {
        /**
         * - The name of the configuration set that contains the event destination.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html#cfn-ses-configurationseteventdestination-configurationsetname */
        "ConfigurationSetName": string | Intrinsic;
        /**
         * - An object that defines the event destination.
         * - _Required_: Yes
         * - _Type_: [EventDestination](./aws-properties-ses-configurationseteventdestination-eventdestination.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html#cfn-ses-configurationseteventdestination-eventdestination */
        "EventDestination": EventDestination;
    };
}