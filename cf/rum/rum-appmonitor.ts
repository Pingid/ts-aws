import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Use this structure to assign a resource-based policy to a CloudWatch RUM app monitor to control access to it. Each app monitor can have one resource-based policy. The maximum size of the policy is 4 KB. To learn more about using resource policies with RUM, see [Using resource-based policies with CloudWatch RUM](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-resource-policies.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html */

export interface ResourcePolicy {
    /**
     * - The JSON to use as the resource policy. The document can be up to 4 KB in size. For more information about the contents and syntax for this policy, see [Using resource-based policies with CloudWatch RUM](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-resource-policies.html).
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-resourcepolicy-policydocument */
    "PolicyDocument": string | Intrinsic;
    /**
     * - A string value that you can use to conditionally update your policy. You can provide the revision ID of your existing policy to make mutating requests against that policy.
     * - When you assign a policy revision ID, then later requests about that policy will be rejected with an `InvalidPolicyRevisionIdException` error if they don't provide the correct current revision ID.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-resourcepolicy-policyrevisionid */
    "PolicyRevisionId"?: string | Intrinsic;
}

/**
 * This structure specifies whether this app monitor allows the web client to define and send custom events.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html */

export interface CustomEvents {
    /**
     * - Set this to `ENABLED` to allow the web client to send custom events for this app monitor.
     * - Valid values are `ENABLED` and `DISABLED`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-customevents-status */
    "Status"?: string | Intrinsic;
}

/**
 * A key-value pair associated with a resource. Tags can help you organize and categorize your resources.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html */

export interface Tag {
    /**
     * - A string that you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value for the specified tag key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-tag-value */
    "Value": string | Intrinsic;
}

/**
 * A structure that contains the configuration for how an app monitor can unminify JavaScript error stack traces using source maps.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html */

export interface JavaScriptSourceMaps {
    /**
     * - The S3Uri of the bucket or folder that stores the source map files. It is required if status is ENABLED.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^s3://[a-z0-9][-.a-z0-9]{1,61}(?:/[-!_*'().a-z0-9A-Z]+(?:/[-!_*'().a-z0-9A-Z]+)*)?/?$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-javascriptsourcemaps-s3uri */
    "S3Uri"?: string | Intrinsic;
    /**
     * - Specifies whether JavaScript error stack traces should be unminified for this app monitor. The default is for JavaScript error stack trace unminification to be `DISABLED`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-javascriptsourcemaps-status */
    "Status": string | Intrinsic;
}

/**
 * A structure that contains the configuration for how an app monitor can deobfuscate stack traces.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html */

export interface DeobfuscationConfiguration {
    /**
     * - A structure that contains the configuration for how an app monitor can unminify JavaScript error stack traces using source maps.
     * - _Required_: No
     * - _Type_: [JavaScriptSourceMaps](./aws-properties-rum-appmonitor-javascriptsourcemaps.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-deobfuscationconfiguration-javascriptsourcemaps */
    "JavaScriptSourceMaps"?: JavaScriptSourceMaps;
}

/**
 * Specifies one custom metric or extended metric that you want the CloudWatch RUM app monitor to send to a destination. Valid destinations include CloudWatch and Evidently.
 * By default, RUM app monitors send some metrics to CloudWatch. These default metrics are listed in [CloudWatch metrics that you can collect.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-metrics.html)
 * In addition to these default metrics, you can choose to send extended metrics or custom metrics or both.
 * *   Extended metrics enable you to send metrics with additional dimensions not included in the default metrics. You can also send extended metrics to Evidently as well as CloudWatch. The valid dimension names for the additional dimensions for extended metrics are `BrowserName`, `CountryCode`, `DeviceType`, `FileType`, `OSName`, and `PageId`. For more information, see [Extended metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-vended-metrics.html).
 *     
 * *   Custom metrics are metrics that you define. You can send custom metrics to CloudWatch or to CloudWatch Evidently or to both. With custom metrics, you can use any metric name and namespace, and to derive the metrics you can use any custom events, built-in events, custom attributes, or default attributes.
 *     
 *     You can't send custom metrics to the `AWS/RUM` namespace. You must send custom metrics to a custom namespace that you define. The namespace that you use can't start with `AWS/`. CloudWatch RUM prepends `RUM/CustomMetrics/` to the custom namespace that you define, so the final namespace for your metrics in CloudWatch is `RUM/CustomMetrics/_your-custom-namespace_`.
 * For information about syntax rules for specifying custom metrics and extended metrics, see [MetridDefinitionRequest](https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_MetricDefinitionRequest.html) in the _CloudWatch RUM API Reference_.
 * The maximum number of metric definitions that one destination can contain is 2000.
 * Extended metrics sent to CloudWatch and RUM custom metrics are charged as CloudWatch custom metrics. Each combination of additional dimension name and dimension value counts as a custom metric.
 * If some metric definitions that you specify are not valid, then the operation will not modify any metric definitions even if other metric definitions specified are valid.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html */

export interface MetricDefinition {
    /**
     * - This field is a map of field paths to dimension names. It defines the dimensions to associate with this metric in CloudWatch. The value of this field is used only if the metric destination is `CloudWatch`. If the metric destination is `Evidently`, the value of `DimensionKeys` is ignored.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^(?!:).*[^\s].*`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-metricdefinition-dimensionkeys */
    "DimensionKeys"?: Record<string, string | Intrinsic>;
    /**
     * - The pattern that defines the metric. RUM checks events that happen in a user's session against the pattern, and events that match the pattern are sent to the metric destination.
     * - If the metrics destination is `CloudWatch` and the event also matches a value in `DimensionKeys`, then the metric is published with the specified dimensions.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `4000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-metricdefinition-eventpattern */
    "EventPattern"?: string | Intrinsic;
    /**
     * - The name of the metric that is defined in this structure.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-metricdefinition-name */
    "Name": string | Intrinsic;
    /**
     * - If you are creating a custom metric instead of an extended metrics, use this parameter to define the metric namespace for that custom metric. Do not specify this parameter if you are creating an extended metric.
     * - You can't use any string that starts with `AWS/` for your namespace.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9-._/#:]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `237`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-metricdefinition-namespace */
    "Namespace"?: string | Intrinsic;
    /**
     * - Use this field only if you are sending this metric to CloudWatch. It defines the CloudWatch metric unit that this metric is measured in.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-metricdefinition-unitlabel */
    "UnitLabel"?: string | Intrinsic;
    /**
     * - The field within the event object that the metric value is sourced from.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-metricdefinition-valuekey */
    "ValueKey"?: string | Intrinsic;
}

/**
 * Creates or updates a destination to receive extended metrics from CloudWatch RUM. You can send extended metrics to CloudWatch or to a CloudWatch Evidently experiment.
 * For more information about extended metrics, see [Extended metrics that you can send to CloudWatch and CloudWatch Evidently](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-vended-metrics.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html */

export interface MetricDestination {
    /**
     * - Defines the destination to send the metrics to. Valid values are `CloudWatch` and `Evidently`. If you specify `Evidently`, you must also specify the ARN of the CloudWatchEvidently experiment that is to be the destination and an IAM role that has permission to write to the experiment.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `CloudWatch | Evidently`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-metricdestination-destination */
    "Destination": string | Intrinsic;
    /**
     * - Use this parameter only if `Destination` is `Evidently`. This parameter specifies the ARN of the Evidently experiment that will receive the extended metrics.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:[^:]*:[^:]*:[^:]*:[^:]*:.*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-metricdestination-destinationarn */
    "DestinationArn"?: string | Intrinsic;
    /**
     * - This parameter is required if `Destination` is `Evidently`. If `Destination` is `CloudWatch`, do not use this parameter.
     * - This parameter specifies the ARN of an IAM role that RUM will assume to write to the Evidently experiment that you are sending metrics to. This role must have permission to write to that experiment.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:[^:]*:[^:]*:[^:]*:[^:]*:.*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-metricdestination-iamrolearn */
    "IamRoleArn"?: string | Intrinsic;
    /**
     * - An array of structures which define the metrics that you want to send.
     * - _Required_: No
     * - _Type_: Array of [MetricDefinition](./aws-properties-rum-appmonitor-metricdefinition.html)
     * - _Minimum_: `0`
     * - _Maximum_: `2000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-metricdestination-metricdefinitions */
    "MetricDefinitions"?: MetricDefinition[];
}

/**
 * This structure contains much of the configuration data for the app monitor.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html */

export interface AppMonitorConfiguration {
    /**
     * - If you set this to `true`, the CloudWatch RUM web client sets two cookies, a session cookie and a user cookie. The cookies allow the CloudWatch RUM web client to collect data relating to the number of users an application has and the behavior of the application across a sequence of events. Cookies are stored in the top-level domain of the current page.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-appmonitorconfiguration-allowcookies */
    "AllowCookies"?: boolean | Intrinsic;
    /**
     * - If you set this to `true`, CloudWatch RUM sends client-side traces to X-Ray for each sampled session. You can then see traces and segments from these user sessions in the RUM dashboard and the CloudWatch ServiceLens console. For more information, see [What is AWS X-Ray?](https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html)
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-appmonitorconfiguration-enablexray */
    "EnableXRay"?: boolean | Intrinsic;
    /**
     * - A list of URLs in your website or application to exclude from RUM data collection.
     * - You can't include both `ExcludedPages` and `IncludedPages` in the same app monitor.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-appmonitorconfiguration-excludedpages */
    "ExcludedPages"?: (string | Intrinsic)[];
    /**
     * - A list of pages in your application that are to be displayed with a "favorite" icon in the CloudWatch RUM console.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-appmonitorconfiguration-favoritepages */
    "FavoritePages"?: (string | Intrinsic)[];
    /**
     * - The ARN of the guest IAM role that is attached to the Amazon Cognito identity pool that is used to authorize the sending of data to CloudWatch RUM.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:[^:]*:[^:]*:[^:]*:[^:]*:.*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-appmonitorconfiguration-guestrolearn */
    "GuestRoleArn"?: string | Intrinsic;
    /**
     * - The ID of the Amazon Cognito identity pool that is used to authorize the sending of data to CloudWatch RUM.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\w-]+:[0-9a-f-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `55`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-appmonitorconfiguration-identitypoolid */
    "IdentityPoolId"?: string | Intrinsic;
    /**
     * - If this app monitor is to collect data from only certain pages in your application, this structure lists those pages.
     * - You can't include both `ExcludedPages` and `IncludedPages` in the same app monitor.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-appmonitorconfiguration-includedpages */
    "IncludedPages"?: (string | Intrinsic)[];
    /**
     * - An array of structures that each define a destination that this app monitor will send extended metrics to.
     * - _Required_: No
     * - _Type_: Array of [MetricDestination](./aws-properties-rum-appmonitor-metricdestination.html)
     * - _Minimum_: `0`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-appmonitorconfiguration-metricdestinations */
    "MetricDestinations"?: MetricDestination[];
    /**
     * - Specifies the portion of user sessions to use for CloudWatch RUM data collection. Choosing a higher portion gives you more data but also incurs more costs.
     * - The range for this value is 0 to 1 inclusive. Setting this to 1 means that 100% of user sessions are sampled, and setting it to 0.1 means that 10% of user sessions are sampled.
     * - If you omit this parameter, the default of 0.1 is used, and 10% of sessions will be sampled.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-appmonitorconfiguration-sessionsamplerate */
    "SessionSampleRate"?: number | Intrinsic;
    /**
     * - An array that lists the types of telemetry data that this app monitor is to collect.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-appmonitorconfiguration-telemetries */
    "Telemetries"?: (string | Intrinsic)[];
}

/**
 * Creates a CloudWatch RUM app monitor, which you can use to collect telemetry data from your application and send it to CloudWatch RUM. The data includes performance and reliability information such as page load time, client-side errors, and user behavior.
 * After you create an app monitor, sign in to the CloudWatch RUM console to get the JavaScript code snippet to add to your web application. For more information, see [How do I find a code snippet that I've already generated?](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-find-code-snippet.html)
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html */

export interface RUMAppMonitor extends ResourceAttributes {
    "Type": "AWS::RUM::AppMonitor";
    "Properties": {
        /**
         * - A structure that contains much of the configuration data for the app monitor. If you are using Amazon Cognito for authorization, you must include this structure in your request, and it must include the ID of the Amazon Cognito identity pool to use for authorization. If you don't include `AppMonitorConfiguration`, you must set up your own authorization method. For more information, see [Authorize your application to send data to AWS](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-get-started-authorization.html).
         * - If you omit this argument, the sample rate used for CloudWatch RUM is set to 10% of the user sessions.
         * - _Required_: No
         * - _Type_: [AppMonitorConfiguration](./aws-properties-rum-appmonitor-appmonitorconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-appmonitorconfiguration */
        "AppMonitorConfiguration"?: AppMonitorConfiguration;
        /**
         * - Specifies whether this app monitor allows the web client to define and send custom events. If you omit this parameter, custom events are `DISABLED`.
         * - _Required_: No
         * - _Type_: [CustomEvents](./aws-properties-rum-appmonitor-customevents.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-customevents */
        "CustomEvents"?: CustomEvents;
        /**
         * - Data collected by CloudWatch RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether CloudWatch RUM sends a copy of this telemetry data to Amazon CloudWatch Logs in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur Amazon CloudWatch Logs charges.
         * - If you omit this parameter, the default is `false`.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-cwlogenabled */
        "CwLogEnabled"?: boolean | Intrinsic;
        /**
         * - A structure that contains the configuration for how an app monitor can deobfuscate stack traces.
         * - _Required_: No
         * - _Type_: [DeobfuscationConfiguration](./aws-properties-rum-appmonitor-deobfuscationconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-deobfuscationconfiguration */
        "DeobfuscationConfiguration"?: DeobfuscationConfiguration;
        /**
         * - The top-level internet domain name for which your application has administrative authority. This parameter or the `DomainList` parameter is required.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^(localhost)|^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^(?![-.])([A-Za-z0-9-\.\-]{0,63})((?![-])([a-zA-Z0-9]{1}|^[a-zA-Z0-9]{0,1}))\.(?![-])[A-Za-z-0-9]{1,63}((?![-])([a-zA-Z0-9]{1}|^[a-zA-Z0-9]{0,1}))|^(\*\.)(?![-.])([A-Za-z0-9-\.\-]{0,63})((?![-])([a-zA-Z0-9]{1}|^[a-zA-Z0-9]{0,1}))\.(?![-])[A-Za-z-0-9]{1,63}((?![-])([a-zA-Z0-9]{1}|^[a-zA-Z0-9]{0,1}))`
         * - _Minimum_: `1`
         * - _Maximum_: `253`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-domain */
        "Domain"?: string | Intrinsic;
        /**
         * - List the domain names for which your application has administrative authority. This parameter or the `Domain` parameter is required.
         * - You can have a minimum of 1 and a maximum of 5 `Domain` under `DomainList`. Each `Domain` must be a minimum length of 1 and a maximum of 253 characters.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Minimum_: `1 | 1`
         * - _Maximum_: `253 | 5`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-domainlist */
        "DomainList"?: (string | Intrinsic)[];
        /**
         * - A name for the app monitor. This parameter is required.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\.\-_/#A-Za-z0-9]+`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-name */
        "Name": string | Intrinsic;
        /**
         * - Use this structure to assign a resource-based policy to a CloudWatch RUM app monitor to control access to it. Each app monitor can have one resource-based policy. The maximum size of the policy is 4 KB. To learn more about using resource policies with RUM, see [Using resource-based policies with CloudWatch RUM](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-resource-policies.html).
         * - _Required_: No
         * - _Type_: [ResourcePolicy](./aws-properties-rum-appmonitor-resourcepolicy.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-resourcepolicy */
        "ResourcePolicy"?: ResourcePolicy;
        /**
         * - Assigns one or more tags (key-value pairs) to the app monitor.
         * - Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
         * - Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.
         * - You can associate as many as 50 tags with an app monitor.
         * - For more information, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-rum-appmonitor-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rum-appmonitor.html#cfn-rum-appmonitor-tags */
        "Tags"?: Tag[];
    };
}