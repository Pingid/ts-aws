import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The configuration information of the grouping of Amazon Q in Connect users.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html */

export interface GroupingConfiguration {
    /**
     * - The criteria used for grouping Amazon Q in Connect users.
     * - The following is the list of supported criteria values.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-groupingconfiguration-criteria */
    "Criteria": string | Intrinsic;
    /**
     * - The list of values that define different groups of Amazon Q in Connect users.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-groupingconfiguration-values */
    "Values": (string | Intrinsic)[];
}

/**
 * The `Tag` property type specifies Property description not available. for an [AWS::Wisdom::MessageTemplate](./aws-resource-wisdom-messagetemplate.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html */

export interface Tag {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the message template tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Information about an agent.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html */

export interface AgentAttributes {
    /**
     * - The agent’s first name as entered in their Amazon Connect user account.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-agentattributes-firstname */
    "FirstName"?: string | Intrinsic;
    /**
     * - The agent’s last name as entered in their Amazon Connect user account.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-agentattributes-lastname */
    "LastName"?: string | Intrinsic;
}

/**
 * The customer profile attributes that are used with the message template.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html */

export interface CustomerProfileAttributes {
    /**
     * - A unique account number that you have given to the customer.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-accountnumber */
    "AccountNumber"?: string | Intrinsic;
    /**
     * - Any additional information relevant to the customer's profile.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-additionalinformation */
    "AdditionalInformation"?: string | Intrinsic;
    /**
     * - The first line of a customer address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-address1 */
    "Address1"?: string | Intrinsic;
    /**
     * - The second line of a customer address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-address2 */
    "Address2"?: string | Intrinsic;
    /**
     * - The third line of a customer address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-address3 */
    "Address3"?: string | Intrinsic;
    /**
     * - The fourth line of a customer address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-address4 */
    "Address4"?: string | Intrinsic;
    /**
     * - The first line of a customer’s billing address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-billingaddress1 */
    "BillingAddress1"?: string | Intrinsic;
    /**
     * - The second line of a customer’s billing address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-billingaddress2 */
    "BillingAddress2"?: string | Intrinsic;
    /**
     * - The third line of a customer’s billing address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-billingaddress3 */
    "BillingAddress3"?: string | Intrinsic;
    /**
     * - The fourth line of a customer’s billing address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-billingaddress4 */
    "BillingAddress4"?: string | Intrinsic;
    /**
     * - The city of a customer’s billing address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-billingcity */
    "BillingCity"?: string | Intrinsic;
    /**
     * - The country of a customer’s billing address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-billingcountry */
    "BillingCountry"?: string | Intrinsic;
    /**
     * - The county of a customer’s billing address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-billingcounty */
    "BillingCounty"?: string | Intrinsic;
    /**
     * - The postal code of a customer’s billing address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-billingpostalcode */
    "BillingPostalCode"?: string | Intrinsic;
    /**
     * - The province of a customer’s billing address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-billingprovince */
    "BillingProvince"?: string | Intrinsic;
    /**
     * - The state of a customer’s billing address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-billingstate */
    "BillingState"?: string | Intrinsic;
    /**
     * - The customer's birth date.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-birthdate */
    "BirthDate"?: string | Intrinsic;
    /**
     * - The customer's business email address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-businessemailaddress */
    "BusinessEmailAddress"?: string | Intrinsic;
    /**
     * - The name of the customer's business.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-businessname */
    "BusinessName"?: string | Intrinsic;
    /**
     * - The customer's business phone number.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-businessphonenumber */
    "BusinessPhoneNumber"?: string | Intrinsic;
    /**
     * - The city in which a customer lives.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-city */
    "City"?: string | Intrinsic;
    /**
     * - The country in which a customer lives.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-country */
    "Country"?: string | Intrinsic;
    /**
     * - The county in which a customer lives.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-county */
    "County"?: string | Intrinsic;
    /**
     * - The custom attributes in customer profile attributes.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^[a-zA-Z0-9\s._:/=+@-]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-custom */
    "Custom"?: Record<string, string | Intrinsic>;
    /**
     * - The customer's email address, which has not been specified as a personal or business address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-emailaddress */
    "EmailAddress"?: string | Intrinsic;
    /**
     * - The customer's first name.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-firstname */
    "FirstName"?: string | Intrinsic;
    /**
     * - The customer's gender.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-gender */
    "Gender"?: string | Intrinsic;
    /**
     * - The customer's mobile phone number.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-homephonenumber */
    "HomePhoneNumber"?: string | Intrinsic;
    /**
     * - The customer's last name.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-lastname */
    "LastName"?: string | Intrinsic;
    /**
     * - The first line of a customer’s mailing address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-mailingaddress1 */
    "MailingAddress1"?: string | Intrinsic;
    /**
     * - The second line of a customer’s mailing address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-mailingaddress2 */
    "MailingAddress2"?: string | Intrinsic;
    /**
     * - The third line of a customer’s mailing address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-mailingaddress3 */
    "MailingAddress3"?: string | Intrinsic;
    /**
     * - The fourth line of a customer’s mailing address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-mailingaddress4 */
    "MailingAddress4"?: string | Intrinsic;
    /**
     * - The city of a customer’s mailing address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-mailingcity */
    "MailingCity"?: string | Intrinsic;
    /**
     * - The country of a customer’s mailing address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-mailingcountry */
    "MailingCountry"?: string | Intrinsic;
    /**
     * - The county of a customer’s mailing address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-mailingcounty */
    "MailingCounty"?: string | Intrinsic;
    /**
     * - The postal code of a customer’s mailing address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-mailingpostalcode */
    "MailingPostalCode"?: string | Intrinsic;
    /**
     * - The province of a customer’s mailing address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-mailingprovince */
    "MailingProvince"?: string | Intrinsic;
    /**
     * - The state of a customer’s mailing address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-mailingstate */
    "MailingState"?: string | Intrinsic;
    /**
     * - The customer's middle name.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-middlename */
    "MiddleName"?: string | Intrinsic;
    /**
     * - The customer's mobile phone number.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-mobilephonenumber */
    "MobilePhoneNumber"?: string | Intrinsic;
    /**
     * - The customer's party type.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-partytype */
    "PartyType"?: string | Intrinsic;
    /**
     * - The customer's phone number, which has not been specified as a mobile, home, or business number.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-phonenumber */
    "PhoneNumber"?: string | Intrinsic;
    /**
     * - The postal code of a customer address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-postalcode */
    "PostalCode"?: string | Intrinsic;
    /**
     * - The ARN of a customer profile.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-profilearn */
    "ProfileARN"?: string | Intrinsic;
    /**
     * - The unique identifier of a customer profile.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-profileid */
    "ProfileId"?: string | Intrinsic;
    /**
     * - The province in which a customer lives.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-province */
    "Province"?: string | Intrinsic;
    /**
     * - The first line of a customer’s shipping address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-shippingaddress1 */
    "ShippingAddress1"?: string | Intrinsic;
    /**
     * - The second line of a customer’s shipping address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-shippingaddress2 */
    "ShippingAddress2"?: string | Intrinsic;
    /**
     * - The third line of a customer’s shipping address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-shippingaddress3 */
    "ShippingAddress3"?: string | Intrinsic;
    /**
     * - The fourth line of a customer’s shipping address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-shippingaddress4 */
    "ShippingAddress4"?: string | Intrinsic;
    /**
     * - The city of a customer’s shipping address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-shippingcity */
    "ShippingCity"?: string | Intrinsic;
    /**
     * - The country of a customer’s shipping address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-shippingcountry */
    "ShippingCountry"?: string | Intrinsic;
    /**
     * - The county of a customer’s shipping address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-shippingcounty */
    "ShippingCounty"?: string | Intrinsic;
    /**
     * - The postal code of a customer’s shipping address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-shippingpostalcode */
    "ShippingPostalCode"?: string | Intrinsic;
    /**
     * - The province of a customer’s shipping address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-shippingprovince */
    "ShippingProvince"?: string | Intrinsic;
    /**
     * - The state of a customer’s shipping address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-shippingstate */
    "ShippingState"?: string | Intrinsic;
    /**
     * - The state in which a customer lives.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-customerprofileattributes-state */
    "State"?: string | Intrinsic;
}

/**
 * The email headers to include in email messages.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html */

export interface EmailMessageTemplateHeader {
    /**
     * - The name of the email header.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[!-9;-@A-~]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `126`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-emailmessagetemplateheader-name */
    "Name"?: string | Intrinsic;
    /**
     * - The value of the email header.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[ -~]*`
     * - _Minimum_: `1`
     * - _Maximum_: `870`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-emailmessagetemplateheader-value */
    "Value"?: string | Intrinsic;
}

/**
 * The system endpoint attributes that are used with the message template.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html */

export interface SystemEndpointAttributes {
    /**
     * - The customer's phone number if used with `customerEndpoint`, or the number the customer dialed to call your contact center if used with `systemEndpoint`.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-systemendpointattributes-address */
    "Address"?: string | Intrinsic;
}

/**
 * The system attributes that are used with the message template.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html */

export interface SystemAttributes {
    /**
     * - The CustomerEndpoint attribute.
     * - _Required_: No
     * - _Type_: [SystemEndpointAttributes](./aws-properties-wisdom-messagetemplate-systemendpointattributes.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-systemattributes-customerendpoint */
    "CustomerEndpoint"?: SystemEndpointAttributes;
    /**
     * - The name of the task.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-systemattributes-name */
    "Name"?: string | Intrinsic;
    /**
     * - The SystemEndpoint attribute.
     * - _Required_: No
     * - _Type_: [SystemEndpointAttributes](./aws-properties-wisdom-messagetemplate-systemendpointattributes.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-systemattributes-systemendpoint */
    "SystemEndpoint"?: SystemEndpointAttributes;
}

/**
 * The attributes that are used with the message template.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html */

export interface MessageTemplateAttributes {
    /**
     * - The agent attributes that are used with the message template.
     * - _Required_: No
     * - _Type_: [AgentAttributes](./aws-properties-wisdom-messagetemplate-agentattributes.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-messagetemplateattributes-agentattributes */
    "AgentAttributes"?: AgentAttributes;
    /**
     * - The custom attributes that are used with the message template.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^[a-zA-Z0-9\s._:/=+@-]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `32767`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-messagetemplateattributes-customattributes */
    "CustomAttributes"?: Record<string, string | Intrinsic>;
    /**
     * - The customer profile attributes that are used with the message template.
     * - _Required_: No
     * - _Type_: [CustomerProfileAttributes](./aws-properties-wisdom-messagetemplate-customerprofileattributes.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-messagetemplateattributes-customerprofileattributes */
    "CustomerProfileAttributes"?: CustomerProfileAttributes;
    /**
     * - The system attributes that are used with the message template.
     * - _Required_: No
     * - _Type_: [SystemAttributes](./aws-properties-wisdom-messagetemplate-systemattributes.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-messagetemplateattributes-systemattributes */
    "SystemAttributes"?: SystemAttributes;
}

/**
 * The body to use in SMS messages.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html */

export interface SmsMessageTemplateContentBody {
    /**
     * - The message body to use in SMS messages.
     * - _Required_: No
     * - _Type_: [MessageTemplateBodyContentProvider](./aws-properties-wisdom-messagetemplate-messagetemplatebodycontentprovider.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-smsmessagetemplatecontentbody-plaintext */
    "PlainText"?: MessageTemplateBodyContentProvider;
}

/**
 * The content of the message template that applies to the SMS channel subtype.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html */

export interface SmsMessageTemplateContent {
    /**
     * - The body to use in SMS messages.
     * - _Required_: Yes
     * - _Type_: [SmsMessageTemplateContentBody](./aws-properties-wisdom-messagetemplate-smsmessagetemplatecontentbody.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-smsmessagetemplatecontent-body */
    "Body": SmsMessageTemplateContentBody;
}

/**
 * The container of the message template body.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html */

export interface MessageTemplateBodyContentProvider {
    /**
     * - The content of the message template.
     * - _Required_: No
     * - _Type_: [String](./aws-properties-wisdom-messagetemplate-content.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-messagetemplatebodycontentprovider-content */
    "Content"?: string | Intrinsic;
}

/**
 * The body to use in email messages.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html */

export interface EmailMessageTemplateContentBody {
    /**
     * - The message body, in HTML format, to use in email messages that are based on the message template. We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.
     * - _Required_: No
     * - _Type_: [MessageTemplateBodyContentProvider](./aws-properties-wisdom-messagetemplate-messagetemplatebodycontentprovider.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-emailmessagetemplatecontentbody-html */
    "Html"?: MessageTemplateBodyContentProvider;
    /**
     * - The message body, in plain text format, to use in email messages that are based on the message template. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.
     * - _Required_: No
     * - _Type_: [MessageTemplateBodyContentProvider](./aws-properties-wisdom-messagetemplate-messagetemplatebodycontentprovider.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-emailmessagetemplatecontentbody-plaintext */
    "PlainText"?: MessageTemplateBodyContentProvider;
}

/**
 * The content of the message template that applies to the email channel subtype.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html */

export interface EmailMessageTemplateContent {
    /**
     * - The body to use in email messages.
     * - _Required_: Yes
     * - _Type_: [EmailMessageTemplateContentBody](./aws-properties-wisdom-messagetemplate-emailmessagetemplatecontentbody.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-emailmessagetemplatecontent-body */
    "Body": EmailMessageTemplateContentBody;
    /**
     * - The email headers to include in email messages.
     * - _Required_: Yes
     * - _Type_: Array of [EmailMessageTemplateHeader](./aws-properties-wisdom-messagetemplate-emailmessagetemplateheader.html)
     * - _Minimum_: `0`
     * - _Maximum_: `15`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-emailmessagetemplatecontent-headers */
    "Headers": EmailMessageTemplateHeader[];
    /**
     * - The subject line, or title, to use in email messages.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-emailmessagetemplatecontent-subject */
    "Subject": string | Intrinsic;
}

/**
 * The content of the message template.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html */

export interface Content {
    /**
     * - The content of the message template that applies to the email channel subtype.
     * - _Required_: No
     * - _Type_: [EmailMessageTemplateContent](./aws-properties-wisdom-messagetemplate-emailmessagetemplatecontent.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-content-emailmessagetemplatecontent */
    "EmailMessageTemplateContent"?: EmailMessageTemplateContent;
    /**
     * - The content of message template that applies to SMS channel subtype.
     * - _Required_: No
     * - _Type_: [SmsMessageTemplateContent](./aws-properties-wisdom-messagetemplate-smsmessagetemplatecontent.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-content-smsmessagetemplatecontent */
    "SmsMessageTemplateContent"?: SmsMessageTemplateContent;
}

/**
 * Creates an Amazon Q in Connect message template. The name of the message template has to be unique for each knowledge base. The channel subtype of the message template is immutable and cannot be modified after creation. After the message template is created, you can use the `$LATEST` qualifier to reference the created message template.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html */

export interface WisdomMessageTemplate extends ResourceAttributes {
    "Type": "AWS::Wisdom::MessageTemplate";
    "Properties": {
        /**
         * - The channel subtype this message template applies to.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `EMAIL | SMS`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-channelsubtype */
        "ChannelSubtype": string | Intrinsic;
        /**
         * - The content of the message template.
         * - _Required_: Yes
         * - _Type_: [Content](./aws-properties-wisdom-messagetemplate-content.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-content */
        "Content": Content;
        /**
         * - An object that specifies the default values to use for variables in the message template. This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template. The corresponding value defines the default value for that variable.
         * - _Required_: No
         * - _Type_: [MessageTemplateAttributes](./aws-properties-wisdom-messagetemplate-messagetemplateattributes.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-defaultattributes */
        "DefaultAttributes"?: MessageTemplateAttributes;
        /**
         * - The description of the message template.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9\\s_.,-]+`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-description */
        "Description"?: string | Intrinsic;
        /**
         * - The configuration information of the external data source.
         * - _Required_: No
         * - _Type_: [GroupingConfiguration](./aws-properties-wisdom-messagetemplate-groupingconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-groupingconfiguration */
        "GroupingConfiguration"?: GroupingConfiguration;
        /**
         * - The Amazon Resource Name (ARN) of the knowledge base.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})?$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-knowledgebasearn */
        "KnowledgeBaseArn": string | Intrinsic;
        /**
         * - The language code value for the language in which the quick response is written. The supported language codes include `de_DE`, `en_US`, `es_ES`, `fr_FR`, `id_ID`, `it_IT`, `ja_JP`, `ko_KR`, `pt_BR`, `zh_CN`, `zh_TW`
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `2`
         * - _Maximum_: `5`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-language */
        "Language"?: string | Intrinsic;
        /**
         * - The name of the message template.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9\\s_.,-]+`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-name */
        "Name": string | Intrinsic;
        /**
         * - The tags used to organize, track, or control access for this resource.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-wisdom-messagetemplate-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplate.html#cfn-wisdom-messagetemplate-tags */
        "Tags"?: Tag[];
    };
}