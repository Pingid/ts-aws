import type { Intrinsic } from '../intrinsic/index.js' /**
 * The `AutoStartConfiguration` property type specifies Property description not available. for an [AWS::EMRServerless::Application](./aws-resource-emrserverless-application.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html */

export interface AutoStartConfiguration {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-autostartconfiguration-enabled */
  Enabled?: boolean | Intrinsic
}

/**
 * The `AutoStopConfiguration` property type specifies Property description not available. for an [AWS::EMRServerless::Application](./aws-resource-emrserverless-application.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html */

export interface AutoStopConfiguration {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-autostopconfiguration-enabled */
  Enabled?: boolean | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-autostopconfiguration-idletimeoutminutes */
  IdleTimeoutMinutes?: number | Intrinsic
}

/**
 * The image configuration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html */

export interface ImageConfigurationInput {
  /**
   * - The URI of an image in the Amazon ECR registry. This field is required when you create a new application. If you leave this field blank in an update, Amazon EMR will remove the image configuration.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^([a-z0-9]+[a-z0-9-.]*)\/((?:[a-z0-9]+(?:[._-][a-z0-9]+)*\/)*[a-z0-9]+(?:[._-][a-z0-9]+)*)(?:\:([a-zA-Z0-9_][a-zA-Z0-9-._]{0,299})|@(sha256:[0-9a-f]{64}))$`
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-imageconfigurationinput-imageuri */
  ImageUri?: string | Intrinsic
}

/**
 * The configuration to use to enable the different types of interactive use cases in an application.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html */

export interface InteractiveConfiguration {
  /**
   * - Enables an Apache Livy endpoint that you can connect to and run interactive jobs.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-interactiveconfiguration-livyendpointenabled */
  LivyEndpointEnabled?: boolean | Intrinsic
  /**
   * - Enables you to connect an application to Amazon EMR Studio to run interactive workloads in a notebook.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-interactiveconfiguration-studioenabled */
  StudioEnabled?: boolean | Intrinsic
}

/**
 * The maximum allowed cumulative resources for an application. No new resources will be created once the limit is hit.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html */

export interface MaximumAllowedResources {
  /**
   * - The maximum allowed CPU for an application.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[1-9][0-9]*(\s)?(vCPU|vcpu|VCPU)?$`
   * - _Minimum_: `1`
   * - _Maximum_: `15`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-maximumallowedresources-cpu */
  Cpu: string | Intrinsic
  /**
   * - The maximum allowed disk for an application.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[1-9][0-9]*(\s)?(GB|gb|gB|Gb)$`
   * - _Minimum_: `1`
   * - _Maximum_: `15`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-maximumallowedresources-disk */
  Disk?: string | Intrinsic
  /**
   * - The maximum allowed resources for an application.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[1-9][0-9]*(\s)?(GB|gb|gB|Gb)?$`
   * - _Minimum_: `1`
   * - _Maximum_: `15`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-maximumallowedresources-memory */
  Memory: string | Intrinsic
}

/**
 * The network configuration for customer VPC connectivity.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html */

export interface NetworkConfiguration {
  /**
   * - The array of security group Ids for customer VPC connectivity.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `5`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-networkconfiguration-securitygroupids */
  SecurityGroupIds?: (string | Intrinsic)[]
  /**
   * - The array of subnet Ids for customer VPC connectivity.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `16`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-networkconfiguration-subnetids */
  SubnetIds?: (string | Intrinsic)[]
}

/**
 * The `ConfigurationObject` property type specifies Property description not available. for an [AWS::EMRServerless::Application](./aws-resource-emrserverless-application.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html */

export interface ConfigurationObject {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*\S.*`
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-configurationobject-classification */
  Classification: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Array of [ConfigurationObject](./aws-properties-emrserverless-application-configurationobject.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-configurationobject-configurations */
  Configurations?: ConfigurationObject[]
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `^[a-zA-Z]+[-a-zA-Z0-9_.]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-configurationobject-properties */
  Properties?: Record<string, string | Intrinsic>
}

/**
 * The `Tag` property type specifies Property description not available. for an [AWS::EMRServerless::Application](./aws-resource-emrserverless-application.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[A-Za-z0-9 /_.:=+@-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[A-Za-z0-9 /_.:=+@-]*$`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-tag-value */
  Value: string | Intrinsic
}

/**
 * The specifications for a worker type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html */

export interface WorkerTypeSpecificationInput {
  /**
   * - The image configuration for a worker type.
   * - _Required_: No
   * - _Type_: [ImageConfigurationInput](./aws-properties-emrserverless-application-imageconfigurationinput.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-workertypespecificationinput-imageconfiguration */
  ImageConfiguration?: ImageConfigurationInput
}

/**
 * The managed log persistence configuration for a job run.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html */

export interface ManagedPersistenceMonitoringConfiguration {
  /**
   * - Enables managed logging and defaults to true. If set to false, managed logging will be turned off.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-managedpersistencemonitoringconfiguration-enabled */
  Enabled?: boolean | Intrinsic
  /**
   * - The KMS key ARN to encrypt the logs stored in managed log persistence.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:(aws[a-zA-Z0-9-]*):kms:[a-zA-Z0-9\-]*:(\d{12})?:key\/[a-zA-Z0-9-]+$`
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-managedpersistencemonitoringconfiguration-encryptionkeyarn */
  EncryptionKeyArn?: string | Intrinsic
}

/**
 * The Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html */

export interface S3MonitoringConfiguration {
  /**
   * - The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:(aws[a-zA-Z0-9-]*):kms:[a-zA-Z0-9\-]*:(\d{12})?:key\/[a-zA-Z0-9-]+$`
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-s3monitoringconfiguration-encryptionkeyarn */
  EncryptionKeyArn?: string | Intrinsic
  /**
   * - The Amazon S3 destination URI for log publishing.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\r\n\t]*`
   * - _Minimum_: `1`
   * - _Maximum_: `10280`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-s3monitoringconfiguration-loguri */
  LogUri?: string | Intrinsic
}

/**
 * The `WorkerConfiguration` property type specifies Property description not available. for an [AWS::EMRServerless::Application](./aws-resource-emrserverless-application.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html */

export interface WorkerConfiguration {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[1-9][0-9]*(\s)?(vCPU|vcpu|VCPU)?$`
   * - _Minimum_: `1`
   * - _Maximum_: `15`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-workerconfiguration-cpu */
  Cpu: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[1-9][0-9]*(\s)?(GB|gb|gB|Gb)$`
   * - _Minimum_: `1`
   * - _Maximum_: `15`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-workerconfiguration-disk */
  Disk?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(SHUFFLE_OPTIMIZED|[Ss]huffle_[Oo]ptimized|STANDARD|[Ss]tandard)$`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-workerconfiguration-disktype */
  DiskType?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[1-9][0-9]*(\s)?(GB|gb|gB|Gb)?$`
   * - _Minimum_: `1`
   * - _Maximum_: `15`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-workerconfiguration-memory */
  Memory: string | Intrinsic
}

/**
 * The `LogTypeMapKeyValuePair` property type specifies Property description not available. for an [AWS::EMRServerless::Application](./aws-resource-emrserverless-application.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html */

export interface LogTypeMapKeyValuePair {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z]+[-_]*[a-zA-Z]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-logtypemapkeyvaluepair-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `5`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-logtypemapkeyvaluepair-value */
  Value: (string | Intrinsic)[]
}

/**
 * The initial capacity configuration per worker.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html */

export interface InitialCapacityConfig {
  /**
   * - The resource configuration of the initial capacity configuration.
   * - _Required_: Yes
   * - _Type_: [WorkerConfiguration](./aws-properties-emrserverless-application-workerconfiguration.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-initialcapacityconfig-workerconfiguration */
  WorkerConfiguration: WorkerConfiguration
  /**
   * - The number of workers in the initial capacity configuration.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `1000000`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-initialcapacityconfig-workercount */
  WorkerCount: number | Intrinsic
}

/**
 * The Amazon CloudWatch configuration for monitoring logs. You can configure your jobs to send log information to CloudWatch.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html */

export interface CloudWatchLoggingConfiguration {
  /**
   * - Enables CloudWatch logging.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-cloudwatchloggingconfiguration-enabled */
  Enabled?: boolean | Intrinsic
  /**
   * - The AWS Key Management Service (KMS) key ARN to encrypt the logs that you store in CloudWatch Logs.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:(aws[a-zA-Z0-9-]*):kms:[a-zA-Z0-9\-]*:(\d{12})?:key\/[a-zA-Z0-9-]+$`
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-cloudwatchloggingconfiguration-encryptionkeyarn */
  EncryptionKeyArn?: string | Intrinsic
  /**
   * - The name of the log group in Amazon CloudWatch Logs where you want to publish your logs.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[\.\-_/#A-Za-z0-9]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-cloudwatchloggingconfiguration-loggroupname */
  LogGroupName?: string | Intrinsic
  /**
   * - Prefix for the CloudWatch log stream name.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[^:*]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-cloudwatchloggingconfiguration-logstreamnameprefix */
  LogStreamNamePrefix?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Array of [LogTypeMapKeyValuePair](./aws-properties-emrserverless-application-logtypemapkeyvaluepair.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-cloudwatchloggingconfiguration-logtypemap */
  LogTypeMap?: LogTypeMapKeyValuePair[]
}

/**
 * The `InitialCapacityConfigKeyValuePair` property type specifies Property description not available. for an [AWS::EMRServerless::Application](./aws-resource-emrserverless-application.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html */

export interface InitialCapacityConfigKeyValuePair {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z]+[-_]*[a-zA-Z]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-initialcapacityconfigkeyvaluepair-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: [InitialCapacityConfig](./aws-properties-emrserverless-application-initialcapacityconfig.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-initialcapacityconfigkeyvaluepair-value */
  Value: InitialCapacityConfig
}

/**
 * The configuration setting for monitoring.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html */

export interface MonitoringConfiguration {
  /**
   * - The Amazon CloudWatch configuration for monitoring logs. You can configure your jobs to send log information to CloudWatch.
   * - _Required_: No
   * - _Type_: [CloudWatchLoggingConfiguration](./aws-properties-emrserverless-application-cloudwatchloggingconfiguration.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-monitoringconfiguration-cloudwatchloggingconfiguration */
  CloudWatchLoggingConfiguration?: CloudWatchLoggingConfiguration
  /**
   * - The managed log persistence configuration for a job run.
   * - _Required_: No
   * - _Type_: [ManagedPersistenceMonitoringConfiguration](./aws-properties-emrserverless-application-managedpersistencemonitoringconfiguration.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-monitoringconfiguration-managedpersistencemonitoringconfiguration */
  ManagedPersistenceMonitoringConfiguration?: ManagedPersistenceMonitoringConfiguration
  /**
   * - The Amazon S3 configuration for monitoring log publishing.
   * - _Required_: No
   * - _Type_: [S3MonitoringConfiguration](./aws-properties-emrserverless-application-s3monitoringconfiguration.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-monitoringconfiguration-s3monitoringconfiguration */
  S3MonitoringConfiguration?: S3MonitoringConfiguration
}

/**
 * The `AWS::EMRServerless::Application` resource specifies an EMR Serverless application. An application uses open source analytics frameworks to run jobs that process data. To create an application, you must specify the release version for the open source framework version you want to use and the type of application you want, such as Apache Spark or Apache Hive. After you create an application, you can submit data processing jobs or interactive requests to it.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html */

export interface EMRServerlessApplication {
  Type: 'AWS::EMRServerless::Application'
  Properties: {
    /**
     * - The CPU architecture of an application.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ARM64 | X86_64`
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-architecture */
    Architecture?: string | Intrinsic
    /**
     * - The configuration for an application to automatically start on job submission.
     * - _Required_: No
     * - _Type_: [AutoStartConfiguration](./aws-properties-emrserverless-application-autostartconfiguration.html)
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-autostartconfiguration */
    AutoStartConfiguration?: AutoStartConfiguration
    /**
     * - The configuration for an application to automatically stop after a certain amount of time being idle.
     * - _Required_: No
     * - _Type_: [AutoStopConfiguration](./aws-properties-emrserverless-application-autostopconfiguration.html)
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-autostopconfiguration */
    AutoStopConfiguration?: AutoStopConfiguration
    /**
     * - The image configuration applied to all worker types.
     * - _Required_: No
     * - _Type_: [ImageConfigurationInput](./aws-properties-emrserverless-application-imageconfigurationinput.html)
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-imageconfiguration */
    ImageConfiguration?: ImageConfigurationInput
    /**
     * - The initial capacity of the application.
     * - _Required_: No
     * - _Type_: Array of [InitialCapacityConfigKeyValuePair](./aws-properties-emrserverless-application-initialcapacityconfigkeyvaluepair.html)
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-initialcapacity */
    InitialCapacity?: InitialCapacityConfigKeyValuePair[]
    /**
     * - The interactive configuration object that enables the interactive use cases for an application.
     * - _Required_: No
     * - _Type_: [InteractiveConfiguration](./aws-properties-emrserverless-application-interactiveconfiguration.html)
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-interactiveconfiguration */
    InteractiveConfiguration?: InteractiveConfiguration
    /**
     * - The maximum capacity of the application. This is cumulative across all workers at any given point in time during the lifespan of the application is created. No new resources will be created once any one of the defined limits is hit.
     * - _Required_: No
     * - _Type_: [MaximumAllowedResources](./aws-properties-emrserverless-application-maximumallowedresources.html)
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-maximumcapacity */
    MaximumCapacity?: MaximumAllowedResources
    /**
     * - A configuration specification to be used when provisioning an application. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file.
     * - _Required_: No
     * - _Type_: [MonitoringConfiguration](./aws-properties-emrserverless-application-monitoringconfiguration.html)
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-monitoringconfiguration */
    MonitoringConfiguration?: MonitoringConfiguration
    /**
     * - The name of the application.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z0-9._\/#-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-name */
    Name?: string | Intrinsic
    /**
     * - The network configuration for customer VPC connectivity for the application.
     * - _Required_: No
     * - _Type_: [NetworkConfiguration](./aws-properties-emrserverless-application-networkconfiguration.html)
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-networkconfiguration */
    NetworkConfiguration?: NetworkConfiguration
    /**
     * - The EMR release associated with the application.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z0-9._/-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-releaselabel */
    ReleaseLabel: string | Intrinsic
    /**
     * - The [Configuration](https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_Configuration.html) specifications of an application. Each configuration consists of a classification and properties. You use this parameter when creating or updating an application. To see the runtimeConfiguration object of an application, run the [GetApplication](https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_GetApplication.html) API operation.
     * - _Required_: No
     * - _Type_: Array of [ConfigurationObject](./aws-properties-emrserverless-application-configurationobject.html)
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-runtimeconfiguration */
    RuntimeConfiguration?: ConfigurationObject[]
    /**
     * - The tags assigned to the application.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-emrserverless-application-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-tags */
    Tags?: Tag[]
    /**
     * - The type of application, such as Spark or Hive.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-type */
    Type: string | Intrinsic
    /**
     * - The specification applied to each worker type.
     * - _Required_: No
     * - _Type_: Object of [WorkerTypeSpecificationInput](./aws-properties-emrserverless-application-workertypespecificationinput.html)
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-workertypespecifications */
    WorkerTypeSpecifications?: Record<string, WorkerTypeSpecificationInput>
  }
}
