import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates or updates an account-level data protection policy or subscription filter policy that applies to all log groups or a subset of log groups in the account.
 * **Data protection policy**
 * A data protection policy can help safeguard sensitive data that's ingested by your log groups by auditing and masking the sensitive log data. Each account can have only one account-level data protection policy.
 * ###### Important
 * 
 * Sensitive data is detected and masked when it is ingested into a log group. When you set a data protection policy, log events ingested into the log groups before that time are not masked.
 * If you create a data protection policy for your whole account, it applies to both existing log groups and all log groups that are created later in this account. The account policy is applied to existing log groups with eventual consistency. It might take up to 5 minutes before sensitive data in existing log groups begins to be masked.
 * By default, when a user views a log event that includes masked data, the sensitive data is replaced by asterisks. A user who has the `logs:Unmask` permission can use a [GetLogEvents](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html) or [FilterLogEvents](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html) operation with the `unmask` parameter set to `true` to view the unmasked log events. Users with the `logs:Unmask` can also view unmasked data in the CloudWatch Logs console by running a CloudWatch Logs Insights query with the `unmask` query command.
 * For more information, including a list of types of data that can be audited and masked, see [Protect sensitive log data with masking](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html).
 * To create an account-level policy, you must be signed on with the `logs:PutDataProtectionPolicy` and `logs:PutAccountPolicy` permissions.
 * An account-level policy applies to all log groups in the account. You can also create a data protection policy that applies to just one log group. If a log group has its own data protection policy and the account also has an account-level data protection policy, then the two policies are cumulative. Any sensitive term specified in either policy is masked.
 * **Subscription filter policy**
 * A subscription filter policy sets up a real-time feed of log events from CloudWatch Logs to other AWS services. Account-level subscription filter policies apply to both existing log groups and log groups that are created later in this account. Supported destinations are Kinesis Data Streams, Firehose, and Lambda. When log events are sent to the receiving service, they are Base64 encoded and compressed with the GZIP format.
 * The following destinations are supported for subscription filters:
 * *   An Kinesis Data Streams data stream in the same account as the subscription policy, for same-account delivery.
 *     
 * *   An Firehose data stream in the same account as the subscription policy, for same-account delivery.
 *     
 * *   A Lambda function in the same account as the subscription policy, for same-account delivery.
 *     
 * *   A logical destination in a different account created with [PutDestination](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestination.html), for cross-account delivery. Kinesis Data Streams and Firehose are supported as logical destinations.
 * Each account can have one account-level subscription filter policy. If you are updating an existing filter, you must specify the correct name in `PolicyName`. To perform a `PutAccountPolicy` subscription filter operation for any destination except a Lambda function, you must also have the `iam:PassRole` permission.
 * **Field index policy**
 * You can use field index policies to create indexes on fields found in log events in the log group. Creating field indexes lowers the scan volume for CloudWatch Logs Insights queries that reference those fields, because these queries attempt to skip the processing of log events that are known to not match the indexed field. Good fields to index are fields that you often need to query for. Common examples of indexes include request ID, session ID, user IDs, or instance IDs. For more information, see [Create field indexes to improve query performance and reduce costs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-Field-Indexing.html)
 * For example, suppose you have created a field index for `requestId`. Then, any CloudWatch Logs Insights query on that log group that includes `requestId = _value_` or `requestId IN [_value_, _value_, ...]` will attempt to process only the log events where the indexed field matches the specified value.
 * Matches of log events to the names of indexed fields are case-sensitive. For example, an indexed field of `RequestId` won't match a log event containing `requestId`.
 * You can have one account-level field index policy that applies to all log groups in the account. Or you can create as many as 20 account-level field index policies that are each scoped to a subset of log groups with the `SelectionCriteria` parameter. If you have multiple account-level index policies with selection criteria, no two of them can use the same or overlapping log group name prefixes. For example, if you have one policy filtered to log groups that start with `my-log`, you can't have another field index policy filtered to `my-logpprod` or `my-logging`.
 * **Transformer policy**
 * A _log transformer policy_ transforms ingested log events into a different format, making them easier for you to process and analyze. You can also transform logs from different sources into standardized formats that contain relevant, source-specific information. After you have created a transformer, CloudWatch Logs performs this transformation at the time of log ingestion. You can then refer to the transformed versions of the logs during operations such as querying with CloudWatch Logs Insights or creating metric filters or subscription filters.
 * You can also use a transformer to copy metadata from metadata keys into the log events themselves. This metadata can include log group name, log stream name, account ID and Region.
 * A transformer for a log group is a series of processors, where each processor applies one type of transformation to the log events ingested into this log group. For more information about the available processors to use in a transformer, see [Processors that you can use](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-Processors).
 * Having log events in standardized format enables visibility across your applications for your log analysis, reporting, and alarming needs. CloudWatch Logs provides transformation for common log types with out-of-the-box transformation templates for major AWS log sources such as VPC flow logs, Lambda, and Amazon RDS. You can use pre-built transformation templates or create custom transformation policies.
 * You can create transformers only for the log groups in the Standard log class.
 * You can have one account-level transformer policy that applies to all log groups in the account. Or you can create as many as 20 account-level transformer policies that are each scoped to a subset of log groups with the `selectionCriteria` parameter. If you have multiple account-level transformer policies with selection criteria, no two of them can use the same or overlapping log group name prefixes. For example, if you have one policy filtered to log groups that start with `my-log`, you can't have another field index policy filtered to `my-logpprod` or `my-logging`.
 * You can also set up a transformer at the log-group level. For more information, see [AWS::Logs::Transformer](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html). If there is both a log-group level transformer created with `PutTransformer` and an account-level transformer that could apply to the same log group, the log group uses only the log-group level transformer. It ignores the account-level transformer.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html */

export interface LogsAccountPolicy extends ResourceAttributes {
    "Type": "AWS::Logs::AccountPolicy";
    "Properties": {
        /**
         * - Specify the policy, in JSON.
         * - **Data protection policy**
         * - A data protection policy must include two JSON blocks:
         * - In addition to the two JSON blocks, the `policyDocument` can also include `Name`, `Description`, and `Version` fields. The `Name` is different than the operation's `policyName` parameter, and is used as a dimension when CloudWatch Logs reports audit findings metrics to CloudWatch.
         * - The JSON specified in `policyDocument` can be up to 30,720 characters long.
         * - **Subscription filter policy**
         * - A subscription filter policy can include the following attributes in a JSON block:
         * - **Field index policy**
         * - A field index filter policy can include the following attribute in a JSON block:
         * - The following is an example of an index policy document that creates two indexes, `RequestId` and `TransactionId`.
         * - `"policyDocument": "{ \"Fields\": [ \"RequestId\", \"TransactionId\" ] }"`
         * - **Transformer policy**
         * - A transformer policy must include one JSON block with the array of processors and their configurations. For more information about available processors, see [Processors that you can use](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-Processors).
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `30720`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html#cfn-logs-accountpolicy-policydocument */
        "PolicyDocument": string | Intrinsic;
        /**
         * - A name for the policy. This must be unique within the account.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[^:*]{1,256}$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html#cfn-logs-accountpolicy-policyname */
        "PolicyName": string | Intrinsic;
        /**
         * - The type of policy that you're creating or updating.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `DATA_PROTECTION_POLICY | SUBSCRIPTION_FILTER_POLICY | FIELD_INDEX_POLICY | TRANSFORMER_POLICY`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html#cfn-logs-accountpolicy-policytype */
        "PolicyType": string | Intrinsic;
        /**
         * - Currently the only valid value for this parameter is `ALL`, which specifies that the policy applies to all log groups in the account. If you omit this parameter, the default of `ALL` is used. To scope down a subscription filter policy to a subset of log groups, use the `SelectionCriteria` parameter.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `ALL`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html#cfn-logs-accountpolicy-scope */
        "Scope"?: string | Intrinsic;
        /**
         * - Use this parameter to apply the new policy to a subset of log groups in the account.
         * - You need to specify `SelectionCriteria` only when you specify `SUBSCRIPTION_FILTER_POLICY`, `FIELD_INDEX_POLICY` or `TRANSFORMER_POLICY`for `PolicyType`.
         * - If `PolicyType` is `SUBSCRIPTION_FILTER_POLICY`, the only supported `SelectionCriteria` filter is `LogGroupName NOT IN []`
         * - If `PolicyType` is `FIELD_INDEX_POLICY` or `TRANSFORMER_POLICY`, the only supported `SelectionCriteria` filter is `LogGroupNamePrefix`
         * - The `SelectionCriteria` string can be up to 25KB in length. The length is determined by using its UTF-8 bytes.
         * - Using the `SelectionCriteria` parameter with `SUBSCRIPTION_FILTER_POLICY` is useful to help prevent infinite loops. For more information, see [Log recursion prevention](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Subscriptions-recursion-prevention.html).
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-accountpolicy.html#cfn-logs-accountpolicy-selectioncriteria */
        "SelectionCriteria"?: string | Intrinsic;
    };
}