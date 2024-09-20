import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies a key-value pair for a resource tag.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html */

export interface Tag {
  /**
   * - A value that specifies the `TagKey`, the name of the tag. Tag keys must be unique for the resource to which they are attached.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-tag-key */
  Key: string | Intrinsic
  /**
   * - A value that specifies the `TagValue`, the value assigned to the corresponding tag key. Tag values can be null and don't have to be unique in a tag set. For example, you can have a key-value pair in a tag set of `finances : April` and also of `payroll : April`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-tag-value */
  Value: string | Intrinsic
}

/**
 * The `MetadataConfiguration` property type specifies Property description not available. for an [AWS::FSx::FileSystem](./aws-resource-fsx-filesystem.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html */

export interface MetadataConfiguration {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-metadataconfiguration-iops */
  Iops?: number | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-metadataconfiguration-mode */
  Mode?: string | Intrinsic
}

/**
 * The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP, Amazon FSx for Windows File Server, or FSx for OpenZFS file system. By default, Amazon FSx automatically provisions 3 IOPS per GB of storage capacity. You can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how it is was provisioned, or the mode (by the customer or by Amazon FSx).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html */

export interface DiskIopsConfiguration {
  /**
   * - The total number of SSD IOPS provisioned for the file system.
   * - The minimum and maximum values for this property depend on the value of `HAPairs` and `StorageCapacity`. The minimum value is calculated as `StorageCapacity` \* 3 \* `HAPairs` (3 IOPS per GB of `StorageCapacity`). The maximum value is calculated as 200,000 \* `HAPairs`.
   * - Amazon FSx responds with an HTTP status code 400 (Bad Request) if the value of `Iops` is outside of the minimum or maximum values.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-diskiopsconfiguration-iops */
  Iops?: number | Intrinsic
  /**
   * - Specifies whether the file system is using the `AUTOMATIC` setting of SSD IOPS of 3 IOPS per GB of storage capacity, or if it using a `USER_PROVISIONED` value.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `AUTOMATIC | USER_PROVISIONED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-diskiopsconfiguration-mode */
  Mode?: string | Intrinsic
}

/**
 * The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html */

export interface AuditLogConfiguration {
  /**
   * - The Amazon Resource Name (ARN) for the destination of the audit logs. The destination can be any Amazon CloudWatch Logs log group ARN or Amazon Kinesis Data Firehose delivery stream ARN.
   * - The name of the Amazon CloudWatch Logs log group must begin with the `/aws/fsx` prefix. The name of the Amazon Kinesis Data Firehose delivery stream must begin with the `aws-fsx` prefix.
   * - The destination ARN (either CloudWatch Logs log group or Kinesis Data Firehose delivery stream) must be in the same AWS partition, AWS Region, and AWS account as your Amazon FSx file system.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:[^:]{1,63}:[^:]{0,63}:[^:]{0,63}:(?:|\d{12}):[^/].{0,1023}$`
   * - _Minimum_: `8`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-auditlogconfiguration-auditlogdestination */
  AuditLogDestination?: string | Intrinsic
  /**
   * - Sets which attempt type is logged by Amazon FSx for file and folder accesses.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `DISABLED | SUCCESS_ONLY | FAILURE_ONLY | SUCCESS_AND_FAILURE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-auditlogconfiguration-fileaccessauditloglevel */
  FileAccessAuditLogLevel: string | Intrinsic
  /**
   * - Sets which attempt type is logged by Amazon FSx for file share accesses.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `DISABLED | SUCCESS_ONLY | FAILURE_ONLY | SUCCESS_AND_FAILURE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-auditlogconfiguration-fileshareaccessauditloglevel */
  FileShareAccessAuditLogLevel: string | Intrinsic
}

/**
 * The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an FSx for ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see [Using Amazon FSx for Windows with your self-managed Microsoft Active Directory](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html) or [Managing FSx for ONTAP SVMs](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html */

export interface SelfManagedActiveDirectoryConfiguration {
  /**
   * - A list of up to three IP addresses of DNS servers or domain controllers in the self-managed AD directory.
   * - _Required_: Conditional
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `3`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-selfmanagedactivedirectoryconfiguration-dnsips */
  DnsIps?: (string | Intrinsic)[]
  /**
   * - The fully qualified domain name of the self-managed AD directory, such as `corp.example.com`.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[^\u0000\u0085\u2028\u2029\r\n]{1,255}$`
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-selfmanagedactivedirectoryconfiguration-domainname */
  DomainName?: string | Intrinsic
  /**
   * - (Optional) The name of the domain group whose members are granted administrative privileges for the file system. Administrative privileges include taking ownership of files and folders, setting audit controls (audit ACLs) on files and folders, and administering the file system remotely by using the FSx Remote PowerShell. The group that you specify must already exist in your domain. If you don't provide one, your AD domain's Domain Admins group is used.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[^\u0000\u0085\u2028\u2029\r\n]{1,256}$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-selfmanagedactivedirectoryconfiguration-filesystemadministratorsgroup */
  FileSystemAdministratorsGroup?: string | Intrinsic
  /**
   * - (Optional) The fully qualified distinguished name of the organizational unit within your self-managed AD directory. Amazon FSx only accepts OU as the direct parent of the file system. An example is `OU=FSx,DC=yourdomain,DC=corp,DC=com`. To learn more, see [RFC 2253](https://tools.ietf.org/html/rfc2253). If none is provided, the FSx file system is created in the default location of your self-managed AD directory.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[^\u0000\u0085\u2028\u2029\r\n]{1,2000}$`
   * - _Minimum_: `1`
   * - _Maximum_: `2000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-selfmanagedactivedirectoryconfiguration-organizationalunitdistinguishedname */
  OrganizationalUnitDistinguishedName?: string | Intrinsic
  /**
   * - The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^.{1,256}$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-selfmanagedactivedirectoryconfiguration-password */
  Password?: string | Intrinsic
  /**
   * - The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain. This account must have the permission to join computers to the domain in the organizational unit provided in `OrganizationalUnitDistinguishedName`, or in the default location of your AD domain.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[^\u0000\u0085\u2028\u2029\r\n]{1,256}$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-selfmanagedactivedirectoryconfiguration-username */
  UserName?: string | Intrinsic
}

/**
 * Used to configure quotas that define how much storage a user or group can use on an FSx for OpenZFS volume. For more information, see [Volume properties](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/managing-volumes.html#volume-properties) in the FSx for OpenZFS User Guide.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html */

export interface UserAndGroupQuotas {
  /**
   * - The ID of the user or group that the quota applies to.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `2147483647`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-userandgroupquotas-id */
  Id?: number | Intrinsic
  /**
   * - The user or group's storage quota, in gibibytes (GiB).
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `2147483647`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-userandgroupquotas-storagecapacityquotagib */
  StorageCapacityQuotaGiB?: number | Intrinsic
  /**
   * - Specifies whether the quota applies to a user or group.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `USER | GROUP`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-userandgroupquotas-type */
  Type?: string | Intrinsic
}

/**
 * Specifies who can mount an OpenZFS file system and the options available while mounting the file system.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html */

export interface ClientConfigurations {
  /**
   * - A value that specifies who can mount the file system. You can provide a wildcard character (`*`), an IP address (`0.0.0.0`), or a CIDR address (`192.0.2.0/24`). By default, Amazon FSx uses the wildcard character when specifying the client.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[ -~]{1,128}$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-clientconfigurations-clients */
  Clients?: string | Intrinsic
  /**
   * - The options to use when mounting the file system. For a list of options that you can use with Network File System (NFS), see the [exports(5) - Linux man page](https://linux.die.net/man/5/exports). When choosing your options, consider the following:
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `20`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-clientconfigurations-options */
  Options?: (string | Intrinsic)[]
}

/**
 * The configuration for the Amazon FSx for Lustre file system.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html */

export interface LustreConfiguration {
  /**
   * - (Optional) When you create your file system, your existing S3 objects appear as file and directory listings. Use this property to choose how Amazon FSx keeps your file and directory listings up to date as you add or modify objects in your linked S3 bucket. `AutoImportPolicy` can have the following values:
   * - For more information, see [Automatically import updates from your S3 bucket](https://docs.aws.amazon.com/fsx/latest/LustreGuide/autoimport-data-repo.html).
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | NEW | NEW_CHANGED | NEW_CHANGED_DELETED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-lustreconfiguration-autoimportpolicy */
  AutoImportPolicy?: string | Intrinsic
  /**
   * - The number of days to retain automatic backups. Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `0`.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `90`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-lustreconfiguration-automaticbackupretentiondays */
  AutomaticBackupRetentionDays?: number | Intrinsic
  /**
   * - (Optional) Not available for use with file systems that are linked to a data repository. A boolean flag indicating whether tags for the file system should be copied to backups. The default value is false. If `CopyTagsToBackups` is set to true, all file system tags are copied to all automatic and user-initiated backups when the user doesn't specify any backup-specific tags. If `CopyTagsToBackups` is set to true and you specify one or more backup tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.
   * - (Default = `false`)
   * - For more information, see [Working with backups](https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html) in the _Amazon FSx for Lustre User Guide_.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-lustreconfiguration-copytagstobackups */
  CopyTagsToBackups?: boolean | Intrinsic
  /**
   * - A recurring daily time, in the format `HH:MM`. `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, `05:00` specifies 5 AM daily.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-lustreconfiguration-dailyautomaticbackupstarttime */
  DailyAutomaticBackupStartTime?: string | Intrinsic
  /**
   * - Sets the data compression configuration for the file system. `DataCompressionType` can have the following values:
   * - For more information, see [Lustre data compression](https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-compression.html) in the _Amazon FSx for Lustre User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | LZ4`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-lustreconfiguration-datacompressiontype */
  DataCompressionType?: string | Intrinsic
  /**
   * - (Optional) Choose `SCRATCH_1` and `SCRATCH_2` deployment types when you need temporary storage and shorter-term processing of data. The `SCRATCH_2` deployment type provides in-transit encryption of data and higher burst throughput capacity than `SCRATCH_1`.
   * - Choose `PERSISTENT_1` for longer-term storage and for throughput-focused workloads that aren’t latency-sensitive. `PERSISTENT_1` supports encryption of data in transit, and is available in all AWS Regions in which FSx for Lustre is available.
   * - Choose `PERSISTENT_2` for longer-term storage and for latency-sensitive workloads that require the highest levels of IOPS/throughput. `PERSISTENT_2` supports SSD storage, and offers higher `PerUnitStorageThroughput` (up to 1000 MB/s/TiB). You can optionally specify a metadata configuration mode for `PERSISTENT_2` which supports increasing metadata performance. `PERSISTENT_2` is available in a limited number of AWS Regions. For more information, and an up-to-date list of AWS Regions in which `PERSISTENT_2` is available, see [File system deployment options for FSx for Lustre](https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-fsx-lustre.html#lustre-deployment-types) in the _Amazon FSx for Lustre User Guide_.
   * - Encryption of data in transit is automatically turned on when you access `SCRATCH_2`, `PERSISTENT_1`, and `PERSISTENT_2` file systems from Amazon EC2 instances that support automatic encryption in the AWS Regions where they are available. For more information about encryption in transit for FSx for Lustre file systems, see [Encrypting data in transit](https://docs.aws.amazon.com/fsx/latest/LustreGuide/encryption-in-transit-fsxl.html) in the _Amazon FSx for Lustre User Guide_.
   * - (Default = `SCRATCH_1`)
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SCRATCH_1 | SCRATCH_2 | PERSISTENT_1 | PERSISTENT_2`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-lustreconfiguration-deploymenttype */
  DeploymentType?: string | Intrinsic
  /**
   * - The type of drive cache used by `PERSISTENT_1` file systems that are provisioned with HDD storage devices. This parameter is required when storage type is HDD. Set this property to `READ` to improve the performance for frequently accessed files by caching up to 20% of the total storage capacity of the file system.
   * - This parameter is required when `StorageType` is set to `HDD` and `DeploymentType` is `PERSISTENT_1`.
   * - _Required_: Conditional
   * - _Type_: String
   * - _Allowed values_: `NONE | READ`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-lustreconfiguration-drivecachetype */
  DriveCacheType?: string | Intrinsic
  /**
   * - (Optional) Specifies the path in the Amazon S3 bucket where the root of your Amazon FSx file system is exported. The path must use the same Amazon S3 bucket as specified in ImportPath. You can provide an optional prefix to which new and changed data is to be exported from your Amazon FSx for Lustre file system. If an `ExportPath` value is not provided, Amazon FSx sets a default export path, `s3://import-bucket/FSxLustre[creation-timestamp]`. The timestamp is in UTC format, for example `s3://import-bucket/FSxLustre20181105T222312Z`.
   * - The Amazon S3 export bucket must be the same as the import bucket specified by `ImportPath`. If you specify only a bucket name, such as `s3://import-bucket`, you get a 1:1 mapping of file system objects to S3 bucket objects. This mapping means that the input data in S3 is overwritten on export. If you provide a custom prefix in the export path, such as `s3://import-bucket/[custom-optional-prefix]`, Amazon FSx exports the contents of your file system to that export prefix in the Amazon S3 bucket.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[^\u0000\u0085\u2028\u2029\r\n]{3,4357}$`
   * - _Minimum_: `3`
   * - _Maximum_: `4357`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-lustreconfiguration-exportpath */
  ExportPath?: string | Intrinsic
  /**
   * - (Optional) For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system.
   * - The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `512000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-lustreconfiguration-importedfilechunksize */
  ImportedFileChunkSize?: number | Intrinsic
  /**
   * - (Optional) The path to the Amazon S3 bucket (including the optional prefix) that you're using as the data repository for your Amazon FSx for Lustre file system. The root of your FSx for Lustre file system will be mapped to the root of the Amazon S3 bucket you select. An example is `s3://import-bucket/optional-prefix`. If you specify a prefix after the Amazon S3 bucket name, only object keys with that prefix are loaded into the file system.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[^\u0000\u0085\u2028\u2029\r\n]{3,4357}$`
   * - _Minimum_: `3`
   * - _Maximum_: `4357`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-lustreconfiguration-importpath */
  ImportPath?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [MetadataConfiguration](./aws-properties-fsx-filesystem-metadataconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-lustreconfiguration-metadataconfiguration */
  MetadataConfiguration?: MetadataConfiguration
  /**
   * - Required with `PERSISTENT_1` and `PERSISTENT_2` deployment types, provisions the amount of read and write throughput for each 1 tebibyte (TiB) of file system storage capacity, in MB/s/TiB. File system throughput capacity is calculated by multiplying ﬁle system storage capacity (TiB) by the `PerUnitStorageThroughput` (MB/s/TiB). For a 2.4-TiB ﬁle system, provisioning 50 MB/s/TiB of `PerUnitStorageThroughput` yields 120 MB/s of ﬁle system throughput. You pay for the amount of throughput that you provision.
   * - Valid values:
   * - _Required_: Conditional
   * - _Type_: Integer
   * - _Minimum_: `12`
   * - _Maximum_: `1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-lustreconfiguration-perunitstoragethroughput */
  PerUnitStorageThroughput?: number | Intrinsic
  /**
   * - A recurring weekly time, in the format `D:HH:MM`.
   * - `D` is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see [the ISO-8601 spec as described on Wikipedia](https://en.wikipedia.org/wiki/ISO_week_date).
   * - `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour.
   * - For example, `1:05:00` specifies maintenance at 5 AM Monday.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-lustreconfiguration-weeklymaintenancestarttime */
  WeeklyMaintenanceStartTime?: string | Intrinsic
}

/**
 * The configuration for this Amazon FSx for NetApp ONTAP file system.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html */

export interface OntapConfiguration {
  /**
   * - The number of days to retain automatic backups. Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `30`.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-ontapconfiguration-automaticbackupretentiondays */
  AutomaticBackupRetentionDays?: number | Intrinsic
  /**
   * - A recurring daily time, in the format `HH:MM`. `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, `05:00` specifies 5 AM daily.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-ontapconfiguration-dailyautomaticbackupstarttime */
  DailyAutomaticBackupStartTime?: string | Intrinsic
  /**
   * - Specifies the FSx for ONTAP file system deployment type to use in creating the file system.
   * - For information about the use cases for Multi-AZ and Single-AZ deployments, refer to [Choosing a file system deployment type](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/high-availability-AZ.html).
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `MULTI_AZ_1 | SINGLE_AZ_1 | SINGLE_AZ_2 | MULTI_AZ_2`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-ontapconfiguration-deploymenttype */
  DeploymentType: string | Intrinsic
  /**
   * - The SSD IOPS configuration for the FSx for ONTAP file system.
   * - _Required_: No
   * - _Type_: [DiskIopsConfiguration](./aws-properties-fsx-filesystem-diskiopsconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-ontapconfiguration-diskiopsconfiguration */
  DiskIopsConfiguration?: DiskIopsConfiguration
  /**
   * - (Multi-AZ only) Specifies the IP address range in which the endpoints to access your file system will be created. By default in the Amazon FSx API, Amazon FSx selects an unused IP address range for you from the 198.19.\* range. By default in the Amazon FSx console, Amazon FSx chooses the last 64 IP addresses from the VPC’s primary CIDR range to use as the endpoint IP address range for the file system. You can have overlapping endpoint IP addresses for file systems deployed in the same VPC/route tables, as long as they don't overlap with any subnet.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[^\u0000\u0085\u2028\u2029\r\n]{9,17}$`
   * - _Minimum_: `9`
   * - _Maximum_: `17`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-ontapconfiguration-endpointipaddressrange */
  EndpointIpAddressRange?: string | Intrinsic
  /**
   * - The ONTAP administrative password for the `fsxadmin` user with which you administer your file system using the NetApp ONTAP CLI and REST API.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[^\u0000\u0085\u2028\u2029\r\n]{8,50}$`
   * - _Minimum_: `8`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-ontapconfiguration-fsxadminpassword */
  FsxAdminPassword?: string | Intrinsic
  /**
   * - Specifies how many high-availability (HA) pairs of file servers will power your file system. First-generation file systems are powered by 1 HA pair. Second-generation multi-AZ file systems are powered by 1 HA pair. Second generation single-AZ file systems are powered by up to 12 HA pairs. The default value is 1. The value of this property affects the values of `StorageCapacity`, `Iops`, and `ThroughputCapacity`. For more information, see [High-availability (HA) pairs](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/administering-file-systems.html#HA-pairs) in the FSx for ONTAP user guide. Block storage protocol support (iSCSI and NVMe over TCP) is disabled on file systems with more than 6 HA pairs. For more information, see [Using block storage protocols](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/supported-fsx-clients.html#using-block-storage).
   * - Amazon FSx responds with an HTTP status code 400 (Bad Request) for the following conditions:
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `12`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-ontapconfiguration-hapairs */
  HAPairs?: number | Intrinsic
  /**
   * - Required when `DeploymentType` is set to `MULTI_AZ_1` or `MULTI_AZ_2`. This specifies the subnet in which you want the preferred file server to be located.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-ontapconfiguration-preferredsubnetid */
  PreferredSubnetId?: string | Intrinsic
  /**
   * - (Multi-AZ only) Specifies the route tables in which Amazon FSx creates the rules for routing traffic to the correct file server. You should specify all virtual private cloud (VPC) route tables associated with the subnets in which your clients are located. By default, Amazon FSx selects your VPC's default route table.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-ontapconfiguration-routetableids */
  RouteTableIds?: (string | Intrinsic)[]
  /**
   * - Sets the throughput capacity for the file system that you're creating in megabytes per second (MBps). For more information, see [Managing throughput capacity](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-throughput-capacity.html) in the FSx for ONTAP User Guide.
   * - Amazon FSx responds with an HTTP status code 400 (Bad Request) for the following conditions:
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `8`
   * - _Maximum_: `100000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-ontapconfiguration-throughputcapacity */
  ThroughputCapacity?: number | Intrinsic
  /**
   * - Use to choose the throughput capacity per HA pair, rather than the total throughput for the file system.
   * - You can define either the `ThroughputCapacityPerHAPair` or the `ThroughputCapacity` when creating a file system, but not both.
   * - This field and `ThroughputCapacity` are the same for file systems powered by one HA pair.
   * - Amazon FSx responds with an HTTP status code 400 (Bad Request) for the following conditions:
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `128`
   * - _Maximum_: `6144`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-ontapconfiguration-throughputcapacityperhapair */
  ThroughputCapacityPerHAPair?: number | Intrinsic
  /**
   * - A recurring weekly time, in the format `D:HH:MM`.
   * - `D` is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see [the ISO-8601 spec as described on Wikipedia](https://en.wikipedia.org/wiki/ISO_week_date).
   * - `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour.
   * - For example, `1:05:00` specifies maintenance at 5 AM Monday.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-ontapconfiguration-weeklymaintenancestarttime */
  WeeklyMaintenanceStartTime?: string | Intrinsic
}

/**
 * The Microsoft Windows configuration for the file system that's being created.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html */

export interface WindowsConfiguration {
  /**
   * - The ID for an existing AWS Managed Microsoft Active Directory (AD) instance that the file system should join when it's created. Required if you are joining the file system to an existing AWS Managed Microsoft AD.
   * - _Required_: Conditional
   * - _Type_: String
   * - _Pattern_: `^d-[0-9a-f]{10}$`
   * - _Minimum_: `12`
   * - _Maximum_: `12`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-windowsconfiguration-activedirectoryid */
  ActiveDirectoryId?: string | Intrinsic
  /**
   * - An array of one or more DNS alias names that you want to associate with the Amazon FSx file system. Aliases allow you to use existing DNS names to access the data in your Amazon FSx file system. You can associate up to 50 aliases with a file system at any time.
   * - For more information, see [Working with DNS Aliases](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html) and [Walkthrough 5: Using DNS aliases to access your file system](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/walkthrough05-file-system-custom-CNAME.html), including additional steps you must take to be able to access your file system using a DNS alias.
   * - An alias name has to meet the following requirements:
   * - For DNS alias names, Amazon FSx stores alphabetical characters as lowercase letters (a-z), regardless of how you specify them: as uppercase letters, lowercase letters, or the corresponding letters in escape codes.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-windowsconfiguration-aliases */
  Aliases?: (string | Intrinsic)[]
  /**
   * - The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system.
   * - _Required_: No
   * - _Type_: [AuditLogConfiguration](./aws-properties-fsx-filesystem-auditlogconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-windowsconfiguration-auditlogconfiguration */
  AuditLogConfiguration?: AuditLogConfiguration
  /**
   * - The number of days to retain automatic backups. Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `30`.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-windowsconfiguration-automaticbackupretentiondays */
  AutomaticBackupRetentionDays?: number | Intrinsic
  /**
   * - A boolean flag indicating whether tags for the file system should be copied to backups. This value defaults to false. If it's set to true, all tags for the file system are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-windowsconfiguration-copytagstobackups */
  CopyTagsToBackups?: boolean | Intrinsic
  /**
   * - A recurring daily time, in the format `HH:MM`. `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, `05:00` specifies 5 AM daily.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-windowsconfiguration-dailyautomaticbackupstarttime */
  DailyAutomaticBackupStartTime?: string | Intrinsic
  /**
   * - Specifies the file system deployment type, valid values are the following:
   * - For more information, see [Availability and Durability: Single-AZ and Multi-AZ File Systems](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html).
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `MULTI_AZ_1 | SINGLE_AZ_1 | SINGLE_AZ_2`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-windowsconfiguration-deploymenttype */
  DeploymentType?: string | Intrinsic
  /**
   * - The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for Windows file system. By default, Amazon FSx automatically provisions 3 IOPS per GiB of storage capacity. You can provision additional IOPS per GiB of storage, up to the maximum limit associated with your chosen throughput capacity.
   * - _Required_: No
   * - _Type_: [DiskIopsConfiguration](./aws-properties-fsx-filesystem-diskiopsconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-windowsconfiguration-diskiopsconfiguration */
  DiskIopsConfiguration?: DiskIopsConfiguration
  /**
   * - Required when `DeploymentType` is set to `MULTI_AZ_1`. This specifies the subnet in which you want the preferred file server to be located. For in-AWS applications, we recommend that you launch your clients in the same availability zone as your preferred file server to reduce cross-availability zone data transfer costs and minimize latency.
   * - _Required_: Conditional
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-windowsconfiguration-preferredsubnetid */
  PreferredSubnetId?: string | Intrinsic
  /**
   * - The configuration that Amazon FSx uses to join a FSx for Windows File Server file system or an FSx for ONTAP storage virtual machine (SVM) to a self-managed (including on-premises) Microsoft Active Directory (AD) directory. For more information, see [Using Amazon FSx for Windows with your self-managed Microsoft Active Directory](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/self-managed-AD.html) or [Managing FSx for ONTAP SVMs](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-svms.html).
   * - _Required_: No
   * - _Type_: [SelfManagedActiveDirectoryConfiguration](./aws-properties-fsx-filesystem-selfmanagedactivedirectoryconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-windowsconfiguration-selfmanagedactivedirectoryconfiguration */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration
  /**
   * - Sets the throughput capacity of an Amazon FSx file system, measured in megabytes per second (MB/s), in 2 to the _n_th increments, between 2^3 (8) and 2^11 (2048).
   * - _Required_: Conditional
   * - _Type_: Integer
   * - _Minimum_: `8`
   * - _Maximum_: `100000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-windowsconfiguration-throughputcapacity */
  ThroughputCapacity?: number | Intrinsic
  /**
   * - A recurring weekly time, in the format `D:HH:MM`.
   * - `D` is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see [the ISO-8601 spec as described on Wikipedia](https://en.wikipedia.org/wiki/ISO_week_date).
   * - `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour.
   * - For example, `1:05:00` specifies maintenance at 5 AM Monday.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-windowsconfiguration-weeklymaintenancestarttime */
  WeeklyMaintenanceStartTime?: string | Intrinsic
}

/**
 * The configuration object for mounting a file system.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html */

export interface NfsExports {
  /**
   * - A list of configuration objects that contain the client and options for mounting the OpenZFS file system.
   * - _Required_: No
   * - _Type_: [Array](./aws-properties-fsx-filesystem-clientconfigurations.html) of [ClientConfigurations](./aws-properties-fsx-filesystem-clientconfigurations.html)
   * - _Maximum_: `25`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-nfsexports-clientconfigurations */
  ClientConfigurations?: ClientConfigurations[]
}

/**
 * The configuration of an Amazon FSx for OpenZFS root volume.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html */

export interface RootVolumeConfiguration {
  /**
   * - A Boolean value indicating whether tags for the volume should be copied to snapshots of the volume. This value defaults to `false`. If it's set to `true`, all tags for the volume are copied to snapshots where the user doesn't specify tags. If this value is `true` and you specify one or more tags, only the specified tags are copied to snapshots. If you specify one or more tags when creating the snapshot, no tags are copied from the volume, regardless of this value.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-rootvolumeconfiguration-copytagstosnapshots */
  CopyTagsToSnapshots?: boolean | Intrinsic
  /**
   * - Specifies the method used to compress the data on the volume. The compression type is `NONE` by default.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | ZSTD | LZ4`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-rootvolumeconfiguration-datacompressiontype */
  DataCompressionType?: string | Intrinsic
  /**
   * - The configuration object for mounting a file system.
   * - _Required_: No
   * - _Type_: [Array](./aws-properties-fsx-filesystem-nfsexports.html) of [NfsExports](./aws-properties-fsx-filesystem-nfsexports.html)
   * - _Maximum_: `1`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-rootvolumeconfiguration-nfsexports */
  NfsExports?: NfsExports[]
  /**
   * - A Boolean value indicating whether the volume is read-only. Setting this value to `true` can be useful after you have completed changes to a volume and no longer want changes to occur.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-rootvolumeconfiguration-readonly */
  ReadOnly?: boolean | Intrinsic
  /**
   * - Specifies the record size of an OpenZFS root volume, in kibibytes (KiB). Valid values are 4, 8, 16, 32, 64, 128, 256, 512, or 1024 KiB. The default is 128 KiB. Most workloads should use the default record size. Database workflows can benefit from a smaller record size, while streaming workflows can benefit from a larger record size. For additional guidance on setting a custom record size, see [Tips for maximizing performance](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#performance-tips-zfs) in the _Amazon FSx for OpenZFS User Guide_.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `4`
   * - _Maximum_: `1024`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-rootvolumeconfiguration-recordsizekib */
  RecordSizeKiB?: number | Intrinsic
  /**
   * - An object specifying how much storage users or groups can use on the volume.
   * - _Required_: No
   * - _Type_: [Array](./aws-properties-fsx-filesystem-userandgroupquotas.html) of [UserAndGroupQuotas](./aws-properties-fsx-filesystem-userandgroupquotas.html)
   * - _Maximum_: `500`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-rootvolumeconfiguration-userandgroupquotas */
  UserAndGroupQuotas?: UserAndGroupQuotas[]
}

/**
 * The OpenZFS configuration for the file system that's being created.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html */

export interface OpenZFSConfiguration {
  /**
   * - The number of days to retain automatic backups. Setting this property to `0` disables automatic backups. You can retain automatic backups for a maximum of 90 days. The default is `30`.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-openzfsconfiguration-automaticbackupretentiondays */
  AutomaticBackupRetentionDays?: number | Intrinsic
  /**
   * - A Boolean value indicating whether tags for the file system should be copied to backups. This value defaults to `false`. If it's set to `true`, all tags for the file system are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is `true`, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-openzfsconfiguration-copytagstobackups */
  CopyTagsToBackups?: boolean | Intrinsic
  /**
   * - A Boolean value indicating whether tags for the file system should be copied to volumes. This value defaults to `false`. If it's set to `true`, all tags for the file system are copied to volumes where the user doesn't specify tags. If this value is `true`, and you specify one or more tags, only the specified tags are copied to volumes. If you specify one or more tags when creating the volume, no tags are copied from the file system, regardless of this value.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-openzfsconfiguration-copytagstovolumes */
  CopyTagsToVolumes?: boolean | Intrinsic
  /**
   * - A recurring daily time, in the format `HH:MM`. `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour. For example, `05:00` specifies 5 AM daily.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-openzfsconfiguration-dailyautomaticbackupstarttime */
  DailyAutomaticBackupStartTime?: string | Intrinsic
  /**
   * - Specifies the file system deployment type. Valid values are the following:
   * - For a list of which AWS Regions each deployment type is available in, see [Deployment type availability](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/availability-durability.html#available-aws-regions). For more information on the differences in performance between deployment types, see [File system performance](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/performance.html#zfs-fs-performance) in the _Amazon FSx for OpenZFS User Guide_.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `SINGLE_AZ_1 | SINGLE_AZ_2 | SINGLE_AZ_HA_1 | SINGLE_AZ_HA_2 | MULTI_AZ_1`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-openzfsconfiguration-deploymenttype */
  DeploymentType: string | Intrinsic
  /**
   * - The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP, Amazon FSx for Windows File Server, or FSx for OpenZFS file system. By default, Amazon FSx automatically provisions 3 IOPS per GB of storage capacity. You can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how it is was provisioned, or the mode (by the customer or by Amazon FSx).
   * - _Required_: No
   * - _Type_: [DiskIopsConfiguration](./aws-properties-fsx-filesystem-diskiopsconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-openzfsconfiguration-diskiopsconfiguration */
  DiskIopsConfiguration?: DiskIopsConfiguration
  /**
   * - (Multi-AZ only) Specifies the IP address range in which the endpoints to access your file system will be created. By default in the Amazon FSx API and Amazon FSx console, Amazon FSx selects an available /28 IP address range for you from one of the VPC's CIDR ranges. You can have overlapping endpoint IP addresses for file systems deployed in the same VPC/route tables.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[^\u0000\u0085\u2028\u2029\r\n]{9,17}$`
   * - _Minimum_: `9`
   * - _Maximum_: `17`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-openzfsconfiguration-endpointipaddressrange */
  EndpointIpAddressRange?: string | Intrinsic
  /**
   * - To delete a file system if there are child volumes present below the root volume, use the string `DELETE_CHILD_VOLUMES_AND_SNAPSHOTS`. If your file system has child volumes and you don't use this option, the delete request will fail.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-openzfsconfiguration-options */
  Options?: (string | Intrinsic)[]
  /**
   * - Required when `DeploymentType` is set to `MULTI_AZ_1`. This specifies the subnet in which you want the preferred file server to be located.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-openzfsconfiguration-preferredsubnetid */
  PreferredSubnetId?: string | Intrinsic
  /**
   * - The configuration Amazon FSx uses when creating the root value of the Amazon FSx for OpenZFS file system. All volumes are children of the root volume.
   * - _Required_: No
   * - _Type_: [RootVolumeConfiguration](./aws-properties-fsx-filesystem-rootvolumeconfiguration.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-openzfsconfiguration-rootvolumeconfiguration */
  RootVolumeConfiguration?: RootVolumeConfiguration
  /**
   * - (Multi-AZ only) Specifies the route tables in which Amazon FSx creates the rules for routing traffic to the correct file server. You should specify all virtual private cloud (VPC) route tables associated with the subnets in which your clients are located. By default, Amazon FSx selects your VPC's default route table.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-openzfsconfiguration-routetableids */
  RouteTableIds?: (string | Intrinsic)[]
  /**
   * - Specifies the throughput of an Amazon FSx for OpenZFS file system, measured in megabytes per second (MBps). Valid values depend on the DeploymentType you choose, as follows:
   * - You pay for additional throughput capacity that you provision.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `8`
   * - _Maximum_: `100000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-openzfsconfiguration-throughputcapacity */
  ThroughputCapacity?: number | Intrinsic
  /**
   * - A recurring weekly time, in the format `D:HH:MM`.
   * - `D` is the day of the week, for which 1 represents Monday and 7 represents Sunday. For further details, see [the ISO-8601 spec as described on Wikipedia](https://en.wikipedia.org/wiki/ISO_week_date).
   * - `HH` is the zero-padded hour of the day (0-23), and `MM` is the zero-padded minute of the hour.
   * - For example, `1:05:00` specifies maintenance at 5 AM Monday.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-openzfsconfiguration-weeklymaintenancestarttime */
  WeeklyMaintenanceStartTime?: string | Intrinsic
}

/**
 * The `AWS::FSx::FileSystem` resource is an Amazon FSx resource type that specifies an Amazon FSx file system. You can create any of the following supported file system types:
 * *   Amazon FSx for Lustre
 *
 * *   Amazon FSx for NetApp ONTAP
 *
 * *   FSx for OpenZFS
 *
 * *   Amazon FSx for Windows File Server
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html */

export interface FSxFileSystem extends ResourceAttributes {
  Type: 'AWS::FSx::FileSystem'
  Properties: {
    /**
     * - The ID of the file system backup that you are using to create a file system. For more information, see [CreateFileSystemFromBackup](https://docs.aws.amazon.com/fsx/latest/APIReference/API_CreateFileSystemFromBackup.html).
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-backupid */
    BackupId?: string | Intrinsic
    /**
     * - The type of Amazon FSx file system, which can be `LUSTRE`, `WINDOWS`, `ONTAP`, or `OPENZFS`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-filesystemtype */
    FileSystemType: string | Intrinsic
    /**
     * - For FSx for Lustre file systems, sets the Lustre version for the file system that you're creating. Valid values are `2.10`, `2.12`, and `2.15`:
     * - Default value is `2.10`, except for the following deployments:
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[0-9](.[0-9]*)*$`
     * - _Minimum_: `1`
     * - _Maximum_: `20`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-filesystemtypeversion */
    FileSystemTypeVersion?: string | Intrinsic
    /**
     * - The ID of the AWS Key Management Service (AWS KMS) key used to encrypt Amazon FSx file system data. Used as follows with Amazon FSx file system types:
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-kmskeyid */
    KmsKeyId?: string | Intrinsic
    /**
     * - The Lustre configuration for the file system being created.
     * - _Required_: Conditional
     * - _Type_: [LustreConfiguration](./aws-properties-fsx-filesystem-lustreconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-lustreconfiguration */
    LustreConfiguration?: LustreConfiguration
    /**
     * - The ONTAP configuration properties of the FSx for ONTAP file system that you are creating.
     * - _Required_: No
     * - _Type_: [OntapConfiguration](./aws-properties-fsx-filesystem-ontapconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-ontapconfiguration */
    OntapConfiguration?: OntapConfiguration
    /**
     * - The Amazon FSx for OpenZFS configuration properties for the file system that you are creating.
     * - _Required_: No
     * - _Type_: [OpenZFSConfiguration](./aws-properties-fsx-filesystem-openzfsconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-openzfsconfiguration */
    OpenZFSConfiguration?: OpenZFSConfiguration
    /**
     * - A list of IDs specifying the security groups to apply to all network interfaces created for file system access. This list isn't returned in later requests to describe the file system.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `50`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-securitygroupids */
    SecurityGroupIds?: (string | Intrinsic)[]
    /**
     * - Sets the storage capacity of the file system that you're creating.
     * - `StorageCapacity` is required if you are creating a new file system. It is not required if you are creating a file system by restoring a backup.
     * - **FSx for Lustre file systems** - The amount of storage capacity that you can configure depends on the value that you set for `StorageType` and the Lustre `DeploymentType`, as follows:
     * - **FSx for ONTAP file systems** - The amount of SSD storage capacity that you can configure depends on the value of the `HAPairs` property. The minimum value is calculated as 1,024 GiB \* HAPairs and the maximum is calculated as 524,288 GiB \* HAPairs, up to a maximum amount of SSD storage capacity of 1,048,576 GiB (1 pebibyte).
     * - **FSx for OpenZFS file systems** - The amount of storage capacity that you can configure is from 64 GiB up to 524,288 GiB (512 TiB). If you are creating a file system from a backup, you can specify a storage capacity equal to or greater than the original file system's storage capacity.
     * - **FSx for Windows File Server file systems** - The amount of storage capacity that you can configure depends on the value that you set for `StorageType` as follows:
     * - _Required_: Conditional
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-storagecapacity */
    StorageCapacity?: number | Intrinsic
    /**
     * - Sets the storage type for the file system that you're creating. Valid values are `SSD` and `HDD`.
     * - Default value is `SSD`. For more information, see [Storage type options](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/optimize-fsx-costs.html#storage-type-options) in the _FSx for Windows File Server User Guide_ and [Multiple storage options](https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html#storage-options) in the _FSx for Lustre User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `SSD | HDD`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-storagetype */
    StorageType?: string | Intrinsic
    /**
     * - Specifies the IDs of the subnets that the file system will be accessible from. For Windows and ONTAP `MULTI_AZ_1` deployment types,provide exactly two subnet IDs, one for the preferred file server and one for the standby file server. You specify one of these subnets as the preferred subnet using the `WindowsConfiguration > PreferredSubnetID` or `OntapConfiguration > PreferredSubnetID` properties. For more information about Multi-AZ file system configuration, see [Availability and durability: Single-AZ and Multi-AZ file systems](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/high-availability-multiAZ.html) in the _Amazon FSx for Windows User Guide_ and [Availability and durability](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/high-availability-multiAZ.html) in the _Amazon FSx for ONTAP User Guide_.
     * - For Windows `SINGLE_AZ_1` and `SINGLE_AZ_2` and all Lustre deployment types, provide exactly one subnet ID. The file server is launched in that subnet's Availability Zone.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Maximum_: `50`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-subnetids */
    SubnetIds: (string | Intrinsic)[]
    /**
     * - The tags to associate with the file system. For more information, see [Tagging your Amazon FSx resources](https://docs.aws.amazon.com/fsx/latest/LustreGuide/tag-resources.html) in the _Amazon FSx for Lustre User Guide_.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-fsx-filesystem-tag.html)
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-tags */
    Tags?: Tag[]
    /**
     * - The configuration object for the Microsoft Windows file system you are creating.
     * - This value is required if `FileSystemType` is set to `WINDOWS`.
     * - _Required_: Conditional
     * - _Type_: [WindowsConfiguration](./aws-properties-fsx-filesystem-windowsconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-filesystem.html#cfn-fsx-filesystem-windowsconfiguration */
    WindowsConfiguration?: WindowsConfiguration
  }
}
