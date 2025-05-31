import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Adds the specified user to the specified group.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-usertogroupaddition.html */

export interface IAMUserToGroupAddition extends ResourceAttributes {
    "Type": "AWS::IAM::UserToGroupAddition";
    "Properties": {
        /**
         * - The name of the group to update.
         * - This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: \_+=,.@-
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\w+=,.@-]+`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-usertogroupaddition.html#cfn-iam-usertogroupaddition-groupname */
        "GroupName": string | Intrinsic;
        /**
         * - A list of the names of the users that you want to add to the group.
         * - _Required_: Yes
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-usertogroupaddition.html#cfn-iam-usertogroupaddition-users */
        "Users": (string | Intrinsic)[];
    };
}