import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * `InstanceMaintenancePolicy` is a property of the [AWS::AutoScaling::AutoScalingGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html) resource.
 * For more information, see [Instance maintenance policies](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-maintenance-policy.html) in the _Amazon EC2 Auto Scaling User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html */

export interface InstanceMaintenancePolicy {
  /**
   * - Specifies the upper threshold as a percentage of the desired capacity of the Auto Scaling group. It represents the maximum percentage of the group that can be in service and healthy, or pending, to support your workload when replacing instances. Value range is 100 to 200. To clear a previously set value, specify a value of `-1`.
   * - Both `MinHealthyPercentage` and `MaxHealthyPercentage` must be specified, and the difference between them cannot be greater than 100. A large range increases the number of instances that can be replaced at the same time.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `-1`
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancemaintenancepolicy-maxhealthypercentage */
  MaxHealthyPercentage?: number | Intrinsic
  /**
   * - Specifies the lower threshold as a percentage of the desired capacity of the Auto Scaling group. It represents the minimum percentage of the group to keep in service, healthy, and ready to use to support your workload when replacing instances. Value range is 0 to 100. To clear a previously set value, specify a value of `-1`.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `-1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancemaintenancepolicy-minhealthypercentage */
  MinHealthyPercentage?: number | Intrinsic
}

/**
 * Specifies a launch template to use when provisioning EC2 instances for an Auto Scaling group.
 * You must specify the following:
 * *   The ID or the name of the launch template, but not both.
 *
 * *   The version of the launch template.
 * `LaunchTemplateSpecification` is property of the [AWS::AutoScaling::AutoScalingGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html) resource. It is also a property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplate.html) and [AWS::AutoScaling::AutoScalingGroup LaunchTemplateOverrides](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html) property types.
 * For information about creating a launch template, see [AWS::EC2::LaunchTemplate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html) and [Create a launch template for an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html) in the _Amazon EC2 Auto Scaling User Guide_.
 * For examples of launch templates, see [Create launch templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-ec2-launch-templates.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html */

export interface LaunchTemplateSpecification {
  /**
   * - The ID of the launch template.
   * - You must specify the `LaunchTemplateID` or the `LaunchTemplateName`, but not both.
   * - _Required_: Conditional
   * - _Type_: String
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-launchtemplatespecification-launchtemplateid */
  LaunchTemplateId?: string | Intrinsic
  /**
   * - The name of the launch template.
   * - You must specify the `LaunchTemplateName` or the `LaunchTemplateID`, but not both.
   * - _Required_: Conditional
   * - _Type_: String
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-launchtemplatespecification-launchtemplatename */
  LaunchTemplateName?: string | Intrinsic
  /**
   * - The version number of the launch template.
   * - Specifying `$Latest` or `$Default` for the template version number is not supported. However, you can specify `LatestVersionNumber` or `DefaultVersionNumber` using the `Fn::GetAtt` intrinsic function. For more information, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-launchtemplatespecification-version */
  Version: string | Intrinsic
}

/**
 * `LifecycleHookSpecification` specifies a lifecycle hook for the `LifecycleHookSpecificationList` property of the [AWS::AutoScaling::AutoScalingGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html) resource. A lifecycle hook specifies actions to perform when Amazon EC2 Auto Scaling launches or terminates instances.
 * For more information, see [Amazon EC2 Auto Scaling lifecycle hooks](https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html) in the _Amazon EC2 Auto Scaling User Guide_. You can find a sample template snippet in the [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-as-lifecyclehook.html#aws-resource-as-lifecyclehook--examples) section of the `AWS::AutoScaling::LifecycleHook` resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html */

export interface LifecycleHookSpecification {
  /**
   * - The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. The default value is `ABANDON`.
   * - Valid values: `CONTINUE` | `ABANDON`
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-lifecyclehookspecification-defaultresult */
  DefaultResult?: string | Intrinsic
  /**
   * - The maximum time, in seconds, that can elapse before the lifecycle hook times out. The range is from `30` to `7200` seconds. The default value is `3600` seconds (1 hour).
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-lifecyclehookspecification-heartbeattimeout */
  HeartbeatTimeout?: number | Intrinsic
  /**
   * - The name of the lifecycle hook.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[A-Za-z0-9\-_\/]+`
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-lifecyclehookspecification-lifecyclehookname */
  LifecycleHookName: string | Intrinsic
  /**
   * - The lifecycle transition. For Auto Scaling groups, there are two major lifecycle transitions.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-lifecyclehookspecification-lifecycletransition */
  LifecycleTransition: string | Intrinsic
  /**
   * - Additional information that you want to include any time Amazon EC2 Auto Scaling sends a message to the notification target.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[\u0009\u000A\u000D\u0020-\u007e]+`
   * - _Minimum_: `1`
   * - _Maximum_: `4000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-lifecyclehookspecification-notificationmetadata */
  NotificationMetadata?: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling sends notifications to when an instance is in a wait state for the lifecycle hook. You can specify an Amazon SNS topic or an Amazon SQS queue.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-lifecyclehookspecification-notificationtargetarn */
  NotificationTargetARN?: string | Intrinsic
  /**
   * - The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target. For information about creating this role, see [Prepare to add a lifecycle hook to your Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/prepare-for-lifecycle-notifications.html) in the _Amazon EC2 Auto Scaling User Guide_.
   * - Valid only if the notification target is an Amazon SNS topic or an Amazon SQS queue.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-lifecyclehookspecification-rolearn */
  RoleARN?: string | Intrinsic
}

/**
 * `MetricsCollection` is a property of the [AWS::AutoScaling::AutoScalingGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html) resource that describes the group metrics that an Amazon EC2 Auto Scaling group sends to Amazon CloudWatch. These metrics describe the group rather than any of its instances.
 * For more information, see [Monitor CloudWatch metrics for your Auto Scaling groups and instances](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-monitoring.html) in the _Amazon EC2 Auto Scaling User Guide_. You can find a sample template snippet in the [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#aws-resource-autoscaling-autoscalinggroup--examples) section of the `AWS::AutoScaling::AutoScalingGroup` resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html */

export interface MetricsCollection {
  /**
   * - The frequency at which Amazon EC2 Auto Scaling sends aggregated data to CloudWatch. The only valid value is `1Minute`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-metricscollection-granularity */
  Granularity: string | Intrinsic
  /**
   * - Identifies the metrics to enable.
   * - You can specify one or more of the following metrics:
   * - If you specify `Granularity` and don't specify any metrics, all metrics are enabled.
   * - For more information, see [Amazon CloudWatch metrics for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-metrics.html) in the _Amazon EC2 Auto Scaling User Guide_.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-metricscollection-metrics */
  Metrics?: (string | Intrinsic)[]
}

/**
 * A structure that specifies an Amazon SNS notification configuration for the `NotificationConfigurations` property of the [AWS::AutoScaling::AutoScalingGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html) resource.
 * For an example template snippet, see [Configure Amazon EC2 Auto Scaling resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-ec2-auto-scaling.html).
 * For more information, see [Get Amazon SNS notifications when your Auto Scaling group scales](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html) in the _Amazon EC2 Auto Scaling User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html */

export interface NotificationConfiguration {
  /**
   * - A list of event types that send a notification. Event types can include any of the following types.
   * - _Allowed values_:
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-notificationconfiguration-notificationtypes */
  NotificationTypes?: (string | Intrinsic)[]
  /**
   * - The Amazon Resource Name (ARN) of the Amazon SNS topic.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-notificationconfiguration-topicarn */
  TopicARN: (string | Intrinsic)[]
}

/**
 * A structure that specifies a tag for the `Tags` property of [AWS::AutoScaling::AutoScalingGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html) resource.
 * For more information, see [Tag Auto Scaling groups and instances](https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.html) in the _Amazon EC2 Auto Scaling User Guide_. You can find a sample template snippet in the [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#aws-resource-autoscaling-autoscalinggroup--examples) section of the `AWS::AutoScaling::AutoScalingGroup` resource.
 * CloudFormation adds the following tags to all Auto Scaling groups and associated instances:
 * *   aws:cloudformation:stack-name
 *
 * *   aws:cloudformation:stack-id
 *
 * *   aws:cloudformation:logical-id
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html */

export interface TagProperty {
  /**
   * - The tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-tagproperty-key */
  Key: string | Intrinsic
  /**
   * - Set to `true` if you want CloudFormation to copy the tag to EC2 instances that are launched as part of the Auto Scaling group. Set to `false` if you want the tag attached only to the Auto Scaling group and not copied to any instances launched as part of the Auto Scaling group.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-tagproperty-propagateatlaunch */
  PropagateAtLaunch: boolean | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-tagproperty-value */
  Value: string | Intrinsic
}

/**
 * Use this structure to specify the distribution of On-Demand Instances and Spot Instances and the allocation strategies used to fulfill On-Demand and Spot capacities for a mixed instances policy.
 * For more information, see [Auto Scaling groups with multiple instance types and purchase options](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html) in the _Amazon EC2 Auto Scaling User Guide_.
 * `InstancesDistribution` is a property of the [AWS::AutoScaling::AutoScalingGroup MixedInstancesPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-mixedinstancespolicy.html) property type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html */

export interface InstancesDistribution {
  /**
   * - The allocation strategy to apply to your On-Demand Instances when they are launched. Possible instance types are determined by the launch template overrides that you specify.
   * - The following lists the valid values:
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancesdistribution-ondemandallocationstrategy */
  OnDemandAllocationStrategy?: string | Intrinsic
  /**
   * - The minimum amount of the Auto Scaling group's capacity that must be fulfilled by On-Demand Instances. This base portion is launched first as your group scales.
   * - This number has the same unit of measurement as the group's desired capacity. If you change the default unit of measurement (number of instances) by specifying weighted capacity values in your launch template overrides list, or by changing the default desired capacity type setting of the group, you must specify this number using the same unit of measurement.
   * - Default: 0
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancesdistribution-ondemandbasecapacity */
  OnDemandBaseCapacity?: number | Intrinsic
  /**
   * - Controls the percentages of On-Demand Instances and Spot Instances for your additional capacity beyond `OnDemandBaseCapacity`. Expressed as a number (for example, 20 specifies 20% On-Demand Instances, 80% Spot Instances). If set to 100, only On-Demand Instances are used.
   * - Default: 100
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancesdistribution-ondemandpercentageabovebasecapacity */
  OnDemandPercentageAboveBaseCapacity?: number | Intrinsic
  /**
   * - The allocation strategy to apply to your Spot Instances when they are launched. Possible instance types are determined by the launch template overrides that you specify.
   * - The following lists the valid values:
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancesdistribution-spotallocationstrategy */
  SpotAllocationStrategy?: string | Intrinsic
  /**
   * - The number of Spot Instance pools across which to allocate your Spot Instances. The Spot pools are determined from the different instance types in the overrides. Valid only when the `SpotAllocationStrategy` is `lowest-price`. Value must be in the range of 1–20.
   * - Default: 2
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancesdistribution-spotinstancepools */
  SpotInstancePools?: number | Intrinsic
  /**
   * - The maximum price per unit hour that you are willing to pay for a Spot Instance. If your maximum price is lower than the Spot price for the instance types that you selected, your Spot Instances are not launched. We do not recommend specifying a maximum price because it can lead to increased interruptions. When Spot Instances launch, you pay the current Spot price. To remove a maximum price that you previously set, include the property but specify an empty string ("") for the value.
   * - Valid Range: Minimum value of 0.001
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancesdistribution-spotmaxprice */
  SpotMaxPrice?: string | Intrinsic
}

/**
 * `AcceleratorCountRequest` is a property of the `InstanceRequirements` property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplateOverrides](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html) property type that describes the minimum and maximum number of accelerators for an instance type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html */

export interface AcceleratorCountRequest {
  /**
   * - The maximum value.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-acceleratorcountrequest-max */
  Max?: number | Intrinsic
  /**
   * - The minimum value.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-acceleratorcountrequest-min */
  Min?: number | Intrinsic
}

/**
 * `AcceleratorTotalMemoryMiBRequest` is a property of the `InstanceRequirements` property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplateOverrides](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html) property type that describes the minimum and maximum total memory size for the accelerators for an instance type, in MiB.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html */

export interface AcceleratorTotalMemoryMiBRequest {
  /**
   * - The memory maximum in MiB.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-acceleratortotalmemorymibrequest-max */
  Max?: number | Intrinsic
  /**
   * - The memory minimum in MiB.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-acceleratortotalmemorymibrequest-min */
  Min?: number | Intrinsic
}

/**
 * `BaselineEbsBandwidthMbpsRequest` is a property of the `InstanceRequirements` property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplateOverrides](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html) property type that describes the minimum and maximum baseline bandwidth performance for an instance type, in Mbps.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html */

export interface BaselineEbsBandwidthMbpsRequest {
  /**
   * - The maximum value in Mbps.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-baselineebsbandwidthmbpsrequest-max */
  Max?: number | Intrinsic
  /**
   * - The minimum value in Mbps.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-baselineebsbandwidthmbpsrequest-min */
  Min?: number | Intrinsic
}

/**
 * `MemoryGiBPerVCpuRequest` is a property of the `InstanceRequirements` property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplateOverrides](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html) property type that describes the minimum and maximum amount of memory per vCPU for an instance type, in GiB.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html */

export interface MemoryGiBPerVCpuRequest {
  /**
   * - The memory maximum in GiB.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-memorygibpervcpurequest-max */
  Max?: number | Intrinsic
  /**
   * - The memory minimum in GiB.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-memorygibpervcpurequest-min */
  Min?: number | Intrinsic
}

/**
 * `MemoryMiBRequest` is a property of the `InstanceRequirements` property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplateOverrides](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html) property type that describes the minimum and maximum instance memory size for an instance type, in MiB.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html */

export interface MemoryMiBRequest {
  /**
   * - The memory maximum in MiB.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-memorymibrequest-max */
  Max?: number | Intrinsic
  /**
   * - The memory minimum in MiB.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-memorymibrequest-min */
  Min?: number | Intrinsic
}

/**
 * `NetworkBandwidthGbpsRequest` is a property of the `InstanceRequirements` property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplateOverrides](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html) property type that describes the minimum and maximum network bandwidth for an instance type, in Gbps.
 * ###### Note
 *
 * Setting the minimum bandwidth does not guarantee that your instance will achieve the minimum bandwidth. Amazon EC2 will identify instance types that support the specified minimum bandwidth, but the actual bandwidth of your instance might go below the specified minimum at times. For more information, see [Available instance bandwidth](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html#available-instance-bandwidth) in the _Amazon EC2 User Guide for Linux Instances_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html */

export interface NetworkBandwidthGbpsRequest {
  /**
   * - The maximum amount of network bandwidth, in gigabits per second (Gbps).
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-networkbandwidthgbpsrequest-max */
  Max?: number | Intrinsic
  /**
   * - The minimum amount of network bandwidth, in gigabits per second (Gbps).
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-networkbandwidthgbpsrequest-min */
  Min?: number | Intrinsic
}

/**
 * `NetworkInterfaceCountRequest` is a property of the `InstanceRequirements` property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplateOverrides](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html) property type that describes the minimum and maximum number of network interfaces for an instance type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html */

export interface NetworkInterfaceCountRequest {
  /**
   * - The maximum number of network interfaces.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-networkinterfacecountrequest-max */
  Max?: number | Intrinsic
  /**
   * - The minimum number of network interfaces.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-networkinterfacecountrequest-min */
  Min?: number | Intrinsic
}

/**
 * `TotalLocalStorageGBRequest` is a property of the `InstanceRequirements` property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplateOverrides](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html) property type that describes the minimum and maximum total local storage size for an instance type, in GB.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html */

export interface TotalLocalStorageGBRequest {
  /**
   * - The storage maximum in GB.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-totallocalstoragegbrequest-max */
  Max?: number | Intrinsic
  /**
   * - The storage minimum in GB.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-totallocalstoragegbrequest-min */
  Min?: number | Intrinsic
}

/**
 * `VCpuCountRequest` is a property of the `InstanceRequirements` property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplateOverrides](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html) property type that describes the minimum and maximum number of vCPUs for an instance type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html */

export interface VCpuCountRequest {
  /**
   * - The maximum number of vCPUs.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-vcpucountrequest-max */
  Max?: number | Intrinsic
  /**
   * - The minimum number of vCPUs.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-vcpucountrequest-min */
  Min?: number | Intrinsic
}

/**
 * The attributes for the instance types for a mixed instances policy. Amazon EC2 Auto Scaling uses your specified requirements to identify instance types. Then, it uses your On-Demand and Spot allocation strategies to launch instances from these instance types.
 * When you specify multiple attributes, you get instance types that satisfy all of the specified attributes. If you specify multiple values for an attribute, you get instance types that satisfy any of the specified values.
 * To limit the list of instance types from which Amazon EC2 Auto Scaling can identify matching instance types, you can use one of the following parameters, but not both in the same request:
 * *   `AllowedInstanceTypes` - The instance types to include in the list. All other instance types are ignored, even if they match your specified attributes.
 *
 * *   `ExcludedInstanceTypes` - The instance types to exclude from the list, even if they match your specified attributes.
 * ###### Note
 *
 * You must specify `VCpuCount` and `MemoryMiB`. All other attributes are optional. Any unspecified optional attribute is set to its default.
 * For an example template, see [Configure Amazon EC2 Auto Scaling resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-ec2-auto-scaling.html).
 * For more information, see [Creating an Auto Scaling group using attribute-based instance type selection](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-instance-type-requirements.html) in the _Amazon EC2 Auto Scaling User Guide_. For help determining which instance types match your attributes before you apply them to your Auto Scaling group, see [Preview instance types with specified attributes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html#ec2fleet-get-instance-types-from-instance-requirements) in the _Amazon EC2 User Guide for Linux Instances_.
 * `InstanceRequirements` is a property of the `LaunchTemplateOverrides` property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplate.html) property type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html */

export interface InstanceRequirements {
  /**
   * - The minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips) for an instance type.
   * - To exclude accelerator-enabled instance types, set `Max` to `0`.
   * - Default: No minimum or maximum limits
   * - _Required_: No
   * - _Type_: [AcceleratorCountRequest](./aws-properties-autoscaling-autoscalinggroup-acceleratorcountrequest.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-acceleratorcount */
  AcceleratorCount?: AcceleratorCountRequest
  /**
   * - Indicates whether instance types must have accelerators by specific manufacturers.
   * - Default: Any manufacturer
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-acceleratormanufacturers */
  AcceleratorManufacturers?: (string | Intrinsic)[]
  /**
   * - Lists the accelerators that must be on an instance type.
   * - Default: Any accelerator
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-acceleratornames */
  AcceleratorNames?: (string | Intrinsic)[]
  /**
   * - The minimum and maximum total memory size for the accelerators on an instance type, in MiB.
   * - Default: No minimum or maximum limits
   * - _Required_: No
   * - _Type_: [AcceleratorTotalMemoryMiBRequest](./aws-properties-autoscaling-autoscalinggroup-acceleratortotalmemorymibrequest.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-acceleratortotalmemorymib */
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest
  /**
   * - Lists the accelerator types that must be on an instance type.
   * - Default: Any accelerator type
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-acceleratortypes */
  AcceleratorTypes?: (string | Intrinsic)[]
  /**
   * - The instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes.
   * - You can use strings with one or more wild cards, represented by an asterisk (`*`), to allow an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`.
   * - For example, if you specify `c5*`, Amazon EC2 Auto Scaling will allow the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, Amazon EC2 Auto Scaling will allow all the M5a instance types, but not the M5n instance types.
   * - Default: All instance types
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `400`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-allowedinstancetypes */
  AllowedInstanceTypes?: (string | Intrinsic)[]
  /**
   * - Indicates whether bare metal instance types are included, excluded, or required.
   * - Default: `excluded`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `included | excluded | required`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-baremetal */
  BareMetal?: string | Intrinsic
  /**
   * - The minimum and maximum baseline bandwidth performance for an instance type, in Mbps. For more information, see [Amazon EBS–optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the _Amazon EC2 User Guide for Linux Instances_.
   * - Default: No minimum or maximum limits
   * - _Required_: No
   * - _Type_: [BaselineEbsBandwidthMbpsRequest](./aws-properties-autoscaling-autoscalinggroup-baselineebsbandwidthmbpsrequest.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-baselineebsbandwidthmbps */
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest
  /**
   * - Indicates whether burstable performance instance types are included, excluded, or required. For more information, see [Burstable performance instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html) in the _Amazon EC2 User Guide for Linux Instances_.
   * - Default: `excluded`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `included | excluded | required`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-burstableperformance */
  BurstablePerformance?: string | Intrinsic
  /**
   * - Lists which specific CPU manufacturers to include.
   * - Default: Any manufacturer
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-cpumanufacturers */
  CpuManufacturers?: (string | Intrinsic)[]
  /**
   * - The instance types to exclude. You can use strings with one or more wild cards, represented by an asterisk (`*`), to exclude an instance family, type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`.
   * - For example, if you specify `c5*`, you are excluding the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, Amazon EC2 Auto Scaling will exclude all the M5a instance types, but not the M5n instance types.
   * - Default: No excluded instance types
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `400`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-excludedinstancetypes */
  ExcludedInstanceTypes?: (string | Intrinsic)[]
  /**
   * - Indicates whether current or previous generation instance types are included.
   * - Default: Any current or previous generation
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-instancegenerations */
  InstanceGenerations?: (string | Intrinsic)[]
  /**
   * - Indicates whether instance types with instance store volumes are included, excluded, or required. For more information, see [Amazon EC2 instance store](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html) in the _Amazon EC2 User Guide for Linux Instances_.
   * - Default: `included`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `included | excluded | required`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-localstorage */
  LocalStorage?: string | Intrinsic
  /**
   * - Indicates the type of local storage that is required.
   * - Default: Any local storage type
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-localstoragetypes */
  LocalStorageTypes?: (string | Intrinsic)[]
  /**
   * - \[Price protection\] The price protection threshold for Spot Instances, as a percentage of an identified On-Demand price. The identified On-Demand price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified price is from either the lowest priced current generation instance types or, failing that, the lowest priced previous generation instance types that match your attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price exceeds your specified threshold.
   * - The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage.
   * - If you set `DesiredCapacityType` to `vcpu` or `memory-mib`, the price protection threshold is based on the per-vCPU or per-memory price instead of the per instance price.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-maxspotpriceaspercentageofoptimalondemandprice */
  MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number | Intrinsic
  /**
   * - The minimum and maximum amount of memory per vCPU for an instance type, in GiB.
   * - Default: No minimum or maximum limits
   * - _Required_: No
   * - _Type_: [MemoryGiBPerVCpuRequest](./aws-properties-autoscaling-autoscalinggroup-memorygibpervcpurequest.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-memorygibpervcpu */
  MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest
  /**
   * - The minimum and maximum instance memory size for an instance type, in MiB.
   * - _Required_: Yes
   * - _Type_: [MemoryMiBRequest](./aws-properties-autoscaling-autoscalinggroup-memorymibrequest.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-memorymib */
  MemoryMiB: MemoryMiBRequest
  /**
   * - The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).
   * - Default: No minimum or maximum limits
   * - _Required_: No
   * - _Type_: [NetworkBandwidthGbpsRequest](./aws-properties-autoscaling-autoscalinggroup-networkbandwidthgbpsrequest.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-networkbandwidthgbps */
  NetworkBandwidthGbps?: NetworkBandwidthGbpsRequest
  /**
   * - The minimum and maximum number of network interfaces for an instance type.
   * - Default: No minimum or maximum limits
   * - _Required_: No
   * - _Type_: [NetworkInterfaceCountRequest](./aws-properties-autoscaling-autoscalinggroup-networkinterfacecountrequest.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-networkinterfacecount */
  NetworkInterfaceCount?: NetworkInterfaceCountRequest
  /**
   * - \[Price protection\] The price protection threshold for On-Demand Instances, as a percentage higher than an identified On-Demand price. The identified On-Demand price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified price is from either the lowest priced current generation instance types or, failing that, the lowest priced previous generation instance types that match your attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price exceeds your specified threshold.
   * - The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage.
   * - To turn off price protection, specify a high value, such as `999999`.
   * - If you set `DesiredCapacityType` to `vcpu` or `memory-mib`, the price protection threshold is applied based on the per-vCPU or per-memory price instead of the per instance price.
   * - Default: `20`
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-ondemandmaxpricepercentageoverlowestprice */
  OnDemandMaxPricePercentageOverLowestPrice?: number | Intrinsic
  /**
   * - Indicates whether instance types must provide On-Demand Instance hibernation support.
   * - Default: `false`
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-requirehibernatesupport */
  RequireHibernateSupport?: boolean | Intrinsic
  /**
   * - \[Price protection\] The price protection threshold for Spot Instances, as a percentage higher than an identified Spot price. The identified Spot price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified price is from either the lowest priced current generation instance types or, failing that, the lowest priced previous generation instance types that match your attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price exceeds your specified threshold.
   * - The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage.
   * - If you set `DesiredCapacityType` to `vcpu` or `memory-mib`, the price protection threshold is based on the per-vCPU or per-memory price instead of the per instance price.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-spotmaxpricepercentageoverlowestprice */
  SpotMaxPricePercentageOverLowestPrice?: number | Intrinsic
  /**
   * - The minimum and maximum total local storage size for an instance type, in GB.
   * - Default: No minimum or maximum limits
   * - _Required_: No
   * - _Type_: [TotalLocalStorageGBRequest](./aws-properties-autoscaling-autoscalinggroup-totallocalstoragegbrequest.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-totallocalstoragegb */
  TotalLocalStorageGB?: TotalLocalStorageGBRequest
  /**
   * - The minimum and maximum number of vCPUs for an instance type.
   * - _Required_: Yes
   * - _Type_: [VCpuCountRequest](./aws-properties-autoscaling-autoscalinggroup-vcpucountrequest.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancerequirements-vcpucount */
  VCpuCount: VCpuCountRequest
}

/**
 * Use this structure to let Amazon EC2 Auto Scaling do the following when the Auto Scaling group has a mixed instances policy:
 * *   Override the instance type that is specified in the launch template.
 *
 * *   Use multiple instance types.
 * Specify the instance types that you want, or define your instance requirements instead and let Amazon EC2 Auto Scaling provision the available instance types that meet your requirements. This can provide Amazon EC2 Auto Scaling with a larger selection of instance types to choose from when fulfilling Spot and On-Demand capacities. You can view which instance types are matched before you apply the instance requirements to your Auto Scaling group.
 * After you define your instance requirements, you don't have to keep updating these settings to get new EC2 instance types automatically. Amazon EC2 Auto Scaling uses the instance requirements of the Auto Scaling group to determine whether a new EC2 instance type can be used.
 * `LaunchTemplateOverrides` is a property of the [AWS::AutoScaling::AutoScalingGroup LaunchTemplate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-launchtemplate.html) property type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html */

export interface LaunchTemplateOverrides {
  /**
   * - The instance requirements. Amazon EC2 Auto Scaling uses your specified requirements to identify instance types. Then, it uses your On-Demand and Spot allocation strategies to launch instances from these instance types.
   * - You can specify up to four separate sets of instance requirements per Auto Scaling group. This is useful for provisioning instances from different Amazon Machine Images (AMIs) in the same Auto Scaling group. To do this, create the AMIs and create a new launch template for each AMI. Then, create a compatible set of instance requirements for each launch template.
   * - _Required_: No
   * - _Type_: [InstanceRequirements](./aws-properties-autoscaling-autoscalinggroup-instancerequirements.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-launchtemplateoverrides-instancerequirements */
  InstanceRequirements?: InstanceRequirements
  /**
   * - The instance type, such as `m3.xlarge`. You must specify an instance type that is supported in your requested Region and Availability Zones. For more information, see [Instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the _Amazon EC2 User Guide for Linux Instances_.
   * - You can specify up to 40 instance types per Auto Scaling group.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-launchtemplateoverrides-instancetype */
  InstanceType?: string | Intrinsic
  /**
   * - Provides a launch template for the specified instance type or set of instance requirements. For example, some instance types might require a launch template with a different AMI. If not provided, Amazon EC2 Auto Scaling uses the launch template that's specified in the `LaunchTemplate` definition. For more information, see [Specifying a different launch template for an instance type](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups-launch-template-overrides.html) in the _Amazon EC2 Auto Scaling User Guide_.
   * - You can specify up to 20 launch templates per Auto Scaling group. The launch templates specified in the overrides and in the `LaunchTemplate` definition count towards this limit.
   * - _Required_: No
   * - _Type_: [LaunchTemplateSpecification](./aws-properties-autoscaling-autoscalinggroup-launchtemplatespecification.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-launchtemplateoverrides-launchtemplatespecification */
  LaunchTemplateSpecification?: LaunchTemplateSpecification
  /**
   * - If you provide a list of instance types to use, you can specify the number of capacity units provided by each instance type in terms of virtual CPUs, memory, storage, throughput, or other relative performance characteristic. When a Spot or On-Demand Instance is launched, the capacity units count toward the desired capacity. Amazon EC2 Auto Scaling launches instances until the desired capacity is totally fulfilled, even if this results in an overage. For example, if there are two units remaining to fulfill capacity, and Amazon EC2 Auto Scaling can only launch an instance with a `WeightedCapacity` of five units, the instance is launched, and the desired capacity is exceeded by three units. For more information, see [Configure instance weighting for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups-instance-weighting.html) in the _Amazon EC2 Auto Scaling User Guide_. Value must be in the range of 1-999.
   * - If you specify a value for `WeightedCapacity` for one instance type, you must specify a value for `WeightedCapacity` for all of them.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-launchtemplateoverrides-weightedcapacity */
  WeightedCapacity?: string | Intrinsic
}

/**
 * Use this structure to specify the launch templates and instance types (overrides) for a mixed instances policy.
 * `LaunchTemplate` is a property of the [AWS::AutoScaling::AutoScalingGroup MixedInstancesPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-mixedinstancespolicy.html) property type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html */

export interface LaunchTemplate {
  /**
   * - The launch template.
   * - _Required_: Yes
   * - _Type_: [LaunchTemplateSpecification](./aws-properties-autoscaling-autoscalinggroup-launchtemplatespecification.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-launchtemplate-launchtemplatespecification */
  LaunchTemplateSpecification: LaunchTemplateSpecification
  /**
   * - Any properties that you specify override the same properties in the launch template.
   * - _Required_: No
   * - _Type_: Array of [LaunchTemplateOverrides](./aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-launchtemplate-overrides */
  Overrides?: LaunchTemplateOverrides[]
}

/**
 * Use this structure to launch multiple instance types and On-Demand Instances and Spot Instances within a single Auto Scaling group.
 * A mixed instances policy contains information that Amazon EC2 Auto Scaling can use to launch instances and help optimize your costs. For more information, see [Auto Scaling groups with multiple instance types and purchase options](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html) in the _Amazon EC2 Auto Scaling User Guide_.
 * You can create a mixed instances policy for new and existing Auto Scaling groups. You must use a launch template to configure the policy. You cannot use a launch configuration.
 * There are key differences between Spot Instances and On-Demand Instances:
 * *   The price for Spot Instances varies based on demand
 *
 * *   Amazon EC2 can terminate an individual Spot Instance as the availability of, or price for, Spot Instances changes
 * When a Spot Instance is terminated, Amazon EC2 Auto Scaling group attempts to launch a replacement instance to maintain the desired capacity for the group.
 * `MixedInstancesPolicy` is a property of the [AWS::AutoScaling::AutoScalingGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html) resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html */

export interface MixedInstancesPolicy {
  /**
   * - The instances distribution.
   * - _Required_: No
   * - _Type_: [InstancesDistribution](./aws-properties-autoscaling-autoscalinggroup-instancesdistribution.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-mixedinstancespolicy-instancesdistribution */
  InstancesDistribution?: InstancesDistribution
  /**
   * - One or more launch templates and the instance types (overrides) that are used to launch EC2 instances to fulfill On-Demand and Spot capacities.
   * - _Required_: Yes
   * - _Type_: [LaunchTemplate](./aws-properties-autoscaling-autoscalinggroup-launchtemplate.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-mixedinstancespolicy-launchtemplate */
  LaunchTemplate: LaunchTemplate
}

/**
 * The `AWS::AutoScaling::AutoScalingGroup` resource defines an Amazon EC2 Auto Scaling group, which is a collection of Amazon EC2 instances that are treated as a logical grouping for the purposes of automatic scaling and management.
 * For more information about Amazon EC2 Auto Scaling, see the [Amazon EC2 Auto Scaling User Guide](https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html).
 * ###### Note
 *
 * Amazon EC2 Auto Scaling configures instances launched as part of an Auto Scaling group using either a [launch template](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html) or a launch configuration. We strongly recommend that you do not use launch configurations. For more information, see [Launch configurations](https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-configurations.html) in the _Amazon EC2 Auto Scaling User Guide_.
 *
 * For help migrating from launch configurations to launch templates, see [Migrate AWS CloudFormation stacks from launch configurations to launch templates](https://docs.aws.amazon.com/autoscaling/ec2/userguide/migrate-launch-configurations-with-cloudformation.html) in the _Amazon EC2 Auto Scaling User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html */

export interface AutoScalingAutoScalingGroup extends ResourceAttributes {
  Type: 'AWS::AutoScaling::AutoScalingGroup'
  Properties: {
    /**
     * - The name of the Auto Scaling group. This name must be unique per Region per account.
     * - The name can contain any ASCII character 33 to 126 including most punctuation characters, digits, and upper and lowercased letters.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-autoscalinggroupname */
    AutoScalingGroupName?: string | Intrinsic
    /**
     * - A list of Availability Zones where instances in the Auto Scaling group can be created. Used for launching into the default VPC subnet in each Availability Zone when not using the `VPCZoneIdentifier` property, or for attaching a network interface when an existing network interface ID is specified in a launch template.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-availabilityzones */
    AvailabilityZones?: (string | Intrinsic)[]
    /**
     * - Indicates whether Capacity Rebalancing is enabled. Otherwise, Capacity Rebalancing is disabled. When you turn on Capacity Rebalancing, Amazon EC2 Auto Scaling attempts to launch a Spot Instance whenever Amazon EC2 notifies that a Spot Instance is at an elevated risk of interruption. After launching a new instance, it then terminates an old instance. For more information, see [Use Capacity Rebalancing to handle Amazon EC2 Spot Interruptions](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-capacity-rebalancing.html) in the in the _Amazon EC2 Auto Scaling User Guide_.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-capacityrebalance */
    CapacityRebalance?: boolean | Intrinsic
    /**
     * - Reserved.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-context */
    Context?: string | Intrinsic
    /**
     * - _Only needed if you use simple scaling policies._
     * - The amount of time, in seconds, between one scaling activity ending and another one starting due to simple scaling policies. For more information, see [Scaling cooldowns for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scaling-cooldowns.html) in the _Amazon EC2 Auto Scaling User Guide_.
     * - Default: `300` seconds
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-cooldown */
    Cooldown?: string | Intrinsic
    /**
     * - The amount of time, in seconds, until a new instance is considered to have finished initializing and resource consumption to become stable after it enters the `InService` state.
     * - During an instance refresh, Amazon EC2 Auto Scaling waits for the warm-up period after it replaces an instance before it moves on to replacing the next instance. Amazon EC2 Auto Scaling also waits for the warm-up period before aggregating the metrics for new instances with existing instances in the Amazon CloudWatch metrics that are used for scaling, resulting in more reliable usage data. For more information, see [Set the default instance warmup for an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-default-instance-warmup.html) in the _Amazon EC2 Auto Scaling User Guide_.
     * - Default: None
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-defaultinstancewarmup */
    DefaultInstanceWarmup?: number | Intrinsic
    /**
     * - The desired capacity is the initial capacity of the Auto Scaling group at the time of its creation and the capacity it attempts to maintain. It can scale beyond this capacity if you configure automatic scaling.
     * - The number must be greater than or equal to the minimum size of the group and less than or equal to the maximum size of the group. If you do not specify a desired capacity when creating the stack, the default is the minimum size of the group.
     * - CloudFormation marks the Auto Scaling group as successful (by setting its status to CREATE\_COMPLETE) when the desired capacity is reached. However, if a maximum Spot price is set in the launch template or launch configuration that you specified, then desired capacity is not used as a criteria for success. Whether your request is fulfilled depends on Spot Instance capacity and your maximum price.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[0-9]+$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-desiredcapacity */
    DesiredCapacity?: string | Intrinsic
    /**
     * - The unit of measurement for the value specified for desired capacity. Amazon EC2 Auto Scaling supports `DesiredCapacityType` for attribute-based instance type selection only. For more information, see [Create a mixed instances group using attribute-based instance type selection](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-mixed-instances-group-attribute-based-instance-type-selection.html) in the _Amazon EC2 Auto Scaling User Guide_.
     * - By default, Amazon EC2 Auto Scaling specifies `units`, which translates into number of instances.
     * - Valid values: `units` | `vcpu` | `memory-mib`
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-desiredcapacitytype */
    DesiredCapacityType?: string | Intrinsic
    /**
     * - The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service and marking it unhealthy due to a failed health check. This is useful if your instances do not immediately pass their health checks after they enter the `InService` state. For more information, see [Set the health check grace period for an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/health-check-grace-period.html) in the _Amazon EC2 Auto Scaling User Guide_.
     * - Default: `0` seconds
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-healthcheckgraceperiod */
    HealthCheckGracePeriod?: number | Intrinsic
    /**
     * - A comma-separated value string of one or more health check types.
     * - The valid values are `EC2`, `EBS`, `ELB`, and `VPC_LATTICE`. `EC2` is the default health check and cannot be disabled. For more information, see [Health checks for instances in an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-health-checks.html) in the _Amazon EC2 Auto Scaling User Guide_.
     * - Only specify `EC2` if you must clear a value that was previously set.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-healthchecktype */
    HealthCheckType?: string | Intrinsic
    /**
     * - The ID of the instance used to base the launch configuration on. For more information, see [Create an Auto Scaling group using an EC2 instance](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-from-instance.html) in the _Amazon EC2 Auto Scaling User Guide_.
     * - If you specify `LaunchTemplate`, `MixedInstancesPolicy`, or `LaunchConfigurationName`, don't specify `InstanceId`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instanceid */
    InstanceId?: string | Intrinsic
    /**
     * - An instance maintenance policy. For more information, see [Set instance maintenance policy](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-maintenance-policy.html) in the _Amazon EC2 Auto Scaling User Guide_.
     * - _Required_: No
     * - _Type_: [InstanceMaintenancePolicy](./aws-properties-autoscaling-autoscalinggroup-instancemaintenancepolicy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-instancemaintenancepolicy */
    InstanceMaintenancePolicy?: InstanceMaintenancePolicy
    /**
     * - The name of the launch configuration to use to launch instances.
     * - Required only if you don't specify `LaunchTemplate`, `MixedInstancesPolicy`, or `InstanceId`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-launchconfigurationname */
    LaunchConfigurationName?: string | Intrinsic
    /**
     * - Information used to specify the launch template and version to use to launch instances. You can alternatively associate a launch template to the Auto Scaling group by specifying a `MixedInstancesPolicy`. For more information about creating launch templates, see [Create a launch template for an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html) in the _Amazon EC2 Auto Scaling User Guide_.
     * - If you omit this property, you must specify `MixedInstancesPolicy`, `LaunchConfigurationName`, or `InstanceId`.
     * - _Required_: No
     * - _Type_: [LaunchTemplateSpecification](./aws-properties-autoscaling-autoscalinggroup-launchtemplatespecification.html)
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-launchtemplate */
    LaunchTemplate?: LaunchTemplateSpecification
    /**
     * - One or more lifecycle hooks to add to the Auto Scaling group before instances are launched.
     * - _Required_: No
     * - _Type_: Array of [LifecycleHookSpecification](./aws-properties-autoscaling-autoscalinggroup-lifecyclehookspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-lifecyclehookspecificationlist */
    LifecycleHookSpecificationList?: LifecycleHookSpecification[]
    /**
     * - A list of Classic Load Balancers associated with this Auto Scaling group. For Application Load Balancers, Network Load Balancers, and Gateway Load Balancers, specify the `TargetGroupARNs` property instead.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-loadbalancernames */
    LoadBalancerNames?: (string | Intrinsic)[]
    /**
     * - The maximum amount of time, in seconds, that an instance can be in service. The default is null. If specified, the value must be either 0 or a number equal to or greater than 86,400 seconds (1 day). For more information, see [Replace Auto Scaling instances based on maximum instance lifetime](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-max-instance-lifetime.html) in the _Amazon EC2 Auto Scaling User Guide_.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-maxinstancelifetime */
    MaxInstanceLifetime?: number | Intrinsic
    /**
     * - The maximum size of the group.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[0-9]+$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-maxsize */
    MaxSize: string | Intrinsic
    /**
     * - Enables the monitoring of group metrics of an Auto Scaling group. By default, these metrics are disabled.
     * - _Required_: No
     * - _Type_: [Array](./aws-properties-autoscaling-autoscalinggroup-metricscollection.html) of [MetricsCollection](./aws-properties-autoscaling-autoscalinggroup-metricscollection.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-metricscollection */
    MetricsCollection?: MetricsCollection[]
    /**
     * - The minimum size of the group.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[0-9]+$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-minsize */
    MinSize: string | Intrinsic
    /**
     * - An embedded object that specifies a mixed instances policy.
     * - The policy includes properties that not only define the distribution of On-Demand Instances and Spot Instances, the maximum price to pay for Spot Instances (optional), and how the Auto Scaling group allocates instance types to fulfill On-Demand and Spot capacities, but also the properties that specify the instance configuration information—the launch template and instance types. The policy can also include a weight for each instance type and different launch templates for individual instance types.
     * - For more information, see [Auto Scaling groups with multiple instance types and purchase options](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html) in the _Amazon EC2 Auto Scaling User Guide_.
     * - _Required_: No
     * - _Type_: [MixedInstancesPolicy](./aws-properties-autoscaling-autoscalinggroup-mixedinstancespolicy.html)
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-mixedinstancespolicy */
    MixedInstancesPolicy?: MixedInstancesPolicy
    /**
     * - Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see [Use instance scale-in protection](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html) in the _Amazon EC2 Auto Scaling User Guide_.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-newinstancesprotectedfromscalein */
    NewInstancesProtectedFromScaleIn?: boolean | Intrinsic
    /**
     * - Configures an Auto Scaling group to send notifications when specified events take place.
     * - _Required_: No
     * - _Type_: Array of [NotificationConfiguration](./aws-properties-autoscaling-autoscalinggroup-notificationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-notificationconfigurations */
    NotificationConfigurations?: NotificationConfiguration[]
    /**
     * - The name of the placement group into which to launch your instances. For more information, see [Placement groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html) in the _Amazon EC2 User Guide for Linux Instances_.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-placementgroup */
    PlacementGroup?: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other AWS service on your behalf. By default, Amazon EC2 Auto Scaling uses a service-linked role named `AWSServiceRoleForAutoScaling`, which it creates if it does not exist. For more information, see [Service-linked roles](https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-service-linked-role.html) in the _Amazon EC2 Auto Scaling User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-servicelinkedrolearn */
    ServiceLinkedRoleARN?: string | Intrinsic
    /**
     * - One or more tags. You can tag your Auto Scaling group and propagate the tags to the Amazon EC2 instances it launches. Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS volumes, specify the tags in a launch template but use caution. If the launch template specifies an instance tag with a key that is also specified for the Auto Scaling group, Amazon EC2 Auto Scaling overrides the value of that instance tag with the value specified by the Auto Scaling group. For more information, see [Tag Auto Scaling groups and instances](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html) in the _Amazon EC2 Auto Scaling User Guide_.
     * - _Required_: No
     * - _Type_: Array of [TagProperty](./aws-properties-autoscaling-autoscalinggroup-tagproperty.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-tags */
    Tags?: TagProperty[]
    /**
     * - The Amazon Resource Names (ARN) of the Elastic Load Balancing target groups to associate with the Auto Scaling group. Instances are registered as targets with the target groups. The target groups receive incoming traffic and route requests to one or more registered targets. For more information, see [Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html) in the _Amazon EC2 Auto Scaling User Guide_.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-targetgrouparns */
    TargetGroupARNs?: (string | Intrinsic)[]
    /**
     * - A policy or a list of policies that are used to select the instance to terminate. These policies are executed in the order that you list them. For more information, see [Configure termination policies for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html) in the _Amazon EC2 Auto Scaling User Guide_.
     * - Valid values: `Default` | `AllocationStrategy` | `ClosestToNextInstanceHour` | `NewestInstance` | `OldestInstance` | `OldestLaunchConfiguration` | `OldestLaunchTemplate` | `arn:aws:lambda:region:account-id:function:my-function:my-alias`
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-terminationpolicies */
    TerminationPolicies?: (string | Intrinsic)[]
    /**
     * - A list of subnet IDs for a virtual private cloud (VPC) where instances in the Auto Scaling group can be created.
     * - If this resource specifies public subnets and is also in a VPC that is defined in the same stack template, you must use the [DependsOn attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) to declare a dependency on the [VPC-gateway attachment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-gateway-attachment.html).
     * - Required to launch instances into a nondefault VPC. If you specify `VPCZoneIdentifier` with `AvailabilityZones`, the subnets that you specify for this property must reside in those Availability Zones.
     * - _Required_: Conditional
     * - _Type_: Array of String
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-autoscalinggroup.html#cfn-autoscaling-autoscalinggroup-vpczoneidentifier */
    VPCZoneIdentifier?: (string | Intrinsic)[]
  }
}
