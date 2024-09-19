import type { Intrinsic } from '../intrinsic/index.js' /**
 * A group object, which contains a specified group’s metadata and attributes.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-group.html */

export interface IdentityStoreGroup {
  Type: 'AWS::IdentityStore::Group'
  Properties: {
    /**
     * - A string containing the description of the group.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\p{L}\p{M}\p{S}\p{N}\p{P}\t\n\r 　]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-group.html#cfn-identitystore-group-description */
    Description?: string | Intrinsic
    /**
     * - The display name value for the group. The length limit is 1,024 characters. This value can consist of letters, accented characters, symbols, numbers, punctuation, tab, new line, carriage return, space, and nonbreaking space in this attribute. This value is specified at the time the group is created and stored as an attribute of the group object in the identity store.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[\p{L}\p{M}\p{S}\p{N}\p{P}\t\n\r ]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-group.html#cfn-identitystore-group-displayname */
    DisplayName: string | Intrinsic
    /**
     * - The globally unique identifier for the identity store.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^d-[0-9a-f]{10}$|^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
     * - _Minimum_: `1`
     * - _Maximum_: `36`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-group.html#cfn-identitystore-group-identitystoreid */
    IdentityStoreId: string | Intrinsic
  }
}
