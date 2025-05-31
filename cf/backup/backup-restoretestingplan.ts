import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * `RecoveryPointSelection` has five parameters (three required and two optional). The values you specify determine which recovery point is included in the restore test. You must indicate with `Algorithm` if you want the latest recovery point within your `SelectionWindowDays` or if you want a random recovery point, and you must indicate through `IncludeVaults` from which vaults the recovery points can be chosen.
 * `Algorithm` (_required_) Valid values: "`LATEST_WITHIN_WINDOW`" or "`RANDOM_WITHIN_WINDOW`".
 * `Recovery point types` (_required_) Valid values: "`SNAPSHOT`" and/or "`CONTINUOUS`". Include `SNAPSHOT` to restore only snapshot recovery points; include `CONTINUOUS` to restore continuous recovery points (point in time restore / PITR); use both to restore either a snapshot or a continuous recovery point. The recovery point will be determined by the value for `Algorithm`.
 * `IncludeVaults` (_required_). You must include one or more backup vaults. Use the wildcard \["\*"\] or specific ARNs.
 * `SelectionWindowDays` (_optional_) Value must be an integer (in days) from 1 to 365. If not included, the value defaults to `30`.
 * `ExcludeVaults` (_optional_). You can choose to input one or more specific backup vault ARNs to exclude those vaults' contents from restore eligibility. Or, you can include a list of selectors. If this parameter and its value are not included, it defaults to empty list.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html */

export interface RestoreTestingRecoveryPointSelection {
    /**
     * - Acceptable values include "LATEST\_WITHIN\_WINDOW" or "RANDOM\_WITHIN\_WINDOW"
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `LATEST_WITHIN_WINDOW | RANDOM_WITHIN_WINDOW`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html#cfn-backup-restoretestingplan-restoretestingrecoverypointselection-algorithm */
    "Algorithm": string | Intrinsic;
    /**
     * - Accepted values include specific ARNs or list of selectors. Defaults to empty list if not listed.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html#cfn-backup-restoretestingplan-restoretestingrecoverypointselection-excludevaults */
    "ExcludeVaults"?: (string | Intrinsic)[];
    /**
     * - Accepted values include wildcard \["\*"\] or by specific ARNs or ARN wilcard replacement \["arn:aws:backup:us-west-2:123456789012:backup-vault:asdf", ...\] \["arn:aws:backup:\*:\*:backup-vault:asdf-\*", ...\]
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html#cfn-backup-restoretestingplan-restoretestingrecoverypointselection-includevaults */
    "IncludeVaults": (string | Intrinsic)[];
    /**
     * - These are the types of recovery points.
     * - Include `SNAPSHOT` to restore only snapshot recovery points; include `CONTINUOUS` to restore continuous recovery points (point in time restore / PITR); use both to restore either a snapshot or a continuous recovery point. The recovery point will be determined by the value for `Algorithm`.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html#cfn-backup-restoretestingplan-restoretestingrecoverypointselection-recoverypointtypes */
    "RecoveryPointTypes": (string | Intrinsic)[];
    /**
     * - Accepted values are integers from 1 to 365.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html#cfn-backup-restoretestingplan-restoretestingrecoverypointselection-selectionwindowdays */
    "SelectionWindowDays"?: number | Intrinsic;
}

/**
 * The tags to assign to the restore testing plan.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html */

export interface Tag {
    /**
     * - The tag key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html#cfn-backup-restoretestingplan-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html#cfn-backup-restoretestingplan-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Creates a restore testing plan.
 * The first of two steps to create a restore testing plan. After this request is successful, finish the procedure using CreateRestoreTestingSelection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html */

export interface BackupRestoreTestingPlan extends ResourceAttributes {
    "Type": "AWS::Backup::RestoreTestingPlan";
    "Properties": {
        /**
         * - The specified criteria to assign a set of resources, such as recovery point types or backup vaults.
         * - _Required_: Yes
         * - _Type_: [RestoreTestingRecoveryPointSelection](./aws-properties-backup-restoretestingplan-restoretestingrecoverypointselection.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html#cfn-backup-restoretestingplan-recoverypointselection */
        "RecoveryPointSelection": RestoreTestingRecoveryPointSelection;
        /**
         * - The RestoreTestingPlanName is a unique string that is the name of the restore testing plan. This cannot be changed after creation, and it must consist of only alphanumeric characters and underscores.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html#cfn-backup-restoretestingplan-restoretestingplanname */
        "RestoreTestingPlanName": string | Intrinsic;
        /**
         * - A CRON expression in specified timezone when a restore testing plan is executed. When no CRON expression is provided, AWS Backup will use the default expression `cron(0 5 ? * * *)`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html#cfn-backup-restoretestingplan-scheduleexpression */
        "ScheduleExpression": string | Intrinsic;
        /**
         * - Optional. This is the timezone in which the schedule expression is set. By default, ScheduleExpressions are in UTC. You can modify this to a specified timezone.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html#cfn-backup-restoretestingplan-scheduleexpressiontimezone */
        "ScheduleExpressionTimezone"?: string | Intrinsic;
        /**
         * - Defaults to 24 hours.
         * - A value in hours after a restore test is scheduled before a job will be canceled if it doesn't start successfully. This value is optional. If this value is included, this parameter has a maximum value of 168 hours (one week).
         * - _Required_: No
         * - _Type_: Integer
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html#cfn-backup-restoretestingplan-startwindowhours */
        "StartWindowHours"?: number | Intrinsic;
        /**
         * - Optional tags to include. A tag is a key-value pair you can use to manage, filter, and search for your resources. Allowed characters include UTF-8 letters,numbers, spaces, and the following characters: `+ - = . _ : /.`
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-backup-restoretestingplan-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingplan.html#cfn-backup-restoretestingplan-tags */
        "Tags"?: Tag[];
    };
}