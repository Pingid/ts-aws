import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Metadata that you assign to your AWS resources. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. In AWS Systems Manager, you can apply tags to Systems Manager documents (SSM documents), managed nodes, maintenance windows, parameters, patch baselines, OpsItems, and OpsMetadata.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html */

export interface Tag {
  /**
   * - The name of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-tag-value */
  Value: string | Intrinsic
}

/**
 * The `AWS::SSM::MaintenanceWindow` resource represents general information about a maintenance window for AWS Systems Manager. Maintenance windows let you define a schedule for when to perform potentially disruptive actions on your instances, such as patching an operating system (OS), updating drivers, or installing software. Each maintenance window has a schedule, a duration, a set of registered targets, and a set of registered tasks.
 * For more information, see [Systems Manager Maintenance Windows](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-maintenance.html) in the _AWS Systems Manager User Guide_ and [CreateMaintenanceWindow](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreateMaintenanceWindow.html) in the _AWS Systems Manager API Reference_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html */

export interface SSMMaintenanceWindow extends ResourceAttributes {
  Type: 'AWS::SSM::MaintenanceWindow'
  Properties: {
    /**
     * - Enables a maintenance window task to run on managed instances, even if you have not registered those instances as targets. If enabled, then you must specify the unregistered instances (by instance ID) when you register a task with the maintenance window.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-allowunassociatedtargets */
    AllowUnassociatedTargets: boolean | Intrinsic
    /**
     * - The number of hours before the end of the maintenance window that AWS Systems Manager stops scheduling new tasks for execution.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `23`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-cutoff */
    Cutoff: number | Intrinsic
    /**
     * - A description of the maintenance window.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-description */
    Description?: string | Intrinsic
    /**
     * - The duration of the maintenance window in hours.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `24`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-duration */
    Duration: number | Intrinsic
    /**
     * - The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-enddate */
    EndDate?: string | Intrinsic
    /**
     * - The name of the maintenance window.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_\-.]{3,128}$`
     * - _Minimum_: `3`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-name */
    Name: string | Intrinsic
    /**
     * - The schedule of the maintenance window in the form of a cron or rate expression.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-schedule */
    Schedule: string | Intrinsic
    /**
     * - The number of days to wait to run a maintenance window after the scheduled cron expression date and time.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `6`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-scheduleoffset */
    ScheduleOffset?: number | Intrinsic
    /**
     * - The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-scheduletimezone */
    ScheduleTimezone?: string | Intrinsic
    /**
     * - The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active. `StartDate` allows you to delay activation of the maintenance window until the specified future date.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-startdate */
    StartDate?: string | Intrinsic
    /**
     * - Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs). Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a maintenance window to identify the type of tasks it will run, the types of targets, and the environment it will run in.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ssm-maintenancewindow-tag.html)
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindow.html#cfn-ssm-maintenancewindow-tags */
    Tags?: Tag[]
  }
}
