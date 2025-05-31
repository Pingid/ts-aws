import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A user pool group. Contains details about the group and the way that it contributes to IAM role decisions with identity pools. Identity pools can make decisions about the IAM role to assign based on groups: users get credentials for the role associated with their highest-priority group.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html */

export interface CognitoUserPoolGroup extends ResourceAttributes {
    "Type": "AWS::Cognito::UserPoolGroup";
    "Properties": {
        /**
         * - A description of the group that you're creating.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html#cfn-cognito-userpoolgroup-description */
        "Description"?: string | Intrinsic;
        /**
         * - A name for the group. This name must be unique in your user pool.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[\p{L}\p{M}\p{S}\p{N}\p{P}]+`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html#cfn-cognito-userpoolgroup-groupname */
        "GroupName"?: string | Intrinsic;
        /**
         * - A non-negative integer value that specifies the precedence of this group relative to the other groups that a user can belong to in the user pool. Zero is the highest precedence value. Groups with lower `Precedence` values take precedence over groups with higher or null `Precedence` values. If a user belongs to two or more groups, it is the group with the lowest precedence value whose role ARN is given in the user's tokens for the `cognito:roles` and `cognito:preferred_role` claims.
         * - Two groups can have the same `Precedence` value. If this happens, neither group takes precedence over the other. If two groups with the same `Precedence` have the same role ARN, that role is used in the `cognito:preferred_role` claim in tokens for users in each group. If the two groups have different role ARNs, the `cognito:preferred_role` claim isn't set in users' tokens.
         * - The default `Precedence` value is null. The maximum `Precedence` value is `2^31-1`.
         * - _Required_: No
         * - _Type_: Integer
         * - _Minimum_: `0`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html#cfn-cognito-userpoolgroup-precedence */
        "Precedence"?: number | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) for the IAM role that you want to associate with the group. A group role primarily declares a preferred role for the credentials that you get from an identity pool. Amazon Cognito ID tokens have a `cognito:preferred_role` claim that presents the highest-precedence group that a user belongs to. Both ID and access tokens also contain a `cognito:groups` claim that list all the groups that a user is a member of.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?`
         * - _Minimum_: `20`
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html#cfn-cognito-userpoolgroup-rolearn */
        "RoleArn"?: string | Intrinsic;
        /**
         * - The ID of the user pool where you want to create a user group.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\w-]+_[0-9a-zA-Z]+`
         * - _Minimum_: `1`
         * - _Maximum_: `55`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolgroup.html#cfn-cognito-userpoolgroup-userpoolid */
        "UserPoolId": string | Intrinsic;
    };
}