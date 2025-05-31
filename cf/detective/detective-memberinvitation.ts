import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::Detective::MemberInvitation` resource is an Amazon Detective resource type that creates an invitation to join a Detective behavior graph. The administrator account can choose whether to send an email notification of the invitation to the root user email address of the AWS account.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html */

export interface DetectiveMemberInvitation extends ResourceAttributes {
    "Type": "AWS::Detective::MemberInvitation";
    "Properties": {
        /**
         * - Whether to send an invitation email to the member account. If set to true, the member account does not receive an invitation email.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html#cfn-detective-memberinvitation-disableemailnotification */
        "DisableEmailNotification"?: boolean | Intrinsic;
        /**
         * - The ARN of the behavior graph to invite the account to contribute data to.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `arn:aws(-[\w]+)*:detective:(([a-z]+-)+[0-9]+):[0-9]{12}:graph:[0-9a-f]{32}`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html#cfn-detective-memberinvitation-grapharn */
        "GraphArn": string | Intrinsic;
        /**
         * - The root user email address of the invited account. If the email address provided is not the root user email address for the provided account, the invitation creation fails.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `.*@.*`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html#cfn-detective-memberinvitation-memberemailaddress */
        "MemberEmailAddress": string | Intrinsic;
        /**
         * - The AWS account identifier of the invited account
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[0-9]{12}`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html#cfn-detective-memberinvitation-memberid */
        "MemberId": string | Intrinsic;
        /**
         * - Customized text to include in the invitation email message.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `1000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-memberinvitation.html#cfn-detective-memberinvitation-message */
        "Message"?: string | Intrinsic;
    };
}