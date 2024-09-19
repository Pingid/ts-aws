import type { Intrinsic } from '../intrinsic/index.js' /**
 * The target to which to send matching events.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplate.html */

export interface EventBridgeRuleTemplateTarget {
  /**
   * - Target ARNs must be either an SNS topic or CloudWatch log group.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn.+$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplate.html#cfn-medialive-eventbridgeruletemplate-eventbridgeruletemplatetarget-arn */
  Arn: string | Intrinsic
}

/**
 * The `AWS::MediaLive::EventBridgeRuleTemplate` resource Property description not available. for MediaLive.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplate.html */

export interface MediaLiveEventBridgeRuleTemplate {
  Type: 'AWS::MediaLive::EventBridgeRuleTemplate'
  Properties: {
    /**
     * - A resource's optional description.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplate.html#cfn-medialive-eventbridgeruletemplate-description */
    Description?: string | Intrinsic
    /**
     * - The destinations that will receive the event notifications.
     * - _Required_: No
     * - _Type_: Array of [EventBridgeRuleTemplateTarget](./aws-properties-medialive-eventbridgeruletemplate-eventbridgeruletemplatetarget.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplate.html#cfn-medialive-eventbridgeruletemplate-eventtargets */
    EventTargets?: EventBridgeRuleTemplateTarget[]
    /**
     * - The type of event to match with the rule.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `MEDIALIVE_MULTIPLEX_ALERT | MEDIALIVE_MULTIPLEX_STATE_CHANGE | MEDIALIVE_CHANNEL_ALERT | MEDIALIVE_CHANNEL_INPUT_CHANGE | MEDIALIVE_CHANNEL_STATE_CHANGE | MEDIAPACKAGE_INPUT_NOTIFICATION | MEDIAPACKAGE_KEY_PROVIDER_NOTIFICATION | MEDIAPACKAGE_HARVEST_JOB_NOTIFICATION | SIGNAL_MAP_ACTIVE_ALARM | MEDIACONNECT_ALERT | MEDIACONNECT_SOURCE_HEALTH | MEDIACONNECT_OUTPUT_HEALTH | MEDIACONNECT_FLOW_STATUS_CHANGE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplate.html#cfn-medialive-eventbridgeruletemplate-eventtype */
    EventType: string | Intrinsic
    /**
     * - An eventbridge rule template group's identifier. Can be either be its id or current name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[^\s]+$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplate.html#cfn-medialive-eventbridgeruletemplate-groupidentifier */
    GroupIdentifier: string | Intrinsic
    /**
     * - A resource's name. Names must be unique within the scope of a resource type in a specific region.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[^\s]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplate.html#cfn-medialive-eventbridgeruletemplate-name */
    Name: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.+`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplate.html#cfn-medialive-eventbridgeruletemplate-tags */
    Tags?: Record<string, string | Intrinsic>
  }
}
