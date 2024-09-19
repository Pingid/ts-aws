import type { Intrinsic } from '../intrinsic/index.js' /**
 * A string filter for filtering AWS Security Hub findings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html */

export interface StringFilter {
  /**
   * - The condition to apply to a string value when filtering Security Hub findings.
   * - To search for values that have the filter value, use one of the following comparison operators:
   * - `CONTAINS`, `EQUALS`, and `PREFIX` filters on the same field are joined by `OR`. A finding matches if it matches any one of those filters. For example, the filters `Title CONTAINS CloudFront OR Title CONTAINS CloudWatch` match a finding that includes either `CloudFront`, `CloudWatch`, or both strings in the title.
   * - To search for values that don’t have the filter value, use one of the following comparison operators:
   * - `NOT_CONTAINS`, `NOT_EQUALS`, and `PREFIX_NOT_EQUALS` filters on the same field are joined by `AND`. A finding matches only if it matches all of those filters. For example, the filters `Title NOT_CONTAINS CloudFront AND Title NOT_CONTAINS CloudWatch` match a finding that excludes both `CloudFront` and `CloudWatch` in the title.
   * - You can’t have both a `CONTAINS` filter and a `NOT_CONTAINS` filter on the same field. Similarly, you can't provide both an `EQUALS` filter and a `NOT_EQUALS` or `PREFIX_NOT_EQUALS` filter on the same field. Combining filters in this way returns an error. `CONTAINS` filters can only be used with other `CONTAINS` filters. `NOT_CONTAINS` filters can only be used with other `NOT_CONTAINS` filters.
   * - You can combine `PREFIX` filters with `NOT_EQUALS` or `PREFIX_NOT_EQUALS` filters for the same field. Security Hub first processes the `PREFIX` filters, and then the `NOT_EQUALS` or `PREFIX_NOT_EQUALS` filters.
   * - For example, for the following filters, Security Hub first identifies findings that have resource types that start with either `AwsIam` or `AwsEc2`. It then excludes findings that have a resource type of `AwsIamPolicy` and findings that have a resource type of `AwsEc2NetworkInterface`.
   * - `CONTAINS` and `NOT_CONTAINS` operators can be used only with automation rules. For more information, see [Automation rules](https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html) in the _AWS Security Hub User Guide_.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `EQUALS | PREFIX | NOT_EQUALS | PREFIX_NOT_EQUALS | CONTAINS | NOT_CONTAINS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-stringfilter-comparison */
  Comparison: string | Intrinsic
  /**
   * - The string filter value. Filter values are case sensitive. For example, the product name for control-based findings is `Security Hub`. If you provide `security hub` as the filter value, there's no match.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-stringfilter-value */
  Value: string | Intrinsic
}

/**
 * A number filter for querying findings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html */

export interface NumberFilter {
  /**
   * - The equal-to condition to be applied to a single field when querying for findings.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-numberfilter-eq */
  Eq?: number | Intrinsic
  /**
   * - The greater-than-equal condition to be applied to a single field when querying for findings.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-numberfilter-gte */
  Gte?: number | Intrinsic
  /**
   * - The less-than-equal condition to be applied to a single field when querying for findings.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-numberfilter-lte */
  Lte?: number | Intrinsic
}

/**
 * A map filter for filtering AWS Security Hub findings. Each map filter provides the field to check for, the value to check for, and the comparison operator.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html */

export interface MapFilter {
  /**
   * - The condition to apply to the key value when filtering Security Hub findings with a map filter.
   * - To search for values that have the filter value, use one of the following comparison operators:
   * - `CONTAINS` and `EQUALS` filters on the same field are joined by `OR`. A finding matches if it matches any one of those filters. For example, the filters `Department CONTAINS Security OR Department CONTAINS Finance` match a finding that includes either `Security`, `Finance`, or both values.
   * - To search for values that don't have the filter value, use one of the following comparison operators:
   * - `NOT_CONTAINS` and `NOT_EQUALS` filters on the same field are joined by `AND`. A finding matches only if it matches all of those filters. For example, the filters `Department NOT_CONTAINS Security AND Department NOT_CONTAINS Finance` match a finding that excludes both the `Security` and `Finance` values.
   * - `CONTAINS` filters can only be used with other `CONTAINS` filters. `NOT_CONTAINS` filters can only be used with other `NOT_CONTAINS` filters.
   * - You can’t have both a `CONTAINS` filter and a `NOT_CONTAINS` filter on the same field. Similarly, you can’t have both an `EQUALS` filter and a `NOT_EQUALS` filter on the same field. Combining filters in this way returns an error.
   * - `CONTAINS` and `NOT_CONTAINS` operators can be used only with automation rules. For more information, see [Automation rules](https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html) in the _AWS Security Hub User Guide_.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `EQUALS | NOT_EQUALS | CONTAINS | NOT_CONTAINS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-mapfilter-comparison */
  Comparison: string | Intrinsic
  /**
   * - The key of the map filter. For example, for `ResourceTags`, `Key` identifies the name of the tag. For `UserDefinedFields`, `Key` is the name of the field.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-mapfilter-key */
  Key: string | Intrinsic
  /**
   * - The value for the key in the map filter. Filter values are case sensitive. For example, one of the values for a tag called `Department` might be `Security`. If you provide `security` as the filter value, then there's no match.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-mapfilter-value */
  Value: string | Intrinsic
}

/**
 * The updated note.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html */

export interface NoteUpdate {
  /**
   * - The updated note text.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-noteupdate-text */
  Text: string | Intrinsic
  /**
   * - The principal that updated the note.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-noteupdate-updatedby */
  UpdatedBy: string | Intrinsic
}

/**
 * Provides details about a list of findings that the current finding relates to.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html */

export interface RelatedFinding {
  /**
   * - The product-generated identifier for a related finding.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-relatedfinding-id */
  Id: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) for the product that generated a related finding.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso-?[a-z]{0,2}):[A-Za-z0-9]{1,63}:[a-z]+-([a-z]{1,10}-)?[a-z]+-[0-9]+:([0-9]{12})?:.+$`
   * - _Minimum_: `12`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-relatedfinding-productarn */
  ProductArn: string | Intrinsic
}

/**
 * Updates to the severity information for a finding.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html */

export interface SeverityUpdate {
  /**
   * - The severity value of the finding. The allowed values are the following.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `INFORMATIONAL | LOW | MEDIUM | HIGH | CRITICAL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-severityupdate-label */
  Label?: string | Intrinsic
  /**
   * - The normalized severity for the finding. This attribute is to be deprecated in favor of `Label`.
   * - If you provide `Normalized` and do not provide `Label`, `Label` is set automatically as follows.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-severityupdate-normalized */
  Normalized?: number | Intrinsic
  /**
   * - The native severity as defined by the AWS service or integrated partner product that generated the finding.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-severityupdate-product */
  Product?: number | Intrinsic
}

/**
 * Used to update information about the investigation into the finding.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html */

export interface WorkflowUpdate {
  /**
   * - The status of the investigation into the finding. The workflow status is specific to an individual finding. It does not affect the generation of new findings. For example, setting the workflow status to `SUPPRESSED` or `RESOLVED` does not prevent a new finding for the same issue.
   * - The allowed values are the following.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `NEW | NOTIFIED | RESOLVED | SUPPRESSED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-workflowupdate-status */
  Status: string | Intrinsic
}

/**
 * A date range for the date filter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html */

export interface DateRange {
  /**
   * - A date range unit for the date filter.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `DAYS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-daterange-unit */
  Unit: string | Intrinsic
  /**
   * - A date range value for the date filter.
   * - _Required_: Yes
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-daterange-value */
  Value: number | Intrinsic
}

/**
 * Identifies the finding fields that the automation rule action updates when a finding matches the defined criteria.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html */

export interface AutomationRulesFindingFieldsUpdate {
  /**
   * - The rule action updates the `Confidence` field of a finding.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfieldsupdate-confidence */
  Confidence?: number | Intrinsic
  /**
   * - The rule action updates the `Criticality` field of a finding.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfieldsupdate-criticality */
  Criticality?: number | Intrinsic
  /**
   * - The rule action will update the `Note` field of a finding.
   * - _Required_: No
   * - _Type_: [NoteUpdate](./aws-properties-securityhub-automationrule-noteupdate.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfieldsupdate-note */
  Note?: NoteUpdate
  /**
   * - The rule action will update the `RelatedFindings` field of a finding.
   * - _Required_: No
   * - _Type_: Array of [RelatedFinding](./aws-properties-securityhub-automationrule-relatedfinding.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfieldsupdate-relatedfindings */
  RelatedFindings?: RelatedFinding[]
  /**
   * - The rule action will update the `Severity` field of a finding.
   * - _Required_: No
   * - _Type_: [SeverityUpdate](./aws-properties-securityhub-automationrule-severityupdate.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfieldsupdate-severity */
  Severity?: SeverityUpdate
  /**
   * - The rule action updates the `Types` field of a finding.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfieldsupdate-types */
  Types?: (string | Intrinsic)[]
  /**
   * - The rule action updates the `UserDefinedFields` field of a finding.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `^[-_+=.:/@\w\s]{1,128}$`
   * - _Minimum_: `0`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfieldsupdate-userdefinedfields */
  UserDefinedFields?: Record<string, string | Intrinsic>
  /**
   * - The rule action updates the `VerificationState` field of a finding.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `UNKNOWN | TRUE_POSITIVE | FALSE_POSITIVE | BENIGN_POSITIVE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfieldsupdate-verificationstate */
  VerificationState?: string | Intrinsic
  /**
   * - The rule action will update the `Workflow` field of a finding.
   * - _Required_: No
   * - _Type_: [WorkflowUpdate](./aws-properties-securityhub-automationrule-workflowupdate.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfieldsupdate-workflow */
  Workflow?: WorkflowUpdate
}

/**
 * A date filter for querying findings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html */

export interface DateFilter {
  /**
   * - A date range for the date filter.
   * - _Required_: No
   * - _Type_: [DateRange](./aws-properties-securityhub-automationrule-daterange.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-datefilter-daterange */
  DateRange?: DateRange
  /**
   * - A timestamp that provides the end date for the date filter.
   * - This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]`. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-datefilter-end */
  End?: string | Intrinsic
  /**
   * - A timestamp that provides the start date for the date filter.
   * - This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]`. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(\d\d\d\d)-([0][1-9]|[1][0-2])-([0][1-9]|[1-2](\d)|[3][0-1])[T](?:([0-1](\d)|[2][0-3]):[0-5](\d):[0-5](\d)|23:59:60)(?:\.(\d)+)?([Z]|[+-](\d\d)(:?(\d\d))?)$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-datefilter-start */
  Start?: string | Intrinsic
}

/**
 * One or more actions that AWS Security Hub takes when a finding matches the defined criteria of a rule.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html */

export interface AutomationRulesAction {
  /**
   * - Specifies that the automation rule action is an update to a finding field.
   * - _Required_: Yes
   * - _Type_: [AutomationRulesFindingFieldsUpdate](./aws-properties-securityhub-automationrule-automationrulesfindingfieldsupdate.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesaction-findingfieldsupdate */
  FindingFieldsUpdate: AutomationRulesFindingFieldsUpdate
  /**
   * - Specifies the type of action that Security Hub takes when a finding matches the defined criteria of a rule.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `FINDING_FIELDS_UPDATE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesaction-type */
  Type: string | Intrinsic
}

/**
 * The criteria that determine which findings a rule applies to.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html */

export interface AutomationRulesFindingFilters {
  /**
   * - The AWS account ID in which a finding was generated.
   * - Array Members: Minimum number of 1 item. Maximum number of 100 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-awsaccountid */
  AwsAccountId?: StringFilter[]
  /**
   * - The name of the company for the product that generated the finding. For control-based findings, the company is AWS.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-companyname */
  CompanyName?: StringFilter[]
  /**
   * - The unique identifier of a standard in which a control is enabled. This field consists of the resource portion of the Amazon Resource Name (ARN) returned for a standard in the [DescribeStandards](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html) API response.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-complianceassociatedstandardsid */
  ComplianceAssociatedStandardsId?: StringFilter[]
  /**
   * - The security control ID for which a finding was generated. Security control IDs are the same across standards.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-compliancesecuritycontrolid */
  ComplianceSecurityControlId?: StringFilter[]
  /**
   * - The result of a security check. This field is only used for findings generated from controls.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-compliancestatus */
  ComplianceStatus?: StringFilter[]
  /**
   * - The likelihood that a finding accurately identifies the behavior or issue that it was intended to identify. `Confidence` is scored on a 0–100 basis using a ratio scale. A value of `0` means 0 percent confidence, and a value of `100` means 100 percent confidence. For example, a data exfiltration detection based on a statistical deviation of network traffic has low confidence because an actual exfiltration hasn't been verified. For more information, see [Confidence](https://docs.aws.amazon.com/securityhub/latest/userguide/asff-top-level-attributes.html#asff-confidence) in the _AWS Security Hub User Guide_.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [NumberFilter](./aws-properties-securityhub-automationrule-numberfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-confidence */
  Confidence?: NumberFilter[]
  /**
   * - A timestamp that indicates when this finding record was created.
   * - This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]`. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [DateFilter](./aws-properties-securityhub-automationrule-datefilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-createdat */
  CreatedAt?: DateFilter[]
  /**
   * - The level of importance that is assigned to the resources that are associated with a finding. `Criticality` is scored on a 0–100 basis, using a ratio scale that supports only full integers. A score of `0` means that the underlying resources have no criticality, and a score of `100` is reserved for the most critical resources. For more information, see [Criticality](https://docs.aws.amazon.com/securityhub/latest/userguide/asff-top-level-attributes.html#asff-criticality) in the _AWS Security Hub User Guide_.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [NumberFilter](./aws-properties-securityhub-automationrule-numberfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-criticality */
  Criticality?: NumberFilter[]
  /**
   * - A finding's description.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-description */
  Description?: StringFilter[]
  /**
   * - A timestamp that indicates when the potential security issue captured by a finding was first observed by the security findings product.
   * - This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]`. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [DateFilter](./aws-properties-securityhub-automationrule-datefilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-firstobservedat */
  FirstObservedAt?: DateFilter[]
  /**
   * - The identifier for the solution-specific component that generated a finding.
   * - Array Members: Minimum number of 1 item. Maximum number of 100 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-generatorid */
  GeneratorId?: StringFilter[]
  /**
   * - The product-specific identifier for a finding.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-id */
  Id?: StringFilter[]
  /**
   * - A timestamp that indicates when the potential security issue captured by a finding was most recently observed by the security findings product.
   * - This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]`. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [DateFilter](./aws-properties-securityhub-automationrule-datefilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-lastobservedat */
  LastObservedAt?: DateFilter[]
  /**
   * - The text of a user-defined note that's added to a finding.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-notetext */
  NoteText?: StringFilter[]
  /**
   * - The timestamp of when the note was updated.
   * - This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]`. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [DateFilter](./aws-properties-securityhub-automationrule-datefilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-noteupdatedat */
  NoteUpdatedAt?: DateFilter[]
  /**
   * - The principal that created a note.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-noteupdatedby */
  NoteUpdatedBy?: StringFilter[]
  /**
   * - The Amazon Resource Name (ARN) for a third-party product that generated a finding in Security Hub.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-productarn */
  ProductArn?: StringFilter[]
  /**
   * - Provides the name of the product that generated the finding. For control-based findings, the product name is Security Hub.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-productname */
  ProductName?: StringFilter[]
  /**
   * - Provides the current state of a finding.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-recordstate */
  RecordState?: StringFilter[]
  /**
   * - The product-generated identifier for a related finding.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-relatedfindingsid */
  RelatedFindingsId?: StringFilter[]
  /**
   * - The ARN for the product that generated a related finding.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-relatedfindingsproductarn */
  RelatedFindingsProductArn?: StringFilter[]
  /**
   * - Custom fields and values about the resource that a finding pertains to.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [MapFilter](./aws-properties-securityhub-automationrule-mapfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-resourcedetailsother */
  ResourceDetailsOther?: MapFilter[]
  /**
   * - The identifier for the given resource type. For AWS resources that are identified by Amazon Resource Names (ARNs), this is the ARN. For AWS resources that lack ARNs, this is the identifier as defined by the AWS service that created the resource. For non-AWS resources, this is a unique identifier that is associated with the resource.
   * - Array Members: Minimum number of 1 item. Maximum number of 100 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-resourceid */
  ResourceId?: StringFilter[]
  /**
   * - The partition in which the resource that the finding pertains to is located. A partition is a group of AWS Regions. Each AWS account is scoped to one partition.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-resourcepartition */
  ResourcePartition?: StringFilter[]
  /**
   * - The AWS Region where the resource that a finding pertains to is located.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-resourceregion */
  ResourceRegion?: StringFilter[]
  /**
   * - A list of AWS tags associated with a resource at the time the finding was processed.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [MapFilter](./aws-properties-securityhub-automationrule-mapfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-resourcetags */
  ResourceTags?: MapFilter[]
  /**
   * - A finding's title.
   * - Array Members: Minimum number of 1 item. Maximum number of 100 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-resourcetype */
  ResourceType?: StringFilter[]
  /**
   * - The severity value of the finding.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-severitylabel */
  SeverityLabel?: StringFilter[]
  /**
   * - Provides a URL that links to a page about the current finding in the finding product.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-sourceurl */
  SourceUrl?: StringFilter[]
  /**
   * - A finding's title.
   * - Array Members: Minimum number of 1 item. Maximum number of 100 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-title */
  Title?: StringFilter[]
  /**
   * - One or more finding types in the format of namespace/category/classifier that classify a finding. For a list of namespaces, classifiers, and categories, see [Types taxonomy for ASFF](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format-type-taxonomy.html) in the _AWS Security Hub User Guide_.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-type */
  Type?: StringFilter[]
  /**
   * - A timestamp that indicates when the finding record was most recently updated.
   * - This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]`. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [DateFilter](./aws-properties-securityhub-automationrule-datefilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-updatedat */
  UpdatedAt?: DateFilter[]
  /**
   * - A list of user-defined name and value string pairs added to a finding.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [MapFilter](./aws-properties-securityhub-automationrule-mapfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-userdefinedfields */
  UserDefinedFields?: MapFilter[]
  /**
   * - Provides the veracity of a finding.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-verificationstate */
  VerificationState?: StringFilter[]
  /**
   * - Provides information about the status of the investigation into a finding.
   * - Array Members: Minimum number of 1 item. Maximum number of 20 items.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-automationrule-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-automationrulesfindingfilters-workflowstatus */
  WorkflowStatus?: StringFilter[]
}

/**
 * The `AWS::SecurityHub::AutomationRule` resource specifies an automation rule based on input parameters. For more information, see [Automation rules](https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html) in the _AWS Security Hub User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html */

export interface SecurityHubAutomationRule {
  Type: 'AWS::SecurityHub::AutomationRule'
  Properties: {
    /**
     * - One or more actions to update finding fields if a finding matches the conditions specified in `Criteria`.
     * - _Required_: Yes
     * - _Type_: Array of [AutomationRulesAction](./aws-properties-securityhub-automationrule-automationrulesaction.html)
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-actions */
    Actions: AutomationRulesAction[]
    /**
     * - A set of [AWS Security Finding Format (ASFF)](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html) finding field attributes and corresponding expected values that Security Hub uses to filter findings. If a rule is enabled and a finding matches the criteria specified in this parameter, Security Hub applies the rule action to the finding.
     * - _Required_: Yes
     * - _Type_: [AutomationRulesFindingFilters](./aws-properties-securityhub-automationrule-automationrulesfindingfilters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-criteria */
    Criteria: AutomationRulesFindingFilters
    /**
     * - A description of the rule.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-description */
    Description: string | Intrinsic
    /**
     * - Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria. This is useful when a finding matches the criteria for multiple rules, and each rule has different actions. If a rule is terminal, Security Hub applies the rule action to a finding that matches the rule criteria and doesn't evaluate other rules for the finding. By default, a rule isn't terminal.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-isterminal */
    IsTerminal?: boolean | Intrinsic
    /**
     * - The name of the rule.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-rulename */
    RuleName: string | Intrinsic
    /**
     * - An integer ranging from 1 to 1000 that represents the order in which the rule action is applied to findings. Security Hub applies rules with lower values for this parameter first.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-ruleorder */
    RuleOrder: number | Intrinsic
    /**
     * - Whether the rule is active after it is created. If this parameter is equal to `ENABLED`, Security Hub applies the rule to findings and finding updates after the rule is created.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-rulestatus */
    RuleStatus?: string | Intrinsic
    /**
     * - User-defined tags associated with an automation rule.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^[a-zA-Z0-9]{1,128}$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-automationrule.html#cfn-securityhub-automationrule-tags */
    Tags?: Record<string, string | Intrinsic>
  }
}
