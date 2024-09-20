import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `ConfigurationInfo` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface ConfigurationInfo {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-configurationinfo-arn */
  Arn: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-configurationinfo-revision */
  Revision: number | Intrinsic
}

/**
 * The `Tls` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface Tls {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-tls-certificateauthorityarnlist */
  CertificateAuthorityArnList?: (string | Intrinsic)[]
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-tls-enabled */
  Enabled?: boolean | Intrinsic
}

/**
 * The `Unauthenticated` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface Unauthenticated {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-unauthenticated-enabled */
  Enabled: boolean | Intrinsic
}

/**
 * The `EncryptionAtRest` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface EncryptionAtRest {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-encryptionatrest-datavolumekmskeyid */
  DataVolumeKMSKeyId: string | Intrinsic
}

/**
 * The `EncryptionInTransit` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface EncryptionInTransit {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `TLS | TLS_PLAINTEXT | PLAINTEXT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-encryptionintransit-clientbroker */
  ClientBroker?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-encryptionintransit-incluster */
  InCluster?: boolean | Intrinsic
}

/**
 * The `PublicAccess` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface PublicAccess {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `7`
   * - _Maximum_: `23`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-publicaccess-type */
  Type?: string | Intrinsic
}

/**
 * The `Iam` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface Iam {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-iam-enabled */
  Enabled: boolean | Intrinsic
}

/**
 * The `Scram` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface Scram {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-scram-enabled */
  Enabled: boolean | Intrinsic
}

/**
 * The `CloudWatchLogs` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface CloudWatchLogs {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-cloudwatchlogs-enabled */
  Enabled: boolean | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-cloudwatchlogs-loggroup */
  LogGroup?: string | Intrinsic
}

/**
 * The `Firehose` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface Firehose {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-firehose-deliverystream */
  DeliveryStream?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-firehose-enabled */
  Enabled: boolean | Intrinsic
}

/**
 * The `S3` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface S3 {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-s3-bucket */
  Bucket?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-s3-enabled */
  Enabled: boolean | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-s3-prefix */
  Prefix?: string | Intrinsic
}

/**
 * The `JmxExporter` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface JmxExporter {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-jmxexporter-enabledinbroker */
  EnabledInBroker: boolean | Intrinsic
}

/**
 * The `NodeExporter` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface NodeExporter {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-nodeexporter-enabledinbroker */
  EnabledInBroker: boolean | Intrinsic
}

/**
 * The `ProvisionedThroughput` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface ProvisionedThroughput {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-provisionedthroughput-enabled */
  Enabled?: boolean | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-provisionedthroughput-volumethroughput */
  VolumeThroughput?: number | Intrinsic
}

/**
 * The `VpcConnectivityTls` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface VpcConnectivityTls {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-vpcconnectivitytls-enabled */
  Enabled: boolean | Intrinsic
}

/**
 * The `VpcConnectivityIam` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface VpcConnectivityIam {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-vpcconnectivityiam-enabled */
  Enabled: boolean | Intrinsic
}

/**
 * The `VpcConnectivityScram` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface VpcConnectivityScram {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-vpcconnectivityscram-enabled */
  Enabled: boolean | Intrinsic
}

/**
 * The `EncryptionInfo` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface EncryptionInfo {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [EncryptionAtRest](./aws-properties-msk-cluster-encryptionatrest.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-encryptioninfo-encryptionatrest */
  EncryptionAtRest?: EncryptionAtRest
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [EncryptionInTransit](./aws-properties-msk-cluster-encryptionintransit.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-encryptioninfo-encryptionintransit */
  EncryptionInTransit?: EncryptionInTransit
}

/**
 * The `Sasl` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface Sasl {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [Iam](./aws-properties-msk-cluster-iam.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-sasl-iam */
  Iam?: Iam
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [Scram](./aws-properties-msk-cluster-scram.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-sasl-scram */
  Scram?: Scram
}

/**
 * The `BrokerLogs` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface BrokerLogs {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [CloudWatchLogs](./aws-properties-msk-cluster-cloudwatchlogs.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-brokerlogs-cloudwatchlogs */
  CloudWatchLogs?: CloudWatchLogs
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [Firehose](./aws-properties-msk-cluster-firehose.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-brokerlogs-firehose */
  Firehose?: Firehose
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [S3](./aws-properties-msk-cluster-s3.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-brokerlogs-s3 */
  S3?: S3
}

/**
 * The `Prometheus` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface Prometheus {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [JmxExporter](./aws-properties-msk-cluster-jmxexporter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-prometheus-jmxexporter */
  JmxExporter?: JmxExporter
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [NodeExporter](./aws-properties-msk-cluster-nodeexporter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-prometheus-nodeexporter */
  NodeExporter?: NodeExporter
}

/**
 * The `EBSStorageInfo` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface EBSStorageInfo {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [ProvisionedThroughput](./aws-properties-msk-cluster-provisionedthroughput.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-ebsstorageinfo-provisionedthroughput */
  ProvisionedThroughput?: ProvisionedThroughput
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `16384`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-ebsstorageinfo-volumesize */
  VolumeSize?: number | Intrinsic
}

/**
 * The `VpcConnectivitySasl` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface VpcConnectivitySasl {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [VpcConnectivityIam](./aws-properties-msk-cluster-vpcconnectivityiam.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-vpcconnectivitysasl-iam */
  Iam?: VpcConnectivityIam
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [VpcConnectivityScram](./aws-properties-msk-cluster-vpcconnectivityscram.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-vpcconnectivitysasl-scram */
  Scram?: VpcConnectivityScram
}

/**
 * The `ClientAuthentication` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface ClientAuthentication {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [Sasl](./aws-properties-msk-cluster-sasl.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-clientauthentication-sasl */
  Sasl?: Sasl
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [Tls](./aws-properties-msk-cluster-tls.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-clientauthentication-tls */
  Tls?: Tls
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [Unauthenticated](./aws-properties-msk-cluster-unauthenticated.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-clientauthentication-unauthenticated */
  Unauthenticated?: Unauthenticated
}

/**
 * The `LoggingInfo` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface LoggingInfo {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: [BrokerLogs](./aws-properties-msk-cluster-brokerlogs.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-logginginfo-brokerlogs */
  BrokerLogs: BrokerLogs
}

/**
 * The `OpenMonitoring` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface OpenMonitoring {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: [Prometheus](./aws-properties-msk-cluster-prometheus.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-openmonitoring-prometheus */
  Prometheus: Prometheus
}

/**
 * The `StorageInfo` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface StorageInfo {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [EBSStorageInfo](./aws-properties-msk-cluster-ebsstorageinfo.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-storageinfo-ebsstorageinfo */
  EBSStorageInfo?: EBSStorageInfo
}

/**
 * The `VpcConnectivityClientAuthentication` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface VpcConnectivityClientAuthentication {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [VpcConnectivitySasl](./aws-properties-msk-cluster-vpcconnectivitysasl.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-vpcconnectivityclientauthentication-sasl */
  Sasl?: VpcConnectivitySasl
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [VpcConnectivityTls](./aws-properties-msk-cluster-vpcconnectivitytls.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-vpcconnectivityclientauthentication-tls */
  Tls?: VpcConnectivityTls
}

/**
 * The `VpcConnectivity` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface VpcConnectivity {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [VpcConnectivityClientAuthentication](./aws-properties-msk-cluster-vpcconnectivityclientauthentication.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-vpcconnectivity-clientauthentication */
  ClientAuthentication?: VpcConnectivityClientAuthentication
}

/**
 * The `ConnectivityInfo` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface ConnectivityInfo {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [PublicAccess](./aws-properties-msk-cluster-publicaccess.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-connectivityinfo-publicaccess */
  PublicAccess?: PublicAccess
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [VpcConnectivity](./aws-properties-msk-cluster-vpcconnectivity.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-connectivityinfo-vpcconnectivity */
  VpcConnectivity?: VpcConnectivity
}

/**
 * The `BrokerNodeGroupInfo` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface BrokerNodeGroupInfo {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `6`
   * - _Maximum_: `9`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-brokernodegroupinfo-brokerazdistribution */
  BrokerAZDistribution?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-brokernodegroupinfo-clientsubnets */
  ClientSubnets: (string | Intrinsic)[]
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [ConnectivityInfo](./aws-properties-msk-cluster-connectivityinfo.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-brokernodegroupinfo-connectivityinfo */
  ConnectivityInfo?: ConnectivityInfo
  /**
   * - The type of Amazon EC2 instances to use for brokers. The following instance types are allowed: kafka.m5.large, kafka.m5.xlarge, kafka.m5.2xlarge, kafka.m5.4xlarge, kafka.m5.8xlarge, kafka.m5.12xlarge, kafka.m5.16xlarge, kafka.m5.24xlarge, and kafka.t3.small.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `5`
   * - _Maximum_: `32`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-brokernodegroupinfo-instancetype */
  InstanceType: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-brokernodegroupinfo-securitygroups */
  SecurityGroups?: (string | Intrinsic)[]
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [StorageInfo](./aws-properties-msk-cluster-storageinfo.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-brokernodegroupinfo-storageinfo */
  StorageInfo?: StorageInfo
}

/**
 * The `AWS::MSK::Cluster` resource Property description not available. for MSK.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface MSKCluster extends ResourceAttributes {
  Type: 'AWS::MSK::Cluster'
  Properties: {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: [BrokerNodeGroupInfo](./aws-properties-msk-cluster-brokernodegroupinfo.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-brokernodegroupinfo */
    BrokerNodeGroupInfo: BrokerNodeGroupInfo
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [ClientAuthentication](./aws-properties-msk-cluster-clientauthentication.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-clientauthentication */
    ClientAuthentication?: ClientAuthentication
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-clustername */
    ClusterName: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [ConfigurationInfo](./aws-properties-msk-cluster-configurationinfo.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-configurationinfo */
    ConfigurationInfo?: ConfigurationInfo
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-currentversion */
    CurrentVersion?: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [EncryptionInfo](./aws-properties-msk-cluster-encryptioninfo.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-encryptioninfo */
    EncryptionInfo?: EncryptionInfo
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DEFAULT | PER_BROKER | PER_TOPIC_PER_BROKER | PER_TOPIC_PER_PARTITION`
     * - _Minimum_: `7`
     * - _Maximum_: `23`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-enhancedmonitoring */
    EnhancedMonitoring?: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-kafkaversion */
    KafkaVersion: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [LoggingInfo](./aws-properties-msk-cluster-logginginfo.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-logginginfo */
    LoggingInfo?: LoggingInfo
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-numberofbrokernodes */
    NumberOfBrokerNodes: number | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [OpenMonitoring](./aws-properties-msk-cluster-openmonitoring.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-openmonitoring */
    OpenMonitoring?: OpenMonitoring
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `LOCAL | TIERED`
     * - _Minimum_: `5`
     * - _Maximum_: `6`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-storagemode */
    StorageMode?: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-tags */
    Tags?: Record<string, string | Intrinsic>
  }
}
