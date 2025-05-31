import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies a key-value pair for a resource tag.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html */

export interface Tag {
    /**
     * - A value that specifies the `TagKey`, the name of the tag. Tag keys must be unique for the resource to which they are attached.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-tag-key */
    "Key": string | Intrinsic;
    /**
     * - A value that specifies the `TagValue`, the value assigned to the corresponding tag key. Tag values can be null and don't have to be unique in a tag set. For example, you can have a key-value pair in a tag set of `finances : April` and also of `payroll : April`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The configuration object that specifies the snapshot to use as the origin of the data for the volume.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html */

export interface OriginSnapshot {
    /**
     * - Specifies the strategy used when copying data from the snapshot to the new volume.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `CLONE | FULL_COPY | INCREMENTAL_COPY`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-originsnapshot-copystrategy */
    "CopyStrategy": string | Intrinsic;
    /**
     * - Specifies the snapshot to use when creating an OpenZFS volume from a snapshot.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-originsnapshot-snapshotarn */
    "SnapshotARN": string | Intrinsic;
}

/**
 * Configures how much storage users and groups can use on the volume.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html */

export interface UserAndGroupQuotas {
    /**
     * - The ID of the user or group that the quota applies to.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-userandgroupquotas-id */
    "Id": number | Intrinsic;
    /**
     * - The user or group's storage quota, in gibibytes (GiB).
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-userandgroupquotas-storagecapacityquotagib */
    "StorageCapacityQuotaGiB": number | Intrinsic;
    /**
     * - Specifies whether the quota applies to a user or group.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `USER | GROUP`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-userandgroupquotas-type */
    "Type": string | Intrinsic;
}

/**
 * Describes the data tiering policy for an ONTAP volume. When enabled, Amazon FSx for ONTAP's intelligent tiering automatically transitions a volume's data between the file system's primary storage and capacity pool storage based on your access patterns.
 * Valid tiering policies are the following:
 * *   `SNAPSHOT_ONLY` - (Default value) moves cold snapshots to the capacity pool storage tier.
 * *   `AUTO` - moves cold user data and snapshots to the capacity pool storage tier based on your access patterns.
 * *   `ALL` - moves all user data blocks in both the active file system and Snapshot copies to the storage pool tier.
 * *   `NONE` - keeps a volume's data in the primary storage tier, preventing it from being moved to the capacity pool tier.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html */

export interface TieringPolicy {
    /**
     * - Specifies the number of days that user data in a volume must remain inactive before it is considered "cold" and moved to the capacity pool. Used with the `AUTO` and `SNAPSHOT_ONLY` tiering policies. Enter a whole number between 2 and 183. Default values are 31 days for `AUTO` and 2 days for `SNAPSHOT_ONLY`.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `2`
     * - _Maximum_: `183`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-tieringpolicy-coolingperiod */
    "CoolingPeriod"?: number | Intrinsic;
    /**
     * - Specifies the tiering policy used to transition data. Default value is `SNAPSHOT_ONLY`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `SNAPSHOT_ONLY | AUTO | ALL | NONE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-tieringpolicy-name */
    "Name"?: string | Intrinsic;
}

/**
 * Use to specify configuration options for a volume’s storage aggregate or aggregates.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html */

export interface AggregateConfiguration {
    /**
     * - The list of aggregates that this volume resides on. Aggregates are storage pools which make up your primary storage tier. Each high-availability (HA) pair has one aggregate. The names of the aggregates map to the names of the aggregates in the ONTAP CLI and REST API. For FlexVols, there will always be a single entry.
     * - Amazon FSx responds with an HTTP status code 400 (Bad Request) for the following conditions:
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `6`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-aggregateconfiguration-aggregates */
    "Aggregates"?: (string | Intrinsic)[];
    /**
     * - Used to explicitly set the number of constituents within the FlexGroup per storage aggregate. This field is optional when creating a FlexGroup volume. If unspecified, the default value will be 8. This field cannot be provided when creating a FlexVol volume.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-aggregateconfiguration-constituentsperaggregate */
    "ConstituentsPerAggregate"?: number | Intrinsic;
}

/**
 * Sets the autocommit period of files in an FSx for ONTAP SnapLock volume, which determines how long the files must remain unmodified before they're automatically transitioned to the write once, read many (WORM) state.
 * For more information, see [Autocommit](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/worm-state.html#worm-state-autocommit).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html */

export interface AutocommitPeriod {
    /**
     * - Defines the type of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume. Setting this value to `NONE` disables autocommit. The default value is `NONE`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `MINUTES | HOURS | DAYS | MONTHS | YEARS | NONE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-autocommitperiod-type */
    "Type": string | Intrinsic;
    /**
     * - Defines the amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume. The following ranges are valid:
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `65535`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-autocommitperiod-value */
    "Value"?: number | Intrinsic;
}

/**
 * Specifies who can mount an OpenZFS file system and the options available while mounting the file system.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html */

export interface ClientConfigurations {
    /**
     * - A value that specifies who can mount the file system. You can provide a wildcard character (`*`), an IP address (`0.0.0.0`), or a CIDR address (`192.0.2.0/24`). By default, Amazon FSx uses the wildcard character when specifying the client.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[ -~]{1,128}$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-clientconfigurations-clients */
    "Clients": string | Intrinsic;
    /**
     * - The options to use when mounting the file system. For a list of options that you can use with Network File System (NFS), see the [exports(5) - Linux man page](https://linux.die.net/man/5/exports). When choosing your options, consider the following:
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-clientconfigurations-options */
    "Options": (string | Intrinsic)[];
}

/**
 * The configuration object for mounting a Network File System (NFS) file system.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html */

export interface NfsExports {
    /**
     * - A list of configuration objects that contain the client and options for mounting the OpenZFS file system.
     * - _Required_: Yes
     * - _Type_: [Array](./aws-properties-fsx-volume-clientconfigurations.html) of [ClientConfigurations](./aws-properties-fsx-volume-clientconfigurations.html)
     * - _Maximum_: `25`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-nfsexports-clientconfigurations */
    "ClientConfigurations": ClientConfigurations[];
}

/**
 * Specifies the configuration of the Amazon FSx for OpenZFS volume that you are creating.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html */

export interface OpenZFSConfiguration {
    /**
     * - A Boolean value indicating whether tags for the volume should be copied to snapshots. This value defaults to `false`. If this value is set to `true`, and you do not specify any tags, all tags for the original volume are copied over to snapshots. If this value is set to `true`, and you do specify one or more tags, only the specified tags for the original volume are copied over to snapshots. If you specify one or more tags when creating a new snapshot, no tags are copied over from the original volume, regardless of this value.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-openzfsconfiguration-copytagstosnapshots */
    "CopyTagsToSnapshots"?: boolean | Intrinsic;
    /**
     * - Specifies the method used to compress the data on the volume. The compression type is `NONE` by default.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `NONE | ZSTD | LZ4`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-openzfsconfiguration-datacompressiontype */
    "DataCompressionType"?: string | Intrinsic;
    /**
     * - The configuration object for mounting a Network File System (NFS) file system.
     * - _Required_: No
     * - _Type_: [Array](./aws-properties-fsx-volume-nfsexports.html) of [NfsExports](./aws-properties-fsx-volume-nfsexports.html)
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-openzfsconfiguration-nfsexports */
    "NfsExports"?: NfsExports[];
    /**
     * - To delete the volume's child volumes, snapshots, and clones, use the string `DELETE_CHILD_VOLUMES_AND_SNAPSHOTS`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-openzfsconfiguration-options */
    "Options"?: (string | Intrinsic)[];
    /**
     * - The configuration object that specifies the snapshot to use as the origin of the data for the volume.
     * - _Required_: No
     * - _Type_: [OriginSnapshot](./aws-properties-fsx-volume-originsnapshot.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-openzfsconfiguration-originsnapshot */
    "OriginSnapshot"?: OriginSnapshot;
    /**
     * - The ID of the volume to use as the parent volume of the volume that you are creating.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(fsvol-[0-9a-f]{17,})$`
     * - _Minimum_: `23`
     * - _Maximum_: `23`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-openzfsconfiguration-parentvolumeid */
    "ParentVolumeId": string | Intrinsic;
    /**
     * - A Boolean value indicating whether the volume is read-only.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-openzfsconfiguration-readonly */
    "ReadOnly"?: boolean | Intrinsic;
    /**
     * - Specifies the suggested block size for a volume in a ZFS dataset, in kibibytes (KiB). For file systems using the Intelligent-Tiering storage class, valid values are 128, 256, 512, 1024, 2048, or 4096 KiB, with a default of 1024 KiB. For all other file systems, valid values are 4, 8, 16, 32, 64, 128, 256, 512, or 1024 KiB, with a default of 128 KiB. We recommend using the default setting for the majority of use cases. Generally, workloads that write in fixed small or large record sizes may benefit from setting a custom record size, like database workloads (small record size) or media streaming workloads (large record size). For additional guidance on when to set a custom record size, see [ZFS Record size](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#record-size-performance) in the _Amazon FSx for OpenZFS User Guide_.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `4`
     * - _Maximum_: `4096`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-openzfsconfiguration-recordsizekib */
    "RecordSizeKiB"?: number | Intrinsic;
    /**
     * - Sets the maximum storage size in gibibytes (GiB) for the volume. You can specify a quota that is larger than the storage on the parent volume. A volume quota limits the amount of storage that the volume can consume to the configured amount, but does not guarantee the space will be available on the parent volume. To guarantee quota space, you must also set `StorageCapacityReservationGiB`. To _not_ specify a storage capacity quota, set this to `-1`.
     * - For more information, see [Volume properties](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/managing-volumes.html#volume-properties) in the _Amazon FSx for OpenZFS User Guide_.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `-1`
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-openzfsconfiguration-storagecapacityquotagib */
    "StorageCapacityQuotaGiB"?: number | Intrinsic;
    /**
     * - Specifies the amount of storage in gibibytes (GiB) to reserve from the parent volume. Setting `StorageCapacityReservationGiB` guarantees that the specified amount of storage space on the parent volume will always be available for the volume. You can't reserve more storage than the parent volume has. To _not_ specify a storage capacity reservation, set this to `0` or `-1`. For more information, see [Volume properties](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/managing-volumes.html#volume-properties) in the _Amazon FSx for OpenZFS User Guide_.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `-1`
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-openzfsconfiguration-storagecapacityreservationgib */
    "StorageCapacityReservationGiB"?: number | Intrinsic;
    /**
     * - Configures how much storage users and groups can use on the volume.
     * - _Required_: No
     * - _Type_: [Array](./aws-properties-fsx-volume-userandgroupquotas.html) of [UserAndGroupQuotas](./aws-properties-fsx-volume-userandgroupquotas.html)
     * - _Maximum_: `500`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-openzfsconfiguration-userandgroupquotas */
    "UserAndGroupQuotas"?: UserAndGroupQuotas[];
}

/**
 * Specifies the retention period of an FSx for ONTAP SnapLock volume. After it is set, it can't be changed. Files can't be deleted or modified during the retention period.
 * For more information, see [Working with the retention period in SnapLock](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-retention.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html */

export interface RetentionPeriod {
    /**
     * - Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume. Set it to one of the valid types. If you set it to `INFINITE`, the files are retained forever. If you set it to `UNSPECIFIED`, the files are retained until you set an explicit retention period.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `SECONDS | MINUTES | HOURS | DAYS | MONTHS | YEARS | INFINITE | UNSPECIFIED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-retentionperiod-type */
    "Type": string | Intrinsic;
    /**
     * - Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume. You can't set a value for `INFINITE` or `UNSPECIFIED`. For all other options, the following ranges are valid:
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `65535`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-retentionperiod-value */
    "Value"?: number | Intrinsic;
}

/**
 * The configuration to set the retention period of an FSx for ONTAP SnapLock volume. The retention period includes default, maximum, and minimum settings. For more information, see [Working with the retention period in SnapLock](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-retention.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html */

export interface SnaplockRetentionPeriod {
    /**
     * - The retention period assigned to a write once, read many (WORM) file by default if an explicit retention period is not set for an FSx for ONTAP SnapLock volume. The default retention period must be greater than or equal to the minimum retention period and less than or equal to the maximum retention period.
     * - _Required_: Yes
     * - _Type_: [RetentionPeriod](./aws-properties-fsx-volume-retentionperiod.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-snaplockretentionperiod-defaultretention */
    "DefaultRetention": RetentionPeriod;
    /**
     * - The longest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume.
     * - _Required_: Yes
     * - _Type_: [RetentionPeriod](./aws-properties-fsx-volume-retentionperiod.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-snaplockretentionperiod-maximumretention */
    "MaximumRetention": RetentionPeriod;
    /**
     * - The shortest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume.
     * - _Required_: Yes
     * - _Type_: [RetentionPeriod](./aws-properties-fsx-volume-retentionperiod.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-snaplockretentionperiod-minimumretention */
    "MinimumRetention": RetentionPeriod;
}

/**
 * Specifies the SnapLock configuration for an FSx for ONTAP SnapLock volume.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html */

export interface SnaplockConfiguration {
    /**
     * - Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume. The default value is `false`. If you set `AuditLogVolume` to `true`, the SnapLock volume is created as an audit log volume. The minimum retention period for an audit log volume is six months.
     * - For more information, see [SnapLock audit log volumes](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/how-snaplock-works.html#snaplock-audit-log-volume).
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-snaplockconfiguration-auditlogvolume */
    "AuditLogVolume"?: string | Intrinsic;
    /**
     * - The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume.
     * - _Required_: No
     * - _Type_: [AutocommitPeriod](./aws-properties-fsx-volume-autocommitperiod.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-snaplockconfiguration-autocommitperiod */
    "AutocommitPeriod"?: AutocommitPeriod;
    /**
     * - Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock Enterprise volume. Enabling privileged delete allows SnapLock administrators to delete write once, read many (WORM) files even if they have active retention periods. `PERMANENTLY_DISABLED` is a terminal state. If privileged delete is permanently disabled on a SnapLock volume, you can't re-enable it. The default value is `DISABLED`.
     * - For more information, see [Privileged delete](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snaplock-enterprise.html#privileged-delete).
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DISABLED | ENABLED | PERMANENTLY_DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-snaplockconfiguration-privilegeddelete */
    "PrivilegedDelete"?: string | Intrinsic;
    /**
     * - Specifies the retention period of an FSx for ONTAP SnapLock volume.
     * - _Required_: No
     * - _Type_: [SnaplockRetentionPeriod](./aws-properties-fsx-volume-snaplockretentionperiod.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-snaplockconfiguration-retentionperiod */
    "RetentionPeriod"?: SnaplockRetentionPeriod;
    /**
     * - Specifies the retention mode of an FSx for ONTAP SnapLock volume. After it is set, it can't be changed. You can choose one of the following retention modes:
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `COMPLIANCE | ENTERPRISE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-snaplockconfiguration-snaplocktype */
    "SnaplockType": string | Intrinsic;
    /**
     * - Enables or disables volume-append mode on an FSx for ONTAP SnapLock volume. Volume-append mode allows you to create WORM-appendable files and write data to them incrementally. The default value is `false`.
     * - For more information, see [Volume-append mode](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/worm-state.html#worm-state-append).
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-snaplockconfiguration-volumeappendmodeenabled */
    "VolumeAppendModeEnabled"?: string | Intrinsic;
}

/**
 * Specifies the configuration of the ONTAP volume that you are creating.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html */

export interface OntapConfiguration {
    /**
     * - Used to specify the configuration options for an FSx for ONTAP volume's storage aggregate or aggregates.
     * - _Required_: No
     * - _Type_: [AggregateConfiguration](./aws-properties-fsx-volume-aggregateconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-ontapconfiguration-aggregateconfiguration */
    "AggregateConfiguration"?: AggregateConfiguration;
    /**
     * - A boolean flag indicating whether tags for the volume should be copied to backups. This value defaults to false. If it's set to true, all tags for the volume are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the volume, regardless of this value.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-ontapconfiguration-copytagstobackups */
    "CopyTagsToBackups"?: string | Intrinsic;
    /**
     * - Specifies the location in the SVM's namespace where the volume is mounted. This parameter is required. The `JunctionPath` must have a leading forward slash, such as `/vol3`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[^\u0000\u0085\u2028\u2029\r\n]{1,255}$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-ontapconfiguration-junctionpath */
    "JunctionPath"?: string | Intrinsic;
    /**
     * - Specifies the type of volume you are creating. Valid values are the following:
     * - For more information, see [Volume types](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-volumes.html#volume-types) in the Amazon FSx for NetApp ONTAP User Guide.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `RW | DP`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-ontapconfiguration-ontapvolumetype */
    "OntapVolumeType"?: string | Intrinsic;
    /**
     * - Specifies the security style for the volume. If a volume's security style is not specified, it is automatically set to the root volume's security style. The security style determines the type of permissions that FSx for ONTAP uses to control data access. Specify one of the following values:
     * - For more information, see [Volume security style](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-volumes.html#volume-security-style) in the FSx for ONTAP User Guide.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `UNIX | NTFS | MIXED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-ontapconfiguration-securitystyle */
    "SecurityStyle"?: string | Intrinsic;
    /**
     * - Specifies the configured size of the volume, in bytes.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-ontapconfiguration-sizeinbytes */
    "SizeInBytes"?: string | Intrinsic;
    /**
     * - Use `SizeInBytes` instead. Specifies the size of the volume, in megabytes (MB), that you are creating.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-ontapconfiguration-sizeinmegabytes */
    "SizeInMegabytes"?: string | Intrinsic;
    /**
     * - The SnapLock configuration object for an FSx for ONTAP SnapLock volume.
     * - _Required_: No
     * - _Type_: [SnaplockConfiguration](./aws-properties-fsx-volume-snaplockconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-ontapconfiguration-snaplockconfiguration */
    "SnaplockConfiguration"?: SnaplockConfiguration;
    /**
     * - Specifies the snapshot policy for the volume. There are three built-in snapshot policies:
     * - You can also provide the name of a custom policy that you created with the ONTAP CLI or REST API.
     * - For more information, see [Snapshot policies](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/snapshots-ontap.html#snapshot-policies) in the Amazon FSx for NetApp ONTAP User Guide.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-ontapconfiguration-snapshotpolicy */
    "SnapshotPolicy"?: string | Intrinsic;
    /**
     * - Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume, or set to false to disable them.
     * - `StorageEfficiencyEnabled` is required when creating a `RW` volume (`OntapVolumeType` set to `RW`).
     * - _Required_: Conditional
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-ontapconfiguration-storageefficiencyenabled */
    "StorageEfficiencyEnabled"?: string | Intrinsic;
    /**
     * - Specifies the ONTAP SVM in which to create the volume.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(svm-[0-9a-f]{17,})$`
     * - _Minimum_: `21`
     * - _Maximum_: `21`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-ontapconfiguration-storagevirtualmachineid */
    "StorageVirtualMachineId": string | Intrinsic;
    /**
     * - Describes the data tiering policy for an ONTAP volume. When enabled, Amazon FSx for ONTAP's intelligent tiering automatically transitions a volume's data between the file system's primary storage and capacity pool storage based on your access patterns.
     * - Valid tiering policies are the following:
     * - _Required_: No
     * - _Type_: [TieringPolicy](./aws-properties-fsx-volume-tieringpolicy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-ontapconfiguration-tieringpolicy */
    "TieringPolicy"?: TieringPolicy;
    /**
     * - Use to specify the style of an ONTAP volume. FSx for ONTAP offers two styles of volumes that you can use for different purposes, FlexVol and FlexGroup volumes. For more information, see [Volume styles](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-volumes.html#volume-styles) in the Amazon FSx for NetApp ONTAP User Guide.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `FLEXVOL | FLEXGROUP`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-ontapconfiguration-volumestyle */
    "VolumeStyle"?: string | Intrinsic;
}

/**
 * Creates an FSx for ONTAP or Amazon FSx for OpenZFS storage volume.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html */

export interface FSxVolume extends ResourceAttributes {
    "Type": "AWS::FSx::Volume";
    "Properties": {
        /**
         * - Specifies the ID of the volume backup to use to create a new volume.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-backupid */
        "BackupId"?: string | Intrinsic;
        /**
         * - The name of the volume.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[^\u0000\u0085\u2028\u2029\r\n]{1,203}$`
         * - _Minimum_: `1`
         * - _Maximum_: `203`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-name */
        "Name": string | Intrinsic;
        /**
         * - The configuration of an Amazon FSx for NetApp ONTAP volume.
         * - _Required_: No
         * - _Type_: [OntapConfiguration](./aws-properties-fsx-volume-ontapconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-ontapconfiguration */
        "OntapConfiguration"?: OntapConfiguration;
        /**
         * - The configuration of an Amazon FSx for OpenZFS volume.
         * - _Required_: No
         * - _Type_: [OpenZFSConfiguration](./aws-properties-fsx-volume-openzfsconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-openzfsconfiguration */
        "OpenZFSConfiguration"?: OpenZFSConfiguration;
        /**
         * - An array of key-value pairs to apply to this resource.
         * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-fsx-volume-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-tags */
        "Tags"?: Tag[];
        /**
         * - The type of the volume.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `ONTAP | OPENZFS`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-volume.html#cfn-fsx-volume-volumetype */
        "VolumeType"?: string | Intrinsic;
    };
}