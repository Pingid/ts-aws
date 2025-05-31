import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The tag belonging to the segment definition.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html */

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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-tag-key */
    "Key": string | Intrinsic;
    /**
     * - One part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key). The value can be empty or null.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The source segments to build off of.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html */

export interface SourceSegment {
    /**
     * - The name of the source segment.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-sourcesegment-segmentdefinitionname */
    "SegmentDefinitionName"?: string | Intrinsic;
}

/**
 * Object that segments on various Customer profile's fields that are larger than normal.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html */

export interface ProfileDimension {
    /**
     * - The action to segment on.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `INCLUSIVE | EXCLUSIVE | CONTAINS | BEGINS_WITH | ENDS_WITH`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profiledimension-dimensiontype */
    "DimensionType": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1 | 1`
     * - _Maximum_: `255 | 50`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profiledimension-values */
    "Values": (string | Intrinsic)[];
}

/**
 * Object that segments on various Customer profile's fields that are larger than normal.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html */

export interface ExtraLengthValueProfileDimension {
    /**
     * - The action to segment with.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `INCLUSIVE | EXCLUSIVE | CONTAINS | BEGINS_WITH | ENDS_WITH`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-extralengthvalueprofiledimension-dimensiontype */
    "DimensionType": string | Intrinsic;
    /**
     * - The values to apply the DimensionType on.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1 | 1`
     * - _Maximum_: `1000 | 50`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-extralengthvalueprofiledimension-values */
    "Values": (string | Intrinsic)[];
}

/**
 * Object that segments on Customer Profile's address object.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html */

export interface AddressDimension {
    /**
     * - The city belonging to the address.
     * - _Required_: No
     * - _Type_: [ProfileDimension](./aws-properties-customerprofiles-segmentdefinition-profiledimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-addressdimension-city */
    "City"?: ProfileDimension;
    /**
     * - The country belonging to the address.
     * - _Required_: No
     * - _Type_: [ProfileDimension](./aws-properties-customerprofiles-segmentdefinition-profiledimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-addressdimension-country */
    "Country"?: ProfileDimension;
    /**
     * - The county belonging to the address.
     * - _Required_: No
     * - _Type_: [ProfileDimension](./aws-properties-customerprofiles-segmentdefinition-profiledimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-addressdimension-county */
    "County"?: ProfileDimension;
    /**
     * - The postal code belonging to the address.
     * - _Required_: No
     * - _Type_: [ProfileDimension](./aws-properties-customerprofiles-segmentdefinition-profiledimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-addressdimension-postalcode */
    "PostalCode"?: ProfileDimension;
    /**
     * - The province belonging to the address.
     * - _Required_: No
     * - _Type_: [ProfileDimension](./aws-properties-customerprofiles-segmentdefinition-profiledimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-addressdimension-province */
    "Province"?: ProfileDimension;
    /**
     * - The state belonging to the address.
     * - _Required_: No
     * - _Type_: [ProfileDimension](./aws-properties-customerprofiles-segmentdefinition-profiledimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-addressdimension-state */
    "State"?: ProfileDimension;
}

/**
 * Object that defines how to filter the incoming objects for the calculated attribute.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html */

export interface AttributeDimension {
    /**
     * - The action to segment with.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `INCLUSIVE | EXCLUSIVE | CONTAINS | BEGINS_WITH | ENDS_WITH | BEFORE | AFTER | BETWEEN | NOT_BETWEEN | ON | GREATER_THAN | LESS_THAN | GREATER_THAN_OR_EQUAL | LESS_THAN_OR_EQUAL | EQUAL`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-attributedimension-dimensiontype */
    "DimensionType": string | Intrinsic;
    /**
     * - The values to apply the DimensionType on.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1 | 1`
     * - _Maximum_: `255 | 50`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-attributedimension-values */
    "Values": (string | Intrinsic)[];
}

/**
 * Object that segments on various Customer Profile's date fields.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html */

export interface DateDimension {
    /**
     * - The action to segment on.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `BEFORE | AFTER | BETWEEN | NOT_BETWEEN | ON`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-datedimension-dimensiontype */
    "DimensionType": string | Intrinsic;
    /**
     * - The values to apply the DimensionType on.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-datedimension-values */
    "Values": (string | Intrinsic)[];
}

/**
 * The object used to segment on attributes within the customer profile.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html */

export interface ProfileAttributes {
    /**
     * - A field to describe values to segment on within account number.
     * - _Required_: No
     * - _Type_: [ProfileDimension](./aws-properties-customerprofiles-segmentdefinition-profiledimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profileattributes-accountnumber */
    "AccountNumber"?: ProfileDimension;
    /**
     * - A field to describe values to segment on within additional information.
     * - _Required_: No
     * - _Type_: [ExtraLengthValueProfileDimension](./aws-properties-customerprofiles-segmentdefinition-extralengthvalueprofiledimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profileattributes-additionalinformation */
    "AdditionalInformation"?: ExtraLengthValueProfileDimension;
    /**
     * - A field to describe values to segment on within address.
     * - _Required_: No
     * - _Type_: [AddressDimension](./aws-properties-customerprofiles-segmentdefinition-addressdimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profileattributes-address */
    "Address"?: AddressDimension;
    /**
     * - A field to describe values to segment on within attributes.
     * - _Required_: No
     * - _Type_: Object of [AttributeDimension](./aws-properties-customerprofiles-segmentdefinition-attributedimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profileattributes-attributes */
    "Attributes"?: Record<string, AttributeDimension>;
    /**
     * - A field to describe values to segment on within billing address.
     * - _Required_: No
     * - _Type_: [AddressDimension](./aws-properties-customerprofiles-segmentdefinition-addressdimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profileattributes-billingaddress */
    "BillingAddress"?: AddressDimension;
    /**
     * - A field to describe values to segment on within birthDate.
     * - _Required_: No
     * - _Type_: [DateDimension](./aws-properties-customerprofiles-segmentdefinition-datedimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profileattributes-birthdate */
    "BirthDate"?: DateDimension;
    /**
     * - A field to describe values to segment on within business email address.
     * - _Required_: No
     * - _Type_: [ProfileDimension](./aws-properties-customerprofiles-segmentdefinition-profiledimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profileattributes-businessemailaddress */
    "BusinessEmailAddress"?: ProfileDimension;
    /**
     * - A field to describe values to segment on within business name.
     * - _Required_: No
     * - _Type_: [ProfileDimension](./aws-properties-customerprofiles-segmentdefinition-profiledimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profileattributes-businessname */
    "BusinessName"?: ProfileDimension;
    /**
     * - A field to describe values to segment on within business phone number.
     * - _Required_: No
     * - _Type_: [ProfileDimension](./aws-properties-customerprofiles-segmentdefinition-profiledimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profileattributes-businessphonenumber */
    "BusinessPhoneNumber"?: ProfileDimension;
    /**
     * - A field to describe values to segment on within email address.
     * - _Required_: No
     * - _Type_: [ProfileDimension](./aws-properties-customerprofiles-segmentdefinition-profiledimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profileattributes-emailaddress */
    "EmailAddress"?: ProfileDimension;
    /**
     * - A field to describe values to segment on within first name.
     * - _Required_: No
     * - _Type_: [ProfileDimension](./aws-properties-customerprofiles-segmentdefinition-profiledimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profileattributes-firstname */
    "FirstName"?: ProfileDimension;
    /**
     * - A field to describe values to segment on within genderString.
     * - _Required_: No
     * - _Type_: [ProfileDimension](./aws-properties-customerprofiles-segmentdefinition-profiledimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profileattributes-genderstring */
    "GenderString"?: ProfileDimension;
    /**
     * - A field to describe values to segment on within home phone number.
     * - _Required_: No
     * - _Type_: [ProfileDimension](./aws-properties-customerprofiles-segmentdefinition-profiledimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profileattributes-homephonenumber */
    "HomePhoneNumber"?: ProfileDimension;
    /**
     * - A field to describe values to segment on within last name.
     * - _Required_: No
     * - _Type_: [ProfileDimension](./aws-properties-customerprofiles-segmentdefinition-profiledimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profileattributes-lastname */
    "LastName"?: ProfileDimension;
    /**
     * - A field to describe values to segment on within mailing address.
     * - _Required_: No
     * - _Type_: [AddressDimension](./aws-properties-customerprofiles-segmentdefinition-addressdimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profileattributes-mailingaddress */
    "MailingAddress"?: AddressDimension;
    /**
     * - A field to describe values to segment on within middle name.
     * - _Required_: No
     * - _Type_: [ProfileDimension](./aws-properties-customerprofiles-segmentdefinition-profiledimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profileattributes-middlename */
    "MiddleName"?: ProfileDimension;
    /**
     * - A field to describe values to segment on within mobile phone number.
     * - _Required_: No
     * - _Type_: [ProfileDimension](./aws-properties-customerprofiles-segmentdefinition-profiledimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profileattributes-mobilephonenumber */
    "MobilePhoneNumber"?: ProfileDimension;
    /**
     * - A field to describe values to segment on within partyTypeString.
     * - _Required_: No
     * - _Type_: [ProfileDimension](./aws-properties-customerprofiles-segmentdefinition-profiledimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profileattributes-partytypestring */
    "PartyTypeString"?: ProfileDimension;
    /**
     * - A field to describe values to segment on within personal email address.
     * - _Required_: No
     * - _Type_: [ProfileDimension](./aws-properties-customerprofiles-segmentdefinition-profiledimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profileattributes-personalemailaddress */
    "PersonalEmailAddress"?: ProfileDimension;
    /**
     * - A field to describe values to segment on within phone number.
     * - _Required_: No
     * - _Type_: [ProfileDimension](./aws-properties-customerprofiles-segmentdefinition-profiledimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profileattributes-phonenumber */
    "PhoneNumber"?: ProfileDimension;
    /**
     * - A field to describe values to segment on within shipping address.
     * - _Required_: No
     * - _Type_: [AddressDimension](./aws-properties-customerprofiles-segmentdefinition-addressdimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-profileattributes-shippingaddress */
    "ShippingAddress"?: AddressDimension;
}

/**
 * Overrides the original range on a calculated attribute definition.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html */

export interface RangeOverride {
    /**
     * - The end time of when to include objects.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `366`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-rangeoverride-end */
    "End"?: number | Intrinsic;
    /**
     * - The start time of when to include objects.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `366`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-rangeoverride-start */
    "Start": number | Intrinsic;
    /**
     * - The unit for start and end.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `DAYS`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-rangeoverride-unit */
    "Unit": string | Intrinsic;
}

/**
 * An object to override the original condition block of a calculated attribute.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html */

export interface ConditionOverrides {
    /**
     * - The relative time period over which data is included in the aggregation for this override.
     * - _Required_: No
     * - _Type_: [RangeOverride](./aws-properties-customerprofiles-segmentdefinition-rangeoverride.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-conditionoverrides-range */
    "Range"?: RangeOverride;
}

/**
 * Object that segments on Customer Profile's Calculated Attributes.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html */

export interface CalculatedAttributeDimension {
    /**
     * - Applies the given condition over the initial Calculated Attribute's definition.
     * - _Required_: No
     * - _Type_: [ConditionOverrides](./aws-properties-customerprofiles-segmentdefinition-conditionoverrides.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-calculatedattributedimension-conditionoverrides */
    "ConditionOverrides"?: ConditionOverrides;
    /**
     * - The action to segment with.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `INCLUSIVE | EXCLUSIVE | CONTAINS | BEGINS_WITH | ENDS_WITH | BEFORE | AFTER | BETWEEN | NOT_BETWEEN | ON | GREATER_THAN | LESS_THAN | GREATER_THAN_OR_EQUAL | LESS_THAN_OR_EQUAL | EQUAL`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-calculatedattributedimension-dimensiontype */
    "DimensionType": string | Intrinsic;
    /**
     * - The values to apply the DimensionType with.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1 | 1`
     * - _Maximum_: `255 | 50`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-calculatedattributedimension-values */
    "Values": (string | Intrinsic)[];
}

/**
 * Defines the attribute to segment on.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html */

export interface Dimension {
    /**
     * - Object that holds the calculated attributes to segment on.
     * - _Required_: No
     * - _Type_: Object of [CalculatedAttributeDimension](./aws-properties-customerprofiles-segmentdefinition-calculatedattributedimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-dimension-calculatedattributes */
    "CalculatedAttributes"?: Record<string, CalculatedAttributeDimension>;
    /**
     * - Object that holds the profile attributes to segment on.
     * - _Required_: No
     * - _Type_: [ProfileAttributes](./aws-properties-customerprofiles-segmentdefinition-profileattributes.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-dimension-profileattributes */
    "ProfileAttributes"?: ProfileAttributes;
}

/**
 * Contains dimensions that determine what to segment on.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html */

export interface Group {
    /**
     * - Defines the attributes to segment on.
     * - _Required_: No
     * - _Type_: Array of [Dimension](./aws-properties-customerprofiles-segmentdefinition-dimension.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-group-dimensions */
    "Dimensions"?: Dimension[];
    /**
     * - Defines the starting source of data.
     * - _Required_: No
     * - _Type_: Array of [SourceSegment](./aws-properties-customerprofiles-segmentdefinition-sourcesegment.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-group-sourcesegments */
    "SourceSegments"?: SourceSegment[];
    /**
     * - Defines how to interact with the source data.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ALL | ANY | NONE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-group-sourcetype */
    "SourceType"?: string | Intrinsic;
    /**
     * - Defines how to interact with the profiles found in the current filtering.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ALL | ANY | NONE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-group-type */
    "Type"?: string | Intrinsic;
}

/**
 * Contains all groups of the segment definition.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html */

export interface SegmentGroup {
    /**
     * - Holds the list of groups within the segment definition.
     * - _Required_: No
     * - _Type_: Array of [Group](./aws-properties-customerprofiles-segmentdefinition-group.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-segmentgroup-groups */
    "Groups"?: Group[];
    /**
     * - Defines whether to include or exclude the profiles that fit the segment criteria.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ALL | ANY | NONE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-segmentgroup-include */
    "Include"?: string | Intrinsic;
}

/**
 * A segment definition resource of Amazon Connect Customer Profiles.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html */

export interface CustomerProfilesSegmentDefinition extends ResourceAttributes {
    "Type": "AWS::CustomerProfiles::SegmentDefinition";
    "Properties": {
        /**
         * - The description of the segment definition.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `1000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-description */
        "Description"?: string | Intrinsic;
        /**
         * - Display name of the segment definition.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-displayname */
        "DisplayName": string | Intrinsic;
        /**
         * - The name of the domain.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_-]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-domainname */
        "DomainName": string | Intrinsic;
        /**
         * - Name of the segment definition.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_-]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-segmentdefinitionname */
        "SegmentDefinitionName": string | Intrinsic;
        /**
         * - Contains all groups of the segment definition.
         * - _Required_: Yes
         * - _Type_: [SegmentGroup](./aws-properties-customerprofiles-segmentdefinition-segmentgroup.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-segmentgroups */
        "SegmentGroups": SegmentGroup;
        /**
         * - The tags belonging to the segment definition.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-customerprofiles-segmentdefinition-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-customerprofiles-segmentdefinition.html#cfn-customerprofiles-segmentdefinition-tags */
        "Tags"?: Tag[];
    };
}