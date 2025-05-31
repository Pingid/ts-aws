import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A list of key/value pairs that identify an index, FAQ, or data source. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: \_ . : / = + - @.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html */

export interface Tag {
    /**
     * - The key for the tag. Keys are not case sensitive and must be unique for the Amazon Q Business application or data source.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value associated with the tag. The value may be an empty string but it can't be null.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The value of a document attribute. You can only provide one value for a document attribute.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html */

export interface DocumentAttributeValue {
    /**
     * - A date expressed as an ISO 8601 string.
     * - It's important for the time zone to be included in the ISO 8601 date-time format. For example, 2012-03-25T12:30:10+01:00 is the ISO 8601 date-time format for March 25th 2012 at 12:30PM (plus 10 seconds) in Central European Time.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-documentattributevalue-datevalue */
    "DateValue"?: string | Intrinsic;
    /**
     * - A long integer value.
     * - _Required_: No
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-documentattributevalue-longvalue */
    "LongValue"?: number | Intrinsic;
    /**
     * - A list of strings.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-documentattributevalue-stringlistvalue */
    "StringListValue"?: (string | Intrinsic)[];
    /**
     * - A string.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-documentattributevalue-stringvalue */
    "StringValue"?: string | Intrinsic;
}

/**
 * A document attribute or metadata field.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html */

export interface DocumentAttribute {
    /**
     * - The identifier for the attribute.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_][a-zA-Z0-9_-]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-documentattribute-name */
    "Name": string | Intrinsic;
    /**
     * - The value of the attribute.
     * - _Required_: Yes
     * - _Type_: [DocumentAttributeValue](./aws-properties-qbusiness-dataaccessor-documentattributevalue.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-documentattribute-value */
    "Value": DocumentAttributeValue;
}

/**
 * Enables filtering of responses based on document attributes or metadata fields.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html */

export interface AttributeFilter {
    /**
     * - Performs a logical `AND` operation on all supplied filters.
     * - _Required_: No
     * - _Type_: Array of [AttributeFilter](./aws-properties-qbusiness-dataaccessor-attributefilter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-attributefilter-andallfilters */
    "AndAllFilters"?: AttributeFilter[];
    /**
     * - Returns `true` when a document contains all the specified document attributes or metadata fields. Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html): `stringListValue`.
     * - _Required_: No
     * - _Type_: [DocumentAttribute](./aws-properties-qbusiness-dataaccessor-documentattribute.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-attributefilter-containsall */
    "ContainsAll"?: DocumentAttribute;
    /**
     * - Returns `true` when a document contains any of the specified document attributes or metadata fields. Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html): `stringListValue`.
     * - _Required_: No
     * - _Type_: [DocumentAttribute](./aws-properties-qbusiness-dataaccessor-documentattribute.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-attributefilter-containsany */
    "ContainsAny"?: DocumentAttribute;
    /**
     * - Performs an equals operation on two document attributes or metadata fields. Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html): `dateValue`, `longValue`, `stringListValue` and `stringValue`.
     * - _Required_: No
     * - _Type_: [DocumentAttribute](./aws-properties-qbusiness-dataaccessor-documentattribute.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-attributefilter-equalsto */
    "EqualsTo"?: DocumentAttribute;
    /**
     * - Performs a greater than operation on two document attributes or metadata fields. Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html): `dateValue` and `longValue`.
     * - _Required_: No
     * - _Type_: [DocumentAttribute](./aws-properties-qbusiness-dataaccessor-documentattribute.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-attributefilter-greaterthan */
    "GreaterThan"?: DocumentAttribute;
    /**
     * - Performs a greater or equals than operation on two document attributes or metadata fields. Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html): `dateValue` and `longValue`.
     * - _Required_: No
     * - _Type_: [DocumentAttribute](./aws-properties-qbusiness-dataaccessor-documentattribute.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-attributefilter-greaterthanorequals */
    "GreaterThanOrEquals"?: DocumentAttribute;
    /**
     * - Performs a less than operation on two document attributes or metadata fields. Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html): `dateValue` and `longValue`.
     * - _Required_: No
     * - _Type_: [DocumentAttribute](./aws-properties-qbusiness-dataaccessor-documentattribute.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-attributefilter-lessthan */
    "LessThan"?: DocumentAttribute;
    /**
     * - Performs a less than or equals operation on two document attributes or metadata fields.Supported for the following [document attribute value type](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html): `dateValue` and `longValue`.
     * - _Required_: No
     * - _Type_: [DocumentAttribute](./aws-properties-qbusiness-dataaccessor-documentattribute.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-attributefilter-lessthanorequals */
    "LessThanOrEquals"?: DocumentAttribute;
    /**
     * - Performs a logical `NOT` operation on all supplied filters.
     * - _Required_: No
     * - _Type_: [AttributeFilter](./aws-properties-qbusiness-dataaccessor-attributefilter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-attributefilter-notfilter */
    "NotFilter"?: AttributeFilter;
    /**
     * - Performs a logical `OR` operation on all supplied filters.
     * - _Required_: No
     * - _Type_: Array of [AttributeFilter](./aws-properties-qbusiness-dataaccessor-attributefilter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-attributefilter-orallfilters */
    "OrAllFilters"?: AttributeFilter[];
}

/**
 * Specifies filters to apply to an allowed action.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html */

export interface ActionFilterConfiguration {
    /**
     * - Enables filtering of responses based on document attributes or metadata fields.
     * - _Required_: Yes
     * - _Type_: [AttributeFilter](./aws-properties-qbusiness-dataaccessor-attributefilter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-actionfilterconfiguration-documentattributefilter */
    "DocumentAttributeFilter": AttributeFilter;
}

/**
 * Specifies an allowed action and its associated filter configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html */

export interface ActionConfiguration {
    /**
     * - The Amazon Q Business action that is allowed.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^qbusiness:[a-zA-Z]+$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-actionconfiguration-action */
    "Action": string | Intrinsic;
    /**
     * - The filter configuration for the action, if any.
     * - _Required_: No
     * - _Type_: [ActionFilterConfiguration](./aws-properties-qbusiness-dataaccessor-actionfilterconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-actionconfiguration-filterconfiguration */
    "FilterConfiguration"?: ActionFilterConfiguration;
}

/**
 * Creates a new data accessor for an ISV to access data from a Amazon Q Business application. The data accessor is an entity that represents the ISV's access to the Amazon Q Business application's data. It includes the IAM role ARN for the ISV, a friendly name, and a set of action configurations that define the specific actions the ISV is allowed to perform and any associated data filters. When the data accessor is created, an IAM Identity Center application is also created to manage the ISV's identity and authentication for accessing the Amazon Q Business application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html */

export interface QBusinessDataAccessor extends ResourceAttributes {
    "Type": "AWS::QBusiness::DataAccessor";
    "Properties": {
        /**
         * - A list of action configurations specifying the allowed actions and any associated filters.
         * - _Required_: Yes
         * - _Type_: Array of [ActionConfiguration](./aws-properties-qbusiness-dataaccessor-actionconfiguration.html)
         * - _Minimum_: `1`
         * - _Maximum_: `10`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-actionconfigurations */
        "ActionConfigurations": ActionConfiguration[];
        /**
         * - The unique identifier of the Amazon Q Business application.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9-]{35}$`
         * - _Minimum_: `36`
         * - _Maximum_: `36`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-applicationid */
        "ApplicationId": string | Intrinsic;
        /**
         * - The friendly name of the data accessor.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9_-]*$`
         * - _Minimum_: `1`
         * - _Maximum_: `100`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-displayname */
        "DisplayName": string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the IAM role for the ISV associated with this data accessor.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws:iam::[0-9]{12}:role/[a-zA-Z0-9_/+=,.@-]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `1284`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-principal */
        "Principal": string | Intrinsic;
        /**
         * - The tags to associate with the data accessor.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-qbusiness-dataaccessor-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-dataaccessor.html#cfn-qbusiness-dataaccessor-tags */
        "Tags"?: Tag[];
    };
}