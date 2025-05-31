import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The billing period range in which the custom line item request will be applied.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html */

export interface BillingPeriodRange {
    /**
     * - The exclusive end billing period that defines a billing period range where a custom line is applied.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `\d{4}-(0?[1-9]|1[012])`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-billingperiodrange-exclusiveendbillingperiod */
    "ExclusiveEndBillingPeriod"?: string | Intrinsic;
    /**
     * - The inclusive start billing period that defines a billing period range where a custom line is applied.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `\d{4}-(0?[1-9]|1[012])`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-billingperiodrange-inclusivestartbillingperiod */
    "InclusiveStartBillingPeriod"?: string | Intrinsic;
}

/**
 * A custom key-value pair associated with a Billing Conductor resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html */

export interface Tag {
    /**
     * - The key in a key-value pair.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value in a key-value pair of a tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-tag-value */
    "Value": string | Intrinsic;
}

/**
 * A representation of the line item filter for your custom line item. You can use line item filters to include or exclude specific resource values from the billing group's total cost. For example, if you create a custom line item and you want to filter out a value, such as Savings Plan discounts, you can update `LineItemFilter` to exclude it.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html */

export interface LineItemFilter {
    /**
     * - The attribute of the line item filter. This specifies what attribute that you can filter on.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `LINE_ITEM_TYPE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-lineitemfilter-attribute */
    "Attribute": string | Intrinsic;
    /**
     * - The match criteria of the line item filter. This parameter specifies whether not to include the resource value from the billing group total cost.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `NOT_EQUAL`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-lineitemfilter-matchoption */
    "MatchOption": string | Intrinsic;
    /**
     * - The values of the line item filter. This specifies the values to filter on. Currently, you can only exclude Savings Plan discounts.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-lineitemfilter-values */
    "Values": (string | Intrinsic)[];
}

/**
 * The charge details of a custom line item. It should contain only one of `Flat` or `Percentage`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html */

export interface CustomLineItemFlatChargeDetails {
    /**
     * - The custom line item's fixed charge value in USD.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Maximum_: `1000000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-customlineitemflatchargedetails-chargevalue */
    "ChargeValue": number | Intrinsic;
}

/**
 * A representation of the charge details associated with a percentage custom line item.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html */

export interface CustomLineItemPercentageChargeDetails {
    /**
     * - A list of resource ARNs to associate to the percentage custom line item.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-customlineitempercentagechargedetails-childassociatedresources */
    "ChildAssociatedResources"?: (string | Intrinsic)[];
    /**
     * - The custom line item's percentage value. This will be multiplied against the combined value of its associated resources to determine its charge value.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Maximum_: `10000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-customlineitempercentagechargedetails-percentagevalue */
    "PercentageValue": number | Intrinsic;
}

/**
 * The charge details of a custom line item. It should contain only one of `Flat` or `Percentage`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html */

export interface CustomLineItemChargeDetails {
    /**
     * - A `CustomLineItemFlatChargeDetails` that describes the charge details of a flat custom line item.
     * - _Required_: No
     * - _Type_: [CustomLineItemFlatChargeDetails](./aws-properties-billingconductor-customlineitem-customlineitemflatchargedetails.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-customlineitemchargedetails-flat */
    "Flat"?: CustomLineItemFlatChargeDetails;
    /**
     * - A representation of the line item filter.
     * - _Required_: No
     * - _Type_: Array of [LineItemFilter](./aws-properties-billingconductor-customlineitem-lineitemfilter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-customlineitemchargedetails-lineitemfilters */
    "LineItemFilters"?: LineItemFilter[];
    /**
     * - A `CustomLineItemPercentageChargeDetails` that describes the charge details of a percentage custom line item.
     * - _Required_: No
     * - _Type_: [CustomLineItemPercentageChargeDetails](./aws-properties-billingconductor-customlineitem-customlineitempercentagechargedetails.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-customlineitemchargedetails-percentage */
    "Percentage"?: CustomLineItemPercentageChargeDetails;
    /**
     * - The type of the custom line item that indicates whether the charge is a fee or credit.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `FEE | CREDIT`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-customlineitemchargedetails-type */
    "Type": string | Intrinsic;
}

/**
 * Creates a custom line item that can be used to create a one-time or recurring, fixed or percentage-based charge that you can apply to a single billing group. You can apply custom line items to the current or previous billing period. You can create either a fee or a discount custom line item.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html */

export interface BillingConductorCustomLineItem extends ResourceAttributes {
    "Type": "AWS::BillingConductor::CustomLineItem";
    "Properties": {
        /**
         * - The AWS account in which this custom line item will be applied to.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[0-9]{12}`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-accountid */
        "AccountId"?: string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) that references the billing group where the custom line item applies to.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `arn:aws(-cn)?:billingconductor::[0-9]{12}:billinggroup/?[0-9]{12}`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-billinggrouparn */
        "BillingGroupArn": string | Intrinsic;
        /**
         * - A time range for which the custom line item is effective.
         * - _Required_: No
         * - _Type_: [BillingPeriodRange](./aws-properties-billingconductor-customlineitem-billingperiodrange.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-billingperiodrange */
        "BillingPeriodRange"?: BillingPeriodRange;
        /**
         * - The charge details of a custom line item. It should contain only one of `Flat` or `Percentage`.
         * - _Required_: No
         * - _Type_: [CustomLineItemChargeDetails](./aws-properties-billingconductor-customlineitem-customlineitemchargedetails.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-customlineitemchargedetails */
        "CustomLineItemChargeDetails"?: CustomLineItemChargeDetails;
        /**
         * - The custom line item's description. This is shown on the Bills page in association with the charge value.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-description */
        "Description"?: string | Intrinsic;
        /**
         * - The custom line item's name.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9_\+=\.\-@]+`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-name */
        "Name": string | Intrinsic;
        /**
         * - A map that contains tag keys and tag values that are attached to a custom line item.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-billingconductor-customlineitem-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-customlineitem.html#cfn-billingconductor-customlineitem-tags */
        "Tags"?: Tag[];
    };
}