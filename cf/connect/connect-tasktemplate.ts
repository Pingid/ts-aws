import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Describes a single task template field.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html */

export interface Field {
  /**
   * - The description of the field.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-field-description */
  Description?: string | Intrinsic
  /**
   * - The unique identifier for the field.
   * - _Required_: Yes
   * - _Type_: [FieldIdentifier](./aws-properties-connect-tasktemplate-fieldidentifier.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-field-id */
  Id: FieldIdentifier
  /**
   * - A list of options for a single select field.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-field-singleselectoptions */
  SingleSelectOptions?: (string | Intrinsic)[]
  /**
   * - Indicates the type of field. Following are the valid field types: `NAME` `DESCRIPTION` | `SCHEDULED_TIME` | `QUICK_CONNECT` | `URL` | `NUMBER` | `TEXT` | `TEXT_AREA` | `DATE_TIME` | `BOOLEAN` | `SINGLE_SELECT` | `EMAIL`
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `NAME | DESCRIPTION | SCHEDULED_TIME | QUICK_CONNECT | URL | NUMBER | TEXT | TEXT_AREA | DATE_TIME | BOOLEAN | SINGLE_SELECT | EMAIL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-field-type */
  Type: string | Intrinsic
}

/**
 * A key-value pair to associate with a resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html */

export interface Tag {
  /**
   * - The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, \_, ., /, =, +, and -
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-tag-key */
  Key: string | Intrinsic
  /**
   * - The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, \_, ., /, =, +, and -
   * - _Required_: Yes
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-tag-value */
  Value: string | Intrinsic
}

/**
 * A field that is invisible to an agent.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html */

export interface InvisibleFieldInfo {
  /**
   * - Identifier of the invisible field.
   * - _Required_: Yes
   * - _Type_: [FieldIdentifier](./aws-properties-connect-tasktemplate-fieldidentifier.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-invisiblefieldinfo-id */
  Id: FieldIdentifier
}

/**
 * Indicates a field that is read-only to an agent.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html */

export interface ReadOnlyFieldInfo {
  /**
   * - Identifier of the read-only field.
   * - _Required_: Yes
   * - _Type_: [FieldIdentifier](./aws-properties-connect-tasktemplate-fieldidentifier.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-readonlyfieldinfo-id */
  Id: FieldIdentifier
}

/**
 * Information about a required field.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html */

export interface RequiredFieldInfo {
  /**
   * - The unique identifier for the field.
   * - _Required_: Yes
   * - _Type_: [FieldIdentifier](./aws-properties-connect-tasktemplate-fieldidentifier.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-requiredfieldinfo-id */
  Id: FieldIdentifier
}

/**
 * The identifier of the task template field.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html */

export interface FieldIdentifier {
  /**
   * - The name of the task template field.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-fieldidentifier-name */
  Name: string | Intrinsic
}

/**
 * Describes constraints that apply to the template fields.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html */

export interface Constraints {
  /**
   * - Lists the fields that are invisible to agents.
   * - _Required_: No
   * - _Type_: Array of [InvisibleFieldInfo](./aws-properties-connect-tasktemplate-invisiblefieldinfo.html)
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-constraints-invisiblefields */
  InvisibleFields?: InvisibleFieldInfo[]
  /**
   * - Lists the fields that are read-only to agents, and cannot be edited.
   * - _Required_: No
   * - _Type_: Array of [ReadOnlyFieldInfo](./aws-properties-connect-tasktemplate-readonlyfieldinfo.html)
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-constraints-readonlyfields */
  ReadOnlyFields?: ReadOnlyFieldInfo[]
  /**
   * - Lists the fields that are required to be filled by agents.
   * - _Required_: No
   * - _Type_: Array of [RequiredFieldInfo](./aws-properties-connect-tasktemplate-requiredfieldinfo.html)
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-constraints-requiredfields */
  RequiredFields?: RequiredFieldInfo[]
}

/**
 * Describes a default field and its corresponding value.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html */

export interface DefaultFieldValue {
  /**
   * - Default value for the field.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-defaultfieldvalue-defaultvalue */
  DefaultValue: string | Intrinsic
  /**
   * - Identifier of a field.
   * - _Required_: Yes
   * - _Type_: [FieldIdentifier](./aws-properties-connect-tasktemplate-fieldidentifier.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-defaultfieldvalue-id */
  Id: FieldIdentifier
}

/**
 * Specifies a task template for a Amazon Connect instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html */

export interface ConnectTaskTemplate extends ResourceAttributes {
  Type: 'AWS::Connect::TaskTemplate'
  Properties: {
    /**
     * - A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^$|[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-clienttoken */
    ClientToken?: string | Intrinsic
    /**
     * - Constraints that are applicable to the fields listed.
     * - The values can be represented in either JSON or YAML format. For an example of the JSON configuration, see _Examples_ at the bottom of this page.
     * - _Required_: No
     * - _Type_: [Constraints](./aws-properties-connect-tasktemplate-constraints.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-constraints */
    Constraints?: Constraints
    /**
     * - The Amazon Resource Name (ARN) of the flow that runs by default when a task is created by referencing this template. `ContactFlowArn` is not required when there is a field with `fieldType` = `QUICK_CONNECT`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^$|arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*contact-flow/[-a-zA-Z0-9]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-contactflowarn */
    ContactFlowArn?: string | Intrinsic
    /**
     * - The default values for fields when a task is created by referencing this template.
     * - _Required_: No
     * - _Type_: Array of [DefaultFieldValue](./aws-properties-connect-tasktemplate-defaultfieldvalue.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-defaults */
    Defaults?: DefaultFieldValue[]
    /**
     * - The description of the task template.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-description */
    Description?: string | Intrinsic
    /**
     * - Fields that are part of the template. A template requires at least one field that has type `Name`.
     * - _Required_: No
     * - _Type_: Array of [Field](./aws-properties-connect-tasktemplate-field.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-fields */
    Fields?: Field[]
    /**
     * - The Amazon Resource Name (ARN) of the Amazon Connect instance.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-instancearn */
    InstanceArn: string | Intrinsic
    /**
     * - The name of the task template.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-name */
    Name?: string | Intrinsic
    /**
     * - The status of the task template.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ACTIVE | INACTIVE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-status */
    Status?: string | Intrinsic
    /**
     * - The tags used to organize, track, or control access for this resource.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-connect-tasktemplate-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html#cfn-connect-tasktemplate-tags */
    Tags?: Tag[]
  }
}
