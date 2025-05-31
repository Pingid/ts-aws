import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Adds a metered product.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-meteredproduct.html */

export interface DeadlineMeteredProduct extends ResourceAttributes {
    "Type": "AWS::Deadline::MeteredProduct";
    "Properties": {
        /**
         * - The Amazon EC2 identifier of the license endpoint.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^le-[0-9a-f]{32}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-meteredproduct.html#cfn-deadline-meteredproduct-licenseendpointid */
        "LicenseEndpointId"?: string | Intrinsic;
        /**
         * - The product ID.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[0-9a-z]{1,32}-[.0-9a-z]{1,32}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-meteredproduct.html#cfn-deadline-meteredproduct-productid */
        "ProductId"?: string | Intrinsic;
    };
}