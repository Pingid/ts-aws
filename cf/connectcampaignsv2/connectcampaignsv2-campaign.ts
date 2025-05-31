import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Contains the schedule configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface Schedule {
    /**
     * - The end time of the schedule in UTC.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-schedule-endtime */
    "EndTime": string | Intrinsic;
    /**
     * - The refresh frequency of the campaign.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9.]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-schedule-refreshfrequency */
    "RefreshFrequency"?: string | Intrinsic;
    /**
     * - The start time of the schedule in UTC.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-schedule-starttime */
    "StartTime": string | Intrinsic;
}

/**
 * The tag of the campaign.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface Tag {
    /**
     * - The tag keys.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The event trigger of the campaign.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface EventTrigger {
    /**
     * - The Amazon Resource Name (ARN) of the Customer Profiles domain.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:.*$`
     * - _Minimum_: `20`
     * - _Maximum_: `500`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-eventtrigger-customerprofilesdomainarn */
    "CustomerProfilesDomainArn"?: string | Intrinsic;
}

/**
 * Contains source configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface Source {
    /**
     * - The Amazon Resource Name (ARN) of the Customer Profiles segment.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:.*$`
     * - _Minimum_: `20`
     * - _Maximum_: `500`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-source-customerprofilessegmentarn */
    "CustomerProfilesSegmentArn"?: string | Intrinsic;
    /**
     * - The event trigger of the campaign.
     * - _Required_: No
     * - _Type_: [EventTrigger](./aws-properties-connectcampaignsv2-campaign-eventtrigger.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-source-eventtrigger */
    "EventTrigger"?: EventTrigger;
}

/**
 * The configuration of timezone for recipient.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface LocalTimeZoneConfig {
    /**
     * - The timezone to use for all recipients.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-localtimezoneconfig-defaulttimezone */
    "DefaultTimeZone"?: string | Intrinsic;
    /**
     * - Detects methods for the recipient's timezone.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-localtimezoneconfig-localtimezonedetection */
    "LocalTimeZoneDetection"?: (string | Intrinsic)[];
}

/**
 * The outbound configuration for email.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface EmailOutboundConfig {
    /**
     * - The Amazon Connect source email address.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,4}$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-emailoutboundconfig-connectsourceemailaddress */
    "ConnectSourceEmailAddress": string | Intrinsic;
    /**
     * - The display name for the Amazon Connect source email address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `127`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-emailoutboundconfig-sourceemailaddressdisplayname */
    "SourceEmailAddressDisplayName"?: string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the Amazon Q in Connect template.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:.*$`
     * - _Minimum_: `20`
     * - _Maximum_: `500`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-emailoutboundconfig-wisdomtemplatearn */
    "WisdomTemplateArn": string | Intrinsic;
}

/**
 * Contains information about a communication limit.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface CommunicationLimit {
    /**
     * - The frequency of communication limit evaluation.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-communicationlimit-frequency */
    "Frequency": number | Intrinsic;
    /**
     * - The maximum outreaching count for each recipient.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-communicationlimit-maxcountperrecipient */
    "MaxCountPerRecipient": number | Intrinsic;
    /**
     * - The unit of communication limit evaluation.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `DAY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-communicationlimit-unit */
    "Unit": string | Intrinsic;
}

/**
 * Contains information about communication limits.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface CommunicationLimits {
    /**
     * - The list of CommunicationLimits.
     * - _Required_: No
     * - _Type_: Array of [CommunicationLimit](./aws-properties-connectcampaignsv2-campaign-communicationlimit.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-communicationlimits-communicationlimitlist */
    "CommunicationLimitList"?: CommunicationLimit[];
}

/**
 * Contains the communication limits configuration for an outbound campaign.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface CommunicationLimitsConfig {
    /**
     * - The CommunicationLimits that apply to all channel subtypes defined in an outbound campaign.
     * - _Required_: No
     * - _Type_: [CommunicationLimits](./aws-properties-connectcampaignsv2-campaign-communicationlimits.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-communicationlimitsconfig-allchannelssubtypes */
    "AllChannelsSubtypes"?: CommunicationLimits;
}

/**
 * Contains information about email outbound mode.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface EmailOutboundMode {
    /**
     * - The agentless outbound mode configuration for email.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-emailoutboundmode-agentlessconfig */
    "AgentlessConfig"?: any | Intrinsic;
}

/**
 * The configuration for the email channel subtype.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface EmailChannelSubtypeConfig {
    /**
     * - The allocation of email capacity between multiple running outbound campaigns.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-emailchannelsubtypeconfig-capacity */
    "Capacity"?: number | Intrinsic;
    /**
     * - The default email outbound configuration of an outbound campaign.
     * - _Required_: Yes
     * - _Type_: [EmailOutboundConfig](./aws-properties-connectcampaignsv2-campaign-emailoutboundconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-emailchannelsubtypeconfig-defaultoutboundconfig */
    "DefaultOutboundConfig": EmailOutboundConfig;
    /**
     * - The outbound mode for email of an outbound campaign.
     * - _Required_: Yes
     * - _Type_: [EmailOutboundMode](./aws-properties-connectcampaignsv2-campaign-emailoutboundmode.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-emailchannelsubtypeconfig-outboundmode */
    "OutboundMode": EmailOutboundMode;
}

/**
 * The outbound configuration for SMS.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface SmsOutboundConfig {
    /**
     * - The Amazon Resource Name (ARN) of the Amazon Connect source SMS phone number.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:.*$`
     * - _Minimum_: `20`
     * - _Maximum_: `500`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-smsoutboundconfig-connectsourcephonenumberarn */
    "ConnectSourcePhoneNumberArn": string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the Amazon Q in Connect template.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:.*$`
     * - _Minimum_: `20`
     * - _Maximum_: `500`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-smsoutboundconfig-wisdomtemplatearn */
    "WisdomTemplateArn": string | Intrinsic;
}

/**
 * Contains information about the SMS outbound mode.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface SmsOutboundMode {
    /**
     * - Contains agentless outbound mode configuration.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-smsoutboundmode-agentlessconfig */
    "AgentlessConfig"?: any | Intrinsic;
}

/**
 * The configuration for the SMS channel subtype.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface SmsChannelSubtypeConfig {
    /**
     * - The allocation of SMS capacity between multiple running outbound campaigns.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-smschannelsubtypeconfig-capacity */
    "Capacity"?: number | Intrinsic;
    /**
     * - The default SMS outbound configuration of an outbound campaign.
     * - _Required_: Yes
     * - _Type_: [SmsOutboundConfig](./aws-properties-connectcampaignsv2-campaign-smsoutboundconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-smschannelsubtypeconfig-defaultoutboundconfig */
    "DefaultOutboundConfig": SmsOutboundConfig;
    /**
     * - The outbound mode of SMS for an outbound campaign.
     * - _Required_: Yes
     * - _Type_: [SmsOutboundMode](./aws-properties-connectcampaignsv2-campaign-smsoutboundmode.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-smschannelsubtypeconfig-outboundmode */
    "OutboundMode": SmsOutboundMode;
}

/**
 * Contains the progressive outbound mode configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface ProgressiveConfig {
    /**
     * - Bandwidth allocation for the progressive outbound mode.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-progressiveconfig-bandwidthallocation */
    "BandwidthAllocation": number | Intrinsic;
}

/**
 * Contains answering machine detection configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface AnswerMachineDetectionConfig {
    /**
     * - Whether or not waiting for an answer machine prompt is enabled.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-answermachinedetectionconfig-awaitanswermachineprompt */
    "AwaitAnswerMachinePrompt"?: boolean | Intrinsic;
    /**
     * - Enables answering machine detection.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-answermachinedetectionconfig-enableanswermachinedetection */
    "EnableAnswerMachineDetection": boolean | Intrinsic;
}

/**
 * The outbound configuration for telephony.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface TelephonyOutboundConfig {
    /**
     * - The answering machine detection configuration.
     * - _Required_: No
     * - _Type_: [AnswerMachineDetectionConfig](./aws-properties-connectcampaignsv2-campaign-answermachinedetectionconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-telephonyoutboundconfig-answermachinedetectionconfig */
    "AnswerMachineDetectionConfig"?: AnswerMachineDetectionConfig;
    /**
     * - The identifier of the published Amazon Connect contact flow.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `500`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-telephonyoutboundconfig-connectcontactflowid */
    "ConnectContactFlowId": string | Intrinsic;
    /**
     * - The Amazon Connect source phone number.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-telephonyoutboundconfig-connectsourcephonenumber */
    "ConnectSourcePhoneNumber"?: string | Intrinsic;
}

/**
 * Contains information about a restricted period.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface RestrictedPeriod {
    /**
     * - The end date of the restricted period.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^\d{4}-\d{2}-\d{2}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-restrictedperiod-enddate */
    "EndDate": string | Intrinsic;
    /**
     * - The name of the restricted period.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `127`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-restrictedperiod-name */
    "Name"?: string | Intrinsic;
    /**
     * - The start date of the restricted period.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^\d{4}-\d{2}-\d{2}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-restrictedperiod-startdate */
    "StartDate": string | Intrinsic;
}

/**
 * Contains information about restricted periods.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface RestrictedPeriods {
    /**
     * - The restricted period list.
     * - _Required_: No
     * - _Type_: Array of [RestrictedPeriod](./aws-properties-connectcampaignsv2-campaign-restrictedperiod.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-restrictedperiods-restrictedperiodlist */
    "RestrictedPeriodList"?: RestrictedPeriod[];
}

/**
 * Contains predictive outbound mode configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface PredictiveConfig {
    /**
     * - Bandwidth allocation for the predictive outbound mode.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-predictiveconfig-bandwidthallocation */
    "BandwidthAllocation": number | Intrinsic;
}

/**
 * Contains information about telephony outbound mode.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface TelephonyOutboundMode {
    /**
     * - The agentless outbound mode configuration for telephony.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-telephonyoutboundmode-agentlessconfig */
    "AgentlessConfig"?: any | Intrinsic;
    /**
     * - Contains predictive outbound mode configuration.
     * - _Required_: No
     * - _Type_: [PredictiveConfig](./aws-properties-connectcampaignsv2-campaign-predictiveconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-telephonyoutboundmode-predictiveconfig */
    "PredictiveConfig"?: PredictiveConfig;
    /**
     * - Contains progressive telephony outbound mode configuration.
     * - _Required_: No
     * - _Type_: [ProgressiveConfig](./aws-properties-connectcampaignsv2-campaign-progressiveconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-telephonyoutboundmode-progressiveconfig */
    "ProgressiveConfig"?: ProgressiveConfig;
}

/**
 * The configuration for the telephony channel subtype.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface TelephonyChannelSubtypeConfig {
    /**
     * - The allocation of telephony capacity between multiple running outbound campaigns.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-telephonychannelsubtypeconfig-capacity */
    "Capacity"?: number | Intrinsic;
    /**
     * - The identifier of the Amazon Connect queue associated with telephony outbound requests of an outbound campaign.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `500`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-telephonychannelsubtypeconfig-connectqueueid */
    "ConnectQueueId"?: string | Intrinsic;
    /**
     * - The default telephony outbound configuration of an outbound campaign.
     * - _Required_: Yes
     * - _Type_: [TelephonyOutboundConfig](./aws-properties-connectcampaignsv2-campaign-telephonyoutboundconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-telephonychannelsubtypeconfig-defaultoutboundconfig */
    "DefaultOutboundConfig": TelephonyOutboundConfig;
    /**
     * - The outbound mode of telephony for an outbound campaign.
     * - _Required_: Yes
     * - _Type_: [TelephonyOutboundMode](./aws-properties-connectcampaignsv2-campaign-telephonyoutboundmode.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-telephonychannelsubtypeconfig-outboundmode */
    "OutboundMode": TelephonyOutboundMode;
}

/**
 * Contains channel subtype configuration for an outbound campaign.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface ChannelSubtypeConfig {
    /**
     * - The configuration of the email channel subtype.
     * - _Required_: No
     * - _Type_: [EmailChannelSubtypeConfig](./aws-properties-connectcampaignsv2-campaign-emailchannelsubtypeconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-channelsubtypeconfig-email */
    "Email"?: EmailChannelSubtypeConfig;
    /**
     * - The configuration of the SMS channel subtype.
     * - _Required_: No
     * - _Type_: [SmsChannelSubtypeConfig](./aws-properties-connectcampaignsv2-campaign-smschannelsubtypeconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-channelsubtypeconfig-sms */
    "Sms"?: SmsChannelSubtypeConfig;
    /**
     * - The configuration of the telephony channel subtype.
     * - _Required_: No
     * - _Type_: [TelephonyChannelSubtypeConfig](./aws-properties-connectcampaignsv2-campaign-telephonychannelsubtypeconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-channelsubtypeconfig-telephony */
    "Telephony"?: TelephonyChannelSubtypeConfig;
}

/**
 * Contains information about a time range.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface TimeRange {
    /**
     * - The end time of the time range.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^T\d{2}:\d{2}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-timerange-endtime */
    "EndTime": string | Intrinsic;
    /**
     * - The start time of the time range.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^T\d{2}:\d{2}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-timerange-starttime */
    "StartTime": string | Intrinsic;
}

/**
 * The daily hours configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface DailyHour {
    /**
     * - The key for DailyHour.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `MONDAY | TUESDAY | WEDNESDAY | THURSDAY | FRIDAY | SATURDAY | SUNDAY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-dailyhour-key */
    "Key"?: string | Intrinsic;
    /**
     * - The value for DailyHour.
     * - _Required_: No
     * - _Type_: Array of [TimeRange](./aws-properties-connectcampaignsv2-campaign-timerange.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-dailyhour-value */
    "Value"?: TimeRange[];
}

/**
 * Contains information about open hours.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface OpenHours {
    /**
     * - The daily hours configuration.
     * - _Required_: Yes
     * - _Type_: Array of [DailyHour](./aws-properties-connectcampaignsv2-campaign-dailyhour.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-openhours-dailyhours */
    "DailyHours": DailyHour[];
}

/**
 * Contains information about a time window.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface TimeWindow {
    /**
     * - The open hours configuration.
     * - _Required_: Yes
     * - _Type_: [OpenHours](./aws-properties-connectcampaignsv2-campaign-openhours.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-timewindow-openhours */
    "OpenHours": OpenHours;
    /**
     * - The restricted periods configuration.
     * - _Required_: No
     * - _Type_: [RestrictedPeriods](./aws-properties-connectcampaignsv2-campaign-restrictedperiods.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-timewindow-restrictedperiods */
    "RestrictedPeriods"?: RestrictedPeriods;
}

/**
 * Communication time configuration for an outbound campaign.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface CommunicationTimeConfig {
    /**
     * - The communication time configuration for the email channel subtype.
     * - _Required_: No
     * - _Type_: [TimeWindow](./aws-properties-connectcampaignsv2-campaign-timewindow.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-communicationtimeconfig-email */
    "Email"?: TimeWindow;
    /**
     * - The local timezone configuration.
     * - _Required_: Yes
     * - _Type_: [LocalTimeZoneConfig](./aws-properties-connectcampaignsv2-campaign-localtimezoneconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-communicationtimeconfig-localtimezoneconfig */
    "LocalTimeZoneConfig": LocalTimeZoneConfig;
    /**
     * - The communication time configuration for the SMS channel subtype.
     * - _Required_: No
     * - _Type_: [TimeWindow](./aws-properties-connectcampaignsv2-campaign-timewindow.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-communicationtimeconfig-sms */
    "Sms"?: TimeWindow;
    /**
     * - The communication time configuration for the telephony channel subtype.
     * - _Required_: No
     * - _Type_: [TimeWindow](./aws-properties-connectcampaignsv2-campaign-timewindow.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-communicationtimeconfig-telephony */
    "Telephony"?: TimeWindow;
}

/**
 * Creates an outbound campaign.
 * ###### Note
 * 
 * *   For users to be able to view or edit a campaign at a later date by using the Amazon Connect user interface, you must add the instance ID as a tag. For example, `{ "tags": {"owner": "arn:aws:connect:{REGION}:{AWS_ACCOUNT_ID}:instance/{CONNECT_INSTANCE_ID}"}}`.
 *     
 * *   After a campaign is created, you can't add/remove source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html */

export interface ConnectCampaignsV2Campaign extends ResourceAttributes {
    "Type": "AWS::ConnectCampaignsV2::Campaign";
    "Properties": {
        /**
         * - Contains channel subtype configuration for an outbound campaign.
         * - _Required_: Yes
         * - _Type_: [ChannelSubtypeConfig](./aws-properties-connectcampaignsv2-campaign-channelsubtypeconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-channelsubtypeconfig */
        "ChannelSubtypeConfig": ChannelSubtypeConfig;
        /**
         * - Communication limits configuration for an outbound campaign.
         * - _Required_: No
         * - _Type_: [CommunicationLimitsConfig](./aws-properties-connectcampaignsv2-campaign-communicationlimitsconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-communicationlimitsoverride */
        "CommunicationLimitsOverride"?: CommunicationLimitsConfig;
        /**
         * - Contains communication time configuration for an outbound campaign.
         * - _Required_: No
         * - _Type_: [CommunicationTimeConfig](./aws-properties-connectcampaignsv2-campaign-communicationtimeconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-communicationtimeconfig */
        "CommunicationTimeConfig"?: CommunicationTimeConfig;
        /**
         * - The Amazon Resource Name (ARN) of the Amazon Connect campaign flow associated with the outbound campaign.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^arn:.*$`
         * - _Minimum_: `20`
         * - _Maximum_: `500`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-connectcampaignflowarn */
        "ConnectCampaignFlowArn"?: string | Intrinsic;
        /**
         * - The identifier of the Amazon Connect instance. You can find the `instanceId` in the ARN of the instance.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_\-.]*$`
         * - _Minimum_: `0`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-connectinstanceid */
        "ConnectInstanceId": string | Intrinsic;
        /**
         * - The name of the outbound campaign.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `127`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-name */
        "Name": string | Intrinsic;
        /**
         * - Contains the schedule configuration.
         * - _Required_: No
         * - _Type_: [Schedule](./aws-properties-connectcampaignsv2-campaign-schedule.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-schedule */
        "Schedule"?: Schedule;
        /**
         * - Contains source configuration.
         * - _Required_: No
         * - _Type_: [Source](./aws-properties-connectcampaignsv2-campaign-source.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-source */
        "Source"?: Source;
        /**
         * - The tags used to organize, track, or control access for this resource. For example, `{ "tags": {"key1":"value1", "key2":"value2"} }`.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-connectcampaignsv2-campaign-tag.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaignsv2-campaign.html#cfn-connectcampaignsv2-campaign-tags */
        "Tags"?: Tag[];
    };
}