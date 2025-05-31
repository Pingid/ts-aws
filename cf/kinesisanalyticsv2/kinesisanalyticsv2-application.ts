import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `ApplicationMaintenanceConfiguration` property type specifies Property description not available. for an [AWS::KinesisAnalyticsV2::Application](./aws-resource-kinesisanalyticsv2-application.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface ApplicationMaintenanceConfiguration {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([01][0-9]|2[0-3]):[0-5][0-9]$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationmaintenanceconfiguration-applicationmaintenancewindowstarttime */
    "ApplicationMaintenanceWindowStartTime": string | Intrinsic;
}

/**
 * A key-value pair (the value is optional) that you can define and assign to Amazon resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see [Using Tagging](https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface Tag {
    /**
     * - The key of the key-value tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the key-value tag. The value is optional.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Describes whether snapshots are enabled for a Managed Service for Apache Flink application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface ApplicationSnapshotConfiguration {
    /**
     * - Describes whether snapshots are enabled for a Managed Service for Apache Flink application.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationsnapshotconfiguration-snapshotsenabled */
    "SnapshotsEnabled": boolean | Intrinsic;
}

/**
 * Describes the system rollback configuration for a Managed Service for Apache Flink application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface ApplicationSystemRollbackConfiguration {
    /**
     * - Describes whether system rollbacks are enabled for a Managed Service for Apache Flink application.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationsystemrollbackconfiguration-rollbackenabled */
    "RollbackEnabled": boolean | Intrinsic;
}

/**
 * Describes the parameters of a VPC used by the application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface VpcConfiguration {
    /**
     * - The array of [SecurityGroup](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html) IDs used by the VPC configuration.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-vpcconfiguration-securitygroupids */
    "SecurityGroupIds": (string | Intrinsic)[];
    /**
     * - The array of [Subnet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html) IDs used by the VPC configuration.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `16`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-vpcconfiguration-subnetids */
    "SubnetIds": (string | Intrinsic)[];
}

/**
 * Specifies the method and snapshot to use when restarting an application using previously saved application state.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface ApplicationRestoreConfiguration {
    /**
     * - Specifies how the application should be restored.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `SKIP_RESTORE_FROM_SNAPSHOT | RESTORE_FROM_LATEST_SNAPSHOT | RESTORE_FROM_CUSTOM_SNAPSHOT`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationrestoreconfiguration-applicationrestoretype */
    "ApplicationRestoreType": string | Intrinsic;
    /**
     * - The identifier of an existing snapshot of application state to use to restart an application. The application uses this value if `RESTORE_FROM_CUSTOM_SNAPSHOT` is specified for the `ApplicationRestoreType`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_.-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationrestoreconfiguration-snapshotname */
    "SnapshotName"?: string | Intrinsic;
}

/**
 * Describes the starting parameters for a Managed Service for Apache Flink application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface FlinkRunConfiguration {
    /**
     * - When restoring from a snapshot, specifies whether the runtime is allowed to skip a state that cannot be mapped to the new program. This will happen if the program is updated between snapshots to remove stateful parameters, and state data in the snapshot no longer corresponds to valid application data. For more information, see [Allowing Non-Restored State](https://nightlies.apache.org/flink/flink-docs-master/docs/ops/state/savepoints/#allowing-non-restored-state) in the [Apache Flink documentation](https://nightlies.apache.org/flink/flink-docs-master).
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-flinkrunconfiguration-allownonrestoredstate */
    "AllowNonRestoredState"?: boolean | Intrinsic;
}

/**
 * Describes the starting parameters for an Managed Service for Apache Flink application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface RunConfiguration {
    /**
     * - Describes the restore behavior of a restarting application.
     * - _Required_: No
     * - _Type_: [ApplicationRestoreConfiguration](./aws-properties-kinesisanalyticsv2-application-applicationrestoreconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-runconfiguration-applicationrestoreconfiguration */
    "ApplicationRestoreConfiguration"?: ApplicationRestoreConfiguration;
    /**
     * - Describes the starting parameters for a Managed Service for Apache Flink application.
     * - _Required_: No
     * - _Type_: [FlinkRunConfiguration](./aws-properties-kinesisanalyticsv2-application-flinkrunconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-runconfiguration-flinkrunconfiguration */
    "FlinkRunConfiguration"?: FlinkRunConfiguration;
}

/**
 * Property key-value pairs passed into an application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface PropertyGroup {
    /**
     * - Describes the key of an application execution property key-value pair.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_.-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-propertygroup-propertygroupid */
    "PropertyGroupId"?: string | Intrinsic;
    /**
     * - Describes the value of an application execution property key-value pair.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^.{1,2048}$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-propertygroup-propertymap */
    "PropertyMap"?: Record<string, string | Intrinsic>;
}

/**
 * Describes execution properties for a Managed Service for Apache Flink application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface EnvironmentProperties {
    /**
     * - Describes the execution property groups.
     * - _Required_: No
     * - _Type_: Array of [PropertyGroup](./aws-properties-kinesisanalyticsv2-application-propertygroup.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-environmentproperties-propertygroups */
    "PropertyGroups"?: PropertyGroup[];
}

/**
 * Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see [Checkpoints for Fault Tolerance](https://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/fault-tolerance/checkpointing/) in the [Apache Flink Documentation](https://nightlies.apache.org/flink/flink-docs-master).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface CheckpointConfiguration {
    /**
     * - Describes whether checkpointing is enabled for a Managed Service for Apache Flink application.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-checkpointconfiguration-checkpointingenabled */
    "CheckpointingEnabled"?: boolean | Intrinsic;
    /**
     * - Describes the interval in milliseconds between checkpoint operations.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `9223372036854775807`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-checkpointconfiguration-checkpointinterval */
    "CheckpointInterval"?: number | Intrinsic;
    /**
     * - Describes whether the application uses Managed Service for Apache Flink' default checkpointing behavior. You must set this property to `CUSTOM` in order to set the `CheckpointingEnabled`, `CheckpointInterval`, or `MinPauseBetweenCheckpoints` parameters.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `DEFAULT | CUSTOM`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-checkpointconfiguration-configurationtype */
    "ConfigurationType": string | Intrinsic;
    /**
     * - Describes the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation can start. If a checkpoint operation takes longer than the `CheckpointInterval`, the application otherwise performs continual checkpoint operations. For more information, see [Tuning Checkpointing](https://nightlies.apache.org/flink/flink-docs-master/docs/ops/state/large_state_tuning/#tuning-checkpointing) in the [Apache Flink Documentation](https://nightlies.apache.org/flink/flink-docs-master).
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `9223372036854775807`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-checkpointconfiguration-minpausebetweencheckpoints */
    "MinPauseBetweenCheckpoints"?: number | Intrinsic;
}

/**
 * Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously. For more information about parallelism, see [Parallel Execution](https://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/execution/parallel/) in the [Apache Flink Documentation](https://nightlies.apache.org/flink/flink-docs-master).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface ParallelismConfiguration {
    /**
     * - Describes whether the Managed Service for Apache Flink service can increase the parallelism of the application in response to increased throughput.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-parallelismconfiguration-autoscalingenabled */
    "AutoScalingEnabled"?: boolean | Intrinsic;
    /**
     * - Describes whether the application uses the default parallelism for the Managed Service for Apache Flink service. You must set this property to `CUSTOM` in order to change your application's `AutoScalingEnabled`, `Parallelism`, or `ParallelismPerKPU` properties.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `CUSTOM | DEFAULT`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-parallelismconfiguration-configurationtype */
    "ConfigurationType": string | Intrinsic;
    /**
     * - Describes the initial number of parallel tasks that a Java-based Kinesis Data Analytics application can perform. The Kinesis Data Analytics service can increase this number automatically if [ParallelismConfiguration:AutoScalingEnabled](https://docs.aws.amazon.com/managed-flink/latest/apiv2/API_ParallelismConfiguration.html#kinesisanalytics-Type-ParallelismConfiguration-AutoScalingEnabled.html) is set to `true`.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-parallelismconfiguration-parallelism */
    "Parallelism"?: number | Intrinsic;
    /**
     * - Describes the number of parallel tasks that a Java-based Kinesis Data Analytics application can perform per Kinesis Processing Unit (KPU) used by the application. For more information about KPUs, see [Amazon Kinesis Data Analytics Pricing](https://aws.amazon.com/kinesis/data-analytics/pricing/).
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-parallelismconfiguration-parallelismperkpu */
    "ParallelismPerKPU"?: number | Intrinsic;
}

/**
 * Describes configuration parameters for Amazon CloudWatch logging for a Java-based Kinesis Data Analytics application. For more information about CloudWatch logging, see [Monitoring](https://docs.aws.amazon.com/managed-flink/latest/java/monitoring-overview).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface MonitoringConfiguration {
    /**
     * - Describes whether to use the default CloudWatch logging configuration for an application. You must set this property to `CUSTOM` in order to set the `LogLevel` or `MetricsLevel` parameters.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `DEFAULT | CUSTOM`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-monitoringconfiguration-configurationtype */
    "ConfigurationType": string | Intrinsic;
    /**
     * - Describes the verbosity of the CloudWatch Logs for an application.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DEBUG | INFO | WARN | ERROR`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-monitoringconfiguration-loglevel */
    "LogLevel"?: string | Intrinsic;
    /**
     * - Describes the granularity of the CloudWatch Logs for an application. The `Parallelism` level is not recommended for applications with a Parallelism over 64 due to excessive costs.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `APPLICATION | OPERATOR | PARALLELISM | TASK`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-monitoringconfiguration-metricslevel */
    "MetricsLevel"?: string | Intrinsic;
}

/**
 * Describes configuration parameters for a Managed Service for Apache Flink application or a Studio notebook.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface FlinkApplicationConfiguration {
    /**
     * - Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see [Checkpoints for Fault Tolerance](https://ci.apache.org/projects/flink/flink-docs-release-1.8/concepts/programming-model.html#checkpoints-for-fault-tolerance) in the [Apache Flink Documentation](https://ci.apache.org/projects/flink/flink-docs-release-1.8/).
     * - _Required_: No
     * - _Type_: [CheckpointConfiguration](./aws-properties-kinesisanalyticsv2-application-checkpointconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-flinkapplicationconfiguration-checkpointconfiguration */
    "CheckpointConfiguration"?: CheckpointConfiguration;
    /**
     * - Describes configuration parameters for Amazon CloudWatch logging for an application.
     * - _Required_: No
     * - _Type_: [MonitoringConfiguration](./aws-properties-kinesisanalyticsv2-application-monitoringconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-flinkapplicationconfiguration-monitoringconfiguration */
    "MonitoringConfiguration"?: MonitoringConfiguration;
    /**
     * - Describes parameters for how an application executes multiple tasks simultaneously.
     * - _Required_: No
     * - _Type_: [ParallelismConfiguration](./aws-properties-kinesisanalyticsv2-application-parallelismconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-flinkapplicationconfiguration-parallelismconfiguration */
    "ParallelismConfiguration"?: ParallelismConfiguration;
}

/**
 * Describes configuration parameters for Amazon CloudWatch logging for a Kinesis Data Analytics Studio notebook. For more information about CloudWatch logging, see [Monitoring](https://docs.aws.amazon.com/managed-flink/latest/java/monitoring-overview.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface ZeppelinMonitoringConfiguration {
    /**
     * - The verbosity of the CloudWatch Logs for an application. You can set it to `INFO`, `WARN`, `ERROR`, or `DEBUG`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DEBUG | INFO | WARN | ERROR`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-zeppelinmonitoringconfiguration-loglevel */
    "LogLevel"?: string | Intrinsic;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface InputParallelism {
    /**
     * - The number of in-application streams to create.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-inputparallelism-count */
    "Count"?: number | Intrinsic;
}

/**
 * For a SQL-based Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface KinesisFirehoseInput {
    /**
     * - The Amazon Resource Name (ARN) of the delivery stream.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:.*$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-kinesisfirehoseinput-resourcearn */
    "ResourceARN": string | Intrinsic;
}

/**
 * Identifies a Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface KinesisStreamsInput {
    /**
     * - The ARN of the input Kinesis data stream to read.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:.*$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-kinesisstreamsinput-resourcearn */
    "ResourceARN": string | Intrinsic;
}

/**
 * The location of an application or a custom artifact.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface S3ContentLocation {
    /**
     * - The Amazon Resource Name (ARN) for the S3 bucket containing the application code.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:.*$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-s3contentlocation-bucketarn */
    "BucketARN": string | Intrinsic;
    /**
     * - The file key for the object containing the application code.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-s3contentlocation-filekey */
    "FileKey": string | Intrinsic;
    /**
     * - The version of the object containing the application code.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-s3contentlocation-objectversion */
    "ObjectVersion"?: string | Intrinsic;
}

/**
 * Specifies either the application code, or the location of the application code, for a Managed Service for Apache Flink application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface CodeContent {
    /**
     * - Information about the Amazon S3 bucket that contains the application code.
     * - _Required_: No
     * - _Type_: [S3ContentLocation](./aws-properties-kinesisanalyticsv2-application-s3contentlocation.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-codecontent-s3contentlocation */
    "S3ContentLocation"?: S3ContentLocation;
    /**
     * - The text-format code for a Managed Service for Apache Flink application.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `102400`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-codecontent-textcontent */
    "TextContent"?: string | Intrinsic;
    /**
     * - The zip-format code for a Managed Service for Apache Flink application.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-codecontent-zipfilecontent */
    "ZipFileContent"?: string | Intrinsic;
}

/**
 * Describes code configuration for an application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface ApplicationCodeConfiguration {
    /**
     * - The location and type of the application code.
     * - _Required_: Yes
     * - _Type_: [CodeContent](./aws-properties-kinesisanalyticsv2-application-codecontent.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationcodeconfiguration-codecontent */
    "CodeContent": CodeContent;
    /**
     * - Specifies whether the code content is in text or zip format.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `PLAINTEXT | ZIPFILE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationcodeconfiguration-codecontenttype */
    "CodeContentType": string | Intrinsic;
}

/**
 * The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface GlueDataCatalogConfiguration {
    /**
     * - The Amazon Resource Name (ARN) of the database.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:.*$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-gluedatacatalogconfiguration-databasearn */
    "DatabaseARN"?: string | Intrinsic;
}

/**
 * The configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface CatalogConfiguration {
    /**
     * - The configuration parameters for the default Amazon Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook.
     * - _Required_: No
     * - _Type_: [GlueDataCatalogConfiguration](./aws-properties-kinesisanalyticsv2-application-gluedatacatalogconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-catalogconfiguration-gluedatacatalogconfiguration */
    "GlueDataCatalogConfiguration"?: GlueDataCatalogConfiguration;
}

/**
 * The information required to specify a Maven reference. You can use Maven references to specify dependency JAR files.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface MavenReference {
    /**
     * - The artifact ID of the Maven reference.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_.-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-mavenreference-artifactid */
    "ArtifactId": string | Intrinsic;
    /**
     * - The group ID of the Maven reference.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_.-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-mavenreference-groupid */
    "GroupId": string | Intrinsic;
    /**
     * - The version of the Maven reference.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_.-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-mavenreference-version */
    "Version": string | Intrinsic;
}

/**
 * The configuration of connectors and user-defined functions.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface CustomArtifactConfiguration {
    /**
     * - Set this to either `UDF` or `DEPENDENCY_JAR`. `UDF` stands for user-defined functions. This type of artifact must be in an S3 bucket. A `DEPENDENCY_JAR` can be in either Maven or an S3 bucket.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `DEPENDENCY_JAR | UDF`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-customartifactconfiguration-artifacttype */
    "ArtifactType": string | Intrinsic;
    /**
     * - The parameters required to fully specify a Maven reference.
     * - _Required_: No
     * - _Type_: [MavenReference](./aws-properties-kinesisanalyticsv2-application-mavenreference.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-customartifactconfiguration-mavenreference */
    "MavenReference"?: MavenReference;
    /**
     * - The location of the custom artifacts.
     * - _Required_: No
     * - _Type_: [S3ContentLocation](./aws-properties-kinesisanalyticsv2-application-s3contentlocation.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-customartifactconfiguration-s3contentlocation */
    "S3ContentLocation"?: S3ContentLocation;
}

/**
 * The base location of the Amazon Data Analytics application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface S3ContentBaseLocation {
    /**
     * - The base path for the S3 bucket.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9/!-_.*'()]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-s3contentbaselocation-basepath */
    "BasePath"?: string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the S3 bucket.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:.*$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-s3contentbaselocation-bucketarn */
    "BucketARN": string | Intrinsic;
}

/**
 * The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface DeployAsApplicationConfiguration {
    /**
     * - The description of an Amazon S3 object that contains the Amazon Data Analytics application, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.
     * - _Required_: Yes
     * - _Type_: [S3ContentBaseLocation](./aws-properties-kinesisanalyticsv2-application-s3contentbaselocation.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-deployasapplicationconfiguration-s3contentlocation */
    "S3ContentLocation": S3ContentBaseLocation;
}

/**
 * The configuration of a Kinesis Data Analytics Studio notebook.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface ZeppelinApplicationConfiguration {
    /**
     * - The Amazon Glue Data Catalog that you use in queries in a Kinesis Data Analytics Studio notebook.
     * - _Required_: No
     * - _Type_: [CatalogConfiguration](./aws-properties-kinesisanalyticsv2-application-catalogconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-catalogconfiguration */
    "CatalogConfiguration"?: CatalogConfiguration;
    /**
     * - A list of `CustomArtifactConfiguration` objects.
     * - _Required_: No
     * - _Type_: Array of [CustomArtifactConfiguration](./aws-properties-kinesisanalyticsv2-application-customartifactconfiguration.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-customartifactsconfiguration */
    "CustomArtifactsConfiguration"?: CustomArtifactConfiguration[];
    /**
     * - The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.
     * - _Required_: No
     * - _Type_: [DeployAsApplicationConfiguration](./aws-properties-kinesisanalyticsv2-application-deployasapplicationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-deployasapplicationconfiguration */
    "DeployAsApplicationConfiguration"?: DeployAsApplicationConfiguration;
    /**
     * - The monitoring configuration of a Kinesis Data Analytics Studio notebook.
     * - _Required_: No
     * - _Type_: [ZeppelinMonitoringConfiguration](./aws-properties-kinesisanalyticsv2-application-zeppelinmonitoringconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-monitoringconfiguration */
    "MonitoringConfiguration"?: ZeppelinMonitoringConfiguration;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.
 * Also used to describe the format of the reference data source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface RecordColumn {
    /**
     * - A reference to the data element in the streaming input or the reference data source.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `65535`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-recordcolumn-mapping */
    "Mapping"?: string | Intrinsic;
    /**
     * - The name of the column that is created in the in-application input stream or reference table.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[^-\s<>&]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-recordcolumn-name */
    "Name": string | Intrinsic;
    /**
     * - The type of column created in the in-application input stream or reference table.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-recordcolumn-sqltype */
    "SqlType": string | Intrinsic;
}

/**
 * An object that contains the Amazon Resource Name (ARN) of the Amazon Lambda function that is used to preprocess records in the stream in a SQL-based Kinesis Data Analytics application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface InputLambdaProcessor {
    /**
     * - The ARN of the Amazon Lambda function that operates on records in the stream.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:.*$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-inputlambdaprocessor-resourcearn */
    "ResourceARN": string | Intrinsic;
}

/**
 * For an SQL-based Amazon Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is [Amazon Lambda](https://docs.aws.amazon.com/lambda/).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface InputProcessingConfiguration {
    /**
     * - The [InputLambdaProcessor](https://docs.aws.amazon.com/managed-flink/latest/apiv2/API_InputLambdaProcessor.html) that is used to preprocess the records in the stream before being processed by your application code.
     * - _Required_: No
     * - _Type_: [InputLambdaProcessor](./aws-properties-kinesisanalyticsv2-application-inputlambdaprocessor.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-inputprocessingconfiguration-inputlambdaprocessor */
    "InputLambdaProcessor"?: InputLambdaProcessor;
}

/**
 * For a SQL-based Kinesis Data Analytics application, provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the _'\\n'_ as the row delimiter and a comma (",") as the column delimiter:
 * `"name1", "address1"`
 * `"name2", "address2"`
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface CSVMappingParameters {
    /**
     * - The column delimiter. For example, in a CSV format, a comma (",") is the typical column delimiter.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-csvmappingparameters-recordcolumndelimiter */
    "RecordColumnDelimiter": string | Intrinsic;
    /**
     * - The row delimiter. For example, in a CSV format, _'\\n'_ is the typical row delimiter.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-csvmappingparameters-recordrowdelimiter */
    "RecordRowDelimiter": string | Intrinsic;
}

/**
 * For a SQL-based Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface JSONMappingParameters {
    /**
     * - The path to the top-level parent that contains the records.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?=^\$)(?=^\S+$).*$`
     * - _Minimum_: `1`
     * - _Maximum_: `65535`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-jsonmappingparameters-recordrowpath */
    "RecordRowPath": string | Intrinsic;
}

/**
 * When you configure a SQL-based Kinesis Data Analytics application's input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface MappingParameters {
    /**
     * - Provides additional mapping information when the record format uses delimiters (for example, CSV).
     * - _Required_: No
     * - _Type_: [CSVMappingParameters](./aws-properties-kinesisanalyticsv2-application-csvmappingparameters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-mappingparameters-csvmappingparameters */
    "CSVMappingParameters"?: CSVMappingParameters;
    /**
     * - Provides additional mapping information when JSON is the record format on the streaming source.
     * - _Required_: No
     * - _Type_: [JSONMappingParameters](./aws-properties-kinesisanalyticsv2-application-jsonmappingparameters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-mappingparameters-jsonmappingparameters */
    "JSONMappingParameters"?: JSONMappingParameters;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface RecordFormat {
    /**
     * - When you configure application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
     * - _Required_: No
     * - _Type_: [MappingParameters](./aws-properties-kinesisanalyticsv2-application-mappingparameters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-recordformat-mappingparameters */
    "MappingParameters"?: MappingParameters;
    /**
     * - The type of record format.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `CSV | JSON`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-recordformat-recordformattype */
    "RecordFormatType": string | Intrinsic;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface InputSchema {
    /**
     * - A list of `RecordColumn` objects.
     * - _Required_: Yes
     * - _Type_: Array of [RecordColumn](./aws-properties-kinesisanalyticsv2-application-recordcolumn.html)
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-inputschema-recordcolumns */
    "RecordColumns": RecordColumn[];
    /**
     * - Specifies the encoding of the records in the streaming source. For example, UTF-8.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `UTF-8`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-inputschema-recordencoding */
    "RecordEncoding"?: string | Intrinsic;
    /**
     * - Specifies the format of the records on the streaming source.
     * - _Required_: Yes
     * - _Type_: [RecordFormat](./aws-properties-kinesisanalyticsv2-application-recordformat.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-inputschema-recordformat */
    "RecordFormat": RecordFormat;
}

/**
 * When you configure the application input for a SQL-based Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface Input {
    /**
     * - Describes the number of in-application streams to create.
     * - _Required_: No
     * - _Type_: [InputParallelism](./aws-properties-kinesisanalyticsv2-application-inputparallelism.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-input-inputparallelism */
    "InputParallelism"?: InputParallelism;
    /**
     * - The [InputProcessingConfiguration](https://docs.aws.amazon.com/managed-flink/latest/apiv2/API_InputProcessingConfiguration.html) for the input. An input processor transforms records as they are received from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is [InputLambdaProcessor](https://docs.aws.amazon.com/managed-flink/latest/apiv2/API_InputLambdaProcessor.html).
     * - _Required_: No
     * - _Type_: [InputProcessingConfiguration](./aws-properties-kinesisanalyticsv2-application-inputprocessingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-input-inputprocessingconfiguration */
    "InputProcessingConfiguration"?: InputProcessingConfiguration;
    /**
     * - Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.
     * - Also used to describe the format of the reference data source.
     * - _Required_: Yes
     * - _Type_: [InputSchema](./aws-properties-kinesisanalyticsv2-application-inputschema.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-input-inputschema */
    "InputSchema": InputSchema;
    /**
     * - If the streaming source is an Amazon Kinesis Data Firehose delivery stream, identifies the delivery stream's ARN.
     * - _Required_: No
     * - _Type_: [KinesisFirehoseInput](./aws-properties-kinesisanalyticsv2-application-kinesisfirehoseinput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-input-kinesisfirehoseinput */
    "KinesisFirehoseInput"?: KinesisFirehoseInput;
    /**
     * - If the streaming source is an Amazon Kinesis data stream, identifies the stream's Amazon Resource Name (ARN).
     * - _Required_: No
     * - _Type_: [KinesisStreamsInput](./aws-properties-kinesisanalyticsv2-application-kinesisstreamsinput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-input-kinesisstreamsinput */
    "KinesisStreamsInput"?: KinesisStreamsInput;
    /**
     * - The name prefix to use when creating an in-application stream. Suppose that you specify a prefix "`MyInApplicationStream`." Kinesis Data Analytics then creates one or more (as per the `InputParallelism` count you specified) in-application streams with the names "`MyInApplicationStream_001`," "`MyInApplicationStream_002`," and so on.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[^-\s<>&]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `32`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-input-nameprefix */
    "NamePrefix": string | Intrinsic;
}

/**
 * Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface SqlApplicationConfiguration {
    /**
     * - The array of [Input](https://docs.aws.amazon.com/managed-flink/latest/apiv2/API_Input.html) objects describing the input streams used by the application.
     * - _Required_: No
     * - _Type_: Array of [Input](./aws-properties-kinesisanalyticsv2-application-input.html)
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-sqlapplicationconfiguration-inputs */
    "Inputs"?: Input[];
}

/**
 * Specifies the creation parameters for a Managed Service for Apache Flink application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface ApplicationConfiguration {
    /**
     * - The code location and type parameters for a Managed Service for Apache Flink application.
     * - _Required_: Conditional
     * - _Type_: [ApplicationCodeConfiguration](./aws-properties-kinesisanalyticsv2-application-applicationcodeconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationconfiguration-applicationcodeconfiguration */
    "ApplicationCodeConfiguration"?: ApplicationCodeConfiguration;
    /**
     * - Describes whether snapshots are enabled for a Managed Service for Apache Flink application.
     * - _Required_: No
     * - _Type_: [ApplicationSnapshotConfiguration](./aws-properties-kinesisanalyticsv2-application-applicationsnapshotconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationconfiguration-applicationsnapshotconfiguration */
    "ApplicationSnapshotConfiguration"?: ApplicationSnapshotConfiguration;
    /**
     * - Describes whether system rollbacks are enabled for a Managed Service for Apache Flink application.
     * - _Required_: No
     * - _Type_: [ApplicationSystemRollbackConfiguration](./aws-properties-kinesisanalyticsv2-application-applicationsystemrollbackconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationconfiguration-applicationsystemrollbackconfiguration */
    "ApplicationSystemRollbackConfiguration"?: ApplicationSystemRollbackConfiguration;
    /**
     * - Describes execution properties for a Managed Service for Apache Flink application.
     * - _Required_: No
     * - _Type_: [EnvironmentProperties](./aws-properties-kinesisanalyticsv2-application-environmentproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationconfiguration-environmentproperties */
    "EnvironmentProperties"?: EnvironmentProperties;
    /**
     * - The creation and update parameters for a Managed Service for Apache Flink application.
     * - _Required_: No
     * - _Type_: [FlinkApplicationConfiguration](./aws-properties-kinesisanalyticsv2-application-flinkapplicationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationconfiguration-flinkapplicationconfiguration */
    "FlinkApplicationConfiguration"?: FlinkApplicationConfiguration;
    /**
     * - The creation and update parameters for a SQL-based Kinesis Data Analytics application.
     * - _Required_: No
     * - _Type_: [SqlApplicationConfiguration](./aws-properties-kinesisanalyticsv2-application-sqlapplicationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationconfiguration-sqlapplicationconfiguration */
    "SqlApplicationConfiguration"?: SqlApplicationConfiguration;
    /**
     * - The array of descriptions of VPC configurations available to the application.
     * - _Required_: No
     * - _Type_: Array of [VpcConfiguration](./aws-properties-kinesisanalyticsv2-application-vpcconfiguration.html)
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationconfiguration-vpcconfigurations */
    "VpcConfigurations"?: VpcConfiguration[];
    /**
     * - The configuration parameters for a Kinesis Data Analytics Studio notebook.
     * - _Required_: No
     * - _Type_: [ZeppelinApplicationConfiguration](./aws-properties-kinesisanalyticsv2-application-zeppelinapplicationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationconfiguration-zeppelinapplicationconfiguration */
    "ZeppelinApplicationConfiguration"?: ZeppelinApplicationConfiguration;
}

/**
 * Creates an Amazon Kinesis Data Analytics application. For information about creating a Kinesis Data Analytics application, see [Creating an Application](https://docs.aws.amazon.com/managed-flink/latest/java/getting-started.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html */

export interface KinesisAnalyticsV2Application extends ResourceAttributes {
    "Type": "AWS::KinesisAnalyticsV2::Application";
    "Properties": {
        /**
         * - Use this parameter to configure the application.
         * - _Required_: No
         * - _Type_: [ApplicationConfiguration](./aws-properties-kinesisanalyticsv2-application-applicationconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationconfiguration */
        "ApplicationConfiguration"?: ApplicationConfiguration;
        /**
         * - The description of the application.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `0`
         * - _Maximum_: `1024`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationdescription */
        "ApplicationDescription"?: string | Intrinsic;
        /**
         * - Specifies the maintenance window parameters for a Kinesis Data Analytics application.
         * - _Required_: No
         * - _Type_: [ApplicationMaintenanceConfiguration](./aws-properties-kinesisanalyticsv2-application-applicationmaintenanceconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationmaintenanceconfiguration */
        "ApplicationMaintenanceConfiguration"?: ApplicationMaintenanceConfiguration;
        /**
         * - To create a Kinesis Data Analytics Studio notebook, you must set the mode to `INTERACTIVE`. However, for a Kinesis Data Analytics for Apache Flink application, the mode is optional.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `INTERACTIVE | STREAMING`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationmode */
        "ApplicationMode"?: string | Intrinsic;
        /**
         * - The name of the application.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_.-]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationname */
        "ApplicationName"?: string | Intrinsic;
        /**
         * - Describes the starting parameters for an Managed Service for Apache Flink application.
         * - _Required_: No
         * - _Type_: [RunConfiguration](./aws-properties-kinesisanalyticsv2-application-runconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-runconfiguration */
        "RunConfiguration"?: RunConfiguration;
        /**
         * - The runtime environment for the application.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `SQL-1_0 | FLINK-1_6 | FLINK-1_8 | ZEPPELIN-FLINK-1_0 | FLINK-1_11 | FLINK-1_13 | ZEPPELIN-FLINK-2_0 | FLINK-1_15 | ZEPPELIN-FLINK-3_0 | FLINK-1_18 | FLINK-1_19 | FLINK-1_20`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-runtimeenvironment */
        "RuntimeEnvironment": string | Intrinsic;
        /**
         * - Specifies the IAM role that the application uses to access external resources.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:.*$`
         * - _Minimum_: `1`
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-serviceexecutionrole */
        "ServiceExecutionRole": string | Intrinsic;
        /**
         * - A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-kinesisanalyticsv2-application-tag.html)
         * - _Minimum_: `1`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-tags */
        "Tags"?: Tag[];
    };
}