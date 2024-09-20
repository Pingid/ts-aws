import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The client authentication information used in order to authenticate with the Apache Kafka cluster.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html */

export interface KafkaClusterClientAuthentication {
  /**
   * - The type of client authentication used to connect to the Apache Kafka cluster. Value NONE means that no client authentication is used.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `NONE | IAM`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-kafkaclusterclientauthentication-authenticationtype */
  AuthenticationType: string | Intrinsic
}

/**
 * Details of encryption in transit to the Apache Kafka cluster.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html */

export interface KafkaClusterEncryptionInTransit {
  /**
   * - The type of encryption in transit to the Apache Kafka cluster.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `PLAINTEXT | TLS`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-kafkaclusterencryptionintransit-encryptiontype */
  EncryptionType: string | Intrinsic
}

/**
 * The `Tag` property type specifies Property description not available. for an [AWS::KafkaConnect::Connector](./aws-resource-kafkaconnect-connector.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-tag-value */
  Value: string | Intrinsic
}

/**
 * The configuration of the workers, which are the processes that run the connector logic.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html */

export interface WorkerConfiguration {
  /**
   * - The revision of the worker configuration.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-workerconfiguration-revision */
  Revision: number | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the worker configuration.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:(aws|aws-us-gov|aws-cn):kafkaconnect:.*`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-workerconfiguration-workerconfigurationarn */
  WorkerConfigurationArn: string | Intrinsic
}

/**
 * Details about a connector's provisioned capacity.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html */

export interface ProvisionedCapacity {
  /**
   * - The number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.
   * - _Required_: No
   * - _Type_: Integer
   * - _Allowed values_: `1 | 2 | 4 | 8`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-provisionedcapacity-mcucount */
  McuCount?: number | Intrinsic
  /**
   * - The number of workers that are allocated to the connector.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-provisionedcapacity-workercount */
  WorkerCount: number | Intrinsic
}

/**
 * A plugin is an AWS resource that contains the code that defines a connector's logic.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html */

export interface CustomPlugin {
  /**
   * - The Amazon Resource Name (ARN) of the custom plugin.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:(aws|aws-us-gov|aws-cn):kafkaconnect:.*`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-customplugin-custompluginarn */
  CustomPluginArn: string | Intrinsic
  /**
   * - The revision of the custom plugin.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-customplugin-revision */
  Revision: number | Intrinsic
}

/**
 * The scale-in policy for the connector.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html */

export interface ScaleInPolicy {
  /**
   * - Specifies the CPU utilization percentage threshold at which you want connector scale in to be triggered.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-scaleinpolicy-cpuutilizationpercentage */
  CpuUtilizationPercentage: number | Intrinsic
}

/**
 * The scale-out policy for the connector.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html */

export interface ScaleOutPolicy {
  /**
   * - The CPU utilization percentage threshold at which you want connector scale out to be triggered.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-scaleoutpolicy-cpuutilizationpercentage */
  CpuUtilizationPercentage: number | Intrinsic
}

/**
 * Information about the VPC in which the connector resides.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html */

export interface Vpc {
  /**
   * - The security groups for the connector.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-vpc-securitygroups */
  SecurityGroups: (string | Intrinsic)[]
  /**
   * - The subnets for the connector.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-vpc-subnets */
  Subnets: (string | Intrinsic)[]
}

/**
 * The settings for delivering connector logs to Amazon CloudWatch Logs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html */

export interface CloudWatchLogsLogDelivery {
  /**
   * - Whether log delivery to Amazon CloudWatch Logs is enabled.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-cloudwatchlogslogdelivery-enabled */
  Enabled: boolean | Intrinsic
  /**
   * - The name of the CloudWatch log group that is the destination for log delivery.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-cloudwatchlogslogdelivery-loggroup */
  LogGroup?: string | Intrinsic
}

/**
 * The settings for delivering logs to Amazon Kinesis Data Firehose.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html */

export interface FirehoseLogDelivery {
  /**
   * - The name of the Kinesis Data Firehose delivery stream that is the destination for log delivery.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-firehoselogdelivery-deliverystream */
  DeliveryStream?: string | Intrinsic
  /**
   * - Specifies whether connector logs get delivered to Amazon Kinesis Data Firehose.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-firehoselogdelivery-enabled */
  Enabled: boolean | Intrinsic
}

/**
 * Details about delivering logs to Amazon S3.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html */

export interface S3LogDelivery {
  /**
   * - The name of the S3 bucket that is the destination for log delivery.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-s3logdelivery-bucket */
  Bucket?: string | Intrinsic
  /**
   * - Specifies whether connector logs get sent to the specified Amazon S3 destination.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-s3logdelivery-enabled */
  Enabled: boolean | Intrinsic
  /**
   * - The S3 prefix that is the destination for log delivery.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-s3logdelivery-prefix */
  Prefix?: string | Intrinsic
}

/**
 * A plugin is an AWS resource that contains the code that defines your connector logic.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html */

export interface Plugin {
  /**
   * - Details about a custom plugin.
   * - _Required_: Yes
   * - _Type_: [CustomPlugin](./aws-properties-kafkaconnect-connector-customplugin.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-plugin-customplugin */
  CustomPlugin: CustomPlugin
}

/**
 * Specifies how the connector scales.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html */

export interface AutoScaling {
  /**
   * - The maximum number of workers allocated to the connector.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-autoscaling-maxworkercount */
  MaxWorkerCount: number | Intrinsic
  /**
   * - The number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Allowed values_: `1 | 2 | 4 | 8`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-autoscaling-mcucount */
  McuCount: number | Intrinsic
  /**
   * - The minimum number of workers allocated to the connector.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-autoscaling-minworkercount */
  MinWorkerCount: number | Intrinsic
  /**
   * - The sacle-in policy for the connector.
   * - _Required_: Yes
   * - _Type_: [ScaleInPolicy](./aws-properties-kafkaconnect-connector-scaleinpolicy.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-autoscaling-scaleinpolicy */
  ScaleInPolicy: ScaleInPolicy
  /**
   * - The sacle-out policy for the connector.
   * - _Required_: Yes
   * - _Type_: [ScaleOutPolicy](./aws-properties-kafkaconnect-connector-scaleoutpolicy.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-autoscaling-scaleoutpolicy */
  ScaleOutPolicy: ScaleOutPolicy
}

/**
 * The details of the Apache Kafka cluster to which the connector is connected.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html */

export interface ApacheKafkaCluster {
  /**
   * - The bootstrap servers of the cluster.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-apachekafkacluster-bootstrapservers */
  BootstrapServers: string | Intrinsic
  /**
   * - Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.
   * - _Required_: Yes
   * - _Type_: [Vpc](./aws-properties-kafkaconnect-connector-vpc.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-apachekafkacluster-vpc */
  Vpc: Vpc
}

/**
 * Workers can send worker logs to different destination types. This configuration specifies the details of these destinations.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html */

export interface WorkerLogDelivery {
  /**
   * - Details about delivering logs to Amazon CloudWatch Logs.
   * - _Required_: No
   * - _Type_: [CloudWatchLogsLogDelivery](./aws-properties-kafkaconnect-connector-cloudwatchlogslogdelivery.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-workerlogdelivery-cloudwatchlogs */
  CloudWatchLogs?: CloudWatchLogsLogDelivery
  /**
   * - Details about delivering logs to Amazon Kinesis Data Firehose.
   * - _Required_: No
   * - _Type_: [FirehoseLogDelivery](./aws-properties-kafkaconnect-connector-firehoselogdelivery.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-workerlogdelivery-firehose */
  Firehose?: FirehoseLogDelivery
  /**
   * - Details about delivering logs to Amazon S3.
   * - _Required_: No
   * - _Type_: [S3LogDelivery](./aws-properties-kafkaconnect-connector-s3logdelivery.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-workerlogdelivery-s3 */
  S3?: S3LogDelivery
}

/**
 * Information about the capacity of the connector, whether it is auto scaled or provisioned.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html */

export interface Capacity {
  /**
   * - Information about the auto scaling parameters for the connector.
   * - _Required_: No
   * - _Type_: [AutoScaling](./aws-properties-kafkaconnect-connector-autoscaling.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-capacity-autoscaling */
  AutoScaling?: AutoScaling
  /**
   * - Details about a fixed capacity allocated to a connector.
   * - _Required_: No
   * - _Type_: [ProvisionedCapacity](./aws-properties-kafkaconnect-connector-provisionedcapacity.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-capacity-provisionedcapacity */
  ProvisionedCapacity?: ProvisionedCapacity
}

/**
 * The details of the Apache Kafka cluster to which the connector is connected.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html */

export interface KafkaCluster {
  /**
   * - The Apache Kafka cluster to which the connector is connected.
   * - _Required_: Yes
   * - _Type_: [ApacheKafkaCluster](./aws-properties-kafkaconnect-connector-apachekafkacluster.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-kafkacluster-apachekafkacluster */
  ApacheKafkaCluster: ApacheKafkaCluster
}

/**
 * Details about log delivery.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html */

export interface LogDelivery {
  /**
   * - The workers can send worker logs to different destination types. This configuration specifies the details of these destinations.
   * - _Required_: Yes
   * - _Type_: [WorkerLogDelivery](./aws-properties-kafkaconnect-connector-workerlogdelivery.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-logdelivery-workerlogdelivery */
  WorkerLogDelivery: WorkerLogDelivery
}

/**
 * Creates a connector using the specified properties.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html */

export interface KafkaConnectConnector extends ResourceAttributes {
  Type: 'AWS::KafkaConnect::Connector'
  Properties: {
    /**
     * - The connector's compute capacity settings.
     * - _Required_: Yes
     * - _Type_: [Capacity](./aws-properties-kafkaconnect-connector-capacity.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-capacity */
    Capacity: Capacity
    /**
     * - The configuration of the connector.
     * - _Required_: Yes
     * - _Type_: Object of String
     * - _Pattern_: `.*`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-connectorconfiguration */
    ConnectorConfiguration: Record<string, string | Intrinsic>
    /**
     * - The description of the connector.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-connectordescription */
    ConnectorDescription?: string | Intrinsic
    /**
     * - The name of the connector.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-connectorname */
    ConnectorName: string | Intrinsic
    /**
     * - The details of the Apache Kafka cluster to which the connector is connected.
     * - _Required_: Yes
     * - _Type_: [KafkaCluster](./aws-properties-kafkaconnect-connector-kafkacluster.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-kafkacluster */
    KafkaCluster: KafkaCluster
    /**
     * - The type of client authentication used to connect to the Apache Kafka cluster. The value is NONE when no client authentication is used.
     * - _Required_: Yes
     * - _Type_: [KafkaClusterClientAuthentication](./aws-properties-kafkaconnect-connector-kafkaclusterclientauthentication.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-kafkaclusterclientauthentication */
    KafkaClusterClientAuthentication: KafkaClusterClientAuthentication
    /**
     * - Details of encryption in transit to the Apache Kafka cluster.
     * - _Required_: Yes
     * - _Type_: [KafkaClusterEncryptionInTransit](./aws-properties-kafkaconnect-connector-kafkaclusterencryptionintransit.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-kafkaclusterencryptionintransit */
    KafkaClusterEncryptionInTransit: KafkaClusterEncryptionInTransit
    /**
     * - The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-kafkaconnectversion */
    KafkaConnectVersion: string | Intrinsic
    /**
     * - The settings for delivering connector logs to Amazon CloudWatch Logs.
     * - _Required_: No
     * - _Type_: [LogDelivery](./aws-properties-kafkaconnect-connector-logdelivery.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-logdelivery */
    LogDelivery?: LogDelivery
    /**
     * - Specifies which plugin to use for the connector. You must specify a single-element list. Amazon MSK Connect does not currently support specifying multiple plugins.
     * - _Required_: Yes
     * - _Type_: Array of [Plugin](./aws-properties-kafkaconnect-connector-plugin.html)
     * - _Minimum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-plugins */
    Plugins: Plugin[]
    /**
     * - The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon Web Services resources.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:(aws|aws-us-gov|aws-cn):iam:.*`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-serviceexecutionrolearn */
    ServiceExecutionRoleArn: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-kafkaconnect-connector-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-tags */
    Tags?: Tag[]
    /**
     * - The worker configurations that are in use with the connector.
     * - _Required_: No
     * - _Type_: [WorkerConfiguration](./aws-properties-kafkaconnect-connector-workerconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html#cfn-kafkaconnect-connector-workerconfiguration */
    WorkerConfiguration?: WorkerConfiguration
  }
}
