import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Options that specify the configuration of a persistent buffer. To configure how OpenSearch Ingestion encrypts this data, set the `EncryptionAtRestOptions`. For more information, see [Persistent buffering](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/osis-features-overview.html#persistent-buffering).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html */

export interface BufferOptions {
  /**
   * - Whether persistent buffering should be enabled.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-bufferoptions-persistentbufferenabled */
  PersistentBufferEnabled: boolean | Intrinsic
}

/**
 * Options to control how OpenSearch encrypts buffer data.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html */

export interface EncryptionAtRestOptions {
  /**
   * - The ARN of the KMS key used to encrypt buffer data. By default, data is encrypted using an AWS owned key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `7`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-encryptionatrestoptions-kmskeyarn */
  KmsKeyArn: string | Intrinsic
}

/**
 * A tag (key-value pair) for an OpenSearch Ingestion pipeline.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html */

export interface Tag {
  /**
   * - The tag key. Tag keys must be unique for the pipeline to which they are attached.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-tag-key */
  Key: string | Intrinsic
  /**
   * - The value assigned to the corresponding tag key. Tag values can be null and don't have to be unique in a tag set. For example, you can have a key value pair in a tag set of `project : Trinity` and `cost-center : Trinity`
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-tag-value */
  Value: string | Intrinsic
}

/**
 * The destination for OpenSearch Ingestion logs sent to Amazon CloudWatch.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html */

export interface CloudWatchLogDestination {
  /**
   * - The name of the CloudWatch Logs group to send pipeline logs to. You can specify an existing log group or create a new one. For example, `/aws/vendedlogs/OpenSearchService/pipelines`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\/aws\/vendedlogs\/[\.\-_/#A-Za-z0-9]+`
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-cloudwatchlogdestination-loggroup */
  LogGroup: string | Intrinsic
}

/**
 * Options for attaching a VPC to pipeline.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html */

export interface VpcAttachmentOptions {
  /**
   * - Whether a VPC is attached to the pipeline.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-vpcattachmentoptions-attachtovpc */
  AttachToVpc: boolean | Intrinsic
  /**
   * - The CIDR block to be reserved for OpenSearch Ingestion to create elastic network interfaces (ENIs).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/(3[0-2]|[12]?[0-9])$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-vpcattachmentoptions-cidrblock */
  CidrBlock: string | Intrinsic
}

/**
 * Container for the values required to configure logging for the pipeline. If you don't specify these values, OpenSearch Ingestion will not publish logs from your application to CloudWatch Logs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html */

export interface LogPublishingOptions {
  /**
   * - The destination for OpenSearch Ingestion logs sent to Amazon CloudWatch Logs. This parameter is required if `IsLoggingEnabled` is set to `true`.
   * - _Required_: No
   * - _Type_: [CloudWatchLogDestination](./aws-properties-osis-pipeline-cloudwatchlogdestination.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-logpublishingoptions-cloudwatchlogdestination */
  CloudWatchLogDestination?: CloudWatchLogDestination
  /**
   * - Whether logs should be published.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-logpublishingoptions-isloggingenabled */
  IsLoggingEnabled?: boolean | Intrinsic
}

/**
 * Options that specify the subnets and security groups for an OpenSearch Ingestion VPC endpoint.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html */

export interface VpcOptions {
  /**
   * - A list of security groups associated with the VPC endpoint.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `11`
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-vpcoptions-securitygroupids */
  SecurityGroupIds?: (string | Intrinsic)[]
  /**
   * - A list of subnet IDs associated with the VPC endpoint.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `15`
   * - _Maximum_: `24`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-vpcoptions-subnetids */
  SubnetIds: (string | Intrinsic)[]
  /**
   * - Options for attaching a VPC to a pipeline.
   * - _Required_: No
   * - _Type_: [VpcAttachmentOptions](./aws-properties-osis-pipeline-vpcattachmentoptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-vpcoptions-vpcattachmentoptions */
  VpcAttachmentOptions?: VpcAttachmentOptions
  /**
   * - Defines whether you or Amazon OpenSearch Ingestion service create and manage the VPC endpoint configured for the pipeline.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CUSTOMER | SERVICE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-vpcoptions-vpcendpointmanagement */
  VpcEndpointManagement?: string | Intrinsic
}

/**
 * The AWS::OSIS::Pipeline resource creates an Amazon OpenSearch Ingestion pipeline.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html */

export interface OSISPipeline extends ResourceAttributes {
  Type: 'AWS::OSIS::Pipeline'
  Properties: {
    /**
     * - Options that specify the configuration of a persistent buffer. To configure how OpenSearch Ingestion encrypts this data, set the `EncryptionAtRestOptions`. For more information, see [Persistent buffering](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/osis-features-overview.html#persistent-buffering).
     * - _Required_: No
     * - _Type_: [BufferOptions](./aws-properties-osis-pipeline-bufferoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-bufferoptions */
    BufferOptions?: BufferOptions
    /**
     * - Options to control how OpenSearch encrypts buffer data.
     * - _Required_: No
     * - _Type_: [EncryptionAtRestOptions](./aws-properties-osis-pipeline-encryptionatrestoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-encryptionatrestoptions */
    EncryptionAtRestOptions?: EncryptionAtRestOptions
    /**
     * - Key-value pairs that represent log publishing settings.
     * - _Required_: No
     * - _Type_: [LogPublishingOptions](./aws-properties-osis-pipeline-logpublishingoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-logpublishingoptions */
    LogPublishingOptions?: LogPublishingOptions
    /**
     * - The maximum pipeline capacity, in Ingestion Compute Units (ICUs).
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `384`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-maxunits */
    MaxUnits: number | Intrinsic
    /**
     * - The minimum pipeline capacity, in Ingestion Compute Units (ICUs).
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `384`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-minunits */
    MinUnits: number | Intrinsic
    /**
     * - The Data Prepper pipeline configuration in YAML format.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `24000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-pipelineconfigurationbody */
    PipelineConfigurationBody: string | Intrinsic
    /**
     * - The name of the pipeline.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-z][a-z0-9\-]+`
     * - _Minimum_: `3`
     * - _Maximum_: `28`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-pipelinename */
    PipelineName: string | Intrinsic
    /**
     * - List of tags to add to the pipeline upon creation.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-osis-pipeline-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-tags */
    Tags?: Tag[]
    /**
     * - Options that specify the subnets and security groups for an OpenSearch Ingestion VPC endpoint.
     * - _Required_: No
     * - _Type_: [VpcOptions](./aws-properties-osis-pipeline-vpcoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-osis-pipeline.html#cfn-osis-pipeline-vpcoptions */
    VpcOptions?: VpcOptions
  }
}
