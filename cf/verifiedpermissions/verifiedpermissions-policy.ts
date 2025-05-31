import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A structure that defines a static policy.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html */

export interface StaticPolicyDefinition {
    /**
     * - The description of the static policy.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `150`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html#cfn-verifiedpermissions-policy-staticpolicydefinition-description */
    "Description"?: string | Intrinsic;
    /**
     * - The policy content of the static policy, written in the Cedar policy language.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `10000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html#cfn-verifiedpermissions-policy-staticpolicydefinition-statement */
    "Statement": string | Intrinsic;
}

/**
 * Contains the identifier of an entity in a policy, including its ID and type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html */

export interface EntityIdentifier {
    /**
     * - The identifier of an entity.
     * - `"entityId":"_identifier_"`
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html#cfn-verifiedpermissions-policy-entityidentifier-entityid */
    "EntityId": string | Intrinsic;
    /**
     * - The type of an entity.
     * - Example: `"entityType":"_typeName_"`
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html#cfn-verifiedpermissions-policy-entityidentifier-entitytype */
    "EntityType": string | Intrinsic;
}

/**
 * A structure that describes a policy created by instantiating a policy template.
 * ###### Note
 * 
 * You can't directly update a template-linked policy. You must update the associated policy template instead.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html */

export interface TemplateLinkedPolicyDefinition {
    /**
     * - The unique identifier of the policy template used to create this policy.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9-]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html#cfn-verifiedpermissions-policy-templatelinkedpolicydefinition-policytemplateid */
    "PolicyTemplateId": string | Intrinsic;
    /**
     * - The principal associated with this template-linked policy. Verified Permissions substitutes this principal for the `?principal` placeholder in the policy template when it evaluates an authorization request.
     * - _Required_: No
     * - _Type_: [EntityIdentifier](./aws-properties-verifiedpermissions-policy-entityidentifier.html)
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html#cfn-verifiedpermissions-policy-templatelinkedpolicydefinition-principal */
    "Principal"?: EntityIdentifier;
    /**
     * - The resource associated with this template-linked policy. Verified Permissions substitutes this resource for the `?resource` placeholder in the policy template when it evaluates an authorization request.
     * - _Required_: No
     * - _Type_: [EntityIdentifier](./aws-properties-verifiedpermissions-policy-entityidentifier.html)
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html#cfn-verifiedpermissions-policy-templatelinkedpolicydefinition-resource */
    "Resource"?: EntityIdentifier;
}

/**
 * A structure that defines a Cedar policy. It includes the policy type, a description, and a policy body. This is a top level data type used to create a policy.
 * This data type is used as a request parameter for the [CreatePolicy](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html) operation. This structure must always have either an `Static` or a `TemplateLinked` element.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html */

export interface PolicyDefinition {
    /**
     * - A structure that describes a static policy. An static policy doesn't use a template or allow placeholders for entities.
     * - _Required_: No
     * - _Type_: [StaticPolicyDefinition](./aws-properties-verifiedpermissions-policy-staticpolicydefinition.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html#cfn-verifiedpermissions-policy-policydefinition-static */
    "Static"?: StaticPolicyDefinition;
    /**
     * - A structure that describes a policy that was instantiated from a template. The template can specify placeholders for `principal` and `resource`. When you use [CreatePolicy](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_CreatePolicy.html) to create a policy from a template, you specify the exact principal and resource to use for the instantiated policy.
     * - _Required_: No
     * - _Type_: [TemplateLinkedPolicyDefinition](./aws-properties-verifiedpermissions-policy-templatelinkedpolicydefinition.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html#cfn-verifiedpermissions-policy-policydefinition-templatelinked */
    "TemplateLinked"?: TemplateLinkedPolicyDefinition;
}

/**
 * Creates or updates a Cedar policy and saves it in the specified policy store. You can create either a static policy or a policy linked to a policy template.
 * You can directly update only static policies. To update a template-linked policy, you must update its linked policy template instead.
 * *   To create a static policy, in the `Definition` include a `Static` element that includes the Cedar policy text in the `Statement` element.
 *     
 * *   To create a policy that is dynamically linked to a policy template, in the `Definition` include a `Templatelinked` element that specifies the policy template ID and the principal and resource to associate with this policy. If the policy template is ever updated, any policies linked to the policy template automatically use the updated template.
 * ###### Note
 * 
 * *   If policy validation is enabled in the policy store, then updating a static policy causes Verified Permissions to validate the policy against the schema in the policy store. If the updated static policy doesn't pass validation, the operation fails and the update isn't stored.
 *     
 * *   When you edit a static policy, You can change only certain elements of a static policy:
 *     
 *     *   The action referenced by the policy.
 *         
 *     *   A condition clause, such as when and unless.
 *         
 *     
 *     You can't change these elements of a static policy:
 *     
 *     *   Changing a policy from a static policy to a template-linked policy.
 *         
 *     *   Changing the effect of a static policy from permit or forbid.
 *         
 *     *   The principal referenced by a static policy.
 *         
 *     *   The resource referenced by a static policy.
 *         
 *     
 * *   To update a template-linked policy, you must update the template instead.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html */

export interface VerifiedPermissionsPolicy extends ResourceAttributes {
    "Type": "AWS::VerifiedPermissions::Policy";
    "Properties": {
        /**
         * - Specifies the policy type and content to use for the new or updated policy. The definition structure must include either a `Static` or a `TemplateLinked` element.
         * - _Required_: Yes
         * - _Type_: [PolicyDefinition](./aws-properties-verifiedpermissions-policy-policydefinition.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html#cfn-verifiedpermissions-policy-definition */
        "Definition": PolicyDefinition;
        /**
         * - Specifies the `PolicyStoreId` of the policy store you want to store the policy in.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9-]*$`
         * - _Minimum_: `1`
         * - _Maximum_: `200`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-verifiedpermissions-policy.html#cfn-verifiedpermissions-policy-policystoreid */
        "PolicyStoreId": string | Intrinsic;
    };
}