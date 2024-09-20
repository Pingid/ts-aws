import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The job attachment settings. These are the Amazon S3 bucket name and the Amazon S3 prefix.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html */

export interface JobAttachmentSettings {
  /**
   * - The root prefix.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#cfn-deadline-queue-jobattachmentsettings-rootprefix */
  RootPrefix: string | Intrinsic
  /**
   * - The Amazon S3 bucket name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `(?!^(\d+\.)+\d+$)(^(([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])\.)*([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])$)`
   * - _Minimum_: `3`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#cfn-deadline-queue-jobattachmentsettings-s3bucketname */
  S3BucketName: string | Intrinsic
}

/**
 * The tags to add to your queue. Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html */

export interface Tag {
  /**
   * - The key name of the tag. You can specify a value that's 1 to 127 Unicode characters in length and can't be prefixed with `aws:`. digits, whitespace, `_`, `.`, `:`, `/`, `=`, `+`, `@`, `-`, and `"`.
   * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `127`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#cfn-deadline-queue-tag-key */
  Key: string | Intrinsic
  /**
   * - The value for the tag. You can specify a value that's 1 to 255 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
   * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#cfn-deadline-queue-tag-value */
  Value: string | Intrinsic
}

/**
 * The POSIX user.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html */

export interface PosixUser {
  /**
   * - The name of the POSIX user's group.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(?:[a-z][a-z0-9-]{0,30})?$`
   * - _Minimum_: `0`
   * - _Maximum_: `31`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#cfn-deadline-queue-posixuser-group */
  Group: string | Intrinsic
  /**
   * - The name of the POSIX user.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(?:[a-z][a-z0-9-]{0,30})?$`
   * - _Minimum_: `0`
   * - _Maximum_: `31`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#cfn-deadline-queue-posixuser-user */
  User: string | Intrinsic
}

/**
 * The Windows user details.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html */

export interface WindowsUser {
  /**
   * - The password ARN for the Windows user.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:(aws[a-zA-Z-]*):secretsmanager:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:secret:[a-zA-Z0-9-/_+=.@]{1,2028}$`
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#cfn-deadline-queue-windowsuser-passwordarn */
  PasswordArn: string | Intrinsic
  /**
   * - The user.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[^"'/\[\]:;|=,+*?<>\s]*$`
   * - _Minimum_: `0`
   * - _Maximum_: `111`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#cfn-deadline-queue-windowsuser-user */
  User: string | Intrinsic
}

/**
 * Identifies the user for a job.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html */

export interface JobRunAsUser {
  /**
   * - The user and group that the jobs in the queue run as.
   * - _Required_: No
   * - _Type_: [PosixUser](./aws-properties-deadline-queue-posixuser.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#cfn-deadline-queue-jobrunasuser-posix */
  Posix?: PosixUser
  /**
   * - Specifies whether the job should run using the queue's system user or if the job should run using the worker agent system user.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `QUEUE_CONFIGURED_USER | WORKER_AGENT_USER`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#cfn-deadline-queue-jobrunasuser-runas */
  RunAs: string | Intrinsic
  /**
   * - Identifies a Microsoft Windows user.
   * - _Required_: No
   * - _Type_: [WindowsUser](./aws-properties-deadline-queue-windowsuser.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#cfn-deadline-queue-jobrunasuser-windows */
  Windows?: WindowsUser
}

/**
 * Creates a queue to coordinate the order in which jobs run on a farm. A queue can also specify where to pull resources and indicate where to output completed jobs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html */

export interface DeadlineQueue extends ResourceAttributes {
  Type: 'AWS::Deadline::Queue'
  Properties: {
    /**
     * - The identifiers of the storage profiles that this queue can use to share assets between workers using different operating systems.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `0`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#cfn-deadline-queue-allowedstorageprofileids */
    AllowedStorageProfileIds?: (string | Intrinsic)[]
    /**
     * - The default action taken on a queue summary if a budget wasn't configured.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `NONE | STOP_SCHEDULING_AND_COMPLETE_TASKS | STOP_SCHEDULING_AND_CANCEL_TASKS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#cfn-deadline-queue-defaultbudgetaction */
    DefaultBudgetAction?: string | Intrinsic
    /**
     * - A description of the queue that helps identify what the queue is used for.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#cfn-deadline-queue-description */
    Description?: string | Intrinsic
    /**
     * - The display name of the queue summary to update.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#cfn-deadline-queue-displayname */
    DisplayName: string | Intrinsic
    /**
     * - The farm ID.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^farm-[0-9a-f]{32}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#cfn-deadline-queue-farmid */
    FarmId: string | Intrinsic
    /**
     * - The job attachment settings. These are the Amazon S3 bucket name and the Amazon S3 prefix.
     * - _Required_: No
     * - _Type_: [JobAttachmentSettings](./aws-properties-deadline-queue-jobattachmentsettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#cfn-deadline-queue-jobattachmentsettings */
    JobAttachmentSettings?: JobAttachmentSettings
    /**
     * - Identifies the user for a job.
     * - _Required_: No
     * - _Type_: [JobRunAsUser](./aws-properties-deadline-queue-jobrunasuser.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#cfn-deadline-queue-jobrunasuser */
    JobRunAsUser?: JobRunAsUser
    /**
     * - The file system location that the queue uses.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1 | 0`
     * - _Maximum_: `64 | 20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#cfn-deadline-queue-requiredfilesystemlocationnames */
    RequiredFileSystemLocationNames?: (string | Intrinsic)[]
    /**
     * - The Amazon Resource Name (ARN) of the IAM role that workers use when running jobs in this queue.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:(aws[a-zA-Z-]*):iam::\d{12}:role(/[!-.0-~]+)*[\w+=,.@-]+$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#cfn-deadline-queue-rolearn */
    RoleArn?: string | Intrinsic
    /**
     * - The tags to add to your queue. Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-deadline-queue-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queue.html#cfn-deadline-queue-tags */
    Tags?: Tag[]
  }
}
