import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The AWS Chatbot chat channel used for collaboration during an incident.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html */

export interface ChatChannel {
  /**
   * - The Amazon SNS targets that AWS Chatbot uses to notify the chat channel of updates to an incident. You can also make updates to the incident through the chat channel by using the Amazon SNS topics
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-chatchannel-chatbotsns */
  ChatbotSns?: (string | Intrinsic)[]
}

/**
 * An array of tags to add to the response plan.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html */

export interface Tag {
  /**
   * - The tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-tag-value */
  Value: string | Intrinsic
}

/**
 * The Amazon SNS topic that's used by AWS Chatbot to notify the incidents chat channel.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html */

export interface NotificationTargetItem {
  /**
   * - The Amazon Resource Name (ARN) of the Amazon SNS topic.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:aws(-(cn|us-gov))?:sns:(([a-z]+-)+[0-9])?:([0-9]{12})?:[^.]+$`
   * - _Maximum_: `1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-notificationtargetitem-snstopicarn */
  SnsTopicArn?: string | Intrinsic
}

/**
 * The key-value pair parameters to use when running the Automation runbook.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html */

export interface SsmParameter {
  /**
   * - The key parameter to use when running the Automation runbook.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-ssmparameter-key */
  Key: string | Intrinsic
  /**
   * - The value parameter to use when running the Automation runbook.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-ssmparameter-values */
  Values: (string | Intrinsic)[]
}

/**
 * Details about the PagerDuty service where the response plan creates an incident.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html */

export interface PagerDutyIncidentConfiguration {
  /**
   * - The ID of the PagerDuty service that the response plan associates with an incident when it launches.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-pagerdutyincidentconfiguration-serviceid */
  ServiceId: string | Intrinsic
}

/**
 * The dynamic parameter value.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html */

export interface DynamicSsmParameterValue {
  /**
   * - Variable dynamic parameters. A parameter value is determined when an incident is created.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `INCIDENT_RECORD_ARN | INVOLVED_RESOURCES`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-dynamicssmparametervalue-variable */
  Variable?: string | Intrinsic
}

/**
 * The `IncidentTemplate` property type specifies details used to create an incident when using this response plan.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html */

export interface IncidentTemplate {
  /**
   * - Used to create only one incident record for an incident.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-incidenttemplate-dedupestring */
  DedupeString?: string | Intrinsic
  /**
   * - Defines the impact to the customers. Providing an impact overwrites the impact provided by a response plan.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-incidenttemplate-impact */
  Impact: number | Intrinsic
  /**
   * - Tags to assign to the template. When the `StartIncident` API action is called, Incident Manager assigns the tags specified in the template to the incident.
   * - _Required_: No
   * - _Type_: Array of [Tag](./aws-properties-ssmincidents-responseplan-tag.html)
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-incidenttemplate-incidenttags */
  IncidentTags?: Tag[]
  /**
   * - The Amazon Simple Notification Service (Amazon SNS) targets that AWS Chatbot uses to notify the chat channel of updates to an incident. You can also make updates to the incident through the chat channel using the Amazon SNS topics.
   * - _Required_: No
   * - _Type_: Array of [NotificationTargetItem](./aws-properties-ssmincidents-responseplan-notificationtargetitem.html)
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-incidenttemplate-notificationtargets */
  NotificationTargets?: NotificationTargetItem[]
  /**
   * - The summary describes what has happened during the incident.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `4000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-incidenttemplate-summary */
  Summary?: string | Intrinsic
  /**
   * - The title of the incident is a brief and easily recognizable.
   * - _Required_: Yes
   * - _Type_: String
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-incidenttemplate-title */
  Title: string | Intrinsic
}

/**
 * Details about the PagerDuty configuration for a response plan.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html */

export interface PagerDutyConfiguration {
  /**
   * - The name of the PagerDuty configuration.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-pagerdutyconfiguration-name */
  Name: string | Intrinsic
  /**
   * - Details about the PagerDuty service associated with the configuration.
   * - _Required_: Yes
   * - _Type_: [PagerDutyIncidentConfiguration](./aws-properties-ssmincidents-responseplan-pagerdutyincidentconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-pagerdutyconfiguration-pagerdutyincidentconfiguration */
  PagerDutyIncidentConfiguration: PagerDutyIncidentConfiguration
  /**
   * - The ID of the AWS Secrets Manager secret that stores your PagerDuty key, either a General Access REST API Key or User Token REST API Key, and other user credentials.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-pagerdutyconfiguration-secretid */
  SecretId: string | Intrinsic
}

/**
 * When you add a runbook to a response plan, you can specify the parameters for the runbook to use at runtime. Response plans support parameters with both static and dynamic values. For static values, you enter the value when you define the parameter in the response plan. For dynamic values, the system determines the correct parameter value by collecting information from the incident. Incident Manager supports the following dynamic parameters:
 * **Incident ARN**
 * When Incident Manager creates an incident, the system captures the Amazon Resource Name (ARN) of the corresponding incident record and enters it for this parameter in the runbook.
 * ###### Note
 *
 * This value can only be assigned to parameters of type `String`. If assigned to a parameter of any other type, the runbook fails to run.
 * **Involved resources**
 * When Incident Manager creates an incident, the system captures the ARNs of the resources involved in the incident. These resource ARNs are then assigned to this parameter in the runbook.
 * ###### Note
 *
 * This value can only be assigned to parameters of type `StringList`. If assigned to a parameter of any other type, the runbook fails to run.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html */

export interface DynamicSsmParameter {
  /**
   * - The key parameter to use when running the Systems Manager Automation runbook.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-dynamicssmparameter-key */
  Key: string | Intrinsic
  /**
   * - The dynamic parameter value.
   * - _Required_: Yes
   * - _Type_: [DynamicSsmParameterValue](./aws-properties-ssmincidents-responseplan-dynamicssmparametervalue.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-dynamicssmparameter-value */
  Value: DynamicSsmParameterValue
}

/**
 * Information about third-party services integrated into a response plan.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html */

export interface Integration {
  /**
   * - Information about the PagerDuty service where the response plan creates an incident.
   * - _Required_: No
   * - _Type_: [PagerDutyConfiguration](./aws-properties-ssmincidents-responseplan-pagerdutyconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-integration-pagerdutyconfiguration */
  PagerDutyConfiguration?: PagerDutyConfiguration
}

/**
 * The `SsmAutomation` property type specifies details about the Systems Manager Automation runbook that will be used as the runbook during an incident.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html */

export interface SsmAutomation {
  /**
   * - The automation document's name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-ssmautomation-documentname */
  DocumentName: string | Intrinsic
  /**
   * - The version of the runbook to use when running.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-ssmautomation-documentversion */
  DocumentVersion?: string | Intrinsic
  /**
   * - The key-value pairs to resolve dynamic parameter values when processing a Systems Manager Automation runbook.
   * - _Required_: No
   * - _Type_: Array of [DynamicSsmParameter](./aws-properties-ssmincidents-responseplan-dynamicssmparameter.html)
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-ssmautomation-dynamicparameters */
  DynamicParameters?: DynamicSsmParameter[]
  /**
   * - The key-value pair parameters to use when running the runbook.
   * - _Required_: No
   * - _Type_: Array of [SsmParameter](./aws-properties-ssmincidents-responseplan-ssmparameter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-ssmautomation-parameters */
  Parameters?: SsmParameter[]
  /**
   * - The Amazon Resource Name (ARN) of the role that the automation document will assume when running commands.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws(-(cn|us-gov))?:[a-z-]+:(([a-z]+-)+[0-9])?:([0-9]{12})?:[^.]+$`
   * - _Maximum_: `1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-ssmautomation-rolearn */
  RoleArn: string | Intrinsic
  /**
   * - The account that the automation document will be run in. This can be in either the management account or an application account.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `IMPACTED_ACCOUNT | RESPONSE_PLAN_OWNER_ACCOUNT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-ssmautomation-targetaccount */
  TargetAccount?: string | Intrinsic
}

/**
 * The `Action` property type specifies the configuration to launch.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html */

export interface Action {
  /**
   * - Details about the Systems Manager automation document that will be used as a runbook during an incident.
   * - _Required_: No
   * - _Type_: [SsmAutomation](./aws-properties-ssmincidents-responseplan-ssmautomation.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-action-ssmautomation */
  SsmAutomation?: SsmAutomation
}

/**
 * The `AWS::SSMIncidents::ResponsePlan` resource specifies the details of the response plan that are used when creating an incident.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html */

export interface SSMIncidentsResponsePlan extends ResourceAttributes {
  Type: 'AWS::SSMIncidents::ResponsePlan'
  Properties: {
    /**
     * - The actions that the response plan starts at the beginning of an incident.
     * - _Required_: No
     * - _Type_: Array of [Action](./aws-properties-ssmincidents-responseplan-action.html)
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-actions */
    Actions?: Action[]
    /**
     * - The AWS Chatbot chat channel used for collaboration during an incident.
     * - _Required_: No
     * - _Type_: [ChatChannel](./aws-properties-ssmincidents-responseplan-chatchannel.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-chatchannel */
    ChatChannel?: ChatChannel
    /**
     * - The human readable name of the response plan.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-displayname */
    DisplayName?: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-engagements */
    Engagements?: (string | Intrinsic)[]
    /**
     * - Details used to create an incident when using this response plan.
     * - _Required_: Yes
     * - _Type_: [IncidentTemplate](./aws-properties-ssmincidents-responseplan-incidenttemplate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-incidenttemplate */
    IncidentTemplate: IncidentTemplate
    /**
     * - Information about third-party services integrated into the response plan.
     * - _Required_: No
     * - _Type_: Array of [Integration](./aws-properties-ssmincidents-responseplan-integration.html)
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-integrations */
    Integrations?: Integration[]
    /**
     * - The name of the response plan.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_-]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-name */
    Name: string | Intrinsic
    /**
     * - An array of key-value pairs to apply to this resource.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ssmincidents-responseplan-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-responseplan.html#cfn-ssmincidents-responseplan-tags */
    Tags?: Tag[]
  }
}
