import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Describes the destination options for a flow log.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html */

export interface DestinationOptions {
  /**
   * - The format for the flow log. The default is `plain-text`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `plain-text | parquet`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-destinationoptions-fileformat */
  FileFormat: string | Intrinsic
  /**
   * - Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3. The default is `false`.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-destinationoptions-hivecompatiblepartitions */
  HiveCompatiblePartitions: boolean | Intrinsic
  /**
   * - Indicates whether to partition the flow log per hour. This reduces the cost and response time for queries. The default is `false`.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-destinationoptions-perhourpartition */
  PerHourPartition: boolean | Intrinsic
}

/**
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html */

export interface Tag {
  /**
   * - The tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-tag-value */
  Value: string | Intrinsic
}

/**
 * Specifies a VPC flow log that captures IP traffic for a specified network interface, subnet, or VPC. To view the log data, use Amazon CloudWatch Logs (CloudWatch Logs) to help troubleshoot connection issues. For example, you can use a flow log to investigate why certain traffic isn't reaching an instance, which can help you diagnose overly restrictive security group rules. For more information, see [VPC Flow Logs](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html) in the _Amazon VPC User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html */

export interface EC2FlowLog extends ResourceAttributes {
  Type: 'AWS::EC2::FlowLog'
  Properties: {
    /**
     * - The ARN of the IAM role that allows the service to publish flow logs across accounts.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-delivercrossaccountrole */
    DeliverCrossAccountRole?: string | Intrinsic
    /**
     * - The ARN of the IAM role that allows Amazon EC2 to publish flow logs to the log destination.
     * - This parameter is required if the destination type is `cloud-watch-logs`, or if the destination type is `kinesis-data-firehose` and the delivery stream and the resources to monitor are in different accounts.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-deliverlogspermissionarn */
    DeliverLogsPermissionArn?: string | Intrinsic
    /**
     * - The destination options.
     * - _Required_: No
     * - _Type_: [DestinationOptions](./aws-properties-ec2-flowlog-destinationoptions.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-destinationoptions */
    DestinationOptions?: DestinationOptions
    /**
     * - The destination for the flow log data. The meaning of this parameter depends on the destination type.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-logdestination */
    LogDestination?: string | Intrinsic
    /**
     * - The type of destination for the flow log data.
     * - Default: `cloud-watch-logs`
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `cloud-watch-logs | s3 | kinesis-data-firehose`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-logdestinationtype */
    LogDestinationType?: string | Intrinsic
    /**
     * - The fields to include in the flow log record, in the order in which they should appear. If you omit this parameter, the flow log is created using the default format. If you specify this parameter, you must include at least one field. For more information about the available fields, see [Flow log records](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-log-records) in the _Amazon VPC User Guide_ or [Transit Gateway Flow Log records](https://docs.aws.amazon.com/vpc/latest/tgw/tgw-flow-logs.html#flow-log-records) in the _AWS Transit Gateway Guide_.
     * - Specify the fields using the `${field-id}` format, separated by spaces.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-logformat */
    LogFormat?: string | Intrinsic
    /**
     * - The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.
     * - This parameter is valid only if the destination type is `cloud-watch-logs`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-loggroupname */
    LogGroupName?: string | Intrinsic
    /**
     * - The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. The possible values are 60 seconds (1 minute) or 600 seconds (10 minutes). This parameter must be 60 seconds for transit gateway resource types.
     * - When a network interface is attached to a [Nitro-based instance](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html), the aggregation interval is always 60 seconds or less, regardless of the value that you specify.
     * - Default: 600
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-maxaggregationinterval */
    MaxAggregationInterval?: number | Intrinsic
    /**
     * - The ID of the resource to monitor. For example, if the resource type is `VPC`, specify the ID of the VPC.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-resourceid */
    ResourceId: string | Intrinsic
    /**
     * - The type of resource to monitor.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `NetworkInterface | Subnet | VPC | TransitGateway | TransitGatewayAttachment`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-resourcetype */
    ResourceType: string | Intrinsic
    /**
     * - The tags to apply to the flow logs.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ec2-flowlog-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-tags */
    Tags?: Tag[]
    /**
     * - The type of traffic to monitor (accepted traffic, rejected traffic, or all traffic). This parameter is not supported for transit gateway resource types. It is required for the other resource types.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ACCEPT | ALL | REJECT`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html#cfn-ec2-flowlog-traffictype */
    TrafficType?: string | Intrinsic
  }
}
