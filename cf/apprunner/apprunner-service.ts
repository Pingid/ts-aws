import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Describes a custom encryption key that AWS App Runner uses to encrypt copies of the source repository and service logs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html */

export interface EncryptionConfiguration {
  /**
   * - The ARN of the KMS key that's used for encryption.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:aws(-[\w]+)*:kms:[a-z\-]+-[0-9]{1}:[0-9]{12}:key\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-encryptionconfiguration-kmskey */
  KmsKey: string | Intrinsic
}

/**
 * Describes the settings for the health check that AWS App Runner performs to monitor the health of a service.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html */

export interface HealthCheckConfiguration {
  /**
   * - The number of consecutive checks that must succeed before App Runner decides that the service is healthy.
   * - Default: `1`
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-healthcheckconfiguration-healthythreshold */
  HealthyThreshold?: number | Intrinsic
  /**
   * - The time interval, in seconds, between health checks.
   * - Default: `5`
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-healthcheckconfiguration-interval */
  Interval?: number | Intrinsic
  /**
   * - The URL that health check requests are sent to.
   * - `Path` is only applicable when you set `Protocol` to `HTTP`.
   * - Default: `"/"`
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-healthcheckconfiguration-path */
  Path?: string | Intrinsic
  /**
   * - The IP protocol that App Runner uses to perform health checks for your service.
   * - If you set `Protocol` to `HTTP`, App Runner sends health check requests to the HTTP path specified by `Path`.
   * - Default: `TCP`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `TCP | HTTP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-healthcheckconfiguration-protocol */
  Protocol?: string | Intrinsic
  /**
   * - The time, in seconds, to wait for a health check response before deciding it failed.
   * - Default: `2`
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-healthcheckconfiguration-timeout */
  Timeout?: number | Intrinsic
  /**
   * - The number of consecutive checks that must fail before App Runner decides that the service is unhealthy.
   * - Default: `5`
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-healthcheckconfiguration-unhealthythreshold */
  UnhealthyThreshold?: number | Intrinsic
}

/**
 * Describes the runtime configuration of an AWS App Runner service instance (scaling unit).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html */

export interface InstanceConfiguration {
  /**
   * - The number of CPU units reserved for each instance of your App Runner service.
   * - Default: `1 vCPU`
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `256|512|1024|2048|4096|(0.25|0.5|1|2|4) vCPU`
   * - _Minimum_: `3`
   * - _Maximum_: `9`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-instanceconfiguration-cpu */
  Cpu?: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of an IAM role that provides permissions to your App Runner service. These are permissions that your code needs when it calls any AWS APIs.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):iam::[0-9]{12}:role/[\w+=,.@-]{1,64}`
   * - _Minimum_: `29`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-instanceconfiguration-instancerolearn */
  InstanceRoleArn?: string | Intrinsic
  /**
   * - The amount of memory, in MB or GB, reserved for each instance of your App Runner service.
   * - Default: `2 GB`
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `512|1024|2048|3072|4096|6144|8192|10240|12288|(0.5|1|2|3|4|6|8|10|12) GB`
   * - _Minimum_: `3`
   * - _Maximum_: `6`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-instanceconfiguration-memory */
  Memory?: string | Intrinsic
}

/**
 * Describes the observability configuration of an AWS App Runner service. These are additional observability features, like tracing, that you choose to enable. They're configured in a separate resource that you associate with your service.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html */

export interface ServiceObservabilityConfiguration {
  /**
   * - The Amazon Resource Name (ARN) of the observability configuration that is associated with the service. Specified only when `ObservabilityEnabled` is `true`.
   * - Specify an ARN with a name and a revision number to associate that revision. For example: `arn:aws:apprunner:us-east-1:123456789012:observabilityconfiguration/xray-tracing/3`
   * - Specify just the name to associate the latest revision. For example: `arn:aws:apprunner:us-east-1:123456789012:observabilityconfiguration/xray-tracing`
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `arn:aws(-[\w]+)*:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[0-9]{12}:(\w|/|-){1,1011}`
   * - _Minimum_: `1`
   * - _Maximum_: `1011`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-serviceobservabilityconfiguration-observabilityconfigurationarn */
  ObservabilityConfigurationArn?: string | Intrinsic
  /**
   * - When `true`, an observability configuration resource is associated with the service, and an `ObservabilityConfigurationArn` is specified.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-serviceobservabilityconfiguration-observabilityenabled */
  ObservabilityEnabled: boolean | Intrinsic
}

/**
 * Describes a tag that is applied to an AWS App Runner resource. A tag is a metadata item consisting of a key-value pair.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html */

export interface Tag {
  /**
   * - The key of the tag assigned to an App Runner service.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(?!aws:).+`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-tag-key */
  Key?: string | Intrinsic
  /**
   * - The value of the tag assigned to an App Runner service.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `.*`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-tag-value */
  Value?: string | Intrinsic
}

/**
 * Describes configuration settings related to outbound network traffic of an AWS App Runner service.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html */

export interface EgressConfiguration {
  /**
   * - The type of egress configuration.
   * - Set to `DEFAULT` for access to resources hosted on public networks.
   * - Set to `VPC` to associate your service to a custom VPC specified by `VpcConnectorArn`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `DEFAULT | VPC`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-egressconfiguration-egresstype */
  EgressType: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the App Runner VPC connector that you want to associate with your App Runner service. Only valid when `EgressType = VPC`.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `arn:aws(-[\w]+)*:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[0-9]{12}:(\w|\/|-){1,1011}`
   * - _Minimum_: `44`
   * - _Maximum_: `1011`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-egressconfiguration-vpcconnectorarn */
  VpcConnectorArn?: string | Intrinsic
}

/**
 * Network configuration settings for inbound network traffic.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html */

export interface IngressConfiguration {
  /**
   * - Specifies whether your App Runner service is publicly accessible. To make the service publicly accessible set it to `True`. To make the service privately accessible, from only within an Amazon VPC set it to `False`.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-ingressconfiguration-ispubliclyaccessible */
  IsPubliclyAccessible: boolean | Intrinsic
}

/**
 * Describes resources needed to authenticate access to some source repositories. The specific resource depends on the repository provider.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html */

export interface AuthenticationConfiguration {
  /**
   * - The Amazon Resource Name (ARN) of the IAM role that grants the App Runner service access to a source repository. It's required for ECR image repositories (but not for ECR Public repositories).
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):iam::[0-9]{12}:role/[\w+=,.@-]{1,64}`
   * - _Minimum_: `29`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-authenticationconfiguration-accessrolearn */
  AccessRoleArn?: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the App Runner connection that enables the App Runner service to connect to a source repository. It's required for GitHub code repositories.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `arn:aws(-[\w]+)*:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[0-9]{12}:(\w|\/|-){1,1011}`
   * - _Minimum_: `1`
   * - _Maximum_: `1011`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-authenticationconfiguration-connectionarn */
  ConnectionArn?: string | Intrinsic
}

/**
 * Identifies a version of code that AWS App Runner refers to within a source code repository.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html */

export interface SourceCodeVersion {
  /**
   * - The type of version identifier.
   * - For a git-based repository, branches represent versions.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `BRANCH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-sourcecodeversion-type */
  Type: string | Intrinsic
  /**
   * - A source code version.
   * - For a git-based repository, a branch name maps to a specific version. App Runner uses the most recent commit to the branch.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*`
   * - _Minimum_: `0`
   * - _Maximum_: `51200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-sourcecodeversion-value */
  Value: string | Intrinsic
}

/**
 * Describes the basic configuration needed for building and running an AWS App Runner service. This type doesn't support the full set of possible configuration options. Fur full configuration capabilities, use a `apprunner.yaml` file in the source code repository.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html */

export interface CodeConfigurationValues {
  /**
   * - The command App Runner runs to build your application.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[^\x0a\x0d]+`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-codeconfigurationvalues-buildcommand */
  BuildCommand?: string | Intrinsic
  /**
   * - The port that your application listens to in the container.
   * - Default: `8080`
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `.*`
   * - _Minimum_: `0`
   * - _Maximum_: `51200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-codeconfigurationvalues-port */
  Port?: string | Intrinsic
  /**
   * - A runtime environment type for building and running an App Runner service. It represents a programming language runtime.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `PYTHON_3 | NODEJS_12 | NODEJS_14 | CORRETTO_8 | CORRETTO_11 | NODEJS_16 | GO_1 | DOTNET_6 | PHP_81 | RUBY_31 | PYTHON_311 | NODEJS_18`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-codeconfigurationvalues-runtime */
  Runtime: string | Intrinsic
  /**
   * - An array of key-value pairs representing the secrets and parameters that get referenced to your service as an environment variable. The supported values are either the full Amazon Resource Name (ARN) of the AWS Secrets Manager secret or the full ARN of the parameter in the AWS Systems Manager Parameter Store.
   * - _Required_: No
   * - _Type_: Array of [KeyValuePair](./aws-properties-apprunner-service-keyvaluepair.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-codeconfigurationvalues-runtimeenvironmentsecrets */
  RuntimeEnvironmentSecrets?: KeyValuePair[]
  /**
   * - The environment variables that are available to your running AWS App Runner service. An array of key-value pairs.
   * - _Required_: No
   * - _Type_: Array of [KeyValuePair](./aws-properties-apprunner-service-keyvaluepair.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-codeconfigurationvalues-runtimeenvironmentvariables */
  RuntimeEnvironmentVariables?: KeyValuePair[]
  /**
   * - The command App Runner runs to start your application.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[^\x0a\x0d]+`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-codeconfigurationvalues-startcommand */
  StartCommand?: string | Intrinsic
}

/**
 * Describes a key-value pair, which is a string-to-string mapping.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html */

export interface KeyValuePair {
  /**
   * - The key name string to map to a value.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-keyvaluepair-name */
  Name?: string | Intrinsic
  /**
   * - The value string to which the key name is mapped.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-keyvaluepair-value */
  Value?: string | Intrinsic
}

/**
 * Describes configuration settings related to network traffic of an AWS App Runner service. Consists of embedded objects for each configurable network feature.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html */

export interface NetworkConfiguration {
  /**
   * - Network configuration settings for outbound message traffic.
   * - _Required_: No
   * - _Type_: [EgressConfiguration](./aws-properties-apprunner-service-egressconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-networkconfiguration-egressconfiguration */
  EgressConfiguration?: EgressConfiguration
  /**
   * - Network configuration settings for inbound message traffic.
   * - _Required_: No
   * - _Type_: [IngressConfiguration](./aws-properties-apprunner-service-ingressconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-networkconfiguration-ingressconfiguration */
  IngressConfiguration?: IngressConfiguration
  /**
   * - App Runner provides you with the option to choose between _Internet Protocol version 4 (IPv4)_ and _dual stack_ (IPv4 and IPv6) for your incoming public network configuration. This is an optional parameter. If you do not specify an `IpAddressType`, it defaults to select IPv4.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `IPV4 | DUAL_STACK`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-networkconfiguration-ipaddresstype */
  IpAddressType?: string | Intrinsic
}

/**
 * Describes the configuration that AWS App Runner uses to build and run an App Runner service from a source code repository.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html */

export interface CodeConfiguration {
  /**
   * - The basic configuration for building and running the App Runner service. Use it to quickly launch an App Runner service without providing a `apprunner.yaml` file in the source code repository (or ignoring the file if it exists).
   * - _Required_: No
   * - _Type_: [CodeConfigurationValues](./aws-properties-apprunner-service-codeconfigurationvalues.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-codeconfiguration-codeconfigurationvalues */
  CodeConfigurationValues?: CodeConfigurationValues
  /**
   * - The source of the App Runner configuration. Values are interpreted as follows:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `REPOSITORY | API`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-codeconfiguration-configurationsource */
  ConfigurationSource: string | Intrinsic
}

/**
 * Describes the configuration that AWS App Runner uses to run an App Runner service using an image pulled from a source image repository.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html */

export interface ImageConfiguration {
  /**
   * - The port that your application listens to in the container.
   * - Default: `8080`
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `.*`
   * - _Minimum_: `0`
   * - _Maximum_: `51200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-imageconfiguration-port */
  Port?: string | Intrinsic
  /**
   * - An array of key-value pairs representing the secrets and parameters that get referenced to your service as an environment variable. The supported values are either the full Amazon Resource Name (ARN) of the AWS Secrets Manager secret or the full ARN of the parameter in the AWS Systems Manager Parameter Store.
   * - _Required_: No
   * - _Type_: Array of [KeyValuePair](./aws-properties-apprunner-service-keyvaluepair.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-imageconfiguration-runtimeenvironmentsecrets */
  RuntimeEnvironmentSecrets?: KeyValuePair[]
  /**
   * - Environment variables that are available to your running App Runner service. An array of key-value pairs.
   * - _Required_: No
   * - _Type_: Array of [KeyValuePair](./aws-properties-apprunner-service-keyvaluepair.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-imageconfiguration-runtimeenvironmentvariables */
  RuntimeEnvironmentVariables?: KeyValuePair[]
  /**
   * - An optional command that App Runner runs to start the application in the source image. If specified, this command overrides the Docker image’s default start command.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[^\x0a\x0d]+`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-imageconfiguration-startcommand */
  StartCommand?: string | Intrinsic
}

/**
 * Describes a source code repository.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html */

export interface CodeRepository {
  /**
   * - Configuration for building and running the service from a source code repository.
   * - _Required_: No
   * - _Type_: [CodeConfiguration](./aws-properties-apprunner-service-codeconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-coderepository-codeconfiguration */
  CodeConfiguration?: CodeConfiguration
  /**
   * - The location of the repository that contains the source code.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*`
   * - _Minimum_: `0`
   * - _Maximum_: `51200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-coderepository-repositoryurl */
  RepositoryUrl: string | Intrinsic
  /**
   * - The version that should be used within the source code repository.
   * - _Required_: Yes
   * - _Type_: [SourceCodeVersion](./aws-properties-apprunner-service-sourcecodeversion.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-coderepository-sourcecodeversion */
  SourceCodeVersion: SourceCodeVersion
  /**
   * - The path of the directory that stores source code and configuration files. The build and start commands also execute from here. The path is absolute from root and, if not specified, defaults to the repository root.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[^\x00]+`
   * - _Minimum_: `1`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-coderepository-sourcedirectory */
  SourceDirectory?: string | Intrinsic
}

/**
 * Describes a source image repository.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html */

export interface ImageRepository {
  /**
   * - Configuration for running the identified image.
   * - _Required_: No
   * - _Type_: [ImageConfiguration](./aws-properties-apprunner-service-imageconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-imagerepository-imageconfiguration */
  ImageConfiguration?: ImageConfiguration
  /**
   * - The identifier of an image.
   * - For an image in Amazon Elastic Container Registry (Amazon ECR), this is an image name. For the image name format, see [Pulling an image](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html) in the _Amazon ECR User Guide_.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `([0-9]{12}.dkr.ecr.[a-z\-]+-[0-9]{1}.amazonaws.com\/.*)|(^public\.ecr\.aws\/.+\/.+)`
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-imagerepository-imageidentifier */
  ImageIdentifier: string | Intrinsic
  /**
   * - The type of the image repository. This reflects the repository provider and whether the repository is private or public.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ECR | ECR_PUBLIC`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-imagerepository-imagerepositorytype */
  ImageRepositoryType: string | Intrinsic
}

/**
 * Describes the source deployed to an AWS App Runner service. It can be a code or an image repository.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html */

export interface SourceConfiguration {
  /**
   * - Describes the resources that are needed to authenticate access to some source repositories.
   * - _Required_: No
   * - _Type_: [AuthenticationConfiguration](./aws-properties-apprunner-service-authenticationconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-sourceconfiguration-authenticationconfiguration */
  AuthenticationConfiguration?: AuthenticationConfiguration
  /**
   * - If `true`, continuous integration from the source repository is enabled for the App Runner service. Each repository change (including any source code commit or new image version) starts a deployment.
   * - Default: App Runner sets to `false` for a source image that uses an ECR Public repository or an ECR repository that's in an AWS account other than the one that the service is in. App Runner sets to `true` in all other cases (which currently include a source code repository or a source image using a same-account ECR repository).
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-sourceconfiguration-autodeploymentsenabled */
  AutoDeploymentsEnabled?: boolean | Intrinsic
  /**
   * - The description of a source code repository.
   * - You must provide either this member or `ImageRepository` (but not both).
   * - _Required_: No
   * - _Type_: [CodeRepository](./aws-properties-apprunner-service-coderepository.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-sourceconfiguration-coderepository */
  CodeRepository?: CodeRepository
  /**
   * - The description of a source image repository.
   * - You must provide either this member or `CodeRepository` (but not both).
   * - _Required_: No
   * - _Type_: [ImageRepository](./aws-properties-apprunner-service-imagerepository.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-sourceconfiguration-imagerepository */
  ImageRepository?: ImageRepository
}

/**
 * The `AWS::AppRunner::Service` resource is an AWS App Runner resource type that specifies an App Runner service.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html */

export interface AppRunnerService extends ResourceAttributes {
  Type: 'AWS::AppRunner::Service'
  Properties: {
    /**
     * - The Amazon Resource Name (ARN) of an App Runner automatic scaling configuration resource that you want to associate with your service. If not provided, App Runner associates the latest revision of a default auto scaling configuration.
     * - Specify an ARN with a name and a revision number to associate that revision. For example: `arn:aws:apprunner:us-east-1:123456789012:autoscalingconfiguration/high-availability/3`
     * - Specify just the name to associate the latest revision. For example: `arn:aws:apprunner:us-east-1:123456789012:autoscalingconfiguration/high-availability`
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:aws(-[\w]+)*:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[0-9]{12}:(\w|\/|-){1,1011}`
     * - _Minimum_: `1`
     * - _Maximum_: `1011`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-autoscalingconfigurationarn */
    AutoScalingConfigurationArn?: string | Intrinsic
    /**
     * - An optional custom encryption key that App Runner uses to encrypt the copy of your source repository that it maintains and your service logs. By default, App Runner uses an AWS managed key.
     * - _Required_: No
     * - _Type_: [EncryptionConfiguration](./aws-properties-apprunner-service-encryptionconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-encryptionconfiguration */
    EncryptionConfiguration?: EncryptionConfiguration
    /**
     * - The settings for the health check that AWS App Runner performs to monitor the health of the App Runner service.
     * - _Required_: No
     * - _Type_: [HealthCheckConfiguration](./aws-properties-apprunner-service-healthcheckconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-healthcheckconfiguration */
    HealthCheckConfiguration?: HealthCheckConfiguration
    /**
     * - The runtime configuration of instances (scaling units) of your service.
     * - _Required_: No
     * - _Type_: [InstanceConfiguration](./aws-properties-apprunner-service-instanceconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-instanceconfiguration */
    InstanceConfiguration?: InstanceConfiguration
    /**
     * - Configuration settings related to network traffic of the web application that the App Runner service runs.
     * - _Required_: No
     * - _Type_: [NetworkConfiguration](./aws-properties-apprunner-service-networkconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-networkconfiguration */
    NetworkConfiguration?: NetworkConfiguration
    /**
     * - The observability configuration of your service.
     * - _Required_: No
     * - _Type_: [ServiceObservabilityConfiguration](./aws-properties-apprunner-service-serviceobservabilityconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-observabilityconfiguration */
    ObservabilityConfiguration?: ServiceObservabilityConfiguration
    /**
     * - A name for the App Runner service. It must be unique across all the running App Runner services in your AWS account in the AWS Region.
     * - If you don't specify a name, AWS CloudFormation generates a name for your service.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[A-Za-z0-9][A-Za-z0-9-_]{3,39}`
     * - _Minimum_: `4`
     * - _Maximum_: `40`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-servicename */
    ServiceName?: string | Intrinsic
    /**
     * - The source to deploy to the App Runner service. It can be a code or an image repository.
     * - _Required_: Yes
     * - _Type_: [SourceConfiguration](./aws-properties-apprunner-service-sourceconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-sourceconfiguration */
    SourceConfiguration: SourceConfiguration
    /**
     * - An optional list of metadata items that you can associate with the App Runner service resource. A tag is a key-value pair.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-apprunner-service-tag.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-service.html#cfn-apprunner-service-tags */
    Tags?: Tag[]
  }
}
