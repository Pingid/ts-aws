import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * You can use the `AWS::GuardDuty::Member` resource to add an AWS account as a GuardDuty member account to the current GuardDuty administrator account. If the value of the `Status` property is not provided or is set to `Created`, a member account is created but not invited. If the value of the `Status` property is set to `Invited`, a member account is created and invited. An `AWS::GuardDuty::Member` resource must be created with the `Status` property set to `Invited` before the `AWS::GuardDuty::Master` resource can be created in a GuardDuty member account.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html */

export interface GuardDutyMember extends ResourceAttributes {
    "Type": "AWS::GuardDuty::Member";
    "Properties": {
        /**
         * - The ID of the detector associated with the GuardDuty service to add the member to.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html#cfn-guardduty-member-detectorid */
        "DetectorId"?: string | Intrinsic;
        /**
         * - Specifies whether or not to disable email notification for the member account that you invite.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html#cfn-guardduty-member-disableemailnotification */
        "DisableEmailNotification"?: boolean | Intrinsic;
        /**
         * - The email address associated with the member account.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html#cfn-guardduty-member-email */
        "Email": string | Intrinsic;
        /**
         * - The AWS account ID of the account to designate as a member.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html#cfn-guardduty-member-memberid */
        "MemberId"?: string | Intrinsic;
        /**
         * - The invitation message that you want to send to the accounts that you're inviting to GuardDuty as members.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html#cfn-guardduty-member-message */
        "Message"?: string | Intrinsic;
        /**
         * - You can use the `Status` property to update the status of the relationship between the member account and its administrator account. Valid values are `Created` and `Invited` when using an `AWS::GuardDuty::Member` resource. If the value for this property is not provided or set to `Created`, a member account is created but not invited. If the value of this property is set to `Invited`, a member account is created and invited.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-member.html#cfn-guardduty-member-status */
        "Status"?: string | Intrinsic;
    };
}