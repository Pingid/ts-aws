import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Associate the specified TagOption with the specified portfolio or product.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoptionassociation.html */

export interface ServiceCatalogTagOptionAssociation extends ResourceAttributes {
    "Type": "AWS::ServiceCatalog::TagOptionAssociation";
    "Properties": {
        /**
         * - The resource identifier.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoptionassociation.html#cfn-servicecatalog-tagoptionassociation-resourceid */
        "ResourceId": string | Intrinsic;
        /**
         * - The TagOption identifier.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicecatalog-tagoptionassociation.html#cfn-servicecatalog-tagoptionassociation-tagoptionid */
        "TagOptionId": string | Intrinsic;
    };
}