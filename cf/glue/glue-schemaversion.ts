import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A wrapper structure to contain schema identity fields. Either `SchemaArn`, or `SchemaName` and `RegistryName` has to be provided.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html */

export interface Schema {
  /**
   * - The name of the registry where the schema is stored. Either `SchemaArn`, or `SchemaName` and `RegistryName` has to be provided.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html#cfn-glue-schemaversion-schema-registryname */
  RegistryName?: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the schema. Either `SchemaArn`, or `SchemaName` and `RegistryName` has to be provided.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `arn:(aws|aws-us-gov|aws-cn):glue:.*`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html#cfn-glue-schemaversion-schema-schemaarn */
  SchemaArn?: string | Intrinsic
  /**
   * - The name of the schema. Either `SchemaArn`, or `SchemaName` and `RegistryName` has to be provided.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html#cfn-glue-schemaversion-schema-schemaname */
  SchemaName?: string | Intrinsic
}

/**
 * The `AWS::Glue::SchemaVersion` is an AWS Glue resource type that manages schema versions of schemas in the AWS Glue Schema Registry.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html */

export interface GlueSchemaVersion extends ResourceAttributes {
  Type: 'AWS::Glue::SchemaVersion'
  Properties: {
    /**
     * - The schema that includes the schema version.
     * - _Required_: Yes
     * - _Type_: [Schema](./aws-properties-glue-schemaversion-schema.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html#cfn-glue-schemaversion-schema */
    Schema: Schema
    /**
     * - The schema definition for the schema version.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `170000`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html#cfn-glue-schemaversion-schemadefinition */
    SchemaDefinition: string | Intrinsic
  }
}
