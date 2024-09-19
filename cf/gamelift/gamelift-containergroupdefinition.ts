import type { Intrinsic } from '../intrinsic/index.js' /**
 * A label that you can assign to a Amazon GameLift resource.
 * **Learn more**
 * [Tagging AWS Resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the _AWS General Reference_
 * [AWS Tagging Strategies](https://aws.amazon.com/answers/account-management/aws-tagging-strategies/)
 * **Related actions**
 * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html */

export interface Tag {
  /**
   * - The key for a developer-defined key value pair for tagging an AWS resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-tag-key */
  Key: string | Intrinsic
  /**
   * - The value for a developer-defined key value pair for tagging an AWS resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-tag-value */
  Value: string | Intrinsic
}

/**
 * **This data type is used with the Amazon GameLift containers feature, which is currently in public preview.**
 * A container's dependency on another container in the same container group. The dependency impacts how the dependent container is able to start or shut down based the status of the other container.
 * For example, ContainerA is configured with the following dependency: a `START` dependency on ContainerB. This means that ContainerA can't start until ContainerB has started. It also means that ContainerA must shut down before ContainerB.
 * **Part of:** ContainerDefinition
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html */

export interface ContainerDependency {
  /**
   * - The condition that the dependency container must reach before the dependent container can start. Valid conditions include:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `START | COMPLETE | SUCCESS | HEALTHY`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerdependency-condition */
  Condition: string | Intrinsic
  /**
   * - A descriptive label for the container definition that this container depends on.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerdependency-containername */
  ContainerName: string | Intrinsic
}

/**
 * **This data type is used with the Amazon GameLift containers feature, which is currently in public preview.**
 * An environment variable to set inside a container, in the form of a key-value pair.
 * **Related data type:** ContainerDefinition$Environment
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html */

export interface ContainerEnvironment {
  /**
   * - The environment variable name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerenvironment-name */
  Name: string | Intrinsic
  /**
   * - The environment variable value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerenvironment-value */
  Value: string | Intrinsic
}

/**
 * Instructions on when and how to check the health of a container in a container fleet. When health check properties are set in a container definition, they override any Docker health checks in the container image. For more information on container health checks, see [HealthCheck command](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_HealthCheck.html#ECS-Type-HealthCheck-command) in the _Amazon Elastic Container Service API_.
 * The following example instructions tell the container to wait 100 seconds after launch before counting failed health checks, then initiate the health check command every 60 seconds. After issuing the health check command, wait 10 seconds for it to succeed. If it fails, retry the command 3 times before considering the container to be unhealthy.
 * `{"Command": [ "CMD-SHELL", "ps cax | grep "processmanager" || exit 1" ], "Interval": 300, "Timeout": 30, "Retries": 5, "StartPeriod": 100 }`
 * **Part of:** ContainerDefinition$HealthCheck
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html */

export interface ContainerHealthCheck {
  /**
   * - A string array that specifies the command that the container runs to determine if it's healthy.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `255 | 20`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerhealthcheck-command */
  Command: (string | Intrinsic)[]
  /**
   * - The time period (in seconds) between each health check.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `60`
   * - _Maximum_: `300`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerhealthcheck-interval */
  Interval?: number | Intrinsic
  /**
   * - The number of times to retry a failed health check before the container is considered unhealthy. The first run of the command does not count as a retry.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `5`
   * - _Maximum_: `10`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerhealthcheck-retries */
  Retries?: number | Intrinsic
  /**
   * - The optional grace period (in seconds) to give a container time to bootstrap before the first failed health check counts toward the number of retries.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `300`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerhealthcheck-startperiod */
  StartPeriod?: number | Intrinsic
  /**
   * - The time period (in seconds) to wait for a health check to succeed before a failed health check is counted.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `30`
   * - _Maximum_: `60`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerhealthcheck-timeout */
  Timeout?: number | Intrinsic
}

/**
 * The `MemoryLimits` property type specifies Property description not available. for an [AWS::GameLift::ContainerGroupDefinition](./aws-resource-gamelift-containergroupdefinition.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html */

export interface MemoryLimits {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `4`
   * - _Maximum_: `1024000`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-memorylimits-hardlimit */
  HardLimit?: number | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `4`
   * - _Maximum_: `1024000`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-memorylimits-softlimit */
  SoftLimit?: number | Intrinsic
}

/**
 * **This data type is used with the Amazon GameLift containers feature, which is currently in public preview.**
 * A set of one or more port numbers that can be opened on the container.
 * **Part of:** ContainerPortConfiguration
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html */

export interface ContainerPortRange {
  /**
   * - A starting value for the range of allowed port numbers.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `60000`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerportrange-fromport */
  FromPort: number | Intrinsic
  /**
   * - The network protocol that these ports support.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `TCP | UDP`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerportrange-protocol */
  Protocol: string | Intrinsic
  /**
   * - An ending value for the range of allowed port numbers. Port numbers are end-inclusive. This value must be equal to or greater than `FromPort`.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `60000`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerportrange-toport */
  ToPort: number | Intrinsic
}

/**
 * The `PortConfiguration` property type specifies Property description not available. for an [AWS::GameLift::ContainerGroupDefinition](./aws-resource-gamelift-containergroupdefinition.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html */

export interface PortConfiguration {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Array of [ContainerPortRange](./aws-properties-gamelift-containergroupdefinition-containerportrange.html)
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-portconfiguration-containerportranges */
  ContainerPortRanges: ContainerPortRange[]
}

/**
 * **This data type is used with the Amazon GameLift containers feature, which is currently in public preview.**
 * Describes a container in a container fleet, the resources available to the container, and the commands that are run when the container starts. Container properties can't be updated. To change a property, create a new container group definition. See also ContainerDefinitionInput.
 * **Part of:** [AWS::GameLift::ContainerGroupDefinition](./aws-resource-gamelift-containergroupdefinition.html)
 * **Returned by:** DescribeContainerGroupDefinition, ListContainerGroupDefinitions
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html */

export interface ContainerDefinition {
  /**
   * - A command that's passed to the container on startup. Each argument for the command is an additional string in the array. See the [ContainerDefinition::command](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html#ECS-Type-ContainerDefinition-command) parameter in the _Amazon Elastic Container Service API reference._
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `255 | 20`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-command */
  Command?: (string | Intrinsic)[]
  /**
   * - The container definition identifier. Container names are unique within a container group definition.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-containername */
  ContainerName: string | Intrinsic
  /**
   * - The number of CPU units that are reserved for the container. Note: 1 vCPU unit equals 1024 CPU units. If no resources are reserved, the container shares the total CPU limit for the container group.
   * - **Related data type:** ContainerGroupDefinition$TotalCpuLimit
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `10240`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-cpu */
  Cpu?: number | Intrinsic
  /**
   * - Indicates that the container relies on the status of other containers in the same container group during its startup and shutdown sequences. A container might have dependencies on multiple containers.
   * - _Required_: No
   * - _Type_: Array of [ContainerDependency](./aws-properties-gamelift-containergroupdefinition-containerdependency.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-dependson */
  DependsOn?: ContainerDependency[]
  /**
   * - The entry point that's passed to the container on startup. If there are multiple arguments, each argument is an additional string in the array. See the [ContainerDefinition::entryPoint](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html#ECS-Type-ContainerDefinition-entryPoint) parameter in the _Amazon Elastic Container Service API Reference_.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `1024 | 20`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-entrypoint */
  EntryPoint?: (string | Intrinsic)[]
  /**
   * - A set of environment variables that's passed to the container on startup. See the [ContainerDefinition::environment](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html#ECS-Type-ContainerDefinition-environment) parameter in the _Amazon Elastic Container Service API Reference_.
   * - _Required_: No
   * - _Type_: Array of [ContainerEnvironment](./aws-properties-gamelift-containergroupdefinition-containerenvironment.html)
   * - _Minimum_: `1`
   * - _Maximum_: `20`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-environment */
  Environment?: ContainerEnvironment[]
  /**
   * - Indicates whether the container is vital to the container group. If an essential container fails, the entire container group is restarted.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-essential */
  Essential?: boolean | Intrinsic
  /**
   * - A configuration for a non-terminal health check. A container, which automatically restarts if it stops functioning, also restarts if it fails this health check. If an essential container in the daemon group fails a health check, the entire container group is restarted. The essential container in the replica group doesn't use this health check mechanism, because the Amazon GameLift Agent automatically handles the task.
   * - _Required_: No
   * - _Type_: [ContainerHealthCheck](./aws-properties-gamelift-containergroupdefinition-containerhealthcheck.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-healthcheck */
  HealthCheck?: ContainerHealthCheck
  /**
   * - The URI to the image that $short; copied and deployed to a container fleet. For a more specific identifier, see `ResolvedImageDigest`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9-_\.@\/:]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-imageuri */
  ImageUri: string | Intrinsic
  /**
   * - The amount of memory that Amazon GameLift makes available to the container. If memory limits aren't set for an individual container, the container shares the container group's total memory allocation.
   * - **Related data type:** ContainerGroupDefinition$TotalMemoryLimit
   * - _Required_: No
   * - _Type_: [MemoryLimits](./aws-properties-gamelift-containergroupdefinition-memorylimits.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-memorylimits */
  MemoryLimits?: MemoryLimits
  /**
   * - Defines the ports that are available to assign to processes in the container. For example, a game server process requires a container port to allow game clients to connect to it. Container ports aren't directly accessed by inbound traffic. Amazon GameLift maps these container ports to externally accessible connection ports, which are assigned as needed from the container fleet's `ConnectionPortRange`.
   * - _Required_: No
   * - _Type_: [PortConfiguration](./aws-properties-gamelift-containergroupdefinition-portconfiguration.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-portconfiguration */
  PortConfiguration?: PortConfiguration
  /**
   * - A unique and immutable identifier for the container image that is deployed to a container fleet. The digest is a SHA 256 hash of the container image manifest.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^sha256:[a-fA-F0-9]{64}$`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-resolvedimagedigest */
  ResolvedImageDigest?: string | Intrinsic
  /**
   * - The directory in the container where commands are run. See the [ContainerDefinition::workingDirectory](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html#ECS-Type-ContainerDefinition-workingDirectory) parameter in the _Amazon Elastic Container Service API Reference_.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinition-workingdirectory */
  WorkingDirectory?: string | Intrinsic
}

/**
 * **This data type is used with the Amazon GameLift containers feature, which is currently in public preview.**
 * The properties that describe a container group resource. Container group definition properties can't be updated. To change a property, create a new container group definition.
 * **Used with:** CreateContainerGroupDefinition
 * **Returned by:** DescribeContainerGroupDefinition, ListContainerGroupDefinitions
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html */

export interface GameLiftContainerGroupDefinition {
  Type: 'AWS::GameLift::ContainerGroupDefinition'
  Properties: {
    /**
     * - The set of container definitions that are included in the container group.
     * - _Required_: Yes
     * - _Type_: Array of [ContainerDefinition](./aws-properties-gamelift-containergroupdefinition-containerdefinition.html)
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerdefinitions */
    ContainerDefinitions: ContainerDefinition[]
    /**
     * - A descriptive identifier for the container group definition. The name value is unique in an AWS Region.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-name */
    Name: string | Intrinsic
    /**
     * - The platform required for all containers in the container group definition.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `AMAZON_LINUX_2023`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-operatingsystem */
    OperatingSystem: string | Intrinsic
    /**
     * - The method for deploying the container group across fleet instances. A replica container group might have multiple copies on each fleet instance. A daemon container group maintains only one copy per fleet instance.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `REPLICA | DAEMON`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-schedulingstrategy */
    SchedulingStrategy?: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-gamelift-containergroupdefinition-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-tags */
    Tags?: Tag[]
    /**
     * - The amount of CPU units on a fleet instance to allocate for the container group. All containers in the group share these resources. This property is an integer value in CPU units (1 vCPU is equal to 1024 CPU units).
     * - You can set additional limits for each ContainerDefinition in the group. If individual containers have limits, this value must be equal to or greater than the sum of all container-specific CPU limits in the group.
     * - For more details on memory allocation, see the [Container fleet design guide](https://docs.aws.amazon.com/gamelift/latest/developerguide/containers-design-fleet).
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `128`
     * - _Maximum_: `10240`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-totalcpulimit */
    TotalCpuLimit: number | Intrinsic
    /**
     * - The amount of memory (in MiB) on a fleet instance to allocate for the container group. All containers in the group share these resources.
     * - You can set additional limits for each ContainerDefinition in the group. If individual containers have limits, this value must meet the following requirements:
     * - For more details on memory allocation, see the [Container fleet design guide](https://docs.aws.amazon.com/gamelift/latest/developerguide/containers-design-fleet).
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `4`
     * - _Maximum_: `1024000`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-totalmemorylimit */
    TotalMemoryLimit: number | Intrinsic
  }
}
