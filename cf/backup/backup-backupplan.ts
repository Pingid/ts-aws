import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies an object containing resource type and backup options. This is only supported for Windows VSS backups.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html */

export interface AdvancedBackupSettingResourceType {
  /**
   * - The backup option for the resource. Each option is a key-value pair. This option is only available for Windows VSS backup jobs.
   * - Valid values:
   * - Set to `"WindowsVSS":"enabled"` to enable the `WindowsVSS` backup option and create a Windows VSS backup.
   * - Set to `"WindowsVSS":"disabled"` to create a regular backup. The `WindowsVSS` option is not enabled by default.
   * - If you specify an invalid option, you get an `InvalidParameterValueException` exception.
   * - For more information about Windows VSS backups, see [Creating a VSS-Enabled Windows Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/windows-backups.html).
   * - _Required_: Yes
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-advancedbackupsettingresourcetype-backupoptions */
  BackupOptions: any | Intrinsic
  /**
   * - The name of a resource type. The only supported resource type is EC2.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-advancedbackupsettingresourcetype-resourcetype */
  ResourceType: string | Intrinsic
}

/**
 * Copies backups created by a backup rule to another vault.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html */

export interface CopyActionResourceType {
  /**
   * - An Amazon Resource Name (ARN) that uniquely identifies the destination backup vault for the copied backup. For example, `arn:aws:backup:us-east-1:123456789012:vault:aBackupVault.`
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-copyactionresourcetype-destinationbackupvaultarn */
  DestinationBackupVaultArn: string | Intrinsic
  /**
   * - Defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define. If you do not specify a lifecycle, AWS Backup applies the lifecycle policy of the source backup to the destination backup.
   * - Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days.
   * - _Required_: No
   * - _Type_: [LifecycleResourceType](./aws-properties-backup-backupplan-lifecycleresourcetype.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-copyactionresourcetype-lifecycle */
  Lifecycle?: LifecycleResourceType
}

/**
 * Specifies an object containing an array of `Transition` objects that determine how long in days before a recovery point transitions to cold storage or is deleted.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html */

export interface LifecycleResourceType {
  /**
   * - Specifies the number of days after creation that a recovery point is deleted. Must be greater than `MoveToColdStorageAfterDays`.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-lifecycleresourcetype-deleteafterdays */
  DeleteAfterDays?: number | Intrinsic
  /**
   * - Specifies the number of days after creation that a recovery point is moved to cold storage.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-lifecycleresourcetype-movetocoldstorageafterdays */
  MoveToColdStorageAfterDays?: number | Intrinsic
  /**
   * - If the value is true, your backup plan transitions supported resources to archive (cold) storage tier in accordance with your lifecycle settings.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-lifecycleresourcetype-optintoarchiveforsupportedresources */
  OptInToArchiveForSupportedResources?: boolean | Intrinsic
}

/**
 * Specifies an object containing properties used to schedule a task to back up a selection of resources.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html */

export interface BackupRuleResourceType {
  /**
   * - A value in minutes after a backup job is successfully started before it must be completed or it is canceled by AWS Backup.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-backupruleresourcetype-completionwindowminutes */
  CompletionWindowMinutes?: number | Intrinsic
  /**
   * - An array of CopyAction objects, which contains the details of the copy operation.
   * - _Required_: No
   * - _Type_: Array of [CopyActionResourceType](./aws-properties-backup-backupplan-copyactionresourcetype.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-backupruleresourcetype-copyactions */
  CopyActions?: CopyActionResourceType[]
  /**
   * - Enables continuous backup and point-in-time restores (PITR).
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-backupruleresourcetype-enablecontinuousbackup */
  EnableContinuousBackup?: boolean | Intrinsic
  /**
   * - The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define.
   * - _Required_: No
   * - _Type_: [LifecycleResourceType](./aws-properties-backup-backupplan-lifecycleresourcetype.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-backupruleresourcetype-lifecycle */
  Lifecycle?: LifecycleResourceType
  /**
   * - The tags to assign to the resources.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `^.{1,128}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-backupruleresourcetype-recoverypointtags */
  RecoveryPointTags?: Record<string, string | Intrinsic>
  /**
   * - A display name for a backup rule.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-backupruleresourcetype-rulename */
  RuleName: string | Intrinsic
  /**
   * - A CRON expression specifying when AWS Backup initiates a backup job.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-backupruleresourcetype-scheduleexpression */
  ScheduleExpression?: string | Intrinsic
  /**
   * - This is the timezone in which the schedule expression is set. By default, ScheduleExpressions are in UTC. You can modify this to a specified timezone.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-backupruleresourcetype-scheduleexpressiontimezone */
  ScheduleExpressionTimezone?: string | Intrinsic
  /**
   * - An optional value that specifies a period of time in minutes after a backup is scheduled before a job is canceled if it doesn't start successfully.
   * - If this value is included, it must be at least 60 minutes to avoid errors.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-backupruleresourcetype-startwindowminutes */
  StartWindowMinutes?: number | Intrinsic
  /**
   * - The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of letters, numbers, and hyphens.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-backupruleresourcetype-targetbackupvault */
  TargetBackupVault: string | Intrinsic
}

/**
 * Specifies an object containing properties used to create a backup plan.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html */

export interface BackupPlanResourceType {
  /**
   * - A list of backup options for each resource type.
   * - _Required_: No
   * - _Type_: Array of [AdvancedBackupSettingResourceType](./aws-properties-backup-backupplan-advancedbackupsettingresourcetype.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-backupplanresourcetype-advancedbackupsettings */
  AdvancedBackupSettings?: AdvancedBackupSettingResourceType[]
  /**
   * - The display name of a backup plan.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-backupplanresourcetype-backupplanname */
  BackupPlanName: string | Intrinsic
  /**
   * - An array of `BackupRule` objects, each of which specifies a scheduled task that is used to back up a selection of resources.
   * - _Required_: Yes
   * - _Type_: Array of [BackupRuleResourceType](./aws-properties-backup-backupplan-backupruleresourcetype.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-backupplanresourcetype-backupplanrule */
  BackupPlanRule: BackupRuleResourceType[]
}

/**
 * Contains an optional backup plan display name and an array of `BackupRule` objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources.
 * For a sample AWS CloudFormation template, see the [AWS Backup Developer Guide](https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html#assigning-resources-cfn).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html */

export interface BackupBackupPlan extends ResourceAttributes {
  Type: 'AWS::Backup::BackupPlan'
  Properties: {
    /**
     * - Uniquely identifies the backup plan to be associated with the selection of resources.
     * - _Required_: Yes
     * - _Type_: [BackupPlanResourceType](./aws-properties-backup-backupplan-backupplanresourcetype.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-backupplan */
    BackupPlan: BackupPlanResourceType
    /**
     * - The tags to assign to the backup plan.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^.{1,128}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html#cfn-backup-backupplan-backupplantags */
    BackupPlanTags?: Record<string, string | Intrinsic>
  }
}
