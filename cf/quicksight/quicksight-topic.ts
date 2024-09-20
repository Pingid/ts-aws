import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Represents a column in a dataset.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface TopicColumn {
  /**
   * - The type of aggregation that is performed on the column data when it's queried.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SUM | MAX | MIN | COUNT | DISTINCT_COUNT | AVERAGE | MEDIAN | STDEV | STDEVP | VAR | VARP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccolumn-aggregation */
  Aggregation?: string | Intrinsic
  /**
   * - The list of aggregation types that are allowed for the column. Valid values for this structure are `COUNT`, `DISTINCT_COUNT`, `MIN`, `MAX`, `MEDIAN`, `SUM`, `AVERAGE`, `STDEV`, `STDEVP`, `VAR`, `VARP`, and `PERCENTILE`.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccolumn-allowedaggregations */
  AllowedAggregations?: (string | Intrinsic)[]
  /**
   * - The other names or aliases for the column cell value.
   * - _Required_: No
   * - _Type_: Array of [CellValueSynonym](./aws-properties-quicksight-topic-cellvaluesynonym.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccolumn-cellvaluesynonyms */
  CellValueSynonyms?: CellValueSynonym[]
  /**
   * - The role of the column in the data. Valid values are `DIMENSION` and `MEASURE`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `DIMENSION | MEASURE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccolumn-columndatarole */
  ColumnDataRole?: string | Intrinsic
  /**
   * - A description of the column and its contents.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccolumn-columndescription */
  ColumnDescription?: string | Intrinsic
  /**
   * - A user-friendly name for the column.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccolumn-columnfriendlyname */
  ColumnFriendlyName?: string | Intrinsic
  /**
   * - The name of the column.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccolumn-columnname */
  ColumnName: string | Intrinsic
  /**
   * - The other names or aliases for the column.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccolumn-columnsynonyms */
  ColumnSynonyms?: (string | Intrinsic)[]
  /**
   * - The order in which data is displayed for the column when it's used in a comparative context.
   * - _Required_: No
   * - _Type_: [ComparativeOrder](./aws-properties-quicksight-topic-comparativeorder.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccolumn-comparativeorder */
  ComparativeOrder?: ComparativeOrder
  /**
   * - The default formatting used for values in the column.
   * - _Required_: No
   * - _Type_: [DefaultFormatting](./aws-properties-quicksight-topic-defaultformatting.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccolumn-defaultformatting */
  DefaultFormatting?: DefaultFormatting
  /**
   * - A Boolean value that indicates whether the column shows in the autocomplete functionality.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccolumn-disableindexing */
  DisableIndexing?: boolean | Intrinsic
  /**
   * - A Boolean value that indicates whether the column is included in the query results.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccolumn-isincludedintopic */
  IsIncludedInTopic?: boolean | Intrinsic
  /**
   * - A Boolean value that indicates whether to aggregate the column data when it's used in a filter context.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccolumn-neveraggregateinfilter */
  NeverAggregateInFilter?: boolean | Intrinsic
  /**
   * - The non additive value for the column.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccolumn-nonadditive */
  NonAdditive?: boolean | Intrinsic
  /**
   * - The list of aggregation types that are not allowed for the column. Valid values for this structure are `COUNT`, `DISTINCT_COUNT`, `MIN`, `MAX`, `MEDIAN`, `SUM`, `AVERAGE`, `STDEV`, `STDEVP`, `VAR`, `VARP`, and `PERCENTILE`.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccolumn-notallowedaggregations */
  NotAllowedAggregations?: (string | Intrinsic)[]
  /**
   * - The semantic type of data contained in the column.
   * - _Required_: No
   * - _Type_: [SemanticType](./aws-properties-quicksight-topic-semantictype.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccolumn-semantictype */
  SemanticType?: SemanticType
  /**
   * - The level of time precision that is used to aggregate `DateTime` values.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SECOND | MINUTE | HOUR | DAY | WEEK | MONTH | QUARTER | YEAR`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccolumn-timegranularity */
  TimeGranularity?: string | Intrinsic
}

/**
 * The definition of a data aggregation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface DataAggregation {
  /**
   * - The level of time precision that is used to aggregate `DateTime` values.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SECOND | MINUTE | HOUR | DAY | WEEK | MONTH | QUARTER | YEAR`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-dataaggregation-datasetrowdategranularity */
  DatasetRowDateGranularity?: string | Intrinsic
  /**
   * - The column name for the default date.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-dataaggregation-defaultdatecolumnname */
  DefaultDateColumnName?: string | Intrinsic
}

/**
 * A structure that represents the cell value synonym.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface CellValueSynonym {
  /**
   * - The cell value.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-cellvaluesynonym-cellvalue */
  CellValue?: string | Intrinsic
  /**
   * - Other names or aliases for the cell value.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-cellvaluesynonym-synonyms */
  Synonyms?: (string | Intrinsic)[]
}

/**
 * The order in which data is displayed for the column when it's used in a comparative context.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface ComparativeOrder {
  /**
   * - The list of columns to be used in the ordering.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-comparativeorder-specifedorder */
  SpecifedOrder?: (string | Intrinsic)[]
  /**
   * - The treat of undefined specified values. Valid values for this structure are `LEAST` and `MOST`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `LEAST | MOST`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-comparativeorder-treatundefinedspecifiedvalues */
  TreatUndefinedSpecifiedValues?: string | Intrinsic
  /**
   * - The ordering type for a column. Valid values for this structure are `GREATER_IS_BETTER`, `LESSER_IS_BETTER` and `SPECIFIED`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `GREATER_IS_BETTER | LESSER_IS_BETTER | SPECIFIED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-comparativeorder-useordering */
  UseOrdering?: string | Intrinsic
}

/**
 * A structure that represents a semantic type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface SemanticType {
  /**
   * - The semantic type falsey cell value.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-semantictype-falseycellvalue */
  FalseyCellValue?: string | Intrinsic
  /**
   * - The other names or aliases for the false cell value.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-semantictype-falseycellvaluesynonyms */
  FalseyCellValueSynonyms?: (string | Intrinsic)[]
  /**
   * - The semantic type sub type name.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-semantictype-subtypename */
  SubTypeName?: string | Intrinsic
  /**
   * - The semantic type truthy cell value.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-semantictype-truthycellvalue */
  TruthyCellValue?: string | Intrinsic
  /**
   * - The other names or aliases for the true cell value.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-semantictype-truthycellvaluesynonyms */
  TruthyCellValueSynonyms?: (string | Intrinsic)[]
  /**
   * - The semantic type name.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-semantictype-typename */
  TypeName?: string | Intrinsic
  /**
   * - The semantic type parameters.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `.+`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-semantictype-typeparameters */
  TypeParameters?: Record<string, string | Intrinsic>
}

/**
 * A filter that filters topics based on the value of a numeric field. The filter includes only topics whose numeric field value falls within the specified range.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface TopicNumericRangeFilter {
  /**
   * - An aggregation function that specifies how to calculate the value of a numeric field for a topic, Valid values for this structure are `NO_AGGREGATION`, `SUM`, `AVERAGE`, `COUNT`, `DISTINCT_COUNT`, `MAX`, `MEDIAN`, `MIN`, `STDEV`, `STDEVP`, `VAR`, and `VARP`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NO_AGGREGATION | SUM | AVERAGE | COUNT | DISTINCT_COUNT | MAX | MEDIAN | MIN | STDEV | STDEVP | VAR | VARP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicnumericrangefilter-aggregation */
  Aggregation?: string | Intrinsic
  /**
   * - The constant used in a numeric range filter.
   * - _Required_: No
   * - _Type_: [TopicRangeFilterConstant](./aws-properties-quicksight-topic-topicrangefilterconstant.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicnumericrangefilter-constant */
  Constant?: TopicRangeFilterConstant
  /**
   * - A Boolean value that indicates whether the endpoints of the numeric range are included in the filter. If set to true, topics whose numeric field value is equal to the endpoint values will be included in the filter. If set to false, topics whose numeric field value is equal to the endpoint values will be excluded from the filter.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicnumericrangefilter-inclusive */
  Inclusive?: boolean | Intrinsic
}

/**
 * A structure that represents a relative date filter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface TopicRelativeDateFilter {
  /**
   * - The constant used in a relative date filter.
   * - _Required_: No
   * - _Type_: [TopicSingularFilterConstant](./aws-properties-quicksight-topic-topicsingularfilterconstant.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicrelativedatefilter-constant */
  Constant?: TopicSingularFilterConstant
  /**
   * - The function to be used in a relative date filter to determine the range of dates to include in the results. Valid values for this structure are `BEFORE`, `AFTER`, and `BETWEEN`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PREVIOUS | THIS | LAST | NEXT | NOW`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicrelativedatefilter-relativedatefilterfunction */
  RelativeDateFilterFunction?: string | Intrinsic
  /**
   * - The level of time precision that is used to aggregate `DateTime` values.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SECOND | MINUTE | HOUR | DAY | WEEK | MONTH | QUARTER | YEAR`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicrelativedatefilter-timegranularity */
  TimeGranularity?: string | Intrinsic
}

/**
 * A structure that represents a semantic entity type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface SemanticEntityType {
  /**
   * - The semantic entity sub type name.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-semanticentitytype-subtypename */
  SubTypeName?: string | Intrinsic
  /**
   * - The semantic entity type name.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-semanticentitytype-typename */
  TypeName?: string | Intrinsic
  /**
   * - The semantic entity type parameters.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `.+`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-semanticentitytype-typeparameters */
  TypeParameters?: Record<string, string | Intrinsic>
}

/**
 * A structure that represents a singular filter constant, used in filters to specify a single value to match against.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface TopicSingularFilterConstant {
  /**
   * - The type of the singular filter constant. Valid values for this structure are `SINGULAR`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SINGULAR | RANGE | COLLECTIVE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicsingularfilterconstant-constanttype */
  ConstantType?: string | Intrinsic
  /**
   * - The value of the singular filter constant.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicsingularfilterconstant-singularconstant */
  SingularConstant?: string | Intrinsic
}

/**
 * A structure that represents a metric.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface NamedEntityDefinitionMetric {
  /**
   * - The aggregation of a named entity. Valid values for this structure are `SUM`, `MIN`, `MAX`, `COUNT`, `AVERAGE`, `DISTINCT_COUNT`, `STDEV`, `STDEVP`, `VAR`, `VARP`, `PERCENTILE`, `MEDIAN`, and `CUSTOM`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SUM | MIN | MAX | COUNT | AVERAGE | DISTINCT_COUNT | STDEV | STDEVP | VAR | VARP | PERCENTILE | MEDIAN | CUSTOM`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-namedentitydefinitionmetric-aggregation */
  Aggregation?: string | Intrinsic
  /**
   * - The additional parameters for an aggregation function.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `.+`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-namedentitydefinitionmetric-aggregationfunctionparameters */
  AggregationFunctionParameters?: Record<string, string | Intrinsic>
}

/**
 * A structure that represents a negative format.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface NegativeFormat {
  /**
   * - The prefix for a negative format.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-negativeformat-prefix */
  Prefix?: string | Intrinsic
  /**
   * - The suffix for a negative format.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-negativeformat-suffix */
  Suffix?: string | Intrinsic
}

/**
 * A structure that represents a collective constant.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface CollectiveConstant {
  /**
   * - A list of values for the collective constant.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-collectiveconstant-valuelist */
  ValueList?: (string | Intrinsic)[]
}

/**
 * The value of the constant that is used to specify the endpoints of a range filter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface RangeConstant {
  /**
   * - The maximum value for a range constant.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-rangeconstant-maximum */
  Maximum?: string | Intrinsic
  /**
   * - The minimum value for a range constant.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-rangeconstant-minimum */
  Minimum?: string | Intrinsic
}

/**
 * A filter that filters topics based on the value of a numeric field. The filter includes only topics whose numeric field value matches the specified value.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface TopicNumericEqualityFilter {
  /**
   * - An aggregation function that specifies how to calculate the value of a numeric field for a topic. Valid values for this structure are `NO_AGGREGATION`, `SUM`, `AVERAGE`, `COUNT`, `DISTINCT_COUNT`, `MAX`, `MEDIAN`, `MIN`, `STDEV`, `STDEVP`, `VAR`, and `VARP`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NO_AGGREGATION | SUM | AVERAGE | COUNT | DISTINCT_COUNT | MAX | MEDIAN | MIN | STDEV | STDEVP | VAR | VARP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicnumericequalityfilter-aggregation */
  Aggregation?: string | Intrinsic
  /**
   * - The constant used in a numeric equality filter.
   * - _Required_: No
   * - _Type_: [TopicSingularFilterConstant](./aws-properties-quicksight-topic-topicsingularfilterconstant.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicnumericequalityfilter-constant */
  Constant?: TopicSingularFilterConstant
}

/**
 * A structure that represents a named entity.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface NamedEntityDefinition {
  /**
   * - The name of the entity.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-namedentitydefinition-fieldname */
  FieldName?: string | Intrinsic
  /**
   * - The definition of a metric.
   * - _Required_: No
   * - _Type_: [NamedEntityDefinitionMetric](./aws-properties-quicksight-topic-namedentitydefinitionmetric.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-namedentitydefinition-metric */
  Metric?: NamedEntityDefinitionMetric
  /**
   * - The property name to be used for the named entity.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-namedentitydefinition-propertyname */
  PropertyName?: string | Intrinsic
  /**
   * - The property role. Valid values for this structure are `PRIMARY` and `ID`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PRIMARY | ID`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-namedentitydefinition-propertyrole */
  PropertyRole?: string | Intrinsic
  /**
   * - The property usage. Valid values for this structure are `INHERIT`, `DIMENSION`, and `MEASURE`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `INHERIT | DIMENSION | MEASURE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-namedentitydefinition-propertyusage */
  PropertyUsage?: string | Intrinsic
}

/**
 * A structure that represents additional options for display formatting.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface DisplayFormatOptions {
  /**
   * - Determines the blank cell format.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-displayformatoptions-blankcellformat */
  BlankCellFormat?: string | Intrinsic
  /**
   * - The currency symbol, such as `USD`.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-displayformatoptions-currencysymbol */
  CurrencySymbol?: string | Intrinsic
  /**
   * - Determines the `DateTime` format.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-displayformatoptions-dateformat */
  DateFormat?: string | Intrinsic
  /**
   * - Determines the decimal separator.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `COMMA | DOT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-displayformatoptions-decimalseparator */
  DecimalSeparator?: string | Intrinsic
  /**
   * - Determines the number of fraction digits.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-displayformatoptions-fractiondigits */
  FractionDigits?: number | Intrinsic
  /**
   * - Determines the grouping separator.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-displayformatoptions-groupingseparator */
  GroupingSeparator?: string | Intrinsic
  /**
   * - The negative format.
   * - _Required_: No
   * - _Type_: [NegativeFormat](./aws-properties-quicksight-topic-negativeformat.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-displayformatoptions-negativeformat */
  NegativeFormat?: NegativeFormat
  /**
   * - The prefix value for a display format.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-displayformatoptions-prefix */
  Prefix?: string | Intrinsic
  /**
   * - The suffix value for a display format.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-displayformatoptions-suffix */
  Suffix?: string | Intrinsic
  /**
   * - The unit scaler. Valid values for this structure are: `NONE`, `AUTO`, `THOUSANDS`, `MILLIONS`, `BILLIONS`, and `TRILLIONS`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | AUTO | THOUSANDS | MILLIONS | BILLIONS | TRILLIONS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-displayformatoptions-unitscaler */
  UnitScaler?: string | Intrinsic
  /**
   * - A Boolean value that indicates whether to use blank cell format.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-displayformatoptions-useblankcellformat */
  UseBlankCellFormat?: boolean | Intrinsic
  /**
   * - A Boolean value that indicates whether to use grouping.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-displayformatoptions-usegrouping */
  UseGrouping?: boolean | Intrinsic
}

/**
 * A constant used in a category filter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface TopicCategoryFilterConstant {
  /**
   * - A collective constant used in a category filter. This element is used to specify a list of values for the constant.
   * - _Required_: No
   * - _Type_: [CollectiveConstant](./aws-properties-quicksight-topic-collectiveconstant.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccategoryfilterconstant-collectiveconstant */
  CollectiveConstant?: CollectiveConstant
  /**
   * - The type of category filter constant. This element is used to specify whether a constant is a singular or collective. Valid values are `SINGULAR` and `COLLECTIVE`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SINGULAR | RANGE | COLLECTIVE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccategoryfilterconstant-constanttype */
  ConstantType?: string | Intrinsic
  /**
   * - A singular constant used in a category filter. This element is used to specify a single value for the constant.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccategoryfilterconstant-singularconstant */
  SingularConstant?: string | Intrinsic
}

/**
 * A constant value that is used in a range filter to specify the endpoints of the range.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface TopicRangeFilterConstant {
  /**
   * - The data type of the constant value that is used in a range filter. Valid values for this structure are `RANGE`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SINGULAR | RANGE | COLLECTIVE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicrangefilterconstant-constanttype */
  ConstantType?: string | Intrinsic
  /**
   * - The value of the constant that is used to specify the endpoints of a range filter.
   * - _Required_: No
   * - _Type_: [RangeConstant](./aws-properties-quicksight-topic-rangeconstant.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicrangefilterconstant-rangeconstant */
  RangeConstant?: RangeConstant
}

/**
 * A structure that represents a named entity.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface TopicNamedEntity {
  /**
   * - The definition of a named entity.
   * - _Required_: No
   * - _Type_: Array of [NamedEntityDefinition](./aws-properties-quicksight-topic-namedentitydefinition.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicnamedentity-definition */
  Definition?: NamedEntityDefinition[]
  /**
   * - The description of the named entity.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicnamedentity-entitydescription */
  EntityDescription?: string | Intrinsic
  /**
   * - The name of the named entity.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicnamedentity-entityname */
  EntityName: string | Intrinsic
  /**
   * - The other names or aliases for the named entity.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicnamedentity-entitysynonyms */
  EntitySynonyms?: (string | Intrinsic)[]
  /**
   * - The type of named entity that a topic represents.
   * - _Required_: No
   * - _Type_: [SemanticEntityType](./aws-properties-quicksight-topic-semanticentitytype.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicnamedentity-semanticentitytype */
  SemanticEntityType?: SemanticEntityType
}

/**
 * A structure that represents a default formatting definition.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface DefaultFormatting {
  /**
   * - The display format. Valid values for this structure are `AUTO`, `PERCENT`, `CURRENCY`, `NUMBER`, `DATE`, and `STRING`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `AUTO | PERCENT | CURRENCY | NUMBER | DATE | STRING`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-defaultformatting-displayformat */
  DisplayFormat?: string | Intrinsic
  /**
   * - The additional options for display formatting.
   * - _Required_: No
   * - _Type_: [DisplayFormatOptions](./aws-properties-quicksight-topic-displayformatoptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-defaultformatting-displayformatoptions */
  DisplayFormatOptions?: DisplayFormatOptions
}

/**
 * A structure that represents a category filter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface TopicCategoryFilter {
  /**
   * - The category filter function. Valid values for this structure are `EXACT` and `CONTAINS`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `EXACT | CONTAINS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccategoryfilter-categoryfilterfunction */
  CategoryFilterFunction?: string | Intrinsic
  /**
   * - The category filter type. This element is used to specify whether a filter is a simple category filter or an inverse category filter.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CUSTOM_FILTER | CUSTOM_FILTER_LIST | FILTER_LIST`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccategoryfilter-categoryfiltertype */
  CategoryFilterType?: string | Intrinsic
  /**
   * - The constant used in a category filter.
   * - _Required_: No
   * - _Type_: [TopicCategoryFilterConstant](./aws-properties-quicksight-topic-topiccategoryfilterconstant.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccategoryfilter-constant */
  Constant?: TopicCategoryFilterConstant
  /**
   * - A Boolean value that indicates if the filter is inverse.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccategoryfilter-inverse */
  Inverse?: boolean | Intrinsic
}

/**
 * A filter used to restrict data based on a range of dates or times.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface TopicDateRangeFilter {
  /**
   * - The constant used in a date range filter.
   * - _Required_: No
   * - _Type_: [TopicRangeFilterConstant](./aws-properties-quicksight-topic-topicrangefilterconstant.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicdaterangefilter-constant */
  Constant?: TopicRangeFilterConstant
  /**
   * - A Boolean value that indicates whether the date range filter should include the boundary values. If set to true, the filter includes the start and end dates. If set to false, the filter excludes them.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicdaterangefilter-inclusive */
  Inclusive?: boolean | Intrinsic
}

/**
 * A structure that represents a calculated field.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface TopicCalculatedField {
  /**
   * - The default aggregation. Valid values for this structure are `SUM`, `MAX`, `MIN`, `COUNT`, `DISTINCT_COUNT`, and `AVERAGE`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SUM | MAX | MIN | COUNT | DISTINCT_COUNT | AVERAGE | MEDIAN | STDEV | STDEVP | VAR | VARP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccalculatedfield-aggregation */
  Aggregation?: string | Intrinsic
  /**
   * - The list of aggregation types that are allowed for the calculated field. Valid values for this structure are `COUNT`, `DISTINCT_COUNT`, `MIN`, `MAX`, `MEDIAN`, `SUM`, `AVERAGE`, `STDEV`, `STDEVP`, `VAR`, `VARP`, and `PERCENTILE`.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccalculatedfield-allowedaggregations */
  AllowedAggregations?: (string | Intrinsic)[]
  /**
   * - The calculated field description.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccalculatedfield-calculatedfielddescription */
  CalculatedFieldDescription?: string | Intrinsic
  /**
   * - The calculated field name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccalculatedfield-calculatedfieldname */
  CalculatedFieldName: string | Intrinsic
  /**
   * - The other names or aliases for the calculated field.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccalculatedfield-calculatedfieldsynonyms */
  CalculatedFieldSynonyms?: (string | Intrinsic)[]
  /**
   * - The other names or aliases for the calculated field cell value.
   * - _Required_: No
   * - _Type_: Array of [CellValueSynonym](./aws-properties-quicksight-topic-cellvaluesynonym.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccalculatedfield-cellvaluesynonyms */
  CellValueSynonyms?: CellValueSynonym[]
  /**
   * - The column data role for a calculated field. Valid values for this structure are `DIMENSION` and `MEASURE`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `DIMENSION | MEASURE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccalculatedfield-columndatarole */
  ColumnDataRole?: string | Intrinsic
  /**
   * - The order in which data is displayed for the calculated field when it's used in a comparative context.
   * - _Required_: No
   * - _Type_: [ComparativeOrder](./aws-properties-quicksight-topic-comparativeorder.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccalculatedfield-comparativeorder */
  ComparativeOrder?: ComparativeOrder
  /**
   * - The default formatting definition.
   * - _Required_: No
   * - _Type_: [DefaultFormatting](./aws-properties-quicksight-topic-defaultformatting.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccalculatedfield-defaultformatting */
  DefaultFormatting?: DefaultFormatting
  /**
   * - A Boolean value that indicates if a calculated field is visible in the autocomplete.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccalculatedfield-disableindexing */
  DisableIndexing?: boolean | Intrinsic
  /**
   * - The calculated field expression.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccalculatedfield-expression */
  Expression: string | Intrinsic
  /**
   * - A boolean value that indicates if a calculated field is included in the topic.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccalculatedfield-isincludedintopic */
  IsIncludedInTopic?: boolean | Intrinsic
  /**
   * - A Boolean value that indicates whether to never aggregate calculated field in filters.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccalculatedfield-neveraggregateinfilter */
  NeverAggregateInFilter?: boolean | Intrinsic
  /**
   * - The non additive for the table style target.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccalculatedfield-nonadditive */
  NonAdditive?: boolean | Intrinsic
  /**
   * - The list of aggregation types that are not allowed for the calculated field. Valid values for this structure are `COUNT`, `DISTINCT_COUNT`, `MIN`, `MAX`, `MEDIAN`, `SUM`, `AVERAGE`, `STDEV`, `STDEVP`, `VAR`, `VARP`, and `PERCENTILE`.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccalculatedfield-notallowedaggregations */
  NotAllowedAggregations?: (string | Intrinsic)[]
  /**
   * - The semantic type.
   * - _Required_: No
   * - _Type_: [SemanticType](./aws-properties-quicksight-topic-semantictype.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccalculatedfield-semantictype */
  SemanticType?: SemanticType
  /**
   * - The level of time precision that is used to aggregate `DateTime` values.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SECOND | MINUTE | HOUR | DAY | WEEK | MONTH | QUARTER | YEAR`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topiccalculatedfield-timegranularity */
  TimeGranularity?: string | Intrinsic
}

/**
 * A structure that represents a filter used to select items for a topic.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface TopicFilter {
  /**
   * - The category filter that is associated with this filter.
   * - _Required_: No
   * - _Type_: [TopicCategoryFilter](./aws-properties-quicksight-topic-topiccategoryfilter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicfilter-categoryfilter */
  CategoryFilter?: TopicCategoryFilter
  /**
   * - The date range filter.
   * - _Required_: No
   * - _Type_: [TopicDateRangeFilter](./aws-properties-quicksight-topic-topicdaterangefilter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicfilter-daterangefilter */
  DateRangeFilter?: TopicDateRangeFilter
  /**
   * - The class of the filter. Valid values for this structure are `ENFORCED_VALUE_FILTER`, `CONDITIONAL_VALUE_FILTER`, and `NAMED_VALUE_FILTER`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ENFORCED_VALUE_FILTER | CONDITIONAL_VALUE_FILTER | NAMED_VALUE_FILTER`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicfilter-filterclass */
  FilterClass?: string | Intrinsic
  /**
   * - A description of the filter used to select items for a topic.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicfilter-filterdescription */
  FilterDescription?: string | Intrinsic
  /**
   * - The name of the filter.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicfilter-filtername */
  FilterName: string | Intrinsic
  /**
   * - The other names or aliases for the filter.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicfilter-filtersynonyms */
  FilterSynonyms?: (string | Intrinsic)[]
  /**
   * - The type of the filter. Valid values for this structure are `CATEGORY_FILTER`, `NUMERIC_EQUALITY_FILTER`, `NUMERIC_RANGE_FILTER`, `DATE_RANGE_FILTER`, and `RELATIVE_DATE_FILTER`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CATEGORY_FILTER | NUMERIC_EQUALITY_FILTER | NUMERIC_RANGE_FILTER | DATE_RANGE_FILTER | RELATIVE_DATE_FILTER`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicfilter-filtertype */
  FilterType?: string | Intrinsic
  /**
   * - The numeric equality filter.
   * - _Required_: No
   * - _Type_: [TopicNumericEqualityFilter](./aws-properties-quicksight-topic-topicnumericequalityfilter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicfilter-numericequalityfilter */
  NumericEqualityFilter?: TopicNumericEqualityFilter
  /**
   * - The numeric range filter.
   * - _Required_: No
   * - _Type_: [TopicNumericRangeFilter](./aws-properties-quicksight-topic-topicnumericrangefilter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicfilter-numericrangefilter */
  NumericRangeFilter?: TopicNumericRangeFilter
  /**
   * - The name of the field that the filter operates on.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicfilter-operandfieldname */
  OperandFieldName: string | Intrinsic
  /**
   * - The relative date filter.
   * - _Required_: No
   * - _Type_: [TopicRelativeDateFilter](./aws-properties-quicksight-topic-topicrelativedatefilter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicfilter-relativedatefilter */
  RelativeDateFilter?: TopicRelativeDateFilter
}

/**
 * A structure that represents a dataset.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface DatasetMetadata {
  /**
   * - The list of calculated field definitions.
   * - _Required_: No
   * - _Type_: Array of [TopicCalculatedField](./aws-properties-quicksight-topic-topiccalculatedfield.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-datasetmetadata-calculatedfields */
  CalculatedFields?: TopicCalculatedField[]
  /**
   * - The list of column definitions.
   * - _Required_: No
   * - _Type_: Array of [TopicColumn](./aws-properties-quicksight-topic-topiccolumn.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-datasetmetadata-columns */
  Columns?: TopicColumn[]
  /**
   * - The definition of a data aggregation.
   * - _Required_: No
   * - _Type_: [DataAggregation](./aws-properties-quicksight-topic-dataaggregation.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-datasetmetadata-dataaggregation */
  DataAggregation?: DataAggregation
  /**
   * - The Amazon Resource Name (ARN) of the dataset.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-datasetmetadata-datasetarn */
  DatasetArn: string | Intrinsic
  /**
   * - The description of the dataset.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-datasetmetadata-datasetdescription */
  DatasetDescription?: string | Intrinsic
  /**
   * - The name of the dataset.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-datasetmetadata-datasetname */
  DatasetName?: string | Intrinsic
  /**
   * - The list of filter definitions.
   * - _Required_: No
   * - _Type_: Array of [TopicFilter](./aws-properties-quicksight-topic-topicfilter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-datasetmetadata-filters */
  Filters?: TopicFilter[]
  /**
   * - The list of named entities definitions.
   * - _Required_: No
   * - _Type_: Array of [TopicNamedEntity](./aws-properties-quicksight-topic-topicnamedentity.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-datasetmetadata-namedentities */
  NamedEntities?: TopicNamedEntity[]
}

/**
 * Creates a new Q topic.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html */

export interface QuickSightTopic extends ResourceAttributes {
  Type: 'AWS::QuickSight::Topic'
  Properties: {
    /**
     * - The ID of the AWS account that you want to create a topic in.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[0-9]{12}$`
     * - _Minimum_: `12`
     * - _Maximum_: `12`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-awsaccountid */
    AwsAccountId?: string | Intrinsic
    /**
     * - The data sets that the topic is associated with.
     * - _Required_: No
     * - _Type_: Array of [DatasetMetadata](./aws-properties-quicksight-topic-datasetmetadata.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-datasets */
    DataSets?: DatasetMetadata[]
    /**
     * - The description of the topic.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-description */
    Description?: string | Intrinsic
    /**
     * - The name of the topic.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-name */
    Name?: string | Intrinsic
    /**
     * - The ID for the topic. This ID is unique per AWS Region for each AWS account.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z0-9-_.\\+]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-topicid */
    TopicId?: string | Intrinsic
    /**
     * - The user experience version of the topic.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `LEGACY | NEW_READER_EXPERIENCE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-topic.html#cfn-quicksight-topic-userexperienceversion */
    UserExperienceVersion?: string | Intrinsic
  }
}
