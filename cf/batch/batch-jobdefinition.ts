import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * An object that represents a job timeout configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface JobTimeout {
    /**
     * - The job timeout time (in seconds) that's measured from the job attempt's `startedAt` timestamp. After this time passes, AWS Batch terminates your jobs if they aren't finished. The minimum value for the timeout is 60 seconds.
     * - For array jobs, the timeout applies to the child jobs, not to the parent array job.
     * - For multi-node parallel (MNP) jobs, the timeout applies to the whole job, not to the individual nodes.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-jobtimeout-attemptdurationseconds */
    "AttemptDurationSeconds"?: number | Intrinsic;
}

/**
 * The platform configuration for jobs that are running on Fargate resources. Jobs that run on Amazon EC2 resources must not specify this parameter.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface FargatePlatformConfiguration {
    /**
     * - The AWS Fargate platform version where the jobs are running. A platform version is specified only for jobs that are running on Fargate resources. If one isn't specified, the `LATEST` platform version is used by default. This uses a recent, approved version of the AWS Fargate platform for compute resources. For more information, see [AWS Fargate platform versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the _Amazon Elastic Container Service Developer Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-fargateplatformconfiguration-platformversion */
    "PlatformVersion"?: string | Intrinsic;
}

/**
 * Specifies an array of up to 5 conditions to be met, and an action to take (`RETRY` or `EXIT`) if all conditions are met. If none of the `EvaluateOnExit` conditions in a `RetryStrategy` match, then the job is retried.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface EvaluateOnExit {
    /**
     * - Specifies the action to take if all of the specified conditions (`onStatusReason`, `onReason`, and `onExitCode`) are met. The values aren't case sensitive.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `RETRY | EXIT`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-evaluateonexit-action */
    "Action": string | Intrinsic;
    /**
     * - Contains a glob pattern to match against the decimal representation of the `ExitCode` returned for a job. The pattern can be up to 512 characters long. It can contain only numbers, and can end with an asterisk (\*) so that only the start of the string needs to be an exact match.
     * - The string can contain up to 512 characters.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-evaluateonexit-onexitcode */
    "OnExitCode"?: string | Intrinsic;
    /**
     * - Contains a glob pattern to match against the `Reason` returned for a job. The pattern can contain up to 512 characters. It can contain letters, numbers, periods (.), colons (:), and white space (including spaces and tabs). It can optionally end with an asterisk (\*) so that only the start of the string needs to be an exact match.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-evaluateonexit-onreason */
    "OnReason"?: string | Intrinsic;
    /**
     * - Contains a glob pattern to match against the `StatusReason` returned for a job. The pattern can contain up to 512 characters. It can contain letters, numbers, periods (.), colons (:), and white spaces (including spaces or tabs). It can optionally end with an asterisk (\*) so that only the start of the string needs to be an exact match.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-evaluateonexit-onstatusreason */
    "OnStatusReason"?: string | Intrinsic;
}

/**
 * The retry strategy that's associated with a job. For more information, see [Automated job retries](https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html) in the _AWS Batch User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface RetryStrategy {
    /**
     * - The number of times to move a job to the `RUNNABLE` status. You can specify between 1 and 10 attempts. If the value of `attempts` is greater than one, the job is retried on failure the same number of attempts as the value.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-retrystrategy-attempts */
    "Attempts"?: number | Intrinsic;
    /**
     * - Array of up to 5 objects that specify the conditions where jobs are retried or failed. If this parameter is specified, then the `attempts` parameter must also be specified. If none of the listed conditions match, then the job is retried.
     * - _Required_: No
     * - _Type_: [Array](./aws-properties-batch-jobdefinition-evaluateonexit.html) of [EvaluateOnExit](./aws-properties-batch-jobdefinition-evaluateonexit.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-retrystrategy-evaluateonexit */
    "EvaluateOnExit"?: EvaluateOnExit[];
}

/**
 * Information about a consumable resource required to run a job.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface ConsumableResourceRequirement {
    /**
     * - The name or ARN of the consumable resource.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-consumableresourcerequirement-consumableresource */
    "ConsumableResource": string | Intrinsic;
    /**
     * - The quantity of the consumable resource that is needed.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-consumableresourcerequirement-quantity */
    "Quantity": number | Intrinsic;
}

/**
 * Contains a list of consumable resources required by a job.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface ConsumableResourceProperties {
    /**
     * - The list of consumable resources required by a job.
     * - _Required_: Yes
     * - _Type_: Array of [ConsumableResourceRequirement](./aws-properties-batch-jobdefinition-consumableresourcerequirement.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-consumableresourceproperties-consumableresourcelist */
    "ConsumableResourceList": ConsumableResourceRequirement[];
}

/**
 * The Environment property type specifies environment variables to use in a job definition.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface Environment {
    /**
     * - The name of the environment variable.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-environment-name */
    "Name"?: string | Intrinsic;
    /**
     * - The value of the environment variable.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-environment-value */
    "Value"?: string | Intrinsic;
}

/**
 * Details for a Docker volume mount point that's used in a job's container properties. This parameter maps to `Volumes` in the [Create a container](https://docs.docker.com/engine/api/v1.43/#tag/Container/operation/ContainerCreate) section of the _Docker Remote API_ and the `--volume` option to docker run.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface MountPoint {
    /**
     * - The path on the container where the host volume is mounted.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-mountpoint-containerpath */
    "ContainerPath"?: string | Intrinsic;
    /**
     * - If this value is `true`, the container has read-only access to the volume. Otherwise, the container can write to the volume. The default value is `false`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-mountpoint-readonly */
    "ReadOnly"?: boolean | Intrinsic;
    /**
     * - The name of the volume to mount.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-mountpoint-sourcevolume */
    "SourceVolume"?: string | Intrinsic;
}

/**
 * The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on AWS Fargate.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface EphemeralStorage {
    /**
     * - The total amount, in GiB, of ephemeral storage to set for the task. The minimum supported value is `21` GiB and the maximum supported value is `200` GiB.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ephemeralstorage-sizeingib */
    "SizeInGiB": number | Intrinsic;
}

/**
 * The type and amount of a resource to assign to a container. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface ResourceRequirement {
    /**
     * - The type of resource to assign to a container. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `GPU | VCPU | MEMORY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-resourcerequirement-type */
    "Type"?: string | Intrinsic;
    /**
     * - The quantity of the specified resource to reserve for the container. The values vary based on the `type` specified.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-resourcerequirement-value */
    "Value"?: string | Intrinsic;
}

/**
 * An object that represents the secret to expose to your container. Secrets can be exposed to a container in the following ways:
 * *   To inject sensitive data into your containers as environment variables, use the `secrets` container definition parameter.
 *     
 * *   To reference sensitive information in the log configuration of a container, use the `secretOptions` container definition parameter.
 * For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html) in the _AWS Batch User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface Secret {
    /**
     * - The name of the secret.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-secret-name */
    "Name": string | Intrinsic;
    /**
     * - The secret to expose to the container. The supported values are either the full Amazon Resource Name (ARN) of the AWS Secrets Manager secret or the full ARN of the parameter in the AWS Systems Manager Parameter Store.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-secret-valuefrom */
    "ValueFrom": string | Intrinsic;
}

/**
 * Log configuration options to send to a custom log driver for the container.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface LogConfiguration {
    /**
     * - The log driver to use for the container. The valid values that are listed for this parameter are log drivers that the Amazon ECS container agent can communicate with by default.
     * - The supported log drivers are `awslogs`, `fluentd`, `gelf`, `json-file`, `journald`, `logentries`, `syslog`, and `splunk`.
     * - This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version | grep "Server API version"`
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `json-file | syslog | journald | gelf | fluentd | awslogs | splunk | awsfirelens`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-logconfiguration-logdriver */
    "LogDriver": string | Intrinsic;
    /**
     * - The configuration options to send to the log driver. This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version | grep "Server API version"`
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-logconfiguration-options */
    "Options"?: Record<string, string | Intrinsic>;
    /**
     * - The secrets to pass to the log configuration. For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html) in the _AWS Batch User Guide_.
     * - _Required_: No
     * - _Type_: Array of [Secret](./aws-properties-batch-jobdefinition-secret.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-logconfiguration-secretoptions */
    "SecretOptions"?: Secret[];
}

/**
 * The repository credentials for private registry authentication.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface RepositoryCredentials {
    /**
     * - The Amazon Resource Name (ARN) of the secret containing the private repository credentials.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-repositorycredentials-credentialsparameter */
    "CredentialsParameter": string | Intrinsic;
}

/**
 * The network configuration for jobs that are running on Fargate resources. Jobs that are running on Amazon EC2 resources must not specify this parameter.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface NetworkConfiguration {
    /**
     * - Indicates whether the job has a public IP address. For a job that's running on Fargate resources in a private subnet to send outbound traffic to the internet (for example, to pull container images), the private subnet requires a NAT gateway be attached to route requests to the internet. For more information, see [Amazon ECS task networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html) in the _Amazon Elastic Container Service Developer Guide_. The default value is "`DISABLED`".
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-networkconfiguration-assignpublicip */
    "AssignPublicIp"?: string | Intrinsic;
}

/**
 * An object that represents the compute environment architecture for AWS Batch jobs on Fargate.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface RuntimePlatform {
    /**
     * - The vCPU architecture. The default value is `X86_64`. Valid values are `X86_64` and `ARM64`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-runtimeplatform-cpuarchitecture */
    "CpuArchitecture"?: string | Intrinsic;
    /**
     * - The operating system for the compute environment. Valid values are: `LINUX` (default), `WINDOWS_SERVER_2019_CORE`, `WINDOWS_SERVER_2019_FULL`, `WINDOWS_SERVER_2022_CORE`, and `WINDOWS_SERVER_2022_FULL`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-runtimeplatform-operatingsystemfamily */
    "OperatingSystemFamily"?: string | Intrinsic;
}

/**
 * The `ulimit` settings to pass to the container. For more information, see [Ulimit](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_Ulimit.html).
 * ###### Note
 * 
 * This object isn't applicable to jobs that are running on Fargate resources.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface Ulimit {
    /**
     * - The hard limit for the `ulimit` type.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ulimit-hardlimit */
    "HardLimit": number | Intrinsic;
    /**
     * - The `type` of the `ulimit`. Valid values are: `core` | `cpu` | `data` | `fsize` | `locks` | `memlock` | `msgqueue` | `nice` | `nofile` | `nproc` | `rss` | `rtprio` | `rttime` | `sigpending` | `stack`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ulimit-name */
    "Name": string | Intrinsic;
    /**
     * - The soft limit for the `ulimit` type.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ulimit-softlimit */
    "SoftLimit": number | Intrinsic;
}

/**
 * An object that represents a container instance host device.
 * ###### Note
 * 
 * This object isn't applicable to jobs that are running on Fargate resources and shouldn't be provided.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface Device {
    /**
     * - The path inside the container that's used to expose the host device. By default, the `hostPath` value is used.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-device-containerpath */
    "ContainerPath"?: string | Intrinsic;
    /**
     * - The path for the device on the host container instance.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-device-hostpath */
    "HostPath"?: string | Intrinsic;
    /**
     * - The explicit permissions to provide to the container for the device. By default, the container has permissions for `read`, `write`, and `mknod` for the device.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-device-permissions */
    "Permissions"?: (string | Intrinsic)[];
}

/**
 * The container path, mount options, and size of the `tmpfs` mount.
 * ###### Note
 * 
 * This object isn't applicable to jobs that are running on Fargate resources.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface Tmpfs {
    /**
     * - The absolute file path in the container where the `tmpfs` volume is mounted.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-tmpfs-containerpath */
    "ContainerPath": string | Intrinsic;
    /**
     * - The list of `tmpfs` volume mount options.
     * - Valid values: "`defaults`" | "`ro`" | "`rw`" | "`suid`" | "`nosuid`" | "`dev`" | "`nodev`" | "`exec`" | "`noexec`" | "`sync`" | "`async`" | "`dirsync`" | "`remount`" | "`mand`" | "`nomand`" | "`atime`" | "`noatime`" | "`diratime`" | "`nodiratime`" | "`bind`" | "`rbind" | "unbindable" | "runbindable" | "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave" | "relatime`" | "`norelatime`" | "`strictatime`" | "`nostrictatime`" | "`mode`" | "`uid`" | "`gid`" | "`nr_inodes`" | "`nr_blocks`" | "`mpol`"
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-tmpfs-mountoptions */
    "MountOptions"?: (string | Intrinsic)[];
    /**
     * - The size (in MiB) of the `tmpfs` volume.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-tmpfs-size */
    "Size": number | Intrinsic;
}

/**
 * Linux-specific modifications that are applied to the container, such as details for device mappings.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface LinuxParameters {
    /**
     * - Any of the host devices to expose to the container. This parameter maps to `Devices` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--device` option to [docker run](https://docs.docker.com/engine/reference/run/).
     * - _Required_: No
     * - _Type_: Array of [Device](./aws-properties-batch-jobdefinition-device.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-linuxparameters-devices */
    "Devices"?: Device[];
    /**
     * - If true, run an `init` process inside the container that forwards signals and reaps processes. This parameter maps to the `--init` option to [docker run](https://docs.docker.com/engine/reference/run/). This parameter requires version 1.25 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version | grep "Server API version"`
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-linuxparameters-initprocessenabled */
    "InitProcessEnabled"?: boolean | Intrinsic;
    /**
     * - The total amount of swap memory (in MiB) a container can use. This parameter is translated to the `--memory-swap` option to [docker run](https://docs.docker.com/engine/reference/run/) where the value is the sum of the container memory plus the `maxSwap` value. For more information, see [`--memory-swap` details](https://docs.docker.com/config/containers/resource_constraints/#--memory-swap-details) in the Docker documentation.
     * - If a `maxSwap` value of `0` is specified, the container doesn't use swap. Accepted values are `0` or any positive integer. If the `maxSwap` parameter is omitted, the container doesn't use the swap configuration for the container instance on which it runs. A `maxSwap` value must be set for the `swappiness` parameter to be used.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-linuxparameters-maxswap */
    "MaxSwap"?: number | Intrinsic;
    /**
     * - The value for the size (in MiB) of the `/dev/shm` volume. This parameter maps to the `--shm-size` option to [docker run](https://docs.docker.com/engine/reference/run/).
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-linuxparameters-sharedmemorysize */
    "SharedMemorySize"?: number | Intrinsic;
    /**
     * - You can use this parameter to tune a container's memory swappiness behavior. A `swappiness` value of `0` causes swapping to not occur unless absolutely necessary. A `swappiness` value of `100` causes pages to be swapped aggressively. Valid values are whole numbers between `0` and `100`. If the `swappiness` parameter isn't specified, a default value of `60` is used. If a value isn't specified for `maxSwap`, then this parameter is ignored. If `maxSwap` is set to 0, the container doesn't use swap. This parameter maps to the `--memory-swappiness` option to [docker run](https://docs.docker.com/engine/reference/run/).
     * - Consider the following when you use a per-container swap configuration.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-linuxparameters-swappiness */
    "Swappiness"?: number | Intrinsic;
    /**
     * - The container path, mount options, and size (in MiB) of the `tmpfs` mount. This parameter maps to the `--tmpfs` option to [docker run](https://docs.docker.com/engine/reference/run/).
     * - _Required_: No
     * - _Type_: [Array](./aws-properties-batch-jobdefinition-tmpfs.html) of [Tmpfs](./aws-properties-batch-jobdefinition-tmpfs.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-linuxparameters-tmpfs */
    "Tmpfs"?: Tmpfs[];
}

/**
 * References a Kubernetes secret resource. This name of the secret must start and end with an alphanumeric character, is required to be lowercase, can include periods (.) and hyphens (-), and can't contain more than 253 characters.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface ImagePullSecret {
    /**
     * - Provides a unique identifier for the `ImagePullSecret`. This object is required when `EksPodProperties$imagePullSecrets` is used.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-imagepullsecret-name */
    "Name"?: string | Intrinsic;
}

/**
 * Describes and uniquely identifies Kubernetes resources. For example, the compute environment that a pod runs in or the `jobID` for a job running in the pod. For more information, see [Understanding Kubernetes Objects](https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/) in the _Kubernetes documentation_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface EksMetadata {
    /**
     * - Key-value pairs used to attach arbitrary, non-identifying metadata to Kubernetes objects. Valid annotation keys have two segments: an optional prefix and a name, separated by a slash (/).
     * - Annotations can be added or modified at any time. Each resource can have multiple annotations.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-eksmetadata-annotations */
    "Annotations"?: Record<string, string | Intrinsic>;
    /**
     * - Key-value pairs used to identify, sort, and organize cube resources. Can contain up to 63 uppercase letters, lowercase letters, numbers, hyphens (-), and underscores (\_). Labels can be added or modified at any time. Each resource can have multiple labels, but each key must be unique for a given object.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-eksmetadata-labels */
    "Labels"?: Record<string, string | Intrinsic>;
    /**
     * - The namespace of the Amazon EKS cluster. In Kubernetes, namespaces provide a mechanism for isolating groups of resources within a single cluster. Names of resources need to be unique within a namespace, but not across namespaces. AWS Batch places Batch Job pods in this namespace. If this field is provided, the value can't be empty or null. It must meet the following requirements:
     * - For more information, see [Namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/) in the _Kubernetes documentation_. This namespace can be different from the `kubernetesNamespace` set in the compute environment's `EksConfiguration`, but must have identical role-based access control (RBAC) roles as the compute environment's `kubernetesNamespace`. For multi-node parallel jobs, the same value must be provided across all the node ranges.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-eksmetadata-namespace */
    "Namespace"?: string | Intrinsic;
}

/**
 * Container properties are used for Amazon ECS based job definitions. These properties to describe the container that's launched as part of a job.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface MultiNodeContainerProperties {
    /**
     * - The command that's passed to the container. This parameter maps to `Cmd` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `COMMAND` parameter to [docker run](https://docs.docker.com/engine/reference/run/). For more information, see [https://docs.docker.com/engine/reference/builder/#cmd](https://docs.docker.com/engine/reference/builder/#cmd).
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-command */
    "Command"?: (string | Intrinsic)[];
    /**
     * - Determines whether execute command functionality is turned on for this task. If `true`, execute command functionality is turned on all the containers in the task.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-enableexecutecommand */
    "EnableExecuteCommand"?: boolean | Intrinsic;
    /**
     * - The environment variables to pass to a container. This parameter maps to `Env` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--env` option to [docker run](https://docs.docker.com/engine/reference/run/).
     * - _Required_: No
     * - _Type_: [Array](./aws-properties-batch-jobdefinition-environment.html) of [Environment](./aws-properties-batch-jobdefinition-environment.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-environment */
    "Environment"?: Environment[];
    /**
     * - The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on AWS Fargate.
     * - _Required_: No
     * - _Type_: [EphemeralStorage](./aws-properties-batch-jobdefinition-ephemeralstorage.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-ephemeralstorage */
    "EphemeralStorage"?: EphemeralStorage;
    /**
     * - The Amazon Resource Name (ARN) of the execution role that AWS Batch can assume. For jobs that run on Fargate resources, you must provide an execution role. For more information, see [AWS Batch execution IAM role](https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html) in the _AWS Batch User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-executionrolearn */
    "ExecutionRoleArn"?: string | Intrinsic;
    /**
     * - Required. The image used to start a container. This string is passed directly to the Docker daemon. Images in the Docker Hub registry are available by default. Other repositories are specified with `_repository-url_/_image_:_tag_`. It can be 255 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), underscores (\_), colons (:), periods (.), forward slashes (/), and number signs (#). This parameter maps to `Image` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `IMAGE` parameter of [docker run](https://docs.docker.com/engine/reference/run/).
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-image */
    "Image": string | Intrinsic;
    /**
     * - The instance type to use for a multi-node parallel job. All node groups in a multi-node parallel job must use the same instance type.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-instancetype */
    "InstanceType"?: string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the IAM role that the container can assume for AWS permissions. For more information, see [IAM roles for tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) in the _Amazon Elastic Container Service Developer Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-jobrolearn */
    "JobRoleArn"?: string | Intrinsic;
    /**
     * - Linux-specific modifications that are applied to the container, such as details for device mappings.
     * - _Required_: No
     * - _Type_: [LinuxParameters](./aws-properties-batch-jobdefinition-linuxparameters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-linuxparameters */
    "LinuxParameters"?: LinuxParameters;
    /**
     * - The log configuration specification for the container.
     * - This parameter maps to `LogConfig` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--log-driver` option to [docker run](https://docs.docker.com/engine/reference/run/). By default, containers use the same logging driver that the Docker daemon uses. However the container might use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information on the options for different supported log drivers, see [Configure logging drivers](https://docs.docker.com/engine/admin/logging/overview/) in the Docker documentation.
     * - This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version | grep "Server API version"`
     * - _Required_: No
     * - _Type_: [LogConfiguration](./aws-properties-batch-jobdefinition-logconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-logconfiguration */
    "LogConfiguration"?: LogConfiguration;
    /**
     * - This parameter is deprecated, use `resourceRequirements` to specify the memory requirements for the job definition. It's not supported for jobs running on Fargate resources. For jobs that run on Amazon EC2 resources, it specifies the memory hard limit (in MiB) for a container. If your container attempts to exceed the specified number, it's terminated. You must specify at least 4 MiB of memory for a job using this parameter. The memory hard limit can be specified in several places. It must be specified for each node at least once.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-memory */
    "Memory"?: number | Intrinsic;
    /**
     * - The mount points for data volumes in your container.
     * - This parameter maps to `Volumes` in the [Create a container](https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.35/) and the \--volume option to [docker run](https://docs.docker.com/engine/reference/run/#security-configuration).
     * - Windows containers can mount whole directories on the same drive as `$env:ProgramData`. Windows containers can't mount directories on a different drive, and mount point can't be across drives.
     * - _Required_: No
     * - _Type_: Array of [MountPoint](./aws-properties-batch-jobdefinition-mountpoint.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-mountpoints */
    "MountPoints"?: MountPoint[];
    /**
     * - When this parameter is true, the container is given elevated permissions on the host container instance (similar to the `root` user). This parameter maps to `Privileged` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--privileged` option to [docker run](https://docs.docker.com/engine/reference/run/). The default value is false.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-privileged */
    "Privileged"?: boolean | Intrinsic;
    /**
     * - When this parameter is true, the container is given read-only access to its root file system. This parameter maps to `ReadonlyRootfs` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--read-only` option to `docker run`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-readonlyrootfilesystem */
    "ReadonlyRootFilesystem"?: boolean | Intrinsic;
    /**
     * - The private repository authentication credentials to use.
     * - _Required_: No
     * - _Type_: [RepositoryCredentials](./aws-properties-batch-jobdefinition-repositorycredentials.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-repositorycredentials */
    "RepositoryCredentials"?: RepositoryCredentials;
    /**
     * - The type and amount of resources to assign to a container. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
     * - _Required_: No
     * - _Type_: Array of [ResourceRequirement](./aws-properties-batch-jobdefinition-resourcerequirement.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-resourcerequirements */
    "ResourceRequirements"?: ResourceRequirement[];
    /**
     * - An object that represents the compute environment architecture for AWS Batch jobs on Fargate.
     * - _Required_: No
     * - _Type_: [RuntimePlatform](./aws-properties-batch-jobdefinition-runtimeplatform.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-runtimeplatform */
    "RuntimePlatform"?: RuntimePlatform;
    /**
     * - The secrets for the container. For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html) in the _AWS Batch User Guide_.
     * - _Required_: No
     * - _Type_: Array of [Secret](./aws-properties-batch-jobdefinition-secret.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-secrets */
    "Secrets"?: Secret[];
    /**
     * - A list of `ulimits` to set in the container. This parameter maps to `Ulimits` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--ulimit` option to [docker run](https://docs.docker.com/engine/reference/run/).
     * - _Required_: No
     * - _Type_: Array of [Ulimit](./aws-properties-batch-jobdefinition-ulimit.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-ulimits */
    "Ulimits"?: Ulimit[];
    /**
     * - The user name to use inside the container. This parameter maps to `User` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--user` option to [docker run](https://docs.docker.com/engine/reference/run/).
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-user */
    "User"?: string | Intrinsic;
    /**
     * - This parameter is deprecated, use `resourceRequirements` to specify the vCPU requirements for the job definition. It's not supported for jobs running on Fargate resources. For jobs running on Amazon EC2 resources, it specifies the number of vCPUs reserved for the job.
     * - Each vCPU is equivalent to 1,024 CPU shares. This parameter maps to `CpuShares` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--cpu-shares` option to [docker run](https://docs.docker.com/engine/reference/run/). The number of vCPUs must be specified but can be specified in several places. You must specify it at least once for each node.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-vcpus */
    "Vcpus"?: number | Intrinsic;
    /**
     * - A list of data volumes used in a job.
     * - _Required_: No
     * - _Type_: Array of [Volume](./aws-properties-batch-jobdefinition-volume.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodecontainerproperties-volumes */
    "Volumes"?: Volume[];
}

/**
 * Determine whether your data volume persists on the host container instance and where it's stored. If this parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it stop running.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface Host {
    /**
     * - The path on the host container instance that's presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If this parameter contains a file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the source path location doesn't exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-host-sourcepath */
    "SourcePath"?: string | Intrinsic;
}

/**
 * An environment variable.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface EksContainerEnvironmentVariable {
    /**
     * - The name of the environment variable.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainerenvironmentvariable-name */
    "Name": string | Intrinsic;
    /**
     * - The value of the environment variable.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainerenvironmentvariable-value */
    "Value"?: string | Intrinsic;
}

/**
 * The security context for a job. For more information, see [Configure a security context for a pod or container](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/) in the _Kubernetes documentation_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface EksContainerSecurityContext {
    /**
     * - Whether or not a container or a Kubernetes pod is allowed to gain more privileges than its parent process. The default value is `false`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainersecuritycontext-allowprivilegeescalation */
    "AllowPrivilegeEscalation"?: boolean | Intrinsic;
    /**
     * - When this parameter is `true`, the container is given elevated permissions on the host container instance. The level of permissions are similar to the `root` user permissions. The default value is `false`. This parameter maps to `privileged` policy in the [Privileged pod security policies](https://kubernetes.io/docs/concepts/security/pod-security-policy/#privileged) in the _Kubernetes documentation_.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainersecuritycontext-privileged */
    "Privileged"?: boolean | Intrinsic;
    /**
     * - When this parameter is `true`, the container is given read-only access to its root file system. The default value is `false`. This parameter maps to `ReadOnlyRootFilesystem` policy in the [Volumes and file systems pod security policies](https://kubernetes.io/docs/concepts/security/pod-security-policy/#volumes-and-file-systems) in the _Kubernetes documentation_.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainersecuritycontext-readonlyrootfilesystem */
    "ReadOnlyRootFilesystem"?: boolean | Intrinsic;
    /**
     * - When this parameter is specified, the container is run as the specified group ID (`gid`). If this parameter isn't specified, the default is the group that's specified in the image metadata. This parameter maps to `RunAsGroup` and `MustRunAs` policy in the [Users and groups pod security policies](https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups) in the _Kubernetes documentation_.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainersecuritycontext-runasgroup */
    "RunAsGroup"?: number | Intrinsic;
    /**
     * - When this parameter is specified, the container is run as a user with a `uid` other than 0. If this parameter isn't specified, so such rule is enforced. This parameter maps to `RunAsUser` and `MustRunAsNonRoot` policy in the [Users and groups pod security policies](https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups) in the _Kubernetes documentation_.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainersecuritycontext-runasnonroot */
    "RunAsNonRoot"?: boolean | Intrinsic;
    /**
     * - When this parameter is specified, the container is run as the specified user ID (`uid`). If this parameter isn't specified, the default is the user that's specified in the image metadata. This parameter maps to `RunAsUser` and `MustRanAs` policy in the [Users and groups pod security policies](https://kubernetes.io/docs/concepts/security/pod-security-policy/#users-and-groups) in the _Kubernetes documentation_.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainersecuritycontext-runasuser */
    "RunAsUser"?: number | Intrinsic;
}

/**
 * The volume mounts for a container for an Amazon EKS job. For more information about volumes and volume mounts in Kubernetes, see [Volumes](https://kubernetes.io/docs/concepts/storage/volumes/) in the _Kubernetes documentation_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface EksContainerVolumeMount {
    /**
     * - The path on the container where the volume is mounted.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainervolumemount-mountpath */
    "MountPath"?: string | Intrinsic;
    /**
     * - The name the volume mount. This must match the name of one of the volumes in the pod.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainervolumemount-name */
    "Name"?: string | Intrinsic;
    /**
     * - If this value is `true`, the container has read-only access to the volume. Otherwise, the container can write to the volume. The default value is `false`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainervolumemount-readonly */
    "ReadOnly"?: boolean | Intrinsic;
    /**
     * - A sub-path inside the referenced volume instead of its root.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainervolumemount-subpath */
    "SubPath"?: string | Intrinsic;
}

/**
 * The type and amount of resources to assign to a container. The supported resources include `memory`, `cpu`, and `nvidia.com/gpu`. For more information, see [Resource management for pods and containers](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) in the _Kubernetes documentation_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface EksContainerResourceRequirements {
    /**
     * - The type and quantity of the resources to reserve for the container. The values vary based on the `name` that's specified. Resources can be requested using either the `limits` or the `requests` objects.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainerresourcerequirements-limits */
    "Limits"?: Record<string, string | Intrinsic>;
    /**
     * - The type and quantity of the resources to request for the container. The values vary based on the `name` that's specified. Resources can be requested by using either the `limits` or the `requests` objects.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainerresourcerequirements-requests */
    "Requests"?: Record<string, string | Intrinsic>;
}

/**
 * EKS container properties are used in job definitions for Amazon EKS based job definitions to describe the properties for a container node in the pod that's launched as part of a job. This can't be specified for Amazon ECS based job definitions.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface EksContainer {
    /**
     * - An array of arguments to the entrypoint. If this isn't specified, the `CMD` of the container image is used. This corresponds to the `args` member in the [Entrypoint](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#entrypoint) portion of the [Pod](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/) in Kubernetes. Environment variable references are expanded using the container's environment.
     * - If the referenced environment variable doesn't exist, the reference in the command isn't changed. For example, if the reference is to "`$(NAME1)`" and the `NAME1` environment variable doesn't exist, the command string will remain "`$(NAME1)`." `$$` is replaced with `$`, and the resulting string isn't expanded. For example, `$$(VAR_NAME)` is passed as `$(VAR_NAME)` whether or not the `VAR_NAME` environment variable exists. For more information, see [Dockerfile reference: CMD](https://docs.docker.com/engine/reference/builder/#cmd) and [Define a command and arguments for a pod](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/) in the _Kubernetes documentation_.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainer-args */
    "Args"?: (string | Intrinsic)[];
    /**
     * - The entrypoint for the container. This isn't run within a shell. If this isn't specified, the `ENTRYPOINT` of the container image is used. Environment variable references are expanded using the container's environment.
     * - If the referenced environment variable doesn't exist, the reference in the command isn't changed. For example, if the reference is to "`$(NAME1)`" and the `NAME1` environment variable doesn't exist, the command string will remain "`$(NAME1)`." `$$` is replaced with `$` and the resulting string isn't expanded. For example, `$$(VAR_NAME)` will be passed as `$(VAR_NAME)` whether or not the `VAR_NAME` environment variable exists. The entrypoint can't be updated. For more information, see [ENTRYPOINT](https://docs.docker.com/engine/reference/builder/#entrypoint) in the _Dockerfile reference_ and [Define a command and arguments for a container](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/) and [Entrypoint](https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#entrypoint) in the _Kubernetes documentation_.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainer-command */
    "Command"?: (string | Intrinsic)[];
    /**
     * - The environment variables to pass to a container.
     * - _Required_: No
     * - _Type_: Array of [EksContainerEnvironmentVariable](./aws-properties-batch-jobdefinition-ekscontainerenvironmentvariable.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainer-env */
    "Env"?: EksContainerEnvironmentVariable[];
    /**
     * - The Docker image used to start the container.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainer-image */
    "Image": string | Intrinsic;
    /**
     * - The image pull policy for the container. Supported values are `Always`, `IfNotPresent`, and `Never`. This parameter defaults to `IfNotPresent`. However, if the `:latest` tag is specified, it defaults to `Always`. For more information, see [Updating images](https://kubernetes.io/docs/concepts/containers/images/#updating-images) in the _Kubernetes documentation_.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainer-imagepullpolicy */
    "ImagePullPolicy"?: string | Intrinsic;
    /**
     * - The name of the container. If the name isn't specified, the default name "`Default`" is used. Each container in a pod must have a unique name.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainer-name */
    "Name"?: string | Intrinsic;
    /**
     * - The type and amount of resources to assign to a container. The supported resources include `memory`, `cpu`, and `nvidia.com/gpu`. For more information, see [Resource management for pods and containers](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) in the _Kubernetes documentation_.
     * - _Required_: No
     * - _Type_: [EksContainerResourceRequirements](./aws-properties-batch-jobdefinition-ekscontainerresourcerequirements.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainer-resources */
    "Resources"?: EksContainerResourceRequirements;
    /**
     * - The security context for a job. For more information, see [Configure a security context for a pod or container](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/) in the _Kubernetes documentation_.
     * - _Required_: No
     * - _Type_: [EksContainerSecurityContext](./aws-properties-batch-jobdefinition-ekscontainersecuritycontext.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainer-securitycontext */
    "SecurityContext"?: EksContainerSecurityContext;
    /**
     * - The volume mounts for the container. AWS Batch supports `emptyDir`, `hostPath`, and `secret` volume types. For more information about volumes and volume mounts in Kubernetes, see [Volumes](https://kubernetes.io/docs/concepts/storage/volumes/) in the _Kubernetes documentation_.
     * - _Required_: No
     * - _Type_: Array of [EksContainerVolumeMount](./aws-properties-batch-jobdefinition-ekscontainervolumemount.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekscontainer-volumemounts */
    "VolumeMounts"?: EksContainerVolumeMount[];
}

/**
 * The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see [Custom log](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html) routing in the _Amazon Elastic Container Service Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface FirelensConfiguration {
    /**
     * - The options to use when configuring the log router. This field is optional and can be used to specify a custom configuration file or to add additional metadata, such as the task, task definition, cluster, and container instance details to the log event. If specified, the syntax to use is `"options":{"enable-ecs-log-metadata":"true|false","config-file-type:"s3|file","config-file-value":"arn:aws:s3:::mybucket/fluent.conf|filepath"}`. For more information, see [Creating a task definition that uses a FireLens configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html#firelens-taskdef) in the _Amazon Elastic Container Service Developer Guide_.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-firelensconfiguration-options */
    "Options"?: Record<string, string | Intrinsic>;
    /**
     * - The log router to use. The valid values are `fluentd` or `fluentbit`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `fluentd | fluentbit`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-firelensconfiguration-type */
    "Type": string | Intrinsic;
}

/**
 * A list of containers that this task depends on.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface TaskContainerDependency {
    /**
     * - The dependency condition of the container. The following are the available conditions and their behavior:
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-taskcontainerdependency-condition */
    "Condition": string | Intrinsic;
    /**
     * - A unique identifier for the container.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-taskcontainerdependency-containername */
    "ContainerName": string | Intrinsic;
}

/**
 * Container properties are used for Amazon ECS-based job definitions. These properties to describe the container that's launched as part of a job.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface TaskContainerProperties {
    /**
     * - The command that's passed to the container. This parameter maps to `Cmd` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `COMMAND` parameter to [docker run](https://docs.docker.com/engine/reference/run/). For more information, see [Dockerfile reference: CMD](https://docs.docker.com/engine/reference/builder/#cmd).
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-taskcontainerproperties-command */
    "Command"?: (string | Intrinsic)[];
    /**
     * - A list of containers that this container depends on.
     * - _Required_: No
     * - _Type_: Array of [TaskContainerDependency](./aws-properties-batch-jobdefinition-taskcontainerdependency.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-taskcontainerproperties-dependson */
    "DependsOn"?: TaskContainerDependency[];
    /**
     * - The environment variables to pass to a container. This parameter maps to Env in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--env` parameter to [docker run](https://docs.docker.com/engine/reference/run/).
     * - _Required_: No
     * - _Type_: [Array](./aws-properties-batch-jobdefinition-environment.html) of [Environment](./aws-properties-batch-jobdefinition-environment.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-taskcontainerproperties-environment */
    "Environment"?: Environment[];
    /**
     * - If the essential parameter of a container is marked as `true`, and that container fails or stops for any reason, all other containers that are part of the task are stopped. If the `essential` parameter of a container is marked as false, its failure doesn't affect the rest of the containers in a task. If this parameter is omitted, a container is assumed to be essential.
     * - All jobs must have at least one essential container. If you have an application that's composed of multiple containers, group containers that are used for a common purpose into components, and separate the different components into multiple task definitions. For more information, see [Application Architecture](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/application_architecture.html) in the _Amazon Elastic Container Service Developer Guide_.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-taskcontainerproperties-essential */
    "Essential"?: boolean | Intrinsic;
    /**
     * - The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see [Custom log](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html) routing in the _Amazon Elastic Container Service Developer Guide_.
     * - _Required_: No
     * - _Type_: [FirelensConfiguration](./aws-properties-batch-jobdefinition-firelensconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-taskcontainerproperties-firelensconfiguration */
    "FirelensConfiguration"?: FirelensConfiguration;
    /**
     * - The image used to start a container. This string is passed directly to the Docker daemon. By default, images in the Docker Hub registry are available. Other repositories are specified with either `repository-url/image:tag` or `repository-url/image@digest`. Up to 255 letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward slashes, and number signs are allowed. This parameter maps to `Image` in the [Create a container](https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.35/) and the `IMAGE` parameter of the [_docker run_](https://docs.docker.com/engine/reference/run/#security-configuration).
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-taskcontainerproperties-image */
    "Image": string | Intrinsic;
    /**
     * - Linux-specific modifications that are applied to the container, such as Linux kernel capabilities. For more information, see [KernelCapabilities](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_KernelCapabilities.html).
     * - _Required_: No
     * - _Type_: [LinuxParameters](./aws-properties-batch-jobdefinition-linuxparameters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-taskcontainerproperties-linuxparameters */
    "LinuxParameters"?: LinuxParameters;
    /**
     * - The log configuration specification for the container.
     * - This parameter maps to `LogConfig` in the [Create a container](https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.35/) and the `--log-driver` option to [docker run](https://docs.docker.com/engine/reference/run/#security-configuration).
     * - By default, containers use the same logging driver that the Docker daemon uses. However the container can use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information about the options for different supported log drivers, see [Configure logging drivers](https://docs.docker.com/engine/admin/logging/overview/) in the _Docker documentation_.
     * - This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: sudo docker version `--format '{{.Server.APIVersion}}'`
     * - _Required_: No
     * - _Type_: [LogConfiguration](./aws-properties-batch-jobdefinition-logconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-taskcontainerproperties-logconfiguration */
    "LogConfiguration"?: LogConfiguration;
    /**
     * - The mount points for data volumes in your container.
     * - This parameter maps to `Volumes` in the [Create a container](https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.35/) and the \--volume option to [docker run](https://docs.docker.com/engine/reference/run/#security-configuration).
     * - Windows containers can mount whole directories on the same drive as `$env:ProgramData`. Windows containers can't mount directories on a different drive, and mount point can't be across drives.
     * - _Required_: No
     * - _Type_: Array of [MountPoint](./aws-properties-batch-jobdefinition-mountpoint.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-taskcontainerproperties-mountpoints */
    "MountPoints"?: MountPoint[];
    /**
     * - The name of a container. The name can be used as a unique identifier to target your `dependsOn` and `Overrides` objects.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-taskcontainerproperties-name */
    "Name"?: string | Intrinsic;
    /**
     * - When this parameter is `true`, the container is given elevated privileges on the host container instance (similar to the `root` user). This parameter maps to `Privileged` in the [Create a container](https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.35/) and the `--privileged` option to [docker run](https://docs.docker.com/engine/reference/run/#security-configuration).
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-taskcontainerproperties-privileged */
    "Privileged"?: boolean | Intrinsic;
    /**
     * - When this parameter is true, the container is given read-only access to its root file system. This parameter maps to `ReadonlyRootfs` in the [Create a container](https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.35/) and the `--read-only` option to [docker run](https://docs.docker.com/engine/reference/run/#security-configuration).
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-taskcontainerproperties-readonlyrootfilesystem */
    "ReadonlyRootFilesystem"?: boolean | Intrinsic;
    /**
     * - The private repository authentication credentials to use.
     * - _Required_: No
     * - _Type_: [RepositoryCredentials](./aws-properties-batch-jobdefinition-repositorycredentials.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-taskcontainerproperties-repositorycredentials */
    "RepositoryCredentials"?: RepositoryCredentials;
    /**
     * - The type and amount of a resource to assign to a container. The only supported resource is a GPU.
     * - _Required_: No
     * - _Type_: Array of [ResourceRequirement](./aws-properties-batch-jobdefinition-resourcerequirement.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-taskcontainerproperties-resourcerequirements */
    "ResourceRequirements"?: ResourceRequirement[];
    /**
     * - The secrets to pass to the container. For more information, see [Specifying Sensitive Data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the Amazon Elastic Container Service Developer Guide.
     * - _Required_: No
     * - _Type_: Array of [Secret](./aws-properties-batch-jobdefinition-secret.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-taskcontainerproperties-secrets */
    "Secrets"?: Secret[];
    /**
     * - A list of `ulimits` to set in the container. If a `ulimit` value is specified in a task definition, it overrides the default values set by Docker. This parameter maps to `Ulimits` in the [Create a container](https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.35/) and the `--ulimit` option to [docker run](https://docs.docker.com/engine/reference/run/#security-configuration).
     * - Amazon ECS tasks hosted on Fargate use the default resource limit values set by the operating system with the exception of the nofile resource limit parameter which Fargate overrides. The `nofile` resource limit sets a restriction on the number of open files that a container can use. The default `nofile` soft limit is `1024` and the default hard limit is `65535`.
     * - This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: sudo docker version `--format '{{.Server.APIVersion}}'`
     * - _Required_: No
     * - _Type_: Array of [Ulimit](./aws-properties-batch-jobdefinition-ulimit.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-taskcontainerproperties-ulimits */
    "Ulimits"?: Ulimit[];
    /**
     * - The user to use inside the container. This parameter maps to User in the Create a container section of the Docker Remote API and the --user option to docker run.
     * - You can specify the `user` using the following formats. If specifying a UID or GID, you must specify it as a positive integer.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-taskcontainerproperties-user */
    "User"?: string | Intrinsic;
}

/**
 * The properties for a task definition that describes the container and volume definitions of an Amazon ECS task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface EcsTaskProperties {
    /**
     * - This object is a list of containers.
     * - _Required_: No
     * - _Type_: Array of [TaskContainerProperties](./aws-properties-batch-jobdefinition-taskcontainerproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ecstaskproperties-containers */
    "Containers"?: TaskContainerProperties[];
    /**
     * - Determines whether execute command functionality is turned on for this task. If `true`, execute command functionality is turned on all the containers in the task.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ecstaskproperties-enableexecutecommand */
    "EnableExecuteCommand"?: boolean | Intrinsic;
    /**
     * - The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on AWS Fargate.
     * - _Required_: No
     * - _Type_: [EphemeralStorage](./aws-properties-batch-jobdefinition-ephemeralstorage.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ecstaskproperties-ephemeralstorage */
    "EphemeralStorage"?: EphemeralStorage;
    /**
     * - The Amazon Resource Name (ARN) of the execution role that AWS Batch can assume. For jobs that run on Fargate resources, you must provide an execution role. For more information, see [AWS Batch execution IAM role](https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html) in the _AWS Batch User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ecstaskproperties-executionrolearn */
    "ExecutionRoleArn"?: string | Intrinsic;
    /**
     * - The IPC resource namespace to use for the containers in the task. The valid values are `host`, `task`, or `none`.
     * - If `host` is specified, all containers within the tasks that specified the `host` IPC mode on the same container instance share the same IPC resources with the host Amazon EC2 instance.
     * - If `task` is specified, all containers within the specified `task` share the same IPC resources.
     * - If `none` is specified, the IPC resources within the containers of a task are private, and are not shared with other containers in a task or on the container instance.
     * - If no value is specified, then the IPC resource namespace sharing depends on the Docker daemon setting on the container instance. For more information, see [IPC settings](https://docs.docker.com/engine/reference/run/#ipc-settings---ipc) in the Docker run reference.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ecstaskproperties-ipcmode */
    "IpcMode"?: string | Intrinsic;
    /**
     * - The network configuration for jobs that are running on Fargate resources. Jobs that are running on Amazon EC2 resources must not specify this parameter.
     * - _Required_: No
     * - _Type_: [NetworkConfiguration](./aws-properties-batch-jobdefinition-networkconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ecstaskproperties-networkconfiguration */
    "NetworkConfiguration"?: NetworkConfiguration;
    /**
     * - The process namespace to use for the containers in the task. The valid values are `host` or `task`. For example, monitoring sidecars might need `pidMode` to access information about other containers running in the same task.
     * - If `host` is specified, all containers within the tasks that specified the `host` PID mode on the same container instance share the process namespace with the host Amazon EC2 instance.
     * - If `task` is specified, all containers within the specified task share the same process namespace.
     * - If no value is specified, the default is a private namespace for each container. For more information, see [PID settings](https://docs.docker.com/engine/reference/run/#pid-settings---pid) in the Docker run reference.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ecstaskproperties-pidmode */
    "PidMode"?: string | Intrinsic;
    /**
     * - The Fargate platform version where the jobs are running. A platform version is specified only for jobs that are running on Fargate resources. If one isn't specified, the `LATEST` platform version is used by default. This uses a recent, approved version of the Fargate platform for compute resources. For more information, see [AWS Fargate platform versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the _Amazon Elastic Container Service Developer Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ecstaskproperties-platformversion */
    "PlatformVersion"?: string | Intrinsic;
    /**
     * - An object that represents the compute environment architecture for AWS Batch jobs on Fargate.
     * - _Required_: No
     * - _Type_: [RuntimePlatform](./aws-properties-batch-jobdefinition-runtimeplatform.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ecstaskproperties-runtimeplatform */
    "RuntimePlatform"?: RuntimePlatform;
    /**
     * - The Amazon Resource Name (ARN) that's associated with the Amazon ECS task.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ecstaskproperties-taskrolearn */
    "TaskRoleArn"?: string | Intrinsic;
    /**
     * - A list of volumes that are associated with the job.
     * - _Required_: No
     * - _Type_: Array of [Volume](./aws-properties-batch-jobdefinition-volume.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ecstaskproperties-volumes */
    "Volumes"?: Volume[];
}

/**
 * An object that contains the properties for the Amazon ECS resources of a job.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface EcsProperties {
    /**
     * - An object that contains the properties for the Amazon ECS task definition of a job.
     * - _Required_: Yes
     * - _Type_: Array of [EcsTaskProperties](./aws-properties-batch-jobdefinition-ecstaskproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ecsproperties-taskproperties */
    "TaskProperties": EcsTaskProperties[];
}

/**
 * Specifies the configuration of a Kubernetes `emptyDir` volume. An `emptyDir` volume is first created when a pod is assigned to a node. It exists as long as that pod is running on that node. The `emptyDir` volume is initially empty. All containers in the pod can read and write the files in the `emptyDir` volume. However, the `emptyDir` volume can be mounted at the same or different paths in each container. When a pod is removed from a node for any reason, the data in the `emptyDir` is deleted permanently. For more information, see [emptyDir](https://kubernetes.io/docs/concepts/storage/volumes/#emptydir) in the _Kubernetes documentation_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface EksEmptyDir {
    /**
     * - The medium to store the volume. The default value is an empty string, which uses the storage of the node.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-eksemptydir-medium */
    "Medium"?: string | Intrinsic;
    /**
     * - The maximum size of the volume. By default, there's no maximum size defined.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-eksemptydir-sizelimit */
    "SizeLimit"?: string | Intrinsic;
}

/**
 * Specifies the configuration of a Kubernetes `secret` volume. For more information, see [secret](https://kubernetes.io/docs/concepts/storage/volumes/#secret) in the _Kubernetes documentation_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface EksSecret {
    /**
     * - Specifies whether the secret or the secret's keys must be defined.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekssecret-optional */
    "Optional"?: boolean | Intrinsic;
    /**
     * - The name of the secret. The name must be allowed as a DNS subdomain name. For more information, see [DNS subdomain names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names) in the _Kubernetes documentation_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekssecret-secretname */
    "SecretName": string | Intrinsic;
}

/**
 * A `persistentVolumeClaim` volume is used to mount a [PersistentVolume](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) into a Pod. PersistentVolumeClaims are a way for users to "claim" durable storage without knowing the details of the particular cloud environment. See the information about [PersistentVolumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) in the _Kubernetes documentation_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface EksPersistentVolumeClaim {
    /**
     * - The name of the `persistentVolumeClaim` bounded to a `persistentVolume`. For more information, see [Persistent Volume Claims](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims) in the _Kubernetes documentation_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekspersistentvolumeclaim-claimname */
    "ClaimName": string | Intrinsic;
    /**
     * - An optional boolean value indicating if the mount is read only. Default is false. For more information, see [Read Only Mounts](https://kubernetes.io/docs/concepts/storage/volumes/#read-only-mounts) in the _Kubernetes documentation_.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekspersistentvolumeclaim-readonly */
    "ReadOnly"?: boolean | Intrinsic;
}

/**
 * Specifies the configuration of a Kubernetes `hostPath` volume. A `hostPath` volume mounts an existing file or directory from the host node's filesystem into your pod. For more information, see [hostPath](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath) in the _Kubernetes documentation_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface EksHostPath {
    /**
     * - The path of the file or directory on the host to mount into containers on the pod.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekshostpath-path */
    "Path"?: string | Intrinsic;
}

/**
 * Specifies an Amazon EKS volume for a job definition.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface EksVolume {
    /**
     * - Specifies the configuration of a Kubernetes `emptyDir` volume. For more information, see [emptyDir](https://kubernetes.io/docs/concepts/storage/volumes/#emptydir) in the _Kubernetes documentation_.
     * - _Required_: No
     * - _Type_: [EksEmptyDir](./aws-properties-batch-jobdefinition-eksemptydir.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-eksvolume-emptydir */
    "EmptyDir"?: EksEmptyDir;
    /**
     * - Specifies the configuration of a Kubernetes `hostPath` volume. For more information, see [hostPath](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath) in the _Kubernetes documentation_.
     * - _Required_: No
     * - _Type_: [EksHostPath](./aws-properties-batch-jobdefinition-ekshostpath.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-eksvolume-hostpath */
    "HostPath"?: EksHostPath;
    /**
     * - The name of the volume. The name must be allowed as a DNS subdomain name. For more information, see [DNS subdomain names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names) in the _Kubernetes documentation_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-eksvolume-name */
    "Name": string | Intrinsic;
    /**
     * - Specifies the configuration of a Kubernetes `persistentVolumeClaim` bounded to a `persistentVolume`. For more information, see [Persistent Volume Claims](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims) in the _Kubernetes documentation_.
     * - _Required_: No
     * - _Type_: [EksPersistentVolumeClaim](./aws-properties-batch-jobdefinition-ekspersistentvolumeclaim.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-eksvolume-persistentvolumeclaim */
    "PersistentVolumeClaim"?: EksPersistentVolumeClaim;
    /**
     * - Specifies the configuration of a Kubernetes `secret` volume. For more information, see [secret](https://kubernetes.io/docs/concepts/storage/volumes/#secret) in the _Kubernetes documentation_.
     * - _Required_: No
     * - _Type_: [EksSecret](./aws-properties-batch-jobdefinition-ekssecret.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-eksvolume-secret */
    "Secret"?: EksSecret;
}

/**
 * The properties for the pod.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface EksPodProperties {
    /**
     * - The properties of the container that's used on the Amazon EKS pod.
     * - _Required_: No
     * - _Type_: Array of [EksContainer](./aws-properties-batch-jobdefinition-ekscontainer.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekspodproperties-containers */
    "Containers"?: EksContainer[];
    /**
     * - The DNS policy for the pod. The default value is `ClusterFirst`. If the `hostNetwork` parameter is not specified, the default is `ClusterFirstWithHostNet`. `ClusterFirst` indicates that any DNS query that does not match the configured cluster domain suffix is forwarded to the upstream nameserver inherited from the node. For more information, see [Pod's DNS policy](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-policy) in the _Kubernetes documentation_.
     * - Valid values: `Default` | `ClusterFirst` | `ClusterFirstWithHostNet`
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekspodproperties-dnspolicy */
    "DnsPolicy"?: string | Intrinsic;
    /**
     * - Indicates if the pod uses the hosts' network IP address. The default value is `true`. Setting this to `false` enables the Kubernetes pod networking model. Most AWS Batch workloads are egress-only and don't require the overhead of IP allocation for each pod for incoming connections. For more information, see [Host namespaces](https://kubernetes.io/docs/concepts/security/pod-security-policy/#host-namespaces) and [Pod networking](https://kubernetes.io/docs/concepts/workloads/pods/#pod-networking) in the _Kubernetes documentation_.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekspodproperties-hostnetwork */
    "HostNetwork"?: boolean | Intrinsic;
    /**
     * - References a Kubernetes secret resource. It holds a list of secrets. These secrets help to gain access to pull an images from a private registry.
     * - `ImagePullSecret$name` is required when this object is used.
     * - _Required_: No
     * - _Type_: Array of [ImagePullSecret](./aws-properties-batch-jobdefinition-imagepullsecret.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekspodproperties-imagepullsecrets */
    "ImagePullSecrets"?: ImagePullSecret[];
    /**
     * - These containers run before application containers, always runs to completion, and must complete successfully before the next container starts. These containers are registered with the Amazon EKS Connector agent and persists the registration information in the Kubernetes backend data store. For more information, see [Init Containers](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/) in the _Kubernetes documentation_.
     * - _Required_: No
     * - _Type_: Array of [EksContainer](./aws-properties-batch-jobdefinition-ekscontainer.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekspodproperties-initcontainers */
    "InitContainers"?: EksContainer[];
    /**
     * - Metadata about the Kubernetes pod. For more information, see [Understanding Kubernetes Objects](https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/) in the _Kubernetes documentation_.
     * - _Required_: No
     * - _Type_: [EksMetadata](./aws-properties-batch-jobdefinition-eksmetadata.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekspodproperties-metadata */
    "Metadata"?: EksMetadata;
    /**
     * - The name of the service account that's used to run the pod. For more information, see [Kubernetes service accounts](https://docs.aws.amazon.com/eks/latest/userguide/service-accounts.html) and [Configure a Kubernetes service account to assume an IAM role](https://docs.aws.amazon.com/eks/latest/userguide/associate-service-account-role.html) in the _Amazon EKS User Guide_ and [Configure service accounts for pods](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/) in the _Kubernetes documentation_.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekspodproperties-serviceaccountname */
    "ServiceAccountName"?: string | Intrinsic;
    /**
     * - Indicates if the processes in a container are shared, or visible, to other containers in the same pod. For more information, see [Share Process Namespace between Containers in a Pod](https://kubernetes.io/docs/tasks/configure-pod-container/share-process-namespace/).
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekspodproperties-shareprocessnamespace */
    "ShareProcessNamespace"?: boolean | Intrinsic;
    /**
     * - Specifies the volumes for a job definition that uses Amazon EKS resources.
     * - _Required_: No
     * - _Type_: Array of [EksVolume](./aws-properties-batch-jobdefinition-eksvolume.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ekspodproperties-volumes */
    "Volumes"?: EksVolume[];
}

/**
 * An object that contains the properties for the Kubernetes resources of a job.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface EksProperties {
    /**
     * - The properties for the Kubernetes pod resources of a job.
     * - _Required_: No
     * - _Type_: [EksPodProperties](./aws-properties-batch-jobdefinition-ekspodproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-eksproperties-podproperties */
    "PodProperties"?: EksPodProperties;
}

/**
 * The authorization configuration details for the Amazon EFS file system.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface EFSAuthorizationConfig {
    /**
     * - The Amazon EFS access point ID to use. If an access point is specified, the root directory value specified in the `EFSVolumeConfiguration` must either be omitted or set to `/` which enforces the path set on the EFS access point. If an access point is used, transit encryption must be enabled in the `EFSVolumeConfiguration`. For more information, see [Working with Amazon EFS access points](https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html) in the _Amazon Elastic File System User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-efsauthorizationconfig-accesspointid */
    "AccessPointId"?: string | Intrinsic;
    /**
     * - Whether or not to use the AWS Batch job IAM role defined in a job definition when mounting the Amazon EFS file system. If enabled, transit encryption must be enabled in the `EFSVolumeConfiguration`. If this parameter is omitted, the default value of `DISABLED` is used. For more information, see [Using Amazon EFS access points](https://docs.aws.amazon.com/batch/latest/userguide/efs-volumes.html#efs-volume-accesspoints) in the _AWS Batch User Guide_. EFS IAM authorization requires that `TransitEncryption` be `ENABLED` and that a `JobRoleArn` is specified.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-efsauthorizationconfig-iam */
    "Iam"?: string | Intrinsic;
}

/**
 * This is used when you're using an Amazon Elastic File System file system for job storage. For more information, see [Amazon EFS Volumes](https://docs.aws.amazon.com/batch/latest/userguide/efs-volumes.html) in the _AWS Batch User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface EFSVolumeConfiguration {
    /**
     * - The authorization configuration details for the Amazon EFS file system.
     * - _Required_: No
     * - _Type_: [EFSAuthorizationConfig](./aws-properties-batch-jobdefinition-efsauthorizationconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-efsvolumeconfiguration-authorizationconfig */
    "AuthorizationConfig"?: EFSAuthorizationConfig;
    /**
     * - The Amazon EFS file system ID to use.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-efsvolumeconfiguration-filesystemid */
    "FileSystemId": string | Intrinsic;
    /**
     * - The directory within the Amazon EFS file system to mount as the root directory inside the host. If this parameter is omitted, the root of the Amazon EFS volume is used instead. Specifying `/` has the same effect as omitting this parameter. The maximum length is 4,096 characters.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-efsvolumeconfiguration-rootdirectory */
    "RootDirectory"?: string | Intrinsic;
    /**
     * - Determines whether to enable encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server. Transit encryption must be enabled if Amazon EFS IAM authorization is used. If this parameter is omitted, the default value of `DISABLED` is used. For more information, see [Encrypting data in transit](https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html) in the _Amazon Elastic File System User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-efsvolumeconfiguration-transitencryption */
    "TransitEncryption"?: string | Intrinsic;
    /**
     * - The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS server. If you don't specify a transit encryption port, it uses the port selection strategy that the Amazon EFS mount helper uses. The value must be between 0 and 65,535. For more information, see [EFS mount helper](https://docs.aws.amazon.com/efs/latest/ug/efs-mount-helper.html) in the _Amazon Elastic File System User Guide_.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-efsvolumeconfiguration-transitencryptionport */
    "TransitEncryptionPort"?: number | Intrinsic;
}

/**
 * A data volume that's used in a job's container properties.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface Volume {
    /**
     * - This parameter is specified when you're using an Amazon Elastic File System file system for job storage. Jobs that are running on Fargate resources must specify a `platformVersion` of at least `1.4.0`.
     * - _Required_: No
     * - _Type_: [EFSVolumeConfiguration](./aws-properties-batch-jobdefinition-efsvolumeconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-volume-efsvolumeconfiguration */
    "EfsVolumeConfiguration"?: EFSVolumeConfiguration;
    /**
     * - The contents of the `host` parameter determine whether your data volume persists on the host container instance and where it's stored. If the host parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it stop running.
     * - _Required_: No
     * - _Type_: [Host](./aws-properties-batch-jobdefinition-host.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-volume-host */
    "Host"?: Host;
    /**
     * - The name of the volume. It can be up to 255 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (\_). This name is referenced in the `sourceVolume` parameter of container definition `mountPoints`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-volume-name */
    "Name"?: string | Intrinsic;
}

/**
 * Container properties are used for Amazon ECS based job definitions. These properties to describe the container that's launched as part of a job.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface ContainerProperties {
    /**
     * - The command that's passed to the container. This parameter maps to `Cmd` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `COMMAND` parameter to [docker run](https://docs.docker.com/engine/reference/run/). For more information, see [https://docs.docker.com/engine/reference/builder/#cmd](https://docs.docker.com/engine/reference/builder/#cmd).
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-command */
    "Command"?: (string | Intrinsic)[];
    /**
     * - Determines whether execute command functionality is turned on for this task. If `true`, execute command functionality is turned on all the containers in the task.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-enableexecutecommand */
    "EnableExecuteCommand"?: boolean | Intrinsic;
    /**
     * - The environment variables to pass to a container. This parameter maps to `Env` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--env` option to [docker run](https://docs.docker.com/engine/reference/run/).
     * - _Required_: No
     * - _Type_: [Array](./aws-properties-batch-jobdefinition-environment.html) of [Environment](./aws-properties-batch-jobdefinition-environment.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-environment */
    "Environment"?: Environment[];
    /**
     * - The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on AWS Fargate.
     * - _Required_: No
     * - _Type_: [EphemeralStorage](./aws-properties-batch-jobdefinition-ephemeralstorage.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-ephemeralstorage */
    "EphemeralStorage"?: EphemeralStorage;
    /**
     * - The Amazon Resource Name (ARN) of the execution role that AWS Batch can assume. For jobs that run on Fargate resources, you must provide an execution role. For more information, see [AWS Batch execution IAM role](https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html) in the _AWS Batch User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-executionrolearn */
    "ExecutionRoleArn"?: string | Intrinsic;
    /**
     * - The platform configuration for jobs that are running on Fargate resources. Jobs that are running on Amazon EC2 resources must not specify this parameter.
     * - _Required_: No
     * - _Type_: [FargatePlatformConfiguration](./aws-properties-batch-jobdefinition-fargateplatformconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-fargateplatformconfiguration */
    "FargatePlatformConfiguration"?: FargatePlatformConfiguration;
    /**
     * - Required. The image used to start a container. This string is passed directly to the Docker daemon. Images in the Docker Hub registry are available by default. Other repositories are specified with `_repository-url_/_image_:_tag_`. It can be 255 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), underscores (\_), colons (:), periods (.), forward slashes (/), and number signs (#). This parameter maps to `Image` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `IMAGE` parameter of [docker run](https://docs.docker.com/engine/reference/run/).
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-image */
    "Image": string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the IAM role that the container can assume for AWS permissions. For more information, see [IAM roles for tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) in the _Amazon Elastic Container Service Developer Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-jobrolearn */
    "JobRoleArn"?: string | Intrinsic;
    /**
     * - Linux-specific modifications that are applied to the container, such as details for device mappings.
     * - _Required_: No
     * - _Type_: [LinuxParameters](./aws-properties-batch-jobdefinition-linuxparameters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-linuxparameters */
    "LinuxParameters"?: LinuxParameters;
    /**
     * - The log configuration specification for the container.
     * - This parameter maps to `LogConfig` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--log-driver` option to [docker run](https://docs.docker.com/engine/reference/run/). By default, containers use the same logging driver that the Docker daemon uses. However the container might use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information on the options for different supported log drivers, see [Configure logging drivers](https://docs.docker.com/engine/admin/logging/overview/) in the Docker documentation.
     * - This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version | grep "Server API version"`
     * - _Required_: No
     * - _Type_: [LogConfiguration](./aws-properties-batch-jobdefinition-logconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-logconfiguration */
    "LogConfiguration"?: LogConfiguration;
    /**
     * - This parameter is deprecated, use `resourceRequirements` to specify the memory requirements for the job definition. It's not supported for jobs running on Fargate resources. For jobs that run on Amazon EC2 resources, it specifies the memory hard limit (in MiB) for a container. If your container attempts to exceed the specified number, it's terminated. You must specify at least 4 MiB of memory for a job using this parameter. The memory hard limit can be specified in several places. It must be specified for each node at least once.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-memory */
    "Memory"?: number | Intrinsic;
    /**
     * - The mount points for data volumes in your container. This parameter maps to `Volumes` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--volume` option to [docker run](https://docs.docker.com/engine/reference/run/).
     * - _Required_: No
     * - _Type_: Array of [MountPoint](./aws-properties-batch-jobdefinition-mountpoint.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-mountpoints */
    "MountPoints"?: MountPoint[];
    /**
     * - The network configuration for jobs that are running on Fargate resources. Jobs that are running on Amazon EC2 resources must not specify this parameter.
     * - _Required_: No
     * - _Type_: [NetworkConfiguration](./aws-properties-batch-jobdefinition-networkconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-networkconfiguration */
    "NetworkConfiguration"?: NetworkConfiguration;
    /**
     * - When this parameter is true, the container is given elevated permissions on the host container instance (similar to the `root` user). This parameter maps to `Privileged` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--privileged` option to [docker run](https://docs.docker.com/engine/reference/run/). The default value is false.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-privileged */
    "Privileged"?: boolean | Intrinsic;
    /**
     * - When this parameter is true, the container is given read-only access to its root file system. This parameter maps to `ReadonlyRootfs` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--read-only` option to `docker run`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-readonlyrootfilesystem */
    "ReadonlyRootFilesystem"?: boolean | Intrinsic;
    /**
     * - The private repository authentication credentials to use.
     * - _Required_: No
     * - _Type_: [RepositoryCredentials](./aws-properties-batch-jobdefinition-repositorycredentials.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-repositorycredentials */
    "RepositoryCredentials"?: RepositoryCredentials;
    /**
     * - The type and amount of resources to assign to a container. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
     * - _Required_: No
     * - _Type_: Array of [ResourceRequirement](./aws-properties-batch-jobdefinition-resourcerequirement.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-resourcerequirements */
    "ResourceRequirements"?: ResourceRequirement[];
    /**
     * - An object that represents the compute environment architecture for AWS Batch jobs on Fargate.
     * - _Required_: No
     * - _Type_: [RuntimePlatform](./aws-properties-batch-jobdefinition-runtimeplatform.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-runtimeplatform */
    "RuntimePlatform"?: RuntimePlatform;
    /**
     * - The secrets for the container. For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html) in the _AWS Batch User Guide_.
     * - _Required_: No
     * - _Type_: Array of [Secret](./aws-properties-batch-jobdefinition-secret.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-secrets */
    "Secrets"?: Secret[];
    /**
     * - A list of `ulimits` to set in the container. This parameter maps to `Ulimits` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--ulimit` option to [docker run](https://docs.docker.com/engine/reference/run/).
     * - _Required_: No
     * - _Type_: Array of [Ulimit](./aws-properties-batch-jobdefinition-ulimit.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-ulimits */
    "Ulimits"?: Ulimit[];
    /**
     * - The user name to use inside the container. This parameter maps to `User` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--user` option to [docker run](https://docs.docker.com/engine/reference/run/).
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-user */
    "User"?: string | Intrinsic;
    /**
     * - This parameter is deprecated, use `resourceRequirements` to specify the vCPU requirements for the job definition. It's not supported for jobs running on Fargate resources. For jobs running on Amazon EC2 resources, it specifies the number of vCPUs reserved for the job.
     * - Each vCPU is equivalent to 1,024 CPU shares. This parameter maps to `CpuShares` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--cpu-shares` option to [docker run](https://docs.docker.com/engine/reference/run/). The number of vCPUs must be specified but can be specified in several places. You must specify it at least once for each node.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-vcpus */
    "Vcpus"?: number | Intrinsic;
    /**
     * - A list of data volumes used in a job.
     * - _Required_: No
     * - _Type_: Array of [Volume](./aws-properties-batch-jobdefinition-volume.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties-volumes */
    "Volumes"?: Volume[];
}

/**
 * The properties for a task definition that describes the container and volume definitions of an Amazon ECS task. You can specify which Docker images to use, the required resources, and other configurations related to launching the task definition through an Amazon ECS service or task.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface MultiNodeEcsTaskProperties {
    /**
     * - This object is a list of containers.
     * - _Required_: No
     * - _Type_: Array of [TaskContainerProperties](./aws-properties-batch-jobdefinition-taskcontainerproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodeecstaskproperties-containers */
    "Containers"?: TaskContainerProperties[];
    /**
     * - Determines whether execute command functionality is turned on for this task. If `true`, execute command functionality is turned on all the containers in the task.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodeecstaskproperties-enableexecutecommand */
    "EnableExecuteCommand"?: boolean | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the execution role that AWS Batch can assume. For jobs that run on Fargate resources, you must provide an execution role. For more information, see [AWS Batch execution IAM role](https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html) in the _AWS Batch User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodeecstaskproperties-executionrolearn */
    "ExecutionRoleArn"?: string | Intrinsic;
    /**
     * - The IPC resource namespace to use for the containers in the task. The valid values are `host`, `task`, or `none`.
     * - If `host` is specified, all containers within the tasks that specified the `host` IPC mode on the same container instance share the same IPC resources with the host Amazon EC2 instance.
     * - If `task` is specified, all containers within the specified `task` share the same IPC resources.
     * - If `none` is specified, the IPC resources within the containers of a task are private, and are not shared with other containers in a task or on the container instance.
     * - If no value is specified, then the IPC resource namespace sharing depends on the Docker daemon setting on the container instance. For more information, see [IPC settings](https://docs.docker.com/engine/reference/run/#ipc-settings---ipc) in the Docker run reference.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodeecstaskproperties-ipcmode */
    "IpcMode"?: string | Intrinsic;
    /**
     * - The process namespace to use for the containers in the task. The valid values are `host` or `task`. For example, monitoring sidecars might need `pidMode` to access information about other containers running in the same task.
     * - If `host` is specified, all containers within the tasks that specified the `host` PID mode on the same container instance share the process namespace with the host Amazon EC2 instance.
     * - If `task` is specified, all containers within the specified task share the same process namespace.
     * - If no value is specified, the default is a private namespace for each container. For more information, see [PID settings](https://docs.docker.com/engine/reference/run/#pid-settings---pid) in the Docker run reference.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodeecstaskproperties-pidmode */
    "PidMode"?: string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) that's associated with the Amazon ECS task.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodeecstaskproperties-taskrolearn */
    "TaskRoleArn"?: string | Intrinsic;
    /**
     * - A list of volumes that are associated with the job.
     * - _Required_: No
     * - _Type_: Array of [Volume](./aws-properties-batch-jobdefinition-volume.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodeecstaskproperties-volumes */
    "Volumes"?: Volume[];
}

/**
 * An object that contains the properties for the Amazon ECS resources of a job.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface MultiNodeEcsProperties {
    /**
     * - An object that contains the properties for the Amazon ECS task definition of a job.
     * - _Required_: Yes
     * - _Type_: Array of [MultiNodeEcsTaskProperties](./aws-properties-batch-jobdefinition-multinodeecstaskproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-multinodeecsproperties-taskproperties */
    "TaskProperties": MultiNodeEcsTaskProperties[];
}

/**
 * This is an object that represents the properties of the node range for a multi-node parallel job.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface NodeRangeProperty {
    /**
     * - Contains a list of consumable resources required by a job.
     * - _Required_: No
     * - _Type_: [ConsumableResourceProperties](./aws-properties-batch-jobdefinition-consumableresourceproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-noderangeproperty-consumableresourceproperties */
    "ConsumableResourceProperties"?: ConsumableResourceProperties;
    /**
     * - The container details for the node range.
     * - _Required_: No
     * - _Type_: [MultiNodeContainerProperties](./aws-properties-batch-jobdefinition-multinodecontainerproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-noderangeproperty-container */
    "Container"?: MultiNodeContainerProperties;
    /**
     * - This is an object that represents the properties of the node range for a multi-node parallel job.
     * - _Required_: No
     * - _Type_: [MultiNodeEcsProperties](./aws-properties-batch-jobdefinition-multinodeecsproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-noderangeproperty-ecsproperties */
    "EcsProperties"?: MultiNodeEcsProperties;
    /**
     * - This is an object that represents the properties of the node range for a multi-node parallel job.
     * - _Required_: No
     * - _Type_: [EksProperties](./aws-properties-batch-jobdefinition-eksproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-noderangeproperty-eksproperties */
    "EksProperties"?: EksProperties;
    /**
     * - The instance types of the underlying host infrastructure of a multi-node parallel job.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-noderangeproperty-instancetypes */
    "InstanceTypes"?: (string | Intrinsic)[];
    /**
     * - The range of nodes, using node index values. A range of `0:3` indicates nodes with index values of `0` through `3`. If the starting range value is omitted (`:n`), then `0` is used to start the range. If the ending range value is omitted (`n:`), then the highest possible node index is used to end the range. Your accumulative node ranges must account for all nodes (`0:n`). You can nest node ranges (for example, `0:10` and `4:5`). In this case, the `4:5` range properties override the `0:10` properties.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-noderangeproperty-targetnodes */
    "TargetNodes": string | Intrinsic;
}

/**
 * An object that represents the node properties of a multi-node parallel job.
 * ###### Note
 * 
 * Node properties can't be specified for Amazon EKS based job definitions.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface NodeProperties {
    /**
     * - Specifies the node index for the main node of a multi-node parallel job. This node index value must be fewer than the number of nodes.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-nodeproperties-mainnode */
    "MainNode": number | Intrinsic;
    /**
     * - A list of node ranges and their properties that are associated with a multi-node parallel job.
     * - _Required_: Yes
     * - _Type_: Array of [NodeRangeProperty](./aws-properties-batch-jobdefinition-noderangeproperty.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-nodeproperties-noderangeproperties */
    "NodeRangeProperties": NodeRangeProperty[];
    /**
     * - The number of nodes that are associated with a multi-node parallel job.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-nodeproperties-numnodes */
    "NumNodes": number | Intrinsic;
}

/**
 * The `AWS::Batch::JobDefinition` resource specifies the parameters for an AWS Batch job definition. For more information, see [Job Definitions](https://docs.aws.amazon.com/batch/latest/userguide/job_definitions.html) in the _AWS Batch User Guide_ .
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html */

export interface BatchJobDefinition extends ResourceAttributes {
    "Type": "AWS::Batch::JobDefinition";
    "Properties": {
        /**
         * - Contains a list of consumable resources required by the job.
         * - _Required_: No
         * - _Type_: [ConsumableResourceProperties](./aws-properties-batch-jobdefinition-consumableresourceproperties.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-consumableresourceproperties */
        "ConsumableResourceProperties"?: ConsumableResourceProperties;
        /**
         * - An object with properties specific to Amazon ECS-based jobs. When `containerProperties` is used in the job definition, it can't be used in addition to `eksProperties`, `ecsProperties`, or `nodeProperties`.
         * - _Required_: No
         * - _Type_: [ContainerProperties](./aws-properties-batch-jobdefinition-containerproperties.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-containerproperties */
        "ContainerProperties"?: ContainerProperties;
        /**
         * - An object that contains the properties for the Amazon ECS resources of a job.When `ecsProperties` is used in the job definition, it can't be used in addition to `containerProperties`, `eksProperties`, or `nodeProperties`.
         * - _Required_: No
         * - _Type_: [EcsProperties](./aws-properties-batch-jobdefinition-ecsproperties.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-ecsproperties */
        "EcsProperties"?: EcsProperties;
        /**
         * - An object with properties that are specific to Amazon EKS-based jobs. When `eksProperties` is used in the job definition, it can't be used in addition to `containerProperties`, `ecsProperties`, or `nodeProperties`.
         * - _Required_: No
         * - _Type_: [EksProperties](./aws-properties-batch-jobdefinition-eksproperties.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-eksproperties */
        "EksProperties"?: EksProperties;
        /**
         * - The name of the job definition.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-jobdefinitionname */
        "JobDefinitionName"?: string | Intrinsic;
        /**
         * - An object with properties that are specific to multi-node parallel jobs. When `nodeProperties` is used in the job definition, it can't be used in addition to `containerProperties`, `ecsProperties`, or `eksProperties`.
         * - _Required_: No
         * - _Type_: [NodeProperties](./aws-properties-batch-jobdefinition-nodeproperties.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-nodeproperties */
        "NodeProperties"?: NodeProperties;
        /**
         * - Default parameters or parameter substitution placeholders that are set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a `SubmitJob` request override any corresponding parameter defaults from the job definition. For more information about specifying parameters, see [Job definition parameters](https://docs.aws.amazon.com/batch/latest/userguide/job_definition_parameters.html) in the _AWS Batch User Guide_.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `.*`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-parameters */
        "Parameters"?: Record<string, string | Intrinsic>;
        /**
         * - The platform capabilities required by the job definition. If no value is specified, it defaults to `EC2`. Jobs run on Fargate resources specify `FARGATE`.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-platformcapabilities */
        "PlatformCapabilities"?: (string | Intrinsic)[];
        /**
         * - Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the tasks when the tasks are created. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the `FAILED` state.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-propagatetags */
        "PropagateTags"?: boolean | Intrinsic;
        /**
         * - The retry strategy to use for failed jobs that are submitted with this job definition.
         * - _Required_: No
         * - _Type_: [RetryStrategy](./aws-properties-batch-jobdefinition-retrystrategy.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-retrystrategy */
        "RetryStrategy"?: RetryStrategy;
        /**
         * - The scheduling priority of the job definition. This only affects jobs in job queues with a fair-share policy. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority.
         * - _Required_: No
         * - _Type_: Integer
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-schedulingpriority */
        "SchedulingPriority"?: number | Intrinsic;
        /**
         * - The tags that are applied to the job definition.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `.*`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-tags */
        "Tags"?: Record<string, string | Intrinsic>;
        /**
         * - The timeout time for jobs that are submitted with this job definition. After the amount of time you specify passes, AWS Batch terminates your jobs if they aren't finished.
         * - _Required_: No
         * - _Type_: [JobTimeout](./aws-properties-batch-jobdefinition-jobtimeout.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-timeout */
        "Timeout"?: JobTimeout;
        /**
         * - The type of job definition. For more information about multi-node parallel jobs, see [Creating a multi-node parallel job definition](https://docs.aws.amazon.com/batch/latest/userguide/multi-node-job-def.html) in the _AWS Batch User Guide_.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `container | multinode`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-batch-jobdefinition.html#cfn-batch-jobdefinition-type */
        "Type": string | Intrinsic;
    };
}