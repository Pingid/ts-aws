import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Contains information about a composite model in an asset model. This object contains the asset property definitions that you define in the composite model.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html */

export interface AssetModelCompositeModel {
  /**
   * - The ID of a component model which is reused to create this composite model.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelcompositemodel-composedassetmodelid */
  ComposedAssetModelId?: string | Intrinsic
  /**
   * - The asset property definitions for this composite model.
   * - _Required_: No
   * - _Type_: Array of [AssetModelProperty](./aws-properties-iotsitewise-assetmodel-assetmodelproperty.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelcompositemodel-compositemodelproperties */
  CompositeModelProperties?: AssetModelProperty[]
  /**
   * - The description of the composite model.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelcompositemodel-description */
  Description?: string | Intrinsic
  /**
   * - The external ID of a composite model on this asset model. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the _AWS IoT SiteWise User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z0-9_][a-zA-Z_\-0-9.:]*[a-zA-Z0-9_]+`
   * - _Minimum_: `2`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelcompositemodel-externalid */
  ExternalId?: string | Intrinsic
  /**
   * - The ID of the asset model composite model.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   * - _Minimum_: `36`
   * - _Maximum_: `36`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelcompositemodel-id */
  Id?: string | Intrinsic
  /**
   * - The name of the composite model.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelcompositemodel-name */
  Name: string | Intrinsic
  /**
   * - The external ID of the parent composite model. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the _AWS IoT SiteWise User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z0-9_][a-zA-Z_\-0-9.:]*[a-zA-Z0-9_]+`
   * - _Minimum_: `2`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelcompositemodel-parentassetmodelcompositemodelexternalid */
  ParentAssetModelCompositeModelExternalId?: string | Intrinsic
  /**
   * - The structured path to the property from the root of the asset using property names. Path is used as the ID if the asset model is a derived composite model.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelcompositemodel-path */
  Path?: (string | Intrinsic)[]
  /**
   * - The type of the composite model. For alarm composite models, this type is `AWS/ALARM`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelcompositemodel-type */
  Type: string | Intrinsic
}

/**
 * Describes an asset hierarchy that contains a hierarchy's name, ID, and child asset model ID that specifies the type of asset that can be in this hierarchy.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html */

export interface AssetModelHierarchy {
  /**
   * - The ID of the asset model, in UUID format. All assets in this hierarchy must be instances of the `childAssetModelId` asset model. AWS IoT SiteWise will always return the actual asset model ID for this value. However, when you are specifying this value as part of a call to [UpdateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html), you may provide either the asset model ID or else `externalId:` followed by the asset model's external ID. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the _AWS IoT SiteWise User Guide_.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelhierarchy-childassetmodelid */
  ChildAssetModelId: string | Intrinsic
  /**
   * - The external ID (if any) provided in the [CreateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html) or [UpdateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html) operation. You can assign an external ID by specifying this value as part of a call to [UpdateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html). However, you can't change the external ID if one is already assigned. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the _AWS IoT SiteWise User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z0-9_][a-zA-Z_\-0-9.:]*[a-zA-Z0-9_]+`
   * - _Minimum_: `2`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelhierarchy-externalid */
  ExternalId?: string | Intrinsic
  /**
   * - The ID of the asset model hierarchy. This ID is a `hierarchyId`.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   * - _Minimum_: `36`
   * - _Maximum_: `36`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelhierarchy-id */
  Id?: string | Intrinsic
  /**
   * - The `LogicalID` of the asset model hierarchy. This ID is a `hierarchyLogicalId`.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[^\u0000-\u001F\u007F]+`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelhierarchy-logicalid */
  LogicalId?: string | Intrinsic
  /**
   * - The name of the asset model hierarchy that you specify by using the [CreateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html) or [UpdateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html) API operation.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelhierarchy-name */
  Name: string | Intrinsic
}

/**
 * A list of key-value pairs that contain metadata for the asset model. For more information, see [Tagging your AWS IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the _AWS IoT SiteWise User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html */

export interface Tag {
  /**
   * - The key or name that identifies the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-tag-value */
  Value: string | Intrinsic
}

/**
 * Contains an asset attribute property. For more information, see [Attributes](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes) in the _AWS IoT SiteWise User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html */

export interface Attribute {
  /**
   * - The default value of the asset model property attribute. All assets that you create from the asset model contain this attribute value. You can update an attribute's value after you create an asset. For more information, see [Updating attribute values](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-attribute-values.html) in the _AWS IoT SiteWise User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-attribute-defaultvalue */
  DefaultValue?: string | Intrinsic
}

/**
 * Contains an asset transform property. A transform is a one-to-one mapping of a property's data points from one form to another. For example, you can use a transform to convert a Celsius data stream to Fahrenheit by applying the transformation expression to each data point of the Celsius stream. A transform can only have a data type of `DOUBLE` and consume properties with data types of `INTEGER` or `DOUBLE`.
 * For more information, see [Transforms](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#transforms) in the _AWS IoT SiteWise User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html */

export interface Transform {
  /**
   * - The mathematical expression that defines the transformation function. You can specify up to 10 variables per expression. You can specify up to 10 functions per expression.
   * - For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the _AWS IoT SiteWise User Guide_.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-transform-expression */
  Expression: string | Intrinsic
  /**
   * - The list of variables used in the expression.
   * - _Required_: Yes
   * - _Type_: Array of [ExpressionVariable](./aws-properties-iotsitewise-assetmodel-expressionvariable.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-transform-variables */
  Variables: ExpressionVariable[]
}

/**
 * Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time window. You can use this window in metrics to aggregate data from properties and other assets.
 * You can use `m`, `h`, `d`, and `w` when you specify an interval or offset. Note that `m` represents minutes, `h` represents hours, `d` represents days, and `w` represents weeks. You can also use `s` to represent seconds in `offset`.
 * The `interval` and `offset` parameters support the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601). For example, `PT5S` represents 5 seconds, `PT5M` represents 5 minutes, and `PT5H` represents 5 hours.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html */

export interface TumblingWindow {
  /**
   * - The time interval for the tumbling window. The interval time must be between 1 minute and 1 week.
   * - AWS IoT SiteWise computes the `1w` interval the end of Sunday at midnight each week (UTC), the `1d` interval at the end of each day at midnight (UTC), the `1h` interval at the end of each hour, and so on.
   * - When AWS IoT SiteWise aggregates data points for metric computations, the start of each interval is exclusive and the end of each interval is inclusive. AWS IoT SiteWise places the computed data point at the end of the interval.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-tumblingwindow-interval */
  Interval: string | Intrinsic
  /**
   * - The offset for the tumbling window. The `offset` parameter accepts the following:
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-tumblingwindow-offset */
  Offset?: string | Intrinsic
}

/**
 * Represents one level between a composite model and the root of the asset model.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html */

export interface PropertyPathDefinition {
  /**
   * - The name of the path segment.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-propertypathdefinition-name */
  Name: string | Intrinsic
}

/**
 * Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html */

export interface MetricWindow {
  /**
   * - The tumbling time interval window.
   * - _Required_: No
   * - _Type_: [TumblingWindow](./aws-properties-iotsitewise-assetmodel-tumblingwindow.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-metricwindow-tumbling */
  Tumbling?: TumblingWindow
}

/**
 * Identifies a property value used in an expression.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html */

export interface VariableValue {
  /**
   * - The external ID of the hierarchy being referenced. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the _AWS IoT SiteWise User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z0-9_][a-zA-Z_\-0-9.:]*[a-zA-Z0-9_]+`
   * - _Minimum_: `2`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-variablevalue-hierarchyexternalid */
  HierarchyExternalId?: string | Intrinsic
  /**
   * - The ID of the hierarchy to query for the property ID. You can use the hierarchy's name instead of the hierarchy's ID. If the hierarchy has an external ID, you can specify `externalId:` followed by the external ID. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the _AWS IoT SiteWise User Guide_.
   * - You use a hierarchy ID instead of a model ID because you can have several hierarchies using the same model and therefore the same `propertyId`. For example, you might have separately grouped assets that come from the same asset model. For more information, see [Asset hierarchies](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html) in the _AWS IoT SiteWise User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   * - _Minimum_: `36`
   * - _Maximum_: `36`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-variablevalue-hierarchyid */
  HierarchyId?: string | Intrinsic
  /**
   * - The `LogicalID` of the hierarchy to query for the `PropertyLogicalID`.
   * - You use a `hierarchyLogicalID` instead of a model ID because you can have several hierarchies using the same model and therefore the same property. For example, you might have separately grouped assets that come from the same asset model. For more information, see [Defining relationships between asset models (hierarchies)](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html) in the _AWS IoT SiteWise User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[^\u0000-\u001F\u007F]+`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-variablevalue-hierarchylogicalid */
  HierarchyLogicalId?: string | Intrinsic
  /**
   * - The external ID of the property being referenced. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the _AWS IoT SiteWise User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z0-9_][a-zA-Z_\-0-9.:]*[a-zA-Z0-9_]+`
   * - _Minimum_: `2`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-variablevalue-propertyexternalid */
  PropertyExternalId?: string | Intrinsic
  /**
   * - The ID of the property to use as the variable. You can use the property `name` if it's from the same asset model. If the property has an external ID, you can specify `externalId:` followed by the external ID. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the _AWS IoT SiteWise User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   * - _Minimum_: `36`
   * - _Maximum_: `36`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-variablevalue-propertyid */
  PropertyId?: string | Intrinsic
  /**
   * - The `LogicalID` of the property that is being referenced.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[^\u0000-\u001F\u007F]+`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-variablevalue-propertylogicalid */
  PropertyLogicalId?: string | Intrinsic
  /**
   * - The path of the property. Each step of the path is the name of the step. See the following example:
   * - _Required_: No
   * - _Type_: Array of [PropertyPathDefinition](./aws-properties-iotsitewise-assetmodel-propertypathdefinition.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-variablevalue-propertypath */
  PropertyPath?: PropertyPathDefinition[]
}

/**
 * Contains expression variable information.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html */

export interface ExpressionVariable {
  /**
   * - The friendly name of the variable to be used in the expression.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-expressionvariable-name */
  Name: string | Intrinsic
  /**
   * - The variable that identifies an asset property from which to use values.
   * - _Required_: Yes
   * - _Type_: [VariableValue](./aws-properties-iotsitewise-assetmodel-variablevalue.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-expressionvariable-value */
  Value: VariableValue
}

/**
 * Contains an asset metric property. With metrics, you can calculate aggregate functions, such as an average, maximum, or minimum, as specified through an expression. A metric maps several values to a single value (such as a sum).
 * The maximum number of dependent/cascading variables used in any one metric calculation is 10. Therefore, a _root_ metric can have up to 10 cascading metrics in its computational dependency tree. Additionally, a metric can only have a data type of `DOUBLE` and consume properties with data types of `INTEGER` or `DOUBLE`.
 * For more information, see [Metrics](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#metrics) in the _AWS IoT SiteWise User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html */

export interface Metric {
  /**
   * - The mathematical expression that defines the metric aggregation function. You can specify up to 10 variables per expression. You can specify up to 10 functions per expression.
   * - For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the _AWS IoT SiteWise User Guide_.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-metric-expression */
  Expression: string | Intrinsic
  /**
   * - The list of variables used in the expression.
   * - _Required_: Yes
   * - _Type_: Array of [ExpressionVariable](./aws-properties-iotsitewise-assetmodel-expressionvariable.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-metric-variables */
  Variables: ExpressionVariable[]
  /**
   * - The window (time interval) over which AWS IoT SiteWise computes the metric's aggregation expression. AWS IoT SiteWise computes one data point per `window`.
   * - _Required_: Yes
   * - _Type_: [MetricWindow](./aws-properties-iotsitewise-assetmodel-metricwindow.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-metric-window */
  Window: MetricWindow
}

/**
 * Contains a property type, which can be one of `attribute`, `measurement`, `metric`, or `transform`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html */

export interface PropertyType {
  /**
   * - Specifies an asset attribute property. An attribute generally contains static information, such as the serial number of an [IIoT](https://en.wikipedia.org/wiki/Internet_of_things#Industrial_applications) wind turbine.
   * - _Required_: No
   * - _Type_: [Attribute](./aws-properties-iotsitewise-assetmodel-attribute.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-propertytype-attribute */
  Attribute?: Attribute
  /**
   * - Specifies an asset metric property. A metric contains a mathematical expression that uses aggregate functions to process all input data points over a time interval and output a single data point, such as to calculate the average hourly temperature.
   * - _Required_: No
   * - _Type_: [Metric](./aws-properties-iotsitewise-assetmodel-metric.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-propertytype-metric */
  Metric?: Metric
  /**
   * - Specifies an asset transform property. A transform contains a mathematical expression that maps a property's data points from one form to another, such as a unit conversion from Celsius to Fahrenheit.
   * - _Required_: No
   * - _Type_: [Transform](./aws-properties-iotsitewise-assetmodel-transform.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-propertytype-transform */
  Transform?: Transform
  /**
   * - The type of property type, which can be one of `Attribute`, `Measurement`, `Metric`, or `Transform`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `Measurement | Attribute | Transform | Metric`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-propertytype-typename */
  TypeName: string | Intrinsic
}

/**
 * Contains information about an asset model property.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html */

export interface AssetModelProperty {
  /**
   * - The data type of the asset model property.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `STRING | INTEGER | DOUBLE | BOOLEAN | STRUCT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelproperty-datatype */
  DataType: string | Intrinsic
  /**
   * - The data type of the structure for this property. This parameter exists on properties that have the `STRUCT` data type.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `AWS/ALARM_STATE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelproperty-datatypespec */
  DataTypeSpec?: string | Intrinsic
  /**
   * - The external ID of the asset property. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the _AWS IoT SiteWise User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z0-9_][a-zA-Z_\-0-9.:]*[a-zA-Z0-9_]+`
   * - _Minimum_: `2`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelproperty-externalid */
  ExternalId?: string | Intrinsic
  /**
   * - The ID of the property.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   * - _Minimum_: `36`
   * - _Maximum_: `36`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelproperty-id */
  Id?: string | Intrinsic
  /**
   * - The `LogicalID` of the asset model property.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[^\u0000-\u001F\u007F]+`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelproperty-logicalid */
  LogicalId?: string | Intrinsic
  /**
   * - The name of the asset model property.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelproperty-name */
  Name: string | Intrinsic
  /**
   * - Contains a property type, which can be one of `attribute`, `measurement`, `metric`, or `transform`.
   * - _Required_: Yes
   * - _Type_: [PropertyType](./aws-properties-iotsitewise-assetmodel-propertytype.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelproperty-type */
  Type: PropertyType
  /**
   * - The unit of the asset model property, such as `Newtons` or `RPM`.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelproperty-unit */
  Unit?: string | Intrinsic
}

/**
 * Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see [Defining asset models](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/define-models.html) in the _AWS IoT SiteWise User Guide_.
 * You can create two types of asset models, `ASSET_MODEL` or `COMPONENT_MODEL`.
 * *   **ASSET\_MODEL** – (default) An asset model that you can use to create assets. Can't be included as a component in another asset model.
 *
 * *   **COMPONENT\_MODEL** – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html */

export interface IoTSiteWiseAssetModel extends ResourceAttributes {
  Type: 'AWS::IoTSiteWise::AssetModel'
  Properties: {
    /**
     * - The composite models that are part of this asset model. It groups properties (such as attributes, measurements, transforms, and metrics) and child composite models that model parts of your industrial equipment. Each composite model has a type that defines the properties that the composite model supports. Use composite models to define alarms on this asset model.
     * - _Required_: No
     * - _Type_: Array of [AssetModelCompositeModel](./aws-properties-iotsitewise-assetmodel-assetmodelcompositemodel.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelcompositemodels */
    AssetModelCompositeModels?: AssetModelCompositeModel[]
    /**
     * - A description for the asset model.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodeldescription */
    AssetModelDescription?: string | Intrinsic
    /**
     * - The external ID of the asset model. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the _AWS IoT SiteWise User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9_][a-zA-Z_\-0-9.:]*[a-zA-Z0-9_]+`
     * - _Minimum_: `2`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelexternalid */
    AssetModelExternalId?: string | Intrinsic
    /**
     * - The hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see [Asset hierarchies](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html) in the _AWS IoT SiteWise User Guide_.
     * - You can specify up to 10 hierarchies per asset model. For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the _AWS IoT SiteWise User Guide_.
     * - _Required_: No
     * - _Type_: Array of [AssetModelHierarchy](./aws-properties-iotsitewise-assetmodel-assetmodelhierarchy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelhierarchies */
    AssetModelHierarchies?: AssetModelHierarchy[]
    /**
     * - A unique name for the asset model.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelname */
    AssetModelName: string | Intrinsic
    /**
     * - The property definitions of the asset model. For more information, see [Asset properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html) in the _AWS IoT SiteWise User Guide_.
     * - You can specify up to 200 properties per asset model. For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the _AWS IoT SiteWise User Guide_.
     * - _Required_: No
     * - _Type_: Array of [AssetModelProperty](./aws-properties-iotsitewise-assetmodel-assetmodelproperty.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodelproperties */
    AssetModelProperties?: AssetModelProperty[]
    /**
     * - The type of asset model.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-assetmodeltype */
    AssetModelType?: string | Intrinsic
    /**
     * - A list of key-value pairs that contain metadata for the asset. For more information, see [Tagging your AWS IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the _AWS IoT SiteWise User Guide_.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-iotsitewise-assetmodel-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-assetmodel.html#cfn-iotsitewise-assetmodel-tags */
    Tags?: Tag[]
  }
}
