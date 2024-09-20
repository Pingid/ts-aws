import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies how AWS WAF should handle `Challenge` evaluations. This is available at the web ACL level and in each rule.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface ChallengeConfig {
  /**
   * - Determines how long a challenge timestamp in the token remains valid after the client successfully responds to a challenge.
   * - _Required_: No
   * - _Type_: [ImmunityTimeProperty](./aws-properties-wafv2-webacl-immunitytimeproperty.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-challengeconfig-immunitytimeproperty */
  ImmunityTimeProperty?: ImmunityTimeProperty
}

/**
 * The response body to use in a custom response to a web request. This is referenced by key from [CustomResponse](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-blockaction.html#cfn-wafv2-webacl-blockaction-customresponse) `CustomResponseBodyKey`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface CustomResponseBody {
  /**
   * - The payload of the custom response.
   * - You can use JSON escape strings in JSON content. To do this, you must specify JSON content in the `ContentType` setting.
   * - For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the _AWS WAF Developer Guide_.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `10240`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-customresponsebody-content */
  Content: string | Intrinsic
  /**
   * - The type of content in the payload that you are defining in the `Content` string.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `TEXT_PLAIN | TEXT_HTML | APPLICATION_JSON`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-customresponsebody-contenttype */
  ContentType: string | Intrinsic
}

/**
 * A tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.
 * You can tag the AWS resources that you manage through AWS WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can't manage or view tags through the AWS WAF console.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface Tag {
  /**
   * - Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-tag-key */
  Key?: string | Intrinsic
  /**
   * - Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-tag-value */
  Value?: string | Intrinsic
}

/**
 * Defines and enables Amazon CloudWatch metrics and web request sample collection.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface VisibilityConfig {
  /**
   * - Indicates whether the associated resource sends metrics to Amazon CloudWatch. For the list of available metrics, see [AWS WAF Metrics](https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#waf-metrics) in the _AWS WAF Developer Guide_.
   * - For web ACLs, the metrics are for web requests that have the web ACL default action applied. AWS WAF applies the default action to web requests that pass the inspection of all rules in the web ACL without being either allowed or blocked. For more information, see [The web ACL default action](https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-default-action.html) in the _AWS WAF Developer Guide_.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-visibilityconfig-cloudwatchmetricsenabled */
  CloudWatchMetricsEnabled: boolean | Intrinsic
  /**
   * - A name of the Amazon CloudWatch metric dimension. The name can contain only the characters: A-Z, a-z, 0-9, - (hyphen), and \_ (underscore). The name can be from one to 128 characters long. It can't contain whitespace or metric names that are reserved for AWS WAF, for example `All` and `Default_Action`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-visibilityconfig-metricname */
  MetricName: string | Intrinsic
  /**
   * - Indicates whether AWS WAF should store a sampling of the web requests that match the rules. You can view the sampled requests through the AWS WAF console.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-visibilityconfig-sampledrequestsenabled */
  SampledRequestsEnabled: boolean | Intrinsic
}

/**
 * Customizes the maximum size of the request body that your protected CloudFront, API Gateway, Amazon Cognito, App Runner, and Verified Access resources forward to AWS WAF for inspection. The default size is 16 KB (16,384 bytes). You can change the setting for any of the available resource types.
 * ###### Note
 *
 * You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see [AWS WAF Pricing](https://aws.amazon.com/waf/pricing/).
 * Example JSON: `{ "API_GATEWAY": "KB_48", "APP_RUNNER_SERVICE": "KB_32" }`
 * For Application Load Balancer and AWS AppSync, the limit is fixed at 8 KB (8,192 bytes).
 * This is used in the `AssociationConfig` of the web ACL.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface RequestBodyAssociatedResourceTypeConfig {
  /**
   * - Specifies the maximum size of the web request body component that an associated CloudFront, API Gateway, Amazon Cognito, App Runner, or Verified Access resource should send to AWS WAF for inspection. This applies to statements in the web ACL that inspect the body or JSON body.
   * - Default: `16 KB (16,384 bytes)`
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `KB_16 | KB_32 | KB_48 | KB_64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-requestbodyassociatedresourcetypeconfig-defaultsizeinspectionlimit */
  DefaultSizeInspectionLimit: string | Intrinsic
}

/**
 * Used for CAPTCHA and challenge token settings. Determines how long a `CAPTCHA` or challenge timestamp remains valid after AWS WAF updates it for a successful `CAPTCHA` or challenge response.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface ImmunityTimeProperty {
  /**
   * - The amount of time, in seconds, that a `CAPTCHA` or challenge timestamp is considered valid by AWS WAF. The default setting is 300.
   * - For the Challenge action, the minimum setting is 300.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `60`
   * - _Maximum_: `259200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-immunitytimeproperty-immunitytime */
  ImmunityTime: number | Intrinsic
}

/**
 * The action to use in the place of the action that results from the rule group evaluation. Set the override action to none to leave the result of the rule group alone. Set it to count to override the result to count only.
 * You can only use this for rule statements that reference a rule group, like `RuleGroupReferenceStatement` and `ManagedRuleGroupStatement`.
 * ###### Note
 *
 * This option is usually set to none. It does not affect how the rules in the rule group are evaluated. If you want the rules in the rule group to only count matches, do not use this and instead use the rule action override option, with `Count` action, in your rule group reference statement settings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface OverrideAction {
  /**
   * - Override the rule group evaluation result to count only.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-overrideaction-count */
  Count?: any | Intrinsic
  /**
   * - Don't override the rule group evaluation result. This is the most common setting.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-overrideaction-none */
  None?: any | Intrinsic
}

/**
 * A single label container. This is used as an element of a label array in `RuleLabels` inside a rule.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface Label {
  /**
   * - The label string.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9A-Za-z_:-]{1,1024}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-label-name */
  Name: string | Intrinsic
}

/**
 * A custom response to send to the client. You can define a custom response for rule actions and default web ACL actions that are set to the block action.
 * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the [AWS WAF developer guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface CustomResponse {
  /**
   * - References the response body that you want AWS WAF to return to the web request client. You can define a custom response for a rule action or a default web ACL action that is set to block. To do this, you first define the response body key and value in the `CustomResponseBodies` setting for the [AWS::WAFv2::WebACL](./aws-resource-wafv2-webacl.html) or [AWS::WAFv2::RuleGroup](./aws-resource-wafv2-rulegroup.html) where you want to use it. Then, in the rule action or web ACL default action `BlockAction` setting, you reference the response body using this key.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[\w\-]+$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-customresponse-customresponsebodykey */
  CustomResponseBodyKey?: string | Intrinsic
  /**
   * - The HTTP status code to return to the client.
   * - For a list of status codes that you can use in your custom responses, see [Supported status codes for custom response](https://docs.aws.amazon.com/waf/latest/developerguide/customizing-the-response-status-codes.html) in the _AWS WAF Developer Guide_.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `200`
   * - _Maximum_: `599`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-customresponse-responsecode */
  ResponseCode: number | Intrinsic
  /**
   * - The HTTP headers to use in the response. You can specify any header name except for `content-type`. Duplicate header names are not allowed.
   * - For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the _AWS WAF Developer Guide_.
   * - _Required_: No
   * - _Type_: Array of [CustomHTTPHeader](./aws-properties-wafv2-webacl-customhttpheader.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-customresponse-responseheaders */
  ResponseHeaders?: CustomHTTPHeader[]
}

/**
 * Specifies that AWS WAF should run a `CAPTCHA` check against the request:
 * *   If the request includes a valid, unexpired `CAPTCHA` token, AWS WAF allows the web request inspection to proceed to the next rule, similar to a `CountAction`.
 *
 * *   If the request doesn't include a valid, unexpired `CAPTCHA` token, AWS WAF discontinues the web ACL evaluation of the request and blocks it from going to its intended destination.
 *
 *     AWS WAF generates a response that it sends back to the client, which includes the following:
 *
 *     *   The header `x-amzn-waf-action` with a value of `captcha`.
 *
 *     *   The HTTP status code `405 Method Not Allowed`.
 *
 *     *   If the request contains an `Accept` header with a value of `text/html`, the response includes a `CAPTCHA` challenge.
 * You can configure the expiration time in the `CaptchaConfig` `ImmunityTimeProperty` setting at the rule and web ACL level. The rule setting overrides the web ACL setting.
 * This action option is available for rules. It isn't available for web ACL default actions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface CaptchaAction {
  /**
   * - Defines custom handling for the web request, used when the `CAPTCHA` inspection determines that the request's token is valid and unexpired.
   * - For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _AWS WAF Developer Guide_.
   * - _Required_: No
   * - _Type_: [CustomRequestHandling](./aws-properties-wafv2-webacl-customrequesthandling.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-captchaaction-customrequesthandling */
  CustomRequestHandling?: CustomRequestHandling
}

/**
 * Specifies that AWS WAF should run a `Challenge` check against the request to verify that the request is coming from a legitimate client session:
 * *   If the request includes a valid, unexpired challenge token, AWS WAF applies any custom request handling and labels that you've configured and then allows the web request inspection to proceed to the next rule, similar to a `CountAction`.
 *
 * *   If the request doesn't include a valid, unexpired challenge token, AWS WAF discontinues the web ACL evaluation of the request and blocks it from going to its intended destination.
 *
 *     AWS WAF then generates a challenge response that it sends back to the client, which includes the following:
 *
 *     *   The header `x-amzn-waf-action` with a value of `challenge`.
 *
 *     *   The HTTP status code `202 Request Accepted`.
 *
 *     *   If the request contains an `Accept` header with a value of `text/html`, the response includes a JavaScript page interstitial with a challenge script.
 *
 *
 *     Challenges run silent browser interrogations in the background, and don't generally affect the end user experience.
 *
 *     A challenge enforces token acquisition using an interstitial JavaScript challenge that inspects the client session for legitimate behavior. The challenge blocks bots or at least increases the cost of operating sophisticated bots.
 *
 *     After the client session successfully responds to the challenge, it receives a new token from AWS WAF, which the challenge script uses to resubmit the original request.
 * You can configure the expiration time in the `ChallengeConfig` `ImmunityTimeProperty` setting at the rule and web ACL level. The rule setting overrides the web ACL setting.
 * This action option is available for rules. It isn't available for web ACL default actions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface ChallengeAction {
  /**
   * - Defines custom handling for the web request, used when the challenge inspection determines that the request's token is valid and unexpired.
   * - For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the [AWS WAF developer guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
   * - _Required_: No
   * - _Type_: [CustomRequestHandling](./aws-properties-wafv2-webacl-customrequesthandling.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-challengeaction-customrequesthandling */
  CustomRequestHandling?: CustomRequestHandling
}

/**
 * Specifies that AWS WAF should count the request. Optionally defines additional custom handling for the request.
 * This is used in the context of other settings, for example to specify values for a rule action or a web ACL default action.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface CountAction {
  /**
   * - Defines custom handling for the web request.
   * - For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _AWS WAF Developer Guide_.
   * - _Required_: No
   * - _Type_: [CustomRequestHandling](./aws-properties-wafv2-webacl-customrequesthandling.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-countaction-customrequesthandling */
  CustomRequestHandling?: CustomRequestHandling
}

/**
 * A logical rule statement used to combine other rule statements with AND logic. You provide more than one [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html#cfn-wafv2-webacl-notstatement-statement) within the `AndStatement`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface AndStatement {
  /**
   * - The statements to combine with AND logic. You can use any statements that can be nested.
   * - _Required_: Yes
   * - _Type_: Array of [Statement](./aws-properties-wafv2-webacl-statement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-andstatement-statements */
  Statements: Statement[]
}

/**
 * A rule statement to match against labels that have been added to the web request by rules that have already run in the web ACL.
 * The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. If you do not provide the fully qualified name in your label match string, AWS WAF performs the search for labels that were added in the same context as the label match statement.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface LabelMatchStatement {
  /**
   * - The string to match against. The setting you provide for this depends on the match statement's `Scope` setting:
   * - Labels are case sensitive and components of a label must be separated by colon, for example `NS1:NS2:name`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9A-Za-z_:-]{1,1024}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-labelmatchstatement-key */
  Key: string | Intrinsic
  /**
   * - Specify whether you want to match using the label name or just the namespace.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `LABEL | NAMESPACE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-labelmatchstatement-scope */
  Scope: string | Intrinsic
}

/**
 * A logical rule statement used to negate the results of another rule statement. You provide one [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html#cfn-wafv2-webacl-notstatement-statement) within the `NotStatement`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface NotStatement {
  /**
   * - The statement to negate. You can use any statement that can be nested.
   * - _Required_: Yes
   * - _Type_: [Statement](./aws-properties-wafv2-webacl-statement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-notstatement-statement */
  Statement: Statement
}

/**
 * A logical rule statement used to combine other rule statements with OR logic. You provide more than one [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html#cfn-wafv2-webacl-notstatement-statement) within the `OrStatement`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface OrStatement {
  /**
   * - The statements to combine with OR logic. You can use any statements that can be nested.
   * - _Required_: Yes
   * - _Type_: Array of [Statement](./aws-properties-wafv2-webacl-statement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-orstatement-statements */
  Statements: Statement[]
}

/**
 * A rule statement used to search web request components for a match against a single regular expression.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface RegexMatchStatement {
  /**
   * - The part of the web request that you want AWS WAF to inspect.
   * - _Required_: Yes
   * - _Type_: [FieldToMatch](./aws-properties-wafv2-webacl-fieldtomatch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-regexmatchstatement-fieldtomatch */
  FieldToMatch: FieldToMatch
  /**
   * - The string representing the regular expression.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-regexmatchstatement-regexstring */
  RegexString: string | Intrinsic
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-webacl-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-regexmatchstatement-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * A rule statement used to search web request components for matches with regular expressions. To use this, create a [AWS::WAFv2::RegexPatternSet](./aws-resource-wafv2-regexpatternset.html) that specifies the expressions that you want to detect, then use that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set.
 * Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface RegexPatternSetReferenceStatement {
  /**
   * - The Amazon Resource Name (ARN) of the [AWS::WAFv2::RegexPatternSet](./aws-resource-wafv2-regexpatternset.html) that this statement references.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-regexpatternsetreferencestatement-arn */
  Arn: string | Intrinsic
  /**
   * - The part of the web request that you want AWS WAF to inspect.
   * - _Required_: Yes
   * - _Type_: [FieldToMatch](./aws-properties-wafv2-webacl-fieldtomatch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-regexpatternsetreferencestatement-fieldtomatch */
  FieldToMatch: FieldToMatch
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-webacl-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-regexpatternsetreferencestatement-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * A rule statement used to run the rules that are defined in a [AWS::WAFv2::RuleGroup](./aws-resource-wafv2-rulegroup.html). To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.
 * You cannot nest a `RuleGroupReferenceStatement`, for example for use inside a `NotStatement` or `OrStatement`. You cannot use a rule group reference statement inside another rule group. You can only reference a rule group as a top-level statement within a rule that you define in a web ACL.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface RuleGroupReferenceStatement {
  /**
   * - The Amazon Resource Name (ARN) of the entity.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-rulegroupreferencestatement-arn */
  Arn: string | Intrinsic
  /**
   * - Rules in the referenced rule group whose actions are set to `Count`.
   * - _Required_: No
   * - _Type_: Array of [ExcludedRule](./aws-properties-wafv2-webacl-excludedrule.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-rulegroupreferencestatement-excludedrules */
  ExcludedRules?: ExcludedRule[]
  /**
   * - Action settings to use in the place of the rule actions that are configured inside the rule group. You specify one override for each rule whose action you want to change.
   * - You can use overrides for testing, for example you can override all of rule actions to `Count` and then monitor the resulting count metrics to understand how the rule group would handle your web traffic. You can also permanently override some or all actions, to modify how the rule group manages your web traffic.
   * - _Required_: No
   * - _Type_: Array of [RuleActionOverride](./aws-properties-wafv2-webacl-ruleactionoverride.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-rulegroupreferencestatement-ruleactionoverrides */
  RuleActionOverrides?: RuleActionOverride[]
}

/**
 * A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes.
 * If you configure AWS WAF to inspect the request body, AWS WAF inspects only the number of bytes in the body up to the limit for the web ACL and protected resource type. If you know that the request body for your web requests should never exceed the inspection limit, you can use a size constraint statement to block requests that have a larger request body size. For more information about the inspection limits, see `Body` and `JsonBody` settings for the `FieldToMatch` data type.
 * If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI `/logo.jpg` is nine characters long.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface SizeConstraintStatement {
  /**
   * - The operator to use to compare the request part to the size setting.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `EQ | NE | LE | LT | GE | GT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-sizeconstraintstatement-comparisonoperator */
  ComparisonOperator: string | Intrinsic
  /**
   * - The part of the web request that you want AWS WAF to inspect.
   * - _Required_: Yes
   * - _Type_: [FieldToMatch](./aws-properties-wafv2-webacl-fieldtomatch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-sizeconstraintstatement-fieldtomatch */
  FieldToMatch: FieldToMatch
  /**
   * - The size, in byte, to compare to the request part, after any transformations.
   * - _Required_: Yes
   * - _Type_: Number
   * - _Minimum_: `0`
   * - _Maximum_: `21474836480`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-sizeconstraintstatement-size */
  Size: number | Intrinsic
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-webacl-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-sizeconstraintstatement-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * A rule statement that inspects for malicious SQL code. Attackers insert malicious SQL code into web requests to do things like modify your database or extract data from it.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface SqliMatchStatement {
  /**
   * - The part of the web request that you want AWS WAF to inspect.
   * - _Required_: Yes
   * - _Type_: [FieldToMatch](./aws-properties-wafv2-webacl-fieldtomatch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-sqlimatchstatement-fieldtomatch */
  FieldToMatch: FieldToMatch
  /**
   * - The sensitivity that you want AWS WAF to use to inspect for SQL injection attacks.
   * - `HIGH` detects more attacks, but might generate more false positives, especially if your web requests frequently contain unusual strings. For information about identifying and mitigating false positives, see [Testing and tuning](https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-testing.html) in the _AWS WAF Developer Guide_.
   * - `LOW` is generally a better choice for resources that already have other protections against SQL injection attacks or that have a low tolerance for false positives.
   * - Default: `LOW`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `LOW | HIGH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-sqlimatchstatement-sensitivitylevel */
  SensitivityLevel?: string | Intrinsic
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-webacl-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-sqlimatchstatement-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * A rule statement that inspects for cross-site scripting (XSS) attacks. In XSS attacks, the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface XssMatchStatement {
  /**
   * - The part of the web request that you want AWS WAF to inspect.
   * - _Required_: Yes
   * - _Type_: [FieldToMatch](./aws-properties-wafv2-webacl-fieldtomatch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-xssmatchstatement-fieldtomatch */
  FieldToMatch: FieldToMatch
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-webacl-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-xssmatchstatement-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * A custom header for custom request and response handling. This is used in [CustomResponse](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-blockaction.html#cfn-wafv2-webacl-blockaction-customresponse) and [CustomRequestHandling](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-countaction.html#cfn-wafv2-webacl-countaction-customrequesthandling).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface CustomHTTPHeader {
  /**
   * - The name of the custom header.
   * - For custom request header insertion, when AWS WAF inserts the header into the request, it prefixes this name `x-amzn-waf-`, to avoid confusion with the headers that are already in the request. For example, for the header name `sample`, AWS WAF inserts the header `x-amzn-waf-sample`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-customhttpheader-name */
  Name: string | Intrinsic
  /**
   * - The value of the custom header.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-customhttpheader-value */
  Value: string | Intrinsic
}

/**
 * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface TextTransformation {
  /**
   * - Sets the relative processing order for multiple transformations. AWS WAF processes all transformations, from lowest priority to highest, before inspecting the transformed content. The priorities don't need to be consecutive, but they must all be different.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-texttransformation-priority */
  Priority: number | Intrinsic
  /**
   * - For detailed descriptions of each of the transformation types, see [Text transformations](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-transformation.html) in the _AWS WAF Developer Guide_.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `NONE | COMPRESS_WHITE_SPACE | HTML_ENTITY_DECODE | LOWERCASE | CMD_LINE | URL_DECODE | BASE64_DECODE | HEX_DECODE | MD5 | REPLACE_COMMENTS | ESCAPE_SEQ_DECODE | SQL_HEX_DECODE | CSS_DECODE | JS_DECODE | NORMALIZE_PATH | NORMALIZE_PATH_WIN | REMOVE_NULLS | REPLACE_NULLS | BASE64_DECODE_EXT | URL_DECODE_UNI | UTF8_TO_UNICODE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-texttransformation-type */
  Type: string | Intrinsic
}

/**
 * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
 * ###### Note
 *
 * If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
 * This configuration is used for [GeoMatchStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-geomatchstatement) and [RateBasedStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-ratebasedstatement). For [IPSetReferenceStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-ipsetreferencestatement), use [IPSetForwardedIPConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ipsetreferencestatement.html#cfn-wafv2-rulegroup-ipsetreferencestatement-ipsetforwardedipconfig) instead.
 * AWS WAF only evaluates the first IP address found in the specified HTTP header.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface ForwardedIPConfiguration {
  /**
   * - The match status to assign to the web request if the request doesn't have a valid IP address in the specified position.
   * - You can specify the following fallback behaviors:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `MATCH | NO_MATCH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-forwardedipconfiguration-fallbackbehavior */
  FallbackBehavior: string | Intrinsic
  /**
   * - The name of the HTTP header to use for the IP address. For example, to use the X-Forwarded-For (XFF) header, set this to `X-Forwarded-For`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9-]+{1,255}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-forwardedipconfiguration-headername */
  HeaderName: string | Intrinsic
}

/**
 * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
 * ###### Note
 *
 * If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
 * This configuration is used only for [IPSetReferenceStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-ipsetreferencestatement). For [GeoMatchStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-geomatchstatement) and [RateBasedStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-ratebasedstatement), use [ForwardedIPConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatement.html#cfn-wafv2-rulegroup-ratebasedstatement-forwardedipconfig) instead.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface IPSetForwardedIPConfiguration {
  /**
   * - The match status to assign to the web request if the request doesn't have a valid IP address in the specified position.
   * - You can specify the following fallback behaviors:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `MATCH | NO_MATCH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ipsetforwardedipconfiguration-fallbackbehavior */
  FallbackBehavior: string | Intrinsic
  /**
   * - The name of the HTTP header to use for the IP address. For example, to use the X-Forwarded-For (XFF) header, set this to `X-Forwarded-For`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9-]+{1,255}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ipsetforwardedipconfiguration-headername */
  HeaderName: string | Intrinsic
  /**
   * - The position in the header to search for the IP address. The header can contain IP addresses of the original client and also of proxies. For example, the header value could be `10.1.1.1, 127.0.0.0, 10.10.10.10` where the first IP address identifies the original client and the rest identify proxies that the request went through.
   * - The options for this setting are the following:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `FIRST | LAST | ANY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ipsetforwardedipconfiguration-position */
  Position: string | Intrinsic
}

/**
 * Specifies a single rule in a rule group whose action you want to override to `Count`.
 * ###### Note
 *
 * Instead of this option, use `RuleActionOverrides`. It accepts any valid action setting, including `Count`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface ExcludedRule {
  /**
   * - The name of the rule whose action you want to override to `Count`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9A-Za-z_-]{1,128}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-excludedrule-name */
  Name: string | Intrinsic
}

/**
 * Action setting to use in the place of a rule action that is configured inside the rule group. You specify one override for each rule whose action you want to change.
 * You can use overrides for testing, for example you can override all of rule actions to `Count` and then monitor the resulting count metrics to understand how the rule group would handle your web traffic. You can also permanently override some or all actions, to modify how the rule group manages your web traffic.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface RuleActionOverride {
  /**
   * - The override action to use, in place of the configured action of the rule in the rule group.
   * - _Required_: Yes
   * - _Type_: [RuleAction](./aws-properties-wafv2-webacl-ruleaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ruleactionoverride-actiontouse */
  ActionToUse: RuleAction
  /**
   * - The name of the rule to override.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9A-Za-z_-]{1,128}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ruleactionoverride-name */
  Name: string | Intrinsic
}

/**
 * Inspect the body of the web request. The body immediately follows the request headers.
 * This is used to indicate the web request component to inspect, in the [FieldToMatch](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexpatternsetreferencestatement.html#cfn-wafv2-rulegroup-regexpatternsetreferencestatement-fieldtomatch) specification.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface Body {
  /**
   * - What AWS WAF should do if the body is larger than AWS WAF can inspect.
   * - AWS WAF does not support inspecting the entire contents of the web request body if the body exceeds the limit for the resource type. When a web request body is larger than the limit, the underlying host service only forwards the contents that are within the limit to AWS WAF for inspection.
   * - The options for oversize handling are the following:
   * - You can combine the `MATCH` or `NO_MATCH` settings for oversize handling with your rule and web ACL action settings, so that you block any request whose body is over the limit.
   * - Default: `CONTINUE`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CONTINUE | MATCH | NO_MATCH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-body-oversizehandling */
  OversizeHandling?: string | Intrinsic
}

/**
 * Available for use with Amazon CloudFront distributions and Application Load Balancers. Match against the request's JA3 fingerprint. The JA3 fingerprint is a 32-character hash derived from the TLS Client Hello of an incoming request. This fingerprint serves as a unique identifier for the client's TLS configuration. AWS WAF calculates and logs this fingerprint for each request that has enough TLS Client Hello information for the calculation. Almost all web requests include this information.
 * ###### Note
 *
 * You can use this choice only with a string match `ByteMatchStatement` with the `PositionalConstraint` set to `EXACTLY`.
 * You can obtain the JA3 fingerprint for client requests from the web ACL logs. If AWS WAF is able to calculate the fingerprint, it includes it in the logs. For information about the logging fields, see [Log fields](https://docs.aws.amazon.com/waf/latest/developerguide/logging-fields.html) in the _AWS WAF Developer Guide_.
 * Provide the JA3 fingerprint string from the logs in your string match statement specification, to match with any future requests that have the same TLS configuration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface JA3Fingerprint {
  /**
   * - The match status to assign to the web request if the request doesn't have a JA3 fingerprint.
   * - You can specify the following fallback behaviors:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `MATCH | NO_MATCH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ja3fingerprint-fallbackbehavior */
  FallbackBehavior: string | Intrinsic
}

/**
 * Inspect one of the headers in the web request, identified by name, for example, `User-Agent` or `Referer`. The name isn't case sensitive.
 * You can filter and inspect all headers with the `FieldToMatch` setting `Headers`.
 * This is used to indicate the web request component to inspect, in the [FieldToMatch](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexpatternsetreferencestatement.html#cfn-wafv2-rulegroup-regexpatternsetreferencestatement-fieldtomatch) specification.
 * Example JSON: `"SingleHeader": { "Name": "haystack" }`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-singleheader-name */
  Name: string | Intrinsic
}

/**
 * Inspect one query argument in the web request, identified by name, for example _UserName_ or _SalesRegion_. The name isn't case sensitive.
 * This is used to indicate the web request component to inspect, in the [FieldToMatch](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexpatternsetreferencestatement.html#cfn-wafv2-rulegroup-regexpatternsetreferencestatement-fieldtomatch) specification.
 * Example JSON: `"SingleQueryArgument": { "Name": "myArgument" }`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface SingleQueryArgument {
  /**
   * - The name of the query argument to inspect.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-singlequeryargument-name */
  Name: string | Intrinsic
}

/**
 * Details for your use of the Bot Control managed rule group, `AWSManagedRulesBotControlRuleSet`. This configuration is used in `ManagedRuleGroupConfig`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface AWSManagedRulesBotControlRuleSet {
  /**
   * - Applies only to the targeted inspection level.
   * - Determines whether to use machine learning (ML) to analyze your web traffic for bot-related activity. Machine learning is required for the Bot Control rules `TGT_ML_CoordinatedActivityLow` and `TGT_ML_CoordinatedActivityMedium`, which inspect for anomalous behavior that might indicate distributed, coordinated bot activity.
   * - For more information about this choice, see the listing for these rules in the table at [Bot Control rules listing](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html#aws-managed-rule-groups-bot-rules) in the _AWS WAF Developer Guide_.
   * - Default: `TRUE`
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-awsmanagedrulesbotcontrolruleset-enablemachinelearning */
  EnableMachineLearning?: boolean | Intrinsic
  /**
   * - The inspection level to use for the Bot Control rule group. The common level is the least expensive. The targeted level includes all common level rules and adds rules with more advanced inspection criteria. For details, see [AWS WAF Bot Control rule group](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html) in the _AWS WAF Developer Guide_.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `COMMON | TARGETED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-awsmanagedrulesbotcontrolruleset-inspectionlevel */
  InspectionLevel: string | Intrinsic
}

/**
 * The identifier of a field in the web request payload that contains customer data.
 * This data type is used to specify fields in the `RequestInspection` and `RequestInspectionACFP` configurations, which are used in the managed rule group configurations `AWSManagedRulesATPRuleSet` and `AWSManagedRulesACFPRuleSet`, respectively.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface FieldIdentifier {
  /**
   * - The name of the field.
   * - When the `PayloadType` in the request inspection is `JSON`, this identifier must be in JSON pointer syntax. For example `/form/username`. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://tools.ietf.org/html/rfc6901).
   * - When the `PayloadType` is `FORM_ENCODED`, use the HTML form names. For example, `username`.
   * - For more information, see the descriptions for each field type in the request inspection properties.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-fieldidentifier-identifier */
  Identifier: string | Intrinsic
}

/**
 * Specifies a cookie as an aggregate key for a rate-based rule. Each distinct value in the cookie contributes to the aggregation instance. If you use a single cookie as your custom key, then each value fully defines an aggregation instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface RateLimitCookie {
  /**
   * - The name of the cookie to use.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratelimitcookie-name */
  Name: string | Intrinsic
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, AWS WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-webacl-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratelimitcookie-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * Specifies a header as an aggregate key for a rate-based rule. Each distinct value in the header contributes to the aggregation instance. If you use a single header as your custom key, then each value fully defines an aggregation instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface RateLimitHeader {
  /**
   * - The name of the header to use.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratelimitheader-name */
  Name: string | Intrinsic
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, AWS WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-webacl-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratelimitheader-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * Specifies a label namespace to use as an aggregate key for a rate-based rule. Each distinct fully qualified label name that has the specified label namespace contributes to the aggregation instance. If you use just one label namespace as your custom key, then each label name fully defines an aggregation instance.
 * This uses only labels that have been added to the request by rules that are evaluated before this rate-based rule in the web ACL.
 * For information about label namespaces and names, see [Label syntax and naming requirements](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-label-requirements.html) in the _AWS WAF Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface RateLimitLabelNamespace {
  /**
   * - The namespace to use for aggregation.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9A-Za-z_:-]{1,1024}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratelimitlabelnamespace-namespace */
  Namespace: string | Intrinsic
}

/**
 * Specifies a query argument in the request as an aggregate key for a rate-based rule. Each distinct value for the named query argument contributes to the aggregation instance. If you use a single query argument as your custom key, then each value fully defines an aggregation instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface RateLimitQueryArgument {
  /**
   * - The name of the query argument to use.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratelimitqueryargument-name */
  Name: string | Intrinsic
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, AWS WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-webacl-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratelimitqueryargument-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * Specifies the request's query string as an aggregate key for a rate-based rule. Each distinct string contributes to the aggregation instance. If you use just the query string as your custom key, then each string fully defines an aggregation instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface RateLimitQueryString {
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, AWS WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-webacl-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratelimitquerystring-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * Specifies the request's URI path as an aggregate key for a rate-based rule. Each distinct URI path contributes to the aggregation instance. If you use just the URI path as your custom key, then each URI path fully defines an aggregation instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface RateLimitUriPath {
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, AWS WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-webacl-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratelimituripath-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * The filter to use to identify the subset of cookies to inspect in a web request.
 * You must specify exactly one setting: either `All`, `IncludedCookies`, or `ExcludedCookies`.
 * Example JSON: `"MatchPattern": { "IncludedCookies": [ "session-id-time", "session-id" ] }`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface CookieMatchPattern {
  /**
   * - Inspect all cookies.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-cookiematchpattern-all */
  All?: any | Intrinsic
  /**
   * - Inspect only the cookies whose keys don't match any of the strings specified here.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `60 | 199`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-cookiematchpattern-excludedcookies */
  ExcludedCookies?: (string | Intrinsic)[]
  /**
   * - Inspect only the cookies that have a key that matches one of the strings specified here.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `60 | 199`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-cookiematchpattern-includedcookies */
  IncludedCookies?: (string | Intrinsic)[]
}

/**
 * The filter to use to identify the subset of headers to inspect in a web request.
 * You must specify exactly one setting: either `All`, `IncludedHeaders`, or `ExcludedHeaders`.
 * Example JSON: `"MatchPattern": { "ExcludedHeaders": [ "KeyToExclude1", "KeyToExclude2" ] }`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface HeaderMatchPattern {
  /**
   * - Inspect all headers.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-headermatchpattern-all */
  All?: any | Intrinsic
  /**
   * - Inspect only the headers whose keys don't match any of the strings specified here.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `64 | 199`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-headermatchpattern-excludedheaders */
  ExcludedHeaders?: (string | Intrinsic)[]
  /**
   * - Inspect only the headers that have a key that matches one of the strings specified here.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `64 | 199`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-headermatchpattern-includedheaders */
  IncludedHeaders?: (string | Intrinsic)[]
}

/**
 * The patterns to look for in the JSON body. AWS WAF inspects the results of these pattern matches against the rule inspection criteria. This is used with the [FieldToMatch](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexpatternsetreferencestatement.html#cfn-wafv2-rulegroup-regexpatternsetreferencestatement-fieldtomatch) option `JsonBody`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface JsonMatchPattern {
  /**
   * - Match all of the elements. See also `MatchScope` in the `JsonBody` `FieldToMatch` specification.
   * - You must specify either this setting or the `IncludedPaths` setting, but not both.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-jsonmatchpattern-all */
  All?: any | Intrinsic
  /**
   * - Match only the specified include paths. See also `MatchScope` in the `JsonBody` `FieldToMatch` specification.
   * - Provide the include paths using JSON Pointer syntax. For example, `"IncludedPaths": ["/dogs/0/name", "/dogs/1/name"]`. For information about this syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://tools.ietf.org/html/rfc6901).
   * - You must specify either this setting or the `All` setting, but not both.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-jsonmatchpattern-includedpaths */
  IncludedPaths?: (string | Intrinsic)[]
}

/**
 * The criteria for inspecting account creation requests, used by the ACFP rule group to validate and track account creation attempts.
 * This is part of the `AWSManagedRulesACFPRuleSet` configuration in `ManagedRuleGroupConfig`.
 * In these settings, you specify how your application accepts account creation attempts by providing the request payload type and the names of the fields within the request body where the username, password, email, and primary address and phone number fields are provided.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface RequestInspectionACFP {
  /**
   * - The names of the fields in the request payload that contain your customer's primary physical address.
   * - Order the address fields in the array exactly as they are ordered in the request payload.
   * - How you specify the address fields depends on the request inspection payload type.
   * - _Required_: No
   * - _Type_: Array of [FieldIdentifier](./aws-properties-wafv2-webacl-fieldidentifier.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-requestinspectionacfp-addressfields */
  AddressFields?: FieldIdentifier[]
  /**
   * - The name of the field in the request payload that contains your customer's email.
   * - How you specify this depends on the request inspection payload type.
   * - _Required_: No
   * - _Type_: [FieldIdentifier](./aws-properties-wafv2-webacl-fieldidentifier.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-requestinspectionacfp-emailfield */
  EmailField?: FieldIdentifier
  /**
   * - The name of the field in the request payload that contains your customer's password.
   * - How you specify this depends on the request inspection payload type.
   * - _Required_: No
   * - _Type_: [FieldIdentifier](./aws-properties-wafv2-webacl-fieldidentifier.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-requestinspectionacfp-passwordfield */
  PasswordField?: FieldIdentifier
  /**
   * - The payload type for your account creation endpoint, either JSON or form encoded.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `JSON | FORM_ENCODED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-requestinspectionacfp-payloadtype */
  PayloadType: string | Intrinsic
  /**
   * - The names of the fields in the request payload that contain your customer's primary phone number.
   * - Order the phone number fields in the array exactly as they are ordered in the request payload.
   * - How you specify the phone number fields depends on the request inspection payload type.
   * - _Required_: No
   * - _Type_: Array of [FieldIdentifier](./aws-properties-wafv2-webacl-fieldidentifier.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-requestinspectionacfp-phonenumberfields */
  PhoneNumberFields?: FieldIdentifier[]
  /**
   * - The name of the field in the request payload that contains your customer's username.
   * - How you specify this depends on the request inspection payload type.
   * - _Required_: No
   * - _Type_: [FieldIdentifier](./aws-properties-wafv2-webacl-fieldidentifier.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-requestinspectionacfp-usernamefield */
  UsernameField?: FieldIdentifier
}

/**
 * The criteria for inspecting login requests, used by the ATP rule group to validate credentials usage.
 * This is part of the `AWSManagedRulesATPRuleSet` configuration in `ManagedRuleGroupConfig`.
 * In these settings, you specify how your application accepts login attempts by providing the request payload type and the names of the fields within the request body where the username and password are provided.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface RequestInspection {
  /**
   * - The name of the field in the request payload that contains your customer's password.
   * - How you specify this depends on the request inspection payload type.
   * - _Required_: Yes
   * - _Type_: [FieldIdentifier](./aws-properties-wafv2-webacl-fieldidentifier.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-requestinspection-passwordfield */
  PasswordField: FieldIdentifier
  /**
   * - The payload type for your login endpoint, either JSON or form encoded.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `JSON | FORM_ENCODED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-requestinspection-payloadtype */
  PayloadType: string | Intrinsic
  /**
   * - The name of the field in the request payload that contains your customer's username.
   * - How you specify this depends on the request inspection payload type.
   * - _Required_: Yes
   * - _Type_: [FieldIdentifier](./aws-properties-wafv2-webacl-fieldidentifier.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-requestinspection-usernamefield */
  UsernameField: FieldIdentifier
}

/**
 * Specifies custom configurations for the associations between the web ACL and protected resources.
 * Use this to customize the maximum size of the request body that your protected resources forward to AWS WAF for inspection. You can customize this setting for CloudFront, API Gateway, Amazon Cognito, App Runner, or Verified Access resources. The default setting is 16 KB (16,384 bytes).
 * ###### Note
 *
 * You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see [AWS WAF Pricing](https://aws.amazon.com/waf/pricing/).
 * For Application Load Balancer and AWS AppSync, the limit is fixed at 8 KB (8,192 bytes).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface AssociationConfig {
  /**
   * - Customizes the maximum size of the request body that your protected CloudFront, API Gateway, Amazon Cognito, App Runner, and Verified Access resources forward to AWS WAF for inspection. The default size is 16 KB (16,384 bytes). You can change the setting for any of the available resource types.
   * - Example JSON: `{ "API_GATEWAY": "KB_48", "APP_RUNNER_SERVICE": "KB_32" }`
   * - For Application Load Balancer and AWS AppSync, the limit is fixed at 8 KB (8,192 bytes).
   * - _Required_: No
   * - _Type_: Object of [RequestBodyAssociatedResourceTypeConfig](./aws-properties-wafv2-webacl-requestbodyassociatedresourcetypeconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-associationconfig-requestbody */
  RequestBody?: Record<string, RequestBodyAssociatedResourceTypeConfig>
}

/**
 * Specifies how AWS WAF should handle `CAPTCHA` evaluations for rules that don't have their own `CaptchaConfig` settings. If you don't specify this, AWS WAF uses its default settings for `CaptchaConfig`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface CaptchaConfig {
  /**
   * - Determines how long a `CAPTCHA` timestamp in the token remains valid after the client successfully solves a `CAPTCHA` puzzle.
   * - _Required_: No
   * - _Type_: [ImmunityTimeProperty](./aws-properties-wafv2-webacl-immunitytimeproperty.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-captchaconfig-immunitytimeproperty */
  ImmunityTimeProperty?: ImmunityTimeProperty
}

/**
 * Configures inspection of the response body. AWS WAF can inspect the first 65,536 bytes (64 KB) of the response body. This is part of the `ResponseInspection` configuration for `AWSManagedRulesATPRuleSet` and `AWSManagedRulesACFPRuleSet`.
 * ###### Note
 *
 * Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface ResponseInspectionBodyContains {
  /**
   * - Strings in the body of the response that indicate a failed login or account creation attempt. To be counted as a failure, the string can be anywhere in the body and must be an exact match, including case. Each string must be unique among the success and failure strings.
   * - JSON example: `"FailureStrings": [ "Request failed" ]`
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `100 | 5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-responseinspectionbodycontains-failurestrings */
  FailureStrings: (string | Intrinsic)[]
  /**
   * - Strings in the body of the response that indicate a successful login or account creation attempt. To be counted as a success, the string can be anywhere in the body and must be an exact match, including case. Each string must be unique among the success and failure strings.
   * - JSON examples: `"SuccessStrings": [ "Login successful" ]` and `"SuccessStrings": [ "Account creation successful", "Welcome to our site!" ]`
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `100 | 5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-responseinspectionbodycontains-successstrings */
  SuccessStrings: (string | Intrinsic)[]
}

/**
 * Configures inspection of the response header. This is part of the `ResponseInspection` configuration for `AWSManagedRulesATPRuleSet` and `AWSManagedRulesACFPRuleSet`.
 * ###### Note
 *
 * Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface ResponseInspectionHeader {
  /**
   * - Values in the response header with the specified name that indicate a failed login or account creation attempt. To be counted as a failure, the value must be an exact match, including case. Each value must be unique among the success and failure values.
   * - JSON examples: `"FailureValues": [ "LoginFailed", "Failed login" ]` and `"FailureValues": [ "AccountCreationFailed" ]`
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `100 | 3`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-responseinspectionheader-failurevalues */
  FailureValues: (string | Intrinsic)[]
  /**
   * - The name of the header to match against. The name must be an exact match, including case.
   * - JSON example: `"Name": [ "RequestResult" ]`
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Minimum_: `1`
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-responseinspectionheader-name */
  Name: string | Intrinsic
  /**
   * - Values in the response header with the specified name that indicate a successful login or account creation attempt. To be counted as a success, the value must be an exact match, including case. Each value must be unique among the success and failure values.
   * - JSON examples: `"SuccessValues": [ "LoginPassed", "Successful login" ]` and `"SuccessValues": [ "AccountCreated", "Successful account creation" ]`
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `100 | 3`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-responseinspectionheader-successvalues */
  SuccessValues: (string | Intrinsic)[]
}

/**
 * Configures inspection of the response JSON. AWS WAF can inspect the first 65,536 bytes (64 KB) of the response JSON. This is part of the `ResponseInspection` configuration for `AWSManagedRulesATPRuleSet` and `AWSManagedRulesACFPRuleSet`.
 * ###### Note
 *
 * Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface ResponseInspectionJson {
  /**
   * - Values for the specified identifier in the response JSON that indicate a failed login or account creation attempt. To be counted as a failure, the value must be an exact match, including case. Each value must be unique among the success and failure values.
   * - JSON example: `"FailureValues": [ "False", "Failed" ]`
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `100 | 5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-responseinspectionjson-failurevalues */
  FailureValues: (string | Intrinsic)[]
  /**
   * - The identifier for the value to match against in the JSON. The identifier must be an exact match, including case.
   * - JSON examples: `"Identifier": [ "/login/success" ]` and `"Identifier": [ "/sign-up/success" ]`
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-responseinspectionjson-identifier */
  Identifier: string | Intrinsic
  /**
   * - Values for the specified identifier in the response JSON that indicate a successful login or account creation attempt. To be counted as a success, the value must be an exact match, including case. Each value must be unique among the success and failure values.
   * - JSON example: `"SuccessValues": [ "True", "Succeeded" ]`
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `100 | 5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-responseinspectionjson-successvalues */
  SuccessValues: (string | Intrinsic)[]
}

/**
 * Configures inspection of the response status code. This is part of the `ResponseInspection` configuration for `AWSManagedRulesATPRuleSet` and `AWSManagedRulesACFPRuleSet`.
 * ###### Note
 *
 * Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface ResponseInspectionStatusCode {
  /**
   * - Status codes in the response that indicate a failed login or account creation attempt. To be counted as a failure, the response status code must match one of these. Each code must be unique among the success and failure status codes.
   * - JSON example: `"FailureCodes": [ 400, 404 ]`
   * - _Required_: Yes
   * - _Type_: Array of Integer
   * - _Minimum_: `0 | 1`
   * - _Maximum_: `999 | 10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-responseinspectionstatuscode-failurecodes */
  FailureCodes: (number | Intrinsic)[]
  /**
   * - Status codes in the response that indicate a successful login or account creation attempt. To be counted as a success, the response status code must match one of these. Each code must be unique among the success and failure status codes.
   * - JSON example: `"SuccessCodes": [ 200, 201 ]`
   * - _Required_: Yes
   * - _Type_: Array of Integer
   * - _Minimum_: `0 | 1`
   * - _Maximum_: `999 | 10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-responseinspectionstatuscode-successcodes */
  SuccessCodes: (number | Intrinsic)[]
}

/**
 * Specifies that AWS WAF should block the request and optionally defines additional custom handling for the response to the web request.
 * This is used in the context of other settings, for example to specify values for a rule action or a web ACL default action.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface BlockAction {
  /**
   * - Defines a custom response for the web request.
   * - For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _AWS WAF Developer Guide_.
   * - _Required_: No
   * - _Type_: [CustomResponse](./aws-properties-wafv2-webacl-customresponse.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-blockaction-customresponse */
  CustomResponse?: CustomResponse
}

/**
 * The action that AWS WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface RuleAction {
  /**
   * - Instructs AWS WAF to allow the web request.
   * - _Required_: No
   * - _Type_: [AllowAction](./aws-properties-wafv2-webacl-allowaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ruleaction-allow */
  Allow?: AllowAction
  /**
   * - Instructs AWS WAF to block the web request.
   * - _Required_: No
   * - _Type_: [BlockAction](./aws-properties-wafv2-webacl-blockaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ruleaction-block */
  Block?: BlockAction
  /**
   * - Specifies that AWS WAF should run a `CAPTCHA` check against the request:
   * - You can configure the expiration time in the `CaptchaConfig` `ImmunityTimeProperty` setting at the rule and web ACL level. The rule setting overrides the web ACL setting.
   * - This action option is available for rules. It isn't available for web ACL default actions.
   * - _Required_: No
   * - _Type_: [CaptchaAction](./aws-properties-wafv2-webacl-captchaaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ruleaction-captcha */
  Captcha?: CaptchaAction
  /**
   * - Instructs AWS WAF to run a `Challenge` check against the web request.
   * - _Required_: No
   * - _Type_: [ChallengeAction](./aws-properties-wafv2-webacl-challengeaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ruleaction-challenge */
  Challenge?: ChallengeAction
  /**
   * - Instructs AWS WAF to count the web request and then continue evaluating the request using the remaining rules in the web ACL.
   * - _Required_: No
   * - _Type_: [CountAction](./aws-properties-wafv2-webacl-countaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ruleaction-count */
  Count?: CountAction
}

/**
 * Custom request handling behavior that inserts custom headers into a web request. You can add custom request handling for AWS WAF to use when the rule action doesn't block the request. For example, `CaptchaAction` for requests with valid t okens, and `AllowAction`.
 * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _AWS WAF Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface CustomRequestHandling {
  /**
   * - The HTTP headers to insert into the request. Duplicate header names are not allowed.
   * - For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the _AWS WAF Developer Guide_.
   * - _Required_: Yes
   * - _Type_: Array of [CustomHTTPHeader](./aws-properties-wafv2-webacl-customhttpheader.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-customrequesthandling-insertheaders */
  InsertHeaders: CustomHTTPHeader[]
}

/**
 * A rule statement that labels web requests by country and region and that matches against web requests based on country code. A geo match rule labels every request that it inspects regardless of whether it finds a match.
 * *   To manage requests only by country, you can use this statement by itself and specify the countries that you want to match against in the `CountryCodes` array.
 *
 * *   Otherwise, configure your geo match rule with Count action so that it only labels requests. Then, add one or more label match rules to run after the geo match rule and configure them to match against the geographic labels and handle the requests as needed.
 * AWS WAF labels requests using the alpha-2 country and region codes from the International Organization for Standardization (ISO) 3166 standard. AWS WAF determines the codes using either the IP address in the web request origin or, if you specify it, the address in the geo match `ForwardedIPConfig`.
 * If you use the web request origin, the label formats are `awswaf:clientip:geo:region:<ISO country code>-<ISO region code>` and `awswaf:clientip:geo:country:<ISO country code>`.
 * If you use a forwarded IP address, the label formats are `awswaf:forwardedip:geo:region:<ISO country code>-<ISO region code>` and `awswaf:forwardedip:geo:country:<ISO country code>`.
 * For additional details, see [Geographic match rule statement](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html) in the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface GeoMatchStatement {
  /**
   * - An array of two-character country codes that you want to match against, for example, `[ "US", "CN" ]`, from the alpha-2 country ISO codes of the ISO 3166 international standard.
   * - When you use a geo match statement just for the region and country labels that it adds to requests, you still have to supply a country code for the rule to evaluate. In this case, you configure the rule to only count matching requests, but it will still generate logging and count metrics for any matches. You can reduce the logging and metrics that the rule produces by specifying a country that's unlikely to be a source of traffic to your site.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `2`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-geomatchstatement-countrycodes */
  CountryCodes?: (string | Intrinsic)[]
  /**
   * - The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
   * - _Required_: No
   * - _Type_: [ForwardedIPConfiguration](./aws-properties-wafv2-webacl-forwardedipconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-geomatchstatement-forwardedipconfig */
  ForwardedIPConfig?: ForwardedIPConfiguration
}

/**
 * A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an [AWS::WAFv2::IPSet](./aws-resource-wafv2-ipset.html) that specifies the addresses you want to detect, then use the ARN of that set in this statement.
 * Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface IPSetReferenceStatement {
  /**
   * - The Amazon Resource Name (ARN) of the [AWS::WAFv2::IPSet](./aws-resource-wafv2-ipset.html) that this statement references.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ipsetreferencestatement-arn */
  Arn: string | Intrinsic
  /**
   * - The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
   * - _Required_: No
   * - _Type_: [IPSetForwardedIPConfiguration](./aws-properties-wafv2-webacl-ipsetforwardedipconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ipsetreferencestatement-ipsetforwardedipconfig */
  IPSetForwardedIPConfig?: IPSetForwardedIPConfiguration
}

/**
 * Specifies a single custom aggregate key for a rate-base rule.
 * ###### Note
 *
 * Web requests that are missing any of the components specified in the aggregation keys are omitted from the rate-based rule evaluation and handling.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface RateBasedStatementCustomKey {
  /**
   * - Use the value of a cookie in the request as an aggregate key. Each distinct value in the cookie contributes to the aggregation instance. If you use a single cookie as your custom key, then each value fully defines an aggregation instance.
   * - _Required_: No
   * - _Type_: [RateLimitCookie](./aws-properties-wafv2-webacl-ratelimitcookie.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratebasedstatementcustomkey-cookie */
  Cookie?: RateLimitCookie
  /**
   * - Use the first IP address in an HTTP header as an aggregate key. Each distinct forwarded IP address contributes to the aggregation instance.
   * - When you specify an IP or forwarded IP in the custom key settings, you must also specify at least one other key to use. You can aggregate on only the forwarded IP address by specifying `FORWARDED_IP` in your rate-based statement's `AggregateKeyType`.
   * - With this option, you must specify the header to use in the rate-based rule's `ForwardedIPConfig` property.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratebasedstatementcustomkey-forwardedip */
  ForwardedIP?: any | Intrinsic
  /**
   * - Use the value of a header in the request as an aggregate key. Each distinct value in the header contributes to the aggregation instance. If you use a single header as your custom key, then each value fully defines an aggregation instance.
   * - _Required_: No
   * - _Type_: [RateLimitHeader](./aws-properties-wafv2-webacl-ratelimitheader.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratebasedstatementcustomkey-header */
  Header?: RateLimitHeader
  /**
   * - Use the request's HTTP method as an aggregate key. Each distinct HTTP method contributes to the aggregation instance. If you use just the HTTP method as your custom key, then each method fully defines an aggregation instance.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratebasedstatementcustomkey-httpmethod */
  HTTPMethod?: any | Intrinsic
  /**
   * - Use the request's originating IP address as an aggregate key. Each distinct IP address contributes to the aggregation instance.
   * - When you specify an IP or forwarded IP in the custom key settings, you must also specify at least one other key to use. You can aggregate on only the IP address by specifying `IP` in your rate-based statement's `AggregateKeyType`.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratebasedstatementcustomkey-ip */
  IP?: any | Intrinsic
  /**
   * - Use the specified label namespace as an aggregate key. Each distinct fully qualified label name that has the specified label namespace contributes to the aggregation instance. If you use just one label namespace as your custom key, then each label name fully defines an aggregation instance.
   * - This uses only labels that have been added to the request by rules that are evaluated before this rate-based rule in the web ACL.
   * - For information about label namespaces and names, see [Label syntax and naming requirements](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-label-requirements.html) in the _AWS WAF Developer Guide_.
   * - _Required_: No
   * - _Type_: [RateLimitLabelNamespace](./aws-properties-wafv2-webacl-ratelimitlabelnamespace.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratebasedstatementcustomkey-labelnamespace */
  LabelNamespace?: RateLimitLabelNamespace
  /**
   * - Use the specified query argument as an aggregate key. Each distinct value for the named query argument contributes to the aggregation instance. If you use a single query argument as your custom key, then each value fully defines an aggregation instance.
   * - _Required_: No
   * - _Type_: [RateLimitQueryArgument](./aws-properties-wafv2-webacl-ratelimitqueryargument.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratebasedstatementcustomkey-queryargument */
  QueryArgument?: RateLimitQueryArgument
  /**
   * - Use the request's query string as an aggregate key. Each distinct string contributes to the aggregation instance. If you use just the query string as your custom key, then each string fully defines an aggregation instance.
   * - _Required_: No
   * - _Type_: [RateLimitQueryString](./aws-properties-wafv2-webacl-ratelimitquerystring.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratebasedstatementcustomkey-querystring */
  QueryString?: RateLimitQueryString
  /**
   * - Use the request's URI path as an aggregate key. Each distinct URI path contributes to the aggregation instance. If you use just the URI path as your custom key, then each URI path fully defines an aggregation instance.
   * - _Required_: No
   * - _Type_: [RateLimitUriPath](./aws-properties-wafv2-webacl-ratelimituripath.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratebasedstatementcustomkey-uripath */
  UriPath?: RateLimitUriPath
}

/**
 * Inspect the cookies in the web request. You can specify the parts of the cookies to inspect and you can narrow the set of cookies to inspect by including or excluding specific keys.
 * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
 * Example JSON: `"Cookies": { "MatchPattern": { "All": {} }, "MatchScope": "KEY", "OversizeHandling": "MATCH" }`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface Cookies {
  /**
   * - The filter to use to identify the subset of cookies to inspect in a web request.
   * - You must specify exactly one setting: either `All`, `IncludedCookies`, or `ExcludedCookies`.
   * - Example JSON: `"MatchPattern": { "IncludedCookies": [ "session-id-time", "session-id" ] }`
   * - _Required_: Yes
   * - _Type_: [CookieMatchPattern](./aws-properties-wafv2-webacl-cookiematchpattern.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-cookies-matchpattern */
  MatchPattern: CookieMatchPattern
  /**
   * - The parts of the cookies to inspect with the rule inspection criteria. If you specify `ALL`, AWS WAF inspects both keys and values.
   * - `All` does not require a match to be found in the keys and a match to be found in the values. It requires a match to be found in the keys or the values or both. To require a match in the keys and in the values, use a logical `AND` statement to combine two match rules, one that inspects the keys and another that inspects the values.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ALL | KEY | VALUE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-cookies-matchscope */
  MatchScope: string | Intrinsic
  /**
   * - What AWS WAF should do if the cookies of the request are more numerous or larger than AWS WAF can inspect. AWS WAF does not support inspecting the entire contents of request cookies when they exceed 8 KB (8192 bytes) or 200 total cookies. The underlying host service forwards a maximum of 200 cookies and at most 8 KB of cookie contents to AWS WAF.
   * - The options for oversize handling are the following:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `CONTINUE | MATCH | NO_MATCH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-cookies-oversizehandling */
  OversizeHandling: string | Intrinsic
}

/**
 * Inspect all headers in the web request. You can specify the parts of the headers to inspect and you can narrow the set of headers to inspect by including or excluding specific keys.
 * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
 * If you want to inspect just the value of a single header, use the `SingleHeader` `FieldToMatch` setting instead.
 * Example JSON: `"Headers": { "MatchPattern": { "All": {} }, "MatchScope": "KEY", "OversizeHandling": "MATCH" }`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface Headers {
  /**
   * - The filter to use to identify the subset of headers to inspect in a web request.
   * - You must specify exactly one setting: either `All`, `IncludedHeaders`, or `ExcludedHeaders`.
   * - Example JSON: `"MatchPattern": { "ExcludedHeaders": [ "KeyToExclude1", "KeyToExclude2" ] }`
   * - _Required_: Yes
   * - _Type_: [HeaderMatchPattern](./aws-properties-wafv2-webacl-headermatchpattern.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-headers-matchpattern */
  MatchPattern: HeaderMatchPattern
  /**
   * - The parts of the headers to match with the rule inspection criteria. If you specify `ALL`, AWS WAF inspects both keys and values.
   * - `All` does not require a match to be found in the keys and a match to be found in the values. It requires a match to be found in the keys or the values or both. To require a match in the keys and in the values, use a logical `AND` statement to combine two match rules, one that inspects the keys and another that inspects the values.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ALL | KEY | VALUE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-headers-matchscope */
  MatchScope: string | Intrinsic
  /**
   * - What AWS WAF should do if the headers of the request are more numerous or larger than AWS WAF can inspect. AWS WAF does not support inspecting the entire contents of request headers when they exceed 8 KB (8192 bytes) or 200 total headers. The underlying host service forwards a maximum of 200 headers and at most 8 KB of header contents to AWS WAF.
   * - The options for oversize handling are the following:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `CONTINUE | MATCH | NO_MATCH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-headers-oversizehandling */
  OversizeHandling: string | Intrinsic
}

/**
 * Inspect the body of the web request as JSON. The body immediately follows the request headers.
 * This is used to indicate the web request component to inspect, in the [FieldToMatch](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexpatternsetreferencestatement.html#cfn-wafv2-rulegroup-regexpatternsetreferencestatement-fieldtomatch) specification.
 * Use the specifications in this object to indicate which parts of the JSON body to inspect using the rule's inspection criteria. AWS WAF inspects only the parts of the JSON that result from the matches that you indicate.
 * Example JSON: `"JsonBody": { "MatchPattern": { "All": {} }, "MatchScope": "ALL" }`
 * For additional information about this request component option, see [JSON body](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-fields-list.html#waf-rule-statement-request-component-json-body) in the _AWS WAF Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface JsonBody {
  /**
   * - What AWS WAF should do if it fails to completely parse the JSON body. The options are the following:
   * - If you don't provide this setting, AWS WAF parses and evaluates the content only up to the first parsing failure that it encounters.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `MATCH | NO_MATCH | EVALUATE_AS_STRING`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-jsonbody-invalidfallbackbehavior */
  InvalidFallbackBehavior?: string | Intrinsic
  /**
   * - The patterns to look for in the JSON body. AWS WAF inspects the results of these pattern matches against the rule inspection criteria.
   * - _Required_: Yes
   * - _Type_: [JsonMatchPattern](./aws-properties-wafv2-webacl-jsonmatchpattern.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-jsonbody-matchpattern */
  MatchPattern: JsonMatchPattern
  /**
   * - The parts of the JSON to match against using the `MatchPattern`. If you specify `ALL`, AWS WAF matches against keys and values.
   * - `All` does not require a match to be found in the keys and a match to be found in the values. It requires a match to be found in the keys or the values or both. To require a match in the keys and in the values, use a logical `AND` statement to combine two match rules, one that inspects the keys and another that inspects the values.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ALL | KEY | VALUE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-jsonbody-matchscope */
  MatchScope: string | Intrinsic
  /**
   * - What AWS WAF should do if the body is larger than AWS WAF can inspect.
   * - AWS WAF does not support inspecting the entire contents of the web request body if the body exceeds the limit for the resource type. When a web request body is larger than the limit, the underlying host service only forwards the contents that are within the limit to AWS WAF for inspection.
   * - The options for oversize handling are the following:
   * - You can combine the `MATCH` or `NO_MATCH` settings for oversize handling with your rule and web ACL action settings, so that you block any request whose body is over the limit.
   * - Default: `CONTINUE`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CONTINUE | MATCH | NO_MATCH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-jsonbody-oversizehandling */
  OversizeHandling?: string | Intrinsic
}

/**
 * Details for your use of the account takeover prevention managed rule group, `AWSManagedRulesATPRuleSet`. This configuration is used in `ManagedRuleGroupConfig`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface AWSManagedRulesATPRuleSet {
  /**
   * - Allow the use of regular expressions in the login page path.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-awsmanagedrulesatpruleset-enableregexinpath */
  EnableRegexInPath?: boolean | Intrinsic
  /**
   * - The path of the login endpoint for your application. For example, for the URL `https://example.com/web/login`, you would provide the path `/web/login`. Login paths that start with the path that you provide are considered a match. For example `/web/login` matches the login paths `/web/login`, `/web/login/`, `/web/loginPage`, and `/web/login/thisPage`, but doesn't match the login path `/home/web/login` or `/website/login`.
   * - The rule group inspects only HTTP `POST` requests to your specified login endpoint.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-awsmanagedrulesatpruleset-loginpath */
  LoginPath: string | Intrinsic
  /**
   * - The criteria for inspecting login requests, used by the ATP rule group to validate credentials usage.
   * - _Required_: No
   * - _Type_: [RequestInspection](./aws-properties-wafv2-webacl-requestinspection.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-awsmanagedrulesatpruleset-requestinspection */
  RequestInspection?: RequestInspection
  /**
   * - The criteria for inspecting responses to login requests, used by the ATP rule group to track login failure rates.
   * - The ATP rule group evaluates the responses that your protected resources send back to client login attempts, keeping count of successful and failed attempts for each IP address and client session. Using this information, the rule group labels and mitigates requests from client sessions and IP addresses that have had too many failed login attempts in a short amount of time.
   * - _Required_: No
   * - _Type_: [ResponseInspection](./aws-properties-wafv2-webacl-responseinspection.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-awsmanagedrulesatpruleset-responseinspection */
  ResponseInspection?: ResponseInspection
}

/**
 * The criteria for inspecting responses to login requests and account creation requests, used by the ATP and ACFP rule groups to track login and account creation success and failure rates.
 * ###### Note
 *
 * Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
 * The rule groups evaluates the responses that your protected resources send back to client login and account creation attempts, keeping count of successful and failed attempts from each IP address and client session. Using this information, the rule group labels and mitigates requests from client sessions and IP addresses with too much suspicious activity in a short amount of time.
 * This is part of the `AWSManagedRulesATPRuleSet` and `AWSManagedRulesACFPRuleSet` configurations in `ManagedRuleGroupConfig`.
 * Enable response inspection by configuring exactly one component of the response to inspect, for example, `Header` or `StatusCode`. You can't configure more than one component for inspection. If you don't configure any of the response inspection options, response inspection is disabled.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface ResponseInspection {
  /**
   * - Configures inspection of the response body for success and failure indicators. AWS WAF can inspect the first 65,536 bytes (64 KB) of the response body.
   * - _Required_: No
   * - _Type_: [ResponseInspectionBodyContains](./aws-properties-wafv2-webacl-responseinspectionbodycontains.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-responseinspection-bodycontains */
  BodyContains?: ResponseInspectionBodyContains
  /**
   * - Configures inspection of the response header for success and failure indicators.
   * - _Required_: No
   * - _Type_: [ResponseInspectionHeader](./aws-properties-wafv2-webacl-responseinspectionheader.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-responseinspection-header */
  Header?: ResponseInspectionHeader
  /**
   * - Configures inspection of the response JSON for success and failure indicators. AWS WAF can inspect the first 65,536 bytes (64 KB) of the response JSON.
   * - _Required_: No
   * - _Type_: [ResponseInspectionJson](./aws-properties-wafv2-webacl-responseinspectionjson.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-responseinspection-json */
  Json?: ResponseInspectionJson
  /**
   * - Configures inspection of the response status code for success and failure indicators.
   * - _Required_: No
   * - _Type_: [ResponseInspectionStatusCode](./aws-properties-wafv2-webacl-responseinspectionstatuscode.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-responseinspection-statuscode */
  StatusCode?: ResponseInspectionStatusCode
}

/**
 * Specifies that AWS WAF should allow the request and optionally defines additional custom handling for the request.
 * This is used in the context of other settings, for example to specify values for a rule action or a web ACL default action.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface AllowAction {
  /**
   * - Defines custom handling for the web request.
   * - For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _AWS WAF Developer Guide_.
   * - _Required_: No
   * - _Type_: [CustomRequestHandling](./aws-properties-wafv2-webacl-customrequesthandling.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-allowaction-customrequesthandling */
  CustomRequestHandling?: CustomRequestHandling
}

/**
 * A rate-based rule counts incoming requests and rate limits requests when they are coming at too fast a rate. The rule categorizes requests according to your aggregation criteria, collects them into aggregation instances, and counts and rate limits the requests for each instance.
 * ###### Note
 *
 * If you change any of these settings in a rule that's currently in use, the change resets the rule's rate limiting counts. This can pause the rule's rate limiting activities for up to a minute.
 * You can specify individual aggregation keys, like IP address or HTTP method. You can also specify aggregation key combinations, like IP address and HTTP method, or HTTP method, query argument, and cookie.
 * Each unique set of values for the aggregation keys that you specify is a separate aggregation instance, with the value from each key contributing to the aggregation instance definition.
 * For example, assume the rule evaluates web requests with the following IP address and HTTP method values:
 * *   IP address 10.1.1.1, HTTP method POST
 *
 * *   IP address 10.1.1.1, HTTP method GET
 *
 * *   IP address 127.0.0.0, HTTP method POST
 *
 * *   IP address 10.1.1.1, HTTP method GET
 * The rule would create different aggregation instances according to your aggregation criteria, for example:
 * *   If the aggregation criteria is just the IP address, then each individual address is an aggregation instance, and AWS WAF counts requests separately for each. The aggregation instances and request counts for our example would be the following:
 *
 *     *   IP address 10.1.1.1: count 3
 *
 *     *   IP address 127.0.0.0: count 1
 *
 *
 * *   If the aggregation criteria is HTTP method, then each individual HTTP method is an aggregation instance. The aggregation instances and request counts for our example would be the following:
 *
 *     *   HTTP method POST: count 2
 *
 *     *   HTTP method GET: count 2
 *
 *
 * *   If the aggregation criteria is IP address and HTTP method, then each IP address and each HTTP method would contribute to the combined aggregation instance. The aggregation instances and request counts for our example would be the following:
 *
 *     *   IP address 10.1.1.1, HTTP method POST: count 1
 *
 *     *   IP address 10.1.1.1, HTTP method GET: count 2
 *
 *     *   IP address 127.0.0.0, HTTP method POST: count 1
 * For any n-tuple of aggregation keys, each unique combination of values for the keys defines a separate aggregation instance, which AWS WAF counts and rate-limits individually.
 * You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts and rate limits requests that match the nested statement. You can use this nested scope-down statement in conjunction with your aggregation key specifications or you can just count and rate limit all requests that match the scope-down statement, without additional aggregation. When you choose to just manage all requests that match a scope-down statement, the aggregation instance is singular for the rule.
 * You cannot nest a `RateBasedStatement` inside another statement, for example inside a `NotStatement` or `OrStatement`. You can define a `RateBasedStatement` inside a web ACL and inside a rule group.
 * For additional information about the options, see [Rate limiting web requests using rate-based rules](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rate-based-rules.html) in the _AWS WAF Developer Guide_.
 * If you only aggregate on the individual IP address or forwarded IP address, you can retrieve the list of IP addresses that AWS WAF is currently rate limiting for a rule through the API call `GetRateBasedStatementManagedKeys`. This option is not available for other aggregation configurations.
 * AWS WAF tracks and manages web requests separately for each instance of a rate-based rule that you use. For example, if you provide the same rate-based rule settings in two web ACLs, each of the two rule statements represents a separate instance of the rate-based rule and gets its own tracking and management by AWS WAF. If you define a rate-based rule inside a rule group, and then use that rule group in multiple places, each use creates a separate instance of the rate-based rule that gets its own tracking and management by AWS WAF.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface RateBasedStatement {
  /**
   * - Setting that indicates how to aggregate the request counts.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `CONSTANT | IP | FORWARDED_IP | CUSTOM_KEYS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratebasedstatement-aggregatekeytype */
  AggregateKeyType: string | Intrinsic
  /**
   * - Specifies the aggregate keys to use in a rate-base rule.
   * - _Required_: No
   * - _Type_: Array of [RateBasedStatementCustomKey](./aws-properties-wafv2-webacl-ratebasedstatementcustomkey.html)
   * - _Maximum_: `5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratebasedstatement-customkeys */
  CustomKeys?: RateBasedStatementCustomKey[]
  /**
   * - The amount of time, in seconds, that AWS WAF should include in its request counts, looking back from the current time. For example, for a setting of 120, when AWS WAF checks the rate, it counts the requests for the 2 minutes immediately preceding the current time. Valid settings are 60, 120, 300, and 600.
   * - This setting doesn't determine how often AWS WAF checks the rate, but how far back it looks each time it checks. AWS WAF checks the rate about every 10 seconds.
   * - Default: `300` (5 minutes)
   * - _Required_: No
   * - _Type_: Integer
   * - _Allowed values_: `60 | 120 | 300 | 600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratebasedstatement-evaluationwindowsec */
  EvaluationWindowSec?: number | Intrinsic
  /**
   * - The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
   * - This is required if you specify a forwarded IP in the rule's aggregate key settings.
   * - _Required_: No
   * - _Type_: [ForwardedIPConfiguration](./aws-properties-wafv2-webacl-forwardedipconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratebasedstatement-forwardedipconfig */
  ForwardedIPConfig?: ForwardedIPConfiguration
  /**
   * - The limit on requests per 5-minute period for a single aggregation instance for the rate-based rule. If the rate-based statement includes a `ScopeDownStatement`, this limit is applied only to the requests that match the statement.
   * - Examples:
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `100`
   * - _Maximum_: `2000000000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratebasedstatement-limit */
  Limit: number | Intrinsic
  /**
   * - An optional nested statement that narrows the scope of the web requests that are evaluated and managed by the rate-based statement. When you use a scope-down statement, the rate-based rule only tracks and rate limits requests that match the scope-down statement. You can use any nestable [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html#cfn-wafv2-webacl-notstatement-statement) in the scope-down statement, and you can nest statements at any level, the same as you can for a rule statement.
   * - _Required_: No
   * - _Type_: [Statement](./aws-properties-wafv2-webacl-statement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-ratebasedstatement-scopedownstatement */
  ScopeDownStatement?: Statement
}

/**
 * Specifies a web request component to be used in a rule match statement or in a logging configuration.
 * *   In a rule statement, this is the part of the web request that you want AWS WAF to inspect. Include the single `FieldToMatch` type that you want to inspect, with additional specifications as needed, according to the type. You specify a single request component in `FieldToMatch` for each rule statement that requires it. To inspect more than one component of the web request, create a separate rule statement for each component.
 *
 *     Example JSON for a `QueryString` field to match:
 *
 *     `"FieldToMatch": { "QueryString": {} }`
 *
 *     Example JSON for a `Method` field to match specification:
 *
 *     `"FieldToMatch": { "Method": { "Name": "DELETE" } }`
 *
 * *   In a logging configuration, this is used in the `RedactedFields` property to specify a field to redact from the logging records. For this use case, note the following:
 *
 *     *   Even though all `FieldToMatch` settings are available, the only valid settings for field redaction are `UriPath`, `QueryString`, `SingleHeader`, and `Method`.
 *
 *     *   In this documentation, the descriptions of the individual fields talk about specifying the web request component to inspect, but for field redaction, you are specifying the component type to redact from the logs.
 *
 *     *   If you have request sampling enabled, the redacted fields configuration for logging has no impact on sampling. The only way to exclude fields from request sampling is by disabling sampling in the web ACL visibility configuration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface FieldToMatch {
  /**
   * - Inspect all query arguments.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-fieldtomatch-allqueryarguments */
  AllQueryArguments?: any | Intrinsic
  /**
   * - Inspect the request body as plain text. The request body immediately follows the request headers. This is the part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form.
   * - AWS WAF does not support inspecting the entire contents of the web request body if the body exceeds the limit for the resource type. When a web request body is larger than the limit, the underlying host service only forwards the contents that are within the limit to AWS WAF for inspection.
   * - For information about how to handle oversized request bodies, see the `Body` object configuration.
   * - _Required_: No
   * - _Type_: [Body](./aws-properties-wafv2-webacl-body.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-fieldtomatch-body */
  Body?: Body
  /**
   * - Inspect the request cookies. You must configure scope and pattern matching filters in the `Cookies` object, to define the set of cookies and the parts of the cookies that AWS WAF inspects.
   * - Only the first 8 KB (8192 bytes) of a request's cookies and only the first 200 cookies are forwarded to AWS WAF for inspection by the underlying host service. You must configure how to handle any oversize cookie content in the `Cookies` object. AWS WAF applies the pattern matching filters to the cookies that it receives from the underlying host service.
   * - _Required_: No
   * - _Type_: [Cookies](./aws-properties-wafv2-webacl-cookies.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-fieldtomatch-cookies */
  Cookies?: Cookies
  /**
   * - Inspect the request headers. You must configure scope and pattern matching filters in the `Headers` object, to define the set of headers to and the parts of the headers that AWS WAF inspects.
   * - Only the first 8 KB (8192 bytes) of a request's headers and only the first 200 headers are forwarded to AWS WAF for inspection by the underlying host service. You must configure how to handle any oversize header content in the `Headers` object. AWS WAF applies the pattern matching filters to the headers that it receives from the underlying host service.
   * - _Required_: No
   * - _Type_: [Headers](./aws-properties-wafv2-webacl-headers.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-fieldtomatch-headers */
  Headers?: Headers
  /**
   * - Available for use with Amazon CloudFront distributions and Application Load Balancers. Match against the request's JA3 fingerprint. The JA3 fingerprint is a 32-character hash derived from the TLS Client Hello of an incoming request. This fingerprint serves as a unique identifier for the client's TLS configuration. AWS WAF calculates and logs this fingerprint for each request that has enough TLS Client Hello information for the calculation. Almost all web requests include this information.
   * - You can obtain the JA3 fingerprint for client requests from the web ACL logs. If AWS WAF is able to calculate the fingerprint, it includes it in the logs. For information about the logging fields, see [Log fields](https://docs.aws.amazon.com/waf/latest/developerguide/logging-fields.html) in the _AWS WAF Developer Guide_.
   * - Provide the JA3 fingerprint string from the logs in your string match statement specification, to match with any future requests that have the same TLS configuration.
   * - _Required_: No
   * - _Type_: [JA3Fingerprint](./aws-properties-wafv2-webacl-ja3fingerprint.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-fieldtomatch-ja3fingerprint */
  JA3Fingerprint?: JA3Fingerprint
  /**
   * - Inspect the request body as JSON. The request body immediately follows the request headers. This is the part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form.
   * - AWS WAF does not support inspecting the entire contents of the web request body if the body exceeds the limit for the resource type. When a web request body is larger than the limit, the underlying host service only forwards the contents that are within the limit to AWS WAF for inspection.
   * - For information about how to handle oversized request bodies, see the `JsonBody` object configuration.
   * - _Required_: No
   * - _Type_: [JsonBody](./aws-properties-wafv2-webacl-jsonbody.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-fieldtomatch-jsonbody */
  JsonBody?: JsonBody
  /**
   * - Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-fieldtomatch-method */
  Method?: any | Intrinsic
  /**
   * - Inspect the query string. This is the part of a URL that appears after a `?` character, if any.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-fieldtomatch-querystring */
  QueryString?: any | Intrinsic
  /**
   * - Inspect a single header. Provide the name of the header to inspect, for example, `User-Agent` or `Referer`. This setting isn't case sensitive.
   * - Example JSON: `"SingleHeader": { "Name": "haystack" }`
   * - Alternately, you can filter and inspect all headers with the `Headers` `FieldToMatch` setting.
   * - _Required_: No
   * - _Type_: [SingleHeader](./aws-properties-wafv2-webacl-singleheader.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-fieldtomatch-singleheader */
  SingleHeader?: SingleHeader
  /**
   * - Inspect a single query argument. Provide the name of the query argument to inspect, such as _UserName_ or _SalesRegion_. The name can be up to 30 characters long and isn't case sensitive.
   * - Example JSON: `"SingleQueryArgument": { "Name": "myArgument" }`
   * - _Required_: No
   * - _Type_: [SingleQueryArgument](./aws-properties-wafv2-webacl-singlequeryargument.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-fieldtomatch-singlequeryargument */
  SingleQueryArgument?: SingleQueryArgument
  /**
   * - Inspect the request URI path. This is the part of the web request that identifies a resource, for example, `/images/daily-ad.jpg`.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-fieldtomatch-uripath */
  UriPath?: any | Intrinsic
}

/**
 * Details for your use of the account creation fraud prevention managed rule group, `AWSManagedRulesACFPRuleSet`. This configuration is used in `ManagedRuleGroupConfig`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface AWSManagedRulesACFPRuleSet {
  /**
   * - The path of the account creation endpoint for your application. This is the page on your website that accepts the completed registration form for a new user. This page must accept `POST` requests.
   * - For example, for the URL `https://example.com/web/newaccount`, you would provide the path `/web/newaccount`. Account creation page paths that start with the path that you provide are considered a match. For example `/web/newaccount` matches the account creation paths `/web/newaccount`, `/web/newaccount/`, `/web/newaccountPage`, and `/web/newaccount/thisPage`, but doesn't match the path `/home/web/newaccount` or `/website/newaccount`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-awsmanagedrulesacfpruleset-creationpath */
  CreationPath: string | Intrinsic
  /**
   * - Allow the use of regular expressions in the registration page path and the account creation path.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-awsmanagedrulesacfpruleset-enableregexinpath */
  EnableRegexInPath?: boolean | Intrinsic
  /**
   * - The path of the account registration endpoint for your application. This is the page on your website that presents the registration form to new users.
   * - For example, for the URL `https://example.com/web/registration`, you would provide the path `/web/registration`. Registration page paths that start with the path that you provide are considered a match. For example `/web/registration` matches the registration paths `/web/registration`, `/web/registration/`, `/web/registrationPage`, and `/web/registration/thisPage`, but doesn't match the path `/home/web/registration` or `/website/registration`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-awsmanagedrulesacfpruleset-registrationpagepath */
  RegistrationPagePath: string | Intrinsic
  /**
   * - The criteria for inspecting account creation requests, used by the ACFP rule group to validate and track account creation attempts.
   * - _Required_: Yes
   * - _Type_: [RequestInspectionACFP](./aws-properties-wafv2-webacl-requestinspectionacfp.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-awsmanagedrulesacfpruleset-requestinspection */
  RequestInspection: RequestInspectionACFP
  /**
   * - The criteria for inspecting responses to account creation requests, used by the ACFP rule group to track account creation success rates.
   * - The ACFP rule group evaluates the responses that your protected resources send back to client account creation attempts, keeping count of successful and failed attempts from each IP address and client session. Using this information, the rule group labels and mitigates requests from client sessions and IP addresses that have had too many successful account creation attempts in a short amount of time.
   * - _Required_: No
   * - _Type_: [ResponseInspection](./aws-properties-wafv2-webacl-responseinspection.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-awsmanagedrulesacfpruleset-responseinspection */
  ResponseInspection?: ResponseInspection
}

/**
 * In a [AWS::WAFv2::WebACL](./aws-resource-wafv2-webacl.html), this is the action that you want AWS WAF to perform when a web request doesn't match any of the rules in the `WebACL`. The default action must be a terminating action.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface DefaultAction {
  /**
   * - Specifies that AWS WAF should allow requests by default.
   * - _Required_: No
   * - _Type_: [AllowAction](./aws-properties-wafv2-webacl-allowaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-defaultaction-allow */
  Allow?: AllowAction
  /**
   * - Specifies that AWS WAF should block requests by default.
   * - _Required_: No
   * - _Type_: [BlockAction](./aws-properties-wafv2-webacl-blockaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-defaultaction-block */
  Block?: BlockAction
}

/**
 * A rule statement that defines a string match search for AWS WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want AWS WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the AWS WAF console and the developer guide, this is called a string match statement.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface ByteMatchStatement {
  /**
   * - The part of the web request that you want AWS WAF to inspect.
   * - _Required_: Yes
   * - _Type_: [FieldToMatch](./aws-properties-wafv2-webacl-fieldtomatch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-bytematchstatement-fieldtomatch */
  FieldToMatch: FieldToMatch
  /**
   * - The area within the portion of the web request that you want AWS WAF to search for `SearchString`. Valid values include the following:
   * - **CONTAINS**
   * - The specified part of the web request must include the value of `SearchString`, but the location doesn't matter.
   * - **CONTAINS\_WORD**
   * - The specified part of the web request must include the value of `SearchString`, and `SearchString` must contain only alphanumeric characters or underscore (A-Z, a-z, 0-9, or \_). In addition, `SearchString` must be a word, which means that both of the following are true:
   * - **EXACTLY**
   * - The value of the specified part of the web request must exactly match the value of `SearchString`.
   * - **STARTS\_WITH**
   * - The value of `SearchString` must appear at the beginning of the specified part of the web request.
   * - **ENDS\_WITH**
   * - The value of `SearchString` must appear at the end of the specified part of the web request.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `EXACTLY | STARTS_WITH | ENDS_WITH | CONTAINS | CONTAINS_WORD`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-bytematchstatement-positionalconstraint */
  PositionalConstraint: string | Intrinsic
  /**
   * - A string value that you want AWS WAF to search for. AWS WAF searches only in the part of web requests that you designate for inspection in `FieldToMatch`. The maximum length of the value is 200 bytes. For alphabetic characters A-Z and a-z, the value is case sensitive.
   * - Don't encode this string. Provide the value that you want AWS WAF to search for. AWS CloudFormation automatically base64 encodes the value for you.
   * - For example, suppose the value of `Type` is `HEADER` and the value of `Data` is `User-Agent`. If you want to search the `User-Agent` header for the value `BadBot`, you provide the string `BadBot` in the value of `SearchString`.
   * - You must specify either `SearchString` or `SearchStringBase64` in a `ByteMatchStatement`.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-bytematchstatement-searchstring */
  SearchString?: string | Intrinsic
  /**
   * - String to search for in a web request component, base64-encoded. If you don't want to encode the string, specify the unencoded value in `SearchString` instead.
   * - You must specify either `SearchString` or `SearchStringBase64` in a `ByteMatchStatement`.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-bytematchstatement-searchstringbase64 */
  SearchStringBase64?: string | Intrinsic
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-webacl-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-bytematchstatement-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * Additional information that's used by a managed rule group. Many managed rule groups don't require this.
 * The rule groups used for intelligent threat mitigation require additional configuration:
 * *   Use the `AWSManagedRulesACFPRuleSet` configuration object to configure the account creation fraud prevention managed rule group. The configuration includes the registration and sign-up pages of your application and the locations in the account creation request payload of data, such as the user email and phone number fields.
 *
 * *   Use the `AWSManagedRulesATPRuleSet` configuration object to configure the account takeover prevention managed rule group. The configuration includes the sign-in page of your application and the locations in the login request payload of data such as the username and password.
 *
 * *   Use the `AWSManagedRulesBotControlRuleSet` configuration object to configure the protection level that you want the Bot Control rule group to use.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface ManagedRuleGroupConfig {
  /**
   * - Additional configuration for using the account creation fraud prevention (ACFP) managed rule group, `AWSManagedRulesACFPRuleSet`. Use this to provide account creation request information to the rule group. For web ACLs that protect CloudFront distributions, use this to also provide the information about how your distribution responds to account creation requests.
   * - For information about using the ACFP managed rule group, see [AWS WAF Fraud Control account creation fraud prevention (ACFP) rule group](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-acfp.html) and [AWS WAF Fraud Control account creation fraud prevention (ACFP)](https://docs.aws.amazon.com/waf/latest/developerguide/waf-acfp.html) in the _AWS WAF Developer Guide_.
   * - _Required_: No
   * - _Type_: [AWSManagedRulesACFPRuleSet](./aws-properties-wafv2-webacl-awsmanagedrulesacfpruleset.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-managedrulegroupconfig-awsmanagedrulesacfpruleset */
  AWSManagedRulesACFPRuleSet?: AWSManagedRulesACFPRuleSet
  /**
   * - Additional configuration for using the account takeover prevention (ATP) managed rule group, `AWSManagedRulesATPRuleSet`. Use this to provide login request information to the rule group. For web ACLs that protect CloudFront distributions, use this to also provide the information about how your distribution responds to login requests.
   * - This configuration replaces the individual configuration fields in `ManagedRuleGroupConfig` and provides additional feature configuration.
   * - For information about using the ATP managed rule group, see [AWS WAF Fraud Control account takeover prevention (ATP) rule group](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-atp.html) and [AWS WAF Fraud Control account takeover prevention (ATP)](https://docs.aws.amazon.com/waf/latest/developerguide/waf-atp.html) in the _AWS WAF Developer Guide_.
   * - _Required_: No
   * - _Type_: [AWSManagedRulesATPRuleSet](./aws-properties-wafv2-webacl-awsmanagedrulesatpruleset.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-managedrulegroupconfig-awsmanagedrulesatpruleset */
  AWSManagedRulesATPRuleSet?: AWSManagedRulesATPRuleSet
  /**
   * - Additional configuration for using the Bot Control managed rule group. Use this to specify the inspection level that you want to use. For information about using the Bot Control managed rule group, see [AWS WAF Bot Control rule group](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html) and [AWS WAF Bot Control](https://docs.aws.amazon.com/waf/latest/developerguide/waf-bot-control.html) in the _AWS WAF Developer Guide_.
   * - _Required_: No
   * - _Type_: [AWSManagedRulesBotControlRuleSet](./aws-properties-wafv2-webacl-awsmanagedrulesbotcontrolruleset.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-managedrulegroupconfig-awsmanagedrulesbotcontrolruleset */
  AWSManagedRulesBotControlRuleSet?: AWSManagedRulesBotControlRuleSet
  /**
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-managedrulegroupconfig-loginpath */
  LoginPath?: string | Intrinsic
  /**
   * - _Required_: No
   * - _Type_: [FieldIdentifier](./aws-properties-wafv2-webacl-fieldidentifier.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-managedrulegroupconfig-passwordfield */
  PasswordField?: FieldIdentifier
  /**
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `JSON | FORM_ENCODED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-managedrulegroupconfig-payloadtype */
  PayloadType?: string | Intrinsic
  /**
   * - _Required_: No
   * - _Type_: [FieldIdentifier](./aws-properties-wafv2-webacl-fieldidentifier.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-managedrulegroupconfig-usernamefield */
  UsernameField?: FieldIdentifier
}

/**
 * A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names through the API call `ListAvailableManagedRuleGroups`.
 * You cannot nest a `ManagedRuleGroupStatement`, for example for use inside a `NotStatement` or `OrStatement`. You cannot use a managed rule group statement inside another rule group. You can only use a managed rule group statement as a top-level statement in a rule that you define in a web ACL.
 * ###### Note
 *
 * You are charged additional fees when you use the AWS WAF Bot Control managed rule group `AWSManagedRulesBotControlRuleSet`, the AWS WAF Fraud Control account takeover prevention (ATP) managed rule group `AWSManagedRulesATPRuleSet`, or the AWS WAF Fraud Control account creation fraud prevention (ACFP) managed rule group `AWSManagedRulesACFPRuleSet`. For more information, see [AWS WAF Pricing](https://aws.amazon.com/waf/pricing/).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface ManagedRuleGroupStatement {
  /**
   * - Rules in the referenced rule group whose actions are set to `Count`.
   * - _Required_: No
   * - _Type_: Array of [ExcludedRule](./aws-properties-wafv2-webacl-excludedrule.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-managedrulegroupstatement-excludedrules */
  ExcludedRules?: ExcludedRule[]
  /**
   * - Additional information that's used by a managed rule group. Many managed rule groups don't require this.
   * - The rule groups used for intelligent threat mitigation require additional configuration:
   * - _Required_: No
   * - _Type_: Array of [ManagedRuleGroupConfig](./aws-properties-wafv2-webacl-managedrulegroupconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-managedrulegroupstatement-managedrulegroupconfigs */
  ManagedRuleGroupConfigs?: ManagedRuleGroupConfig[]
  /**
   * - The name of the managed rule group. You use this, along with the vendor name, to identify the rule group.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9A-Za-z_-]{1,128}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-managedrulegroupstatement-name */
  Name: string | Intrinsic
  /**
   * - Action settings to use in the place of the rule actions that are configured inside the rule group. You specify one override for each rule whose action you want to change.
   * - You can use overrides for testing, for example you can override all of rule actions to `Count` and then monitor the resulting count metrics to understand how the rule group would handle your web traffic. You can also permanently override some or all actions, to modify how the rule group manages your web traffic.
   * - _Required_: No
   * - _Type_: Array of [RuleActionOverride](./aws-properties-wafv2-webacl-ruleactionoverride.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-managedrulegroupstatement-ruleactionoverrides */
  RuleActionOverrides?: RuleActionOverride[]
  /**
   * - An optional nested statement that narrows the scope of the web requests that are evaluated by the managed rule group. Requests are only evaluated by the rule group if they match the scope-down statement. You can use any nestable [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html#cfn-wafv2-webacl-notstatement-statement) in the scope-down statement, and you can nest statements at any level, the same as you can for a rule statement.
   * - _Required_: No
   * - _Type_: [Statement](./aws-properties-wafv2-webacl-statement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-managedrulegroupstatement-scopedownstatement */
  ScopeDownStatement?: Statement
  /**
   * - The name of the managed rule group vendor. You use this, along with the rule group name, to identify a rule group.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-managedrulegroupstatement-vendorname */
  VendorName: string | Intrinsic
  /**
   * - The version of the managed rule group to use. If you specify this, the version setting is fixed until you change it. If you don't specify this, AWS WAF uses the vendor's default version, and then keeps the version at the vendor's default when the vendor updates the managed rule group settings.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[\w#:\.\-/]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-managedrulegroupstatement-version */
  Version?: string | Intrinsic
}

/**
 * The processing guidance for a rule, used by AWS WAF to determine whether a web request matches the rule.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface Statement {
  /**
   * - A logical rule statement used to combine other rule statements with AND logic. You provide more than one [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html#cfn-wafv2-webacl-notstatement-statement) within the `AndStatement`.
   * - _Required_: No
   * - _Type_: [AndStatement](./aws-properties-wafv2-webacl-andstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-statement-andstatement */
  AndStatement?: AndStatement
  /**
   * - A rule statement that defines a string match search for AWS WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want AWS WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the AWS WAF console and the developer guide, this is called a string match statement.
   * - _Required_: No
   * - _Type_: [ByteMatchStatement](./aws-properties-wafv2-webacl-bytematchstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-statement-bytematchstatement */
  ByteMatchStatement?: ByteMatchStatement
  /**
   * - A rule statement that labels web requests by country and region and that matches against web requests based on country code. A geo match rule labels every request that it inspects regardless of whether it finds a match.
   * - AWS WAF labels requests using the alpha-2 country and region codes from the International Organization for Standardization (ISO) 3166 standard. AWS WAF determines the codes using either the IP address in the web request origin or, if you specify it, the address in the geo match `ForwardedIPConfig`.
   * - If you use the web request origin, the label formats are `awswaf:clientip:geo:region:<ISO country code>-<ISO region code>` and `awswaf:clientip:geo:country:<ISO country code>`.
   * - If you use a forwarded IP address, the label formats are `awswaf:forwardedip:geo:region:<ISO country code>-<ISO region code>` and `awswaf:forwardedip:geo:country:<ISO country code>`.
   * - For additional details, see [Geographic match rule statement](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html) in the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
   * - _Required_: No
   * - _Type_: [GeoMatchStatement](./aws-properties-wafv2-webacl-geomatchstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-statement-geomatchstatement */
  GeoMatchStatement?: GeoMatchStatement
  /**
   * - A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an [AWS::WAFv2::IPSet](./aws-resource-wafv2-ipset.html) that specifies the addresses you want to detect, then use the ARN of that set in this statement.
   * - Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
   * - _Required_: No
   * - _Type_: [IPSetReferenceStatement](./aws-properties-wafv2-webacl-ipsetreferencestatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-statement-ipsetreferencestatement */
  IPSetReferenceStatement?: IPSetReferenceStatement
  /**
   * - A rule statement to match against labels that have been added to the web request by rules that have already run in the web ACL.
   * - The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. If you do not provide the fully qualified name in your label match string, AWS WAF performs the search for labels that were added in the same context as the label match statement.
   * - _Required_: No
   * - _Type_: [LabelMatchStatement](./aws-properties-wafv2-webacl-labelmatchstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-statement-labelmatchstatement */
  LabelMatchStatement?: LabelMatchStatement
  /**
   * - A rule statement used to run the rules that are defined in a managed rule group. To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names through the API call `ListAvailableManagedRuleGroups`.
   * - You cannot nest a `ManagedRuleGroupStatement`, for example for use inside a `NotStatement` or `OrStatement`. It can only be referenced as a top-level statement within a rule.
   * - _Required_: No
   * - _Type_: [ManagedRuleGroupStatement](./aws-properties-wafv2-webacl-managedrulegroupstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-statement-managedrulegroupstatement */
  ManagedRuleGroupStatement?: ManagedRuleGroupStatement
  /**
   * - A logical rule statement used to negate the results of another rule statement. You provide one [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html#cfn-wafv2-webacl-notstatement-statement) within the `NotStatement`.
   * - _Required_: No
   * - _Type_: [NotStatement](./aws-properties-wafv2-webacl-notstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-statement-notstatement */
  NotStatement?: NotStatement
  /**
   * - A logical rule statement used to combine other rule statements with OR logic. You provide more than one `Statement` within the `OrStatement`.
   * - _Required_: No
   * - _Type_: [OrStatement](./aws-properties-wafv2-webacl-orstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-statement-orstatement */
  OrStatement?: OrStatement
  /**
   * - A rate-based rule counts incoming requests and rate limits requests when they are coming at too fast a rate. The rule categorizes requests according to your aggregation criteria, collects them into aggregation instances, and counts and rate limits the requests for each instance.
   * - You can specify individual aggregation keys, like IP address or HTTP method. You can also specify aggregation key combinations, like IP address and HTTP method, or HTTP method, query argument, and cookie.
   * - Each unique set of values for the aggregation keys that you specify is a separate aggregation instance, with the value from each key contributing to the aggregation instance definition.
   * - For example, assume the rule evaluates web requests with the following IP address and HTTP method values:
   * - The rule would create different aggregation instances according to your aggregation criteria, for example:
   * - For any n-tuple of aggregation keys, each unique combination of values for the keys defines a separate aggregation instance, which AWS WAF counts and rate-limits individually.
   * - You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts and rate limits requests that match the nested statement. You can use this nested scope-down statement in conjunction with your aggregation key specifications or you can just count and rate limit all requests that match the scope-down statement, without additional aggregation. When you choose to just manage all requests that match a scope-down statement, the aggregation instance is singular for the rule.
   * - You cannot nest a `RateBasedStatement` inside another statement, for example inside a `NotStatement` or `OrStatement`. You can define a `RateBasedStatement` inside a web ACL and inside a rule group.
   * - For additional information about the options, see [Rate limiting web requests using rate-based rules](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rate-based-rules.html) in the _AWS WAF Developer Guide_.
   * - If you only aggregate on the individual IP address or forwarded IP address, you can retrieve the list of IP addresses that AWS WAF is currently rate limiting for a rule through the API call `GetRateBasedStatementManagedKeys`. This option is not available for other aggregation configurations.
   * - AWS WAF tracks and manages web requests separately for each instance of a rate-based rule that you use. For example, if you provide the same rate-based rule settings in two web ACLs, each of the two rule statements represents a separate instance of the rate-based rule and gets its own tracking and management by AWS WAF. If you define a rate-based rule inside a rule group, and then use that rule group in multiple places, each use creates a separate instance of the rate-based rule that gets its own tracking and management by AWS WAF.
   * - _Required_: No
   * - _Type_: [RateBasedStatement](./aws-properties-wafv2-webacl-ratebasedstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-statement-ratebasedstatement */
  RateBasedStatement?: RateBasedStatement
  /**
   * - A rule statement used to search web request components for a match against a single regular expression.
   * - _Required_: No
   * - _Type_: [RegexMatchStatement](./aws-properties-wafv2-webacl-regexmatchstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-statement-regexmatchstatement */
  RegexMatchStatement?: RegexMatchStatement
  /**
   * - A rule statement used to search web request components for matches with regular expressions. To use this, create a [AWS::WAFv2::RegexPatternSet](./aws-resource-wafv2-regexpatternset.html) that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set.
   * - Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
   * - _Required_: No
   * - _Type_: [RegexPatternSetReferenceStatement](./aws-properties-wafv2-webacl-regexpatternsetreferencestatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-statement-regexpatternsetreferencestatement */
  RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement
  /**
   * - A rule statement used to run the rules that are defined in a [AWS::WAFv2::RuleGroup](./aws-resource-wafv2-rulegroup.html). To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.
   * - You cannot nest a `RuleGroupReferenceStatement`, for example for use inside a `NotStatement` or `OrStatement`. You cannot use a rule group reference statement inside another rule group. You can only reference a rule group as a top-level statement within a rule that you define in a web ACL.
   * - _Required_: No
   * - _Type_: [RuleGroupReferenceStatement](./aws-properties-wafv2-webacl-rulegroupreferencestatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-statement-rulegroupreferencestatement */
  RuleGroupReferenceStatement?: RuleGroupReferenceStatement
  /**
   * - A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes.
   * - If you configure AWS WAF to inspect the request body, AWS WAF inspects only the number of bytes in the body up to the limit for the web ACL and protected resource type. If you know that the request body for your web requests should never exceed the inspection limit, you can use a size constraint statement to block requests that have a larger request body size. For more information about the inspection limits, see `Body` and `JsonBody` settings for the `FieldToMatch` data type.
   * - If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI `/logo.jpg` is nine characters long.
   * - _Required_: No
   * - _Type_: [SizeConstraintStatement](./aws-properties-wafv2-webacl-sizeconstraintstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-statement-sizeconstraintstatement */
  SizeConstraintStatement?: SizeConstraintStatement
  /**
   * - A rule statement that inspects for malicious SQL code. Attackers insert malicious SQL code into web requests to do things like modify your database or extract data from it.
   * - _Required_: No
   * - _Type_: [SqliMatchStatement](./aws-properties-wafv2-webacl-sqlimatchstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-statement-sqlimatchstatement */
  SqliMatchStatement?: SqliMatchStatement
  /**
   * - A rule statement that inspects for cross-site scripting (XSS) attacks. In XSS attacks, the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers.
   * - _Required_: No
   * - _Type_: [XssMatchStatement](./aws-properties-wafv2-webacl-xssmatchstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-statement-xssmatchstatement */
  XssMatchStatement?: XssMatchStatement
}

/**
 * A single rule, which you can use in a [AWS::WAFv2::WebACL](./aws-resource-wafv2-webacl.html) or [AWS::WAFv2::RuleGroup](./aws-resource-wafv2-rulegroup.html) to identify web requests that you want to manage in some way. Each rule includes one top-level [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-statement) that AWS WAF uses to identify matching web requests, and parameters that govern how AWS WAF handles them.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface Rule {
  /**
   * - The action that AWS WAF should take on a web request when it matches the rule's statement. Settings at the web ACL level can override the rule action setting.
   * - This is used only for rules whose statements don't reference a rule group. Rule statements that reference a rule group are `RuleGroupReferenceStatement` and `ManagedRuleGroupStatement`.
   * - You must set either this `Action` setting or the rule's `OverrideAction`, but not both:
   * - _Required_: Conditional
   * - _Type_: [RuleAction](./aws-properties-wafv2-webacl-ruleaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-rule-action */
  Action?: RuleAction
  /**
   * - Specifies how AWS WAF should handle `CAPTCHA` evaluations. If you don't specify this, AWS WAF uses the `CAPTCHA` configuration that's defined for the web ACL.
   * - _Required_: No
   * - _Type_: [CaptchaConfig](./aws-properties-wafv2-webacl-captchaconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-rule-captchaconfig */
  CaptchaConfig?: CaptchaConfig
  /**
   * - Specifies how AWS WAF should handle `Challenge` evaluations. If you don't specify this, AWS WAF uses the challenge configuration that's defined for the web ACL.
   * - _Required_: No
   * - _Type_: [ChallengeConfig](./aws-properties-wafv2-webacl-challengeconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-rule-challengeconfig */
  ChallengeConfig?: ChallengeConfig
  /**
   * - The name of the rule.
   * - If you change the name of a `Rule` after you create it and you want the rule's metric name to reflect the change, update the metric name in the rule's `VisibilityConfig` settings. AWS WAF doesn't automatically update the metric name when you update the rule name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9A-Za-z_-]{1,128}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-rule-name */
  Name: string | Intrinsic
  /**
   * - The override action to apply to the rules in a rule group, instead of the individual rule action settings. This is used only for rules whose statements reference a rule group. Rule statements that reference a rule group are `RuleGroupReferenceStatement` and `ManagedRuleGroupStatement`.
   * - Set the override action to none to leave the rule group rule actions in effect. Set it to count to only count matches, regardless of the rule action settings.
   * - You must set either this `OverrideAction` setting or the `Action` setting, but not both:
   * - _Required_: Conditional
   * - _Type_: [OverrideAction](./aws-properties-wafv2-webacl-overrideaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-rule-overrideaction */
  OverrideAction?: OverrideAction
  /**
   * - If you define more than one `Rule` in a `WebACL`, AWS WAF evaluates each request against the `Rules` in order based on the value of `Priority`. AWS WAF processes rules with lower priority first. The priorities don't need to be consecutive, but they must all be different.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-rule-priority */
  Priority: number | Intrinsic
  /**
   * - Labels to apply to web requests that match the rule match statement. AWS WAF applies fully qualified labels to matching web requests. A fully qualified label is the concatenation of a label namespace and a rule label. The rule's rule group or web ACL defines the label namespace.
   * - Rules that run after this rule in the web ACL can match against these labels using a `LabelMatchStatement`.
   * - For each label, provide a case-sensitive string containing optional namespaces and a label name, according to the following guidelines:
   * - For example, `myLabelName` or `nameSpace1:nameSpace2:myLabelName`.
   * - _Required_: No
   * - _Type_: Array of [Label](./aws-properties-wafv2-webacl-label.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-rule-rulelabels */
  RuleLabels?: Label[]
  /**
   * - The AWS WAF processing statement for the rule, for example [ByteMatchStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-bytematchstatement) or [SizeConstraintStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-sizeconstraintstatement).
   * - _Required_: Yes
   * - _Type_: [Statement](./aws-properties-wafv2-webacl-statement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-rule-statement */
  Statement: Statement
  /**
   * - Defines and enables Amazon CloudWatch metrics and web request sample collection.
   * - If you change the name of a `Rule` after you create it and you want the rule's metric name to reflect the change, update the metric name as well. AWS WAF doesn't automatically update the metric name.
   * - _Required_: Yes
   * - _Type_: [VisibilityConfig](./aws-properties-wafv2-webacl-visibilityconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-rule-visibilityconfig */
  VisibilityConfig: VisibilityConfig
}

/**
 * ###### Note
 *
 * This is the latest version of **AWS WAF** , named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the [AWS WAF developer guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
 * Use an AWS::WAFv2::WebACL to define a collection of rules to use to inspect and control web requests. Each rule in a web ACL has a statement that defines what to look for in web requests and an action that AWS WAF applies to requests that match the statement. In the web ACL, you assign a default action to take (allow, block) for any request that doesn't match any of the rules.
 * The rules in a web ACL can be a combination of explicitly defined rules and rule groups that you reference from the web ACL. The rule groups can be rule groups that you manage or rule groups that are managed by others.
 * You can associate a web ACL with one or more AWS resources to protect. The resources can be an Amazon CloudFront distribution, an Amazon API Gateway REST API, an Application Load Balancer, an AWS AppSync GraphQL API , an Amazon Cognito user pool, an AWS App Runner service, or an AWS Verified Access instance.
 * For more information, see [Web access control lists (web ACLs)](https://docs.aws.amazon.com/waf/latest/developerguide/web-acl.html) in the _AWS WAF developer guide_.
 * **Web ACLs used in AWS Shield Advanced automatic application layer DDoS mitigation**
 * If you use Shield Advanced automatic application layer DDoS mitigation, the web ACLs that you use with automatic mitigation have a rule group rule whose name starts with `ShieldMitigationRuleGroup`. This rule is used for automatic mitigations and it's managed for you in the web ACL by Shield Advanced and AWS WAF. You'll see the rule listed among the web ACL rules when you view the web ACL through the AWS WAF interfaces.
 * When you manage the web ACL through AWS CloudFormation interfaces, you won't see the Shield Advanced rule. AWS CloudFormation doesn't include this type of rule in the stack drift status between the actual configuration of the web ACL and your web ACL template.
 * Don't add the Shield Advanced rule group rule to your web ACL template. The rule shouldn't be in your template. When you update the web ACL template in a stack, the Shield Advanced rule is maintained for you by AWS WAF in the resulting web ACL.
 * For more information, see [Shield Advanced automatic application layer DDoS mitigation](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-automatic-app-layer-response.html) in the _AWS Shield Advanced developer guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html */

export interface WAFv2WebACL extends ResourceAttributes {
  Type: 'AWS::WAFv2::WebACL'
  Properties: {
    /**
     * - Specifies custom configurations for the associations between the web ACL and protected resources.
     * - Use this to customize the maximum size of the request body that your protected resources forward to AWS WAF for inspection. You can customize this setting for CloudFront, API Gateway, Amazon Cognito, App Runner, or Verified Access resources. The default setting is 16 KB (16,384 bytes).
     * - For Application Load Balancer and AWS AppSync, the limit is fixed at 8 KB (8,192 bytes).
     * - _Required_: No
     * - _Type_: [AssociationConfig](./aws-properties-wafv2-webacl-associationconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-associationconfig */
    AssociationConfig?: AssociationConfig
    /**
     * - Specifies how AWS WAF should handle `CAPTCHA` evaluations for rules that don't have their own `CaptchaConfig` settings. If you don't specify this, AWS WAF uses its default settings for `CaptchaConfig`.
     * - _Required_: No
     * - _Type_: [CaptchaConfig](./aws-properties-wafv2-webacl-captchaconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-captchaconfig */
    CaptchaConfig?: CaptchaConfig
    /**
     * - Specifies how AWS WAF should handle challenge evaluations for rules that don't have their own `ChallengeConfig` settings. If you don't specify this, AWS WAF uses its default settings for `ChallengeConfig`.
     * - _Required_: No
     * - _Type_: [ChallengeConfig](./aws-properties-wafv2-webacl-challengeconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-challengeconfig */
    ChallengeConfig?: ChallengeConfig
    /**
     * - A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL.
     * - For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _AWS WAF Developer Guide_.
     * - For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the _AWS WAF Developer Guide_.
     * - _Required_: No
     * - _Type_: Object of [CustomResponseBody](./aws-properties-wafv2-webacl-customresponsebody.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-customresponsebodies */
    CustomResponseBodies?: Record<string, CustomResponseBody>
    /**
     * - The action to perform if none of the `Rules` contained in the `WebACL` match.
     * - _Required_: Yes
     * - _Type_: [DefaultAction](./aws-properties-wafv2-webacl-defaultaction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-defaultaction */
    DefaultAction: DefaultAction
    /**
     * - A description of the web ACL that helps with identification.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9=:#@/\-,.][a-zA-Z0-9+=:#@/\-,.\s]+[a-zA-Z0-9+=:#@/\-,.]{1,256}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-description */
    Description?: string | Intrinsic
    /**
     * - The name of the web ACL. You cannot change the name of a web ACL after you create it.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[0-9A-Za-z_-]{1,128}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-name */
    Name?: string | Intrinsic
    /**
     * - The rule statements used to identify the web requests that you want to manage. Each rule includes one top-level statement that AWS WAF uses to identify matching web requests, and parameters that govern how AWS WAF handles them.
     * - _Required_: No
     * - _Type_: Array of [Rule](./aws-properties-wafv2-webacl-rule.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-rules */
    Rules?: Rule[]
    /**
     * - Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AWS AppSync GraphQL API, an Amazon Cognito user pool, an AWS App Runner service, or an AWS Verified Access instance. Valid Values are `CLOUDFRONT` and `REGIONAL`.
     * - For information about how to define the association of the web ACL with your resource, see [AWS::WAFv2::WebACLAssociation](./aws-resource-wafv2-webaclassociation.html).
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `CLOUDFRONT | REGIONAL`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-scope */
    Scope: string | Intrinsic
    /**
     * - Key:value pairs associated with an AWS resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-wafv2-webacl-tag.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-tags */
    Tags?: Tag[]
    /**
     * - Specifies the domains that AWS WAF should accept in a web request token. This enables the use of tokens across multiple protected websites. When AWS WAF provides a token, it uses the domain of the AWS resource that the web ACL is protecting. If you don't specify a list of token domains, AWS WAF accepts tokens only for the domain of the protected resource. With a token domain list, AWS WAF accepts the resource's host domain plus all domains in the token domain list, including their prefixed subdomains.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `253`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-tokendomains */
    TokenDomains?: (string | Intrinsic)[]
    /**
     * - Defines and enables Amazon CloudWatch metrics and web request sample collection.
     * - _Required_: Yes
     * - _Type_: [VisibilityConfig](./aws-properties-wafv2-webacl-visibilityconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-visibilityconfig */
    VisibilityConfig: VisibilityConfig
  }
}
