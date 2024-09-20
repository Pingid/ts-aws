import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Adds the specified user to the specified group.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolusertogroupattachment.html */

export interface CognitoUserPoolUserToGroupAttachment extends ResourceAttributes {
  Type: 'AWS::Cognito::UserPoolUserToGroupAttachment'
  Properties: {
    /**
     * - The name of the group that you want to add your user to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\p{L}\p{M}\p{S}\p{N}\p{P}]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolusertogroupattachment.html#cfn-cognito-userpoolusertogroupattachment-groupname */
    GroupName: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolusertogroupattachment.html#cfn-cognito-userpoolusertogroupattachment-username */
    Username: string | Intrinsic
    /**
     * - The user pool ID for the user pool.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\w-]+_[0-9a-zA-Z]+`
     * - _Minimum_: `1`
     * - _Maximum_: `55`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolusertogroupattachment.html#cfn-cognito-userpoolusertogroupattachment-userpoolid */
    UserPoolId: string | Intrinsic
  }
}
