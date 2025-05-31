import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Describes a tag.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html */

export interface Tag {
    /**
     * - The tag key.
     * - Constraints: Maximum length of 128 characters.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\s\S]*`
     * - _Minimum_: `0`
     * - _Maximum_: `10000000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html#cfn-networkmanager-globalnetwork-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag value.
     * - Constraints: Maximum length of 256 characters.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\s\S]*`
     * - _Minimum_: `0`
     * - _Maximum_: `10000000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html#cfn-networkmanager-globalnetwork-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Creates a new, empty global network.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html */

export interface NetworkManagerGlobalNetwork extends ResourceAttributes {
    "Type": "AWS::NetworkManager::GlobalNetwork";
    "Properties": {
        /**
         * - The date and time that the global network was created.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html#cfn-networkmanager-globalnetwork-createdat */
        "CreatedAt"?: string | Intrinsic;
        /**
         * - A description of the global network.
         * - Constraints: Maximum length of 256 characters.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[\s\S]*`
         * - _Minimum_: `0`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html#cfn-networkmanager-globalnetwork-description */
        "Description"?: string | Intrinsic;
        /**
         * - The state of the global network.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `PENDING | AVAILABLE | DELETING | UPDATING`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html#cfn-networkmanager-globalnetwork-state */
        "State"?: string | Intrinsic;
        /**
         * - The tags for the global network.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-networkmanager-globalnetwork-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html#cfn-networkmanager-globalnetwork-tags */
        "Tags"?: Tag[];
    };
}