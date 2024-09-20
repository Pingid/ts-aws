import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies code executed when a job is run.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html */

export interface JobCommand {
  /**
   * - The name of the job command. For an Apache Spark ETL job, this must be `glueetl`. For a Python shell job, it must be `pythonshell`. For an Apache Spark streaming ETL job, this must be `gluestreaming`. For a Ray job, this must be `glueray`.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-jobcommand-name */
  Name?: string | Intrinsic
  /**
   * - The Python version being used to execute a Python shell job. Allowed values are 3 or 3.9. Version 2 is deprecated.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^([2-3]|3[.]9)$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-jobcommand-pythonversion */
  PythonVersion?: string | Intrinsic
  /**
   * - In Ray jobs, Runtime is used to specify the versions of Ray, Python and additional libraries available in your environment. This field is not used in other job types. For supported runtime environment values, see [Working with Ray jobs](https://docs.aws.amazon.com/glue/latest/dg/ray-jobs-section.html) in the AWS Glue Developer Guide.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-jobcommand-runtime */
  Runtime?: string | Intrinsic
  /**
   * - Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a job (required).
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `400000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-jobcommand-scriptlocation */
  ScriptLocation?: string | Intrinsic
}

/**
 * Specifies the connections used by a job.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html */

export interface ConnectionsList {
  /**
   * - A list of connections used by the job.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-connectionslist-connections */
  Connections?: (string | Intrinsic)[]
}

/**
 * An execution property of a job.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html */

export interface ExecutionProperty {
  /**
   * - The maximum number of concurrent runs allowed for the job. The default is 1. An error is returned when this threshold is reached. The maximum value you can specify is controlled by a service limit.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-executionproperty-maxconcurrentruns */
  MaxConcurrentRuns?: number | Intrinsic
}

/**
 * Specifies configuration properties of a notification.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html */

export interface NotificationProperty {
  /**
   * - After a job run starts, the number of minutes to wait before sending a job run delay notification.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-notificationproperty-notifydelayafter */
  NotifyDelayAfter?: number | Intrinsic
}

/**
 * You can use the Resource Tags property to apply tags to resources, which can help you identify and categorize those resources. You can tag only resources for which AWS CloudFormation supports tagging. For information about which resources you can tag with CloudFormation, see the individual resources in [AWS resource and property types reference](./aws-template-resource-type-ref.html).
 * ###### Note
 *
 * Tagging implementations might vary by resource. For example, `AWS::AutoScaling::AutoScalingGroup` provides an additional, required `PropagateAtLaunch` property as part of its tagging scheme.
 * In addition to any tags you define, CloudFormation automatically creates the following stack-level tags with the prefix `aws:`:
 * *   `` aws:cloudformation:`logical-id` ``
 *
 * *   `` aws:cloudformation:`stack-id` ``
 *
 * *   `` aws:cloudformation:`stack-name` ``
 * The `aws:` prefix is reserved for AWS use. This prefix is case-insensitive. If you use this prefix in the `Key` or `Value` property, you can't update or delete the tag. Tags with this prefix don't count toward the number of tags per resource.
 * Propagation of stack-level tags to resources, including automatically created tags, can vary by resource. For example, tags aren't propagated to Amazon EBS volumes that are created from block device mappings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html */

export interface Tag {
  /**
   * - The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with `aws:`. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `:`, `/`, `=`, `+`, `@`, `-`, and `"`.
   * - _Required_: Yes
   * - _Type_: String
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-resource-tags-key */
  Key: string | Intrinsic
  /**
   * - The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
   * - _Required_: Yes
   * - _Type_: String
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-resource-tags-value */
  Value: string | Intrinsic
}

/**
 * The `AWS::Glue::Job` resource specifies an AWS Glue job in the data catalog. For more information, see [Adding Jobs in AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) and [Job Structure](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-Job) in the _AWS Glue Developer Guide._
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html */

export interface GlueJob extends ResourceAttributes {
  Type: 'AWS::Glue::Job'
  Properties: {
    /**
     * - This parameter is no longer supported. Use `MaxCapacity` instead.
     * - The number of capacity units that are allocated to this job.
     * - _Required_: No
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-allocatedcapacity */
    AllocatedCapacity?: number | Intrinsic
    /**
     * - The code that executes a job.
     * - _Required_: Yes
     * - _Type_: [JobCommand](./aws-properties-glue-job-jobcommand.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-command */
    Command: JobCommand
    /**
     * - The connections used for this job.
     * - _Required_: No
     * - _Type_: [ConnectionsList](./aws-properties-glue-job-connectionslist.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-connections */
    Connections?: ConnectionsList
    /**
     * - The default arguments for this job, specified as name-value pairs.
     * - You can specify arguments here that your own job-execution script consumes, in addition to arguments that AWS Glue itself consumes.
     * - For information about how to specify and consume your own job arguments, see [Calling AWS Glue APIs in Python](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html) in the _AWS Glue Developer Guide_.
     * - For information about the key-value pairs that AWS Glue consumes to set up your job, see [Special Parameters Used by AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html) in the _AWS Glue Developer Guide_.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-defaultarguments */
    DefaultArguments?: any | Intrinsic
    /**
     * - A description of the job.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`
     * - _Minimum_: `0`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-description */
    Description?: string | Intrinsic
    /**
     * - Indicates whether the job is run with a standard or flexible execution class. The standard execution class is ideal for time-sensitive workloads that require fast job startup and dedicated resources.
     * - The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary.
     * - Only jobs with AWS Glue version 3.0 and above and command type `glueetl` will be allowed to set `ExecutionClass` to `FLEX`. The flexible execution class is available for Spark jobs.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-executionclass */
    ExecutionClass?: string | Intrinsic
    /**
     * - The maximum number of concurrent runs that are allowed for this job.
     * - _Required_: No
     * - _Type_: [ExecutionProperty](./aws-properties-glue-job-executionproperty.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-executionproperty */
    ExecutionProperty?: ExecutionProperty
    /**
     * - Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for jobs of type Spark.
     * - For more information about the available AWS Glue versions and corresponding Spark and Python versions, see [Glue version](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) in the developer guide.
     * - Jobs that are created without specifying a Glue version default to the latest Glue version available.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\w+\.\w+$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-glueversion */
    GlueVersion?: string | Intrinsic
    /**
     * - A mode that describes how a job was created. Valid values are:
     * - When the `JobMode` field is missing or null, `SCRIPT` is assigned as the default value.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `SCRIPT | VISUAL | NOTEBOOK`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-jobmode */
    JobMode?: string | Intrinsic
    /**
     * - This field is reserved for future use.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-loguri */
    LogUri?: string | Intrinsic
    /**
     * - This field specifies a day of the week and hour for a maintenance window for streaming jobs. AWS Glue periodically performs maintenance activities. During these maintenance windows, AWS Glue will need to restart your streaming jobs.
     * - AWS Glue will restart the job within 3 hours of the specified maintenance window. For instance, if you set up the maintenance window for Monday at 10:00AM GMT, your jobs will be restarted between 10:00AM GMT to 1:00PM GMT.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(Sun|Mon|Tue|Wed|Thu|Fri|Sat):([01]?[0-9]|2[0-3])$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-maintenancewindow */
    MaintenanceWindow?: string | Intrinsic
    /**
     * - The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
     * - Do not set `Max Capacity` if using `WorkerType` and `NumberOfWorkers`.
     * - The value that can be allocated for `MaxCapacity` depends on whether you are running a Python shell job or an Apache Spark ETL job:
     * - _Required_: No
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-maxcapacity */
    MaxCapacity?: number | Intrinsic
    /**
     * - The maximum number of times to retry this job after a JobRun fails.
     * - _Required_: No
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-maxretries */
    MaxRetries?: number | Intrinsic
    /**
     * - The name you assign to this job definition.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t]*`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-name */
    Name?: string | Intrinsic
    /**
     * - Non-overridable arguments for this job, specified as name-value pairs.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-nonoverridablearguments */
    NonOverridableArguments?: any | Intrinsic
    /**
     * - Specifies configuration properties of a notification.
     * - _Required_: No
     * - _Type_: [NotificationProperty](./aws-properties-glue-job-notificationproperty.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-notificationproperty */
    NotificationProperty?: NotificationProperty
    /**
     * - The number of workers of a defined `workerType` that are allocated when a job runs.
     * - The maximum number of workers you can define are 299 for `G.1X`, and 149 for `G.2X`.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-numberofworkers */
    NumberOfWorkers?: number | Intrinsic
    /**
     * - The name or Amazon Resource Name (ARN) of the IAM role associated with this job.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-role */
    Role: string | Intrinsic
    /**
     * - The name of the `SecurityConfiguration` structure to be used with this job.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t]*`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-securityconfiguration */
    SecurityConfiguration?: string | Intrinsic
    /**
     * - The tags to use with this job.
     * - _Required_: No
     * - _Type_: Array of [`Tag`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-tags */
    Tags?: Tag[]
    /**
     * - The job timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours).
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-timeout */
    Timeout?: number | Intrinsic
    /**
     * - The type of predefined worker that is allocated when a job runs. Accepts a value of G.1X, G.2X, G.4X, G.8X or G.025X for Spark jobs. Accepts the value Z.2X for Ray jobs.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Standard | G.1X | G.2X | G.025X | G.4X | G.8X | Z.2X`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html#cfn-glue-job-workertype */
    WorkerType?: string | Intrinsic
  }
}
