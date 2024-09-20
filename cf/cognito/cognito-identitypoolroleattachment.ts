import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Defines how to map a claim to a role ARN.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html */

export interface MappingRule {
  /**
   * - The claim name that must be present in the token. For example: "isAdmin" or "paid".
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html#cfn-cognito-identitypoolroleattachment-mappingrule-claim */
  Claim: string | Intrinsic
  /**
   * - The match condition that specifies how closely the claim value in the IdP token must match `Value`.
   * - Valid values are: `Equals`, `Contains`, `StartsWith`, and `NotEqual`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html#cfn-cognito-identitypoolroleattachment-mappingrule-matchtype */
  MatchType: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the role.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html#cfn-cognito-identitypoolroleattachment-mappingrule-rolearn */
  RoleARN: string | Intrinsic
  /**
   * - A brief string that the claim must match. For example, "paid" or "yes".
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html#cfn-cognito-identitypoolroleattachment-mappingrule-value */
  Value: string | Intrinsic
}

/**
 * `RulesConfigurationType` is a subproperty of the [RoleMapping](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-rolemapping.html) property that defines the rules to be used for mapping users to roles.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html */

export interface RulesConfigurationType {
  /**
   * - The rules. You can specify up to 25 rules per identity provider.
   * - _Required_: Yes
   * - _Type_: Array of [MappingRule](./aws-properties-cognito-identitypoolroleattachment-mappingrule.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html#cfn-cognito-identitypoolroleattachment-rulesconfigurationtype-rules */
  Rules: MappingRule[]
}

/**
 * One of a set of `RoleMappings`, a property of the [AWS::Cognito::IdentityPoolRoleAttachment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html) resource that defines the role-mapping attributes of an Amazon Cognito identity pool.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html */

export interface RoleMapping {
  /**
   * - If you specify Token or Rules as the `Type`, `AmbiguousRoleResolution` is required.
   * - Specifies the action to be taken if either no rules match the claim value for the `Rules` type, or there is no `cognito:preferred_role` claim and there are multiple `cognito:roles` matches for the `Token` type.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html#cfn-cognito-identitypoolroleattachment-rolemapping-ambiguousroleresolution */
  AmbiguousRoleResolution?: string | Intrinsic
  /**
   * - Identifier for the identity provider for which the role is mapped. For example: `graph.facebook.com` or `cognito-idp.us-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id (http://cognito-idp.us-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id)`. This is the identity provider that is used by the user for authentication.
   * - If the identity provider property isn't provided, the key of the entry in the `RoleMappings` map is used as the identity provider.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html#cfn-cognito-identitypoolroleattachment-rolemapping-identityprovider */
  IdentityProvider?: string | Intrinsic
  /**
   * - The rules to be used for mapping users to roles. If you specify "Rules" as the role-mapping type, RulesConfiguration is required.
   * - _Required_: No
   * - _Type_: [RulesConfigurationType](./aws-properties-cognito-identitypoolroleattachment-rulesconfigurationtype.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html#cfn-cognito-identitypoolroleattachment-rolemapping-rulesconfiguration */
  RulesConfiguration?: RulesConfigurationType
  /**
   * - The role mapping type. Token will use `cognito:roles` and `cognito:preferred_role` claims from the Cognito identity provider token to map groups to roles. Rules will attempt to match claims from the token to map to a role.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html#cfn-cognito-identitypoolroleattachment-rolemapping-type */
  Type: string | Intrinsic
}

/**
 * The `AWS::Cognito::IdentityPoolRoleAttachment` resource manages the role configuration for an Amazon Cognito identity pool.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html */

export interface CognitoIdentityPoolRoleAttachment extends ResourceAttributes {
  Type: 'AWS::Cognito::IdentityPoolRoleAttachment'
  Properties: {
    /**
     * - An identity pool ID in the format `REGION:GUID`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html#cfn-cognito-identitypoolroleattachment-identitypoolid */
    IdentityPoolId: string | Intrinsic
    /**
     * - How users for a specific identity provider are mapped to roles. This is a string to the `RoleMapping` object map. The string identifies the identity provider. For example: `graph.facebook.com` or `cognito-idp.us-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id`.
     * - If the `IdentityProvider` field isn't provided in this object, the string is used as the identity provider name.
     * - For more information, see the [RoleMapping property](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypoolroleattachment-rolemapping.html).
     * - _Required_: No
     * - _Type_: [RoleMapping](./aws-properties-cognito-identitypoolroleattachment-rolemapping.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html#cfn-cognito-identitypoolroleattachment-rolemappings */
    RoleMappings?: RoleMapping
    /**
     * - The map of the roles associated with this pool. For a given role, the key is either "authenticated" or "unauthenticated". The value is the role ARN.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.+$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolroleattachment.html#cfn-cognito-identitypoolroleattachment-roles */
    Roles?: string | Intrinsic
  }
}
