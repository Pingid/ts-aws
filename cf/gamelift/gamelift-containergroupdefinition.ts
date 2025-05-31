import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A label that you can assign to a Amazon GameLift Servers resource.
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
    "Key": string | Intrinsic;
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
    "Value": string | Intrinsic;
}

/**
 * A container's dependency on another container in the same container group. The dependency impacts how the dependent container is able to start or shut down based the status of the other container.
 * For example, _ContainerA_ is configured with the following dependency: a `START` dependency on _ContainerB_. This means that _ContainerA_ can't start until _ContainerB_ has started. It also means that _ContainerA_ must shut down before _ContainerB_.
 * **Part of:**[GameServerContainerDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinition.html), [GameServerContainerDefinitionInput](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinitionInput.html), [SupportContainerDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinition.html), [SupportContainerDefinitionInput](https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinitionInput.html)
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html */

export interface ContainerDependency {
    /**
     * - The condition that the dependency container must reach before the dependent container can start. Valid conditions include:
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `START | COMPLETE | SUCCESS | HEALTHY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerdependency-condition */
    "Condition": string | Intrinsic;
    /**
     * - A descriptive label for the container definition that this container depends on.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerdependency-containername */
    "ContainerName": string | Intrinsic;
}

/**
 * An environment variable to set inside a container, in the form of a key-value pair.
 * **Part of:**[GameServerContainerDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinition.html), [GameServerContainerDefinitionInput](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinitionInput.html), [SupportContainerDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinition.html), [SupportContainerDefinitionInput](https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinitionInput.html)
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
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerenvironment-name */
    "Name": string | Intrinsic;
    /**
     * - The environment variable value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerenvironment-value */
    "Value": string | Intrinsic;
}

/**
 * A mount point that binds a container to a file or directory on the host system.
 * **Part of:**[GameServerContainerDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinition.html), [https://docs.aws.amazon.com/gamelift/latest/apireference/API\_GameServerContainerDefinitionInput.html](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinitionInput.html), [SupportContainerDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinition.html), [https://docs.aws.amazon.com/gamelift/latest/apireference/API\_SupportContainerDefinitionInput.html](https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinitionInput.html)
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html */

export interface ContainerMountPoint {
    /**
     * - The type of access for the container.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `READ_ONLY | READ_AND_WRITE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containermountpoint-accesslevel */
    "AccessLevel"?: string | Intrinsic;
    /**
     * - The mount path on the container. If this property isn't set, the instance path is used.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(\/+[^\/]+\/*)+$`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containermountpoint-containerpath */
    "ContainerPath"?: string | Intrinsic;
    /**
     * - The path to the source file or directory.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^\/[\s\S]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containermountpoint-instancepath */
    "InstancePath": string | Intrinsic;
}

/**
 * Instructions on when and how to check the health of a support container in a container fleet. These properties override any Docker health checks that are set in the container image. For more information on container health checks, see [HealthCheck command](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_HealthCheck.html#ECS-Type-HealthCheck-command) in the _Amazon Elastic Container Service API_. Game server containers don't have a health check parameter; Amazon GameLift Servers automatically handles health checks for these containers.
 * The following example instructs the container to initiate a health check command every 60 seconds and wait 10 seconds for it to succeed. If it fails, retry the command 3 times before flagging the container as unhealthy. It also tells the container to wait 100 seconds after launch before counting failed health checks.
 * `{"Command": [ "CMD-SHELL", "ps cax | grep "processmanager" || exit 1" ], "Interval": 60, "Timeout": 10, "Retries": 3, "StartPeriod": 100 }`
 * **Part of:**[SupportContainerDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinition.html), [SupportContainerDefinitionInput](https://docs.aws.amazon.com/gamelift/latest/apireference/API_SupportContainerDefinitionInput.html)
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html */

export interface ContainerHealthCheck {
    /**
     * - A string array that specifies the command that the container runs to determine if it's healthy.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1 | 1`
     * - _Maximum_: `255 | 20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerhealthcheck-command */
    "Command": (string | Intrinsic)[];
    /**
     * - The time period (in seconds) between each health check.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `60`
     * - _Maximum_: `300`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerhealthcheck-interval */
    "Interval"?: number | Intrinsic;
    /**
     * - The number of times to retry a failed health check before flagging the container unhealthy. The first run of the command does not count as a retry.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `5`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerhealthcheck-retries */
    "Retries"?: number | Intrinsic;
    /**
     * - The optional grace period (in seconds) to give a container time to bootstrap before the first failed health check counts toward the number of retries.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `300`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerhealthcheck-startperiod */
    "StartPeriod"?: number | Intrinsic;
    /**
     * - The time period (in seconds) to wait for a health check to succeed before counting a failed health check.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `30`
     * - _Maximum_: `60`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerhealthcheck-timeout */
    "Timeout"?: number | Intrinsic;
}

/**
 * Describes a support container in a container group. A support container might be in a game server container group or a per-instance container group. Support containers don't run game server processes.
 * You can update a support container definition and deploy the updates to an existing fleet. When creating or updating a game server container group definition, use the property [GameServerContainerDefinitionInput](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinitionInput.html).
 * **Part of:** [ContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerGroupDefinition.html)
 * **Returned by:**[DescribeContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeContainerGroupDefinition.html), [ListContainerGroupDefinitions](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListContainerGroupDefinitions.html), [UpdateContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateContainerGroupDefinition.html)
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html */

export interface SupportContainerDefinition {
    /**
     * - The container definition identifier. Container names are unique within a container group definition.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-supportcontainerdefinition-containername */
    "ContainerName": string | Intrinsic;
    /**
     * - Indicates that the container relies on the status of other containers in the same container group during its startup and shutdown sequences. A container might have dependencies on multiple containers.
     * - _Required_: No
     * - _Type_: Array of [ContainerDependency](./aws-properties-gamelift-containergroupdefinition-containerdependency.html)
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-supportcontainerdefinition-dependson */
    "DependsOn"?: ContainerDependency[];
    /**
     * - A set of environment variables that's passed to the container on startup. See the [ContainerDefinition::environment](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html#ECS-Type-ContainerDefinition-environment) parameter in the _Amazon Elastic Container Service API Reference_.
     * - _Required_: No
     * - _Type_: Array of [ContainerEnvironment](./aws-properties-gamelift-containergroupdefinition-containerenvironment.html)
     * - _Minimum_: `1`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-supportcontainerdefinition-environmentoverride */
    "EnvironmentOverride"?: ContainerEnvironment[];
    /**
     * - Indicates whether the container is vital to the container group. If an essential container fails, the entire container group restarts.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-supportcontainerdefinition-essential */
    "Essential"?: boolean | Intrinsic;
    /**
     * - A configuration for a non-terminal health check. A support container automatically restarts if it stops functioning or if it fails this health check.
     * - _Required_: No
     * - _Type_: [ContainerHealthCheck](./aws-properties-gamelift-containergroupdefinition-containerhealthcheck.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-supportcontainerdefinition-healthcheck */
    "HealthCheck"?: ContainerHealthCheck;
    /**
     * - The URI to the image that Amazon GameLift Servers deploys to a container fleet. For a more specific identifier, see `ResolvedImageDigest`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9-_\.@\/:]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-supportcontainerdefinition-imageuri */
    "ImageUri": string | Intrinsic;
    /**
     * - The amount of memory that Amazon GameLift Servers makes available to the container. If memory limits aren't set for an individual container, the container shares the container group's total memory allocation.
     * - **Related data type:** [ContainerGroupDefinition TotalMemoryLimitMebibytes](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerGroupDefinition.html)
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `4`
     * - _Maximum_: `1024000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-supportcontainerdefinition-memoryhardlimitmebibytes */
    "MemoryHardLimitMebibytes"?: number | Intrinsic;
    /**
     * - A mount point that binds a path inside the container to a file or directory on the host system and lets it access the file or directory.
     * - _Required_: No
     * - _Type_: Array of [ContainerMountPoint](./aws-properties-gamelift-containergroupdefinition-containermountpoint.html)
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-supportcontainerdefinition-mountpoints */
    "MountPoints"?: ContainerMountPoint[];
    /**
     * - A set of ports that allow access to the container from external users. Processes running in the container can bind to a one of these ports. Container ports aren't directly accessed by inbound traffic. Amazon GameLift Servers maps these container ports to externally accessible connection ports, which are assigned as needed from the container fleet's `ConnectionPortRange`.
     * - _Required_: No
     * - _Type_: [PortConfiguration](./aws-properties-gamelift-containergroupdefinition-portconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-supportcontainerdefinition-portconfiguration */
    "PortConfiguration"?: PortConfiguration;
    /**
     * - A unique and immutable identifier for the container image. The digest is a SHA 256 hash of the container image manifest.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^sha256:[a-fA-F0-9]{64}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-supportcontainerdefinition-resolvedimagedigest */
    "ResolvedImageDigest"?: string | Intrinsic;
    /**
     * - The number of vCPU units that are reserved for the container. If no resources are reserved, the container shares the total vCPU limit for the container group.
     * - **Related data type:** [ContainerGroupDefinition TotalVcpuLimit](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerGroupDefinition.html)
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-supportcontainerdefinition-vcpu */
    "Vcpu"?: number | Intrinsic;
}

/**
 * A set of one or more port numbers that can be opened on the container, and the supported network protocol.
 * **Part of:** [ContainerPortConfiguration](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerPortConfiguration.html)
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html */

export interface ContainerPortRange {
    /**
     * - A starting value for the range of allowed port numbers.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `60000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerportrange-fromport */
    "FromPort": number | Intrinsic;
    /**
     * - The network protocol that these ports support.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `TCP | UDP`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerportrange-protocol */
    "Protocol": string | Intrinsic;
    /**
     * - An ending value for the range of allowed port numbers. Port numbers are end-inclusive. This value must be equal to or greater than `FromPort`.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `60000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containerportrange-toport */
    "ToPort": number | Intrinsic;
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
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-portconfiguration-containerportranges */
    "ContainerPortRanges": ContainerPortRange[];
}

/**
 * Describes the game server container in an existing game server container group. A game server container identifies a container image with your game server build. A game server container is automatically considered essential; if an essential container fails, the entire container group restarts.
 * You can update a container definition and deploy the updates to an existing fleet. When creating or updating a game server container group definition, use the property [https://docs.aws.amazon.com/gamelift/latest/apireference/API\_GameServerContainerDefinitionInput](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GameServerContainerDefinitionInput).
 * **Part of:** [ContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ContainerGroupDefinition.html)
 * **Returned by:**[DescribeContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeContainerGroupDefinition.html), [ListContainerGroupDefinitions](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListContainerGroupDefinitions.html), [UpdateContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateContainerGroupDefinition.html)
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html */

export interface GameServerContainerDefinition {
    /**
     * - The container definition identifier. Container names are unique within a container group definition.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-gameservercontainerdefinition-containername */
    "ContainerName": string | Intrinsic;
    /**
     * - Indicates that the container relies on the status of other containers in the same container group during startup and shutdown sequences. A container might have dependencies on multiple containers.
     * - _Required_: No
     * - _Type_: Array of [ContainerDependency](./aws-properties-gamelift-containergroupdefinition-containerdependency.html)
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-gameservercontainerdefinition-dependson */
    "DependsOn"?: ContainerDependency[];
    /**
     * - A set of environment variables that's passed to the container on startup. See the [ContainerDefinition::environment](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html#ECS-Type-ContainerDefinition-environment) parameter in the _Amazon Elastic Container Service API Reference_.
     * - _Required_: No
     * - _Type_: Array of [ContainerEnvironment](./aws-properties-gamelift-containergroupdefinition-containerenvironment.html)
     * - _Minimum_: `1`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-gameservercontainerdefinition-environmentoverride */
    "EnvironmentOverride"?: ContainerEnvironment[];
    /**
     * - The URI to the image that Amazon GameLift Servers uses when deploying this container to a container fleet. For a more specific identifier, see `ResolvedImageDigest`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9-_\.@\/:]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-gameservercontainerdefinition-imageuri */
    "ImageUri": string | Intrinsic;
    /**
     * - A mount point that binds a path inside the container to a file or directory on the host system and lets it access the file or directory.
     * - _Required_: No
     * - _Type_: Array of [ContainerMountPoint](./aws-properties-gamelift-containergroupdefinition-containermountpoint.html)
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-gameservercontainerdefinition-mountpoints */
    "MountPoints"?: ContainerMountPoint[];
    /**
     * - The set of ports that are available to bind to processes in the container. For example, a game server process requires a container port to allow game clients to connect to it. Container ports aren't directly accessed by inbound traffic. Amazon GameLift Servers maps these container ports to externally accessible connection ports, which are assigned as needed from the container fleet's `ConnectionPortRange`.
     * - _Required_: No
     * - _Type_: [PortConfiguration](./aws-properties-gamelift-containergroupdefinition-portconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-gameservercontainerdefinition-portconfiguration */
    "PortConfiguration"?: PortConfiguration;
    /**
     * - A unique and immutable identifier for the container image. The digest is a SHA 256 hash of the container image manifest.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^sha256:[a-fA-F0-9]{64}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-gameservercontainerdefinition-resolvedimagedigest */
    "ResolvedImageDigest"?: string | Intrinsic;
    /**
     * - The Amazon GameLift Servers server SDK version that the game server is integrated with. Only game servers using 5.2.0 or higher are compatible with container fleets.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^\d+\.\d+\.\d+$`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-gameservercontainerdefinition-serversdkversion */
    "ServerSdkVersion": string | Intrinsic;
}

/**
 * The properties that describe a container group resource. You can update all properties of a container group definition properties. Updates to a container group definition are saved as new versions.
 * **Used with:** [CreateContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateContainerGroupDefinition.html)
 * **Returned by:**[DescribeContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeContainerGroupDefinition.html), [ListContainerGroupDefinitions](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ListContainerGroupDefinitions.html), [UpdateContainerGroupDefinition](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateContainerGroupDefinition.html)
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html */

export interface GameLiftContainerGroupDefinition extends ResourceAttributes {
    "Type": "AWS::GameLift::ContainerGroupDefinition";
    "Properties": {
        /**
         * - The type of container group. Container group type determines how Amazon GameLift Servers deploys the container group on each fleet instance.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `GAME_SERVER | PER_INSTANCE`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-containergrouptype */
        "ContainerGroupType"?: string | Intrinsic;
        /**
         * - The definition for the game server container in this group. This property is used only when the container group type is `GAME_SERVER`. This container definition specifies a container image with the game server build.
         * - _Required_: No
         * - _Type_: [GameServerContainerDefinition](./aws-properties-gamelift-containergroupdefinition-gameservercontainerdefinition.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-gameservercontainerdefinition */
        "GameServerContainerDefinition"?: GameServerContainerDefinition;
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
        "Name": string | Intrinsic;
        /**
         * - The platform that all containers in the container group definition run on.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `AMAZON_LINUX_2023`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-operatingsystem */
        "OperatingSystem": string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Integer
         * - _Minimum_: `0`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-sourceversionnumber */
        "SourceVersionNumber"?: number | Intrinsic;
        /**
         * - The set of definitions for support containers in this group. A container group definition might have zero support container definitions. Support container can be used in any type of container group.
         * - _Required_: No
         * - _Type_: Array of [SupportContainerDefinition](./aws-properties-gamelift-containergroupdefinition-supportcontainerdefinition.html)
         * - _Minimum_: `1`
         * - _Maximum_: `10`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-supportcontainerdefinitions */
        "SupportContainerDefinitions"?: SupportContainerDefinition[];
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-gamelift-containergroupdefinition-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-tags */
        "Tags"?: Tag[];
        /**
         * - The amount of memory (in MiB) on a fleet instance to allocate for the container group. All containers in the group share these resources.
         * - You can set a limit for each container definition in the group. If individual containers have limits, this total value must be greater than any individual container's memory limit.
         * - _Required_: Yes
         * - _Type_: Integer
         * - _Minimum_: `4`
         * - _Maximum_: `1024000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-totalmemorylimitmebibytes */
        "TotalMemoryLimitMebibytes": number | Intrinsic;
        /**
         * - The amount of vCPU units on a fleet instance to allocate for the container group (1 vCPU is equal to 1024 CPU units). All containers in the group share these resources. You can set a limit for each container definition in the group. If individual containers have limits, this total value must be equal to or greater than the sum of the limits for each container in the group.
         * - _Required_: Yes
         * - _Type_: Number
         * - _Minimum_: `0`
         * - _Maximum_: `10`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-totalvcpulimit */
        "TotalVcpuLimit": number | Intrinsic;
        /**
         * - An optional description that was provided for a container group definition update. Each version can have a unique description.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `1024`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-containergroupdefinition.html#cfn-gamelift-containergroupdefinition-versiondescription */
        "VersionDescription"?: string | Intrinsic;
    };
}