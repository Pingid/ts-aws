import type { Intrinsic } from '../intrinsic/index.js' /**
 * Describes a pause cluster operation. For example, a scheduled action to run the `PauseCluster` API operation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html */

export interface PauseClusterMessage {
  /**
   * - The identifier of the cluster to be paused.
   * - _Required_: Yes
   * - _Type_: String
   * - _Maximum_: `2147483647`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-pauseclustermessage-clusteridentifier */
  ClusterIdentifier: string | Intrinsic
}

/**
 * Describes a resize cluster operation. For example, a scheduled action to run the `ResizeCluster` API operation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html */

export interface ResizeClusterMessage {
  /**
   * - A boolean value indicating whether the resize operation is using the classic resize process. If you don't provide this parameter or set the value to `false`, the resize type is elastic.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-resizeclustermessage-classic */
  Classic?: boolean | Intrinsic
  /**
   * - The unique identifier for the cluster to resize.
   * - _Required_: Yes
   * - _Type_: String
   * - _Maximum_: `2147483647`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-resizeclustermessage-clusteridentifier */
  ClusterIdentifier: string | Intrinsic
  /**
   * - The new cluster type for the specified cluster.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `2147483647`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-resizeclustermessage-clustertype */
  ClusterType?: string | Intrinsic
  /**
   * - The new node type for the nodes you are adding. If not specified, the cluster's current node type is used.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `2147483647`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-resizeclustermessage-nodetype */
  NodeType?: string | Intrinsic
  /**
   * - The new number of nodes for the cluster. If not specified, the cluster's current number of nodes is used.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-resizeclustermessage-numberofnodes */
  NumberOfNodes?: number | Intrinsic
}

/**
 * Describes a resume cluster operation. For example, a scheduled action to run the `ResumeCluster` API operation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html */

export interface ResumeClusterMessage {
  /**
   * - The identifier of the cluster to be resumed.
   * - _Required_: Yes
   * - _Type_: String
   * - _Maximum_: `2147483647`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-resumeclustermessage-clusteridentifier */
  ClusterIdentifier: string | Intrinsic
}

/**
 * The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html */

export interface ScheduledActionType {
  /**
   * - An action that runs a `PauseCluster` API operation.
   * - _Required_: No
   * - _Type_: [PauseClusterMessage](./aws-properties-redshift-scheduledaction-pauseclustermessage.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-scheduledactiontype-pausecluster */
  PauseCluster?: PauseClusterMessage
  /**
   * - An action that runs a `ResizeCluster` API operation.
   * - _Required_: No
   * - _Type_: [ResizeClusterMessage](./aws-properties-redshift-scheduledaction-resizeclustermessage.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-scheduledactiontype-resizecluster */
  ResizeCluster?: ResizeClusterMessage
  /**
   * - An action that runs a `ResumeCluster` API operation.
   * - _Required_: No
   * - _Type_: [ResumeClusterMessage](./aws-properties-redshift-scheduledaction-resumeclustermessage.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-scheduledactiontype-resumecluster */
  ResumeCluster?: ResumeClusterMessage
}

/**
 * Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action. For example, you can create a schedule of when to run the `ResizeCluster` API operation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html */

export interface RedshiftScheduledAction {
  Type: 'AWS::Redshift::ScheduledAction'
  Properties: {
    /**
     * - If true, the schedule is enabled. If false, the scheduled action does not trigger. For more information about `state` of the scheduled action, see [AWS::Redshift::ScheduledAction](./aws-resource-redshift-scheduledaction.html).
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-enable */
    Enable?: boolean | Intrinsic
    /**
     * - The end time in UTC when the schedule is no longer active. After this time, the scheduled action does not trigger.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-endtime */
    EndTime?: string | Intrinsic
    /**
     * - The IAM role to assume to run the scheduled action. This IAM role must have permission to run the Amazon Redshift API operation in the scheduled action. This IAM role must allow the Amazon Redshift scheduler (Principal scheduler.redshift.amazonaws.com) to assume permissions on your behalf. For more information about the IAM role to use with the Amazon Redshift scheduler, see [Using Identity-Based Policies for Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html) in the _Amazon Redshift Cluster Management Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-iamrole */
    IamRole?: string | Intrinsic
    /**
     * - The schedule for a one-time (at format) or recurring (cron format) scheduled action. Schedule invocations must be separated by at least one hour.
     * - Format of at expressions is "`at(yyyy-mm-ddThh:mm:ss)`". For example, "`at(2016-03-04T17:27:00)`".
     * - Format of cron expressions is "`cron(Minutes Hours Day-of-month Month Day-of-week Year)`". For example, "`cron(0 10 ? * MON *)`". For more information, see [Cron Expressions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions) in the _Amazon CloudWatch Events User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-schedule */
    Schedule?: string | Intrinsic
    /**
     * - The description of the scheduled action.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-scheduledactiondescription */
    ScheduledActionDescription?: string | Intrinsic
    /**
     * - The name of the scheduled action.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-scheduledactionname */
    ScheduledActionName: string | Intrinsic
    /**
     * - The start time in UTC when the schedule is active. Before this time, the scheduled action does not trigger.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-starttime */
    StartTime?: string | Intrinsic
    /**
     * - A JSON format string of the Amazon Redshift API operation with input parameters.
     * - "`{\"ResizeCluster\":{\"NodeType\":\"ra3.4xlarge\",\"ClusterIdentifier\":\"my-test-cluster\",\"NumberOfNodes\":3}}`".
     * - _Required_: No
     * - _Type_: [ScheduledActionType](./aws-properties-redshift-scheduledaction-scheduledactiontype.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-scheduledaction.html#cfn-redshift-scheduledaction-targetaction */
    TargetAction?: ScheduledActionType
  }
}
