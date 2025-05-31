import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates a new attribute group as a container for user-defined attributes. This feature enables users to have full control over their cloud application's metadata in a rich machine-readable format to facilitate integration with automated workflows and third-party tools.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html */

export interface ServiceCatalogAppRegistryAttributeGroup extends ResourceAttributes {
    "Type": "AWS::ServiceCatalogAppRegistry::AttributeGroup";
    "Properties": {
        /**
         * - A nested object in a JSON or YAML template that supports arbitrary definitions. Represents the attributes in an attribute group that describes an application and its components.
         * - _Required_: Yes
         * - _Type_: Json
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html#cfn-servicecatalogappregistry-attributegroup-attributes */
        "Attributes": any | Intrinsic;
        /**
         * - The description of the attribute group that the user provides.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `1024`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html#cfn-servicecatalogappregistry-attributegroup-description */
        "Description"?: string | Intrinsic;
        /**
         * - The name of the attribute group.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `\w+`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html#cfn-servicecatalogappregistry-attributegroup-name */
        "Name": string | Intrinsic;
        /**
         * - Key-value pairs you can use to associate with the attribute group.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `^[a-zA-Z+-=._:/]+$`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-attributegroup.html#cfn-servicecatalogappregistry-attributegroup-tags */
        "Tags"?: Record<string, string | Intrinsic>;
    };
}