import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * An object that contains the identifier of a group member. Setting the `UserID` field to the specific identifier for a user indicates that the user is a member of the group.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-groupmembership.html */

export interface MemberId {
  /**
   * - An object containing the identifiers of resources that can be members.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$`
   * - _Minimum_: `1`
   * - _Maximum_: `47`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-groupmembership.html#cfn-identitystore-groupmembership-memberid-userid */
  UserId: string | Intrinsic
}

/**
 * Contains the identifiers for a group, a group member, and a `GroupMembership` object in the identity store.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-groupmembership.html */

export interface IdentityStoreGroupMembership extends ResourceAttributes {
  Type: 'AWS::IdentityStore::GroupMembership'
  Properties: {
    /**
     * - The identifier for a group in the identity store.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$`
     * - _Minimum_: `1`
     * - _Maximum_: `47`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-groupmembership.html#cfn-identitystore-groupmembership-groupid */
    GroupId: string | Intrinsic
    /**
     * - The globally unique identifier for the identity store.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^d-[0-9a-f]{10}$|^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
     * - _Minimum_: `1`
     * - _Maximum_: `36`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-groupmembership.html#cfn-identitystore-groupmembership-identitystoreid */
    IdentityStoreId: string | Intrinsic
    /**
     * - An object containing the identifier of a group member. Setting `MemberId`'s `UserId` field to a specific User's ID indicates we should consider that User as a group member.
     * - _Required_: Yes
     * - _Type_: [MemberId](./aws-properties-identitystore-groupmembership-memberid.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-identitystore-groupmembership.html#cfn-identitystore-groupmembership-memberid */
    MemberId: MemberId
  }
}
