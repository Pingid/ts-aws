import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `Tag` property type specifies Property description not available. for an [AWS::Logs::LogGroup](./aws-resource-logs-loggroup.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html#cfn-logs-loggroup-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html#cfn-logs-loggroup-tag-value */
  Value: string | Intrinsic
}

/**
 * The `AWS::Logs::LogGroup` resource specifies a log group. A log group defines common properties for log streams, such as their retention and access control rules. Each log stream must belong to one log group.
 * You can create up to 1,000,000 log groups per Region per account. You must use the following guidelines when naming a log group:
 * *   Log group names must be unique within a Region for an AWS account.
 *
 * *   Log group names can be between 1 and 512 characters long.
 *
 * *   Log group names consist of the following characters: a-z, A-Z, 0-9, '\_' (underscore), '-' (hyphen), '/' (forward slash), and '.' (period).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html */

export interface LogsLogGroup extends ResourceAttributes {
  Type: 'AWS::Logs::LogGroup'
  Properties: {
    /**
     * - Creates a data protection policy and assigns it to the log group. A data protection policy can help safeguard sensitive data that's ingested by the log group by auditing and masking the sensitive log data. When a user who does not have permission to view masked data views a log event that includes masked data, the sensitive data is replaced by asterisks.
     * - For more information, including a list of types of data that can be audited and masked, see [Protect sensitive log data with masking](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html).
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html#cfn-logs-loggroup-dataprotectionpolicy */
    DataProtectionPolicy?: any | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the AWS KMS key to use when encrypting log data.
     * - To associate an AWS KMS key with the log group, specify the ARN of that KMS key here. If you do so, ingested data is encrypted using this key. This association is stored as long as the data encrypted with the KMS key is still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested.
     * - If you attempt to associate a KMS key with the log group but the KMS key doesn't exist or is deactivated, you will receive an `InvalidParameterException` error.
     * - Log group data is always encrypted in CloudWatch Logs. If you omit this key, the encryption does not use AWS KMS. For more information, see [Encrypt log data in CloudWatch Logs using AWS Key Management Service](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/encrypt-log-data-kms.html)
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:[a-z0-9-]+:kms:[a-z0-9-]+:\d{12}:(key|alias)/.+\Z`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html#cfn-logs-loggroup-kmskeyid */
    KmsKeyId?: string | Intrinsic
    /**
     * - Specifies the log group class for this log group. There are two classes:
     * - For details about the features supported by each class, see [Log classes](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html)
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `STANDARD | INFREQUENT_ACCESS`
     * - _Update requires_: Updates are not supported.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html#cfn-logs-loggroup-loggroupclass */
    LogGroupClass?: string | Intrinsic
    /**
     * - The name of the log group. If you don't specify a name, AWS CloudFormation generates a unique ID for the log group.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[.\-_/#A-Za-z0-9]{1,512}\Z`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html#cfn-logs-loggroup-loggroupname */
    LogGroupName?: string | Intrinsic
    /**
     * - The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, and 3653.
     * - To set a log group so that its log events do not expire, use [DeleteRetentionPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html).
     * - _Required_: No
     * - _Type_: Integer
     * - _Allowed values_: `1 | 3 | 5 | 7 | 14 | 30 | 60 | 90 | 120 | 150 | 180 | 365 | 400 | 545 | 731 | 1096 | 1827 | 2192 | 2557 | 2922 | 3288 | 3653`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html#cfn-logs-loggroup-retentionindays */
    RetentionInDays?: number | Intrinsic
    /**
     * - An array of key-value pairs to apply to the log group.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-logs-loggroup-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html#cfn-logs-loggroup-tags */
    Tags?: Tag[]
  }
}
