import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * List of labels used by one or more of the rules of a [AWS::WAFv2::RuleGroup](./aws-resource-wafv2-rulegroup.html). This summary object is used for the following rule group lists:
 * *   `AvailableLabels` - Labels that rules add to matching requests. These labels are defined in the `RuleLabels` for a rule.
 *
 * *   `ConsumedLabels` - Labels that rules match against. These labels are defined in a `LabelMatchStatement` specification, in the [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html#cfn-wafv2-webacl-notstatement-statement) definition of a rule.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface LabelSummary {
  /**
   * - An individual label specification.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[0-9A-Za-z_:-]{1,1024}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-labelsummary-name */
  Name?: string | Intrinsic
}

/**
 * The response body to use in a custom response to a web request. This is referenced by key from [CustomResponse](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-blockaction.html#cfn-wafv2-webacl-blockaction-customresponse) `CustomResponseBodyKey`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-customresponsebody-content */
  Content: string | Intrinsic
  /**
   * - The type of content in the payload that you are defining in the `Content` string.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `TEXT_PLAIN | TEXT_HTML | APPLICATION_JSON`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-customresponsebody-contenttype */
  ContentType: string | Intrinsic
}

/**
 * A tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.
 * You can tag the AWS resources that you manage through AWS WAF: web ACLs, rule groups, IP sets, and regex pattern sets. You can't manage or view tags through the AWS WAF console.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface Tag {
  /**
   * - Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-tag-key */
  Key?: string | Intrinsic
  /**
   * - Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-tag-value */
  Value?: string | Intrinsic
}

/**
 * Defines and enables Amazon CloudWatch metrics and web request sample collection.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface VisibilityConfig {
  /**
   * - Indicates whether the associated resource sends metrics to Amazon CloudWatch. For the list of available metrics, see [AWS WAF Metrics](https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#waf-metrics) in the _AWS WAF Developer Guide_.
   * - For web ACLs, the metrics are for web requests that have the web ACL default action applied. AWS WAF applies the default action to web requests that pass the inspection of all rules in the web ACL without being either allowed or blocked. For more information, see [The web ACL default action](https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-default-action.html) in the _AWS WAF Developer Guide_.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-visibilityconfig-cloudwatchmetricsenabled */
  CloudWatchMetricsEnabled: boolean | Intrinsic
  /**
   * - A name of the Amazon CloudWatch metric dimension. The name can contain only the characters: A-Z, a-z, 0-9, - (hyphen), and \_ (underscore). The name can be from one to 128 characters long. It can't contain whitespace or metric names that are reserved for AWS WAF, for example `All` and `Default_Action`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-visibilityconfig-metricname */
  MetricName: string | Intrinsic
  /**
   * - Indicates whether AWS WAF should store a sampling of the web requests that match the rules. You can view the sampled requests through the AWS WAF console.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-visibilityconfig-sampledrequestsenabled */
  SampledRequestsEnabled: boolean | Intrinsic
}

/**
 * Specifies how AWS WAF should handle `Challenge` evaluations. This is available at the web ACL level and in each rule.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface ChallengeConfig {
  /**
   * - Determines how long a challenge timestamp in the token remains valid after the client successfully responds to a challenge.
   * - _Required_: No
   * - _Type_: [ImmunityTimeProperty](./aws-properties-wafv2-rulegroup-immunitytimeproperty.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-challengeconfig-immunitytimeproperty */
  ImmunityTimeProperty?: ImmunityTimeProperty
}

/**
 * A single label container. This is used as an element of a label array in `RuleLabels` inside a rule.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface Label {
  /**
   * - The label string.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9A-Za-z_:-]{1,1024}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-label-name */
  Name: string | Intrinsic
}

/**
 * Specifies that AWS WAF should run a `CAPTCHA` check against the request:
 * *   If the request includes a valid, unexpired `CAPTCHA` token, AWS WAF applies any custom request handling and labels that you've configured and then allows the web request inspection to proceed to the next rule, similar to a `CountAction`.
 *
 * *   If the request doesn't include a valid, unexpired token, AWS WAF discontinues the web ACL evaluation of the request and blocks it from going to its intended destination.
 *
 *     AWS WAF generates a response that it sends back to the client, which includes the following:
 *
 *     *   The header `x-amzn-waf-action` with a value of `captcha`.
 *
 *     *   The HTTP status code `405 Method Not Allowed`.
 *
 *     *   If the request contains an `Accept` header with a value of `text/html`, the response includes a `CAPTCHA` JavaScript page interstitial.
 * You can configure the expiration time in the `CaptchaConfig` `ImmunityTimeProperty` setting at the rule and web ACL level. The rule setting overrides the web ACL setting.
 * This action option is available for rules. It isn't available for web ACL default actions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface CaptchaAction {
  /**
   * - Defines custom handling for the web request, used when the `CAPTCHA` inspection determines that the request's token is valid and unexpired.
   * - For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _AWS WAF Developer Guide_.
   * - _Required_: No
   * - _Type_: [CustomRequestHandling](./aws-properties-wafv2-rulegroup-customrequesthandling.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-captchaaction-customrequesthandling */
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
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface ChallengeAction {
  /**
   * - Defines custom handling for the web request, used when the challenge inspection determines that the request's token is valid and unexpired.
   * - For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _AWS WAF Developer Guide_.
   * - _Required_: No
   * - _Type_: [CustomRequestHandling](./aws-properties-wafv2-rulegroup-customrequesthandling.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-challengeaction-customrequesthandling */
  CustomRequestHandling?: CustomRequestHandling
}

/**
 * Specifies that AWS WAF should count the request. Optionally defines additional custom handling for the request.
 * This is used in the context of other settings, for example to specify values for `RuleAction` and web ACL `DefaultAction`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface CountAction {
  /**
   * - Defines custom handling for the web request.
   * - For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _AWS WAF Developer Guide_.
   * - _Required_: No
   * - _Type_: [CustomRequestHandling](./aws-properties-wafv2-rulegroup-customrequesthandling.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-countaction-customrequesthandling */
  CustomRequestHandling?: CustomRequestHandling
}

/**
 * Used for CAPTCHA and challenge token settings. Determines how long a `CAPTCHA` or challenge timestamp remains valid after AWS WAF updates it for a successful `CAPTCHA` or challenge response.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-immunitytimeproperty-immunitytime */
  ImmunityTime: number | Intrinsic
}

/**
 * A logical rule statement used to combine other rule statements with AND logic. You provide more than one `Statement` within the `AndStatement`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface AndStatement {
  /**
   * - The statements to combine with AND logic. You can use any statements that can be nested.
   * - _Required_: Yes
   * - _Type_: Array of [Statement](./aws-properties-wafv2-rulegroup-statement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-andstatement-statements */
  Statements: Statement[]
}

/**
 * A rule statement to match against labels that have been added to the web request by rules that have already run in the web ACL.
 * The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. If you do not provide the fully qualified name in your label match string, AWS WAF performs the search for labels that were added in the same context as the label match statement.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface LabelMatchStatement {
  /**
   * - The string to match against. The setting you provide for this depends on the match statement's `Scope` setting:
   * - Labels are case sensitive and components of a label must be separated by colon, for example `NS1:NS2:name`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9A-Za-z_:-]{1,1024}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-labelmatchstatement-key */
  Key: string | Intrinsic
  /**
   * - Specify whether you want to match using the label name or just the namespace.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `LABEL | NAMESPACE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-labelmatchstatement-scope */
  Scope: string | Intrinsic
}

/**
 * A logical rule statement used to negate the results of another rule statement. You provide one `Statement` within the `NotStatement`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface NotStatement {
  /**
   * - The statement to negate. You can use any statement that can be nested.
   * - _Required_: Yes
   * - _Type_: [Statement](./aws-properties-wafv2-rulegroup-statement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-notstatement-statement */
  Statement: Statement
}

/**
 * A logical rule statement used to combine other rule statements with OR logic. You provide more than one `Statement` within the `OrStatement`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface OrStatement {
  /**
   * - The statements to combine with OR logic. You can use any statements that can be nested.
   * - _Required_: Yes
   * - _Type_: Array of [Statement](./aws-properties-wafv2-rulegroup-statement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-orstatement-statements */
  Statements: Statement[]
}

/**
 * A rule statement used to search web request components for a match against a single regular expression.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface RegexMatchStatement {
  /**
   * - The part of the web request that you want AWS WAF to inspect.
   * - _Required_: Yes
   * - _Type_: [FieldToMatch](./aws-properties-wafv2-rulegroup-fieldtomatch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-regexmatchstatement-fieldtomatch */
  FieldToMatch: FieldToMatch
  /**
   * - The string representing the regular expression.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-regexmatchstatement-regexstring */
  RegexString: string | Intrinsic
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-rulegroup-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-regexmatchstatement-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * A rule statement used to search web request components for matches with regular expressions. To use this, create a [AWS::WAFv2::RegexPatternSet](./aws-resource-wafv2-regexpatternset.html) that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set.
 * Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface RegexPatternSetReferenceStatement {
  /**
   * - The Amazon Resource Name (ARN) of the [AWS::WAFv2::RegexPatternSet](./aws-resource-wafv2-regexpatternset.html) that this statement references.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-regexpatternsetreferencestatement-arn */
  Arn: string | Intrinsic
  /**
   * - The part of the web request that you want AWS WAF to inspect.
   * - _Required_: Yes
   * - _Type_: [FieldToMatch](./aws-properties-wafv2-rulegroup-fieldtomatch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-regexpatternsetreferencestatement-fieldtomatch */
  FieldToMatch: FieldToMatch
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-rulegroup-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-regexpatternsetreferencestatement-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes.
 * If you configure AWS WAF to inspect the request body, AWS WAF inspects only the number of bytes in the body up to the limit for the web ACL and protected resource type. If you know that the request body for your web requests should never exceed the inspection limit, you can use a size constraint statement to block requests that have a larger request body size. For more information about the inspection limits, see `Body` and `JsonBody` settings for the `FieldToMatch` data type.
 * If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI `/logo.jpg` is nine characters long.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface SizeConstraintStatement {
  /**
   * - The operator to use to compare the request part to the size setting.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `EQ | NE | LE | LT | GE | GT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-sizeconstraintstatement-comparisonoperator */
  ComparisonOperator: string | Intrinsic
  /**
   * - The part of the web request that you want AWS WAF to inspect.
   * - _Required_: Yes
   * - _Type_: [FieldToMatch](./aws-properties-wafv2-rulegroup-fieldtomatch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-sizeconstraintstatement-fieldtomatch */
  FieldToMatch: FieldToMatch
  /**
   * - The size, in byte, to compare to the request part, after any transformations.
   * - _Required_: Yes
   * - _Type_: Number
   * - _Minimum_: `0`
   * - _Maximum_: `21474836480`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-sizeconstraintstatement-size */
  Size: number | Intrinsic
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-rulegroup-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-sizeconstraintstatement-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * A rule statement that inspects for malicious SQL code. Attackers insert malicious SQL code into web requests to do things like modify your database or extract data from it.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface SqliMatchStatement {
  /**
   * - The part of the web request that you want AWS WAF to inspect.
   * - _Required_: Yes
   * - _Type_: [FieldToMatch](./aws-properties-wafv2-rulegroup-fieldtomatch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-sqlimatchstatement-fieldtomatch */
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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-sqlimatchstatement-sensitivitylevel */
  SensitivityLevel?: string | Intrinsic
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-rulegroup-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-sqlimatchstatement-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * A rule statement that inspects for cross-site scripting (XSS) attacks. In XSS attacks, the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface XssMatchStatement {
  /**
   * - The part of the web request that you want AWS WAF to inspect.
   * - _Required_: Yes
   * - _Type_: [FieldToMatch](./aws-properties-wafv2-rulegroup-fieldtomatch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-xssmatchstatement-fieldtomatch */
  FieldToMatch: FieldToMatch
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-rulegroup-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-xssmatchstatement-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * A custom response to send to the client. You can define a custom response for rule actions and default web ACL actions that are set to `Block`.
 * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the [AWS WAF developer guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface CustomResponse {
  /**
   * - References the response body that you want AWS WAF to return to the web request client. You can define a custom response for a rule action or a default web ACL action that is set to block. To do this, you first define the response body key and value in the `CustomResponseBodies` setting for the [AWS::WAFv2::WebACL](./aws-resource-wafv2-webacl.html) or [AWS::WAFv2::RuleGroup](./aws-resource-wafv2-rulegroup.html) where you want to use it. Then, in the rule action or web ACL default action `BlockAction` setting, you reference the response body using this key.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[\w\-]+$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-customresponse-customresponsebodykey */
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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-customresponse-responsecode */
  ResponseCode: number | Intrinsic
  /**
   * - The HTTP headers to use in the response. You can specify any header name except for `content-type`. Duplicate header names are not allowed.
   * - For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the _AWS WAF Developer Guide_.
   * - _Required_: No
   * - _Type_: Array of [CustomHTTPHeader](./aws-properties-wafv2-rulegroup-customhttpheader.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-customresponse-responseheaders */
  ResponseHeaders?: CustomHTTPHeader[]
}

/**
 * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface TextTransformation {
  /**
   * - Sets the relative processing order for multiple transformations. AWS WAF processes all transformations, from lowest priority to highest, before inspecting the transformed content. The priorities don't need to be consecutive, but they must all be different.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-texttransformation-priority */
  Priority: number | Intrinsic
  /**
   * - For detailed descriptions of each of the transformation types, see [Text transformations](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-transformation.html) in the _AWS WAF Developer Guide_.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `NONE | COMPRESS_WHITE_SPACE | HTML_ENTITY_DECODE | LOWERCASE | CMD_LINE | URL_DECODE | BASE64_DECODE | HEX_DECODE | MD5 | REPLACE_COMMENTS | ESCAPE_SEQ_DECODE | SQL_HEX_DECODE | CSS_DECODE | JS_DECODE | NORMALIZE_PATH | NORMALIZE_PATH_WIN | REMOVE_NULLS | REPLACE_NULLS | BASE64_DECODE_EXT | URL_DECODE_UNI | UTF8_TO_UNICODE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-texttransformation-type */
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
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface ForwardedIPConfiguration {
  /**
   * - The match status to assign to the web request if the request doesn't have a valid IP address in the specified position.
   * - You can specify the following fallback behaviors:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `MATCH | NO_MATCH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-forwardedipconfiguration-fallbackbehavior */
  FallbackBehavior: string | Intrinsic
  /**
   * - The name of the HTTP header to use for the IP address. For example, to use the X-Forwarded-For (XFF) header, set this to `X-Forwarded-For`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9-]+{1,255}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-forwardedipconfiguration-headername */
  HeaderName: string | Intrinsic
}

/**
 * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
 * ###### Note
 *
 * If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
 * This configuration is used only for [IPSetReferenceStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-ipsetreferencestatement). For [GeoMatchStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-geomatchstatement) and [RateBasedStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-ratebasedstatement), use [ForwardedIPConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatement.html#cfn-wafv2-rulegroup-ratebasedstatement-forwardedipconfig) instead.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface IPSetForwardedIPConfiguration {
  /**
   * - The match status to assign to the web request if the request doesn't have a valid IP address in the specified position.
   * - You can specify the following fallback behaviors:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `MATCH | NO_MATCH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ipsetforwardedipconfiguration-fallbackbehavior */
  FallbackBehavior: string | Intrinsic
  /**
   * - The name of the HTTP header to use for the IP address. For example, to use the X-Forwarded-For (XFF) header, set this to `X-Forwarded-For`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9-]+{1,255}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ipsetforwardedipconfiguration-headername */
  HeaderName: string | Intrinsic
  /**
   * - The position in the header to search for the IP address. The header can contain IP addresses of the original client and also of proxies. For example, the header value could be `10.1.1.1, 127.0.0.0, 10.10.10.10` where the first IP address identifies the original client and the rest identify proxies that the request went through.
   * - The options for this setting are the following:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `FIRST | LAST | ANY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ipsetforwardedipconfiguration-position */
  Position: string | Intrinsic
}

/**
 * A custom header for custom request and response handling. This is used in `CustomResponse` and `CustomRequestHandling`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-customhttpheader-name */
  Name: string | Intrinsic
  /**
   * - The value of the custom header.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-customhttpheader-value */
  Value: string | Intrinsic
}

/**
 * Inspect the body of the web request. The body immediately follows the request headers.
 * This is used to indicate the web request component to inspect, in the [FieldToMatch](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexpatternsetreferencestatement.html#cfn-wafv2-rulegroup-regexpatternsetreferencestatement-fieldtomatch) specification.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-body-oversizehandling */
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
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface JA3Fingerprint {
  /**
   * - The match status to assign to the web request if the request doesn't have a JA3 fingerprint.
   * - You can specify the following fallback behaviors:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `MATCH | NO_MATCH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ja3fingerprint-fallbackbehavior */
  FallbackBehavior: string | Intrinsic
}

/**
 * Inspect one of the headers in the web request, identified by name, for example, `User-Agent` or `Referer`. The name isn't case sensitive.
 * You can filter and inspect all headers with the `FieldToMatch` setting `Headers`.
 * This is used to indicate the web request component to inspect, in the [FieldToMatch](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexpatternsetreferencestatement.html#cfn-wafv2-rulegroup-regexpatternsetreferencestatement-fieldtomatch) specification.
 * Example JSON: `"SingleHeader": { "Name": "haystack" }`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-singleheader-name */
  Name: string | Intrinsic
}

/**
 * Inspect one query argument in the web request, identified by name, for example _UserName_ or _SalesRegion_. The name isn't case sensitive.
 * This is used to indicate the web request component to inspect, in the [FieldToMatch](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexpatternsetreferencestatement.html#cfn-wafv2-rulegroup-regexpatternsetreferencestatement-fieldtomatch) specification.
 * Example JSON: `"SingleQueryArgument": { "Name": "myArgument" }`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-singlequeryargument-name */
  Name: string | Intrinsic
}

/**
 * Specifies a cookie as an aggregate key for a rate-based rule. Each distinct value in the cookie contributes to the aggregation instance. If you use a single cookie as your custom key, then each value fully defines an aggregation instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratelimitcookie-name */
  Name: string | Intrinsic
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, AWS WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-rulegroup-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratelimitcookie-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * Specifies a header as an aggregate key for a rate-based rule. Each distinct value in the header contributes to the aggregation instance. If you use a single header as your custom key, then each value fully defines an aggregation instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratelimitheader-name */
  Name: string | Intrinsic
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, AWS WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-rulegroup-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratelimitheader-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * Specifies a label namespace to use as an aggregate key for a rate-based rule. Each distinct fully qualified label name that has the specified label namespace contributes to the aggregation instance. If you use just one label namespace as your custom key, then each label name fully defines an aggregation instance.
 * This uses only labels that have been added to the request by rules that are evaluated before this rate-based rule in the web ACL.
 * For information about label namespaces and names, see [Label syntax and naming requirements](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-label-requirements.html) in the _AWS WAF Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface RateLimitLabelNamespace {
  /**
   * - The namespace to use for aggregation.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9A-Za-z_:-]{1,1024}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratelimitlabelnamespace-namespace */
  Namespace: string | Intrinsic
}

/**
 * Specifies a query argument in the request as an aggregate key for a rate-based rule. Each distinct value for the named query argument contributes to the aggregation instance. If you use a single query argument as your custom key, then each value fully defines an aggregation instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratelimitqueryargument-name */
  Name: string | Intrinsic
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, AWS WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-rulegroup-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratelimitqueryargument-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * Specifies the request's query string as an aggregate key for a rate-based rule. Each distinct string contributes to the aggregation instance. If you use just the query string as your custom key, then each string fully defines an aggregation instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface RateLimitQueryString {
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, AWS WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-rulegroup-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratelimitquerystring-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * Specifies the request's URI path as an aggregate key for a rate-based rule. Each distinct URI path contributes to the aggregation instance. If you use just the URI path as your custom key, then each URI path fully defines an aggregation instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface RateLimitUriPath {
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, AWS WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-rulegroup-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratelimituripath-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * The filter to use to identify the subset of cookies to inspect in a web request.
 * You must specify exactly one setting: either `All`, `IncludedCookies`, or `ExcludedCookies`.
 * Example JSON: `"MatchPattern": { "IncludedCookies": [ "session-id-time", "session-id" ] }`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface CookieMatchPattern {
  /**
   * - Inspect all cookies.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-cookiematchpattern-all */
  All?: any | Intrinsic
  /**
   * - Inspect only the cookies whose keys don't match any of the strings specified here.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `60 | 199`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-cookiematchpattern-excludedcookies */
  ExcludedCookies?: (string | Intrinsic)[]
  /**
   * - Inspect only the cookies that have a key that matches one of the strings specified here.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `60 | 199`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-cookiematchpattern-includedcookies */
  IncludedCookies?: (string | Intrinsic)[]
}

/**
 * The filter to use to identify the subset of headers to inspect in a web request.
 * You must specify exactly one setting: either `All`, `IncludedHeaders`, or `ExcludedHeaders`.
 * Example JSON: `"MatchPattern": { "ExcludedHeaders": [ "KeyToExclude1", "KeyToExclude2" ] }`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface HeaderMatchPattern {
  /**
   * - Inspect all headers.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-headermatchpattern-all */
  All?: any | Intrinsic
  /**
   * - Inspect only the headers whose keys don't match any of the strings specified here.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `64 | 199`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-headermatchpattern-excludedheaders */
  ExcludedHeaders?: (string | Intrinsic)[]
  /**
   * - Inspect only the headers that have a key that matches one of the strings specified here.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `64 | 199`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-headermatchpattern-includedheaders */
  IncludedHeaders?: (string | Intrinsic)[]
}

/**
 * The patterns to look for in the JSON body. AWS WAF inspects the results of these pattern matches against the rule inspection criteria. This is used with the [FieldToMatch](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexpatternsetreferencestatement.html#cfn-wafv2-rulegroup-regexpatternsetreferencestatement-fieldtomatch) option `JsonBody`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface JsonMatchPattern {
  /**
   * - Match all of the elements. See also `MatchScope` in the `JsonBody` `FieldToMatch` specification.
   * - You must specify either this setting or the `IncludedPaths` setting, but not both.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-jsonmatchpattern-all */
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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-jsonmatchpattern-includedpaths */
  IncludedPaths?: (string | Intrinsic)[]
}

/**
 * Specifies how AWS WAF should handle `CAPTCHA` evaluations. This is available at the web ACL level and in each rule.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface CaptchaConfig {
  /**
   * - Determines how long a `CAPTCHA` timestamp in the token remains valid after the client successfully solves a `CAPTCHA` puzzle.
   * - _Required_: No
   * - _Type_: [ImmunityTimeProperty](./aws-properties-wafv2-rulegroup-immunitytimeproperty.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-captchaconfig-immunitytimeproperty */
  ImmunityTimeProperty?: ImmunityTimeProperty
}

/**
 * Specifies that AWS WAF should block the request and optionally defines additional custom handling for the response to the web request.
 * This is used in the context of other settings, for example to specify values for `RuleAction` and web ACL `DefaultAction`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface BlockAction {
  /**
   * - Defines a custom response for the web request.
   * - For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _AWS WAF Developer Guide_.
   * - _Required_: No
   * - _Type_: [CustomResponse](./aws-properties-wafv2-rulegroup-customresponse.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-blockaction-customresponse */
  CustomResponse?: CustomResponse
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
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-geomatchstatement-countrycodes */
  CountryCodes?: (string | Intrinsic)[]
  /**
   * - The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
   * - _Required_: No
   * - _Type_: [ForwardedIPConfiguration](./aws-properties-wafv2-rulegroup-forwardedipconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-geomatchstatement-forwardedipconfig */
  ForwardedIPConfig?: ForwardedIPConfiguration
}

/**
 * A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an [AWS::WAFv2::IPSet](./aws-resource-wafv2-ipset.html) that specifies the addresses you want to detect, then use the ARN of that set in this statement.
 * Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface IPSetReferenceStatement {
  /**
   * - The Amazon Resource Name (ARN) of the [AWS::WAFv2::IPSet](./aws-resource-wafv2-ipset.html) that this statement references.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ipsetreferencestatement-arn */
  Arn: string | Intrinsic
  /**
   * - The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
   * - _Required_: No
   * - _Type_: [IPSetForwardedIPConfiguration](./aws-properties-wafv2-rulegroup-ipsetforwardedipconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ipsetreferencestatement-ipsetforwardedipconfig */
  IPSetForwardedIPConfig?: IPSetForwardedIPConfiguration
}

/**
 * Custom request handling behavior that inserts custom headers into a web request. You can add custom request handling for AWS WAF to use when the rule action doesn't block the request. For example, `CaptchaAction` for requests with valid t okens, and `AllowAction`.
 * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _AWS WAF Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface CustomRequestHandling {
  /**
   * - The HTTP headers to insert into the request. Duplicate header names are not allowed.
   * - For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the _AWS WAF Developer Guide_.
   * - _Required_: Yes
   * - _Type_: Array of [CustomHTTPHeader](./aws-properties-wafv2-rulegroup-customhttpheader.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-customrequesthandling-insertheaders */
  InsertHeaders: CustomHTTPHeader[]
}

/**
 * Specifies a single custom aggregate key for a rate-base rule.
 * ###### Note
 *
 * Web requests that are missing any of the components specified in the aggregation keys are omitted from the rate-based rule evaluation and handling.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface RateBasedStatementCustomKey {
  /**
   * - Use the value of a cookie in the request as an aggregate key. Each distinct value in the cookie contributes to the aggregation instance. If you use a single cookie as your custom key, then each value fully defines an aggregation instance.
   * - _Required_: No
   * - _Type_: [RateLimitCookie](./aws-properties-wafv2-rulegroup-ratelimitcookie.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratebasedstatementcustomkey-cookie */
  Cookie?: RateLimitCookie
  /**
   * - Use the first IP address in an HTTP header as an aggregate key. Each distinct forwarded IP address contributes to the aggregation instance.
   * - When you specify an IP or forwarded IP in the custom key settings, you must also specify at least one other key to use. You can aggregate on only the forwarded IP address by specifying `FORWARDED_IP` in your rate-based statement's `AggregateKeyType`.
   * - With this option, you must specify the header to use in the rate-based rule's `ForwardedIPConfig` property.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratebasedstatementcustomkey-forwardedip */
  ForwardedIP?: any | Intrinsic
  /**
   * - Use the value of a header in the request as an aggregate key. Each distinct value in the header contributes to the aggregation instance. If you use a single header as your custom key, then each value fully defines an aggregation instance.
   * - _Required_: No
   * - _Type_: [RateLimitHeader](./aws-properties-wafv2-rulegroup-ratelimitheader.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratebasedstatementcustomkey-header */
  Header?: RateLimitHeader
  /**
   * - Use the request's HTTP method as an aggregate key. Each distinct HTTP method contributes to the aggregation instance. If you use just the HTTP method as your custom key, then each method fully defines an aggregation instance.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratebasedstatementcustomkey-httpmethod */
  HTTPMethod?: any | Intrinsic
  /**
   * - Use the request's originating IP address as an aggregate key. Each distinct IP address contributes to the aggregation instance.
   * - When you specify an IP or forwarded IP in the custom key settings, you must also specify at least one other key to use. You can aggregate on only the IP address by specifying `IP` in your rate-based statement's `AggregateKeyType`.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratebasedstatementcustomkey-ip */
  IP?: any | Intrinsic
  /**
   * - Use the specified label namespace as an aggregate key. Each distinct fully qualified label name that has the specified label namespace contributes to the aggregation instance. If you use just one label namespace as your custom key, then each label name fully defines an aggregation instance.
   * - This uses only labels that have been added to the request by rules that are evaluated before this rate-based rule in the web ACL.
   * - For information about label namespaces and names, see [Label syntax and naming requirements](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-label-requirements.html) in the _AWS WAF Developer Guide_.
   * - _Required_: No
   * - _Type_: [RateLimitLabelNamespace](./aws-properties-wafv2-rulegroup-ratelimitlabelnamespace.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratebasedstatementcustomkey-labelnamespace */
  LabelNamespace?: RateLimitLabelNamespace
  /**
   * - Use the specified query argument as an aggregate key. Each distinct value for the named query argument contributes to the aggregation instance. If you use a single query argument as your custom key, then each value fully defines an aggregation instance.
   * - _Required_: No
   * - _Type_: [RateLimitQueryArgument](./aws-properties-wafv2-rulegroup-ratelimitqueryargument.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratebasedstatementcustomkey-queryargument */
  QueryArgument?: RateLimitQueryArgument
  /**
   * - Use the request's query string as an aggregate key. Each distinct string contributes to the aggregation instance. If you use just the query string as your custom key, then each string fully defines an aggregation instance.
   * - _Required_: No
   * - _Type_: [RateLimitQueryString](./aws-properties-wafv2-rulegroup-ratelimitquerystring.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratebasedstatementcustomkey-querystring */
  QueryString?: RateLimitQueryString
  /**
   * - Use the request's URI path as an aggregate key. Each distinct URI path contributes to the aggregation instance. If you use just the URI path as your custom key, then each URI path fully defines an aggregation instance.
   * - _Required_: No
   * - _Type_: [RateLimitUriPath](./aws-properties-wafv2-rulegroup-ratelimituripath.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratebasedstatementcustomkey-uripath */
  UriPath?: RateLimitUriPath
}

/**
 * Inspect the cookies in the web request. You can specify the parts of the cookies to inspect and you can narrow the set of cookies to inspect by including or excluding specific keys.
 * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
 * Example JSON: `"Cookies": { "MatchPattern": { "All": {} }, "MatchScope": "KEY", "OversizeHandling": "MATCH" }`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface Cookies {
  /**
   * - The filter to use to identify the subset of cookies to inspect in a web request.
   * - You must specify exactly one setting: either `All`, `IncludedCookies`, or `ExcludedCookies`.
   * - Example JSON: `"MatchPattern": { "IncludedCookies": [ "session-id-time", "session-id" ] }`
   * - _Required_: Yes
   * - _Type_: [CookieMatchPattern](./aws-properties-wafv2-rulegroup-cookiematchpattern.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-cookies-matchpattern */
  MatchPattern: CookieMatchPattern
  /**
   * - The parts of the cookies to inspect with the rule inspection criteria. If you specify `ALL`, AWS WAF inspects both keys and values.
   * - `All` does not require a match to be found in the keys and a match to be found in the values. It requires a match to be found in the keys or the values or both. To require a match in the keys and in the values, use a logical `AND` statement to combine two match rules, one that inspects the keys and another that inspects the values.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ALL | KEY | VALUE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-cookies-matchscope */
  MatchScope: string | Intrinsic
  /**
   * - What AWS WAF should do if the cookies of the request are more numerous or larger than AWS WAF can inspect. AWS WAF does not support inspecting the entire contents of request cookies when they exceed 8 KB (8192 bytes) or 200 total cookies. The underlying host service forwards a maximum of 200 cookies and at most 8 KB of cookie contents to AWS WAF.
   * - The options for oversize handling are the following:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `CONTINUE | MATCH | NO_MATCH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-cookies-oversizehandling */
  OversizeHandling: string | Intrinsic
}

/**
 * Inspect all headers in the web request. You can specify the parts of the headers to inspect and you can narrow the set of headers to inspect by including or excluding specific keys.
 * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
 * If you want to inspect just the value of a single header, use the `SingleHeader` `FieldToMatch` setting instead.
 * Example JSON: `"Headers": { "MatchPattern": { "All": {} }, "MatchScope": "KEY", "OversizeHandling": "MATCH" }`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface Headers {
  /**
   * - The filter to use to identify the subset of headers to inspect in a web request.
   * - You must specify exactly one setting: either `All`, `IncludedHeaders`, or `ExcludedHeaders`.
   * - Example JSON: `"MatchPattern": { "ExcludedHeaders": [ "KeyToExclude1", "KeyToExclude2" ] }`
   * - _Required_: Yes
   * - _Type_: [HeaderMatchPattern](./aws-properties-wafv2-rulegroup-headermatchpattern.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-headers-matchpattern */
  MatchPattern: HeaderMatchPattern
  /**
   * - The parts of the headers to match with the rule inspection criteria. If you specify `ALL`, AWS WAF inspects both keys and values.
   * - `All` does not require a match to be found in the keys and a match to be found in the values. It requires a match to be found in the keys or the values or both. To require a match in the keys and in the values, use a logical `AND` statement to combine two match rules, one that inspects the keys and another that inspects the values.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ALL | KEY | VALUE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-headers-matchscope */
  MatchScope: string | Intrinsic
  /**
   * - What AWS WAF should do if the headers of the request are more numerous or larger than AWS WAF can inspect. AWS WAF does not support inspecting the entire contents of request headers when they exceed 8 KB (8192 bytes) or 200 total headers. The underlying host service forwards a maximum of 200 headers and at most 8 KB of header contents to AWS WAF.
   * - The options for oversize handling are the following:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `CONTINUE | MATCH | NO_MATCH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-headers-oversizehandling */
  OversizeHandling: string | Intrinsic
}

/**
 * Inspect the body of the web request as JSON. The body immediately follows the request headers.
 * This is used to indicate the web request component to inspect, in the [FieldToMatch](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexpatternsetreferencestatement.html#cfn-wafv2-rulegroup-regexpatternsetreferencestatement-fieldtomatch) specification.
 * Use the specifications in this object to indicate which parts of the JSON body to inspect using the rule's inspection criteria. AWS WAF inspects only the parts of the JSON that result from the matches that you indicate.
 * Example JSON: `"JsonBody": { "MatchPattern": { "All": {} }, "MatchScope": "ALL" }`
 * For additional information about this request component option, see [JSON body](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-fields-list.html#waf-rule-statement-request-component-json-body) in the _AWS WAF Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface JsonBody {
  /**
   * - What AWS WAF should do if it fails to completely parse the JSON body. The options are the following:
   * - If you don't provide this setting, AWS WAF parses and evaluates the content only up to the first parsing failure that it encounters.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `MATCH | NO_MATCH | EVALUATE_AS_STRING`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-jsonbody-invalidfallbackbehavior */
  InvalidFallbackBehavior?: string | Intrinsic
  /**
   * - The patterns to look for in the JSON body. AWS WAF inspects the results of these pattern matches against the rule inspection criteria.
   * - _Required_: Yes
   * - _Type_: [JsonMatchPattern](./aws-properties-wafv2-rulegroup-jsonmatchpattern.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-jsonbody-matchpattern */
  MatchPattern: JsonMatchPattern
  /**
   * - The parts of the JSON to match against using the `MatchPattern`. If you specify `ALL`, AWS WAF matches against keys and values.
   * - `All` does not require a match to be found in the keys and a match to be found in the values. It requires a match to be found in the keys or the values or both. To require a match in the keys and in the values, use a logical `AND` statement to combine two match rules, one that inspects the keys and another that inspects the values.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ALL | KEY | VALUE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-jsonbody-matchscope */
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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-jsonbody-oversizehandling */
  OversizeHandling?: string | Intrinsic
}

/**
 * Specifies that AWS WAF should allow the request and optionally defines additional custom handling for the request.
 * This is used in the context of other settings, for example to specify values for `RuleAction` and web ACL `DefaultAction`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface AllowAction {
  /**
   * - Defines custom handling for the web request.
   * - For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _AWS WAF Developer Guide_.
   * - _Required_: No
   * - _Type_: [CustomRequestHandling](./aws-properties-wafv2-rulegroup-customrequesthandling.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-allowaction-customrequesthandling */
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
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface RateBasedStatement {
  /**
   * - Setting that indicates how to aggregate the request counts.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `IP | FORWARDED_IP | CONSTANT | CUSTOM_KEYS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratebasedstatement-aggregatekeytype */
  AggregateKeyType: string | Intrinsic
  /**
   * - Specifies the aggregate keys to use in a rate-base rule.
   * - _Required_: No
   * - _Type_: Array of [RateBasedStatementCustomKey](./aws-properties-wafv2-rulegroup-ratebasedstatementcustomkey.html)
   * - _Maximum_: `5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratebasedstatement-customkeys */
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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratebasedstatement-evaluationwindowsec */
  EvaluationWindowSec?: number | Intrinsic
  /**
   * - The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin. Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
   * - This is required if you specify a forwarded IP in the rule's aggregate key settings.
   * - _Required_: No
   * - _Type_: [ForwardedIPConfiguration](./aws-properties-wafv2-rulegroup-forwardedipconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratebasedstatement-forwardedipconfig */
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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratebasedstatement-limit */
  Limit: number | Intrinsic
  /**
   * - An optional nested statement that narrows the scope of the web requests that are evaluated and managed by the rate-based statement. When you use a scope-down statement, the rate-based rule only tracks and rate limits requests that match the scope-down statement. You can use any nestable [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html#cfn-wafv2-webacl-notstatement-statement) in the scope-down statement, and you can nest statements at any level, the same as you can for a rule statement.
   * - _Required_: No
   * - _Type_: [Statement](./aws-properties-wafv2-rulegroup-statement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ratebasedstatement-scopedownstatement */
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
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface FieldToMatch {
  /**
   * - Inspect all query arguments.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-fieldtomatch-allqueryarguments */
  AllQueryArguments?: any | Intrinsic
  /**
   * - Inspect the request body as plain text. The request body immediately follows the request headers. This is the part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form.
   * - AWS WAF does not support inspecting the entire contents of the web request body if the body exceeds the limit for the resource type. When a web request body is larger than the limit, the underlying host service only forwards the contents that are within the limit to AWS WAF for inspection.
   * - For information about how to handle oversized request bodies, see the `Body` object configuration.
   * - _Required_: No
   * - _Type_: [Body](./aws-properties-wafv2-rulegroup-body.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-fieldtomatch-body */
  Body?: Body
  /**
   * - Inspect the request cookies. You must configure scope and pattern matching filters in the `Cookies` object, to define the set of cookies and the parts of the cookies that AWS WAF inspects.
   * - Only the first 8 KB (8192 bytes) of a request's cookies and only the first 200 cookies are forwarded to AWS WAF for inspection by the underlying host service. You must configure how to handle any oversize cookie content in the `Cookies` object. AWS WAF applies the pattern matching filters to the cookies that it receives from the underlying host service.
   * - _Required_: No
   * - _Type_: [Cookies](./aws-properties-wafv2-rulegroup-cookies.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-fieldtomatch-cookies */
  Cookies?: Cookies
  /**
   * - Inspect the request headers. You must configure scope and pattern matching filters in the `Headers` object, to define the set of headers to and the parts of the headers that AWS WAF inspects.
   * - Only the first 8 KB (8192 bytes) of a request's headers and only the first 200 headers are forwarded to AWS WAF for inspection by the underlying host service. You must configure how to handle any oversize header content in the `Headers` object. AWS WAF applies the pattern matching filters to the headers that it receives from the underlying host service.
   * - _Required_: No
   * - _Type_: [Headers](./aws-properties-wafv2-rulegroup-headers.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-fieldtomatch-headers */
  Headers?: Headers
  /**
   * - Available for use with Amazon CloudFront distributions and Application Load Balancers. Match against the request's JA3 fingerprint. The JA3 fingerprint is a 32-character hash derived from the TLS Client Hello of an incoming request. This fingerprint serves as a unique identifier for the client's TLS configuration. AWS WAF calculates and logs this fingerprint for each request that has enough TLS Client Hello information for the calculation. Almost all web requests include this information.
   * - You can obtain the JA3 fingerprint for client requests from the web ACL logs. If AWS WAF is able to calculate the fingerprint, it includes it in the logs. For information about the logging fields, see [Log fields](https://docs.aws.amazon.com/waf/latest/developerguide/logging-fields.html) in the _AWS WAF Developer Guide_.
   * - Provide the JA3 fingerprint string from the logs in your string match statement specification, to match with any future requests that have the same TLS configuration.
   * - _Required_: No
   * - _Type_: [JA3Fingerprint](./aws-properties-wafv2-rulegroup-ja3fingerprint.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-fieldtomatch-ja3fingerprint */
  JA3Fingerprint?: JA3Fingerprint
  /**
   * - Inspect the request body as JSON. The request body immediately follows the request headers. This is the part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form.
   * - AWS WAF does not support inspecting the entire contents of the web request body if the body exceeds the limit for the resource type. When a web request body is larger than the limit, the underlying host service only forwards the contents that are within the limit to AWS WAF for inspection.
   * - For information about how to handle oversized request bodies, see the `JsonBody` object configuration.
   * - _Required_: No
   * - _Type_: [JsonBody](./aws-properties-wafv2-rulegroup-jsonbody.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-fieldtomatch-jsonbody */
  JsonBody?: JsonBody
  /**
   * - Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-fieldtomatch-method */
  Method?: any | Intrinsic
  /**
   * - Inspect the query string. This is the part of a URL that appears after a `?` character, if any.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-fieldtomatch-querystring */
  QueryString?: any | Intrinsic
  /**
   * - Inspect a single header. Provide the name of the header to inspect, for example, `User-Agent` or `Referer`. This setting isn't case sensitive.
   * - Example JSON: `"SingleHeader": { "Name": "haystack" }`
   * - Alternately, you can filter and inspect all headers with the `Headers` `FieldToMatch` setting.
   * - _Required_: No
   * - _Type_: [SingleHeader](./aws-properties-wafv2-rulegroup-singleheader.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-fieldtomatch-singleheader */
  SingleHeader?: SingleHeader
  /**
   * - Inspect a single query argument. Provide the name of the query argument to inspect, such as _UserName_ or _SalesRegion_. The name can be up to 30 characters long and isn't case sensitive.
   * - Example JSON: `"SingleQueryArgument": { "Name": "myArgument" }`
   * - _Required_: No
   * - _Type_: [SingleQueryArgument](./aws-properties-wafv2-rulegroup-singlequeryargument.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-fieldtomatch-singlequeryargument */
  SingleQueryArgument?: SingleQueryArgument
  /**
   * - Inspect the request URI path. This is the part of the web request that identifies a resource, for example, `/images/daily-ad.jpg`.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-fieldtomatch-uripath */
  UriPath?: any | Intrinsic
}

/**
 * The action that AWS WAF should take on a web request when it matches a rule's statement. Settings at the web ACL level can override the rule action setting.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface RuleAction {
  /**
   * - Instructs AWS WAF to allow the web request.
   * - _Required_: No
   * - _Type_: [AllowAction](./aws-properties-wafv2-rulegroup-allowaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ruleaction-allow */
  Allow?: AllowAction
  /**
   * - Instructs AWS WAF to block the web request.
   * - _Required_: No
   * - _Type_: [BlockAction](./aws-properties-wafv2-rulegroup-blockaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ruleaction-block */
  Block?: BlockAction
  /**
   * - Specifies that AWS WAF should run a `CAPTCHA` check against the request:
   * - You can configure the expiration time in the `CaptchaConfig` `ImmunityTimeProperty` setting at the rule and web ACL level. The rule setting overrides the web ACL setting.
   * - This action option is available for rules. It isn't available for web ACL default actions.
   * - _Required_: No
   * - _Type_: [CaptchaAction](./aws-properties-wafv2-rulegroup-captchaaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ruleaction-captcha */
  Captcha?: CaptchaAction
  /**
   * - Instructs AWS WAF to run a `Challenge` check against the web request.
   * - _Required_: No
   * - _Type_: [ChallengeAction](./aws-properties-wafv2-rulegroup-challengeaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ruleaction-challenge */
  Challenge?: ChallengeAction
  /**
   * - Instructs AWS WAF to count the web request and then continue evaluating the request using the remaining rules in the web ACL.
   * - _Required_: No
   * - _Type_: [CountAction](./aws-properties-wafv2-rulegroup-countaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-ruleaction-count */
  Count?: CountAction
}

/**
 * A rule statement that defines a string match search for AWS WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want AWS WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the AWS WAF console and the developer guide, this is called a string match statement.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface ByteMatchStatement {
  /**
   * - The part of the web request that you want AWS WAF to inspect.
   * - _Required_: Yes
   * - _Type_: [FieldToMatch](./aws-properties-wafv2-rulegroup-fieldtomatch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-bytematchstatement-fieldtomatch */
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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-bytematchstatement-positionalconstraint */
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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-bytematchstatement-searchstring */
  SearchString?: string | Intrinsic
  /**
   * - String to search for in a web request component, base64-encoded. If you don't want to encode the string, specify the unencoded value in `SearchString` instead.
   * - You must specify either `SearchString` or `SearchStringBase64` in a `ByteMatchStatement`.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-bytematchstatement-searchstringbase64 */
  SearchStringBase64?: string | Intrinsic
  /**
   * - Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match.
   * - _Required_: Yes
   * - _Type_: Array of [TextTransformation](./aws-properties-wafv2-rulegroup-texttransformation.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-bytematchstatement-texttransformations */
  TextTransformations: TextTransformation[]
}

/**
 * The processing guidance for a rule, used by AWS WAF to determine whether a web request matches the rule.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface Statement {
  /**
   * - A logical rule statement used to combine other rule statements with AND logic. You provide more than one `Statement` within the `AndStatement`.
   * - _Required_: No
   * - _Type_: [AndStatement](./aws-properties-wafv2-rulegroup-andstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-statement-andstatement */
  AndStatement?: AndStatement
  /**
   * - A rule statement that defines a string match search for AWS WAF to apply to web requests. The byte match statement provides the bytes to search for, the location in requests that you want AWS WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the AWS WAF console and the developer guide, this is called a string match statement.
   * - _Required_: No
   * - _Type_: [ByteMatchStatement](./aws-properties-wafv2-rulegroup-bytematchstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-statement-bytematchstatement */
  ByteMatchStatement?: ByteMatchStatement
  /**
   * - A rule statement that labels web requests by country and region and that matches against web requests based on country code. A geo match rule labels every request that it inspects regardless of whether it finds a match.
   * - AWS WAF labels requests using the alpha-2 country and region codes from the International Organization for Standardization (ISO) 3166 standard. AWS WAF determines the codes using either the IP address in the web request origin or, if you specify it, the address in the geo match `ForwardedIPConfig`.
   * - If you use the web request origin, the label formats are `awswaf:clientip:geo:region:<ISO country code>-<ISO region code>` and `awswaf:clientip:geo:country:<ISO country code>`.
   * - If you use a forwarded IP address, the label formats are `awswaf:forwardedip:geo:region:<ISO country code>-<ISO region code>` and `awswaf:forwardedip:geo:country:<ISO country code>`.
   * - For additional details, see [Geographic match rule statement](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html) in the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
   * - _Required_: No
   * - _Type_: [GeoMatchStatement](./aws-properties-wafv2-rulegroup-geomatchstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-statement-geomatchstatement */
  GeoMatchStatement?: GeoMatchStatement
  /**
   * - A rule statement used to detect web requests coming from particular IP addresses or address ranges. To use this, create an [AWS::WAFv2::IPSet](./aws-resource-wafv2-ipset.html) that specifies the addresses you want to detect, then use the ARN of that set in this statement.
   * - Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
   * - _Required_: No
   * - _Type_: [IPSetReferenceStatement](./aws-properties-wafv2-rulegroup-ipsetreferencestatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-statement-ipsetreferencestatement */
  IPSetReferenceStatement?: IPSetReferenceStatement
  /**
   * - A rule statement to match against labels that have been added to the web request by rules that have already run in the web ACL.
   * - The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. If you do not provide the fully qualified name in your label match string, AWS WAF performs the search for labels that were added in the same context as the label match statement.
   * - _Required_: No
   * - _Type_: [LabelMatchStatement](./aws-properties-wafv2-rulegroup-labelmatchstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-statement-labelmatchstatement */
  LabelMatchStatement?: LabelMatchStatement
  /**
   * - A logical rule statement used to negate the results of another rule statement. You provide one `Statement` within the `NotStatement`.
   * - _Required_: No
   * - _Type_: [NotStatement](./aws-properties-wafv2-rulegroup-notstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-statement-notstatement */
  NotStatement?: NotStatement
  /**
   * - A logical rule statement used to combine other rule statements with OR logic. You provide more than one `Statement` within the `OrStatement`.
   * - _Required_: No
   * - _Type_: [OrStatement](./aws-properties-wafv2-rulegroup-orstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-statement-orstatement */
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
   * - _Type_: [RateBasedStatement](./aws-properties-wafv2-rulegroup-ratebasedstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-statement-ratebasedstatement */
  RateBasedStatement?: RateBasedStatement
  /**
   * - A rule statement used to search web request components for a match against a single regular expression.
   * - _Required_: No
   * - _Type_: [RegexMatchStatement](./aws-properties-wafv2-rulegroup-regexmatchstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-statement-regexmatchstatement */
  RegexMatchStatement?: RegexMatchStatement
  /**
   * - A rule statement used to search web request components for matches with regular expressions. To use this, create a [AWS::WAFv2::RegexPatternSet](./aws-resource-wafv2-regexpatternset.html) that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set.
   * - Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
   * - _Required_: No
   * - _Type_: [RegexPatternSetReferenceStatement](./aws-properties-wafv2-rulegroup-regexpatternsetreferencestatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-statement-regexpatternsetreferencestatement */
  RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatement
  /**
   * - A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<). For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes.
   * - If you configure AWS WAF to inspect the request body, AWS WAF inspects only the number of bytes in the body up to the limit for the web ACL and protected resource type. If you know that the request body for your web requests should never exceed the inspection limit, you can use a size constraint statement to block requests that have a larger request body size. For more information about the inspection limits, see `Body` and `JsonBody` settings for the `FieldToMatch` data type.
   * - If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI `/logo.jpg` is nine characters long.
   * - _Required_: No
   * - _Type_: [SizeConstraintStatement](./aws-properties-wafv2-rulegroup-sizeconstraintstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-statement-sizeconstraintstatement */
  SizeConstraintStatement?: SizeConstraintStatement
  /**
   * - A rule statement that inspects for malicious SQL code. Attackers insert malicious SQL code into web requests to do things like modify your database or extract data from it.
   * - _Required_: No
   * - _Type_: [SqliMatchStatement](./aws-properties-wafv2-rulegroup-sqlimatchstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-statement-sqlimatchstatement */
  SqliMatchStatement?: SqliMatchStatement
  /**
   * - A rule statement that inspects for cross-site scripting (XSS) attacks. In XSS attacks, the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers.
   * - _Required_: No
   * - _Type_: [XssMatchStatement](./aws-properties-wafv2-rulegroup-xssmatchstatement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-statement-xssmatchstatement */
  XssMatchStatement?: XssMatchStatement
}

/**
 * A single rule, which you can use in a [AWS::WAFv2::WebACL](./aws-resource-wafv2-webacl.html) or [AWS::WAFv2::RuleGroup](./aws-resource-wafv2-rulegroup.html) to identify web requests that you want to manage in some way. Each rule includes one top-level [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-rule.html#cfn-wafv2-rulegroup-rule-statement) that AWS WAF uses to identify matching web requests, and parameters that govern how AWS WAF handles them.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface Rule {
  /**
   * - The action that AWS WAF should take on a web request when it matches the rule statement. Settings at the web ACL level can override the rule action setting.
   * - _Required_: No
   * - _Type_: [RuleAction](./aws-properties-wafv2-rulegroup-ruleaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-rule-action */
  Action?: RuleAction
  /**
   * - Specifies how AWS WAF should handle `CAPTCHA` evaluations. If you don't specify this, AWS WAF uses the `CAPTCHA` configuration that's defined for the web ACL.
   * - _Required_: No
   * - _Type_: [CaptchaConfig](./aws-properties-wafv2-rulegroup-captchaconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-rule-captchaconfig */
  CaptchaConfig?: CaptchaConfig
  /**
   * - Specifies how AWS WAF should handle `Challenge` evaluations. If you don't specify this, AWS WAF uses the challenge configuration that's defined for the web ACL.
   * - _Required_: No
   * - _Type_: [ChallengeConfig](./aws-properties-wafv2-rulegroup-challengeconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-rule-challengeconfig */
  ChallengeConfig?: ChallengeConfig
  /**
   * - The name of the rule.
   * - If you change the name of a `Rule` after you create it and you want the rule's metric name to reflect the change, update the metric name in the rule's `VisibilityConfig` settings. AWS WAF doesn't automatically update the metric name when you update the rule name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9A-Za-z_-]{1,128}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-rule-name */
  Name: string | Intrinsic
  /**
   * - If you define more than one `Rule` in a `WebACL`, AWS WAF evaluates each request against the `Rules` in order based on the value of `Priority`. AWS WAF processes rules with lower priority first. The priorities don't need to be consecutive, but they must all be different.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-rule-priority */
  Priority: number | Intrinsic
  /**
   * - Labels to apply to web requests that match the rule match statement. AWS WAF applies fully qualified labels to matching web requests. A fully qualified label is the concatenation of a label namespace and a rule label. The rule's rule group or web ACL defines the label namespace.
   * - Rules that run after this rule in the web ACL can match against these labels using a `LabelMatchStatement`.
   * - For each label, provide a case-sensitive string containing optional namespaces and a label name, according to the following guidelines:
   * - For example, `myLabelName` or `nameSpace1:nameSpace2:myLabelName`.
   * - _Required_: No
   * - _Type_: Array of [Label](./aws-properties-wafv2-rulegroup-label.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-rule-rulelabels */
  RuleLabels?: Label[]
  /**
   * - The AWS WAF processing statement for the rule, for example [ByteMatchStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-bytematchstatement) or [SizeConstraintStatement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-sizeconstraintstatement).
   * - _Required_: Yes
   * - _Type_: [Statement](./aws-properties-wafv2-rulegroup-statement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-rule-statement */
  Statement: Statement
  /**
   * - Defines and enables Amazon CloudWatch metrics and web request sample collection.
   * - If you change the name of a `Rule` after you create it and you want the rule's metric name to reflect the change, update the metric name as well. AWS WAF doesn't automatically update the metric name.
   * - _Required_: Yes
   * - _Type_: [VisibilityConfig](./aws-properties-wafv2-rulegroup-visibilityconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-rule-visibilityconfig */
  VisibilityConfig: VisibilityConfig
}

/**
 * ###### Note
 *
 * This is the latest version of **AWS WAF** , named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the [AWS WAF developer guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
 * Use an AWS::WAFv2::RuleGroup to define a collection of rules for inspecting and controlling web requests. You use a rule group in an [AWS::WAFv2::WebACL](./aws-resource-wafv2-webacl.html) by providing its Amazon Resource Name (ARN) to the rule statement `RuleGroupReferenceStatement`, when you add rules to the web ACL.
 * When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html */

export interface WAFv2RuleGroup extends ResourceAttributes {
  Type: 'AWS::WAFv2::RuleGroup'
  Properties: {
    /**
     * - The labels that one or more rules in this rule group add to matching web requests. These labels are defined in the `RuleLabels` for a `Rule`.
     * - _Required_: No
     * - _Type_: Array of [LabelSummary](./aws-properties-wafv2-rulegroup-labelsummary.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-availablelabels */
    AvailableLabels?: LabelSummary[]
    /**
     * - The web ACL capacity units (WCUs) required for this rule group.
     * - When you create your own rule group, you define this, and you cannot change it after creation. When you add or modify the rules in a rule group, AWS WAF enforces this limit.
     * - AWS WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. AWS WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. The WCU limit for web ACLs is 1,500.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-capacity */
    Capacity: number | Intrinsic
    /**
     * - The labels that one or more rules in this rule group match against in label match statements. These labels are defined in a `LabelMatchStatement` specification, in the [Statement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html#cfn-wafv2-webacl-notstatement-statement) definition of a rule.
     * - _Required_: No
     * - _Type_: Array of [LabelSummary](./aws-properties-wafv2-rulegroup-labelsummary.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-consumedlabels */
    ConsumedLabels?: LabelSummary[]
    /**
     * - A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the rule group, and then use them in the rules that you define in the rule group.
     * - For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the _AWS WAF Developer Guide_.
     * - For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the _AWS WAF Developer Guide_.
     * - _Required_: No
     * - _Type_: Object of [CustomResponseBody](./aws-properties-wafv2-rulegroup-customresponsebody.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-customresponsebodies */
    CustomResponseBodies?: Record<string, CustomResponseBody>
    /**
     * - A description of the rule group that helps with identification.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9=:#@/\-,.][a-zA-Z0-9+=:#@/\-,.\s]+[a-zA-Z0-9+=:#@/\-,.]{1,256}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-description */
    Description?: string | Intrinsic
    /**
     * - The name of the rule group. You cannot change the name of a rule group after you create it.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[0-9A-Za-z_-]{1,128}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-name */
    Name?: string | Intrinsic
    /**
     * - The rule statements used to identify the web requests that you want to allow, block, or count. Each rule includes one top-level statement that AWS WAF uses to identify matching web requests, and parameters that govern how AWS WAF handles them.
     * - _Required_: No
     * - _Type_: Array of [Rule](./aws-properties-wafv2-rulegroup-rule.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-rules */
    Rules?: Rule[]
    /**
     * - Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AWS AppSync GraphQL API, an Amazon Cognito user pool, an AWS App Runner service, or an AWS Verified Access instance. Valid Values are `CLOUDFRONT` and `REGIONAL`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `CLOUDFRONT | REGIONAL`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-scope */
    Scope: string | Intrinsic
    /**
     * - Key:value pairs associated with an AWS resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-wafv2-rulegroup-tag.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-tags */
    Tags?: Tag[]
    /**
     * - Defines and enables Amazon CloudWatch metrics and web request sample collection.
     * - _Required_: Yes
     * - _Type_: [VisibilityConfig](./aws-properties-wafv2-rulegroup-visibilityconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-visibilityconfig */
    VisibilityConfig: VisibilityConfig
  }
}
