import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Represents an attribute for describing the schema for the table and indexes.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html */

export interface AttributeDefinition {
    /**
     * - A name for the attribute.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-attributedefinition-attributename */
    "AttributeName": string | Intrinsic;
    /**
     * - The data type for the attribute, where:
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `S | N | B`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-attributedefinition-attributetype */
    "AttributeType": string | Intrinsic;
}

/**
 * The settings used to enable or disable CloudWatch Contributor Insights.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html */

export interface ContributorInsightsSpecification {
    /**
     * - Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false).
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Allowed values_: `ENABLE | DISABLE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-contributorinsightsspecification-enabled */
    "Enabled": boolean | Intrinsic;
}

/**
 * Represents _a single element_ of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.
 * A `KeySchemaElement` represents exactly one attribute of the primary key. For example, a simple primary key would be represented by one `KeySchemaElement` (for the partition key). A composite primary key would require one `KeySchemaElement` for the partition key, and another `KeySchemaElement` for the sort key.
 * A `KeySchemaElement` must be a scalar, top-level attribute (not a nested attribute). The data type must be one of String, Number, or Binary. The attribute cannot be nested within a List or a Map.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html */

export interface KeySchema {
    /**
     * - The name of a key attribute.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-keyschema-attributename */
    "AttributeName": string | Intrinsic;
    /**
     * - The role that this key attribute will assume:
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `HASH | RANGE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-keyschema-keytype */
    "KeyType": string | Intrinsic;
}

/**
 * Sets the maximum number of read and write units for the specified on-demand table. If you use this property, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html */

export interface OnDemandThroughput {
    /**
     * - Maximum number of read request units for the specified table.
     * - To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxReadRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxReadRequestUnits` to -1.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-ondemandthroughput-maxreadrequestunits */
    "MaxReadRequestUnits"?: number | Intrinsic;
    /**
     * - Maximum number of write request units for the specified table.
     * - To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxWriteRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxWriteRequestUnits` to -1.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-ondemandthroughput-maxwriterequestunits */
    "MaxWriteRequestUnits"?: number | Intrinsic;
}

/**
 * The settings used to enable point in time recovery.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html */

export interface PointInTimeRecoverySpecification {
    /**
     * - Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-pointintimerecoveryspecification-pointintimerecoveryenabled */
    "PointInTimeRecoveryEnabled"?: boolean | Intrinsic;
    /**
     * - The number of preceding days for which continuous backups are taken and maintained. Your table data is only recoverable to any point-in-time from within the configured recovery period. This parameter is optional. If no value is provided, the value will default to 35.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `35`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-pointintimerecoveryspecification-recoveryperiodindays */
    "RecoveryPeriodInDays"?: number | Intrinsic;
}

/**
 * Throughput for the specified table, which consists of values for `ReadCapacityUnits` and `WriteCapacityUnits`. For more information about the contents of a provisioned throughput structure, see [Amazon DynamoDB Table ProvisionedThroughput](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ProvisionedThroughput.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html */

export interface ProvisionedThroughput {
    /**
     * - The maximum number of strongly consistent reads consumed per second before DynamoDB returns a `ThrottlingException`. For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the _Amazon DynamoDB Developer Guide_.
     * - If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-provisionedthroughput-readcapacityunits */
    "ReadCapacityUnits": number | Intrinsic;
    /**
     * - The maximum number of writes consumed per second before DynamoDB returns a `ThrottlingException`. For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the _Amazon DynamoDB Developer Guide_.
     * - If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-provisionedthroughput-writecapacityunits */
    "WriteCapacityUnits": number | Intrinsic;
}

/**
 * The Kinesis Data Streams configuration for the specified table.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html */

export interface KinesisStreamSpecification {
    /**
     * - The precision for the time and date that the stream was created.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `MICROSECOND | MILLISECOND`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-kinesisstreamspecification-approximatecreationdatetimeprecision */
    "ApproximateCreationDateTimePrecision"?: string | Intrinsic;
    /**
     * - The ARN for a specific Kinesis data stream.
     * - Length Constraints: Minimum length of 37. Maximum length of 1024.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `37`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-kinesisstreamspecification-streamarn */
    "StreamArn": string | Intrinsic;
}

/**
 * Represents the settings used to enable server-side encryption.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html */

export interface SSESpecification {
    /**
     * - The AWS KMS key that should be used for the AWS KMS encryption. To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB key `alias/aws/dynamodb`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-ssespecification-kmsmasterkeyid */
    "KMSMasterKeyId"?: string | Intrinsic;
    /**
     * - Indicates whether server-side encryption is done using an AWS managed key or an AWS owned key. If enabled (true), server-side encryption type is set to `KMS` and an AWS managed key is used (AWS KMS charges apply). If disabled (false) or not specified, server-side encryption is set to AWS owned key.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-ssespecification-sseenabled */
    "SSEEnabled": boolean | Intrinsic;
    /**
     * - Server-side encryption type. The only supported value is:
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-ssespecification-ssetype */
    "SSEType"?: string | Intrinsic;
}

/**
 * Represents the DynamoDB Streams configuration for a table in DynamoDB.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html */

export interface StreamSpecification {
    /**
     * - Creates or updates a resource-based policy document that contains the permissions for DynamoDB resources, such as a table's streams. Resource-based policies let you define access permissions by specifying who has access to each resource, and the actions they are allowed to perform on each resource.
     * - In a CloudFormation template, you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to DynamoDB. For more information about resource-based policies, see [Using resource-based policies for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).
     * - _Required_: No
     * - _Type_: [ResourcePolicy](./aws-properties-dynamodb-table-resourcepolicy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-streamspecification-resourcepolicy */
    "ResourcePolicy"?: ResourcePolicy;
    /**
     * - When an item in the table is modified, `StreamViewType` determines what information is written to the stream for this table. Valid values for `StreamViewType` are:
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `NEW_IMAGE | OLD_IMAGE | NEW_AND_OLD_IMAGES | KEYS_ONLY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-streamspecification-streamviewtype */
    "StreamViewType": string | Intrinsic;
}

/**
 * Represents the properties of a local secondary index. A local secondary index can only be created when its parent table is created.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html */

export interface LocalSecondaryIndex {
    /**
     * - The name of the local secondary index. The name must be unique among all other indexes on this table.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9_.-]+`
     * - _Minimum_: `3`
     * - _Maximum_: `255`
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-localsecondaryindex-indexname */
    "IndexName": string | Intrinsic;
    /**
     * - The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:
     * - _Required_: Yes
     * - _Type_: [Array](./aws-properties-dynamodb-table-keyschema.html) of [KeySchema](./aws-properties-dynamodb-table-keyschema.html)
     * - _Minimum_: `1`
     * - _Maximum_: `2`
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-localsecondaryindex-keyschema */
    "KeySchema": KeySchema[];
    /**
     * - Represents attributes that are copied (projected) from the table into the local secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
     * - _Required_: Yes
     * - _Type_: [Projection](./aws-properties-dynamodb-table-projection.html)
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-localsecondaryindex-projection */
    "Projection": Projection;
}

/**
 * Provides visibility into the number of read and write operations your table or secondary index can instantaneously support. The settings can be modified using the `UpdateTable` operation to meet the throughput requirements of an upcoming peak event.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html */

export interface WarmThroughput {
    /**
     * - Represents the number of read operations your base table can instantaneously support.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-warmthroughput-readunitspersecond */
    "ReadUnitsPerSecond"?: number | Intrinsic;
    /**
     * - Represents the number of write operations your base table can instantaneously support.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-warmthroughput-writeunitspersecond */
    "WriteUnitsPerSecond"?: number | Intrinsic;
}

/**
 * Creates or updates a resource-based policy document that contains the permissions for DynamoDB resources, such as a table, its indexes, and stream. Resource-based policies let you define access permissions by specifying who has access to each resource, and the actions they are allowed to perform on each resource.
 * In a CloudFormation template, you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to DynamoDB. For more information about resource-based policies, see [Using resource-based policies for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).
 * While defining resource-based policies in your CloudFormation templates, the following considerations apply:
 * *   The maximum size supported for a resource-based policy document in JSON format is 20 KB. DynamoDB counts whitespaces when calculating the size of a policy against this limit.
 *     
 * *   Resource-based policies don't support [drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html#). If you update a policy outside of the CloudFormation stack template, you'll need to update the CloudFormation stack with the changes.
 *     
 * *   Resource-based policies don't support out-of-band changes. If you add, update, or delete a policy outside of the CloudFormation template, the change won't be overwritten if there are no changes to the policy within the template.
 *     
 *     For example, say that your template contains a resource-based policy, which you later update outside of the template. If you don't make any changes to the policy in the template, the updated policy in DynamoDB won’t be synced with the policy in the template.
 *     
 *     Conversely, say that your template doesn’t contain a resource-based policy, but you add a policy outside of the template. This policy won’t be removed from DynamoDB as long as you don’t add it to the template. When you add a policy to the template and update the stack, the existing policy in DynamoDB will be updated to match the one defined in the template.
 * For a full list of all considerations, see [Resource-based policy considerations](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-considerations.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html */

export interface ResourcePolicy {
    /**
     * - A resource-based policy document that contains permissions to add to the specified DynamoDB table, index, or both. In a CloudFormation template, you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to DynamoDB. For more information about resource-based policies, see [Using resource-based policies for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).
     * - _Required_: Yes
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-resourcepolicy-policydocument */
    "PolicyDocument": any | Intrinsic;
}

/**
 * Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single DynamoDB table.
 * AWS-assigned tag names and values are automatically assigned the `aws:` prefix, which the user cannot assign. AWS-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix `user:` in the Cost Allocation Report. You cannot backdate the application of a tag.
 * For an overview on tagging DynamoDB resources, see [Tagging for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html) in the _Amazon DynamoDB Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html */

export interface Tag {
    /**
     * - The key of the tag. Tag keys are case sensitive. Each DynamoDB table can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the tag. Tag values are case-sensitive and can be null.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Represents the settings used to enable or disable Time to Live (TTL) for the specified table.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html */

export interface TimeToLiveSpecification {
    /**
     * - The name of the TTL attribute used to store the expiration time for items in the table.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-timetolivespecification-attributename */
    "AttributeName"?: string | Intrinsic;
    /**
     * - Indicates whether TTL is to be enabled (true) or disabled (false) on the table.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-timetolivespecification-enabled */
    "Enabled": boolean | Intrinsic;
}

/**
 * Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html */

export interface Projection {
    /**
     * - Represents the non-key attribute names which will be projected into the index.
     * - For global and local secondary indexes, the total count of `NonKeyAttributes` summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of `INCLUDE`. You still can specify the ProjectionType of `ALL` to project all attributes from the source table, even if the table has more than 100 attributes.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `20`
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-projection-nonkeyattributes */
    "NonKeyAttributes"?: (string | Intrinsic)[];
    /**
     * - The set of attributes that are projected into the index:
     * - When using the DynamoDB console, `ALL` is selected by default.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ALL | KEYS_ONLY | INCLUDE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-projection-projectiontype */
    "ProjectionType"?: string | Intrinsic;
}

/**
 * Represents the properties of a global secondary index.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html */

export interface GlobalSecondaryIndex {
    /**
     * - The settings used to enable or disable CloudWatch Contributor Insights for the specified global secondary index.
     * - _Required_: No
     * - _Type_: [ContributorInsightsSpecification](./aws-properties-dynamodb-table-contributorinsightsspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-globalsecondaryindex-contributorinsightsspecification */
    "ContributorInsightsSpecification"?: ContributorInsightsSpecification;
    /**
     * - The name of the global secondary index. The name must be unique among all other indexes on this table.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9_.-]+`
     * - _Minimum_: `3`
     * - _Maximum_: `255`
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-globalsecondaryindex-indexname */
    "IndexName": string | Intrinsic;
    /**
     * - The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:
     * - _Required_: Yes
     * - _Type_: [Array](./aws-properties-dynamodb-table-keyschema.html) of [KeySchema](./aws-properties-dynamodb-table-keyschema.html)
     * - _Minimum_: `1`
     * - _Maximum_: `2`
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-globalsecondaryindex-keyschema */
    "KeySchema": KeySchema[];
    /**
     * - The maximum number of read and write units for the specified global secondary index. If you use this parameter, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both. You must use either `OnDemandThroughput` or `ProvisionedThroughput` based on your table's capacity mode.
     * - _Required_: No
     * - _Type_: [OnDemandThroughput](./aws-properties-dynamodb-table-ondemandthroughput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-globalsecondaryindex-ondemandthroughput */
    "OnDemandThroughput"?: OnDemandThroughput;
    /**
     * - Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
     * - _Required_: Yes
     * - _Type_: [Projection](./aws-properties-dynamodb-table-projection.html)
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-globalsecondaryindex-projection */
    "Projection": Projection;
    /**
     * - Represents the provisioned throughput settings for the specified global secondary index. You must use either `OnDemandThroughput` or `ProvisionedThroughput` based on your table's capacity mode.
     * - For current minimum and maximum provisioned throughput values, see [Service, Account, and Table Quotas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the _Amazon DynamoDB Developer Guide_.
     * - _Required_: No
     * - _Type_: [ProvisionedThroughput](./aws-properties-dynamodb-table-provisionedthroughput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-globalsecondaryindex-provisionedthroughput */
    "ProvisionedThroughput"?: ProvisionedThroughput;
    /**
     * - Represents the warm throughput value (in read units per second and write units per second) for the specified secondary index. If you use this parameter, you must specify `ReadUnitsPerSecond`, `WriteUnitsPerSecond`, or both.
     * - _Required_: No
     * - _Type_: [WarmThroughput](./aws-properties-dynamodb-table-warmthroughput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-globalsecondaryindex-warmthroughput */
    "WarmThroughput"?: WarmThroughput;
}

/**
 * The S3 bucket that is being imported from.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html */

export interface S3BucketSource {
    /**
     * - The S3 bucket that is being imported from.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-z0-9A-Z]+[\.\-\w]*[a-z0-9A-Z]+$`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-s3bucketsource-s3bucket */
    "S3Bucket": string | Intrinsic;
    /**
     * - The account number of the S3 bucket that is being imported from. If the bucket is owned by the requester this is optional.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[0-9]{12}`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-s3bucketsource-s3bucketowner */
    "S3BucketOwner"?: string | Intrinsic;
    /**
     * - The key prefix shared by all S3 Objects that are being imported.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-s3bucketsource-s3keyprefix */
    "S3KeyPrefix"?: string | Intrinsic;
}

/**
 * The options for imported source files in CSV format. The values are Delimiter and HeaderList.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html */

export interface Csv {
    /**
     * - The delimiter used for separating items in the CSV file being imported.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[,;:|\t ]`
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-csv-delimiter */
    "Delimiter"?: string | Intrinsic;
    /**
     * - List of the headers used to specify a common header for all source CSV files being imported. If this field is specified then the first line of each CSV file is treated as data instead of the header. If this field is not specified the the first line of each CSV file is treated as the header.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-csv-headerlist */
    "HeaderList"?: (string | Intrinsic)[];
}

/**
 * The format options for the data that was imported into the target table. There is one value, CsvOption.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html */

export interface InputFormatOptions {
    /**
     * - The options for imported source files in CSV format. The values are Delimiter and HeaderList.
     * - _Required_: No
     * - _Type_: [Csv](./aws-properties-dynamodb-table-csv.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-inputformatoptions-csv */
    "Csv"?: Csv;
}

/**
 * Specifies the properties of data being imported from the S3 bucket source to the table.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html */

export interface ImportSourceSpecification {
    /**
     * - Type of compression to be used on the input coming from the imported table.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `GZIP | ZSTD | NONE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-importsourcespecification-inputcompressiontype */
    "InputCompressionType"?: string | Intrinsic;
    /**
     * - The format of the source data. Valid values for `ImportFormat` are `CSV`, `DYNAMODB_JSON` or `ION`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `DYNAMODB_JSON | ION | CSV`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-importsourcespecification-inputformat */
    "InputFormat": string | Intrinsic;
    /**
     * - Additional properties that specify how the input is formatted,
     * - _Required_: No
     * - _Type_: [InputFormatOptions](./aws-properties-dynamodb-table-inputformatoptions.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-importsourcespecification-inputformatoptions */
    "InputFormatOptions"?: InputFormatOptions;
    /**
     * - The S3 bucket that provides the source for the import.
     * - _Required_: Yes
     * - _Type_: [S3BucketSource](./aws-properties-dynamodb-table-s3bucketsource.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-importsourcespecification-s3bucketsource */
    "S3BucketSource": S3BucketSource;
}

/**
 * The `AWS::DynamoDB::Table` resource creates a DynamoDB table. For more information, see [CreateTable](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html) in the _Amazon DynamoDB API Reference_.
 * You should be aware of the following behaviors when working with DynamoDB tables:
 * *   AWS CloudFormation typically creates DynamoDB tables in parallel. However, if your template includes multiple DynamoDB tables with indexes, you must declare dependencies so that the tables are created sequentially. Amazon DynamoDB limits the number of tables with secondary indexes that are in the creating state. If you create multiple tables with indexes at the same time, DynamoDB returns an error and the stack operation fails. For an example, see [DynamoDB Table with a DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#aws-resource-dynamodb-table--examples--DynamoDB_Table_with_a_DependsOn_Attribute).
 * ###### Important
 * 
 * Our guidance is to use the latest schema documented for your AWS CloudFormation templates. This schema supports the provisioning of all table settings below. When using this schema in your AWS CloudFormation templates, please ensure that your Identity and Access Management (IAM) policies are updated with appropriate permissions to allow for the authorization of these setting changes.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html */

export interface DynamoDBTable extends ResourceAttributes {
    "Type": "AWS::DynamoDB::Table";
    "Properties": {
        /**
         * - A list of attributes that describe the key schema for the table and indexes.
         * - This property is required to create a DynamoDB table.
         * - Update requires: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt). Replacement if you edit an existing AttributeDefinition.
         * - _Required_: Conditional
         * - _Type_: Array of [AttributeDefinition](./aws-properties-dynamodb-table-attributedefinition.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-attributedefinitions */
        "AttributeDefinitions"?: AttributeDefinition[];
        /**
         * - Specify how you are charged for read and write throughput and how you manage capacity.
         * - Valid values include:
         * - If not specified, the default is `PROVISIONED`.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `PROVISIONED | PAY_PER_REQUEST`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-billingmode */
        "BillingMode"?: string | Intrinsic;
        /**
         * - The settings used to enable or disable CloudWatch Contributor Insights for the specified table.
         * - _Required_: No
         * - _Type_: [ContributorInsightsSpecification](./aws-properties-dynamodb-table-contributorinsightsspecification.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-contributorinsightsspecification */
        "ContributorInsightsSpecification"?: ContributorInsightsSpecification;
        /**
         * - Determines if a table is protected from deletion. When enabled, the table cannot be deleted by any user or process. This setting is disabled by default. For more information, see [Using deletion protection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.DeletionProtection) in the _Amazon DynamoDBDeveloper Guide_.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-deletionprotectionenabled */
        "DeletionProtectionEnabled"?: boolean | Intrinsic;
        /**
         * - Global secondary indexes to be created on the table. You can create up to 20 global secondary indexes.
         * - _Required_: No
         * - _Type_: Array of [GlobalSecondaryIndex](./aws-properties-dynamodb-table-globalsecondaryindex.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-globalsecondaryindexes */
        "GlobalSecondaryIndexes"?: GlobalSecondaryIndex[];
        /**
         * - Specifies the properties of data being imported from the S3 bucket source to the" table.
         * - _Required_: No
         * - _Type_: [ImportSourceSpecification](./aws-properties-dynamodb-table-importsourcespecification.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-importsourcespecification */
        "ImportSourceSpecification"?: ImportSourceSpecification;
        /**
         * - Specifies the attributes that make up the primary key for the table. The attributes in the `KeySchema` property must also be defined in the `AttributeDefinitions` property.
         * - _Required_: Yes
         * - _Type_: [Array](./aws-properties-dynamodb-table-keyschema.html) of [KeySchema](./aws-properties-dynamodb-table-keyschema.html)
         * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-keyschema */
        "KeySchema": KeySchema[];
        /**
         * - The Kinesis Data Streams configuration for the specified table.
         * - _Required_: No
         * - _Type_: [KinesisStreamSpecification](./aws-properties-dynamodb-table-kinesisstreamspecification.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-kinesisstreamspecification */
        "KinesisStreamSpecification"?: KinesisStreamSpecification;
        /**
         * - Local secondary indexes to be created on the table. You can create up to 5 local secondary indexes. Each index is scoped to a given hash key value. The size of each hash key can be up to 10 gigabytes.
         * - _Required_: No
         * - _Type_: Array of [LocalSecondaryIndex](./aws-properties-dynamodb-table-localsecondaryindex.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-localsecondaryindexes */
        "LocalSecondaryIndexes"?: LocalSecondaryIndex[];
        /**
         * - Sets the maximum number of read and write units for the specified on-demand table. If you use this property, you must specify `MaxReadRequestUnits`, `MaxWriteRequestUnits`, or both.
         * - _Required_: No
         * - _Type_: [OnDemandThroughput](./aws-properties-dynamodb-table-ondemandthroughput.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-ondemandthroughput */
        "OnDemandThroughput"?: OnDemandThroughput;
        /**
         * - The settings used to enable point in time recovery.
         * - _Required_: No
         * - _Type_: [PointInTimeRecoverySpecification](./aws-properties-dynamodb-table-pointintimerecoveryspecification.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-pointintimerecoveryspecification */
        "PointInTimeRecoverySpecification"?: PointInTimeRecoverySpecification;
        /**
         * - Throughput for the specified table, which consists of values for `ReadCapacityUnits` and `WriteCapacityUnits`. For more information about the contents of a provisioned throughput structure, see [Amazon DynamoDB Table ProvisionedThroughput](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ProvisionedThroughput.html).
         * - If you set `BillingMode` as `PROVISIONED`, you must specify this property. If you set `BillingMode` as `PAY_PER_REQUEST`, you cannot specify this property.
         * - _Required_: Conditional
         * - _Type_: [ProvisionedThroughput](./aws-properties-dynamodb-table-provisionedthroughput.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-provisionedthroughput */
        "ProvisionedThroughput"?: ProvisionedThroughput;
        /**
         * - A resource-based policy document that contains permissions to add to the specified table. In a CloudFormation template, you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to DynamoDB. For more information about resource-based policies, see [Using resource-based policies for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).
         * - When you attach a resource-based policy while creating a table, the policy creation is _strongly consistent_. For information about the considerations that you should keep in mind while attaching a resource-based policy, see [Resource-based policy considerations](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-considerations.html).
         * - _Required_: No
         * - _Type_: [ResourcePolicy](./aws-properties-dynamodb-table-resourcepolicy.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-resourcepolicy */
        "ResourcePolicy"?: ResourcePolicy;
        /**
         * - Specifies the settings to enable server-side encryption.
         * - _Required_: No
         * - _Type_: [SSESpecification](./aws-properties-dynamodb-table-ssespecification.html)
         * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-ssespecification */
        "SSESpecification"?: SSESpecification;
        /**
         * - The settings for the DynamoDB table stream, which capture changes to items stored in the table.
         * - _Required_: No
         * - _Type_: [StreamSpecification](./aws-properties-dynamodb-table-streamspecification.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-streamspecification */
        "StreamSpecification"?: StreamSpecification;
        /**
         * - The table class of the new table. Valid values are `STANDARD` and `STANDARD_INFREQUENT_ACCESS`.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `STANDARD | STANDARD_INFREQUENT_ACCESS`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-tableclass */
        "TableClass"?: string | Intrinsic;
        /**
         * - A name for the table. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `1024`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-tablename */
        "TableName"?: string | Intrinsic;
        /**
         * - An array of key-value pairs to apply to this resource.
         * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-dynamodb-table-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-tags */
        "Tags"?: Tag[];
        /**
         * - Specifies the Time to Live (TTL) settings for the table.
         * - _Required_: No
         * - _Type_: [TimeToLiveSpecification](./aws-properties-dynamodb-table-timetolivespecification.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-timetolivespecification */
        "TimeToLiveSpecification"?: TimeToLiveSpecification;
        /**
         * - Represents the warm throughput (in read units per second and write units per second) for creating a table.
         * - _Required_: No
         * - _Type_: [WarmThroughput](./aws-properties-dynamodb-table-warmthroughput.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-warmthroughput */
        "WarmThroughput"?: WarmThroughput;
    };
}