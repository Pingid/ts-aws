import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Contact information that the SRT can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-proactiveengagement.html */

export interface EmergencyContact {
    /**
     * - Additional notes regarding the contact.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\w\s\.\-,:/()+@]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-proactiveengagement.html#cfn-shield-proactiveengagement-emergencycontact-contactnotes */
    "ContactNotes"?: string | Intrinsic;
    /**
     * - The email address for the contact.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^\S+@\S+\.\S+$`
     * - _Minimum_: `1`
     * - _Maximum_: `150`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-proactiveengagement.html#cfn-shield-proactiveengagement-emergencycontact-emailaddress */
    "EmailAddress": string | Intrinsic;
    /**
     * - The phone number for the contact.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\+[1-9]\d{1,14}$`
     * - _Minimum_: `1`
     * - _Maximum_: `16`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-proactiveengagement.html#cfn-shield-proactiveengagement-emergencycontact-phonenumber */
    "PhoneNumber"?: string | Intrinsic;
}

/**
 * Authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.
 * To enable proactive engagement, you must be subscribed to the [Business Support plan](https://aws.amazon.com/premiumsupport/business-support/) or the [Enterprise Support plan](https://aws.amazon.com/premiumsupport/enterprise-support/).
 * **Configure `AWS::Shield::ProactiveEngagement` for one account**
 * To configure this resource through AWS CloudFormation, you must be subscribed to AWS Shield Advanced. You can subscribe through the [Shield Advanced console](https://console.aws.amazon.com/wafv2/shieldv2#/) and through the APIs. For more information, see [Subscribe to AWS Shield Advanced](https://docs.aws.amazon.com/waf/latest/developerguide/enable-ddos-prem.html).
 * See example templates for Shield Advanced in AWS CloudFormation at [aws-samples/aws-shield-advanced-examples](https://github.com/aws-samples/aws-shield-advanced-examples).
 * **Configure Shield Advanced using AWS CloudFormation and AWS Firewall Manager**
 * You might be able to use Firewall Manager with AWS CloudFormation to configure Shield Advanced across multiple accounts and protected resources. To do this, your accounts must be part of an organization in AWS Organizations. You can use Firewall Manager to configure Shield Advanced protections for any resource types except for Amazon Route 53 or AWS Global Accelerator.
 * For an example of this, see the one-click configuration guidance published by the AWS technical community at [One-click deployment of Shield Advanced](https://youtu.be/LCA3FwMk_QE).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-proactiveengagement.html */

export interface ShieldProactiveEngagement extends ResourceAttributes {
    "Type": "AWS::Shield::ProactiveEngagement";
    "Properties": {
        /**
         * - The list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you for escalations to the SRT and to initiate proactive customer support, plus any relevant notes.
         * - To enable proactive engagement, the contact list must include at least one phone number.
         * - If you provide more than one contact, in the notes, indicate the circumstances under which each contact should be used. Include primary and secondary contact designations, and provide the hours of availability and time zones for each contact.
         * - Example contact notes:
         * - _Required_: Yes
         * - _Type_: Array of [EmergencyContact](./aws-properties-shield-proactiveengagement-emergencycontact.html)
         * - _Minimum_: `1`
         * - _Maximum_: `10`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-proactiveengagement.html#cfn-shield-proactiveengagement-emergencycontactlist */
        "EmergencyContactList": EmergencyContact[];
        /**
         * - Specifies whether proactive engagement is enabled or disabled.
         * - Valid values:
         * - `ENABLED` - The Shield Response Team (SRT) will use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.
         * - `DISABLED` - The SRT will not proactively notify contacts about escalations or to initiate proactive customer support.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `ENABLED | DISABLED`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-proactiveengagement.html#cfn-shield-proactiveengagement-proactiveengagementstatus */
        "ProactiveEngagementStatus": string | Intrinsic;
    };
}