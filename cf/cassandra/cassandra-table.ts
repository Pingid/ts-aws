import type { Intrinsic } from '../intrinsic/index.js' /**
 * Defines an individual column within the clustering key.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html */

export interface ClusteringKeyColumn {
  /**
   * - The name and data type of this clustering key column.
   * - _Required_: Yes
   * - _Type_: [Column](./aws-properties-cassandra-table-column.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-clusteringkeycolumn-column */
  Column: Column
  /**
   * - The order in which this column's data is stored:
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ASC | DESC`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-clusteringkeycolumn-orderby */
  OrderBy?: string | Intrinsic
}

/**
 * Specifies the encryption at rest option selected for the table.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html */

export interface EncryptionSpecification {
  /**
   * - The encryption at rest options for the table.
   * - Valid values: `CUSTOMER_MANAGED_KMS_KEY` | `AWS_OWNED_KMS_KEY`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `AWS_OWNED_KMS_KEY | CUSTOMER_MANAGED_KMS_KEY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-encryptionspecification-encryptiontype */
  EncryptionType: string | Intrinsic
  /**
   * - Requires a `kms_key_identifier` in the format of a key ARN.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-encryptionspecification-kmskeyidentifier */
  KmsKeyIdentifier?: string | Intrinsic
}

/**
 * The name and data type of an individual column in a table. In addition to the data type, you can also use the following two keywords:
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html */

export interface Column {
  /**
   * - The name of the column. For more information, see [Identifiers](https://docs.aws.amazon.com/keyspaces/latest/devguide/cql.elements.html#cql.elements.identifier) in the _Amazon Keyspaces Developer Guide_.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9_]{1,47}$`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-column-columnname */
  ColumnName: string | Intrinsic
  /**
   * - The data type of the column. For more information, see [Data types](https://docs.aws.amazon.com/keyspaces/latest/devguide/cql.elements.html#cql.data-types) in the _Amazon Keyspaces Developer Guide_.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-column-columntype */
  ColumnType: string | Intrinsic
}

/**
 * The AWS Region specific settings of a multi-Region table.
 * For a multi-Region table, you can configure the table's read capacity differently per AWS Region. You can do this by configuring the following parameters.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html */

export interface ReplicaSpecification {
  /**
   * - The read capacity auto scaling settings for the multi-Region table in the specified AWS Region.
   * - _Required_: No
   * - _Type_: [AutoScalingSetting](./aws-properties-cassandra-table-autoscalingsetting.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-replicaspecification-readcapacityautoscaling */
  ReadCapacityAutoScaling?: AutoScalingSetting
  /**
   * - The provisioned read capacity units for the multi-Region table in the specified AWS Region.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-replicaspecification-readcapacityunits */
  ReadCapacityUnits?: number | Intrinsic
  /**
   * - The AWS Region.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `2`
   * - _Maximum_: `25`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-replicaspecification-region */
  Region: string | Intrinsic
}

/**
 * Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single Amazon Keyspaces resource.
 * AWS-assigned tag names and values are automatically assigned the `aws:` prefix, which the user cannot assign. AWS-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix `user:` in the Cost Allocation Report. You cannot backdate the application of a tag.
 * For more information, see [Adding tags and labels to Amazon Keyspaces resources](https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html) in the _Amazon Keyspaces Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html */

export interface Tag {
  /**
   * - The key of the tag. Tag keys are case sensitive. Each Amazon Keyspaces resource can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the tag. Tag values are case-sensitive and can be null.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-tag-value */
  Value: string | Intrinsic
}

/**
 * The provisioned throughput for the table, which consists of `ReadCapacityUnits` and `WriteCapacityUnits`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html */

export interface ProvisionedThroughput {
  /**
   * - The amount of read capacity that's provisioned for the table. For more information, see [Read/write capacity mode](https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html) in the _Amazon Keyspaces Developer Guide_.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-provisionedthroughput-readcapacityunits */
  ReadCapacityUnits: number | Intrinsic
  /**
   * - The amount of write capacity that's provisioned for the table. For more information, see [Read/write capacity mode](https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html) in the _Amazon Keyspaces Developer Guide_.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-provisionedthroughput-writecapacityunits */
  WriteCapacityUnits: number | Intrinsic
}

/**
 * Amazon Keyspaces supports the `target tracking` auto scaling policy for a provisioned table. This policy scales a table based on the ratio of consumed to provisioned capacity. The auto scaling target is a percentage of the provisioned capacity of the table.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html */

export interface TargetTrackingScalingPolicyConfiguration {
  /**
   * - Specifies if `scale-in` is enabled.
   * - When auto scaling automatically decreases capacity for a table, the table _scales in_. When scaling policies are set, they can't scale in the table lower than its minimum capacity.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-targettrackingscalingpolicyconfiguration-disablescalein */
  DisableScaleIn?: boolean | Intrinsic
  /**
   * - Specifies a `scale-in` cool down period.
   * - A cooldown period in seconds between scaling activities that lets the table stabilize before another scaling activity starts.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-targettrackingscalingpolicyconfiguration-scaleincooldown */
  ScaleInCooldown?: number | Intrinsic
  /**
   * - Specifies a scale out cool down period.
   * - A cooldown period in seconds between scaling activities that lets the table stabilize before another scaling activity starts.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-targettrackingscalingpolicyconfiguration-scaleoutcooldown */
  ScaleOutCooldown?: number | Intrinsic
  /**
   * - Specifies the target value for the target tracking auto scaling policy.
   * - Amazon Keyspaces auto scaling scales up capacity automatically when traffic exceeds this target utilization rate, and then back down when it falls below the target. This ensures that the ratio of consumed capacity to provisioned capacity stays at or near this value. You define `targetValue` as a percentage. An `integer` between 20 and 90.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-targettrackingscalingpolicyconfiguration-targetvalue */
  TargetValue: number | Intrinsic
}

/**
 * Determines the billing mode for the table - on-demand or provisioned.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html */

export interface BillingMode {
  /**
   * - The billing mode for the table:
   * - Valid values: `ON_DEMAND` | `PROVISIONED`
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `PROVISIONED | ON_DEMAND`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-billingmode-mode */
  Mode: string | Intrinsic
  /**
   * - The provisioned read capacity and write capacity for the table. For more information, see [Provisioned throughput capacity mode](https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html#ReadWriteCapacityMode.Provisioned) in the _Amazon Keyspaces Developer Guide_.
   * - _Required_: No
   * - _Type_: [ProvisionedThroughput](./aws-properties-cassandra-table-provisionedthroughput.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-billingmode-provisionedthroughput */
  ProvisionedThroughput?: ProvisionedThroughput
}

/**
 * Amazon Keyspaces supports the `target tracking` auto scaling policy. With this policy, Amazon Keyspaces auto scaling ensures that the table's ratio of consumed to provisioned capacity stays at or near the target value that you specify. You define the target value as a percentage between 20 and 90.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html */

export interface ScalingPolicy {
  /**
   * - The auto scaling policy that scales a table based on the ratio of consumed to provisioned capacity.
   * - _Required_: No
   * - _Type_: [TargetTrackingScalingPolicyConfiguration](./aws-properties-cassandra-table-targettrackingscalingpolicyconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-scalingpolicy-targettrackingscalingpolicyconfiguration */
  TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration
}

/**
 * The optional auto scaling settings for a table with provisioned throughput capacity.
 * To turn on auto scaling for a table in `throughputMode:PROVISIONED`, you must specify the following parameters.
 * Configure the minimum and maximum capacity units. The auto scaling policy ensures that capacity never goes below the minimum or above the maximum range.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html */

export interface AutoScalingSetting {
  /**
   * - This optional parameter enables auto scaling for the table if set to `false`.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-autoscalingsetting-autoscalingdisabled */
  AutoScalingDisabled?: boolean | Intrinsic
  /**
   * - Manage costs by specifying the maximum amount of throughput to provision. The value must be between 1 and the max throughput per second quota for your account (40,000 by default).
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-autoscalingsetting-maximumunits */
  MaximumUnits?: number | Intrinsic
  /**
   * - The minimum level of throughput the table should always be ready to support. The value must be between 1 and the max throughput per second quota for your account (40,000 by default).
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-autoscalingsetting-minimumunits */
  MinimumUnits?: number | Intrinsic
  /**
   * - Amazon Keyspaces supports the `target tracking` auto scaling policy. With this policy, Amazon Keyspaces auto scaling ensures that the table's ratio of consumed to provisioned capacity stays at or near the target value that you specify. You define the target value as a percentage between 20 and 90.
   * - _Required_: No
   * - _Type_: [ScalingPolicy](./aws-properties-cassandra-table-scalingpolicy.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-autoscalingsetting-scalingpolicy */
  ScalingPolicy?: ScalingPolicy
}

/**
 * The optional auto scaling capacity settings for a table in provisioned capacity mode.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html */

export interface AutoScalingSpecification {
  /**
   * - The auto scaling settings for the table's read capacity.
   * - _Required_: No
   * - _Type_: [AutoScalingSetting](./aws-properties-cassandra-table-autoscalingsetting.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-autoscalingspecification-readcapacityautoscaling */
  ReadCapacityAutoScaling?: AutoScalingSetting
  /**
   * - The auto scaling settings for the table's write capacity.
   * - _Required_: No
   * - _Type_: [AutoScalingSetting](./aws-properties-cassandra-table-autoscalingsetting.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-autoscalingspecification-writecapacityautoscaling */
  WriteCapacityAutoScaling?: AutoScalingSetting
}

/**
 * You can use the `AWS::Cassandra::Table` resource to create a new table in Amazon Keyspaces (for Apache Cassandra). For more information, see [Create a keyspace and a table](https://docs.aws.amazon.com/keyspaces/latest/devguide/getting-started.ddl.html) in the _Amazon Keyspaces Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html */

export interface CassandraTable {
  Type: 'AWS::Cassandra::Table'
  Properties: {
    /**
     * - The optional auto scaling capacity settings for a table in provisioned capacity mode.
     * - _Required_: No
     * - _Type_: [AutoScalingSpecification](./aws-properties-cassandra-table-autoscalingspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-autoscalingspecifications */
    AutoScalingSpecifications?: AutoScalingSpecification
    /**
     * - The billing mode for the table, which determines how you'll be charged for reads and writes:
     * - If you don't specify a value for this property, then the table will use on-demand mode.
     * - _Required_: No
     * - _Type_: [BillingMode](./aws-properties-cassandra-table-billingmode.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-billingmode */
    BillingMode?: BillingMode
    /**
     * - Enables client-side timestamps for the table. By default, the setting is disabled. You can enable client-side timestamps with the following option:
     * - After client-side timestamps are enabled for a table, you can't disable this setting.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-clientsidetimestampsenabled */
    ClientSideTimestampsEnabled?: boolean | Intrinsic
    /**
     * - One or more columns that determine how the table data is sorted.
     * - _Required_: No
     * - _Type_: Array of [ClusteringKeyColumn](./aws-properties-cassandra-table-clusteringkeycolumn.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-clusteringkeycolumns */
    ClusteringKeyColumns?: ClusteringKeyColumn[]
    /**
     * - The default Time To Live (TTL) value for all rows in a table in seconds. The maximum configurable value is 630,720,000 seconds, which is the equivalent of 20 years. By default, the TTL value for a table is 0, which means data does not expire.
     * - For more information, see [Setting the default TTL value for a table](https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_default_ttl) in the _Amazon Keyspaces Developer Guide_.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-defaulttimetolive */
    DefaultTimeToLive?: number | Intrinsic
    /**
     * - The encryption at rest options for the table.
     * - For more information, see [Encryption at rest in Amazon Keyspaces](https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html) in the _Amazon Keyspaces Developer Guide_.
     * - _Required_: No
     * - _Type_: [EncryptionSpecification](./aws-properties-cassandra-table-encryptionspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-encryptionspecification */
    EncryptionSpecification?: EncryptionSpecification
    /**
     * - The name of the keyspace to create the table in. The keyspace must already exist.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9_]{1,47}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-keyspacename */
    KeyspaceName: string | Intrinsic
    /**
     * - One or more columns that uniquely identify every row in the table. Every table must have a partition key.
     * - _Required_: Yes
     * - _Type_: Array of [Column](./aws-properties-cassandra-table-column.html)
     * - _Minimum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-partitionkeycolumns */
    PartitionKeyColumns: Column[]
    /**
     * - Specifies if point-in-time recovery is enabled or disabled for the table. The options are `PointInTimeRecoveryEnabled=true` and `PointInTimeRecoveryEnabled=false`. If not specified, the default is `PointInTimeRecoveryEnabled=false`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-pointintimerecoveryenabled */
    PointInTimeRecoveryEnabled?: boolean | Intrinsic
    /**
     * - One or more columns that are not part of the primary key - that is, columns that are _not_ defined as partition key columns or clustering key columns.
     * - You can add regular columns to existing tables by adding them to the template.
     * - _Required_: No
     * - _Type_: Array of [Column](./aws-properties-cassandra-table-column.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-regularcolumns */
    RegularColumns?: Column[]
    /**
     * - The AWS Region specific settings of a multi-Region table.
     * - For a multi-Region table, you can configure the table's read capacity differently per AWS Region. You can do this by configuring the following parameters.
     * - _Required_: No
     * - _Type_: Array of [ReplicaSpecification](./aws-properties-cassandra-table-replicaspecification.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-replicaspecifications */
    ReplicaSpecifications?: ReplicaSpecification[]
    /**
     * - The name of the table to be created. The table name is case sensitive. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the table name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
     * - _Length constraints:_ Minimum length of 3. Maximum length of 255.
     * - _Pattern:_ `^[a-zA-Z0-9][a-zA-Z0-9_]{1,47}$`
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9_]{1,47}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-tablename */
    TableName?: string | Intrinsic
    /**
     * - An array of key-value pairs to apply to this resource.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-cassandra-table-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-tags */
    Tags?: Tag[]
  }
}
