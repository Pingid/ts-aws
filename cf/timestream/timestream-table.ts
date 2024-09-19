import type { Intrinsic } from '../intrinsic/index.js' /**
 * Retention properties contain the duration for which your time-series data must be stored in the magnetic store and the memory store.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html */

export interface RetentionProperties {
  /**
   * - The duration for which data must be stored in the magnetic store.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-retentionproperties-magneticstoreretentionperiodindays */
  MagneticStoreRetentionPeriodInDays?: string | Intrinsic
  /**
   * - The duration for which data must be stored in the memory store.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-retentionproperties-memorystoreretentionperiodinhours */
  MemoryStoreRetentionPeriodInHours?: string | Intrinsic
}

/**
 * A tag is a label that you assign to a Timestream database and/or table. Each tag consists of a key and an optional value, both of which you define. With tags, you can categorize databases and/or tables, for example, by purpose, owner, or environment.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html */

export interface Tag {
  /**
   * - The key of the tag. Tag keys are case sensitive.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-tag-key */
  Key?: string | Intrinsic
  /**
   * - The value of the tag. Tag values are case-sensitive and can be null.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-tag-value */
  Value?: string | Intrinsic
}

/**
 * An attribute used in partitioning data in a table. A dimension key partitions data using the values of the dimension specified by the dimension-name as partition key, while a measure key partitions data using measure names (values of the 'measure\_name' column).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html */

export interface PartitionKey {
  /**
   * - The level of enforcement for the specification of a dimension key in ingested records. Options are REQUIRED (dimension key must be specified) and OPTIONAL (dimension key does not have to be specified).
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `REQUIRED | OPTIONAL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-partitionkey-enforcementinrecord */
  EnforcementInRecord?: string | Intrinsic
  /**
   * - The name of the attribute used for a dimension key.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-partitionkey-name */
  Name?: string | Intrinsic
  /**
   * - The type of the partition key. Options are DIMENSION (dimension key) and MEASURE (measure key).
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `DIMENSION | MEASURE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-partitionkey-type */
  Type: string | Intrinsic
}

/**
 * The configuration that specifies an S3 location.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html */

export interface S3Configuration {
  /**
   * - The bucket name of the customer S3 bucket.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]`
   * - _Minimum_: `3`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-s3configuration-bucketname */
  BucketName: string | Intrinsic
  /**
   * - The encryption option for the customer S3 location. Options are S3 server-side encryption with an S3 managed key or AWS managed key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `SSE_S3 | SSE_KMS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-s3configuration-encryptionoption */
  EncryptionOption: string | Intrinsic
  /**
   * - The AWS KMS key ID for the customer S3 location when encrypting with an AWS managed key.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-s3configuration-kmskeyid */
  KmsKeyId?: string | Intrinsic
  /**
   * - The object key preview for the customer S3 location.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z0-9|!\-_*'\(\)]([a-zA-Z0-9]|[!\-_*'\(\)\/.])+`
   * - _Minimum_: `1`
   * - _Maximum_: `928`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-s3configuration-objectkeyprefix */
  ObjectKeyPrefix?: string | Intrinsic
}

/**
 * A Schema specifies the expected data model of the table.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html */

export interface Schema {
  /**
   * - A non-empty list of partition keys defining the attributes used to partition the table data. The order of the list determines the partition hierarchy. The name and type of each partition key as well as the partition key order cannot be changed after the table is created. However, the enforcement level of each partition key can be changed.
   * - _Required_: No
   * - _Type_: Array of [PartitionKey](./aws-properties-timestream-table-partitionkey.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-schema-compositepartitionkey */
  CompositePartitionKey?: PartitionKey[]
}

/**
 * The location to write error reports for records rejected, asynchronously, during magnetic store writes.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html */

export interface MagneticStoreRejectedDataLocation {
  /**
   * - Configuration of an S3 location to write error reports for records rejected, asynchronously, during magnetic store writes.
   * - _Required_: No
   * - _Type_: [S3Configuration](./aws-properties-timestream-table-s3configuration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-magneticstorerejecteddatalocation-s3configuration */
  S3Configuration?: S3Configuration
}

/**
 * The set of properties on a table for configuring magnetic store writes.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html */

export interface MagneticStoreWriteProperties {
  /**
   * - A flag to enable magnetic store writes.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-magneticstorewriteproperties-enablemagneticstorewrites */
  EnableMagneticStoreWrites: boolean | Intrinsic
  /**
   * - The location to write error reports for records rejected asynchronously during magnetic store writes.
   * - _Required_: No
   * - _Type_: [MagneticStoreRejectedDataLocation](./aws-properties-timestream-table-magneticstorerejecteddatalocation.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-magneticstorewriteproperties-magneticstorerejecteddatalocation */
  MagneticStoreRejectedDataLocation?: MagneticStoreRejectedDataLocation
}

/**
 * The CreateTable operation adds a new table to an existing database in your account. In an AWS account, table names must be at least unique within each Region if they are in the same database. You may have identical table names in the same Region if the tables are in separate databases. While creating the table, you must specify the table name, database name, and the retention properties. [Service quotas apply](https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html). See [code sample](https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-table.html) for details.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html */

export interface TimestreamTable {
  Type: 'AWS::Timestream::Table'
  Properties: {
    /**
     * - The name of the Timestream database that contains this table.
     * - _Length Constraints_: Minimum length of 3 bytes. Maximum length of 256 bytes.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_.-]{3,256}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-databasename */
    DatabaseName: string | Intrinsic
    /**
     * - Contains properties to set on the table when enabling magnetic store writes.
     * - This object has the following attributes:
     * - `EnableMagneticStoreWrites` attribute is **required** when `MagneticStoreWriteProperties` is specified. `MagneticStoreRejectedDataLocation` attribute is **required** when `EnableMagneticStoreWrites` is set to `true`.
     * - See the following examples:
     * - **JSON**
     * - **YAML**
     * - _Required_: No
     * - _Type_: [MagneticStoreWriteProperties](./aws-properties-timestream-table-magneticstorewriteproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-magneticstorewriteproperties */
    MagneticStoreWriteProperties?: MagneticStoreWriteProperties
    /**
     * - The retention duration for the memory store and magnetic store. This object has the following attributes:
     * - Both attributes are of type `string`. Both attributes are **required** when `RetentionProperties` is specified.
     * - See the following examples:
     * - **JSON**
     * - **YAML**
     * - _Required_: No
     * - _Type_: [RetentionProperties](./aws-properties-timestream-table-retentionproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-retentionproperties */
    RetentionProperties?: RetentionProperties
    /**
     * - The schema of the table.
     * - _Required_: No
     * - _Type_: [Schema](./aws-properties-timestream-table-schema.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-schema */
    Schema?: Schema
    /**
     * - The name of the Timestream table.
     * - _Length Constraints_: Minimum length of 3 bytes. Maximum length of 256 bytes.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_.-]{3,256}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-tablename */
    TableName?: string | Intrinsic
    /**
     * - The tags to add to the table
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-timestream-table-tag.html)
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-timestream-table.html#cfn-timestream-table-tags */
    Tags?: Tag[]
  }
}
