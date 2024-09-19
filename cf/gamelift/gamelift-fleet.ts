import type { Intrinsic } from '../intrinsic/index.js' /**
 * Amazon GameLift configuration options for your Anywhere fleets.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html */

export interface AnywhereConfiguration {
  /**
   * - The cost to run your fleet per hour. Amazon GameLift uses the provided cost of your fleet to balance usage in queues. For more information about queues, see [Setting up queues](https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-intro.html) in the _Amazon GameLift Developer Guide_.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^\d{1,5}(?:\.\d{1,5})?$`
   * - _Minimum_: `1`
   * - _Maximum_: `11`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-anywhereconfiguration-cost */
  Cost: string | Intrinsic
}

/**
 * Determines whether a TLS/SSL certificate is generated for a fleet. This feature must be enabled when creating the fleet. All instances in a fleet share the same certificate. The certificate can be retrieved by calling the [GameLift Server SDK](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html) operation `GetInstanceCertificate`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html */

export interface CertificateConfiguration {
  /**
   * - Indicates whether a TLS/SSL certificate is generated for a fleet.
   * - Valid values include:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `DISABLED | GENERATED`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-certificateconfiguration-certificatetype */
  CertificateType: string | Intrinsic
}

/**
 * A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an instance in a fleet. New game sessions are assigned an IP address/port number combination, which must fall into the fleet's allowed ranges. Fleets with custom game builds must have permissions explicitly set. For Realtime Servers fleets, GameLift automatically opens two port ranges, one for TCP messaging and one for UDP.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html */

export interface IpPermission {
  /**
   * - A starting value for a range of allowed port numbers.
   * - For fleets using Linux builds, only ports `22` and `1026-60000` are valid.
   * - For fleets using Windows builds, only ports `1026-60000` are valid.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `60000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-ippermission-fromport */
  FromPort: number | Intrinsic
  /**
   * - A range of allowed IP addresses. This value must be expressed in CIDR notation. Example: "`000.000.000.000/[subnet mask]`" or optionally the shortened version "`0.0.0.0/[subnet mask]`".
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `(^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(/([0-9]|[1-2][0-9]|3[0-2]))$)`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-ippermission-iprange */
  IpRange: string | Intrinsic
  /**
   * - The network communication protocol used by the fleet.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `TCP | UDP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-ippermission-protocol */
  Protocol: string | Intrinsic
  /**
   * - An ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be equal to or greater than `FromPort`.
   * - For fleets using Linux builds, only ports `22` and `1026-60000` are valid.
   * - For fleets using Windows builds, only ports `1026-60000` are valid.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `60000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-ippermission-toport */
  ToPort: number | Intrinsic
}

/**
 * A policy that limits the number of game sessions a player can create on the same fleet. This optional policy gives game owners control over how players can consume available game server resources. A resource creation policy makes the following statement: "An individual player can create a maximum number of new game sessions within a specified time period".
 * The policy is evaluated when a player tries to create a new game session. For example, assume you have a policy of 10 new game sessions and a time period of 60 minutes. On receiving a `CreateGameSession` request, Amazon GameLift checks that the player (identified by `CreatorId`) has created fewer than 10 game sessions in the past 60 minutes.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html */

export interface ResourceCreationLimitPolicy {
  /**
   * - A policy that puts limits on the number of game sessions that a player can create within a specified span of time. With this policy, you can control players' ability to consume available resources.
   * - The policy is evaluated when a player tries to create a new game session. On receiving a `CreateGameSession` request, Amazon GameLift checks that the player (identified by `CreatorId`) has created fewer than game session limit in the specified time period.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-resourcecreationlimitpolicy-newgamesessionspercreator */
  NewGameSessionsPerCreator?: number | Intrinsic
  /**
   * - The time span used in evaluating the resource creation limit policy.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-resourcecreationlimitpolicy-policyperiodinminutes */
  PolicyPeriodInMinutes?: number | Intrinsic
}

/**
 * **This operation has been expanded to use with the Amazon GameLift containers feature, which is currently in public preview.**
 * The set of port numbers to open on each instance in a container fleet. Connection ports are used by inbound traffic to connect with processes that are running in containers on the fleet.
 * **Part of:** [ContainerGroupsConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-containergroupsconfiguration), ContainerGroupsAttributes
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html */

export interface ConnectionPortRange {
  /**
   * - Starting value for the port range.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `60000`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-connectionportrange-fromport */
  FromPort: number | Intrinsic
  /**
   * - Ending value for the port. Port numbers are end-inclusive. This value must be equal to or greater than `FromPort`.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `60000`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-connectionportrange-toport */
  ToPort: number | Intrinsic
}

/**
 * **This data type is used with the Amazon GameLift containers feature, which is currently in public preview.**
 * Determines how many replica container groups that Amazon GameLift deploys to each instance in a container fleet.
 * Amazon GameLift calculates the maximum possible replica groups per instance based on the instance 's CPU and memory resources. When deploying a fleet, Amazon GameLift places replica container groups on each fleet instance based on the following:
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html */

export interface ContainerGroupsPerInstance {
  /**
   * - The desired number of replica container groups to place on each fleet instance.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `5000`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-containergroupsperinstance-desiredreplicacontainergroupsperinstance */
  DesiredReplicaContainerGroupsPerInstance?: number | Intrinsic
  /**
   * - The maximum possible number of replica container groups that each fleet instance can have.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `5000`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-containergroupsperinstance-maxreplicacontainergroupsperinstance */
  MaxReplicaContainerGroupsPerInstance?: number | Intrinsic
}

/**
 * Current resource capacity settings for managed EC2 fleets and container fleets. For multi-location fleets, location values might refer to a fleet's remote location or its home Region.
 * **Returned by:** [DescribeFleetCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html), [DescribeFleetLocationCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html), [UpdateFleetCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html)
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html */

export interface LocationCapacity {
  /**
   * - The number of Amazon EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits. Changes in desired instance value can take up to 1 minute to be reflected when viewing the fleet's capacity settings.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-locationcapacity-desiredec2instances */
  DesiredEC2Instances: number | Intrinsic
  /**
   * - The maximum number of instances that are allowed in the specified fleet location. If this parameter is not set, the default is 1.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-locationcapacity-maxsize */
  MaxSize: number | Intrinsic
  /**
   * - The minimum number of instances that are allowed in the specified fleet location. If this parameter is not set, the default is 0.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-locationcapacity-minsize */
  MinSize: number | Intrinsic
}

/**
 * A set of instructions for launching server processes on each instance in a fleet. Server processes run either an executable in a custom game build or a Realtime Servers script.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html */

export interface ServerProcess {
  /**
   * - The number of server processes using this configuration that run concurrently on each instance or container..
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-serverprocess-concurrentexecutions */
  ConcurrentExecutions: number | Intrinsic
  /**
   * - The location of a game build executable or Realtime script. Game builds and Realtime scripts are installed on instances at the root:
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([Cc]:\\game\S+|/local/game/\S+)`
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-serverprocess-launchpath */
  LaunchPath: string | Intrinsic
  /**
   * - An optional list of parameters to pass to the server executable or Realtime script on launch.
   * - Length Constraints: Minimum length of 1. Maximum length of 1024.
   * - Pattern: \[A-Za-z0-9\_:.+\\/\\\\\\- =@{},?'\\\[\\\]"\]+
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-serverprocess-parameters */
  Parameters?: string | Intrinsic
}

/**
 * Settings for a target-based scaling policy. A target-based policy tracks a particular fleet metric specifies a target value for the metric. As player usage changes, the policy triggers Amazon GameLift to adjust capacity so that the metric returns to the target value. The target configuration specifies settings as needed for the target based policy, including the target value.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html */

export interface TargetConfiguration {
  /**
   * - Desired value to use with a target-based scaling policy. The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).
   * - _Required_: Yes
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-targetconfiguration-targetvalue */
  TargetValue: number | Intrinsic
}

/**
 * **This data type is used with the Amazon GameLift containers feature, which is currently in public preview.**
 * Configuration details for a set of container groups, for use when creating a fleet with compute type `CONTAINER`.
 * **Used with:** CreateFleet
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html */

export interface ContainerGroupsConfiguration {
  /**
   * - A set of ports to allow inbound traffic, including game clients, to connect to processes running in the container fleet.
   * - Connection ports are dynamically mapped to container ports, which are assigned to individual processes running in a container. The connection port range must have enough ports to map to all container ports across a fleet instance. To calculate the minimum connection ports needed, use the following formula:
   * - _\[Total number of container ports as defined for containers in the replica container group\] \* \[Desired or calculated number of replica container groups per instance\] + \[Total number of container ports as defined for containers in the daemon container group\]_
   * - As a best practice, double the minimum number of connection ports.
   * - _Required_: Yes
   * - _Type_: [ConnectionPortRange](./aws-properties-gamelift-fleet-connectionportrange.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-containergroupsconfiguration-connectionportrange */
  ConnectionPortRange: ConnectionPortRange
  /**
   * - The list of container group definition names to deploy to a new container fleet.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `128 | 2`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-containergroupsconfiguration-containergroupdefinitionnames */
  ContainerGroupDefinitionNames: (string | Intrinsic)[]
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [ContainerGroupsPerInstance](./aws-properties-gamelift-fleet-containergroupsperinstance.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-containergroupsconfiguration-containergroupsperinstance */
  ContainerGroupsPerInstance?: ContainerGroupsPerInstance
}

/**
 * **This data type has been expanded to use with the Amazon GameLift containers feature, which is currently in public preview.**
 * A remote location where a multi-location fleet can deploy game servers for game hosting.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html */

export interface LocationConfiguration {
  /**
   * - An AWS Region code, such as `us-west-2`. For a list of supported Regions and Local Zones, see [Amazon GameLift service locations](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-regions.html) for managed hosting.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[A-Za-z0-9\-]+`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-locationconfiguration-location */
  Location: string | Intrinsic
  /**
   * - Current resource capacity settings for managed EC2 fleets and container fleets. For multi-location fleets, location values might refer to a fleet's remote location or its home Region.
   * - **Returned by:** [DescribeFleetCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html), [DescribeFleetLocationCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html), [UpdateFleetCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html)
   * - _Required_: No
   * - _Type_: [LocationCapacity](./aws-properties-gamelift-fleet-locationcapacity.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-locationconfiguration-locationcapacity */
  LocationCapacity?: LocationCapacity
}

/**
 * A collection of server process configurations that describe the set of processes to run on each instance in a fleet. Server processes run either an executable in a custom game build or a Realtime Servers script. GameLift launches the configured processes, manages their life cycle, and replaces them as needed. Each instance checks regularly for an updated runtime configuration.
 * A GameLift instance is limited to 50 processes running concurrently. To calculate the total number of processes in a runtime configuration, add the values of the `ConcurrentExecutions` parameter for each ServerProcess. Learn more about [Running Multiple Processes on a Fleet](https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html */

export interface RuntimeConfiguration {
  /**
   * - The maximum amount of time (in seconds) allowed to launch a new game session and have it report ready to host players. During this time, the game session is in status `ACTIVATING`. If the game session does not become active before the timeout, it is ended and the game session status is changed to `TERMINATED`.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-runtimeconfiguration-gamesessionactivationtimeoutseconds */
  GameSessionActivationTimeoutSeconds?: number | Intrinsic
  /**
   * - The number of game sessions in status `ACTIVATING` to allow on an instance or container. This setting limits the instance resources that can be used for new game activations at any one time.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `2147483647`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-runtimeconfiguration-maxconcurrentgamesessionactivations */
  MaxConcurrentGameSessionActivations?: number | Intrinsic
  /**
   * - A collection of server process configurations that identify what server processes to run on fleet computes.
   * - _Required_: No
   * - _Type_: Array of [ServerProcess](./aws-properties-gamelift-fleet-serverprocess.html)
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-runtimeconfiguration-serverprocesses */
  ServerProcesses?: ServerProcess[]
}

/**
 * Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by the combination of name and fleet ID.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html */

export interface ScalingPolicy {
  /**
   * - Comparison operator to use when measuring a metric against the threshold value.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `GreaterThanOrEqualToThreshold | GreaterThanThreshold | LessThanThreshold | LessThanOrEqualToThreshold`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-scalingpolicy-comparisonoperator */
  ComparisonOperator?: string | Intrinsic
  /**
   * - Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-scalingpolicy-evaluationperiods */
  EvaluationPeriods?: number | Intrinsic
  /**
   * - The fleet location.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[A-Za-z0-9\-]+`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-scalingpolicy-location */
  Location?: string | Intrinsic
  /**
   * - Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. For detailed descriptions of fleet metrics, see [Monitor Amazon GameLift with Amazon CloudWatch](https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html).
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ActivatingGameSessions | ActiveGameSessions | ActiveInstances | AvailableGameSessions | AvailablePlayerSessions | CurrentPlayerSessions | IdleInstances | PercentAvailableGameSessions | PercentIdleInstances | QueueDepth | WaitTime | ConcurrentActivatableGameSessions`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-scalingpolicy-metricname */
  MetricName: string | Intrinsic
  /**
   * - A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-scalingpolicy-name */
  Name: string | Intrinsic
  /**
   * - The type of scaling policy to create. For a target-based policy, set the parameter _MetricName_ to 'PercentAvailableGameSessions' and specify a _TargetConfiguration_. For a rule-based policy set the following parameters: _MetricName_, _ComparisonOperator_, _Threshold_, _EvaluationPeriods_, _ScalingAdjustmentType_, and _ScalingAdjustment_.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `RuleBased | TargetBased`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-scalingpolicy-policytype */
  PolicyType?: string | Intrinsic
  /**
   * - Amount of adjustment to make, based on the scaling adjustment type.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-scalingpolicy-scalingadjustment */
  ScalingAdjustment?: number | Intrinsic
  /**
   * - The type of adjustment to make to a fleet's instance count.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ChangeInCapacity | ExactCapacity | PercentChangeInCapacity`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-scalingpolicy-scalingadjustmenttype */
  ScalingAdjustmentType?: string | Intrinsic
  /**
   * - Current status of the scaling policy. The scaling policy can be in force only when in an `ACTIVE` status. Scaling policies can be suspended for individual fleets. If the policy is suspended for a fleet, the policy status does not change.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ACTIVE | UPDATE_REQUESTED | UPDATING | DELETE_REQUESTED | DELETING | DELETED | ERROR`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-scalingpolicy-status */
  Status?: string | Intrinsic
  /**
   * - An object that contains settings for a target-based scaling policy.
   * - _Required_: No
   * - _Type_: [TargetConfiguration](./aws-properties-gamelift-fleet-targetconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-scalingpolicy-targetconfiguration */
  TargetConfiguration?: TargetConfiguration
  /**
   * - Metric value used to trigger a scaling event.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-scalingpolicy-threshold */
  Threshold?: number | Intrinsic
  /**
   * - The current status of the fleet's scaling policies in a requested fleet location. The status `PENDING_UPDATE` indicates that an update was requested for the fleet but has not yet been completed for the location.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PENDING_UPDATE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-scalingpolicy-updatestatus */
  UpdateStatus?: string | Intrinsic
}

/**
 * The `AWS::GameLift::Fleet` resource creates an Amazon GameLift (GameLift) fleet to host custom game server or Realtime Servers. A fleet is a set of EC2 instances, configured with instructions to run game servers on each instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html */

export interface GameLiftFleet {
  Type: 'AWS::GameLift::Fleet'
  Properties: {
    /**
     * - Amazon GameLift Anywhere configuration options.
     * - _Required_: No
     * - _Type_: [AnywhereConfiguration](./aws-properties-gamelift-fleet-anywhereconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-anywhereconfiguration */
    AnywhereConfiguration?: AnywhereConfiguration
    /**
     * - Current resource capacity settings for managed EC2 fleets and container fleets. For multi-location fleets, location values might refer to a fleet's remote location or its home Region.
     * - **Returned by:** [DescribeFleetCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html), [DescribeFleetLocationCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html), [UpdateFleetCapacity](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html)
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ON_UPDATE | ON_CREATE_AND_UPDATE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-applycapacity */
    ApplyCapacity?: string | Intrinsic
    /**
     * - A unique identifier for a build to be deployed on the new fleet. If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a `READY` status. This fleet setting cannot be changed once the fleet is created.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Pattern_: `^build-\S+|^arn:.*:build/build-\S+`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-buildid */
    BuildId?: string | Intrinsic
    /**
     * - Prompts Amazon GameLift to generate a TLS/SSL certificate for the fleet. Amazon GameLift uses the certificates to encrypt traffic between game clients and the game servers running on Amazon GameLift. By default, the `CertificateConfiguration` is `DISABLED`. You can't change this property after you create the fleet.
     * - AWS Certificate Manager (ACM) certificates expire after 13 months. Certificate expiration can cause fleets to fail, preventing players from connecting to instances in the fleet. We recommend you replace fleets before 13 months, consider using fleet aliases for a smooth transition.
     * - _Required_: No
     * - _Type_: [CertificateConfiguration](./aws-properties-gamelift-fleet-certificateconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-certificateconfiguration */
    CertificateConfiguration?: CertificateConfiguration
    /**
     * - The type of compute resource used to host your game servers.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `EC2 | ANYWHERE | CONTAINER`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-computetype */
    ComputeType?: string | Intrinsic
    /**
     * - **This data type is used with the Amazon GameLift containers feature, which is currently in public preview.**
     * - Configuration details for a set of container groups, for use when creating a fleet with compute type `CONTAINER`.
     * - **Used with:** CreateFleet
     * - _Required_: No
     * - _Type_: [ContainerGroupsConfiguration](./aws-properties-gamelift-fleet-containergroupsconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-containergroupsconfiguration */
    ContainerGroupsConfiguration?: ContainerGroupsConfiguration
    /**
     * - A description for the fleet.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-description */
    Description?: string | Intrinsic
    /**
     * - The number of EC2 instances that you want this fleet to host. When creating a new fleet, GameLift automatically sets this value to "1" and initiates a single instance. Once the fleet is active, update this value to trigger GameLift to add or remove instances from the fleet.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-desiredec2instances */
    DesiredEC2Instances?: number | Intrinsic
    /**
     * - The IP address ranges and port settings that allow inbound traffic to access game server processes and other processes on this fleet. Set this parameter for EC2 and container fleets. You can leave this parameter empty when creating the fleet, but you must call UpdateFleetPortSettings to set it before players can connect to game sessions. As a best practice, we recommend opening ports for remote access only when you need them and closing them when you're finished. For Realtime Servers fleets, Amazon GameLift automatically sets TCP and UDP ranges.
     * - To manage inbound access for a container fleet, set this parameter to the same port numbers that you set for the fleet's connection port range. During the life of the fleet, update this parameter to control which connection ports are open to inbound traffic.
     * - _Required_: No
     * - _Type_: Array of [IpPermission](./aws-properties-gamelift-fleet-ippermission.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-ec2inboundpermissions */
    EC2InboundPermissions?: IpPermission[]
    /**
     * - The Amazon GameLift-supported Amazon EC2 instance type to use with EC2 and container fleets. Instance type determines the computing resources that will be used to host your game servers, including CPU, memory, storage, and networking capacity. See [Amazon Elastic Compute Cloud Instance Types](https://aws.amazon.com/ec2/instance-types/) for detailed descriptions of Amazon EC2 instance types.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.*..*$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-ec2instancetype */
    EC2InstanceType?: string | Intrinsic
    /**
     * - Indicates whether to use On-Demand or Spot instances for this fleet. By default, this property is set to `ON_DEMAND`. Learn more about when to use [On-Demand versus Spot Instances](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-ec2-instances.html#gamelift-ec2-instances-spot). This fleet property can't be changed after the fleet is created.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ON_DEMAND | SPOT`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-fleettype */
    FleetType?: string | Intrinsic
    /**
     * - A unique identifier for an IAM role with access permissions to other AWS services. Any application that runs on an instance in the fleet--including install scripts, server processes, and other processes--can use these permissions to interact with AWS resources that you own or have access to. For more information about using the role with your game server builds, see [Communicate with other AWS resources from your fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html). This attribute is used with fleets where `ComputeType` is "EC2" or "Container".
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws(-.*)?:[a-z-]+:(([a-z]+-)+[0-9])?:([0-9]{12})?:[^.]+$`
     * - _Minimum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-instancerolearn */
    InstanceRoleARN?: string | Intrinsic
    /**
     * - Indicates that fleet instances maintain a shared credentials file for the IAM role defined in `InstanceRoleArn`. Shared credentials allow applications that are deployed with the game server executable to communicate with other AWS resources. This property is used only when the game server is integrated with the server SDK version 5.x. For more information about using shared credentials, see [Communicate with other AWS resources from your fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html). This attribute is used with fleets where `ComputeType` is "EC2" or "Container".
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `SHARED_CREDENTIAL_FILE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-instancerolecredentialsprovider */
    InstanceRoleCredentialsProvider?: string | Intrinsic
    /**
     * - A set of remote locations to deploy additional instances to and manage as a multi-location fleet. Use this parameter when creating a fleet in AWS Regions that support multiple locations. You can add any AWS Region or Local Zone that's supported by Amazon GameLift. Provide a list of one or more AWS Region codes, such as `us-west-2`, or Local Zone names. When using this parameter, Amazon GameLift requires you to include your home location in the request. For a list of supported Regions and Local Zones, see [Amazon GameLift service locations](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-regions.html) for managed hosting.
     * - _Required_: No
     * - _Type_: Array of [LocationConfiguration](./aws-properties-gamelift-fleet-locationconfiguration.html)
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-locations */
    Locations?: LocationConfiguration[]
    /**
     * - The maximum number of instances that are allowed in the specified fleet location. If this parameter is not set, the default is 1.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-maxsize */
    MaxSize?: number | Intrinsic
    /**
     * - The name of an AWS CloudWatch metric group to add this fleet to. A metric group is used to aggregate the metrics for multiple fleets. You can specify an existing metric group name or set a new name to create a new metric group. A fleet can be included in only one metric group at a time.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-metricgroups */
    MetricGroups?: (string | Intrinsic)[]
    /**
     * - The minimum number of instances that are allowed in the specified fleet location. If this parameter is not set, the default is 0.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-minsize */
    MinSize?: number | Intrinsic
    /**
     * - A descriptive label that is associated with a fleet. Fleet names do not need to be unique.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-name */
    Name: string | Intrinsic
    /**
     * - The status of termination protection for active game sessions on the fleet. By default, this property is set to `NoProtection`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `FullProtection | NoProtection`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-newgamesessionprotectionpolicy */
    NewGameSessionProtectionPolicy?: string | Intrinsic
    /**
     * - Used when peering your Amazon GameLift fleet with a VPC, the unique identifier for the AWS account that owns the VPC. You can find your account ID in the AWS Management Console under account settings.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[0-9]{12}$`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-peervpcawsaccountid */
    PeerVpcAwsAccountId?: string | Intrinsic
    /**
     * - A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the [VPC Dashboard](https://console.aws.amazon.com/vpc/) in the AWS Management Console. Learn more about VPC peering in [VPC Peering with Amazon GameLift Fleets](https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^vpc-\S+`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-peervpcid */
    PeerVpcId?: string | Intrinsic
    /**
     * - A policy that limits the number of game sessions that an individual player can create on instances in this fleet within a specified span of time.
     * - _Required_: No
     * - _Type_: [ResourceCreationLimitPolicy](./aws-properties-gamelift-fleet-resourcecreationlimitpolicy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-resourcecreationlimitpolicy */
    ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy
    /**
     * - Instructions for how to launch and maintain server processes on instances in the fleet. The runtime configuration defines one or more server process configurations, each identifying a build executable or Realtime script file and the number of processes of that type to run concurrently.
     * - _Required_: Conditional
     * - _Type_: [RuntimeConfiguration](./aws-properties-gamelift-fleet-runtimeconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-runtimeconfiguration */
    RuntimeConfiguration?: RuntimeConfiguration
    /**
     * - Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by the combination of name and fleet ID.
     * - _Required_: No
     * - _Type_: Array of [ScalingPolicy](./aws-properties-gamelift-fleet-scalingpolicy.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-scalingpolicies */
    ScalingPolicies?: ScalingPolicy[]
    /**
     * - The unique identifier for a Realtime configuration script to be deployed on fleet instances. You can use either the script ID or ARN. Scripts must be uploaded to Amazon GameLift prior to creating the fleet. This fleet property cannot be changed later.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Pattern_: `^script-\S+|^arn:.*:script/script-\S+`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-fleet.html#cfn-gamelift-fleet-scriptid */
    ScriptId?: string | Intrinsic
  }
}
