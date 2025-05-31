import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies the configuration to use for the brokers.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface ConfigurationInfo {
    /**
     * - ARN of the configuration to use.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-configurationinfo-arn */
    "Arn": string | Intrinsic;
    /**
     * - The revision of the configuration to use.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-configurationinfo-revision */
    "Revision": number | Intrinsic;
}

/**
 * Details for client authentication using TLS.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface Tls {
    /**
     * - List of AWS Private CA ARNs.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-tls-certificateauthorityarnlist */
    "CertificateAuthorityArnList"?: (string | Intrinsic)[];
    /**
     * - TLS authentication is enabled or not.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-tls-enabled */
    "Enabled"?: boolean | Intrinsic;
}

/**
 * Details for allowing no client authentication.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface Unauthenticated {
    /**
     * - Unauthenticated is enabled or not.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-unauthenticated-enabled */
    "Enabled": boolean | Intrinsic;
}

/**
 * The data-volume encryption details. You can't update encryption at rest settings for existing clusters.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface EncryptionAtRest {
    /**
     * - The ARN of the Amazon KMS key for encrypting data at rest. If you don't specify a KMS key, MSK creates one for you and uses it.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-encryptionatrest-datavolumekmskeyid */
    "DataVolumeKMSKeyId": string | Intrinsic;
}

/**
 * The settings for encrypting data in transit.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface EncryptionInTransit {
    /**
     * - Indicates the encryption setting for data in transit between clients and brokers. You must set it to one of the following values.
     * - The default value is `TLS`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `TLS | TLS_PLAINTEXT | PLAINTEXT`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-encryptionintransit-clientbroker */
    "ClientBroker"?: string | Intrinsic;
    /**
     * - When set to true, it indicates that data communication among the broker nodes of the cluster is encrypted. When set to false, the communication happens in plaintext.
     * - The default value is true.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-encryptionintransit-incluster */
    "InCluster"?: boolean | Intrinsic;
}

/**
 * Includes encryption-related information, such as the Amazon KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface EncryptionInfo {
    /**
     * - The data-volume encryption details.
     * - _Required_: No
     * - _Type_: [EncryptionAtRest](./aws-properties-msk-cluster-encryptionatrest.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-encryptioninfo-encryptionatrest */
    "EncryptionAtRest"?: EncryptionAtRest;
    /**
     * - The details for encryption in transit.
     * - _Required_: No
     * - _Type_: [EncryptionInTransit](./aws-properties-msk-cluster-encryptionintransit.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-encryptioninfo-encryptionintransit */
    "EncryptionInTransit"?: EncryptionInTransit;
}

/**
 * Broker access controls
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface PublicAccess {
    /**
     * - DISABLED means that public access is turned off. SERVICE\_PROVIDED\_EIPS means that public access is turned on.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `7`
     * - _Maximum_: `23`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-publicaccess-type */
    "Type"?: string | Intrinsic;
}

/**
 * Details for SASL/IAM client authentication.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface Iam {
    /**
     * - SASL/IAM authentication is enabled or not.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-iam-enabled */
    "Enabled": boolean | Intrinsic;
}

/**
 * Details for SASL/SCRAM client authentication.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface Scram {
    /**
     * - SASL/SCRAM authentication is enabled or not.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-scram-enabled */
    "Enabled": boolean | Intrinsic;
}

/**
 * Details for client authentication using SASL. To turn on SASL, you must also turn on `EncryptionInTransit` by setting `inCluster` to true. You must set `clientBroker` to either `TLS` or `TLS_PLAINTEXT`. If you choose `TLS_PLAINTEXT`, then you must also set `unauthenticated` to true.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface Sasl {
    /**
     * - Details for ClientAuthentication using IAM.
     * - _Required_: No
     * - _Type_: [Iam](./aws-properties-msk-cluster-iam.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-sasl-iam */
    "Iam"?: Iam;
    /**
     * - Details for SASL/SCRAM client authentication.
     * - _Required_: No
     * - _Type_: [Scram](./aws-properties-msk-cluster-scram.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-sasl-scram */
    "Scram"?: Scram;
}

/**
 * The `ClientAuthentication` property type specifies Property description not available. for an [AWS::MSK::Cluster](./aws-resource-msk-cluster.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface ClientAuthentication {
    /**
     * - Details for client authentication using SASL. To turn on SASL, you must also turn on `EncryptionInTransit` by setting `inCluster` to true. You must set `clientBroker` to either `TLS` or `TLS_PLAINTEXT`. If you choose `TLS_PLAINTEXT`, then you must also set `unauthenticated` to true.
     * - _Required_: No
     * - _Type_: [Sasl](./aws-properties-msk-cluster-sasl.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-clientauthentication-sasl */
    "Sasl"?: Sasl;
    /**
     * - Details for ClientAuthentication using TLS. To turn on TLS access control, you must also turn on `EncryptionInTransit` by setting `inCluster` to true and `clientBroker` to `TLS`.
     * - _Required_: No
     * - _Type_: [Tls](./aws-properties-msk-cluster-tls.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-clientauthentication-tls */
    "Tls"?: Tls;
    /**
     * - Details for ClientAuthentication using no authentication.
     * - _Required_: No
     * - _Type_: [Unauthenticated](./aws-properties-msk-cluster-unauthenticated.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-clientauthentication-unauthenticated */
    "Unauthenticated"?: Unauthenticated;
}

/**
 * Details of the CloudWatch Logs destination for broker logs.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface CloudWatchLogs {
    /**
     * - Specifies whether broker logs get sent to the specified CloudWatch Logs destination.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-cloudwatchlogs-enabled */
    "Enabled": boolean | Intrinsic;
    /**
     * - The CloudWatch log group that is the destination for broker logs.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-cloudwatchlogs-loggroup */
    "LogGroup"?: string | Intrinsic;
}

/**
 * Firehose details for BrokerLogs.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface Firehose {
    /**
     * - The Kinesis Data Firehose delivery stream that is the destination for broker logs.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-firehose-deliverystream */
    "DeliveryStream"?: string | Intrinsic;
    /**
     * - Specifies whether broker logs get send to the specified Kinesis Data Firehose delivery stream.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-firehose-enabled */
    "Enabled": boolean | Intrinsic;
}

/**
 * The details of the Amazon S3 destination for broker logs.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface S3 {
    /**
     * - The name of the S3 bucket that is the destination for broker logs.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-s3-bucket */
    "Bucket"?: string | Intrinsic;
    /**
     * - Specifies whether broker logs get sent to the specified Amazon S3 destination.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-s3-enabled */
    "Enabled": boolean | Intrinsic;
    /**
     * - The S3 prefix that is the destination for broker logs.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-s3-prefix */
    "Prefix"?: string | Intrinsic;
}

/**
 * The broker logs configuration for this MSK cluster.
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
    "CloudWatchLogs"?: CloudWatchLogs;
    /**
     * - Details of the Kinesis Data Firehose delivery stream that is the destination for broker logs.
     * - _Required_: No
     * - _Type_: [Firehose](./aws-properties-msk-cluster-firehose.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-brokerlogs-firehose */
    "Firehose"?: Firehose;
    /**
     * - Details of the Amazon S3 destination for broker logs.
     * - _Required_: No
     * - _Type_: [S3](./aws-properties-msk-cluster-s3.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-brokerlogs-s3 */
    "S3"?: S3;
}

/**
 * You can configure your MSK cluster to send broker logs to different destination types. This is a container for the configuration details related to broker logs.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface LoggingInfo {
    /**
     * - You can configure your MSK cluster to send broker logs to different destination types. This configuration specifies the details of these destinations.
     * - _Required_: Yes
     * - _Type_: [BrokerLogs](./aws-properties-msk-cluster-brokerlogs.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-logginginfo-brokerlogs */
    "BrokerLogs": BrokerLogs;
}

/**
 * Indicates whether you want to enable or disable the JMX Exporter.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface JmxExporter {
    /**
     * - Indicates whether you want to enable or disable the JMX Exporter.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-jmxexporter-enabledinbroker */
    "EnabledInBroker": boolean | Intrinsic;
}

/**
 * Indicates whether you want to enable or disable the Node Exporter.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface NodeExporter {
    /**
     * - Indicates whether you want to enable or disable the Node Exporter.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-nodeexporter-enabledinbroker */
    "EnabledInBroker": boolean | Intrinsic;
}

/**
 * Prometheus settings for open monitoring.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface Prometheus {
    /**
     * - Indicates whether you want to enable or disable the JMX Exporter.
     * - _Required_: No
     * - _Type_: [JmxExporter](./aws-properties-msk-cluster-jmxexporter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-prometheus-jmxexporter */
    "JmxExporter"?: JmxExporter;
    /**
     * - Indicates whether you want to enable or disable the Node Exporter.
     * - _Required_: No
     * - _Type_: [NodeExporter](./aws-properties-msk-cluster-nodeexporter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-prometheus-nodeexporter */
    "NodeExporter"?: NodeExporter;
}

/**
 * JMX and Node monitoring for the MSK cluster.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface OpenMonitoring {
    /**
     * - Prometheus exporter settings.
     * - _Required_: Yes
     * - _Type_: [Prometheus](./aws-properties-msk-cluster-prometheus.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-openmonitoring-prometheus */
    "Prometheus": Prometheus;
}

/**
 * Contains information about provisioned throughput for EBS storage volumes attached to kafka broker nodes.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface ProvisionedThroughput {
    /**
     * - Provisioned throughput is on or off.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-provisionedthroughput-enabled */
    "Enabled"?: boolean | Intrinsic;
    /**
     * - Throughput value of the EBS volumes for the data drive on each kafka broker node in MiB per second.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-provisionedthroughput-volumethroughput */
    "VolumeThroughput"?: number | Intrinsic;
}

/**
 * Contains information about the EBS storage volumes attached to the broker nodes.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface EBSStorageInfo {
    /**
     * - EBS volume provisioned throughput information.
     * - _Required_: No
     * - _Type_: [ProvisionedThroughput](./aws-properties-msk-cluster-provisionedthroughput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-ebsstorageinfo-provisionedthroughput */
    "ProvisionedThroughput"?: ProvisionedThroughput;
    /**
     * - The size in GiB of the EBS volume for the data drive on each broker node.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `16384`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-ebsstorageinfo-volumesize */
    "VolumeSize"?: number | Intrinsic;
}

/**
 * Contains information about storage volumes attached to Amazon MSK broker nodes.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface StorageInfo {
    /**
     * - EBS volume information.
     * - _Required_: No
     * - _Type_: [EBSStorageInfo](./aws-properties-msk-cluster-ebsstorageinfo.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-storageinfo-ebsstorageinfo */
    "EBSStorageInfo"?: EBSStorageInfo;
}

/**
 * Details for client authentication using TLS for VpcConnectivity.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface VpcConnectivityTls {
    /**
     * - TLS authentication is enabled or not.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-vpcconnectivitytls-enabled */
    "Enabled": boolean | Intrinsic;
}

/**
 * Details for SASL/IAM client authentication for VpcConnectivity.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface VpcConnectivityIam {
    /**
     * - SASL/IAM authentication is enabled or not.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-vpcconnectivityiam-enabled */
    "Enabled": boolean | Intrinsic;
}

/**
 * Details for SASL/SCRAM client authentication for VpcConnectivity.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface VpcConnectivityScram {
    /**
     * - SASL/SCRAM authentication is enabled or not.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-vpcconnectivityscram-enabled */
    "Enabled": boolean | Intrinsic;
}

/**
 * Details for client authentication using SASL for VpcConnectivity.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface VpcConnectivitySasl {
    /**
     * - Details for ClientAuthentication using IAM for VpcConnectivity.
     * - _Required_: No
     * - _Type_: [VpcConnectivityIam](./aws-properties-msk-cluster-vpcconnectivityiam.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-vpcconnectivitysasl-iam */
    "Iam"?: VpcConnectivityIam;
    /**
     * - Details for SASL/SCRAM client authentication for VpcConnectivity.
     * - _Required_: No
     * - _Type_: [VpcConnectivityScram](./aws-properties-msk-cluster-vpcconnectivityscram.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-vpcconnectivitysasl-scram */
    "Scram"?: VpcConnectivityScram;
}

/**
 * Includes all client authentication information for VpcConnectivity.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface VpcConnectivityClientAuthentication {
    /**
     * - Details for VpcConnectivity ClientAuthentication using SASL.
     * - _Required_: No
     * - _Type_: [VpcConnectivitySasl](./aws-properties-msk-cluster-vpcconnectivitysasl.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-vpcconnectivityclientauthentication-sasl */
    "Sasl"?: VpcConnectivitySasl;
    /**
     * - Details for VpcConnectivity ClientAuthentication using TLS.
     * - _Required_: No
     * - _Type_: [VpcConnectivityTls](./aws-properties-msk-cluster-vpcconnectivitytls.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-vpcconnectivityclientauthentication-tls */
    "Tls"?: VpcConnectivityTls;
}

/**
 * VPC connection control settings for brokers.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface VpcConnectivity {
    /**
     * - VPC connection control settings for brokers.
     * - _Required_: No
     * - _Type_: [VpcConnectivityClientAuthentication](./aws-properties-msk-cluster-vpcconnectivityclientauthentication.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-vpcconnectivity-clientauthentication */
    "ClientAuthentication"?: VpcConnectivityClientAuthentication;
}

/**
 * Broker access controls.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface ConnectivityInfo {
    /**
     * - Access control settings for the cluster's brokers.
     * - _Required_: No
     * - _Type_: [PublicAccess](./aws-properties-msk-cluster-publicaccess.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-connectivityinfo-publicaccess */
    "PublicAccess"?: PublicAccess;
    /**
     * - VPC connection control settings for brokers.
     * - _Required_: No
     * - _Type_: [VpcConnectivity](./aws-properties-msk-cluster-vpcconnectivity.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-connectivityinfo-vpcconnectivity */
    "VpcConnectivity"?: VpcConnectivity;
}

/**
 * Describes the setup to be used for the broker nodes in the cluster.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface BrokerNodeGroupInfo {
    /**
     * - This parameter is currently not in use.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `6`
     * - _Maximum_: `9`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-brokernodegroupinfo-brokerazdistribution */
    "BrokerAZDistribution"?: string | Intrinsic;
    /**
     * - The list of subnets to connect to in the client virtual private cloud (VPC). Amazon creates elastic network interfaces (ENIs) inside these subnets. Client applications use ENIs to produce and consume data.
     * - If you use the US West (N. California) Region, specify exactly two subnets. For other Regions where Amazon MSK is available, you can specify either two or three subnets. The subnets that you specify must be in distinct Availability Zones. When you create a cluster, Amazon MSK distributes the broker nodes evenly across the subnets that you specify.
     * - Client subnets can't occupy the Availability Zone with ID `use1-az3`.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-brokernodegroupinfo-clientsubnets */
    "ClientSubnets": (string | Intrinsic)[];
    /**
     * - Information about the cluster's connectivity setting.
     * - _Required_: No
     * - _Type_: [ConnectivityInfo](./aws-properties-msk-cluster-connectivityinfo.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-brokernodegroupinfo-connectivityinfo */
    "ConnectivityInfo"?: ConnectivityInfo;
    /**
     * - The type of Amazon EC2 instances to use for brokers. The following instance types are allowed: kafka.m5.large, kafka.m5.xlarge, kafka.m5.2xlarge, kafka.m5.4xlarge, kafka.m5.8xlarge, kafka.m5.12xlarge, kafka.m5.16xlarge, kafka.m5.24xlarge, and kafka.t3.small.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `5`
     * - _Maximum_: `32`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-brokernodegroupinfo-instancetype */
    "InstanceType": string | Intrinsic;
    /**
     * - The security groups to associate with the ENIs in order to specify who can connect to and communicate with the Amazon MSK cluster. If you don't specify a security group, Amazon MSK uses the default security group associated with the VPC. If you specify security groups that were shared with you, you must ensure that you have permissions to them. Specifically, you need the `ec2:DescribeSecurityGroups` permission.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-brokernodegroupinfo-securitygroups */
    "SecurityGroups"?: (string | Intrinsic)[];
    /**
     * - Contains information about storage volumes attached to Amazon MSK broker nodes.
     * - _Required_: No
     * - _Type_: [StorageInfo](./aws-properties-msk-cluster-storageinfo.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-brokernodegroupinfo-storageinfo */
    "StorageInfo"?: StorageInfo;
}

/**
 * Creates a new MSK cluster.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html */

export interface MSKCluster extends ResourceAttributes {
    "Type": "AWS::MSK::Cluster";
    "Properties": {
        /**
         * - Information about the broker nodes in the cluster.
         * - _Required_: Yes
         * - _Type_: [BrokerNodeGroupInfo](./aws-properties-msk-cluster-brokernodegroupinfo.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-brokernodegroupinfo */
        "BrokerNodeGroupInfo": BrokerNodeGroupInfo;
        /**
         * - Includes all client authentication related information.
         * - _Required_: No
         * - _Type_: [ClientAuthentication](./aws-properties-msk-cluster-clientauthentication.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-clientauthentication */
        "ClientAuthentication"?: ClientAuthentication;
        /**
         * - The name of the cluster.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-clustername */
        "ClusterName": string | Intrinsic;
        /**
         * - Represents the configuration that you want MSK to use for the cluster.
         * - _Required_: No
         * - _Type_: [ConfigurationInfo](./aws-properties-msk-cluster-configurationinfo.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-configurationinfo */
        "ConfigurationInfo"?: ConfigurationInfo;
        /**
         * - The version of the cluster that you want to update.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-currentversion */
        "CurrentVersion"?: string | Intrinsic;
        /**
         * - Includes all encryption-related information.
         * - _Required_: No
         * - _Type_: [EncryptionInfo](./aws-properties-msk-cluster-encryptioninfo.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-encryptioninfo */
        "EncryptionInfo"?: EncryptionInfo;
        /**
         * - Specifies the level of monitoring for the MSK cluster.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `DEFAULT | PER_BROKER | PER_TOPIC_PER_BROKER | PER_TOPIC_PER_PARTITION`
         * - _Minimum_: `7`
         * - _Maximum_: `23`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-enhancedmonitoring */
        "EnhancedMonitoring"?: string | Intrinsic;
        /**
         * - The version of Apache Kafka. You can use Amazon MSK to create clusters that use [supported Apache Kafka versions](https://docs.aws.amazon.com/msk/latest/developerguide/supported-kafka-versions.html).
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-kafkaversion */
        "KafkaVersion": string | Intrinsic;
        /**
         * - Logging info details for the cluster.
         * - _Required_: No
         * - _Type_: [LoggingInfo](./aws-properties-msk-cluster-logginginfo.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-logginginfo */
        "LoggingInfo"?: LoggingInfo;
        /**
         * - The number of broker nodes in the cluster.
         * - _Required_: Yes
         * - _Type_: Integer
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-numberofbrokernodes */
        "NumberOfBrokerNodes": number | Intrinsic;
        /**
         * - The settings for open monitoring.
         * - _Required_: No
         * - _Type_: [OpenMonitoring](./aws-properties-msk-cluster-openmonitoring.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-openmonitoring */
        "OpenMonitoring"?: OpenMonitoring;
        /**
         * - This controls storage mode for supported storage tiers.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `LOCAL | TIERED`
         * - _Minimum_: `5`
         * - _Maximum_: `6`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-storagemode */
        "StorageMode"?: string | Intrinsic;
        /**
         * - An arbitrary set of tags (key-value pairs) for the cluster.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html#cfn-msk-cluster-tags */
        "Tags"?: Record<string, string | Intrinsic>;
    };
}