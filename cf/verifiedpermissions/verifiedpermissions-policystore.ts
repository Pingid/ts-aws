import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Contains a list of principal types, resource types, and actions that can be specified in policies stored in the same policy store. If the validation mode for the policy store is set to `STRICT`, then policies that can't be validated by this schema are rejected by Verified Permissions and can't be stored in the policy store.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html */

export interface SchemaDefinition {
  /**
   * - A JSON string representation of the schema supported by applications that use this policy store. For more information, see [Policy store schema](https://docs.aws.amazon.com/verifiedpermissions/latest/userguide/schema.html) in the AVP User Guide.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html#cfn-verifiedpermissions-policystore-schemadefinition-cedarjson */
  CedarJson?: string | Intrinsic
}

/**
 * A structure that contains Cedar policy validation settings for the policy store. The validation mode determines which validation failures that Cedar considers serious enough to block acceptance of a new or edited static policy or policy template.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html */

export interface ValidationSettings {
  /**
   * - The validation mode currently configured for this policy store. The valid values are:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `OFF | STRICT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html#cfn-verifiedpermissions-policystore-validationsettings-mode */
  Mode: string | Intrinsic
}

/**
 * Creates a policy store. A policy store is a container for policy resources. You can create a separate policy store for each of your applications.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html */

export interface VerifiedPermissionsPolicyStore extends ResourceAttributes {
  Type: 'AWS::VerifiedPermissions::PolicyStore'
  Properties: {
    /**
     * - Descriptive text that you can provide to help with identification of the current policy store.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `150`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html#cfn-verifiedpermissions-policystore-description */
    Description?: string | Intrinsic
    /**
     * - Creates or updates the policy schema in a policy store. Cedar can use the schema to validate any Cedar policies and policy templates submitted to the policy store. Any changes to the schema validate only policies and templates submitted after the schema change. Existing policies and templates are not re-evaluated against the changed schema. If you later update a policy, then it is evaluated against the new schema at that time.
     * - _Required_: No
     * - _Type_: [SchemaDefinition](./aws-properties-verifiedpermissions-policystore-schemadefinition.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html#cfn-verifiedpermissions-policystore-schema */
    Schema?: SchemaDefinition
    /**
     * - Specifies the validation setting for this policy store.
     * - Currently, the only valid and required value is `Mode`.
     * - _Required_: Yes
     * - _Type_: [ValidationSettings](./aws-properties-verifiedpermissions-policystore-validationsettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policystore.html#cfn-verifiedpermissions-policystore-validationsettings */
    ValidationSettings: ValidationSettings
  }
}
