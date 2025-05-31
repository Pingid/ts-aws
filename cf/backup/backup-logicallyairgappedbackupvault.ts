import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `NotificationObjectType` property type specifies Property description not available. for an [AWS::Backup::LogicallyAirGappedBackupVault](./aws-resource-backup-logicallyairgappedbackupvault.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-logicallyairgappedbackupvault.html */

export interface NotificationObjectType {
    /**
     * - An array of events that indicate the status of jobs to back up resources to the backup vault.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-logicallyairgappedbackupvault.html#cfn-backup-logicallyairgappedbackupvault-notificationobjecttype-backupvaultevents */
    "BackupVaultEvents": (string | Intrinsic)[];
    /**
     * - The Amazon Resource Name (ARN) that specifies the topic for a backup vault’s events; for example, `arn:aws:sns:us-west-2:111122223333:MyVaultTopic`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-logicallyairgappedbackupvault.html#cfn-backup-logicallyairgappedbackupvault-notificationobjecttype-snstopicarn */
    "SNSTopicArn": string | Intrinsic;
}

/**
 * Creates a logical container to where backups may be copied.
 * This request includes a name, the Region, the maximum number of retention days, the minimum number of retention days, and optionally can include tags and a creator request ID.
 * ###### Note
 * 
 * Do not include sensitive data, such as passport numbers, in the name of a backup vault.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-logicallyairgappedbackupvault.html */

export interface BackupLogicallyAirGappedBackupVault extends ResourceAttributes {
    "Type": "AWS::Backup::LogicallyAirGappedBackupVault";
    "Properties": {
        /**
         * - The backup vault access policy document in JSON format.
         * - _Required_: No
         * - _Type_: Json
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-logicallyairgappedbackupvault.html#cfn-backup-logicallyairgappedbackupvault-accesspolicy */
        "AccessPolicy"?: any | Intrinsic;
        /**
         * - The name of a logical container where backups are stored. Logically air-gapped backup vaults are identified by names that are unique to the account used to create them and the Region where they are created.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9\-\_]{2,50}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-logicallyairgappedbackupvault.html#cfn-backup-logicallyairgappedbackupvault-backupvaultname */
        "BackupVaultName": string | Intrinsic;
        /**
         * - The tags to assign to the vault.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `^.{1,128}$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-logicallyairgappedbackupvault.html#cfn-backup-logicallyairgappedbackupvault-backupvaulttags */
        "BackupVaultTags"?: Record<string, string | Intrinsic>;
        /**
         * - The maximum retention period that the vault retains its recovery points.
         * - _Required_: Yes
         * - _Type_: Integer
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-logicallyairgappedbackupvault.html#cfn-backup-logicallyairgappedbackupvault-maxretentiondays */
        "MaxRetentionDays": number | Intrinsic;
        /**
         * - This setting specifies the minimum retention period that the vault retains its recovery points.
         * - The minimum value accepted is 7 days.
         * - _Required_: Yes
         * - _Type_: Integer
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-logicallyairgappedbackupvault.html#cfn-backup-logicallyairgappedbackupvault-minretentiondays */
        "MinRetentionDays": number | Intrinsic;
        /**
         * - Returns event notifications for the specified backup vault.
         * - _Required_: No
         * - _Type_: [NotificationObjectType](./aws-properties-backup-logicallyairgappedbackupvault-notificationobjecttype.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-logicallyairgappedbackupvault.html#cfn-backup-logicallyairgappedbackupvault-notifications */
        "Notifications"?: NotificationObjectType;
    };
}