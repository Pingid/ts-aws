import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A set of key/value pairs that are used to manage the resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html */

export interface Tag {
  /**
   * - The tag's key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html#cfn-iot-thinggroup-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag's value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html#cfn-iot-thinggroup-tag-value */
  Value: string | Intrinsic
}

/**
 * The attribute payload.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html */

export interface AttributePayload {
  /**
   * - A JSON string containing up to three key-value pair in JSON format. For example:
   * - `{\"attributes\":{\"string1\":\"string2\"}}`
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `[a-zA-Z0-9_.,@/:#-]+`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html#cfn-iot-thinggroup-attributepayload-attributes */
  Attributes?: Record<string, string | Intrinsic>
}

/**
 * Thing group properties.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html */

export interface ThingGroupProperties {
  /**
   * - The thing group attributes in JSON format.
   * - _Required_: No
   * - _Type_: [AttributePayload](./aws-properties-iot-thinggroup-attributepayload.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html#cfn-iot-thinggroup-thinggroupproperties-attributepayload */
  AttributePayload?: AttributePayload
  /**
   * - The thing group description.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[\p{Graph}\x20]*`
   * - _Maximum_: `2028`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html#cfn-iot-thinggroup-thinggroupproperties-thinggroupdescription */
  ThingGroupDescription?: string | Intrinsic
}

/**
 * Creates a new thing group. A dynamic thing group is created if the resource template contains the `QueryString` attribute. A dynamic thing group will not contain the `ParentGroupName` attribute. A static thing group and dynamic thing group can't be converted to each other via the addition or removal of the `QueryString` attribute.
 * ###### Note
 *
 * This is a control plane operation. See [Authorization](https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html) for information about authorizing control plane actions.
 * Requires permission to access the [CreateThingGroup](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html */

export interface IoTThingGroup extends ResourceAttributes {
  Type: 'AWS::IoT::ThingGroup'
  Properties: {
    /**
     * - The parent thing group name.
     * - A Dynamic Thing Group does not have `parentGroupName` defined.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9:_-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html#cfn-iot-thinggroup-parentgroupname */
    ParentGroupName?: string | Intrinsic
    /**
     * - The dynamic thing group search query string.
     * - The `queryString` attribute _is_ required for `CreateDynamicThingGroup`. The `queryString` attribute _is not_ required for `CreateThingGroup`.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html#cfn-iot-thinggroup-querystring */
    QueryString?: string | Intrinsic
    /**
     * - Metadata which can be used to manage the thing group or dynamic thing group.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-iot-thinggroup-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html#cfn-iot-thinggroup-tags */
    Tags?: Tag[]
    /**
     * - The thing group name.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9:_-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html#cfn-iot-thinggroup-thinggroupname */
    ThingGroupName?: string | Intrinsic
    /**
     * - Thing group properties.
     * - _Required_: No
     * - _Type_: [ThingGroupProperties](./aws-properties-iot-thinggroup-thinggroupproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-thinggroup.html#cfn-iot-thinggroup-thinggroupproperties */
    ThingGroupProperties?: ThingGroupProperties
  }
}
