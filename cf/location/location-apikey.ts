import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * API Restrictions on the allowed actions, resources, and referers for an API key resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html */

export interface ApiKeyRestrictions {
  /**
   * - A list of allowed actions that an API key resource grants permissions to perform. You must have at least one action for each type of resource. For example, if you have a place resource, you must include at least one place action.
   * - The following are valid values for the actions.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `5 | 1`
   * - _Maximum_: `200 | 24`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#cfn-location-apikey-apikeyrestrictions-allowactions */
  AllowActions: (string | Intrinsic)[]
  /**
   * - An optional list of allowed HTTP referers for which requests must originate from. Requests using this API key from other domains will not be allowed.
   * - Requirements:
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `253 | 5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#cfn-location-apikey-apikeyrestrictions-allowreferers */
  AllowReferers?: (string | Intrinsic)[]
  /**
   * - A list of allowed resource ARNs that a API key bearer can perform actions on.
   * - For more information about ARN format, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `1600 | 8`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#cfn-location-apikey-apikeyrestrictions-allowresources */
  AllowResources: (string | Intrinsic)[]
}

/**
 * Applies one or more tags to the API key. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html */

export interface Tag {
  /**
   * - The key value/string of an API key. This value is used when making API calls to authorize the call. For example, see [GetMapGlyphs](https://docs.aws.amazon.com/location/latest/APIReference/API_GetMapGlyphs.html).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z+-=._:/]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#cfn-location-apikey-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the tag that is associated with the specified API key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[A-Za-z0-9 _=@:.+-/]*$`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#cfn-location-apikey-tag-value */
  Value: string | Intrinsic
}

/**
 * The API key resource in your AWS account, which lets you grant actions for Amazon Location resources to the API key bearer.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html */

export interface LocationAPIKey extends ResourceAttributes {
  Type: 'AWS::Location::APIKey'
  Properties: {
    /**
     * - Updates the description for the API key resource.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#cfn-location-apikey-description */
    Description?: string | Intrinsic
    /**
     * - The optional timestamp for when the API key resource will expire in [ISO 8601 format](https://www.iso.org/iso-8601-date-and-time-format.html).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^([0-2]\d{3})-(0[0-9]|1[0-2])-([0-2]\d|3[01])T([01]\d|2[0-4]):([0-5]\d):([0-6]\d)((\.\d{3})?)Z$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#cfn-location-apikey-expiretime */
    ExpireTime?: string | Intrinsic
    /**
     * - ForceDelete bypasses an API key's expiry conditions and deletes the key. Set the parameter `true` to delete the key or to `false` to not preemptively delete the API key.
     * - Valid values: `true`, or `false`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#cfn-location-apikey-forcedelete */
    ForceDelete?: boolean | Intrinsic
    /**
     * - The boolean flag to be included for updating `ExpireTime` or Restrictions details. Must be set to `true` to update an API key resource that has been used in the past 7 days. `False` if force update is not preferred.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#cfn-location-apikey-forceupdate */
    ForceUpdate?: boolean | Intrinsic
    /**
     * - A custom name for the API key resource.
     * - Requirements:
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[-._\w]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#cfn-location-apikey-keyname */
    KeyName: string | Intrinsic
    /**
     * - Whether the API key should expire. Set to `true` to set the API key to have no expiration time.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#cfn-location-apikey-noexpiry */
    NoExpiry?: boolean | Intrinsic
    /**
     * - The API key restrictions for the API key resource.
     * - _Required_: Yes
     * - _Type_: [ApiKeyRestrictions](./aws-properties-location-apikey-apikeyrestrictions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#cfn-location-apikey-restrictions */
    Restrictions: ApiKeyRestrictions
    /**
     * - Applies one or more tags to the map resource. A tag is a key-value pair that helps manage, identify, search, and filter your resources by labelling them.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-location-apikey-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-apikey.html#cfn-location-apikey-tags */
    Tags?: Tag[]
  }
}
