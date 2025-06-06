import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A JSON string that contains a list of Insights types that are logged on a trail.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html */

export interface InsightSelector {
    /**
     * - The type of Insights events to log on a trail. `ApiCallRateInsight` and `ApiErrorRateInsight` are valid Insight types.
     * - The `ApiCallRateInsight` Insights type analyzes write-only management API calls that are aggregated per minute against a baseline API call volume.
     * - The `ApiErrorRateInsight` Insights type analyzes management API calls that result in error codes. The error is shown if the API call is unsuccessful.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ApiCallRateInsight | ApiErrorRateInsight`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-insightselector-insighttype */
    "InsightType"?: string | Intrinsic;
}

/**
 * A custom key-value pair associated with a resource such as a CloudTrail trail, event data store, dashboard, or channel.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html */

export interface Tag {
    /**
     * - The key in a key-value pair. The key must be must be no longer than 128 Unicode characters. The key must be unique for the resource to which it applies.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value in a key-value pair of a tag. The value must be no longer than 256 Unicode characters.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-tag-value */
    "Value": string | Intrinsic;
}

/**
 * A single selector statement in an advanced event selector.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html */

export interface AdvancedFieldSelector {
    /**
     * - An operator that includes events that match the last few characters of the event record field specified as the value of `Field`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `2048`
     * - _Minimum_: `1 | 1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-advancedfieldselector-endswith */
    "EndsWith"?: (string | Intrinsic)[];
    /**
     * - An operator that includes events that match the exact value of the event record field specified as the value of `Field`. This is the only valid operator that you can use with the `readOnly`, `eventCategory`, and `resources.type` fields.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `2048`
     * - _Minimum_: `1 | 1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-advancedfieldselector-equals */
    "Equals"?: (string | Intrinsic)[];
    /**
     * - A field in a CloudTrail event record on which to filter events to be logged. For event data stores for CloudTrail Insights events, AWS Config configuration items, Audit Manager evidence, or events outside of AWS, the field is used only for selecting events as filtering is not supported.
     * - For CloudTrail management events, supported fields include `eventCategory` (required), `eventSource`, and `readOnly`. The following additional fields are available for event data stores: `eventName`, `eventType`, `sessionCredentialFromConsole`, and `userIdentity.arn`.
     * - For CloudTrail data events, supported fields include `eventCategory` (required), `eventName`, `eventSource`, `eventType`, `resources.type` (required), `readOnly`, `resources.ARN`, `sessionCredentialFromConsole`, and `userIdentity.arn`.
     * - For CloudTrail network activity events, supported fields include `eventCategory` (required), `eventSource` (required), `eventName`, `errorCode`, and `vpcEndpointId`.
     * - For event data stores for CloudTrail Insights events, AWS Config configuration items, Audit Manager evidence, or events outside of AWS, the only supported field is `eventCategory`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `([\w|\d|\.|_]+)`
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-advancedfieldselector-field */
    "Field": string | Intrinsic;
    /**
     * - An operator that excludes events that match the last few characters of the event record field specified as the value of `Field`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `2048`
     * - _Minimum_: `1 | 1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-advancedfieldselector-notendswith */
    "NotEndsWith"?: (string | Intrinsic)[];
    /**
     * - An operator that excludes events that match the exact value of the event record field specified as the value of `Field`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `2048`
     * - _Minimum_: `1 | 1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-advancedfieldselector-notequals */
    "NotEquals"?: (string | Intrinsic)[];
    /**
     * - An operator that excludes events that match the first few characters of the event record field specified as the value of `Field`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `2048`
     * - _Minimum_: `1 | 1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-advancedfieldselector-notstartswith */
    "NotStartsWith"?: (string | Intrinsic)[];
    /**
     * - An operator that includes events that match the first few characters of the event record field specified as the value of `Field`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `2048`
     * - _Minimum_: `1 | 1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-advancedfieldselector-startswith */
    "StartsWith"?: (string | Intrinsic)[];
}

/**
 * Advanced event selectors let you create fine-grained selectors for AWS CloudTrail management, data, and network activity events. They help you control costs by logging only those events that are important to you. For more information about configuring advanced event selectors, see the [Logging data events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html), [Logging network activity events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-network-events-with-cloudtrail.html), and [Logging management events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html) topics in the _AWS CloudTrail User Guide_.
 * You cannot apply both event selectors and advanced event selectors to a trail.
 * **Supported CloudTrail event record fields for management events**
 * *   `eventCategory` (required)
 *     
 * *   `eventSource`
 *     
 * *   `readOnly`
 * The following additional fields are available for event data stores:
 * *   `eventName`
 *     
 * *   `eventType`
 *     
 * *   `sessionCredentialFromConsole`
 *     
 * *   `userIdentity.arn`
 * **Supported CloudTrail event record fields for data events**
 * *   `eventCategory` (required)
 *     
 * *   `eventName`
 *     
 * *   `eventSource`
 *     
 * *   `eventType`
 *     
 * *   `resources.ARN`
 *     
 * *   `resources.type` (required)
 *     
 * *   `readOnly`
 *     
 * *   `sessionCredentialFromConsole`
 *     
 * *   `userIdentity.arn`
 * **Supported CloudTrail event record fields for network activity events**
 * *   `eventCategory` (required)
 *     
 * *   `eventSource` (required)
 *     
 * *   `eventName`
 *     
 * *   `errorCode` - The only valid value for `errorCode` is `VpceAccessDenied`.
 *     
 * *   `vpcEndpointId`
 * ###### Note
 * 
 * For event data stores for CloudTrail Insights events, AWS Config configuration items, Audit Manager evidence, or events outside of AWS, the only supported field is `eventCategory`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html */

export interface AdvancedEventSelector {
    /**
     * - Contains all selector statements in an advanced event selector.
     * - _Required_: Yes
     * - _Type_: Array of [AdvancedFieldSelector](./aws-properties-cloudtrail-trail-advancedfieldselector.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-advancedeventselector-fieldselectors */
    "FieldSelectors": AdvancedFieldSelector[];
    /**
     * - An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-advancedeventselector-name */
    "Name"?: string | Intrinsic;
}

/**
 * You can configure the `DataResource` in an `EventSelector` to log data events for the following three resource types:
 * *   `AWS::DynamoDB::Table`
 *     
 * *   `AWS::Lambda::Function`
 *     
 * *   `AWS::S3::Object`
 * To log data events for all other resource types including objects stored in [directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-overview.html), you must use [AdvancedEventSelectors](https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AdvancedEventSelector.html). You must also use `AdvancedEventSelectors` if you want to filter on the `eventName` field.
 * Configure the `DataResource` to specify the resource type and resource ARNs for which you want to log data events.
 * ###### Note
 * 
 * The total number of allowed data resources is 250. This number can be distributed between 1 and 5 event selectors, but the total cannot exceed 250 across all selectors for the trail.
 * The following example demonstrates how logging works when you configure logging of all data events for a general purpose bucket named `amzn-s3-demo-bucket1`. In this example, the CloudTrail user specified an empty prefix, and the option to log both `Read` and `Write` data events.
 * 1.  A user uploads an image file to `amzn-s3-demo-bucket1`.
 *     
 * 2.  The `PutObject` API operation is an Amazon S3 object-level API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified an S3 bucket with an empty prefix, events that occur on any object in that bucket are logged. The trail processes and logs the event.
 *     
 * 3.  A user uploads an object to an Amazon S3 bucket named `arn:aws:s3:::amzn-s3-demo-bucket1`.
 *     
 * 4.  The `PutObject` API operation occurred for an object in an S3 bucket that the CloudTrail user didn't specify for the trail. The trail doesn’t log the event.
 * The following example demonstrates how logging works when you configure logging of AWS Lambda data events for a Lambda function named _MyLambdaFunction_, but not for all Lambda functions.
 * 1.  A user runs a script that includes a call to the _MyLambdaFunction_ function and the _MyOtherLambdaFunction_ function.
 *     
 * 2.  The `Invoke` API operation on _MyLambdaFunction_ is an Lambda API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified logging data events for _MyLambdaFunction_, any invocations of that function are logged. The trail processes and logs the event.
 *     
 * 3.  The `Invoke` API operation on _MyOtherLambdaFunction_ is an Lambda API. Because the CloudTrail user did not specify logging data events for all Lambda functions, the `Invoke` operation for _MyOtherLambdaFunction_ does not match the function specified for the trail. The trail doesn’t log the event.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html */

export interface DataResource {
    /**
     * - The resource type in which you want to log data events. You can specify the following _basic_ event selector resource types:
     * - Additional resource types are available through _advanced_ event selectors. For more information, see [AdvancedEventSelector](https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_AdvancedEventSelector.html).
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-dataresource-type */
    "Type": string | Intrinsic;
    /**
     * - An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified resource type.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-dataresource-values */
    "Values"?: (string | Intrinsic)[];
}

/**
 * Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.
 * You can configure up to five event selectors for a trail.
 * You cannot apply both event selectors and advanced event selectors to a trail.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html */

export interface EventSelector {
    /**
     * - CloudTrail supports data event logging for Amazon S3 objects in standard S3 buckets, AWS Lambda functions, and Amazon DynamoDB tables with basic event selectors. You can specify up to 250 resources for an individual event selector, but the total number of data resources cannot exceed 250 across all event selectors in a trail. This limit does not apply if you configure resource logging for all data events.
     * - For more information, see [Data Events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html) and [Limits in AWS CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html) in the _AWS CloudTrail User Guide_.
     * - _Required_: Conditional
     * - _Type_: Array of [DataResource](./aws-properties-cloudtrail-trail-dataresource.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-eventselector-dataresources */
    "DataResources"?: DataResource[];
    /**
     * - An optional list of service event sources from which you do not want management events to be logged on your trail. In this release, the list can be empty (disables the filter), or it can filter out AWS Key Management Service or Amazon RDS Data API events by containing `kms.amazonaws.com` or `rdsdata.amazonaws.com`. By default, `ExcludeManagementEventSources` is empty, and AWS KMS and Amazon RDS Data API events are logged to your trail. You can exclude management event sources only in Regions that support the event source.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-eventselector-excludemanagementeventsources */
    "ExcludeManagementEventSources"?: (string | Intrinsic)[];
    /**
     * - Specify if you want your event selector to include management events for your trail.
     * - For more information, see [Management Events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html) in the _AWS CloudTrail User Guide_.
     * - By default, the value is `true`.
     * - The first copy of management events is free. You are charged for additional copies of management events that you are logging on any subsequent trail in the same Region. For more information about CloudTrail pricing, see [AWS CloudTrail Pricing](https://aws.amazon.com/cloudtrail/pricing/).
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-eventselector-includemanagementevents */
    "IncludeManagementEvents"?: boolean | Intrinsic;
    /**
     * - Specify if you want your trail to log read-only events, write-only events, or all. For example, the EC2 `GetConsoleOutput` is a read-only API operation and `RunInstances` is a write-only API operation.
     * - By default, the value is `All`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `All | ReadOnly | WriteOnly`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-eventselector-readwritetype */
    "ReadWriteType"?: string | Intrinsic;
}

/**
 * Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html */

export interface CloudTrailTrail extends ResourceAttributes {
    "Type": "AWS::CloudTrail::Trail";
    "Properties": {
        /**
         * - Specifies the settings for advanced event selectors. You can use advanced event selectors to log management events, data events for all resource types, and network activity events.
         * - You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. You can use either `AdvancedEventSelectors` or `EventSelectors`, but not both. If you apply `AdvancedEventSelectors` to a trail, any existing `EventSelectors` are overwritten. For more information about advanced event selectors, see [Logging data events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html) and [Logging network activity events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-network-events-with-cloudtrail.html) in the _AWS CloudTrail User Guide_.
         * - _Required_: No
         * - _Type_: Array of [AdvancedEventSelector](./aws-properties-cloudtrail-trail-advancedeventselector.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-advancedeventselectors */
        "AdvancedEventSelectors"?: AdvancedEventSelector[];
        /**
         * - Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs are delivered. You must use a log group that exists in your account.
         * - To enable CloudWatch Logs delivery, you must provide values for `CloudWatchLogsLogGroupArn` and `CloudWatchLogsRoleArn`.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-cloudwatchlogsloggrouparn */
        "CloudWatchLogsLogGroupArn"?: string | Intrinsic;
        /**
         * - Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group. You must use a role that exists in your account.
         * - To enable CloudWatch Logs delivery, you must provide values for `CloudWatchLogsLogGroupArn` and `CloudWatchLogsRoleArn`.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-cloudwatchlogsrolearn */
        "CloudWatchLogsRoleArn"?: string | Intrinsic;
        /**
         * - Specifies whether log file validation is enabled. The default is false.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-enablelogfilevalidation */
        "EnableLogFileValidation"?: boolean | Intrinsic;
        /**
         * - Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.
         * - You can configure up to five event selectors for a trail.
         * - You cannot apply both event selectors and advanced event selectors to a trail.
         * - _Required_: No
         * - _Type_: Array of [EventSelector](./aws-properties-cloudtrail-trail-eventselector.html)
         * - _Maximum_: `5`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-eventselectors */
        "EventSelectors"?: EventSelector[];
        /**
         * - Specifies whether the trail is publishing events from global services such as IAM to the log files.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-includeglobalserviceevents */
        "IncludeGlobalServiceEvents"?: boolean | Intrinsic;
        /**
         * - A JSON string that contains the Insights types you want to log on a trail. `ApiCallRateInsight` and `ApiErrorRateInsight` are valid Insight types.
         * - The `ApiCallRateInsight` Insights type analyzes write-only management API calls that are aggregated per minute against a baseline API call volume.
         * - The `ApiErrorRateInsight` Insights type analyzes management API calls that result in error codes. The error is shown if the API call is unsuccessful.
         * - _Required_: No
         * - _Type_: Array of [InsightSelector](./aws-properties-cloudtrail-trail-insightselector.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-insightselectors */
        "InsightSelectors"?: InsightSelector[];
        /**
         * - Whether the CloudTrail trail is currently logging AWS API calls.
         * - _Required_: Yes
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-islogging */
        "IsLogging": boolean | Intrinsic;
        /**
         * - Specifies whether the trail applies only to the current Region or to all Regions. The default is false. If the trail exists only in the current Region and this value is set to true, shadow trails (replications of the trail) will be created in the other Regions. If the trail exists in all Regions and this value is set to false, the trail will remain in the Region where it was created, and its shadow trails in other Regions will be deleted. As a best practice, consider using trails that log events in all Regions.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-ismultiregiontrail */
        "IsMultiRegionTrail"?: boolean | Intrinsic;
        /**
         * - Specifies whether the trail is applied to all accounts in an organization in AWS Organizations, or only for the current AWS account. The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the management account for an organization in AWS Organizations. If the trail is not an organization trail and this is set to `true`, the trail will be created in all AWS accounts that belong to the organization. If the trail is an organization trail and this is set to `false`, the trail will remain in the current AWS account but be deleted from all member accounts in the organization.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-isorganizationtrail */
        "IsOrganizationTrail"?: boolean | Intrinsic;
        /**
         * - Specifies the AWS KMS key ID to use to encrypt the logs and digest files delivered by CloudTrail. The value can be an alias name prefixed by "alias/", a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.
         * - CloudTrail also supports AWS KMS multi-Region keys. For more information about multi-Region keys, see [Using multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the _AWS Key Management Service Developer Guide_.
         * - Examples:
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-kmskeyid */
        "KMSKeyId"?: string | Intrinsic;
        /**
         * - Specifies the name of the Amazon S3 bucket designated for publishing log files. See [Amazon S3 Bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-s3bucketname */
        "S3BucketName": string | Intrinsic;
        /**
         * - Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see [Finding Your CloudTrail Log Files](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/get-and-view-cloudtrail-log-files.html#cloudtrail-find-log-files). The maximum length is 200 characters.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-s3keyprefix */
        "S3KeyPrefix"?: string | Intrinsic;
        /**
         * - Specifies the name or ARN of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-snstopicname */
        "SnsTopicName"?: string | Intrinsic;
        /**
         * - A custom set of tags (key-value pairs) for this trail.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-cloudtrail-trail-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-tags */
        "Tags"?: Tag[];
        /**
         * - Specifies the name of the trail. The name must meet the following requirements:
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `(^[a-zA-Z0-9]$)|(^[a-zA-Z0-9]([a-zA-Z0-9\._-])*[a-zA-Z0-9]$)`
         * - _Minimum_: `3`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#cfn-cloudtrail-trail-trailname */
        "TrailName"?: string | Intrinsic;
    };
}