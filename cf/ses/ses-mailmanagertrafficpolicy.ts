import type { Intrinsic } from '../intrinsic/index.js' /**
 * A key-value pair (the value is optional), that you can define and assign to AWS resources.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html */

export interface Tag {
  /**
   * - The key of the key-value tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9/_\+=\.:@\-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the key-value tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9/_\+=\.:@\-]*$`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-tag-value */
  Value: string | Intrinsic
}

/**
 * The structure for an IP based condition matching on the incoming mail.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html */

export interface IngressIpToEvaluate {
  /**
   * - An enum type representing the allowed attribute types for an IP condition.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `SENDER_IP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-ingressiptoevaluate-attribute */
  Attribute: string | Intrinsic
}

/**
 * The union type representing the allowed types for the left hand side of a string condition.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html */

export interface IngressStringToEvaluate {
  /**
   * - The enum type representing the allowed attribute types for a string condition.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `RECIPIENT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-ingressstringtoevaluate-attribute */
  Attribute: string | Intrinsic
}

/**
 * The union type representing the allowed types for the left hand side of a TLS condition.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html */

export interface IngressTlsProtocolToEvaluate {
  /**
   * - The enum type representing the allowed attribute types for the TLS condition.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `TLS_PROTOCOL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-ingresstlsprotocoltoevaluate-attribute */
  Attribute: string | Intrinsic
}

/**
 * The Add On ARN and its returned value that is evaluated in a policy statement's conditional expression to either deny or block the incoming email.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html */

export interface IngressAnalysis {
  /**
   * - The Amazon Resource Name (ARN) of an Add On.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9:_/+=,@.#-]+$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-ingressanalysis-analyzer */
  Analyzer: string | Intrinsic
  /**
   * - The returned value from an Add On.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[\sa-zA-Z0-9_]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-ingressanalysis-resultfield */
  ResultField: string | Intrinsic
}

/**
 * The union type representing the allowed types for the left hand side of an IP condition.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html */

export interface IngressIpv4Expression {
  /**
   * - The left hand side argument of an IP condition expression.
   * - _Required_: Yes
   * - _Type_: [IngressIpToEvaluate](./aws-properties-ses-mailmanagertrafficpolicy-ingressiptoevaluate.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-ingressipv4expression-evaluate */
  Evaluate: IngressIpToEvaluate
  /**
   * - The matching operator for an IP condition expression.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `CIDR_MATCHES | NOT_CIDR_MATCHES`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-ingressipv4expression-operator */
  Operator: string | Intrinsic
  /**
   * - The right hand side argument of an IP condition expression.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-ingressipv4expression-values */
  Values: (string | Intrinsic)[]
}

/**
 * The structure for a string based condition matching on the incoming mail.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html */

export interface IngressStringExpression {
  /**
   * - The left hand side argument of a string condition expression.
   * - _Required_: Yes
   * - _Type_: [IngressStringToEvaluate](./aws-properties-ses-mailmanagertrafficpolicy-ingressstringtoevaluate.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-ingressstringexpression-evaluate */
  Evaluate: IngressStringToEvaluate
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `EQUALS | NOT_EQUALS | STARTS_WITH | ENDS_WITH | CONTAINS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-ingressstringexpression-operator */
  Operator: string | Intrinsic
  /**
   * - The right hand side argument of a string condition expression.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-ingressstringexpression-values */
  Values: (string | Intrinsic)[]
}

/**
 * The structure for a TLS related condition matching on the incoming mail.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html */

export interface IngressTlsProtocolExpression {
  /**
   * - The left hand side argument of a TLS condition expression.
   * - _Required_: Yes
   * - _Type_: [IngressTlsProtocolToEvaluate](./aws-properties-ses-mailmanagertrafficpolicy-ingresstlsprotocoltoevaluate.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-ingresstlsprotocolexpression-evaluate */
  Evaluate: IngressTlsProtocolToEvaluate
  /**
   * - The matching operator for a TLS condition expression.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `MINIMUM_TLS_VERSION | IS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-ingresstlsprotocolexpression-operator */
  Operator: string | Intrinsic
  /**
   * - The right hand side argument of a TLS condition expression.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `TLS1_2 | TLS1_3`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-ingresstlsprotocolexpression-value */
  Value: string | Intrinsic
}

/**
 * The union type representing the allowed types of operands for a boolean condition.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html */

export interface IngressBooleanToEvaluate {
  /**
   * - The structure type for a boolean condition stating the Add On ARN and its returned value.
   * - _Required_: Yes
   * - _Type_: [IngressAnalysis](./aws-properties-ses-mailmanagertrafficpolicy-ingressanalysis.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-ingressbooleantoevaluate-analysis */
  Analysis: IngressAnalysis
}

/**
 * The structure for a boolean condition matching on the incoming mail.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html */

export interface IngressBooleanExpression {
  /**
   * - The operand on which to perform a boolean condition operation.
   * - _Required_: Yes
   * - _Type_: [IngressBooleanToEvaluate](./aws-properties-ses-mailmanagertrafficpolicy-ingressbooleantoevaluate.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-ingressbooleanexpression-evaluate */
  Evaluate: IngressBooleanToEvaluate
  /**
   * - The matching operator for a boolean condition expression.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `IS_TRUE | IS_FALSE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-ingressbooleanexpression-operator */
  Operator: string | Intrinsic
}

/**
 * The email traffic filtering conditions which are contained in a traffic policy resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html */

export interface PolicyCondition {
  /**
   * - This represents a boolean type condition matching on the incoming mail. It performs the boolean operation configured in 'Operator' and evaluates the 'Protocol' object against the 'Value'.
   * - _Required_: No
   * - _Type_: [IngressBooleanExpression](./aws-properties-ses-mailmanagertrafficpolicy-ingressbooleanexpression.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-policycondition-booleanexpression */
  BooleanExpression?: IngressBooleanExpression
  /**
   * - This represents an IP based condition matching on the incoming mail. It performs the operation configured in 'Operator' and evaluates the 'Protocol' object against the 'Value'.
   * - _Required_: No
   * - _Type_: [IngressIpv4Expression](./aws-properties-ses-mailmanagertrafficpolicy-ingressipv4expression.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-policycondition-ipexpression */
  IpExpression?: IngressIpv4Expression
  /**
   * - This represents a string based condition matching on the incoming mail. It performs the string operation configured in 'Operator' and evaluates the 'Protocol' object against the 'Value'.
   * - _Required_: No
   * - _Type_: [IngressStringExpression](./aws-properties-ses-mailmanagertrafficpolicy-ingressstringexpression.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-policycondition-stringexpression */
  StringExpression?: IngressStringExpression
  /**
   * - This represents a TLS based condition matching on the incoming mail. It performs the operation configured in 'Operator' and evaluates the 'Protocol' object against the 'Value'.
   * - _Required_: No
   * - _Type_: [IngressTlsProtocolExpression](./aws-properties-ses-mailmanagertrafficpolicy-ingresstlsprotocolexpression.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-policycondition-tlsexpression */
  TlsExpression?: IngressTlsProtocolExpression
}

/**
 * The structure containing traffic policy conditions and actions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html */

export interface PolicyStatement {
  /**
   * - The action that informs a traffic policy resource to either allow or block the email if it matches a condition in the policy statement.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ALLOW | DENY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-policystatement-action */
  Action: string | Intrinsic
  /**
   * - The list of conditions to apply to incoming messages for filtering email traffic.
   * - _Required_: Yes
   * - _Type_: Array of [PolicyCondition](./aws-properties-ses-mailmanagertrafficpolicy-policycondition.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-policystatement-conditions */
  Conditions: PolicyCondition[]
}

/**
 * Resource to create a traffic policy for a Mail Manager ingress endpoint which contains policy statements used to evaluate whether incoming emails should be allowed or denied.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html */

export interface SESMailManagerTrafficPolicy {
  Type: 'AWS::SES::MailManagerTrafficPolicy'
  Properties: {
    /**
     * - Default action instructs the traﬃc policy to either Allow or Deny (block) messages that fall outside of (or not addressed by) the conditions of your policy statements
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ALLOW | DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-defaultaction */
    DefaultAction: string | Intrinsic
    /**
     * - The maximum message size in bytes of email which is allowed in by this traffic policy—anything larger will be blocked.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-maxmessagesizebytes */
    MaxMessageSizeBytes?: number | Intrinsic
    /**
     * - Conditional statements for filtering email traffic.
     * - _Required_: Yes
     * - _Type_: Array of [PolicyStatement](./aws-properties-ses-mailmanagertrafficpolicy-policystatement.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-policystatements */
    PolicyStatements: PolicyStatement[]
    /**
     * - The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ses-mailmanagertrafficpolicy-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-tags */
    Tags?: Tag[]
    /**
     * - The name of the policy.
     * - The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z0-9_\-]+$`
     * - _Minimum_: `3`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-trafficpolicyname */
    TrafficPolicyName?: string | Intrinsic
  }
}
