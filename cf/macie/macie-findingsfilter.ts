import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies a tag (key-value pair) to apply to a findings filter. A _tag_ is a label that you can define and associate with AWS resources, including certain types of Amazon Macie resources. Each tag consists of a _tag key_ and an associated _tag value_. A _tag key_ is a general label that acts as a category for a more specific tag value. Each tag key must be unique and it can have only one tag value. A _tag value_ acts as a descriptor for a tag key. Tag keys and values are case sensitive. They can contain letters, numbers, spaces, or the following symbols: \_ . : / = + - @
 * For more information, see [Tagging Macie resources](https://docs.aws.amazon.com/macie/latest/user/tagging-resources.html) in the _Amazon Macie User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html */

export interface Tag {
  /**
   * - The name of the tag key. A tag key can contain up to 128 UTF-8 characters.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#cfn-macie-findingsfilter-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value to associate with the specified tag key (`Key`). A tag value can contain up to 256 UTF-8 characters. A tag value cannot be null, but it can be an empty string.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#cfn-macie-findingsfilter-tag-value */
  Value: string | Intrinsic
}

/**
 * Specifies a condition that defines the property, operator, and one or more values to use in a findings filter. A _findings filter_, also referred to as a _filter rule_, is a set of custom criteria that specifies which findings to include or exclude from the results of a query for findings. You can also configure a findings filter to suppress (automatically archive) findings that match the filter's criteria. For more information, see [Filtering Macie findings](https://docs.aws.amazon.com/macie/latest/user/findings-filter-overview.html) in the _Amazon Macie User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html */

export interface CriterionAdditionalProperties {
  /**
   * - The value for the specified property matches (equals) the specified value. If you specify multiple values, Amazon Macie uses OR logic to join the values.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#cfn-macie-findingsfilter-criterionadditionalproperties-eq */
  eq?: (string | Intrinsic)[]
  /**
   * - The value for the specified property is greater than the specified value.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#cfn-macie-findingsfilter-criterionadditionalproperties-gt */
  gt?: number | Intrinsic
  /**
   * - The value for the specified property is greater than or equal to the specified value.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#cfn-macie-findingsfilter-criterionadditionalproperties-gte */
  gte?: number | Intrinsic
  /**
   * - The value for the specified property is less than the specified value.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#cfn-macie-findingsfilter-criterionadditionalproperties-lt */
  lt?: number | Intrinsic
  /**
   * - The value for the specified property is less than or equal to the specified value.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#cfn-macie-findingsfilter-criterionadditionalproperties-lte */
  lte?: number | Intrinsic
  /**
   * - The value for the specified property doesn't match (doesn't equal) the specified value. If you specify multiple values, Amazon Macie uses OR logic to join the values.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#cfn-macie-findingsfilter-criterionadditionalproperties-neq */
  neq?: (string | Intrinsic)[]
}

/**
 * Specifies, as a map, one or more property-based conditions for a findings filter. A _findings filter_, also referred to as a _filter rule_, is a set of custom criteria that specifies which findings to include or exclude from the results of a query for findings. You can also configure a findings filter to suppress (automatically archive) findings that match the filter's criteria. For more information, see [Filtering Macie findings](https://docs.aws.amazon.com/macie/latest/user/findings-filter-overview.html) in the _Amazon Macie User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html */

export interface FindingCriteria {
  /**
   * - Specifies a condition that defines the property, operator, and one or more values to use to filter the results.
   * - _Required_: No
   * - _Type_: Object of [CriterionAdditionalProperties](./aws-properties-macie-findingsfilter-criterionadditionalproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#cfn-macie-findingsfilter-findingcriteria-criterion */
  Criterion?: Record<string, CriterionAdditionalProperties>
}

/**
 * The `AWS::Macie::FindingsFilter` resource specifies a findings filter. In Amazon Macie, a _findings filter_, also referred to as a _filter rule_, is a set of custom criteria that specifies which findings to include or exclude from the results of a query for findings. The criteria can help you identify and focus on findings that have specific characteristics, such as severity, type, or the name of an affected AWS resource. You can also configure a findings filter to suppress (automatically archive) findings that match the filter's criteria. For more information, see [Filtering Macie findings](https://docs.aws.amazon.com/macie/latest/user/findings-filter-overview.html) in the _Amazon Macie User Guide_.
 * An `AWS::Macie::Session` resource must exist for an AWS account before you can create an `AWS::Macie::FindingsFilter` resource for the account. Use a [DependsOn attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) to ensure that an `AWS::Macie::Session` resource is created before other Macie resources are created for an account. For example, `"DependsOn": "Session"`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html */

export interface MacieFindingsFilter extends ResourceAttributes {
  Type: 'AWS::Macie::FindingsFilter'
  Properties: {
    /**
     * - The action to perform on findings that match the filter criteria (`FindingCriteria`). Valid values are:
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ARCHIVE | NOOP`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#cfn-macie-findingsfilter-action */
    Action?: string | Intrinsic
    /**
     * - A custom description of the findings filter. The description can contain 1-512 characters.
     * - Avoid including sensitive data in the description. Users of the account might be able to see the description, depending on the actions that they're allowed to perform in Amazon Macie.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#cfn-macie-findingsfilter-description */
    Description?: string | Intrinsic
    /**
     * - The criteria to use to filter findings.
     * - _Required_: Yes
     * - _Type_: [FindingCriteria](./aws-properties-macie-findingsfilter-findingcriteria.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#cfn-macie-findingsfilter-findingcriteria */
    FindingCriteria: FindingCriteria
    /**
     * - A custom name for the findings filter. The name can contain 3-64 characters.
     * - Avoid including sensitive data in the name. Users of the account might be able to see the name, depending on the actions that they're allowed to perform in Amazon Macie.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#cfn-macie-findingsfilter-name */
    Name: string | Intrinsic
    /**
     * - The position of the findings filter in the list of saved filter rules on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to findings.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#cfn-macie-findingsfilter-position */
    Position?: number | Intrinsic
    /**
     * - An array of key-value pairs to apply to the findings filter.
     * - For more information, see [Resource tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-macie-findingsfilter-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-macie-findingsfilter.html#cfn-macie-findingsfilter-tags */
    Tags?: Tag[]
  }
}
