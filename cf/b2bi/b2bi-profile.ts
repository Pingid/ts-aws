import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html */

export interface Tag {
  /**
   * - Specifies the name assigned to the tag that you create.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html#cfn-b2bi-profile-tag-key */
  Key: string | Intrinsic
  /**
   * - Contains one or more values that you assigned to the key name that you create.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html#cfn-b2bi-profile-tag-value */
  Value: string | Intrinsic
}

/**
 * Creates a customer profile. You can have up to five customer profiles, each representing a distinct private network. A profile is the mechanism used to create the concept of a private network.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html */

export interface B2BIProfile extends ResourceAttributes {
  Type: 'AWS::B2BI::Profile'
  Properties: {
    /**
     * - Returns the name for the business associated with this profile.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `254`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html#cfn-b2bi-profile-businessname */
    BusinessName: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\w\.\-]+@[\w\.\-]+$`
     * - _Minimum_: `5`
     * - _Maximum_: `254`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html#cfn-b2bi-profile-email */
    Email?: string | Intrinsic
    /**
     * - Specifies whether or not logging is enabled for this profile.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html#cfn-b2bi-profile-logging */
    Logging: string | Intrinsic
    /**
     * - Returns the display name for profile.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `254`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html#cfn-b2bi-profile-name */
    Name: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^\+?([0-9 \t\-()\/]{7,})(?:\s*(?:#|x\.?|ext\.?|extension) \t*(\d+))?$`
     * - _Minimum_: `7`
     * - _Maximum_: `22`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html#cfn-b2bi-profile-phone */
    Phone: string | Intrinsic
    /**
     * - A key-value pair for a specific profile. Tags are metadata that you can use to search for and group capabilities for various purposes.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-b2bi-profile-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-profile.html#cfn-b2bi-profile-tags */
    Tags?: Tag[]
  }
}
