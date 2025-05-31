import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The preferences and settings that will be used to compute the AWS charges for a billing group.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html */

export interface ComputationPreference {
    /**
     * - The Amazon Resource Name (ARN) of the pricing plan used to compute the AWS charges for a billing group.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:aws(-cn)?:billingconductor::[0-9]{12}:pricingplan/[a-zA-Z0-9]{10}`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html#cfn-billingconductor-billinggroup-computationpreference-pricingplanarn */
    "PricingPlanArn": string | Intrinsic;
}

/**
 * The set of accounts that will be under the billing group. The set of accounts resemble the linked accounts in a consolidated billing family.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html */

export interface AccountGrouping {
    /**
     * - Specifies if this billing group will automatically associate newly added AWS accounts that join your consolidated billing family.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html#cfn-billingconductor-billinggroup-accountgrouping-autoassociate */
    "AutoAssociate"?: boolean | Intrinsic;
    /**
     * - The account IDs that make up the billing group. Account IDs must be a part of the consolidated billing family, and not associated with another billing group.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html#cfn-billingconductor-billinggroup-accountgrouping-linkedaccountids */
    "LinkedAccountIds": (string | Intrinsic)[];
}

/**
 * A custom key-value pair associated with a Billing Conductor resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html */

export interface Tag {
    /**
     * - The key in a key-value pair.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html#cfn-billingconductor-billinggroup-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value in a key-value pair of a tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html#cfn-billingconductor-billinggroup-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Creates a billing group that resembles a consolidated billing family that AWS charges, based off of the predefined pricing plan computation.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html */

export interface BillingConductorBillingGroup extends ResourceAttributes {
    "Type": "AWS::BillingConductor::BillingGroup";
    "Properties": {
        /**
         * - The set of accounts that will be under the billing group. The set of accounts resemble the linked accounts in a consolidated billing family.
         * - _Required_: Yes
         * - _Type_: [AccountGrouping](./aws-properties-billingconductor-billinggroup-accountgrouping.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html#cfn-billingconductor-billinggroup-accountgrouping */
        "AccountGrouping": AccountGrouping;
        /**
         * - The preferences and settings that will be used to compute the AWScharges for a billing group.
         * - _Required_: Yes
         * - _Type_: [ComputationPreference](./aws-properties-billingconductor-billinggroup-computationpreference.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html#cfn-billingconductor-billinggroup-computationpreference */
        "ComputationPreference": ComputationPreference;
        /**
         * - The description of the billing group.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `1024`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html#cfn-billingconductor-billinggroup-description */
        "Description"?: string | Intrinsic;
        /**
         * - The billing group's name.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9_\+=\.\-@]+`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html#cfn-billingconductor-billinggroup-name */
        "Name": string | Intrinsic;
        /**
         * - The account ID that serves as the main account in a billing group.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[0-9]{12}`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html#cfn-billingconductor-billinggroup-primaryaccountid */
        "PrimaryAccountId": string | Intrinsic;
        /**
         * - A map that contains tag keys and tag values that are attached to a billing group.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-billingconductor-billinggroup-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-billinggroup.html#cfn-billingconductor-billinggroup-tags */
        "Tags"?: Tag[];
    };
}