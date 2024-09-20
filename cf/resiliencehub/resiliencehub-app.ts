import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Indicates an event you would like to subscribe and get notification for. Currently, AWS Resilience Hub supports notifications only for **Drift detected** and **Scheduled assessment failure** events.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html */

export interface EventSubscription {
  /**
   * - The type of event you would like to subscribe and get notification for. Currently, AWS Resilience Hub supports notifications only for **Drift detected** (`DriftDetected`) and **Scheduled assessment failure** (`ScheduledAssessmentFailure`) events.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ScheduledAssessmentFailure | DriftDetected`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-eventsubscription-eventtype */
  EventType: string | Intrinsic
  /**
   * - Unique name to identify an event subscription.
   * - _Required_: Yes
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-eventsubscription-name */
  Name: string | Intrinsic
  /**
   * - Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic. The format for this ARN is: `arn:partition:sns:region:account:topic-name`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the _AWS General Reference_ guide.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+.-]{0,1023}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-eventsubscription-snstopicarn */
  SnsTopicArn?: string | Intrinsic
}

/**
 * Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html */

export interface PermissionModel {
  /**
   * - Defines a list of role Amazon Resource Names (ARNs) to be used in other accounts. These ARNs are used for querying purposes while importing resources and assessing your application.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-permissionmodel-crossaccountrolearns */
  CrossAccountRoleArns?: (string | Intrinsic)[]
  /**
   * - Existing AWS IAM role name in the primary AWS account that will be assumed by AWS Resilience Hub Service Principle to obtain a read-only access to your application resources while running an assessment.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `((\u002F[\u0021-\u007E]+\u002F){1,511})?[A-Za-z0-9+=,.@_/-]{1,64}`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-permissionmodel-invokerrolename */
  InvokerRoleName?: string | Intrinsic
  /**
   * - Defines how AWS Resilience Hub scans your resources. It can scan for the resources by using a pre-existing role in your AWS account, or by using the credentials of the current IAM user.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `LegacyIAMUser | RoleBased`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-permissionmodel-type */
  Type: string | Intrinsic
}

/**
 * Defines a physical resource identifier.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html */

export interface PhysicalResourceId {
  /**
   * - The AWS account that owns the physical resource.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[0-9]{12}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-physicalresourceid-awsaccountid */
  AwsAccountId?: string | Intrinsic
  /**
   * - The AWS Region that the physical resource is located in.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-physicalresourceid-awsregion */
  AwsRegion?: string | Intrinsic
  /**
   * - Identifier of the physical resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-physicalresourceid-identifier */
  Identifier: string | Intrinsic
  /**
   * - Specifies the type of physical resource identifier.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `Arn|Native`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-physicalresourceid-type */
  Type: string | Intrinsic
}

/**
 * Defines a resource mapping.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html */

export interface ResourceMapping {
  /**
   * - Name of the Amazon Elastic Kubernetes Service cluster and namespace that this resource is mapped to when the `mappingType` is `EKS`.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-resourcemapping-ekssourcename */
  EksSourceName?: string | Intrinsic
  /**
   * - Name of the AWS CloudFormation stack this resource is mapped to when the `mappingType` is `CfnStack`.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-resourcemapping-logicalstackname */
  LogicalStackName?: string | Intrinsic
  /**
   * - Specifies the type of resource mapping.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `CfnStack|Resource|Terraform|EKS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-resourcemapping-mappingtype */
  MappingType: string | Intrinsic
  /**
   * - Identifier of the physical resource.
   * - _Required_: Yes
   * - _Type_: [PhysicalResourceId](./aws-properties-resiliencehub-app-physicalresourceid.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-resourcemapping-physicalresourceid */
  PhysicalResourceId: PhysicalResourceId
  /**
   * - Name of the resource that this resource is mapped to when the `mappingType` is `Resource`.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-resourcemapping-resourcename */
  ResourceName?: string | Intrinsic
  /**
   * - Name of the Terraform source that this resource is mapped to when the `mappingType` is `Terraform`.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-resourcemapping-terraformsourcename */
  TerraformSourceName?: string | Intrinsic
}

/**
 * Creates an AWS Resilience Hub application. An AWS Resilience Hub application is a collection of AWS resources structured to prevent and recover AWS application disruptions. To describe a AWS Resilience Hub application, you provide an application name, resources from one or more AWS CloudFormation stacks, AWS Resource Groups, Terraform state files, AppRegistry applications, and an appropriate resiliency policy. In addition, you can also add resources that are located on Amazon Elastic Kubernetes Service (Amazon EKS) clusters as optional resources. For more information about the number of resources supported per application, see [Service quotas](https://docs.aws.amazon.com/general/latest/gr/resiliencehub.html#limits_resiliencehub).
 * After you create an AWS Resilience Hub application, you publish it so that you can run a resiliency assessment on it. You can then use recommendations from the assessment to improve resiliency by running another assessment, comparing results, and then iterating the process until you achieve your goals for recovery time objective (RTO) and recovery point objective (RPO).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html */

export interface ResilienceHubApp extends ResourceAttributes {
  Type: 'AWS::ResilienceHub::App'
  Properties: {
    /**
     * - Assessment execution schedule with 'Daily' or 'Disabled' values.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Disabled | Daily`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-appassessmentschedule */
    AppAssessmentSchedule?: string | Intrinsic
    /**
     * - A JSON string that provides information about your application structure. To learn more about the `appTemplateBody` template, see the sample template in [Sample appTemplateBody template](https://docs.aws.amazon.com/resilience-hub/latest/APIReference/API_PutDraftAppVersionTemplate.html#API_PutDraftAppVersionTemplate_Examples).
     * - The `appTemplateBody` JSON string has the following structure:
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[\w\s:,-\.'\/{}\[\]:"]+$`
     * - _Minimum_: `0`
     * - _Maximum_: `409600`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-apptemplatebody */
    AppTemplateBody: string | Intrinsic
    /**
     * - Optional description for an application.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `500`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-description */
    Description?: string | Intrinsic
    /**
     * - The list of events you would like to subscribe and get notification for. Currently, AWS Resilience Hub supports notifications only for **Drift detected** and **Scheduled assessment failure** events.
     * - _Required_: No
     * - _Type_: Array of [EventSubscription](./aws-properties-resiliencehub-app-eventsubscription.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-eventsubscriptions */
    EventSubscriptions?: EventSubscription[]
    /**
     * - Name for the application.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-name */
    Name: string | Intrinsic
    /**
     * - Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment.
     * - _Required_: No
     * - _Type_: [PermissionModel](./aws-properties-resiliencehub-app-permissionmodel.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-permissionmodel */
    PermissionModel?: PermissionModel
    /**
     * - The Amazon Resource Name (ARN) of the resiliency policy.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]):[0-9]{12}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-resiliencypolicyarn */
    ResiliencyPolicyArn?: string | Intrinsic
    /**
     * - An array of `ResourceMapping` objects.
     * - _Required_: Yes
     * - _Type_: Array of [ResourceMapping](./aws-properties-resiliencehub-app-resourcemapping.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-resourcemappings */
    ResourceMappings: ResourceMapping[]
    /**
     * - Tags assigned to the resource. A tag is a label that you assign to an AWS resource. Each tag consists of a key/value pair.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.{1,128}`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-app.html#cfn-resiliencehub-app-tags */
    Tags?: Record<string, string | Intrinsic>
  }
}
