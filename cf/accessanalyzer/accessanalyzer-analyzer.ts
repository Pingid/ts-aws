import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A key-value pair to associate with a resource. A tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html */

export interface Tag {
  /**
   * - The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with `aws:`. digits, whitespace, `_`, `.`, `:`, `/`, `=`, `+`, `@`, `-`, and `"`.
   * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `127`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html#cfn-accessanalyzer-analyzer-tag-key */
  Key: string | Intrinsic
  /**
   * - The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
   * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html#cfn-accessanalyzer-analyzer-tag-value */
  Value: string | Intrinsic
}

/**
 * Contains information about an unused access analyzer.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html */

export interface UnusedAccessConfiguration {
  /**
   * - The specified access age in days for which to generate findings for unused access. For example, if you specify 90 days, the analyzer will generate findings for IAM entities within the accounts of the selected organization for any access that hasn't been used in 90 or more days since the analyzer's last scan. You can choose a value between 1 and 180 days.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `180`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html#cfn-accessanalyzer-analyzer-unusedaccessconfiguration-unusedaccessage */
  UnusedAccessAge?: number | Intrinsic
}

/**
 * The criteria that defines the archive rule.
 * To learn about filter keys that you can use to create an archive rule, see [AWS Identity and Access Management Access Analyzer filter keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html) in the _AWS Identity and Access Management User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html */

export interface Filter {
  /**
   * - A "contains" condition to match for the rule.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html#cfn-accessanalyzer-analyzer-filter-contains */
  Contains?: (string | Intrinsic)[]
  /**
   * - An "equals" condition to match for the rule.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html#cfn-accessanalyzer-analyzer-filter-eq */
  Eq?: (string | Intrinsic)[]
  /**
   * - An "exists" condition to match for the rule.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html#cfn-accessanalyzer-analyzer-filter-exists */
  Exists?: boolean | Intrinsic
  /**
   * - A "not equal" condition to match for the rule.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html#cfn-accessanalyzer-analyzer-filter-neq */
  Neq?: (string | Intrinsic)[]
  /**
   * - The property used to define the criteria in the filter for the rule.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html#cfn-accessanalyzer-analyzer-filter-property */
  Property: string | Intrinsic
}

/**
 * Contains information about the configuration of an unused access analyzer for an AWS organization or account.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html */

export interface AnalyzerConfiguration {
  /**
   * - Specifies the configuration of an unused access analyzer for an AWS organization or account. External access analyzers do not support any configuration.
   * - _Required_: No
   * - _Type_: [UnusedAccessConfiguration](./aws-properties-accessanalyzer-analyzer-unusedaccessconfiguration.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html#cfn-accessanalyzer-analyzer-analyzerconfiguration-unusedaccessconfiguration */
  UnusedAccessConfiguration?: UnusedAccessConfiguration
}

/**
 * Contains information about an archive rule.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html */

export interface ArchiveRule {
  /**
   * - The criteria for the rule.
   * - _Required_: Yes
   * - _Type_: [Array](./aws-properties-accessanalyzer-analyzer-filter.html) of [Filter](./aws-properties-accessanalyzer-analyzer-filter.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html#cfn-accessanalyzer-analyzer-archiverule-filter */
  Filter: Filter[]
  /**
   * - The name of the rule to create.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[A-Za-z][A-Za-z0-9_.-]*`
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html#cfn-accessanalyzer-analyzer-archiverule-rulename */
  RuleName: string | Intrinsic
}

/**
 * The `AWS::AccessAnalyzer::Analyzer` resource specifies a new analyzer. The analyzer is an object that represents the IAM Access Analyzer feature. An analyzer is required for Access Analyzer to become operational.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html */

export interface AccessAnalyzerAnalyzer extends ResourceAttributes {
  Type: 'AWS::AccessAnalyzer::Analyzer'
  Properties: {
    /**
     * - Contains information about the configuration of an unused access analyzer for an AWS organization or account.
     * - _Required_: No
     * - _Type_: [AnalyzerConfiguration](./aws-properties-accessanalyzer-analyzer-analyzerconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html#cfn-accessanalyzer-analyzer-analyzerconfiguration */
    AnalyzerConfiguration?: AnalyzerConfiguration
    /**
     * - The name of the analyzer.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html#cfn-accessanalyzer-analyzer-analyzername */
    AnalyzerName?: string | Intrinsic
    /**
     * - Specifies the archive rules to add for the analyzer. Archive rules automatically archive findings that meet the criteria you define for the rule.
     * - _Required_: No
     * - _Type_: Array of [ArchiveRule](./aws-properties-accessanalyzer-analyzer-archiverule.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html#cfn-accessanalyzer-analyzer-archiverules */
    ArchiveRules?: ArchiveRule[]
    /**
     * - An array of key-value pairs to apply to the analyzer.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-accessanalyzer-analyzer-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html#cfn-accessanalyzer-analyzer-tags */
    Tags?: Tag[]
    /**
     * - The type represents the zone of trust for the analyzer.
     * - _Allowed Values_: ACCOUNT | ORGANIZATION | ACCOUNT\_UNUSED\_ACCESS | ORGANIZATION\_UNUSED\_ACCESS
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-accessanalyzer-analyzer.html#cfn-accessanalyzer-analyzer-type */
    Type: string | Intrinsic
  }
}
