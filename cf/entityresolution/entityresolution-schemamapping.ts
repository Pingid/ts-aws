import type { Intrinsic } from '../intrinsic/index.js' /**
 * An object containing `FieldName`, `Type`, `GroupName`, `MatchKey`, `Hashing`, and `SubType`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html */

export interface SchemaInputAttribute {
  /**
   * - A string containing the field name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z_0-9- \t]*$`
   * - _Minimum_: `0`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html#cfn-entityresolution-schemamapping-schemainputattribute-fieldname */
  FieldName: string | Intrinsic
  /**
   * - A string that instructs AWS Entity Resolution to combine several columns into a unified column with the identical attribute type.
   * - For example, when working with columns such as `first_name`, `middle_name`, and `last_name`, assigning them a common `groupName` will prompt AWS Entity Resolution to concatenate them into a single value.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z_0-9- \t]*$`
   * - _Minimum_: `0`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html#cfn-entityresolution-schemamapping-schemainputattribute-groupname */
  GroupName?: string | Intrinsic
  /**
   * - Indicates if the column values are hashed in the schema input. If the value is set to `TRUE`, the column values are hashed. If the value is set to `FALSE`, the column values are cleartext.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html#cfn-entityresolution-schemamapping-schemainputattribute-hashed */
  Hashed?: boolean | Intrinsic
  /**
   * - A key that allows grouping of multiple input attributes into a unified matching group.
   * - For example, consider a scenario where the source table contains various addresses, such as `business_address` and `shipping_address`. By assigning a `matchKey` called `address` to both attributes, AWS Entity Resolution will match records across these fields to create a consolidated matching group.
   * - If no `matchKey` is specified for a column, it won't be utilized for matching purposes but will still be included in the output table.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z_0-9- \t]*$`
   * - _Minimum_: `0`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html#cfn-entityresolution-schemamapping-schemainputattribute-matchkey */
  MatchKey?: string | Intrinsic
  /**
   * - The subtype of the attribute, selected from a list of values.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html#cfn-entityresolution-schemamapping-schemainputattribute-subtype */
  SubType?: string | Intrinsic
  /**
   * - The type of the attribute, selected from a list of values.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `NAME | NAME_FIRST | NAME_MIDDLE | NAME_LAST | ADDRESS | ADDRESS_STREET1 | ADDRESS_STREET2 | ADDRESS_STREET3 | ADDRESS_CITY | ADDRESS_STATE | ADDRESS_COUNTRY | ADDRESS_POSTALCODE | PHONE | PHONE_NUMBER | PHONE_COUNTRYCODE | EMAIL_ADDRESS | UNIQUE_ID | DATE | STRING | PROVIDER_ID`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html#cfn-entityresolution-schemamapping-schemainputattribute-type */
  Type: string | Intrinsic
}

/**
 * The tags used to organize, track, or control access for this resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html */

export interface Tag {
  /**
   * - The key of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html#cfn-entityresolution-schemamapping-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html#cfn-entityresolution-schemamapping-tag-value */
  Value: string | Intrinsic
}

/**
 * Creates a schema mapping, which defines the schema of the input customer records table. The `SchemaMapping` also provides AWS Entity Resolution with some metadata about the table, such as the attribute types of the columns and which columns to match on.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html */

export interface EntityResolutionSchemaMapping {
  Type: 'AWS::EntityResolution::SchemaMapping'
  Properties: {
    /**
     * - A description of the schema.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html#cfn-entityresolution-schemamapping-description */
    Description?: string | Intrinsic
    /**
     * - A list of `MappedInputFields`. Each `MappedInputField` corresponds to a column the source data table, and contains column name plus additional information that AWS Entity Resolution uses for matching.
     * - _Required_: Yes
     * - _Type_: Array of [SchemaInputAttribute](./aws-properties-entityresolution-schemamapping-schemainputattribute.html)
     * - _Minimum_: `2`
     * - _Maximum_: `35`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html#cfn-entityresolution-schemamapping-mappedinputfields */
    MappedInputFields: SchemaInputAttribute[]
    /**
     * - The name of the schema. There can't be multiple `SchemaMappings` with the same name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z_0-9-]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html#cfn-entityresolution-schemamapping-schemaname */
    SchemaName: string | Intrinsic
    /**
     * - The tags used to organize, track, or control access for this resource.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-entityresolution-schemamapping-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-schemamapping.html#cfn-entityresolution-schemamapping-tags */
    Tags?: Tag[]
  }
}
