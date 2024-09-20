import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `LockConfigurationType` property type specifies configuration for [AWS Backup Vault Lock](https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html */

export interface LockConfigurationType {
  /**
   * - The AWS Backup Vault Lock configuration that specifies the number of days before the lock date. For example, setting `ChangeableForDays` to 30 on Jan. 1, 2022 at 8pm UTC will set the lock date to Jan. 31, 2022 at 8pm UTC.
   * - AWS Backup enforces a 72-hour cooling-off period before Vault Lock takes effect and becomes immutable. Therefore, you must set `ChangeableForDays` to 3 or greater.
   * - Before the lock date, you can delete Vault Lock from the vault using `DeleteBackupVaultLockConfiguration` or change the Vault Lock configuration using `PutBackupVaultLockConfiguration`. On and after the lock date, the Vault Lock becomes immutable and cannot be changed or deleted.
   * - If this parameter is not specified, you can delete Vault Lock from the vault using `DeleteBackupVaultLockConfiguration` or change the Vault Lock configuration using `PutBackupVaultLockConfiguration` at any time.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html#cfn-backup-backupvault-lockconfigurationtype-changeablefordays */
  ChangeableForDays?: number | Intrinsic
  /**
   * - The AWS Backup Vault Lock configuration that specifies the maximum retention period that the vault retains its recovery points. This setting can be useful if, for example, your organization's policies require you to destroy certain data after retaining it for four years (1460 days).
   * - If this parameter is not included, Vault Lock does not enforce a maximum retention period on the recovery points in the vault. If this parameter is included without a value, Vault Lock will not enforce a maximum retention period.
   * - If this parameter is specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or shorter than the maximum retention period. If the job's retention period is longer than that maximum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. Recovery points already saved in the vault prior to Vault Lock are not affected.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html#cfn-backup-backupvault-lockconfigurationtype-maxretentiondays */
  MaxRetentionDays?: number | Intrinsic
  /**
   * - The AWS Backup Vault Lock configuration that specifies the minimum retention period that the vault retains its recovery points. This setting can be useful if, for example, your organization's policies require you to retain certain data for at least seven years (2555 days).
   * - If this parameter is not specified, Vault Lock will not enforce a minimum retention period.
   * - If this parameter is specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or longer than the minimum retention period. If the job's retention period is shorter than that minimum retention period, then the vault fails that backup or copy job, and you should either modify your lifecycle settings or use a different vault. Recovery points already saved in the vault prior to Vault Lock are not affected.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html#cfn-backup-backupvault-lockconfigurationtype-minretentiondays */
  MinRetentionDays: number | Intrinsic
}

/**
 * Specifies an object containing SNS event notification properties for the target backup vault.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html */

export interface NotificationObjectType {
  /**
   * - An array of events that indicate the status of jobs to back up resources to the backup vault. For valid events, see [BackupVaultEvents](https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutBackupVaultNotifications.html#API_PutBackupVaultNotifications_RequestSyntax) in the _AWS Backup API Guide_.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html#cfn-backup-backupvault-notificationobjecttype-backupvaultevents */
  BackupVaultEvents: (string | Intrinsic)[]
  /**
   * - An ARN that uniquely identifies an Amazon Simple Notification Service (Amazon SNS) topic; for example, `arn:aws:sns:us-west-2:111122223333:MyTopic`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html#cfn-backup-backupvault-notificationobjecttype-snstopicarn */
  SNSTopicArn: string | Intrinsic
}

/**
 * Creates a logical container where backups are stored. A `CreateBackupVault` request includes a name, optionally one or more resource tags, an encryption key, and a request ID.
 * Do not include sensitive data, such as passport numbers, in the name of a backup vault.
 * For a sample AWS CloudFormation template, see the [AWS Backup Developer Guide](https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html#assigning-resources-cfn).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html */

export interface BackupBackupVault extends ResourceAttributes {
  Type: 'AWS::Backup::BackupVault'
  Properties: {
    /**
     * - A resource-based policy that is used to manage access permissions on the target backup vault.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html#cfn-backup-backupvault-accesspolicy */
    AccessPolicy?: any | Intrinsic
    /**
     * - The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9\-\_]{2,50}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html#cfn-backup-backupvault-backupvaultname */
    BackupVaultName: string | Intrinsic
    /**
     * - The tags to assign to the backup vault.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^.{1,128}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html#cfn-backup-backupvault-backupvaulttags */
    BackupVaultTags?: Record<string, string | Intrinsic>
    /**
     * - A server-side encryption key you can specify to encrypt your backups from services that support full AWS Backup management; for example, `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`. If you specify a key, you must specify its ARN, not its alias. If you do not specify a key, AWS Backup creates a KMS key for you by default.
     * - To learn which AWS Backup services support full AWS Backup management and how AWS Backup handles encryption for backups from services that do not yet support full AWS Backup, see [Encryption for backups in AWS Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/encryption.html)
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html#cfn-backup-backupvault-encryptionkeyarn */
    EncryptionKeyArn?: string | Intrinsic
    /**
     * - Configuration for [AWS Backup Vault Lock](https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html).
     * - _Required_: No
     * - _Type_: [LockConfigurationType](./aws-properties-backup-backupvault-lockconfigurationtype.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html#cfn-backup-backupvault-lockconfiguration */
    LockConfiguration?: LockConfigurationType
    /**
     * - The SNS event notifications for the specified backup vault.
     * - _Required_: No
     * - _Type_: [NotificationObjectType](./aws-properties-backup-backupvault-notificationobjecttype.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupvault.html#cfn-backup-backupvault-notifications */
    Notifications?: NotificationObjectType
  }
}
