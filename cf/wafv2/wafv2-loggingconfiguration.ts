import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Inspect one of the headers in the web request, identified by name, for example, `User-Agent` or `Referer`. The name isn't case sensitive.
 * You can filter and inspect all headers with the `FieldToMatch` setting `Headers`.
 * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
 * Example JSON: `"SingleHeader": { "Name": "haystack" }`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html */

export interface SingleHeader {
  /**
   * - The name of the query header to inspect.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-singleheader-name */
  Name: string | Intrinsic
}

/**
 * A single action condition for a condition in a logging filter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html */

export interface ActionCondition {
  /**
   * - The action setting that a log record must contain in order to meet the condition. This is the action that AWS WAF applied to the web request.
   * - For rule groups, this is either the configured rule action setting, or if you've applied a rule action override to the rule, it's the override action. The value `EXCLUDED_AS_COUNT` matches on excluded rules and also on rules that have a rule action override of Count.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ALLOW | BLOCK | COUNT | CAPTCHA | CHALLENGE | EXCLUDED_AS_COUNT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-actioncondition-action */
  Action: string | Intrinsic
}

/**
 * A single label name condition for a condition in a logging filter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html */

export interface LabelNameCondition {
  /**
   * - The label name that a log record must contain in order to meet the condition. This must be a fully qualified label name. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9A-Za-z_\-:]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-labelnamecondition-labelname */
  LabelName: string | Intrinsic
}

/**
 * The parts of the request that you want to keep out of the logs. This is used in the logging configuration `RedactedFields` specification.
 * Example JSON for a `QueryString` field to match:
 * `"FieldToMatch": { "QueryString": {} }`
 * Example JSON for a `Method` field to match specification:
 * `"FieldToMatch": { "Method": { "Name": "DELETE" } }`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html */

export interface FieldToMatch {
  /**
   * - Redact the indicated HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-fieldtomatch-method */
  Method?: any | Intrinsic
  /**
   * - Redact the query string. This is the part of a URL that appears after a `?` character, if any.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-fieldtomatch-querystring */
  QueryString?: any | Intrinsic
  /**
   * - Redact a single header. Provide the name of the header to inspect, for example, `User-Agent` or `Referer`. This setting isn't case sensitive.
   * - Example JSON: `"SingleHeader": { "Name": "haystack" }`
   * - _Required_: No
   * - _Type_: [SingleHeader](./aws-properties-wafv2-loggingconfiguration-singleheader.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-fieldtomatch-singleheader */
  SingleHeader?: SingleHeader
  /**
   * - Redact the request URI path. This is the part of the web request that identifies a resource, for example, `/images/daily-ad.jpg`.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-fieldtomatch-uripath */
  UriPath?: any | Intrinsic
}

/**
 * A single match condition for a log filter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html */

export interface Condition {
  /**
   * - A single action condition. This is the action setting that a log record must contain in order to meet the condition.
   * - _Required_: No
   * - _Type_: [ActionCondition](./aws-properties-wafv2-loggingconfiguration-actioncondition.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-condition-actioncondition */
  ActionCondition?: ActionCondition
  /**
   * - A single label name condition. This is the fully qualified label name that a log record must contain in order to meet the condition. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label.
   * - _Required_: No
   * - _Type_: [LabelNameCondition](./aws-properties-wafv2-loggingconfiguration-labelnamecondition.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-condition-labelnamecondition */
  LabelNameCondition?: LabelNameCondition
}

/**
 * A single logging filter, used in `LoggingFilter`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html */

export interface Filter {
  /**
   * - How to handle logs that satisfy the filter's conditions and requirement.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `KEEP | DROP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-filter-behavior */
  Behavior: string | Intrinsic
  /**
   * - Match conditions for the filter.
   * - _Required_: Yes
   * - _Type_: Array of [Condition](./aws-properties-wafv2-loggingconfiguration-condition.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-filter-conditions */
  Conditions: Condition[]
  /**
   * - Logic to apply to the filtering conditions. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `MEETS_ALL | MEETS_ANY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-filter-requirement */
  Requirement: string | Intrinsic
}

/**
 * Filtering that specifies which web requests are kept in the logs and which are dropped, defined for a web ACL's `LoggingConfiguration`.
 * You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html */

export interface LoggingFilter {
  /**
   * - Default handling for logs that don't match any of the specified filtering conditions.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `KEEP | DROP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-loggingfilter-defaultbehavior */
  DefaultBehavior: string | Intrinsic
  /**
   * - The filters that you want to apply to the logs.
   * - _Required_: Yes
   * - _Type_: Array of [Filter](./aws-properties-wafv2-loggingconfiguration-filter.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-loggingfilter-filters */
  Filters: Filter[]
}

/**
 * Defines an association between logging destinations and a web ACL resource, for logging from AWS WAF. As part of the association, you can specify parts of the standard logging fields to keep out of the logs and you can specify filters so that you log only a subset of the logging records.
 * ###### Note
 *
 * You can define one logging destination per web ACL.
 * You can access information about the traffic that AWS WAF inspects using the following steps:
 * 1.  Create your logging destination. You can use an Amazon CloudWatch Logs log group, an Amazon Simple Storage Service (Amazon S3) bucket, or an Amazon Kinesis Data Firehose.
 *
 *     The name that you give the destination must start with `aws-waf-logs-`. Depending on the type of destination, you might need to configure additional settings or permissions.
 *
 *     For configuration requirements and pricing information for each destination type, see [Logging web ACL traffic](https://docs.aws.amazon.com/waf/latest/developerguide/logging.html) in the _AWS WAF Developer Guide_.
 *
 * 2.  Associate your logging destination to your web ACL using a `PutLoggingConfiguration` request.
 * When you successfully enable logging using a `PutLoggingConfiguration` request, AWS WAF creates an additional role or policy that is required to write logs to the logging destination. For an Amazon CloudWatch Logs log group, AWS WAF creates a resource policy on the log group. For an Amazon S3 bucket, AWS WAF creates a bucket policy. For an Amazon Kinesis Data Firehose, AWS WAF creates a service-linked role.
 * For additional information about web ACL logging, see [Logging web ACL traffic information](https://docs.aws.amazon.com/waf/latest/developerguide/logging.html) in the _AWS WAF Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html */

export interface WAFv2LoggingConfiguration extends ResourceAttributes {
  Type: 'AWS::WAFv2::LoggingConfiguration'
  Properties: {
    /**
     * - The logging destination configuration that you want to associate with the web ACL.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-logdestinationconfigs */
    LogDestinationConfigs: (string | Intrinsic)[]
    /**
     * - Filtering that specifies which web requests are kept in the logs and which are dropped. You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.
     * - _Required_: No
     * - _Type_: [LoggingFilter](./aws-properties-wafv2-loggingconfiguration-loggingfilter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-loggingfilter */
    LoggingFilter?: LoggingFilter
    /**
     * - The parts of the request that you want to keep out of the logs.
     * - For example, if you redact the `SingleHeader` field, the `HEADER` field in the logs will be `REDACTED` for all rules that use the `SingleHeader` `FieldToMatch` setting.
     * - Redaction applies only to the component that's specified in the rule's `FieldToMatch` setting, so the `SingleHeader` redaction doesn't apply to rules that use the `Headers` `FieldToMatch`.
     * - _Required_: No
     * - _Type_: Array of [FieldToMatch](./aws-properties-wafv2-loggingconfiguration-fieldtomatch.html)
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-redactedfields */
    RedactedFields?: FieldToMatch[]
    /**
     * - The Amazon Resource Name (ARN) of the web ACL that you want to associate with `LogDestinationConfigs`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.*\S.*`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-resourcearn */
    ResourceArn: string | Intrinsic
  }
}
