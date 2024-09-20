import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `Tag` property type specifies Property description not available. for an [AWS::Logs::DeliveryDestination](./aws-resource-logs-deliverydestination.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverydestination.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverydestination.html#cfn-logs-deliverydestination-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverydestination.html#cfn-logs-deliverydestination-tag-value */
  Value: string | Intrinsic
}

/**
 * This structure contains information about one _delivery destination_ in your account. A delivery destination is an AWS resource that represents an AWS service that logs can be sent to. CloudWatch Logs, Amazon S3, are supported as Firehose delivery destinations.
 * To configure logs delivery between a supported AWS service and a destination, you must do the following:
 * *   Create a delivery source, which is a logical object that represents the resource that is actually sending the logs. For more information, see [PutDeliverySource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html).
 *
 * *   Create a _delivery destination_, which is a logical object that represents the actual delivery destination.
 *
 * *   If you are delivering logs cross-account, you must use [PutDeliveryDestinationPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html) in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination.
 *
 * *   Create a _delivery_ by pairing exactly one delivery source and one delivery destination. For more information, see [CreateDelivery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html).
 * You can configure a single delivery source to send logs to multiple destinations by creating multiple deliveries. You can also create multiple deliveries to configure multiple delivery sources to send logs to the same delivery destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverydestination.html */

export interface LogsDeliveryDestination extends ResourceAttributes {
  Type: 'AWS::Logs::DeliveryDestination'
  Properties: {
    /**
     * - A structure that contains information about one delivery destination policy.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverydestination.html#cfn-logs-deliverydestination-deliverydestinationpolicy */
    DeliveryDestinationPolicy?: any | Intrinsic
    /**
     * - The ARN of the AWS destination that this delivery destination represents. That AWS destination can be a log group in CloudWatch Logs, an Amazon S3 bucket, or a delivery stream in Firehose.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\w#+=/:,.@-]*\*?`
     * - _Minimum_: `16`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverydestination.html#cfn-logs-deliverydestination-destinationresourcearn */
    DestinationResourceArn?: string | Intrinsic
    /**
     * - The name of this delivery destination.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\w-]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `60`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverydestination.html#cfn-logs-deliverydestination-name */
    Name: string | Intrinsic
    /**
     * - The tags that have been assigned to this delivery destination.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-logs-deliverydestination-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-deliverydestination.html#cfn-logs-deliverydestination-tags */
    Tags?: Tag[]
  }
}
