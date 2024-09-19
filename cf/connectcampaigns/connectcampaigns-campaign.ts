import type { Intrinsic } from '../intrinsic/index.js' /**
 * The `Tag` property type specifies Property description not available. for an [AWS::ConnectCampaigns::Campaign](./aws-resource-connectcampaigns-campaign.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-tag-value */
  Value: string | Intrinsic
}

/**
 * Contains agentless dialer configuration for an outbound campaign.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html */

export interface AgentlessDialerConfig {
  /**
   * - The allocation of dialing capacity between multiple active campaigns.
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `0`
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-agentlessdialerconfig-dialingcapacity */
  DialingCapacity?: number | Intrinsic
}

/**
 * Contains predictive dialer configuration for an outbound campaign.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html */

export interface PredictiveDialerConfig {
  /**
   * - Bandwidth allocation for the predictive dialer.
   * - _Required_: Yes
   * - _Type_: Number
   * - _Minimum_: `0`
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-predictivedialerconfig-bandwidthallocation */
  BandwidthAllocation: number | Intrinsic
  /**
   * - The allocation of dialing capacity between multiple active campaigns.
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `0`
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-predictivedialerconfig-dialingcapacity */
  DialingCapacity?: number | Intrinsic
}

/**
 * Contains progressive dialer configuration for an outbound campaign.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html */

export interface ProgressiveDialerConfig {
  /**
   * - Bandwidth allocation for the progressive dialer.
   * - _Required_: Yes
   * - _Type_: Number
   * - _Minimum_: `0`
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-progressivedialerconfig-bandwidthallocation */
  BandwidthAllocation: number | Intrinsic
  /**
   * - The allocation of dialing capacity between multiple active campaigns.
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `0`
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-progressivedialerconfig-dialingcapacity */
  DialingCapacity?: number | Intrinsic
}

/**
 * Contains information about answering machine detection.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html */

export interface AnswerMachineDetectionConfig {
  /**
   * - Whether waiting for answer machine prompt is enabled.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-answermachinedetectionconfig-awaitanswermachineprompt */
  AwaitAnswerMachinePrompt?: boolean | Intrinsic
  /**
   * - Whether answering machine detection is enabled.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-answermachinedetectionconfig-enableanswermachinedetection */
  EnableAnswerMachineDetection: boolean | Intrinsic
}

/**
 * Contains dialer configuration for an outbound campaign.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html */

export interface DialerConfig {
  /**
   * - The configuration of the agentless dialer.
   * - _Required_: No
   * - _Type_: [AgentlessDialerConfig](./aws-properties-connectcampaigns-campaign-agentlessdialerconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-dialerconfig-agentlessdialerconfig */
  AgentlessDialerConfig?: AgentlessDialerConfig
  /**
   * - The configuration of the predictive dialer.
   * - _Required_: No
   * - _Type_: [PredictiveDialerConfig](./aws-properties-connectcampaigns-campaign-predictivedialerconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-dialerconfig-predictivedialerconfig */
  PredictiveDialerConfig?: PredictiveDialerConfig
  /**
   * - The configuration of the progressive dialer.
   * - _Required_: No
   * - _Type_: [ProgressiveDialerConfig](./aws-properties-connectcampaigns-campaign-progressivedialerconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-dialerconfig-progressivedialerconfig */
  ProgressiveDialerConfig?: ProgressiveDialerConfig
}

/**
 * Contains outbound call configuration for an outbound campaign.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html */

export interface OutboundCallConfig {
  /**
   * - Whether answering machine detection has been enabled.
   * - _Required_: No
   * - _Type_: [AnswerMachineDetectionConfig](./aws-properties-connectcampaigns-campaign-answermachinedetectionconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-outboundcallconfig-answermachinedetectionconfig */
  AnswerMachineDetectionConfig?: AnswerMachineDetectionConfig
  /**
   * - The Amazon Resource Name (ARN) of the flow.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*contact-flow/[-a-zA-Z0-9]*$`
   * - _Maximum_: `500`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-outboundcallconfig-connectcontactflowarn */
  ConnectContactFlowArn: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the queue.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*queue/[-a-zA-Z0-9]*$`
   * - _Maximum_: `500`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-outboundcallconfig-connectqueuearn */
  ConnectQueueArn?: string | Intrinsic
  /**
   * - The phone number associated with the outbound call. This is the caller ID that is displayed to customers when an agent calls them.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-outboundcallconfig-connectsourcephonenumber */
  ConnectSourcePhoneNumber?: string | Intrinsic
}

/**
 * Contains information about an outbound campaign.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html */

export interface ConnectCampaignsCampaign {
  Type: 'AWS::ConnectCampaigns::Campaign'
  Properties: {
    /**
     * - The Amazon Resource Name (ARN) of the Amazon Connect instance.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-connectinstancearn */
    ConnectInstanceArn: string | Intrinsic
    /**
     * - Contains information about the dialer configuration.
     * - _Required_: Yes
     * - _Type_: [DialerConfig](./aws-properties-connectcampaigns-campaign-dialerconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-dialerconfig */
    DialerConfig: DialerConfig
    /**
     * - The name of the campaign.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `127`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-name */
    Name: string | Intrinsic
    /**
     * - Contains information about the outbound call configuration.
     * - _Required_: Yes
     * - _Type_: [OutboundCallConfig](./aws-properties-connectcampaigns-campaign-outboundcallconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-outboundcallconfig */
    OutboundCallConfig: OutboundCallConfig
    /**
     * - The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-connectcampaigns-campaign-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-tags */
    Tags?: Tag[]
  }
}
