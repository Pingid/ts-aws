import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The tag structure that contains a tag key and value.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-invoicing-invoiceunit.html */

export interface ResourceTag {
    /**
     * - The object key of your of your resource tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-invoicing-invoiceunit.html#cfn-invoicing-invoiceunit-resourcetag-key */
    "Key": string | Intrinsic;
    /**
     * - The specific value of the resource tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-invoicing-invoiceunit.html#cfn-invoicing-invoiceunit-resourcetag-value */
    "Value": string | Intrinsic;
}

/**
 * The `InvoiceUnitRule` object used to update invoice units.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-invoicing-invoiceunit.html */

export interface Rule {
    /**
     * - The list of `LINKED_ACCOUNT` IDs where charges are included within the invoice unit.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `12`
     * - _Maximum_: `12`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-invoicing-invoiceunit.html#cfn-invoicing-invoiceunit-rule-linkedaccounts */
    "LinkedAccounts": (string | Intrinsic)[];
}

/**
 * An invoice unit is a set of mutually exclusive account that correspond to your business entity. Invoice units allow you separate AWS account costs and configures your invoice for each business entity going forward.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-invoicing-invoiceunit.html */

export interface InvoicingInvoiceUnit extends ResourceAttributes {
    "Type": "AWS::Invoicing::InvoiceUnit";
    "Properties": {
        /**
         * - The assigned description for an invoice unit. This information can't be modified or deleted.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[\S\s]*$`
         * - _Minimum_: `0`
         * - _Maximum_: `500`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-invoicing-invoiceunit.html#cfn-invoicing-invoiceunit-description */
        "Description"?: string | Intrinsic;
        /**
         * - The account that receives invoices related to the invoice unit.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^\d{12}$`
         * - _Minimum_: `12`
         * - _Maximum_: `12`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-invoicing-invoiceunit.html#cfn-invoicing-invoiceunit-invoicereceiver */
        "InvoiceReceiver": string | Intrinsic;
        /**
         * - A unique name that is distinctive within your AWS.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^(?! )[\p{L}\p{N}\p{Z}-_]*(?<! )$`
         * - _Minimum_: `1`
         * - _Maximum_: `50`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-invoicing-invoiceunit.html#cfn-invoicing-invoiceunit-name */
        "Name": string | Intrinsic;
        /**
         * - The tag structure that contains a tag key and value.
         * - _Required_: No
         * - _Type_: Array of [ResourceTag](./aws-properties-invoicing-invoiceunit-resourcetag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-invoicing-invoiceunit.html#cfn-invoicing-invoiceunit-resourcetags */
        "ResourceTags"?: ResourceTag[];
        /**
         * - An `InvoiceUnitRule` object used the categorize invoice units.
         * - _Required_: Yes
         * - _Type_: [Rule](./aws-properties-invoicing-invoiceunit-rule.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-invoicing-invoiceunit.html#cfn-invoicing-invoiceunit-rule */
        "Rule": Rule;
        /**
         * - Whether the invoice unit based tax inheritance is/ should be enabled or disabled.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-invoicing-invoiceunit.html#cfn-invoicing-invoiceunit-taxinheritancedisabled */
        "TaxInheritanceDisabled"?: boolean | Intrinsic;
    };
}