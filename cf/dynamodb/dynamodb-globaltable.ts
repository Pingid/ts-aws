import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Represents an attribute for describing the schema for the table and indexes.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface AttributeDefinition {
    /**
     * - A name for the attribute.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-attributedefinition-attributename */
    "AttributeName": string | Intrinsic;
    /**
     * - The data type for the attribute, where:
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `S | N | B`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-attributedefinition-attributetype */
    "AttributeType": string | Intrinsic;
}

/**
 * Represents _a single element_ of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.
 * A `KeySchemaElement` represents exactly one attribute of the primary key. For example, a simple primary key would be represented by one `KeySchemaElement` (for the partition key). A composite primary key would require one `KeySchemaElement` for the partition key, and another `KeySchemaElement` for the sort key.
 * A `KeySchemaElement` must be a scalar, top-level attribute (not a nested attribute). The data type must be one of String, Number, or Binary. The attribute cannot be nested within a List or a Map.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface KeySchema {
    /**
     * - The name of a key attribute.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-keyschema-attributename */
    "AttributeName": string | Intrinsic;
    /**
     * - The role that this key attribute will assume:
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `HASH | RANGE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-keyschema-keytype */
    "KeyType": string | Intrinsic;
}

/**
 * Represents the settings used to enable server-side encryption.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface SSESpecification {
    /**
     * - Indicates whether server-side encryption is performed using an AWS managed key or an AWS owned key. If enabled (true), server-side encryption type is set to KMS and an AWS managed key is used (AWS KMS charges apply). If disabled (false) or not specified,server-side encryption is set to an AWS owned key. If you choose to use KMS encryption, you can also use customer managed KMS keys by specifying them in the `ReplicaSpecification.SSESpecification` object. You cannot mix AWS managed and customer managed KMS keys.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-ssespecification-sseenabled */
    "SSEEnabled": boolean | Intrinsic;
    /**
     * - Server-side encryption type. The only supported value is:
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `AES256 | KMS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-ssespecification-ssetype */
    "SSEType"?: string | Intrinsic;
}

/**
 * Represents the DynamoDB Streams configuration for a table in DynamoDB.
 * You can only modify this value if your `AWS::DynamoDB::GlobalTable` contains only one entry in `Replicas`. You must specify a value for this property if your `AWS::DynamoDB::GlobalTable` contains more than one replica.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface StreamSpecification {
    /**
     * - When an item in the table is modified, `StreamViewType` determines what information is written to the stream for this table. Valid values for `StreamViewType` are:
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `NEW_IMAGE | OLD_IMAGE | NEW_AND_OLD_IMAGES | KEYS_ONLY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-streamspecification-streamviewtype */
    "StreamViewType": string | Intrinsic;
}

/**
 * Represents the properties of a local secondary index. A local secondary index can only be created when its parent table is created.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface LocalSecondaryIndex {
    /**
     * - The name of the local secondary index. The name must be unique among all other indexes on this table.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `3`
     * - _Maximum_: `255`
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-localsecondaryindex-indexname */
    "IndexName": string | Intrinsic;
    /**
     * - The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:
     * - _Required_: Yes
     * - _Type_: [Array](./aws-properties-dynamodb-globaltable-keyschema.html) of [KeySchema](./aws-properties-dynamodb-globaltable-keyschema.html)
     * - _Maximum_: `2`
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-localsecondaryindex-keyschema */
    "KeySchema": KeySchema[];
    /**
     * - Represents attributes that are copied (projected) from the table into the local secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
     * - _Required_: Yes
     * - _Type_: [Projection](./aws-properties-dynamodb-globaltable-projection.html)
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-localsecondaryindex-projection */
    "Projection": Projection;
}

/**
 * Represents the settings used to enable or disable Time to Live (TTL) for the specified table. All replicas will have the same time to live configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface TimeToLiveSpecification {
    /**
     * - The name of the attribute used to store the expiration time for items in the table.
     * - Currently, you cannot directly change the attribute name used to evaluate time to live. In order to do so, you must first disable time to live, and then re-enable it with the new attribute name. It can take up to one hour for changes to time to live to take effect. If you attempt to modify time to live within that time window, your stack operation might be delayed.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-timetolivespecification-attributename */
    "AttributeName"?: string | Intrinsic;
    /**
     * - Indicates whether TTL is to be enabled (true) or disabled (false) on the table.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-timetolivespecification-enabled */
    "Enabled": boolean | Intrinsic;
}

/**
 * Provides visibility into the number of read and write operations your table or secondary index can instantaneously support. The settings can be modified using the `UpdateTable` operation to meet the throughput requirements of an upcoming peak event.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface WarmThroughput {
    /**
     * - Represents the number of read operations your base table can instantaneously support.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-warmthroughput-readunitspersecond */
    "ReadUnitsPerSecond"?: number | Intrinsic;
    /**
     * - Represents the number of write operations your base table can instantaneously support.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-warmthroughput-writeunitspersecond */
    "WriteUnitsPerSecond"?: number | Intrinsic;
}

/**
 * Sets the write request settings for a global table or a global secondary index. You can only specify this setting if your resource uses the `PAY_PER_REQUEST``BillingMode`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface WriteOnDemandThroughputSettings {
    /**
     * - Maximum number of write request settings for the specified replica of a global table.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-writeondemandthroughputsettings-maxwriterequestunits */
    "MaxWriteRequestUnits"?: number | Intrinsic;
}

/**
 * Configures contributor insights settings for a replica or one of its indexes.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface ContributorInsightsSpecification {
    /**
     * - Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false).
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Allowed values_: `ENABLE | DISABLE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-contributorinsightsspecification-enabled */
    "Enabled": boolean | Intrinsic;
}

/**
 * The Kinesis Data Streams configuration for the specified global table replica.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface KinesisStreamSpecification {
    /**
     * - The precision for the time and date that the stream was created.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `MICROSECOND | MILLISECOND`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-kinesisstreamspecification-approximatecreationdatetimeprecision */
    "ApproximateCreationDateTimePrecision"?: string | Intrinsic;
    /**
     * - The ARN for a specific Kinesis data stream.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `37`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-kinesisstreamspecification-streamarn */
    "StreamArn": string | Intrinsic;
}

/**
 * Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface Projection {
    /**
     * - Represents the non-key attribute names which will be projected into the index.
     * - For global and local secondary indexes, the total count of `NonKeyAttributes` summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total. This limit only applies when you specify the ProjectionType of `INCLUDE`. You still can specify the ProjectionType of `ALL` to project all attributes from the source table, even if the table has more than 100 attributes.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `20`
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-projection-nonkeyattributes */
    "NonKeyAttributes"?: (string | Intrinsic)[];
    /**
     * - The set of attributes that are projected into the index:
     * - When using the DynamoDB console, `ALL` is selected by default.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ALL | KEYS_ONLY | INCLUDE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-projection-projectiontype */
    "ProjectionType"?: string | Intrinsic;
}

/**
 * Allows you to specify a global secondary index for the global table. The index will be defined on all replicas.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface GlobalSecondaryIndex {
    /**
     * - The name of the global secondary index. The name must be unique among all other indexes on this table.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `3`
     * - _Maximum_: `255`
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-globalsecondaryindex-indexname */
    "IndexName": string | Intrinsic;
    /**
     * - The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:
     * - _Required_: Yes
     * - _Type_: [Array](./aws-properties-dynamodb-globaltable-keyschema.html) of [KeySchema](./aws-properties-dynamodb-globaltable-keyschema.html)
     * - _Minimum_: `1`
     * - _Maximum_: `2`
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-globalsecondaryindex-keyschema */
    "KeySchema": KeySchema[];
    /**
     * - Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
     * - _Required_: Yes
     * - _Type_: [Projection](./aws-properties-dynamodb-globaltable-projection.html)
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-globalsecondaryindex-projection */
    "Projection": Projection;
    /**
     * - Represents the warm throughput value (in read units per second and write units per second) for the specified secondary index. If you use this parameter, you must specify `ReadUnitsPerSecond`, `WriteUnitsPerSecond`, or both.
     * - _Required_: No
     * - _Type_: [WarmThroughput](./aws-properties-dynamodb-globaltable-warmthroughput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-globalsecondaryindex-warmthroughput */
    "WarmThroughput"?: WarmThroughput;
    /**
     * - Sets the write request settings for a global table or a global secondary index. You can only specify this setting if your resource uses the `PAY_PER_REQUEST``BillingMode`.
     * - _Required_: No
     * - _Type_: [WriteOnDemandThroughputSettings](./aws-properties-dynamodb-globaltable-writeondemandthroughputsettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-globalsecondaryindex-writeondemandthroughputsettings */
    "WriteOnDemandThroughputSettings"?: WriteOnDemandThroughputSettings;
    /**
     * - Defines write capacity settings for the global secondary index. You must specify a value for this property if the table's `BillingMode` is `PROVISIONED`. All replicas will have the same write capacity settings for this global secondary index.
     * - _Required_: No
     * - _Type_: [WriteProvisionedThroughputSettings](./aws-properties-dynamodb-globaltable-writeprovisionedthroughputsettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-globalsecondaryindex-writeprovisionedthroughputsettings */
    "WriteProvisionedThroughputSettings"?: WriteProvisionedThroughputSettings;
}

/**
 * Represents the DynamoDB Streams configuration for a global table replica.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface ReplicaStreamSpecification {
    /**
     * - A resource-based policy document that contains the permissions for the specified stream of a DynamoDB global table replica. Resource-based policies let you define access permissions by specifying who has access to each resource, and the actions they are allowed to perform on each resource.
     * - In a CloudFormation template, you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to DynamoDB. For more information about resource-based policies, see [Using resource-based policies for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).
     * - You can update the `ResourcePolicy` property if you've specified more than one table using the [AWS::DynamoDB::GlobalTable](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html) resource.
     * - _Required_: Yes
     * - _Type_: [ResourcePolicy](./aws-properties-dynamodb-globaltable-resourcepolicy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicastreamspecification-resourcepolicy */
    "ResourcePolicy": ResourcePolicy;
}

/**
 * Represents the settings used to enable point in time recovery.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface PointInTimeRecoverySpecification {
    /**
     * - Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-pointintimerecoveryspecification-pointintimerecoveryenabled */
    "PointInTimeRecoveryEnabled"?: boolean | Intrinsic;
    /**
     * - The number of preceding days for which continuous backups are taken and maintained. Your table data is only recoverable to any point-in-time from within the configured recovery period. This parameter is optional. If no value is provided, the value will default to 35.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `35`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-pointintimerecoveryspecification-recoveryperiodindays */
    "RecoveryPeriodInDays"?: number | Intrinsic;
}

/**
 * Sets the read request settings for a replica table or a replica global secondary index. You can only specify this setting if your resource uses the `PAY_PER_REQUEST``BillingMode`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface ReadOnDemandThroughputSettings {
    /**
     * - Maximum number of read request units for the specified replica of a global table.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-readondemandthroughputsettings-maxreadrequestunits */
    "MaxReadRequestUnits"?: number | Intrinsic;
}

/**
 * Allows you to specify the read capacity settings for a replica table or a replica global secondary index when the `BillingMode` is set to `PROVISIONED`. You must specify a value for either `ReadCapacityUnits` or `ReadCapacityAutoScalingSettings`, but not both. You can switch between fixed capacity and auto scaling.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface ReadProvisionedThroughputSettings {
    /**
     * - Specifies auto scaling settings for the replica table or global secondary index.
     * - _Required_: No
     * - _Type_: [CapacityAutoScalingSettings](./aws-properties-dynamodb-globaltable-capacityautoscalingsettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-readprovisionedthroughputsettings-readcapacityautoscalingsettings */
    "ReadCapacityAutoScalingSettings"?: CapacityAutoScalingSettings;
    /**
     * - Specifies a fixed read capacity for the replica table or global secondary index.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-readprovisionedthroughputsettings-readcapacityunits */
    "ReadCapacityUnits"?: number | Intrinsic;
}

/**
 * Represents the properties of a global secondary index that can be set on a per-replica basis.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface ReplicaGlobalSecondaryIndexSpecification {
    /**
     * - Updates the status for contributor insights for a specific table or index. CloudWatch Contributor Insights for DynamoDB graphs display the partition key and (if applicable) sort key of frequently accessed items and frequently throttled items in plaintext. If you require the use of AWS Key Management Service (KMS) to encrypt this table’s partition key and sort key data with an AWS managed key or customer managed key, you should not enable CloudWatch Contributor Insights for DynamoDB for this table.
     * - _Required_: No
     * - _Type_: [ContributorInsightsSpecification](./aws-properties-dynamodb-globaltable-contributorinsightsspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicaglobalsecondaryindexspecification-contributorinsightsspecification */
    "ContributorInsightsSpecification"?: ContributorInsightsSpecification;
    /**
     * - The name of the global secondary index. The name must be unique among all other indexes on this table.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `3`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicaglobalsecondaryindexspecification-indexname */
    "IndexName": string | Intrinsic;
    /**
     * - Sets the read request settings for a replica global secondary index. You can only specify this setting if your resource uses the `PAY_PER_REQUEST``BillingMode`.
     * - _Required_: No
     * - _Type_: [ReadOnDemandThroughputSettings](./aws-properties-dynamodb-globaltable-readondemandthroughputsettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicaglobalsecondaryindexspecification-readondemandthroughputsettings */
    "ReadOnDemandThroughputSettings"?: ReadOnDemandThroughputSettings;
    /**
     * - Allows you to specify the read capacity settings for a replica global secondary index when the `BillingMode` is set to `PROVISIONED`.
     * - _Required_: No
     * - _Type_: [ReadProvisionedThroughputSettings](./aws-properties-dynamodb-globaltable-readprovisionedthroughputsettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicaglobalsecondaryindexspecification-readprovisionedthroughputsettings */
    "ReadProvisionedThroughputSettings"?: ReadProvisionedThroughputSettings;
}

/**
 * Allows you to specify a KMS key identifier to be used for server-side encryption. The key can be specified via ARN, key ID, or alias. The key must be created in the same region as the replica.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface ReplicaSSESpecification {
    /**
     * - The AWS KMS key that should be used for the AWS KMS encryption. To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB key `alias/aws/dynamodb`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicassespecification-kmsmasterkeyid */
    "KMSMasterKeyId": string | Intrinsic;
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
 *     
 * *   Within a resource-based policy, if the action for a DynamoDB service-linked role (SLR) to replicate data for a global table is denied, adding or deleting a replica will fail with an error.
 *     
 * *   The [AWS::DynamoDB::GlobalTable](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html) resource doesn't support creating a replica in the same stack update in Regions other than the Region where you deploy the stack update.
 * For a full list of all considerations, see [Resource-based policy considerations](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-considerations.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface ResourcePolicy {
    /**
     * - A resource-based policy document that contains permissions to add to the specified DynamoDB table, its indexes, and stream. In a CloudFormation template, you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to DynamoDB. For more information about resource-based policies, see [Using resource-based policies for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).
     * - _Required_: Yes
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-resourcepolicy-policydocument */
    "PolicyDocument": any | Intrinsic;
}

/**
 * Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single DynamoDB table.
 * AWS-assigned tag names and values are automatically assigned the `aws:` prefix, which the user cannot assign. AWS-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix `user:` in the Cost Allocation Report. You cannot backdate the application of a tag.
 * For an overview on tagging DynamoDB resources, see [Tagging for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html) in the _Amazon DynamoDB Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface Tag {
    /**
     * - The key of the tag. Tag keys are case sensitive. Each DynamoDB table can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the tag. Tag values are case-sensitive and can be null.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Defines settings specific to a single replica of a global table.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface ReplicaSpecification {
    /**
     * - The settings used to enable or disable CloudWatch Contributor Insights for the specified replica. When not specified, defaults to contributor insights disabled for the replica.
     * - _Required_: No
     * - _Type_: [ContributorInsightsSpecification](./aws-properties-dynamodb-globaltable-contributorinsightsspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicaspecification-contributorinsightsspecification */
    "ContributorInsightsSpecification"?: ContributorInsightsSpecification;
    /**
     * - Determines if a replica is protected from deletion. When enabled, the table cannot be deleted by any user or process. This setting is disabled by default. For more information, see [Using deletion protection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.DeletionProtection) in the _Amazon DynamoDBDeveloper Guide_.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicaspecification-deletionprotectionenabled */
    "DeletionProtectionEnabled"?: boolean | Intrinsic;
    /**
     * - Defines additional settings for the global secondary indexes of this replica.
     * - _Required_: No
     * - _Type_: Array of [ReplicaGlobalSecondaryIndexSpecification](./aws-properties-dynamodb-globaltable-replicaglobalsecondaryindexspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicaspecification-globalsecondaryindexes */
    "GlobalSecondaryIndexes"?: ReplicaGlobalSecondaryIndexSpecification[];
    /**
     * - Defines the Kinesis Data Streams configuration for the specified replica.
     * - _Required_: No
     * - _Type_: [KinesisStreamSpecification](./aws-properties-dynamodb-globaltable-kinesisstreamspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicaspecification-kinesisstreamspecification */
    "KinesisStreamSpecification"?: KinesisStreamSpecification;
    /**
     * - The settings used to enable point in time recovery. When not specified, defaults to point in time recovery disabled for the replica.
     * - _Required_: No
     * - _Type_: [PointInTimeRecoverySpecification](./aws-properties-dynamodb-globaltable-pointintimerecoveryspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicaspecification-pointintimerecoveryspecification */
    "PointInTimeRecoverySpecification"?: PointInTimeRecoverySpecification;
    /**
     * - Sets read request settings for the replica table.
     * - _Required_: No
     * - _Type_: [ReadOnDemandThroughputSettings](./aws-properties-dynamodb-globaltable-readondemandthroughputsettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicaspecification-readondemandthroughputsettings */
    "ReadOnDemandThroughputSettings"?: ReadOnDemandThroughputSettings;
    /**
     * - Defines read capacity settings for the replica table.
     * - _Required_: No
     * - _Type_: [ReadProvisionedThroughputSettings](./aws-properties-dynamodb-globaltable-readprovisionedthroughputsettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicaspecification-readprovisionedthroughputsettings */
    "ReadProvisionedThroughputSettings"?: ReadProvisionedThroughputSettings;
    /**
     * - The region in which this replica exists.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicaspecification-region */
    "Region": string | Intrinsic;
    /**
     * - Represents the DynamoDB Streams configuration for a global table replica.
     * - _Required_: No
     * - _Type_: [ReplicaStreamSpecification](./aws-properties-dynamodb-globaltable-replicastreamspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicaspecification-replicastreamspecification */
    "ReplicaStreamSpecification"?: ReplicaStreamSpecification;
    /**
     * - A resource-based policy document that contains permissions to add to the specified replica of a DynamoDB global table. Resource-based policies let you define access permissions by specifying who has access to each resource, and the actions they are allowed to perform on each resource.
     * - In a CloudFormation template, you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to DynamoDB. For more information about resource-based policies, see [Using resource-based policies for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).
     * - _Required_: No
     * - _Type_: [ResourcePolicy](./aws-properties-dynamodb-globaltable-resourcepolicy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicaspecification-resourcepolicy */
    "ResourcePolicy"?: ResourcePolicy;
    /**
     * - Allows you to specify a customer-managed key for the replica. When using customer-managed keys for server-side encryption, this property must have a value in all replicas.
     * - _Required_: No
     * - _Type_: [ReplicaSSESpecification](./aws-properties-dynamodb-globaltable-replicassespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicaspecification-ssespecification */
    "SSESpecification"?: ReplicaSSESpecification;
    /**
     * - The table class of the specified table. Valid values are `STANDARD` and `STANDARD_INFREQUENT_ACCESS`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `STANDARD | STANDARD_INFREQUENT_ACCESS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicaspecification-tableclass */
    "TableClass"?: string | Intrinsic;
    /**
     * - An array of key-value pairs to apply to this replica.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-dynamodb-globaltable-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicaspecification-tags */
    "Tags"?: Tag[];
}

/**
 * Defines a target tracking scaling policy.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface TargetTrackingScalingPolicyConfiguration {
    /**
     * - Indicates whether scale in by the target tracking scaling policy is disabled. The default value is `false`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-targettrackingscalingpolicyconfiguration-disablescalein */
    "DisableScaleIn"?: boolean | Intrinsic;
    /**
     * - The amount of time, in seconds, after a scale-in activity completes before another scale-in activity can start.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-targettrackingscalingpolicyconfiguration-scaleincooldown */
    "ScaleInCooldown"?: number | Intrinsic;
    /**
     * - The amount of time, in seconds, after a scale-out activity completes before another scale-out activity can start.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-targettrackingscalingpolicyconfiguration-scaleoutcooldown */
    "ScaleOutCooldown"?: number | Intrinsic;
    /**
     * - Defines a target value for the scaling policy.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-targettrackingscalingpolicyconfiguration-targetvalue */
    "TargetValue": number | Intrinsic;
}

/**
 * Configures a scalable target and an autoscaling policy for a table or global secondary index's read or write capacity.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface CapacityAutoScalingSettings {
    /**
     * - The maximum provisioned capacity units for the global table.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-capacityautoscalingsettings-maxcapacity */
    "MaxCapacity": number | Intrinsic;
    /**
     * - The minimum provisioned capacity units for the global table.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-capacityautoscalingsettings-mincapacity */
    "MinCapacity": number | Intrinsic;
    /**
     * - When switching billing mode from `PAY_PER_REQUEST` to `PROVISIONED`, DynamoDB requires you to specify read and write capacity unit values for the table and for each global secondary index. These values will be applied to all replicas. The table will use these provisioned values until CloudFormation creates the autoscaling policies you configured in your template. CloudFormation cannot determine what capacity the table and its global secondary indexes will require in this time period, since they are application-dependent.
     * - If you want to switch a table's billing mode from `PAY_PER_REQUEST` to `PROVISIONED`, you must specify a value for this property for each autoscaled resource. If you specify different values for the same resource in different regions, CloudFormation will use the highest value found in either the `SeedCapacity` or `ReadCapacityUnits` properties. For example, if your global secondary index `myGSI` has a `SeedCapacity` of 10 in us-east-1 and a fixed `ReadCapacityUnits` of 20 in eu-west-1, CloudFormation will initially set the read capacity for `myGSI` to 20. Note that if you disable `ScaleIn` for `myGSI` in us-east-1, its read capacity units might not be set back to 10.
     * - You must also specify a value for `SeedCapacity` when you plan to switch a table's billing mode from `PROVISIONED` to `PAY_PER_REQUEST`, because CloudFormation might need to roll back the operation (reverting the billing mode to `PROVISIONED`) and this cannot succeed without specifying a value for `SeedCapacity`.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-capacityautoscalingsettings-seedcapacity */
    "SeedCapacity"?: number | Intrinsic;
    /**
     * - Defines a target tracking scaling policy.
     * - _Required_: Yes
     * - _Type_: [TargetTrackingScalingPolicyConfiguration](./aws-properties-dynamodb-globaltable-targettrackingscalingpolicyconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-capacityautoscalingsettings-targettrackingscalingpolicyconfiguration */
    "TargetTrackingScalingPolicyConfiguration": TargetTrackingScalingPolicyConfiguration;
}

/**
 * Specifies an auto scaling policy for write capacity. This policy will be applied to all replicas. This setting must be specified if `BillingMode` is set to `PROVISIONED`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface WriteProvisionedThroughputSettings {
    /**
     * - Specifies auto scaling settings for the replica table or global secondary index.
     * - _Required_: No
     * - _Type_: [CapacityAutoScalingSettings](./aws-properties-dynamodb-globaltable-capacityautoscalingsettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-writeprovisionedthroughputsettings-writecapacityautoscalingsettings */
    "WriteCapacityAutoScalingSettings"?: CapacityAutoScalingSettings;
}

/**
 * The `AWS::DynamoDB::GlobalTable` resource enables you to create and manage a Version 2019.11.21 global table. This resource cannot be used to create or manage a Version 2017.11.29 global table. For more information, see [Global tables](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html).
 * ###### Important
 * 
 * You cannot convert a resource of type `AWS::DynamoDB::Table` into a resource of type `AWS::DynamoDB::GlobalTable` by changing its type in your template. **Doing so might result in the deletion of your DynamoDB table.**
 * 
 * You can instead use the GlobalTable resource to create a new table in a single Region. This will be billed the same as a single Region table. If you later update the stack to add other Regions then Global Tables pricing will apply.
 * You should be aware of the following behaviors when working with DynamoDB global tables.
 * *   The IAM Principal executing the stack operation must have the permissions listed below in all regions where you plan to have a global table replica. The IAM Principal's permissions should not have restrictions based on IP source address. Some global tables operations (for example, adding a replica) are asynchronous, and require that the IAM Principal is valid until they complete. You should not delete the Principal (user or IAM role) until CloudFormation has finished updating your stack.
 *     
 *     *   `dynamodb:CreateTable`
 *         
 *     *   `dynamodb:UpdateTable`
 *         
 *     *   `dynamodb:DeleteTable`
 *         
 *     *   `dynamodb:DescribeContinuousBackups`
 *         
 *     *   `dynamodb:DescribeContributorInsights`
 *         
 *     *   `dynamodb:DescribeTable`
 *         
 *     *   `dynamodb:DescribeTableReplicaAutoScaling`
 *         
 *     *   `dynamodb:DescribeTimeToLive`
 *         
 *     *   `dynamodb:ListTables`
 *         
 *     *   `dynamodb:UpdateTimeToLive`
 *         
 *     *   `dynamodb:UpdateContributorInsights`
 *         
 *     *   `dynamodb:UpdateContinuousBackups`
 *         
 *     *   `dynamodb:ListTagsOfResource`
 *         
 *     *   `dynamodb:TagResource`
 *         
 *     *   `dynamodb:UntagResource`
 *         
 *     *   `dynamodb:BatchWriteItem`
 *         
 *     *   `dynamodb:CreateTableReplica`
 *         
 *     *   `dynamodb:DeleteItem`
 *         
 *     *   `dynamodb:DeleteTableReplica`
 *         
 *     *   `dynamodb:DisableKinesisStreamingDestination`
 *         
 *     *   `dynamodb:EnableKinesisStreamingDestination`
 *         
 *     *   `dynamodb:GetItem`
 *         
 *     *   `dynamodb:PutItem`
 *         
 *     *   `dynamodb:Query`
 *         
 *     *   `dynamodb:Scan`
 *         
 *     *   `dynamodb:UpdateItem`
 *         
 *     *   `dynamodb:DescribeTableReplicaAutoScaling`
 *         
 *     *   `dynamodb:UpdateTableReplicaAutoScaling`
 *         
 *     *   `iam:CreateServiceLinkedRole`
 *         
 *     *   `kms:CreateGrant`
 *         
 *     *   `kms:DescribeKey`
 *         
 *     *   `application-autoscaling:DeleteScalingPolicy`
 *         
 *     *   `application-autoscaling:DeleteScheduledAction`
 *         
 *     *   `application-autoscaling:DeregisterScalableTarget`
 *         
 *     *   `application-autoscaling:DescribeScalingPolicies`
 *         
 *     *   `application-autoscaling:DescribeScalableTargets`
 *         
 *     *   `application-autoscaling:PutScalingPolicy`
 *         
 *     *   `application-autoscaling:PutScheduledAction`
 *         
 *     *   `application-autoscaling:RegisterScalableTarget`
 *         
 *     
 * *   When using provisioned billing mode, CloudFormation will create an auto scaling policy on each of your replicas to control their write capacities. You must configure this policy using the `WriteProvisionedThroughputSettings` property. CloudFormation will ensure that all replicas have the same write capacity auto scaling property. You cannot directly specify a value for write capacity for a global table.
 *     
 * *   If your table uses provisioned capacity, you must configure auto scaling directly in the `AWS::DynamoDB::GlobalTable` resource. You should not configure additional auto scaling policies on any of the table replicas or global secondary indexes, either via API or via `AWS::ApplicationAutoScaling::ScalableTarget` or `AWS::ApplicationAutoScaling::ScalingPolicy`. Doing so might result in unexpected behavior and is unsupported.
 *     
 * *   In AWS CloudFormation, each global table is controlled by a single stack, in a single region, regardless of the number of replicas. When you deploy your template, CloudFormation will create/update all replicas as part of a single stack operation. You should not deploy the same `AWS::DynamoDB::GlobalTable` resource in multiple regions. Doing so will result in errors, and is unsupported. If you deploy your application template in multiple regions, you can use conditions to only create the resource in a single region. Alternatively, you can choose to define your `AWS::DynamoDB::GlobalTable` resources in a stack separate from your application stack, and make sure it is only deployed to a single region.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html */

export interface DynamoDBGlobalTable extends ResourceAttributes {
    "Type": "AWS::DynamoDB::GlobalTable";
    "Properties": {
        /**
         * - A list of attributes that describe the key schema for the global table and indexes.
         * - _Required_: Yes
         * - _Type_: Array of [AttributeDefinition](./aws-properties-dynamodb-globaltable-attributedefinition.html)
         * - _Minimum_: `1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-attributedefinitions */
        "AttributeDefinitions": AttributeDefinition[];
        /**
         * - Specifies how you are charged for read and write throughput and how you manage capacity. Valid values are:
         * - All replicas in your global table will have the same billing mode. If you use `PROVISIONED` billing mode, you must provide an auto scaling configuration via the `WriteProvisionedThroughputSettings` property. The default value of this property is `PROVISIONED`.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `PROVISIONED | PAY_PER_REQUEST`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-billingmode */
        "BillingMode"?: string | Intrinsic;
        /**
         * - Global secondary indexes to be created on the global table. You can create up to 20 global secondary indexes. Each replica in your global table will have the same global secondary index settings. You can only create or delete one global secondary index in a single stack operation.
         * - Since the backfilling of an index could take a long time, CloudFormation does not wait for the index to become active. If a stack operation rolls back, CloudFormation might not delete an index that has been added. In that case, you will need to delete the index manually.
         * - _Required_: No
         * - _Type_: Array of [GlobalSecondaryIndex](./aws-properties-dynamodb-globaltable-globalsecondaryindex.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-globalsecondaryindexes */
        "GlobalSecondaryIndexes"?: GlobalSecondaryIndex[];
        /**
         * - Specifies the attributes that make up the primary key for the table. The attributes in the `KeySchema` property must also be defined in the `AttributeDefinitions` property.
         * - _Required_: Yes
         * - _Type_: [Array](./aws-properties-dynamodb-globaltable-keyschema.html) of [KeySchema](./aws-properties-dynamodb-globaltable-keyschema.html)
         * - _Minimum_: `1`
         * - _Maximum_: `2`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-keyschema */
        "KeySchema": KeySchema[];
        /**
         * - Local secondary indexes to be created on the table. You can create up to five local secondary indexes. Each index is scoped to a given hash key value. The size of each hash key can be up to 10 gigabytes. Each replica in your global table will have the same local secondary index settings.
         * - _Required_: No
         * - _Type_: Array of [LocalSecondaryIndex](./aws-properties-dynamodb-globaltable-localsecondaryindex.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-localsecondaryindexes */
        "LocalSecondaryIndexes"?: LocalSecondaryIndex[];
        /**
         * - Specifies the list of replicas for your global table. The list must contain at least one element, the region where the stack defining the global table is deployed. For example, if you define your table in a stack deployed to us-east-1, you must have an entry in `Replicas` with the region us-east-1. You cannot remove the replica in the stack region.
         * - You can create a new global table with as many replicas as needed. You can add or remove replicas after table creation, but you can only add or remove a single replica in each update.
         * - _Required_: Yes
         * - _Type_: Array of [ReplicaSpecification](./aws-properties-dynamodb-globaltable-replicaspecification.html)
         * - _Minimum_: `1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicas */
        "Replicas": ReplicaSpecification[];
        /**
         * - Specifies the settings to enable server-side encryption. These settings will be applied to all replicas. If you plan to use customer-managed KMS keys, you must provide a key for each replica using the `ReplicaSpecification.ReplicaSSESpecification` property.
         * - _Required_: No
         * - _Type_: [SSESpecification](./aws-properties-dynamodb-globaltable-ssespecification.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-ssespecification */
        "SSESpecification"?: SSESpecification;
        /**
         * - Specifies the streams settings on your global table. You must provide a value for this property if your global table contains more than one replica. You can only change the streams settings if your global table has only one replica.
         * - _Required_: No
         * - _Type_: [StreamSpecification](./aws-properties-dynamodb-globaltable-streamspecification.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-streamspecification */
        "StreamSpecification"?: StreamSpecification;
        /**
         * - A name for the global table. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID as the table name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9_.-]+`
         * - _Minimum_: `3`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-tablename */
        "TableName"?: string | Intrinsic;
        /**
         * - Specifies the time to live (TTL) settings for the table. This setting will be applied to all replicas.
         * - _Required_: No
         * - _Type_: [TimeToLiveSpecification](./aws-properties-dynamodb-globaltable-timetolivespecification.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-timetolivespecification */
        "TimeToLiveSpecification"?: TimeToLiveSpecification;
        /**
         * - Provides visibility into the number of read and write operations your table or secondary index can instantaneously support. The settings can be modified using the `UpdateTable` operation to meet the throughput requirements of an upcoming peak event.
         * - _Required_: No
         * - _Type_: [WarmThroughput](./aws-properties-dynamodb-globaltable-warmthroughput.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-warmthroughput */
        "WarmThroughput"?: WarmThroughput;
        /**
         * - Sets the write request settings for a global table or a global secondary index. You can only specify this setting if your resource uses the `PAY_PER_REQUEST``BillingMode`.
         * - _Required_: No
         * - _Type_: [WriteOnDemandThroughputSettings](./aws-properties-dynamodb-globaltable-writeondemandthroughputsettings.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-writeondemandthroughputsettings */
        "WriteOnDemandThroughputSettings"?: WriteOnDemandThroughputSettings;
        /**
         * - Specifies an auto scaling policy for write capacity. This policy will be applied to all replicas. This setting must be specified if `BillingMode` is set to `PROVISIONED`.
         * - _Required_: No
         * - _Type_: [WriteProvisionedThroughputSettings](./aws-properties-dynamodb-globaltable-writeprovisionedthroughputsettings.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-writeprovisionedthroughputsettings */
        "WriteProvisionedThroughputSettings"?: WriteProvisionedThroughputSettings;
    };
}