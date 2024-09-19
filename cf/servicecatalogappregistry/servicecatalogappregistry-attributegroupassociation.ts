import type { Intrinsic } from '../intrinsic/index.js' /**
 * Associates an attribute group with an application to augment the application's metadata with the group's attributes. This feature enables applications to be described with user-defined details that are machine-readable, such as third-party integrations.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroupassociation.html */

export interface ServiceCatalogAppRegistryAttributeGroupAssociation {
  Type: 'AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation'
  Properties: {
    /**
     * - The name or ID of the application.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `\w+|[a-z0-9]{12}`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroupassociation.html#cfn-servicecatalogappregistry-attributegroupassociation-application */
    Application: string | Intrinsic
    /**
     * - The name or ID of the attribute group which holds the attributes that describe the application.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `\w+|[a-z0-9]{12}`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroupassociation.html#cfn-servicecatalogappregistry-attributegroupassociation-attributegroup */
    AttributeGroup: string | Intrinsic
  }
}
