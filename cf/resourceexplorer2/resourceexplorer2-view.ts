import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A search filter defines which resources can be part of a search query result set.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-view.html */

export interface SearchFilter {
  /**
   * - The string that contains the search keywords, prefixes, and operators to control the results that can be returned by a Search operation.
   * - For information about the supported syntax, see [Search query reference](https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html) in the _AWS Resource Explorer User Guide_.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-view.html#cfn-resourceexplorer2-view-searchfilter-filterstring */
  FilterString: string | Intrinsic
}

/**
 * Information about an additional property that describes a resource, that you can optionally include in a view.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-view.html */

export interface IncludedProperty {
  /**
   * - The name of the property that is included in this view.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1011`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-view.html#cfn-resourceexplorer2-view-includedproperty-name */
  Name: string | Intrinsic
}

/**
 * Creates a view that users can query by using the [Search](https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_Search.html) operation. Results from queries that you make using this view include only resources that match the view's `Filters`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-view.html */

export interface ResourceExplorer2View extends ResourceAttributes {
  Type: 'AWS::ResourceExplorer2::View'
  Properties: {
    /**
     * - An array of strings that include search keywords, prefixes, and operators that filter the results that are returned for queries made using this view. When you use this view in a [Search](https://docs.aws.amazon.com/resource-explorer/latest/apireference/API_Search.html) operation, the filter string is combined with the search's `QueryString` parameter using a logical `AND` operator.
     * - For information about the supported syntax, see [Search query reference for Resource Explorer](https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html) in the _AWS Resource Explorer User Guide_.
     * - _Required_: No
     * - _Type_: [SearchFilter](./aws-properties-resourceexplorer2-view-searchfilter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-view.html#cfn-resourceexplorer2-view-filters */
    Filters?: SearchFilter
    /**
     * - A list of fields that provide additional information about the view.
     * - _Required_: No
     * - _Type_: Array of [IncludedProperty](./aws-properties-resourceexplorer2-view-includedproperty.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-view.html#cfn-resourceexplorer2-view-includedproperties */
    IncludedProperties?: IncludedProperty[]
    /**
     * - The root ARN of the account, an organizational unit (OU), or an organization ARN. If left empty, the default is account.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-view.html#cfn-resourceexplorer2-view-scope */
    Scope?: string | Intrinsic
    /**
     * - Tag key and value pairs that are attached to the view.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.+`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-view.html#cfn-resourceexplorer2-view-tags */
    Tags?: Record<string, string | Intrinsic>
    /**
     * - The name of the new view.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9\-]{1,64}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-view.html#cfn-resourceexplorer2-view-viewname */
    ViewName: string | Intrinsic
  }
}
