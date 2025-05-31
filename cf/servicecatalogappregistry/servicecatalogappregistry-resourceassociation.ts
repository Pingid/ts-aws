import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Associates a resource with an application. Both the resource and the application can be specified either by ID or name.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-resourceassociation.html */

export interface ServiceCatalogAppRegistryResourceAssociation extends ResourceAttributes {
    "Type": "AWS::ServiceCatalogAppRegistry::ResourceAssociation";
    "Properties": {
        /**
         * - The name or ID of the application.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `\w+|[a-z0-9]{12}`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-resourceassociation.html#cfn-servicecatalogappregistry-resourceassociation-application */
        "Application": string | Intrinsic;
        /**
         * - The name or ID of the resource of which the application will be associated.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `\w+|arn:aws[-a-z]*:cloudformation:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:stack/[a-zA-Z][-A-Za-z0-9]{0,127}/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-resourceassociation.html#cfn-servicecatalogappregistry-resourceassociation-resource */
        "Resource": string | Intrinsic;
        /**
         * - The type of resource of which the application will be associated.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `CFN_STACK`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalogappregistry-resourceassociation.html#cfn-servicecatalogappregistry-resourceassociation-resourcetype */
        "ResourceType": string | Intrinsic;
    };
}