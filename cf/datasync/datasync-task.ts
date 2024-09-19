import type { Intrinsic } from '../intrinsic/index.js' /**
 * Specifies which files, folders, and objects to include or exclude when transferring files from source to destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html */

export interface FilterRule {
  /**
   * - The type of filter rule to apply. AWS DataSync only supports the SIMPLE\_PATTERN rule type.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SIMPLE_PATTERN`
   * - _Pattern_: `^[A-Z0-9_]+$`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-filterrule-filtertype */
  FilterType?: string | Intrinsic
  /**
   * - A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "|" (that is, a pipe), for example: `/folder1|/folder2`
   * -
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[^\x00]+$`
   * - _Maximum_: `409600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-filterrule-value */
  Value?: string | Intrinsic
}

/**
 * Represents the options that are available to control the behavior of a [StartTaskExecution](https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html) operation. This behavior includes preserving metadata, such as user ID (UID), group ID (GID), and file permissions; overwriting files in the destination; data integrity verification; and so on.
 * A task has a set of default options associated with it. If you don't specify an option in [StartTaskExecution](https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html), the default value is used. You can override the default options on each task execution by specifying an overriding `Options` value to [StartTaskExecution](https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html */

export interface Options {
  /**
   * - A file metadata value that shows the last time that a file was accessed (that is, when the file was read or written to). If you set `Atime` to `BEST_EFFORT`, AWS DataSync attempts to preserve the original `Atime` attribute on all source files (that is, the version before the PREPARING phase). However, `Atime`'s behavior is not fully standard across platforms, so AWS DataSync can only do this on a best-effort basis.
   * - Default value: `BEST_EFFORT`
   * - `BEST_EFFORT`: Attempt to preserve the per-file `Atime` value (recommended).
   * - `NONE`: Ignore `Atime`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | BEST_EFFORT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-options-atime */
  Atime?: string | Intrinsic
  /**
   * - A value that limits the bandwidth used by AWS DataSync. For example, if you want AWS DataSync to use a maximum of 1 MB, set this value to `1048576` (=1024\*1024).
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `-1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-options-bytespersecond */
  BytesPerSecond?: number | Intrinsic
  /**
   * - The group ID (GID) of the file's owners.
   * - Default value: `INT_VALUE`
   * - `INT_VALUE`: Preserve the integer value of the user ID (UID) and group ID (GID) (recommended).
   * - `NAME`: Currently not supported.
   * - `NONE`: Ignore the UID and GID.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | INT_VALUE | NAME | BOTH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-options-gid */
  Gid?: string | Intrinsic
  /**
   * - Specifies the type of logs that DataSync publishes to a Amazon CloudWatch Logs log group. To specify the log group, see [CloudWatchLogGroupArn](https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateTask.html#DataSync-CreateTask-request-CloudWatchLogGroupArn).
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `OFF | BASIC | TRANSFER`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-options-loglevel */
  LogLevel?: string | Intrinsic
  /**
   * - A value that indicates the last time that a file was modified (that is, a file was written to) before the PREPARING phase. This option is required for cases when you need to run the same task more than one time.
   * - Default value: `PRESERVE`
   * - `PRESERVE`: Preserve original `Mtime` (recommended)
   * - `NONE`: Ignore `Mtime`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | PRESERVE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-options-mtime */
  Mtime?: string | Intrinsic
  /**
   * - Specifies whether you want DataSync to `PRESERVE` object tags (default behavior) when transferring between object storage systems. If you want your DataSync task to ignore object tags, specify the `NONE` value.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PRESERVE | NONE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-options-objecttags */
  ObjectTags?: string | Intrinsic
  /**
   * - Specifies whether DataSync should modify or preserve data at the destination location.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ALWAYS | NEVER`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-options-overwritemode */
  OverwriteMode?: string | Intrinsic
  /**
   * - A value that determines which users or groups can access a file for a specific purpose, such as reading, writing, or execution of the file. This option should be set only for Network File System (NFS), Amazon EFS, and Amazon S3 locations. For more information about what metadata is copied by DataSync, see [Metadata Copied by DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html#metadata-copied).
   * - Default value: `PRESERVE`
   * - `PRESERVE`: Preserve POSIX-style permissions (recommended).
   * - `NONE`: Ignore permissions.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | PRESERVE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-options-posixpermissions */
  PosixPermissions?: string | Intrinsic
  /**
   * - A value that specifies whether files in the destination that don't exist in the source file system are preserved. This option can affect your storage costs. If your task deletes objects, you might incur minimum storage duration charges for certain storage classes. For detailed information, see [Considerations when working with Amazon S3 storage classes in DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes) in the _AWS DataSync User Guide_.
   * - Default value: `PRESERVE`
   * - `PRESERVE`: Ignore destination files that aren't present in the source (recommended).
   * - `REMOVE`: Delete destination files that aren't present in the source.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PRESERVE | REMOVE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-options-preservedeletedfiles */
  PreserveDeletedFiles?: string | Intrinsic
  /**
   * - A value that determines whether AWS DataSync should preserve the metadata of block and character devices in the source file system, and re-create the files with that device name and metadata on the destination. DataSync does not copy the contents of such devices, only the name and metadata.
   * - Default value: `NONE`
   * - `NONE`: Ignore special devices (recommended).
   * - `PRESERVE`: Preserve character and block device metadata. This option isn't currently supported for Amazon EFS.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | PRESERVE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-options-preservedevices */
  PreserveDevices?: string | Intrinsic
  /**
   * - A value that determines which components of the SMB security descriptor are copied from source to destination objects.
   * - This value is only used for transfers between SMB and Amazon FSx for Windows File Server locations, or between two Amazon FSx for Windows File Server locations. For more information about how DataSync handles metadata, see [How DataSync Handles Metadata and Special Files](https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html).
   * - Default value: `OWNER_DACL`
   * - `OWNER_DACL`: For each copied object, DataSync copies the following metadata:
   * - When you use option, DataSync does NOT copy the NTFS system access control lists (SACLs), which are used by administrators to log attempts to access a secured object.
   * - `OWNER_DACL_SACL`: For each copied object, DataSync copies the following metadata:
   * - Copying SACLs requires granting additional permissions to the Windows user that DataSync uses to access your SMB location. For information about choosing a user that ensures sufficient permissions to files, folders, and metadata, see [user](https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html#SMBuser).
   * - `NONE`: None of the SMB security descriptor components are copied. Destination objects are owned by the user that was provided for accessing the destination location. DACLs and SACLs are set based on the destination server’s configuration.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | OWNER_DACL | OWNER_DACL_SACL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-options-securitydescriptorcopyflags */
  SecurityDescriptorCopyFlags?: string | Intrinsic
  /**
   * - Specifies whether your transfer tasks should be put into a queue during certain scenarios when [running multiple tasks](https://docs.aws.amazon.com/datasync/latest/userguide/run-task.html#running-multiple-tasks). This is `ENABLED` by default.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ENABLED | DISABLED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-options-taskqueueing */
  TaskQueueing?: string | Intrinsic
  /**
   * - A value that determines whether DataSync transfers only the data and metadata that differ between the source and the destination location, or whether DataSync transfers all the content from the source, without comparing it to the destination location.
   * - `CHANGED`: DataSync copies only data or metadata that is new or different from the source location to the destination location.
   * - `ALL`: DataSync copies all source location content to the destination, without comparing it to existing content on the destination.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CHANGED | ALL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-options-transfermode */
  TransferMode?: string | Intrinsic
  /**
   * - The user ID (UID) of the file's owner.
   * - Default value: `INT_VALUE`
   * - `INT_VALUE`: Preserve the integer value of the UID and group ID (GID) (recommended).
   * - `NAME`: Currently not supported
   * - `NONE`: Ignore the UID and GID.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `NONE | INT_VALUE | NAME | BOTH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-options-uid */
  Uid?: string | Intrinsic
  /**
   * - A value that determines whether a data integrity verification is performed at the end of a task execution after all data and metadata have been transferred. For more information, see [Configure task settings](https://docs.aws.amazon.com/datasync/latest/userguide/create-task.html).
   * - Default value: `POINT_IN_TIME_CONSISTENT`
   * - `ONLY_FILES_TRANSFERRED` (recommended): Perform verification only on files that were transferred.
   * - `POINT_IN_TIME_CONSISTENT`: Scan the entire source and entire destination at the end of the transfer to verify that the source and destination are fully synchronized. This option isn't supported when transferring to S3 Glacier or S3 Glacier Deep Archive storage classes.
   * - `NONE`: No additional verification is done at the end of the transfer, but all data transmissions are integrity-checked with checksum verification during the transfer.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `POINT_IN_TIME_CONSISTENT | ONLY_FILES_TRANSFERRED | NONE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-options-verifymode */
  VerifyMode?: string | Intrinsic
}

/**
 * Configures your AWS DataSync task to run on a [schedule](https://docs.aws.amazon.com/datasync/latest/userguide/task-scheduling.html) (at a minimum interval of 1 hour).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html */

export interface TaskSchedule {
  /**
   * - Specifies your task schedule by using a cron or rate expression.
   * - Use cron expressions for task schedules that run on a specific time and day. For example, the following cron expression creates a task schedule that runs at 8 AM on the first Wednesday of every month:
   * - `cron(0 8 * * 3#1)`
   * - Use rate expressions for task schedules that run on a regular interval. For example, the following rate expression creates a task schedule that runs every 12 hours:
   * - `rate(12 hours)`
   * - For information about cron and rate expression syntax, see the [_Amazon EventBridge User Guide_](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-scheduled-rule-pattern.html).
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9\ \_\*\?\,\|\^\-\/\#\s\(\)\+]*$`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-taskschedule-scheduleexpression */
  ScheduleExpression?: string | Intrinsic
  /**
   * - Specifies whether to enable or disable your task schedule. Your schedule is enabled by default, but there can be situations where you need to disable it. For example, you might need to perform maintenance on a storage system before you can begin a recurring DataSync transfer.
   * - DataSync might disable your schedule automatically if your task fails repeatedly with the same error. For more information, see the [_DataSync User Guide_](https://docs.aws.amazon.com/datasync/latest/userguide/task-scheduling.html#pause-task-schedule).
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ENABLED | DISABLED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-taskschedule-status */
  Status?: string | Intrinsic
}

/**
 * Specifies the tags that you want to apply to your task.
 * _Tags_ are key-value pairs that help you manage, filter, and search for your DataSync resources.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html */

export interface Tag {
  /**
   * - The key for an AWS resource tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9\s+=._:/-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-tag-key */
  Key: string | Intrinsic
  /**
   * - The value for an AWS resource tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9\s+=._:@/-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-tag-value */
  Value: string | Intrinsic
}

/**
 * Specifies the S3 bucket where you're hosting the manifest that you want AWS DataSync to use. For more information and configuration examples, see [Specifying what DataSync transfers by using a manifest](https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html */

export interface ManifestConfigSourceS3 {
  /**
   * - Specifies the AWS Identity and Access Management (IAM) role that allows DataSync to access your manifest. For more information, see [Providing DataSync access to your manifest](https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html#transferring-with-manifest-access).
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):iam::[0-9]{12}:role/.*$`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-manifestconfigsources3-bucketaccessrolearn */
  BucketAccessRoleArn?: string | Intrinsic
  /**
   * - Specifies the Amazon S3 object key of your manifest. This can include a prefix (for example, `prefix/my-manifest.csv`).
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[\p{L}\p{M}\p{Z}\p{S}\p{N}\p{P}\p{C}]*$`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-manifestconfigsources3-manifestobjectpath */
  ManifestObjectPath?: string | Intrinsic
  /**
   * - Specifies the object version ID of the manifest that you want DataSync to use. If you don't set this, DataSync uses the latest version of the object.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^.+$`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-manifestconfigsources3-manifestobjectversionid */
  ManifestObjectVersionId?: string | Intrinsic
  /**
   * - Specifies the Amazon Resource Name (ARN) of the S3 bucket where you're hosting your manifest.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):(s3|s3-outposts):[a-z\-0-9]*:[0-9]*:.*$`
   * - _Maximum_: `156`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-manifestconfigsources3-s3bucketarn */
  S3BucketArn?: string | Intrinsic
}

/**
 * Specifies the Amazon S3 bucket where DataSync uploads your [task report](https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html */

export interface TaskReportConfigDestinationS3 {
  /**
   * - Specifies the Amazon Resource Name (ARN) of the IAM policy that allows DataSync to upload a task report to your S3 bucket. For more information, see [Allowing DataSync to upload a task report to an Amazon S3 bucket](https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html).
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):iam::[0-9]{12}:role/.*$`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-taskreportconfigdestinations3-bucketaccessrolearn */
  BucketAccessRoleArn?: string | Intrinsic
  /**
   * - Specifies the ARN of the S3 bucket where DataSync uploads your report.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):(s3|s3-outposts):[a-z\-0-9]*:[0-9]*:.*$`
   * - _Maximum_: `156`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-taskreportconfigdestinations3-s3bucketarn */
  S3BucketArn?: string | Intrinsic
  /**
   * - Specifies a bucket prefix for your report.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9_\-\+\./\(\)\p{Zs}]*$`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-taskreportconfigdestinations3-subdirectory */
  Subdirectory?: string | Intrinsic
}

/**
 * The reporting level for the deleted section of your DataSync task report.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html */

export interface Deleted {
  /**
   * - Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ERRORS_ONLY | SUCCESSES_AND_ERRORS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-deleted-reportlevel */
  ReportLevel?: string | Intrinsic
}

/**
 * The reporting level for the skipped section of your DataSync task report.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html */

export interface Skipped {
  /**
   * - Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ERRORS_ONLY | SUCCESSES_AND_ERRORS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-skipped-reportlevel */
  ReportLevel?: string | Intrinsic
}

/**
 * The reporting level for the transferred section of your DataSync task report.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html */

export interface Transferred {
  /**
   * - Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ERRORS_ONLY | SUCCESSES_AND_ERRORS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-transferred-reportlevel */
  ReportLevel?: string | Intrinsic
}

/**
 * The reporting level for the verified section of your DataSync task report.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html */

export interface Verified {
  /**
   * - Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ERRORS_ONLY | SUCCESSES_AND_ERRORS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-verified-reportlevel */
  ReportLevel?: string | Intrinsic
}

/**
 * Specifies the manifest that you want AWS DataSync to use and where it's hosted. For more information and configuration examples, see [Specifying what DataSync transfers by using a manifest](https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html */

export interface Source {
  /**
   * - Specifies the S3 bucket where you're hosting your manifest.
   * - _Required_: No
   * - _Type_: [ManifestConfigSourceS3](./aws-properties-datasync-task-manifestconfigsources3.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-source-s3 */
  S3?: ManifestConfigSourceS3
}

/**
 * Specifies where DataSync uploads your [task report](https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html */

export interface Destination {
  /**
   * - Specifies the Amazon S3 bucket where DataSync uploads your task report.
   * - _Required_: No
   * - _Type_: [TaskReportConfigDestinationS3](./aws-properties-datasync-task-taskreportconfigdestinations3.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-destination-s3 */
  S3?: TaskReportConfigDestinationS3
}

/**
 * Customizes the reporting level for aspects of your task report. For example, your report might generally only include errors, but you could specify that you want a list of successes and errors just for the files that DataSync attempted to delete in your destination location.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html */

export interface Overrides {
  /**
   * - Specifies the level of reporting for the files, objects, and directories that DataSync attempted to delete in your destination location. This only applies if you [configure your task](https://docs.aws.amazon.com/datasync/latest/userguide/configure-metadata.html) to delete data in the destination that isn't in the source.
   * - _Required_: No
   * - _Type_: [Deleted](./aws-properties-datasync-task-deleted.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-overrides-deleted */
  Deleted?: Deleted
  /**
   * - Specifies the level of reporting for the files, objects, and directories that DataSync attempted to skip during your transfer.
   * - _Required_: No
   * - _Type_: [Skipped](./aws-properties-datasync-task-skipped.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-overrides-skipped */
  Skipped?: Skipped
  /**
   * - Specifies the level of reporting for the files, objects, and directories that DataSync attempted to transfer.
   * - _Required_: No
   * - _Type_: [Transferred](./aws-properties-datasync-task-transferred.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-overrides-transferred */
  Transferred?: Transferred
  /**
   * - Specifies the level of reporting for the files, objects, and directories that DataSync attempted to verify during your transfer.
   * - _Required_: No
   * - _Type_: [Verified](./aws-properties-datasync-task-verified.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-overrides-verified */
  Verified?: Verified
}

/**
 * Configures a manifest, which is a list of files or objects that you want AWS DataSync to transfer. For more information and configuration examples, see [Specifying what DataSync transfers by using a manifest](https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html */

export interface ManifestConfig {
  /**
   * - Specifies what DataSync uses the manifest for.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `TRANSFER`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-manifestconfig-action */
  Action?: string | Intrinsic
  /**
   * - Specifies the file format of your manifest. For more information, see [Creating a manifest](https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html#transferring-with-manifest-create).
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CSV`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-manifestconfig-format */
  Format?: string | Intrinsic
  /**
   * - Specifies the manifest that you want DataSync to use and where it's hosted.
   * - _Required_: Yes
   * - _Type_: [Source](./aws-properties-datasync-task-source.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-manifestconfig-source */
  Source: Source
}

/**
 * Specifies how you want to configure a task report, which provides detailed information about for your AWS DataSync transfer.
 * For more information, see [Task reports](https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html */

export interface TaskReportConfig {
  /**
   * - Specifies the Amazon S3 bucket where DataSync uploads your task report. For more information, see [Task reports](https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html#task-report-access).
   * - _Required_: Yes
   * - _Type_: [Destination](./aws-properties-datasync-task-destination.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-taskreportconfig-destination */
  Destination: Destination
  /**
   * - Specifies whether your task report includes the new version of each object transferred into an S3 bucket. This only applies if you [enable versioning on your bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/manage-versioning-examples.html). Keep in mind that setting this to `INCLUDE` can increase the duration of your task execution.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `INCLUDE | NONE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-taskreportconfig-objectversionids */
  ObjectVersionIds?: string | Intrinsic
  /**
   * - Specifies the type of task report that you want:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `SUMMARY_ONLY | STANDARD`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-taskreportconfig-outputtype */
  OutputType: string | Intrinsic
  /**
   * - Customizes the reporting level for aspects of your task report. For example, your report might generally only include errors, but you could specify that you want a list of successes and errors just for the files that DataSync attempted to delete in your destination location.
   * - _Required_: No
   * - _Type_: [Overrides](./aws-properties-datasync-task-overrides.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-taskreportconfig-overrides */
  Overrides?: Overrides
  /**
   * - Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ERRORS_ONLY | SUCCESSES_AND_ERRORS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-taskreportconfig-reportlevel */
  ReportLevel?: string | Intrinsic
}

/**
 * The `AWS::DataSync::Task` resource specifies a task. A task is a set of two locations (source and destination) and a set of `Options` that you use to control the behavior of a task. If you don't specify `Options` when you create a task, AWS DataSync populates them with service defaults.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html */

export interface DataSyncTask {
  Type: 'AWS::DataSync::Task'
  Properties: {
    /**
     * - Specifies the Amazon Resource Name (ARN) of an Amazon CloudWatch log group for monitoring your task.
     * - For more information, see [Monitoring DataSync with Amazon CloudWatch](https://docs.aws.amazon.com/datasync/latest/userguide/monitor-datasync.html).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):logs:[a-z\-0-9]*:[0-9]{12}:log-group:([^:\*]*)(:\*)?$`
     * - _Maximum_: `562`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-cloudwatchloggrouparn */
    CloudWatchLogGroupArn?: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of an AWS storage resource's location.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-destinationlocationarn */
    DestinationLocationArn: string | Intrinsic
    /**
     * - Specifies exclude filters that define the files, objects, and folders in your source location that you don't want DataSync to transfer. For more information and examples, see [Specifying what DataSync transfers by using filters](https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html).
     * - _Required_: No
     * - _Type_: Array of [FilterRule](./aws-properties-datasync-task-filterrule.html)
     * - _Minimum_: `0`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-excludes */
    Excludes?: FilterRule[]
    /**
     * - Specifies include filters define the files, objects, and folders in your source location that you want DataSync to transfer. For more information and examples, see [Specifying what DataSync transfers by using filters](https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html).
     * - _Required_: No
     * - _Type_: Array of [FilterRule](./aws-properties-datasync-task-filterrule.html)
     * - _Minimum_: `0`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-includes */
    Includes?: FilterRule[]
    /**
     * - The configuration of the manifest that lists the files or objects that you want DataSync to transfer. For more information, see [Specifying what DataSync transfers by using a manifest](https://docs.aws.amazon.com/datasync/latest/userguide/transferring-with-manifest.html).
     * - _Required_: No
     * - _Type_: [ManifestConfig](./aws-properties-datasync-task-manifestconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-manifestconfig */
    ManifestConfig?: ManifestConfig
    /**
     * - Specifies the name of your task.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9\s+=._:@/-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-name */
    Name?: string | Intrinsic
    /**
     * - Specifies your task's settings, such as preserving file metadata, verifying data integrity, among other options.
     * - _Required_: No
     * - _Type_: [Options](./aws-properties-datasync-task-options.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-options */
    Options?: Options
    /**
     * - Specifies a schedule for when you want your task to run. For more information, see [Scheduling your task](https://docs.aws.amazon.com/datasync/latest/userguide/task-scheduling.html).
     * - _Required_: No
     * - _Type_: [TaskSchedule](./aws-properties-datasync-task-taskschedule.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-schedule */
    Schedule?: TaskSchedule
    /**
     * - Specifies the ARN of your transfer's source location.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z\-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-sourcelocationarn */
    SourceLocationArn: string | Intrinsic
    /**
     * - Specifies the tags that you want to apply to your task.
     * - _Tags_ are key-value pairs that help you manage, filter, and search for your DataSync resources.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-datasync-task-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-tags */
    Tags?: Tag[]
    /**
     * - Specifies how you want to configure a task report, which provides detailed information about your DataSync transfer. For more information, see [Monitoring your DataSync transfers with task reports](https://docs.aws.amazon.com/datasync/latest/userguide/task-reports.html).
     * - When using this parameter, your caller identity (the role that you're using DataSync with) must have the `iam:PassRole` permission. The [AWSDataSyncFullAccess](https://docs.aws.amazon.com/datasync/latest/userguide/security-iam-awsmanpol.html#security-iam-awsmanpol-awsdatasyncfullaccess) policy includes this permission.
     * - _Required_: No
     * - _Type_: [TaskReportConfig](./aws-properties-datasync-task-taskreportconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html#cfn-datasync-task-taskreportconfig */
    TaskReportConfig?: TaskReportConfig
  }
}
