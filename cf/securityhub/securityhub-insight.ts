import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A string filter for filtering AWS Security Hub findings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html */

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
   * - _Allowed values_: `EQUALS | PREFIX | NOT_EQUALS | PREFIX_NOT_EQUALS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-stringfilter-comparison */
  Comparison: string | Intrinsic
  /**
   * - The string filter value. Filter values are case sensitive. For example, the product name for control-based findings is `Security Hub`. If you provide `security hub` as the filter value, there's no match.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-stringfilter-value */
  Value: string | Intrinsic
}

/**
 * A number filter for querying findings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html */

export interface NumberFilter {
  /**
   * - The equal-to condition to be applied to a single field when querying for findings.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-numberfilter-eq */
  Eq?: number | Intrinsic
  /**
   * - The greater-than-equal condition to be applied to a single field when querying for findings.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-numberfilter-gte */
  Gte?: number | Intrinsic
  /**
   * - The less-than-equal condition to be applied to a single field when querying for findings.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-numberfilter-lte */
  Lte?: number | Intrinsic
}

/**
 * A keyword filter for querying findings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html */

export interface KeywordFilter {
  /**
   * - A value for the keyword.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-keywordfilter-value */
  Value: string | Intrinsic
}

/**
 * The IP filter for querying findings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html */

export interface IpFilter {
  /**
   * - A finding's CIDR value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-ipfilter-cidr */
  Cidr: string | Intrinsic
}

/**
 * A map filter for filtering AWS Security Hub findings. Each map filter provides the field to check for, the value to check for, and the comparison operator.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html */

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
   * - _Allowed values_: `EQUALS | NOT_EQUALS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-mapfilter-comparison */
  Comparison: string | Intrinsic
  /**
   * - The key of the map filter. For example, for `ResourceTags`, `Key` identifies the name of the tag. For `UserDefinedFields`, `Key` is the name of the field.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-mapfilter-key */
  Key: string | Intrinsic
  /**
   * - The value for the key in the map filter. Filter values are case sensitive. For example, one of the values for a tag called `Department` might be `Security`. If you provide `security` as the filter value, then there's no match.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-mapfilter-value */
  Value: string | Intrinsic
}

/**
 * Boolean filter for querying findings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html */

export interface BooleanFilter {
  /**
   * - The value of the boolean.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-booleanfilter-value */
  Value: boolean | Intrinsic
}

/**
 * A date range for the date filter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html */

export interface DateRange {
  /**
   * - A date range unit for the date filter.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `DAYS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-daterange-unit */
  Unit: string | Intrinsic
  /**
   * - A date range value for the date filter.
   * - _Required_: Yes
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-daterange-value */
  Value: number | Intrinsic
}

/**
 * A date filter for querying findings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html */

export interface DateFilter {
  /**
   * - A date range for the date filter.
   * - _Required_: No
   * - _Type_: [DateRange](./aws-properties-securityhub-insight-daterange.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-datefilter-daterange */
  DateRange?: DateRange
  /**
   * - A timestamp that provides the end date for the date filter.
   * - This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]`. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^([\+-]?\d{4}(?!\d{2}))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([tT]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-datefilter-end */
  End?: string | Intrinsic
  /**
   * - A timestamp that provides the start date for the date filter.
   * - This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]`. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^([\+-]?\d{4}(?!\d{2}))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([tT]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-datefilter-start */
  Start?: string | Intrinsic
}

/**
 * A collection of filters that are applied to all active findings aggregated by AWS Security Hub.
 * You can filter by up to ten finding attributes. For each attribute, you can provide up to 20 filter values.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html */

export interface AwsSecurityFindingFilters {
  /**
   * - The AWS account ID in which a finding is generated.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-awsaccountid */
  AwsAccountId?: StringFilter[]
  /**
   * - The name of the AWS account in which a finding is generated.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-awsaccountname */
  AwsAccountName?: StringFilter[]
  /**
   * - The name of the findings provider (company) that owns the solution (product) that generates findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-companyname */
  CompanyName?: StringFilter[]
  /**
   * - The unique identifier of a standard in which a control is enabled. This field consists of the resource portion of the Amazon Resource Name (ARN) returned for a standard in the [DescribeStandards](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html) API response.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-complianceassociatedstandardsid */
  ComplianceAssociatedStandardsId?: StringFilter[]
  /**
   * - The unique identifier of a control across standards. Values for this field typically consist of an AWS service and a number, such as APIGateway.5.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-compliancesecuritycontrolid */
  ComplianceSecurityControlId?: StringFilter[]
  /**
   * - The name of a security control parameter.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-compliancesecuritycontrolparametersname */
  ComplianceSecurityControlParametersName?: StringFilter[]
  /**
   * - The current value of a security control parameter.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-compliancesecuritycontrolparametersvalue */
  ComplianceSecurityControlParametersValue?: StringFilter[]
  /**
   * - Exclusive to findings that are generated as the result of a check run against a specific rule in a supported standard, such as CIS AWS Foundations. Contains security standard-related finding details.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-compliancestatus */
  ComplianceStatus?: StringFilter[]
  /**
   * - A finding's confidence. Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify.
   * - Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.
   * - _Required_: No
   * - _Type_: Array of [NumberFilter](./aws-properties-securityhub-insight-numberfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-confidence */
  Confidence?: NumberFilter[]
  /**
   * - A timestamp that indicates when the security findings provider created the potential security issue that a finding reflects.
   * - This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]`. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
   * - _Required_: No
   * - _Type_: Array of [DateFilter](./aws-properties-securityhub-insight-datefilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-createdat */
  CreatedAt?: DateFilter[]
  /**
   * - The level of importance assigned to the resources associated with the finding.
   * - A score of 0 means that the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources.
   * - _Required_: No
   * - _Type_: Array of [NumberFilter](./aws-properties-securityhub-insight-numberfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-criticality */
  Criticality?: NumberFilter[]
  /**
   * - A finding's description.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-description */
  Description?: StringFilter[]
  /**
   * - The finding provider value for the finding confidence. Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify.
   * - Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.
   * - _Required_: No
   * - _Type_: Array of [NumberFilter](./aws-properties-securityhub-insight-numberfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-findingproviderfieldsconfidence */
  FindingProviderFieldsConfidence?: NumberFilter[]
  /**
   * - The finding provider value for the level of importance assigned to the resources associated with the findings.
   * - A score of 0 means that the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources.
   * - _Required_: No
   * - _Type_: Array of [NumberFilter](./aws-properties-securityhub-insight-numberfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-findingproviderfieldscriticality */
  FindingProviderFieldsCriticality?: NumberFilter[]
  /**
   * - The finding identifier of a related finding that is identified by the finding provider.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-findingproviderfieldsrelatedfindingsid */
  FindingProviderFieldsRelatedFindingsId?: StringFilter[]
  /**
   * - The ARN of the solution that generated a related finding that is identified by the finding provider.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-findingproviderfieldsrelatedfindingsproductarn */
  FindingProviderFieldsRelatedFindingsProductArn?: StringFilter[]
  /**
   * - The finding provider value for the severity label.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-findingproviderfieldsseveritylabel */
  FindingProviderFieldsSeverityLabel?: StringFilter[]
  /**
   * - The finding provider's original value for the severity.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-findingproviderfieldsseverityoriginal */
  FindingProviderFieldsSeverityOriginal?: StringFilter[]
  /**
   * - One or more finding types that the finding provider assigned to the finding. Uses the format of `namespace/category/classifier` that classify a finding.
   * - Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual Behaviors | Sensitive Data Identifications
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-findingproviderfieldstypes */
  FindingProviderFieldsTypes?: StringFilter[]
  /**
   * - A timestamp that indicates when the security findings provider first observed the potential security issue that a finding captured.
   * - This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]`. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
   * - _Required_: No
   * - _Type_: Array of [DateFilter](./aws-properties-securityhub-insight-datefilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-firstobservedat */
  FirstObservedAt?: DateFilter[]
  /**
   * - The identifier for the solution-specific component (a discrete unit of logic) that generated a finding. In various security findings providers' solutions, this generator can be called a rule, a check, a detector, a plugin, etc.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-generatorid */
  GeneratorId?: StringFilter[]
  /**
   * - The security findings provider-specific identifier for a finding.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-id */
  Id?: StringFilter[]
  /**
   * - This field is deprecated. A keyword for a finding.
   * - _Required_: No
   * - _Type_: Array of [KeywordFilter](./aws-properties-securityhub-insight-keywordfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-keyword */
  Keyword?: KeywordFilter[]
  /**
   * - A timestamp that indicates when the security findings provider most recently observed the potential security issue that a finding captured.
   * - This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]`. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
   * - _Required_: No
   * - _Type_: Array of [DateFilter](./aws-properties-securityhub-insight-datefilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-lastobservedat */
  LastObservedAt?: DateFilter[]
  /**
   * - The name of the malware that was observed.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-malwarename */
  MalwareName?: StringFilter[]
  /**
   * - The filesystem path of the malware that was observed.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-malwarepath */
  MalwarePath?: StringFilter[]
  /**
   * - The state of the malware that was observed.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-malwarestate */
  MalwareState?: StringFilter[]
  /**
   * - The type of the malware that was observed.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-malwaretype */
  MalwareType?: StringFilter[]
  /**
   * - The destination domain of network-related information about a finding.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-networkdestinationdomain */
  NetworkDestinationDomain?: StringFilter[]
  /**
   * - The destination IPv4 address of network-related information about a finding.
   * - _Required_: No
   * - _Type_: Array of [IpFilter](./aws-properties-securityhub-insight-ipfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-networkdestinationipv4 */
  NetworkDestinationIpV4?: IpFilter[]
  /**
   * - The destination IPv6 address of network-related information about a finding.
   * - _Required_: No
   * - _Type_: Array of [IpFilter](./aws-properties-securityhub-insight-ipfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-networkdestinationipv6 */
  NetworkDestinationIpV6?: IpFilter[]
  /**
   * - The destination port of network-related information about a finding.
   * - _Required_: No
   * - _Type_: Array of [NumberFilter](./aws-properties-securityhub-insight-numberfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-networkdestinationport */
  NetworkDestinationPort?: NumberFilter[]
  /**
   * - Indicates the direction of network traffic associated with a finding.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-networkdirection */
  NetworkDirection?: StringFilter[]
  /**
   * - The protocol of network-related information about a finding.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-networkprotocol */
  NetworkProtocol?: StringFilter[]
  /**
   * - The source domain of network-related information about a finding.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-networksourcedomain */
  NetworkSourceDomain?: StringFilter[]
  /**
   * - The source IPv4 address of network-related information about a finding.
   * - _Required_: No
   * - _Type_: Array of [IpFilter](./aws-properties-securityhub-insight-ipfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-networksourceipv4 */
  NetworkSourceIpV4?: IpFilter[]
  /**
   * - The source IPv6 address of network-related information about a finding.
   * - _Required_: No
   * - _Type_: Array of [IpFilter](./aws-properties-securityhub-insight-ipfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-networksourceipv6 */
  NetworkSourceIpV6?: IpFilter[]
  /**
   * - The source media access control (MAC) address of network-related information about a finding.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-networksourcemac */
  NetworkSourceMac?: StringFilter[]
  /**
   * - The source port of network-related information about a finding.
   * - _Required_: No
   * - _Type_: Array of [NumberFilter](./aws-properties-securityhub-insight-numberfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-networksourceport */
  NetworkSourcePort?: NumberFilter[]
  /**
   * - The text of a note.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-notetext */
  NoteText?: StringFilter[]
  /**
   * - The timestamp of when the note was updated.
   * - _Required_: No
   * - _Type_: Array of [DateFilter](./aws-properties-securityhub-insight-datefilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-noteupdatedat */
  NoteUpdatedAt?: DateFilter[]
  /**
   * - The principal that created a note.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-noteupdatedby */
  NoteUpdatedBy?: StringFilter[]
  /**
   * - A timestamp that identifies when the process was launched.
   * - This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]`. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
   * - _Required_: No
   * - _Type_: Array of [DateFilter](./aws-properties-securityhub-insight-datefilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-processlaunchedat */
  ProcessLaunchedAt?: DateFilter[]
  /**
   * - The name of the process.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-processname */
  ProcessName?: StringFilter[]
  /**
   * - The parent process ID. This field accepts positive integers between `O` and `2147483647`.
   * - _Required_: No
   * - _Type_: Array of [NumberFilter](./aws-properties-securityhub-insight-numberfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-processparentpid */
  ProcessParentPid?: NumberFilter[]
  /**
   * - The path to the process executable.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-processpath */
  ProcessPath?: StringFilter[]
  /**
   * - The process ID.
   * - _Required_: No
   * - _Type_: Array of [NumberFilter](./aws-properties-securityhub-insight-numberfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-processpid */
  ProcessPid?: NumberFilter[]
  /**
   * - A timestamp that identifies when the process was terminated.
   * - This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]`. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
   * - _Required_: No
   * - _Type_: Array of [DateFilter](./aws-properties-securityhub-insight-datefilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-processterminatedat */
  ProcessTerminatedAt?: DateFilter[]
  /**
   * - The ARN generated by Security Hub that uniquely identifies a third-party company (security findings provider) after this provider's product (solution that generates findings) is registered with Security Hub.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-productarn */
  ProductArn?: StringFilter[]
  /**
   * - A data type where security findings providers can include additional solution-specific details that aren't part of the defined `AwsSecurityFinding` format.
   * - _Required_: No
   * - _Type_: Array of [MapFilter](./aws-properties-securityhub-insight-mapfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-productfields */
  ProductFields?: MapFilter[]
  /**
   * - The name of the solution (product) that generates findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-productname */
  ProductName?: StringFilter[]
  /**
   * - The recommendation of what to do about the issue described in a finding.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-recommendationtext */
  RecommendationText?: StringFilter[]
  /**
   * - The updated record state for the finding.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-recordstate */
  RecordState?: StringFilter[]
  /**
   * - The Region from which the finding was generated.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-region */
  Region?: StringFilter[]
  /**
   * - The solution-generated identifier for a related finding.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-relatedfindingsid */
  RelatedFindingsId?: StringFilter[]
  /**
   * - The ARN of the solution that generated a related finding.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-relatedfindingsproductarn */
  RelatedFindingsProductArn?: StringFilter[]
  /**
   * - The ARN of the application that is related to a finding.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceapplicationarn */
  ResourceApplicationArn?: StringFilter[]
  /**
   * - The name of the application that is related to a finding.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceapplicationname */
  ResourceApplicationName?: StringFilter[]
  /**
   * - The IAM profile ARN of the instance.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsec2instanceiaminstanceprofilearn */
  ResourceAwsEc2InstanceIamInstanceProfileArn?: StringFilter[]
  /**
   * - The Amazon Machine Image (AMI) ID of the instance.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsec2instanceimageid */
  ResourceAwsEc2InstanceImageId?: StringFilter[]
  /**
   * - The IPv4 addresses associated with the instance.
   * - _Required_: No
   * - _Type_: Array of [IpFilter](./aws-properties-securityhub-insight-ipfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsec2instanceipv4addresses */
  ResourceAwsEc2InstanceIpV4Addresses?: IpFilter[]
  /**
   * - The IPv6 addresses associated with the instance.
   * - _Required_: No
   * - _Type_: Array of [IpFilter](./aws-properties-securityhub-insight-ipfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsec2instanceipv6addresses */
  ResourceAwsEc2InstanceIpV6Addresses?: IpFilter[]
  /**
   * - The key name associated with the instance.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsec2instancekeyname */
  ResourceAwsEc2InstanceKeyName?: StringFilter[]
  /**
   * - The date and time the instance was launched.
   * - _Required_: No
   * - _Type_: Array of [DateFilter](./aws-properties-securityhub-insight-datefilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsec2instancelaunchedat */
  ResourceAwsEc2InstanceLaunchedAt?: DateFilter[]
  /**
   * - The identifier of the subnet that the instance was launched in.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsec2instancesubnetid */
  ResourceAwsEc2InstanceSubnetId?: StringFilter[]
  /**
   * - The instance type of the instance.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsec2instancetype */
  ResourceAwsEc2InstanceType?: StringFilter[]
  /**
   * - The identifier of the VPC that the instance was launched in.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsec2instancevpcid */
  ResourceAwsEc2InstanceVpcId?: StringFilter[]
  /**
   * - The creation date/time of the IAM access key related to a finding.
   * - _Required_: No
   * - _Type_: Array of [DateFilter](./aws-properties-securityhub-insight-datefilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsiamaccesskeycreatedat */
  ResourceAwsIamAccessKeyCreatedAt?: DateFilter[]
  /**
   * - The name of the principal that is associated with an IAM access key.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsiamaccesskeyprincipalname */
  ResourceAwsIamAccessKeyPrincipalName?: StringFilter[]
  /**
   * - The status of the IAM access key related to a finding.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsiamaccesskeystatus */
  ResourceAwsIamAccessKeyStatus?: StringFilter[]
  /**
   * - This field is deprecated. The username associated with the IAM access key related to a finding.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsiamaccesskeyusername */
  ResourceAwsIamAccessKeyUserName?: StringFilter[]
  /**
   * - The name of an IAM user.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawsiamuserusername */
  ResourceAwsIamUserUserName?: StringFilter[]
  /**
   * - The canonical user ID of the owner of the S3 bucket.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawss3bucketownerid */
  ResourceAwsS3BucketOwnerId?: StringFilter[]
  /**
   * - The display name of the owner of the S3 bucket.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceawss3bucketownername */
  ResourceAwsS3BucketOwnerName?: StringFilter[]
  /**
   * - The identifier of the image related to a finding.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourcecontainerimageid */
  ResourceContainerImageId?: StringFilter[]
  /**
   * - The name of the image related to a finding.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourcecontainerimagename */
  ResourceContainerImageName?: StringFilter[]
  /**
   * - A timestamp that identifies when the container was started.
   * - This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]`. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
   * - _Required_: No
   * - _Type_: Array of [DateFilter](./aws-properties-securityhub-insight-datefilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourcecontainerlaunchedat */
  ResourceContainerLaunchedAt?: DateFilter[]
  /**
   * - The name of the container related to a finding.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourcecontainername */
  ResourceContainerName?: StringFilter[]
  /**
   * - The details of a resource that doesn't have a specific subfield for the resource type defined.
   * - _Required_: No
   * - _Type_: Array of [MapFilter](./aws-properties-securityhub-insight-mapfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourcedetailsother */
  ResourceDetailsOther?: MapFilter[]
  /**
   * - The canonical identifier for the given resource type.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceid */
  ResourceId?: StringFilter[]
  /**
   * - The canonical AWS partition name that the Region is assigned to.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourcepartition */
  ResourcePartition?: StringFilter[]
  /**
   * - The canonical AWS external Region name where this resource is located.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourceregion */
  ResourceRegion?: StringFilter[]
  /**
   * - A list of AWS tags associated with a resource at the time the finding was processed.
   * - _Required_: No
   * - _Type_: Array of [MapFilter](./aws-properties-securityhub-insight-mapfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourcetags */
  ResourceTags?: MapFilter[]
  /**
   * - Specifies the type of the resource that details are provided for.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-resourcetype */
  ResourceType?: StringFilter[]
  /**
   * - Indicates whether or not sample findings are included in the filter results.
   * - _Required_: No
   * - _Type_: Array of [BooleanFilter](./aws-properties-securityhub-insight-booleanfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-sample */
  Sample?: BooleanFilter[]
  /**
   * - The label of a finding's severity.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-severitylabel */
  SeverityLabel?: StringFilter[]
  /**
   * - Deprecated. The normalized severity of a finding. Instead of providing `Normalized`, provide `Label`.
   * - The value of `Normalized` can be an integer between `0` and `100`.
   * - If you provide `Label` and do not provide `Normalized`, then `Normalized` is set automatically as follows.
   * - _Required_: No
   * - _Type_: Array of [NumberFilter](./aws-properties-securityhub-insight-numberfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-severitynormalized */
  SeverityNormalized?: NumberFilter[]
  /**
   * - Deprecated. This attribute isn't included in findings. Instead of providing `Product`, provide `Original`.
   * - The native severity as defined by the AWS service or integrated partner product that generated the finding.
   * - _Required_: No
   * - _Type_: Array of [NumberFilter](./aws-properties-securityhub-insight-numberfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-severityproduct */
  SeverityProduct?: NumberFilter[]
  /**
   * - A URL that links to a page about the current finding in the security findings provider's solution.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-sourceurl */
  SourceUrl?: StringFilter[]
  /**
   * - The category of a threat intelligence indicator.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-threatintelindicatorcategory */
  ThreatIntelIndicatorCategory?: StringFilter[]
  /**
   * - A timestamp that identifies the last observation of a threat intelligence indicator.
   * - _Required_: No
   * - _Type_: Array of [DateFilter](./aws-properties-securityhub-insight-datefilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-threatintelindicatorlastobservedat */
  ThreatIntelIndicatorLastObservedAt?: DateFilter[]
  /**
   * - The source of the threat intelligence.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-threatintelindicatorsource */
  ThreatIntelIndicatorSource?: StringFilter[]
  /**
   * - The URL for more details from the source of the threat intelligence.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-threatintelindicatorsourceurl */
  ThreatIntelIndicatorSourceUrl?: StringFilter[]
  /**
   * - The type of a threat intelligence indicator.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-threatintelindicatortype */
  ThreatIntelIndicatorType?: StringFilter[]
  /**
   * - The value of a threat intelligence indicator.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-threatintelindicatorvalue */
  ThreatIntelIndicatorValue?: StringFilter[]
  /**
   * - A finding's title.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-title */
  Title?: StringFilter[]
  /**
   * - A finding type in the format of `namespace/category/classifier` that classifies a finding.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-type */
  Type?: StringFilter[]
  /**
   * - A timestamp that indicates when the security findings provider last updated the finding record.
   * - This field accepts only the specified formats. Timestamps can end with `Z` or `("+" / "-") time-hour [":" time-minute]`. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
   * - _Required_: No
   * - _Type_: Array of [DateFilter](./aws-properties-securityhub-insight-datefilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-updatedat */
  UpdatedAt?: DateFilter[]
  /**
   * - A list of name/value string pairs associated with the finding. These are custom, user-defined fields added to a finding.
   * - _Required_: No
   * - _Type_: Array of [MapFilter](./aws-properties-securityhub-insight-mapfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-userdefinedfields */
  UserDefinedFields?: MapFilter[]
  /**
   * - The veracity of a finding.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-verificationstate */
  VerificationState?: StringFilter[]
  /**
   * - Indicates whether a software vulnerability in your environment has a known exploit. You can filter findings by this field only if you use Security Hub and Amazon Inspector.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-vulnerabilitiesexploitavailable */
  VulnerabilitiesExploitAvailable?: StringFilter[]
  /**
   * - Indicates whether a vulnerability is fixed in a newer version of the affected software packages. You can filter findings by this field only if you use Security Hub and Amazon Inspector.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-vulnerabilitiesfixavailable */
  VulnerabilitiesFixAvailable?: StringFilter[]
  /**
   * - The workflow state of a finding.
   * - Note that this field is deprecated. To search for a finding based on its workflow status, use `WorkflowStatus`.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-workflowstate */
  WorkflowState?: StringFilter[]
  /**
   * - The status of the investigation into a finding. Allowed values are the following.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-securityhub-insight-stringfilter.html)
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-awssecurityfindingfilters-workflowstatus */
  WorkflowStatus?: StringFilter[]
}

/**
 * The `AWS::SecurityHub::Insight` resource creates a custom insight in AWS Security Hub. An insight is a collection of findings that relate to a security issue that requires attention or remediation. For more information, see [Insights in AWS Security Hub](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-insights.html) in the _AWS Security Hub User Guide_.
 * Tags aren't supported for this resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html */

export interface SecurityHubInsight extends ResourceAttributes {
  Type: 'AWS::SecurityHub::Insight'
  Properties: {
    /**
     * - One or more attributes used to filter the findings included in the insight. The insight only includes findings that match the criteria defined in the filters. You can filter by up to ten finding attributes. For each attribute, you can provide up to 20 filter values.
     * - _Required_: Yes
     * - _Type_: [AwsSecurityFindingFilters](./aws-properties-securityhub-insight-awssecurityfindingfilters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-filters */
    Filters: AwsSecurityFindingFilters
    /**
     * - The grouping attribute for the insight's findings. Indicates how to group the matching findings, and identifies the type of item that the insight applies to. For example, if an insight is grouped by resource identifier, then the insight produces a list of resource identifiers.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-groupbyattribute */
    GroupByAttribute: string | Intrinsic
    /**
     * - The name of a Security Hub insight.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-insight.html#cfn-securityhub-insight-name */
    Name: string | Intrinsic
  }
}
