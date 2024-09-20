import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Information about a composite component.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html */

export interface CompositeComponent {
  /**
   * - The name of the component.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z_\-0-9]+`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-compositecomponent-componentname */
  ComponentName?: string | Intrinsic
  /**
   * - The path to the composite component, starting from the top-level component.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z_\-0-9/]+`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-compositecomponent-componentpath */
  ComponentPath?: string | Intrinsic
  /**
   * - The ID of the composite component type.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z_\-0-9]+`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-compositecomponent-componenttypeid */
  ComponentTypeId?: string | Intrinsic
  /**
   * - The description of the component type.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-compositecomponent-description */
  Description?: string | Intrinsic
  /**
   * - Map of strings to the properties in the component type. Each string in the mapping must be unique to this component.
   * - _Required_: No
   * - _Type_: Object of [Property](./aws-properties-iottwinmaker-entity-property.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-compositecomponent-properties */
  Properties?: Record<string, Property>
  /**
   * - The property groups.
   * - _Required_: No
   * - _Type_: Object of [PropertyGroup](./aws-properties-iottwinmaker-entity-propertygroup.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-compositecomponent-propertygroups */
  PropertyGroups?: Record<string, PropertyGroup>
  /**
   * - The current status of the composite component.
   * - _Required_: No
   * - _Type_: [Status](./aws-properties-iottwinmaker-entity-status.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-compositecomponent-status */
  Status?: Status
}

/**
 * The property group.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html */

export interface PropertyGroup {
  /**
   * - The group type.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `TABULAR`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-propertygroup-grouptype */
  GroupType?: string | Intrinsic
  /**
   * - The property names.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-propertygroup-propertynames */
  PropertyNames?: (string | Intrinsic)[]
}

/**
 * The entity error.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html */

export interface Error {
  /**
   * - The entity error code.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `VALIDATION_ERROR | INTERNAL_FAILURE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-error-code */
  Code?: string | Intrinsic
  /**
   * - The entity error message.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-error-message */
  Message?: string | Intrinsic
}

/**
 * The entity relationship.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html */

export interface RelationshipValue {
  /**
   * - The target component name.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z_\-0-9]+`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-relationshipvalue-targetcomponentname */
  TargetComponentName?: string | Intrinsic
  /**
   * - The target entity Id.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|^[a-zA-Z0-9][a-zA-Z_\-0-9.:]*[a-zA-Z0-9]+`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-relationshipvalue-targetentityid */
  TargetEntityId?: string | Intrinsic
}

/**
 * The entity relationship.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html */

export interface Relationship {
  /**
   * - The relationship type.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `.*`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-relationship-relationshiptype */
  RelationshipType?: string | Intrinsic
  /**
   * - the component type Id target.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z_\.\-0-9:]+`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-relationship-targetcomponenttypeid */
  TargetComponentTypeId?: string | Intrinsic
}

/**
 * The current status of the entity.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html */

export interface Status {
  /**
   * - The error message.
   * - _Required_: No
   * - _Type_: [Error](./aws-properties-iottwinmaker-entity-error.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-status-error */
  Error?: Error
  /**
   * - The current state of the entity, component, component type, or workspace.
   * - Valid Values: `CREATING | UPDATING | DELETING | ACTIVE | ERROR`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CREATING | UPDATING | DELETING | ACTIVE | ERROR`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-status-state */
  State?: string | Intrinsic
}

/**
 * An object that specifies a value for a property.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html */

export interface DataValue {
  /**
   * - A boolean value.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-datavalue-booleanvalue */
  BooleanValue?: boolean | Intrinsic
  /**
   * - A double value.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-datavalue-doublevalue */
  DoubleValue?: number | Intrinsic
  /**
   * - An expression that produces the value.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `(^\$\{Parameters\.[a-zA-z]+([a-zA-z_0-9]*)}$)`
   * - _Minimum_: `1`
   * - _Maximum_: `316`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-datavalue-expression */
  Expression?: string | Intrinsic
  /**
   * - An integer value.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-datavalue-integervalue */
  IntegerValue?: number | Intrinsic
  /**
   * - A list of multiple values.
   * - _Required_: No
   * - _Type_: Array of [DataValue](./aws-properties-iottwinmaker-entity-datavalue.html)
   * - _Minimum_: `0`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-datavalue-listvalue */
  ListValue?: DataValue[]
  /**
   * - A long value.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-datavalue-longvalue */
  LongValue?: number | Intrinsic
  /**
   * - An object that maps strings to multiple DataValue objects.
   * - _Required_: No
   * - _Type_: Object of [DataValue](./aws-properties-iottwinmaker-entity-datavalue.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-datavalue-mapvalue */
  MapValue?: Record<string, DataValue>
  /**
   * - A value that relates a component to another component.
   * - _Required_: No
   * - _Type_: [RelationshipValue](./aws-properties-iottwinmaker-entity-relationshipvalue.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-datavalue-relationshipvalue */
  RelationshipValue?: RelationshipValue
  /**
   * - A string value.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `.*`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-datavalue-stringvalue */
  StringValue?: string | Intrinsic
}

/**
 * The entity data type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html */

export interface DataType {
  /**
   * - The allowed values.
   * - _Required_: No
   * - _Type_: Array of [DataValue](./aws-properties-iottwinmaker-entity-datavalue.html)
   * - _Minimum_: `0`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-datatype-allowedvalues */
  AllowedValues?: DataValue[]
  /**
   * - The nested type.
   * - _Required_: No
   * - _Type_: [DataType](./aws-properties-iottwinmaker-entity-datatype.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-datatype-nestedtype */
  NestedType?: DataType
  /**
   * - The relationship.
   * - _Required_: No
   * - _Type_: [Relationship](./aws-properties-iottwinmaker-entity-relationship.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-datatype-relationship */
  Relationship?: Relationship
  /**
   * - The entity type.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `RELATIONSHIP | STRING | LONG | BOOLEAN | INTEGER | DOUBLE | LIST | MAP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-datatype-type */
  Type?: string | Intrinsic
  /**
   * - The unit of measure.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `.*`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-datatype-unitofmeasure */
  UnitOfMeasure?: string | Intrinsic
}

/**
 * The entity definition.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html */

export interface Definition {
  /**
   * - The configuration.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `[a-zA-Z_\-0-9]+`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-definition-configuration */
  Configuration?: Record<string, string | Intrinsic>
  /**
   * - The data type
   * - _Required_: No
   * - _Type_: [DataType](./aws-properties-iottwinmaker-entity-datatype.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-definition-datatype */
  DataType?: DataType
  /**
   * - The default value.
   * - _Required_: No
   * - _Type_: [DataValue](./aws-properties-iottwinmaker-entity-datavalue.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-definition-defaultvalue */
  DefaultValue?: DataValue
  /**
   * - Displays if the entity has a external Id.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-definition-isexternalid */
  IsExternalId?: boolean | Intrinsic
  /**
   * - Displays if the entity is final.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-definition-isfinal */
  IsFinal?: boolean | Intrinsic
  /**
   * - Displays if the entity is imported.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-definition-isimported */
  IsImported?: boolean | Intrinsic
  /**
   * - Displays if the entity is inherited.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-definition-isinherited */
  IsInherited?: boolean | Intrinsic
  /**
   * - Displays if the entity is a required entity.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-definition-isrequiredinentity */
  IsRequiredInEntity?: boolean | Intrinsic
  /**
   * - Displays if the entity is tored externally.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-definition-isstoredexternally */
  IsStoredExternally?: boolean | Intrinsic
  /**
   * - Displays if the entity
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-definition-istimeseries */
  IsTimeSeries?: boolean | Intrinsic
}

/**
 * An object that sets information about a property.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html */

export interface Property {
  /**
   * - An object that specifies information about a property.
   * - _Required_: No
   * - _Type_: [Definition](./aws-properties-iottwinmaker-entity-definition.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-property-definition */
  Definition?: Definition
  /**
   * - An object that contains information about a value for a time series property.
   * - _Required_: No
   * - _Type_: [DataValue](./aws-properties-iottwinmaker-entity-datavalue.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-property-value */
  Value?: DataValue
}

/**
 * The entity component.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html */

export interface Component {
  /**
   * - The name of the component.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z_\-0-9]+`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-component-componentname */
  ComponentName?: string | Intrinsic
  /**
   * - The ID of the component type.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z_\-0-9]+`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-component-componenttypeid */
  ComponentTypeId?: string | Intrinsic
  /**
   * - The name of the property definition set in the request.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-component-definedin */
  DefinedIn?: string | Intrinsic
  /**
   * - The description of the component.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-component-description */
  Description?: string | Intrinsic
  /**
   * - An object that maps strings to the properties to set in the component type. Each string in the mapping must be unique to this object.
   * - _Required_: No
   * - _Type_: Object of [Property](./aws-properties-iottwinmaker-entity-property.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-component-properties */
  Properties?: Record<string, Property>
  /**
   * - An object that maps strings to the property groups in the component type. Each string in the mapping must be unique to this object.
   * - _Required_: No
   * - _Type_: Object of [PropertyGroup](./aws-properties-iottwinmaker-entity-propertygroup.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-component-propertygroups */
  PropertyGroups?: Record<string, PropertyGroup>
  /**
   * - The status of the component.
   * - _Required_: No
   * - _Type_: [Status](./aws-properties-iottwinmaker-entity-status.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-component-status */
  Status?: Status
}

/**
 * Use the `AWS::IoTTwinMaker::Entity` resource to declare an entity.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html */

export interface IoTTwinMakerEntity extends ResourceAttributes {
  Type: 'AWS::IoTTwinMaker::Entity'
  Properties: {
    /**
     * - An object that maps strings to the components in the entity. Each string in the mapping must be unique to this object.
     * - For information on the component object see the [component](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_ComponentResponse.html) API reference.
     * - _Required_: No
     * - _Type_: Object of [Component](./aws-properties-iottwinmaker-entity-component.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-components */
    Components?: Record<string, Component>
    /**
     * - Maps string to `compositeComponent` updates in the request. Each key of the map represents the `componentPath` of the `compositeComponent`.
     * - _Required_: No
     * - _Type_: Object of [CompositeComponent](./aws-properties-iottwinmaker-entity-compositecomponent.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-compositecomponents */
    CompositeComponents?: Record<string, CompositeComponent>
    /**
     * - The description of the entity.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-description */
    Description?: string | Intrinsic
    /**
     * - The ID of the entity.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|^[a-zA-Z0-9][a-zA-Z_\-0-9.:]*[a-zA-Z0-9]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-entityid */
    EntityId?: string | Intrinsic
    /**
     * - The entity name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z_0-9-.][a-zA-Z_0-9-. ]*[a-zA-Z0-9]+`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-entityname */
    EntityName: string | Intrinsic
    /**
     * - The ID of the parent entity.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `\$ROOT|^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|^[a-zA-Z0-9][a-zA-Z_\-0-9.:]*[a-zA-Z0-9]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-parententityid */
    ParentEntityId?: string | Intrinsic
    /**
     * - Metadata that you can use to manage the entity.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-tags */
    Tags?: Record<string, string | Intrinsic>
    /**
     * - The ID of the workspace that contains the entity.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z_0-9][a-zA-Z_\-0-9]*[a-zA-Z0-9]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-entity.html#cfn-iottwinmaker-entity-workspaceid */
    WorkspaceId: string | Intrinsic
  }
}
